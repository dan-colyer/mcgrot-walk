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
await page.goto(`http://127.0.0.1:${port}/mcgrots.html`,{waitUntil:'load'});
await page.waitForFunction(()=>!!window.__mcgrotsDebug);
await page.evaluate(()=>{window.__mcgrotsDebug.pauseAuto();window.__mcgrotsDebug.setMarkersVisible(false);});

const stats=(buf)=>{const p=PNG.sync.read(buf);let s=0,sq=0,dark=0,blown=0;const n=p.width*p.height;
 for(let i=0;i<n;i++){const o=i*4;const l=0.2126*p.data[o]+0.7152*p.data[o+1]+0.0722*p.data[o+2];s+=l;sq+=l*l;if(l<12)dark++;if(l>245)blown++;}
 const m=s/n;return {mean:m,sd:Math.sqrt(Math.max(0,sq/n-m*m)),dark:dark/n*100,blown:blown/n*100};};

const ids=await page.evaluate(()=>window.__mcgrotsDebug.anchorIds());
console.log('sun   hemi  exp  | mean   sd    dark%  blown%   (averaged over 5 shots)');
const grid=[];
for(const sun of [6,9,12,16,22]) for(const hemi of [1.5,3,5,8]) grid.push([sun,hemi,1.2]);
const out=[];
for(const [sun,hemi,exp] of grid){
  await page.evaluate(([s,h,e])=>window.__mcgrotsDebug.setGrade({sunIntensity:s,hemiIntensity:h,exposure:e}),[sun,hemi,exp]);
  let m=0,sd=0,dk=0,bl=0;
  for(const id of ids){
    await page.evaluate((a)=>{window.__mcgrotsDebug.snapTo(a);window.__mcgrotsDebug.stepFrames(2);},id);
    const st=stats(await page.screenshot({type:'png'}));
    m+=st.mean;sd+=st.sd;dk+=st.dark;bl+=st.blown;
  }
  const r={sun,hemi,exp,mean:m/5,sd:sd/5,dark:dk/5,blown:bl/5};
  out.push(r);
  console.log(`${String(sun).padStart(4)} ${String(hemi).padStart(5)} ${exp.toFixed(1)}  | ${r.mean.toFixed(1).padStart(5)} ${r.sd.toFixed(1).padStart(5)} ${r.dark.toFixed(1).padStart(6)} ${r.blown.toFixed(2).padStart(7)}`);
}
// target: warm but dark-ish per docs/STYLE.md; little pure black, no blowout
const ok=out.filter(r=>r.dark<8 && r.blown<0.5 && r.mean>=55 && r.mean<=95);
ok.sort((a,b)=>b.sd-a.sd);
console.log('\nin band (mean 55-95, dark<8%, blown<0.5%), best contrast first:');
for(const r of ok.slice(0,6)) console.log(`  sun ${r.sun} hemi ${r.hemi} -> mean ${r.mean.toFixed(1)} sd ${r.sd.toFixed(1)} dark ${r.dark.toFixed(1)}%`);
await browser.close(); server.kill();
