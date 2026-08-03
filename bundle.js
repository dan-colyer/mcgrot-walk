(()=>{var jf=0,th=1,Qf=2;var Qo=1,ep=2,Wr=3,yn=0,fn=1,Ft=2,Si=0,Ns=1,Xi=2,nh=3,ih=4,tp=5;var is=100,np=101,ip=102,sp=103,rp=104,op=200,ap=201,cp=202,lp=203,oc=204,ac=205,up=206,hp=207,dp=208,fp=209,pp=210,mp=211,gp=212,xp=213,_p=214,cc=0,lc=1,uc=2,Ds=3,hc=4,dc=5,fc=6,pc=7,Hc=0,yp=1,vp=2,li=0,sh=1,rh=2,oh=3,ea=4,ah=5,ch=6,lh=7,Bu="attached",Mp="detached",uh=300,ds=301,Ks=302,Gc=303,Vc=304,ta=306,Kn=1e3,Yn=1001,Ir=1002,Wt=1003,Wc=1004;var $s=1005;var Xt=1006,Xr=1007;var ui=1008;var Ln=1009,hh=1010,dh=1011,qr=1012,Xc=1013,hi=1014,Hn=1015,Ei=1016,qc=1017,Yc=1018,Yr=1020,fh=35902,ph=35899,mh=1021,gh=1022,Gn=1023,_i=1026,fs=1027,Zc=1028,Kc=1029,ps=1030,$c=1031;var Jc=1033,na=33776,ia=33777,sa=33778,ra=33779,jc=35840,Qc=35841,el=35842,tl=35843,nl=36196,il=37492,sl=37496,rl=37488,ol=37489,oa=37490,al=37491,cl=37808,ll=37809,ul=37810,hl=37811,dl=37812,fl=37813,pl=37814,ml=37815,gl=37816,xl=37817,_l=37818,yl=37819,vl=37820,Ml=37821,bl=36492,Sl=36494,El=36495,Tl=36283,wl=36284,aa=36285,Al=36286;var Fs=2300,Us=2301,rc=2302,zu=2303,ku=2400,Hu=2401,Gu=2402,bp=2500;var xh=0,ca=1,Zr=2,Sp=3200;var la=0,Ep=1,qi="",tt="srgb",Tn="srgb-linear",bo="linear",vt="srgb";var Is=7680;var Vu=519,Tp=512,wp=513,Ap=514,Rl=515,Rp=516,Cp=517,Cl=518,Ip=519,mc=35044;var _h="300 es",si=2e3,Pr=2001;function Zg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Kg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pp(){let i=Lr("canvas");return i.style.display="block",i}var af={},Nr=null;function So(...i){let e="THREE."+i.shift();Nr?Nr("log",e,...i):console.log(e,...i)}function Lp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function We(...i){i=Lp(i);let e="THREE."+i.shift();if(Nr)Nr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Qe(...i){i=Lp(i);let e="THREE."+i.shift();if(Nr)Nr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ls(...i){let e=i.join(" ");e in af||(af[e]=!0,We(...i))}function Np(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Dp={[cc]:lc,[uc]:fc,[hc]:pc,[Ds]:dc,[lc]:cc,[fc]:uc,[pc]:hc,[dc]:Ds},yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cf=1234567,_o=Math.PI/180,Os=180/Math.PI;function Zn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function dt(i,e,t){return Math.max(e,Math.min(t,i))}function yh(i,e){return(i%e+e)%e}function $g(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Jg(i,e,t){return i!==e?(t-i)/(e-i):0}function yo(i,e,t){return(1-t)*i+t*e}function jg(i,e,t,n){return yo(i,e,1-Math.exp(-t*n))}function Qg(i,e=1){return e-Math.abs(yh(i,e*2)-e)}function ex(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function tx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function nx(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ix(i,e){return i+Math.random()*(e-i)}function sx(i){return i*(.5-Math.random())}function rx(i){i!==void 0&&(cf=i);let e=cf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ox(i){return i*_o}function ax(i){return i*Os}function cx(i){return(i&i-1)===0&&i!==0}function lx(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ux(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hx(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*p,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*p,a*l);break;case"ZYZ":i.set(c*p,c*f,a*u,a*l);break;default:We("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ii(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var $n={DEG2RAD:_o,RAD2DEG:Os,generateUUID:Zn,clamp:dt,euclideanModulo:yh,mapLinear:$g,inverseLerp:Jg,lerp:yo,damp:jg,pingpong:Qg,smoothstep:ex,smootherstep:tx,randInt:nx,randFloat:ix,randFloatSpread:sx,seededRandom:rx,degToRad:ox,radToDeg:ax,isPowerOfTwo:cx,ceilPowerOfTwo:lx,floorPowerOfTwo:ux,setQuaternionFromProperEuler:hx,normalize:bt,denormalize:ii},Te=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(h!==x||c!==d||l!==f||u!==p){let m=c*d+l*f+u*p+h*x;m<0&&(d=-d,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let _=Math.acos(m),M=Math.sin(_);g=Math.sin(g*_)/M,a=Math.sin(a*_)/M,c=c*g+d*a,l=l*g+f*a,u=u*g+p*a,h=h*g+x*a}else{c=c*g+d*a,l=l*g+f*a,u=u*g+p*a,h=h*g+x*a;let _=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=_,l*=_,u*=_,h*=_}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+u*h+c*f-l*d,e[t+1]=c*p+u*d+l*h-a*f,e[t+2]=l*p+u*f+a*d-c*h,e[t+3]=u*p-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),f=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"YZX":this._x=d*u*h+l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h-d*f*p;break;case"XZY":this._x=d*u*h-l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h+d*f*p;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return au.copy(this).projectOnVector(e),this.sub(au)}reflect(e){return this.sub(au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},au=new F,lf=new Pt,it=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],x=s[0],m=s[3],g=s[6],_=s[1],M=s[4],y=s[7],b=s[2],E=s[5],w=s[8];return r[0]=o*x+a*_+c*b,r[3]=o*m+a*M+c*E,r[6]=o*g+a*y+c*w,r[1]=l*x+u*_+h*b,r[4]=l*m+u*M+h*E,r[7]=l*g+u*y+h*w,r[2]=d*x+f*_+p*b,r[5]=d*m+f*M+p*E,r[8]=d*g+f*y+p*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,p=t*h+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=h*x,e[1]=(s*l-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cu.makeScale(e,t)),this}rotate(e){return Ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cu.makeRotation(-e)),this}translate(e,t){return Ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},cu=new it,uf=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hf=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dx(){let i={enabled:!0,workingColorSpace:Tn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(s.r=Cr(s.r),s.g=Cr(s.g),s.b=Cr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qi?bo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Tn]:{primaries:e,whitePoint:n,transfer:bo,toXYZ:uf,fromXYZ:hf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:tt},outputColorSpaceConfig:{drawingBufferColorSpace:tt}},[tt]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:uf,fromXYZ:hf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:tt}}}),i}var ht=dx();function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var hr,gc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hr===void 0&&(hr=Lr("canvas")),hr.width=e.width,hr.height=e.height;let s=hr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=hr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Lr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Oi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Oi(t[n]/255)*255):t[n]=Oi(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fx=0,Dr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(lu(s[o].image)):r.push(lu(s[o]))}else r=lu(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function lu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}var px=0,uu=new F,Qt=class i extends yi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Yn,s=Yn,r=Xt,o=ui,a=Gn,c=Ln,l=i.DEFAULT_ANISOTROPY,u=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=Zn(),this.name="",this.source=new Dr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(uu).x}get height(){return this.source.getSize(uu).y}get depth(){return this.source.getSize(uu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kn:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case Ir:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kn:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case Ir:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=uh;Qt.DEFAULT_ANISOTROPY=1;var St=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],p=c[9],x=c[2],m=c[6],g=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(p+m)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,y=(f+1)/2,b=(g+1)/2,E=(u+d)/4,w=(h+x)/4,v=(p+m)/4;return M>y&&M>b?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=E/n,r=w/n):y>b?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=v/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=w/r,s=v/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-p)*(m-p)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(h-x)/_,this.z=(d-u)/_,this.w=Math.acos((l+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xc=class extends yi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Qt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Dr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},zn=class extends xc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Eo=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var _c=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Je=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,c,l,u,h,d,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,d,f,p,x,m)}set(e,t,n,s,r,o,a,c,l,u,h,d,f,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/dr.setFromMatrixColumn(e,0).length(),r=1/dr.setFromMatrixColumn(e,1).length(),o=1/dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,p=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+p*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=p+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,p=l*u,x=l*h;t[0]=d+x*a,t[4]=p*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,p=l*u,x=l*h;t[0]=d-x*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*u,f=o*h,p=a*u,x=a*h;t[0]=c*u,t[4]=p*l-f,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=f*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,p=a*c,x=a*l;t[0]=c*u,t[4]=x-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+p,t[10]=d-x*h}else if(e.order==="XZY"){let d=o*c,f=o*l,p=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mx,e,gx)}lookAt(e,t,n){let s=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),Ji.crossVectors(n,On),Ji.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Ji.crossVectors(n,On)),Ji.normalize(),Aa.crossVectors(On,Ji),s[0]=Ji.x,s[4]=Aa.x,s[8]=On.x,s[1]=Ji.y,s[5]=Aa.y,s[9]=On.y,s[2]=Ji.z,s[6]=Aa.z,s[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],_=n[3],M=n[7],y=n[11],b=n[15],E=s[0],w=s[4],v=s[8],T=s[12],R=s[1],I=s[5],L=s[9],B=s[13],k=s[2],U=s[6],H=s[10],G=s[14],ne=s[3],oe=s[7],pe=s[11],V=s[15];return r[0]=o*E+a*R+c*k+l*ne,r[4]=o*w+a*I+c*U+l*oe,r[8]=o*v+a*L+c*H+l*pe,r[12]=o*T+a*B+c*G+l*V,r[1]=u*E+h*R+d*k+f*ne,r[5]=u*w+h*I+d*U+f*oe,r[9]=u*v+h*L+d*H+f*pe,r[13]=u*T+h*B+d*G+f*V,r[2]=p*E+x*R+m*k+g*ne,r[6]=p*w+x*I+m*U+g*oe,r[10]=p*v+x*L+m*H+g*pe,r[14]=p*T+x*B+m*G+g*V,r[3]=_*E+M*R+y*k+b*ne,r[7]=_*w+M*I+y*U+b*oe,r[11]=_*v+M*L+y*H+b*pe,r[15]=_*T+M*B+y*G+b*V,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],x=e[7],m=e[11],g=e[15],_=c*f-l*d,M=a*f-l*h,y=a*d-c*h,b=o*f-l*u,E=o*d-c*u,w=o*h-a*u;return t*(x*_-m*M+g*y)-n*(p*_-m*b+g*E)+s*(p*M-x*b+g*w)-r*(p*y-x*E+m*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-n*(r*u-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],x=e[13],m=e[14],g=e[15],_=t*a-n*o,M=t*c-s*o,y=t*l-r*o,b=n*c-s*a,E=n*l-r*a,w=s*l-r*c,v=u*x-h*p,T=u*m-d*p,R=u*g-f*p,I=h*m-d*x,L=h*g-f*x,B=d*g-f*m,k=_*B-M*L+y*I+b*R-E*T+w*v;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/k;return e[0]=(a*B-c*L+l*I)*U,e[1]=(s*L-n*B-r*I)*U,e[2]=(x*w-m*E+g*b)*U,e[3]=(d*E-h*w-f*b)*U,e[4]=(c*R-o*B-l*T)*U,e[5]=(t*B-s*R+r*T)*U,e[6]=(m*y-p*w-g*M)*U,e[7]=(u*w-d*y+f*M)*U,e[8]=(o*L-a*R+l*v)*U,e[9]=(n*R-t*L-r*v)*U,e[10]=(p*E-x*y+g*_)*U,e[11]=(h*y-u*E-f*_)*U,e[12]=(a*T-o*I-c*v)*U,e[13]=(t*I-n*T+s*v)*U,e[14]=(x*M-p*b-m*_)*U,e[15]=(u*b-h*M+d*_)*U,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,p=r*h,x=o*u,m=o*h,g=a*h,_=c*l,M=c*u,y=c*h,b=n.x,E=n.y,w=n.z;return s[0]=(1-(x+g))*b,s[1]=(f+y)*b,s[2]=(p-M)*b,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(d+g))*E,s[6]=(m+_)*E,s[7]=0,s[8]=(p+M)*w,s[9]=(m-_)*w,s[10]=(1-(d+x))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=dr.set(s[0],s[1],s[2]).length(),a=dr.set(s[4],s[5],s[6]).length(),c=dr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ei.copy(this);let l=1/o,u=1/a,h=1/c;return ei.elements[0]*=l,ei.elements[1]*=l,ei.elements[2]*=l,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=h,ei.elements[9]*=h,ei.elements[10]*=h,t.setFromRotationMatrix(ei),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=si,c=!1){let l=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),p,x;if(c)p=r/(o-r),x=o*r/(o-r);else if(a===si)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Pr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=si,c=!1){let l=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),p,x;if(c)p=1/(o-r),x=o/(o-r);else if(a===si)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Pr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},dr=new F,ei=new Je,mx=new F(0,0,0),gx=new F(1,1,1),Ji=new F,Aa=new F,On=new F,df=new Je,ff=new Pt,Yt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return df.makeRotationFromQuaternion(e),this.setFromRotationMatrix(df,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ff.setFromEuler(this),this.setFromQuaternion(ff,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yt.DEFAULT_ORDER="XYZ";var To=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},xx=0,pf=new F,fr=new Pt,Ii=new Je,Ra=new F,ro=new F,_x=new F,yx=new Pt,mf=new F(1,0,0),gf=new F(0,1,0),xf=new F(0,0,1),_f={type:"added"},vx={type:"removed"},pr={type:"childadded",child:null},hu={type:"childremoved",child:null},Lt=class i extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new Yt,n=new Pt,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Je},normalMatrix:{value:new it}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new To,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.multiply(fr),this}rotateOnWorldAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.premultiply(fr),this}rotateX(e){return this.rotateOnAxis(mf,e)}rotateY(e){return this.rotateOnAxis(gf,e)}rotateZ(e){return this.rotateOnAxis(xf,e)}translateOnAxis(e,t){return pf.copy(e).applyQuaternion(this.quaternion),this.position.add(pf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mf,e)}translateY(e){return this.translateOnAxis(gf,e)}translateZ(e){return this.translateOnAxis(xf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ra.copy(e):Ra.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(ro,Ra,this.up):Ii.lookAt(Ra,ro,this.up),this.quaternion.setFromRotationMatrix(Ii),s&&(Ii.extractRotation(s.matrixWorld),fr.setFromRotationMatrix(Ii),this.quaternion.premultiply(fr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_f),pr.child=e,this.dispatchEvent(pr),pr.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vx),hu.child=e,this.dispatchEvent(hu),hu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_f),pr.child=e,this.dispatchEvent(pr),pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,e,_x),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,yx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Lt.DEFAULT_UP=new F(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var st=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mx={type:"move"},Fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new st,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new st,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new st,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(l,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new st;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Fp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Ca={h:0,s:0,l:0};function du(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Me=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ht.workingColorSpace){if(e=yh(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=du(o,r,e+1/3),this.g=du(o,r,e),this.b=du(o,r,e-1/3)}return ht.colorSpaceToWorking(this,s),this}setStyle(e,t=tt){function n(r){r!==void 0&&parseFloat(r)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tt){let n=Fp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tt){return ht.workingToColorSpace(_n.copy(this),e),Math.round(dt(_n.r*255,0,255))*65536+Math.round(dt(_n.g*255,0,255))*256+Math.round(dt(_n.b*255,0,255))}getHexString(e=tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(_n.copy(this),t);let n=_n.r,s=_n.g,r=_n.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=tt){ht.workingToColorSpace(_n.copy(this),e);let t=_n.r,n=_n.g,s=_n.b;return e!==tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(Ca);let n=yo(ji.h,Ca.h,t),s=yo(ji.s,Ca.s,t),r=yo(ji.l,Ca.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new Me;Me.NAMES=Fp;var wo=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Me(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Bs=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yt,this.environmentIntensity=1,this.environmentRotation=new Yt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ti=new F,Pi=new F,fu=new F,Li=new F,mr=new F,gr=new F,yf=new F,pu=new F,mu=new F,gu=new F,xu=new St,_u=new St,yu=new St,Ui=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ti.subVectors(e,t),s.cross(ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ti.subVectors(s,t),Pi.subVectors(n,t),fu.subVectors(e,t);let o=ti.dot(ti),a=ti.dot(Pi),c=ti.dot(fu),l=Pi.dot(Pi),u=Pi.dot(fu),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(l*c-a*u)*d,p=(o*u-a*c)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Li)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Li.x),c.addScaledVector(o,Li.y),c.addScaledVector(a,Li.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return xu.setScalar(0),_u.setScalar(0),yu.setScalar(0),xu.fromBufferAttribute(e,t),_u.fromBufferAttribute(e,n),yu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(xu,r.x),o.addScaledVector(_u,r.y),o.addScaledVector(yu,r.z),o}static isFrontFacing(e,t,n,s){return ti.subVectors(n,t),Pi.subVectors(e,t),ti.cross(Pi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ti.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;mr.subVectors(s,n),gr.subVectors(r,n),pu.subVectors(e,n);let c=mr.dot(pu),l=gr.dot(pu);if(c<=0&&l<=0)return t.copy(n);mu.subVectors(e,s);let u=mr.dot(mu),h=gr.dot(mu);if(u>=0&&h<=u)return t.copy(s);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(mr,o);gu.subVectors(e,r);let f=mr.dot(gu),p=gr.dot(gu);if(p>=0&&f<=p)return t.copy(r);let x=f*l-c*p;if(x<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(gr,a);let m=u*p-f*h;if(m<=0&&h-u>=0&&f-p>=0)return yf.subVectors(r,s),a=(h-u)/(h-u+(f-p)),t.copy(s).addScaledVector(yf,a);let g=1/(m+x+d);return o=x*g,a=d*g,t.copy(n).addScaledVector(mr,o).addScaledVector(gr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vn=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ni):ni.fromBufferAttribute(r,o),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ia.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ia.copy(n.boundingBox)),Ia.applyMatrix4(e.matrixWorld),this.union(Ia)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oo),Pa.subVectors(this.max,oo),xr.subVectors(e.a,oo),_r.subVectors(e.b,oo),yr.subVectors(e.c,oo),Qi.subVectors(_r,xr),es.subVectors(yr,_r),Ms.subVectors(xr,yr);let t=[0,-Qi.z,Qi.y,0,-es.z,es.y,0,-Ms.z,Ms.y,Qi.z,0,-Qi.x,es.z,0,-es.x,Ms.z,0,-Ms.x,-Qi.y,Qi.x,0,-es.y,es.x,0,-Ms.y,Ms.x,0];return!vu(t,xr,_r,yr,Pa)||(t=[1,0,0,0,1,0,0,0,1],!vu(t,xr,_r,yr,Pa))?!1:(La.crossVectors(Qi,es),t=[La.x,La.y,La.z],vu(t,xr,_r,yr,Pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ni=[new F,new F,new F,new F,new F,new F,new F,new F],ni=new F,Ia=new vn,xr=new F,_r=new F,yr=new F,Qi=new F,es=new F,Ms=new F,oo=new F,Pa=new F,La=new F,bs=new F;function vu(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){bs.fromArray(i,r);let a=s.x*Math.abs(bs.x)+s.y*Math.abs(bs.y)+s.z*Math.abs(bs.z),c=e.dot(bs),l=t.dot(bs),u=n.dot(bs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Jt=new F,Na=new Te,bx=0,Dt=class extends yi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mc,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Na.fromBufferAttribute(this,t),Na.applyMatrix3(e),this.setXY(t,Na.x,Na.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mc&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ao=class extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ro=class extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var je=class extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sx=new vn,ao=new F,Mu=new F,Cn=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Sx.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ao.subVectors(e,this.center);let t=ao.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ao,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ao.copy(e.center).add(Mu)),this.expandByPoint(ao.copy(e.center).sub(Mu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ex=0,qn=new Je,bu=new Lt,vr=new F,Bn=new vn,co=new vn,an=new F,pt=class i extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zg(e)?Ro:Ao)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,n){return qn.makeTranslation(e,t,n),this.applyMatrix4(qn),this}scale(e,t,n){return qn.makeScale(e,t,n),this.applyMatrix4(qn),this}lookAt(e){return bu.lookAt(e),bu.updateMatrix(),this.applyMatrix4(bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new je(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];co.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Bn.min,co.min),Bn.expandByPoint(an),an.addVectors(Bn.max,co.max),Bn.expandByPoint(an)):(Bn.expandByPoint(co.min),Bn.expandByPoint(co.max))}Bn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)an.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(an));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)an.fromBufferAttribute(a,l),c&&(vr.fromBufferAttribute(e,l),an.add(vr)),s=Math.max(s,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Dt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let v=0;v<n.count;v++)a[v]=new F,c[v]=new F;let l=new F,u=new F,h=new F,d=new Te,f=new Te,p=new Te,x=new F,m=new F;function g(v,T,R){l.fromBufferAttribute(n,v),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,R),d.fromBufferAttribute(r,v),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,R),u.sub(l),h.sub(l),f.sub(d),p.sub(d);let I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(I),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(I),a[v].add(x),a[T].add(x),a[R].add(x),c[v].add(m),c[T].add(m),c[R].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let v=0,T=_.length;v<T;++v){let R=_[v],I=R.start,L=R.count;for(let B=I,k=I+L;B<k;B+=3)g(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let M=new F,y=new F,b=new F,E=new F;function w(v){b.fromBufferAttribute(s,v),E.copy(b);let T=a[v];M.copy(T),M.sub(b.multiplyScalar(b.dot(T))).normalize(),y.crossVectors(E,T);let I=y.dot(c[v])<0?-1:1;o.setXYZW(v,M.x,M.y,M.z,I)}for(let v=0,T=_.length;v<T;++v){let R=_[v],I=R.start,L=R.count;for(let B=I,k=I+L;B<k;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new F,r=new F,o=new F,a=new F,c=new F,l=new F,u=new F,h=new F;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u),f=0,p=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let g=0;g<u;g++)d[p++]=l[f++]}return new Dt(d,u,h)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},zs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=mc,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},En=new F,ss=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ii(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){So("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){So("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Tx=0,Mn=class extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=Ns,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oc,this.blendDst=ac,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(n.blending=this.blending),this.side!==yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==oc&&(n.blendSrc=this.blendSrc),this.blendDst!==ac&&(n.blendDst=this.blendDst),this.blendEquation!==is&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Me().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Te().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Te().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},vi=class extends Mn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Mr,lo=new F,br=new F,Sr=new F,Er=new Te,uo=new Te,Up=new Je,Da=new F,ho=new F,Fa=new F,vf=new Te,Su=new Te,Mf=new Te,Bi=class extends Lt{constructor(e=new vi){if(super(),this.isSprite=!0,this.type="Sprite",Mr===void 0){Mr=new pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new zs(t,5);Mr.setIndex([0,1,2,0,2,3]),Mr.setAttribute("position",new ss(n,3,0,!1)),Mr.setAttribute("uv",new ss(n,2,3,!1))}this.geometry=Mr,this.material=e,this.center=new Te(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Qe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),br.setFromMatrixScale(this.matrixWorld),Up.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Sr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&br.multiplyScalar(-Sr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ua(Da.set(-.5,-.5,0),Sr,o,br,s,r),Ua(ho.set(.5,-.5,0),Sr,o,br,s,r),Ua(Fa.set(.5,.5,0),Sr,o,br,s,r),vf.set(0,0),Su.set(1,0),Mf.set(1,1);let a=e.ray.intersectTriangle(Da,ho,Fa,!1,lo);if(a===null&&(Ua(ho.set(-.5,.5,0),Sr,o,br,s,r),Su.set(0,1),a=e.ray.intersectTriangle(Da,Fa,ho,!1,lo),a===null))return;let c=e.ray.origin.distanceTo(lo);c<e.near||c>e.far||t.push({distance:c,point:lo.clone(),uv:Ui.getInterpolation(lo,Da,ho,Fa,vf,Su,Mf,new Te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ua(i,e,t,n,s,r){Er.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(uo.x=r*Er.x-s*Er.y,uo.y=s*Er.x+r*Er.y):uo.copy(Er),i.copy(e),i.x+=uo.x,i.y+=uo.y,i.applyMatrix4(Up)}var Di=new F,Eu=new F,Oa=new F,ts=new F,Tu=new F,Ba=new F,wu=new F,ks=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Eu.copy(e).add(t).multiplyScalar(.5),Oa.copy(t).sub(e).normalize(),ts.copy(this.origin).sub(Eu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Oa),a=ts.dot(this.direction),c=-ts.dot(Oa),l=ts.lengthSq(),u=Math.abs(1-o*o),h,d,f,p;if(u>0)if(h=o*c-a,d=o*a-c,p=r*u,h>=0)if(d>=-p)if(d<=p){let x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-p?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=p?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Eu).addScaledVector(Oa,d),f}intersectSphere(e,t){Di.subVectors(e.center,this.origin);let n=Di.dot(this.direction),s=Di.dot(Di)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,n,s,r){Tu.subVectors(t,e),Ba.subVectors(n,e),wu.crossVectors(Tu,Ba);let o=this.direction.dot(wu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ts.subVectors(this.origin,e);let c=a*this.direction.dot(Ba.crossVectors(ts,Ba));if(c<0)return null;let l=a*this.direction.dot(Tu.cross(ts));if(l<0||c+l>o)return null;let u=-a*ts.dot(wu);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dn=class extends Mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},bf=new Je,Ss=new ks,za=new Cn,Sf=new F,ka=new F,Ha=new F,Ga=new F,Au=new F,Va=new F,Ef=new F,Wa=new F,He=class extends Lt{constructor(e=new pt,t=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Va.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(Au.fromBufferAttribute(h,e),o?Va.addScaledVector(Au,u):Va.addScaledVector(Au.sub(t),u))}t.add(Va)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(r),Ss.copy(e.ray).recast(e.near),!(za.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(za,Sf)===null||Ss.origin.distanceToSquared(Sf)>(e.far-e.near)**2))&&(bf.copy(r).invert(),Ss.copy(e.ray).applyMatrix4(bf),!(n.boundingBox!==null&&Ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,b=M;y<b;y+=3){let E=a.getX(y),w=a.getX(y+1),v=a.getX(y+2);s=Xa(this,g,e,n,l,u,h,E,w,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let _=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);s=Xa(this,o,e,n,l,u,h,_,M,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,b=M;y<b;y+=3){let E=y,w=y+1,v=y+2;s=Xa(this,g,e,n,l,u,h,E,w,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let _=m,M=m+1,y=m+2;s=Xa(this,o,e,n,l,u,h,_,M,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function wx(i,e,t,n,s,r,o,a){let c;if(e.side===fn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===yn,a),c===null)return null;Wa.copy(a),Wa.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Wa);return l<t.near||l>t.far?null:{distance:l,point:Wa.clone(),object:i}}function Xa(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,ka),i.getVertexPosition(c,Ha),i.getVertexPosition(l,Ga);let u=wx(i,e,t,n,ka,Ha,Ga,Ef);if(u){let h=new F;Ui.getBarycoord(Ef,ka,Ha,Ga,h),s&&(u.uv=Ui.getInterpolatedAttribute(s,a,c,l,h,new Te)),r&&(u.uv1=Ui.getInterpolatedAttribute(r,a,c,l,h,new Te)),o&&(u.normal=Ui.getInterpolatedAttribute(o,a,c,l,h,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new F,materialIndex:0};Ui.getNormal(ka,Ha,Ga,d.normal),u.face=d,u.barycoord=h}return u}var fo=new St,Tf=new St,wf=new St,Ax=new St,Af=new Je,qa=new F,Ru=new Cn,Rf=new Je,Cu=new ks,Co=class extends He{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Bu,this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new vn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qa),this.boundingBox.expandByPoint(qa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Cn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qa),this.boundingSphere.expandByPoint(qa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ru.copy(this.boundingSphere),Ru.applyMatrix4(s),e.ray.intersectsSphere(Ru)!==!1&&(Rf.copy(s).invert(),Cu.copy(e.ray).applyMatrix4(Rf),!(this.boundingBox!==null&&Cu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Cu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new St,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Bu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Mp?this.bindMatrixInverse.copy(this.bindMatrix).invert():We("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Tf.fromBufferAttribute(s.attributes.skinIndex,e),wf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(fo.copy(t),t.set(0,0,0,0)):(fo.set(...t,1),t.set(0,0,0)),fo.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=wf.getComponent(r);if(o!==0){let a=Tf.getComponent(r);Af.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Ax.copy(fo).applyMatrix4(Af),o)}}return t.isVector4&&(t.w=fo.w),t.applyMatrix4(this.bindMatrixInverse)}},Ur=class extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Or=class extends Qt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Wt,u=Wt,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Cf=new Je,Rx=new Je,Io=class i{constructor(e=[],t=[]){this.uuid=Zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){We("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Rx;Cf.multiplyMatrices(a,t[r]),Cf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Or(t,e,e,Gn,Hn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(We("Skeleton: No bone found with UUID:",r),o=new Ur),this.bones.push(o),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},rs=class extends Dt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Tr=new Je,If=new Je,Ya=[],Pf=new vn,Cx=new Je,po=new He,mo=new Cn,cn=class extends He{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new rs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Cx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Tr),Pf.copy(e.boundingBox).applyMatrix4(Tr),this.boundingBox.union(Pf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Tr),mo.copy(e.boundingSphere).applyMatrix4(Tr),this.boundingSphere.union(mo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(po.geometry=this.geometry,po.material=this.material,po.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mo.copy(this.boundingSphere),mo.applyMatrix4(n),e.ray.intersectsSphere(mo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Tr),If.multiplyMatrices(n,Tr),po.matrixWorld=If,po.raycast(e,Ya);for(let o=0,a=Ya.length;o<a;o++){let c=Ya[o];c.instanceId=r,c.object=this,t.push(c)}Ya.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new rs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Or(new Float32Array(s*this.count),s,this.count,Zc,Hn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Iu=new F,Ix=new F,Px=new it,gi=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Iu.subVectors(n,t).cross(Ix.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Iu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Px.getNormalMatrix(e),s=this.coplanarPoint(Iu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Es=new Cn,Lx=new Te(.5,.5),Za=new F,Br=class{constructor(e=new gi,t=new gi,n=new gi,s=new gi,r=new gi,o=new gi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=si,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],_=r[12],M=r[13],y=r[14],b=r[15];if(s[0].setComponents(l-o,f-u,g-p,b-_).normalize(),s[1].setComponents(l+o,f+u,g+p,b+_).normalize(),s[2].setComponents(l+a,f+h,g+x,b+M).normalize(),s[3].setComponents(l-a,f-h,g-x,b-M).normalize(),n)s[4].setComponents(c,d,m,y).normalize(),s[5].setComponents(l-c,f-d,g-m,b-y).normalize();else if(s[4].setComponents(l-c,f-d,g-m,b-y).normalize(),t===si)s[5].setComponents(l+c,f+d,g+m,b+y).normalize();else if(t===Pr)s[5].setComponents(c,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){Es.center.set(0,0,0);let t=Lx.distanceTo(e.center);return Es.radius=.7071067811865476+t,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Za.x=s.normal.x>0?e.max.x:e.min.x,Za.y=s.normal.y>0?e.max.y:e.min.y,Za.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Za)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var os=class extends Mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},yc=new F,vc=new F,Lf=new Je,go=new ks,Ka=new Cn,Pu=new F,Nf=new F,Hs=class extends Lt{constructor(e=new pt,t=new os){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)yc.fromBufferAttribute(t,s-1),vc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=yc.distanceTo(vc);e.setAttribute("lineDistance",new je(n,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(s),Ka.radius+=r,e.ray.intersectsSphere(Ka)===!1)return;Lf.copy(s).invert(),go.copy(e.ray).applyMatrix4(Lf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=l){let g=u.getX(x),_=u.getX(x+1),M=$a(this,e,go,c,g,_,x);M&&t.push(M)}if(this.isLineLoop){let x=u.getX(p-1),m=u.getX(f),g=$a(this,e,go,c,x,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=l){let g=$a(this,e,go,c,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=$a(this,e,go,c,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function $a(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(yc.fromBufferAttribute(a,s),vc.fromBufferAttribute(a,r),t.distanceSqToSegment(yc,vc,Pu,Nf)>n)return;Pu.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Pu);if(!(l<e.near||l>e.far))return{distance:l,point:Nf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Df=new F,Ff=new F,Gs=class extends Hs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Df.fromBufferAttribute(t,s),Ff.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Df.distanceTo(Ff);e.setAttribute("lineDistance",new je(n,1))}else We("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Po=class extends Hs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},as=class extends Mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Uf=new Je,Wu=new ks,Ja=new Cn,ja=new F,Vs=class extends Lt{constructor(e=new pt,t=new as){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(s),Ja.radius+=r,e.ray.intersectsSphere(Ja)===!1)return;Uf.copy(s).invert(),Wu.copy(e.ray).applyMatrix4(Uf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let p=d,x=f;p<x;p++){let m=l.getX(p);ja.fromBufferAttribute(h,m),Of(ja,m,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let p=d,x=f;p<x;p++)ja.fromBufferAttribute(h,p),Of(ja,p,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Of(i,e,t,n,s,r,o){let a=Wu.distanceSqToPoint(i);if(a<t){let c=new F;Wu.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var zr=class extends Qt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Wt,this.minFilter=Wt,this.generateMipmaps=!1,this.needsUpdate=!0}};var Lo=class extends Qt{constructor(e=[],t=ds,n,s,r,o,a,c,l,u){super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Et=class extends Qt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var zi=class extends Qt{constructor(e,t,n=hi,s,r,o,a=Wt,c=Wt,l,u=_i,h=1){if(u!==_i&&u!==fs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Mc=class extends zi{constructor(e,t=hi,n=ds,s,r,o=Wt,a=Wt,c,l=_i){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},No=class extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},et=class i extends pt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new je(l,3)),this.setAttribute("normal",new je(u,3)),this.setAttribute("uv",new je(h,2));function p(x,m,g,_,M,y,b,E,w,v,T){let R=y/w,I=b/v,L=y/2,B=b/2,k=E/2,U=w+1,H=v+1,G=0,ne=0,oe=new F;for(let pe=0;pe<H;pe++){let V=pe*I-B;for(let K=0;K<U;K++){let de=K*R-L;oe[x]=de*_,oe[m]=V*M,oe[g]=k,l.push(oe.x,oe.y,oe.z),oe[x]=0,oe[m]=0,oe[g]=E>0?1:-1,u.push(oe.x,oe.y,oe.z),h.push(K/w),h.push(1-pe/v),G+=1}}for(let pe=0;pe<v;pe++)for(let V=0;V<w;V++){let K=d+V+U*pe,de=d+V+U*(pe+1),be=d+(V+1)+U*(pe+1),we=d+(V+1)+U*pe;c.push(K,de,we),c.push(de,be,we),ne+=6}a.addGroup(f,ne,T),f+=ne,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var wn=class i extends pt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],p=0,x=[],m=n/2,g=0;_(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new je(h,3)),this.setAttribute("normal",new je(d,3)),this.setAttribute("uv",new je(f,2));function _(){let y=new F,b=new F,E=0,w=(t-e)/n;for(let v=0;v<=r;v++){let T=[],R=v/r,I=R*(t-e)+e;for(let L=0;L<=s;L++){let B=L/s,k=B*c+a,U=Math.sin(k),H=Math.cos(k);b.x=I*U,b.y=-R*n+m,b.z=I*H,h.push(b.x,b.y,b.z),y.set(U,w,H).normalize(),d.push(y.x,y.y,y.z),f.push(B,1-R),T.push(p++)}x.push(T)}for(let v=0;v<s;v++)for(let T=0;T<r;T++){let R=x[T][v],I=x[T+1][v],L=x[T+1][v+1],B=x[T][v+1];(e>0||T!==0)&&(u.push(R,I,B),E+=3),(t>0||T!==r-1)&&(u.push(I,L,B),E+=3)}l.addGroup(g,E,0),g+=E}function M(y){let b=p,E=new Te,w=new F,v=0,T=y===!0?e:t,R=y===!0?1:-1;for(let L=1;L<=s;L++)h.push(0,m*R,0),d.push(0,R,0),f.push(.5,.5),p++;let I=p;for(let L=0;L<=s;L++){let k=L/s*c+a,U=Math.cos(k),H=Math.sin(k);w.x=T*H,w.y=m*R,w.z=T*U,h.push(w.x,w.y,w.z),d.push(0,R,0),E.x=U*.5+.5,E.y=H*.5*R+.5,f.push(E.x,E.y),p++}for(let L=0;L<s;L++){let B=b+L,k=I+L;y===!0?u.push(k,k+1,B):u.push(k+1,k,B),v+=3}l.addGroup(g,v,y===!0?1:2),g+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},cs=class i extends wn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){We("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Te:new F);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new F,s=[],r=[],o=[],a=new F,c=new Je;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new F)}r[0]=new F,o[0]=new F;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(dt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(dt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},kr=class extends kn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Te){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},bc=class extends kr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function vh(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Bf=new F,zf=new F,Lu=new vh,Nu=new vh,Du=new vh,Sc=class extends kn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(zf.subVectors(s[0],s[1]).add(s[0]),l=zf);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Bf.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Bf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Lu.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,p,x,m),Nu.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,p,x,m),Du.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,p,x,m)}else this.curveType==="catmullrom"&&(Lu.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Nu.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Du.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Lu.calc(c),Nu.calc(c),Du.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function kf(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Nx(i,e){let t=1-i;return t*t*e}function Dx(i,e){return 2*(1-i)*i*e}function Fx(i,e){return i*i*e}function vo(i,e,t,n){return Nx(i,e)+Dx(i,t)+Fx(i,n)}function Ux(i,e){let t=1-i;return t*t*t*e}function Ox(i,e){let t=1-i;return 3*t*t*i*e}function Bx(i,e){return 3*(1-i)*i*i*e}function zx(i,e){return i*i*i*e}function Mo(i,e,t,n,s){return Ux(i,e)+Ox(i,t)+Bx(i,n)+zx(i,s)}var Do=class extends kn{constructor(e=new Te,t=new Te,n=new Te,s=new Te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Te){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Mo(e,s.x,r.x,o.x,a.x),Mo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ec=class extends kn{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Mo(e,s.x,r.x,o.x,a.x),Mo(e,s.y,r.y,o.y,a.y),Mo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fo=class extends kn{constructor(e=new Te,t=new Te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Te){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tc=class extends kn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uo=class extends kn{constructor(e=new Te,t=new Te,n=new Te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Te){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(vo(e,s.x,r.x,o.x),vo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wc=class extends kn{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(vo(e,s.x,r.x,o.x),vo(e,s.y,r.y,o.y),vo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oo=class extends kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Te){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(kf(a,c.x,l.x,u.x,h.x),kf(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Te().fromArray(s))}return this}},Xu=Object.freeze({__proto__:null,ArcCurve:bc,CatmullRomCurve3:Sc,CubicBezierCurve:Do,CubicBezierCurve3:Ec,EllipseCurve:kr,LineCurve:Fo,LineCurve3:Tc,QuadraticBezierCurve:Uo,QuadraticBezierCurve3:wc,SplineCurve:Oo}),Ac=class extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Xu[s.type]().fromJSON(s))}return this}},Bo=class extends Ac{constructor(e){super(),this.type="Path",this.currentPoint=new Te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Fo(this.currentPoint.clone(),new Te(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Uo(this.currentPoint.clone(),new Te(e,t),new Te(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Do(this.currentPoint.clone(),new Te(e,t),new Te(n,s),new Te(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Oo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new kr(e,t,n,s,r,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Hr=class extends Bo{constructor(e){super(e),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Bo().fromJSON(s))}return this}};function kx(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Op(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Xx(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let u=a,h=c;for(let d=t;d<s;d+=t){let f=i[d],p=i[d+1];f<a&&(a=f),p<c&&(c=p),f>u&&(u=f),p>h&&(h=p)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return zo(r,o,t,a,c,l,0),o}function Op(i,e,t,n,s){let r;if(s===n_(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Hf(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Hf(o/n|0,i[o],i[o+1],r);return r&&Gr(r,r.next)&&(Ho(r),r=r.next),r}function Ws(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Gr(t,t.next)||Vt(t.prev,t,t.next)===0)){if(Ho(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function zo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&$x(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Gx(i,n,s,r):Hx(i)){e.push(c.i,i.i,l.i),Ho(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Vx(Ws(i),e),zo(i,e,t,n,s,r,2)):o===2&&Wx(i,e,t,n,s,r):zo(Ws(i),e,t,n,s,r,1);break}}}function Hx(i){let e=i.prev,t=i,n=i.next;if(Vt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=Math.min(s,r,o),h=Math.min(a,c,l),d=Math.max(s,r,o),f=Math.max(a,c,l),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&xo(s,a,r,c,o,l,p.x,p.y)&&Vt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Gx(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Vt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,f=Math.min(a,c,l),p=Math.min(u,h,d),x=Math.max(a,c,l),m=Math.max(u,h,d),g=qu(f,p,e,t,n),_=qu(x,m,e,t,n),M=i.prevZ,y=i.nextZ;for(;M&&M.z>=g&&y&&y.z<=_;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&xo(a,u,c,h,l,d,M.x,M.y)&&Vt(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&xo(a,u,c,h,l,d,y.x,y.y)&&Vt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=g;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&xo(a,u,c,h,l,d,M.x,M.y)&&Vt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&xo(a,u,c,h,l,d,y.x,y.y)&&Vt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Vx(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Gr(n,s)&&zp(n,t,t.next,s)&&ko(n,s)&&ko(s,n)&&(e.push(n.i,t.i,s.i),Ho(t),Ho(t.next),t=i=s),t=t.next}while(t!==i);return Ws(t)}function Wx(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Qx(o,a)){let c=kp(o,a);o=Ws(o,o.next),c=Ws(c,c.next),zo(o,e,t,n,s,r,0),zo(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Xx(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Op(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(jx(l))}s.sort(qx);for(let r=0;r<s.length;r++)t=Yx(s[r],t);return t}function qx(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Yx(i,e){let t=Zx(i,e);if(!t)return e;let n=kp(t,i);return Ws(n,n.next),Ws(t,t.next)}function Zx(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Gr(i,t))return t;do{if(Gr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Bp(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let h=Math.abs(s-t.y)/(n-t.x);ko(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Kx(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function Kx(i,e){return Vt(i.prev,i,e.prev)<0&&Vt(e.next,i,i.next)<0}function $x(i,e,t,n){let s=i;do s.z===0&&(s.z=qu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Jx(s)}function Jx(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function qu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function jx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Bp(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function xo(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Bp(i,e,t,n,s,r,o,a)}function Qx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!e_(i,e)&&(ko(i,e)&&ko(e,i)&&t_(i,e)&&(Vt(i.prev,i,e.prev)||Vt(i,e.prev,e))||Gr(i,e)&&Vt(i.prev,i,i.next)>0&&Vt(e.prev,e,e.next)>0)}function Vt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Gr(i,e){return i.x===e.x&&i.y===e.y}function zp(i,e,t,n){let s=ec(Vt(i,e,t)),r=ec(Vt(i,e,n)),o=ec(Vt(t,n,i)),a=ec(Vt(t,n,e));return!!(s!==r&&o!==a||s===0&&Qa(i,t,e)||r===0&&Qa(i,n,e)||o===0&&Qa(t,i,n)||a===0&&Qa(t,e,n))}function Qa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ec(i){return i>0?1:i<0?-1:0}function e_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&zp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ko(i,e){return Vt(i.prev,i,i.next)<0?Vt(i,e,i.next)>=0&&Vt(i,i.prev,e)>=0:Vt(i,e,i.prev)<0||Vt(i,i.next,e)<0}function t_(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function kp(i,e){let t=Yu(i.i,i.x,i.y),n=Yu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Hf(i,e,t,n){let s=Yu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ho(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Yu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function n_(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Zu=class{static triangulate(e,t,n=2){return kx(e,t,n)}},Ps=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Gf(e),Vf(n,e);let o=e.length;t.forEach(Gf);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Vf(n,t[c]);let a=Zu.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Gf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Vf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Go=class i extends pt{constructor(e=new Hr([new Te(.5,.5),new Te(-.5,.5),new Te(-.5,-.5),new Te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new je(s,3)),this.setAttribute("uv",new je(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:i_,M,y=!1,b,E,w,v;if(g){M=g.getSpacedPoints(u),y=!0,d=!1;let te=g.isCatmullRomCurve3?g.closed:!1;b=g.computeFrenetFrames(u,te),E=new F,w=new F,v=new F}d||(m=0,f=0,p=0,x=0);let T=a.extractPoints(l),R=T.shape,I=T.holes;if(!Ps.isClockWise(R)){R=R.reverse();for(let te=0,ue=I.length;te<ue;te++){let ae=I[te];Ps.isClockWise(ae)&&(I[te]=ae.reverse())}}function B(te){let ae=10000000000000001e-36,me=te[0];for(let J=1;J<=te.length;J++){let he=J%te.length,ge=te[he],De=ge.x-me.x,Ce=ge.y-me.y,N=De*De+Ce*Ce,Le=Math.max(Math.abs(ge.x),Math.abs(ge.y),Math.abs(me.x),Math.abs(me.y)),Ue=ae*Le*Le;if(N<=Ue){te.splice(he,1),J--;continue}me=ge}}B(R),I.forEach(B);let k=I.length,U=R;for(let te=0;te<k;te++){let ue=I[te];R=R.concat(ue)}function H(te,ue,ae){return ue||Qe("ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(ue,ae)}let G=R.length;function ne(te,ue,ae){let me,J,he,ge=te.x-ue.x,De=te.y-ue.y,Ce=ae.x-te.x,N=ae.y-te.y,Le=ge*ge+De*De,Ue=ge*N-De*Ce;if(Math.abs(Ue)>Number.EPSILON){let C=Math.sqrt(Le),S=Math.sqrt(Ce*Ce+N*N),P=ue.x-De/C,D=ue.y+ge/C,O=ae.x-N/S,W=ae.y+Ce/S,se=((O-P)*N-(W-D)*Ce)/(ge*N-De*Ce);me=P+ge*se-te.x,J=D+De*se-te.y;let q=me*me+J*J;if(q<=2)return new Te(me,J);he=Math.sqrt(q/2)}else{let C=!1;ge>Number.EPSILON?Ce>Number.EPSILON&&(C=!0):ge<-Number.EPSILON?Ce<-Number.EPSILON&&(C=!0):Math.sign(De)===Math.sign(N)&&(C=!0),C?(me=-De,J=ge,he=Math.sqrt(Le)):(me=ge,J=De,he=Math.sqrt(Le/2))}return new Te(me/he,J/he)}let oe=[];for(let te=0,ue=U.length,ae=ue-1,me=te+1;te<ue;te++,ae++,me++)ae===ue&&(ae=0),me===ue&&(me=0),oe[te]=ne(U[te],U[ae],U[me]);let pe=[],V,K=oe.concat();for(let te=0,ue=k;te<ue;te++){let ae=I[te];V=[];for(let me=0,J=ae.length,he=J-1,ge=me+1;me<J;me++,he++,ge++)he===J&&(he=0),ge===J&&(ge=0),V[me]=ne(ae[me],ae[he],ae[ge]);pe.push(V),K=K.concat(V)}let de;if(m===0)de=Ps.triangulateShape(U,I);else{let te=[],ue=[];for(let ae=0;ae<m;ae++){let me=ae/m,J=f*Math.cos(me*Math.PI/2),he=p*Math.sin(me*Math.PI/2)+x;for(let ge=0,De=U.length;ge<De;ge++){let Ce=H(U[ge],oe[ge],he);_e(Ce.x,Ce.y,-J),me===0&&te.push(Ce)}for(let ge=0,De=k;ge<De;ge++){let Ce=I[ge];V=pe[ge];let N=[];for(let Le=0,Ue=Ce.length;Le<Ue;Le++){let C=H(Ce[Le],V[Le],he);_e(C.x,C.y,-J),me===0&&N.push(C)}me===0&&ue.push(N)}}de=Ps.triangulateShape(te,ue)}let be=de.length,we=p+x;for(let te=0;te<G;te++){let ue=d?H(R[te],K[te],we):R[te];y?(w.copy(b.normals[0]).multiplyScalar(ue.x),E.copy(b.binormals[0]).multiplyScalar(ue.y),v.copy(M[0]).add(w).add(E),_e(v.x,v.y,v.z)):_e(ue.x,ue.y,0)}for(let te=1;te<=u;te++)for(let ue=0;ue<G;ue++){let ae=d?H(R[ue],K[ue],we):R[ue];y?(w.copy(b.normals[te]).multiplyScalar(ae.x),E.copy(b.binormals[te]).multiplyScalar(ae.y),v.copy(M[te]).add(w).add(E),_e(v.x,v.y,v.z)):_e(ae.x,ae.y,h/u*te)}for(let te=m-1;te>=0;te--){let ue=te/m,ae=f*Math.cos(ue*Math.PI/2),me=p*Math.sin(ue*Math.PI/2)+x;for(let J=0,he=U.length;J<he;J++){let ge=H(U[J],oe[J],me);_e(ge.x,ge.y,h+ae)}for(let J=0,he=I.length;J<he;J++){let ge=I[J];V=pe[J];for(let De=0,Ce=ge.length;De<Ce;De++){let N=H(ge[De],V[De],me);y?_e(N.x,N.y+M[u-1].y,M[u-1].x+ae):_e(N.x,N.y,h+ae)}}}Z(),ee();function Z(){let te=s.length/3;if(d){let ue=0,ae=G*ue;for(let me=0;me<be;me++){let J=de[me];ve(J[2]+ae,J[1]+ae,J[0]+ae)}ue=u+m*2,ae=G*ue;for(let me=0;me<be;me++){let J=de[me];ve(J[0]+ae,J[1]+ae,J[2]+ae)}}else{for(let ue=0;ue<be;ue++){let ae=de[ue];ve(ae[2],ae[1],ae[0])}for(let ue=0;ue<be;ue++){let ae=de[ue];ve(ae[0]+G*u,ae[1]+G*u,ae[2]+G*u)}}n.addGroup(te,s.length/3-te,0)}function ee(){let te=s.length/3,ue=0;$(U,ue),ue+=U.length;for(let ae=0,me=I.length;ae<me;ae++){let J=I[ae];$(J,ue),ue+=J.length}n.addGroup(te,s.length/3-te,1)}function $(te,ue){let ae=te.length;for(;--ae>=0;){let me=ae,J=ae-1;J<0&&(J=te.length-1);for(let he=0,ge=u+m*2;he<ge;he++){let De=G*he,Ce=G*(he+1),N=ue+me+De,Le=ue+J+De,Ue=ue+J+Ce,C=ue+me+Ce;Se(N,Le,Ue,C)}}}function _e(te,ue,ae){c.push(te),c.push(ue),c.push(ae)}function ve(te,ue,ae){Y(te),Y(ue),Y(ae);let me=s.length/3,J=_.generateTopUV(n,s,me-3,me-2,me-1);fe(J[0]),fe(J[1]),fe(J[2])}function Se(te,ue,ae,me){Y(te),Y(ue),Y(me),Y(ue),Y(ae),Y(me);let J=s.length/3,he=_.generateSideWallUV(n,s,J-6,J-3,J-2,J-1);fe(he[0]),fe(he[1]),fe(he[3]),fe(he[1]),fe(he[2]),fe(he[3])}function Y(te){s.push(c[te*3+0]),s.push(c[te*3+1]),s.push(c[te*3+2])}function fe(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return s_(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Xu[s.type]().fromJSON(s)),new i(n,e.options)}},i_={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new Te(r,o),new Te(a,c),new Te(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Te(o,1-c),new Te(l,1-h),new Te(d,1-p),new Te(x,1-g)]:[new Te(a,1-c),new Te(u,1-h),new Te(f,1-p),new Te(m,1-g)]}};function s_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ot=class i extends pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,f=[],p=[],x=[],m=[];for(let g=0;g<u;g++){let _=g*d-o;for(let M=0;M<l;M++){let y=M*h-r;p.push(y,-_,0),x.push(0,0,1),m.push(M/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let _=0;_<a;_++){let M=_+l*g,y=_+l*(g+1),b=_+1+l*(g+1),E=_+1+l*g;f.push(M,y,E),f.push(y,b,E)}this.setIndex(f),this.setAttribute("position",new je(p,3)),this.setAttribute("normal",new je(x,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var ri=class i extends pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new F,d=new F,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let _=[],M=g/n,y=o+M*a,b=e*Math.cos(y),E=Math.sqrt(e*e-b*b),w=0;g===0&&o===0?w=.5/t:g===n&&c===Math.PI&&(w=-.5/t);for(let v=0;v<=t;v++){let T=v/t,R=s+T*r;h.x=-E*Math.cos(R),h.y=b,h.z=E*Math.sin(R),p.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(T+w,1-M),_.push(l++)}u.push(_)}for(let g=0;g<n;g++)for(let _=0;_<t;_++){let M=u[g][_+1],y=u[g][_],b=u[g+1][_],E=u[g+1][_+1];(g!==0||o>0)&&f.push(M,y,E),(g!==n-1||c<Math.PI)&&f.push(y,b,E)}this.setIndex(f),this.setAttribute("position",new je(p,3)),this.setAttribute("normal",new je(x,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Js(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Wf(s))s.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Wf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function bn(i){let e={};for(let t=0;t<i.length;t++){let n=Js(i[t]);for(let s in n)e[s]=n[s]}return e}function Wf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function r_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Mh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var Hp={clone:Js,merge:bn},o_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,An=class extends Mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o_,this.fragmentShader=a_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=r_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Me().setHex(s.value);break;case"v2":this.uniforms[n].value=new Te().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new St().fromArray(s.value);break;case"m3":this.uniforms[n].value=new it().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Je().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Vr=class extends An{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Mi=class extends Mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=la,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},In=class extends Mi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ze=class extends Mn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=la,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.combine=Hc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Rc=class extends Mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Cc=class extends Mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function tc(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function c_(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Xf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function l_(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var bi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ic=class extends bi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ku,endingEnd:ku}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hu:r=e,a=2*t-n;break;case Gu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Hu:o=e,c=2*n-t;break;case Gu:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,_=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,M=(-1-f)*m+(1.5+f)*x+.5*p,y=f*m-f*x;for(let b=0;b!==a;++b)r[b]=g*o[u+b]+_*o[l+b]+M*o[c+b]+y*o[h+b];return r}},Pc=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}},Lc=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Nc=class extends bi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(n-t)/(s-t),x=1-p;for(let m=0;m!==a;++m)r[m]=o[l+m]*x+o[c+m]*p;return r}let d=a*2,f=e-1;for(let p=0;p!==a;++p){let x=o[l+p],m=o[c+p],g=f*d+p*2,_=h[g],M=h[g+1],y=e*d+p*2,b=u[y],E=u[y+1],w=(n-t)/(s-t),v,T,R,I,L;for(let B=0;B<8;B++){v=w*w,T=v*w,R=1-w,I=R*R,L=I*R;let U=L*t+3*I*w*_+3*R*v*b+T*s-n;if(Math.abs(U)<1e-10)break;let H=3*I*(_-t)+6*R*w*(b-_)+3*v*(s-b);if(Math.abs(H)<1e-10)break;w=w-U/H,w=Math.max(0,Math.min(1,w))}r[p]=L*x+3*I*w*M+3*R*v*E+T*m}return r}},Pn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=tc(t,this.TimeBufferType),this.values=tc(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:tc(e.times,Array),values:tc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ic(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Nc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Fs:t=this.InterpolantFactoryMethodDiscrete;break;case Us:t=this.InterpolantFactoryMethodLinear;break;case rc:t=this.InterpolantFactoryMethodSmooth;break;case zu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return We("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fs;case this.InterpolantFactoryMethodLinear:return Us;case this.InterpolantFactoryMethodSmooth:return rc;case this.InterpolantFactoryMethodBezier:return zu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Qe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Qe("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Qe("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Kg(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Qe("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===rc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{let h=a*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){let x=t[h+p];if(x!==t[d+p]||x!==t[f+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Pn.prototype.ValueTypeName="";Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=Us;var ki=class extends Pn{constructor(e,t,n){super(e,t,n)}};ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=Fs;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Vo=class extends Pn{constructor(e,t,n,s){super(e,t,n,s)}};Vo.prototype.ValueTypeName="color";var Hi=class extends Pn{constructor(e,t,n,s){super(e,t,n,s)}};Hi.prototype.ValueTypeName="number";var Dc=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let u=l+a;l!==u;l+=4)Pt.slerpFlat(r,0,o,l-a,o,l,c);return r}},Gi=class extends Pn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Dc(this.times,this.values,this.getValueSize(),e)}};Gi.prototype.ValueTypeName="quaternion";Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Vi=class extends Pn{constructor(e,t,n){super(e,t,n)}};Vi.prototype.ValueTypeName="string";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=Fs;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends Pn{constructor(e,t,n,s){super(e,t,n,s)}};ls.prototype.ValueTypeName="vector";var Wo=class{constructor(e="",t=-1,n=[],s=bp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Zn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(h_(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Pn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let u=c_(c);c=Xf(c,1,u),l=Xf(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Hi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function u_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Hi;case"vector":case"vector2":case"vector3":case"vector4":return ls;case"color":return Vo;case"quaternion":return Gi;case"bool":case"boolean":return ki;case"string":return Vi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function h_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=u_(i.type);if(i.times===void 0){let t=[],n=[];l_(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var xi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(qf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!qf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function qf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Fc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],p=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Gp=new Fc,oi=class{constructor(e){this.manager=e!==void 0?e:Gp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};oi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fi={},Ku=class extends Error{constructor(e,t){super(e),this.response=t}},Xs=class extends oi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=xi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Fi[e]!==void 0){Fi[e].push({onLoad:t,onProgress:n,onError:s});return}Fi[e]=[],Fi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&We("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Fi[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,x=0,m=new ReadableStream({start(g){_();function _(){h.read().then(({done:M,value:y})=>{if(M)g.close();else{x+=y.byteLength;let b=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let E=0,w=u.length;E<w;E++){let v=u[E];v.onProgress&&v.onProgress(b)}g.enqueue(y),_()}},M=>{g.error(M)})}}});return new Response(m)}else throw new Ku(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{xi.add(`file:${e}`,l);let u=Fi[e];delete Fi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{let u=Fi[e];if(u===void 0)throw this.manager.itemError(e),l;delete Fi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var wr=new WeakMap,Uc=class extends oi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=xi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=wr.get(o);h===void 0&&(h=[],wr.set(o,h)),h.push({onLoad:t,onError:s})}return o}let a=Lr("img");function c(){u(),t&&t(this);let h=wr.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}wr.delete(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),xi.remove(`image:${e}`);let d=wr.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(h)}wr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),xi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var ai=class extends oi{constructor(e){super(e)}load(e,t,n,s){let r=new Qt,o=new Uc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},us=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Xo=class extends us{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Fu=new Je,Yf=new F,Zf=new F,qo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Br,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Yf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yf),Zf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zf),t.updateMatrixWorld(),Fu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fu,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Pr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},nc=new F,ic=new Pt,mi=new F,qs=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(nc,ic,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nc,ic,mi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(nc,ic,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nc,ic,mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ns=new F,Kf=new Te,$f=new Te,jt=class extends qs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,Kf,$f),t.subVectors($f,Kf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_o*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},$u=class extends qo{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Os*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Yo=class extends us{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new $u}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Ju=class extends qo{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0}},ci=class extends us{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ju}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},hs=class extends qs{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ju=class extends qo{constructor(){super(new hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ys=class extends us{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new ju}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Zo=class extends us{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Wi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Uu=new WeakMap,Ko=class extends oi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&We("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&We("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=xi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{Uu.has(o)===!0?(s&&s(Uu.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){xi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),Uu.set(c,l),xi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});xi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},sc,Zs=class{static getContext(){return sc===void 0&&(sc=new(window.AudioContext||window.webkitAudioContext)),sc}static setContext(e){sc=e}},$o=class extends oi{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new Xs(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{let l=c.slice(0),u=Zs.getContext(),h=e+"#decode";r.manager.itemStart(h),u.decodeAudioData(l,function(d){t(d),r.manager.itemEnd(h)}).catch(function(d){a(d),r.manager.itemEnd(h)})}catch(l){a(l)}},n,s);function a(c){s?s(c):Qe(c),r.manager.itemError(e)}}};var Ar=-90,Rr=1,Oc=class extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new jt(Ar,Rr,e,t);s.layers=this.layers,this.add(s);let r=new jt(Ar,Rr,e,t);r.layers=this.layers,this.add(r);let o=new jt(Ar,Rr,e,t);o.layers=this.layers,this.add(o);let a=new jt(Ar,Rr,e,t);a.layers=this.layers,this.add(a);let c=new jt(Ar,Rr,e,t);c.layers=this.layers,this.add(c);let l=new jt(Ar,Rr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Bc=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},zc=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=d_.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function d_(){this._document.hidden===!1&&this.reset()}var Ts=new F,Ou=new Pt,f_=new F,ws=new F,As=new F,Jo=class extends Lt{constructor(){super(),this.type="AudioListener",this.context=Zs.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new zc}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();let t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Ts,Ou,f_),ws.set(0,0,-1).applyQuaternion(Ou),As.set(0,1,0).applyQuaternion(Ou),t.positionX){let n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Ts.x,n),t.positionY.linearRampToValueAtTime(Ts.y,n),t.positionZ.linearRampToValueAtTime(Ts.z,n),t.forwardX.linearRampToValueAtTime(ws.x,n),t.forwardY.linearRampToValueAtTime(ws.y,n),t.forwardZ.linearRampToValueAtTime(ws.z,n),t.upX.linearRampToValueAtTime(As.x,n),t.upY.linearRampToValueAtTime(As.y,n),t.upZ.linearRampToValueAtTime(As.z,n)}else t.setPosition(Ts.x,Ts.y,Ts.z),t.setOrientation(ws.x,ws.y,ws.z,As.x,As.y,As.z)}},kc=class extends Lt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){We("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){We("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){We("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){We("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){We("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(We("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){We("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(We("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}},Rs=new F,Jf=new Pt,p_=new F,Cs=new F,jo=class extends kc{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Rs,Jf,p_),Cs.set(0,0,1).applyQuaternion(Jf);let t=this.panner;if(t.positionX){let n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Rs.x,n),t.positionY.linearRampToValueAtTime(Rs.y,n),t.positionZ.linearRampToValueAtTime(Rs.z,n),t.orientationX.linearRampToValueAtTime(Cs.x,n),t.orientationY.linearRampToValueAtTime(Cs.y,n),t.orientationZ.linearRampToValueAtTime(Cs.z,n)}else t.setPosition(Rs.x,Rs.y,Rs.z),t.setOrientation(Cs.x,Cs.y,Cs.z)}};var bh="\\[\\]\\.:\\/",m_=new RegExp("["+bh+"]","g"),Sh="[^"+bh+"]",g_="[^"+bh.replace("\\.","")+"]",x_=/((?:WC+[\/:])*)/.source.replace("WC",Sh),__=/(WCOD+)?/.source.replace("WCOD",g_),y_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sh),v_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sh),M_=new RegExp("^"+x_+__+y_+v_+"$"),b_=["material","materials","bones","map"],Qu=class{constructor(e,t,n){let s=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},It=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(m_,"")}static parseTrackName(e){let t=M_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);b_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;Qe("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=Qu;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Vw=new Float32Array(1);var eh=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function Eh(i,e,t,n){let s=S_(n);switch(t){case mh:return i*e;case Zc:return i*e/s.components*s.byteLength;case Kc:return i*e/s.components*s.byteLength;case ps:return i*e*2/s.components*s.byteLength;case $c:return i*e*2/s.components*s.byteLength;case gh:return i*e*3/s.components*s.byteLength;case Gn:return i*e*4/s.components*s.byteLength;case Jc:return i*e*4/s.components*s.byteLength;case na:case ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case sa:case ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qc:case tl:return Math.max(i,16)*Math.max(e,8)/4;case jc:case el:return Math.max(i,8)*Math.max(e,8)/2;case nl:case il:case rl:case ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case sl:case oa:case al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ll:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ul:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case hl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case dl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case fl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case pl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ml:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case gl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case xl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case _l:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case yl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case vl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ml:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case bl:case Sl:case El:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Tl:case wl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case aa:case Al:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function S_(i){switch(i){case Ln:case hh:return{byteLength:1,components:1};case qr:case dh:case Ei:return{byteLength:2,components:1};case qc:case Yc:return{byteLength:2,components:4};case hi:case Xc:case Hn:return{byteLength:4,components:1};case fh:case ph:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function hm(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function T_(i){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],x=h[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let x=h[f];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var w_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,A_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,R_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,N_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,F_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,z_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,k_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,H_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,G_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,V_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,q_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Y_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Z_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,K_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,J_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,j_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ey=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ty=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ny="gl_FragColor = linearToOutputTexel( gl_FragColor );",iy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ry=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,oy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ay=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ly=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,py=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,my=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,_y=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,My=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,by=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ey=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ty=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ay=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ry=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Cy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Iy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Py=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ly=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ny=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Uy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Oy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,By=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ky=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Vy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ky=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$y=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ev=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,nv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ov=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,av=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,lv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_v=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Av=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Nv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ov=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$v=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:w_,alphahash_pars_fragment:A_,alphamap_fragment:R_,alphamap_pars_fragment:C_,alphatest_fragment:I_,alphatest_pars_fragment:P_,aomap_fragment:L_,aomap_pars_fragment:N_,batching_pars_vertex:D_,batching_vertex:F_,begin_vertex:U_,beginnormal_vertex:O_,bsdfs:B_,iridescence_fragment:z_,bumpmap_pars_fragment:k_,clipping_planes_fragment:H_,clipping_planes_pars_fragment:G_,clipping_planes_pars_vertex:V_,clipping_planes_vertex:W_,color_fragment:X_,color_pars_fragment:q_,color_pars_vertex:Y_,color_vertex:Z_,common:K_,cube_uv_reflection_fragment:$_,defaultnormal_vertex:J_,displacementmap_pars_vertex:j_,displacementmap_vertex:Q_,emissivemap_fragment:ey,emissivemap_pars_fragment:ty,colorspace_fragment:ny,colorspace_pars_fragment:iy,envmap_fragment:sy,envmap_common_pars_fragment:ry,envmap_pars_fragment:oy,envmap_pars_vertex:ay,envmap_physical_pars_fragment:_y,envmap_vertex:cy,fog_vertex:ly,fog_pars_vertex:uy,fog_fragment:hy,fog_pars_fragment:dy,gradientmap_pars_fragment:fy,lightmap_pars_fragment:py,lights_lambert_fragment:my,lights_lambert_pars_fragment:gy,lights_pars_begin:xy,lights_toon_fragment:yy,lights_toon_pars_fragment:vy,lights_phong_fragment:My,lights_phong_pars_fragment:by,lights_physical_fragment:Sy,lights_physical_pars_fragment:Ey,lights_fragment_begin:Ty,lights_fragment_maps:wy,lights_fragment_end:Ay,lightprobes_pars_fragment:Ry,logdepthbuf_fragment:Cy,logdepthbuf_pars_fragment:Iy,logdepthbuf_pars_vertex:Py,logdepthbuf_vertex:Ly,map_fragment:Ny,map_pars_fragment:Dy,map_particle_fragment:Fy,map_particle_pars_fragment:Uy,metalnessmap_fragment:Oy,metalnessmap_pars_fragment:By,morphinstance_vertex:zy,morphcolor_vertex:ky,morphnormal_vertex:Hy,morphtarget_pars_vertex:Gy,morphtarget_vertex:Vy,normal_fragment_begin:Wy,normal_fragment_maps:Xy,normal_pars_fragment:qy,normal_pars_vertex:Yy,normal_vertex:Zy,normalmap_pars_fragment:Ky,clearcoat_normal_fragment_begin:$y,clearcoat_normal_fragment_maps:Jy,clearcoat_pars_fragment:jy,iridescence_pars_fragment:Qy,opaque_fragment:ev,packing:tv,premultiplied_alpha_fragment:nv,project_vertex:iv,dithering_fragment:sv,dithering_pars_fragment:rv,roughnessmap_fragment:ov,roughnessmap_pars_fragment:av,shadowmap_pars_fragment:cv,shadowmap_pars_vertex:lv,shadowmap_vertex:uv,shadowmask_pars_fragment:hv,skinbase_vertex:dv,skinning_pars_vertex:fv,skinning_vertex:pv,skinnormal_vertex:mv,specularmap_fragment:gv,specularmap_pars_fragment:xv,tonemapping_fragment:_v,tonemapping_pars_fragment:yv,transmission_fragment:vv,transmission_pars_fragment:Mv,uv_pars_fragment:bv,uv_pars_vertex:Sv,uv_vertex:Ev,worldpos_vertex:Tv,background_vert:wv,background_frag:Av,backgroundCube_vert:Rv,backgroundCube_frag:Cv,cube_vert:Iv,cube_frag:Pv,depth_vert:Lv,depth_frag:Nv,distance_vert:Dv,distance_frag:Fv,equirect_vert:Uv,equirect_frag:Ov,linedashed_vert:Bv,linedashed_frag:zv,meshbasic_vert:kv,meshbasic_frag:Hv,meshlambert_vert:Gv,meshlambert_frag:Vv,meshmatcap_vert:Wv,meshmatcap_frag:Xv,meshnormal_vert:qv,meshnormal_frag:Yv,meshphong_vert:Zv,meshphong_frag:Kv,meshphysical_vert:$v,meshphysical_frag:Jv,meshtoon_vert:jv,meshtoon_frag:Qv,points_vert:eM,points_frag:tM,shadow_vert:nM,shadow_frag:iM,sprite_vert:sM,sprite_frag:rM},Be={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},wi={basic:{uniforms:bn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:bn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Me(0)},envMapIntensity:{value:1}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:bn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:bn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:bn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Me(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:bn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:bn([Be.points,Be.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:bn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:bn([Be.common,Be.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:bn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:bn([Be.sprite,Be.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distance:{uniforms:bn([Be.common,Be.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distance_vert,fragmentShader:lt.distance_frag},shadow:{uniforms:bn([Be.lights,Be.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};wi.physical={uniforms:bn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var Il={r:0,b:0,g:0},oM=new Je,dm=new it;dm.set(-1,0,0,0,1,0,0,0,1);function aM(i,e,t,n,s,r){let o=new Me(0),a=s===!0?0:1,c,l,u=null,h=0,d=null;function f(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let y=_.backgroundBlurriness>0;M=e.get(M,y)}return M}function p(_){let M=!1,y=f(_);y===null?m(o,a):y&&y.isColor&&(m(y,1),M=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,M){let y=f(M);y&&(y.isCubeTexture||y.mapping===ta)?(l===void 0&&(l=new He(new et(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Js(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(oM.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(dm),l.material.toneMapped=ht.getTransfer(y.colorSpace)!==vt,(u!==y||h!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,d=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new He(new Ot(2,2),new An({name:"BackgroundMaterial",uniforms:Js(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ht.getTransfer(y.colorSpace)!==vt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,M){_.getRGB(Il,Mh(i)),t.buffers.color.setClear(Il.r,Il.g,Il.b,M,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:p,addToRenderList:x,dispose:g}}function cM(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(I,L,B,k,U){let H=!1,G=h(I,k,B,L);r!==G&&(r=G,l(r.object)),H=f(I,k,B,U),H&&p(I,k,B,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(I,L,B,k),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function h(I,L,B,k){let U=k.wireframe===!0,H=n[L.id];H===void 0&&(H={},n[L.id]=H);let G=I.isInstancedMesh===!0?I.id:0,ne=H[G];ne===void 0&&(ne={},H[G]=ne);let oe=ne[B.id];oe===void 0&&(oe={},ne[B.id]=oe);let pe=oe[U];return pe===void 0&&(pe=d(c()),oe[U]=pe),pe}function d(I){let L=[],B=[],k=[];for(let U=0;U<t;U++)L[U]=0,B[U]=0,k[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:k,object:I,attributes:{},index:null}}function f(I,L,B,k){let U=r.attributes,H=L.attributes,G=0,ne=B.getAttributes();for(let oe in ne)if(ne[oe].location>=0){let V=U[oe],K=H[oe];if(K===void 0&&(oe==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),oe==="instanceColor"&&I.instanceColor&&(K=I.instanceColor)),V===void 0||V.attribute!==K||K&&V.data!==K.data)return!0;G++}return r.attributesNum!==G||r.index!==k}function p(I,L,B,k){let U={},H=L.attributes,G=0,ne=B.getAttributes();for(let oe in ne)if(ne[oe].location>=0){let V=H[oe];V===void 0&&(oe==="instanceMatrix"&&I.instanceMatrix&&(V=I.instanceMatrix),oe==="instanceColor"&&I.instanceColor&&(V=I.instanceColor));let K={};K.attribute=V,V&&V.data&&(K.data=V.data),U[oe]=K,G++}r.attributes=U,r.attributesNum=G,r.index=k}function x(){let I=r.newAttributes;for(let L=0,B=I.length;L<B;L++)I[L]=0}function m(I){g(I,0)}function g(I,L){let B=r.newAttributes,k=r.enabledAttributes,U=r.attributeDivisors;B[I]=1,k[I]===0&&(i.enableVertexAttribArray(I),k[I]=1),U[I]!==L&&(i.vertexAttribDivisor(I,L),U[I]=L)}function _(){let I=r.newAttributes,L=r.enabledAttributes;for(let B=0,k=L.length;B<k;B++)L[B]!==I[B]&&(i.disableVertexAttribArray(B),L[B]=0)}function M(I,L,B,k,U,H,G){G===!0?i.vertexAttribIPointer(I,L,B,U,H):i.vertexAttribPointer(I,L,B,k,U,H)}function y(I,L,B,k){x();let U=k.attributes,H=B.getAttributes(),G=L.defaultAttributeValues;for(let ne in H){let oe=H[ne];if(oe.location>=0){let pe=U[ne];if(pe===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(pe=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(pe=I.instanceColor)),pe!==void 0){let V=pe.normalized,K=pe.itemSize,de=e.get(pe);if(de===void 0)continue;let be=de.buffer,we=de.type,Z=de.bytesPerElement,ee=we===i.INT||we===i.UNSIGNED_INT||pe.gpuType===Xc;if(pe.isInterleavedBufferAttribute){let $=pe.data,_e=$.stride,ve=pe.offset;if($.isInstancedInterleavedBuffer){for(let Se=0;Se<oe.locationSize;Se++)g(oe.location+Se,$.meshPerAttribute);I.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Se=0;Se<oe.locationSize;Se++)m(oe.location+Se);i.bindBuffer(i.ARRAY_BUFFER,be);for(let Se=0;Se<oe.locationSize;Se++)M(oe.location+Se,K/oe.locationSize,we,V,_e*Z,(ve+K/oe.locationSize*Se)*Z,ee)}else{if(pe.isInstancedBufferAttribute){for(let $=0;$<oe.locationSize;$++)g(oe.location+$,pe.meshPerAttribute);I.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let $=0;$<oe.locationSize;$++)m(oe.location+$);i.bindBuffer(i.ARRAY_BUFFER,be);for(let $=0;$<oe.locationSize;$++)M(oe.location+$,K/oe.locationSize,we,V,K*Z,K/oe.locationSize*$*Z,ee)}}else if(G!==void 0){let V=G[ne];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(oe.location,V);break;case 3:i.vertexAttrib3fv(oe.location,V);break;case 4:i.vertexAttrib4fv(oe.location,V);break;default:i.vertexAttrib1fv(oe.location,V)}}}}_()}function b(){T();for(let I in n){let L=n[I];for(let B in L){let k=L[B];for(let U in k){let H=k[U];for(let G in H)u(H[G].object),delete H[G];delete k[U]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;let L=n[I.id];for(let B in L){let k=L[B];for(let U in k){let H=k[U];for(let G in H)u(H[G].object),delete H[G];delete k[U]}}delete n[I.id]}function w(I){for(let L in n){let B=n[L];for(let k in B){let U=B[k];if(U[I.id]===void 0)continue;let H=U[I.id];for(let G in H)u(H[G].object),delete H[G];delete U[I.id]}}}function v(I){for(let L in n){let B=n[L],k=I.isInstancedMesh===!0?I.id:0,U=B[k];if(U!==void 0){for(let H in U){let G=U[H];for(let ne in G)u(G[ne].object),delete G[ne];delete U[H]}delete B[k],Object.keys(B).length===0&&delete n[L]}}}function T(){R(),o=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function lM(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let d=0;for(let f=0;f<u;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function uM(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Gn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let v=w===Ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Ln&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Hn&&!v)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(We("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:y,maxSamples:b,samples:E}}function hM(i){let e=this,t=null,n=0,s=!1,r=!1,o=new gi,a=new it,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,g=i.get(h);if(!s||p===null||p.length===0||r&&!m)r?u(null):l();else{let _=r?0:n,M=_*4,y=g.clippingState||null;c.value=y,y=u(p,d,M,f);for(let b=0;b!==M;++b)y[b]=t[b];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=c.value,p!==!0||m===null){let g=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,y=f;M!==x;++M,y+=4)o.copy(h[M]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var ms=4,Vp=[.125,.215,.35,.446,.526,.582],js=20,dM=256,ua=new hs,Wp=new Me,Th=null,wh=0,Ah=0,Rh=!1,fM=new F,Ll=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=fM}=r;Th=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Ah=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Th,wh,Ah),this._renderer.xr.enabled=Rh,e.scissorTest=!1,Kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ds||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Th=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Ah=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:Ei,format:Gn,colorSpace:Tn,depthBuffer:!1},s=Xp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=pM(r)),this._blurMaterial=gM(r,e,t),this._ggxMaterial=mM(r,e,t)}return s}_compileMaterial(e){let t=new He(new pt,e);this._renderer.compile(t,ua)}_sceneToCubeUV(e,t,n,s,r){let c=new jt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Wp),h.toneMapping=li,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new He(new et,new dn({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,_=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,g=!0):(m.color.copy(Wp),g=!0);for(let M=0;M<6;M++){let y=M%3;y===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[M],r.y,r.z)):y===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[M]));let b=this._cubeSize;Kr(s,y*b,M>2?b:0,b,b),h.setRenderTarget(s),g&&h.render(x,c),h.render(e,c)}h.toneMapping=f,h.autoClear=d,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ds||e.mapping===Ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Kr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ua)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=0+l*1.25,f=h*d,{_lodMax:p}=this,x=this._sizeLods[n],m=3*x*(n>p-ms?n-p+ms:0),g=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=p-t,Kr(r,m,g,3*x,2*x),s.setRenderTarget(r),s.render(a,ua),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,Kr(e,m,g,3*x,2*x),s.setRenderTarget(e),s.render(a,ua)}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");let u=3,h=this._lodMeshes[s];h.material=l;let d=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*js-1),x=r/p,m=isFinite(r)?1+Math.floor(u*x):js;m>js&&We(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${js}`);let g=[],_=0;for(let w=0;w<js;++w){let v=w/x,T=Math.exp(-v*v/2);g.push(T),w===0?_+=T:w<m&&(_+=2*T)}for(let w=0;w<g.length;w++)g[w]=g[w]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=p,d.mipInt.value=M-n;let y=this._sizeLods[s],b=3*y*(s>M-ms?s-M+ms:0),E=4*(this._cubeSize-y);Kr(t,b,E,3*y,2*y),c.setRenderTarget(t),c.render(h,ua)}};function pM(i){let e=[],t=[],n=[],s=i,r=i-ms+1+Vp.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ms?c=Vp[o-i+ms-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,x=3,m=2,g=1,_=new Float32Array(x*p*f),M=new Float32Array(m*p*f),y=new Float32Array(g*p*f);for(let E=0;E<f;E++){let w=E%3*2/3-1,v=E>2?0:-1,T=[w,v,0,w+2/3,v,0,w+2/3,v+1,0,w,v,0,w+2/3,v+1,0,w,v+1,0];_.set(T,x*p*E),M.set(d,m*p*E);let R=[E,E,E,E,E,E];y.set(R,g*p*E)}let b=new pt;b.setAttribute("position",new Dt(_,x)),b.setAttribute("uv",new Dt(M,m)),b.setAttribute("faceIndex",new Dt(y,g)),n.push(new He(b,null)),s>ms&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Xp(i,e,t){let n=new zn(i,e,t);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function mM(i,e,t){return new An({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:dM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function gM(i,e,t){let n=new Float32Array(js),s=new F(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function qp(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Yp(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Fl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Nl=class extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Lo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new et(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:Js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:Si});r.uniforms.tEquirect.value=t;let o=new He(s,r),a=t.minFilter;return t.minFilter===ui&&(t.minFilter=Xt),new Oc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function xM(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Gc||f===Vc)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new Nl(p.height);return x.fromEquirectangularTexture(i,d),e.set(d,x),d.addEventListener("dispose",l),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,p=f===Gc||f===Vc,x=f===ds||f===Ks;if(p||x){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Ll(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let _=d.image;return p&&_&&_.height>0||x&&_&&c(_)?(n===null&&(n=new Ll(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,f){return f===Gc?d.mapping=ds:f===Vc&&(d.mapping=Ks),d}function c(d){let f=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function l(d){let f=d.target;f.removeEventListener("dispose",l);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function _M(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ls("WebGLRenderer: "+n+" extension not supported."),s}}}function yM(i,e,t,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(h){let d=[],f=h.index,p=h.attributes.position,x=0;if(p===void 0)return;if(f!==null){let _=f.array;x=f.version;for(let M=0,y=_.length;M<y;M+=3){let b=_[M+0],E=_[M+1],w=_[M+2];d.push(b,E,E,w,w,b)}}else{let _=p.array;x=p.version;for(let M=0,y=_.length/3-1;M<y;M+=3){let b=M+0,E=M+1,w=M+2;d.push(b,E,E,w,w,b)}}let m=new(p.count>=65535?Ro:Ao)(d,1);m.version=x;let g=r.get(h);g&&e.remove(g),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function vM(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,d){i.drawElements(n,d,r,h*o),t.update(d,n,1)}function l(h,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,h*o,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function MM(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Qe("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function bM(i,e,t){let n=new WeakMap,s=new St;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let T=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],M=0;f===!0&&(M=1),p===!0&&(M=2),x===!0&&(M=3);let y=a.attributes.position.count*M,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*b*4*h),w=new Eo(E,y,b,h);w.type=Hn,w.needsUpdate=!0;let v=M*4;for(let R=0;R<h;R++){let I=m[R],L=g[R],B=_[R],k=y*b*4*R;for(let U=0;U<I.count;U++){let H=U*v;f===!0&&(s.fromBufferAttribute(I,U),E[k+H+0]=s.x,E[k+H+1]=s.y,E[k+H+2]=s.z,E[k+H+3]=0),p===!0&&(s.fromBufferAttribute(L,U),E[k+H+4]=s.x,E[k+H+5]=s.y,E[k+H+6]=s.z,E[k+H+7]=0),x===!0&&(s.fromBufferAttribute(B,U),E[k+H+8]=s.x,E[k+H+9]=s.y,E[k+H+10]=s.z,E[k+H+11]=B.itemSize===4?s.w:1)}}d={count:h,texture:w,size:new Te(y,b)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let p=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function SM(i,e,t,n,s){let r=new WeakMap;function o(l){let u=s.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var EM={[sh]:"LINEAR_TONE_MAPPING",[rh]:"REINHARD_TONE_MAPPING",[oh]:"CINEON_TONE_MAPPING",[ea]:"ACES_FILMIC_TONE_MAPPING",[ch]:"AGX_TONE_MAPPING",[lh]:"NEUTRAL_TONE_MAPPING",[ah]:"CUSTOM_TONE_MAPPING"};function TM(i,e,t,n,s,r){let o=new zn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new zi(e,t):void 0}),a=new zn(e,t,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),c=new pt;c.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new je([0,2,0,0,2,0],2));let l=new Vr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new He(c,l),h=new hs(-1,1,1,-1,0,1),d=null,f=null,p=!1,x,m=null,g=[],_=!1;this.setSize=function(M,y){o.setSize(M,y),a.setSize(M,y);for(let b=0;b<g.length;b++){let E=g[b];E.setSize&&E.setSize(M,y)}},this.setEffects=function(M){g=M,_=g.length>0&&g[0].isRenderPass===!0;let y=o.width,b=o.height;for(let E=0;E<g.length;E++){let w=g[E];w.setSize&&w.setSize(y,b)}},this.begin=function(M,y){if(p||M.toneMapping===li&&g.length===0)return!1;if(m=y,y!==null){let b=y.width,E=y.height;(o.width!==b||o.height!==E)&&this.setSize(b,E)}return _===!1&&M.setRenderTarget(o),x=M.toneMapping,M.toneMapping=li,!0},this.hasRenderPass=function(){return _},this.end=function(M,y){M.toneMapping=x,p=!0;let b=o,E=a;for(let w=0;w<g.length;w++){let v=g[w];if(v.enabled!==!1&&(v.render(M,E,b,y),v.needsSwap!==!1)){let T=b;b=E,E=T}}if(d!==M.outputColorSpace||f!==M.toneMapping){d=M.outputColorSpace,f=M.toneMapping,l.defines={},ht.getTransfer(d)===vt&&(l.defines.SRGB_TRANSFER="");let w=EM[f];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(m),M.render(u,h),m=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}var fm=new Qt,Ph=new zi(1,1),pm=new Eo,mm=new _c,gm=new Lo,Zp=[],Kp=[],$p=new Float32Array(16),Jp=new Float32Array(9),jp=new Float32Array(4);function Jr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Zp[s];if(r===void 0&&(r=new Float32Array(s),Zp[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function nn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function sn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ul(i,e){let t=Kp[e];t===void 0&&(t=new Int32Array(e),Kp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function wM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function AM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2fv(this.addr,e),sn(t,e)}}function RM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;i.uniform3fv(this.addr,e),sn(t,e)}}function CM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4fv(this.addr,e),sn(t,e)}}function IM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;jp.set(n),i.uniformMatrix2fv(this.addr,!1,jp),sn(t,n)}}function PM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;Jp.set(n),i.uniformMatrix3fv(this.addr,!1,Jp),sn(t,n)}}function LM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;$p.set(n),i.uniformMatrix4fv(this.addr,!1,$p),sn(t,n)}}function NM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function DM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2iv(this.addr,e),sn(t,e)}}function FM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3iv(this.addr,e),sn(t,e)}}function UM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4iv(this.addr,e),sn(t,e)}}function OM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function BM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2uiv(this.addr,e),sn(t,e)}}function zM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3uiv(this.addr,e),sn(t,e)}}function kM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4uiv(this.addr,e),sn(t,e)}}function HM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ph.compareFunction=t.isReversedDepthBuffer()?Cl:Rl,r=Ph):r=fm,t.setTexture2D(e||r,s)}function GM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||mm,s)}function VM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||gm,s)}function WM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||pm,s)}function XM(i){switch(i){case 5126:return wM;case 35664:return AM;case 35665:return RM;case 35666:return CM;case 35674:return IM;case 35675:return PM;case 35676:return LM;case 5124:case 35670:return NM;case 35667:case 35671:return DM;case 35668:case 35672:return FM;case 35669:case 35673:return UM;case 5125:return OM;case 36294:return BM;case 36295:return zM;case 36296:return kM;case 35678:case 36198:case 36298:case 36306:case 35682:return HM;case 35679:case 36299:case 36307:return GM;case 35680:case 36300:case 36308:case 36293:return VM;case 36289:case 36303:case 36311:case 36292:return WM}}function qM(i,e){i.uniform1fv(this.addr,e)}function YM(i,e){let t=Jr(e,this.size,2);i.uniform2fv(this.addr,t)}function ZM(i,e){let t=Jr(e,this.size,3);i.uniform3fv(this.addr,t)}function KM(i,e){let t=Jr(e,this.size,4);i.uniform4fv(this.addr,t)}function $M(i,e){let t=Jr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function JM(i,e){let t=Jr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function jM(i,e){let t=Jr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function QM(i,e){i.uniform1iv(this.addr,e)}function eb(i,e){i.uniform2iv(this.addr,e)}function tb(i,e){i.uniform3iv(this.addr,e)}function nb(i,e){i.uniform4iv(this.addr,e)}function ib(i,e){i.uniform1uiv(this.addr,e)}function sb(i,e){i.uniform2uiv(this.addr,e)}function rb(i,e){i.uniform3uiv(this.addr,e)}function ob(i,e){i.uniform4uiv(this.addr,e)}function ab(i,e,t){let n=this.cache,s=e.length,r=Ul(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ph:o=fm;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function cb(i,e,t){let n=this.cache,s=e.length,r=Ul(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||mm,r[o])}function lb(i,e,t){let n=this.cache,s=e.length,r=Ul(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||gm,r[o])}function ub(i,e,t){let n=this.cache,s=e.length,r=Ul(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||pm,r[o])}function hb(i){switch(i){case 5126:return qM;case 35664:return YM;case 35665:return ZM;case 35666:return KM;case 35674:return $M;case 35675:return JM;case 35676:return jM;case 5124:case 35670:return QM;case 35667:case 35671:return eb;case 35668:case 35672:return tb;case 35669:case 35673:return nb;case 5125:return ib;case 36294:return sb;case 36295:return rb;case 36296:return ob;case 35678:case 36198:case 36298:case 36306:case 35682:return ab;case 35679:case 36299:case 36307:return cb;case 35680:case 36300:case 36308:case 36293:return lb;case 36289:case 36303:case 36311:case 36292:return ub}}var Lh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=XM(t.type)}},Nh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hb(t.type)}},Dh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Ch=/(\w+)(\])?(\[|\.)?/g;function Qp(i,e){i.seq.push(e),i.map[e.id]=e}function db(i,e,t){let n=i.name,s=n.length;for(Ch.lastIndex=0;;){let r=Ch.exec(n),o=Ch.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Qp(t,l===void 0?new Lh(a,i,e):new Nh(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Dh(a),Qp(t,h)),t=h}}}var $r=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);db(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function em(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var fb=37297,pb=0;function mb(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var tm=new it;function gb(i){ht._getMatrix(tm,ht.workingColorSpace,i);let e=`mat3( ${tm.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case bo:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function nm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+mb(i.getShaderSource(e),a)}else return r}function xb(i,e){let t=gb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var _b={[sh]:"Linear",[rh]:"Reinhard",[oh]:"Cineon",[ea]:"ACESFilmic",[ch]:"AgX",[lh]:"Neutral",[ah]:"Custom"};function yb(i,e){let t=_b[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Pl=new F;function vb(){ht.getLuminanceCoefficients(Pl);let i=Pl.x.toFixed(4),e=Pl.y.toFixed(4),t=Pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function bb(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Sb(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function da(i){return i!==""}function im(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Eb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fh(i){return i.replace(Eb,wb)}var Tb=new Map;function wb(i,e){let t=lt[e];if(t===void 0){let n=Tb.get(e);if(n!==void 0)t=lt[n],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Fh(t)}var Ab=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rm(i){return i.replace(Ab,Rb)}function Rb(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function om(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Cb={[Qo]:"SHADOWMAP_TYPE_PCF",[Wr]:"SHADOWMAP_TYPE_VSM"};function Ib(i){return Cb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Pb={[ds]:"ENVMAP_TYPE_CUBE",[Ks]:"ENVMAP_TYPE_CUBE",[ta]:"ENVMAP_TYPE_CUBE_UV"};function Lb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Pb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Nb={[Ks]:"ENVMAP_MODE_REFRACTION"};function Db(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Nb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Fb={[Hc]:"ENVMAP_BLENDING_MULTIPLY",[yp]:"ENVMAP_BLENDING_MIX",[vp]:"ENVMAP_BLENDING_ADD"};function Ub(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Fb[i.combine]||"ENVMAP_BLENDING_NONE"}function Ob(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Bb(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Ib(t),l=Lb(t),u=Db(t),h=Ub(t),d=Ob(t),f=Mb(t),p=bb(r),x=s.createProgram(),m,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(da).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(da).join(`
`),g.length>0&&(g+=`
`)):(m=[om(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),g=[om(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?lt.tonemapping_pars_fragment:"",t.toneMapping!==li?yb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,xb("linearToOutputTexel",t.outputColorSpace),vb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(da).join(`
`)),o=Fh(o),o=im(o,t),o=sm(o,t),a=Fh(a),a=im(a,t),a=sm(a,t),o=rm(o),a=rm(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===_h?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let M=_+m+o,y=_+g+a,b=em(s,s.VERTEX_SHADER,M),E=em(s,s.FRAGMENT_SHADER,y);s.attachShader(x,b),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(I){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(x)||"",B=s.getShaderInfoLog(b)||"",k=s.getShaderInfoLog(E)||"",U=L.trim(),H=B.trim(),G=k.trim(),ne=!0,oe=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,E);else{let pe=nm(s,b,"vertex"),V=nm(s,E,"fragment");Qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+pe+`
`+V)}else U!==""?We("WebGLProgram: Program Info Log:",U):(H===""||G==="")&&(oe=!1);oe&&(I.diagnostics={runnable:ne,programLog:U,vertexShader:{log:H,prefix:m},fragmentShader:{log:G,prefix:g}})}s.deleteShader(b),s.deleteShader(E),v=new $r(s,x),T=Sb(s,x)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,fb)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pb++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=E,this}var zb=0,Uh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Oh(e),t.set(e,n)),n}},Oh=class{constructor(e){this.id=zb++,this.code=e,this.usedTimes=0}};function kb(i){return i===ps||i===oa||i===aa}function Hb(i,e,t,n,s,r){let o=new To,a=new Uh,c=new Set,l=[],u=new Map,h=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,T,R,I,L,B){let k=I.fog,U=L.geometry,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ne=e.get(v.envMap||H,G),oe=ne&&ne.mapping===ta?ne.image.height:null,pe=f[v.type];v.precision!==null&&(d=n.getMaxPrecision(v.precision),d!==v.precision&&We("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let V=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,K=V!==void 0?V.length:0,de=0;U.morphAttributes.position!==void 0&&(de=1),U.morphAttributes.normal!==void 0&&(de=2),U.morphAttributes.color!==void 0&&(de=3);let be,we,Z,ee;if(pe){let Oe=wi[pe];be=Oe.vertexShader,we=Oe.fragmentShader}else{be=v.vertexShader,we=v.fragmentShader;let Oe=a.getVertexShaderStage(v),ot=a.getFragmentShaderStage(v);a.update(v,Oe,ot),Z=Oe.id,ee=ot.id}let $=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),ve=L.isInstancedMesh===!0,Se=L.isBatchedMesh===!0,Y=!!v.map,fe=!!v.matcap,te=!!ne,ue=!!v.aoMap,ae=!!v.lightMap,me=!!v.bumpMap&&v.wireframe===!1,J=!!v.normalMap,he=!!v.displacementMap,ge=!!v.emissiveMap,De=!!v.metalnessMap,Ce=!!v.roughnessMap,N=v.anisotropy>0,Le=v.clearcoat>0,Ue=v.dispersion>0,C=v.iridescence>0,S=v.sheen>0,P=v.transmission>0,D=N&&!!v.anisotropyMap,O=Le&&!!v.clearcoatMap,W=Le&&!!v.clearcoatNormalMap,se=Le&&!!v.clearcoatRoughnessMap,q=C&&!!v.iridescenceMap,re=C&&!!v.iridescenceThicknessMap,Ee=S&&!!v.sheenColorMap,Fe=S&&!!v.sheenRoughnessMap,Pe=!!v.specularMap,Ie=!!v.specularColorMap,Ge=!!v.specularIntensityMap,qe=P&&!!v.transmissionMap,xe=P&&!!v.thicknessMap,z=!!v.gradientMap,ye=!!v.alphaMap,ce=v.alphaTest>0,Ae=!!v.alphaHash,Re=!!v.extensions,le=li;v.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(le=i.toneMapping);let Ne={shaderID:pe,shaderType:v.type,shaderName:v.name,vertexShader:be,fragmentShader:we,defines:v.defines,customVertexShaderID:Z,customFragmentShaderID:ee,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Se,batchingColor:Se&&L._colorsTexture!==null,instancing:ve,instancingColor:ve&&L.instanceColor!==null,instancingMorph:ve&&L.morphTexture!==null,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Y,matcap:fe,envMap:te,envMapMode:te&&ne.mapping,envMapCubeUVHeight:oe,aoMap:ue,lightMap:ae,bumpMap:me,normalMap:J,displacementMap:he,emissiveMap:ge,normalMapObjectSpace:J&&v.normalMapType===Ep,normalMapTangentSpace:J&&v.normalMapType===la,packedNormalMap:J&&v.normalMapType===la&&kb(v.normalMap.format),metalnessMap:De,roughnessMap:Ce,anisotropy:N,anisotropyMap:D,clearcoat:Le,clearcoatMap:O,clearcoatNormalMap:W,clearcoatRoughnessMap:se,dispersion:Ue,iridescence:C,iridescenceMap:q,iridescenceThicknessMap:re,sheen:S,sheenColorMap:Ee,sheenRoughnessMap:Fe,specularMap:Pe,specularColorMap:Ie,specularIntensityMap:Ge,transmission:P,transmissionMap:qe,thicknessMap:xe,gradientMap:z,opaque:v.transparent===!1&&v.blending===Ns&&v.alphaToCoverage===!1,alphaMap:ye,alphaTest:ce,alphaHash:Ae,combine:v.combine,mapUv:Y&&p(v.map.channel),aoMapUv:ue&&p(v.aoMap.channel),lightMapUv:ae&&p(v.lightMap.channel),bumpMapUv:me&&p(v.bumpMap.channel),normalMapUv:J&&p(v.normalMap.channel),displacementMapUv:he&&p(v.displacementMap.channel),emissiveMapUv:ge&&p(v.emissiveMap.channel),metalnessMapUv:De&&p(v.metalnessMap.channel),roughnessMapUv:Ce&&p(v.roughnessMap.channel),anisotropyMapUv:D&&p(v.anisotropyMap.channel),clearcoatMapUv:O&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:W&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:re&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&p(v.sheenRoughnessMap.channel),specularMapUv:Pe&&p(v.specularMap.channel),specularColorMapUv:Ie&&p(v.specularColorMap.channel),specularIntensityMapUv:Ge&&p(v.specularIntensityMap.channel),transmissionMapUv:qe&&p(v.transmissionMap.channel),thicknessMapUv:xe&&p(v.thicknessMap.channel),alphaMapUv:ye&&p(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(J||N),vertexNormals:!!U.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!U.attributes.uv&&(Y||ye),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||U.attributes.normal===void 0&&J===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:_e,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:de,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:Y&&v.map.isVideoTexture===!0&&ht.getTransfer(v.map.colorSpace)===vt,decodeVideoTextureEmissive:ge&&v.emissiveMap.isVideoTexture===!0&&ht.getTransfer(v.emissiveMap.colorSpace)===vt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ft,flipSided:v.side===fn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Re&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&v.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function m(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)T.push(R),T.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(g(T,v),_(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function g(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function _(v,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function M(v){let T=f[v.type],R;if(T){let I=wi[T];R=Hp.clone(I.uniforms)}else R=v.uniforms;return R}function y(v,T){let R=u.get(T);return R!==void 0?++R.usedTimes:(R=new Bb(i,T,v,s),l.push(R),u.set(T,R)),R}function b(v){if(--v.usedTimes===0){let T=l.indexOf(v);l[T]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function E(v){a.remove(v)}function w(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:M,acquireProgram:y,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:w}}function Gb(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Vb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function am(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function cm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,x,m,g){let _=i[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},i[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=p,_.materialVariant=o(d),_.groupOrder=x,_.renderOrder=d.renderOrder,_.z=m,_.group=g),e++,_}function c(d,f,p,x,m,g){let _=a(d,f,p,x,m,g);p.transmission>0?n.push(_):p.transparent===!0?s.push(_):t.push(_)}function l(d,f,p,x,m,g){let _=a(d,f,p,x,m,g);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):t.unshift(_)}function u(d,f,p){t.length>1&&t.sort(d||Vb),n.length>1&&n.sort(f||am),s.length>1&&s.sort(f||am),p&&(t.reverse(),n.reverse(),s.reverse())}function h(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function Wb(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new cm,i.set(n,[o])):s>=r.length?(o=new cm,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Xb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Me};break;case"SpotLight":t={position:new F,direction:new F,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function qb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Yb=0;function Zb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Kb(i){let e=new Xb,t=qb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);let s=new F,r=new Je,o=new Je;function a(l){let u=0,h=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,_=0,M=0,y=0,b=0,E=0,w=0;l.sort(Zb);for(let T=0,R=l.length;T<R;T++){let I=l[T],L=I.color,B=I.intensity,k=I.distance,U=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ps?U=I.shadow.map.texture:U=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=L.r*B,h+=L.g*B,d+=L.b*B;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],B);w++}else if(I.isDirectionalLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let G=I.shadow,ne=t.get(I);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,n.directionalShadow[f]=ne,n.directionalShadowMap[f]=U,n.directionalShadowMatrix[f]=I.shadow.matrix,_++}n.directional[f]=H,f++}else if(I.isSpotLight){let H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(L).multiplyScalar(B),H.distance=k,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[x]=H;let G=I.shadow;if(I.map&&(n.spotLightMap[b]=I.map,b++,G.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[x]=G.matrix,I.castShadow){let ne=t.get(I);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,n.spotShadow[x]=ne,n.spotShadowMap[x]=U,y++}x++}else if(I.isRectAreaLight){let H=e.get(I);H.color.copy(L).multiplyScalar(B),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=H,m++}else if(I.isPointLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let G=I.shadow,ne=t.get(I);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,ne.shadowCameraNear=G.camera.near,ne.shadowCameraFar=G.camera.far,n.pointShadow[p]=ne,n.pointShadowMap[p]=U,n.pointShadowMatrix[p]=I.shadow.matrix,M++}n.point[p]=H,p++}else if(I.isHemisphereLight){let H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(B),H.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[g]=H,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Be.LTC_FLOAT_1,n.rectAreaLTC2=Be.LTC_FLOAT_2):(n.rectAreaLTC1=Be.LTC_HALF_1,n.rectAreaLTC2=Be.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let v=n.hash;(v.directionalLength!==f||v.pointLength!==p||v.spotLength!==x||v.rectAreaLength!==m||v.hemiLength!==g||v.numDirectionalShadows!==_||v.numPointShadows!==M||v.numSpotShadows!==y||v.numSpotMaps!==b||v.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+b-E,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,v.directionalLength=f,v.pointLength=p,v.spotLength=x,v.rectAreaLength=m,v.hemiLength=g,v.numDirectionalShadows=_,v.numPointShadows=M,v.numSpotShadows=y,v.numSpotMaps=b,v.numLightProbes=w,n.version=Yb++)}function c(l,u){let h=0,d=0,f=0,p=0,x=0,m=u.matrixWorldInverse;for(let g=0,_=l.length;g<_;g++){let M=l[g];if(M.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(M.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(M.isRectAreaLight){let y=n.rectArea[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(M.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function lm(i){let e=new Kb(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function o(d){t.push(d)}function a(d){n.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function $b(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new lm(i),e.set(s,[a])):r>=o.length?(a=new lm(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Jb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Qb=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],eS=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],um=new Je,ha=new F,Ih=new F;function tS(i,e,t){let n=new Br,s=new Te,r=new Te,o=new St,a=new Rc,c=new Cc,l={},u=t.maxTextureSize,h={[yn]:fn,[fn]:yn,[Ft]:Ft},d=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:Jb,fragmentShader:jb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new pt;p.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new He(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qo;let g=this.type;this.render=function(E,w,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===ep&&(We("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Qo);let T=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Si),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let B=g!==this.type;B&&w.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(U=>U.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,U=E.length;k<U;k++){let H=E[k],G=H.shadow;if(G===void 0){We("WebGLShadowMap:",H,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ne=G.getFrameExtents();s.multiply(ne),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ne.x),s.x=r.x*ne.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ne.y),s.y=r.y*ne.y,G.mapSize.y=r.y));let oe=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=oe,G.map===null||B===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Wr){if(H.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new zn(s.x,s.y,{format:ps,type:Ei,minFilter:Xt,magFilter:Xt,generateMipmaps:!1}),G.map.texture.name=H.name+".shadowMap",G.map.depthTexture=new zi(s.x,s.y,Hn),G.map.depthTexture.name=H.name+".shadowMapDepth",G.map.depthTexture.format=_i,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Wt,G.map.depthTexture.magFilter=Wt}else H.isPointLight?(G.map=new Nl(s.x),G.map.depthTexture=new Mc(s.x,hi)):(G.map=new zn(s.x,s.y),G.map.depthTexture=new zi(s.x,s.y,hi)),G.map.depthTexture.name=H.name+".shadowMap",G.map.depthTexture.format=_i,this.type===Qo?(G.map.depthTexture.compareFunction=oe?Cl:Rl,G.map.depthTexture.minFilter=Xt,G.map.depthTexture.magFilter=Xt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Wt,G.map.depthTexture.magFilter=Wt);G.camera.updateProjectionMatrix()}let pe=G.map.isWebGLCubeRenderTarget?6:1;for(let V=0;V<pe;V++){if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,V),i.clear();else{V===0&&(i.setRenderTarget(G.map),i.clear());let K=G.getViewport(V);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),L.viewport(o)}if(H.isPointLight){let K=G.camera,de=G.matrix,be=H.distance||K.far;be!==K.far&&(K.far=be,K.updateProjectionMatrix()),ha.setFromMatrixPosition(H.matrixWorld),K.position.copy(ha),Ih.copy(K.position),Ih.add(Qb[V]),K.up.copy(eS[V]),K.lookAt(Ih),K.updateMatrixWorld(),de.makeTranslation(-ha.x,-ha.y,-ha.z),um.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),G._frustum.setFromProjectionMatrix(um,K.coordinateSystem,K.reversedDepth)}else G.updateMatrices(H);n=G.getFrustum(),y(w,v,G.camera,H,this.type)}G.isPointLightShadow!==!0&&this.type===Wr&&_(G,v),G.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(T,R,I)};function _(E,w){let v=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new zn(s.x,s.y,{format:ps,type:Ei})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,v,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,v,f,x,null)}function M(E,w,v,T){let R=null,I=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)R=I;else if(R=v.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let L=R.uuid,B=w.uuid,k=l[L];k===void 0&&(k={},l[L]=k);let U=k[B];U===void 0&&(U=R.clone(),k[B]=U,w.addEventListener("dispose",b)),R=U}if(R.visible=w.visible,R.wireframe=w.wireframe,T===Wr?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:h[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=i.properties.get(R);L.light=v}return R}function y(E,w,v,T,R){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===Wr)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);let B=e.update(E),k=E.material;if(Array.isArray(k)){let U=B.groups;for(let H=0,G=U.length;H<G;H++){let ne=U[H],oe=k[ne.materialIndex];if(oe&&oe.visible){let pe=M(E,oe,T,R);E.onBeforeShadow(i,E,w,v,B,pe,ne),i.renderBufferDirect(v,null,B,pe,E,ne),E.onAfterShadow(i,E,w,v,B,pe,ne)}}}else if(k.visible){let U=M(E,k,T,R);E.onBeforeShadow(i,E,w,v,B,U,null),i.renderBufferDirect(v,null,B,U,E,null),E.onAfterShadow(i,E,w,v,B,U,null)}}let L=E.children;for(let B=0,k=L.length;B<k;B++)y(L[B],w,v,T,R)}function b(E){E.target.removeEventListener("dispose",b);for(let v in l){let T=l[v],R=E.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function nS(i,e){function t(){let z=!1,ye=new St,ce=null,Ae=new St(0,0,0,0);return{setMask:function(Re){ce!==Re&&!z&&(i.colorMask(Re,Re,Re,Re),ce=Re)},setLocked:function(Re){z=Re},setClear:function(Re,le,Ne,Oe,ot){ot===!0&&(Re*=Oe,le*=Oe,Ne*=Oe),ye.set(Re,le,Ne,Oe),Ae.equals(ye)===!1&&(i.clearColor(Re,le,Ne,Oe),Ae.copy(ye))},reset:function(){z=!1,ce=null,Ae.set(-1,0,0,0)}}}function n(){let z=!1,ye=!1,ce=null,Ae=null,Re=null;return{setReversed:function(le){if(ye!==le){let Ne=e.get("EXT_clip_control");le?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ye=le;let Oe=Re;Re=null,this.setClear(Oe)}},getReversed:function(){return ye},setTest:function(le){le?$(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(le){ce!==le&&!z&&(i.depthMask(le),ce=le)},setFunc:function(le){if(ye&&(le=Dp[le]),Ae!==le){switch(le){case cc:i.depthFunc(i.NEVER);break;case lc:i.depthFunc(i.ALWAYS);break;case uc:i.depthFunc(i.LESS);break;case Ds:i.depthFunc(i.LEQUAL);break;case hc:i.depthFunc(i.EQUAL);break;case dc:i.depthFunc(i.GEQUAL);break;case fc:i.depthFunc(i.GREATER);break;case pc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=le}},setLocked:function(le){z=le},setClear:function(le){Re!==le&&(Re=le,ye&&(le=1-le),i.clearDepth(le))},reset:function(){z=!1,ce=null,Ae=null,Re=null,ye=!1}}}function s(){let z=!1,ye=null,ce=null,Ae=null,Re=null,le=null,Ne=null,Oe=null,ot=null;return{setTest:function(ct){z||(ct?$(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(ct){ye!==ct&&!z&&(i.stencilMask(ct),ye=ct)},setFunc:function(ct,zt,rn){(ce!==ct||Ae!==zt||Re!==rn)&&(i.stencilFunc(ct,zt,rn),ce=ct,Ae=zt,Re=rn)},setOp:function(ct,zt,rn){(le!==ct||Ne!==zt||Oe!==rn)&&(i.stencilOp(ct,zt,rn),le=ct,Ne=zt,Oe=rn)},setLocked:function(ct){z=ct},setClear:function(ct){ot!==ct&&(i.clearStencil(ct),ot=ct)},reset:function(){z=!1,ye=null,ce=null,Ae=null,Re=null,le=null,Ne=null,Oe=null,ot=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},h={},d={},f=new WeakMap,p=[],x=null,m=!1,g=null,_=null,M=null,y=null,b=null,E=null,w=null,v=new Me(0,0,0),T=0,R=!1,I=null,L=null,B=null,k=null,U=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ne=0,oe=i.getParameter(i.VERSION);oe.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(oe)[1]),G=ne>=1):oe.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),G=ne>=2);let pe=null,V={},K=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),be=new St().fromArray(K),we=new St().fromArray(de);function Z(z,ye,ce,Ae){let Re=new Uint8Array(4),le=i.createTexture();i.bindTexture(z,le),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<ce;Ne++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(ye+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return le}let ee={};ee[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),ee[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ee[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(i.DEPTH_TEST),o.setFunc(Ds),me(!1),J(th),$(i.CULL_FACE),ue(Si);function $(z){u[z]!==!0&&(i.enable(z),u[z]=!0)}function _e(z){u[z]!==!1&&(i.disable(z),u[z]=!1)}function ve(z,ye){return d[z]!==ye?(i.bindFramebuffer(z,ye),d[z]=ye,z===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ye),z===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function Se(z,ye){let ce=p,Ae=!1;if(z){ce=f.get(ye),ce===void 0&&(ce=[],f.set(ye,ce));let Re=z.textures;if(ce.length!==Re.length||ce[0]!==i.COLOR_ATTACHMENT0){for(let le=0,Ne=Re.length;le<Ne;le++)ce[le]=i.COLOR_ATTACHMENT0+le;ce.length=Re.length,Ae=!0}}else ce[0]!==i.BACK&&(ce[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(ce)}function Y(z){return x!==z?(i.useProgram(z),x=z,!0):!1}let fe={[is]:i.FUNC_ADD,[np]:i.FUNC_SUBTRACT,[ip]:i.FUNC_REVERSE_SUBTRACT};fe[sp]=i.MIN,fe[rp]=i.MAX;let te={[op]:i.ZERO,[ap]:i.ONE,[cp]:i.SRC_COLOR,[oc]:i.SRC_ALPHA,[pp]:i.SRC_ALPHA_SATURATE,[dp]:i.DST_COLOR,[up]:i.DST_ALPHA,[lp]:i.ONE_MINUS_SRC_COLOR,[ac]:i.ONE_MINUS_SRC_ALPHA,[fp]:i.ONE_MINUS_DST_COLOR,[hp]:i.ONE_MINUS_DST_ALPHA,[mp]:i.CONSTANT_COLOR,[gp]:i.ONE_MINUS_CONSTANT_COLOR,[xp]:i.CONSTANT_ALPHA,[_p]:i.ONE_MINUS_CONSTANT_ALPHA};function ue(z,ye,ce,Ae,Re,le,Ne,Oe,ot,ct){if(z===Si){m===!0&&(_e(i.BLEND),m=!1);return}if(m===!1&&($(i.BLEND),m=!0),z!==tp){if(z!==g||ct!==R){if((_!==is||b!==is)&&(i.blendEquation(i.FUNC_ADD),_=is,b=is),ct)switch(z){case Ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xi:i.blendFunc(i.ONE,i.ONE);break;case nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ih:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qe("WebGLState: Invalid blending: ",z);break}else switch(z){case Ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case nh:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ih:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",z);break}M=null,y=null,E=null,w=null,v.set(0,0,0),T=0,g=z,R=ct}return}Re=Re||ye,le=le||ce,Ne=Ne||Ae,(ye!==_||Re!==b)&&(i.blendEquationSeparate(fe[ye],fe[Re]),_=ye,b=Re),(ce!==M||Ae!==y||le!==E||Ne!==w)&&(i.blendFuncSeparate(te[ce],te[Ae],te[le],te[Ne]),M=ce,y=Ae,E=le,w=Ne),(Oe.equals(v)===!1||ot!==T)&&(i.blendColor(Oe.r,Oe.g,Oe.b,ot),v.copy(Oe),T=ot),g=z,R=!1}function ae(z,ye){z.side===Ft?_e(i.CULL_FACE):$(i.CULL_FACE);let ce=z.side===fn;ye&&(ce=!ce),me(ce),z.blending===Ns&&z.transparent===!1?ue(Si):ue(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let Ae=z.stencilWrite;a.setTest(Ae),Ae&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ge(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function me(z){I!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),I=z)}function J(z){z!==jf?($(i.CULL_FACE),z!==L&&(z===th?i.cullFace(i.BACK):z===Qf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),L=z}function he(z){z!==B&&(G&&i.lineWidth(z),B=z)}function ge(z,ye,ce){z?($(i.POLYGON_OFFSET_FILL),(k!==ye||U!==ce)&&(k=ye,U=ce,o.getReversed()&&(ye=-ye),i.polygonOffset(ye,ce))):_e(i.POLYGON_OFFSET_FILL)}function De(z){z?$(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function Ce(z){z===void 0&&(z=i.TEXTURE0+H-1),pe!==z&&(i.activeTexture(z),pe=z)}function N(z,ye,ce){ce===void 0&&(pe===null?ce=i.TEXTURE0+H-1:ce=pe);let Ae=V[ce];Ae===void 0&&(Ae={type:void 0,texture:void 0},V[ce]=Ae),(Ae.type!==z||Ae.texture!==ye)&&(pe!==ce&&(i.activeTexture(ce),pe=ce),i.bindTexture(z,ye||ee[z]),Ae.type=z,Ae.texture=ye)}function Le(){let z=V[pe];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Ue(){try{i.compressedTexImage2D(...arguments)}catch(z){Qe("WebGLState:",z)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(z){Qe("WebGLState:",z)}}function S(){try{i.texSubImage2D(...arguments)}catch(z){Qe("WebGLState:",z)}}function P(){try{i.texSubImage3D(...arguments)}catch(z){Qe("WebGLState:",z)}}function D(){try{i.compressedTexSubImage2D(...arguments)}catch(z){Qe("WebGLState:",z)}}function O(){try{i.compressedTexSubImage3D(...arguments)}catch(z){Qe("WebGLState:",z)}}function W(){try{i.texStorage2D(...arguments)}catch(z){Qe("WebGLState:",z)}}function se(){try{i.texStorage3D(...arguments)}catch(z){Qe("WebGLState:",z)}}function q(){try{i.texImage2D(...arguments)}catch(z){Qe("WebGLState:",z)}}function re(){try{i.texImage3D(...arguments)}catch(z){Qe("WebGLState:",z)}}function Ee(z){return h[z]!==void 0?h[z]:i.getParameter(z)}function Fe(z,ye){h[z]!==ye&&(i.pixelStorei(z,ye),h[z]=ye)}function Pe(z){be.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),be.copy(z))}function Ie(z){we.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),we.copy(z))}function Ge(z,ye){let ce=l.get(ye);ce===void 0&&(ce=new WeakMap,l.set(ye,ce));let Ae=ce.get(z);Ae===void 0&&(Ae=i.getUniformBlockIndex(ye,z.name),ce.set(z,Ae))}function qe(z,ye){let Ae=l.get(ye).get(z);c.get(ye)!==Ae&&(i.uniformBlockBinding(ye,Ae,z.__bindingPointIndex),c.set(ye,Ae))}function xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},pe=null,V={},d={},f=new WeakMap,p=[],x=null,m=!1,g=null,_=null,M=null,y=null,b=null,E=null,w=null,v=new Me(0,0,0),T=0,R=!1,I=null,L=null,B=null,k=null,U=null,be.set(0,0,i.canvas.width,i.canvas.height),we.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:$,disable:_e,bindFramebuffer:ve,drawBuffers:Se,useProgram:Y,setBlending:ue,setMaterial:ae,setFlipSided:me,setCullFace:J,setLineWidth:he,setPolygonOffset:ge,setScissorTest:De,activeTexture:Ce,bindTexture:N,unbindTexture:Le,compressedTexImage2D:Ue,compressedTexImage3D:C,texImage2D:q,texImage3D:re,pixelStorei:Fe,getParameter:Ee,updateUBOMapping:Ge,uniformBlockBinding:qe,texStorage2D:W,texStorage3D:se,texSubImage2D:S,texSubImage3D:P,compressedTexSubImage2D:D,compressedTexSubImage3D:O,scissor:Pe,viewport:Ie,reset:xe}}function iS(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Te,u=new WeakMap,h=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,S){return p?new OffscreenCanvas(C,S):Lr("canvas")}function m(C,S,P){let D=1,O=Ue(C);if((O.width>P||O.height>P)&&(D=P/Math.max(O.width,O.height)),D<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let W=Math.floor(D*O.width),se=Math.floor(D*O.height);d===void 0&&(d=x(W,se));let q=S?x(W,se):d;return q.width=W,q.height=se,q.getContext("2d").drawImage(C,0,0,W,se),We("WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+W+"x"+se+")."),q}else return"data"in C&&We("WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),C;return C}function g(C){return C.generateMipmaps}function _(C){i.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(C,S,P,D,O,W=!1){if(C!==null){if(i[C]!==void 0)return i[C];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let se;D&&(se=e.get("EXT_texture_norm16"),se||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=S;if(S===i.RED&&(P===i.FLOAT&&(q=i.R32F),P===i.HALF_FLOAT&&(q=i.R16F),P===i.UNSIGNED_BYTE&&(q=i.R8),P===i.UNSIGNED_SHORT&&se&&(q=se.R16_EXT),P===i.SHORT&&se&&(q=se.R16_SNORM_EXT)),S===i.RED_INTEGER&&(P===i.UNSIGNED_BYTE&&(q=i.R8UI),P===i.UNSIGNED_SHORT&&(q=i.R16UI),P===i.UNSIGNED_INT&&(q=i.R32UI),P===i.BYTE&&(q=i.R8I),P===i.SHORT&&(q=i.R16I),P===i.INT&&(q=i.R32I)),S===i.RG&&(P===i.FLOAT&&(q=i.RG32F),P===i.HALF_FLOAT&&(q=i.RG16F),P===i.UNSIGNED_BYTE&&(q=i.RG8),P===i.UNSIGNED_SHORT&&se&&(q=se.RG16_EXT),P===i.SHORT&&se&&(q=se.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(P===i.UNSIGNED_BYTE&&(q=i.RG8UI),P===i.UNSIGNED_SHORT&&(q=i.RG16UI),P===i.UNSIGNED_INT&&(q=i.RG32UI),P===i.BYTE&&(q=i.RG8I),P===i.SHORT&&(q=i.RG16I),P===i.INT&&(q=i.RG32I)),S===i.RGB_INTEGER&&(P===i.UNSIGNED_BYTE&&(q=i.RGB8UI),P===i.UNSIGNED_SHORT&&(q=i.RGB16UI),P===i.UNSIGNED_INT&&(q=i.RGB32UI),P===i.BYTE&&(q=i.RGB8I),P===i.SHORT&&(q=i.RGB16I),P===i.INT&&(q=i.RGB32I)),S===i.RGBA_INTEGER&&(P===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),P===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),P===i.UNSIGNED_INT&&(q=i.RGBA32UI),P===i.BYTE&&(q=i.RGBA8I),P===i.SHORT&&(q=i.RGBA16I),P===i.INT&&(q=i.RGBA32I)),S===i.RGB&&(P===i.UNSIGNED_SHORT&&se&&(q=se.RGB16_EXT),P===i.SHORT&&se&&(q=se.RGB16_SNORM_EXT),P===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),P===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),S===i.RGBA){let re=W?bo:ht.getTransfer(O);P===i.FLOAT&&(q=i.RGBA32F),P===i.HALF_FLOAT&&(q=i.RGBA16F),P===i.UNSIGNED_BYTE&&(q=re===vt?i.SRGB8_ALPHA8:i.RGBA8),P===i.UNSIGNED_SHORT&&se&&(q=se.RGBA16_EXT),P===i.SHORT&&se&&(q=se.RGBA16_SNORM_EXT),P===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),P===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function b(C,S){let P;return C?S===null||S===hi||S===Yr?P=i.DEPTH24_STENCIL8:S===Hn?P=i.DEPTH32F_STENCIL8:S===qr&&(P=i.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===hi||S===Yr?P=i.DEPTH_COMPONENT24:S===Hn?P=i.DEPTH_COMPONENT32F:S===qr&&(P=i.DEPTH_COMPONENT16),P}function E(C,S){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Wt&&C.minFilter!==Xt?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function w(C){let S=C.target;S.removeEventListener("dispose",w),T(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&h.delete(S)}function v(C){let S=C.target;S.removeEventListener("dispose",v),I(S)}function T(C){let S=n.get(C);if(S.__webglInit===void 0)return;let P=C.source,D=f.get(P);if(D){let O=D[S.__cacheKey];O.usedTimes--,O.usedTimes===0&&R(C),Object.keys(D).length===0&&f.delete(P)}n.remove(C)}function R(C){let S=n.get(C);i.deleteTexture(S.__webglTexture);let P=C.source,D=f.get(P);delete D[S.__cacheKey],o.memory.textures--}function I(C){let S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let D=0;D<6;D++){if(Array.isArray(S.__webglFramebuffer[D]))for(let O=0;O<S.__webglFramebuffer[D].length;O++)i.deleteFramebuffer(S.__webglFramebuffer[D][O]);else i.deleteFramebuffer(S.__webglFramebuffer[D]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[D])}else{if(Array.isArray(S.__webglFramebuffer))for(let D=0;D<S.__webglFramebuffer.length;D++)i.deleteFramebuffer(S.__webglFramebuffer[D]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let D=0;D<S.__webglColorRenderbuffer.length;D++)S.__webglColorRenderbuffer[D]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[D]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let P=C.textures;for(let D=0,O=P.length;D<O;D++){let W=n.get(P[D]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),o.memory.textures--),n.remove(P[D])}n.remove(C)}let L=0;function B(){L=0}function k(){return L}function U(C){L=C}function H(){let C=L;return C>=s.maxTextures&&We("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),L+=1,C}function G(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function ne(C,S){let P=n.get(C);if(C.isVideoTexture&&N(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&P.__version!==C.version){let D=C.image;if(D===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(D.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(P,C,S);return}}else C.isExternalTexture&&(P.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,P.__webglTexture,i.TEXTURE0+S)}function oe(C,S){let P=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&P.__version!==C.version){_e(P,C,S);return}else C.isExternalTexture&&(P.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,P.__webglTexture,i.TEXTURE0+S)}function pe(C,S){let P=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&P.__version!==C.version){_e(P,C,S);return}t.bindTexture(i.TEXTURE_3D,P.__webglTexture,i.TEXTURE0+S)}function V(C,S){let P=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&P.__version!==C.version){ve(P,C,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+S)}let K={[Kn]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[Ir]:i.MIRRORED_REPEAT},de={[Wt]:i.NEAREST,[Wc]:i.NEAREST_MIPMAP_NEAREST,[$s]:i.NEAREST_MIPMAP_LINEAR,[Xt]:i.LINEAR,[Xr]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},be={[Tp]:i.NEVER,[Ip]:i.ALWAYS,[wp]:i.LESS,[Rl]:i.LEQUAL,[Ap]:i.EQUAL,[Cl]:i.GEQUAL,[Rp]:i.GREATER,[Cp]:i.NOTEQUAL};function we(C,S){if(S.type===Hn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Xt||S.magFilter===Xr||S.magFilter===$s||S.magFilter===ui||S.minFilter===Xt||S.minFilter===Xr||S.minFilter===$s||S.minFilter===ui)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,K[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,K[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,K[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,de[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,de[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,be[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Wt||S.minFilter!==$s&&S.minFilter!==ui||S.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let P=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Z(C,S){let P=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",w));let D=S.source,O=f.get(D);O===void 0&&(O={},f.set(D,O));let W=G(S);if(W!==C.__cacheKey){O[W]===void 0&&(O[W]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,P=!0),O[W].usedTimes++;let se=O[C.__cacheKey];se!==void 0&&(O[C.__cacheKey].usedTimes--,se.usedTimes===0&&R(S)),C.__cacheKey=W,C.__webglTexture=O[W].texture}return P}function ee(C,S,P){return Math.floor(Math.floor(C/P)/S)}function $(C,S,P,D){let W=C.updateRanges;if(W.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,P,D,S.data);else{W.sort((Fe,Pe)=>Fe.start-Pe.start);let se=0;for(let Fe=1;Fe<W.length;Fe++){let Pe=W[se],Ie=W[Fe],Ge=Pe.start+Pe.count,qe=ee(Ie.start,S.width,4),xe=ee(Pe.start,S.width,4);Ie.start<=Ge+1&&qe===xe&&ee(Ie.start+Ie.count-1,S.width,4)===qe?Pe.count=Math.max(Pe.count,Ie.start+Ie.count-Pe.start):(++se,W[se]=Ie)}W.length=se+1;let q=t.getParameter(i.UNPACK_ROW_LENGTH),re=t.getParameter(i.UNPACK_SKIP_PIXELS),Ee=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let Fe=0,Pe=W.length;Fe<Pe;Fe++){let Ie=W[Fe],Ge=Math.floor(Ie.start/4),qe=Math.ceil(Ie.count/4),xe=Ge%S.width,z=Math.floor(Ge/S.width),ye=qe,ce=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,xe,z,ye,ce,P,D,S.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ee)}}function _e(C,S,P){let D=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(D=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(D=i.TEXTURE_3D);let O=Z(C,S),W=S.source;t.bindTexture(D,C.__webglTexture,i.TEXTURE0+P);let se=n.get(W);if(W.version!==se.__version||O===!0){if(t.activeTexture(i.TEXTURE0+P),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let ce=ht.getPrimaries(ht.workingColorSpace),Ae=S.colorSpace===qi?null:ht.getPrimaries(S.colorSpace),Re=S.colorSpace===qi||ce===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let re=m(S.image,!1,s.maxTextureSize);re=Le(S,re);let Ee=r.convert(S.format,S.colorSpace),Fe=r.convert(S.type),Pe=y(S.internalFormat,Ee,Fe,S.normalized,S.colorSpace,S.isVideoTexture);we(D,S);let Ie,Ge=S.mipmaps,qe=S.isVideoTexture!==!0,xe=se.__version===void 0||O===!0,z=W.dataReady,ye=E(S,re);if(S.isDepthTexture)Pe=b(S.format===fs,S.type),xe&&(qe?t.texStorage2D(i.TEXTURE_2D,1,Pe,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Pe,re.width,re.height,0,Ee,Fe,null));else if(S.isDataTexture)if(Ge.length>0){qe&&xe&&t.texStorage2D(i.TEXTURE_2D,ye,Pe,Ge[0].width,Ge[0].height);for(let ce=0,Ae=Ge.length;ce<Ae;ce++)Ie=Ge[ce],qe?z&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,Ie.width,Ie.height,Ee,Fe,Ie.data):t.texImage2D(i.TEXTURE_2D,ce,Pe,Ie.width,Ie.height,0,Ee,Fe,Ie.data);S.generateMipmaps=!1}else qe?(xe&&t.texStorage2D(i.TEXTURE_2D,ye,Pe,re.width,re.height),z&&$(S,re,Ee,Fe)):t.texImage2D(i.TEXTURE_2D,0,Pe,re.width,re.height,0,Ee,Fe,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qe&&xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Pe,Ge[0].width,Ge[0].height,re.depth);for(let ce=0,Ae=Ge.length;ce<Ae;ce++)if(Ie=Ge[ce],S.format!==Gn)if(Ee!==null)if(qe){if(z)if(S.layerUpdates.size>0){let Re=Eh(Ie.width,Ie.height,S.format,S.type);for(let le of S.layerUpdates){let Ne=Ie.data.subarray(le*Re/Ie.data.BYTES_PER_ELEMENT,(le+1)*Re/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,le,Ie.width,Ie.height,1,Ee,Ne)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,Ie.width,Ie.height,re.depth,Ee,Ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,Pe,Ie.width,Ie.height,re.depth,0,Ie.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,Ie.width,Ie.height,re.depth,Ee,Fe,Ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,Pe,Ie.width,Ie.height,re.depth,0,Ee,Fe,Ie.data)}else{qe&&xe&&t.texStorage2D(i.TEXTURE_2D,ye,Pe,Ge[0].width,Ge[0].height);for(let ce=0,Ae=Ge.length;ce<Ae;ce++)Ie=Ge[ce],S.format!==Gn?Ee!==null?qe?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,Ie.width,Ie.height,Ee,Ie.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,Pe,Ie.width,Ie.height,0,Ie.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?z&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,Ie.width,Ie.height,Ee,Fe,Ie.data):t.texImage2D(i.TEXTURE_2D,ce,Pe,Ie.width,Ie.height,0,Ee,Fe,Ie.data)}else if(S.isDataArrayTexture)if(qe){if(xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Pe,re.width,re.height,re.depth),z)if(S.layerUpdates.size>0){let ce=Eh(re.width,re.height,S.format,S.type);for(let Ae of S.layerUpdates){let Re=re.data.subarray(Ae*ce/re.data.BYTES_PER_ELEMENT,(Ae+1)*ce/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ae,re.width,re.height,1,Ee,Fe,Re)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Ee,Fe,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,re.width,re.height,re.depth,0,Ee,Fe,re.data);else if(S.isData3DTexture)qe?(xe&&t.texStorage3D(i.TEXTURE_3D,ye,Pe,re.width,re.height,re.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Ee,Fe,re.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,re.width,re.height,re.depth,0,Ee,Fe,re.data);else if(S.isFramebufferTexture){if(xe)if(qe)t.texStorage2D(i.TEXTURE_2D,ye,Pe,re.width,re.height);else{let ce=re.width,Ae=re.height;for(let Re=0;Re<ye;Re++)t.texImage2D(i.TEXTURE_2D,Re,Pe,ce,Ae,0,Ee,Fe,null),ce>>=1,Ae>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let ce=i.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),re.parentNode!==ce){ce.appendChild(re),h.add(S),ce.onpaint=Ae=>{let Re=Ae.changedElements;for(let le of h)Re.includes(le.image)&&(le.needsUpdate=!0)},ce.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,re);else{let Re=i.RGBA,le=i.RGBA,Ne=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Re,le,Ne,re)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ge.length>0){if(qe&&xe){let ce=Ue(Ge[0]);t.texStorage2D(i.TEXTURE_2D,ye,Pe,ce.width,ce.height)}for(let ce=0,Ae=Ge.length;ce<Ae;ce++)Ie=Ge[ce],qe?z&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,Ee,Fe,Ie):t.texImage2D(i.TEXTURE_2D,ce,Pe,Ee,Fe,Ie);S.generateMipmaps=!1}else if(qe){if(xe){let ce=Ue(re);t.texStorage2D(i.TEXTURE_2D,ye,Pe,ce.width,ce.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Fe,re)}else t.texImage2D(i.TEXTURE_2D,0,Pe,Ee,Fe,re);g(S)&&_(D),se.__version=W.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ve(C,S,P){if(S.image.length!==6)return;let D=Z(C,S),O=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+P);let W=n.get(O);if(O.version!==W.__version||D===!0){t.activeTexture(i.TEXTURE0+P);let se=ht.getPrimaries(ht.workingColorSpace),q=S.colorSpace===qi?null:ht.getPrimaries(S.colorSpace),re=S.colorSpace===qi||se===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let Ee=S.isCompressedTexture||S.image[0].isCompressedTexture,Fe=S.image[0]&&S.image[0].isDataTexture,Pe=[];for(let le=0;le<6;le++)!Ee&&!Fe?Pe[le]=m(S.image[le],!0,s.maxCubemapSize):Pe[le]=Fe?S.image[le].image:S.image[le],Pe[le]=Le(S,Pe[le]);let Ie=Pe[0],Ge=r.convert(S.format,S.colorSpace),qe=r.convert(S.type),xe=y(S.internalFormat,Ge,qe,S.normalized,S.colorSpace),z=S.isVideoTexture!==!0,ye=W.__version===void 0||D===!0,ce=O.dataReady,Ae=E(S,Ie);we(i.TEXTURE_CUBE_MAP,S);let Re;if(Ee){z&&ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,xe,Ie.width,Ie.height);for(let le=0;le<6;le++){Re=Pe[le].mipmaps;for(let Ne=0;Ne<Re.length;Ne++){let Oe=Re[Ne];S.format!==Gn?Ge!==null?z?ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne,0,0,Oe.width,Oe.height,Ge,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne,xe,Oe.width,Oe.height,0,Oe.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne,0,0,Oe.width,Oe.height,Ge,qe,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne,xe,Oe.width,Oe.height,0,Ge,qe,Oe.data)}}}else{if(Re=S.mipmaps,z&&ye){Re.length>0&&Ae++;let le=Ue(Pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,xe,le.width,le.height)}for(let le=0;le<6;le++)if(Fe){z?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Pe[le].width,Pe[le].height,Ge,qe,Pe[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,xe,Pe[le].width,Pe[le].height,0,Ge,qe,Pe[le].data);for(let Ne=0;Ne<Re.length;Ne++){let ot=Re[Ne].image[le].image;z?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne+1,0,0,ot.width,ot.height,Ge,qe,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne+1,xe,ot.width,ot.height,0,Ge,qe,ot.data)}}else{z?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ge,qe,Pe[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,xe,Ge,qe,Pe[le]);for(let Ne=0;Ne<Re.length;Ne++){let Oe=Re[Ne];z?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne+1,0,0,Ge,qe,Oe.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne+1,xe,Ge,qe,Oe.image[le])}}}g(S)&&_(i.TEXTURE_CUBE_MAP),W.__version=O.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Se(C,S,P,D,O,W){let se=r.convert(P.format,P.colorSpace),q=r.convert(P.type),re=y(P.internalFormat,se,q,P.normalized,P.colorSpace),Ee=n.get(S),Fe=n.get(P);if(Fe.__renderTarget=S,!Ee.__hasExternalTextures){let Pe=Math.max(1,S.width>>W),Ie=Math.max(1,S.height>>W);O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?t.texImage3D(O,W,re,Pe,Ie,S.depth,0,se,q,null):t.texImage2D(O,W,re,Pe,Ie,0,se,q,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Ce(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,D,O,Fe.__webglTexture,0,De(S)):(O===i.TEXTURE_2D||O>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,D,O,Fe.__webglTexture,W),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Y(C,S,P){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){let D=S.depthTexture,O=D&&D.isDepthTexture?D.type:null,W=b(S.stencilBuffer,O),se=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ce(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,De(S),W,S.width,S.height):P?i.renderbufferStorageMultisample(i.RENDERBUFFER,De(S),W,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,W,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,C)}else{let D=S.textures;for(let O=0;O<D.length;O++){let W=D[O],se=r.convert(W.format,W.colorSpace),q=r.convert(W.type),re=y(W.internalFormat,se,q,W.normalized,W.colorSpace);Ce(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,De(S),re,S.width,S.height):P?i.renderbufferStorageMultisample(i.RENDERBUFFER,De(S),re,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,re,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function fe(C,S,P){let D=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let O=n.get(S.depthTexture);if(O.__renderTarget=S,(!O.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),D){if(O.__webglInit===void 0&&(O.__webglInit=!0,S.depthTexture.addEventListener("dispose",w)),O.__webglTexture===void 0){O.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture),we(i.TEXTURE_CUBE_MAP,S.depthTexture);let Ee=r.convert(S.depthTexture.format),Fe=r.convert(S.depthTexture.type),Pe;S.depthTexture.format===_i?Pe=i.DEPTH_COMPONENT24:S.depthTexture.format===fs&&(Pe=i.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Pe,S.width,S.height,0,Ee,Fe,null)}}else ne(S.depthTexture,0);let W=O.__webglTexture,se=De(S),q=D?i.TEXTURE_CUBE_MAP_POSITIVE_X+P:i.TEXTURE_2D,re=S.depthTexture.format===fs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===_i)Ce(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,q,W,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,re,q,W,0);else if(S.depthTexture.format===fs)Ce(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,q,W,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,re,q,W,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function te(C){let S=n.get(C),P=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let D=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),D){let O=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,D.removeEventListener("dispose",O)};D.addEventListener("dispose",O),S.__depthDisposeCallback=O}S.__boundDepthTexture=D}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(P)for(let D=0;D<6;D++)fe(S.__webglFramebuffer[D],C,D);else{let D=C.texture.mipmaps;D&&D.length>0?fe(S.__webglFramebuffer[0],C,0):fe(S.__webglFramebuffer,C,0)}else if(P){S.__webglDepthbuffer=[];for(let D=0;D<6;D++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[D]),S.__webglDepthbuffer[D]===void 0)S.__webglDepthbuffer[D]=i.createRenderbuffer(),Y(S.__webglDepthbuffer[D],C,!1);else{let O=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=S.__webglDepthbuffer[D];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,O,i.RENDERBUFFER,W)}}else{let D=C.texture.mipmaps;if(D&&D.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Y(S.__webglDepthbuffer,C,!1);else{let O=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,O,i.RENDERBUFFER,W)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(C,S,P){let D=n.get(C);S!==void 0&&Se(D.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),P!==void 0&&te(C)}function ae(C){let S=C.texture,P=n.get(C),D=n.get(S);C.addEventListener("dispose",v);let O=C.textures,W=C.isWebGLCubeRenderTarget===!0,se=O.length>1;if(se||(D.__webglTexture===void 0&&(D.__webglTexture=i.createTexture()),D.__version=S.version,o.memory.textures++),W){P.__webglFramebuffer=[];for(let q=0;q<6;q++)if(S.mipmaps&&S.mipmaps.length>0){P.__webglFramebuffer[q]=[];for(let re=0;re<S.mipmaps.length;re++)P.__webglFramebuffer[q][re]=i.createFramebuffer()}else P.__webglFramebuffer[q]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){P.__webglFramebuffer=[];for(let q=0;q<S.mipmaps.length;q++)P.__webglFramebuffer[q]=i.createFramebuffer()}else P.__webglFramebuffer=i.createFramebuffer();if(se)for(let q=0,re=O.length;q<re;q++){let Ee=n.get(O[q]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Ce(C)===!1){P.__webglMultisampledFramebuffer=i.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let q=0;q<O.length;q++){let re=O[q];P.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,P.__webglColorRenderbuffer[q]);let Ee=r.convert(re.format,re.colorSpace),Fe=r.convert(re.type),Pe=y(re.internalFormat,Ee,Fe,re.normalized,re.colorSpace,C.isXRRenderTarget===!0),Ie=De(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,Pe,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,P.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(P.__webglDepthRenderbuffer=i.createRenderbuffer(),Y(P.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture),we(i.TEXTURE_CUBE_MAP,S);for(let q=0;q<6;q++)if(S.mipmaps&&S.mipmaps.length>0)for(let re=0;re<S.mipmaps.length;re++)Se(P.__webglFramebuffer[q][re],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,re);else Se(P.__webglFramebuffer[q],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);g(S)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let q=0,re=O.length;q<re;q++){let Ee=O[q],Fe=n.get(Ee),Pe=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Pe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Pe,Fe.__webglTexture),we(Pe,Ee),Se(P.__webglFramebuffer,C,Ee,i.COLOR_ATTACHMENT0+q,Pe,0),g(Ee)&&_(Pe)}t.unbindTexture()}else{let q=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(q=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(q,D.__webglTexture),we(q,S),S.mipmaps&&S.mipmaps.length>0)for(let re=0;re<S.mipmaps.length;re++)Se(P.__webglFramebuffer[re],C,S,i.COLOR_ATTACHMENT0,q,re);else Se(P.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,q,0);g(S)&&_(q),t.unbindTexture()}C.depthBuffer&&te(C)}function me(C){let S=C.textures;for(let P=0,D=S.length;P<D;P++){let O=S[P];if(g(O)){let W=M(C),se=n.get(O).__webglTexture;t.bindTexture(W,se),_(W),t.unbindTexture()}}}let J=[],he=[];function ge(C){if(C.samples>0){if(Ce(C)===!1){let S=C.textures,P=C.width,D=C.height,O=i.COLOR_BUFFER_BIT,W=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=n.get(C),q=S.length>1;if(q)for(let Ee=0;Ee<S.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);let re=C.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let Ee=0;Ee<S.length;Ee++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(O|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(O|=i.STENCIL_BUFFER_BIT)),q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[Ee]);let Fe=n.get(S[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Fe,0)}i.blitFramebuffer(0,0,P,D,0,0,P,D,O,i.NEAREST),c===!0&&(J.length=0,he.length=0,J.push(i.COLOR_ATTACHMENT0+Ee),C.depthBuffer&&C.resolveDepthBuffer===!1&&(J.push(W),he.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,he)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let Ee=0;Ee<S.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,se.__webglColorRenderbuffer[Ee]);let Fe=n.get(S[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,Fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function De(C){return Math.min(s.maxSamples,C.samples)}function Ce(C){let S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function N(C){let S=o.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function Le(C,S){let P=C.colorSpace,D=C.format,O=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||P!==Tn&&P!==qi&&(ht.getTransfer(P)===vt?(D!==Gn||O!==Ln)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",P)),S}function Ue(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.getTextureUnits=k,this.setTextureUnits=U,this.setTexture2D=ne,this.setTexture2DArray=oe,this.setTexture3D=pe,this.setTextureCube=V,this.rebindTextures=ue,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ce,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function sS(i,e){function t(n,s=qi){let r,o=ht.getTransfer(s);if(n===Ln)return i.UNSIGNED_BYTE;if(n===qc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ph)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===hh)return i.BYTE;if(n===dh)return i.SHORT;if(n===qr)return i.UNSIGNED_SHORT;if(n===Xc)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===Ei)return i.HALF_FLOAT;if(n===mh)return i.ALPHA;if(n===gh)return i.RGB;if(n===Gn)return i.RGBA;if(n===_i)return i.DEPTH_COMPONENT;if(n===fs)return i.DEPTH_STENCIL;if(n===Zc)return i.RED;if(n===Kc)return i.RED_INTEGER;if(n===ps)return i.RG;if(n===$c)return i.RG_INTEGER;if(n===Jc)return i.RGBA_INTEGER;if(n===na||n===ia||n===sa||n===ra)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jc||n===Qc||n===el||n===tl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===jc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===el)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nl||n===il||n===sl||n===rl||n===ol||n===oa||n===al)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===nl||n===il)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===sl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===rl)return r.COMPRESSED_R11_EAC;if(n===ol)return r.COMPRESSED_SIGNED_R11_EAC;if(n===oa)return r.COMPRESSED_RG11_EAC;if(n===al)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===cl||n===ll||n===ul||n===hl||n===dl||n===fl||n===pl||n===ml||n===gl||n===xl||n===_l||n===yl||n===vl||n===Ml)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ll)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ul)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ml)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_l)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ml)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bl||n===Sl||n===El)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===bl)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===El)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tl||n===wl||n===aa||n===Al)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Tl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var rS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Bh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new No(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new An({vertexShader:rS,fragmentShader:oS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new He(new Ot(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zh=class extends yi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new Bh,g={},_=t.getContextAttributes(),M=null,y=null,b=[],E=[],w=new Te,v=null,T=new jt;T.viewport=new St;let R=new jt;R.viewport=new St;let I=[T,R],L=new Bc,B=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ee=b[Z];return ee===void 0&&(ee=new Fr,b[Z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Z){let ee=b[Z];return ee===void 0&&(ee=new Fr,b[Z]=ee),ee.getGripSpace()},this.getHand=function(Z){let ee=b[Z];return ee===void 0&&(ee=new Fr,b[Z]=ee),ee.getHandSpace()};function U(Z){let ee=E.indexOf(Z.inputSource);if(ee===-1)return;let $=b[ee];$!==void 0&&($.update(Z.inputSource,Z.frame,l||o),$.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",G);for(let Z=0;Z<b.length;Z++){let ee=E[Z];ee!==null&&(E[Z]=null,b[Z].disconnect(ee))}B=null,k=null,m.reset();for(let Z in g)delete g[Z];e.setRenderTarget(M),f=null,d=null,h=null,s=null,y=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",H),s.addEventListener("inputsourceschange",G),_.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let $=null,_e=null,ve=null;_.depth&&(ve=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=_.stencil?fs:_i,_e=_.stencil?Yr:hi);let Se={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Se),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new zn(d.textureWidth,d.textureHeight,{format:Gn,type:Ln,depthTexture:new zi(d.textureWidth,d.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let $={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,$),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new zn(f.framebufferWidth,f.framebufferHeight,{format:Gn,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),we.setContext(s),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(Z){for(let ee=0;ee<Z.removed.length;ee++){let $=Z.removed[ee],_e=E.indexOf($);_e>=0&&(E[_e]=null,b[_e].disconnect($))}for(let ee=0;ee<Z.added.length;ee++){let $=Z.added[ee],_e=E.indexOf($);if(_e===-1){for(let Se=0;Se<b.length;Se++)if(Se>=E.length){E.push($),_e=Se;break}else if(E[Se]===null){E[Se]=$,_e=Se;break}if(_e===-1)break}let ve=b[_e];ve&&ve.connect($)}}let ne=new F,oe=new F;function pe(Z,ee,$){ne.setFromMatrixPosition(ee.matrixWorld),oe.setFromMatrixPosition($.matrixWorld);let _e=ne.distanceTo(oe),ve=ee.projectionMatrix.elements,Se=$.projectionMatrix.elements,Y=ve[14]/(ve[10]-1),fe=ve[14]/(ve[10]+1),te=(ve[9]+1)/ve[5],ue=(ve[9]-1)/ve[5],ae=(ve[8]-1)/ve[0],me=(Se[8]+1)/Se[0],J=Y*ae,he=Y*me,ge=_e/(-ae+me),De=ge*-ae;if(ee.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(De),Z.translateZ(ge),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ve[10]===-1)Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let Ce=Y+ge,N=fe+ge,Le=J-De,Ue=he+(_e-De),C=te*fe/N*Ce,S=ue*fe/N*Ce;Z.projectionMatrix.makePerspective(Le,Ue,C,S,Ce,N),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function V(Z,ee){ee===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ee.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ee=Z.near,$=Z.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&($=m.depthFar)),L.near=R.near=T.near=ee,L.far=R.far=T.far=$,(B!==L.near||k!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),B=L.near,k=L.far),L.layers.mask=Z.layers.mask|6,T.layers.mask=L.layers.mask&-5,R.layers.mask=L.layers.mask&-3;let _e=Z.parent,ve=L.cameras;V(L,_e);for(let Se=0;Se<ve.length;Se++)V(ve[Se],_e);ve.length===2?pe(L,T,R):L.projectionMatrix.copy(T.projectionMatrix),K(Z,L,_e)};function K(Z,ee,$){$===null?Z.matrix.copy(ee.matrixWorld):(Z.matrix.copy($.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ee.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Os*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(Z){return g[Z]};let de=null;function be(Z,ee){if(u=ee.getViewerPose(l||o),p=ee,u!==null){let $=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let _e=!1;$.length!==L.cameras.length&&(L.cameras.length=0,_e=!0);for(let fe=0;fe<$.length;fe++){let te=$[fe],ue=null;if(f!==null)ue=f.getViewport(te);else{let me=h.getViewSubImage(d,te);ue=me.viewport,fe===0&&(e.setRenderTargetTextures(y,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(y))}let ae=I[fe];ae===void 0&&(ae=new jt,ae.layers.enable(fe),ae.viewport=new St,I[fe]=ae),ae.matrix.fromArray(te.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(te.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(ue.x,ue.y,ue.width,ue.height),fe===0&&(L.matrix.copy(ae.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),_e===!0&&L.cameras.push(ae)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let fe=h.getDepthInformation($[0]);fe&&fe.isValid&&fe.texture&&m.init(fe,s.renderState)}if(ve&&ve.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let fe=0;fe<$.length;fe++){let te=$[fe].camera;if(te){let ue=g[te];ue||(ue=new No,g[te]=ue);let ae=h.getCameraImage(te);ue.sourceTexture=ae}}}}for(let $=0;$<b.length;$++){let _e=E[$],ve=b[$];_e!==null&&ve!==void 0&&ve.update(_e,ee,l||o)}de&&de(Z,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),p=null}let we=new hm;we.setAnimationLoop(be),this.setAnimationLoop=function(Z){de=Z},this.dispose=function(){}}},aS=new Je,xm=new it;xm.set(-1,0,0,0,1,0,0,0,1);function cS(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Mh(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,_,M,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,_,M):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===fn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===fn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let _=e.get(g),M=_.envMap,y=_.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(aS.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(xm),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,_,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=M*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,_){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===fn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let _=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lS(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,b){let E=b.program;n.uniformBlockBinding(y,E)}function l(y,b){let E=s[y.id];E===void 0&&(m(y),E=u(y),s[y.id]=E,y.addEventListener("dispose",_));let w=b.program;n.updateUBOMapping(y,w);let v=e.render.frame;r[y.id]!==v&&(d(y),r[y.id]=v)}function u(y){let b=h();y.__bindingPointIndex=b;let E=i.createBuffer(),w=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,w,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,E),E}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let b=s[y.id],E=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let v=0,T=E.length;v<T;v++){let R=E[v];if(Array.isArray(R))for(let I=0,L=R.length;I<L;I++)f(R[I],v,I,w);else f(R,v,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,b,E,w){if(x(y,b,E,w)===!0){let v=y.__offset,T=y.value;if(Array.isArray(T)){let R=0;for(let I=0;I<T.length;I++){let L=T[I],B=g(L);p(L,y.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function p(y,b,E){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,E)}function x(y,b,E,w){let v=y.value,T=b+"_"+E;if(w[T]===void 0)return typeof v=="number"||typeof v=="boolean"?w[T]=v:ArrayBuffer.isView(v)?w[T]=v.slice():w[T]=v.clone(),!0;{let R=w[T];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return w[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function m(y){let b=y.uniforms,E=0,w=16;for(let T=0,R=b.length;T<R;T++){let I=Array.isArray(b[T])?b[T]:[b[T]];for(let L=0,B=I.length;L<B;L++){let k=I[L],U=Array.isArray(k.value)?k.value:[k.value];for(let H=0,G=U.length;H<G;H++){let ne=U[H],oe=g(ne),pe=E%w,V=pe%oe.boundary,K=pe+V;E+=V,K!==0&&w-K<oe.storage&&(E+=w-K),k.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=oe.storage}}}let v=E%w;return v>0&&(E+=w-v),y.__size=E,y.__cache={},this}function g(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):We("WebGLRenderer: Unsupported uniform value type.",y),b}function _(y){let b=y.target;b.removeEventListener("dispose",_);let E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function M(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:M}}var uS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ti=null;function hS(){return Ti===null&&(Ti=new Or(uS,16,16,ps,Ei),Ti.name="DFG_LUT",Ti.minFilter=Xt,Ti.magFilter=Xt,Ti.wrapS=Yn,Ti.wrapT=Yn,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}var Dl=class{constructor(e={}){let{canvas:t=Pp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Ln}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=f,m=new Set([Jc,$c,Kc]),g=new Set([Ln,hi,qr,Yr,qc,Yc]),_=new Uint32Array(4),M=new Int32Array(4),y=new F,b=null,E=null,w=[],v=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,L=null,B=null,k=null,U=null;this._outputColorSpace=tt;let H=0,G=0,ne=null,oe=-1,pe=null,V=new St,K=new St,de=null,be=new Me(0),we=0,Z=t.width,ee=t.height,$=1,_e=null,ve=null,Se=new St(0,0,Z,ee),Y=new St(0,0,Z,ee),fe=!1,te=new Br,ue=!1,ae=!1,me=new Je,J=new F,he=new St,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function Ce(){return ne===null?$:1}let N=n;function Le(A,X){return t.getContext(A,X)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",ot,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",zt,!1),N===null){let X="webgl2";if(N=Le(X,A),N===null)throw Le(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Qe("WebGLRenderer: "+A.message),A}let Ue,C,S,P,D,O,W,se,q,re,Ee,Fe,Pe,Ie,Ge,qe,xe,z,ye,ce,Ae,Re,le;function Ne(){Ue=new _M(N),Ue.init(),Ae=new sS(N,Ue),C=new uM(N,Ue,e,Ae),S=new nS(N,Ue),C.reversedDepthBuffer&&d&&S.buffers.depth.setReversed(!0),B=N.createFramebuffer(),k=N.createFramebuffer(),U=N.createFramebuffer(),P=new MM(N),D=new Gb,O=new iS(N,Ue,S,D,C,Ae,P),W=new xM(R),se=new T_(N),Re=new cM(N,se),q=new yM(N,se,P,Re),re=new SM(N,q,se,Re,P),z=new bM(N,C,O),Ge=new hM(D),Ee=new Hb(R,W,Ue,C,Re,Ge),Fe=new cS(R,D),Pe=new Wb,Ie=new $b(Ue),xe=new aM(R,W,S,re,p,c),qe=new tS(R,re,C),le=new lS(N,P,C,S),ye=new lM(N,Ue,P),ce=new vM(N,Ue,P),P.programs=Ee.programs,R.capabilities=C,R.extensions=Ue,R.properties=D,R.renderLists=Pe,R.shadowMap=qe,R.state=S,R.info=P}Ne(),x!==Ln&&(T=new TM(x,t.width,t.height,a,s,r));let Oe=new zh(R,N);this.xr=Oe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let A=Ue.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ue.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(Z,ee,!1))},this.getSize=function(A){return A.set(Z,ee)},this.setSize=function(A,X,ie=!0){if(Oe.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=A,ee=X,t.width=Math.floor(A*$),t.height=Math.floor(X*$),ie===!0&&(t.style.width=A+"px",t.style.height=X+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(Z*$,ee*$).floor()},this.setDrawingBufferSize=function(A,X,ie){Z=A,ee=X,$=ie,t.width=Math.floor(A*ie),t.height=Math.floor(X*ie),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(x===Ln){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(Se)},this.setViewport=function(A,X,ie,j){A.isVector4?Se.set(A.x,A.y,A.z,A.w):Se.set(A,X,ie,j),S.viewport(V.copy(Se).multiplyScalar($).round())},this.getScissor=function(A){return A.copy(Y)},this.setScissor=function(A,X,ie,j){A.isVector4?Y.set(A.x,A.y,A.z,A.w):Y.set(A,X,ie,j),S.scissor(K.copy(Y).multiplyScalar($).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(A){S.setScissorTest(fe=A)},this.setOpaqueSort=function(A){_e=A},this.setTransparentSort=function(A){ve=A},this.getClearColor=function(A){return A.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,ie=!0){let j=0;if(A){let Q=!1;if(ne!==null){let ze=ne.texture.format;Q=m.has(ze)}if(Q){let ze=ne.texture.type,Ve=g.has(ze),ke=xe.getClearColor(),Ye=xe.getClearAlpha(),Ke=ke.r,at=ke.g,ut=ke.b;Ve?(_[0]=Ke,_[1]=at,_[2]=ut,_[3]=Ye,N.clearBufferuiv(N.COLOR,0,_)):(M[0]=Ke,M[1]=at,M[2]=ut,M[3]=Ye,N.clearBufferiv(N.COLOR,0,M))}else j|=N.COLOR_BUFFER_BIT}X&&(j|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ie&&(j|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&N.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),L=A},this.dispose=function(){t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",zt,!1),xe.dispose(),Pe.dispose(),Ie.dispose(),D.dispose(),W.dispose(),re.dispose(),Re.dispose(),le.dispose(),Ee.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",nt),Oe.removeEventListener("sessionend",xt),At.stop()};function ot(A){A.preventDefault(),So("WebGLRenderer: Context Lost."),I=!0}function ct(){So("WebGLRenderer: Context Restored."),I=!1;let A=P.autoReset,X=qe.enabled,ie=qe.autoUpdate,j=qe.needsUpdate,Q=qe.type;Ne(),P.autoReset=A,qe.enabled=X,qe.autoUpdate=ie,qe.needsUpdate=j,qe.type=Q}function zt(A){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function rn(A){let X=A.target;X.removeEventListener("dispose",rn),Qn(X)}function Qn(A){Ri(A),D.remove(A)}function Ri(A){let X=D.get(A).programs;X!==void 0&&(X.forEach(function(ie){Ee.releaseProgram(ie)}),A.isShaderMaterial&&Ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,ie,j,Q,ze){X===null&&(X=ge);let Ve=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,ke=io(A,X,ie,j,Q);S.setMaterial(j,Ve);let Ye=ie.index,Ke=1;if(j.wireframe===!0){if(Ye=q.getWireframeAttribute(ie),Ye===void 0)return;Ke=2}let at=ie.drawRange,ut=ie.attributes.position,$e=at.start*Ke,wt=(at.start+at.count)*Ke;ze!==null&&($e=Math.max($e,ze.start*Ke),wt=Math.min(wt,(ze.start+ze.count)*Ke)),Ye!==null?($e=Math.max($e,0),wt=Math.min(wt,Ye.count)):ut!=null&&($e=Math.max($e,0),wt=Math.min(wt,ut.count));let Zt=wt-$e;if(Zt<0||Zt===1/0)return;Re.setup(Q,j,ke,ie,Ye);let qt,Rt=ye;if(Ye!==null&&(qt=se.get(Ye),Rt=ce,Rt.setIndex(qt)),Q.isMesh)j.wireframe===!0?(S.setLineWidth(j.wireframeLinewidth*Ce()),Rt.setMode(N.LINES)):Rt.setMode(N.TRIANGLES);else if(Q.isLine){let gn=j.linewidth;gn===void 0&&(gn=1),S.setLineWidth(gn*Ce()),Q.isLineSegments?Rt.setMode(N.LINES):Q.isLineLoop?Rt.setMode(N.LINE_LOOP):Rt.setMode(N.LINE_STRIP)}else Q.isPoints?Rt.setMode(N.POINTS):Q.isSprite&&Rt.setMode(N.TRIANGLES);if(Q.isBatchedMesh)if(Ue.get("WEBGL_multi_draw"))Rt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let gn=Q._multiDrawStarts,Xe=Q._multiDrawCounts,Un=Q._multiDrawCount,gt=Ye?se.get(Ye).bytesPerElement:1,Xn=D.get(j).currentProgram.getUniforms();for(let pi=0;pi<Un;pi++)Xn.setValue(N,"_gl_DrawID",pi),Rt.render(gn[pi]/gt,Xe[pi])}else if(Q.isInstancedMesh)Rt.renderInstances($e,Zt,Q.count);else if(ie.isInstancedBufferGeometry){let gn=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Xe=Math.min(ie.instanceCount,gn);Rt.renderInstances($e,Zt,Xe)}else Rt.render($e,Zt)};function tn(A,X,ie){A.transparent===!0&&A.side===Ft&&A.forceSinglePass===!1?(A.side=fn,A.needsUpdate=!0,un(A,X,ie),A.side=yn,A.needsUpdate=!0,un(A,X,ie),A.side=Ft):un(A,X,ie)}this.compile=function(A,X,ie=null){ie===null&&(ie=A),E=Ie.get(ie),E.init(X),v.push(E),ie.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(E.pushLight(Q),Q.castShadow&&E.pushShadow(Q))}),A!==ie&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(E.pushLight(Q),Q.castShadow&&E.pushShadow(Q))}),E.setupLights();let j=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let ze=Q.material;if(ze)if(Array.isArray(ze))for(let Ve=0;Ve<ze.length;Ve++){let ke=ze[Ve];tn(ke,ie,Q),j.add(ke)}else tn(ze,ie,Q),j.add(ze)}),E=v.pop(),j},this.compileAsync=function(A,X,ie=null){let j=this.compile(A,X,ie);return new Promise(Q=>{function ze(){if(j.forEach(function(Ve){D.get(Ve).currentProgram.isReady()&&j.delete(Ve)}),j.size===0){Q(A);return}setTimeout(ze,10)}Ue.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let Rn=null;function Fn(A){Rn&&Rn(A)}function nt(){At.stop()}function xt(){At.start()}let At=new hm;At.setAnimationLoop(Fn),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(A){Rn=A,Oe.setAnimationLoop(A),A===null?At.stop():At.start()},Oe.addEventListener("sessionstart",nt),Oe.addEventListener("sessionend",xt),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(A,X);let ie=Oe.enabled===!0&&Oe.isPresenting===!0,j=T!==null&&(ne===null||ie)&&T.begin(R,ne);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(X),X=Oe.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,X,ne),E=Ie.get(A,v.length),E.init(X),E.state.textureUnits=O.getTextureUnits(),v.push(E),me.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),te.setFromProjectionMatrix(me,si,X.reversedDepth),ae=this.localClippingEnabled,ue=Ge.init(this.clippingPlanes,ae),b=Pe.get(A,w.length),b.init(),w.push(b),Oe.enabled===!0&&Oe.isPresenting===!0){let Ve=R.xr.getDepthSensingMesh();Ve!==null&&yt(Ve,X,-1/0,R.sortObjects)}yt(A,X,0,R.sortObjects),b.finish(),R.sortObjects===!0&&b.sort(_e,ve,X.reversedDepth),De=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,De&&xe.addToRenderList(b,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ue===!0&&Ge.beginShadows();let Q=E.state.shadowsArray;if(qe.render(Q,A,X),ue===!0&&Ge.endShadows(),(j&&T.hasRenderPass())===!1){let Ve=b.opaque,ke=b.transmissive;if(E.setupLights(),X.isArrayCamera){let Ye=X.cameras;if(ke.length>0)for(let Ke=0,at=Ye.length;Ke<at;Ke++){let ut=Ye[Ke];Ht(Ve,ke,A,ut)}De&&xe.render(A);for(let Ke=0,at=Ye.length;Ke<at;Ke++){let ut=Ye[Ke];kt(b,A,ut,ut.viewport)}}else ke.length>0&&Ht(Ve,ke,A,X),De&&xe.render(A),kt(b,A,X)}ne!==null&&G===0&&(O.updateMultisampleRenderTarget(ne),O.updateRenderTargetMipmap(ne)),j&&T.end(R),A.isScene===!0&&A.onAfterRender(R,A,X),Re.resetDefaultState(),oe=-1,pe=null,v.pop(),v.length>0?(E=v[v.length-1],O.setTextureUnits(E.state.textureUnits),ue===!0&&Ge.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,w.pop(),w.length>0?b=w[w.length-1]:b=null,L!==null&&L.renderEnd()};function yt(A,X,ie,j){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLightProbeGrid)E.pushLightProbeGrid(A);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||te.intersectsSprite(A)){j&&he.setFromMatrixPosition(A.matrixWorld).applyMatrix4(me);let Ve=re.update(A),ke=A.material;ke.visible&&b.push(A,Ve,ke,ie,he.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||te.intersectsObject(A))){let Ve=re.update(A),ke=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),he.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),he.copy(Ve.boundingSphere.center)),he.applyMatrix4(A.matrixWorld).applyMatrix4(me)),Array.isArray(ke)){let Ye=Ve.groups;for(let Ke=0,at=Ye.length;Ke<at;Ke++){let ut=Ye[Ke],$e=ke[ut.materialIndex];$e&&$e.visible&&b.push(A,Ve,$e,ie,he.z,ut)}}else ke.visible&&b.push(A,Ve,ke,ie,he.z,null)}}let ze=A.children;for(let Ve=0,ke=ze.length;Ve<ke;Ve++)yt(ze[Ve],X,ie,j)}function kt(A,X,ie,j){let{opaque:Q,transmissive:ze,transparent:Ve}=A;E.setupLightsView(ie),ue===!0&&Ge.setGlobalState(R.clippingPlanes,ie),j&&S.viewport(V.copy(j)),Q.length>0&&Gt(Q,X,ie),ze.length>0&&Gt(ze,X,ie),Ve.length>0&&Gt(Ve,X,ie),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Ht(A,X,ie,j){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[j.id]===void 0){let $e=Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[j.id]=new zn(1,1,{generateMipmaps:!0,type:$e?Ei:Ln,minFilter:ui,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let ze=E.state.transmissionRenderTarget[j.id],Ve=j.viewport||V;ze.setSize(Ve.z*R.transmissionResolutionScale,Ve.w*R.transmissionResolutionScale);let ke=R.getRenderTarget(),Ye=R.getActiveCubeFace(),Ke=R.getActiveMipmapLevel();R.setRenderTarget(ze),R.getClearColor(be),we=R.getClearAlpha(),we<1&&R.setClearColor(16777215,.5),R.clear(),De&&xe.render(ie);let at=R.toneMapping;R.toneMapping=li;let ut=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),E.setupLightsView(j),ue===!0&&Ge.setGlobalState(R.clippingPlanes,j),Gt(A,ie,j),O.updateMultisampleRenderTarget(ze),O.updateRenderTargetMipmap(ze),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let wt=0,Zt=X.length;wt<Zt;wt++){let qt=X[wt],{object:Rt,geometry:gn,material:Xe,group:Un}=qt;if(Xe.side===Ft&&Rt.layers.test(j.layers)){let gt=Xe.side;Xe.side=fn,Xe.needsUpdate=!0,Sn(Rt,ie,j,gn,Xe,Un),Xe.side=gt,Xe.needsUpdate=!0,$e=!0}}$e===!0&&(O.updateMultisampleRenderTarget(ze),O.updateRenderTargetMipmap(ze))}R.setRenderTarget(ke,Ye,Ke),R.setClearColor(be,we),ut!==void 0&&(j.viewport=ut),R.toneMapping=at}function Gt(A,X,ie){let j=X.isScene===!0?X.overrideMaterial:null;for(let Q=0,ze=A.length;Q<ze;Q++){let Ve=A[Q],{object:ke,geometry:Ye,group:Ke}=Ve,at=Ve.material;at.allowOverride===!0&&j!==null&&(at=j),ke.layers.test(ie.layers)&&Sn(ke,X,ie,Ye,at,Ke)}}function Sn(A,X,ie,j,Q,ze){A.onBeforeRender(R,X,ie,j,Q,ze),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(R,X,ie,j,A,ze),Q.transparent===!0&&Q.side===Ft&&Q.forceSinglePass===!1?(Q.side=fn,Q.needsUpdate=!0,R.renderBufferDirect(ie,X,j,Q,A,ze),Q.side=yn,Q.needsUpdate=!0,R.renderBufferDirect(ie,X,j,Q,A,ze),Q.side=Ft):R.renderBufferDirect(ie,X,j,Q,A,ze),A.onAfterRender(R,X,ie,j,Q,ze)}function un(A,X,ie){X.isScene!==!0&&(X=ge);let j=D.get(A),Q=E.state.lights,ze=E.state.shadowsArray,Ve=Q.state.version,ke=Ee.getParameters(A,Q.state,ze,X,ie,E.state.lightProbeGridArray),Ye=Ee.getProgramCacheKey(ke),Ke=j.programs;j.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,j.fog=X.fog;let at=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;j.envMap=W.get(A.envMap||j.environment,at),j.envMapRotation=j.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Ke===void 0&&(A.addEventListener("dispose",rn),Ke=new Map,j.programs=Ke);let ut=Ke.get(Ye);if(ut!==void 0){if(j.currentProgram===ut&&j.lightsStateVersion===Ve)return on(A,ke),ut}else ke.uniforms=Ee.getUniforms(A),L!==null&&A.isNodeMaterial&&L.build(A,ie,ke),A.onBeforeCompile(ke,R),ut=Ee.acquireProgram(ke,Ye),Ke.set(Ye,ut),j.uniforms=ke.uniforms;let $e=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($e.clippingPlanes=Ge.uniform),on(A,ke),j.needsLights=ou(A),j.lightsStateVersion=Ve,j.needsLights&&($e.ambientLightColor.value=Q.state.ambient,$e.lightProbe.value=Q.state.probe,$e.directionalLights.value=Q.state.directional,$e.directionalLightShadows.value=Q.state.directionalShadow,$e.spotLights.value=Q.state.spot,$e.spotLightShadows.value=Q.state.spotShadow,$e.rectAreaLights.value=Q.state.rectArea,$e.ltc_1.value=Q.state.rectAreaLTC1,$e.ltc_2.value=Q.state.rectAreaLTC2,$e.pointLights.value=Q.state.point,$e.pointLightShadows.value=Q.state.pointShadow,$e.hemisphereLights.value=Q.state.hemi,$e.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,$e.spotLightMatrix.value=Q.state.spotLightMatrix,$e.spotLightMap.value=Q.state.spotLightMap,$e.pointShadowMatrix.value=Q.state.pointShadowMatrix),j.lightProbeGrid=E.state.lightProbeGridArray.length>0,j.currentProgram=ut,j.uniformsList=null,ut}function hn(A){if(A.uniformsList===null){let X=A.currentProgram.getUniforms();A.uniformsList=$r.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function on(A,X){let ie=D.get(A);ie.outputColorSpace=X.outputColorSpace,ie.batching=X.batching,ie.batchingColor=X.batchingColor,ie.instancing=X.instancing,ie.instancingColor=X.instancingColor,ie.instancingMorph=X.instancingMorph,ie.skinning=X.skinning,ie.morphTargets=X.morphTargets,ie.morphNormals=X.morphNormals,ie.morphColors=X.morphColors,ie.morphTargetsCount=X.morphTargetsCount,ie.numClippingPlanes=X.numClippingPlanes,ie.numIntersection=X.numClipIntersection,ie.vertexAlphas=X.vertexAlphas,ie.vertexTangents=X.vertexTangents,ie.toneMapping=X.toneMapping}function Ci(A,X){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;y.setFromMatrixPosition(X.matrixWorld);for(let ie=0,j=A.length;ie<j;ie++){let Q=A[ie];if(Q.texture!==null&&Q.boundingBox.containsPoint(y))return Q}return null}function io(A,X,ie,j,Q){X.isScene!==!0&&(X=ge),O.resetTextureUnits();let ze=X.fog,Ve=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?X.environment:null,ke=ne===null?R.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ht.workingColorSpace,Ye=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Ke=W.get(j.envMap||Ve,Ye),at=j.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,ut=!!ie.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),$e=!!ie.morphAttributes.position,wt=!!ie.morphAttributes.normal,Zt=!!ie.morphAttributes.color,qt=li;j.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(qt=R.toneMapping);let Rt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,gn=Rt!==void 0?Rt.length:0,Xe=D.get(j),Un=E.state.lights;if(ue===!0&&(ae===!0||A!==pe)){let Nt=A===pe&&j.id===oe;Ge.setState(j,A,Nt)}let gt=!1;j.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Un.state.version||Xe.outputColorSpace!==ke||Q.isBatchedMesh&&Xe.batching===!1||!Q.isBatchedMesh&&Xe.batching===!0||Q.isBatchedMesh&&Xe.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Xe.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Xe.instancing===!1||!Q.isInstancedMesh&&Xe.instancing===!0||Q.isSkinnedMesh&&Xe.skinning===!1||!Q.isSkinnedMesh&&Xe.skinning===!0||Q.isInstancedMesh&&Xe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Xe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Xe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Xe.instancingMorph===!1&&Q.morphTexture!==null||Xe.envMap!==Ke||j.fog===!0&&Xe.fog!==ze||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Ge.numPlanes||Xe.numIntersection!==Ge.numIntersection)||Xe.vertexAlphas!==at||Xe.vertexTangents!==ut||Xe.morphTargets!==$e||Xe.morphNormals!==wt||Xe.morphColors!==Zt||Xe.toneMapping!==qt||Xe.morphTargetsCount!==gn||!!Xe.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,Xe.__version=j.version);let Xn=Xe.currentProgram;gt===!0&&(Xn=un(j,X,Q),L&&j.isNodeMaterial&&L.onUpdateProgram(j,Xn,Xe));let pi=!1,Zi=!1,lr=!1,Ct=Xn.getUniforms(),Kt=Xe.uniforms;if(S.useProgram(Xn.program)&&(pi=!0,Zi=!0,lr=!0),j.id!==oe&&(oe=j.id,Zi=!0),Xe.needsLights){let Nt=Ci(E.state.lightProbeGridArray,Q);Xe.lightProbeGrid!==Nt&&(Xe.lightProbeGrid=Nt,Zi=!0)}if(pi||pe!==A){S.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ct.setValue(N,"projectionMatrix",A.projectionMatrix),Ct.setValue(N,"viewMatrix",A.matrixWorldInverse);let $i=Ct.map.cameraPosition;$i!==void 0&&$i.setValue(N,J.setFromMatrixPosition(A.matrixWorld)),C.logarithmicDepthBuffer&&Ct.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ct.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),pe!==A&&(pe=A,Zi=!0,lr=!0)}if(Xe.needsLights&&(Un.state.directionalShadowMap.length>0&&Ct.setValue(N,"directionalShadowMap",Un.state.directionalShadowMap,O),Un.state.spotShadowMap.length>0&&Ct.setValue(N,"spotShadowMap",Un.state.spotShadowMap,O),Un.state.pointShadowMap.length>0&&Ct.setValue(N,"pointShadowMap",Un.state.pointShadowMap,O)),Q.isSkinnedMesh){Ct.setOptional(N,Q,"bindMatrix"),Ct.setOptional(N,Q,"bindMatrixInverse");let Nt=Q.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),Ct.setValue(N,"boneTexture",Nt.boneTexture,O))}Q.isBatchedMesh&&(Ct.setOptional(N,Q,"batchingTexture"),Ct.setValue(N,"batchingTexture",Q._matricesTexture,O),Ct.setOptional(N,Q,"batchingIdTexture"),Ct.setValue(N,"batchingIdTexture",Q._indirectTexture,O),Ct.setOptional(N,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ct.setValue(N,"batchingColorTexture",Q._colorsTexture,O));let Ki=ie.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&z.update(Q,ie,Xn),(Zi||Xe.receiveShadow!==Q.receiveShadow)&&(Xe.receiveShadow=Q.receiveShadow,Ct.setValue(N,"receiveShadow",Q.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&X.environment!==null&&(Kt.envMapIntensity.value=X.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=hS()),Zi){if(Ct.setValue(N,"toneMappingExposure",R.toneMappingExposure),Xe.needsLights&&so(Kt,lr),ze&&j.fog===!0&&Fe.refreshFogUniforms(Kt,ze),Fe.refreshMaterialUniforms(Kt,j,$,ee,E.state.transmissionRenderTarget[A.id]),Xe.needsLights&&Xe.lightProbeGrid){let Nt=Xe.lightProbeGrid;Kt.probesSH.value=Nt.texture,Kt.probesMin.value.copy(Nt.boundingBox.min),Kt.probesMax.value.copy(Nt.boundingBox.max),Kt.probesResolution.value.copy(Nt.resolution)}$r.upload(N,hn(Xe),Kt,O)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&($r.upload(N,hn(Xe),Kt,O),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ct.setValue(N,"center",Q.center),Ct.setValue(N,"modelViewMatrix",Q.modelViewMatrix),Ct.setValue(N,"normalMatrix",Q.normalMatrix),Ct.setValue(N,"modelMatrix",Q.matrixWorld),j.uniformsGroups!==void 0){let Nt=j.uniformsGroups;for(let $i=0,ur=Nt.length;$i<ur;$i++){let of=Nt[$i];le.update(of,Xn),le.bind(of,Xn)}}return Xn}function so(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function ou(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(A,X,ie){let j=D.get(A);j.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),D.get(A.texture).__webglTexture=X,D.get(A.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:ie,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){let ie=D.get(A);ie.__webglFramebuffer=X,ie.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,ie=0){ne=A,H=X,G=ie;let j=null,Q=!1,ze=!1;if(A){let ke=D.get(A);if(ke.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(N.FRAMEBUFFER,ke.__webglFramebuffer),V.copy(A.viewport),K.copy(A.scissor),de=A.scissorTest,S.viewport(V),S.scissor(K),S.setScissorTest(de),oe=-1;return}else if(ke.__webglFramebuffer===void 0)O.setupRenderTarget(A);else if(ke.__hasExternalTextures)O.rebindTextures(A,D.get(A.texture).__webglTexture,D.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let at=A.depthTexture;if(ke.__boundDepthTexture!==at){if(at!==null&&D.has(at)&&(A.width!==at.image.width||A.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(A)}}let Ye=A.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(ze=!0);let Ke=D.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ke[X])?j=Ke[X][ie]:j=Ke[X],Q=!0):A.samples>0&&O.useMultisampledRTT(A)===!1?j=D.get(A).__webglMultisampledFramebuffer:Array.isArray(Ke)?j=Ke[ie]:j=Ke,V.copy(A.viewport),K.copy(A.scissor),de=A.scissorTest}else V.copy(Se).multiplyScalar($).floor(),K.copy(Y).multiplyScalar($).floor(),de=fe;if(ie!==0&&(j=B),S.bindFramebuffer(N.FRAMEBUFFER,j)&&S.drawBuffers(A,j),S.viewport(V),S.scissor(K),S.setScissorTest(de),Q){let ke=D.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+X,ke.__webglTexture,ie)}else if(ze){let ke=X;for(let Ye=0;Ye<A.textures.length;Ye++){let Ke=D.get(A.textures[Ye]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ye,Ke.__webglTexture,ie,ke)}}else if(A!==null&&ie!==0){let ke=D.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ke.__webglTexture,ie)}oe=-1},this.readRenderTargetPixels=function(A,X,ie,j,Q,ze,Ve,ke=0){if(!(A&&A.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ye=Ye[Ve]),Ye){S.bindFramebuffer(N.FRAMEBUFFER,Ye);try{let Ke=A.textures[ke],at=Ke.format,ut=Ke.type;if(A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ke),!C.textureFormatReadable(at)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(ut)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-j&&ie>=0&&ie<=A.height-Q&&N.readPixels(X,ie,j,Q,Ae.convert(at),Ae.convert(ut),ze)}finally{let Ke=ne!==null?D.get(ne).__webglFramebuffer:null;S.bindFramebuffer(N.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(A,X,ie,j,Q,ze,Ve,ke=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ye=Ye[Ve]),Ye)if(X>=0&&X<=A.width-j&&ie>=0&&ie<=A.height-Q){S.bindFramebuffer(N.FRAMEBUFFER,Ye);let Ke=A.textures[ke],at=Ke.format,ut=Ke.type;if(A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ke),!C.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $e=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,$e),N.bufferData(N.PIXEL_PACK_BUFFER,ze.byteLength,N.STREAM_READ),N.readPixels(X,ie,j,Q,Ae.convert(at),Ae.convert(ut),0);let wt=ne!==null?D.get(ne).__webglFramebuffer:null;S.bindFramebuffer(N.FRAMEBUFFER,wt);let Zt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Np(N,Zt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,$e),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ze),N.deleteBuffer($e),N.deleteSync(Zt),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,ie=0){let j=Math.pow(2,-ie),Q=Math.floor(A.image.width*j),ze=Math.floor(A.image.height*j),Ve=X!==null?X.x:0,ke=X!==null?X.y:0;O.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,ie,0,0,Ve,ke,Q,ze),S.unbindTexture()},this.copyTextureToTexture=function(A,X,ie=null,j=null,Q=0,ze=0){let Ve,ke,Ye,Ke,at,ut,$e,wt,Zt,qt=A.isCompressedTexture?A.mipmaps[ze]:A.image;if(ie!==null)Ve=ie.max.x-ie.min.x,ke=ie.max.y-ie.min.y,Ye=ie.isBox3?ie.max.z-ie.min.z:1,Ke=ie.min.x,at=ie.min.y,ut=ie.isBox3?ie.min.z:0;else{let Kt=Math.pow(2,-Q);Ve=Math.floor(qt.width*Kt),ke=Math.floor(qt.height*Kt),A.isDataArrayTexture?Ye=qt.depth:A.isData3DTexture?Ye=Math.floor(qt.depth*Kt):Ye=1,Ke=0,at=0,ut=0}j!==null?($e=j.x,wt=j.y,Zt=j.z):($e=0,wt=0,Zt=0);let Rt=Ae.convert(X.format),gn=Ae.convert(X.type),Xe;X.isData3DTexture?(O.setTexture3D(X,0),Xe=N.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(O.setTexture2DArray(X,0),Xe=N.TEXTURE_2D_ARRAY):(O.setTexture2D(X,0),Xe=N.TEXTURE_2D),S.activeTexture(N.TEXTURE0),S.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,X.flipY),S.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),S.pixelStorei(N.UNPACK_ALIGNMENT,X.unpackAlignment);let Un=S.getParameter(N.UNPACK_ROW_LENGTH),gt=S.getParameter(N.UNPACK_IMAGE_HEIGHT),Xn=S.getParameter(N.UNPACK_SKIP_PIXELS),pi=S.getParameter(N.UNPACK_SKIP_ROWS),Zi=S.getParameter(N.UNPACK_SKIP_IMAGES);S.pixelStorei(N.UNPACK_ROW_LENGTH,qt.width),S.pixelStorei(N.UNPACK_IMAGE_HEIGHT,qt.height),S.pixelStorei(N.UNPACK_SKIP_PIXELS,Ke),S.pixelStorei(N.UNPACK_SKIP_ROWS,at),S.pixelStorei(N.UNPACK_SKIP_IMAGES,ut);let lr=A.isDataArrayTexture||A.isData3DTexture,Ct=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){let Kt=D.get(A),Ki=D.get(X),Nt=D.get(Kt.__renderTarget),$i=D.get(Ki.__renderTarget);S.bindFramebuffer(N.READ_FRAMEBUFFER,Nt.__webglFramebuffer),S.bindFramebuffer(N.DRAW_FRAMEBUFFER,$i.__webglFramebuffer);for(let ur=0;ur<Ye;ur++)lr&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,D.get(A).__webglTexture,Q,ut+ur),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,D.get(X).__webglTexture,ze,Zt+ur)),N.blitFramebuffer(Ke,at,Ve,ke,$e,wt,Ve,ke,N.DEPTH_BUFFER_BIT,N.NEAREST);S.bindFramebuffer(N.READ_FRAMEBUFFER,null),S.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||D.has(A)){let Kt=D.get(A),Ki=D.get(X);S.bindFramebuffer(N.READ_FRAMEBUFFER,k),S.bindFramebuffer(N.DRAW_FRAMEBUFFER,U);for(let Nt=0;Nt<Ye;Nt++)lr?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Kt.__webglTexture,Q,ut+Nt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Kt.__webglTexture,Q),Ct?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ki.__webglTexture,ze,Zt+Nt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ki.__webglTexture,ze),Q!==0?N.blitFramebuffer(Ke,at,Ve,ke,$e,wt,Ve,ke,N.COLOR_BUFFER_BIT,N.NEAREST):Ct?N.copyTexSubImage3D(Xe,ze,$e,wt,Zt+Nt,Ke,at,Ve,ke):N.copyTexSubImage2D(Xe,ze,$e,wt,Ke,at,Ve,ke);S.bindFramebuffer(N.READ_FRAMEBUFFER,null),S.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ct?A.isDataTexture||A.isData3DTexture?N.texSubImage3D(Xe,ze,$e,wt,Zt,Ve,ke,Ye,Rt,gn,qt.data):X.isCompressedArrayTexture?N.compressedTexSubImage3D(Xe,ze,$e,wt,Zt,Ve,ke,Ye,Rt,qt.data):N.texSubImage3D(Xe,ze,$e,wt,Zt,Ve,ke,Ye,Rt,gn,qt):A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ze,$e,wt,Ve,ke,Rt,gn,qt.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ze,$e,wt,qt.width,qt.height,Rt,qt.data):N.texSubImage2D(N.TEXTURE_2D,ze,$e,wt,Ve,ke,Rt,gn,qt);S.pixelStorei(N.UNPACK_ROW_LENGTH,Un),S.pixelStorei(N.UNPACK_IMAGE_HEIGHT,gt),S.pixelStorei(N.UNPACK_SKIP_PIXELS,Xn),S.pixelStorei(N.UNPACK_SKIP_ROWS,pi),S.pixelStorei(N.UNPACK_SKIP_IMAGES,Zi),ze===0&&X.generateMipmaps&&N.generateMipmap(Xe),S.unbindTexture()},this.initRenderTarget=function(A){D.get(A).__webglFramebuffer===void 0&&O.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?O.setTextureCube(A,0):A.isData3DTexture?O.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?O.setTexture2DArray(A,0):O.setTexture2D(A,0),S.unbindTexture()},this.resetState=function(){H=0,G=0,ne=null,S.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};async function _m(){if(typeof window<"u"&&window.MCGROT_ASSETS)return window.MCGROT_ASSETS;let[i,e,t,n,s]=await Promise.all([fetch("assets/manifest.json").then(a=>a.json()),fetch("assets/leith.json").then(a=>a.json()),fetch("assets/catalog.json").then(a=>a.ok?a.json():null).catch(()=>null),fetch("assets/shopfronts/manifest.json").then(a=>a.ok?a.json():null).catch(()=>null),fetch("assets/shopfronts/atlas-pages.json").then(a=>a.ok?a.json():null).catch(()=>null)]),r=await fetch("assets/comic-lines.json").then(a=>a.ok?a.json():null).catch(()=>null),o=await fetch("assets/readings.json").then(a=>a.ok?a.json():null).catch(()=>null);return{manifest:i,leith:e,catalog:t,facadeManifest:n,facadeAtlas:s,comicLines:r,readings:o,images:null,audio:null}}function Nn(i,e){if(i){if(i.images&&i.images[e])return i.images[e];if(i.audio&&i.audio[e])return i.audio[e]}return`assets/${e}`}function rt(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new pt,l=0;for(let u=0;u<i.length;++u){let h=i[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0,h=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+u);u+=i[d].attributes.position.count}c.setIndex(h)}for(let u in r){let h=ym(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][d]);let p=ym(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(p)}}}return c}function ym(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new Dt(o,t,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let h=c/t;for(let d=0,f=u.count;d<f;d++)for(let p=0;p<t;p++){let x=u.getComponent(d,p);a.setComponent(d+h,p,x)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function kh(i,e){if(e===xh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Zr||e===ca){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Zr)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var fa=(()=>{let i=6221086;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),bm=8,Gh=2.4,vm=1.435,Ol=.075,Mm=.09,dS=620,fS=90,pS=34,mS=.04;function Jn(i,e,t){let n=Math.imul(i,374761393)^Math.imul(e,668265263)^Math.imul(t,2246822519);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function gS(i,e,t,n){let s=Math.floor(i),r=Math.floor(e),o=i-s,a=e-r,c=o*o*(3-2*o),l=a*a*(3-2*a),u=(x,m)=>Jn((x%t+t)%t,(m%t+t)%t,n),h=u(s,r),d=u(s+1,r),f=u(s,r+1),p=u(s+1,r+1);return h+(d-h)*c+(f+(p-f)*c-(h+(d-h)*c))*l}function en(i,e,t,n,s){let r=0,o=.5,a=1;for(let c=0;c<n;c++)r+=o*gS(i*a,e*a,t*a,s+c*17),a*=2,o*=.5;return r}function Qs(i,e){let t=new Et(i);return t.wrapS=t.wrapT=Kn,t.colorSpace=tt,t.anisotropy=16,e&&t.repeat.set(e[0],e[1]),t}function Sm(){let t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d"),s=n.createImageData(512,512),r=s.data;for(let o=0;o<512;o++)for(let a=0;a<512;a++){let c=a/512*8,l=o/512*8,u=44,h=45,d=41,f=en(c,l,8,4,1)-.5;u+=f*26,h+=f*26,d+=f*22;let p=en(c*.5,l*.5,Math.max(1,4),2,7);if(p>.6){let b=Math.min(1,(p-.6)*6);u+=(26-u)*.55*b,h+=(26-h)*.55*b,d+=(25-d)*.55*b}let x=Jn(a,o,99),m=x>.86?(x-.86)*300:x<.1?-x*90:0;u+=m,h+=m,d+=m*.9;let g=c*1.6+en(c*3,l*3,32,2,55)*1.4,_=l*1.6+en(c*3+9,l*3+9,32,2,71)*1.4,M=Math.abs(en(g,_,16,3,21)-.5);if(M<.012){let b=1-M/.012;u-=15*b,h-=15*b,d-=14*b}let y=(o*512+a)*4;r[y]=Math.max(0,Math.min(255,u)),r[y+1]=Math.max(0,Math.min(255,h)),r[y+2]=Math.max(0,Math.min(255,d)),r[y+3]=255}return n.putImageData(s,0,0),Qs(t)}function Em(){let n=document.createElement("canvas");n.width=n.height=512;let s=n.getContext("2d"),r=s.createImageData(512,512),o=r.data,a=512/4,c=3;for(let l=0;l<512;l++)for(let u=0;u<512;u++){let h=Math.floor(u/a),d=Math.floor(l/a),f=u-h*a,p=l-d*a,x=f<c||p<c||f>a-c||p>a-c,m=(Jn(h,d,5)-.5)*18,g=78+m,_=77+m,M=71+m,y=u/512*8,b=l/512*8,E=en(y,b,8,4,3)-.5;g+=E*34,_+=E*34,M+=E*30,x&&(g*=.52,_*=.56,M*=.48);let w=Jn(u,l,41),v=w>.9?(w-.9)*160:0;g+=v,_+=v,M+=v;let T=(l*512+u)*4;o[T]=Math.max(0,Math.min(255,g)),o[T+1]=Math.max(0,Math.min(255,_)),o[T+2]=Math.max(0,Math.min(255,M)),o[T+3]=255}return s.putImageData(r,0,0),Qs(n)}function Tm(i,e){let n=document.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d"),r=s.createImageData(256,256),o=r.data,a=256/2;for(let l=0;l<256;l++)for(let u=0;u<256;u++){let h=(u-a)/a,d=(l-a)/a,f=Math.atan2(d,h),p=Math.hypot(h,d),x=.7+.26*en(Math.cos(f)*2+4,Math.sin(f)*2+4,8,3,i),[m,g,_,M]=e(p/x,u,l),y=(l*256+u)*4;o[y]=Math.max(0,Math.min(255,m)),o[y+1]=Math.max(0,Math.min(255,g)),o[y+2]=Math.max(0,Math.min(255,_)),o[y+3]=Math.max(0,Math.min(255,M))}s.putImageData(r,0,0);let c=new Et(n);return c.colorSpace=tt,c.anisotropy=16,c}function Hh(i,e,t){return[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t]}function xS(){let i=[10,10,9],e=[40,39,35],t=[104,100,88];return Tm(11,(n,s,r)=>{let o=Jn(s,r,63),a;n<.72?a=Hh(i,e,pa(0,.72,n)):(a=Hh(e,t,pa(.72,.97,n)),a=a.map(l=>l+(o-.5)*26));let c=(1-pa(.9,1,n))*255;return[a[0],a[1],a[2],c]})}function _S(){let i=[104,110,96],e=[52,54,48];return Tm(23,t=>{let n=Hh(i,e,pa(.35,1,t)),s=(1-pa(.86,1,t))*255;return[n[0],n[1],n[2],s]})}function pa(i,e,t){let n=Math.max(0,Math.min(1,(t-i)/(e-i||1e-6)));return n*n*(3-2*n)}var Vh=26;function wm(){let t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d"),s=n.createImageData(512,512),r=s.data;for(let o=0;o<512;o++)for(let a=0;a<512;a++){let c=a/512*8,l=o/512*8,u=62,h=52,d=36,f=en(c,l,8,4,131)-.5;u+=f*30,h+=f*26,d+=f*20;let p=en(c*.9+3,l*.9+3,8,3,137);if(p>.56){let M=Math.min(1,(p-.56)*5);u+=(52-u)*.6*M,h+=(60-h)*.6*M,d+=(34-d)*.6*M}let x=en(c*.6+11,l*.6+11,8,3,149);if(x<.42){let M=Math.min(1,(.42-x)*4);u*=1-.28*M,h*=1-.26*M,d*=1-.22*M}let m=Jn(a,o,151),g=m>.9?(m-.9)*220:m<.07?-m*120:0;u+=g,h+=g*.95,d+=g*.8;let _=(o*512+a)*4;r[_]=Math.max(0,Math.min(255,u)),r[_+1]=Math.max(0,Math.min(255,h)),r[_+2]=Math.max(0,Math.min(255,d)),r[_+3]=255}return n.putImageData(s,0,0),Qs(t)}function Am(){let t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d"),s=n.createImageData(512,512),r=s.data;for(let a=0;a<512;a++)for(let c=0;c<512;c++){let l=c/512*22,u=a/512*22,h=40,d=47,f=26,p=en(l,u,22,4,211)-.5;h+=p*30,d+=p*36,f+=p*20;let x=en(l*.55+5,u*.55+5,22,3,223);if(x>.5){let R=Math.min(1,(x-.5)*5);h+=(24-h)*.8*R,d+=(33-d)*.8*R,f+=(17-f)*.8*R}let m=en(l*.7+17,u*.7+2,22,3,239);if(m>.62){let R=Math.min(1,(m-.62)*6);h+=(66-h)*.55*R,d+=(58-d)*.55*R,f+=(36-f)*.55*R}let g=Math.abs(en(l*.5+9,u*2.2,22,2,227)-.5);if(g<.035){let R=1-g/.035;h+=(74-h)*.5*R,d+=(64-d)*.5*R,f+=(44-f)*.5*R}let _=Jn(c,a,229),M=_>.88?(_-.88)*160:0;h+=M*.7,d+=M,f+=M*.5;let y=Math.min(c,511-c)/512,b=Math.min(a,511-a)/512,E=Math.min(y,b)/.14,w=en(l*2,u*2,44,2,233)*.5,v=Math.max(0,Math.min(1,E-w)),T=(a*512+c)*4;r[T]=Math.max(0,Math.min(255,h)),r[T+1]=Math.max(0,Math.min(255,d)),r[T+2]=Math.max(0,Math.min(255,f)),r[T+3]=Math.round(v*255)}n.putImageData(s,0,0);let o=new Et(t);return o.colorSpace=tt,o.anisotropy=16,o}function Rm(i,e){let t=i.streetLine||[];if(t.length<2)return{group:new st};let n=i.groundHeight||(()=>0),s=new st;return e.add(s),yS(t,s,n),vS(t,s,n),{group:s}}function ma(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0;return{point:[s+c*h,r+l*h],tangent:[c/(u||1),l/(u||1)]}}t+=u}return null}function Cm(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function yS(i,e,t){let n=Math.min(dS,Cm(i)),s=3,r=[],o=[[-Ol/2,0],[-Ol/2,Mm],[Ol/2,Mm],[Ol/2,0]];for(let l of[-1,1]){let u=[],h=[],d=0;for(let x=0;x<=n;x+=s){let m=ma(i,x);if(!m)break;let[g,_]=m.tangent,M=-_,y=g,b=m.point[0]+M*l*(vm/2),E=m.point[1]+y*l*(vm/2),w=t(b,E);for(let[v,T]of o)u.push(b+M*v,w+T,E+y*v);d++}if(d<2)continue;let f=o.length;for(let x=0;x<d-1;x++)for(let m=0;m<f-1;m++){let g=x*f+m,_=x*f+m+1,M=(x+1)*f+m,y=(x+1)*f+m+1;h.push(g,M,_,_,M,y)}let p=new pt;p.setAttribute("position",new je(u,3)),p.setIndex(h),p.computeVertexNormals(),r.push(p)}if(!r.length)return;let a=rt(r,!1),c=new Ze({color:4142124,side:Ft});e.add(new He(a,c))}function vS(i,e,t){let n=Cm(i),s=xS(),r=_S(),o=(a,c,l,u,h,d)=>{let f=[];for(let x=0;x<c;x++){let m=20+fa()*Math.max(1,n-40),g=ma(i,m);if(!g)continue;let[_,M]=g.tangent,y=-M,b=_,E=(fa()*2-1)*l,w=g.point[0]+y*E,v=g.point[1]+b*E,T=u+fa()*(h-u),R=new Ot(T,T*(.6+fa()*.7));R.rotateX(-Math.PI/2),R.rotateY(fa()*Math.PI*2),R.translate(w,t(w,v)+mS,v),f.push(R)}if(!f.length)return;let p=new Ze({map:a,transparent:!0,opacity:d,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});e.add(new He(rt(f,!1),p))};o(s,fS,6.2,.7,2.4,.92),o(r,pS,6.2,1.2,3.6,.5)}var MS=2;function Im(i){let e=[],t=[],n=[];function s(h){for(let d=0;d<e.length;d++){let f=e[d].x-h[0],p=e[d].z-h[1];if(Math.hypot(f,p)<MS)return d}return e.push({x:h[0],z:h[1]}),e.length-1}i.forEach((h,d)=>{if(h.length<2)return;let f=s(h[0]),p=s(h[h.length-1]);t[d]=[f,p],(n[f]??=[]).push({segIdx:d,otherNode:p}),(n[p]??=[]).push({segIdx:d,otherNode:f})});let r=new Set;function o(h){let d=[[e[h].x,e[h].z]],f=h;for(;;){let p=(n[f]||[]).filter(y=>!r.has(y.segIdx));if(p.length===0)break;let{segIdx:x,otherNode:m}=p[0];r.add(x);let g=i[x],[_]=t[x],M=_===f?g:[...g].reverse();for(let y=1;y<M.length;y++)d.push(M[y]);f=m}return d}function a(h){let d=0;for(let f=1;f<h.length;f++)d+=Math.hypot(h[f][0]-h[f-1][0],h[f][1]-h[f-1][1]);return d}let c=[],l=e.map((h,d)=>d).filter(h=>(n[h]||[]).length!==2);for(let h of l){let d=r.size,f=o(h);r.size>d&&c.push(f)}for(let h=0;h<e.length;h++)(n[h]||[]).some(f=>!r.has(f.segIdx))&&c.push(o(h));c.sort((h,d)=>a(d)-a(h));let u=c[0]||[];return u.length>1&&u[0][1]>u[u.length-1][1]&&u.reverse(),u}function Pm(i){return function(t,n){let s=null,r=1/0,o=null;for(let a=0;a<i.length-1;a++){let[c,l]=i[a],[u,h]=i[a+1],d=u-c,f=h-l,p=d*d+f*f,x=p>0?((t-c)*d+(n-l)*f)/p:0;x=Math.max(0,Math.min(1,x));let m=c+x*d,g=l+x*f,_=Math.hypot(t-m,n-g);if(_<r){r=_,s=[m,g];let M=Math.sqrt(p);o=M>0?[d/M,f/M]:[0,1]}}return{point:s,distance:r,tangent:o}}}function gs(i,e,t){let n=1/0,s=0,r=0;for(let o=0;o<t.length-1;o++){let[a,c]=t[o],[l,u]=t[o+1],h=l-a,d=u-c,f=h*h+d*d,p=Math.sqrt(f),x=f>0?((i-a)*h+(e-c)*d)/f:0;x=Math.max(0,Math.min(1,x));let m=Math.hypot(i-(a+x*h),e-(c+x*d));m<n&&(n=m,s=r+x*p),r+=p}return s}function Wh(i,e){let t=0,n=0;for(let o=0;o<i.length-1;o++){let[a,c]=i[o],[l,u]=i[o+1],h=Math.hypot(l-a,u-c);if(n=t,t+=h,e<=t||o===i.length-2){let d=h>0?Math.max(0,Math.min(1,(e-n)/h)):0,f=a+(l-a)*d,p=c+(u-c)*d,x=h>0?[(l-a)/h,(u-c)/h]:[0,1];return{point:[f,p],tangent:x}}}let[s,r]=i[0]||[0,0];return{point:[s,r],tangent:[0,1]}}function jr(i,e){let t=i.footprint,n=[];if(!t||t.length<3||!e)return n;let s=0,r=0;for(let a of t)s+=a[0],r+=a[1];s/=t.length,r/=t.length;let o=[];for(let a=0;a<t.length;a++){let c=t[a],l=t[(a+1)%t.length],u=l[0]-c[0],h=l[1]-c[1],d=Math.hypot(u,h);if(d<.25)continue;let f=(c[0]+l[0])/2,p=(c[1]+l[1])/2,x=e(f,p);if(!x||!x.point)continue;let m=e(c[0],c[1]),g=e(l[0],l[1]);if(Math.min(x.distance,m?m.distance:1/0,g?g.distance:1/0)>30)continue;let M=1/d,y=-h*M,b=u*M;y*(f-s)+b*(p-r)<0&&(y=-y,b=-b);let E=x.point[0]-f,w=x.point[1]-p,v=Math.hypot(E,w)||1,T=(y*E+b*w)/v;if(T<-.3||!(T>=.35))continue;let I=!1;x.tangent&&d<=9&&(I=Math.abs(u*M*x.tangent[0]+h*M*x.tangent[1])<.88),o.push({i:a,ax:c[0],az:c[1],bx:l[0],bz:l[1],dirx:u*M,dirz:h*M,len:d,isChamfer:I})}for(let a of o){let c=n[n.length-1];c&&a.i===c.endEdge+1&&c.dirx*a.dirx+c.dirz*a.dirz>.985?(c.bx=a.bx,c.bz=a.bz,c.len+=a.len,c.endEdge=a.i,c.isChamfer=c.isChamfer||a.isChamfer):n.push({ax:a.ax,az:a.az,bx:a.bx,bz:a.bz,dirx:a.dirx,dirz:a.dirz,len:a.len,isChamfer:a.isChamfer,startEdge:a.i,endEdge:a.i})}if(n.length>1){let a=n[0],c=n[n.length-1];c.endEdge===t.length-1&&a.startEdge===0&&Math.hypot(c.bx-a.ax,c.bz-a.az)<.5&&c.dirx*a.dirx+c.dirz*a.dirz>.985&&(a.ax=c.ax,a.az=c.az,a.len+=c.len,a.isChamfer=a.isChamfer||c.isChamfer,n.pop())}return n}var Yi=[[0,0],[150,.6],[300,1.8],[450,3.6],[600,6.2],[750,9.4],[900,13],[1050,16.6],[1200,19.9],[1350,22.8],[1500,25.4],[1617,27]],Yh=1;function bS(i){Yh=Number.isFinite(i)&&i>0?i:1}function SS(){return Yh}var qh=Yi.length,Lm=Yi.map((i,e)=>{if(e===0||e===qh-1)return 0;let t=Yi[e-1],n=Yi[e+1];return(n[1]-t[1])/(n[0]-t[0])});function ES(i,e,t,n,s,r){let o=i*i,a=o*i,c=2*a-3*o+1,l=a-2*o+i,u=-2*a+3*o,h=a-o;return c*e+l*r*n+u*t+h*r*s}function TS(i){if(i<=Yi[0][0])return Yi[0][1];let e=Yi[qh-1];if(i>=e[0])return e[1];for(let t=0;t<qh-1;t++){let[n,s]=Yi[t],[r,o]=Yi[t+1];if(i>=n&&i<=r){let a=r-n,c=a>0?(i-n)/a:0;return ES(c,s,o,Lm[t],Lm[t+1],a)}}return e[1]}function Xh(i){return TS(i)*Yh}function Nm(i){function e(t,n){if(!i||i.length<2)return Xh(0);let s=gs(t,n,i);return Xh(s)}return{groundHeight:e,heightAtChainage:Xh,setExaggeration:bS,getExaggeration:SS}}var ga=7,wS=3,Dm=ga+wS,AS=.03,RS=3.2,Fm=-.06,CS=4870466,Um=[9078112,7039843,8016448,5592655,7630666,7232847,6249034,8153690],Om=4;function IS(){let t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d"),s=n.createImageData(256,256),r=s.data,a=256/13;for(let c=0;c<256;c++){let l=Math.floor(c/a),h=c-l*a<2;for(let d=0;d<256;d++){let f=d/256*16,p=c/256*16,x=150,m=146,g=134,_=en(f,p,16,4,61)-.5;x+=_*34,m+=_*32,g+=_*28;let M=Math.floor((d+l*37)/(256/5)),y=(Jn(M,l,17)-.5)*22;x+=y,m+=y,g+=y,h&&(x*=.62,m*=.62,g*=.6);let b=en(f*.35,p*.9+4,16,3,83);if(b>.56){let T=Math.min(1,(b-.56)*4.5);x*=1-.35*T,m*=1-.33*T,g*=1-.28*T}let E=Jn(d,c,97),w=E>.92?(E-.92)*200:0;x+=w,m+=w,g+=w*.9;let v=(c*256+d)*4;r[v]=Math.max(0,Math.min(255,x)),r[v+1]=Math.max(0,Math.min(255,m)),r[v+2]=Math.max(0,Math.min(255,g)),r[v+3]=255}}return n.putImageData(s,0,0),Qs(t,[1/Om,1/Om])}function km(i){let e=new st,t=Im(i.streetPaths),n=Nm(t),s=n.groundHeight,r=PS(i.streetPaths,s);r&&e.add(r);let o=r?{road:r.children[0].material,pavement:r.children[1].material}:{},a=NS(i.buildings,s);a&&e.add(a),e.add(OS(i,s)),e.add(BS(s));let c=zS(e),l=new wo(CS,.0095);return{group:e,streetLine:t,nearestStreetPoint:Pm(t),fog:l,groundHeight:s,setExaggeration:n.setExaggeration,getExaggeration:n.getExaggeration,lights:c,surfaces:o}}function PS(i,e){let t=[],n=[];for(let r of i){if(r.length<2)continue;let o=LS(r,e);o&&(t.push(o.road),n.push(o.paving))}if(t.length===0)return null;let s=new st;return s.position.y=AS,s.add(new He(rt(t,!1),new Mi({map:Sm(),roughness:1,metalness:0}))),s.add(new He(rt(n,!1),new Mi({map:Em(),roughness:1,metalness:0}))),s}function LS(i,e){let t=i.length,n=[],s=[],r=0;for(let a=0;a<t;a++){let c=i[Math.max(0,a-1)],l=i[Math.min(t-1,a+1)],u=l[0]-c[0],h=l[1]-c[1],d=Math.hypot(u,h)||1;n.push([-h/d,u/d]),a>0&&(r+=Math.hypot(i[a][0]-i[a-1][0],i[a][1]-i[a-1][1])),s.push(r)}let o=(a,c,l)=>{let u=[],h=[],d=[],f=Math.abs(c-a);for(let x=0;x<t;x++){let[m,g]=i[x],[_,M]=n[x],y=s[x]/l,b=m+_*a,E=g+M*a,w=m+_*c,v=g+M*c;u.push(b,e?e(b,E):0,E),u.push(w,e?e(w,v):0,v),h.push(0,y,f/l,y)}for(let x=0;x<t-1;x++){let m=x*2,g=x*2+1,_=(x+1)*2,M=(x+1)*2+1;d.push(m,g,M,m,M,_)}let p=new pt;return p.setAttribute("position",new je(u,3)),p.setAttribute("uv",new je(h,2)),p.setIndex(d),p.computeVertexNormals(),p};return{road:o(-ga,ga,bm),paving:rt([o(-Dm,-ga,Gh),o(ga,Dm,Gh)],!1)}}function NS(i,e){let t=[],n=0;if(i.forEach((a,c)=>{let l=FS(a,c,e);l?t.push(l):n++}),t.length===0)return null;n>0&&console.warn(`[world] skipped ${n}/${i.length} buildings with bad footprints`);let s=rt(t,!1),r=new Ze({vertexColors:!0,flatShading:!0,map:IS()}),o=new He(s,r);return o.name="buildings",o}var DS=3;function FS(i,e,t){let{footprint:n,levels:s}=i;if(!n||n.length<3)return null;let r=Math.max(1,s||1)*RS;try{let o=new Hr;o.moveTo(n[0][0],-n[0][1]);for(let d=1;d<n.length;d++)o.lineTo(n[d][0],-n[d][1]);o.closePath();let a=t?DS:0,c=new Go(o,{depth:r+a,bevelEnabled:!1,curveSegments:1});if(c.rotateX(-Math.PI/2),t){let d=0,f=0;for(let[x,m]of n)d+=x,f+=m;d/=n.length,f/=n.length;let p=t(d,f);c.translate(0,p-a,0)}let l=$h(e,i),u=c.attributes.position.count,h=new Float32Array(u*3);for(let d=0;d<u;d++)h[d*3]=l.r,h[d*3+1]=l.g,h[d*3+2]=l.b;return c.setAttribute("color",new je(h,3)),c}catch{return null}}function $h(i,e){let t=Math.abs(US(`${i}:${e.footprint[0][0]}:${e.footprint[0][1]}`)),n=new Me(Um[t%Um.length]),s={h:0,s:0,l:0};n.getHSL(s);let r=(t%17/17-.5)*.12,o=new Me;return o.setHSL(s.h,s.s,Math.min(.85,Math.max(.08,s.l+r))),o}function US(i){let e=0;for(let t=0;t<i.length;t++)e=(e<<5)-e+i.charCodeAt(t),e|=0;return e}function OS(i,e){let t=1/0,n=-1/0,s=1/0,r=-1/0;for(let g of i.buildings)for(let[_,M]of g.footprint)_<t&&(t=_),_>n&&(n=_),M<s&&(s=M),M>r&&(r=M);let o=400,a=n-t+o*2,c=r-s+o*2,l=(t+n)/2,u=(s+r)/2,h=Math.max(1,Math.round(a/10)),d=Math.max(1,Math.round(c/10)),f=new Ot(a,c,h,d);if(f.rotateX(-Math.PI/2),e){let g=f.attributes.position;for(let _=0;_<g.count;_++){let M=g.getX(_)+l,y=g.getZ(_)+u;g.setY(_,e(M,y)+Fm)}g.needsUpdate=!0,f.computeVertexNormals()}let p=wm();p.repeat.set(a/Vh,c/Vh);let x=new Ze({map:p}),m=new He(f,x);return m.position.set(l,e?0:Fm,u),m}var Zh=-719,Kh=1303;function BS(i){let e=new Ot(80,14,20,2);e.rotateX(-Math.PI/2);let t=-.483,n=.876;if(e.rotateY(Math.atan2(-n,t)),i){let u=e.attributes.position;for(let h=0;h<u.count;h++){let d=u.getX(h)+Zh,f=u.getZ(h)+Kh;u.setY(h,i(d,f)+.02)}u.needsUpdate=!0,e.computeVertexNormals()}let s=new He(e,new Ze({map:Am(),transparent:!0,depthWrite:!1}));s.position.set(Zh,i?0:.02,Kh),s.name="elm-row-gardens";let r=924192,o=()=>{r|=0,r=r+1831565813|0;let u=Math.imul(r^r>>>15,1|r);return u=u+Math.imul(u^u>>>7,61|u)^u,((u^u>>>14)>>>0)/4294967296},a=[];for(let u=0;u<26;u++){let h=(o()-.5)*74,d=(o()-.5)*10,f=new ri(1,6,4),p=.5+o()*1.3;f.scale(.9+o()*1.6,p,.9+o()*1.6),f.rotateY(o()*Math.PI);let x=Zh+t*h-n*d,m=Kh+n*h+t*d,g=i?i(x,m):0;f.translate(x,g+p*.55,m),a.push(f)}let c=new He(rt(a),new Ze({color:3029024}));c.name="elm-row-bushes";let l=new st;return l.add(s,c),l}function zS(i){let e=new Xo(9147296,3814180,3.9);i.add(e);let t=new Ys(13621480,1.15);t.position.set(-200,300,150),t.castShadow=!1,i.add(t);let n=new Zo(4999224,1.4);return i.add(n),{hemi:e,sun:t,ambient:n}}var kS=16747082,Bm=18,HS=5,zm=10;function Hm(i){let e=new ci(kS,Bm,zm,2);e.position.set(.15,-.15,.1),i.add(e);let t=1,n=!0;function s(c){t=c,o()}function r(c){n=!!c,o()}function o(){e.distance=n?Math.max(.05,zm*t):.05}function a(c){let l=Math.sin(c*11.3)*.5+Math.sin(c*27.1)*.3+Math.sin(c*4.7)*.2;e.intensity=n?(Bm+l*HS*.3333)*t:0}return{light:e,update:a,setDarkness:s,setToggle:r}}var Bl=Math.PI/2-.05,zl={KeyW:"forward",ArrowUp:"forward",KeyS:"backward",ArrowDown:"backward",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right"};function Vm(i,e,{nearestStreetPoint:t,spawn:n,groundHeight:s}){let r=n.yaw||0,o=0,a=s?s(n.x,n.z):0;i.position.set(n.x,a+1.7,n.z),i.rotation.order="YXZ",x();let c=new Set,l=!1,u=0,h=0,d=!1,f=!0,p=!0;function x(){i.rotation.set(o,r,0)}function m(R){f&&zl[R.code]&&(c.add(zl[R.code]),R.preventDefault())}function g(R){zl[R.code]&&c.delete(zl[R.code])}function _(R){if(f&&(l=!0,u=R.clientX,h=R.clientY,e.setPointerCapture?.(R.pointerId),!d&&e.requestPointerLock))try{let I=e.requestPointerLock();I&&typeof I.catch=="function"&&I.catch(()=>{})}catch{}}function M(R){if(d){r-=(R.movementX||0)*.0025,o-=(R.movementY||0)*.0025,o=Gm(o,-Bl,Bl),x();return}if(!l)return;let I=R.clientX-u,L=R.clientY-h;u=R.clientX,h=R.clientY,r-=I*.0035,o-=L*.0035,o=Gm(o,-Bl,Bl),x()}function y(R){l=!1,e.releasePointerCapture?.(R.pointerId)}function b(){d=document.pointerLockElement===e}window.addEventListener("keydown",m),window.addEventListener("keyup",g),e.addEventListener("pointerdown",_),window.addEventListener("pointermove",M),window.addEventListener("pointerup",y),document.addEventListener("pointerlockchange",b);function E(R){f=!!R,f||(c.clear(),l=!1)}function w(R){f&&(R?c.add("forward"):c.delete("forward"))}function v(R){if(!f)return;let I=0,L=0;if(c.has("forward")&&(L-=1),c.has("backward")&&(L+=1),c.has("left")&&(I-=1),c.has("right")&&(I+=1),I!==0||L!==0){let B=Math.hypot(I,L);I/=B,L/=B;let k=Math.sin(r),U=Math.cos(r),H=-k,G=-U,ne=U,oe=-k,pe=(H*-L+ne*I)*14*R,V=(G*-L+oe*I)*14*R,K=i.position.x+pe,de=i.position.z+V,{point:be,distance:we}=t(K,de);if(be&&we>16){let Z=16/we;K=be[0]+(K-be[0])*Z,de=be[1]+(de-be[1])*Z}i.position.x=K,i.position.z=de}s&&p&&(i.position.y=s(i.position.x,i.position.z)+1.7)}function T(){window.removeEventListener("keydown",m),window.removeEventListener("keyup",g),e.removeEventListener("pointerdown",_),window.removeEventListener("pointermove",M),window.removeEventListener("pointerup",y),document.removeEventListener("pointerlockchange",b)}return{update:v,dispose:T,setEnabled:E,setForward:w,setYFollow:R=>{p=!!R}}}function Gm(i,e,t){return Math.max(e,Math.min(t,i))}var xa=[{id:"01b27ac5",landmark:"Spey Lounge",kind:"pub",chainage:82},{id:"081eb3ed",landmark:"Kvasa",kind:"bakery",chainage:196},{id:"0e21d212",landmark:"Toast",kind:"cafe",chainage:394},{id:"124327ee",landmark:"Alhambra Bar",kind:"pub",chainage:467},{id:"1a29e4f5",landmark:"Storries Home Bakery",kind:"bakery",chainage:621},{id:"1f6380d3",landmark:"Cupp",kind:"cafe",chainage:725},{id:"26210448",landmark:"GAIA Italian Delicatessen",kind:"cafe",chainage:862},{id:"2b05b3fb",landmark:"Golden Ambal",kind:"restaurant",chainage:994},{id:"2dd9394b",landmark:"Otherworld",kind:"pub",chainage:1056},{id:"315d8c0e",landmark:"Not Just Coffee",kind:"cafe",chainage:1142},{id:"3706c73f",landmark:"The Joker & The Thief",kind:"pub",chainage:1250},{id:"51834c74",landmark:"Guajira",kind:"cafe",chainage:1391}];function Wm(){return new Map(xa.map(i=>[i.id,i]))}function Xm(i){return Array.isArray(i)?i.length:0}var VS=6,qm=40,WS=60,XS=1.35,qS=85,Zm=[4867638,4276026,5525567,3882292,5195578,3749420,4737602,5919040],Ym=[7025448,7363619,3032640,5849646,4011091,6703646],YS=new ai;function Km(i,e){return YS.load(i,t=>{t.colorSpace=tt,e&&e(t)})}function er(i,e,t){let n=Math.imul(i,374761393)^Math.imul(e,668265263)^Math.imul(t,2246822519);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function ZS(i,e,t){let s=document.createElement("canvas");s.width=s.height=64;let r=s.getContext("2d"),o=r.createImageData(64,64),a=o.data,c={r:(i>>16&255)/255,g:(i>>8&255)/255,b:(i&255)/255};for(let u=0;u<64;u++)for(let h=0;h<64;h++){let d=t?1+.14*Math.sin(u*1.9)+(er(h,u,e)-.5)*.1:1.05+.1*Math.sin(h*2.3)+(er(h,u,e)-.5)*.16,f=1-.18*er(h>>3,u>>3,e+7)*er(h>>4,u>>4,e+13),p=1-.2*Math.pow(u/64,3),x=d*f*p,m=(u*64+h)*4;a[m]=Math.min(255,c.r*255*x),a[m+1]=Math.min(255,c.g*255*x),a[m+2]=Math.min(255,c.b*255*x),a[m+3]=255}r.putImageData(o,0,0);let l=new Et(s);return l.colorSpace=tt,l}var Jh=new Map;function _a(i,e){let t=i*2+(e?1:0);return Jh.has(t)||Jh.set(t,new Ze({map:ZS(i,i&65535^(e?40503:0),e),flatShading:!0})),Jh.get(t)}function KS(){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createImageData(64,64),s=n.data,r={r:.4,g:.38,b:.32};for(let a=0;a<64;a++)for(let c=0;c<64;c++){let l=1+(er(c,a,2465)-.5)*.12,u=Math.floor(a/5),h=er(u,0,707),f=h>.45&&h<.85?1-.28*er(c>>1,u,1915):1,p=Math.min(c,63-c)/(64*.5),x=Math.min(a,63-a)/(64*.5),m=1-.22*(1-Math.min(p,x)),g=l*f*m,_=(a*64+c)*4;s[_]=Math.min(255,r.r*255*g),s[_+1]=Math.min(255,r.g*255*g),s[_+2]=Math.min(255,r.b*255*g),s[_+3]=255}t.putImageData(n,0,0);let o=new Et(e);return o.colorSpace=tt,o}var jh=null;function Qh(){return jh||(jh=KS()),jh}function ed(i,e,t){let n=Wm(),s=QS(e),r=Math.max(1,s-qm-WS),o=i.length>1?r/(i.length-1):0,a=[];return i.forEach((c,l)=>{let u=qm+l*o,h=t?n.get(c.id):null,d=h?h.chainage:u,f=l%2===0?1:-1,p=h&&h.offset!=null?h.offset:VS,x=e1(e,d);if(!x)return;let[m,g]=x.tangent,_=-g,M=m,y=x.point[0]+_*p*f,b=x.point[1]+M*p*f,E=x.point[0]-y,w=x.point[1]-b,v=Math.atan2(E,w);a.push({id:c.id,index:l,dist:d,baseDist:u,side:f,coatIndex:l%Zm.length,px:y,pz:b,baseY:v,isAnchor:!!h,landmark:h?h.landmark:null})}),a}function $m(i,e,t,n){let s=i.catalog&&Array.isArray(i.catalog.comics)?i.catalog.comics.filter(p=>p.npc):i.manifest.comics||[],r=e.streetLine||[],o=[],a=new Map,c=(p,x)=>{p&&(a.has(p)||a.set(p,[]),a.get(p).push(x))},u=typeof location<"u"&&["localhost","127.0.0.1"].includes(location.hostname)&&typeof window<"u"&&window.__mcgrotForceAnchors!=null?!!window.__mcgrotForceAnchors:!0;ed(s,r,u).forEach(p=>{let x=s[p.index],m=$S(i,x,Zm[p.coatIndex],c,p.isAnchor),g=e.groundHeight?e.groundHeight(p.px,p.pz):0;m.group.position.set(p.px,g,p.pz),m.group.rotation.y=p.baseY,m.baseY=p.baseY,m.phase=p.index*2.1,m.isAnchor=p.isAnchor,m.anchorLandmark=p.landmark,t.add(m.group),o.push(m)});for(let[p,x]of a)Km(Nn(i,p),m=>{for(let g of x)g.map=m,g.color.setScalar(g.userData.anchorGlow||4.7),g.needsUpdate=!0});let d=new F;function f(p,x){let m=n?n.position:null;for(let g=0;g<o.length;g++){let _=o[g];if(_.tick(x),m&&!_.comicLoaded){let M=_.group.position;Math.hypot(m.x-M.x,m.z-M.z)<qS&&_.loadComic()}}}return{npcs:o,update:f,list:s,anchorsEnabled:u}}function $S(i,e,t,n,s){let r=s?XS:1,o=e.npc.build||{height:1.9,girth:1,headScale:1.5},a=o.height,c=o.girth,l=o.headScale,u=new st,h=_a(t,!1),d=new Ze({color:1381391,flatShading:!0}),f=.12,p=a*.3,x=.52*c,m=.34*c,g=a*.48,_=.34*l,M=f+p,y=M+g,b=y+_*.5+.02,E=b+_*.5,w=x*.24,v=[],T=[];for(let ee of[-1,1]){let $=new et(x*.4,f,m*1.5);$.translate(ee*w,f*.5,m*.2),T.push($)}for(let ee of[-1,1]){let $=new et(x*.36,p,m*.75);$.translate(ee*w,f+p*.5,0),v.push($)}{let ee=new et(x,g,m);ee.translate(0,M+g*.5,0),v.push(ee)}let R=y-g*.14,I=g*.62;for(let ee of[-1,1]){let $=new et(.13,I,.13);$.rotateX(-1.15),$.rotateZ(ee*.25),$.translate(ee*(x*.5+.02),R-I*.28,m*.5+.06),v.push($)}let L=new He(rt(v),h),B=new He(rt(T),d);u.add(L,B);let k=_a(new Me(t).multiplyScalar(.62).getHex(),!0),U=new Ze({color:new Me(9077874).multiplyScalar(4.7*r)});U.userData.anchorGlow=4.7*r,n(e.npc.face,U);let H=[k,k,k,k,U,k],G=new He(new et(_,_,_*.85),H);G.position.set(0,b,0),u.add(G);let ne=0;for(let ee of e.npc.name||"")ne=ne*31+ee.charCodeAt(0)|0;let oe=new He(new et(_*.95,.09,_*.85),new Ze({color:Ym[Math.abs(ne)%Ym.length],flatShading:!0}));oe.position.set(0,y+.02,0),u.add(oe);let pe=g*.55,V=4.7*r,K=new Ze({map:Qh(),color:new Me(V,V,V),side:Ft}),de=new He(new Ot(1,1),K);de.position.set(0,M+g*.55,m*.5+.17),de.scale.set(pe*.7,pe,1),u.add(de);let be=new Ze({color:8680542,flatShading:!0});for(let ee of[-1,1]){let $=new He(new et(.09,.07,.06),be);$.position.set(ee*pe*.28,M+g*.55-pe*.48,m*.5+.18),u.add($)}let we=JS(e.npc.name,e.npc.blurb);we.position.set(0,E+.42,0),u.add(we);let Z={group:u,head:G,comicMesh:de,comic:e,name:e.npc.name,blurb:e.npc.blurb,voice:null,baseY:0,phase:0,speaking:!1,comicLoaded:!1,loadComic(){Z.comicLoaded||(Z.comicLoaded=!0,Km(Nn(i,e.image),ee=>{K.map=ee,K.color.setScalar(V),K.needsUpdate=!0;let $=ee.image;$&&$.width&&$.height&&de.scale.set(pe*($.width/$.height),pe,1)}))},setSpeaking(ee){Z.speaking=!!ee,Z.speaking||G.rotation.set(0,0,0)},tick(ee){if(u.rotation.z=Math.sin(ee*.6+Z.phase)*.01,u.rotation.y=Z.baseY+Math.sin(ee*.4+Z.phase)*.008,Z.speaking){let $=ee*25+Z.phase;G.rotation.y=Math.sin($)*.09,G.rotation.x=(Math.sin($*.5)+1)*.05}}};return Z}function JS(i,e){let t=document.createElement("canvas");t.width=512,t.height=160;let n=t.getContext("2d");n.fillStyle="rgba(20, 22, 16, 0.82)",jS(n,6,6,t.width-12,t.height-12,14),n.fill(),n.lineWidth=2,n.strokeStyle="rgba(120, 116, 92, 0.6)",n.stroke(),n.textAlign="center",n.fillStyle="#d8d4c0",n.font='bold 44px "Courier New", monospace',n.fillText(i,t.width/2,68,t.width-40),n.fillStyle="#a9a48c",n.font='italic 30px "Courier New", monospace',n.fillText(e,t.width/2,116,t.width-36);let s=new Et(t);s.colorSpace=tt;let r=new vi({map:s,transparent:!0,depthTest:!0}),o=new Bi(r);return o.scale.set(2.4,.75,1),o}function jS(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function QS(i){let e=0;for(let t=0;t<i.length-1;t++)e+=Math.hypot(i[t+1][0]-i[t][0],i[t+1][1]-i[t][1]);return e}function e1(i,e){if(!i||i.length<2)return null;let t=0;for(let c=0;c<i.length-1;c++){let[l,u]=i[c],[h,d]=i[c+1],f=h-l,p=d-u,x=Math.hypot(f,p);if(t+x>=e){let m=x>0?(e-t)/x:0,g=x||1;return{point:[l+f*m,u+p*m],tangent:[f/g,p/g]}}t+=x}let n=i[i.length-1],s=i[i.length-2],r=n[0]-s[0],o=n[1]-s[1],a=Math.hypot(r,o)||1;return{point:[n[0],n[1]],tangent:[r/a,o/a]}}var kl=256,Hl=128,Gl=16,Jm=["#0e0c0b","#120f1a","#101512","#12100a","#0a1210","#150d0d","#0c1015"],jm=['"Arial Narrow", "Helvetica Neue", Arial, sans-serif','"Futura", "Century Gothic", "Helvetica Neue", sans-serif','Georgia, "Times New Roman", serif'];function t1(i,e,t,n,s,r,o){let a=s1(o);i.save(),i.beginPath(),i.rect(e,t,n,s),i.clip(),i.fillStyle="#171410",i.fillRect(e,t,n,s);let c=Math.round(n*(.04+a()*.024));for(let w of[e,e+n-c]){i.fillStyle="#332e28",i.fillRect(w,t,c,s);for(let v=0;v<40;v++)i.fillStyle=`rgba(0,0,0,${.05+a()*.12})`,i.fillRect(w+a()*c,t+a()*s,1+a()*2,1+a()*2)}let l=e+c,u=n-c*2,h=a(),d=h<.3,f=t+s*(d?.2:.08);if(d){let w=t+s*.06,v=f-w,T=["#3a2420","#243a2e","#2a2438"][Math.floor(a()*3)],R="#d8d0c0",I=Math.max(3,Math.round(n*.045));for(let L=l;L<l+u;L+=I)i.fillStyle=(L-l)/I%2<1?T:R,i.beginPath(),i.moveTo(L,f),i.lineTo(Math.min(L+I,l+u),f),i.lineTo(Math.min(L+I-v*.35,l+u),w),i.lineTo(Math.max(L-v*.35,l),w),i.closePath(),i.fill();i.fillStyle="rgba(0,0,0,0.25)",i.fillRect(l,f-2,u,2)}let p=t+s*.4;if(h<.55)for(let w=p;w<t+s;w+=Math.max(2,s*.03))i.fillStyle=Math.round((w-p)/Math.max(2,s*.03))%2===0?"#211d18":"#15110d",i.fillRect(l,w,u,Math.max(2,s*.03));else{let w=t+s;i.fillStyle="#14181a",i.fillRect(l,p,u,w-p);let v=3+Math.floor(a()*2);i.strokeStyle="rgba(0,0,0,0.65)",i.lineWidth=2;for(let I=1;I<v;I++){let L=l+u/v*I;i.beginPath(),i.moveTo(L,p),i.lineTo(L,w),i.stroke()}i.strokeStyle="rgba(0,0,0,0.5)",i.lineWidth=1;let T=p+(w-p)*.55;i.beginPath(),i.moveTo(l,T),i.lineTo(l+u,T),i.stroke(),i.fillStyle="rgba(150,158,160,0.12)",i.beginPath(),i.moveTo(l,p),i.lineTo(l+u*.42,p),i.lineTo(l+u*.14,w),i.lineTo(l,w),i.closePath(),i.fill();let R=(w-p)*.16;i.fillStyle=["#2b2016","#1c231e","#241c26"][Math.floor(a()*3)],i.fillRect(l,w-R,u,R)}let x=f,m=p-f,g=Jm[Math.floor(a()*Jm.length)];i.fillStyle=g,i.fillRect(l,x,u,m),i.strokeStyle="rgba(0,0,0,0.6)",i.lineWidth=1,i.strokeRect(l+.5,x+.5,u-1,m-1);let _=jm[Math.floor(a()*jm.length)],M=a()<.75?"bold":"900",b=a()<.3?r.replace(/\w\S*/g,w=>w.charAt(0).toUpperCase()+w.slice(1).toLowerCase()):r.toUpperCase(),E=200+Math.floor(a()*30);i.fillStyle=`rgb(${E},${E-15},${E-45})`,i.textAlign="center",i.textBaseline="middle";try{i.letterSpacing="0.5px"}catch{}n1(i,b,l+u/2,x+m/2,u-12,m-6,_,M);for(let w=0;w<6;w++){i.fillStyle=`rgba(0,0,0,${.05+a()*.08})`;let v=e+a()*n;i.fillRect(v,t,1+a()*3,s)}i.restore()}function n1(i,e,t,n,s,r,o,a){o=o||'"Arial Narrow", "Helvetica Neue", Arial, sans-serif',a=a||"bold";let c=4;for(let u=22;u>=c;u--){if(i.font=`${a} ${u}px ${o}`,i.measureText(e).width<=s){i.fillText(e,t,n);return}let h=i1(i,e,s);if(h&&u<=18&&h.length===2){let d=u*1.05;if(d*2<=r){i.fillText(h[0],t,n-d/2),i.fillText(h[1],t,n+d/2);return}}}i.font=`bold ${c}px ${o}`;let l=e;for(;l.length>3&&i.measureText(l+"\u2026").width>s;)l=l.slice(0,-1);i.fillText(l+(l.length<e.length?"\u2026":""),t,n)}function i1(i,e,t){let n=e.split(" ");if(n.length<2)return null;for(let s=1;s<n.length;s++){let r=n.slice(0,s).join(" "),o=n.slice(s).join(" ");if(i.measureText(r).width<=t&&i.measureText(o).width<=t)return[r,o]}return null}function s1(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function r1(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function Qm(i){let e=[...new Set(i)],t=Math.max(1,Math.ceil(e.length/Gl)),n=document.createElement("canvas");n.width=Gl*kl,n.height=t*Hl;let s=n.getContext("2d");s.fillStyle="#171410",s.fillRect(0,0,n.width,n.height);let r=new Map;e.forEach((a,c)=>{let l=c%Gl,u=Math.floor(c/Gl),h=l*kl,d=u*Hl;t1(s,h,d,kl,Hl,a,r1(a)),r.set(a,{u0:h/n.width,u1:(h+kl)/n.width,vTop:1-d/n.height,vBot:1-(d+Hl)/n.height})});let o=new Et(n);return o.colorSpace=tt,o.anisotropy=4,{texture:o,uvFor:r,count:e.length}}var di=.05,e0=.25,td=.3,o1=3,nd=1.2,t0=250,_t=3.2,n0=.3,tr=.4,i0=.08,s0=.16,r0=1.5,o0=6.4,a1=2.5,c1=15,ya=.06,l1=2.2;function a0(i,e,t){let n=i&&i.facadeManifest,s=i&&i.facadeAtlas,r=i&&i.leith&&i.leith.buildings||[],o=e&&e.streetLine||[],a=e&&e.nearestStreetPoint,c=e&&e.groundHeight;if(!n||!s||!r.length||!a||o.length<2)return{group:null,count:0,update(){}};let l=0,u=s.buildings||{},h=.5,d=.5,f=[];for(let V of n.buildings)for(let K of V.businesses||[])f.push(K.name);let p=f.length?Qm(f):null,x=[],m=[],g=[],_=[],M=0;function y(V,K,de,be){let we=de-V,Z=be-K,ee=Math.hypot(we,Z)||1;return[-Z/ee,0,we/ee]}let b=s.pages.map(()=>({positions:[],uvs:[],colors:[],normals:[],indices:[],quadCount:0})),E=new Map;for(let V of n.buildings){let K=u[V.buildingIndex];if(!K)continue;let de=K.regions.find($=>$.kind!=="corner")||K.regions[0];if(!de)continue;let be=s.pages[K.page],we=1/be.width,Z=1/be.height,ee=E.get(K.page)||[];ee.push({bi:V.buildingIndex,chainage:V.chainage,region:de,u0Full:(de.x+h)*we,u1Full:(de.x+de.w-h)*we,vTop:1-(de.y+d)*Z,vBot:1-(de.y+de.h-d)*Z}),E.set(K.page,ee)}function w(V,K,de,be,we,Z,ee,$,_e,ve,Se){let Y=V.quadCount*4,fe=ve+l,te=Se+l;V.positions.push(Z,fe,ee,$,fe,_e,$,te,_e,Z,te,ee),V.uvs.push(K,de,be,de,be,we,K,we),V.colors.push(1,1,1,1,1,1,1,1,1,1,1,1);let[ue,ae,me]=y(Z,ee,$,_e);V.normals.push(ue,ae,me,ue,ae,me,ue,ae,me,ue,ae,me),V.indices.push(Y,Y+1,Y+2,Y,Y+2,Y+3),V.quadCount++}function v(V,K,de,be,we,Z,ee,$,_e,ve,Se,Y,fe,te,ue){let ae=V.quadCount*4,me=ve+l,J=Se+l;V.positions.push(Z,me,ee,$,me,_e,$,J,_e,Z,J,ee),V.uvs.push(K,de,be,de,be,we,K,we),V.colors.push(...Y,...fe,...te,...ue);let[he,ge,De]=y(Z,ee,$,_e);V.normals.push(he,ge,De,he,ge,De,he,ge,De,he,ge,De),V.indices.push(ae,ae+1,ae+2,ae,ae+2,ae+3),V.quadCount++}let T=.1,R=1.1;function I(V,K,de,be,we,Z,ee,$,_e,ve){let Se=be-we,Y=we+Se*Math.min(1,_t/(Z||_t)),fe=_e-ee,te=ve-$,ue=Math.hypot(fe,te)||1,ae=Ce=>[ee+fe*Ce,$+te*Ce],me=Ce=>K+(de-K)*Ce,J=[1,1,1],he=[0,0,0],ge=Math.min(.4,Math.max(T,R/ue));if(1-2*ge<=.001)return w(V,K,we,de,Y,ee,$,_e,ve,di,_t),1;let De=[[0,ge,he,J],[ge,1-ge,J,J],[1-ge,1,J,he]];for(let[Ce,N,Le,Ue]of De){let[C,S]=ae(Ce),[P,D]=ae(N);v(V,me(Ce),we,me(N),Y,C,S,P,D,di,_t,Le,Ue,Ue,Le)}return De.length}function L(V,K){let de=V*73856093^K*19349663;return de=Math.imul(de^de>>>13,2246822507),de^=de>>>16,de>>>0}let B=0,k=(V,K,de,be,we,Z,ee,$,_e,ve,Se,Y,fe,te=0)=>{let ue=ya*(de-K),ae=K+ue,me=de-ue,J=be-we,he=J>0?we+Z*J:we,ge=be-i0*J,De=Math.max(.1,(ge-he)/(J||1)*ee),Ce=Y,N=0;for(;Ce<fe-1e-6&&De>1e-4;){let Le=Math.min(De,fe-Ce),Ue=Le/De,C=(L(te,N)&1)===0,S=C?ge:he,D=S+((C?he:ge)-S)*Ue;w(V,ae,S,me,D,$,_e,ve,Se,Ce,Ce+Le),B++,Ce+=Le,N++}};function U(V){let K=-1,de=1/0;return s.pages.forEach((be,we)=>{if(V>=be.chainageMin&&V<=be.chainageMax)K=we,de=0;else if(K===-1||de>0){let Z=V<be.chainageMin?be.chainageMin-V:V-be.chainageMax;Z<de&&(de=Z,K=we)}}),K}for(let V of n.buildings){let K=V.buildingIndex,de=r[K];if(!de||!de.footprint||de.footprint.length<3)continue;let be=jr(de,a);if(!be.length)continue;let we=0,Z=0;for(let ve of de.footprint)we+=ve[0],Z+=ve[1];we/=de.footprint.length,Z/=de.footprint.length;let ee=u[K],$=new Map,_e=0;if(ee)for(let ve of be){let Se=Math.hypot(ve.bx-ve.ax,ve.bz-ve.az);if(Se<td)continue;let Y=ee.regions.find(te=>ve.isChamfer?te.kind==="corner":te.kind!=="corner")||ee.regions[0];if(!Y||Se/Y.widthM>nd)continue;let fe=$.get(Y)||{totalSpan:0,count:0,cursor:0};fe.totalSpan+=Se,fe.count+=1,$.set(Y,fe)}be.forEach((ve,Se)=>{let Y=ve.bx-ve.ax,fe=ve.bz-ve.az,te=Math.hypot(Y,fe);if(te<td)return;let ue=ve.ax,ae=ve.az,me=Y,J=fe,he=-fe/te,ge=Y/te,De=(ve.ax+ve.bx)/2,Ce=(ve.az+ve.bz)/2;he*(De-we)+ge*(Ce-Z)<0&&(he=-he,ge=-ge,ue=ve.bx,ae=ve.bz,me=-Y,J=-fe);let N=Ue=>({x:ue+me*Ue+he*e0,z:ae+J*Ue+ge*e0});l=c?c(De,Ce):0;let Le=ee?ee.regions.find(Ue=>ve.isChamfer?Ue.kind==="corner":Ue.kind!=="corner")||ee.regions[0]:null;if(Le){let Ue=s.pages[ee.page],C=b[ee.page],S=1/Ue.width,P=1/Ue.height,D=(Le.x+h)*S,O=(Le.x+Le.w-h)*S,W=1-(Le.y+d)*P,se=1-(Le.y+Le.h-d)*P,q=te/Le.widthM,re=Math.max(2,V.levels||2)*_t,Ee=Math.min(.75,Math.max(tr,_t/Le.heightM)),Fe=W-se,Pe=(E.get(ee.page)||[]).filter(xe=>xe.bi!==K),Ie=Pe.filter(xe=>Math.abs(xe.chainage-V.chainage)>=c1),Ge=Ie.length>=3?Ie:Pe,qe=[];if(q>a1){let xe=Math.min(1,Le.widthM/te),z=Math.max(0,.5-xe/2),ye=Math.min(1,.5+xe/2),ce=N(z),Ae=N(ye);qe.push({u0:D,u1:O,ax:ce.x,az:ce.z,bx:Ae.x,bz:Ae.z});let Re=[{side:0,innerT:z,dirSign:-1},{side:1,innerT:ye,dirSign:1}];for(let{side:le,innerT:Ne,dirSign:Oe}of Re){let ot=le===0?z:1-ye,ct=ot*te;if(ct<td)continue;let zt=Math.max(1,Math.round(ct/o0)),rn=ot/zt,Qn=V.businesses?V.businesses.length-_e:0,Ri=p?Math.max(0,Math.min(Qn,zt)):0;for(let tn=0;tn<zt;tn++){let Rn=Ne+Oe*tn*rn,Fn=Ne+Oe*(tn+1)*rn,nt=N(Math.min(Rn,Fn)),xt=N(Math.max(Rn,Fn));if(tn<Ri){let At=V.businesses[_e];_e++;let yt=p.uvFor.get(At.name);if(yt){let kt=M*4;x.push(nt.x,di+l,nt.z,xt.x,di+l,xt.z,xt.x,_t+l,xt.z,nt.x,_t+l,nt.z),m.push(yt.u0,yt.vBot,yt.u1,yt.vBot,yt.u1,yt.vTop,yt.u0,yt.vTop);{let[Ht,Gt,Sn]=y(nt.x,nt.z,xt.x,xt.z);_.push(Ht,Gt,Sn,Ht,Gt,Sn,Ht,Gt,Sn,Ht,Gt,Sn)}g.push(kt,kt+1,kt+2,kt,kt+2,kt+3),M++,B++}continue}if(Ge.length>=3){let At=L(K,Se*6151+le*331+tn)%Ge.length,yt=Ge[At],kt=Math.min(.75,Math.max(tr,_t/yt.region.heightM));k(C,yt.u0Full,yt.u1Full,yt.vTop,yt.vBot,kt,yt.region.heightM,nt.x,nt.z,xt.x,xt.z,di,_t,L(K,Se*6151+le*331+tn+1))}else Fe>0&&k(C,D,O,W,se,Ee,Le.heightM,nt.x,nt.z,xt.x,xt.z,di,_t,L(K,Se*6151+le*331+tn+1))}if(re>_t+1e-6){let tn=le===0?0:1,Rn=N(Math.min(Ne,tn)),Fn=N(Math.max(Ne,tn));if(Ge.length<3)Fe>0&&k(C,D,O,W,se,Ee,Le.heightM,Rn.x,Rn.z,Fn.x,Fn.z,_t,re,L(K,Se*4111+le*211+2));else{let nt=Ne,xt=0,At=-1,yt=0;for(;Math.abs(nt-Ne)<ot-1e-6&&yt++<64;){let kt=L(K,Se*4111+le*211+xt)%Ge.length;kt===At&&(kt=(kt+1)%Ge.length);let Ht=Ge[kt];At=kt;let Gt=ot-Math.abs(nt-Ne),Sn=Math.min(Gt,Math.max(Ht.region.widthM/te,1e-4)),un=nt+Oe*Sn,hn=N(Math.min(nt,un)),on=N(Math.max(nt,un)),Ci=Math.min(.75,Math.max(tr,_t/Ht.region.heightM));k(C,Ht.u0Full,Ht.u1Full,Ht.vTop,Ht.vBot,Ci,Ht.region.heightM,hn.x,hn.z,on.x,on.z,_t,re,L(K,Se*4111+le*211+xt)),nt=un,xt++}}}}}else if(q>nd){let xe=Math.min(1,Le.widthM/te),z=Math.max(0,.5-xe/2),ye=Math.min(1,.5+xe/2),ce=N(z),Ae=N(ye);qe.push({u0:D,u1:O,ax:ce.x,az:ce.z,bx:Ae.x,bz:Ae.z});let Re=Math.min(.75,Math.max(tr,_t/Le.heightM)),le=W-se,Ne=se+Re*le,ot=(1-Re)*Le.heightM,ct=O-D,zt=n0*ct,Qn=n0*Le.widthM/te,Ri=Math.max(0,ct-zt),tn=ya*ct,Rn=Math.max(0,Ri-2*tn),Fn=(At,yt,kt,Ht,Gt,Sn,un,hn)=>{let on=un===0?1:-1,Ci=di,io=0;for(;Ci<Le.heightM-1e-6&&ot>1e-4;){let so=Math.min(ot,Le.heightM-Ci),ou=so/ot,A=Ri>0&&hn>0?Math.min(tn+L(K,Se*977+un*97+io)%1e3/1e3*Rn,Ri):0,X=At+on*A,ie=yt+on*A,j=io%2===0,Q=j?Ne:W,Ve=Q+((j?W:Ne)-Q)*ou;w(C,X,Q,ie,Ve,kt,Ht,Gt,Sn,Ci,Ci+so),B++,Ci+=so,io++}},nt=z,xt=0;for(;nt>1e-6;){let At=Math.min(Qn,nt),yt=nt-At,kt=Qn>0?At/Qn:1,Ht=xt%2===0,Gt=Ht?D:D+zt,Sn=Ht?D+zt:D,un=Gt+(Sn-Gt)*kt,hn=N(yt),on=N(nt);Fn(un,Gt,hn.x,hn.z,on.x,on.z,0,xt),qe.push({u0:un,u1:Gt,ax:hn.x,az:hn.z,bx:on.x,bz:on.z,skipBase:!0,side:0}),nt=yt,xt++}for(nt=ye,xt=0;nt<1-1e-6;){let At=Math.min(Qn,1-nt),yt=nt+At,kt=Qn>0?At/Qn:1,Ht=xt%2===0,Gt=Ht?O:O-zt,Sn=Ht?O-zt:O,un=Gt+(Sn-Gt)*kt,hn=N(nt),on=N(yt);Fn(Gt,un,hn.x,hn.z,on.x,on.z,1,xt),qe.push({u0:Gt,u1:un,ax:hn.x,az:hn.z,bx:on.x,bz:on.z,skipBase:!0,side:1}),nt=yt,xt++}}else{let xe=$.get(Le),z,ye;if(xe&&xe.count>1&&xe.totalSpan>0){let Re=ya*(O-D),le=D+Re,Ne=O-Re,Oe=Math.max(0,Ne-le),ot=le+Oe*(xe.cursor/xe.totalSpan);xe.cursor+=te;let ct=le+Oe*(xe.cursor/xe.totalSpan);z=ot,ye=ct}else if(q<1/nd){let Re=Math.max(.08,q),le=(O-D)*Re/2,Ne=(L(K,Se)%1e3/1e3-.5)*.3,Oe=D+le+.5*(O-D)+Ne*(O-le-(D+le));z=Math.max(D,Oe-le),ye=Math.min(O,Oe+le)}else{let Re=ya*(O-D);z=D+Re,ye=O-Re}let ce=N(0),Ae=N(1);if(xe&&xe.count>1&&te<l1){let Re=Math.min(.9,_t/Le.heightM);qe.push({u0:z,u1:ye,ax:ce.x,az:ce.z,bx:Ae.x,bz:Ae.z,y0:_t,v0:se+(W-se)*Re})}else qe.push({u0:z,u1:ye,ax:ce.x,az:ce.z,bx:Ae.x,bz:Ae.z,groundFade:!0})}for(let xe of qe)if(!xe.skipBase){if(xe.groundFade){if(B+=I(C,xe.u0,xe.u1,W,se,Le.heightM,xe.ax,xe.az,xe.bx,xe.bz),Le.heightM>_t+1e-6){let z=se+(W-se)*Math.min(1,_t/(Le.heightM||_t));w(C,xe.u0,z,xe.u1,W,xe.ax,xe.az,xe.bx,xe.bz,_t,Le.heightM),B++}continue}w(C,xe.u0,xe.v0??se,xe.u1,xe.v1??W,xe.ax,xe.az,xe.bx,xe.bz,xe.y0??di,Le.heightM),B++}if(re-Le.heightM>r0){for(let xe of qe)if(xe.side===void 0)if(Ge.length>=3){let z=L(K,Se*8231+17)%Ge.length,ye=Ge[z],ce=Math.min(.75,Math.max(tr,_t/ye.region.heightM));k(C,ye.u0Full,ye.u1Full,ye.vTop,ye.vBot,ce,ye.region.heightM,xe.ax,xe.az,xe.bx,xe.bz,Le.heightM,re,L(K,Se*8231+18))}else Fe>0&&k(C,xe.u0,xe.u1,W,se,Ee,Le.heightM,xe.ax,xe.az,xe.bx,xe.bz,Le.heightM,re,L(K,Se*8231+18))}if(re-Le.heightM>r0&&qe.some(xe=>xe.side!==void 0)){let xe=W-se,z=W-i0*xe,ye=Math.max(se,z-s0*xe),ce=s0*Le.heightM,Ae=O-D,Re=ya*Ae,le={};for(let ot of qe){if(ot.side===void 0)continue;let ct=Math.max(0,Ae-Math.abs(ot.u1-ot.u0));(le[ot.side]===void 0||ct<le[ot.side])&&(le[ot.side]=ct)}let Ne=Le.heightM,Oe=0;for(;Ne<re-1e-6&&ce>1e-4;){let ot=Math.min(ce,re-Ne),ct=ot/ce,zt=Oe%2===0,rn=zt?z:ye,Ri=rn+((zt?ye:z)-rn)*ct,tn=Ne,Rn=Ne+ot,Fn={};for(let nt of[0,1]){let xt=le[nt];if(xt===void 0)continue;let At=Math.max(0,xt-2*Re);Fn[nt]=xt>0?Math.min(Re+L(K,Se*613+Oe*31+nt)%1e3/1e3*At,xt):0}for(let nt of qe){if(nt.side===void 0)continue;let At=(nt.side===0?1:-1)*(Fn[nt.side]||0);w(C,nt.u0+At,rn,nt.u1+At,Ri,nt.ax,nt.az,nt.bx,nt.bz,tn,Rn),B++}Ne=Rn,Oe++}}}else if(p&&V.businesses&&V.businesses.length&&te>=o1){let Ue=V.businesses.length-_e,C=Ue>0?Math.min(Ue,Math.max(1,Math.round(te/o0))):0;for(let P=0;P<C;P++){let D=V.businesses[_e+P],O=p.uvFor.get(D.name);if(!O)continue;let W=N(P/C),se=N((P+1)/C),q=M*4;x.push(W.x,di+l,W.z,se.x,di+l,se.z,se.x,_t+l,se.z,W.x,_t+l,W.z),m.push(O.u0,O.vBot,O.u1,O.vBot,O.u1,O.vTop,O.u0,O.vTop);{let[re,Ee,Fe]=y(W.x,W.z,se.x,se.z);_.push(re,Ee,Fe,re,Ee,Fe,re,Ee,Fe,re,Ee,Fe)}g.push(q,q+1,q+2,q,q+2,q+3),M++}_e+=C,B+=C;let S=Math.max(2,V.levels||2)*_t;if(S>_t+1e-6){let P=U(V.chainage),D=P>=0?(E.get(P)||[]).filter(O=>O.bi!==K):[];if(D.length){let O=b[P],W=0,se=0,q=-1,re=0;for(;W<1-1e-6&&re++<64;){let Ee=L(K,Se*5813+se)%D.length;Ee===q&&(Ee=(Ee+1)%D.length);let Fe=D[Ee];q=Ee;let Pe=Math.min(1-W,Math.max(Fe.region.widthM/te,1e-4)),Ie=N(W),Ge=N(W+Pe),qe=Math.min(.75,Math.max(tr,_t/Fe.region.heightM));k(O,Fe.u0Full,Fe.u1Full,Fe.vTop,Fe.vBot,qe,Fe.region.heightM,Ie.x,Ie.z,Ge.x,Ge.z,_t,S,L(K,Se*5813+se+1)),W+=Pe,se++}}}}else if(!V.businesses||!V.businesses.length){let Ue=U(V.chainage),C=Ue>=0?(E.get(Ue)||[]).filter(S=>S.bi!==K):[];if(C.length){let S=b[Ue],P=Math.max(2,V.levels||2)*_t,D=0,O=0,W=-1,se=0;for(;D<1-1e-6&&se++<64;){let q=L(K,Se*3457+O)%C.length;q===W&&(q=(q+1)%C.length);let re=C[q];W=q;let Ee=Math.min(1-D,Math.max(re.region.widthM/te,1e-4)),Fe=N(D),Pe=N(D+Ee),Ie=Math.min(.75,Math.max(tr,_t/re.region.heightM));k(S,re.u0Full,re.u1Full,re.vTop,re.vBot,Ie,re.region.heightM,Fe.x,Fe.z,Pe.x,Pe.z,di,P,L(K,Se*3457+O+1)),D+=Ee,O++}}}})}if(B===0&&M===0)return{group:null,count:0,update(){}};let H=null;if(M&&p){let V=new pt;V.setAttribute("position",new je(x,3)),V.setAttribute("uv",new je(m,2)),V.setAttribute("normal",new je(_,3)),V.setIndex(g),V.computeBoundingSphere(),H=new He(V,new Ze({map:p.texture,color:new Me(4.7,4.7,4.7),side:yn,fog:!0})),H.name="shopfront-placeholders",t.add(H)}let G=s.pages.map((V,K)=>{let de=b[K];if(!de.quadCount)return null;let be=new pt;be.setAttribute("position",new je(de.positions,3)),be.setAttribute("uv",new je(de.uvs,2)),be.setAttribute("color",new je(de.colors,3)),be.setAttribute("normal",new je(de.normals,3)),be.setIndex(de.indices),be.computeBoundingSphere();let we=Nn(i,V.file);return we.startsWith("assets/")&&V.etag&&(we+=`?v=${V.etag}`),{geo:be,url:we,chainageMin:V.chainageMin,chainageMax:V.chainageMax,loaded:!1,mesh:null}});function ne(V){if(V.loaded)return;V.loaded=!0;let K=new ai().load(V.url);K.colorSpace=tt,K.generateMipmaps=!1,K.minFilter=Xt,K.anisotropy=1,V.material||(V.material=new Ze({vertexColors:!0,color:new Me(4.7,4.7,4.7),side:yn,fog:!0}),V.mesh=new He(V.geo,V.material),V.mesh.name="shopfronts-page"),V.material.map=K,t.add(V.mesh)}function oe(V){V.loaded&&(V.loaded=!1,t.remove(V.mesh),V.material.map.dispose(),V.material.map=null)}function pe(V){if(!V)return;let K=gs(V.x,V.z,o);for(let de of G){if(!de)continue;K>=de.chainageMin-t0&&K<=de.chainageMax+t0?ne(de):oe(de)}}return pe({x:o[0][0],z:o[0][1]}),{group:null,placeholders:H,count:B,placeholderCount:M,update:pe,pages:G}}function Vl(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function u1(i){let e=i.getFullYear(),t=String(i.getMonth()+1).padStart(2,"0"),n=String(i.getDate()).padStart(2,"0");return`${e}-${t}-${n}`}function va(){return typeof window<"u"&&typeof window.__mcgrotForceDate=="string"?window.__mcgrotForceDate:u1(new Date)}function Wl(){return Vl(va())}function Xl(i=va()){return Vl(i)%1e4/1e4*24}var h1=["January","February","March","April","May","June","July","August","September","October","November","December"];function d1(i=va()){let e=/^(\d{4})-(\d{2})-(\d{2})$/.exec(i);if(!e)return i;let t=h1[Number(e[2])-1]||e[2];return`${Number(e[3])} ${t} ${e[1]}`}function f1(i){let e=Math.floor((i%24+24)%24*60),t=String(Math.floor(e/60)).padStart(2,"0"),n=String(e%60).padStart(2,"0");return`${t}:${n}`}var p1={overcast:"dreich",clear:"clear",rain:"wet",drizzle:"smirr",haar:"haar"};function m1(i){return p1[i]||i}function c0(i,e,t){return`Leith Walk \u2014 ${d1(i)} \xB7 arrived ${f1(e)}, ${m1(t)}`}var g1=18,id=23,sd=34,x1=.08,_1=380,ql=2e4,l0=.15,y1=6,v1=2.5,M1=22,b1=1.4;function S1(i,e){let t=i*73856093^e*19349663;return t=Math.imul(t^t>>>13,2246822507),t^=t>>>16,t>>>0}function E1(){return typeof window<"u"&&window.__mcgrotForceDaySeed!=null?window.__mcgrotForceDaySeed>>>0:Wl()}function T1(i,e){let t=i.comic&&i.comic.id||i.name||"";return S1(Vl(t),e)%1e6/1e6}function u0({camera:i,npcs:e,assets:t,onActiveChange:n}){let s=null,r=new $o,o=new Map,a=!1,c=!1,l=0,u=0;function h(y,b){let E=o.get(y);if(!(E==="missing"||E==="loading")){if(E){b(E);return}o.set(y,"loading"),r.load(Nn(t,y),w=>{o.set(y,w),b(w)},void 0,()=>{o.set(y,"missing")})}}function d(y){if(y.voice)return y.voice;if(!s)return null;let b=new jo(s);b.setRefDistance(v1),b.setMaxDistance(M1),b.setDistanceModel("inverse"),b.setRolloffFactor(b1),b.setLoop(!0);let E=b.context.createBiquadFilter();return E.type="lowpass",E.frequency.value=ql,b.setFilter(E),b._mutterFilter=E,y.group.add(b),y.voice=b,b}function f(y,b){y._readStartCtx=s.context.currentTime,y._readOffsetAtStart=b}function p(y,b){let E=y.comic.audio;E&&h(E,w=>{let v=d(y);if(!v)return;if(v.buffer!==w&&v.setBuffer(w),v.isPlaying){if(!b)return;v.stop()}let T=b?0:(u+T1(y,E1())*w.duration)%w.duration;v.offset=T,v.gain.gain.value=1,v._mutterFilter&&(v._mutterFilter.frequency.value=ql),v.play(),f(v,T),y.setSpeaking(!0)})}function x(y){y.voice&&y.voice.isPlaying&&(y.voice.stop(),y.setSpeaking(!1))}function m(){let y=0;for(let b of e)b.voice&&b.voice.isPlaying&&y++;y!==l&&(l=y,n&&n(y))}function g(y,b){let E=y.voice;if(!E)return;let w=b<=id?0:Math.min(1,(b-id)/(sd-id)),v=1-(1-x1)*w,T=ql+(_1-ql)*w,R=E.context;E.gain.gain.setTargetAtTime(v,R.currentTime,l0),E._mutterFilter&&E._mutterFilter.frequency.setTargetAtTime(T,R.currentTime,l0)}function _(y,b){if(u=b||0,!a||c)return;let E=i.position,w=[];for(let T of e){if(!T.comic.audio)continue;let R=T.group.position,I=Math.hypot(E.x-R.x,E.z-R.z);I<sd&&w.push({npc:T,d:I})}w.sort((T,R)=>T.d-R.d);let v=new Map;for(let{npc:T,d:R}of w){if(v.size>=y1)break;let I=T.voice&&T.voice.isPlaying;(R<g1||I&&R<sd)&&v.set(T,R)}for(let T of e)T.voice&&T.voice.isPlaying&&!v.has(T)&&x(T);for(let[T]of v)T.voice&&T.voice.isPlaying||p(T,!1);for(let[T,R]of v)g(T,R);m()}return{get listener(){return s},update:_,restart(y){p(y,!0),m()},togglePause(y){let b=y.voice;if(!b||!b.buffer)return p(y,!0),!0;if(b.isPlaying){let E=M(y);return b.pause(),y.setSpeaking(!1),m(),E!=null&&f(b,E),!1}return b.play(),f(b,b._readOffsetAtStart||0),y.setSpeaking(!0),m(),!0},setOverlayOpen(y){if(c=!!y,c){for(let b of e)b.voice&&b.voice.isPlaying&&x(b);m()}},getElapsed:M,isEnabled(){return a},setEnabled(y){a=!!y},resume(){s||(s=new Jo,i.add(s)),a=!0;let y=s.context;y&&y.state==="suspended"&&y.resume()}};function M(y){let b=y&&y.voice;if(!b||!b.buffer||b._readStartCtx==null)return null;let E=b.buffer.duration;if(!E)return 0;let v=(b.isPlaying?s.context.currentTime-b._readStartCtx+b._readOffsetAtStart:b._readOffsetAtStart)%E;return v<0&&(v+=E),v}}var w1=new Set(["INPUT","TEXTAREA","SELECT"]);function xs(i){let e=i&&i.target;return!e||!e.tagName?!1:w1.has(e.tagName)||e.isContentEditable===!0}var A1=8,R1=600;function h0({assets:i,npcs:e,camera:t,controls:n,proximityAudio:s,onReadingChange:r,litter:o,leithers:a,journal:c}){let l=document.getElementById("npc-prompt"),u=document.getElementById("npc-prompt-label"),h=document.getElementById("comic-overlay"),d=document.getElementById("comic-title"),f=document.getElementById("comic-image"),p=document.getElementById("comic-meta"),x=document.getElementById("comic-close"),m=document.getElementById("comic-playpause"),g=document.getElementById("comic-transcript"),_=null,M=null,y=null,b=null,E=!0,w=null,v=!1,T=null,R=null,I=-1;function L(Y){m&&(m.textContent=Y?"\u23F8":"\u25B6")}function B(Y){if(T=null,R=null,I=-1,!g)return;let fe=E&&i.readings&&Y&&Y.comic&&i.readings[Y.comic.id];if(!fe||!fe.phrases||!fe.phrases.length){g.style.display="none",g.textContent="";return}g.textContent="";let te=document.createDocumentFragment(),ue=[];for(let ae of fe.phrases){let me=document.createElement("div");me.className=`phrase ${ae.kind}`,me.textContent=ae.text,te.appendChild(me),ue.push(me)}g.appendChild(te),g.style.display="block",g.scrollTop=0,T=fe.phrases,R=ue}function k(){if(!T||!M)return;let Y=s.getElapsed(M);if(Y==null)return;let fe=-1;for(let ae=0;ae<T.length;ae++)Y>=T[ae].start&&(fe=ae);if(fe===I||(I>=0&&R[I]&&R[I].classList.remove("current"),I=fe,fe<0))return;let te=R[fe];te.classList.add("current");let ue=te.offsetTop-g.clientHeight/2+te.clientHeight/2;g.scrollTop=Math.max(0,ue)}function U(Y){r&&r(!!Y)}let H=()=>document.documentElement.classList.contains("touch");function G(Y){l&&(u&&(u.textContent=H()?`Tap to hear ${Y.name} read`:`[E] Hear ${Y.name} read`),l.style.display="block")}function ne(){l&&(l.style.display="none")}function oe(Y){w=null,v=!1,s.restart(Y),c&&Y.comic&&(c.credit(Y.comic.id,"heard"),Y.isAnchor&&c.credit(Y.comic.id,"anchor"))}function pe(){!v||!M||(clearTimeout(w),oe(M))}function V(Y){!Y||M||c&&c.isOpen()||(M=Y,ne(),d&&(d.textContent=Y.comic.title),p&&(p.textContent=`${Y.name} \u2014 ${Y.blurb}`),f&&(f.src=Nn(i,Y.comic.image),f.alt=Y.comic.title,f.parentElement.scrollTop=0),B(Y),h&&(h.style.display="flex"),n.setEnabled(!1),s.setOverlayOpen(!0),L(!0),U(!0),v=!0,w=setTimeout(()=>oe(Y),R1))}function K(){!M&&!b||(w&&(clearTimeout(w),w=null),v=!1,L(!1),U(!1),h&&(h.style.display="none"),n.setEnabled(!0),s.setOverlayOpen(!1),M=null,b=null,B(null),_=null,y=null)}function de(Y){M||b||c&&c.isOpen()||(b=Y,ne(),d&&(d.textContent=Y.comic.title||"McGrot"),p&&(p.textContent="found lying on the street"),f&&(f.src=Nn(i,Y.comic.image),f.alt=Y.comic.title||"McGrot comic",f.parentElement.scrollTop=0),B(null),h&&(h.style.display="flex"),n.setEnabled(!1),s.setOverlayOpen(!0),c&&Y.comic&&c.credit(Y.comic.id,"found"),a&&Math.random()<.7&&a.summonReader(Y))}function be(){if(!M)return;if(v){pe();return}let Y=s.togglePause(M);L(Y),U(Y)}function we(Y){if(Y.code==="Escape"){(M||b)&&K();return}if(!xs(Y)&&Y.code==="KeyE"){if(v){pe();return}!M&&!b&&(_?V(_):y&&de(y))}}function Z(){M||b||(_?V(_):y&&de(y))}function ee(Y){if(v){pe();return}Y.target===h&&K()}window.addEventListener("keydown",we),l&&l.addEventListener("click",Z),h&&h.addEventListener("click",ee),x&&x.addEventListener("click",K),m&&m.addEventListener("click",be);function $(){if(M||b){k();return}let Y=t.position.x,fe=t.position.z,te=null,ue=A1;for(let me=0;me<e.length;me++){let J=e[me].group.position,he=Math.hypot(Y-J.x,fe-J.z);he<ue&&(ue=he,te=e[me])}let ae=!te&&o?o.nearestItem(Y,fe,3.2):null;(te!==_||ae!==y)&&(_=te,y=ae,_?G(_):y?(u&&(u.textContent=H()?"Tap to read the comic on the ground":"[E] Read the comic on the ground"),l&&(l.style.display="block")):ne())}function _e(){window.removeEventListener("keydown",we),l&&l.removeEventListener("click",Z),h&&h.removeEventListener("click",ee),x&&x.removeEventListener("click",K),m&&m.removeEventListener("click",be),w&&clearTimeout(w)}function ve(Y){E=!!Y,M&&B(M)}function Se(){return!!(M||b)}return{update:$,dispose:_e,setReadAlong:ve,isOpen:Se}}var Mt=(()=>{let i=12648430;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),C1=35,Yl=11,I1=.9,P1=90,d0=[7027238,8013360,6042916,9065014,5189153],L1=22,N1=8,D1=3,f0=.06,F1=.16,Kl=4,g0=14,p0=55;function x0(i,e){let t=i.streetLine||[],n=i.groundHeight||(()=>0),s=new st;e.add(s);let r=U1(t,s,n);H1(t,s,n),G1(t,s,n);let o=V1(t,s,n),a=B1(r,s),c={group:s,poles:r,onArcFlash:null};return c.update=function(u,h){W1(o,u,h),k1(a,h,()=>{c.onArcFlash&&c.onArcFlash()})},c}function $l(i,e){if(!i||i.length<2||e<0)return null;let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0,d=u||1;return{point:[s+c*h,r+l*h],tangent:[c/d,l/d]}}t+=u}return null}function rd(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function Zl(i,e){let t=new Me(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;i.setAttribute("color",new je(s,3))}function U1(i,e,t){let n=rd(i),s=[],r=[],o=[];for(let a=12;a<n-5;a+=C1){let c=$l(i,a);if(!c)break;let[l,u]=c.tangent,h=-u,d=l,f=c.point[0]+h*Yl,p=c.point[1]+d*Yl,x=c.point[0]-h*Yl,m=c.point[1]-d*Yl,g=t(f,p),_=t(x,m),M=new F(f,g,p),y=new F(x,_,m),b=7.5+Mt()*.6;s.push(m0(M,b)),s.push(m0(y,b)),r.push(O1(M.clone().setY(g+b-.4),y.clone().setY(_+b-.4))),o.push({position:M.clone().setY(g+b-.4)},{position:y.clone().setY(_+b-.4)})}if(s.length){let a=rt(s,!1),c=new Ze({color:3814700,flatShading:!0});e.add(new He(a,c))}if(r.length){let a=rt(r,!1),c=new os({color:1841685});e.add(new Gs(a,c))}return o}function m0(i,e){let t=new wn(.09,.13,e,6);return t.translate(i.x,i.y+e/2,i.z),t}function O1(i,e){let n=[];for(let o=0;o<=8;o++){let a=o/8,c=$n.lerp(i.x,e.x,a),l=$n.lerp(i.z,e.z,a),u=$n.lerp(i.y,e.y,a),h=4*a*(1-a)*I1;n.push(c,u-h,l)}let s=[];for(let o=0;o<8;o++)s.push(n[o*3],n[o*3+1],n[o*3+2]),s.push(n[(o+1)*3],n[(o+1)*3+1],n[(o+1)*3+2]);let r=new pt;return r.setAttribute("position",new je(s,3)),r}function B1(i,e){if(!i.length)return[];let t=Math.min(D1,i.length),n=z1(i.length,t),s=[];for(let r of n){let o=i[r],a=new ci(10473727,0,14,2);a.position.copy(o.position),e.add(a);let c=new dn({color:14676735,transparent:!0,opacity:0,depthWrite:!1,blending:Xi});c.userData.unlit=!1;let l=new He(new ri(.12,6,6),c);l.position.copy(o.position),e.add(l),s.push({light:a,spark:l,active:!1,nextTime:Kl+Mt()*(g0-Kl),flashEnd:0})}return s}function z1(i,e){let t=[];for(let n=0;n<e;n++)t.push(Math.floor((n+.5)/e*i));return t}function k1(i,e,t){for(let n of i)if(!n.active&&e>=n.nextTime){n.active=!0;let s=f0+Mt()*(F1-f0);n.flashEnd=e+s,n.light.intensity=p0,n.spark.material.opacity=1,n.spark.scale.setScalar(.8+Mt()*.6),t()}else n.active&&e>=n.flashEnd?(n.active=!1,n.light.intensity=0,n.spark.material.opacity=0,n.nextTime=e+Kl+Mt()*(g0-Kl)):n.active&&(n.light.intensity=p0*(.7+Mt()*.3))}function H1(i,e,t){let n=$l(i,P1);if(!n)return;let[s,r]=n.tangent,o=-r,a=s,c=5.5,l=n.point[0]+o*c,u=n.point[1]+a*c,h=t(l,u),d=Math.atan2(s,r),f=[],p=new et(2.6,3.1,11);Zl(p,7030064),f.push(p);let x=new et(2.3,.3,10.6);x.translate(0,1.7,0),Zl(x,4864556),f.push(x);for(let M=-1;M<=1;M++)for(let y of[-1,1]){let b=(Mt()-.5)*.3,E=new et(.08,.9+Mt()*.3,1.6);E.translate(y*1.32,.5+b,M*3.2+(Mt()-.5)*.6),Zl(E,789770),f.push(E)}let m=rt(f,!1),g=new Ze({vertexColors:!0,flatShading:!0}),_=new He(m,g);_.position.set(l,h+1.85,u),_.rotation.y=d,_.rotation.z=.09,e.add(_)}function G1(i,e,t){let n=rd(i);if(n<4)return;let s=[];for(let a=0;a<L1;a++){let c=25+Mt()*Math.max(10,n-33),l=$l(i,c);if(!l)continue;let[u,h]=l.tangent,d=-h,f=u,p=Mt()<.5?1:-1,x=(7.5+Mt()*3)*p,m=l.point[0]+d*x,g=l.point[1]+f*x,_=Mt()<.4,M=_?new wn(.32,.34,.7,8):new et(.5+Mt()*.3,.4+Mt()*.3,.5+Mt()*.3),y=_?.35:.2;M.translate(0,y,0),M.rotateY(Mt()*Math.PI),Mt()<.3&&M.rotateZ((Mt()-.5)*.5),M.translate(m,t(m,g),g),Zl(M,d0[a%d0.length]),s.push(M)}if(!s.length)return;let r=rt(s,!1),o=new Ze({vertexColors:!0,flatShading:!0});e.add(new He(r,o))}function V1(i,e,t){let n=rd(i);if(n<4)return[];let s=X1(),r=[];for(let o=0;o<N1;o++){let a=35+Mt()*Math.max(20,n-55),c=$l(i,a);if(!c)continue;let l=new vi({map:s,transparent:!0,opacity:.18,depthWrite:!1,color:3815468}),u=new Bi(l),h=8+Mt()*4;u.scale.set(h,h,1),e.add(u);let d=c.point[0]+(Mt()-.5)*14,f=c.point[1]+(Mt()-.5)*14;r.push({sprite:u,baseX:d,baseZ:f,baseY:t(d,f)+6+Mt()*3,phase:Mt()*Math.PI*2,riseSpeed:.25+Mt()*.15,riseRange:9+Mt()*3,driftAmp:2+Mt()*2,driftFreq:.05+Mt()*.05,baseOpacity:.14+Mt()*.1})}return r}function W1(i,e,t){for(let n of i){let s=(t*n.riseSpeed+n.phase)%n.riseRange;n.sprite.position.set(n.baseX+Math.sin(t*n.driftFreq+n.phase)*n.driftAmp,n.baseY+s,n.baseZ+Math.cos(t*n.driftFreq*.8+n.phase)*n.driftAmp);let r=s/n.riseRange;n.sprite.material.opacity=n.baseOpacity*(1-Math.abs(r-.5)*1.4)}}function X1(){let e=document.createElement("canvas");e.width=128,e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,"rgba(60,58,48,0.55)"),n.addColorStop(.5,"rgba(50,48,40,0.25)"),n.addColorStop(1,"rgba(40,38,32,0)"),t.fillStyle=n,t.fillRect(0,0,128,128);let s=new Et(e);return s.colorSpace=tt,s}var q1=!0,Ma=1.7,Y1=.35,Z1=.3,od=.34,K1=.17,$1=4,_0=74,J1=38,j1=1500,Q1=16757850,eE=12876330,tE=3090978,y0=.22,nE=.6;function iE(i){let e=Number.isFinite(i)?i:0,t=Math.max(0,Math.min(1,(e-y0)/(nE-y0)));return t*t*(3-2*t)}function sE(){return typeof location<"u"&&["localhost","127.0.0.1"].includes(location.hostname)&&typeof window<"u"&&window.__mcgrotForceLamps!=null?!!window.__mcgrotForceLamps:q1}function v0({scene:i,camera:e,poles:t}){let n=sE(),s={enabled:!1,count:0,poolSize:0,lamps:[],setGlow(){},update(){},glow:()=>0,activeCount:()=>0};if(!n||!i||!e||!t||t.length<2)return s;let r=[],o=[],a=[],c=Math.floor(t.length/2);for(let _=0;_<c;_++){let M=t[_*2+_%2],y=t[_*2+(_+1)%2];if(!M||!y)continue;let b=M.position,E=y.position.x-b.x,w=y.position.z-b.z,v=Math.hypot(E,w)||1,T=E/v,R=w/v,I=b.y-Y1,L=b.x+T*Ma,B=b.z+R*Ma,k=new et(Ma,.08,.08);k.rotateY(-Math.atan2(R,T)),k.translate(b.x+T*Ma*.5,I,b.z+R*Ma*.5),o.push(k);let U=new cs(Z1,od,8,1,!0);U.translate(L,I-od*.5,B),o.push(U);let H=I-od*.75,G=new ri(K1,8,6);G.translate(L,H,B),a.push(G),r.push({position:new F(L,H,B)})}if(!r.length)return s;let l=new He(rt(o,!1),new Ze({color:tE,flatShading:!0}));l.name="lamp-fittings",i.add(l);let u=new dn({color:eE,transparent:!0,opacity:0,depthWrite:!1,blending:Xi});u.userData.unlit=!1;let h=new He(rt(a,!1),u);h.name="lamp-bulbs",i.add(h);let d=[];for(let _=0;_<$1;_++){let M=new ci(Q1,0,J1,2);M.name=`lamp-pool-${_}`,i.add(M),d.push(M)}let f=0,p=0;function x(_){f=iE(_),u.opacity=f}let m=[];function g(){m.length=0;let _=e.position.x,M=e.position.z;for(let y=0;y<r.length;y++){let b=r[y].position,E=(b.x-_)*(b.x-_)+(b.z-M)*(b.z-M);E>_0*_0||m.push({d2:E,p:b})}m.sort((y,b)=>y.d2-b.d2),p=0;for(let y=0;y<d.length;y++){let b=m[y];b&&f>0?(d[y].position.copy(b.p),d[y].intensity=f*j1,p++):d[y].intensity=0}}return{enabled:!0,count:r.length,poolSize:d.length,lamps:r,fittingMesh:l,bulbMesh:h,pool:d,setGlow:x,update:g,glow:()=>f,activeCount:()=>p}}var rE=!0,ad=40,M0=5;function oE(){return typeof location<"u"&&["localhost","127.0.0.1"].includes(location.hostname)&&typeof window<"u"&&window.__mcgrotForceLegs!=null?!!window.__mcgrotForceLegs:rE}function b0({camera:i,world:e,atmosphere:t,seed:n=0,onHinge:s=null}){let r=oE(),o=e&&e.streetLine||[],a={enabled:!1,update(){},state:()=>({enabled:!1,leg:0,hinges:0,zone:null,lastHingeZone:null,chainage:0}),history:()=>[]};if(!r||o.length<2||!i||!t)return a;let c=0;for(let g=1;g<o.length;g++)c+=Math.hypot(o[g][0]-o[g-1][0],o[g][1]-o[g-1][1]);function l(g){return g<=ad?"north":g>=c-ad?"south":null}let u=gs(i.position.x,i.position.z,o),h=l(u),d=h,f=0,p=0,x=[];function m(){let g=gs(i.position.x,i.position.z,o),_=l(g);if(_===h)return;let M=h;if(h=_,!_||_===d)return;d=_,f+=1,p+=1;let y=t.nudge(M0,n,f);x.push({leg:f,arrivedAt:_,leftBehind:M,...y}),s&&s({leg:f,zone:_,...y})}return{enabled:!0,update:m,state:()=>({enabled:!0,leg:f,hinges:p,zone:h,lastHingeZone:d,chainage:gs(i.position.x,i.position.z,o),length:c,endRadius:ad,turnaroundHours:M0}),history:()=>x.slice()}}function S0({camera:i,world:e,legs:t,atmosphere:n,ambience:s,controls:r,renderer:o}){let a=typeof document<"u"?document.getElementById("ending-prompt"):null,c=typeof document<"u"?document.getElementById("ending-card"):null,l=typeof document<"u"?document.getElementById("ending-resume"):null,u=e&&e.streetLine||[],h={update(){},begin(){return!1},canOffer:()=>!1,state:()=>({phase:"idle",offered:!1,elapsed:0,ended:0})};if(!i||!t||!n||u.length<2)return h;let d=u[0],f=u[1],p=d[0]-f[0],x=d[1]-f[1],m=Math.hypot(p,x)||1;p/=m,x/=m;let g="idle",_=0,M=!1,y=0,b=null,E=0,w=1,v={r:0,g:0,b:0},T={r:154/255,g:160/255,b:154/255};function R(){if(g!=="idle")return!1;let U=t.state();return!!U.enabled&&U.leg>=1&&U.zone==="north"}function I(U){a&&U!==M&&(M=U,a.style.display=U?"block":"none")}function L(){return R()?(g="running",_=0,I(!1),b=i.position.clone(),E=e.fog?e.fog.density:0,w=o?o.toneMappingExposure:1,e.fog&&(v.r=e.fog.color.r,v.g=e.fog.color.g,v.b=e.fog.color.b),n.setSuspended(!0),r&&r.setEnabled(!1),s&&s.setDucked(!0),!0):!1}function B(){return g!=="ended"?!1:(g="idle",_=0,c&&(c.style.display="none"),b&&i.position.copy(b),n.setSuspended(!1),r&&r.setEnabled(!0),s&&s.setDucked(!1),!0)}function k(U){if(g==="idle"){I(R());return}if(g==="ended")return;_=Math.min(10,_+(Number.isFinite(U)?U:0));let H=_/10,G=H*H*(3-2*H);e.fog&&(e.fog.density=E*(1+8*G),e.fog.color.setRGB(v.r+(T.r-v.r)*G,v.g+(T.g-v.g)*G,v.b+(T.b-v.b)*G)),o&&(o.toneMappingExposure=w+(.5-w)*G),b&&(i.position.x=b.x+p*26*G,i.position.z=b.z+x*26*G),_>=10&&(g="ended",y+=1,c&&(c.style.display="flex"))}return l&&l.addEventListener("click",B),a&&a.addEventListener("click",L),{update:k,begin:L,resume:B,canOffer:R,state:()=>({phase:g,offered:M,elapsed:+_.toFixed(3),ended:y,minLeg:1,sequenceSeconds:10})}}var aE=3.2,Jl=.1,cE=2.5,lE=60,uE=40,hE=.15,Vn=512,E0=4,A0=4,dE=1/3;function jl(i,e){let t=i*73856093^e*19349663;return t=Math.imul(t^t>>>13,2246822507),t^=t>>>16,t>>>0}function R0(i){let e=i|0;return function(){e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function T0(i,e,t,n,s,r){let o=R0(r*7919+13);i.save(),i.beginPath(),i.rect(e,t,n,s),i.clip(),i.fillStyle="rgb(150,146,134)",i.fillRect(e,t,n,s);let a=20,c=s/a;for(let u=0;u<a;u++){let h=t+u*c,d=5+Math.floor(o()*3);for(let f=0;f<d;f++){let p=e+f/d*n,x=n/d,m=(o()-.5)*26;i.fillStyle=`rgba(${150+m},${146+m},${134+m},0.6)`,i.fillRect(p,h+2,x,c-2)}i.fillStyle="rgba(0,0,0,0.22)",i.fillRect(e,h,n,2)}for(let u=0;u<20;u++){let h=e+o()*n,d=4+o()*12,f=t+o()*s*.35,p=s*(.3+o()*.45),x=i.createLinearGradient(0,f,0,f+p);x.addColorStop(0,"rgba(20,18,15,0.22)"),x.addColorStop(1,"rgba(20,18,15,0)"),i.fillStyle=x,i.fillRect(h,f,d,p)}let l=2+Math.floor(o()*3);for(let u=0;u<l;u++){let h=n*(.12+o()*.08),d=s*(.15+o()*.09),f=e+n*.08+o()*(n*.84-h),p=t+s*.14+o()*(s*.62-d);i.fillStyle="rgba(64,58,48,0.7)",i.fillRect(f,p,h,d),i.strokeStyle="rgba(112,106,90,0.5)",i.lineWidth=3,i.strokeRect(f+1.5,p+1.5,h-3,d-3)}i.restore()}function fE(i,e,t,n,s,r,o){let a=R0(o*104729+5);i.save(),i.translate(e+n/2,t+s*.4),i.rotate((a()-.5)*.05);let c=r.toUpperCase(),l=72;for(i.font=`bold ${l}px Georgia, "Times New Roman", serif`;i.measureText(c).width>n*.8&&l>16;)l-=2,i.font=`bold ${l}px Georgia, "Times New Roman", serif`;i.textAlign="center",i.textBaseline="middle",i.globalAlpha=.2+a()*.12,i.fillStyle="rgb(150,58,42)",i.fillText(c,0,0),i.restore()}function pE(i){let e=E0,t=2,n=document.createElement("canvas");n.width=Vn*e,n.height=Vn*t;let s=n.getContext("2d"),r=[];for(let c=0;c<E0;c++){let l=c*Vn,u=0;T0(s,l,u,Vn,Vn,c),r.push(w0(l,u,n.width,n.height))}let o=[];for(let c=0;c<A0;c++){let l=c*Vn,u=Vn;T0(s,l,u,Vn,Vn,c+97),i[c]&&fE(s,l,u,Vn,Vn,i[c],c),o.push(w0(l,u,n.width,n.height))}let a=new Et(n);return a.colorSpace=tt,a.anisotropy=4,{texture:a,baseUv:r,ghostUv:o}}function w0(i,e,t,n){return{u0:i/t,u1:(i+Vn)/t,v0:1-(e+Vn)/n,v1:1-e/n}}function C0(i,e,t){let n=i&&i.leith&&i.leith.buildings||[],s=i&&i.facadeManifest,r=e&&e.nearestStreetPoint,o=e&&e.groundHeight;if(!n.length||!r)return{mesh:null,count:0};let a=[];if(s)for(let _ of s.buildings)for(let M of _.businesses||[])a.push(M.name);let c=[];if(a.length)for(let _=0;_<A0;_++)c.push(a[jl(_,a.length)%a.length]);let l=pE(c),u=[],h=[],d=[],f=[],p=0,x=(_,M,y,b,E,w,v,T,R,I,L)=>{let B=p*4;u.push(E,R,w,v,R,T,v,I,T,E,I,w),h.push(_,M,y,M,y,b,_,b);for(let k=0;k<4;k++)d.push(L.r,L.g,L.b);f.push(B,B+1,B+2,B,B+2,B+3),p++};if(n.forEach((_,M)=>{let y=_&&_.footprint;if(!y||y.length<3)return;let b=Math.max(1,_.levels||1)*aE,E=0,w=0;for(let I of y)E+=I[0],w+=I[1];E/=y.length,w/=y.length;let v=o?o(E,w):0,T=gE(_,r),R=$h(M,_);for(let I=0;I<y.length;I++){let L=y[I],B=y[(I+1)%y.length],k=B[0]-L[0],U=B[1]-L[1],H=Math.hypot(k,U);if(H<cE||mE(L[0],L[1],B[0],B[1],T))continue;let G=(L[0]+B[0])/2,ne=(L[1]+B[1])/2,oe=r(G,ne),pe=r(L[0],L[1]),V=r(B[0],B[1]);if(Math.min(oe?oe.distance:1/0,pe?pe.distance:1/0,V?V.distance:1/0)>lE||H*b<uE)continue;let be=L[0],we=L[1],Z=k,ee=U,$=-U/H,_e=k/H;$*(G-E)+_e*(ne-w)<0&&($=-$,_e=-_e,be=B[0],we=B[1],Z=-k,ee=-U);let ve=be+$*Jl,Se=we+_e*Jl,Y=be+Z+$*Jl,fe=we+ee+_e*Jl,ue=c.length&&jl(M,I*31+7)%1e3/1e3<dE?l.ghostUv:l.baseUv,ae=jl(M,I*131+41)%ue.length,me=ue[ae],J=jl(M,I*991+3)%2===0,he=J?me.u1:me.u0,ge=J?me.u0:me.u1;x(he,me.v0,ge,me.v1,ve,Se,Y,fe,v,v+b,R)}}),!p)return{mesh:null,count:0};let m=new pt;m.setAttribute("position",new je(u,3)),m.setAttribute("uv",new je(h,2)),m.setAttribute("color",new je(d,3)),m.setIndex(f),m.computeVertexNormals();let g=new He(m,new Ze({map:l.texture,vertexColors:!0,flatShading:!0}));return g.name="gable-dressing",t.add(g),{mesh:g,count:p}}function mE(i,e,t,n,s){let r=(i+t)/2,o=(e+n)/2;for(let a of s){let c=a.bx-a.ax,l=a.bz-a.az,u=c*c+l*l||1,h=((r-a.ax)*c+(o-a.az)*l)/u;if(h<-.01||h>1.01)continue;let d=a.ax+h*c,f=a.az+h*l;if(Math.hypot(r-d,o-f)<hE)return!0}return!1}function gE(i,e){try{return jr(i,e)}catch{return[]}}var I0=3.2,P0=80,xE=10,L0=.5,cd=2500,_E=1/5;function N0(i,e){let t=i*73856093^e*19349663;return t=Math.imul(t^t>>>13,2246822507),t^=t>>>16,t>>>0}function nr(i,e){return N0(i,e)%1e5/1e5}function yE(){let i=[],e=new et(.9,1.8,.55).toNonIndexed();e.deleteAttribute("uv"),e.translate(0,.9,0),i.push(e);let t=[[-.28,0],[.05,.15],[.3,-.12]];for(let[n,s]of t){let r=new wn(.12,.13,.4,5,1,!0).toNonIndexed();r.deleteAttribute("uv"),r.translate(n,1.8+.2,s),i.push(r)}return rt(i,!1)}function vE(){let i=[],e=new wn(.02,.03,1.4,5,1,!0).toNonIndexed();e.deleteAttribute("uv"),e.translate(0,.7,0),i.push(e);for(let t=0;t<2;t++){let n=new et(.5-t*.14,.02,.02).toNonIndexed();n.deleteAttribute("uv"),n.translate(0,1+t*.22,0),i.push(n)}return rt(i,!1)}function D0(i,e,t){let n=i&&i.leith&&i.leith.buildings||[],s=e&&e.nearestStreetPoint,r=e&&e.groundHeight;if(!n.length||!s)return{chimneys:null,aerials:null,count:0};let o=(w,v)=>`${Math.round(w/L0)}:${Math.round(v/L0)}`,a=new Map;n.forEach(w=>{let v=w&&w.footprint;if(v)for(let[T,R]of v){let I=o(T,R);a.set(I,(a.get(I)||0)+1)}});let c=[];n.forEach((w,v)=>{let T=w&&w.footprint;if(!T||T.length<3)return;let R=0,I=0;for(let U of T)R+=U[0],I+=U[1];R/=T.length,I/=T.length;let L=s(R,I);if(!L||L.distance>P0)return;let B=Math.max(1,w.levels||1)*I0,k=new Set;for(let U=0;U<T.length;U++){let H=T[U],G=T[(U+1)%T.length],ne=o(H[0],H[1]);if(a.get(ne)>1&&!k.has(ne)){k.add(ne);let ee=s(H[0],H[1]),$=B+(r?r(H[0],H[1]):0);c.push({x:H[0],z:H[1],y:$,dist:ee?ee.distance:L.distance,bi:v,edgeSeed:U})}let oe=G[0]-H[0],pe=G[1]-H[1],V=Math.hypot(oe,pe);if(V<3)continue;let K=(H[0]+G[0])/2,de=(H[1]+G[1])/2,be=s(K,de),we=!0;if(be&&be.point){let ee=1/V,$=-pe*ee,_e=oe*ee;$*(K-R)+_e*(de-I)<0&&($=-$,_e=-_e);let ve=be.point[0]-K,Se=be.point[1]-de,Y=Math.hypot(ve,Se)||1;we=($*ve+_e*Se)/Y>=0}if(!we)continue;let Z=Math.max(1,Math.round(V/xE));for(let ee=0;ee<Z;ee++){let $=(ee+.5)/Z,_e=H[0]+oe*$,ve=H[1]+pe*$,Se=B+(r?r(_e,ve):0);c.push({x:_e,z:ve,y:Se,dist:(s(_e,ve)||L).distance,bi:v,edgeSeed:U*97+ee})}}}),c.sort((w,v)=>w.dist-v.dist);let l=Math.max(0,c.length-cd),u=l>0?c.slice(0,cd):c;l>0&&console.warn(`[chimneys] ${l} candidate chimney placements beyond ${cd} dropped (furthest-from-street first, not a silent mid-street gap)`);let h=yE(),d=new Ze({color:3025444}),f=u.length?new cn(h,d,u.length):null,p=new Je,x=new F,m=new Pt,g=new F,_=new Yt;f&&(u.forEach((w,v)=>{let T=.75+nr(w.bi,w.edgeSeed*3+1)*.65,R=(nr(w.bi,w.edgeSeed*3+2)-.5)*.12,I=(nr(w.bi,w.edgeSeed*3+3)-.5)*.12,L=nr(w.bi,w.edgeSeed*3+4)*Math.PI*2;x.set(w.x,w.y,w.z),_.set(R,L,I),m.setFromEuler(_),g.set(1,T,1),p.compose(x,m,g),f.setMatrixAt(v,p)}),f.instanceMatrix.needsUpdate=!0,f.name="chimneys",t.add(f));let M=[];n.forEach((w,v)=>{let T=w&&w.footprint;if(!T||T.length<3||N0(v,5153)%1e3/1e3>=_E)return;let R=0,I=0;for(let G of T)R+=G[0],I+=G[1];R/=T.length,I/=T.length;let L=s(R,I);if(!L||L.distance>P0)return;let B=Math.max(1,w.levels||1)*I0,k=T[0],U=1/0;for(let G of T){let ne=L.point?Math.hypot(G[0]-L.point[0],G[1]-L.point[1]):0;ne<U&&(U=ne,k=G)}let H=B+(r?r(k[0],k[1]):0);M.push({x:k[0],z:k[1],y:H,bi:v})});let y=vE(),b=new Ze({color:1842204}),E=M.length?new cn(y,b,M.length):null;return E&&(M.forEach((w,v)=>{let T=(nr(w.bi,71)-.5)*.3,R=(nr(w.bi,73)-.5)*.3,I=nr(w.bi,79)*Math.PI*2;x.set(w.x,w.y,w.z),_.set(T,I,R),m.setFromEuler(_),g.set(1,1,1),p.compose(x,m,g),E.setMatrixAt(v,p)}),E.instanceMatrix.needsUpdate=!0,E.name="aerials",t.add(E)),{chimneys:f,aerials:E,count:u.length,aerialCount:M.length,dropped:l}}var ME=3028026,bE=9278327,SE=2304048,EE=6051656,TE=11557412,wE=3.2,AE=1/700,RE=`
  varying vec3 vDir;
  void main() {
    // World-space view ray. Correct whether the dome is parented to the camera
    // or to the scene, because modelMatrix carries whichever transform applies.
    vDir = (modelMatrix * vec4(position, 1.0)).xyz - cameraPosition;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,CE=`
  uniform vec3 uFog;
  uniform vec3 uBand;
  uniform vec3 uZenith;
  uniform vec3 uCloudDark;
  uniform vec3 uCloudLit;
  uniform vec3 uGlow;
  uniform vec2 uDock;
  uniform float uTime;
  uniform float uCoverage;
  varying vec3 vDir;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p *= 2.02;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec3 d = normalize(vDir);
    float h = clamp(d.y, 0.0, 1.0);

    // Three-stop vertical gradient: fog at the horizon, a sickly bright haze a
    // few degrees up, heavy slate overhead. Both mixes start from uFog and are
    // driven by smoothsteps that are 0 at h = 0, so the horizon is uFog exactly.
    vec3 col = mix(uFog, uBand, smoothstep(0.0, 0.30, h));
    col = mix(col, uZenith, smoothstep(0.16, 0.85, h));

    // Cloud deck, projected onto a plane overhead. Folding in the camera's XZ
    // makes the deck slide as you walk the 1.6km rather than riding on your head.
    vec2 p = d.xz / max(h, 0.05) * ${wE.toFixed(2)}
           + cameraPosition.xz * ${AE.toFixed(6)};
    p += vec2(uTime * 0.0035, uTime * 0.0012); // haar drifting in off the Forth

    float f = fbm(p);
    // Thin edges catch what light there is; the thick core is a dark mass.
    vec3 cloud = mix(uCloudLit, uCloudDark, smoothstep(0.38, 0.78, f));
    // The second factor holds the deck clear of the horizon: cloud reaching
    // d.y = 0 would break the fog match. It also masks off the low elevations
    // where the 1/h projection blows p up into a shimmering high-frequency mess.
    // uCoverage (E2c.1) multiplies the whole term, so it stays exactly 0 at
    // h = 0 regardless of its value \u2014 the fog/sky seam invariant survives by
    // construction, the same way the h-term already guarantees it.
    float cover = smoothstep(0.40, 0.70, f) * smoothstep(0.06, 0.35, h) * uCoverage;
    col = mix(col, cloud, cover * 0.88);

    // The docks are burning. What you see is the light thrown up onto the
    // underside of the haar, not the fire \u2014 and it is anchored ABOVE the
    // horizon because any additive term at h = 0 would paint a bright rim
    // along the top of the fogged buildings.
    vec2 flatDir = d.xz;
    float flatLen = length(flatDir);
    float toward = flatLen > 1e-4 ? max(dot(flatDir / flatLen, uDock), 0.0) : 0.0;
    col += uGlow * pow(toward, 5.0) * exp(-h * 4.0) * smoothstep(0.0, 0.10, h);

    // Below the horizon the dome is flat fog, so any sliver of it showing under
    // the ground plane reads as murk rather than as sky.
    col = mix(uFog, col, smoothstep(-0.06, 0.0, d.y));

    gl_FragColor = vec4(col, 1.0);

    // Three injects the *pars* for both of these into every fragment prefix
    // (WebGLProgram.js) \u2014 including them here as well is a redefinition error.
    // These two are the bodies, and they are the same ones the fogged buildings
    // run. That is the seam guarantee.
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;function F0(i,e){let t=new Te(0,-1);if(e&&e.length>1){let o=e[0],a=e[e.length-1];t.set(o[0]-a[0],o[1]-a[1]).normalize()}let n={uFog:{value:i},uBand:{value:new Me(bE)},uZenith:{value:new Me(ME)},uCloudDark:{value:new Me(SE)},uCloudLit:{value:new Me(EE)},uGlow:{value:new Me(TE)},uDock:{value:t},uTime:{value:0},uCoverage:{value:1}},s=new An({uniforms:n,vertexShader:RE,fragmentShader:CE,side:fn,depthWrite:!1,depthTest:!1,fog:!1}),r=new He(new ri(1,32,20),s);return r.renderOrder=-1e3,r.frustumCulled=!1,{mesh:r,uniforms:n,update(o){n.uTime.value=o},setPalette({band:o,zenith:a,cloudDark:c,cloudLit:l,glow:u}){o&&n.uBand.value.copy(o),a&&n.uZenith.value.copy(a),c&&n.uCloudDark.value.copy(c),l&&n.uCloudLit.value.copy(l),u&&n.uGlow.value.copy(u)},setCoverage(o){n.uCoverage.value=o}}}var PE=1,LE=10,NE=30,DE=[{hour:0,sun:{color:3359834,intensity:.05,pos:{x:-100,y:-50,z:80}},hemi:{sky:1844272,ground:855048,intensity:.6},ambient:{color:1315855,intensity:.25},fog:1316111,fogDensity:.0095,exposure:.55,tint:{r:.12,g:.12,b:.15},sky:{band:1711126,zenith:855826,cloudDark:658447,cloudLit:2237468,glow:6040594},torch:1,windowGlow:1,coverage:1,rain:0,wetness:0},{hour:5,sun:{color:3820126,intensity:.08,pos:{x:250,y:20,z:-150}},hemi:{sky:2239544,ground:1052426,intensity:.7},ambient:{color:1513231,intensity:.3},fog:1579539,fogDensity:.0095,exposure:.6,tint:{r:.14,g:.14,b:.17},sky:{band:2105882,zenith:1053464,cloudDark:855826,cloudLit:2500640,glow:6500367},torch:.95,windowGlow:.9,coverage:1,rain:0,wetness:0},{hour:8,sun:{color:10465480,intensity:.5,pos:{x:200,y:180,z:-100}},hemi:{sky:6055282,ground:2367770,intensity:2},ambient:{color:3158047,intensity:.8},fog:3817528,fogDensity:.0095,exposure:1,tint:{r:.55,g:.55,b:.6},sky:{band:6384210,zenith:2304048,cloudDark:1843240,cloudLit:4802102,glow:9062942},torch:.3,windowGlow:.15,coverage:1,rain:0,wetness:0},{hour:12,sun:{color:13621480,intensity:1.15,pos:{x:-200,y:300,z:150}},hemi:{sky:9147296,ground:3814180,intensity:3.9},ambient:{color:4999224,intensity:1.4},fog:4870466,fogDensity:.0095,exposure:1.46,tint:{r:1,g:1,b:1},sky:{band:9278327,zenith:3028026,cloudDark:2304048,cloudLit:6051656,glow:11557412},torch:.03,windowGlow:0,coverage:1,rain:0,wetness:0},{hour:17,sun:{color:12101768,intensity:.6,pos:{x:-250,y:150,z:200}},hemi:{sky:6972504,ground:3025438,intensity:2.3},ambient:{color:3551264,intensity:.9},fog:3948336,fogDensity:.0095,exposure:1.05,tint:{r:.6,g:.58,b:.55},sky:{band:7629650,zenith:2632756,cloudDark:1974826,cloudLit:5130812,glow:11031582},torch:.15,windowGlow:.1,coverage:1,rain:0,wetness:0},{hour:20,sun:{color:6050920,intensity:.15,pos:{x:-300,y:40,z:220}},hemi:{sky:3027518,ground:1578256,intensity:1},ambient:{color:1841682,intensity:.4},fog:2434847,fogDensity:.0095,exposure:.75,tint:{r:.3,g:.28,b:.3},sky:{band:3421226,zenith:1579808,cloudDark:1185050,cloudLit:3683626,glow:9190936},torch:.55,windowGlow:.6,coverage:1,rain:0,wetness:0},{hour:22,sun:{color:3818070,intensity:.06,pos:{x:-150,y:-30,z:100}},hemi:{sky:1975600,ground:920841,intensity:.7},ambient:{color:1381646,intensity:.3},fog:1579540,fogDensity:.0095,exposure:.6,tint:{r:.16,g:.16,b:.19},sky:{band:1842711,zenith:921620,cloudDark:724240,cloudLit:2369054,glow:6696722},torch:.9,windowGlow:.95,coverage:1,rain:0,wetness:0}],FE=[{hour:0,sun:{color:3030096,intensity:.04,pos:{x:-100,y:-50,z:80}},hemi:{sky:1317930,ground:657670,intensity:.45},ambient:{color:921097,intensity:.18},fog:987919,fogDensity:.0095,exposure:.5,tint:{r:.09,g:.09,b:.13},sky:{band:1186324,zenith:526864,cloudDark:460810,cloudLit:1579542,glow:6040594},torch:1,windowGlow:1,coverage:.05,rain:0,wetness:0},{hour:5,sun:{color:3689060,intensity:.06,pos:{x:250,y:20,z:-150}},hemi:{sky:1713206,ground:789256,intensity:.55},ambient:{color:1052937,intensity:.22},fog:1185039,fogDensity:.0095,exposure:.55,tint:{r:.11,g:.11,b:.15},sky:{band:1580568,zenith:658968,cloudDark:592654,cloudLit:1842712,glow:6500367},torch:.95,windowGlow:.85,coverage:.08,rain:0,wetness:0},{hour:8,sun:{color:16768160,intensity:2.9,pos:{x:200,y:180,z:-100}},hemi:{sky:5535904,ground:2104338,intensity:1.25},ambient:{color:1973268,intensity:.42},fog:8691900,fogDensity:.0022,exposure:1.15,tint:{r:.68,g:.64,b:.58},sky:{band:11059928,zenith:3824764,cloudDark:3361378,cloudLit:6850724,glow:10114592},torch:.05,windowGlow:.05,coverage:.15,rain:0,wetness:0},{hour:12,sun:{color:16773848,intensity:3,pos:{x:-200,y:300,z:150}},hemi:{sky:6852788,ground:2367253,intensity:1.55},ambient:{color:2104851,intensity:.5},fog:8691898,fogDensity:.0022,exposure:1.25,tint:{r:1,g:.98,b:.92},sky:{band:11455184,zenith:2905206,cloudDark:4216428,cloudLit:8822970,glow:11557412},torch:0,windowGlow:0,coverage:.12,rain:0,wetness:0},{hour:17,sun:{color:16758906,intensity:1.3,pos:{x:-250,y:150,z:200}},hemi:{sky:4608100,ground:1841423,intensity:1},ambient:{color:1578254,intensity:.35},fog:5660532,fogDensity:.0022,exposure:.98,tint:{r:.6,g:.53,b:.46},sky:{band:8810324,zenith:2634828,cloudDark:2765380,cloudLit:5791860,glow:11031582},torch:.1,windowGlow:.08,coverage:.15,rain:0,wetness:0},{hour:20,sun:{color:6837876,intensity:.18,pos:{x:-300,y:40,z:220}},hemi:{sky:2239032,ground:1183498,intensity:.7},ambient:{color:1183753,intensity:.28},fog:1843248,fogDensity:.0095,exposure:.68,tint:{r:.3,g:.26,b:.3},sky:{band:2632248,zenith:1185314,cloudDark:987674,cloudLit:2632248,glow:9190936},torch:.5,windowGlow:.55,coverage:.1,rain:0,wetness:0},{hour:22,sun:{color:3687524,intensity:.045,pos:{x:-150,y:-30,z:100}},hemi:{sky:1581102,ground:657670,intensity:.5},ambient:{color:986376,intensity:.22},fog:1250852,fogDensity:.0095,exposure:.52,tint:{r:.14,g:.14,b:.18},sky:{band:1448486,zenith:592916,cloudDark:461070,cloudLit:1842726,glow:6696722},torch:.85,windowGlow:.9,coverage:.06,rain:0,wetness:0}],UE=[{hour:0,sun:{color:2766408,intensity:.04,pos:{x:-100,y:-50,z:80}},hemi:{sky:1449512,ground:723463,intensity:.5},ambient:{color:1052680,intensity:.2},fog:1053198,fogDensity:.0095,exposure:.48,tint:{r:.1,g:.1,b:.13},sky:{band:1382933,zenith:724240,cloudDark:526861,cloudLit:1842712,glow:6040594},torch:1,windowGlow:1,coverage:1,rain:.7,wetness:.85},{hour:5,sun:{color:3095630,intensity:.06,pos:{x:250,y:20,z:-150}},hemi:{sky:1712684,ground:855048,intensity:.6},ambient:{color:1250057,intensity:.25},fog:1250575,fogDensity:.0095,exposure:.52,tint:{r:.12,g:.12,b:.15},sky:{band:1711126,zenith:855826,cloudDark:658447,cloudLit:1974296,glow:6500367},torch:.95,windowGlow:.9,coverage:1,rain:.7,wetness:.85},{hour:8,sun:{color:8030364,intensity:.3,pos:{x:200,y:180,z:-100}},hemi:{sky:4739164,ground:1973013,intensity:1.6},ambient:{color:2500119,intensity:.6},fog:3027504,fogDensity:.0095,exposure:.85,tint:{r:.42,g:.44,b:.48},sky:{band:5133892,zenith:1843238,cloudDark:1448480,cloudLit:3815468,glow:9062942},torch:.35,windowGlow:.2,coverage:1,rain:.85,wetness:.9},{hour:12,sun:{color:10135738,intensity:.65,pos:{x:-200,y:300,z:150}},hemi:{sky:6975608,ground:2893852,intensity:2.9},ambient:{color:3683871,intensity:1},fog:3685428,fogDensity:.0095,exposure:1.1,tint:{r:.72,g:.74,b:.78},sky:{band:6975834,zenith:2369584,cloudDark:1843240,cloudLit:4736566,glow:11557412},torch:.06,windowGlow:0,coverage:1,rain:.85,wetness:.9},{hour:17,sun:{color:9076336,intensity:.4,pos:{x:-250,y:150,z:200}},hemi:{sky:5261630,ground:2236438,intensity:1.7},ambient:{color:2762264,intensity:.65},fog:3026984,fogDensity:.0095,exposure:.9,tint:{r:.46,g:.44,b:.42},sky:{band:5788224,zenith:2106154,cloudDark:1580066,cloudLit:3947054,glow:11031582},torch:.2,windowGlow:.15,coverage:1,rain:.8,wetness:.9},{hour:20,sun:{color:4603984,intensity:.12,pos:{x:-300,y:40,z:220}},hemi:{sky:2369070,ground:1315341,intensity:.8},ambient:{color:1446921,intensity:.32},fog:1842456,fogDensity:.0095,exposure:.62,tint:{r:.24,g:.22,b:.24},sky:{band:2631712,zenith:1316640,cloudDark:987414,cloudLit:2894370,glow:9190936},torch:.6,windowGlow:.6,coverage:1,rain:.75,wetness:.9},{hour:22,sun:{color:3028552,intensity:.05,pos:{x:-150,y:-30,z:100}},hemi:{sky:1580584,ground:789256,intensity:.6},ambient:{color:1184264,intensity:.25},fog:1250575,fogDensity:.0095,exposure:.52,tint:{r:.13,g:.13,b:.16},sky:{band:1579540,zenith:724240,cloudDark:592654,cloudLit:1974296,glow:6696722},torch:.92,windowGlow:.95,coverage:1,rain:.7,wetness:.85}],OE=[{hour:0,sun:{color:1844272,intensity:.03,pos:{x:-100,y:-50,z:80}},hemi:{sky:2106922,ground:789514,intensity:.5},ambient:{color:1316374,intensity:.22},fog:1711646,fogDensity:.03,exposure:.55,tint:{r:.14,g:.15,b:.16},sky:{band:1843230,zenith:1316890,cloudDark:1053204,cloudLit:2237988,glow:4865072},torch:1,windowGlow:1,coverage:1,rain:0,wetness:.25},{hour:5,sun:{color:2371644,intensity:.05,pos:{x:250,y:20,z:-150}},hemi:{sky:2501680,ground:921100,intensity:.6},ambient:{color:1579546,intensity:.28},fog:2237990,fogDensity:.03,exposure:.62,tint:{r:.18,g:.19,b:.2},sky:{band:2369578,zenith:1711650,cloudDark:1316376,cloudLit:2632746,glow:5260342},torch:.9,windowGlow:.85,coverage:1,rain:0,wetness:.25},{hour:8,sun:{color:12107972,intensity:.15,pos:{x:200,y:180,z:-100}},hemi:{sky:14212316,ground:6316120,intensity:3.4},ambient:{color:10264732,intensity:1.6},fog:13555412,fogDensity:.03,exposure:1.3,tint:{r:.82,g:.84,b:.84},sky:{band:13818584,zenith:13161168,cloudDark:12108480,cloudLit:14476514,glow:9074280},torch:.02,windowGlow:.02,coverage:1,rain:0,wetness:.25},{hour:12,sun:{color:11581626,intensity:.2,pos:{x:-200,y:300,z:150}},hemi:{sky:15001830,ground:6842464,intensity:3.8},ambient:{color:11054248,intensity:1.8},fog:14081756,fogDensity:.03,exposure:1.42,tint:{r:1,g:1,b:.98},sky:{band:14344928,zenith:13686998,cloudDark:12634824,cloudLit:14871272,glow:9205866},torch:0,windowGlow:0,coverage:1,rain:0,wetness:.25},{hour:17,sun:{color:11049104,intensity:.18,pos:{x:-250,y:150,z:200}},hemi:{sky:13158592,ground:6314574,intensity:3},ambient:{color:9867912,intensity:1.5},fog:12894906,fogDensity:.03,exposure:1.2,tint:{r:.86,g:.82,b:.78},sky:{band:13026490,zenith:12369076,cloudDark:11316388,cloudLit:13684420,glow:9073760},torch:.08,windowGlow:.06,coverage:1,rain:0,wetness:.25},{hour:20,sun:{color:5789800,intensity:.1,pos:{x:-300,y:40,z:220}},hemi:{sky:3685440,ground:1842200,intensity:1.3},ambient:{color:2631722,intensity:.55},fog:3027510,fogDensity:.03,exposure:.78,tint:{r:.36,g:.35,b:.38},sky:{band:3159094,zenith:2369580,cloudDark:1843236,cloudLit:3553850,glow:6048316},torch:.5,windowGlow:.55,coverage:1,rain:0,wetness:.25},{hour:22,sun:{color:3160648,intensity:.05,pos:{x:-150,y:-30,z:100}},hemi:{sky:2237998,ground:921100,intensity:.6},ambient:{color:1447962,intensity:.28},fog:1843236,fogDensity:.03,exposure:.58,tint:{r:.16,g:.17,b:.19},sky:{band:1974820,zenith:1448478,cloudDark:1184790,cloudLit:2369578,glow:4996658},torch:.88,windowGlow:.9,coverage:1,rain:0,wetness:.25}],hd={overcast:DE,clear:FE,rain:UE,haar:OE};function BE(i){return hd[i]||hd.overcast}var O0={drizzle:{from:"overcast",to:"rain",k:.45}},ld={overcast:["clear","drizzle","haar"],clear:["overcast"],drizzle:["overcast","rain"],rain:["drizzle"],haar:["overcast"]},B0=1.5,zE=4;function ud(i,e){let t=i*73856093^e*19349663;return t=Math.imul(t^t>>>13,2246822507),t^=t>>>16,t>>>0}function kE(i,e){let t=BE(e),n=t.length-1;for(let c=0;c<t.length&&t[c].hour<=i;c++)n=c;let s=t[n],r=t[(n+1)%t.length],o=r.hour-s.hour;o<=0&&(o+=24);let a=i-s.hour;return a<0&&(a+=24),a=o>0?Math.max(0,Math.min(1,a/o)):0,{a:s,b:r,t:a}}function Ut(i,e,t){return i+(e-i)*t}function Qr(){return{sun:{color:new Me,intensity:0,pos:new F},hemi:{sky:new Me,ground:new Me,intensity:0},ambient:{color:new Me,intensity:0},fog:new Me,fogDensity:.0095,exposure:1,tint:new Me(1,1,1),sky:{band:new Me,zenith:new Me,cloudDark:new Me,cloudLit:new Me,glow:new Me},torch:0,windowGlow:0,coverage:1,rain:0,wetness:0}}function z0(i,e){return e.sun.color.copy(i.sun.color),e.sun.intensity=i.sun.intensity,e.sun.pos.copy(i.sun.pos),e.hemi.sky.copy(i.hemi.sky),e.hemi.ground.copy(i.hemi.ground),e.hemi.intensity=i.hemi.intensity,e.ambient.color.copy(i.ambient.color),e.ambient.intensity=i.ambient.intensity,e.fog.copy(i.fog),e.fogDensity=i.fogDensity,e.exposure=i.exposure,e.tint.copy(i.tint),e.sky.band.copy(i.sky.band),e.sky.zenith.copy(i.sky.zenith),e.sky.cloudDark.copy(i.sky.cloudDark),e.sky.cloudLit.copy(i.sky.cloudLit),e.sky.glow.copy(i.sky.glow),e.torch=i.torch,e.windowGlow=i.windowGlow,e.coverage=i.coverage,e.rain=i.rain,e.wetness=i.wetness,e}function k0({scene:i,renderer:e,world:t,sky:n,torch:s,windows:r,rain:o,ambience:a}){let c=null,l=!1,u=t.lights&&t.lights.hemi,h=t.lights&&t.lights.sun,d=t.lights&&t.lights.ambient,f=t.fog,p=t.surfaces||{},x=p.road?p.road.color.clone():null,m=p.pavement?p.pavement.color.clone():null,g=.5;function _(P){let D=1-g*P,O=1+(.25-1)*P;p.road&&x&&(p.road.color.copy(x).multiplyScalar(D),p.road.roughness=O),p.pavement&&m&&(p.pavement.color.copy(m).multiplyScalar(D),p.pavement.roughness=O)}let M=Xl(),y=PE,b="overcast",E=null,w=0,v=!0,T=Math.floor(M*1e6)>>>0,R=0,I=null,L=null;function B(P){let D=ld[P]||ld.overcast,O=ud(T,R++);return D[O%D.length]}function k(P){L=B(P);let D=ud(T,R++),O=B0+D%1e3/1e3*(zE-B0);I=w+O}function U(P){v=!!P}let H=Qr(),G=Qr(),ne=Qr(),oe=Qr(),pe=Qr(),V=Qr(),K=new Me,de=new Me;function be(P,D,O,W){return P.lerpColors(K.set(D),de.set(O),W)}function we(P,D,O){let{a:W,b:se,t:q}=kE(P,D);return be(O.sun.color,W.sun.color,se.sun.color,q),O.sun.intensity=Ut(W.sun.intensity,se.sun.intensity,q),O.sun.pos.set(Ut(W.sun.pos.x,se.sun.pos.x,q),Ut(W.sun.pos.y,se.sun.pos.y,q),Ut(W.sun.pos.z,se.sun.pos.z,q)),be(O.hemi.sky,W.hemi.sky,se.hemi.sky,q),be(O.hemi.ground,W.hemi.ground,se.hemi.ground,q),O.hemi.intensity=Ut(W.hemi.intensity,se.hemi.intensity,q),be(O.ambient.color,W.ambient.color,se.ambient.color,q),O.ambient.intensity=Ut(W.ambient.intensity,se.ambient.intensity,q),be(O.fog,W.fog,se.fog,q),O.fogDensity=Ut(W.fogDensity,se.fogDensity,q),O.exposure=Ut(W.exposure,se.exposure,q),O.tint.setRGB(Ut(W.tint.r,se.tint.r,q),Ut(W.tint.g,se.tint.g,q),Ut(W.tint.b,se.tint.b,q)),be(O.sky.band,W.sky.band,se.sky.band,q),be(O.sky.zenith,W.sky.zenith,se.sky.zenith,q),be(O.sky.cloudDark,W.sky.cloudDark,se.sky.cloudDark,q),be(O.sky.cloudLit,W.sky.cloudLit,se.sky.cloudLit,q),be(O.sky.glow,W.sky.glow,se.sky.glow,q),O.torch=Ut(W.torch,se.torch,q),O.windowGlow=Ut(W.windowGlow,se.windowGlow,q),O.coverage=Ut(W.coverage,se.coverage,q),O.rain=Ut(W.rain,se.rain,q),O.wetness=Ut(W.wetness,se.wetness,q),O}function Z(P,D,O,W){return W.sun.color.lerpColors(P.sun.color,D.sun.color,O),W.sun.intensity=Ut(P.sun.intensity,D.sun.intensity,O),W.sun.pos.lerpVectors(P.sun.pos,D.sun.pos,O),W.hemi.sky.lerpColors(P.hemi.sky,D.hemi.sky,O),W.hemi.ground.lerpColors(P.hemi.ground,D.hemi.ground,O),W.hemi.intensity=Ut(P.hemi.intensity,D.hemi.intensity,O),W.ambient.color.lerpColors(P.ambient.color,D.ambient.color,O),W.ambient.intensity=Ut(P.ambient.intensity,D.ambient.intensity,O),W.fog.lerpColors(P.fog,D.fog,O),W.fogDensity=Ut(P.fogDensity,D.fogDensity,O),W.exposure=Ut(P.exposure,D.exposure,O),W.tint.lerpColors(P.tint,D.tint,O),W.sky.band.lerpColors(P.sky.band,D.sky.band,O),W.sky.zenith.lerpColors(P.sky.zenith,D.sky.zenith,O),W.sky.cloudDark.lerpColors(P.sky.cloudDark,D.sky.cloudDark,O),W.sky.cloudLit.lerpColors(P.sky.cloudLit,D.sky.cloudLit,O),W.sky.glow.lerpColors(P.sky.glow,D.sky.glow,O),W.torch=Ut(P.torch,D.torch,O),W.windowGlow=Ut(P.windowGlow,D.windowGlow,O),W.coverage=Ut(P.coverage,D.coverage,O),W.rain=Ut(P.rain,D.rain,O),W.wetness=Ut(P.wetness,D.wetness,O),W}function ee(P,D,O){let W=O0[D];return W?(we(P,W.from,pe),we(P,W.to,V),Z(pe,V,W.k,O),W.rainScale!=null&&(O.rain*=W.rainScale),O):we(P,D,O)}let $=0,_e=e.toneMappingExposure,ve=new Me(1,1,1);function Se(P){if(h){h.color.copy(P.sun.color),h.intensity=P.sun.intensity,h.position.copy(P.sun.pos);let D=P.sun.pos.length()||1;$=Math.asin($n.clamp(P.sun.pos.y/D,-1,1))*$n.RAD2DEG}u&&(u.color.copy(P.hemi.sky),u.groundColor.copy(P.hemi.ground),u.intensity=P.hemi.intensity),d&&(d.color.copy(P.ambient.color),d.intensity=P.ambient.intensity),f&&(f.color.copy(P.fog),f.density=P.fogDensity),_e=P.exposure,e.toneMappingExposure=_e,ve.copy(P.tint),n&&(n.setPalette({band:P.sky.band,zenith:P.sky.zenith,cloudDark:P.sky.cloudDark,cloudLit:P.sky.cloudLit,glow:P.sky.glow}),n.setCoverage(P.coverage)),s&&s.setDarkness(P.torch),r&&r.setGlow(P.windowGlow),c&&c.setGlow(P.windowGlow),o&&o.setIntensity(P.rain),a&&a.setRain(P.rain),_(P.wetness)}let Y=new Map,fe=0;function te(P){Y.has(P)||P.userData&&P.userData.unlit===!1||Y.set(P,P.color.clone())}function ue(){let P=new Set;i.traverse(D=>{if(!D.isMesh||!D.material)return;let O=Array.isArray(D.material)?D.material:[D.material];for(let W of O)W&&(P.add(W),W.isMeshBasicMaterial&&te(W))});for(let D of Y.keys())P.has(D)||Y.delete(D)}function ae(){for(let[P,D]of Y)P.color.copy(D).multiply(ve)}function me(P,D){if(l){y!==0&&(M=((M+y*(P/60))%24+24)%24);return}if(y!==0&&(M=(M+y*(P/60))%24,M<0&&(M+=24),w+=y*(P/60),v&&I!==null&&w>=I&&!E)){let se=L;Ce(se),k(se)}let O=E?E.toWeather:b;ee(M,O,H);let W;if(E){E.elapsed+=P;let se=Math.min(1,E.elapsed/E.duration);Z(E.from,H,se,G),W=G,se>=1&&(b=E.toWeather,E=null)}else W=H;Se(W),z0(W,oe),fe++,fe%NE===0&&ue(),ae()}k(b),ue(),me(0,0);function J(P){M=(P%24+24)%24,y=0,me(0,0)}function he(P){y=P}function ge(){return M}let De=new Set([...Object.keys(hd),...Object.keys(O0)]);function Ce(P){if(E){if(P===E.toWeather)return}else if(P===b)return;z0(oe,ne),E={from:ne,toWeather:P,elapsed:0,duration:LE}}function N(P){if(!De.has(P)){console.warn(`[atmosphere] setWeather: unknown weather "${P}", ignoring`);return}Ce(P),v&&k(P)}function Le(){return{hours:M,rate:y,weather:b,weatherTransition:E?{target:E.toWeather,progress:Math.min(1,E.elapsed/E.duration)}:null,sunAltitude:$,exposure:_e,fogDensity:f?f.density:oe.fogDensity,tint:{r:ve.r,g:ve.g,b:ve.b},rain:oe.rain,wetness:oe.wetness,weatherScheduleEnabled:v}}function Ue(P,D,O){let W=E?E.toWeather:b;M=((M+P)%24+24)%24,me(0,0);let se=ld[W]||[],q=W;return se.length&&(q=se[ud(D>>>0,O>>>0)%se.length],N(q)),{hours:P,from:W,to:q}}function C(P){c=P||null,c&&c.setGlow(oe.windowGlow)}function S(P){let D=l;l=!!P,D&&!l&&me(0,0)}return{update:me,setTime:J,getTime:ge,setRate:he,setWeather:N,setWeatherSchedule:U,state:Le,setLamps:C,nudge:Ue,setSuspended:S,isSuspended:()=>l}}var H0=3.2,HE=2.4,GE=.85,VE=1.15,G0=.34,WE=1/11,dd=4e3;function XE(i,e){let t=i*73856093^e*19349663;return t=Math.imul(t^t>>>13,2246822507),t^=t>>>16,t>>>0}function fd(i,e){return XE(i,e)%1e5/1e5}function qE(){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255, 214, 150, 0.95)"),n.addColorStop(.5,"rgba(255, 190, 110, 0.55)"),n.addColorStop(1,"rgba(255, 170, 90, 0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let s=new Et(e);return s.colorSpace=tt,s}function V0(i,e,t){let n=i&&i.leith&&i.leith.buildings||[],s=e&&e.nearestStreetPoint,r=e&&e.groundHeight;if(!n.length||!s)return{mesh:null,count:0,setGlow(){}};let o=[];n.forEach((_,M)=>{let y=Math.max(1,_.levels||1);if(y<2)return;jr(_,s).forEach((E,w)=>{if(E.len<1)return;let v=(E.ax+E.bx)/2,T=(E.az+E.bz)/2,R=s(v,T);if(!R||!R.point)return;let I=-E.dirz,L=E.dirx,B=R.point[0]-v,k=R.point[1]-T;I*B+L*k<0&&(I=-I,L=-L);let U=Math.atan2(I,L),H=Math.max(1,Math.round(E.len/HE));for(let G=0;G<H;G++){let ne=w*4099+G;if(fd(M,ne)>=WE)continue;let oe=(G+.5)/H,pe=E.ax+E.dirx*E.len*oe+I*G0,V=E.az+E.dirz*E.len*oe+L*G0,K=1+Math.floor(fd(M,ne+1)*(y-1)),de=.3+fd(M,ne+2)*.4,we=(r?r(pe,V):0)+K*H0+de*H0,Z=s(pe,V);o.push({x:pe,y:we,z:V,yaw:U,dist:Z?Z.distance:0})}})}),o.sort((_,M)=>_.dist-M.dist);let a=Math.max(0,o.length-dd),c=a>0?o.slice(0,dd):o;if(a>0&&console.warn(`[windows] ${a} candidate lit windows beyond ${dd} dropped (furthest-from-street first)`),!c.length)return{mesh:null,count:0,setGlow(){}};let l=new Ot(GE,VE),u=new dn({map:qE(),transparent:!0,opacity:0,depthWrite:!1,blending:Xi,side:yn});u.userData.unlit=!1;let h=new cn(l,u,c.length);h.name="lit-windows";let d=new Je,f=new F,p=new Pt,x=new Yt,m=new F(1,1,1);c.forEach((_,M)=>{f.set(_.x,_.y,_.z),x.set(0,_.yaw,0),p.setFromEuler(x),d.compose(f,p,m),h.setMatrixAt(M,d)}),h.instanceMatrix.needsUpdate=!0,t.add(h);function g(_){u.opacity=Math.max(0,Math.min(1,_))}return{mesh:h,count:c.length,dropped:a,setGlow:g}}var pd={r:44,g:50,b:45},YE=2501416,W0=60;function ZE(){let t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d"),s=n.createImageData(256,256),r=s.data;for(let o=0;o<256;o++)for(let a=0;a<256;a++){let c=a/256*6,l=o/256*6,u=pd.r,h=pd.g,d=pd.b,f=en(c,l,6,3,401)-.5;u+=f*10,h+=f*12,d+=f*10,Jn(a,o,419)>.986&&(u+=26,h+=26,d+=22);let x=(o*256+a)*4;r[x]=Math.max(0,Math.min(255,u)),r[x+1]=Math.max(0,Math.min(255,h)),r[x+2]=Math.max(0,Math.min(255,d)),r[x+3]=255}return n.putImageData(s,0,0),Qs(t)}function X0(i,e){let t=i.streetLine||[];if(t.length<2)return{group:null};let n=t[0],s=t[t.length-1],r=n[0]-s[0],o=n[1]-s[1],a=Math.hypot(r,o)||1;r/=a,o/=a;let c=-o,l=r,h=(i.groundHeight?i.groundHeight(n[0],n[1]):0)-2.5,d=new st;d.name="forth";let f=1400,p=15,x=new Ot(f,f);x.rotateX(-Math.PI/2);let m=ZE();m.repeat.set(f/W0,f/W0);let g=new He(x,new Ze({map:m}));g.position.set(n[0]+r*(p+f/2),h,n[1]+o*(p+f/2)),g.name="forth-water",d.add(g);let _=p+340,M=12,y=new et(26,M,900);y.translate(0,M/2,0),y.rotateY(Math.atan2(c,l)),y.translate(n[0]+r*_,h,n[1]+o*_);let b=new He(y,new Ze({color:new Me(YE).multiplyScalar(4.7)}));return b.name="forth-shore",d.add(b),e.add(d),{group:d,water:g,shore:b}}var Tt=(()=>{let i=13723136;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),gd=596,sr=690,md=620,KE=593,$E=-3.2,JE=115,fi=3.5,ir=2,or=.03,jE=.042;function Y0(i,e){let t=i.streetLine||[];if(t.length<2)return{group:new st};let n=i.groundHeight,s=new st;e.add(s);let r=[],o=[],a=[],c=[];return tT(t,s,c,r,o,a,n),sT(t,r,n),aT(t,s,n),oT(r,s),iT(o,a,s),c.length&&s.add(new He(rt(c,!1),new Ze({vertexColors:!0,flatShading:!0}))),{group:s}}function QE(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0;return{point:[s+c*h,r+l*h],tangent:[c/(u||1),l/(u||1)]}}t+=u}return null}function eT(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function rr(i,e,t,n){let s=QE(i,e);if(!s)return null;let[r,o]=s.tangent,a=-o,c=r,l=s.point[0]+a*t,u=s.point[1]+c*t;return{x:l,z:u,y:n?n(l,u):0,yaw:Math.atan2(r,o),tangent:s.tangent}}function tT(i,e,t,n,s,r,o){let a=uT(),c=[],l=1.5;for(let u=md-6;u<sr;u+=5){let h=rr(i,u+2.5,(Tt()-.5)*.8,o);if(!h)break;let d=new Ot(l*2,5.4);d.rotateX(-Math.PI/2),d.rotateY(h.yaw),d.translate(h.x,h.y+jE,h.z),c.push(d)}c.length&&e.add(new He(rt(c,!1),new Ze({map:a,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3})));for(let u=md-8;u<sr+4;u+=3.2)for(let h of[-1,1]){let d=rr(i,u+Tt()*2,h*(l+.7+Tt()*.9),o);if(!d)continue;let f=.75+Tt()*.65,p=.26+Tt()*.26,x=new cs(f,p,9);if(x.translate(0,p/2,0),x.scale(1,1,.7+Tt()*.5),x.rotateY(Tt()*Math.PI),x.translate(d.x,d.y+or,d.z),ba(x,[6048825,6969411,4865326][Math.floor(Tt()*3)]),t.push(x),Tt()<.55){let m=new et(.4+Tt()*.5,.09,.35+Tt()*.4);m.rotateZ((Tt()-.5)*.9),m.rotateY(Tt()*Math.PI),m.translate(d.x+(Tt()-.5)*1.4,d.y+or+.12,d.z+(Tt()-.5)*1.4),ba(m,2829352),t.push(m)}}for(let u=md-10;u<sr+6;u+=2.3)for(let h of[-1,1]){let d=rr(i,u,h*(l+1.9+Tt()*.4),o);d&&n.push({...d,tipped:Tt()<.16})}q0(i,gd,sr,4.4,s,r,o),q0(i,gd,sr,-4.4,s,r,o),nT(i,sr+2,s,r,o)}function q0(i,e,t,n,s,r,o){for(let a=e;a<t;a+=fi+.1){let c=rr(i,a+fi/2,n,o);if(!c)break;Tt()<.12||Z0(c.x,c.z,c.y,c.yaw,s,r,Tt()<.18)}}function nT(i,e,t,n,s){for(let r=-6;r<=6;r+=fi+.1){let o=rr(i,e,r+fi/2,s);o&&Z0(o.x,o.z,o.y,o.yaw+Math.PI/2,t,n,Tt()<.25)}}function Z0(i,e,t,n,s,r,o){let a=o?(Tt()-.5)*.5:(Tt()-.5)*.06,c=[],l=(p,x,m,g,_)=>{let M=new et(p,x,m);M.translate(g,_,0),c.push(M)};l(.05,ir,.05,-fi/2,ir/2),l(.05,ir,.05,fi/2,ir/2),l(fi,.05,.05,0,ir-.03),l(fi,.05,.05,0,.03);let u=new et(.5,.11,.26);u.translate(-fi/2,.055,0);let h=new et(.5,.11,.26);h.translate(fi/2,.055,0),c.push(u,h);let d=rt(c,!1);d.rotateZ(a),d.rotateY(n),d.translate(i,t+or,e),s.push(d);let f=new Ot(fi-.1,ir-.1);f.translate(0,ir/2,0),f.rotateZ(a),f.rotateY(n),f.translate(i,t+or,e),r.push(f)}function iT(i,e,t){i.length&&t.add(new He(rt(i,!1),new Ze({color:5592911,flatShading:!0}))),e.length&&t.add(new He(rt(e,!1),new Ze({map:lT(),transparent:!0,alphaTest:.35,side:Ft,depthWrite:!0})))}function sT(i,e,t){let n=eT(i);for(let s=40;s<n-20;s+=JE){if(s>gd-40&&s<sr+40)continue;let r=3+Math.floor(Tt()*6);for(let o=0;o<r;o++){let a=rr(i,s+(Tt()-.5)*14,(Tt()-.5)*12,t);a&&e.push({...a,tipped:Tt()<.35})}}}function rT(){let i=[],e=new cs(.24,.62,10);e.translate(0,.31,0),ba(e,11025678),i.push(e);let t=new wn(.125,.15,.13,10);t.translate(0,.33,0),ba(t,13223092),i.push(t);let n=new et(.34,.05,.34);return n.translate(0,.025,0),ba(n,8006666),i.push(n),rt(i,!1)}function oT(i,e){if(!i.length)return;let t=rT(),n=new Ze({vertexColors:!0,flatShading:!0}),s=new cn(t,n,i.length),r=new Je,o=new Pt,a=new Yt,c=new F,l=new F(1,1,1);i.forEach((u,h)=>{a.set(u.tipped?Math.PI/2*(.75+Tt()*.3):(Tt()-.5)*.08,Tt()*Math.PI*2,0,"YXZ"),o.setFromEuler(a),c.set(u.x,(u.y||0)+or+(u.tipped?.2:0),u.z),r.compose(c,o,l),s.setMatrixAt(h,r)}),s.instanceMatrix.needsUpdate=!0,e.add(s)}function aT(i,e,t){let n=rr(i,KE,$E,t);if(!n)return;let s=4.2,r=2.5,o=.45,a=new Ot(s,r);a.translate(0,o+r/2,0);let[c,l]=n.tangent,u=Math.atan2(-c,-l);a.rotateY(u),a.translate(n.x,n.y+or,n.z),e.add(new He(a,new Ze({map:cT(),side:Ft})));let h=[];for(let f of[-1,1]){let p=new et(.12,o+.3,.12);p.translate(f*(s/2-.3),(o+.3)/2,0),h.push(p)}let d=rt(h,!1);d.rotateY(u),d.translate(n.x,n.y+or,n.z),e.add(new He(d,new Ze({color:4867128})))}function cT(){let t=document.createElement("canvas");t.width=1024,t.height=610;let n=t.getContext("2d");n.fillStyle="#26506e",n.fillRect(0,0,1024,610);for(let r=0;r<2600;r++){let o=Math.random()*1024,a=Math.random()*610;n.fillStyle=`rgba(${20+Math.random()*60},${30+Math.random()*50},${40+Math.random()*50},0.06)`,n.fillRect(o,a,Math.random()*90,Math.random()*5)}n.fillStyle="#e8e6dc",n.textAlign="center",n.font="bold 62px Helvetica, Arial, sans-serif",n.fillText("LEITH WALK",1024/2,110),n.fillText("IMPROVEMENT PROJECT",1024/2,180),n.fillStyle="#f0c02a",n.fillRect(120,232,784,6),n.fillStyle="#e8e6dc",n.font="bold 50px Helvetica, Arial, sans-serif",n.fillText("COMPLETION: SPRING 2023",1024/2,310),n.font="30px Helvetica, Arial, sans-serif",n.fillStyle="#b8c6d2",n.fillText("WE APOLOGISE FOR ANY INCONVENIENCE",1024/2,380),n.font="24px Helvetica, Arial, sans-serif",n.fillText("City of Edinburgh Council",1024/2,430),n.strokeStyle="rgba(210,60,40,0.85)",n.lineWidth=9,n.lineCap="round",n.beginPath(),n.moveTo(190,340),n.lineTo(835,285),n.stroke(),n.save(),n.translate(1024/2,520),n.rotate(-.05),n.fillStyle="rgba(214,66,44,0.9)",n.font="bold 58px Helvetica, Arial, sans-serif",n.fillText("STILL WAITING",0,0),n.restore(),n.globalCompositeOperation="destination-out";for(let r=0;r<26;r++){let o=Math.random()*1024,a=Math.random()<.5?Math.random()*40:610-Math.random()*40;n.beginPath(),n.ellipse(o,a,10+Math.random()*50,6+Math.random()*22,Math.random()*3,0,Math.PI*2),n.fill()}n.globalCompositeOperation="source-over";let s=new Et(t);return s.colorSpace=tt,s.anisotropy=16,s}function lT(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.clearRect(0,0,128,128),t.strokeStyle="#50524b",t.lineWidth=2;let n=128/8;for(let r=0;r<=8;r++)t.beginPath(),t.moveTo(r*n,0),t.lineTo(r*n,128),t.stroke(),t.beginPath(),t.moveTo(0,r*n),t.lineTo(128,r*n),t.stroke();let s=new Et(e);return s.wrapS=s.wrapT=Kn,s.repeat.set(6,4),s.colorSpace=tt,s.anisotropy=16,s}function uT(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.fillStyle="#241d16",t.fillRect(0,0,256,256);for(let s=0;s<2200;s++){let r=Math.random();t.fillStyle=`rgba(${30+r*55},${25+r*45},${18+r*35},0.5)`,t.beginPath(),t.arc(Math.random()*256,Math.random()*256,Math.random()*5,0,Math.PI*2),t.fill()}t.fillStyle="rgba(78,84,74,0.45)",t.beginPath(),t.ellipse(256*.55,256*.62,256*.3,256*.13,.3,0,Math.PI*2),t.fill(),t.fillStyle="#4a4235",t.fillRect(0,256*.4,256,16),t.fillStyle="rgba(255,255,255,0.07)",t.fillRect(0,256*.4,256,5);let n=new Et(e);return n.colorSpace=tt,n.anisotropy=16,n}function ba(i,e){let t=new Me(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;i.setAttribute("color",new je(s,3))}var pn=(()=>{let i=39441;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),hT=115,dT=90,fT=40,K0=10,pT=27,mT=8,$0=22,gT=55,Ql=1.35;function J0(i,e,t){let n=i.streetLine||[];if(n.length<2)return{group:new st,update(){}};let s=i.groundHeight||(()=>0),r=new st;r.name="birds",t.add(r);let o=xT(n,r);return yT(i,e,r),vT(n,r,s),{group:r,update(a,c){_T(o,c,s)}}}function xd(i,e){let t=i/2,n=[],s=u=>{let h=new Float32Array([u*.04,0,e*.18,u*.04,0,-e*.16,u*t*.55,.03*t,-e*.3,u*.04,0,e*.18,u*t*.55,.03*t,-e*.3,u*t*.58,.03*t,e*.06,u*t*.58,.03*t,e*.06,u*t*.55,.03*t,-e*.3,u*t,.1*t,-e*.38,u*t*.58,.03*t,e*.06,u*t,.1*t,-e*.38,u*t*.97,.1*t,-e*.1]),d=new pt;return d.setAttribute("position",new je(h,3)),d.computeVertexNormals(),d},r=s(-1);Sa(r,4869188);let o=s(1);Sa(o,4869188),n.push(r,o);let a=(u,h,d)=>{let f=new et(u,h,d).toNonIndexed();return f.deleteAttribute("uv"),f},c=a(e*.17,e*.15,e);Sa(c,7237734),n.push(c);let l=a(e*.34,.012,e*.3);return l.translate(0,0,-e*.6),Sa(l,2895400),n.push(l),rt(n,!1)}function _d(){return new Ze({vertexColors:!0,flatShading:!0,side:Ft})}function xT(i,e){let t=Q0(i),n=[];for(let r=0;r<hT;r++){let o=j0(i,30+pn()*Math.max(1,t-60));if(!o)continue;let[a,c]=o.tangent;n.push({ox:o.point[0],oz:o.point[1],ax:a,az:c,px:-c,pz:a,rAlong:$0+pn()*(gT-$0),rAcross:2.5+pn()*(mT-2.5),y:K0+pn()*(pT-K0),speed:(pn()<.5?-1:1)*(.1+pn()*.14),phase:pn()*Math.PI*2,bobAmp:.5+pn()*1.4,bobFreq:.25+pn()*.45,scale:.85+pn()*.5})}let s=new cn(xd(Ql,Ql*.42),_d(),n.length);return s.frustumCulled=!1,e.add(s),{mesh:s,birds:n}}function _T({mesh:i,birds:e},t,n){let s=new Je,r=new Pt,o=new Yt,a=new F,c=new F;e.forEach((l,u)=>{let h=t*l.speed+l.phase,d=Math.cos(h),f=Math.sin(h),p=d*l.rAlong,x=f*l.rAcross,m=l.ox+l.ax*p+l.px*x,g=l.oz+l.az*p+l.pz*x,_=n(m,g)+l.y+Math.sin(t*l.bobFreq+l.phase)*l.bobAmp,M=(-f*l.rAlong*l.ax+d*l.rAcross*l.px)*l.speed,y=(-f*l.rAlong*l.az+d*l.rAcross*l.pz)*l.speed,b=Math.atan2(M,y),E=(-d*l.rAlong*l.ax-f*l.rAcross*l.px)*l.speed*l.speed,w=(-d*l.rAlong*l.az-f*l.rAcross*l.pz)*l.speed*l.speed,v=Math.hypot(M,y)||1e-4,T=(E*y-w*M)/v,R=$n.clamp(T*90,-1,1);o.set(Math.sin(t*l.bobFreq+l.phase)*.06,b,R,"YXZ"),r.setFromEuler(o),a.set(m,_,g),c.setScalar(l.scale),s.compose(a,r,c),i.setMatrixAt(u,s)}),i.instanceMatrix.needsUpdate=!0}function yT(i,e,t){let n=e&&e.buildings||[],s=i.nearestStreetPoint,r=i.groundHeight||(()=>0),o=[],a=n.filter(f=>{let p=f.footprint;if(!p||p.length<3)return!1;let x=s?s(p[0][0],p[0][1]):null;return!x||x.distance<=30}),c=a.length?dT/a.length:0;for(let f of a){let p=f.footprint,x=Math.max(1,f.levels||1)*3.2,m=Math.floor(c)+(pn()<c%1?1:0);for(let g=0;g<m;g++){let _=Math.floor(pn()*p.length),M=(_+1)%p.length,y=.15+pn()*.7,b=p[_][0]+(p[M][0]-p[_][0])*y,E=p[_][1]+(p[M][1]-p[_][1])*y;o.push({x:b,z:E,y:r(b,E)+x+.12,yaw:pn()*Math.PI*2})}}if(!o.length)return;let l=new cn(xd(Ql*.42,Ql*.46),_d(),o.length),u=new Je,h=new Pt,d=new Yt;o.forEach((f,p)=>{d.set(0,f.yaw,0,"YXZ"),h.setFromEuler(d),u.compose(new F(f.x,f.y,f.z),h,new F(1,1,1)),l.setMatrixAt(p,u)}),l.instanceMatrix.needsUpdate=!0,t.add(l)}function vT(i,e,t){let n=Q0(i),s=[];for(let u=0;u<fT;u++){let h=j0(i,25+pn()*Math.max(1,n-50));if(!h)continue;let[d,f]=h.tangent,p=-f,x=d,m=(pn()*2-1)*5.5,g=h.point[0]+p*m,_=h.point[1]+x*m;s.push({x:g,z:_,yaw:pn()*Math.PI*2})}if(!s.length)return;let r=xd(.3,.3);Sa(r,5263948);let o=new cn(r,_d(),s.length),a=new Je,c=new Pt,l=new Yt;s.forEach((u,h)=>{l.set(0,u.yaw,0,"YXZ"),c.setFromEuler(l),a.compose(new F(u.x,t(u.x,u.z)+.1,u.z),c,new F(1,1,1)),o.setMatrixAt(h,a)}),o.instanceMatrix.needsUpdate=!0,e.add(o)}function j0(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0;return{point:[s+c*h,r+l*h],tangent:[c/(u||1),l/(u||1)]}}t+=u}return null}function Q0(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function Sa(i,e){let t=new Me(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;i.setAttribute("color",new je(s,3))}var ar=(()=>{let i=10775;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),MT=90,bT=6.6,eg=2.5,ST=9,ET=.06;function sg(i,e){let t=i.streetLine||[];if(t.length<2)return{group:new st,update(){}};let n=new st;n.name="vermin",e.add(n);let s=RT(t),r=[];for(let c=0;c<MT;c++){let l=20+ar()*Math.max(1,s-45),u=eg+ar()*(ST-eg),h=ig(t,l),d=ig(t,Math.min(l+u,s-1));if(!h||!d)continue;let p=(ar()<.5?1:-1)*(bT+(ar()-.5)*.8),x=ng(h,p),m=ng(d,p);r.push({ax:x[0],az:x[1],bx:m[0],bz:m[1],rate:.07+ar()*.16,phase:ar(),scale:.8+ar()*.5})}let o=new cn(AT(),new Ze({vertexColors:!0,flatShading:!0}),r.length);n.add(o);let a=i.groundHeight||(()=>0);return{group:n,update(c,l){wT(o,r,l,a)}}}function TT(i){return i<.18?tg(0,.18,i):i<.5?1:i<.68?1-tg(.5,.68,i):0}function tg(i,e,t){let n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)}function wT(i,e,t,n){let s=new Je,r=new Pt,o=new Yt,a=new F,c=new F;e.forEach((l,u)=>{let h=(t*l.rate+l.phase)%1,d=TT(h),f=l.ax+(l.bx-l.ax)*d,p=l.az+(l.bz-l.az)*d,x=h>=.5,m=x?l.ax-l.bx:l.bx-l.ax,g=x?l.az-l.bz:l.bz-l.az,_=Math.atan2(m,g),y=h<.18||h>=.5&&h<.68?Math.abs(Math.sin(t*26+u))*.025:0;o.set(0,_,0,"YXZ"),r.setFromEuler(o),a.set(f,n(f,p)+ET+y,p),c.setScalar(l.scale),s.compose(a,r,c),i.setMatrixAt(u,s)}),i.instanceMatrix.needsUpdate=!0}function AT(){let i=[],e=(r,o,a)=>{let c=new et(r,o,a).toNonIndexed();return c.deleteAttribute("uv"),c},t=e(.11,.1,.23);t.translate(0,.05,0),yd(t,4537909),i.push(t);let n=e(.075,.07,.1);n.translate(0,.045,.15),yd(n,5129787),i.push(n);let s=e(.016,.016,.21);return s.translate(0,.035,-.21),yd(s,4866617),i.push(s),rt(i,!1)}function ng(i,e){let[t,n]=i.tangent;return[i.point[0]+-n*e,i.point[1]+t*e]}function ig(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0;return{point:[s+c*h,r+l*h],tangent:[c/(u||1),l/(u||1)]}}t+=u}return null}function RT(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function yd(i,e){let t=new Me(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;i.setAttribute("color",new je(s,3))}var mt=(()=>{let i=11590938;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),CT=210,IT=130,PT=260,LT=22;function rg(i,e,t){let n=i.streetLine||[];if(n.length<2)return{group:new st};let s=i.groundHeight||(()=>0),r=new st;return t.add(r),NT(i,e,n,r),FT(n,r,s),UT(n,r,s),OT(n,r,s),{group:r}}function NT(i,e,t,n){let s=DT(),r=[],o=(f,p,x,m,g)=>{for(let _=0;_<3;_++){let M=new Ot(m,m);M.translate(0,m/2,0),M.rotateZ(g),M.rotateY(_/3*Math.PI+mt()*.4),M.translate(f,p,x),r.push(M)}},a=e&&e.buildings||[],c=i.nearestStreetPoint,l=a.filter(f=>{let p=f.footprint;if(!p||p.length<3)return!1;let x=c?c(p[0][0],p[0][1]):null;return!x||x.distance<=28}),u=i.groundHeight||(()=>0),h=l.length?CT/l.length:0;for(let f of l){let p=f.footprint,x=Math.floor(h)+(mt()<h%1?1:0),m=Math.max(1,f.levels||1)*3.2;for(let g=0;g<x;g++){let _=Math.floor(mt()*p.length),M=(_+1)%p.length,y=.1+mt()*.8,b=p[_][0]+(p[M][0]-p[_][0])*y,E=p[_][1]+(p[M][1]-p[_][1])*y;o(b,u(b,E)+m-.25,E,1.1+mt()*1.5,(mt()-.5)*.5)}}let d=vd(t);for(let f=0;f<IT;f++){let p=nu(t,20+mt()*Math.max(1,d-40));if(!p)continue;let m=(mt()<.5?1:-1)*(7.2+mt()*2.6),g=tu(p,m);o(g[0],u(g[0],g[1])+.03,g[1],.8+mt()*1.1,(mt()-.5)*.3)}r.length&&n.add(new He(rt(r,!1),new Ze({map:s,transparent:!0,alphaTest:.45,side:Ft,depthWrite:!0})))}function DT(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.clearRect(0,0,256,256);for(let s=0;s<170;s++){let r=-Math.PI/2+(Math.random()-.5)*2.5,o=30+Math.random()*78,a=256/2+(Math.random()-.5)*58,c=256-Math.random()*44,l=46+Math.random()*52;t.strokeStyle=`rgba(${28+Math.random()*26},${l},${30+Math.random()*22},0.95)`,t.lineWidth=2+Math.random()*5,t.lineCap="round",t.beginPath(),t.moveTo(a,c),t.quadraticCurveTo(a+Math.cos(r)*o*.5+(Math.random()-.5)*24,c+Math.sin(r)*o*.5,a+Math.cos(r)*o,c+Math.sin(r)*o),t.stroke()}for(let s=0;s<13;s++){let r=34+Math.random()*188,o=26+Math.random()*96,a=26+Math.random()*40;for(let c=0;c<26;c++){let l=c/26,u=(1-l)*8+1.5;t.fillStyle=`rgba(${74+Math.random()*30},${44+Math.random()*22},${88+Math.random()*32},0.88)`,t.beginPath(),t.ellipse(r+(Math.random()-.5)*4,o+l*a,u,3.5,0,0,Math.PI*2),t.fill()}}let n=new Et(e);return n.colorSpace=tt,n.anisotropy=16,n}function FT(i,e,t){let n=vd(i),s=[];for(let r=0;r<PT;r++){let o=nu(i,15+mt()*Math.max(1,n-30));if(!o)continue;let c=(mt()<.5?1:-1)*(mt()<.65?6.3+mt()*.7:7.5+mt()*2.2),l=tu(o,c),u=t(l[0],l[1]),h=mt(),d,f;h<.3?(d=new wn(.037,.042,.27,6),d.rotateZ(Math.PI/2),d.rotateY(mt()*Math.PI*2),d.translate(0,.04,0),f=2899230):h<.55?(d=new wn(.032,.032,.1,6),d.rotateZ(Math.PI/2+(mt()-.5)*.7),d.scale(1,1,.6),d.translate(0,.032,0),f=mt()<.5?10115614:3100522):h<.8?(d=new et(.16+mt()*.08,.05,.12+mt()*.06),d.rotateY(mt()*Math.PI),d.rotateZ((mt()-.5)*.5),d.translate(0,.026,0),f=11051924):(d=new Ot(.24+mt()*.2,.18+mt()*.14),d.rotateX(-Math.PI/2),d.rotateY(mt()*Math.PI),d.translate(0,.036,0),f=7170652),d.translate(l[0],u+.03,l[1]),eu(d,f),s.push(d)}s.length&&e.add(new He(rt(s,!1),new Ze({vertexColors:!0,flatShading:!0,side:Ft})))}function UT(i,e,t){let n=vd(i),s=[];for(let r=0;r<LT;r++){let o=nu(i,25+mt()*Math.max(1,n-50));if(!o)continue;let a=mt()<.5?1:-1,c=tu(o,a*(7.6+mt()*1.8)),l=t(c[0],c[1]),u=mt()<.6,h=[],d=new et(.62,1.05,.72).toNonIndexed();d.deleteAttribute("uv"),d.translate(0,.525,0),eu(d,[3095084,3813160,2634298][Math.floor(mt()*3)]),h.push(d);let f=new et(.66,.07,.76).toNonIndexed();f.deleteAttribute("uv"),f.translate(0,1.07,u?.1:-.3),f.rotateX(u?.2:-.7),eu(f,1975840),h.push(f);let p=rt(h,!1);p.rotateY(mt()*Math.PI*2),u&&p.rotateZ(Math.PI/2+(mt()-.5)*.3),p.translate(c[0],l+(u?.34:.03),c[1]),s.push(p)}s.length&&e.add(new He(rt(s,!1),new Ze({vertexColors:!0,flatShading:!0})))}function OT(i,e,t){let n=nu(i,415);if(!n)return;let s=tu(n,-3.4),r=t(s[0],s[1]),o=[],a=(d,f,p,x,m,g)=>{let _=new et(d,f,p).toNonIndexed();_.deleteAttribute("uv"),_.translate(x,m,g),o.push(_)},c=.56,l=.44,u=.86;for(let d=0;d<=6;d++){let f=-u/2+d/6*u;a(c,.018,.018,0,l,f),a(.018,l,.018,-c/2,l/2,f),a(.018,l,.018,c/2,l/2,f)}for(let d=0;d<=4;d++){let f=-c/2+d/4*c;a(.018,.018,u,f,.02,0),a(.018,.018,u,f,l,0)}a(c,l,.018,0,l/2,-u/2),a(.03,.3,.03,0,l+.15,-u/2);let h=rt(o,!1);eu(h,6974822),h.rotateZ(Math.PI/2*.92),h.rotateY(mt()*Math.PI*2),h.translate(s[0],r+.3,s[1]),e.add(new He(h,new Ze({vertexColors:!0,flatShading:!0})))}function tu(i,e){let[t,n]=i.tangent;return[i.point[0]+-n*e,i.point[1]+t*e]}function nu(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0;return{point:[s+c*h,r+l*h],tangent:[c/(u||1),l/(u||1)]}}t+=u}return null}function vd(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function eu(i,e){let t=new Me(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;i.setAttribute("color",new je(s,3))}function og(i){let e=new Map,t=new Map,n=i.clone();return ag(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function ag(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)ag(i.children[n],e.children[n],t)}var iu=class extends oi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ad(t)}),this.register(function(t){return new Rd(t)}),this.register(function(t){return new Od(t)}),this.register(function(t){return new Bd(t)}),this.register(function(t){return new zd(t)}),this.register(function(t){return new Id(t)}),this.register(function(t){return new Pd(t)}),this.register(function(t){return new Ld(t)}),this.register(function(t){return new Nd(t)}),this.register(function(t){return new wd(t)}),this.register(function(t){return new Dd(t)}),this.register(function(t){return new Cd(t)}),this.register(function(t){return new Ud(t)}),this.register(function(t){return new Fd(t)}),this.register(function(t){return new Ed(t)}),this.register(function(t){return new su(t,ft.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new su(t,ft.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new kd(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Wi.extractUrlBase(e);o=Wi.resolveURL(l,this.path)}else o=Wi.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Xs(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===dg){try{o[ft.KHR_BINARY_GLTF]=new Hd(e)}catch(h){s&&s(h);return}r=JSON.parse(o[ft.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Zd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case ft.KHR_MATERIALS_UNLIT:o[h]=new Td;break;case ft.KHR_DRACO_MESH_COMPRESSION:o[h]=new Gd(r,this.dracoLoader);break;case ft.KHR_TEXTURE_TRANSFORM:o[h]=new Vd;break;case ft.KHR_MESH_QUANTIZATION:o[h]=new Wd;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function BT(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function $t(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ed=class{constructor(e){this.parser=e,this.name=ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new Me(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Tn);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ys(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ci(u),l.distance=h;break;case"spot":l=new Yo(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Ai(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Td=class{constructor(){this.name=ft.KHR_MATERIALS_UNLIT}getMaterialType(){return dn}extendParams(e,t,n){let s=[];e.color=new Me(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Tn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,tt))}return Promise.all(s)}},wd=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Ad=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return $t(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Te(r,r)}return Promise.all(s)}},Rd=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DISPERSION}getMaterialType(e){return $t(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Cd=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return $t(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Id=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SHEEN}getMaterialType(e){return $t(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Me(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Tn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,tt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Pd=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return $t(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Ld=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_VOLUME}getMaterialType(e){return $t(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Me().setRGB(r[0],r[1],r[2],Tn),Promise.all(s)}},Nd=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IOR}getMaterialType(e){return $t(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Dd=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){return $t(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Me().setRGB(r[0],r[1],r[2],Tn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,tt)),Promise.all(s)}},Fd=class{constructor(e){this.parser=e,this.name=ft.EXT_MATERIALS_BUMP}getMaterialType(e){return $t(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Ud=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return $t(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Od=class{constructor(e){this.parser=e,this.name=ft.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Bd=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},zd=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},su=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},kd=class{constructor(e){this.name=ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==jn.TRIANGLES&&l.mode!==jn.TRIANGLE_STRIP&&l.mode!==jn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(let p of h){let x=new Je,m=new F,g=new Pt,_=new F(1,1,1),M=new cn(p.geometry,p.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,y),c.SCALE&&_.fromBufferAttribute(c.SCALE,y),M.setMatrixAt(y,x.compose(m,g,_));for(let y in c)if(y==="_COLOR_0"){let b=c[y];M.instanceColor=new rs(b.array,b.itemSize,b.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&p.geometry.setAttribute(y,c[y]);Lt.prototype.copy.call(M,p),this.parser.assignFinalMaterial(M),f.push(M)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},dg="glTF",Ea=12,cg={JSON:1313821514,BIN:5130562},Hd=class{constructor(e){this.name=ft.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ea),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==dg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ea,r=new DataView(e,Ea),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===cg.JSON){let l=new Uint8Array(e,Ea+o,a);this.content=n.decode(l)}else if(c===cg.BIN){let l=Ea+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Gd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let u in o){let h=qd[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=qd[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=eo[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let p in f.attributes){let x=f.attributes[p],m=c[p];m!==void 0&&(x.normalized=m)}h(f)},a,l,Tn,d)})})}},Vd=class{constructor(){this.name=ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Wd=class{constructor(){this.name=ft.KHR_MESH_QUANTIZATION}},ru=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,p=e*l,x=p-l,m=-2*f+3*d,g=f-d,_=1-m,M=g-d+h;for(let y=0;y!==a;y++){let b=o[x+y+a],E=o[x+y+c]*u,w=o[p+y+a],v=o[p+y]*u;r[y]=_*b+M*E+m*w+g*v}return r}},zT=new Pt,Xd=class extends ru{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return zT.fromArray(r).normalize().toArray(r),r}},jn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},eo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},lg={9728:Wt,9729:Xt,9984:Wc,9985:Xr,9986:$s,9987:ui},ug={33071:Yn,33648:Ir,10497:Kn},Md={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},qd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},_s={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},kT={CUBICSPLINE:void 0,LINEAR:Us,STEP:Fs},bd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function HT(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Mi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:yn})),i.DefaultMaterial}function cr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ai(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function GT(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function VT(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function WT(i){let e,t=i.extensions&&i.extensions[ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Sd(t.attributes):e=i.indices+":"+Sd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Sd(i.targets[n]);return e}function Sd(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Yd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function XT(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var qT=new Je,Zd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new BT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new ai(this.options.manager):this.textureLoader=new Ko(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Xs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return cr(r,a,s),Ai(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,u]of o.children.entries())r(u,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ft.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Wi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Md[s.type],a=eo[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Dt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Md[s.type],l=eo[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,x,m;if(f&&f!==h){let g=Math.floor(d/f),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,M=t.cache.get(_);M||(x=new l(a,g*f,s.count*f/u),M=new zs(x,f/u),t.cache.add(_,M)),m=new ss(M,c,d%f/u,p)}else a===null?x=new l(s.count*c):x=new l(a,d,s.count*c),m=new Dt(x,c,p);if(s.sparse!==void 0){let g=Md.SCALAR,_=eo[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,b=new _(o[1],M,s.sparse.count*g),E=new l(o[2],y,s.sparse.count*c);a!==null&&(m=new Dt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,v=b.length;w<v;w++){let T=b[w];if(m.setX(T,E[w*c]),c>=2&&m.setY(T,E[w*c+1]),c>=3&&m.setZ(T,E[w*c+2]),c>=4&&m.setW(T,E[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=lg[d.magFilter]||Xt,u.minFilter=lg[d.minFilter]||ui,u.wrapS=ug[d.wrapS]||Kn,u.wrapT=ug[d.wrapT]||Kn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Wt&&u.minFilter!==Xt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;let d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(x){let m=new Qt(x);m.needsUpdate=!0,d(m)}),t.load(Wi.resolveURL(h,r.path),p,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),Ai(h,o),h.userData.mimeType=o.mimeType||XT(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ft.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ft.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[ft.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new as,Mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new os,Mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Mi}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[ft.KHR_MATERIALS_UNLIT]){let h=s[ft.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Me(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Tn),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,tt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ft);let u=r.alphaMode||bd.OPAQUE;if(u===bd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===bd.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==dn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Te(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==dn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==dn){let h=r.emissiveFactor;a.emissive=new Me().setRGB(h[0],h[1],h[2],Tn)}return r.emissiveTexture!==void 0&&o!==dn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,tt)),Promise.all(l).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Ai(h,r),t.associations.set(h,{materials:e}),r.extensions&&cr(s,h,r),h})}createUniqueName(e){let t=It.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return hg(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],u=WT(l),h=s[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[ft.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=hg(new pt,l,t),s[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let u=o[c].material===void 0?HT(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,p=u.length;f<p;f++){let x=u[f],m=o[f],g,_=l[f];if(m.mode===jn.TRIANGLES||m.mode===jn.TRIANGLE_STRIP||m.mode===jn.TRIANGLE_FAN||m.mode===void 0)g=r.isSkinnedMesh===!0?new Co(x,_):new He(x,_),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===jn.TRIANGLE_STRIP?g.geometry=kh(g.geometry,ca):m.mode===jn.TRIANGLE_FAN&&(g.geometry=kh(g.geometry,Zr));else if(m.mode===jn.LINES)g=new Gs(x,_);else if(m.mode===jn.LINE_STRIP)g=new Hs(x,_);else if(m.mode===jn.LINE_LOOP)g=new Po(x,_);else if(m.mode===jn.POINTS)g=new Vs(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&VT(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Ai(g,r),m.extensions&&cr(s,g,m),t.assignFinalMaterial(g),h.push(g)}for(let f=0,p=h.length;f<p;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&cr(s,h[0],r),h[0];let d=new st;r.extensions&&cr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=h.length;f<p;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt($n.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new hs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ai(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){let h=o[l];if(h){a.push(h);let d=new Je;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Io(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],p=s.samplers[f.sampler],x=f.target,m=x.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,_=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",_)),l.push(p),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],p=h[2],x=h[3],m=h[4],g=[];for(let M=0,y=d.length;M<y;M++){let b=d[M],E=f[M],w=p[M],v=x[M],T=m[M];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let R=n._createAnimationTracks(b,E,w,v,T);if(R)for(let I=0;I<R.length;I++)g.push(R[I])}let _=new Wo(r,void 0,g);return Ai(_,s),_})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,qT)});for(let f=0,p=h.length;f<p;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){let f=u.userData.pivot,p=h[0];u.pivot=new F().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Ur:l.length>1?u=new st:l.length===1?u=l[0]:u=new Lt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Ai(u,r),r.extensions&&cr(n,u,r),r.matrix!==void 0){let h=new Je;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new st;n.name&&(r.name=s.createUniqueName(n.name)),Ai(r,n),n.extensions&&cr(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++){let d=c[u];d.parent!==null?r.add(og(d)):r.add(d)}let l=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof Mn||d instanceof Qt)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}_s[r.path]===_s.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let u;switch(_s[r.path]){case _s.weights:u=Hi;break;case _s.rotation:u=Gi;break;case _s.translation:case _s.scale:u=ls;break;default:n.itemSize===1?u=Hi:u=ls;break}let h=s.interpolation!==void 0?kT[s.interpolation]:Us,d=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let x=new u(c[f]+"."+_s[r.path],t.array,d,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Yd(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Gi?Xd:ru;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function YT(i,e,t){let n=e.attributes,s=new vn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new F(c[0],c[1],c[2]),new F(l[0],l[1],l[2])),a.normalized){let u=Yd(eo[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new F,c=new F;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let x=Yd(eo[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Cn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function hg(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=qd[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ht.workingColorSpace!==Tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),Ai(i,e),YT(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?GT(i,e.targets,t):i})}var Kd=[{file:"cars/sedan.glb",kind:"car",targetLen:4.3},{file:"cars/hatchback-sports.glb",kind:"car",targetLen:3.9},{file:"cars/van.glb",kind:"van",targetLen:5.4},{file:"cars/bus.glb",kind:"bus",targetLen:11}],ZT=16,fg=6.1,KT=405,pg=[560,700],Dn=(()=>{let i=3394627454;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})();function gg(i,e,t){let n=e&&e.streetLine;if(!n||n.length<2)return{group:null};let s=new st;s.name="cars",t.add(s);let r=new iu,o=a=>r.loadAsync(Nn(i,a.file)).then(c=>$T(c.scene,a)).catch(()=>null);return Promise.all(Kd.map(o)).then(a=>{let c={};for(let l=0;l<Kd.length;l++)a[l]&&(c[Kd[l].kind]??=[]).push(a[l]);!c.car&&!c.van&&!c.bus||JT(c,n,s,e.groundHeight)}),{group:s}}function $T(i,e){let n=new vn().setFromObject(i).getSize(new F),s=Math.max(n.x,n.z)||1,r=e.targetLen/s;i.scale.setScalar(r),i.updateMatrixWorld(!0);let o=new vn().setFromObject(i);i.position.y=-o.min.y;let a=new st;return a.add(i),a}function mg(i,e){let t=e?.05+Dn()*.04:.18+Dn()*.2,n=Dn()<.5&&!e;i.traverse(s=>{if(!s.isMesh||!s.material)return;let r=s.material,o=new Ze({map:r.map||null,color:(r.color?r.color.clone():new Me(8947848)).multiplyScalar(t)});n&&(o.color.r=Math.min(1,o.color.r*1.35+.03),o.color.b*=.75),s.material=o})}function JT(i,e,t,n){let s=[...i.car||[],...i.van||[]];if(s.length)for(let o=0;o<ZT;o++){let a=40+Dn()*1160;if(a>pg[0]&&a<pg[1])continue;let c=ma(e,a);if(!c)continue;let l=Dn()<.5?1:-1,[u,h]=c.tangent,d=s[Math.floor(Dn()*s.length)].clone(!0);mg(d,Dn()<.12);let f=c.point[0]+-h*l*(fg+Dn()*.7),p=c.point[1]+u*l*(fg+Dn()*.7);d.position.set(f,n?n(f,p):0,p);let x=Math.atan2(u,h)+(Dn()<.5?Math.PI:0);Dn()<.15&&(x+=(Dn()-.5)*1.2),d.rotation.y=x+(Dn()-.5)*.12,d.rotation.z=(Dn()-.5)*.05,t.add(d)}let r=(i.bus||[])[0];if(r){let o=ma(e,KT);if(o){let a=r.clone(!0);mg(a,!0);let c=n?n(o.point[0],o.point[1]):0;a.position.set(o.point[0],c,o.point[1]),a.rotation.y=Math.atan2(o.tangent[0],o.tangent[1])+.06,a.rotation.z=.07,t.add(a)}}}var jT=30,QT=7.6,to=30,ew=50,tw=9,$d=25,nw=3,xg=[4999740,4145720,5655614,4472891,5263946,3816500],_g=[7027246,3033690,7826250,4864602,5921354],yg=['"%Q" \u2014 whit?','did ye hear that? "%Q"','"%Q", says he','"%Q" \u2014 aye, right','"%Q"... ma nerves',`he's away wi it \u2014 "%Q"`],mn=(()=>{let i=1972196;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})();function Mg(i,e,t,n){let s=e.streetLine||[],r=e.groundHeight||(()=>0);if(s.length<2)return{update(){}};let o=i.comicLines||{},c=rw(s)-to-ew;if(c<50)return{update(){}};let l=new st;l.name="leithers",t.add(l);let u=[];for(let x=0;x<jT;x++){let m=iw();m.s=to+mn()*c,m.side=mn()<.5?1:-1,m.dir=mn()<.5?1:-1,m.speed=.55+mn()*.5,m.offset=QT+mn()*1.6,m.state="walk",m.listenT=0,m.cooldown=mn()*$d,m.phase=mn()*10,m.bubble=null,m.bubbleT=0,l.add(m.group),u.push(m)}let h=0,d=0;function f(x,m){for(let g=0;g<u.length;g++){let _=u[g];if(_.cooldown>0&&(_.cooldown-=x),_.state==="fetch"){let b=_.fetchItem.chainage-_.s;if(Math.abs(b)>2)_.dir=Math.sign(b),_.s+=_.dir*_.speed*1.5*x;else{_.state="approach",_.approachT=0;let E=_.group.position;_.approachFrom={x:E.x,z:E.z}}}else if(_.state==="approach"){_.approachT=Math.min(1,_.approachT+x/1.6);let y=_.fetchItem,b=_.approachT,E=y.x+.75,w=y.z,v=_.approachFrom.x+(E-_.approachFrom.x)*b,T=_.approachFrom.z+(w-_.approachFrom.z)*b;_.group.position.set(v,r(v,T)+Math.abs(Math.sin((_.s+b*8)*2))*.03,T),_.group.rotation.y=Math.atan2(y.x-_.group.position.x,y.z-_.group.position.z),b>=1&&(_.state="readaloud",_.readQueue=(_.fetchItem.lines||[]).slice(0,8),_.readT=.5);continue}else if(_.state==="readaloud"){if(_.readT-=x,_.readT<=0&&!_.bubble){let y=_.readQueue.shift();y==null?(_.state="walk",_.fetchItem.adopted=!1,_.fetchItem=null,_.cooldown=$d):(_.bubble=vg('"'+y+'"'),_.bubble.position.set(0,_.headTopY+.5,0),_.group.add(_.bubble),_.bubbleT=4.2,h++,_.readT=.6)}_.bubble&&(_.bubbleT-=x,_.bubbleT<=0&&(_.group.remove(_.bubble),_.bubble.material.map.dispose(),_.bubble.material.dispose(),_.bubble=null,h--));continue}else _.state==="listen"?(_.listenT-=x,(_.listenT<=0||!(_.target&&_.target.speaking))&&(_.state="walk",_.target=null,_.cooldown=$d)):(_.s+=_.dir*_.speed*x,(_.s<to||_.s>to+c)&&(_.dir*=-1,_.s=Math.max(to,Math.min(to+c,_.s))));let M=ow(s,_.s);if(M){let[y,b]=M.tangent,E=M.point[0]+-b*_.side*_.offset,w=M.point[1]+y*_.side*_.offset,v=r(E,w);if(_.group.position.set(E,v,w),_.state==="listen"&&_.target){let T=_.target.group.position;_.group.rotation.y=Math.atan2(T.x-E,T.z-w)}else{_.group.rotation.y=Math.atan2(y*_.dir,b*_.dir);let T=m*(4.6*_.speed)+_.phase;_.group.position.y=v+Math.abs(Math.sin(T))*.045,_.group.rotation.z=Math.sin(T)*.03}}_.bubble&&(_.bubbleT-=x,_.bubbleT<=0&&(_.group.remove(_.bubble),_.bubble.material.map.dispose(),_.bubble.material.dispose(),_.bubble=null,h--))}for(let g=0;g<4;g++){let _=u[d++%u.length];if(_.state!=="walk"||_.cooldown>0)continue;let M=_.group.position;for(let y of n){if(!y.speaking)continue;let b=y.group.position;if(Math.hypot(b.x-M.x,b.z-M.z)>tw)continue;_.state="listen",_.target=y,_.listenT=6+mn()*9;let E=o[y.comic.id];if(E&&E.length&&h<nw&&mn()<.6){let w=E[Math.floor(mn()*E.length)],v=yg[Math.floor(mn()*yg.length)];_.bubble=vg(v.replace("%Q",w)),_.bubble.position.set(0,_.headTopY+.5,0),_.group.add(_.bubble),_.bubbleT=7,h++}break}}}function p(x){if(!x||x.adopted||!(x.lines&&x.lines.length))return!1;let m=null,g=70;for(let _ of u){if(_.state!=="walk")continue;let M=_.group.position,y=Math.hypot(M.x-x.x,M.z-x.z);y<g&&(g=y,m=_)}return m?(x.adopted=!0,m.state="fetch",m.fetchItem=x,!0):!1}return{walkers:u,update:f,summonReader:p}}function iw(){let i=1.5+mn()*.35,e=.8+mn()*.45,t=xg[Math.floor(mn()*xg.length)],n=new st,s=_a(t,!1),r=_a(sw(t,.62),!0),o=new Ze({color:1578512,flatShading:!0}),a=.1,c=i*.32,l=.44*e,u=.3*e,h=i*.44,d=.26,f=a+c,p=f+h,x=p+d+.02,m=[];for(let v of[-1,1]){let T=new et(l*.34,c,u*.7);T.translate(v*l*.24,a+c*.5,0),m.push(T);let R=new et(.11,h*.7,.11);R.translate(v*(l*.5+.05),p-h*.62,0),m.push(R)}let g=new et(l,h,u);g.translate(0,f+h*.5,0),m.push(g),n.add(new He(rt(m),s));let _=[];for(let v of[-1,1]){let T=new et(l*.36,a,u*1.3);T.translate(v*l*.24,a*.5,u*.15),_.push(T)}n.add(new He(rt(_),o));let M=new Ze({color:2235928,flatShading:!0}),y=[r,r,r,r,M,r],b=new He(new et(d,d,d*.9),y);b.position.set(0,p+d*.5+.02,0),n.add(b);let E=new Ze({color:_g[Math.floor(mn()*_g.length)],flatShading:!0}),w=mn()<.3?[-1,1]:[mn()<.5?-1:1];for(let v of w){let T=new He(new et(.2,.24,.11),E);T.position.set(v*(l*.5+.1),f+h*.12,.02),n.add(T)}return{group:n,headTopY:x}}function sw(i,e){let t=Math.round((i>>16&255)*e),n=Math.round((i>>8&255)*e),s=Math.round((i&255)*e);return t<<16|n<<8|s}function vg(i){let e=document.createElement("canvas");e.width=512,e.height=160;let t=e.getContext("2d"),n=i.split(" "),s=[""];for(let c of n)(s[s.length-1]+" "+c).trim().length>30&&s.length<3&&s.push(""),s[s.length-1]=(s[s.length-1]+" "+c).trim();t.fillStyle="rgba(20, 22, 16, 0.82)",t.strokeStyle="rgba(200, 200, 180, 0.5)",t.lineWidth=3;let r=34+s.length*34;t.beginPath(),t.roundRect(8,80-r/2,496,r,14),t.fill(),t.stroke(),t.fillStyle="#d8d4c0",t.font="italic 26px Georgia, serif",t.textAlign="center",s.forEach((c,l)=>t.fillText(c,256,80-r/2+44+l*32));let o=new Et(e),a=new Bi(new vi({map:o,transparent:!0,depthTest:!0}));return a.scale.set(1.9,.59,1),a}function rw(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function ow(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0;return{point:[s+c*h,r+l*h],tangent:[c/(u||1),l/(u||1)]}}t+=u}return null}var bg=24,aw=70,Sg=60,cw=70,ys=(()=>{let i=1146442;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),lw=new ai;function Eg(i,e,t){let n=i.catalog&&i.catalog.comics||[],s=e.streetLine||[];if(!n.length||s.length<2)return{items:[],update(){},nearestItem:()=>null};let r=i.comicLines||{},o=n.filter(p=>r[p.id]&&r[p.id].length>=3),a=o.length>=bg?[...o]:[...o,...n.filter(p=>!r[p.id])],c=[];for(;c.length<Math.min(bg,a.length);)c.push(a.splice(Math.floor(ys()*a.length),1)[0]);let l=uw(s),u=new st;u.name="litter-comics",t.add(u);let h=c.map((p,x)=>{let m=Sg+ys()*(l-Sg-cw),g=hw(s,m);if(!g)return null;let[_,M]=g.tangent,y=ys()<.5?1:-1,b=3.5+ys()*6,E=g.point[0]+-M*y*b,w=g.point[1]+_*y*b,v=new Ze({map:Qh(),color:new Me(4.7,4.7,4.7),side:Ft}),T=new He(new Ot(.42,.58),v);T.rotation.x=-Math.PI/2,T.rotation.z=ys()*Math.PI*2,ys()<.3&&(T.rotation.y=(ys()-.5)*.5);let R=e.groundHeight?e.groundHeight(E,w):0;return T.position.set(E,R+.055+ys()*.01,w),u.add(T),{comic:p,lines:r[p.id]||[],mesh:T,x:E,z:w,chainage:m,loaded:!1,adopted:!1,load(){this.loaded||(this.loaded=!0,lw.load(Nn(i,p.image),I=>{I.colorSpace=tt,v.map=I,v.color.setScalar(4.7),v.needsUpdate=!0}))}}}).filter(Boolean);function d(p){if(p)for(let x of h)!x.loaded&&Math.hypot(p.x-x.x,p.z-x.z)<aw&&x.load()}function f(p,x,m){let g=null,_=m;for(let M of h){let y=Math.hypot(p-M.x,x-M.z);y<_&&(_=y,g=M)}return g}return{items:h,update:d,nearestItem:f}}function uw(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function hw(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0;return{point:[s+c*h,r+l*h],tangent:[c/(u||1),l/(u||1)]}}t+=u}return null}var no=900,Tg=16,wg=20,dw=-3,fw=13,Jd=.35,pw=.85,mw=.5;function gw(i){let e=i|0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function xw(i,e){return(i%e+e)%e}function _w(){let e=document.createElement("canvas");e.width=32,e.height=32;let t=e.getContext("2d");t.translate(32/2,32/2),t.scale(.22,1);let n=t.createRadialGradient(0,0,0,0,0,32/2);n.addColorStop(0,"rgba(200,210,220,0.85)"),n.addColorStop(.55,"rgba(200,210,220,0.4)"),n.addColorStop(1,"rgba(200,210,220,0)"),t.fillStyle=n,t.fillRect(-32/2,-32/2,32,32);let s=new Et(e);return s.colorSpace=tt,s}function Ag(i){let e=gw(5904299),t=new Float32Array(no),n=new Float32Array(no),s=new Float32Array(no);for(let h=0;h<no;h++)t[h]=(e()-.5)*2*Tg,n[h]=e()*wg,s[h]=(e()-.5)*2*Tg;let r=new Float32Array(no*3),o=new pt;o.setAttribute("position",new Dt(r,3));let a=new as({map:_w(),size:Jd,color:11187392,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0}),c=new Vs(o,a);c.name="rain",c.frustumCulled=!1,c.visible=!1;function l(h){let d=Math.max(0,Math.min(1,h));c.visible=d>0,a.opacity=mw*d,a.size=Jd+(pw-Jd)*d}function u(h,d){if(!c.visible)return;let f=i.position.x,p=i.position.y,x=i.position.z,m=o.attributes.position.array;for(let g=0;g<no;g++){let _=p+dw+xw(n[g]-fw*d,wg);m[g*3]=f+t[g],m[g*3+1]=_,m[g*3+2]=x+s[g]}o.attributes.position.needsUpdate=!0}return{object:c,setIntensity:l,update:u}}function Rg(){let i=null,e=null,t=!1,n=!1,s=null,r=0;function o(u){if(t){i&&i.state==="suspended"&&i.resume();return}if(t=!0,u)i=u;else{let h=window.AudioContext||window.webkitAudioContext;if(!h)return;i=new h}e=i.createGain(),e.gain.value=.16,e.connect(i.destination),yw(i,e),vw(i,e),s=Mw(i,e),s.gain.value=r}function a(u){if(n=!!u,!i||!e)return;let h=(n?.5:1)*.16,d=i.currentTime;e.gain.cancelScheduledValues(d),e.gain.setValueAtTime(e.gain.value,d),e.gain.linearRampToValueAtTime(h,d+.6)}function c(){!i||!e||bw(i,e)}function l(u){let h=Math.max(0,Math.min(1,u))*.5;if(r=h,!i||!s)return;let d=i.currentTime;s.gain.cancelScheduledValues(d),s.gain.setValueAtTime(s.gain.value,d),s.gain.linearRampToValueAtTime(h,d+.8)}return{start:o,setDucked:a,triggerCrackle:c,setRain:l,get context(){return i}}}function yw(i,e){let t=i.createGain();t.gain.value=.55;let n=i.createBiquadFilter();n.type="lowpass",n.frequency.value=220,n.Q.value=.7,t.connect(n).connect(e);let s=[55,55.6];for(let r of s){let o=i.createOscillator();o.type="sawtooth",o.frequency.value=r,o.connect(t),o.start()}}function vw(i,e){let t=i.createBufferSource();t.buffer=jd(i,4),t.loop=!0;let n=i.createBiquadFilter();n.type="bandpass",n.frequency.value=500,n.Q.value=.6;let s=i.createGain();s.gain.value=.18,t.connect(n).connect(s).connect(e),t.start();let r=i.createOscillator();r.type="sine",r.frequency.value=.07;let o=i.createGain();o.gain.value=.12,r.connect(o).connect(s.gain),r.start()}function Mw(i,e){let t=i.createBufferSource();t.buffer=jd(i,4),t.loop=!0;let n=i.createBiquadFilter();n.type="bandpass",n.frequency.value=2200,n.Q.value=.5;let s=i.createGain();s.gain.value=0,t.connect(n).connect(s).connect(e),t.start();let r=i.createOscillator();r.type="sine",r.frequency.value=.15;let o=i.createGain();return o.gain.value=.06,r.connect(o).connect(s.gain),r.start(),s}function bw(i,e){let n=i.createBufferSource();n.buffer=jd(i,.18);let s=i.createBiquadFilter();s.type="highpass",s.frequency.value=1800;let r=i.createGain(),o=i.currentTime;r.gain.setValueAtTime(.9,o),r.gain.exponentialRampToValueAtTime(.001,o+.18),n.connect(s).connect(r).connect(e),n.start(o),n.stop(o+.18+.02)}function jd(i,e){let t=Math.max(1,Math.floor(i.sampleRate*e)),n=i.createBuffer(1,t,i.sampleRate),s=n.getChannelData(0);for(let r=0;r<t;r++)s[r]=Math.random()*2-1;return n}var Cg="mcgrot-torch-on";function Ig(){if(!document.documentElement.classList.contains("touch"))return;let i=document.getElementById("hud-hint"),e=document.getElementById("title-hint"),t=document.getElementById("title-enter");i&&(i.textContent="drag \u2014 look"),e&&(e.textContent="drag to look \u2014 walk up to a resident, tap them"),t&&(t.textContent="TAP TO ENTER")}function Sw(i){let e=document.getElementById("torch-toggle");if(!i)return;let t=localStorage.getItem(Cg),n=t===null?!0:t==="true";function s(r){n=!!r,i.setToggle(n),e&&e.classList.toggle("active",n),localStorage.setItem(Cg,String(n))}i.setToggle(n),e&&e.classList.toggle("active",n),e&&e.addEventListener("click",()=>s(!n)),window.addEventListener("keydown",r=>{r.code!=="KeyT"||xs(r)||s(!n)})}function Pg({controls:i,torch:e,onEnter:t}){let n=document.getElementById("title-card"),s=document.getElementById("touch-forward");Ig(),window.addEventListener("mcgrot:touchmodechange",Ig),Sw(e);function r(){!n||n.classList.contains("hidden")||(n.classList.add("hidden"),i.setEnabled(!0),t&&t())}if(n&&(n.addEventListener("click",r),n.addEventListener("touchend",o=>{o.preventDefault(),r()},{passive:!1})),s){let o=c=>{s.classList.toggle("active",c),i.setForward(c)};s.addEventListener("pointerdown",c=>{c.preventDefault();try{s.setPointerCapture?.(c.pointerId)}catch{}o(!0)});let a=()=>o(!1);s.addEventListener("pointerup",a),s.addEventListener("pointercancel",a),s.addEventListener("pointerleave",a)}return{enter:r}}var ef="p=",Ew=.4,Tw=.25,ww=1,Ng=1e5;function Fg(i){return(i%360+360)%360}function tf(i){return Fg(i*180/Math.PI)}function Aw(i){return i*Math.PI/180}function Qd({x:i,z:e,yaw:t}){let n=Math.round(tf(t))%360;return`#${ef}${i.toFixed(1)},${e.toFixed(1)},${n}`}function Rw(i){if(typeof i!="string")return null;let e=i.replace(/^#/,"");if(!e.startsWith(ef))return null;let t=e.slice(ef.length).split(",");if(t.length!==3)return null;let[n,s,r]=t.map(Number);return![n,s,r].every(o=>Number.isFinite(o))||Math.abs(n)>Ng||Math.abs(s)>Ng?null:{x:n,z:s,yaw:Aw(Fg(r))}}function Ug(i){let e=Rw(typeof location>"u"?"":location.hash);if(!e)return null;if(i){let{point:t,distance:n}=i(e.x,e.z);if(t&&n>16){let s=16/n;e.x=t[0]+(e.x-t[0])*s,e.z=t[1]+(e.z-t[1])*s}}return e}function Og({camera:i,isEnabled:e}){let t=0,n=null,s=null,r=null,o=0;function a(){return{x:i.position.x,z:i.position.z,yaw:i.rotation.y}}function c(){return typeof location>"u"?Qd(a()):`${location.origin}${location.pathname}${location.search}${Qd(a())}`}function l(){let h=a(),d=Math.round(tf(h.yaw))%360;n=h.x,s=h.z,r=d,o++;try{history.replaceState(null,"",Qd(h))}catch{}}function u(h){if(e&&!e()||(t+=h,t<Ew))return;t=0;let d=a(),f=Math.round(tf(d.yaw))%360;if(n!==null){let p=Math.hypot(d.x-n,d.z-s),x=Math.abs(f-r);if(x>180&&(x=360-x),p<Tw&&x<ww)return}l()}return{update:u,href:c,current:a,writeNow:l,writeCount:()=>o}}var Dg=2600;function Bg({moments:i}){let e=document.getElementById("link-toggle"),t=document.getElementById("link-toast"),n=document.getElementById("link-field"),s=null,r=null;function o(u,h){if(!t)return;n&&(n.value=h,n.style.display=h?"block":"none");let d=t.querySelector("#link-toast-label");d&&(d.textContent=u),t.style.display="block",s&&clearTimeout(s),s=setTimeout(()=>{t.style.display="none"},h?Dg*3:Dg)}function a(){let u=i.href();i.writeNow();let h=typeof navigator<"u"&&navigator.clipboard;return!h||!h.writeText?(r="manual",o("copy this link",u),Promise.resolve(r)):h.writeText(u).then(()=>(r="copied",o("link copied",""),r),()=>(r="manual",o("copy this link",u),r))}function c(u){u.code==="KeyL"&&a()}function l(u){u.preventDefault();try{e.setPointerCapture?.(u.pointerId)}catch{}}return window.addEventListener("keydown",c),e&&(e.addEventListener("pointerdown",l),e.addEventListener("pointerup",()=>a())),n&&(n.addEventListener("focus",()=>n.select()),n.addEventListener("click",()=>n.select())),{share:a,lastResult:()=>r,isToastOpen:()=>!!t&&t.style.display==="block"}}var Cw=.28,Iw=.035,Pw=1,Lw=24,Nw=`
attribute vec3 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`,Dw=`
precision highp float;

uniform sampler2D tDiffuse;
uniform vec2  uResolution;
uniform float uStrength;   // 0 = provably neutral, 1 = as authored
uniform float uVignette;
uniform float uGrain;
uniform float uGrade;
uniform float uTime;

varying vec2 vUv;

// Hash with no transcendentals \u2014 sin-based hashes vary between drivers, and
// the goldens are captured under SwiftShader. All fract/dot/multiply.
float hash21(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

void main() {
  vec3 c = texture2D(tDiffuse, vUv).rgb;
  float lum = dot(c, vec3(0.299, 0.587, 0.114));

  // Grade: a gentle S-curve for contrast, plus a split tone \u2014 cool shadows,
  // warm highlights. Both scaled by uGrade so neutral is exact.
  vec3 curved = c * c * (3.0 - 2.0 * c);
  vec3 split = mix(vec3(0.96, 0.98, 1.06), vec3(1.04, 1.00, 0.95), lum);
  vec3 graded = mix(c, curved, 0.10) * split;
  c = mix(c, graded, uGrade * uStrength);

  // Vignette.
  float d = length(vUv - 0.5);
  c *= mix(1.0, 1.0 - smoothstep(0.35, 0.78, d), uVignette * uStrength);

  // Grain, weighted towards the midtones the way film is \u2014 near-black and
  // blown-out areas stay clean, so the murk gets the texture and the sky
  // does not crawl.
  float n = hash21(vUv * uResolution + vec2(floor(uTime * ${Lw.toFixed(1)}), 0.0));
  float midtone = 1.0 - abs(lum * 2.0 - 1.0);
  c += (n - 0.5) * uGrain * midtone * uStrength;

  gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
}
`;function zg(i){let e=i.getDrawingBufferSize(new Te),t=new zr(e.x,e.y),n={tDiffuse:{value:t},uResolution:{value:new Te(e.x,e.y)},uStrength:{value:1},uVignette:{value:Cw},uGrain:{value:Iw},uGrade:{value:Pw},uTime:{value:0}},s=new Vr({name:"McGrotPost",uniforms:n,vertexShader:Nw,fragmentShader:Dw,depthTest:!1,depthWrite:!1}),r=new pt;r.setAttribute("position",new Dt(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),r.setAttribute("uv",new Dt(new Float32Array([0,0,2,0,0,2]),2));let o=new He(r,s);o.frustumCulled=!1;let a=new Bs;a.add(o);let c=new qs,l=!0;function u(){let h=i.getDrawingBufferSize(new Te);h.x===t.image.width&&h.y===t.image.height||(t.dispose(),t=new zr(h.x,h.y),n.tDiffuse.value=t,n.uResolution.value.set(h.x,h.y))}return{setTime(h){n.uTime.value=h},resize:u,setEnabled(h){l=!!h},isEnabled(){return l},setStrength(h){n.uStrength.value=h},getStrength(){return n.uStrength.value},render(h,d){i.render(h,d),l&&(i.copyFramebufferToTexture(t),i.render(a,c))}}}var kg="mcgrot.journal.v1";function Fw(){try{let i=localStorage.getItem(kg);if(!i)return[];let e=JSON.parse(i);return Array.isArray(e&&e.entries)?e.entries:[]}catch{return[]}}function Uw(i){try{localStorage.setItem(kg,JSON.stringify({entries:i}))}catch{}}function nf(i){if(!i||!Array.isArray(i))return 0;let e=0;for(let t of i)t.comic&&t.comic.audio&&e++;return e}function Hg({assets:i,npcs:e,litter:t,canOpen:n,anchorsEnabled:s}){let r=Fw(),o=new Set(r.map(B=>`${B.kind}:${B.id}`)),a=nf(e),c=t&&Array.isArray(t.items)?t.items.length:0,l=Xm(xa),u=new Map((i&&i.catalog&&i.catalog.comics||[]).map(B=>[B.id,B])),h=document.getElementById("journal-panel"),d=document.getElementById("journal-toggle"),f=document.getElementById("journal-close"),p=document.getElementById("journal-counts"),x=document.getElementById("journal-list"),m=!1;function g(B,k){return o.has(`${k}:${B}`)}function _(B,k){if(!B||k!=="heard"&&k!=="found"&&k!=="anchor")return!1;let U=`${k}:${B}`;return o.has(U)?!1:(o.add(U),r.push({id:B,kind:k}),Uw(r),b(),!0)}function M(){let B=0,k=0,U=0;for(let H of r)H.kind==="heard"?B++:H.kind==="found"?k++:H.kind==="anchor"&&U++;return{heard:B,found:k,denominator:a,foundTotal:c,anchorsFound:U,anchorsTotal:l}}function y(){return r.filter(B=>B.kind!=="anchor").slice().reverse()}function b(){if(p){let{heard:k,found:U,anchorsFound:H}=M();p.textContent=s?`${k} of ${a} heard \u2014 more being unearthed  \xB7  ${U}${c?` of ${c}`:""} found  \xB7  ${H} of ${l} anchors`:`${k} of ${a} heard \u2014 more being unearthed  \xB7  ${U}${c?` of ${c}`:""} found`}if(!x)return;x.textContent="";let B=document.createDocumentFragment();for(let k of y()){let U=u.get(k.id),H=U&&U.title||k.id,G=U&&U.npc&&U.npc.name,ne=document.createElement("div");ne.className="journal-entry";let oe=document.createElement("span");oe.className="journal-entry-kind",oe.textContent=k.kind==="heard"?"HEARD":"FOUND";let pe=document.createElement("span");pe.className="journal-entry-text",pe.textContent=G?`${H} \u2014 ${G}`:H,ne.appendChild(oe),ne.appendChild(pe),B.appendChild(ne)}x.appendChild(B)}function E(B){m=!!B,h&&(h.style.display=m?"flex":"none")}function w(){!m&&n&&!n()||E(!m)}function v(){return m}function T(B){if(B.code==="Escape"){m&&E(!1);return}xs(B)||B.code==="KeyJ"&&w()}function R(B){B.preventDefault();try{d.setPointerCapture?.(B.pointerId)}catch{}}function I(){w()}window.addEventListener("keydown",T),d&&(d.addEventListener("pointerdown",R),d.addEventListener("pointerup",I)),f&&f.addEventListener("click",()=>E(!1));function L(){window.removeEventListener("keydown",T),d&&(d.removeEventListener("pointerdown",R),d.removeEventListener("pointerup",I))}return b(),{has:g,credit:_,counts:M,list:y,isOpen:v,setOpen:E,toggle:w,dispose:L}}var vs=1.7,sf=150,Wn=1/60,Ow=5,Gg=12,Vg=40,Bw=4e3,Wg=[{id:"north-150-close",chainage:150,side:"east",distance:"close"},{id:"north-250-far",chainage:250,side:"west",distance:"far"},{id:"elm-row-hero",chainage:1300,side:"west",distance:"far"},{id:"mid-550-close",chainage:550,side:"east",distance:"close"},{id:"mid-805-far",chainage:805,side:"west",distance:"far"},{id:"fascia-close",chainage:300,side:"east",distance:"close"},{id:"foot-1500-far",chainage:1500,side:"west",distance:"far"},{id:"skyline",custom:!0,camera:{x:-293.81,y:15,z:633.95},lookAt:{x:-317.4,y:6,z:683.62}}],Xg=[{id:"lamp-hero-night",custom:!0,camera:{x:-284.62,y:9.7,z:623.92},lookAt:{x:-303.93,y:12.99,z:664.57}}];function qg(i,e){for(let t=0;t<i.length;t++)e^=i[t],e=Math.imul(e,16777619)>>>0;return e}function Ta(i,e){let t=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);return qg(t,e)}function wa(i,e){for(let t=0;t<i.length;t++)e=qg([i.charCodeAt(t)&255],e);return e}function zw({scene:i,world:e,npcs:t}){let n=2166136261,s=e.group.getObjectByName("buildings");s&&s.geometry&&(n=wa("buildings",n),n=Ta(s.geometry.attributes.position.array,n));let r=[];i.traverse(o=>{o.isInstancedMesh&&r.push(o)}),r.sort((o,a)=>(o.name||"").localeCompare(a.name||""));for(let o of r)n=wa(`inst:${o.name||"unnamed"}`,n),n=Ta(o.instanceMatrix.array,n);if(t&&Array.isArray(t.npcs)&&t.npcs.length){let o=new Float32Array(t.npcs.length*3);t.npcs.forEach((a,c)=>{let l=a.group.position;o[c*3]=l.x,o[c*3+1]=l.y,o[c*3+2]=l.z}),n=wa("npcs",n),n=Ta(o,n)}return(n>>>0).toString(16).padStart(8,"0")}function kw({scene:i,leithers:e}){let t=2166136261;if(e&&Array.isArray(e.walkers)&&e.walkers.length){let n=new Float32Array(e.walkers.length*3);e.walkers.forEach((s,r)=>{n[r*3]=s.s,n[r*3+1]=s.side,n[r*3+2]=s.dir}),t=wa("leithers-realtime",t),t=Ta(n,t)}for(let n of["birds","vermin"]){let s=i.getObjectByName(n);if(!s)continue;let r=0;s.traverse(o=>{o.isInstancedMesh&&(t=wa(`${n}-realtime-${r++}`,t),t=Ta(o.instanceMatrix.array,t))})}return(t>>>0).toString(16).padStart(8,"0")}function Hw(i,e){return new Promise(t=>{let s=(Date.now?Date.now():0)+e;function r(){if(!(i&&i.pages||[]).some(c=>c&&c.loaded&&c.mesh&&!(c.mesh.material.map&&c.mesh.material.map.image&&c.mesh.material.map.image.complete))||Date.now()>s){t();return}setTimeout(r,20)}r()})}function Yg(i){let{camera:e,world:t,npcs:n,leithers:s,litter:r,shopfronts:o,controls:a,proximityAudio:c,interact:l,renderer:u,scene:h,sky:d,atmosphere:f,torch:p,stepFrame:x,updateFrame:m,updaters:g,setAutoAnimate:_,DPR_CAP:M,ambience:y,post:b,renderNow:E,setPostProcessing:w,journal:v,countVendorsWithAudio:T,vendorList:R,anchorsEnabled:I,anchorSet:L,computeVendorLayout:B,moments:k,shareUi:U,lamps:H,legs:G,ending:ne}=i,oe=[],pe=console.error.bind(console);console.error=(...J)=>{oe.push(J.map(he=>he&&he.message||String(he)).join(" ")),pe(...J)},window.addEventListener("error",J=>{oe.push(J.message||String(J.error||J))}),window.addEventListener("unhandledrejection",J=>{oe.push("unhandledrejection: "+(J.reason&&J.reason.message||J.reason))});async function V(J,he,ge,De,Ce={}){let N=Ce.eyeY!=null?Ce.eyeY:t.groundHeight?t.groundHeight(J,he)+vs:vs,Le=Ce.lookY!=null?Ce.lookY:t.groundHeight?t.groundHeight(ge,De)+vs:vs;e.position.set(J,N,he),e.lookAt(ge,Le,De);for(let Ue=0;Ue<sf;Ue++)try{m(Wn,Ue*Wn)}catch{}e.position.set(J,N,he),e.lookAt(ge,Le,De),x(Wn,sf*Wn),await Hw(o,Bw);for(let Ue=0;Ue<Ow;Ue++)await new Promise(C=>setTimeout(C,0)),e.position.set(J,N,he),e.lookAt(ge,Le,De),x(Wn,(sf+1+Ue)*Wn)}async function K(J,he,ge){let{point:De,tangent:Ce}=Wh(t.streetLine,J),N=-Ce[1],Le=Ce[0],Ue=he==="east"?1:-1,C=ge==="close"?Ue:-Ue,S=De[0]+N*Gg*C,P=De[1]+Le*Gg*C,D=S+N*Ue*Vg,O=P+Le*Ue*Vg;await V(S,P,D,O);let W=t.groundHeight?t.groundHeight(S,P)+vs:vs;return{chainage:J,side:he,distance:ge,position:{x:S,y:W,z:P}}}async function de(J,he=4){let{point:ge,tangent:De}=Wh(t.streetLine,J),Ce=ge[0],N=ge[1],Le=Ce+De[0]*he,Ue=N+De[1]*he,C=t.groundHeight?t.groundHeight(Ce,N)+vs:vs,S=t.groundHeight?t.groundHeight(Le,Ue)+.3:.3;return await V(Ce,N,Le,Ue,{lookY:S}),{chainage:J,position:{x:Ce,y:C,z:N}}}async function be(J){let he=Wg.find(ge=>ge.id===J)||Xg.find(ge=>ge.id===J);if(!he)throw new Error(`[debug] unknown bookmark: ${J}`);return he.custom?(await V(he.camera.x,he.camera.z,he.lookAt.x,he.lookAt.z,{eyeY:he.camera.y,lookY:he.lookAt.y}),he):(await K(he.chainage,he.side,he.distance),he)}function we(J,he){e.lookAt(J,e.position.y,he)}function Z(J){f.setTime(J)}function ee(J){f.setWeather(J)}function $(J){f.setWeatherSchedule(J)}function _e(J){f.setRate(J)}function ve(J){document.documentElement.classList.toggle("touch",!!J),window.dispatchEvent(new CustomEvent("mcgrot:touchmodechange"))}function Se(J){u.setPixelRatio(J)}function Y(J=60){let he=[];for(let Ce=0;Ce<J;Ce++){let N=performance.now();x(Wn,Ce*Wn),he.push(performance.now()-N)}he.sort((Ce,N)=>Ce-N);let ge=he.reduce((Ce,N)=>Ce+N,0)/he.length,De=he[Math.min(he.length-1,Math.floor(he.length*.95))];return{meanMs:ge,p95Ms:De,pixelRatio:u.getPixelRatio(),frames:J}}function fe(J,he=0){if(!(J<=0)){for(let ge=0;ge<J-1;ge++)try{m(Wn,he+ge*Wn)}catch{}try{x(Wn,he+(J-1)*Wn)}catch{}}}function te(){x(Wn,0);let J=u.info.render,he=f.state();return{drawCalls:J.calls,triangles:J.triangles,geomHash:zw({scene:h,world:t,npcs:n}),realtimeHash:kw({scene:h,leithers:s}),updaterCount:g.length,updaterNames:g.map(ge=>ge.name),consoleErrors:oe.slice(),time:he.hours,rate:he.rate,weather:he.weather,weatherTransition:he.weatherTransition,exposure:he.exposure,fogDensity:he.fogDensity,rain:he.rain,wetness:he.wetness,skyFogLinked:!!(d&&t.fog&&d.uniforms.uFog.value===t.fog.color)}}function ue(J){l&&l.setReadAlong(J)}function ae(J){window.__mcgrotForceDaySeed=J==null?void 0:J>>>0}function me(J){return B(R,t.streetLine,!!J)}return{camera:e,world:t,npcs:n,leithers:s,litter:r,shopfronts:o,controls:a,proximityAudio:c,interact:l,renderer:u,scene:h,journal:v,countVendorsWithAudio:T,stepFrame:x,stepFrames:fe,goto:K,gotoBookmark:be,torchGroundPose:de,face:we,setTime:Z,setWeather:ee,setWeatherSchedule:$,setRate:_e,setReadAlong:ue,setDaySeed:ae,anchorsEnabled:I,anchorSet:L,anchorLayout:me,moments:k,shareUi:U,lamps:H,legs:G,ending:ne,setTouchMode:ve,setPixelRatio:Se,measureFrameTiming:Y,torch:p,DPR_CAP:M,ambience:y,post:b,renderNow:E,setPostProcessing:w,setPostStrength:J=>b.setStrength(J),invariants:te,atmosphereState:()=>f.state(),atmosphereNudge:(J,he,ge)=>f.nudge(J,he,ge),atmosphereIsSuspended:()=>f.isSuspended(),bookmarks:Wg,nightBookmarks:Xg,pauseAuto:()=>_(!1),resumeAuto:()=>_(!0)}}var rf=2;async function Gw(){let i=document.getElementById("scene"),e=["localhost","127.0.0.1"].includes(location.hostname),t=new Dl({canvas:i,antialias:!0,preserveDrawingBuffer:e});t.setPixelRatio(Math.min(window.devicePixelRatio||1,rf)),t.setSize(window.innerWidth,window.innerHeight),t.toneMapping=ea,t.toneMappingExposure=1.46,t.info.autoReset=!1;let n=new Bs,s=new jt(70,window.innerWidth/window.innerHeight,.1,1e3);n.add(s);let r=zg(t),o=await _m(),a=km(o.leith);n.add(a.group),n.fog=a.fog;let c=F0(a.fog.color,a.streetLine);s.add(c.mesh),X0(a,n);let l=Hm(s),u=V0(o,a,n),h=Ag(s);n.add(h.object);let d=Rg(),f=k0({scene:n,renderer:t,world:a,sky:c,torch:l,windows:u,rain:h,ambience:d}),p=a.streetLine[0]||[0,0],x=a.streetLine[1]||[p[0],p[1]+1],m={x:p[0],z:p[1],yaw:Math.atan2(-(x[0]-p[0]),-(x[1]-p[1]))},g=Ug(a.nearestStreetPoint)||m,_=Vm(s,i,{nearestStreetPoint:a.nearestStreetPoint,spawn:g,groundHeight:a.groundHeight});_.setEnabled(!1);let M=$m(o,a,n,s),y=Mg(o,a,n,M.npcs),b=Eg(o,a,n),E=a0(o,a,n);Rm(a,n),Y0(a,n);let w=J0(a,o.leith,n),v=sg(a,n);rg(a,o.leith,n),C0(o,a,n),D0(o,a,n),gg(o,a,n);let T=x0(a,n);T.onArcFlash=()=>d.triggerCrackle();let R=v0({scene:n,camera:s,poles:T.poles});f.setLamps(R);let I=b0({camera:s,world:a,atmosphere:f,seed:Wl()}),L=S0({camera:s,world:a,legs:I,atmosphere:f,ambience:d,controls:_,renderer:t});window.addEventListener("keydown",Y=>{Y.code!=="Enter"||xs(Y)||(L.state().phase==="ended"?L.resume():L.begin())});let B=!1,k=!1,U=()=>d.setDucked(B||k),H=u0({camera:s,npcs:M.npcs,assets:o,onActiveChange:Y=>{k=Y>0,U()}}),G,ne=Hg({assets:o,npcs:M.npcs,litter:b,canOpen:()=>!G.isOpen(),anchorsEnabled:M.anchorsEnabled});G=h0({assets:o,npcs:M.npcs,camera:s,controls:_,proximityAudio:H,onReadingChange:Y=>{B=Y,U()},litter:b,leithers:y,journal:ne});let oe=!1,pe=Og({camera:s,isEnabled:()=>oe}),V=Bg({moments:pe}),K=document.getElementById("hud-day");K&&(K.textContent=c0(va(),Xl(),f.state().weather)),Pg({controls:_,torch:l,onEnter:()=>{let Y=null;try{if(window.__mcgrotForceAudioContextError&&["localhost","127.0.0.1"].includes(location.hostname))throw new Error("[debug] forced AudioContext setup failure");let fe=window.AudioContext||window.webkitAudioContext;if(Y=fe?new fe:null,Y){Zs.setContext(Y);let te=Y.createBufferSource();te.buffer=Y.createBuffer(1,1,Y.sampleRate),te.connect(Y.destination),te.start(0)}}catch(fe){console.warn("[title] shared AudioContext setup failed, falling back to per-subsystem contexts:",fe),Y=null}d.start(Y),H.resume(),oe=!0}}),window.addEventListener("resize",de);function de(){s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),t.setPixelRatio(Math.min(window.devicePixelRatio||1,rf)),t.setSize(window.innerWidth,window.innerHeight),r.resize()}let be=[{name:"controls",update:Y=>_.update(Y)},{name:"npcs",update:(Y,fe)=>M.update(Y,fe)},{name:"leithers",update:(Y,fe)=>y.update(Y,fe)},{name:"litter",update:()=>b.update(s.position)},{name:"shopfronts",update:()=>E.update(s.position)},{name:"sky",update:(Y,fe)=>c.update(fe)},{name:"atmosphere",update:(Y,fe)=>f.update(Y,fe)},{name:"rain",update:(Y,fe)=>h.update(Y,fe)},{name:"birds",update:(Y,fe)=>w.update(Y,fe)},{name:"vermin",update:(Y,fe)=>v.update(Y,fe)},{name:"scenery",update:(Y,fe)=>T.update(Y,fe)},{name:"lamps",update:()=>R.update()},{name:"legs",update:()=>I.update()},{name:"ending",update:Y=>L.update(Y)},{name:"interact",update:Y=>G.update(Y)},{name:"proximityAudio",update:(Y,fe)=>H.update(Y,fe)},{name:"torch",update:(Y,fe)=>l.update(fe)},{name:"post",update:(Y,fe)=>r.setTime(fe)},{name:"moments",update:Y=>pe.update(Y)}];function we(Y,fe){for(let te of be)te.update(Y,fe)}function Z(){t.info.reset(),r.render(n,s)}function ee(Y,fe){we(Y,fe),Z()}function $(Y){r.setEnabled(Y)}let _e=performance.now(),ve=!0;function Se(){if(!ve)return;requestAnimationFrame(Se);let Y=performance.now(),fe=Math.min((Y-_e)/1e3,.1);_e=Y,ee(fe,Y/1e3)}e&&window.__mcgrotFreezeAtBoot||Se(),["localhost","127.0.0.1"].includes(location.hostname)&&(window.__mcgrotDebug=Yg({camera:s,world:a,npcs:M,leithers:y,litter:b,shopfronts:E,controls:_,proximityAudio:H,interact:G,renderer:t,scene:n,sky:c,atmosphere:f,torch:l,DPR_CAP:rf,ambience:d,post:r,journal:ne,countVendorsWithAudio:nf,vendorList:M.list,anchorsEnabled:M.anchorsEnabled,anchorSet:xa,computeVendorLayout:ed,moments:pe,shareUi:V,lamps:R,legs:I,ending:L,stepFrame:ee,renderNow:Z,setPostProcessing:$,updateFrame:we,updaters:be,setAutoAnimate(Y){ve=Y,_.setYFollow(Y),Y&&(_e=performance.now(),requestAnimationFrame(Se))}}))}Gw().catch(i=>{console.error("McGrot Walk failed to start:",i)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
