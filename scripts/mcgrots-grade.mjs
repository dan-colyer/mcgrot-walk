import { spawn } from 'child_process';
import { createServer } from 'net';
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import { LAUNCH_OPTS } from './launch.mjs';

import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const port = await new Promise((res)=>{const s=createServer();s.listen(0,'127.0.0.1',()=>{const p=s.address().port;s.close(()=>res(p));});});
const server = spawn('python3',[`${root}/scripts/serve.py`,String(port)],{cwd:`${root}/src`,stdio:'ignore'});
for(let i=0;i<100;i++){try{const r=await fetch(`http://127.0.0.1:${port}/`,{signal:AbortSignal.timeout(1500)});if(r.ok)break;}catch{}await new Promise(r=>setTimeout(r,100));}

const browser = await chromium.launch(LAUNCH_OPTS);
const page = await browser.newPage({viewport:{width:960,height:540}});
// ON THE SKINNED BODY. This swept with the default capsule until 2026-08-11 and
// that is how it certified a grade under which the CAST renders as a black
// silhouette: a capsule is a pale untextured primitive, the characters carry a
// dark map times ALBEDO_MULTIPLY 0.42, and the anchors' cameras sit BEHIND the
// actor — so the side the player always sees is the side away from the sun.
// Every whole-frame gate passed the whole time, because one small dark figure
// moves the frame mean by almost nothing. See the cast column below.
await page.goto(`http://127.0.0.1:${port}/mcgrots.html?body=skinned&archetype=rab`,{waitUntil:'load'});
await page.waitForFunction(()=>!!window.__mcgrotsDebug);
await page.evaluate(()=>{window.__mcgrotsDebug.pauseAuto();window.__mcgrotsDebug.setMarkersVisible(false);});

const stats=(buf)=>{const p=PNG.sync.read(buf);let s=0,sq=0,dark=0,blown=0;const n=p.width*p.height;
 for(let i=0;i<n;i++){const o=i*4;const l=0.2126*p.data[o]+0.7152*p.data[o+1]+0.0722*p.data[o+2];s+=l;sq+=l*l;if(l<12)dark++;if(l>245)blown++;}
 const m=s/n;return {mean:m,sd:Math.sqrt(Math.max(0,sq/n-m*m)),dark:dark/n*100,blown:blown/n*100};};

// THE CAST'S OWN LUMINANCE, isolated by hiding the actor and diffing. Every
// pixel that changes is the actor and nothing else, so this needs no mask, no
// depth buffer and no assumption about where in frame the figure is. It is the
// measurement whose absence let a black-silhouette cast through every gate.
//
// `readable` is the fraction of the actor's pixels above luminance 28 — dark
// enough to still be a dark coat in a dark world (docs/STYLE.md: the game
// supplies the darkness), light enough that the form is legible rather than a
// hole in the frame.
const CAST_READABLE_LUMA=28;
const castStats=async()=>{
  const on=PNG.sync.read(await page.screenshot({type:'png'}));
  await page.evaluate(()=>{window.__mcgrotsDebug.actor.group.visible=false;window.__mcgrotsDebug.stepFrames(1,0);});
  const off=PNG.sync.read(await page.screenshot({type:'png'}));
  await page.evaluate(()=>{window.__mcgrotsDebug.actor.group.visible=true;window.__mcgrotsDebug.stepFrames(1,0);});
  let n=0,sum=0,readable=0;
  const N=on.width*on.height;
  for(let i=0;i<N;i++){const o=i*4;
    if(on.data[o]===off.data[o]&&on.data[o+1]===off.data[o+1]&&on.data[o+2]===off.data[o+2])continue;
    const l=0.2126*on.data[o]+0.7152*on.data[o+1]+0.0722*on.data[o+2];
    n++;sum+=l;if(l>CAST_READABLE_LUMA)readable++;}
  return n?{px:n,mean:sum/n,readable:readable/n*100}:{px:0,mean:0,readable:0};
};

const ids=await page.evaluate(()=>window.__mcgrotsDebug.anchorIds());
console.log('sun  hemi albd fill | mean   sd    dark%  blown%  | cast  cast>28%   (5 shots)');
// ALBEDO IS IN THE GRID NOW. The first version swept light only and returned
// NONE for every pair — the cast's own reflectance was the term that mattered
// and it was not a variable. Sweeping a subset of the parameters and reporting
// "no setting works" is a statement about the grid, not about the scene.
const grid=[];
for(const sun of [6,9]) for(const hemi of [3,5]) for(const albedo of [0.42,0.7,1.0]) for(const f of [0,1.5,2.6,4,6]) grid.push([sun,hemi,1.2,albedo,f]);
const out=[];
for(const [sun,hemi,exp,albedo,fillI] of grid){
  await page.evaluate(([s,h,e,a,f])=>{window.__mcgrotsDebug.setGrade({sunIntensity:s,hemiIntensity:h,exposure:e,fillIntensity:f});window.__mcgrotsDebug.setCastAlbedo(a);},[sun,hemi,exp,albedo,fillI]);
  let m=0,sd=0,dk=0,bl=0,cm=0,cr=0;
  for(const id of ids){
    await page.evaluate((a)=>{window.__mcgrotsDebug.snapTo(a);window.__mcgrotsDebug.stepFrames(2);},id);
    const st=stats(await page.screenshot({type:'png'}));
    m+=st.mean;sd+=st.sd;dk+=st.dark;bl+=st.blown;
    const cs=await castStats();cm+=cs.mean;cr+=cs.readable;
  }
  const r={sun,hemi,exp,albedo,fillI,mean:m/5,sd:sd/5,dark:dk/5,blown:bl/5,cast:cm/5,castReadable:cr/5};
  out.push(r);
  console.log(`${String(sun).padStart(4)} ${String(hemi).padStart(5)} ${String(albedo).padStart(5)} ${String(fillI).padStart(4)} | ${r.mean.toFixed(1).padStart(5)} ${r.sd.toFixed(1).padStart(5)} ${r.dark.toFixed(1).padStart(6)} ${r.blown.toFixed(2).padStart(7)}  | ${r.cast.toFixed(1).padStart(5)} ${r.castReadable.toFixed(1).padStart(7)}`);
}
// target: warm but dark-ish per docs/STYLE.md; little pure black, no blowout
// The band now carries a CAST floor as well as a frame band. A grade that
// satisfies the frame and leaves the cast unreadable is the grade this project
// already shipped once, and the whole-frame numbers were green for it.
const ok=out.filter(r=>r.dark<8 && r.blown<0.5 && r.mean>=55 && r.mean<=95 && r.castReadable>=70);
ok.sort((a,b)=>b.sd-a.sd);
console.log('\nin band (mean 55-95, dark<8%, blown<0.5%, cast>28 in >=70% of its pixels),');
console.log('best frame contrast first:');
for(const r of ok.slice(0,6)) console.log(`  sun ${r.sun} hemi ${r.hemi} albedo ${r.albedo} fill ${r.fillI} -> mean ${r.mean.toFixed(1)} sd ${r.sd.toFixed(1)} dark ${r.dark.toFixed(1)}% cast ${r.cast.toFixed(1)} readable ${r.castReadable.toFixed(1)}%`);
if(!ok.length) console.log('  NONE. No (sun, hemi) pair in this grid makes the cast readable — the');
console.log(!ok.length?'  fault is not intensity. Look at direction, albedo, or the fill.':'');
await browser.close(); server.kill();
