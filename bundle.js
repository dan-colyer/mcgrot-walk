(()=>{var Yf=0,Eh=1,Zf=2;var Po=1,Kf=2,Sr=3,qn=0,nn=1,Et=2,ci=0,ms=1,Lo=2,Th=3,Ah=4,Jf=5;var ki=100,$f=101,jf=102,Qf=103,ed=104,td=200,nd=201,id=202,sd=203,Ua=204,Fa=205,rd=206,od=207,ad=208,cd=209,ld=210,hd=211,ud=212,fd=213,dd=214,Oa=0,Ba=1,za=2,gs=3,Ha=4,ka=5,Ga=6,Va=7,xc=0,pd=1,md=2,Zn=0,wh=1,Rh=2,Ch=3,No=4,Ih=5,Ph=6,Lh=7,ah="attached",gd="detached",Nh=300,Zi=301,Rs=302,_c=303,yc=304,Do=306,On=1e3,Un=1001,cr=1002,Gt=1003,vc=1004;var Cs=1005;var Vt=1006,br=1007;var Kn=1008;var Mn=1009,Dh=1010,Uh=1011,Er=1012,Mc=1013,Jn=1014,In=1015,li=1016,Sc=1017,bc=1018,Tr=1020,Fh=35902,Oh=35899,Bh=1021,zh=1022,Pn=1023,ii=1026,Ki=1027,Ec=1028,Tc=1029,Ji=1030,Ac=1031;var wc=1033,Uo=33776,Fo=33777,Oo=33778,Bo=33779,Rc=35840,Cc=35841,Ic=35842,Pc=35843,Lc=36196,Nc=37492,Dc=37496,Uc=37488,Fc=37489,zo=37490,Oc=37491,Bc=37808,zc=37809,Hc=37810,kc=37811,Gc=37812,Vc=37813,Wc=37814,Xc=37815,qc=37816,Yc=37817,Zc=37818,Kc=37819,Jc=37820,$c=37821,jc=36492,Qc=36494,el=36495,tl=36283,nl=36284,Ho=36285,il=36286;var xs=2300,_s=2301,Da=2302,ch=2303,lh=2400,hh=2401,uh=2402,xd=2500;var Hh=0,ko=1,Ar=2,_d=3200;var Go=0,yd=1,Ii="",tt="srgb",pn="srgb-linear",Kr="linear",xt="srgb";var fs=7680;var fh=519,vd=512,Md=513,Sd=514,sl=515,bd=516,Ed=517,rl=518,Td=519,Wa=35044;var kh="300 es",Xn=2e3,lr=2001;function Nm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Dm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ad(){let i=hr("canvas");return i.style.display="block",i}var tf={},ur=null;function Jr(...i){let e="THREE."+i.shift();ur?ur("log",e,...i):console.log(e,...i)}function wd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ae(...i){i=wd(i);let e="THREE."+i.shift();if(ur)ur("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function We(...i){i=wd(i);let e="THREE."+i.shift();if(ur)ur("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ps(...i){let e=i.join(" ");e in tf||(tf[e]=!0,Ae(...i))}function Rd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Cd={[Oa]:Ba,[za]:Ga,[Ha]:Va,[gs]:ka,[Ba]:Oa,[Ga]:za,[Va]:Ha,[ka]:gs},si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nf=1234567,Xr=Math.PI/180,ys=180/Math.PI;function Fn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function Gh(i,e){return(i%e+e)%e}function Um(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Fm(i,e,t){return i!==e?(t-i)/(e-i):0}function qr(i,e,t){return(1-t)*i+t*e}function Om(i,e,t,n){return qr(i,e,1-Math.exp(-t*n))}function Bm(i,e=1){return e-Math.abs(Gh(i,e*2)-e)}function zm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Hm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function km(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Gm(i,e){return i+Math.random()*(e-i)}function Vm(i){return i*(.5-Math.random())}function Wm(i){i!==void 0&&(nf=i);let e=nf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xm(i){return i*Xr}function qm(i){return i*ys}function Ym(i){return(i&i-1)===0&&i!==0}function Zm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Km(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Jm(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*d,a*h,a*l);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var $i={DEG2RAD:Xr,RAD2DEG:ys,generateUUID:Fn,clamp:ot,euclideanModulo:Gh,mapLinear:Um,inverseLerp:Fm,lerp:qr,damp:Om,pingpong:Bm,smoothstep:zm,smootherstep:Hm,randInt:km,randFloat:Gm,randFloatSpread:Vm,seededRandom:Wm,degToRad:Xm,radToDeg:qm,isPowerOfTwo:Ym,ceilPowerOfTwo:Zm,floorPowerOfTwo:Km,setQuaternionFromProperEuler:Jm,normalize:vt,denormalize:Wn},ue=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ft=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(u!==x||c!==f||l!==d||h!==m){let p=c*f+l*d+h*m+u*x;p<0&&(f=-f,d=-d,m=-m,x=-x,p=-p);let g=1-a;if(p<.9995){let S=Math.acos(p),M=Math.sin(S);g=Math.sin(g*S)/M,a=Math.sin(a*S)/M,c=c*g+f*a,l=l*g+d*a,h=h*g+m*a,u=u*g+x*a}else{c=c*g+f*a,l=l*g+d*a,h=h*g+m*a,u=u*g+x*a;let S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+h*u+c*d-l*f,e[t+1]=c*m+h*f+l*u-a*d,e[t+2]=l*m+h*d+a*f-c*u,e[t+3]=h*m-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"YZX":this._x=f*h*u+l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u-f*d*m;break;case"XZY":this._x=f*h*u-l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u+f*d*m;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Il.copy(this).projectOnVector(e),this.sub(Il)}reflect(e){return this.sub(Il.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Il=new L,sf=new Ft,$e=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],x=s[0],p=s[3],g=s[6],S=s[1],M=s[4],v=s[7],A=s[2],E=s[5],R=s[8];return r[0]=o*x+a*S+c*A,r[3]=o*p+a*M+c*E,r[6]=o*g+a*v+c*R,r[1]=l*x+h*S+u*A,r[4]=l*p+h*M+u*E,r[7]=l*g+h*v+u*R,r[2]=f*x+d*S+m*A,r[5]=f*p+d*M+m*E,r[8]=f*g+d*v+m*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,m=t*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Pl.makeScale(e,t)),this}rotate(e){return ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Pl.makeRotation(-e)),this}translate(e,t){return ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Pl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Pl=new $e,rf=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),of=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $m(){let i={enabled:!0,workingColorSpace:pn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xt&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xt&&(s.r=ar(s.r),s.g=ar(s.g),s.b=ar(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ii?Kr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pn]:{primaries:e,whitePoint:n,transfer:Kr,toXYZ:rf,fromXYZ:of,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:tt},outputColorSpaceConfig:{drawingBufferColorSpace:tt}},[tt]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:rf,fromXYZ:of,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:tt}}}),i}var rt=$m();function vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ar(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vs,Xa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vs===void 0&&(Vs=hr("canvas")),Vs.width=e.width,Vs.height=e.height;let s=Vs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Vs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=hr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=vi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vi(t[n]/255)*255):t[n]=vi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},jm=0,fr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=Fn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ll(s[o].image)):r.push(Ll(s[o]))}else r=Ll(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ll(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}var Qm=0,Nl=new L,Kt=class i extends si{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Un,s=Un,r=Vt,o=Kn,a=Pn,c=Mn,l=i.DEFAULT_ANISOTROPY,h=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=Fn(),this.name="",this.source=new fr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Nl).x}get height(){return this.source.getSize(Nl).y}get depth(){return this.source.getSize(Nl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ae(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case On:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case cr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case On:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case cr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Nh;Kt.DEFAULT_ANISOTROPY=1;var Mt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],m=c[9],x=c[2],p=c[6],g=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+p)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,v=(d+1)/2,A=(g+1)/2,E=(h+f)/4,R=(u+x)/4,_=(m+p)/4;return M>v&&M>A?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=E/n,r=R/n):v>A?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=_/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=R/r,s=_/r),this.set(n,s,r,t),this}let S=Math.sqrt((p-m)*(p-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(p-m)/S,this.y=(u-x)/S,this.z=(f-h)/S,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qa=class extends si{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Kt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new fr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends qa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},$r=class extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ya=class extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xe=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,c,l,h,u,f,d,m,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,f,d,m,x,p)}set(e,t,n,s,r,o,a,c,l,h,u,f,d,m,x,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ws.setFromMatrixColumn(e,0).length(),r=1/Ws.setFromMatrixColumn(e,1).length(),o=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,m=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+m*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=m+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,m=l*h,x=l*u;t[0]=f+x*a,t[4]=m*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-m,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,m=l*h,x=l*u;t[0]=f-x*a,t[4]=-o*u,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,m=a*h,x=a*u;t[0]=c*h,t[4]=m*l-d,t[8]=f*l+x,t[1]=c*u,t[5]=x*l+f,t[9]=d*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,m=a*c,x=a*l;t[0]=c*h,t[4]=x-f*u,t[8]=m*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+m,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*c,d=o*l,m=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eg,e,tg)}lookAt(e,t,n){let s=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Ui.crossVectors(n,Tn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Ui.crossVectors(n,Tn)),Ui.normalize(),na.crossVectors(Tn,Ui),s[0]=Ui.x,s[4]=na.x,s[8]=Tn.x,s[1]=Ui.y,s[5]=na.y,s[9]=Tn.y,s[2]=Ui.z,s[6]=na.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],x=n[6],p=n[10],g=n[14],S=n[3],M=n[7],v=n[11],A=n[15],E=s[0],R=s[4],_=s[8],T=s[12],I=s[1],C=s[5],P=s[9],W=s[13],Y=s[2],U=s[6],H=s[10],G=s[14],j=s[3],ne=s[7],le=s[11],he=s[15];return r[0]=o*E+a*I+c*Y+l*j,r[4]=o*R+a*C+c*U+l*ne,r[8]=o*_+a*P+c*H+l*le,r[12]=o*T+a*W+c*G+l*he,r[1]=h*E+u*I+f*Y+d*j,r[5]=h*R+u*C+f*U+d*ne,r[9]=h*_+u*P+f*H+d*le,r[13]=h*T+u*W+f*G+d*he,r[2]=m*E+x*I+p*Y+g*j,r[6]=m*R+x*C+p*U+g*ne,r[10]=m*_+x*P+p*H+g*le,r[14]=m*T+x*W+p*G+g*he,r[3]=S*E+M*I+v*Y+A*j,r[7]=S*R+M*C+v*U+A*ne,r[11]=S*_+M*P+v*H+A*le,r[15]=S*T+M*W+v*G+A*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],x=e[7],p=e[11],g=e[15],S=c*d-l*f,M=a*d-l*u,v=a*f-c*u,A=o*d-l*h,E=o*f-c*h,R=o*u-a*h;return t*(x*S-p*M+g*v)-n*(m*S-p*A+g*E)+s*(m*M-x*A+g*R)-r*(m*v-x*E+p*R)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],x=e[13],p=e[14],g=e[15],S=t*a-n*o,M=t*c-s*o,v=t*l-r*o,A=n*c-s*a,E=n*l-r*a,R=s*l-r*c,_=h*x-u*m,T=h*p-f*m,I=h*g-d*m,C=u*p-f*x,P=u*g-d*x,W=f*g-d*p,Y=S*W-M*P+v*C+A*I-E*T+R*_;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/Y;return e[0]=(a*W-c*P+l*C)*U,e[1]=(s*P-n*W-r*C)*U,e[2]=(x*R-p*E+g*A)*U,e[3]=(f*E-u*R-d*A)*U,e[4]=(c*I-o*W-l*T)*U,e[5]=(t*W-s*I+r*T)*U,e[6]=(p*v-m*R-g*M)*U,e[7]=(h*R-f*v+d*M)*U,e[8]=(o*P-a*I+l*_)*U,e[9]=(n*I-t*P-r*_)*U,e[10]=(m*E-x*v+g*S)*U,e[11]=(u*v-h*E-d*S)*U,e[12]=(a*T-o*C-c*_)*U,e[13]=(t*C-n*T+s*_)*U,e[14]=(x*M-m*A-p*S)*U,e[15]=(h*A-u*M+f*S)*U,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,m=r*u,x=o*h,p=o*u,g=a*u,S=c*l,M=c*h,v=c*u,A=n.x,E=n.y,R=n.z;return s[0]=(1-(x+g))*A,s[1]=(d+v)*A,s[2]=(m-M)*A,s[3]=0,s[4]=(d-v)*E,s[5]=(1-(f+g))*E,s[6]=(p+S)*E,s[7]=0,s[8]=(m+M)*R,s[9]=(p-S)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ws.set(s[0],s[1],s[2]).length(),a=Ws.set(s[4],s[5],s[6]).length(),c=Ws.set(s[8],s[9],s[10]).length();r<0&&(o=-o),kn.copy(this);let l=1/o,h=1/a,u=1/c;return kn.elements[0]*=l,kn.elements[1]*=l,kn.elements[2]*=l,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=u,kn.elements[9]*=u,kn.elements[10]*=u,t.setFromRotationMatrix(kn),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=Xn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),m,x;if(c)m=r/(o-r),x=o*r/(o-r);else if(a===Xn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===lr)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Xn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s),m,x;if(c)m=1/(o-r),x=o/(o-r);else if(a===Xn)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===lr)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ws=new L,kn=new Xe,eg=new L(0,0,0),tg=new L(1,1,1),Ui=new L,na=new L,Tn=new L,af=new Xe,cf=new Ft,en=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return af.makeRotationFromQuaternion(e),this.setFromRotationMatrix(af,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cf.setFromEuler(this),this.setFromQuaternion(cf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};en.DEFAULT_ORDER="XYZ";var jr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ng=0,lf=new L,Xs=new Ft,di=new Xe,ia=new L,Nr=new L,ig=new L,sg=new Ft,hf=new L(1,0,0),uf=new L(0,1,0),ff=new L(0,0,1),df={type:"added"},rg={type:"removed"},qs={type:"childadded",child:null},Dl={type:"childremoved",child:null},Rt=class i extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new en,n=new Ft,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xe},normalMatrix:{value:new $e}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(hf,e)}rotateY(e){return this.rotateOnAxis(uf,e)}rotateZ(e){return this.rotateOnAxis(ff,e)}translateOnAxis(e,t){return lf.copy(e).applyQuaternion(this.quaternion),this.position.add(lf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hf,e)}translateY(e){return this.translateOnAxis(uf,e)}translateZ(e){return this.translateOnAxis(ff,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ia.copy(e):ia.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Nr,ia,this.up):di.lookAt(ia,Nr,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),Xs.setFromRotationMatrix(di),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(df),qs.child=e,this.dispatchEvent(qs),qs.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rg),Dl.child=e,this.dispatchEvent(Dl),Dl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(df),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,e,ig),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,sg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Rt.DEFAULT_UP=new L(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var nt=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},og={type:"move"},dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),g=this._getHandJoint(l,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(og)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},sa={h:0,s:0,l:0};function Ul(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=rt.workingColorSpace){if(e=Gh(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ul(o,r,e+1/3),this.g=Ul(o,r,e),this.b=Ul(o,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,t=tt){function n(r){r!==void 0&&parseFloat(r)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tt){let n=Id[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tt){return rt.workingToColorSpace(cn.copy(this),e),Math.round(ot(cn.r*255,0,255))*65536+Math.round(ot(cn.g*255,0,255))*256+Math.round(ot(cn.b*255,0,255))}getHexString(e=tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(cn.copy(this),t);let n=cn.r,s=cn.g,r=cn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=tt){rt.workingToColorSpace(cn.copy(this),e);let t=cn.r,n=cn.g,s=cn.b;return e!==tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(sa);let n=qr(Fi.h,sa.h,t),s=qr(Fi.s,sa.s,t),r=qr(Fi.l,sa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new ve;ve.NAMES=Id;var Qr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ve(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var eo=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Gn=new L,pi=new L,Fl=new L,mi=new L,Ys=new L,Zs=new L,pf=new L,Ol=new L,Bl=new L,zl=new L,Hl=new Mt,kl=new Mt,Gl=new Mt,yi=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Gn.subVectors(e,t),s.cross(Gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Gn.subVectors(s,t),pi.subVectors(n,t),Fl.subVectors(e,t);let o=Gn.dot(Gn),a=Gn.dot(pi),c=Gn.dot(Fl),l=pi.dot(pi),h=pi.dot(Fl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,m=(o*h-a*c)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,mi.x),c.addScaledVector(o,mi.y),c.addScaledVector(a,mi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Hl.setScalar(0),kl.setScalar(0),Gl.setScalar(0),Hl.fromBufferAttribute(e,t),kl.fromBufferAttribute(e,n),Gl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Hl,r.x),o.addScaledVector(kl,r.y),o.addScaledVector(Gl,r.z),o}static isFrontFacing(e,t,n,s){return Gn.subVectors(n,t),pi.subVectors(e,t),Gn.cross(pi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Gn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ys.subVectors(s,n),Zs.subVectors(r,n),Ol.subVectors(e,n);let c=Ys.dot(Ol),l=Zs.dot(Ol);if(c<=0&&l<=0)return t.copy(n);Bl.subVectors(e,s);let h=Ys.dot(Bl),u=Zs.dot(Bl);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Ys,o);zl.subVectors(e,r);let d=Ys.dot(zl),m=Zs.dot(zl);if(m>=0&&d<=m)return t.copy(r);let x=d*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(Zs,a);let p=h*m-d*u;if(p<=0&&u-h>=0&&d-m>=0)return pf.subVectors(r,s),a=(u-h)/(u-h+(d-m)),t.copy(s).addScaledVector(pf,a);let g=1/(p+x+f);return o=x*g,a=f*g,t.copy(n).addScaledVector(Ys,o).addScaledVector(Zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ln=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ra.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ra.copy(n.boundingBox)),ra.applyMatrix4(e.matrixWorld),this.union(ra)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dr),oa.subVectors(this.max,Dr),Ks.subVectors(e.a,Dr),Js.subVectors(e.b,Dr),$s.subVectors(e.c,Dr),Oi.subVectors(Js,Ks),Bi.subVectors($s,Js),is.subVectors(Ks,$s);let t=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-is.z,is.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,is.z,0,-is.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-is.y,is.x,0];return!Vl(t,Ks,Js,$s,oa)||(t=[1,0,0,0,1,0,0,0,1],!Vl(t,Ks,Js,$s,oa))?!1:(aa.crossVectors(Oi,Bi),t=[aa.x,aa.y,aa.z],Vl(t,Ks,Js,$s,oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},gi=[new L,new L,new L,new L,new L,new L,new L,new L],Vn=new L,ra=new ln,Ks=new L,Js=new L,$s=new L,Oi=new L,Bi=new L,is=new L,Dr=new L,oa=new L,aa=new L,ss=new L;function Vl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ss.fromArray(i,r);let a=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),c=e.dot(ss),l=t.dot(ss),h=n.dot(ss);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Xt=new L,ca=new ue,ag=0,kt=class extends si{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ag++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wa,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ca.fromBufferAttribute(this,t),ca.applyMatrix3(e),this.setXY(t,ca.x,ca.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wa&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var to=class extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var no=class extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Je=class extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}},cg=new ln,Ur=new L,Wl=new L,_n=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):cg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);let t=Ur.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ur,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(Wl)),this.expandByPoint(Ur.copy(e.center).sub(Wl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},lg=0,Dn=new Xe,Xl=new Rt,js=new L,An=new ln,Fr=new ln,Qt=new L,gt=class i extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lg++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nm(e)?no:to)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return Xl.lookAt(e),Xl.updateMatrix(),this.applyMatrix4(Xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Je(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Fr.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(An.min,Fr.min),An.expandByPoint(Qt),Qt.addVectors(An.max,Fr.max),An.expandByPoint(Qt)):(An.expandByPoint(Fr.min),An.expandByPoint(Fr.max))}An.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Qt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Qt.fromBufferAttribute(a,l),c&&(js.fromBufferAttribute(e,l),Qt.add(js)),s=Math.max(s,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new kt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let _=0;_<n.count;_++)a[_]=new L,c[_]=new L;let l=new L,h=new L,u=new L,f=new ue,d=new ue,m=new ue,x=new L,p=new L;function g(_,T,I){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,I),f.fromBufferAttribute(r,_),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,I),h.sub(l),u.sub(l),d.sub(f),m.sub(f);let C=1/(d.x*m.y-m.x*d.y);isFinite(C)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(C),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(C),a[_].add(x),a[T].add(x),a[I].add(x),c[_].add(p),c[T].add(p),c[I].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let _=0,T=S.length;_<T;++_){let I=S[_],C=I.start,P=I.count;for(let W=C,Y=C+P;W<Y;W+=3)g(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let M=new L,v=new L,A=new L,E=new L;function R(_){A.fromBufferAttribute(s,_),E.copy(A);let T=a[_];M.copy(T),M.sub(A.multiplyScalar(A.dot(T))).normalize(),v.crossVectors(E,T);let C=v.dot(c[_])<0?-1:1;o.setXYZW(_,M.x,M.y,M.z,C)}for(let _=0,T=S.length;_<T;++_){let I=S[_],C=I.start,P=I.count;for(let W=C,Y=C+P;W<Y;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,m=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let g=0;g<h;g++)f[m++]=l[d++]}return new kt(f,h,u)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},vs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wa,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},dn=new L,Gi=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Jr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Jr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},hg=0,hn=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=ms,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ua,this.blendDst=Fa,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ua&&(n.blendSrc=this.blendSrc),this.blendDst!==Fa&&(n.blendDst=this.blendDst),this.blendEquation!==ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ue().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ue().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ri=class extends hn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qs,Or=new L,er=new L,tr=new L,nr=new ue,Br=new ue,Pd=new Xe,la=new L,zr=new L,ha=new L,mf=new ue,ql=new ue,gf=new ue,Mi=class extends Rt{constructor(e=new ri){if(super(),this.isSprite=!0,this.type="Sprite",Qs===void 0){Qs=new gt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vs(t,5);Qs.setIndex([0,1,2,0,2,3]),Qs.setAttribute("position",new Gi(n,3,0,!1)),Qs.setAttribute("uv",new Gi(n,2,3,!1))}this.geometry=Qs,this.material=e,this.center=new ue(.5,.5),this.count=1}raycast(e,t){e.camera===null&&We('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),er.setFromMatrixScale(this.matrixWorld),Pd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),tr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&er.multiplyScalar(-tr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ua(la.set(-.5,-.5,0),tr,o,er,s,r),ua(zr.set(.5,-.5,0),tr,o,er,s,r),ua(ha.set(.5,.5,0),tr,o,er,s,r),mf.set(0,0),ql.set(1,0),gf.set(1,1);let a=e.ray.intersectTriangle(la,zr,ha,!1,Or);if(a===null&&(ua(zr.set(-.5,.5,0),tr,o,er,s,r),ql.set(0,1),a=e.ray.intersectTriangle(la,ha,zr,!1,Or),a===null))return;let c=e.ray.origin.distanceTo(Or);c<e.near||c>e.far||t.push({distance:c,point:Or.clone(),uv:yi.getInterpolation(Or,la,zr,ha,mf,ql,gf,new ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ua(i,e,t,n,s,r){nr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Br.x=r*nr.x-s*nr.y,Br.y=s*nr.x+r*nr.y):Br.copy(nr),i.copy(e),i.x+=Br.x,i.y+=Br.y,i.applyMatrix4(Pd)}var xi=new L,Yl=new L,fa=new L,zi=new L,Zl=new L,da=new L,Kl=new L,Ms=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Yl.copy(e).add(t).multiplyScalar(.5),fa.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(Yl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(fa),a=zi.dot(this.direction),c=-zi.dot(fa),l=zi.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*c-a,f=o*a-c,m=r*h,u>=0)if(f>=-m)if(f<=m){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Yl).addScaledVector(fa,f),d}intersectSphere(e,t){xi.subVectors(e.center,this.origin);let n=xi.dot(this.direction),s=xi.dot(xi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,n,s,r){Zl.subVectors(t,e),da.subVectors(n,e),Kl.crossVectors(Zl,da);let o=this.direction.dot(Kl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,e);let c=a*this.direction.dot(da.crossVectors(zi,da));if(c<0)return null;let l=a*this.direction.dot(Zl.cross(zi));if(l<0||c+l>o)return null;let h=-a*zi.dot(Kl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yt=class extends hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},xf=new Xe,rs=new Ms,pa=new _n,_f=new L,ma=new L,ga=new L,xa=new L,Jl=new L,_a=new L,yf=new L,ya=new L,Ne=class extends Rt{constructor(e=new gt,t=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){_a.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Jl.fromBufferAttribute(u,e),o?_a.addScaledVector(Jl,h):_a.addScaledVector(Jl.sub(t),h))}t.add(_a)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(r),rs.copy(e.ray).recast(e.near),!(pa.containsPoint(rs.origin)===!1&&(rs.intersectSphere(pa,_f)===null||rs.origin.distanceToSquared(_f)>(e.far-e.near)**2))&&(xf.copy(r).invert(),rs.copy(e.ray).applyMatrix4(xf),!(n.boundingBox!==null&&rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let p=f[m],g=o[p.materialIndex],S=Math.max(p.start,d.start),M=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=S,A=M;v<A;v+=3){let E=a.getX(v),R=a.getX(v+1),_=a.getX(v+2);s=va(this,g,e,n,l,h,u,E,R,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){let S=a.getX(p),M=a.getX(p+1),v=a.getX(p+2);s=va(this,o,e,n,l,h,u,S,M,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let p=f[m],g=o[p.materialIndex],S=Math.max(p.start,d.start),M=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let v=S,A=M;v<A;v+=3){let E=v,R=v+1,_=v+2;s=va(this,g,e,n,l,h,u,E,R,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){let S=p,M=p+1,v=p+2;s=va(this,o,e,n,l,h,u,S,M,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function ug(i,e,t,n,s,r,o,a){let c;if(e.side===nn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===qn,a),c===null)return null;ya.copy(a),ya.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ya);return l<t.near||l>t.far?null:{distance:l,point:ya.clone(),object:i}}function va(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,ma),i.getVertexPosition(c,ga),i.getVertexPosition(l,xa);let h=ug(i,e,t,n,ma,ga,xa,yf);if(h){let u=new L;yi.getBarycoord(yf,ma,ga,xa,u),s&&(h.uv=yi.getInterpolatedAttribute(s,a,c,l,u,new ue)),r&&(h.uv1=yi.getInterpolatedAttribute(r,a,c,l,u,new ue)),o&&(h.normal=yi.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new L,materialIndex:0};yi.getNormal(ma,ga,xa,f.normal),h.face=f,h.barycoord=u}return h}var Hr=new Mt,vf=new Mt,Mf=new Mt,fg=new Mt,Sf=new Xe,Ma=new L,$l=new _n,bf=new Xe,jl=new Ms,io=class extends Ne{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ah,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ln),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ma),this.boundingBox.expandByPoint(Ma)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ma),this.boundingSphere.expandByPoint(Ma)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$l.copy(this.boundingSphere),$l.applyMatrix4(s),e.ray.intersectsSphere($l)!==!1&&(bf.copy(s).invert(),jl.copy(e.ray).applyMatrix4(bf),!(this.boundingBox!==null&&jl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,jl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ah?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gd?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ae("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;vf.fromBufferAttribute(s.attributes.skinIndex,e),Mf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Hr.copy(t),t.set(0,0,0,0)):(Hr.set(...t,1),t.set(0,0,0)),Hr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Mf.getComponent(r);if(o!==0){let a=vf.getComponent(r);Sf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(fg.copy(Hr).applyMatrix4(Sf),o)}}return t.isVector4&&(t.w=Hr.w),t.applyMatrix4(this.bindMatrixInverse)}},pr=class extends Rt{constructor(){super(),this.isBone=!0,this.type="Bone"}},mr=class extends Kt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Gt,h=Gt,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ef=new Xe,dg=new Xe,so=class i{constructor(e=[],t=[]){this.uuid=Fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ae("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:dg;Ef.multiplyMatrices(a,t[r]),Ef.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new mr(t,e,e,Pn,In);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Ae("Skeleton: No bone found with UUID:",r),o=new pr),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Vi=class extends kt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ir=new Xe,Tf=new Xe,Sa=[],Af=new ln,pg=new Xe,kr=new Ne,Gr=new _n,Rn=class extends Ne{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,pg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ir),Af.copy(e.boundingBox).applyMatrix4(ir),this.boundingBox.union(Af)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ir),Gr.copy(e.boundingSphere).applyMatrix4(ir),this.boundingSphere.union(Gr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(kr.geometry=this.geometry,kr.material=this.material,kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gr.copy(this.boundingSphere),Gr.applyMatrix4(n),e.ray.intersectsSphere(Gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ir),Tf.multiplyMatrices(n,ir),kr.matrixWorld=Tf,kr.raycast(e,Sa);for(let o=0,a=Sa.length;o<a;o++){let c=Sa[o];c.instanceId=r,c.object=this,t.push(c)}Sa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Vi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new mr(new Float32Array(s*this.count),s,this.count,Ec,In));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ql=new L,mg=new L,gg=new $e,ti=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ql.subVectors(n,t).cross(mg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Ql),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||gg.getNormalMatrix(e),s=this.coplanarPoint(Ql).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},os=new _n,xg=new ue(.5,.5),ba=new L,gr=class{constructor(e=new ti,t=new ti,n=new ti,s=new ti,r=new ti,o=new ti){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],x=r[9],p=r[10],g=r[11],S=r[12],M=r[13],v=r[14],A=r[15];if(s[0].setComponents(l-o,d-h,g-m,A-S).normalize(),s[1].setComponents(l+o,d+h,g+m,A+S).normalize(),s[2].setComponents(l+a,d+u,g+x,A+M).normalize(),s[3].setComponents(l-a,d-u,g-x,A-M).normalize(),n)s[4].setComponents(c,f,p,v).normalize(),s[5].setComponents(l-c,d-f,g-p,A-v).normalize();else if(s[4].setComponents(l-c,d-f,g-p,A-v).normalize(),t===Xn)s[5].setComponents(l+c,d+f,g+p,A+v).normalize();else if(t===lr)s[5].setComponents(c,f,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){os.center.set(0,0,0);let t=xg.distanceTo(e.center);return os.radius=.7071067811865476+t,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ba.x=s.normal.x>0?e.max.x:e.min.x,ba.y=s.normal.y>0?e.max.y:e.min.y,ba.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ba)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Wi=class extends hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Za=new L,Ka=new L,wf=new Xe,Vr=new Ms,Ea=new _n,eh=new L,Rf=new L,Ss=class extends Rt{constructor(e=new gt,t=new Wi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Za.fromBufferAttribute(t,s-1),Ka.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Za.distanceTo(Ka);e.setAttribute("lineDistance",new Je(n,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(s),Ea.radius+=r,e.ray.intersectsSphere(Ea)===!1)return;wf.copy(s).invert(),Vr.copy(e.ray).applyMatrix4(wf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=d,p=m-1;x<p;x+=l){let g=h.getX(x),S=h.getX(x+1),M=Ta(this,e,Vr,c,g,S,x);M&&t.push(M)}if(this.isLineLoop){let x=h.getX(m-1),p=h.getX(d),g=Ta(this,e,Vr,c,x,p,m-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=d,p=m-1;x<p;x+=l){let g=Ta(this,e,Vr,c,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=Ta(this,e,Vr,c,m-1,d,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ta(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Za.fromBufferAttribute(a,s),Ka.fromBufferAttribute(a,r),t.distanceSqToSegment(Za,Ka,eh,Rf)>n)return;eh.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(eh);if(!(l<e.near||l>e.far))return{distance:l,point:Rf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Cf=new L,If=new L,bs=class extends Ss{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Cf.fromBufferAttribute(t,s),If.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Cf.distanceTo(If);e.setAttribute("lineDistance",new Je(n,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ro=class extends Ss{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},xr=class extends hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Pf=new Xe,dh=new Ms,Aa=new _n,wa=new L,oo=class extends Rt{constructor(e=new gt,t=new xr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(s),Aa.radius+=r,e.ray.intersectsSphere(Aa)===!1)return;Pf.copy(s).invert(),dh.copy(e.ray).applyMatrix4(Pf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let m=f,x=d;m<x;m++){let p=l.getX(m);wa.fromBufferAttribute(u,p),Lf(wa,p,c,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,x=d;m<x;m++)wa.fromBufferAttribute(u,m),Lf(wa,m,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Lf(i,e,t,n,s,r,o){let a=dh.distanceSqToPoint(i);if(a<t){let c=new L;dh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ao=class extends Kt{constructor(e=[],t=Zi,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Bt=class extends Kt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Si=class extends Kt{constructor(e,t,n=Jn,s,r,o,a=Gt,c=Gt,l,h=ii,u=1){if(h!==ii&&h!==Ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ja=class extends Si{constructor(e,t=Jn,n=Zi,s,r,o=Gt,a=Gt,c,l=ii){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},co=class extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},et=class i extends gt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(u,2));function m(x,p,g,S,M,v,A,E,R,_,T){let I=v/R,C=A/_,P=v/2,W=A/2,Y=E/2,U=R+1,H=_+1,G=0,j=0,ne=new L;for(let le=0;le<H;le++){let he=le*C-W;for(let _e=0;_e<U;_e++){let ze=_e*I-P;ne[x]=ze*S,ne[p]=he*M,ne[g]=Y,l.push(ne.x,ne.y,ne.z),ne[x]=0,ne[p]=0,ne[g]=E>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(_e/R),u.push(1-le/_),G+=1}}for(let le=0;le<_;le++)for(let he=0;he<R;he++){let _e=f+he+U*le,ze=f+he+U*(le+1),Ve=f+(he+1)+U*(le+1),De=f+(he+1)+U*le;c.push(_e,ze,De),c.push(ze,Ve,De),j+=6}a.addGroup(d,j,T),d+=j,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Bn=class i extends gt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,x=[],p=n/2,g=0;S(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(f,3)),this.setAttribute("uv",new Je(d,2));function S(){let v=new L,A=new L,E=0,R=(t-e)/n;for(let _=0;_<=r;_++){let T=[],I=_/r,C=I*(t-e)+e;for(let P=0;P<=s;P++){let W=P/s,Y=W*c+a,U=Math.sin(Y),H=Math.cos(Y);A.x=C*U,A.y=-I*n+p,A.z=C*H,u.push(A.x,A.y,A.z),v.set(U,R,H).normalize(),f.push(v.x,v.y,v.z),d.push(W,1-I),T.push(m++)}x.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){let I=x[T][_],C=x[T+1][_],P=x[T+1][_+1],W=x[T][_+1];(e>0||T!==0)&&(h.push(I,C,W),E+=3),(t>0||T!==r-1)&&(h.push(C,P,W),E+=3)}l.addGroup(g,E,0),g+=E}function M(v){let A=m,E=new ue,R=new L,_=0,T=v===!0?e:t,I=v===!0?1:-1;for(let P=1;P<=s;P++)u.push(0,p*I,0),f.push(0,I,0),d.push(.5,.5),m++;let C=m;for(let P=0;P<=s;P++){let Y=P/s*c+a,U=Math.cos(Y),H=Math.sin(Y);R.x=T*H,R.y=p*I,R.z=T*U,u.push(R.x,R.y,R.z),f.push(0,I,0),E.x=U*.5+.5,E.y=H*.5*I+.5,d.push(E.x,E.y),m++}for(let P=0;P<s;P++){let W=A+P,Y=C+P;v===!0?h.push(Y,Y+1,W):h.push(Y+1,Y,W),_+=3}l.addGroup(g,_,v===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},_r=class i extends Bn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ae("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ue:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],o=[],a=new L,c=new Xe;for(let d=0;d<=e;d++){let m=d/e;s[d]=this.getTangentAt(m,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(ot(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(ot(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},yr=class extends Cn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ue){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},$a=class extends yr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Vh(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Nf=new L,Df=new L,th=new Vh,nh=new Vh,ih=new Vh,ja=class extends Cn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Df.subVectors(s[0],s[1]).add(s[0]),l=Df);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Nf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Nf),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),th.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,m,x,p),nh.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,m,x,p),ih.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,m,x,p)}else this.curveType==="catmullrom"&&(th.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),nh.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),ih.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(th.calc(c),nh.calc(c),ih.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Uf(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function _g(i,e){let t=1-i;return t*t*e}function yg(i,e){return 2*(1-i)*i*e}function vg(i,e){return i*i*e}function Yr(i,e,t,n){return _g(i,e)+yg(i,t)+vg(i,n)}function Mg(i,e){let t=1-i;return t*t*t*e}function Sg(i,e){let t=1-i;return 3*t*t*i*e}function bg(i,e){return 3*(1-i)*i*i*e}function Eg(i,e){return i*i*i*e}function Zr(i,e,t,n,s){return Mg(i,e)+Sg(i,t)+bg(i,n)+Eg(i,s)}var lo=class extends Cn{constructor(e=new ue,t=new ue,n=new ue,s=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ue){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zr(e,s.x,r.x,o.x,a.x),Zr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qa=class extends Cn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zr(e,s.x,r.x,o.x,a.x),Zr(e,s.y,r.y,o.y,a.y),Zr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ho=class extends Cn{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ec=class extends Cn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uo=class extends Cn{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Yr(e,s.x,r.x,o.x),Yr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tc=class extends Cn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Yr(e,s.x,r.x,o.x),Yr(e,s.y,r.y,o.y),Yr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fo=class extends Cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Uf(a,c.x,l.x,h.x,u.x),Uf(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ue().fromArray(s))}return this}},ph=Object.freeze({__proto__:null,ArcCurve:$a,CatmullRomCurve3:ja,CubicBezierCurve:lo,CubicBezierCurve3:Qa,EllipseCurve:yr,LineCurve:ho,LineCurve3:ec,QuadraticBezierCurve:uo,QuadraticBezierCurve3:tc,SplineCurve:fo}),nc=class extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ph[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new ph[s.type]().fromJSON(s))}return this}},po=class extends nc{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ho(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new uo(this.currentPoint.clone(),new ue(e,t),new ue(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new lo(this.currentPoint.clone(),new ue(e,t),new ue(n,s),new ue(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new fo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new yr(e,t,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},vr=class extends po{constructor(e){super(e),this.uuid=Fn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new po().fromJSON(s))}return this}};function Tg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Ld(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Ig(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let h=a,u=c;for(let f=t;f<s;f+=t){let d=i[f],m=i[f+1];d<a&&(a=d),m<c&&(c=m),d>h&&(h=d),m>u&&(u=m)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return mo(r,o,t,a,c,l,0),o}function Ld(i,e,t,n,s){let r;if(s===kg(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Ff(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Ff(o/n|0,i[o],i[o+1],r);return r&&Mr(r,r.next)&&(xo(r),r=r.next),r}function Es(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Mr(t,t.next)||Ut(t.prev,t,t.next)===0)){if(xo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function mo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Ug(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?wg(i,n,s,r):Ag(i)){e.push(c.i,i.i,l.i),xo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Rg(Es(i),e),mo(i,e,t,n,s,r,2)):o===2&&Cg(i,e,t,n,s,r):mo(Es(i),e,t,n,s,r,1);break}}}function Ag(i){let e=i.prev,t=i,n=i.next;if(Ut(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),f=Math.max(s,r,o),d=Math.max(a,c,l),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&Wr(s,a,r,c,o,l,m.x,m.y)&&Ut(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function wg(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Ut(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,c,l),m=Math.min(h,u,f),x=Math.max(a,c,l),p=Math.max(h,u,f),g=mh(d,m,e,t,n),S=mh(x,p,e,t,n),M=i.prevZ,v=i.nextZ;for(;M&&M.z>=g&&v&&v.z<=S;){if(M.x>=d&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&Wr(a,h,c,u,l,f,M.x,M.y)&&Ut(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=d&&v.x<=x&&v.y>=m&&v.y<=p&&v!==s&&v!==o&&Wr(a,h,c,u,l,f,v.x,v.y)&&Ut(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=g;){if(M.x>=d&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&Wr(a,h,c,u,l,f,M.x,M.y)&&Ut(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=S;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=p&&v!==s&&v!==o&&Wr(a,h,c,u,l,f,v.x,v.y)&&Ut(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Rg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Mr(n,s)&&Dd(n,t,t.next,s)&&go(n,s)&&go(s,n)&&(e.push(n.i,t.i,s.i),xo(t),xo(t.next),t=i=s),t=t.next}while(t!==i);return Es(t)}function Cg(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Bg(o,a)){let c=Ud(o,a);o=Es(o,o.next),c=Es(c,c.next),mo(o,e,t,n,s,r,0),mo(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Ig(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Ld(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Og(l))}s.sort(Pg);for(let r=0;r<s.length;r++)t=Lg(s[r],t);return t}function Pg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Lg(i,e){let t=Ng(i,e);if(!t)return e;let n=Ud(t,i);return Es(n,n.next),Es(t,t.next)}function Ng(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Mr(i,t))return t;do{if(Mr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Nd(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);go(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Dg(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Dg(i,e){return Ut(i.prev,i,e.prev)<0&&Ut(e.next,i,i.next)<0}function Ug(i,e,t,n){let s=i;do s.z===0&&(s.z=mh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Fg(s)}function Fg(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function mh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Og(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Nd(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Wr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Nd(i,e,t,n,s,r,o,a)}function Bg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!zg(i,e)&&(go(i,e)&&go(e,i)&&Hg(i,e)&&(Ut(i.prev,i,e.prev)||Ut(i,e.prev,e))||Mr(i,e)&&Ut(i.prev,i,i.next)>0&&Ut(e.prev,e,e.next)>0)}function Ut(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Mr(i,e){return i.x===e.x&&i.y===e.y}function Dd(i,e,t,n){let s=Ca(Ut(i,e,t)),r=Ca(Ut(i,e,n)),o=Ca(Ut(t,n,i)),a=Ca(Ut(t,n,e));return!!(s!==r&&o!==a||s===0&&Ra(i,t,e)||r===0&&Ra(i,n,e)||o===0&&Ra(t,i,n)||a===0&&Ra(t,e,n))}function Ra(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ca(i){return i>0?1:i<0?-1:0}function zg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Dd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function go(i,e){return Ut(i.prev,i,i.next)<0?Ut(i,e,i.next)>=0&&Ut(i,i.prev,e)>=0:Ut(i,e,i.prev)<0||Ut(i,i.next,e)<0}function Hg(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ud(i,e){let t=gh(i.i,i.x,i.y),n=gh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ff(i,e,t,n){let s=gh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function xo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function gh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function kg(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var xh=class{static triangulate(e,t,n=2){return Tg(e,t,n)}},ds=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Of(e),Bf(n,e);let o=e.length;t.forEach(Of);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Bf(n,t[c]);let a=xh.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Of(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Bf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var _o=class i extends gt{constructor(e=new vr([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new Je(s,3)),this.setAttribute("uv",new Je(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Gg,M,v=!1,A,E,R,_;if(g){M=g.getSpacedPoints(h),v=!0,f=!1;let te=g.isCatmullRomCurve3?g.closed:!1;A=g.computeFrenetFrames(h,te),E=new L,R=new L,_=new L}f||(p=0,d=0,m=0,x=0);let T=a.extractPoints(l),I=T.shape,C=T.holes;if(!ds.isClockWise(I)){I=I.reverse();for(let te=0,ie=C.length;te<ie;te++){let q=C[te];ds.isClockWise(q)&&(C[te]=q.reverse())}}function W(te){let q=10000000000000001e-36,re=te[0];for(let se=1;se<=te.length;se++){let Oe=se%te.length,Ee=te[Oe],ye=Ee.x-re.x,ke=Ee.y-re.y,N=ye*ye+ke*ke,at=Math.max(Math.abs(Ee.x),Math.abs(Ee.y),Math.abs(re.x),Math.abs(re.y)),Ke=q*at*at;if(N<=Ke){te.splice(Oe,1),se--;continue}re=Ee}}W(I),C.forEach(W);let Y=C.length,U=I;for(let te=0;te<Y;te++){let ie=C[te];I=I.concat(ie)}function H(te,ie,q){return ie||We("ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(ie,q)}let G=I.length;function j(te,ie,q){let re,se,Oe,Ee=te.x-ie.x,ye=te.y-ie.y,ke=q.x-te.x,N=q.y-te.y,at=Ee*Ee+ye*ye,Ke=Ee*N-ye*ke;if(Math.abs(Ke)>Number.EPSILON){let w=Math.sqrt(at),y=Math.sqrt(ke*ke+N*N),O=ie.x-ye/w,z=ie.y+Ee/w,K=q.x-N/y,ce=q.y+ke/y,Z=((K-O)*N-(ce-z)*ke)/(Ee*N-ye*ke);re=O+Ee*Z-te.x,se=z+ye*Z-te.y;let B=re*re+se*se;if(B<=2)return new ue(re,se);Oe=Math.sqrt(B/2)}else{let w=!1;Ee>Number.EPSILON?ke>Number.EPSILON&&(w=!0):Ee<-Number.EPSILON?ke<-Number.EPSILON&&(w=!0):Math.sign(ye)===Math.sign(N)&&(w=!0),w?(re=-ye,se=Ee,Oe=Math.sqrt(at)):(re=Ee,se=ye,Oe=Math.sqrt(at/2))}return new ue(re/Oe,se/Oe)}let ne=[];for(let te=0,ie=U.length,q=ie-1,re=te+1;te<ie;te++,q++,re++)q===ie&&(q=0),re===ie&&(re=0),ne[te]=j(U[te],U[q],U[re]);let le=[],he,_e=ne.concat();for(let te=0,ie=Y;te<ie;te++){let q=C[te];he=[];for(let re=0,se=q.length,Oe=se-1,Ee=re+1;re<se;re++,Oe++,Ee++)Oe===se&&(Oe=0),Ee===se&&(Ee=0),he[re]=j(q[re],q[Oe],q[Ee]);le.push(he),_e=_e.concat(he)}let ze;if(p===0)ze=ds.triangulateShape(U,C);else{let te=[],ie=[];for(let q=0;q<p;q++){let re=q/p,se=d*Math.cos(re*Math.PI/2),Oe=m*Math.sin(re*Math.PI/2)+x;for(let Ee=0,ye=U.length;Ee<ye;Ee++){let ke=H(U[Ee],ne[Ee],Oe);Le(ke.x,ke.y,-se),re===0&&te.push(ke)}for(let Ee=0,ye=Y;Ee<ye;Ee++){let ke=C[Ee];he=le[Ee];let N=[];for(let at=0,Ke=ke.length;at<Ke;at++){let w=H(ke[at],he[at],Oe);Le(w.x,w.y,-se),re===0&&N.push(w)}re===0&&ie.push(N)}}ze=ds.triangulateShape(te,ie)}let Ve=ze.length,De=m+x;for(let te=0;te<G;te++){let ie=f?H(I[te],_e[te],De):I[te];v?(R.copy(A.normals[0]).multiplyScalar(ie.x),E.copy(A.binormals[0]).multiplyScalar(ie.y),_.copy(M[0]).add(R).add(E),Le(_.x,_.y,_.z)):Le(ie.x,ie.y,0)}for(let te=1;te<=h;te++)for(let ie=0;ie<G;ie++){let q=f?H(I[ie],_e[ie],De):I[ie];v?(R.copy(A.normals[te]).multiplyScalar(q.x),E.copy(A.binormals[te]).multiplyScalar(q.y),_.copy(M[te]).add(R).add(E),Le(_.x,_.y,_.z)):Le(q.x,q.y,u/h*te)}for(let te=p-1;te>=0;te--){let ie=te/p,q=d*Math.cos(ie*Math.PI/2),re=m*Math.sin(ie*Math.PI/2)+x;for(let se=0,Oe=U.length;se<Oe;se++){let Ee=H(U[se],ne[se],re);Le(Ee.x,Ee.y,u+q)}for(let se=0,Oe=C.length;se<Oe;se++){let Ee=C[se];he=le[se];for(let ye=0,ke=Ee.length;ye<ke;ye++){let N=H(Ee[ye],he[ye],re);v?Le(N.x,N.y+M[h-1].y,M[h-1].x+q):Le(N.x,N.y,u+q)}}}Q(),ge();function Q(){let te=s.length/3;if(f){let ie=0,q=G*ie;for(let re=0;re<Ve;re++){let se=ze[re];qe(se[2]+q,se[1]+q,se[0]+q)}ie=h+p*2,q=G*ie;for(let re=0;re<Ve;re++){let se=ze[re];qe(se[0]+q,se[1]+q,se[2]+q)}}else{for(let ie=0;ie<Ve;ie++){let q=ze[ie];qe(q[2],q[1],q[0])}for(let ie=0;ie<Ve;ie++){let q=ze[ie];qe(q[0]+G*h,q[1]+G*h,q[2]+G*h)}}n.addGroup(te,s.length/3-te,0)}function ge(){let te=s.length/3,ie=0;ae(U,ie),ie+=U.length;for(let q=0,re=C.length;q<re;q++){let se=C[q];ae(se,ie),ie+=se.length}n.addGroup(te,s.length/3-te,1)}function ae(te,ie){let q=te.length;for(;--q>=0;){let re=q,se=q-1;se<0&&(se=te.length-1);for(let Oe=0,Ee=h+p*2;Oe<Ee;Oe++){let ye=G*Oe,ke=G*(Oe+1),N=ie+re+ye,at=ie+se+ye,Ke=ie+se+ke,w=ie+re+ke;He(N,at,Ke,w)}}}function Le(te,ie,q){c.push(te),c.push(ie),c.push(q)}function qe(te,ie,q){pt(te),pt(ie),pt(q);let re=s.length/3,se=S.generateTopUV(n,s,re-3,re-2,re-1);Ye(se[0]),Ye(se[1]),Ye(se[2])}function He(te,ie,q,re){pt(te),pt(ie),pt(re),pt(ie),pt(q),pt(re);let se=s.length/3,Oe=S.generateSideWallUV(n,s,se-6,se-3,se-2,se-1);Ye(Oe[0]),Ye(Oe[1]),Ye(Oe[3]),Ye(Oe[1]),Ye(Oe[2]),Ye(Oe[3])}function pt(te){s.push(c[te*3+0]),s.push(c[te*3+1]),s.push(c[te*3+2])}function Ye(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Vg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ph[s.type]().fromJSON(s)),new i(n,e.options)}},Gg={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ue(r,o),new ue(a,c),new ue(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],m=e[s*3+2],x=e[r*3],p=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ue(o,1-c),new ue(l,1-u),new ue(f,1-m),new ue(x,1-g)]:[new ue(a,1-c),new ue(h,1-u),new ue(d,1-m),new ue(p,1-g)]}};function Vg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Jt=class i extends gt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,d=[],m=[],x=[],p=[];for(let g=0;g<h;g++){let S=g*f-o;for(let M=0;M<l;M++){let v=M*u-r;m.push(v,-S,0),x.push(0,0,1),p.push(M/a),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let S=0;S<a;S++){let M=S+l*g,v=S+l*(g+1),A=S+1+l*(g+1),E=S+1+l*g;d.push(M,v,E),d.push(v,A,E)}this.setIndex(d),this.setAttribute("position",new Je(m,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var bi=class i extends gt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new L,f=new L,d=[],m=[],x=[],p=[];for(let g=0;g<=n;g++){let S=[],M=g/n,v=o+M*a,A=e*Math.cos(v),E=Math.sqrt(e*e-A*A),R=0;g===0&&o===0?R=.5/t:g===n&&c===Math.PI&&(R=-.5/t);for(let _=0;_<=t;_++){let T=_/t,I=s+T*r;u.x=-E*Math.cos(I),u.y=A,u.z=E*Math.sin(I),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),p.push(T+R,1-M),S.push(l++)}h.push(S)}for(let g=0;g<n;g++)for(let S=0;S<t;S++){let M=h[g][S+1],v=h[g][S],A=h[g+1][S],E=h[g+1][S+1];(g!==0||o>0)&&d.push(M,v,E),(g!==n-1||c<Math.PI)&&d.push(v,A,E)}this.setIndex(d),this.setAttribute("position",new Je(m,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Is(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(zf(s))s.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(zf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function un(i){let e={};for(let t=0;t<i.length;t++){let n=Is(i[t]);for(let s in n)e[s]=n[s]}return e}function zf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Wg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Wh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}var Fd={clone:Is,merge:un},Xg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xg,this.fragmentShader=qg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=Wg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ve().setHex(s.value);break;case"v2":this.uniforms[n].value=new ue().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Mt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new $e().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Xe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ic=class extends mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ts=class extends hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Go,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},yn=class extends Ts{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var je=class extends hn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Go,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=xc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},sc=class extends hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},rc=class extends hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ia(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Yg(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Hf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Zg(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var oi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},oc=class extends oi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lh,endingEnd:lh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case hh:r=e,a=2*t-n;break;case uh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case hh:o=e,c=2*n-t;break;case uh:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(s-t),x=m*m,p=x*m,g=-f*p+2*f*x-f*m,S=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*m+1,M=(-1-d)*p+(1.5+d)*x+.5*m,v=d*p-d*x;for(let A=0;A!==a;++A)r[A]=g*o[h+A]+S*o[l+A]+M*o[c+A]+v*o[u+A];return r}},ac=class extends oi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},cc=class extends oi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},lc=class extends oi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-t)/(s-t),x=1-m;for(let p=0;p!==a;++p)r[p]=o[l+p]*x+o[c+p]*m;return r}let f=a*2,d=e-1;for(let m=0;m!==a;++m){let x=o[l+m],p=o[c+m],g=d*f+m*2,S=u[g],M=u[g+1],v=e*f+m*2,A=h[v],E=h[v+1],R=(n-t)/(s-t),_,T,I,C,P;for(let W=0;W<8;W++){_=R*R,T=_*R,I=1-R,C=I*I,P=C*I;let U=P*t+3*C*R*S+3*I*_*A+T*s-n;if(Math.abs(U)<1e-10)break;let H=3*C*(S-t)+6*I*R*(A-S)+3*_*(s-A);if(Math.abs(H)<1e-10)break;R=R-U/H,R=Math.max(0,Math.min(1,R))}r[m]=P*x+3*C*R*M+3*I*_*E+T*p}return r}},vn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ia(t,this.TimeBufferType),this.values=Ia(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ia(e.times,Array),values:Ia(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new cc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new lc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case xs:t=this.InterpolantFactoryMethodDiscrete;break;case _s:t=this.InterpolantFactoryMethodLinear;break;case Da:t=this.InterpolantFactoryMethodSmooth;break;case ch:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ae("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xs;case this.InterpolantFactoryMethodLinear:return _s;case this.InterpolantFactoryMethodSmooth:return Da;case this.InterpolantFactoryMethodBezier:return ch}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){We("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){We("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Dm(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){We("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Da,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let x=t[u+m];if(x!==t[f+m]||x!==t[d+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=_s;var Ei=class extends vn{constructor(e,t,n){super(e,t,n)}};Ei.prototype.ValueTypeName="bool";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=xs;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var yo=class extends vn{constructor(e,t,n,s){super(e,t,n,s)}};yo.prototype.ValueTypeName="color";var Ti=class extends vn{constructor(e,t,n,s){super(e,t,n,s)}};Ti.prototype.ValueTypeName="number";var hc=class extends oi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Ft.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ai=class extends vn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new hc(this.times,this.values,this.getValueSize(),e)}};Ai.prototype.ValueTypeName="quaternion";Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends vn{constructor(e,t,n){super(e,t,n)}};wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=xs;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends vn{constructor(e,t,n,s){super(e,t,n,s)}};Xi.prototype.ValueTypeName="vector";var vo=class{constructor(e="",t=-1,n=[],s=xd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Fn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Jg(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(vn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=Yg(c);c=Hf(c,1,h),l=Hf(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ti(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Kg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ti;case"vector":case"vector2":case"vector3":case"vector4":return Xi;case"color":return yo;case"quaternion":return Ai;case"bool":case"boolean":return Ei;case"string":return wi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Jg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Kg(i.type);if(i.times===void 0){let t=[],n=[];Zg(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var ni={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(kf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!kf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function kf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var uc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],m=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Od=new uc,Yn=class{constructor(e){this.manager=e!==void 0?e:Od,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Yn.DEFAULT_MATERIAL_NAME="__DEFAULT";var _i={},_h=class extends Error{constructor(e,t){super(e),this.response=t}},As=class extends Yn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ni.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(_i[e]!==void 0){_i[e].push({onLoad:t,onProgress:n,onError:s});return}_i[e]=[],_i[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ae("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=_i[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0,x=0,p=new ReadableStream({start(g){S();function S(){u.read().then(({done:M,value:v})=>{if(M)g.close();else{x+=v.byteLength;let A=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:d});for(let E=0,R=h.length;E<R;E++){let _=h[E];_.onProgress&&_.onProgress(A)}g.enqueue(v),S()}},M=>{g.error(M)})}}});return new Response(p)}else throw new _h(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{ni.add(`file:${e}`,l);let h=_i[e];delete _i[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=_i[e];if(h===void 0)throw this.manager.itemError(e),l;delete _i[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var sr=new WeakMap,fc=class extends Yn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ni.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=sr.get(o);u===void 0&&(u=[],sr.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=hr("img");function c(){h(),t&&t(this);let u=sr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}sr.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),ni.remove(`image:${e}`);let f=sr.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(u)}sr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ni.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var ai=class extends Yn{constructor(e){super(e)}load(e,t,n,s){let r=new Kt,o=new fc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},qi=class extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Mo=class extends qi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},sh=new Xe,Gf=new L,Vf=new L,So=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gr,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Gf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gf),Vf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vf),t.updateMatrixWorld(),sh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sh,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===lr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Pa=new L,La=new Ft,ei=new L,bo=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Pa,La,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pa,La,ei.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Pa,La,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pa,La,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Hi=new L,Wf=new ue,Xf=new ue,qt=class extends bo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,Wf,Xf),t.subVectors(Xf,Wf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},yh=class extends So{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ys*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Eo=class extends qi{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new yh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},vh=class extends So{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0}},Ri=class extends qi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new vh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Yi=class extends bo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Mh=class extends So{constructor(){super(new Yi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ws=class extends qi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new Mh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},To=class extends qi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ci=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var rh=new WeakMap,Ao=class extends Yn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ae("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ae("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ni.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{rh.has(o)===!0?(s&&s(rh.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){ni.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),rh.set(c,l),ni.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ni.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Na,wo=class{static getContext(){return Na===void 0&&(Na=new(window.AudioContext||window.webkitAudioContext)),Na}static setContext(e){Na=e}},Ro=class extends Yn{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new As(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{let l=c.slice(0),h=wo.getContext(),u=e+"#decode";r.manager.itemStart(u),h.decodeAudioData(l,function(f){t(f),r.manager.itemEnd(u)}).catch(function(f){a(f),r.manager.itemEnd(u)})}catch(l){a(l)}},n,s);function a(c){s?s(c):We(c),r.manager.itemError(e)}}};var rr=-90,or=1,dc=class extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qt(rr,or,e,t);s.layers=this.layers,this.add(s);let r=new qt(rr,or,e,t);r.layers=this.layers,this.add(r);let o=new qt(rr,or,e,t);o.layers=this.layers,this.add(o);let a=new qt(rr,or,e,t);a.layers=this.layers,this.add(a);let c=new qt(rr,or,e,t);c.layers=this.layers,this.add(c);let l=new qt(rr,or,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},pc=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},mc=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=$g.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function $g(){this._document.hidden===!1&&this.reset()}var as=new L,oh=new Ft,jg=new L,cs=new L,ls=new L,Co=class extends Rt{constructor(){super(),this.type="AudioListener",this.context=wo.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new mc}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();let t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(as,oh,jg),cs.set(0,0,-1).applyQuaternion(oh),ls.set(0,1,0).applyQuaternion(oh),t.positionX){let n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(as.x,n),t.positionY.linearRampToValueAtTime(as.y,n),t.positionZ.linearRampToValueAtTime(as.z,n),t.forwardX.linearRampToValueAtTime(cs.x,n),t.forwardY.linearRampToValueAtTime(cs.y,n),t.forwardZ.linearRampToValueAtTime(cs.z,n),t.upX.linearRampToValueAtTime(ls.x,n),t.upY.linearRampToValueAtTime(ls.y,n),t.upZ.linearRampToValueAtTime(ls.z,n)}else t.setPosition(as.x,as.y,as.z),t.setOrientation(cs.x,cs.y,cs.z,ls.x,ls.y,ls.z)}},gc=class extends Rt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){Ae("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Ae("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Ae("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){Ae("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){Ae("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Ae("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){Ae("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(Ae("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}},hs=new L,qf=new Ft,Qg=new L,us=new L,Io=class extends gc{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(hs,qf,Qg),us.set(0,0,1).applyQuaternion(qf);let t=this.panner;if(t.positionX){let n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(hs.x,n),t.positionY.linearRampToValueAtTime(hs.y,n),t.positionZ.linearRampToValueAtTime(hs.z,n),t.orientationX.linearRampToValueAtTime(us.x,n),t.orientationY.linearRampToValueAtTime(us.y,n),t.orientationZ.linearRampToValueAtTime(us.z,n)}else t.setPosition(hs.x,hs.y,hs.z),t.setOrientation(us.x,us.y,us.z)}};var Xh="\\[\\]\\.:\\/",e0=new RegExp("["+Xh+"]","g"),qh="[^"+Xh+"]",t0="[^"+Xh.replace("\\.","")+"]",n0=/((?:WC+[\/:])*)/.source.replace("WC",qh),i0=/(WCOD+)?/.source.replace("WCOD",t0),s0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qh),r0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qh),o0=new RegExp("^"+n0+i0+s0+r0+"$"),a0=["material","materials","bones","map"],Sh=class{constructor(e,t,n){let s=n||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},wt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(e0,"")}static parseTrackName(e){let t=o0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);a0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;We("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=Sh;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gb=new Float32Array(1);var bh=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function Yh(i,e,t,n){let s=c0(n);switch(t){case Bh:return i*e;case Ec:return i*e/s.components*s.byteLength;case Tc:return i*e/s.components*s.byteLength;case Ji:return i*e*2/s.components*s.byteLength;case Ac:return i*e*2/s.components*s.byteLength;case zh:return i*e*3/s.components*s.byteLength;case Pn:return i*e*4/s.components*s.byteLength;case wc:return i*e*4/s.components*s.byteLength;case Uo:case Fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Oo:case Bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cc:case Pc:return Math.max(i,16)*Math.max(e,8)/4;case Rc:case Ic:return Math.max(i,8)*Math.max(e,8)/2;case Lc:case Nc:case Uc:case Fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Dc:case zo:case Oc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Hc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case kc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case qc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Kc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Jc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $c:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case jc:case Qc:case el:return Math.ceil(i/4)*Math.ceil(e/4)*16;case tl:case nl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ho:case il:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function c0(i){switch(i){case Mn:case Dh:return{byteLength:1,components:1};case Er:case Uh:case li:return{byteLength:2,components:1};case Sc:case bc:return{byteLength:2,components:4};case Jn:case Mc:case In:return{byteLength:4,components:1};case Fh:case Oh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function op(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function h0(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let x=u[d];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var u0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f0=`#ifdef USE_ALPHAHASH
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
#endif`,d0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x0=`#ifdef USE_AOMAP
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
#endif`,_0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y0=`#ifdef USE_BATCHING
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
#endif`,v0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,E0=`#ifdef USE_IRIDESCENCE
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
#endif`,T0=`#ifdef USE_BUMPMAP
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
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,I0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,P0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,N0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,D0=`#define PI 3.141592653589793
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
} // validated`,U0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,F0=`vec3 transformedNormal = objectNormal;
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
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k0="gl_FragColor = linearToOutputTexel( gl_FragColor );",G0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,V0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j0=`#ifdef USE_GRADIENTMAP
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
}`,Q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ex=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ix=`#ifdef USE_ENVMAP
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
#endif`,sx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ox=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cx=`PhysicalMaterial material;
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
#endif`,lx=`uniform sampler2D dfgLUT;
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
}`,hx=`
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
#endif`,ux=`#if defined( RE_IndirectDiffuse )
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
#endif`,fx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,px=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_x=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mx=`#if defined( USE_POINTS_UV )
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
#endif`,Sx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ax=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wx=`#ifdef USE_MORPHTARGETS
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
#endif`,Rx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ix=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Dx=`#ifdef USE_NORMALMAP
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
#endif`,Ux=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ox=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jx=`float getShadowMask() {
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
}`,$x=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jx=`#ifdef USE_SKINNING
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
#endif`,Qx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e_=`#ifdef USE_SKINNING
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
#endif`,t_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,s_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,r_=`#ifdef USE_TRANSMISSION
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
#endif`,o_=`#ifdef USE_TRANSMISSION
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
#endif`,a_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,u_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f_=`uniform sampler2D t2D;
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
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,m_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x_=`#include <common>
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
}`,__=`#if DEPTH_PACKING == 3200
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
}`,y_=`#define DISTANCE
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
}`,v_=`#define DISTANCE
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
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b_=`uniform float scale;
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
}`,E_=`uniform vec3 diffuse;
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
}`,T_=`#include <common>
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
}`,A_=`uniform vec3 diffuse;
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
}`,w_=`#define LAMBERT
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
}`,R_=`#define LAMBERT
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
}`,C_=`#define MATCAP
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
}`,I_=`#define MATCAP
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
}`,P_=`#define NORMAL
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
}`,L_=`#define NORMAL
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
}`,N_=`#define PHONG
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
}`,D_=`#define PHONG
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
}`,U_=`#define STANDARD
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
}`,F_=`#define STANDARD
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
}`,O_=`#define TOON
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
}`,B_=`#define TOON
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
}`,z_=`uniform float size;
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
}`,H_=`uniform vec3 diffuse;
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
}`,k_=`#include <common>
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
}`,G_=`uniform vec3 color;
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
}`,V_=`uniform float rotation;
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
}`,W_=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:u0,alphahash_pars_fragment:f0,alphamap_fragment:d0,alphamap_pars_fragment:p0,alphatest_fragment:m0,alphatest_pars_fragment:g0,aomap_fragment:x0,aomap_pars_fragment:_0,batching_pars_vertex:y0,batching_vertex:v0,begin_vertex:M0,beginnormal_vertex:S0,bsdfs:b0,iridescence_fragment:E0,bumpmap_pars_fragment:T0,clipping_planes_fragment:A0,clipping_planes_pars_fragment:w0,clipping_planes_pars_vertex:R0,clipping_planes_vertex:C0,color_fragment:I0,color_pars_fragment:P0,color_pars_vertex:L0,color_vertex:N0,common:D0,cube_uv_reflection_fragment:U0,defaultnormal_vertex:F0,displacementmap_pars_vertex:O0,displacementmap_vertex:B0,emissivemap_fragment:z0,emissivemap_pars_fragment:H0,colorspace_fragment:k0,colorspace_pars_fragment:G0,envmap_fragment:V0,envmap_common_pars_fragment:W0,envmap_pars_fragment:X0,envmap_pars_vertex:q0,envmap_physical_pars_fragment:ix,envmap_vertex:Y0,fog_vertex:Z0,fog_pars_vertex:K0,fog_fragment:J0,fog_pars_fragment:$0,gradientmap_pars_fragment:j0,lightmap_pars_fragment:Q0,lights_lambert_fragment:ex,lights_lambert_pars_fragment:tx,lights_pars_begin:nx,lights_toon_fragment:sx,lights_toon_pars_fragment:rx,lights_phong_fragment:ox,lights_phong_pars_fragment:ax,lights_physical_fragment:cx,lights_physical_pars_fragment:lx,lights_fragment_begin:hx,lights_fragment_maps:ux,lights_fragment_end:fx,lightprobes_pars_fragment:dx,logdepthbuf_fragment:px,logdepthbuf_pars_fragment:mx,logdepthbuf_pars_vertex:gx,logdepthbuf_vertex:xx,map_fragment:_x,map_pars_fragment:yx,map_particle_fragment:vx,map_particle_pars_fragment:Mx,metalnessmap_fragment:Sx,metalnessmap_pars_fragment:bx,morphinstance_vertex:Ex,morphcolor_vertex:Tx,morphnormal_vertex:Ax,morphtarget_pars_vertex:wx,morphtarget_vertex:Rx,normal_fragment_begin:Cx,normal_fragment_maps:Ix,normal_pars_fragment:Px,normal_pars_vertex:Lx,normal_vertex:Nx,normalmap_pars_fragment:Dx,clearcoat_normal_fragment_begin:Ux,clearcoat_normal_fragment_maps:Fx,clearcoat_pars_fragment:Ox,iridescence_pars_fragment:Bx,opaque_fragment:zx,packing:Hx,premultiplied_alpha_fragment:kx,project_vertex:Gx,dithering_fragment:Vx,dithering_pars_fragment:Wx,roughnessmap_fragment:Xx,roughnessmap_pars_fragment:qx,shadowmap_pars_fragment:Yx,shadowmap_pars_vertex:Zx,shadowmap_vertex:Kx,shadowmask_pars_fragment:Jx,skinbase_vertex:$x,skinning_pars_vertex:jx,skinning_vertex:Qx,skinnormal_vertex:e_,specularmap_fragment:t_,specularmap_pars_fragment:n_,tonemapping_fragment:i_,tonemapping_pars_fragment:s_,transmission_fragment:r_,transmission_pars_fragment:o_,uv_pars_fragment:a_,uv_pars_vertex:c_,uv_vertex:l_,worldpos_vertex:h_,background_vert:u_,background_frag:f_,backgroundCube_vert:d_,backgroundCube_frag:p_,cube_vert:m_,cube_frag:g_,depth_vert:x_,depth_frag:__,distance_vert:y_,distance_frag:v_,equirect_vert:M_,equirect_frag:S_,linedashed_vert:b_,linedashed_frag:E_,meshbasic_vert:T_,meshbasic_frag:A_,meshlambert_vert:w_,meshlambert_frag:R_,meshmatcap_vert:C_,meshmatcap_frag:I_,meshnormal_vert:P_,meshnormal_frag:L_,meshphong_vert:N_,meshphong_frag:D_,meshphysical_vert:U_,meshphysical_frag:F_,meshtoon_vert:O_,meshtoon_frag:B_,points_vert:z_,points_frag:H_,shadow_vert:k_,shadow_frag:G_,sprite_vert:V_,sprite_frag:W_},Me={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},ui={basic:{uniforms:un([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:un([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ve(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:un([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:un([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:un([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new ve(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:un([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:un([Me.points,Me.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:un([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:un([Me.common,Me.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:un([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:un([Me.sprite,Me.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:un([Me.common,Me.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:un([Me.lights,Me.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};ui.physical={uniforms:un([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var ol={r:0,b:0,g:0},X_=new Xe,ap=new $e;ap.set(-1,0,0,0,1,0,0,0,1);function q_(i,e,t,n,s,r){let o=new ve(0),a=s===!0?0:1,c,l,h=null,u=0,f=null;function d(S){let M=S.isScene===!0?S.background:null;if(M&&M.isTexture){let v=S.backgroundBlurriness>0;M=e.get(M,v)}return M}function m(S){let M=!1,v=d(S);v===null?p(o,a):v&&v.isColor&&(p(v,1),M=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(S,M){let v=d(M);v&&(v.isCubeTexture||v.mapping===Do)?(l===void 0&&(l=new Ne(new et(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:Is(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(X_.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ap),l.material.toneMapped=rt.getTransfer(v.colorSpace)!==xt,(h!==v||u!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ne(new Jt(2,2),new mn({name:"BackgroundMaterial",uniforms:Is(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=rt.getTransfer(v.colorSpace)!==xt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,M){S.getRGB(ol,Wh(i)),t.buffers.color.setClear(ol.r,ol.g,ol.b,M,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,M=1){o.set(S),a=M,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,p(o,a)},render:m,addToRenderList:x,dispose:g}}function Y_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(C,P,W,Y,U){let H=!1,G=u(C,Y,W,P);r!==G&&(r=G,l(r.object)),H=d(C,Y,W,U),H&&m(C,Y,W,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,v(C,P,W,Y),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return i.createVertexArray()}function l(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function u(C,P,W,Y){let U=Y.wireframe===!0,H=n[P.id];H===void 0&&(H={},n[P.id]=H);let G=C.isInstancedMesh===!0?C.id:0,j=H[G];j===void 0&&(j={},H[G]=j);let ne=j[W.id];ne===void 0&&(ne={},j[W.id]=ne);let le=ne[U];return le===void 0&&(le=f(c()),ne[U]=le),le}function f(C){let P=[],W=[],Y=[];for(let U=0;U<t;U++)P[U]=0,W[U]=0,Y[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:W,attributeDivisors:Y,object:C,attributes:{},index:null}}function d(C,P,W,Y){let U=r.attributes,H=P.attributes,G=0,j=W.getAttributes();for(let ne in j)if(j[ne].location>=0){let he=U[ne],_e=H[ne];if(_e===void 0&&(ne==="instanceMatrix"&&C.instanceMatrix&&(_e=C.instanceMatrix),ne==="instanceColor"&&C.instanceColor&&(_e=C.instanceColor)),he===void 0||he.attribute!==_e||_e&&he.data!==_e.data)return!0;G++}return r.attributesNum!==G||r.index!==Y}function m(C,P,W,Y){let U={},H=P.attributes,G=0,j=W.getAttributes();for(let ne in j)if(j[ne].location>=0){let he=H[ne];he===void 0&&(ne==="instanceMatrix"&&C.instanceMatrix&&(he=C.instanceMatrix),ne==="instanceColor"&&C.instanceColor&&(he=C.instanceColor));let _e={};_e.attribute=he,he&&he.data&&(_e.data=he.data),U[ne]=_e,G++}r.attributes=U,r.attributesNum=G,r.index=Y}function x(){let C=r.newAttributes;for(let P=0,W=C.length;P<W;P++)C[P]=0}function p(C){g(C,0)}function g(C,P){let W=r.newAttributes,Y=r.enabledAttributes,U=r.attributeDivisors;W[C]=1,Y[C]===0&&(i.enableVertexAttribArray(C),Y[C]=1),U[C]!==P&&(i.vertexAttribDivisor(C,P),U[C]=P)}function S(){let C=r.newAttributes,P=r.enabledAttributes;for(let W=0,Y=P.length;W<Y;W++)P[W]!==C[W]&&(i.disableVertexAttribArray(W),P[W]=0)}function M(C,P,W,Y,U,H,G){G===!0?i.vertexAttribIPointer(C,P,W,U,H):i.vertexAttribPointer(C,P,W,Y,U,H)}function v(C,P,W,Y){x();let U=Y.attributes,H=W.getAttributes(),G=P.defaultAttributeValues;for(let j in H){let ne=H[j];if(ne.location>=0){let le=U[j];if(le===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),le!==void 0){let he=le.normalized,_e=le.itemSize,ze=e.get(le);if(ze===void 0)continue;let Ve=ze.buffer,De=ze.type,Q=ze.bytesPerElement,ge=De===i.INT||De===i.UNSIGNED_INT||le.gpuType===Mc;if(le.isInterleavedBufferAttribute){let ae=le.data,Le=ae.stride,qe=le.offset;if(ae.isInstancedInterleavedBuffer){for(let He=0;He<ne.locationSize;He++)g(ne.location+He,ae.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let He=0;He<ne.locationSize;He++)p(ne.location+He);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let He=0;He<ne.locationSize;He++)M(ne.location+He,_e/ne.locationSize,De,he,Le*Q,(qe+_e/ne.locationSize*He)*Q,ge)}else{if(le.isInstancedBufferAttribute){for(let ae=0;ae<ne.locationSize;ae++)g(ne.location+ae,le.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ae=0;ae<ne.locationSize;ae++)p(ne.location+ae);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let ae=0;ae<ne.locationSize;ae++)M(ne.location+ae,_e/ne.locationSize,De,he,_e*Q,_e/ne.locationSize*ae*Q,ge)}}else if(G!==void 0){let he=G[j];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(ne.location,he);break;case 3:i.vertexAttrib3fv(ne.location,he);break;case 4:i.vertexAttrib4fv(ne.location,he);break;default:i.vertexAttrib1fv(ne.location,he)}}}}S()}function A(){T();for(let C in n){let P=n[C];for(let W in P){let Y=P[W];for(let U in Y){let H=Y[U];for(let G in H)h(H[G].object),delete H[G];delete Y[U]}}delete n[C]}}function E(C){if(n[C.id]===void 0)return;let P=n[C.id];for(let W in P){let Y=P[W];for(let U in Y){let H=Y[U];for(let G in H)h(H[G].object),delete H[G];delete Y[U]}}delete n[C.id]}function R(C){for(let P in n){let W=n[P];for(let Y in W){let U=W[Y];if(U[C.id]===void 0)continue;let H=U[C.id];for(let G in H)h(H[G].object),delete H[G];delete U[C.id]}}}function _(C){for(let P in n){let W=n[P],Y=C.isInstancedMesh===!0?C.id:0,U=W[Y];if(U!==void 0){for(let H in U){let G=U[H];for(let j in G)h(G[j].object),delete G[j];delete U[H]}delete W[Y],Object.keys(W).length===0&&delete n[P]}}}function T(){I(),o=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:p,disableUnusedAttributes:S}}function Z_(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let d=0;d<h;d++)f+=l[d];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function K_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Pn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let _=R===li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Mn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==In&&!_)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ae("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:v,maxSamples:A,samples:E}}function J_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ti,a=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,g=i.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):l();else{let S=r?0:n,M=S*4,v=g.clippingState||null;c.value=v,v=h(m,f,M,d);for(let A=0;A!==M;++A)v[A]=t[A];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,m){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=c.value,m!==!0||p===null){let g=d+x*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<g)&&(p=new Float32Array(g));for(let M=0,v=d;M!==x;++M,v+=4)o.copy(u[M]).applyMatrix4(S,a),o.normal.toArray(p,v),p[v+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var ji=4,Bd=[.125,.215,.35,.446,.526,.582],Ps=20,$_=256,Vo=new Yi,zd=new ve,Zh=null,Kh=0,Jh=0,$h=!1,j_=new L,cl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=j_}=r;Zh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zh,Kh,Jh),this._renderer.xr.enabled=$h,e.scissorTest=!1,wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zi||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:li,format:Pn,colorSpace:pn,depthBuffer:!1},s=Hd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hd(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Q_(r)),this._blurMaterial=ty(r,e,t),this._ggxMaterial=ey(r,e,t)}return s}_compileMaterial(e){let t=new Ne(new gt,e);this._renderer.compile(t,Vo)}_sceneToCubeUV(e,t,n,s,r){let c=new qt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(zd),u.toneMapping=Zn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ne(new et,new Yt({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,p=x.material,g=!1,S=e.background;S?S.isColor&&(p.color.copy(S),e.background=null,g=!0):(p.color.copy(zd),g=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[M],r.y,r.z)):v===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[M]));let A=this._cubeSize;wr(s,v*A,M>2?A:0,A,A),u.setRenderTarget(s),g&&u.render(x,c),u.render(e,c)}u.toneMapping=d,u.autoClear=f,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Zi||e.mapping===Rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;wr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Vo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),f=0+l*1.25,d=u*f,{_lodMax:m}=this,x=this._sizeLods[n],p=3*x*(n>m-ji?n-m+ji:0),g=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=m-t,wr(r,p,g,3*x,2*x),s.setRenderTarget(r),s.render(a,Vo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,wr(e,p,g,3*x,2*x),s.setRenderTarget(e),s.render(a,Vo)}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&We("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[s];u.material=l;let f=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ps-1),x=r/m,p=isFinite(r)?1+Math.floor(h*x):Ps;p>Ps&&Ae(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ps}`);let g=[],S=0;for(let R=0;R<Ps;++R){let _=R/x,T=Math.exp(-_*_/2);g.push(T),R===0?S+=T:R<p&&(S+=2*T)}for(let R=0;R<g.length;R++)g[R]=g[R]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=m,f.mipInt.value=M-n;let v=this._sizeLods[s],A=3*v*(s>M-ji?s-M+ji:0),E=4*(this._cubeSize-v);wr(t,A,E,3*v,2*v),c.setRenderTarget(t),c.render(u,Vo)}};function Q_(i){let e=[],t=[],n=[],s=i,r=i-ji+1+Bd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ji?c=Bd[o-i+ji-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,x=3,p=2,g=1,S=new Float32Array(x*m*d),M=new Float32Array(p*m*d),v=new Float32Array(g*m*d);for(let E=0;E<d;E++){let R=E%3*2/3-1,_=E>2?0:-1,T=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];S.set(T,x*m*E),M.set(f,p*m*E);let I=[E,E,E,E,E,E];v.set(I,g*m*E)}let A=new gt;A.setAttribute("position",new kt(S,x)),A.setAttribute("uv",new kt(M,p)),A.setAttribute("faceIndex",new kt(v,g)),n.push(new Ne(A,null)),s>ji&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Hd(i,e,t){let n=new wn(i,e,t);return n.texture.mapping=Do,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ey(i,e,t){return new mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ul(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function ty(i,e,t){let n=new Float32Array(Ps),s=new L(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ul(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function kd(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Gd(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function ul(){return`

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
	`}var ll=class extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ao(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new et(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:ci});r.uniforms.tEquirect.value=t;let o=new Ne(s,r),a=t.minFilter;return t.minFilter===Kn&&(t.minFilter=Vt),new dc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function ny(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===_c||d===yc)if(e.has(f)){let m=e.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let x=new ll(m.height);return x.fromEquirectangularTexture(i,f),e.set(f,x),f.addEventListener("dispose",l),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,m=d===_c||d===yc,x=d===Zi||d===Rs;if(m||x){let p=t.get(f),g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new cl(i)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{let S=f.image;return m&&S&&S.height>0||x&&S&&c(S)?(n===null&&(n=new cl(i)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function a(f,d){return d===_c?f.mapping=Zi:d===yc&&(f.mapping=Rs),f}function c(f){let d=0,m=6;for(let x=0;x<m;x++)f[x]!==void 0&&d++;return d===m}function l(f){let d=f.target;d.removeEventListener("dispose",l);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function iy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ps("WebGLRenderer: "+n+" extension not supported."),s}}}function sy(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let d in f)e.update(f[d],i.ARRAY_BUFFER)}function l(u){let f=[],d=u.index,m=u.attributes.position,x=0;if(m===void 0)return;if(d!==null){let S=d.array;x=d.version;for(let M=0,v=S.length;M<v;M+=3){let A=S[M+0],E=S[M+1],R=S[M+2];f.push(A,E,E,R,R,A)}}else{let S=m.array;x=m.version;for(let M=0,v=S.length/3-1;M<v;M+=3){let A=M+0,E=M+1,R=M+2;f.push(A,E,E,R,R,A)}}let p=new(m.count>=65535?no:to)(f,1);p.version=x;let g=r.get(u);g&&e.remove(g),r.set(u,p)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function ry(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){i.drawElements(n,f,r,u*o),t.update(f,n,1)}function l(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let x=0;for(let p=0;p<d;p++)x+=f[p];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function oy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:We("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ay(i,e,t){let n=new WeakMap,s=new Mt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let T=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],M=0;d===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let v=a.attributes.position.count*M,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*A*4*u),R=new $r(E,v,A,u);R.type=In,R.needsUpdate=!0;let _=M*4;for(let I=0;I<u;I++){let C=p[I],P=g[I],W=S[I],Y=v*A*4*I;for(let U=0;U<C.count;U++){let H=U*_;d===!0&&(s.fromBufferAttribute(C,U),E[Y+H+0]=s.x,E[Y+H+1]=s.y,E[Y+H+2]=s.z,E[Y+H+3]=0),m===!0&&(s.fromBufferAttribute(P,U),E[Y+H+4]=s.x,E[Y+H+5]=s.y,E[Y+H+6]=s.z,E[Y+H+7]=0),x===!0&&(s.fromBufferAttribute(W,U),E[Y+H+8]=s.x,E[Y+H+9]=s.y,E[Y+H+10]=s.z,E[Y+H+11]=W.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new ue(v,A)},n.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let m=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function cy(i,e,t,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var ly={[wh]:"LINEAR_TONE_MAPPING",[Rh]:"REINHARD_TONE_MAPPING",[Ch]:"CINEON_TONE_MAPPING",[No]:"ACES_FILMIC_TONE_MAPPING",[Ph]:"AGX_TONE_MAPPING",[Lh]:"NEUTRAL_TONE_MAPPING",[Ih]:"CUSTOM_TONE_MAPPING"};function hy(i,e,t,n,s,r){let o=new wn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Si(e,t):void 0}),a=new wn(e,t,{type:li,depthBuffer:!1,stencilBuffer:!1}),c=new gt;c.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Je([0,2,0,0,2,0],2));let l=new ic({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ne(c,l),u=new Yi(-1,1,1,-1,0,1),f=null,d=null,m=!1,x,p=null,g=[],S=!1;this.setSize=function(M,v){o.setSize(M,v),a.setSize(M,v);for(let A=0;A<g.length;A++){let E=g[A];E.setSize&&E.setSize(M,v)}},this.setEffects=function(M){g=M,S=g.length>0&&g[0].isRenderPass===!0;let v=o.width,A=o.height;for(let E=0;E<g.length;E++){let R=g[E];R.setSize&&R.setSize(v,A)}},this.begin=function(M,v){if(m||M.toneMapping===Zn&&g.length===0)return!1;if(p=v,v!==null){let A=v.width,E=v.height;(o.width!==A||o.height!==E)&&this.setSize(A,E)}return S===!1&&M.setRenderTarget(o),x=M.toneMapping,M.toneMapping=Zn,!0},this.hasRenderPass=function(){return S},this.end=function(M,v){M.toneMapping=x,m=!0;let A=o,E=a;for(let R=0;R<g.length;R++){let _=g[R];if(_.enabled!==!1&&(_.render(M,E,A,v),_.needsSwap!==!1)){let T=A;A=E,E=T}}if(f!==M.outputColorSpace||d!==M.toneMapping){f=M.outputColorSpace,d=M.toneMapping,l.defines={},rt.getTransfer(f)===xt&&(l.defines.SRGB_TRANSFER="");let R=ly[d];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=A.texture,M.setRenderTarget(p),M.render(h,u),p=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}var cp=new Kt,eu=new Si(1,1),lp=new $r,hp=new Ya,up=new ao,Vd=[],Wd=[],Xd=new Float32Array(16),qd=new Float32Array(9),Yd=new Float32Array(4);function Cr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Vd[s];if(r===void 0&&(r=new Float32Array(s),Vd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function $t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fl(i,e){let t=Wd[e];t===void 0&&(t=new Int32Array(e),Wd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function uy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function fy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2fv(this.addr,e),jt(t,e)}}function dy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;i.uniform3fv(this.addr,e),jt(t,e)}}function py(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4fv(this.addr,e),jt(t,e)}}function my(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if($t(t,n))return;Yd.set(n),i.uniformMatrix2fv(this.addr,!1,Yd),jt(t,n)}}function gy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if($t(t,n))return;qd.set(n),i.uniformMatrix3fv(this.addr,!1,qd),jt(t,n)}}function xy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if($t(t,n))return;Xd.set(n),i.uniformMatrix4fv(this.addr,!1,Xd),jt(t,n)}}function _y(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function yy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2iv(this.addr,e),jt(t,e)}}function vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3iv(this.addr,e),jt(t,e)}}function My(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4iv(this.addr,e),jt(t,e)}}function Sy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function by(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2uiv(this.addr,e),jt(t,e)}}function Ey(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3uiv(this.addr,e),jt(t,e)}}function Ty(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4uiv(this.addr,e),jt(t,e)}}function Ay(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(eu.compareFunction=t.isReversedDepthBuffer()?rl:sl,r=eu):r=cp,t.setTexture2D(e||r,s)}function wy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||hp,s)}function Ry(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||up,s)}function Cy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||lp,s)}function Iy(i){switch(i){case 5126:return uy;case 35664:return fy;case 35665:return dy;case 35666:return py;case 35674:return my;case 35675:return gy;case 35676:return xy;case 5124:case 35670:return _y;case 35667:case 35671:return yy;case 35668:case 35672:return vy;case 35669:case 35673:return My;case 5125:return Sy;case 36294:return by;case 36295:return Ey;case 36296:return Ty;case 35678:case 36198:case 36298:case 36306:case 35682:return Ay;case 35679:case 36299:case 36307:return wy;case 35680:case 36300:case 36308:case 36293:return Ry;case 36289:case 36303:case 36311:case 36292:return Cy}}function Py(i,e){i.uniform1fv(this.addr,e)}function Ly(i,e){let t=Cr(e,this.size,2);i.uniform2fv(this.addr,t)}function Ny(i,e){let t=Cr(e,this.size,3);i.uniform3fv(this.addr,t)}function Dy(i,e){let t=Cr(e,this.size,4);i.uniform4fv(this.addr,t)}function Uy(i,e){let t=Cr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Fy(i,e){let t=Cr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Oy(i,e){let t=Cr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function By(i,e){i.uniform1iv(this.addr,e)}function zy(i,e){i.uniform2iv(this.addr,e)}function Hy(i,e){i.uniform3iv(this.addr,e)}function ky(i,e){i.uniform4iv(this.addr,e)}function Gy(i,e){i.uniform1uiv(this.addr,e)}function Vy(i,e){i.uniform2uiv(this.addr,e)}function Wy(i,e){i.uniform3uiv(this.addr,e)}function Xy(i,e){i.uniform4uiv(this.addr,e)}function qy(i,e,t){let n=this.cache,s=e.length,r=fl(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=eu:o=cp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Yy(i,e,t){let n=this.cache,s=e.length,r=fl(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||hp,r[o])}function Zy(i,e,t){let n=this.cache,s=e.length,r=fl(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||up,r[o])}function Ky(i,e,t){let n=this.cache,s=e.length,r=fl(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||lp,r[o])}function Jy(i){switch(i){case 5126:return Py;case 35664:return Ly;case 35665:return Ny;case 35666:return Dy;case 35674:return Uy;case 35675:return Fy;case 35676:return Oy;case 5124:case 35670:return By;case 35667:case 35671:return zy;case 35668:case 35672:return Hy;case 35669:case 35673:return ky;case 5125:return Gy;case 36294:return Vy;case 36295:return Wy;case 36296:return Xy;case 35678:case 36198:case 36298:case 36306:case 35682:return qy;case 35679:case 36299:case 36307:return Yy;case 35680:case 36300:case 36308:case 36293:return Zy;case 36289:case 36303:case 36311:case 36292:return Ky}}var tu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Iy(t.type)}},nu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jy(t.type)}},iu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},jh=/(\w+)(\])?(\[|\.)?/g;function Zd(i,e){i.seq.push(e),i.map[e.id]=e}function $y(i,e,t){let n=i.name,s=n.length;for(jh.lastIndex=0;;){let r=jh.exec(n),o=jh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Zd(t,l===void 0?new tu(a,i,e):new nu(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new iu(a),Zd(t,u)),t=u}}}var Rr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);$y(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Kd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var jy=37297,Qy=0;function ev(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Jd=new $e;function tv(i){rt._getMatrix(Jd,rt.workingColorSpace,i);let e=`mat3( ${Jd.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(i)){case Kr:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function $d(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+ev(i.getShaderSource(e),a)}else return r}function nv(i,e){let t=tv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var iv={[wh]:"Linear",[Rh]:"Reinhard",[Ch]:"Cineon",[No]:"ACESFilmic",[Ph]:"AgX",[Lh]:"Neutral",[Ih]:"Custom"};function sv(i,e){let t=iv[e];return t===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var al=new L;function rv(){rt.getLuminanceCoefficients(al);let i=al.x.toFixed(4),e=al.y.toFixed(4),t=al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ov(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function av(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Xo(i){return i!==""}function jd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var lv=/^[ \t]*#include +<([\w\d./]+)>/gm;function su(i){return i.replace(lv,uv)}var hv=new Map;function uv(i,e){let t=it[e];if(t===void 0){let n=hv.get(e);if(n!==void 0)t=it[n],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return su(t)}var fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ep(i){return i.replace(fv,dv)}function dv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var pv={[Po]:"SHADOWMAP_TYPE_PCF",[Sr]:"SHADOWMAP_TYPE_VSM"};function mv(i){return pv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var gv={[Zi]:"ENVMAP_TYPE_CUBE",[Rs]:"ENVMAP_TYPE_CUBE",[Do]:"ENVMAP_TYPE_CUBE_UV"};function xv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":gv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var _v={[Rs]:"ENVMAP_MODE_REFRACTION"};function yv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":_v[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var vv={[xc]:"ENVMAP_BLENDING_MULTIPLY",[pd]:"ENVMAP_BLENDING_MIX",[md]:"ENVMAP_BLENDING_ADD"};function Mv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":vv[i.combine]||"ENVMAP_BLENDING_NONE"}function Sv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function bv(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=mv(t),l=xv(t),h=yv(t),u=Mv(t),f=Sv(t),d=ov(t),m=av(r),x=s.createProgram(),p,g,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Xo).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Xo).join(`
`),g.length>0&&(g+=`
`)):(p=[tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),g=[tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?it.tonemapping_pars_fragment:"",t.toneMapping!==Zn?sv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,nv("linearToOutputTexel",t.outputColorSpace),rv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xo).join(`
`)),o=su(o),o=jd(o,t),o=Qd(o,t),a=su(a),a=jd(a,t),a=Qd(a,t),o=ep(o),a=ep(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let M=S+p+o,v=S+g+a,A=Kd(s,s.VERTEX_SHADER,M),E=Kd(s,s.FRAGMENT_SHADER,v);s.attachShader(x,A),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(C){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(x)||"",W=s.getShaderInfoLog(A)||"",Y=s.getShaderInfoLog(E)||"",U=P.trim(),H=W.trim(),G=Y.trim(),j=!0,ne=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,A,E);else{let le=$d(s,A,"vertex"),he=$d(s,E,"fragment");We("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+le+`
`+he)}else U!==""?Ae("WebGLProgram: Program Info Log:",U):(H===""||G==="")&&(ne=!1);ne&&(C.diagnostics={runnable:j,programLog:U,vertexShader:{log:H,prefix:p},fragmentShader:{log:G,prefix:g}})}s.deleteShader(A),s.deleteShader(E),_=new Rr(s,x),T=cv(s,x)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(x,jy)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=E,this}var Ev=0,ru=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ou(e),t.set(e,n)),n}},ou=class{constructor(e){this.id=Ev++,this.code=e,this.usedTimes=0}};function Tv(i){return i===Ji||i===zo||i===Ho}function Av(i,e,t,n,s,r){let o=new jr,a=new ru,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,T,I,C,P,W){let Y=C.fog,U=P.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,j=e.get(_.envMap||H,G),ne=j&&j.mapping===Do?j.image.height:null,le=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&Ae("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let he=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,_e=he!==void 0?he.length:0,ze=0;U.morphAttributes.position!==void 0&&(ze=1),U.morphAttributes.normal!==void 0&&(ze=2),U.morphAttributes.color!==void 0&&(ze=3);let Ve,De,Q,ge;if(le){let Te=ui[le];Ve=Te.vertexShader,De=Te.fragmentShader}else{Ve=_.vertexShader,De=_.fragmentShader;let Te=a.getVertexShaderStage(_),ft=a.getFragmentShaderStage(_);a.update(_,Te,ft),Q=Te.id,ge=ft.id}let ae=i.getRenderTarget(),Le=i.state.buffers.depth.getReversed(),qe=P.isInstancedMesh===!0,He=P.isBatchedMesh===!0,pt=!!_.map,Ye=!!_.matcap,te=!!j,ie=!!_.aoMap,q=!!_.lightMap,re=!!_.bumpMap&&_.wireframe===!1,se=!!_.normalMap,Oe=!!_.displacementMap,Ee=!!_.emissiveMap,ye=!!_.metalnessMap,ke=!!_.roughnessMap,N=_.anisotropy>0,at=_.clearcoat>0,Ke=_.dispersion>0,w=_.iridescence>0,y=_.sheen>0,O=_.transmission>0,z=N&&!!_.anisotropyMap,K=at&&!!_.clearcoatMap,ce=at&&!!_.clearcoatNormalMap,Z=at&&!!_.clearcoatRoughnessMap,B=w&&!!_.iridescenceMap,J=w&&!!_.iridescenceThicknessMap,oe=y&&!!_.sheenColorMap,Re=y&&!!_.sheenRoughnessMap,de=!!_.specularMap,pe=!!_.specularColorMap,Ue=!!_.specularIntensityMap,Pe=O&&!!_.transmissionMap,Ze=O&&!!_.thicknessMap,D=!!_.gradientMap,xe=!!_.alphaMap,$=_.alphaTest>0,fe=!!_.alphaHash,me=!!_.extensions,ee=Zn;_.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ee=i.toneMapping);let Ce={shaderID:le,shaderType:_.type,shaderName:_.name,vertexShader:Ve,fragmentShader:De,defines:_.defines,customVertexShaderID:Q,customFragmentShaderID:ge,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:He,batchingColor:He&&P._colorsTexture!==null,instancing:qe,instancingColor:qe&&P.instanceColor!==null,instancingMorph:qe&&P.morphTexture!==null,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:pt,matcap:Ye,envMap:te,envMapMode:te&&j.mapping,envMapCubeUVHeight:ne,aoMap:ie,lightMap:q,bumpMap:re,normalMap:se,displacementMap:Oe,emissiveMap:Ee,normalMapObjectSpace:se&&_.normalMapType===yd,normalMapTangentSpace:se&&_.normalMapType===Go,packedNormalMap:se&&_.normalMapType===Go&&Tv(_.normalMap.format),metalnessMap:ye,roughnessMap:ke,anisotropy:N,anisotropyMap:z,clearcoat:at,clearcoatMap:K,clearcoatNormalMap:ce,clearcoatRoughnessMap:Z,dispersion:Ke,iridescence:w,iridescenceMap:B,iridescenceThicknessMap:J,sheen:y,sheenColorMap:oe,sheenRoughnessMap:Re,specularMap:de,specularColorMap:pe,specularIntensityMap:Ue,transmission:O,transmissionMap:Pe,thicknessMap:Ze,gradientMap:D,opaque:_.transparent===!1&&_.blending===ms&&_.alphaToCoverage===!1,alphaMap:xe,alphaTest:$,alphaHash:fe,combine:_.combine,mapUv:pt&&m(_.map.channel),aoMapUv:ie&&m(_.aoMap.channel),lightMapUv:q&&m(_.lightMap.channel),bumpMapUv:re&&m(_.bumpMap.channel),normalMapUv:se&&m(_.normalMap.channel),displacementMapUv:Oe&&m(_.displacementMap.channel),emissiveMapUv:Ee&&m(_.emissiveMap.channel),metalnessMapUv:ye&&m(_.metalnessMap.channel),roughnessMapUv:ke&&m(_.roughnessMap.channel),anisotropyMapUv:z&&m(_.anisotropyMap.channel),clearcoatMapUv:K&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:ce&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:B&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:J&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Re&&m(_.sheenRoughnessMap.channel),specularMapUv:de&&m(_.specularMap.channel),specularColorMapUv:pe&&m(_.specularColorMap.channel),specularIntensityMapUv:Ue&&m(_.specularIntensityMap.channel),transmissionMapUv:Pe&&m(_.transmissionMap.channel),thicknessMapUv:Ze&&m(_.thicknessMap.channel),alphaMapUv:xe&&m(_.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(se||N),vertexNormals:!!U.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!U.attributes.uv&&(pt||xe),fog:!!Y,useFog:_.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||U.attributes.normal===void 0&&se===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Le,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:ze,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ee,decodeVideoTexture:pt&&_.map.isVideoTexture===!0&&rt.getTransfer(_.map.colorSpace)===xt,decodeVideoTextureEmissive:Ee&&_.emissiveMap.isVideoTexture===!0&&rt.getTransfer(_.emissiveMap.colorSpace)===xt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Et,flipSided:_.side===nn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:me&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&_.extensions.multiDraw===!0||He)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function p(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)T.push(I),T.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(g(T,_),S(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function g(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function S(_,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function M(_){let T=d[_.type],I;if(T){let C=ui[T];I=Fd.clone(C.uniforms)}else I=_.uniforms;return I}function v(_,T){let I=h.get(T);return I!==void 0?++I.usedTimes:(I=new bv(i,T,_,s),l.push(I),h.set(T,I)),I}function A(_){if(--_.usedTimes===0){let T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){a.remove(_)}function R(){a.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:M,acquireProgram:v,releaseProgram:A,releaseShaderCache:E,programs:l,dispose:R}}function wv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Rv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function np(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ip(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,x,p,g){let S=i[e];return S===void 0?(S={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:p,group:g},i[e]=S):(S.id=f.id,S.object=f,S.geometry=d,S.material=m,S.materialVariant=o(f),S.groupOrder=x,S.renderOrder=f.renderOrder,S.z=p,S.group=g),e++,S}function c(f,d,m,x,p,g){let S=a(f,d,m,x,p,g);m.transmission>0?n.push(S):m.transparent===!0?s.push(S):t.push(S)}function l(f,d,m,x,p,g){let S=a(f,d,m,x,p,g);m.transmission>0?n.unshift(S):m.transparent===!0?s.unshift(S):t.unshift(S)}function h(f,d,m){t.length>1&&t.sort(f||Rv),n.length>1&&n.sort(d||np),s.length>1&&s.sort(d||np),m&&(t.reverse(),n.reverse(),s.reverse())}function u(){for(let f=e,d=i.length;f<d;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function Cv(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new ip,i.set(n,[o])):s>=r.length?(o=new ip,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Iv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ve};break;case"SpotLight":t={position:new L,direction:new L,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Pv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Lv=0;function Nv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Dv(i){let e=new Iv,t=Pv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new Xe,o=new Xe;function a(l){let h=0,u=0,f=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let d=0,m=0,x=0,p=0,g=0,S=0,M=0,v=0,A=0,E=0,R=0;l.sort(Nv);for(let T=0,I=l.length;T<I;T++){let C=l[T],P=C.color,W=C.intensity,Y=C.distance,U=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ji?U=C.shadow.map.texture:U=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=P.r*W,u+=P.g*W,f+=P.b*W;else if(C.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(C.sh.coefficients[H],W);R++}else if(C.isDirectionalLight){let H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let G=C.shadow,j=t.get(C);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,n.directionalShadow[d]=j,n.directionalShadowMap[d]=U,n.directionalShadowMatrix[d]=C.shadow.matrix,S++}n.directional[d]=H,d++}else if(C.isSpotLight){let H=e.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(P).multiplyScalar(W),H.distance=Y,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,n.spot[x]=H;let G=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,G.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[x]=G.matrix,C.castShadow){let j=t.get(C);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,n.spotShadow[x]=j,n.spotShadowMap[x]=U,v++}x++}else if(C.isRectAreaLight){let H=e.get(C);H.color.copy(P).multiplyScalar(W),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=H,p++}else if(C.isPointLight){let H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){let G=C.shadow,j=t.get(C);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,j.shadowCameraNear=G.camera.near,j.shadowCameraFar=G.camera.far,n.pointShadow[m]=j,n.pointShadowMap[m]=U,n.pointShadowMatrix[m]=C.shadow.matrix,M++}n.point[m]=H,m++}else if(C.isHemisphereLight){let H=e.get(C);H.skyColor.copy(C.color).multiplyScalar(W),H.groundColor.copy(C.groundColor).multiplyScalar(W),n.hemi[g]=H,g++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let _=n.hash;(_.directionalLength!==d||_.pointLength!==m||_.spotLength!==x||_.rectAreaLength!==p||_.hemiLength!==g||_.numDirectionalShadows!==S||_.numPointShadows!==M||_.numSpotShadows!==v||_.numSpotMaps!==A||_.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,_.directionalLength=d,_.pointLength=m,_.spotLength=x,_.rectAreaLength=p,_.hemiLength=g,_.numDirectionalShadows=S,_.numPointShadows=M,_.numSpotShadows=v,_.numSpotMaps=A,_.numLightProbes=R,n.version=Lv++)}function c(l,h){let u=0,f=0,d=0,m=0,x=0,p=h.matrixWorldInverse;for(let g=0,S=l.length;g<S;g++){let M=l[g];if(M.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),u++}else if(M.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),d++}else if(M.isRectAreaLight){let v=n.rectArea[m];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(p),x++}}}return{setup:a,setupView:c,state:n}}function sp(i){let e=new Dv(i),t=[],n=[],s=[];function r(f){u.camera=f,t.length=0,n.length=0,s.length=0}function o(f){t.push(f)}function a(f){n.push(f)}function c(f){s.push(f)}function l(){e.setup(t)}function h(f){e.setupView(t,f)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Uv(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new sp(i),e.set(s,[a])):r>=o.length?(a=new sp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Fv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ov=`uniform sampler2D shadow_pass;
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
}`,Bv=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],zv=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],rp=new Xe,Wo=new L,Qh=new L;function Hv(i,e,t){let n=new gr,s=new ue,r=new ue,o=new Mt,a=new sc,c=new rc,l={},h=t.maxTextureSize,u={[qn]:nn,[nn]:qn,[Et]:Et},f=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:Fv,fragmentShader:Ov}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new gt;m.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ne(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Po;let g=this.type;this.render=function(E,R,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Kf&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Po);let T=i.getRenderTarget(),I=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),P=i.state;P.setBlending(ci),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let W=g!==this.type;W&&R.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(U=>U.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,U=E.length;Y<U;Y++){let H=E[Y],G=H.shadow;if(G===void 0){Ae("WebGLShadowMap:",H,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let j=G.getFrameExtents();s.multiply(j),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,G.mapSize.y=r.y));let ne=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=ne,G.map===null||W===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Sr){if(H.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new wn(s.x,s.y,{format:Ji,type:li,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),G.map.texture.name=H.name+".shadowMap",G.map.depthTexture=new Si(s.x,s.y,In),G.map.depthTexture.name=H.name+".shadowMapDepth",G.map.depthTexture.format=ii,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Gt,G.map.depthTexture.magFilter=Gt}else H.isPointLight?(G.map=new ll(s.x),G.map.depthTexture=new Ja(s.x,Jn)):(G.map=new wn(s.x,s.y),G.map.depthTexture=new Si(s.x,s.y,Jn)),G.map.depthTexture.name=H.name+".shadowMap",G.map.depthTexture.format=ii,this.type===Po?(G.map.depthTexture.compareFunction=ne?rl:sl,G.map.depthTexture.minFilter=Vt,G.map.depthTexture.magFilter=Vt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Gt,G.map.depthTexture.magFilter=Gt);G.camera.updateProjectionMatrix()}let le=G.map.isWebGLCubeRenderTarget?6:1;for(let he=0;he<le;he++){if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,he),i.clear();else{he===0&&(i.setRenderTarget(G.map),i.clear());let _e=G.getViewport(he);o.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),P.viewport(o)}if(H.isPointLight){let _e=G.camera,ze=G.matrix,Ve=H.distance||_e.far;Ve!==_e.far&&(_e.far=Ve,_e.updateProjectionMatrix()),Wo.setFromMatrixPosition(H.matrixWorld),_e.position.copy(Wo),Qh.copy(_e.position),Qh.add(Bv[he]),_e.up.copy(zv[he]),_e.lookAt(Qh),_e.updateMatrixWorld(),ze.makeTranslation(-Wo.x,-Wo.y,-Wo.z),rp.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),G._frustum.setFromProjectionMatrix(rp,_e.coordinateSystem,_e.reversedDepth)}else G.updateMatrices(H);n=G.getFrustum(),v(R,_,G.camera,H,this.type)}G.isPointLightShadow!==!0&&this.type===Sr&&S(G,_),G.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(T,I,C)};function S(E,R){let _=e.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new wn(s.x,s.y,{format:Ji,type:li})),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,_,f,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,_,d,x,null)}function M(E,R,_,T){let I=null,C=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)I=C;else if(I=_.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let P=I.uuid,W=R.uuid,Y=l[P];Y===void 0&&(Y={},l[P]=Y);let U=Y[W];U===void 0&&(U=I.clone(),Y[W]=U,R.addEventListener("dispose",A)),I=U}if(I.visible=R.visible,I.wireframe=R.wireframe,T===Sr?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:u[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,_.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let P=i.properties.get(I);P.light=_}return I}function v(E,R,_,T,I){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===Sr)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let W=e.update(E),Y=E.material;if(Array.isArray(Y)){let U=W.groups;for(let H=0,G=U.length;H<G;H++){let j=U[H],ne=Y[j.materialIndex];if(ne&&ne.visible){let le=M(E,ne,T,I);E.onBeforeShadow(i,E,R,_,W,le,j),i.renderBufferDirect(_,null,W,le,E,j),E.onAfterShadow(i,E,R,_,W,le,j)}}}else if(Y.visible){let U=M(E,Y,T,I);E.onBeforeShadow(i,E,R,_,W,U,null),i.renderBufferDirect(_,null,W,U,E,null),E.onAfterShadow(i,E,R,_,W,U,null)}}let P=E.children;for(let W=0,Y=P.length;W<Y;W++)v(P[W],R,_,T,I)}function A(E){E.target.removeEventListener("dispose",A);for(let _ in l){let T=l[_],I=E.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function kv(i,e){function t(){let D=!1,xe=new Mt,$=null,fe=new Mt(0,0,0,0);return{setMask:function(me){$!==me&&!D&&(i.colorMask(me,me,me,me),$=me)},setLocked:function(me){D=me},setClear:function(me,ee,Ce,Te,ft){ft===!0&&(me*=Te,ee*=Te,Ce*=Te),xe.set(me,ee,Ce,Te),fe.equals(xe)===!1&&(i.clearColor(me,ee,Ce,Te),fe.copy(xe))},reset:function(){D=!1,$=null,fe.set(-1,0,0,0)}}}function n(){let D=!1,xe=!1,$=null,fe=null,me=null;return{setReversed:function(ee){if(xe!==ee){let Ce=e.get("EXT_clip_control");ee?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),xe=ee;let Te=me;me=null,this.setClear(Te)}},getReversed:function(){return xe},setTest:function(ee){ee?ae(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(ee){$!==ee&&!D&&(i.depthMask(ee),$=ee)},setFunc:function(ee){if(xe&&(ee=Cd[ee]),fe!==ee){switch(ee){case Oa:i.depthFunc(i.NEVER);break;case Ba:i.depthFunc(i.ALWAYS);break;case za:i.depthFunc(i.LESS);break;case gs:i.depthFunc(i.LEQUAL);break;case Ha:i.depthFunc(i.EQUAL);break;case ka:i.depthFunc(i.GEQUAL);break;case Ga:i.depthFunc(i.GREATER);break;case Va:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=ee}},setLocked:function(ee){D=ee},setClear:function(ee){me!==ee&&(me=ee,xe&&(ee=1-ee),i.clearDepth(ee))},reset:function(){D=!1,$=null,fe=null,me=null,xe=!1}}}function s(){let D=!1,xe=null,$=null,fe=null,me=null,ee=null,Ce=null,Te=null,ft=null;return{setTest:function(dt){D||(dt?ae(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(dt){xe!==dt&&!D&&(i.stencilMask(dt),xe=dt)},setFunc:function(dt,Ct,ht){($!==dt||fe!==Ct||me!==ht)&&(i.stencilFunc(dt,Ct,ht),$=dt,fe=Ct,me=ht)},setOp:function(dt,Ct,ht){(ee!==dt||Ce!==Ct||Te!==ht)&&(i.stencilOp(dt,Ct,ht),ee=dt,Ce=Ct,Te=ht)},setLocked:function(dt){D=dt},setClear:function(dt){ft!==dt&&(i.clearStencil(dt),ft=dt)},reset:function(){D=!1,xe=null,$=null,fe=null,me=null,ee=null,Ce=null,Te=null,ft=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f={},d=new WeakMap,m=[],x=null,p=!1,g=null,S=null,M=null,v=null,A=null,E=null,R=null,_=new ve(0,0,0),T=0,I=!1,C=null,P=null,W=null,Y=null,U=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,j=0,ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(ne)[1]),G=j>=1):ne.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),G=j>=2);let le=null,he={},_e=i.getParameter(i.SCISSOR_BOX),ze=i.getParameter(i.VIEWPORT),Ve=new Mt().fromArray(_e),De=new Mt().fromArray(ze);function Q(D,xe,$,fe){let me=new Uint8Array(4),ee=i.createTexture();i.bindTexture(D,ee),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ce=0;Ce<$;Ce++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(xe+Ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return ee}let ge={};ge[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(i.DEPTH_TEST),o.setFunc(gs),re(!1),se(Eh),ae(i.CULL_FACE),ie(ci);function ae(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Le(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function qe(D,xe){return f[D]!==xe?(i.bindFramebuffer(D,xe),f[D]=xe,D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=xe),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function He(D,xe){let $=m,fe=!1;if(D){$=d.get(xe),$===void 0&&($=[],d.set(xe,$));let me=D.textures;if($.length!==me.length||$[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,Ce=me.length;ee<Ce;ee++)$[ee]=i.COLOR_ATTACHMENT0+ee;$.length=me.length,fe=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,fe=!0);fe&&i.drawBuffers($)}function pt(D){return x!==D?(i.useProgram(D),x=D,!0):!1}let Ye={[ki]:i.FUNC_ADD,[$f]:i.FUNC_SUBTRACT,[jf]:i.FUNC_REVERSE_SUBTRACT};Ye[Qf]=i.MIN,Ye[ed]=i.MAX;let te={[td]:i.ZERO,[nd]:i.ONE,[id]:i.SRC_COLOR,[Ua]:i.SRC_ALPHA,[ld]:i.SRC_ALPHA_SATURATE,[ad]:i.DST_COLOR,[rd]:i.DST_ALPHA,[sd]:i.ONE_MINUS_SRC_COLOR,[Fa]:i.ONE_MINUS_SRC_ALPHA,[cd]:i.ONE_MINUS_DST_COLOR,[od]:i.ONE_MINUS_DST_ALPHA,[hd]:i.CONSTANT_COLOR,[ud]:i.ONE_MINUS_CONSTANT_COLOR,[fd]:i.CONSTANT_ALPHA,[dd]:i.ONE_MINUS_CONSTANT_ALPHA};function ie(D,xe,$,fe,me,ee,Ce,Te,ft,dt){if(D===ci){p===!0&&(Le(i.BLEND),p=!1);return}if(p===!1&&(ae(i.BLEND),p=!0),D!==Jf){if(D!==g||dt!==I){if((S!==ki||A!==ki)&&(i.blendEquation(i.FUNC_ADD),S=ki,A=ki),dt)switch(D){case ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lo:i.blendFunc(i.ONE,i.ONE);break;case Th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ah:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:We("WebGLState: Invalid blending: ",D);break}else switch(D){case ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Th:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ah:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",D);break}M=null,v=null,E=null,R=null,_.set(0,0,0),T=0,g=D,I=dt}return}me=me||xe,ee=ee||$,Ce=Ce||fe,(xe!==S||me!==A)&&(i.blendEquationSeparate(Ye[xe],Ye[me]),S=xe,A=me),($!==M||fe!==v||ee!==E||Ce!==R)&&(i.blendFuncSeparate(te[$],te[fe],te[ee],te[Ce]),M=$,v=fe,E=ee,R=Ce),(Te.equals(_)===!1||ft!==T)&&(i.blendColor(Te.r,Te.g,Te.b,ft),_.copy(Te),T=ft),g=D,I=!1}function q(D,xe){D.side===Et?Le(i.CULL_FACE):ae(i.CULL_FACE);let $=D.side===nn;xe&&($=!$),re($),D.blending===ms&&D.transparent===!1?ie(ci):ie(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let fe=D.stencilWrite;a.setTest(fe),fe&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ee(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function re(D){C!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),C=D)}function se(D){D!==Yf?(ae(i.CULL_FACE),D!==P&&(D===Eh?i.cullFace(i.BACK):D===Zf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),P=D}function Oe(D){D!==W&&(G&&i.lineWidth(D),W=D)}function Ee(D,xe,$){D?(ae(i.POLYGON_OFFSET_FILL),(Y!==xe||U!==$)&&(Y=xe,U=$,o.getReversed()&&(xe=-xe),i.polygonOffset(xe,$))):Le(i.POLYGON_OFFSET_FILL)}function ye(D){D?ae(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function ke(D){D===void 0&&(D=i.TEXTURE0+H-1),le!==D&&(i.activeTexture(D),le=D)}function N(D,xe,$){$===void 0&&(le===null?$=i.TEXTURE0+H-1:$=le);let fe=he[$];fe===void 0&&(fe={type:void 0,texture:void 0},he[$]=fe),(fe.type!==D||fe.texture!==xe)&&(le!==$&&(i.activeTexture($),le=$),i.bindTexture(D,xe||ge[D]),fe.type=D,fe.texture=xe)}function at(){let D=he[le];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Ke(){try{i.compressedTexImage2D(...arguments)}catch(D){We("WebGLState:",D)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(D){We("WebGLState:",D)}}function y(){try{i.texSubImage2D(...arguments)}catch(D){We("WebGLState:",D)}}function O(){try{i.texSubImage3D(...arguments)}catch(D){We("WebGLState:",D)}}function z(){try{i.compressedTexSubImage2D(...arguments)}catch(D){We("WebGLState:",D)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(D){We("WebGLState:",D)}}function ce(){try{i.texStorage2D(...arguments)}catch(D){We("WebGLState:",D)}}function Z(){try{i.texStorage3D(...arguments)}catch(D){We("WebGLState:",D)}}function B(){try{i.texImage2D(...arguments)}catch(D){We("WebGLState:",D)}}function J(){try{i.texImage3D(...arguments)}catch(D){We("WebGLState:",D)}}function oe(D){return u[D]!==void 0?u[D]:i.getParameter(D)}function Re(D,xe){u[D]!==xe&&(i.pixelStorei(D,xe),u[D]=xe)}function de(D){Ve.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ve.copy(D))}function pe(D){De.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),De.copy(D))}function Ue(D,xe){let $=l.get(xe);$===void 0&&($=new WeakMap,l.set(xe,$));let fe=$.get(D);fe===void 0&&(fe=i.getUniformBlockIndex(xe,D.name),$.set(D,fe))}function Pe(D,xe){let fe=l.get(xe).get(D);c.get(xe)!==fe&&(i.uniformBlockBinding(xe,fe,D.__bindingPointIndex),c.set(xe,fe))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},le=null,he={},f={},d=new WeakMap,m=[],x=null,p=!1,g=null,S=null,M=null,v=null,A=null,E=null,R=null,_=new ve(0,0,0),T=0,I=!1,C=null,P=null,W=null,Y=null,U=null,Ve.set(0,0,i.canvas.width,i.canvas.height),De.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ae,disable:Le,bindFramebuffer:qe,drawBuffers:He,useProgram:pt,setBlending:ie,setMaterial:q,setFlipSided:re,setCullFace:se,setLineWidth:Oe,setPolygonOffset:Ee,setScissorTest:ye,activeTexture:ke,bindTexture:N,unbindTexture:at,compressedTexImage2D:Ke,compressedTexImage3D:w,texImage2D:B,texImage3D:J,pixelStorei:Re,getParameter:oe,updateUBOMapping:Ue,uniformBlockBinding:Pe,texStorage2D:ce,texStorage3D:Z,texSubImage2D:y,texSubImage3D:O,compressedTexSubImage2D:z,compressedTexSubImage3D:K,scissor:de,viewport:pe,reset:Ze}}function Gv(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ue,h=new WeakMap,u=new Set,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,y){return m?new OffscreenCanvas(w,y):hr("canvas")}function p(w,y,O){let z=1,K=Ke(w);if((K.width>O||K.height>O)&&(z=O/Math.max(K.width,K.height)),z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let ce=Math.floor(z*K.width),Z=Math.floor(z*K.height);f===void 0&&(f=x(ce,Z));let B=y?x(ce,Z):f;return B.width=ce,B.height=Z,B.getContext("2d").drawImage(w,0,0,ce,Z),Ae("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ce+"x"+Z+")."),B}else return"data"in w&&Ae("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function g(w){return w.generateMipmaps}function S(w){i.generateMipmap(w)}function M(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(w,y,O,z,K,ce=!1){if(w!==null){if(i[w]!==void 0)return i[w];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Z;z&&(Z=e.get("EXT_texture_norm16"),Z||Ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let B=y;if(y===i.RED&&(O===i.FLOAT&&(B=i.R32F),O===i.HALF_FLOAT&&(B=i.R16F),O===i.UNSIGNED_BYTE&&(B=i.R8),O===i.UNSIGNED_SHORT&&Z&&(B=Z.R16_EXT),O===i.SHORT&&Z&&(B=Z.R16_SNORM_EXT)),y===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(B=i.R8UI),O===i.UNSIGNED_SHORT&&(B=i.R16UI),O===i.UNSIGNED_INT&&(B=i.R32UI),O===i.BYTE&&(B=i.R8I),O===i.SHORT&&(B=i.R16I),O===i.INT&&(B=i.R32I)),y===i.RG&&(O===i.FLOAT&&(B=i.RG32F),O===i.HALF_FLOAT&&(B=i.RG16F),O===i.UNSIGNED_BYTE&&(B=i.RG8),O===i.UNSIGNED_SHORT&&Z&&(B=Z.RG16_EXT),O===i.SHORT&&Z&&(B=Z.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(B=i.RG8UI),O===i.UNSIGNED_SHORT&&(B=i.RG16UI),O===i.UNSIGNED_INT&&(B=i.RG32UI),O===i.BYTE&&(B=i.RG8I),O===i.SHORT&&(B=i.RG16I),O===i.INT&&(B=i.RG32I)),y===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(B=i.RGB8UI),O===i.UNSIGNED_SHORT&&(B=i.RGB16UI),O===i.UNSIGNED_INT&&(B=i.RGB32UI),O===i.BYTE&&(B=i.RGB8I),O===i.SHORT&&(B=i.RGB16I),O===i.INT&&(B=i.RGB32I)),y===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(B=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(B=i.RGBA16UI),O===i.UNSIGNED_INT&&(B=i.RGBA32UI),O===i.BYTE&&(B=i.RGBA8I),O===i.SHORT&&(B=i.RGBA16I),O===i.INT&&(B=i.RGBA32I)),y===i.RGB&&(O===i.UNSIGNED_SHORT&&Z&&(B=Z.RGB16_EXT),O===i.SHORT&&Z&&(B=Z.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(B=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(B=i.R11F_G11F_B10F)),y===i.RGBA){let J=ce?Kr:rt.getTransfer(K);O===i.FLOAT&&(B=i.RGBA32F),O===i.HALF_FLOAT&&(B=i.RGBA16F),O===i.UNSIGNED_BYTE&&(B=J===xt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&Z&&(B=Z.RGBA16_EXT),O===i.SHORT&&Z&&(B=Z.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(B=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(B=i.RGB5_A1)}return(B===i.R16F||B===i.R32F||B===i.RG16F||B===i.RG32F||B===i.RGBA16F||B===i.RGBA32F)&&e.get("EXT_color_buffer_float"),B}function A(w,y){let O;return w?y===null||y===Jn||y===Tr?O=i.DEPTH24_STENCIL8:y===In?O=i.DEPTH32F_STENCIL8:y===Er&&(O=i.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Jn||y===Tr?O=i.DEPTH_COMPONENT24:y===In?O=i.DEPTH_COMPONENT32F:y===Er&&(O=i.DEPTH_COMPONENT16),O}function E(w,y){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==Gt&&w.minFilter!==Vt?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function R(w){let y=w.target;y.removeEventListener("dispose",R),T(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&u.delete(y)}function _(w){let y=w.target;y.removeEventListener("dispose",_),C(y)}function T(w){let y=n.get(w);if(y.__webglInit===void 0)return;let O=w.source,z=d.get(O);if(z){let K=z[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&I(w),Object.keys(z).length===0&&d.delete(O)}n.remove(w)}function I(w){let y=n.get(w);i.deleteTexture(y.__webglTexture);let O=w.source,z=d.get(O);delete z[y.__cacheKey],o.memory.textures--}function C(w){let y=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(y.__webglFramebuffer[z]))for(let K=0;K<y.__webglFramebuffer[z].length;K++)i.deleteFramebuffer(y.__webglFramebuffer[z][K]);else i.deleteFramebuffer(y.__webglFramebuffer[z]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[z])}else{if(Array.isArray(y.__webglFramebuffer))for(let z=0;z<y.__webglFramebuffer.length;z++)i.deleteFramebuffer(y.__webglFramebuffer[z]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let z=0;z<y.__webglColorRenderbuffer.length;z++)y.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[z]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let O=w.textures;for(let z=0,K=O.length;z<K;z++){let ce=n.get(O[z]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),o.memory.textures--),n.remove(O[z])}n.remove(w)}let P=0;function W(){P=0}function Y(){return P}function U(w){P=w}function H(){let w=P;return w>=s.maxTextures&&Ae("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),P+=1,w}function G(w){let y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function j(w,y){let O=n.get(w);if(w.isVideoTexture&&N(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){let z=w.image;if(z===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(O,w,y);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+y)}function ne(w,y){let O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){Le(O,w,y);return}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+y)}function le(w,y){let O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){Le(O,w,y);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+y)}function he(w,y){let O=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&O.__version!==w.version){qe(O,w,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+y)}let _e={[On]:i.REPEAT,[Un]:i.CLAMP_TO_EDGE,[cr]:i.MIRRORED_REPEAT},ze={[Gt]:i.NEAREST,[vc]:i.NEAREST_MIPMAP_NEAREST,[Cs]:i.NEAREST_MIPMAP_LINEAR,[Vt]:i.LINEAR,[br]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},Ve={[vd]:i.NEVER,[Td]:i.ALWAYS,[Md]:i.LESS,[sl]:i.LEQUAL,[Sd]:i.EQUAL,[rl]:i.GEQUAL,[bd]:i.GREATER,[Ed]:i.NOTEQUAL};function De(w,y){if(y.type===In&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Vt||y.magFilter===br||y.magFilter===Cs||y.magFilter===Kn||y.minFilter===Vt||y.minFilter===br||y.minFilter===Cs||y.minFilter===Kn)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,_e[y.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,_e[y.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,_e[y.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ze[y.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ze[y.minFilter]),y.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ve[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Gt||y.minFilter!==Cs&&y.minFilter!==Kn||y.type===In&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Q(w,y){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",R));let z=y.source,K=d.get(z);K===void 0&&(K={},d.set(z,K));let ce=G(y);if(ce!==w.__cacheKey){K[ce]===void 0&&(K[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),K[ce].usedTimes++;let Z=K[w.__cacheKey];Z!==void 0&&(K[w.__cacheKey].usedTimes--,Z.usedTimes===0&&I(y)),w.__cacheKey=ce,w.__webglTexture=K[ce].texture}return O}function ge(w,y,O){return Math.floor(Math.floor(w/O)/y)}function ae(w,y,O,z){let ce=w.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,O,z,y.data);else{ce.sort((Re,de)=>Re.start-de.start);let Z=0;for(let Re=1;Re<ce.length;Re++){let de=ce[Z],pe=ce[Re],Ue=de.start+de.count,Pe=ge(pe.start,y.width,4),Ze=ge(de.start,y.width,4);pe.start<=Ue+1&&Pe===Ze&&ge(pe.start+pe.count-1,y.width,4)===Pe?de.count=Math.max(de.count,pe.start+pe.count-de.start):(++Z,ce[Z]=pe)}ce.length=Z+1;let B=t.getParameter(i.UNPACK_ROW_LENGTH),J=t.getParameter(i.UNPACK_SKIP_PIXELS),oe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Re=0,de=ce.length;Re<de;Re++){let pe=ce[Re],Ue=Math.floor(pe.start/4),Pe=Math.ceil(pe.count/4),Ze=Ue%y.width,D=Math.floor(Ue/y.width),xe=Pe,$=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Ze,D,xe,$,O,z,y.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,B),t.pixelStorei(i.UNPACK_SKIP_PIXELS,J),t.pixelStorei(i.UNPACK_SKIP_ROWS,oe)}}function Le(w,y,O){let z=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(z=i.TEXTURE_3D);let K=Q(w,y),ce=y.source;t.bindTexture(z,w.__webglTexture,i.TEXTURE0+O);let Z=n.get(ce);if(ce.version!==Z.__version||K===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let $=rt.getPrimaries(rt.workingColorSpace),fe=y.colorSpace===Ii?null:rt.getPrimaries(y.colorSpace),me=y.colorSpace===Ii||$===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let J=p(y.image,!1,s.maxTextureSize);J=at(y,J);let oe=r.convert(y.format,y.colorSpace),Re=r.convert(y.type),de=v(y.internalFormat,oe,Re,y.normalized,y.colorSpace,y.isVideoTexture);De(z,y);let pe,Ue=y.mipmaps,Pe=y.isVideoTexture!==!0,Ze=Z.__version===void 0||K===!0,D=ce.dataReady,xe=E(y,J);if(y.isDepthTexture)de=A(y.format===Ki,y.type),Ze&&(Pe?t.texStorage2D(i.TEXTURE_2D,1,de,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,de,J.width,J.height,0,oe,Re,null));else if(y.isDataTexture)if(Ue.length>0){Pe&&Ze&&t.texStorage2D(i.TEXTURE_2D,xe,de,Ue[0].width,Ue[0].height);for(let $=0,fe=Ue.length;$<fe;$++)pe=Ue[$],Pe?D&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,pe.width,pe.height,oe,Re,pe.data):t.texImage2D(i.TEXTURE_2D,$,de,pe.width,pe.height,0,oe,Re,pe.data);y.generateMipmaps=!1}else Pe?(Ze&&t.texStorage2D(i.TEXTURE_2D,xe,de,J.width,J.height),D&&ae(y,J,oe,Re)):t.texImage2D(i.TEXTURE_2D,0,de,J.width,J.height,0,oe,Re,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Pe&&Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,de,Ue[0].width,Ue[0].height,J.depth);for(let $=0,fe=Ue.length;$<fe;$++)if(pe=Ue[$],y.format!==Pn)if(oe!==null)if(Pe){if(D)if(y.layerUpdates.size>0){let me=Yh(pe.width,pe.height,y.format,y.type);for(let ee of y.layerUpdates){let Ce=pe.data.subarray(ee*me/pe.data.BYTES_PER_ELEMENT,(ee+1)*me/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,ee,pe.width,pe.height,1,oe,Ce)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,pe.width,pe.height,J.depth,oe,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,de,pe.width,pe.height,J.depth,0,pe.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,pe.width,pe.height,J.depth,oe,Re,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,de,pe.width,pe.height,J.depth,0,oe,Re,pe.data)}else{Pe&&Ze&&t.texStorage2D(i.TEXTURE_2D,xe,de,Ue[0].width,Ue[0].height);for(let $=0,fe=Ue.length;$<fe;$++)pe=Ue[$],y.format!==Pn?oe!==null?Pe?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,pe.width,pe.height,oe,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,$,de,pe.width,pe.height,0,pe.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?D&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,pe.width,pe.height,oe,Re,pe.data):t.texImage2D(i.TEXTURE_2D,$,de,pe.width,pe.height,0,oe,Re,pe.data)}else if(y.isDataArrayTexture)if(Pe){if(Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,de,J.width,J.height,J.depth),D)if(y.layerUpdates.size>0){let $=Yh(J.width,J.height,y.format,y.type);for(let fe of y.layerUpdates){let me=J.data.subarray(fe*$/J.data.BYTES_PER_ELEMENT,(fe+1)*$/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,J.width,J.height,1,oe,Re,me)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,oe,Re,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,J.width,J.height,J.depth,0,oe,Re,J.data);else if(y.isData3DTexture)Pe?(Ze&&t.texStorage3D(i.TEXTURE_3D,xe,de,J.width,J.height,J.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,oe,Re,J.data)):t.texImage3D(i.TEXTURE_3D,0,de,J.width,J.height,J.depth,0,oe,Re,J.data);else if(y.isFramebufferTexture){if(Ze)if(Pe)t.texStorage2D(i.TEXTURE_2D,xe,de,J.width,J.height);else{let $=J.width,fe=J.height;for(let me=0;me<xe;me++)t.texImage2D(i.TEXTURE_2D,me,de,$,fe,0,oe,Re,null),$>>=1,fe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),J.parentNode!==$){$.appendChild(J),u.add(y),$.onpaint=fe=>{let me=fe.changedElements;for(let ee of u)me.includes(ee.image)&&(ee.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{let me=i.RGBA,ee=i.RGBA,Ce=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,me,ee,Ce,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Pe&&Ze){let $=Ke(Ue[0]);t.texStorage2D(i.TEXTURE_2D,xe,de,$.width,$.height)}for(let $=0,fe=Ue.length;$<fe;$++)pe=Ue[$],Pe?D&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,oe,Re,pe):t.texImage2D(i.TEXTURE_2D,$,de,oe,Re,pe);y.generateMipmaps=!1}else if(Pe){if(Ze){let $=Ke(J);t.texStorage2D(i.TEXTURE_2D,xe,de,$.width,$.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,Re,J)}else t.texImage2D(i.TEXTURE_2D,0,de,oe,Re,J);g(y)&&S(z),Z.__version=ce.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function qe(w,y,O){if(y.image.length!==6)return;let z=Q(w,y),K=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);let ce=n.get(K);if(K.version!==ce.__version||z===!0){t.activeTexture(i.TEXTURE0+O);let Z=rt.getPrimaries(rt.workingColorSpace),B=y.colorSpace===Ii?null:rt.getPrimaries(y.colorSpace),J=y.colorSpace===Ii||Z===B?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let oe=y.isCompressedTexture||y.image[0].isCompressedTexture,Re=y.image[0]&&y.image[0].isDataTexture,de=[];for(let ee=0;ee<6;ee++)!oe&&!Re?de[ee]=p(y.image[ee],!0,s.maxCubemapSize):de[ee]=Re?y.image[ee].image:y.image[ee],de[ee]=at(y,de[ee]);let pe=de[0],Ue=r.convert(y.format,y.colorSpace),Pe=r.convert(y.type),Ze=v(y.internalFormat,Ue,Pe,y.normalized,y.colorSpace),D=y.isVideoTexture!==!0,xe=ce.__version===void 0||z===!0,$=K.dataReady,fe=E(y,pe);De(i.TEXTURE_CUBE_MAP,y);let me;if(oe){D&&xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Ze,pe.width,pe.height);for(let ee=0;ee<6;ee++){me=de[ee].mipmaps;for(let Ce=0;Ce<me.length;Ce++){let Te=me[Ce];y.format!==Pn?Ue!==null?D?$&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce,0,0,Te.width,Te.height,Ue,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce,Ze,Te.width,Te.height,0,Te.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce,0,0,Te.width,Te.height,Ue,Pe,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce,Ze,Te.width,Te.height,0,Ue,Pe,Te.data)}}}else{if(me=y.mipmaps,D&&xe){me.length>0&&fe++;let ee=Ke(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Ze,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Re){D?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,de[ee].width,de[ee].height,Ue,Pe,de[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ze,de[ee].width,de[ee].height,0,Ue,Pe,de[ee].data);for(let Ce=0;Ce<me.length;Ce++){let ft=me[Ce].image[ee].image;D?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce+1,0,0,ft.width,ft.height,Ue,Pe,ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce+1,Ze,ft.width,ft.height,0,Ue,Pe,ft.data)}}else{D?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ue,Pe,de[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ze,Ue,Pe,de[ee]);for(let Ce=0;Ce<me.length;Ce++){let Te=me[Ce];D?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce+1,0,0,Ue,Pe,Te.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce+1,Ze,Ue,Pe,Te.image[ee])}}}g(y)&&S(i.TEXTURE_CUBE_MAP),ce.__version=K.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function He(w,y,O,z,K,ce){let Z=r.convert(O.format,O.colorSpace),B=r.convert(O.type),J=v(O.internalFormat,Z,B,O.normalized,O.colorSpace),oe=n.get(y),Re=n.get(O);if(Re.__renderTarget=y,!oe.__hasExternalTextures){let de=Math.max(1,y.width>>ce),pe=Math.max(1,y.height>>ce);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,ce,J,de,pe,y.depth,0,Z,B,null):t.texImage2D(K,ce,J,de,pe,0,Z,B,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ke(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,K,Re.__webglTexture,0,ye(y)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,K,Re.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(w,y,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),y.depthBuffer){let z=y.depthTexture,K=z&&z.isDepthTexture?z.type:null,ce=A(y.stencilBuffer,K),Z=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ke(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye(y),ce,y.width,y.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye(y),ce,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ce,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,w)}else{let z=y.textures;for(let K=0;K<z.length;K++){let ce=z[K],Z=r.convert(ce.format,ce.colorSpace),B=r.convert(ce.type),J=v(ce.internalFormat,Z,B,ce.normalized,ce.colorSpace);ke(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye(y),J,y.width,y.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye(y),J,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,J,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ye(w,y,O){let z=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(y.depthTexture);if(K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),z){if(K.__webglInit===void 0&&(K.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),De(i.TEXTURE_CUBE_MAP,y.depthTexture);let oe=r.convert(y.depthTexture.format),Re=r.convert(y.depthTexture.type),de;y.depthTexture.format===ii?de=i.DEPTH_COMPONENT24:y.depthTexture.format===Ki&&(de=i.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,de,y.width,y.height,0,oe,Re,null)}}else j(y.depthTexture,0);let ce=K.__webglTexture,Z=ye(y),B=z?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,J=y.depthTexture.format===Ki?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===ii)ke(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,B,ce,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,J,B,ce,0);else if(y.depthTexture.format===Ki)ke(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,B,ce,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,J,B,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function te(w){let y=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){let z=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),z){let K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,z.removeEventListener("dispose",K)};z.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=z}if(w.depthTexture&&!y.__autoAllocateDepthBuffer)if(O)for(let z=0;z<6;z++)Ye(y.__webglFramebuffer[z],w,z);else{let z=w.texture.mipmaps;z&&z.length>0?Ye(y.__webglFramebuffer[0],w,0):Ye(y.__webglFramebuffer,w,0)}else if(O){y.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[z]),y.__webglDepthbuffer[z]===void 0)y.__webglDepthbuffer[z]=i.createRenderbuffer(),pt(y.__webglDepthbuffer[z],w,!1);else{let K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=y.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ce)}}else{let z=w.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),pt(y.__webglDepthbuffer,w,!1);else{let K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(w,y,O){let z=n.get(w);y!==void 0&&He(z.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&te(w)}function q(w){let y=w.texture,O=n.get(w),z=n.get(y);w.addEventListener("dispose",_);let K=w.textures,ce=w.isWebGLCubeRenderTarget===!0,Z=K.length>1;if(Z||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=y.version,o.memory.textures++),ce){O.__webglFramebuffer=[];for(let B=0;B<6;B++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[B]=[];for(let J=0;J<y.mipmaps.length;J++)O.__webglFramebuffer[B][J]=i.createFramebuffer()}else O.__webglFramebuffer[B]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let B=0;B<y.mipmaps.length;B++)O.__webglFramebuffer[B]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Z)for(let B=0,J=K.length;B<J;B++){let oe=n.get(K[B]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&ke(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let B=0;B<K.length;B++){let J=K[B];O.__webglColorRenderbuffer[B]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[B]);let oe=r.convert(J.format,J.colorSpace),Re=r.convert(J.type),de=v(J.internalFormat,oe,Re,J.normalized,J.colorSpace,w.isXRRenderTarget===!0),pe=ye(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,de,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.RENDERBUFFER,O.__webglColorRenderbuffer[B])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),De(i.TEXTURE_CUBE_MAP,y);for(let B=0;B<6;B++)if(y.mipmaps&&y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)He(O.__webglFramebuffer[B][J],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+B,J);else He(O.__webglFramebuffer[B],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);g(y)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Z){for(let B=0,J=K.length;B<J;B++){let oe=K[B],Re=n.get(oe),de=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(de=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,Re.__webglTexture),De(de,oe),He(O.__webglFramebuffer,w,oe,i.COLOR_ATTACHMENT0+B,de,0),g(oe)&&S(de)}t.unbindTexture()}else{let B=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(B=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(B,z.__webglTexture),De(B,y),y.mipmaps&&y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)He(O.__webglFramebuffer[J],w,y,i.COLOR_ATTACHMENT0,B,J);else He(O.__webglFramebuffer,w,y,i.COLOR_ATTACHMENT0,B,0);g(y)&&S(B),t.unbindTexture()}w.depthBuffer&&te(w)}function re(w){let y=w.textures;for(let O=0,z=y.length;O<z;O++){let K=y[O];if(g(K)){let ce=M(w),Z=n.get(K).__webglTexture;t.bindTexture(ce,Z),S(ce),t.unbindTexture()}}}let se=[],Oe=[];function Ee(w){if(w.samples>0){if(ke(w)===!1){let y=w.textures,O=w.width,z=w.height,K=i.COLOR_BUFFER_BIT,ce=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=n.get(w),B=y.length>1;if(B)for(let oe=0;oe<y.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Z.__webglMultisampledFramebuffer);let J=w.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Z.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Z.__webglFramebuffer);for(let oe=0;oe<y.length;oe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),B){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Z.__webglColorRenderbuffer[oe]);let Re=n.get(y[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Re,0)}i.blitFramebuffer(0,0,O,z,0,0,O,z,K,i.NEAREST),c===!0&&(se.length=0,Oe.length=0,se.push(i.COLOR_ATTACHMENT0+oe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(se.push(ce),Oe.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Oe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),B)for(let oe=0;oe<y.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,Z.__webglColorRenderbuffer[oe]);let Re=n.get(y[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,Re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Z.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function ye(w){return Math.min(s.maxSamples,w.samples)}function ke(w){let y=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function N(w){let y=o.render.frame;h.get(w)!==y&&(h.set(w,y),w.update())}function at(w,y){let O=w.colorSpace,z=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==pn&&O!==Ii&&(rt.getTransfer(O)===xt?(z!==Pn||K!==Mn)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",O)),y}function Ke(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.getTextureUnits=Y,this.setTextureUnits=U,this.setTexture2D=j,this.setTexture2DArray=ne,this.setTexture3D=le,this.setTextureCube=he,this.rebindTextures=ie,this.setupRenderTarget=q,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=He,this.useMultisampledRTT=ke,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Vv(i,e){function t(n,s=Ii){let r,o=rt.getTransfer(s);if(n===Mn)return i.UNSIGNED_BYTE;if(n===Sc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===bc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Oh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Dh)return i.BYTE;if(n===Uh)return i.SHORT;if(n===Er)return i.UNSIGNED_SHORT;if(n===Mc)return i.INT;if(n===Jn)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===li)return i.HALF_FLOAT;if(n===Bh)return i.ALPHA;if(n===zh)return i.RGB;if(n===Pn)return i.RGBA;if(n===ii)return i.DEPTH_COMPONENT;if(n===Ki)return i.DEPTH_STENCIL;if(n===Ec)return i.RED;if(n===Tc)return i.RED_INTEGER;if(n===Ji)return i.RG;if(n===Ac)return i.RG_INTEGER;if(n===wc)return i.RGBA_INTEGER;if(n===Uo||n===Fo||n===Oo||n===Bo)if(o===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rc||n===Cc||n===Ic||n===Pc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ic)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lc||n===Nc||n===Dc||n===Uc||n===Fc||n===zo||n===Oc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Lc||n===Nc)return o===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Dc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Uc)return r.COMPRESSED_R11_EAC;if(n===Fc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===zo)return r.COMPRESSED_RG11_EAC;if(n===Oc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Bc||n===zc||n===Hc||n===kc||n===Gc||n===Vc||n===Wc||n===Xc||n===qc||n===Yc||n===Zc||n===Kc||n===Jc||n===$c)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===kc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$c)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jc||n===Qc||n===el)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===jc)return o===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===el)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tl||n===nl||n===Ho||n===il)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===tl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ho)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Wv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xv=`
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

}`,au=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new co(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new mn({vertexShader:Wv,fragmentShader:Xv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ne(new Jt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cu=class extends si{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,m=null,x=typeof XRWebGLBinding<"u",p=new au,g={},S=t.getContextAttributes(),M=null,v=null,A=[],E=[],R=new ue,_=null,T=new qt;T.viewport=new Mt;let I=new qt;I.viewport=new Mt;let C=[T,I],P=new pc,W=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ge=A[Q];return ge===void 0&&(ge=new dr,A[Q]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(Q){let ge=A[Q];return ge===void 0&&(ge=new dr,A[Q]=ge),ge.getGripSpace()},this.getHand=function(Q){let ge=A[Q];return ge===void 0&&(ge=new dr,A[Q]=ge),ge.getHandSpace()};function U(Q){let ge=E.indexOf(Q.inputSource);if(ge===-1)return;let ae=A[ge];ae!==void 0&&(ae.update(Q.inputSource,Q.frame,l||o),ae.dispatchEvent({type:Q.type,data:Q.inputSource}))}function H(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",G);for(let Q=0;Q<A.length;Q++){let ge=E[Q];ge!==null&&(E[Q]=null,A[Q].disconnect(ge))}W=null,Y=null,p.reset();for(let Q in g)delete g[Q];e.setRenderTarget(M),d=null,f=null,u=null,s=null,v=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",H),s.addEventListener("inputsourceschange",G),S.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Le=null,qe=null;S.depth&&(qe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=S.stencil?Ki:ii,Le=S.stencil?Tr:Jn);let He={colorFormat:t.RGBA8,depthFormat:qe,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(He),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new wn(f.textureWidth,f.textureHeight,{format:Pn,type:Mn,depthTexture:new Si(f.textureWidth,f.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ae={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new wn(d.framebufferWidth,d.framebufferHeight,{format:Pn,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),De.setContext(s),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function G(Q){for(let ge=0;ge<Q.removed.length;ge++){let ae=Q.removed[ge],Le=E.indexOf(ae);Le>=0&&(E[Le]=null,A[Le].disconnect(ae))}for(let ge=0;ge<Q.added.length;ge++){let ae=Q.added[ge],Le=E.indexOf(ae);if(Le===-1){for(let He=0;He<A.length;He++)if(He>=E.length){E.push(ae),Le=He;break}else if(E[He]===null){E[He]=ae,Le=He;break}if(Le===-1)break}let qe=A[Le];qe&&qe.connect(ae)}}let j=new L,ne=new L;function le(Q,ge,ae){j.setFromMatrixPosition(ge.matrixWorld),ne.setFromMatrixPosition(ae.matrixWorld);let Le=j.distanceTo(ne),qe=ge.projectionMatrix.elements,He=ae.projectionMatrix.elements,pt=qe[14]/(qe[10]-1),Ye=qe[14]/(qe[10]+1),te=(qe[9]+1)/qe[5],ie=(qe[9]-1)/qe[5],q=(qe[8]-1)/qe[0],re=(He[8]+1)/He[0],se=pt*q,Oe=pt*re,Ee=Le/(-q+re),ye=Ee*-q;if(ge.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ye),Q.translateZ(Ee),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),qe[10]===-1)Q.projectionMatrix.copy(ge.projectionMatrix),Q.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{let ke=pt+Ee,N=Ye+Ee,at=se-ye,Ke=Oe+(Le-ye),w=te*Ye/N*ke,y=ie*Ye/N*ke;Q.projectionMatrix.makePerspective(at,Ke,w,y,ke,N),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function he(Q,ge){ge===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ge.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ge=Q.near,ae=Q.far;p.texture!==null&&(p.depthNear>0&&(ge=p.depthNear),p.depthFar>0&&(ae=p.depthFar)),P.near=I.near=T.near=ge,P.far=I.far=T.far=ae,(W!==P.near||Y!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),W=P.near,Y=P.far),P.layers.mask=Q.layers.mask|6,T.layers.mask=P.layers.mask&-5,I.layers.mask=P.layers.mask&-3;let Le=Q.parent,qe=P.cameras;he(P,Le);for(let He=0;He<qe.length;He++)he(qe[He],Le);qe.length===2?le(P,T,I):P.projectionMatrix.copy(T.projectionMatrix),_e(Q,P,Le)};function _e(Q,ge,ae){ae===null?Q.matrix.copy(ge.matrixWorld):(Q.matrix.copy(ae.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ge.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ge.projectionMatrix),Q.projectionMatrixInverse.copy(ge.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ys*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Q){c=Q,f!==null&&(f.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(P)},this.getCameraTexture=function(Q){return g[Q]};let ze=null;function Ve(Q,ge){if(h=ge.getViewerPose(l||o),m=ge,h!==null){let ae=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Le=!1;ae.length!==P.cameras.length&&(P.cameras.length=0,Le=!0);for(let Ye=0;Ye<ae.length;Ye++){let te=ae[Ye],ie=null;if(d!==null)ie=d.getViewport(te);else{let re=u.getViewSubImage(f,te);ie=re.viewport,Ye===0&&(e.setRenderTargetTextures(v,re.colorTexture,re.depthStencilTexture),e.setRenderTarget(v))}let q=C[Ye];q===void 0&&(q=new qt,q.layers.enable(Ye),q.viewport=new Mt,C[Ye]=q),q.matrix.fromArray(te.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(te.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(ie.x,ie.y,ie.width,ie.height),Ye===0&&(P.matrix.copy(q.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Le===!0&&P.cameras.push(q)}let qe=s.enabledFeatures;if(qe&&qe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let Ye=u.getDepthInformation(ae[0]);Ye&&Ye.isValid&&Ye.texture&&p.init(Ye,s.renderState)}if(qe&&qe.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let Ye=0;Ye<ae.length;Ye++){let te=ae[Ye].camera;if(te){let ie=g[te];ie||(ie=new co,g[te]=ie);let q=u.getCameraImage(te);ie.sourceTexture=q}}}}for(let ae=0;ae<A.length;ae++){let Le=E[ae],qe=A[ae];Le!==null&&qe!==void 0&&qe.update(Le,ge,l||o)}ze&&ze(Q,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),m=null}let De=new op;De.setAnimationLoop(Ve),this.setAnimationLoop=function(Q){ze=Q},this.dispose=function(){}}},qv=new Xe,fp=new $e;fp.set(-1,0,0,0,1,0,0,0,1);function Yv(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Wh(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,S,M,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,v)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?c(p,g,S,M):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===nn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===nn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let S=e.get(g),M=S.envMap,v=S.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(qv.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(fp),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,S,M){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*S,p.scale.value=M*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,S){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===nn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let S=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zv(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,A){let E=A.program;n.uniformBlockBinding(v,E)}function l(v,A){let E=s[v.id];E===void 0&&(p(v),E=h(v),s[v.id]=E,v.addEventListener("dispose",S));let R=A.program;n.updateUBOMapping(v,R);let _=e.render.frame;r[v.id]!==_&&(f(v),r[v.id]=_)}function h(v){let A=u();v.__bindingPointIndex=A;let E=i.createBuffer(),R=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,R,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,E),E}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let A=s[v.id],E=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let _=0,T=E.length;_<T;_++){let I=E[_];if(Array.isArray(I))for(let C=0,P=I.length;C<P;C++)d(I[C],_,C,R);else d(I,_,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,A,E,R){if(x(v,A,E,R)===!0){let _=v.__offset,T=v.value;if(Array.isArray(T)){let I=0;for(let C=0;C<T.length;C++){let P=T[C],W=g(P);m(P,v.__data,I),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(I+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function m(v,A,E){typeof v=="number"||typeof v=="boolean"?A[0]=v:v.isMatrix3?(A[0]=v.elements[0],A[1]=v.elements[1],A[2]=v.elements[2],A[3]=0,A[4]=v.elements[3],A[5]=v.elements[4],A[6]=v.elements[5],A[7]=0,A[8]=v.elements[6],A[9]=v.elements[7],A[10]=v.elements[8],A[11]=0):ArrayBuffer.isView(v)?A.set(new v.constructor(v.buffer,v.byteOffset,A.length)):v.toArray(A,E)}function x(v,A,E,R){let _=v.value,T=A+"_"+E;if(R[T]===void 0)return typeof _=="number"||typeof _=="boolean"?R[T]=_:ArrayBuffer.isView(_)?R[T]=_.slice():R[T]=_.clone(),!0;{let I=R[T];if(typeof _=="number"||typeof _=="boolean"){if(I!==_)return R[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(I.equals(_)===!1)return I.copy(_),!0}}return!1}function p(v){let A=v.uniforms,E=0,R=16;for(let T=0,I=A.length;T<I;T++){let C=Array.isArray(A[T])?A[T]:[A[T]];for(let P=0,W=C.length;P<W;P++){let Y=C[P],U=Array.isArray(Y.value)?Y.value:[Y.value];for(let H=0,G=U.length;H<G;H++){let j=U[H],ne=g(j),le=E%R,he=le%ne.boundary,_e=le+he;E+=he,_e!==0&&R-_e<ne.storage&&(E+=R-_e),Y.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=E,E+=ne.storage}}}let _=E%R;return _>0&&(E+=R-_),v.__size=E,v.__cache={},this}function g(v){let A={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(A.boundary=4,A.storage=4):v.isVector2?(A.boundary=8,A.storage=8):v.isVector3||v.isColor?(A.boundary=16,A.storage=12):v.isVector4?(A.boundary=16,A.storage=16):v.isMatrix3?(A.boundary=48,A.storage=48):v.isMatrix4?(A.boundary=64,A.storage=64):v.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(A.boundary=16,A.storage=v.byteLength):Ae("WebGLRenderer: Unsupported uniform value type.",v),A}function S(v){let A=v.target;A.removeEventListener("dispose",S);let E=o.indexOf(A.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function M(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:M}}var Kv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hi=null;function Jv(){return hi===null&&(hi=new mr(Kv,16,16,Ji,li),hi.name="DFG_LUT",hi.minFilter=Vt,hi.magFilter=Vt,hi.wrapS=Un,hi.wrapT=Un,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}var hl=class{constructor(e={}){let{canvas:t=Ad(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Mn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=d,p=new Set([wc,Ac,Tc]),g=new Set([Mn,Jn,Er,Tr,Sc,bc]),S=new Uint32Array(4),M=new Int32Array(4),v=new L,A=null,E=null,R=[],_=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,C=!1,P=null,W=null,Y=null,U=null;this._outputColorSpace=tt;let H=0,G=0,j=null,ne=-1,le=null,he=new Mt,_e=new Mt,ze=null,Ve=new ve(0),De=0,Q=t.width,ge=t.height,ae=1,Le=null,qe=null,He=new Mt(0,0,Q,ge),pt=new Mt(0,0,Q,ge),Ye=!1,te=new gr,ie=!1,q=!1,re=new Xe,se=new L,Oe=new Mt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ye=!1;function ke(){return j===null?ae:1}let N=n;function at(b,F){return t.getContext(b,F)}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",ft,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",Ct,!1),N===null){let F="webgl2";if(N=at(F,b),N===null)throw at(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw We("WebGLRenderer: "+b.message),b}let Ke,w,y,O,z,K,ce,Z,B,J,oe,Re,de,pe,Ue,Pe,Ze,D,xe,$,fe,me,ee;function Ce(){Ke=new iy(N),Ke.init(),fe=new Vv(N,Ke),w=new K_(N,Ke,e,fe),y=new kv(N,Ke),w.reversedDepthBuffer&&f&&y.buffers.depth.setReversed(!0),W=N.createFramebuffer(),Y=N.createFramebuffer(),U=N.createFramebuffer(),O=new oy(N),z=new wv,K=new Gv(N,Ke,y,z,w,fe,O),ce=new ny(I),Z=new h0(N),me=new Y_(N,Z),B=new sy(N,Z,O,me),J=new cy(N,B,Z,me,O),D=new ay(N,w,K),Ue=new J_(z),oe=new Av(I,ce,Ke,w,me,Ue),Re=new Yv(I,z),de=new Cv,pe=new Uv(Ke),Ze=new q_(I,ce,y,J,m,c),Pe=new Hv(I,J,w),ee=new Zv(N,O,w,y),xe=new Z_(N,Ke,O),$=new ry(N,Ke,O),O.programs=oe.programs,I.capabilities=w,I.extensions=Ke,I.properties=z,I.renderLists=de,I.shadowMap=Pe,I.state=y,I.info=O}Ce(),x!==Mn&&(T=new hy(x,t.width,t.height,a,s,r));let Te=new cu(I,N);this.xr=Te,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let b=Ke.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Ke.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(b){b!==void 0&&(ae=b,this.setSize(Q,ge,!1))},this.getSize=function(b){return b.set(Q,ge)},this.setSize=function(b,F,X=!0){if(Te.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=b,ge=F,t.width=Math.floor(b*ae),t.height=Math.floor(F*ae),X===!0&&(t.style.width=b+"px",t.style.height=F+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(Q*ae,ge*ae).floor()},this.setDrawingBufferSize=function(b,F,X){Q=b,ge=F,ae=X,t.width=Math.floor(b*X),t.height=Math.floor(F*X),this.setViewport(0,0,b,F)},this.setEffects=function(b){if(x===Mn){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let F=0;F<b.length;F++)if(b[F].isOutputPass===!0){Ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(he)},this.getViewport=function(b){return b.copy(He)},this.setViewport=function(b,F,X,k){b.isVector4?He.set(b.x,b.y,b.z,b.w):He.set(b,F,X,k),y.viewport(he.copy(He).multiplyScalar(ae).round())},this.getScissor=function(b){return b.copy(pt)},this.setScissor=function(b,F,X,k){b.isVector4?pt.set(b.x,b.y,b.z,b.w):pt.set(b,F,X,k),y.scissor(_e.copy(pt).multiplyScalar(ae).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(b){y.setScissorTest(Ye=b)},this.setOpaqueSort=function(b){Le=b},this.setTransparentSort=function(b){qe=b},this.getClearColor=function(b){return b.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,X=!0){let k=0;if(b){let V=!1;if(j!==null){let be=j.texture.format;V=p.has(be)}if(V){let be=j.texture.type,Ie=g.has(be),Se=Ze.getClearColor(),Fe=Ze.getClearAlpha(),Be=Se.r,Qe=Se.g,st=Se.b;Ie?(S[0]=Be,S[1]=Qe,S[2]=st,S[3]=Fe,N.clearBufferuiv(N.COLOR,0,S)):(M[0]=Be,M[1]=Qe,M[2]=st,M[3]=Fe,N.clearBufferiv(N.COLOR,0,M))}else k|=N.COLOR_BUFFER_BIT}F&&(k|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),P=b},this.dispose=function(){t.removeEventListener("webglcontextlost",ft,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",Ct,!1),Ze.dispose(),de.dispose(),pe.dispose(),z.dispose(),ce.dispose(),J.dispose(),me.dispose(),ee.dispose(),oe.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",yt),Te.removeEventListener("sessionend",tn),fn.stop()};function ft(b){b.preventDefault(),Jr("WebGLRenderer: Context Lost."),C=!0}function dt(){Jr("WebGLRenderer: Context Restored."),C=!1;let b=O.autoReset,F=Pe.enabled,X=Pe.autoUpdate,k=Pe.needsUpdate,V=Pe.type;Ce(),O.autoReset=b,Pe.enabled=F,Pe.autoUpdate=X,Pe.needsUpdate=k,Pe.type=V}function Ct(b){We("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ht(b){let F=b.target;F.removeEventListener("dispose",ht),Lt(F)}function Lt(b){Nt(b),z.remove(b)}function Nt(b){let F=z.get(b).programs;F!==void 0&&(F.forEach(function(X){oe.releaseProgram(X)}),b.isShaderMaterial&&oe.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,X,k,V,be){F===null&&(F=Ee);let Ie=V.isMesh&&V.matrixWorld.determinantAffine()<0,Se=Im(b,F,X,k,V);y.setMaterial(k,Ie);let Fe=X.index,Be=1;if(k.wireframe===!0){if(Fe=B.getWireframeAttribute(X),Fe===void 0)return;Be=2}let Qe=X.drawRange,st=X.attributes.position,Ge=Qe.start*Be,bt=(Qe.start+Qe.count)*Be;be!==null&&(Ge=Math.max(Ge,be.start*Be),bt=Math.min(bt,(be.start+be.count)*Be)),Fe!==null?(Ge=Math.max(Ge,0),bt=Math.min(bt,Fe.count)):st!=null&&(Ge=Math.max(Ge,0),bt=Math.min(bt,st.count));let zt=bt-Ge;if(zt<0||zt===1/0)return;me.setup(V,k,Se,X,Fe);let Ot,Tt=xe;if(Fe!==null&&(Ot=Z.get(Fe),Tt=$,Tt.setIndex(Ot)),V.isMesh)k.wireframe===!0?(y.setLineWidth(k.wireframeLinewidth*ke()),Tt.setMode(N.LINES)):Tt.setMode(N.TRIANGLES);else if(V.isLine){let on=k.linewidth;on===void 0&&(on=1),y.setLineWidth(on*ke()),V.isLineSegments?Tt.setMode(N.LINES):V.isLineLoop?Tt.setMode(N.LINE_LOOP):Tt.setMode(N.LINE_STRIP)}else V.isPoints?Tt.setMode(N.POINTS):V.isSprite&&Tt.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(Ke.get("WEBGL_multi_draw"))Tt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let on=V._multiDrawStarts,we=V._multiDrawCounts,En=V._multiDrawCount,mt=Fe?Z.get(Fe).bytesPerElement:1,Nn=z.get(k).currentProgram.getUniforms();for(let Qn=0;Qn<En;Qn++)Nn.setValue(N,"_gl_DrawID",Qn),Tt.render(on[Qn]/mt,we[Qn])}else if(V.isInstancedMesh)Tt.renderInstances(Ge,zt,V.count);else if(X.isInstancedBufferGeometry){let on=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,we=Math.min(X.instanceCount,on);Tt.renderInstances(Ge,zt,we)}else Tt.render(Ge,zt)};function Zt(b,F,X){b.transparent===!0&&b.side===Et&&b.forceSinglePass===!1?(b.side=nn,b.needsUpdate=!0,Hs(b,F,X),b.side=qn,b.needsUpdate=!0,Hs(b,F,X),b.side=Et):Hs(b,F,X)}this.compile=function(b,F,X=null){X===null&&(X=b),E=pe.get(X),E.init(F),_.push(E),X.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),b!==X&&b.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights();let k=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let be=V.material;if(be)if(Array.isArray(be))for(let Ie=0;Ie<be.length;Ie++){let Se=be[Ie];Zt(Se,X,V),k.add(Se)}else Zt(be,X,V),k.add(be)}),E=_.pop(),k},this.compileAsync=function(b,F,X=null){let k=this.compile(b,F,X);return new Promise(V=>{function be(){if(k.forEach(function(Ie){z.get(Ie).currentProgram.isReady()&&k.delete(Ie)}),k.size===0){V(b);return}setTimeout(be,10)}Ke.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Dt=null;function Pt(b){Dt&&Dt(b)}function yt(){fn.stop()}function tn(){fn.start()}let fn=new op;fn.setAnimationLoop(Pt),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(b){Dt=b,Te.setAnimationLoop(b),b===null?fn.stop():fn.start()},Te.addEventListener("sessionstart",yt),Te.addEventListener("sessionend",tn),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;P!==null&&P.renderStart(b,F);let X=Te.enabled===!0&&Te.isPresenting===!0,k=T!==null&&(j===null||X)&&T.begin(I,j);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(F),F=Te.getCamera()),b.isScene===!0&&b.onBeforeRender(I,b,F,j),E=pe.get(b,_.length),E.init(F),E.state.textureUnits=K.getTextureUnits(),_.push(E),re.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),te.setFromProjectionMatrix(re,Xn,F.reversedDepth),q=this.localClippingEnabled,ie=Ue.init(this.clippingPlanes,q),A=de.get(b,R.length),A.init(),R.push(A),Te.enabled===!0&&Te.isPresenting===!0){let Ie=I.xr.getDepthSensingMesh();Ie!==null&&ts(Ie,F,-1/0,I.sortObjects)}ts(b,F,0,I.sortObjects),A.finish(),I.sortObjects===!0&&A.sort(Le,qe,F.reversedDepth),ye=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,ye&&Ze.addToRenderList(A,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ie===!0&&Ue.beginShadows();let V=E.state.shadowsArray;if(Pe.render(V,b,F),ie===!0&&Ue.endShadows(),(k&&T.hasRenderPass())===!1){let Ie=A.opaque,Se=A.transmissive;if(E.setupLights(),F.isArrayCamera){let Fe=F.cameras;if(Se.length>0)for(let Be=0,Qe=Fe.length;Be<Qe;Be++){let st=Fe[Be];ns(Ie,Se,b,st)}ye&&Ze.render(b);for(let Be=0,Qe=Fe.length;Be<Qe;Be++){let st=Fe[Be];bn(A,b,st,st.viewport)}}else Se.length>0&&ns(Ie,Se,b,F),ye&&Ze.render(b),bn(A,b,F)}j!==null&&G===0&&(K.updateMultisampleRenderTarget(j),K.updateRenderTargetMipmap(j)),k&&T.end(I),b.isScene===!0&&b.onAfterRender(I,b,F),me.resetDefaultState(),ne=-1,le=null,_.pop(),_.length>0?(E=_[_.length-1],K.setTextureUnits(E.state.textureUnits),ie===!0&&Ue.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?A=R[R.length-1]:A=null,P!==null&&P.renderEnd()};function ts(b,F,X,k){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLightProbeGrid)E.pushLightProbeGrid(b);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||te.intersectsSprite(b)){k&&Oe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(re);let Ie=J.update(b),Se=b.material;Se.visible&&A.push(b,Ie,Se,X,Oe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||te.intersectsObject(b))){let Ie=J.update(b),Se=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Oe.copy(b.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Oe.copy(Ie.boundingSphere.center)),Oe.applyMatrix4(b.matrixWorld).applyMatrix4(re)),Array.isArray(Se)){let Fe=Ie.groups;for(let Be=0,Qe=Fe.length;Be<Qe;Be++){let st=Fe[Be],Ge=Se[st.materialIndex];Ge&&Ge.visible&&A.push(b,Ie,Ge,X,Oe.z,st)}}else Se.visible&&A.push(b,Ie,Se,X,Oe.z,null)}}let be=b.children;for(let Ie=0,Se=be.length;Ie<Se;Ie++)ts(be[Ie],F,X,k)}function bn(b,F,X,k){let{opaque:V,transmissive:be,transparent:Ie}=b;E.setupLightsView(X),ie===!0&&Ue.setGlobalState(I.clippingPlanes,X),k&&y.viewport(he.copy(k)),V.length>0&&zs(V,F,X),be.length>0&&zs(be,F,X),Ie.length>0&&zs(Ie,F,X),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function ns(b,F,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){let Ge=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new wn(1,1,{generateMipmaps:!0,type:Ge?li:Mn,minFilter:Kn,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace})}let be=E.state.transmissionRenderTarget[k.id],Ie=k.viewport||he;be.setSize(Ie.z*I.transmissionResolutionScale,Ie.w*I.transmissionResolutionScale);let Se=I.getRenderTarget(),Fe=I.getActiveCubeFace(),Be=I.getActiveMipmapLevel();I.setRenderTarget(be),I.getClearColor(Ve),De=I.getClearAlpha(),De<1&&I.setClearColor(16777215,.5),I.clear(),ye&&Ze.render(X);let Qe=I.toneMapping;I.toneMapping=Zn;let st=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),ie===!0&&Ue.setGlobalState(I.clippingPlanes,k),zs(b,X,k),K.updateMultisampleRenderTarget(be),K.updateRenderTargetMipmap(be),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let bt=0,zt=F.length;bt<zt;bt++){let Ot=F[bt],{object:Tt,geometry:on,material:we,group:En}=Ot;if(we.side===Et&&Tt.layers.test(k.layers)){let mt=we.side;we.side=nn,we.needsUpdate=!0,ta(Tt,X,k,on,we,En),we.side=mt,we.needsUpdate=!0,Ge=!0}}Ge===!0&&(K.updateMultisampleRenderTarget(be),K.updateRenderTargetMipmap(be))}I.setRenderTarget(Se,Fe,Be),I.setClearColor(Ve,De),st!==void 0&&(k.viewport=st),I.toneMapping=Qe}function zs(b,F,X){let k=F.isScene===!0?F.overrideMaterial:null;for(let V=0,be=b.length;V<be;V++){let Ie=b[V],{object:Se,geometry:Fe,group:Be}=Ie,Qe=Ie.material;Qe.allowOverride===!0&&k!==null&&(Qe=k),Se.layers.test(X.layers)&&ta(Se,F,X,Fe,Qe,Be)}}function ta(b,F,X,k,V,be){b.onBeforeRender(I,F,X,k,V,be),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(I,F,X,k,b,be),V.transparent===!0&&V.side===Et&&V.forceSinglePass===!1?(V.side=nn,V.needsUpdate=!0,I.renderBufferDirect(X,F,k,V,b,be),V.side=qn,V.needsUpdate=!0,I.renderBufferDirect(X,F,k,V,b,be),V.side=Et):I.renderBufferDirect(X,F,k,V,b,be),b.onAfterRender(I,F,X,k,V,be)}function Hs(b,F,X){F.isScene!==!0&&(F=Ee);let k=z.get(b),V=E.state.lights,be=E.state.shadowsArray,Ie=V.state.version,Se=oe.getParameters(b,V.state,be,F,X,E.state.lightProbeGridArray),Fe=oe.getProgramCacheKey(Se),Be=k.programs;k.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,k.fog=F.fog;let Qe=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;k.envMap=ce.get(b.envMap||k.environment,Qe),k.envMapRotation=k.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Be===void 0&&(b.addEventListener("dispose",ht),Be=new Map,k.programs=Be);let st=Be.get(Fe);if(st!==void 0){if(k.currentProgram===st&&k.lightsStateVersion===Ie)return Qu(b,Se),st}else Se.uniforms=oe.getUniforms(b),P!==null&&b.isNodeMaterial&&P.build(b,X,Se),b.onBeforeCompile(Se,I),st=oe.acquireProgram(Se,Fe),Be.set(Fe,st),k.uniforms=Se.uniforms;let Ge=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ge.clippingPlanes=Ue.uniform),Qu(b,Se),k.needsLights=Lm(b),k.lightsStateVersion=Ie,k.needsLights&&(Ge.ambientLightColor.value=V.state.ambient,Ge.lightProbe.value=V.state.probe,Ge.directionalLights.value=V.state.directional,Ge.directionalLightShadows.value=V.state.directionalShadow,Ge.spotLights.value=V.state.spot,Ge.spotLightShadows.value=V.state.spotShadow,Ge.rectAreaLights.value=V.state.rectArea,Ge.ltc_1.value=V.state.rectAreaLTC1,Ge.ltc_2.value=V.state.rectAreaLTC2,Ge.pointLights.value=V.state.point,Ge.pointLightShadows.value=V.state.pointShadow,Ge.hemisphereLights.value=V.state.hemi,Ge.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ge.spotLightMatrix.value=V.state.spotLightMatrix,Ge.spotLightMap.value=V.state.spotLightMap,Ge.pointShadowMatrix.value=V.state.pointShadowMatrix),k.lightProbeGrid=E.state.lightProbeGridArray.length>0,k.currentProgram=st,k.uniformsList=null,st}function ju(b){if(b.uniformsList===null){let F=b.currentProgram.getUniforms();b.uniformsList=Rr.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Qu(b,F){let X=z.get(b);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function Cm(b,F){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(F.matrixWorld);for(let X=0,k=b.length;X<k;X++){let V=b[X];if(V.texture!==null&&V.boundingBox.containsPoint(v))return V}return null}function Im(b,F,X,k,V){F.isScene!==!0&&(F=Ee),K.resetTextureUnits();let be=F.fog,Ie=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?F.environment:null,Se=j===null?I.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:rt.workingColorSpace,Fe=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Be=ce.get(k.envMap||Ie,Fe),Qe=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,st=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ge=!!X.morphAttributes.position,bt=!!X.morphAttributes.normal,zt=!!X.morphAttributes.color,Ot=Zn;k.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ot=I.toneMapping);let Tt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,on=Tt!==void 0?Tt.length:0,we=z.get(k),En=E.state.lights;if(ie===!0&&(q===!0||b!==le)){let It=b===le&&k.id===ne;Ue.setState(k,b,It)}let mt=!1;k.version===we.__version?(we.needsLights&&we.lightsStateVersion!==En.state.version||we.outputColorSpace!==Se||V.isBatchedMesh&&we.batching===!1||!V.isBatchedMesh&&we.batching===!0||V.isBatchedMesh&&we.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&we.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&we.instancing===!1||!V.isInstancedMesh&&we.instancing===!0||V.isSkinnedMesh&&we.skinning===!1||!V.isSkinnedMesh&&we.skinning===!0||V.isInstancedMesh&&we.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&we.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&we.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&we.instancingMorph===!1&&V.morphTexture!==null||we.envMap!==Be||k.fog===!0&&we.fog!==be||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Ue.numPlanes||we.numIntersection!==Ue.numIntersection)||we.vertexAlphas!==Qe||we.vertexTangents!==st||we.morphTargets!==Ge||we.morphNormals!==bt||we.morphColors!==zt||we.toneMapping!==Ot||we.morphTargetsCount!==on||!!we.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,we.__version=k.version);let Nn=we.currentProgram;mt===!0&&(Nn=Hs(k,F,V),P&&k.isNodeMaterial&&P.onUpdateProgram(k,Nn,we));let Qn=!1,Li=!1,ks=!1,At=Nn.getUniforms(),Ht=we.uniforms;if(y.useProgram(Nn.program)&&(Qn=!0,Li=!0,ks=!0),k.id!==ne&&(ne=k.id,Li=!0),we.needsLights){let It=Cm(E.state.lightProbeGridArray,V);we.lightProbeGrid!==It&&(we.lightProbeGrid=It,Li=!0)}if(Qn||le!==b){y.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),At.setValue(N,"projectionMatrix",b.projectionMatrix),At.setValue(N,"viewMatrix",b.matrixWorldInverse);let Di=At.map.cameraPosition;Di!==void 0&&Di.setValue(N,se.setFromMatrixPosition(b.matrixWorld)),w.logarithmicDepthBuffer&&At.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&At.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),le!==b&&(le=b,Li=!0,ks=!0)}if(we.needsLights&&(En.state.directionalShadowMap.length>0&&At.setValue(N,"directionalShadowMap",En.state.directionalShadowMap,K),En.state.spotShadowMap.length>0&&At.setValue(N,"spotShadowMap",En.state.spotShadowMap,K),En.state.pointShadowMap.length>0&&At.setValue(N,"pointShadowMap",En.state.pointShadowMap,K)),V.isSkinnedMesh){At.setOptional(N,V,"bindMatrix"),At.setOptional(N,V,"bindMatrixInverse");let It=V.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),At.setValue(N,"boneTexture",It.boneTexture,K))}V.isBatchedMesh&&(At.setOptional(N,V,"batchingTexture"),At.setValue(N,"batchingTexture",V._matricesTexture,K),At.setOptional(N,V,"batchingIdTexture"),At.setValue(N,"batchingIdTexture",V._indirectTexture,K),At.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&At.setValue(N,"batchingColorTexture",V._colorsTexture,K));let Ni=X.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&D.update(V,X,Nn),(Li||we.receiveShadow!==V.receiveShadow)&&(we.receiveShadow=V.receiveShadow,At.setValue(N,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&F.environment!==null&&(Ht.envMapIntensity.value=F.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=Jv()),Li){if(At.setValue(N,"toneMappingExposure",I.toneMappingExposure),we.needsLights&&Pm(Ht,ks),be&&k.fog===!0&&Re.refreshFogUniforms(Ht,be),Re.refreshMaterialUniforms(Ht,k,ae,ge,E.state.transmissionRenderTarget[b.id]),we.needsLights&&we.lightProbeGrid){let It=we.lightProbeGrid;Ht.probesSH.value=It.texture,Ht.probesMin.value.copy(It.boundingBox.min),Ht.probesMax.value.copy(It.boundingBox.max),Ht.probesResolution.value.copy(It.resolution)}Rr.upload(N,ju(we),Ht,K)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Rr.upload(N,ju(we),Ht,K),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&At.setValue(N,"center",V.center),At.setValue(N,"modelViewMatrix",V.modelViewMatrix),At.setValue(N,"normalMatrix",V.normalMatrix),At.setValue(N,"modelMatrix",V.matrixWorld),k.uniformsGroups!==void 0){let It=k.uniformsGroups;for(let Di=0,Gs=It.length;Di<Gs;Di++){let ef=It[Di];ee.update(ef,Nn),ee.bind(ef,Nn)}}return Nn}function Pm(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Lm(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(b,F,X){let k=z.get(b);k.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),z.get(b.texture).__webglTexture=F,z.get(b.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){let X=z.get(b);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,X=0){j=b,H=F,G=X;let k=null,V=!1,be=!1;if(b){let Se=z.get(b);if(Se.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(N.FRAMEBUFFER,Se.__webglFramebuffer),he.copy(b.viewport),_e.copy(b.scissor),ze=b.scissorTest,y.viewport(he),y.scissor(_e),y.setScissorTest(ze),ne=-1;return}else if(Se.__webglFramebuffer===void 0)K.setupRenderTarget(b);else if(Se.__hasExternalTextures)K.rebindTextures(b,z.get(b.texture).__webglTexture,z.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Qe=b.depthTexture;if(Se.__boundDepthTexture!==Qe){if(Qe!==null&&z.has(Qe)&&(b.width!==Qe.image.width||b.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(b)}}let Fe=b.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(be=!0);let Be=z.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Be[F])?k=Be[F][X]:k=Be[F],V=!0):b.samples>0&&K.useMultisampledRTT(b)===!1?k=z.get(b).__webglMultisampledFramebuffer:Array.isArray(Be)?k=Be[X]:k=Be,he.copy(b.viewport),_e.copy(b.scissor),ze=b.scissorTest}else he.copy(He).multiplyScalar(ae).floor(),_e.copy(pt).multiplyScalar(ae).floor(),ze=Ye;if(X!==0&&(k=W),y.bindFramebuffer(N.FRAMEBUFFER,k)&&y.drawBuffers(b,k),y.viewport(he),y.scissor(_e),y.setScissorTest(ze),V){let Se=z.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,Se.__webglTexture,X)}else if(be){let Se=F;for(let Fe=0;Fe<b.textures.length;Fe++){let Be=z.get(b.textures[Fe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Fe,Be.__webglTexture,X,Se)}}else if(b!==null&&X!==0){let Se=z.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Se.__webglTexture,X)}ne=-1},this.readRenderTargetPixels=function(b,F,X,k,V,be,Ie,Se=0){if(!(b&&b.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=z.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ie!==void 0&&(Fe=Fe[Ie]),Fe){y.bindFramebuffer(N.FRAMEBUFFER,Fe);try{let Be=b.textures[Se],Qe=Be.format,st=Be.type;if(b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Se),!w.textureFormatReadable(Qe)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(st)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-k&&X>=0&&X<=b.height-V&&N.readPixels(F,X,k,V,fe.convert(Qe),fe.convert(st),be)}finally{let Be=j!==null?z.get(j).__webglFramebuffer:null;y.bindFramebuffer(N.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(b,F,X,k,V,be,Ie,Se=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=z.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ie!==void 0&&(Fe=Fe[Ie]),Fe)if(F>=0&&F<=b.width-k&&X>=0&&X<=b.height-V){y.bindFramebuffer(N.FRAMEBUFFER,Fe);let Be=b.textures[Se],Qe=Be.format,st=Be.type;if(b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Se),!w.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ge=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ge),N.bufferData(N.PIXEL_PACK_BUFFER,be.byteLength,N.STREAM_READ),N.readPixels(F,X,k,V,fe.convert(Qe),fe.convert(st),0);let bt=j!==null?z.get(j).__webglFramebuffer:null;y.bindFramebuffer(N.FRAMEBUFFER,bt);let zt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Rd(N,zt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ge),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,be),N.deleteBuffer(Ge),N.deleteSync(zt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,X=0){let k=Math.pow(2,-X),V=Math.floor(b.image.width*k),be=Math.floor(b.image.height*k),Ie=F!==null?F.x:0,Se=F!==null?F.y:0;K.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,Ie,Se,V,be),y.unbindTexture()},this.copyTextureToTexture=function(b,F,X=null,k=null,V=0,be=0){let Ie,Se,Fe,Be,Qe,st,Ge,bt,zt,Ot=b.isCompressedTexture?b.mipmaps[be]:b.image;if(X!==null)Ie=X.max.x-X.min.x,Se=X.max.y-X.min.y,Fe=X.isBox3?X.max.z-X.min.z:1,Be=X.min.x,Qe=X.min.y,st=X.isBox3?X.min.z:0;else{let Ht=Math.pow(2,-V);Ie=Math.floor(Ot.width*Ht),Se=Math.floor(Ot.height*Ht),b.isDataArrayTexture?Fe=Ot.depth:b.isData3DTexture?Fe=Math.floor(Ot.depth*Ht):Fe=1,Be=0,Qe=0,st=0}k!==null?(Ge=k.x,bt=k.y,zt=k.z):(Ge=0,bt=0,zt=0);let Tt=fe.convert(F.format),on=fe.convert(F.type),we;F.isData3DTexture?(K.setTexture3D(F,0),we=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(K.setTexture2DArray(F,0),we=N.TEXTURE_2D_ARRAY):(K.setTexture2D(F,0),we=N.TEXTURE_2D),y.activeTexture(N.TEXTURE0),y.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),y.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),y.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);let En=y.getParameter(N.UNPACK_ROW_LENGTH),mt=y.getParameter(N.UNPACK_IMAGE_HEIGHT),Nn=y.getParameter(N.UNPACK_SKIP_PIXELS),Qn=y.getParameter(N.UNPACK_SKIP_ROWS),Li=y.getParameter(N.UNPACK_SKIP_IMAGES);y.pixelStorei(N.UNPACK_ROW_LENGTH,Ot.width),y.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ot.height),y.pixelStorei(N.UNPACK_SKIP_PIXELS,Be),y.pixelStorei(N.UNPACK_SKIP_ROWS,Qe),y.pixelStorei(N.UNPACK_SKIP_IMAGES,st);let ks=b.isDataArrayTexture||b.isData3DTexture,At=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){let Ht=z.get(b),Ni=z.get(F),It=z.get(Ht.__renderTarget),Di=z.get(Ni.__renderTarget);y.bindFramebuffer(N.READ_FRAMEBUFFER,It.__webglFramebuffer),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let Gs=0;Gs<Fe;Gs++)ks&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,z.get(b).__webglTexture,V,st+Gs),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,z.get(F).__webglTexture,be,zt+Gs)),N.blitFramebuffer(Be,Qe,Ie,Se,Ge,bt,Ie,Se,N.DEPTH_BUFFER_BIT,N.NEAREST);y.bindFramebuffer(N.READ_FRAMEBUFFER,null),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||z.has(b)){let Ht=z.get(b),Ni=z.get(F);y.bindFramebuffer(N.READ_FRAMEBUFFER,Y),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,U);for(let It=0;It<Fe;It++)ks?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ht.__webglTexture,V,st+It):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ht.__webglTexture,V),At?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ni.__webglTexture,be,zt+It):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ni.__webglTexture,be),V!==0?N.blitFramebuffer(Be,Qe,Ie,Se,Ge,bt,Ie,Se,N.COLOR_BUFFER_BIT,N.NEAREST):At?N.copyTexSubImage3D(we,be,Ge,bt,zt+It,Be,Qe,Ie,Se):N.copyTexSubImage2D(we,be,Ge,bt,Be,Qe,Ie,Se);y.bindFramebuffer(N.READ_FRAMEBUFFER,null),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else At?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(we,be,Ge,bt,zt,Ie,Se,Fe,Tt,on,Ot.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(we,be,Ge,bt,zt,Ie,Se,Fe,Tt,Ot.data):N.texSubImage3D(we,be,Ge,bt,zt,Ie,Se,Fe,Tt,on,Ot):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,be,Ge,bt,Ie,Se,Tt,on,Ot.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,be,Ge,bt,Ot.width,Ot.height,Tt,Ot.data):N.texSubImage2D(N.TEXTURE_2D,be,Ge,bt,Ie,Se,Tt,on,Ot);y.pixelStorei(N.UNPACK_ROW_LENGTH,En),y.pixelStorei(N.UNPACK_IMAGE_HEIGHT,mt),y.pixelStorei(N.UNPACK_SKIP_PIXELS,Nn),y.pixelStorei(N.UNPACK_SKIP_ROWS,Qn),y.pixelStorei(N.UNPACK_SKIP_IMAGES,Li),be===0&&F.generateMipmaps&&N.generateMipmap(we),y.unbindTexture()},this.initRenderTarget=function(b){z.get(b).__webglFramebuffer===void 0&&K.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?K.setTextureCube(b,0):b.isData3DTexture?K.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?K.setTexture2DArray(b,0):K.setTexture2D(b,0),y.unbindTexture()},this.resetState=function(){H=0,G=0,j=null,y.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}};async function dp(){if(typeof window<"u"&&window.MCGROT_ASSETS)return window.MCGROT_ASSETS;let[i,e,t,n,s,r]=await Promise.all([fetch("assets/manifest.json").then(a=>a.json()),fetch("assets/leith.json").then(a=>a.json()),fetch("assets/catalog.json").then(a=>a.ok?a.json():null).catch(()=>null),fetch("assets/shopfronts/atlas.json").then(a=>a.ok?a.json():null).catch(()=>null),fetch("assets/shopfronts/placement.json").then(a=>a.ok?a.json():null).catch(()=>null),fetch("assets/shopfronts/strips.json").then(a=>a.ok?a.json():null).catch(()=>null)]),o=await fetch("assets/comic-lines.json").then(a=>a.ok?a.json():null).catch(()=>null);return n&&s&&(n.placement=s),n&&r&&(n.strips=r),{manifest:i,leith:e,catalog:t,shopfronts:n,comicLines:o,images:null,audio:null}}function zn(i,e){if(i){if(i.images&&i.images[e])return i.images[e];if(i.audio&&i.audio[e])return i.audio[e]}return`assets/${e}`}function ct(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new gt,l=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=pp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let m=pp(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function pp(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new kt(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<t;m++){let x=h.getComponent(f,m);a.setComponent(f+u,m,x)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function lu(i,e){if(e===Hh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ar||e===ko){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Ar)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var qo=(()=>{let i=6221086;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),xp=8,uu=2.4,mp=1.435,dl=.075,gp=.09,$v=620,jv=90,Qv=34,eM=.04;function Ls(i,e,t){let n=Math.imul(i,374761393)^Math.imul(e,668265263)^Math.imul(t,2246822519);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function tM(i,e,t,n){let s=Math.floor(i),r=Math.floor(e),o=i-s,a=e-r,c=o*o*(3-2*o),l=a*a*(3-2*a),h=(x,p)=>Ls((x%t+t)%t,(p%t+t)%t,n),u=h(s,r),f=h(s+1,r),d=h(s,r+1),m=h(s+1,r+1);return u+(f-u)*c+(d+(m-d)*c-(u+(f-u)*c))*l}function xn(i,e,t,n,s){let r=0,o=.5,a=1;for(let c=0;c<n;c++)r+=o*tM(i*a,e*a,t*a,s+c*17),a*=2,o*=.5;return r}function fu(i,e){let t=new Bt(i);return t.wrapS=t.wrapT=On,t.colorSpace=tt,t.anisotropy=16,e&&t.repeat.set(e[0],e[1]),t}function _p(){let t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d"),s=n.createImageData(512,512),r=s.data;for(let o=0;o<512;o++)for(let a=0;a<512;a++){let c=a/512*8,l=o/512*8,h=44,u=45,f=41,d=xn(c,l,8,4,1)-.5;h+=d*26,u+=d*26,f+=d*22;let m=xn(c*.5,l*.5,Math.max(1,4),2,7);if(m>.6){let A=Math.min(1,(m-.6)*6);h+=(26-h)*.55*A,u+=(26-u)*.55*A,f+=(25-f)*.55*A}let x=Ls(a,o,99),p=x>.86?(x-.86)*300:x<.1?-x*90:0;h+=p,u+=p,f+=p*.9;let g=c*1.6+xn(c*3,l*3,32,2,55)*1.4,S=l*1.6+xn(c*3+9,l*3+9,32,2,71)*1.4,M=Math.abs(xn(g,S,16,3,21)-.5);if(M<.012){let A=1-M/.012;h-=15*A,u-=15*A,f-=14*A}let v=(o*512+a)*4;r[v]=Math.max(0,Math.min(255,h)),r[v+1]=Math.max(0,Math.min(255,u)),r[v+2]=Math.max(0,Math.min(255,f)),r[v+3]=255}return n.putImageData(s,0,0),fu(t)}function yp(){let n=document.createElement("canvas");n.width=n.height=512;let s=n.getContext("2d"),r=s.createImageData(512,512),o=r.data,a=512/4,c=3;for(let l=0;l<512;l++)for(let h=0;h<512;h++){let u=Math.floor(h/a),f=Math.floor(l/a),d=h-u*a,m=l-f*a,x=d<c||m<c||d>a-c||m>a-c,p=(Ls(u,f,5)-.5)*18,g=78+p,S=77+p,M=71+p,v=h/512*8,A=l/512*8,E=xn(v,A,8,4,3)-.5;g+=E*34,S+=E*34,M+=E*30,x&&(g*=.52,S*=.56,M*=.48);let R=Ls(h,l,41),_=R>.9?(R-.9)*160:0;g+=_,S+=_,M+=_;let T=(l*512+h)*4;o[T]=Math.max(0,Math.min(255,g)),o[T+1]=Math.max(0,Math.min(255,S)),o[T+2]=Math.max(0,Math.min(255,M)),o[T+3]=255}return s.putImageData(r,0,0),fu(n)}function vp(i,e){let n=document.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d"),r=s.createImageData(256,256),o=r.data,a=256/2;for(let l=0;l<256;l++)for(let h=0;h<256;h++){let u=(h-a)/a,f=(l-a)/a,d=Math.atan2(f,u),m=Math.hypot(u,f),x=.7+.26*xn(Math.cos(d)*2+4,Math.sin(d)*2+4,8,3,i),[p,g,S,M]=e(m/x,h,l),v=(l*256+h)*4;o[v]=Math.max(0,Math.min(255,p)),o[v+1]=Math.max(0,Math.min(255,g)),o[v+2]=Math.max(0,Math.min(255,S)),o[v+3]=Math.max(0,Math.min(255,M))}s.putImageData(r,0,0);let c=new Bt(n);return c.colorSpace=tt,c.anisotropy=16,c}function hu(i,e,t){return[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t]}function nM(){let i=[10,10,9],e=[40,39,35],t=[104,100,88];return vp(11,(n,s,r)=>{let o=Ls(s,r,63),a;n<.72?a=hu(i,e,Yo(0,.72,n)):(a=hu(e,t,Yo(.72,.97,n)),a=a.map(l=>l+(o-.5)*26));let c=(1-Yo(.9,1,n))*255;return[a[0],a[1],a[2],c]})}function iM(){let i=[104,110,96],e=[52,54,48];return vp(23,t=>{let n=hu(i,e,Yo(.35,1,t)),s=(1-Yo(.86,1,t))*255;return[n[0],n[1],n[2],s]})}function Yo(i,e,t){let n=Math.max(0,Math.min(1,(t-i)/(e-i||1e-6)));return n*n*(3-2*n)}var du=26;function Mp(){let t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d"),s=n.createImageData(512,512),r=s.data;for(let o=0;o<512;o++)for(let a=0;a<512;a++){let c=a/512*8,l=o/512*8,h=62,u=52,f=36,d=xn(c,l,8,4,131)-.5;h+=d*30,u+=d*26,f+=d*20;let m=xn(c*.9+3,l*.9+3,8,3,137);if(m>.56){let M=Math.min(1,(m-.56)*5);h+=(52-h)*.6*M,u+=(60-u)*.6*M,f+=(34-f)*.6*M}let x=xn(c*.6+11,l*.6+11,8,3,149);if(x<.42){let M=Math.min(1,(.42-x)*4);h*=1-.28*M,u*=1-.26*M,f*=1-.22*M}let p=Ls(a,o,151),g=p>.9?(p-.9)*220:p<.07?-p*120:0;h+=g,u+=g*.95,f+=g*.8;let S=(o*512+a)*4;r[S]=Math.max(0,Math.min(255,h)),r[S+1]=Math.max(0,Math.min(255,u)),r[S+2]=Math.max(0,Math.min(255,f)),r[S+3]=255}return n.putImageData(s,0,0),fu(t)}function Sp(){let t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d"),s=n.createImageData(512,512),r=s.data;for(let a=0;a<512;a++)for(let c=0;c<512;c++){let l=c/512*22,h=a/512*22,u=40,f=47,d=26,m=xn(l,h,22,4,211)-.5;u+=m*30,f+=m*36,d+=m*20;let x=xn(l*.55+5,h*.55+5,22,3,223);if(x>.5){let I=Math.min(1,(x-.5)*5);u+=(24-u)*.8*I,f+=(33-f)*.8*I,d+=(17-d)*.8*I}let p=xn(l*.7+17,h*.7+2,22,3,239);if(p>.62){let I=Math.min(1,(p-.62)*6);u+=(66-u)*.55*I,f+=(58-f)*.55*I,d+=(36-d)*.55*I}let g=Math.abs(xn(l*.5+9,h*2.2,22,2,227)-.5);if(g<.035){let I=1-g/.035;u+=(74-u)*.5*I,f+=(64-f)*.5*I,d+=(44-d)*.5*I}let S=Ls(c,a,229),M=S>.88?(S-.88)*160:0;u+=M*.7,f+=M,d+=M*.5;let v=Math.min(c,511-c)/512,A=Math.min(a,511-a)/512,E=Math.min(v,A)/.14,R=xn(l*2,h*2,44,2,233)*.5,_=Math.max(0,Math.min(1,E-R)),T=(a*512+c)*4;r[T]=Math.max(0,Math.min(255,u)),r[T+1]=Math.max(0,Math.min(255,f)),r[T+2]=Math.max(0,Math.min(255,d)),r[T+3]=Math.round(_*255)}n.putImageData(s,0,0);let o=new Bt(t);return o.colorSpace=tt,o.anisotropy=16,o}function bp(i,e){let t=i.streetLine||[];if(t.length<2)return{group:new nt};let n=new nt;return e.add(n),sM(t,n),rM(t,n),{group:n}}function Zo(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,h=Math.hypot(c,l);if(t+h>=e){let u=h>0?(e-t)/h:0;return{point:[s+c*u,r+l*u],tangent:[c/(h||1),l/(h||1)]}}t+=h}return null}function Ep(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function sM(i,e){let t=Math.min($v,Ep(i)),n=3,s=[],r=[[-dl/2,0],[-dl/2,gp],[dl/2,gp],[dl/2,0]];for(let c of[-1,1]){let l=[],h=[],u=0;for(let m=0;m<=t;m+=n){let x=Zo(i,m);if(!x)break;let[p,g]=x.tangent,S=-g,M=p,v=x.point[0]+S*c*(mp/2),A=x.point[1]+M*c*(mp/2);for(let[E,R]of r)l.push(v+S*E,R,A+M*E);u++}if(u<2)continue;let f=r.length;for(let m=0;m<u-1;m++)for(let x=0;x<f-1;x++){let p=m*f+x,g=m*f+x+1,S=(m+1)*f+x,M=(m+1)*f+x+1;h.push(p,S,g,g,S,M)}let d=new gt;d.setAttribute("position",new Je(l,3)),d.setIndex(h),d.computeVertexNormals(),s.push(d)}if(!s.length)return;let o=ct(s,!1),a=new je({color:4142124,side:Et});e.add(new Ne(o,a))}function rM(i,e){let t=Ep(i),n=nM(),s=iM(),r=(o,a,c,l,h,u)=>{let f=[];for(let m=0;m<a;m++){let x=20+qo()*Math.max(1,t-40),p=Zo(i,x);if(!p)continue;let[g,S]=p.tangent,M=-S,v=g,A=(qo()*2-1)*c,E=p.point[0]+M*A,R=p.point[1]+v*A,_=l+qo()*(h-l),T=new Jt(_,_*(.6+qo()*.7));T.rotateX(-Math.PI/2),T.rotateY(qo()*Math.PI*2),T.translate(E,eM,R),f.push(T)}if(!f.length)return;let d=new je({map:o,transparent:!0,opacity:u,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});e.add(new Ne(ct(f,!1),d))};r(n,jv,6.2,.7,2.4,.92),r(s,Qv,6.2,1.2,3.6,.5)}var Ko=7,oM=3,Tp=Ko+oM,aM=.03,cM=3.2,lM=2,hM=-.06,uM=4870466,Ap=[9078112,7039843,8016448,5592655,7630666,7232847,6249034,8153690];function Rp(i){let e=new nt,t=fM(i.streetPaths);t&&e.add(t);let n=gM(i.buildings);n&&e.add(n),e.add(vM(i)),e.add(MM()),SM(e);let s=pM(i.streetPaths),r=new Qr(uM,.0095);return{group:e,streetLine:s,nearestStreetPoint:mM(s),fog:r}}function fM(i){let e=[],t=[];for(let s of i){if(s.length<2)continue;let r=dM(s);r&&(e.push(r.road),t.push(r.paving))}if(e.length===0)return null;let n=new nt;return n.position.y=aM,n.add(new Ne(ct(e,!1),new je({map:_p()}))),n.add(new Ne(ct(t,!1),new je({map:yp()}))),n}function dM(i){let e=i.length,t=[],n=[],s=0;for(let o=0;o<e;o++){let a=i[Math.max(0,o-1)],c=i[Math.min(e-1,o+1)],l=c[0]-a[0],h=c[1]-a[1],u=Math.hypot(l,h)||1;t.push([-h/u,l/u]),o>0&&(s+=Math.hypot(i[o][0]-i[o-1][0],i[o][1]-i[o-1][1])),n.push(s)}let r=(o,a,c)=>{let l=[],h=[],u=[],f=Math.abs(a-o);for(let m=0;m<e;m++){let[x,p]=i[m],[g,S]=t[m],M=n[m]/c;l.push(x+g*o,0,p+S*o),l.push(x+g*a,0,p+S*a),h.push(0,M,f/c,M)}for(let m=0;m<e-1;m++){let x=m*2,p=m*2+1,g=(m+1)*2,S=(m+1)*2+1;u.push(x,p,S,x,S,g)}let d=new gt;return d.setAttribute("position",new Je(l,3)),d.setAttribute("uv",new Je(h,2)),d.setIndex(u),d.computeVertexNormals(),d};return{road:r(-Ko,Ko,xp),paving:ct([r(-Tp,-Ko,uu),r(Ko,Tp,uu)],!1)}}function pM(i){let e=[],t=[],n=[];function s(u){for(let f=0;f<e.length;f++){let d=e[f].x-u[0],m=e[f].z-u[1];if(Math.hypot(d,m)<lM)return f}return e.push({x:u[0],z:u[1]}),e.length-1}i.forEach((u,f)=>{if(u.length<2)return;let d=s(u[0]),m=s(u[u.length-1]);t[f]=[d,m],(n[d]??=[]).push({segIdx:f,otherNode:m}),(n[m]??=[]).push({segIdx:f,otherNode:d})});let r=new Set;function o(u){let f=[[e[u].x,e[u].z]],d=u;for(;;){let m=(n[d]||[]).filter(v=>!r.has(v.segIdx));if(m.length===0)break;let{segIdx:x,otherNode:p}=m[0];r.add(x);let g=i[x],[S]=t[x],M=S===d?g:[...g].reverse();for(let v=1;v<M.length;v++)f.push(M[v]);d=p}return f}function a(u){let f=0;for(let d=1;d<u.length;d++)f+=Math.hypot(u[d][0]-u[d-1][0],u[d][1]-u[d-1][1]);return f}let c=[],l=e.map((u,f)=>f).filter(u=>(n[u]||[]).length!==2);for(let u of l){let f=r.size,d=o(u);r.size>f&&c.push(d)}for(let u=0;u<e.length;u++)(n[u]||[]).some(d=>!r.has(d.segIdx))&&c.push(o(u));c.sort((u,f)=>a(f)-a(u));let h=c[0]||[];return h.length>1&&h[0][1]>h[h.length-1][1]&&h.reverse(),h}function mM(i){return function(t,n){let s=null,r=1/0,o=null;for(let a=0;a<i.length-1;a++){let[c,l]=i[a],[h,u]=i[a+1],f=h-c,d=u-l,m=f*f+d*d,x=m>0?((t-c)*f+(n-l)*d)/m:0;x=Math.max(0,Math.min(1,x));let p=c+x*f,g=l+x*d,S=Math.hypot(t-p,n-g);if(S<r){r=S,s=[p,g];let M=Math.sqrt(m);o=M>0?[f/M,d/M]:[0,1]}}return{point:s,distance:r,tangent:o}}}function gM(i){let e=[],t=0;if(i.forEach((r,o)=>{let a=xM(r,o);a?e.push(a):t++}),e.length===0)return null;t>0&&console.warn(`[world] skipped ${t}/${i.length} buildings with bad footprints`);let n=ct(e,!1),s=new je({vertexColors:!0,flatShading:!0});return new Ne(n,s)}function xM(i,e){let{footprint:t,levels:n}=i;if(!t||t.length<3)return null;let s=Math.max(1,n||1)*cM;try{let r=new vr;r.moveTo(t[0][0],-t[0][1]);for(let h=1;h<t.length;h++)r.lineTo(t[h][0],-t[h][1]);r.closePath();let o=new _o(r,{depth:s,bevelEnabled:!1,curveSegments:1});o.rotateX(-Math.PI/2);let a=_M(e,i),c=o.attributes.position.count,l=new Float32Array(c*3);for(let h=0;h<c;h++)l[h*3]=a.r,l[h*3+1]=a.g,l[h*3+2]=a.b;return o.setAttribute("color",new Je(l,3)),o.deleteAttribute("uv"),o}catch{return null}}function _M(i,e){let t=Math.abs(yM(`${i}:${e.footprint[0][0]}:${e.footprint[0][1]}`)),n=new ve(Ap[t%Ap.length]),s={h:0,s:0,l:0};n.getHSL(s);let r=(t%17/17-.5)*.12,o=new ve;return o.setHSL(s.h,s.s,Math.min(.85,Math.max(.08,s.l+r))),o}function yM(i){let e=0;for(let t=0;t<i.length;t++)e=(e<<5)-e+i.charCodeAt(t),e|=0;return e}function vM(i){let e=1/0,t=-1/0,n=1/0,s=-1/0;for(let m of i.buildings)for(let[x,p]of m.footprint)x<e&&(e=x),x>t&&(t=x),p<n&&(n=p),p>s&&(s=p);let r=400,o=t-e+r*2,a=s-n+r*2,c=(e+t)/2,l=(n+s)/2,h=new Jt(o,a);h.rotateX(-Math.PI/2);let u=Mp();u.repeat.set(o/du,a/du);let f=new je({map:u}),d=new Ne(h,f);return d.position.set(c,hM,l),d}function MM(){let i=new Jt(80,14);i.rotateX(-Math.PI/2);let e=-.483,t=.876;i.rotateY(Math.atan2(-t,e));let n=new Ne(i,new je({map:Sp(),transparent:!0,depthWrite:!1}));n.position.set(-719,.02,1303),n.name="elm-row-gardens";let s=924192,r=()=>{s|=0,s=s+1831565813|0;let l=Math.imul(s^s>>>15,1|s);return l=l+Math.imul(l^l>>>7,61|l)^l,((l^l>>>14)>>>0)/4294967296},o=[];for(let l=0;l<26;l++){let h=(r()-.5)*74,u=(r()-.5)*10,f=new bi(1,6,4),d=.5+r()*1.3;f.scale(.9+r()*1.6,d,.9+r()*1.6),f.rotateY(r()*Math.PI),f.translate(-719+e*h-t*u,d*.55,1303+t*h+e*u),o.push(f)}let a=new Ne(ct(o),new je({color:3029024}));a.name="elm-row-bushes";let c=new nt;return c.add(n,a),c}function SM(i){let e=new Mo(9147296,3814180,3.9);i.add(e);let t=new ws(13621480,1.15);t.position.set(-200,300,150),t.castShadow=!1,i.add(t);let n=new To(4999224,1.4);i.add(n)}var bM=16747082,wp=18,EM=5,TM=6.5;function Cp(i){let e=new Ri(bM,wp,TM,2);e.position.set(.15,-.15,.1),i.add(e);function t(n){let s=Math.sin(n*11.3)*.5+Math.sin(n*27.1)*.3+Math.sin(n*4.7)*.2;e.intensity=wp+s*EM*.3333}return{light:e,update:t}}var pl=Math.PI/2-.05,ml={KeyW:"forward",ArrowUp:"forward",KeyS:"backward",ArrowDown:"backward",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right"};function Pp(i,e,{nearestStreetPoint:t,spawn:n}){let s=n.yaw||0,r=0;i.position.set(n.x,1.7,n.z),i.rotation.order="YXZ",f();let o=new Set,a=!1,c=0,l=0,h=!1,u=!0;function f(){i.rotation.set(r,s,0)}function d(R){u&&ml[R.code]&&(o.add(ml[R.code]),R.preventDefault())}function m(R){ml[R.code]&&o.delete(ml[R.code])}function x(R){if(u&&(a=!0,c=R.clientX,l=R.clientY,e.setPointerCapture?.(R.pointerId),!h&&e.requestPointerLock))try{let _=e.requestPointerLock();_&&typeof _.catch=="function"&&_.catch(()=>{})}catch{}}function p(R){if(h){s-=(R.movementX||0)*.0025,r-=(R.movementY||0)*.0025,r=Ip(r,-pl,pl),f();return}if(!a)return;let _=R.clientX-c,T=R.clientY-l;c=R.clientX,l=R.clientY,s-=_*.0035,r-=T*.0035,r=Ip(r,-pl,pl),f()}function g(R){a=!1,e.releasePointerCapture?.(R.pointerId)}function S(){h=document.pointerLockElement===e}window.addEventListener("keydown",d),window.addEventListener("keyup",m),e.addEventListener("pointerdown",x),window.addEventListener("pointermove",p),window.addEventListener("pointerup",g),document.addEventListener("pointerlockchange",S);function M(R){u=!!R,u||(o.clear(),a=!1)}function v(R){u&&(R?o.add("forward"):o.delete("forward"))}function A(R){if(!u)return;let _=0,T=0;if(o.has("forward")&&(T-=1),o.has("backward")&&(T+=1),o.has("left")&&(_-=1),o.has("right")&&(_+=1),_!==0||T!==0){let I=Math.hypot(_,T);_/=I,T/=I;let C=Math.sin(s),P=Math.cos(s),W=-C,Y=-P,U=P,H=-C,G=(W*-T+U*_)*14*R,j=(Y*-T+H*_)*14*R,ne=i.position.x+G,le=i.position.z+j,{point:he,distance:_e}=t(ne,le);if(he&&_e>16){let ze=16/_e;ne=he[0]+(ne-he[0])*ze,le=he[1]+(le-he[1])*ze}i.position.x=ne,i.position.z=le}}function E(){window.removeEventListener("keydown",d),window.removeEventListener("keyup",m),e.removeEventListener("pointerdown",x),window.removeEventListener("pointermove",p),window.removeEventListener("pointerup",g),document.removeEventListener("pointerlockchange",S)}return{update:A,dispose:E,setEnabled:M,setForward:v}}function Ip(i,e,t){return Math.max(e,Math.min(t,i))}var Lp=6,Np=40,AM=60,wM=34,Dp=[4867638,4276026,5525567,3882292,5195578,3749420,4737602,5919040],Up=[7025448,7363619,3032640,5849646,4011091,6703646],RM=new ai;function Fp(i,e){return RM.load(i,t=>{t.colorSpace=tt,e&&e(t)})}function gl(i,e,t){let n=Math.imul(i,374761393)^Math.imul(e,668265263)^Math.imul(t,2246822519);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function CM(i,e,t){let s=document.createElement("canvas");s.width=s.height=64;let r=s.getContext("2d"),o=r.createImageData(64,64),a=o.data,c={r:(i>>16&255)/255,g:(i>>8&255)/255,b:(i&255)/255};for(let h=0;h<64;h++)for(let u=0;u<64;u++){let f=t?1+.14*Math.sin(h*1.9)+(gl(u,h,e)-.5)*.1:1.05+.1*Math.sin(u*2.3)+(gl(u,h,e)-.5)*.16,d=1-.18*gl(u>>3,h>>3,e+7)*gl(u>>4,h>>4,e+13),m=1-.2*Math.pow(h/64,3),x=f*d*m,p=(h*64+u)*4;a[p]=Math.min(255,c.r*255*x),a[p+1]=Math.min(255,c.g*255*x),a[p+2]=Math.min(255,c.b*255*x),a[p+3]=255}r.putImageData(o,0,0);let l=new Bt(s);return l.colorSpace=tt,l}var pu=new Map;function Jo(i,e){let t=i*2+(e?1:0);return pu.has(t)||pu.set(t,new je({map:CM(i,i&65535^(e?40503:0),e),flatShading:!0})),pu.get(t)}function Op(i,e,t,n){let s=i.catalog&&Array.isArray(i.catalog.comics)?i.catalog.comics.filter(m=>m.npc):i.manifest.comics||[],r=e.streetLine||[],o=[],a=new Map,c=(m,x)=>{m&&(a.has(m)||a.set(m,[]),a.get(m).push(x))},l=NM(r),h=Math.max(1,l-Np-AM),u=s.length>1?h/(s.length-1):0;s.forEach((m,x)=>{let p=Np+x*u,g=x%2===0?1:-1,S=DM(r,p);if(!S)return;let[M,v]=S.tangent,A=-v,E=M,R=S.point[0]+A*Lp*g,_=S.point[1]+E*Lp*g,T=S.point[0]-R,I=S.point[1]-_,C=Math.atan2(T,I),P=IM(i,m,Dp[x%Dp.length],c);P.group.position.set(R,0,_),P.group.rotation.y=C,P.baseY=C,P.phase=x*2.1,t.add(P.group),o.push(P)});for(let[m,x]of a)Fp(zn(i,m),p=>{for(let g of x)g.map=p,g.color.set(16777215),g.needsUpdate=!0});let f=new L;function d(m,x){let p=n?n.position:null;for(let g=0;g<o.length;g++){let S=o[g];if(S.tick(x),p&&!S.comicLoaded){let M=S.group.position;Math.hypot(p.x-M.x,p.z-M.z)<wM&&S.loadComic()}}}return{npcs:o,update:d}}function IM(i,e,t,n){let s=e.npc.build||{height:1.9,girth:1,headScale:1.5},r=s.height,o=s.girth,a=s.headScale,c=new nt,l=Jo(t,!1),h=new je({color:1381391,flatShading:!0}),u=.12,f=r*.3,d=.52*o,m=.34*o,x=r*.48,p=.34*a,g=u+f,S=g+x,M=S+p*.5+.02,v=M+p*.5,A=d*.24,E=[],R=[];for(let Ve of[-1,1]){let De=new et(d*.4,u,m*1.5);De.translate(Ve*A,u*.5,m*.2),R.push(De)}for(let Ve of[-1,1]){let De=new et(d*.36,f,m*.75);De.translate(Ve*A,u+f*.5,0),E.push(De)}{let Ve=new et(d,x,m);Ve.translate(0,g+x*.5,0),E.push(Ve)}let _=S-x*.14,T=x*.62;for(let Ve of[-1,1]){let De=new et(.13,T,.13);De.rotateX(-1.15),De.rotateZ(Ve*.25),De.translate(Ve*(d*.5+.02),_-T*.28,m*.5+.06),E.push(De)}let I=new Ne(ct(E),l),C=new Ne(ct(R),h);c.add(I,C);let P=Jo(new ve(t).multiplyScalar(.62).getHex(),!0),W=new Yt({color:9077874});n(e.npc.face,W);let Y=[P,P,P,P,W,P],U=new Ne(new et(p,p,p*.85),Y);U.position.set(0,M,0),c.add(U);let H=0;for(let Ve of e.npc.name||"")H=H*31+Ve.charCodeAt(0)|0;let G=new Ne(new et(p*.95,.09,p*.85),new je({color:Up[Math.abs(H)%Up.length],flatShading:!0}));G.position.set(0,S+.02,0),c.add(G);let j=x*.55,ne=new Yt({color:2762786,side:Et}),le=new Ne(new Jt(1,1),ne);le.position.set(0,g+x*.55,m*.5+.17),le.scale.set(j*.7,j,1),c.add(le);let he=new je({color:8680542,flatShading:!0});for(let Ve of[-1,1]){let De=new Ne(new et(.09,.07,.06),he);De.position.set(Ve*j*.28,g+x*.55-j*.48,m*.5+.18),c.add(De)}let _e=PM(e.npc.name,e.npc.blurb);_e.position.set(0,v+.42,0),c.add(_e);let ze={group:c,head:U,comicMesh:le,comic:e,name:e.npc.name,blurb:e.npc.blurb,voice:null,baseY:0,phase:0,speaking:!1,comicLoaded:!1,loadComic(){ze.comicLoaded||(ze.comicLoaded=!0,Fp(zn(i,e.image),Ve=>{ne.map=Ve,ne.color.set(16777215),ne.needsUpdate=!0;let De=Ve.image;De&&De.width&&De.height&&le.scale.set(j*(De.width/De.height),j,1)}))},setSpeaking(Ve){ze.speaking=!!Ve,ze.speaking||U.rotation.set(0,0,0)},tick(Ve){if(c.rotation.z=Math.sin(Ve*.6+ze.phase)*.01,c.rotation.y=ze.baseY+Math.sin(Ve*.4+ze.phase)*.008,ze.speaking){let De=Ve*25+ze.phase;U.rotation.y=Math.sin(De)*.09,U.rotation.x=(Math.sin(De*.5)+1)*.05}}};return ze}function PM(i,e){let t=document.createElement("canvas");t.width=512,t.height=160;let n=t.getContext("2d");n.fillStyle="rgba(20, 22, 16, 0.82)",LM(n,6,6,t.width-12,t.height-12,14),n.fill(),n.lineWidth=2,n.strokeStyle="rgba(120, 116, 92, 0.6)",n.stroke(),n.textAlign="center",n.fillStyle="#d8d4c0",n.font='bold 44px "Courier New", monospace',n.fillText(i,t.width/2,68,t.width-40),n.fillStyle="#a9a48c",n.font='italic 30px "Courier New", monospace',n.fillText(e,t.width/2,116,t.width-36);let s=new Bt(t);s.colorSpace=tt;let r=new ri({map:s,transparent:!0,depthTest:!0}),o=new Mi(r);return o.scale.set(2.4,.75,1),o}function LM(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function NM(i){let e=0;for(let t=0;t<i.length-1;t++)e+=Math.hypot(i[t+1][0]-i[t][0],i[t+1][1]-i[t][1]);return e}function DM(i,e){if(!i||i.length<2)return null;let t=0;for(let c=0;c<i.length-1;c++){let[l,h]=i[c],[u,f]=i[c+1],d=u-l,m=f-h,x=Math.hypot(d,m);if(t+x>=e){let p=x>0?(e-t)/x:0,g=x||1;return{point:[l+d*p,h+m*p],tangent:[d/g,m/g]}}t+=x}let n=i[i.length-1],s=i[i.length-2],r=n[0]-s[0],o=n[1]-s[1],a=Math.hypot(r,o)||1;return{point:[n[0],n[1]],tangent:[r/a,o/a]}}var Qi=256,Ln=128,xl=16;function UM(i,e,t,n,s){let r=BM(s);i.save(),i.beginPath(),i.rect(e,t,Qi,Ln),i.clip(),i.fillStyle="#171410",i.fillRect(e,t,Qi,Ln);let o=10+Math.floor(r()*6);for(let d of[e,e+Qi-o]){i.fillStyle="#332e28",i.fillRect(d,t,o,Ln);for(let m=0;m<40;m++)i.fillStyle=`rgba(0,0,0,${.05+r()*.12})`,i.fillRect(d+r()*o,t+r()*Ln,1+r()*2,1+r()*2)}let a=e+o,c=Qi-o*2,l=t+Ln*.4;if(r()<.55)for(let d=l;d<t+Ln;d+=4)i.fillStyle=d%8<4?"#211d18":"#15110d",i.fillRect(a,d,c,4);else i.fillStyle="#0d0f10",i.fillRect(a,l,c,t+Ln-l),i.fillStyle="rgba(120,130,140,0.05)",i.fillRect(a,l,c,6);let h=t+Ln*.08,u=Ln*.3,f=["#0e0c0b","#120f1a","#101512"][Math.floor(r()*3)];i.fillStyle=f,i.fillRect(a,h,c,u),i.strokeStyle="rgba(0,0,0,0.6)",i.lineWidth=1,i.strokeRect(a+.5,h+.5,c-1,u-1),i.fillStyle="#cdbf9f",i.textAlign="center",i.textBaseline="middle";try{i.letterSpacing="0.5px"}catch{}FM(i,n.toUpperCase(),a+c/2,h+u/2,c-12,u-6);for(let d=0;d<6;d++){i.fillStyle=`rgba(0,0,0,${.05+r()*.08})`;let m=e+r()*Qi;i.fillRect(m,t,1+r()*3,Ln)}i.restore()}function FM(i,e,t,n,s,r){for(let a=22;a>=8;a--){if(i.font=`bold ${a}px "Arial Narrow", "Helvetica Neue", Arial, sans-serif`,i.measureText(e).width<=s){i.fillText(e,t,n);return}let c=OM(i,e,s);if(c&&a<=18&&c.length===2){let l=a*1.05;if(l*2<=r){i.fillText(c[0],t,n-l/2),i.fillText(c[1],t,n+l/2);return}}}i.font='bold 8px "Arial Narrow", Arial, sans-serif';let o=e;for(;o.length>3&&i.measureText(o+"\u2026").width>s;)o=o.slice(0,-1);i.fillText(o+(o.length<e.length?"\u2026":""),t,n)}function OM(i,e,t){let n=e.split(" ");if(n.length<2)return null;for(let s=1;s<n.length;s++){let r=n.slice(0,s).join(" "),o=n.slice(s).join(" ");if(i.measureText(r).width<=t&&i.measureText(o).width<=t)return[r,o]}return null}function BM(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function zM(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function Bp(i){let e=[...new Set(i)],t=Math.max(1,Math.ceil(e.length/xl)),n=document.createElement("canvas");n.width=xl*Qi,n.height=t*Ln;let s=n.getContext("2d");s.fillStyle="#171410",s.fillRect(0,0,n.width,n.height);let r=new Map;e.forEach((a,c)=>{let l=c%xl,h=Math.floor(c/xl),u=l*Qi,f=h*Ln;UM(s,u,f,a,zM(a)),r.set(a,{u0:u/n.width,u1:(u+Qi)/n.width,vTop:1-f/n.height,vBot:1-(f+Ln)/n.height})});let o=new Bt(n);return o.colorSpace=tt,o.anisotropy=4,{texture:o,uvFor:r,count:e.length}}var HM=30,kM=.25,GM=.35,VM=-.3,$n=3.2,WM=6,$o=.05,_l=.12,mu=1.5,Pi=2e4,XM=9,qM=.88;function zp(i,e,t){let n=i&&i.shopfronts,s=i&&i.leith&&i.leith.buildings||[],r=e&&e.nearestStreetPoint;if(!n||!n.count||!s.length||!r)return{group:null,count:0};let{cols:o,rows:a,tileW:c=512,tileH:l=256,count:h}=n,u=Array.from({length:h},(q,re)=>re),f=n.ground&&n.ground.length?n.ground:u,d=n.upper&&n.upper.length?n.upper:f,m=n.corner&&n.corner.length?n.corner:f,x=n.placement&&n.placement.photos||{},p=n.strips||null,g=new Map,S=[];if(p&&Array.isArray(p.strips))for(let q of p.strips){if(q.storeys<2)continue;S.push(q);let re=g.get(q.slug)||{},se=q.planeKind==="corner"?"corner":"terrace";re[se]||(re[se]=q),g.set(q.slug,re)}let M=n.placement&&n.placement.businesses||{},v=[];for(let[q,re]of Object.entries(M))if(!x[q])for(let se of re)v.push(se.name);let A=v.length?Bp(v):null,E=new Map;for(let q of d){let re=n.tiles&&n.tiles[q]&&n.tiles[q].slug||String(q);E.has(re)||E.set(re,[]),E.get(re).push(q)}let R=[...E.keys()],_=o*c,T=a*l,I=.5/_,C=.5/T,P=$n*(c/l),W=[],Y=[],U=[],H=0,G=[],j=[],ne=[],le=0,he=[],_e=[],ze=[],Ve=0,De=p?p.width:1,Q=p?p.height:1;function ge(q,re,se,Oe,Ee,ye,ke,N,at,Ke){let w=Ve*4;he.push(Ee,at,ye,ke,at,N,ke,Ke,N,Ee,Ke,ye),_e.push(q,re,se,re,se,Oe,q,Oe),ze.push(w,w+1,w+2,w,w+2,w+3),Ve++}function ae(q,re,se,Oe,Ee,ye,ke){let N=q%o,at=Math.floor(q/o),Ke=N/o+I,w=(N+1)/o-I,y=1-(at+1)/a+C,O=1-at/a-C,z=H*4;W.push(re,ye,se,Oe,ye,Ee,Oe,ke,Ee,re,ke,se),Y.push(Ke,y,w,y,w,O,Ke,O),U.push(z,z+1,z+2,z,z+2,z+3),H++}for(let q=0;q<s.length&&H<Pi;q++){let re=s[q],se=re&&re.footprint;if(!se||se.length<3)continue;let Oe=Math.max(1,re.levels||1),Ee=Math.min(WM,Oe),ye=x[q]||null,ke=ye?g.get(ye.slug):null,N=!ye&&S.length?S[Ir(q,0,3,S.length)]:null,at=Z=>ke?Z?ke.corner||ke.terrace:ke.terrace||ke.corner:N,Ke=!ye&&A?(M[q]||[]).map(Z=>Z.name):null,w=!!(Ke&&Ke.length),y=R.length?E.get(R[Ir(q,0,7,R.length)]):d,O=0,z=0;for(let Z of se)O+=Z[0],z+=Z[1];O/=se.length,z/=se.length;let K=[];for(let Z=0;Z<se.length&&H<Pi;Z++){let B=se[Z],J=se[(Z+1)%se.length],oe=J[0]-B[0],Re=J[1]-B[1],de=Math.hypot(oe,Re);if(de<kM)continue;let pe=(B[0]+J[0])/2,Ue=(B[1]+J[1])/2,Pe=r(pe,Ue);if(!Pe||!Pe.point)continue;let Ze=r(B[0],B[1]),D=r(J[0],J[1]);if(Math.min(Pe.distance,Ze?Ze.distance:1/0,D?D.distance:1/0)>HM)continue;let $=1/de,fe=-Re*$,me=oe*$,ee=B[0],Ce=B[1],Te=oe,ft=Re;fe*(pe-O)+me*(Ue-z)<0&&(fe=-fe,me=-me,ee=J[0],Ce=J[1],Te=-oe,ft=-Re);let dt=Pe.point[0]-pe,Ct=Pe.point[1]-Ue,ht=Math.hypot(dt,Ct)||1,Lt=(fe*dt+me*Ct)/ht;if(Lt<VM)continue;let Nt=Lt>=GM,Zt=!1;Pe.tangent&&de<=XM&&(Zt=Math.abs(Te*$*Pe.tangent[0]+ft*$*Pe.tangent[1])<qM);let Dt=Math.max(1,Math.round(de/P)),Pt=yt=>({x:ee+Te*yt+fe*_l,z:Ce+ft*yt+me*_l});if(Nt&&K.push({i:Z,ax:B[0],az:B[1],bx:J[0],bz:J[1],dirx:oe*$,dirz:Re*$,len:de,isChamfer:Zt}),!(Nt&&at(Zt)))for(let yt=0;yt<Dt&&H<Pi;yt++){let tn=Pt(yt/Dt),fn=Pt((yt+1)/Dt),ts=Nt?1:0;for(let bn=ts;bn<Ee&&H<Pi;bn++){let ns=Math.max(0,bn-1),zs=ye&&ye.upper.length?ye.upper[ns%ye.upper.length]:y[Ir(q,yt,bn,y.length)],ta=bn===0?$o:bn*$n,Hs=(bn+1)*$n;ae(zs,tn.x,tn.z,fn.x,fn.z,ta,Hs)}}}let ce=[];for(let Z of K){let B=ce[ce.length-1];B&&Z.i===B.endEdge+1&&B.dirx*Z.dirx+B.dirz*Z.dirz>.985?(B.bx=Z.bx,B.bz=Z.bz,B.len+=Z.len,B.endEdge=Z.i,B.isChamfer=B.isChamfer||Z.isChamfer):ce.push({ax:Z.ax,az:Z.az,bx:Z.bx,bz:Z.bz,dirx:Z.dirx,dirz:Z.dirz,len:Z.len,isChamfer:Z.isChamfer,startEdge:Z.i,endEdge:Z.i})}if(ce.length>1){let Z=ce[0],B=ce[ce.length-1];B.endEdge===se.length-1&&Z.startEdge===0&&Math.hypot(B.bx-Z.ax,B.bz-Z.az)<.5&&B.dirx*Z.dirx+B.dirz*Z.dirz>.985&&(Z.ax=B.ax,Z.az=B.az,Z.len+=B.len,Z.isChamfer=Z.isChamfer||B.isChamfer,ce.pop())}for(let Z of ce){if(H>=Pi)break;let B=Z.bx-Z.ax,J=Z.bz-Z.az,oe=Math.hypot(B,J)||1,Re=Z.ax,de=Z.az,pe=B,Ue=J,Pe=-J/oe,Ze=B/oe,D=(Z.ax+Z.bx)/2,xe=(Z.az+Z.bz)/2;Pe*(D-O)+Ze*(xe-z)<0&&(Pe=-Pe,Ze=-Ze,Re=Z.bx,de=Z.bz,pe=-B,Ue=-J);let $=ht=>({x:Re+pe*ht+Pe*_l,z:de+Ue*ht+Ze*_l}),fe=ye?Z.isChamfer&&ye.corner.length?ye.corner:ye.ground:null,me=ye?Math.max(1,fe.length):w?Ke.length:Math.max(1,Math.round(oe/P)),ee=(ht,Lt)=>{let Nt=(Lt-ht)*oe;if(Nt<.4)return;let Zt=Math.max(1,Math.round(Nt/P));for(let Dt=0;Dt<Zt&&H<Pi;Dt++){let Pt=$(ht+(Lt-ht)*Dt/Zt),yt=$(ht+(Lt-ht)*(Dt+1)/Zt),tn=ye&&ye.upper.length?ye.upper[0]:y[Ir(q,Dt,1,y.length)];ae(tn,Pt.x,Pt.z,yt.x,yt.z,$o,$n)}},Ce=(ht,Lt)=>{let Nt=(Lt-ht)*oe;if(Nt<.4)return;let Zt=Math.max(1,Math.round(Nt/P));for(let Dt=0;Dt<Zt&&H<Pi;Dt++){let Pt=$(ht+(Lt-ht)*Dt/Zt),yt=$(ht+(Lt-ht)*(Dt+1)/Zt);for(let tn=1;tn<Ee&&H<Pi;tn++){let fn=ye&&ye.upper.length?ye.upper[(tn-1)%ye.upper.length]:y[Ir(q,Dt,tn,y.length)];ae(fn,Pt.x,Pt.z,yt.x,yt.z,tn*$n,(tn+1)*$n)}}},Te=!ye&&oe<3;Te&&(ee(0,1),at(Z.isChamfer)&&Ee>1&&Ce(0,1));let ft=0,dt=1;(ye||w)&&oe/me>P*mu&&(ft=(oe-me*P)/2/oe,dt=1-ft,ee(0,ft),ee(dt,1));for(let ht=0;ht<me&&!Te&&H<Pi;ht++){let Lt=$(ft+(dt-ft)*ht/me),Nt=$(ft+(dt-ft)*(ht+1)/me);if(w){let Pt=A.uvFor.get(Ke[ht]);if(Pt){let yt=le*4;G.push(Lt.x,$o,Lt.z,Nt.x,$o,Nt.z,Nt.x,$n,Nt.z,Lt.x,$n,Lt.z),j.push(Pt.u0,Pt.vBot,Pt.u1,Pt.vBot,Pt.u1,Pt.vTop,Pt.u0,Pt.vTop),ne.push(yt,yt+1,yt+2,yt,yt+2,yt+3),le++;continue}}let Zt=Z.isChamfer?m:f,Dt=ye?fe[ht]:Zt[Ir(q,Z.startEdge*31+ht,0,Zt.length)];ae(Dt,Lt.x,Lt.z,Nt.x,Nt.z,$o,$n)}let Ct=Te?null:at(Z.isChamfer);if(Ct&&Ee>1&&oe<4.5)Ce(0,1);else if(Ct&&Ee>1){let Lt=(Ct.x+.5)/De,Nt=(Ct.x+Ct.w-.5)/De,Zt=1-(Ct.y+.5)/Q,Dt=1-(Ct.y+Ct.h-.5)/Q,Pt=0,yt=1;if(oe>Ct.widthM*mu)Pt=(oe-Ct.widthM)/2/oe,yt=1-Pt,Ce(0,Pt),Ce(yt,1);else if(oe<Ct.widthM/mu){let ts=oe/Ct.widthM,bn=(Lt+Nt)/2,ns=(Nt-Lt)*ts/2;Lt=bn-ns,Nt=bn+ns}let tn=$(Pt),fn=$(yt);ge(Lt,Dt,Nt,Zt,tn.x,tn.z,fn.x,fn.z,$n,Ee*$n)}}}if(H===0)return{group:null,count:0};let Le=new gt;Le.setAttribute("position",new Je(W,3)),Le.setAttribute("uv",new Je(Y,2)),Le.setIndex(U),Le.computeBoundingSphere();let qe=zn(i,"shopfronts/atlas.jpg");qe.startsWith("assets/")&&n.etag&&(qe+=`?v=${n.etag}`);let He=new ai().load(qe);He.colorSpace=tt,He.anisotropy=4;let pt=new Yt({map:He,side:Et,fog:!0}),Ye=new Ne(Le,pt);Ye.name="shopfronts",t.add(Ye);let te=null;if(le&&A){let q=new gt;q.setAttribute("position",new Je(G,3)),q.setAttribute("uv",new Je(j,2)),q.setIndex(ne),q.computeBoundingSphere(),te=new Ne(q,new Yt({map:A.texture,side:Et,fog:!0})),te.name="shopfront-placeholders",t.add(te)}let ie=null;if(Ve){let q=new gt;q.setAttribute("position",new Je(he,3)),q.setAttribute("uv",new Je(_e,2)),q.setIndex(ze),q.computeBoundingSphere();let re=zn(i,"shopfronts/strips.jpg");re.startsWith("assets/")&&(re+=`?v=${p.etag||`${De}x${Q}`}`);let se=new ai().load(re);se.colorSpace=tt,se.anisotropy=4,ie=new Ne(q,new Yt({map:se,side:Et,fog:!0})),ie.name="shopfront-strips",t.add(ie)}return{group:Ye,placeholders:te,strips:ie,count:H,placeholderCount:le,stripCount:Ve}}function Ir(i,e,t,n){let s=i*73856093^e*19349663^(t+1)*83492791;return s=Math.imul(s^s>>>13,2246822507),s^=s>>>16,(s>>>0)%n}var YM=18,Hp=23,ZM=6,KM=2.5,JM=22,$M=1.4;function kp({camera:i,npcs:e,assets:t,onActiveChange:n}){let s=new Co;i.add(s);let r=new Ro,o=new Map,a=!1,c=!1,l=0;function h(p,g){let S=o.get(p);if(!(S==="missing"||S==="loading")){if(S){g(S);return}o.set(p,"loading"),r.load(zn(t,p),M=>{o.set(p,M),g(M)},void 0,()=>{o.set(p,"missing")})}}function u(p){if(p.voice)return p.voice;let g=new Io(s);return g.setRefDistance(KM),g.setMaxDistance(JM),g.setDistanceModel("inverse"),g.setRolloffFactor($M),g.setLoop(!0),p.group.add(g),p.voice=g,g}function f(p,g){let S=p.comic.audio;S&&h(S,M=>{let v=u(p);if(v.buffer!==M&&v.setBuffer(M),v.isPlaying){if(!g)return;v.stop()}v.offset=g?0:Math.random()*Math.max(0,M.duration-3),v.play(),p.setSpeaking(!0)})}function d(p){p.voice&&p.voice.isPlaying&&(p.voice.stop(),p.setSpeaking(!1))}function m(){let p=0;for(let g of e)g.voice&&g.voice.isPlaying&&p++;p!==l&&(l=p,n&&n(p))}function x(){if(!a||c)return;let p=i.position,g=[];for(let M of e){if(!M.comic.audio)continue;let v=M.group.position,A=Math.hypot(p.x-v.x,p.z-v.z);A<Hp&&g.push({npc:M,d:A})}g.sort((M,v)=>M.d-v.d);let S=new Set;for(let{npc:M,d:v}of g){if(S.size>=ZM)break;let A=M.voice&&M.voice.isPlaying;(v<YM||A&&v<Hp)&&S.add(M)}for(let M of e)M.voice&&M.voice.isPlaying&&!S.has(M)&&d(M);for(let M of S)M.voice&&M.voice.isPlaying||f(M,!1);m()}return{listener:s,update:x,restart(p){f(p,!0),m()},togglePause(p){let g=p.voice;return!g||!g.buffer?(f(p,!0),!0):g.isPlaying?(g.pause(),p.setSpeaking(!1),m(),!1):(g.play(),p.setSpeaking(!0),m(),!0)},setOverlayOpen(p){c=!!p},isEnabled(){return a},setEnabled(p){a=!!p},resume(){a=!0;let p=s.context;p&&p.state==="suspended"&&p.resume()}}}var jM=8;function Gp({assets:i,npcs:e,camera:t,controls:n,proximityAudio:s,onReadingChange:r}){let o=document.getElementById("npc-prompt"),a=document.getElementById("npc-prompt-label"),c=document.getElementById("comic-overlay"),l=document.getElementById("comic-title"),h=document.getElementById("comic-image"),u=document.getElementById("comic-meta"),f=document.getElementById("comic-close"),d=document.getElementById("comic-playpause"),m=null,x=null;function p(P){d&&(d.textContent=P?"\u23F8":"\u25B6")}function g(P){r&&r(!!P)}function S(P){o&&(a&&(a.textContent=`[E] Hear ${P.name} read`),o.style.display="block")}function M(){o&&(o.style.display="none")}function v(P){!P||x||(x=P,M(),l&&(l.textContent=P.comic.title),u&&(u.textContent=`${P.name} \u2014 ${P.blurb}`),h&&(h.src=zn(i,P.comic.image),h.alt=P.comic.title,h.parentElement.scrollTop=0),c&&(c.style.display="flex"),n.setEnabled(!1),s.setOverlayOpen(!0),s.restart(P),p(!0),g(!0))}function A(){x&&(p(!1),g(!1),c&&(c.style.display="none"),n.setEnabled(!0),s.setOverlayOpen(!1),x=null)}function E(){if(!x)return;let P=s.togglePause(x);p(P),g(P)}function R(P){if(P.code==="Escape"){x&&A();return}P.code==="KeyE"&&!x&&m&&v(m)}function _(){!x&&m&&v(m)}function T(P){P.target===c&&A()}window.addEventListener("keydown",R),o&&o.addEventListener("click",_),c&&c.addEventListener("click",T),f&&f.addEventListener("click",A),d&&d.addEventListener("click",E);function I(){if(x)return;let P=t.position.x,W=t.position.z,Y=null,U=jM;for(let H=0;H<e.length;H++){let G=e[H].group.position,j=Math.hypot(P-G.x,W-G.z);j<U&&(U=j,Y=e[H])}Y!==m&&(m=Y,m?S(m):M())}function C(){window.removeEventListener("keydown",R),o&&o.removeEventListener("click",_),c&&c.removeEventListener("click",T),f&&f.removeEventListener("click",A),d&&d.removeEventListener("click",E)}return{update:I,dispose:C}}var _t=(()=>{let i=12648430;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),QM=35,yl=11,eS=.9,tS=90,Vp=[7027238,8013360,6042916,9065014,5189153],nS=22,iS=8,sS=3,Wp=.06,rS=.16,Ml=4,Yp=14,Xp=55;function Zp(i,e){let t=i.streetLine||[],n=new nt;e.add(n);let s=oS(t,n);uS(t,n),fS(t,n);let r=dS(t,n),o=cS(s,n),a={group:n,onArcFlash:null};return a.update=function(l,h){pS(r,l,h),hS(o,h,()=>{a.onArcFlash&&a.onArcFlash()})},a}function Sl(i,e){if(!i||i.length<2||e<0)return null;let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,h=Math.hypot(c,l);if(t+h>=e){let u=h>0?(e-t)/h:0,f=h||1;return{point:[s+c*u,r+l*u],tangent:[c/f,l/f]}}t+=h}return null}function gu(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function vl(i,e){let t=new ve(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;i.setAttribute("color",new Je(s,3))}function oS(i,e){let t=gu(i),n=[],s=[],r=[];for(let o=12;o<t-5;o+=QM){let a=Sl(i,o);if(!a)break;let[c,l]=a.tangent,h=-l,u=c,f=new L(a.point[0]+h*yl,0,a.point[1]+u*yl),d=new L(a.point[0]-h*yl,0,a.point[1]-u*yl),m=7.5+_t()*.6,x=m-.4;n.push(qp(f,m)),n.push(qp(d,m)),s.push(aS(f,d,x)),r.push({position:f.clone().setY(x)},{position:d.clone().setY(x)})}if(n.length){let o=ct(n,!1),a=new je({color:3814700,flatShading:!0});e.add(new Ne(o,a))}if(s.length){let o=ct(s,!1),a=new Wi({color:1841685});e.add(new bs(o,a))}return r}function qp(i,e){let t=new Bn(.09,.13,e,6);return t.translate(i.x,e/2,i.z),t}function aS(i,e,t){let s=[];for(let a=0;a<=8;a++){let c=a/8,l=$i.lerp(i.x,e.x,c),h=$i.lerp(i.z,e.z,c),u=4*c*(1-c)*eS;s.push(l,t-u,h)}let r=[];for(let a=0;a<8;a++)r.push(s[a*3],s[a*3+1],s[a*3+2]),r.push(s[(a+1)*3],s[(a+1)*3+1],s[(a+1)*3+2]);let o=new gt;return o.setAttribute("position",new Je(r,3)),o}function cS(i,e){if(!i.length)return[];let t=Math.min(sS,i.length),n=lS(i.length,t),s=[];for(let r of n){let o=i[r],a=new Ri(10473727,0,14,2);a.position.copy(o.position),e.add(a);let c=new Yt({color:14676735,transparent:!0,opacity:0,depthWrite:!1,blending:Lo}),l=new Ne(new bi(.12,6,6),c);l.position.copy(o.position),e.add(l),s.push({light:a,spark:l,active:!1,nextTime:Ml+_t()*(Yp-Ml),flashEnd:0})}return s}function lS(i,e){let t=[];for(let n=0;n<e;n++)t.push(Math.floor((n+.5)/e*i));return t}function hS(i,e,t){for(let n of i)if(!n.active&&e>=n.nextTime){n.active=!0;let s=Wp+_t()*(rS-Wp);n.flashEnd=e+s,n.light.intensity=Xp,n.spark.material.opacity=1,n.spark.scale.setScalar(.8+_t()*.6),t()}else n.active&&e>=n.flashEnd?(n.active=!1,n.light.intensity=0,n.spark.material.opacity=0,n.nextTime=e+Ml+_t()*(Yp-Ml)):n.active&&(n.light.intensity=Xp*(.7+_t()*.3))}function uS(i,e){let t=Sl(i,tS);if(!t)return;let[n,s]=t.tangent,r=-s,o=n,a=5.5,c=t.point[0]+r*a,l=t.point[1]+o*a,h=Math.atan2(n,s),u=[],f=new et(2.6,3.1,11);vl(f,7030064),u.push(f);let d=new et(2.3,.3,10.6);d.translate(0,1.7,0),vl(d,4864556),u.push(d);for(let g=-1;g<=1;g++)for(let S of[-1,1]){let M=(_t()-.5)*.3,v=new et(.08,.9+_t()*.3,1.6);v.translate(S*1.32,.5+M,g*3.2+(_t()-.5)*.6),vl(v,789770),u.push(v)}let m=ct(u,!1),x=new je({vertexColors:!0,flatShading:!0}),p=new Ne(m,x);p.position.set(c,1.85,l),p.rotation.y=h,p.rotation.z=.09,e.add(p)}function fS(i,e){let t=gu(i);if(t<4)return;let n=[];for(let o=0;o<nS;o++){let a=25+_t()*Math.max(10,t-33),c=Sl(i,a);if(!c)continue;let[l,h]=c.tangent,u=-h,f=l,d=_t()<.5?1:-1,m=(7.5+_t()*3)*d,x=c.point[0]+u*m,p=c.point[1]+f*m,g=_t()<.4,S=g?new Bn(.32,.34,.7,8):new et(.5+_t()*.3,.4+_t()*.3,.5+_t()*.3),M=g?.35:.2;S.translate(0,M,0),S.rotateY(_t()*Math.PI),_t()<.3&&S.rotateZ((_t()-.5)*.5),S.translate(x,0,p),vl(S,Vp[o%Vp.length]),n.push(S)}if(!n.length)return;let s=ct(n,!1),r=new je({vertexColors:!0,flatShading:!0});e.add(new Ne(s,r))}function dS(i,e){let t=gu(i);if(t<4)return[];let n=mS(),s=[];for(let r=0;r<iS;r++){let o=35+_t()*Math.max(20,t-55),a=Sl(i,o);if(!a)continue;let c=new ri({map:n,transparent:!0,opacity:.18,depthWrite:!1,color:3815468}),l=new Mi(c),h=8+_t()*4;l.scale.set(h,h,1),e.add(l),s.push({sprite:l,baseX:a.point[0]+(_t()-.5)*14,baseZ:a.point[1]+(_t()-.5)*14,baseY:6+_t()*3,phase:_t()*Math.PI*2,riseSpeed:.25+_t()*.15,riseRange:9+_t()*3,driftAmp:2+_t()*2,driftFreq:.05+_t()*.05,baseOpacity:.14+_t()*.1})}return s}function pS(i,e,t){for(let n of i){let s=(t*n.riseSpeed+n.phase)%n.riseRange;n.sprite.position.set(n.baseX+Math.sin(t*n.driftFreq+n.phase)*n.driftAmp,n.baseY+s,n.baseZ+Math.cos(t*n.driftFreq*.8+n.phase)*n.driftAmp);let r=s/n.riseRange;n.sprite.material.opacity=n.baseOpacity*(1-Math.abs(r-.5)*1.4)}}function mS(){let e=document.createElement("canvas");e.width=128,e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,"rgba(60,58,48,0.55)"),n.addColorStop(.5,"rgba(50,48,40,0.25)"),n.addColorStop(1,"rgba(40,38,32,0)"),t.fillStyle=n,t.fillRect(0,0,128,128);let s=new Bt(e);return s.colorSpace=tt,s}var gS=3028026,xS=9278327,_S=2304048,yS=6051656,vS=11557412,MS=3.2,SS=1/700,bS=`
  varying vec3 vDir;
  void main() {
    // World-space view ray. Correct whether the dome is parented to the camera
    // or to the scene, because modelMatrix carries whichever transform applies.
    vDir = (modelMatrix * vec4(position, 1.0)).xyz - cameraPosition;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,ES=`
  uniform vec3 uFog;
  uniform vec3 uBand;
  uniform vec3 uZenith;
  uniform vec3 uCloudDark;
  uniform vec3 uCloudLit;
  uniform vec3 uGlow;
  uniform vec2 uDock;
  uniform float uTime;
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
    vec2 p = d.xz / max(h, 0.05) * ${MS.toFixed(2)}
           + cameraPosition.xz * ${SS.toFixed(6)};
    p += vec2(uTime * 0.0035, uTime * 0.0012); // haar drifting in off the Forth

    float f = fbm(p);
    // Thin edges catch what light there is; the thick core is a dark mass.
    vec3 cloud = mix(uCloudLit, uCloudDark, smoothstep(0.38, 0.78, f));
    // The second factor holds the deck clear of the horizon: cloud reaching
    // d.y = 0 would break the fog match. It also masks off the low elevations
    // where the 1/h projection blows p up into a shimmering high-frequency mess.
    float cover = smoothstep(0.40, 0.70, f) * smoothstep(0.06, 0.35, h);
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
`;function Kp(i,e){let t=new ue(0,-1);if(e&&e.length>1){let o=e[0],a=e[e.length-1];t.set(o[0]-a[0],o[1]-a[1]).normalize()}let n={uFog:{value:i},uBand:{value:new ve(xS)},uZenith:{value:new ve(gS)},uCloudDark:{value:new ve(_S)},uCloudLit:{value:new ve(yS)},uGlow:{value:new ve(vS)},uDock:{value:t},uTime:{value:0}},s=new mn({uniforms:n,vertexShader:bS,fragmentShader:ES,side:nn,depthWrite:!1,depthTest:!1,fog:!1}),r=new Ne(new bi(1,32,20),s);return r.renderOrder=-1e3,r.frustumCulled=!1,{mesh:r,update(o){n.uTime.value=o}}}var St=(()=>{let i=13723136;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),_u=596,Ds=690,xu=620,TS=593,AS=-3.2,wS=115,jn=3.5,Ns=2,Fs=.03,RS=.042;function $p(i,e){let t=i.streetLine||[];if(t.length<2)return{group:new nt};let n=new nt;e.add(n);let s=[],r=[],o=[],a=[];return PS(t,n,a,s,r,o),DS(t,s),OS(t,n),FS(s,n),NS(r,o,n),a.length&&n.add(new Ne(ct(a,!1),new je({vertexColors:!0,flatShading:!0}))),{group:n}}function CS(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,h=Math.hypot(c,l);if(t+h>=e){let u=h>0?(e-t)/h:0;return{point:[s+c*u,r+l*u],tangent:[c/(h||1),l/(h||1)]}}t+=h}return null}function IS(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function Us(i,e,t){let n=CS(i,e);if(!n)return null;let[s,r]=n.tangent,o=-r,a=s;return{x:n.point[0]+o*t,z:n.point[1]+a*t,yaw:Math.atan2(s,r),tangent:n.tangent}}function PS(i,e,t,n,s,r){let o=HS(),a=[],c=1.5;for(let l=xu-6;l<Ds;l+=5){let h=Us(i,l+2.5,(St()-.5)*.8);if(!h)break;let u=new Jt(c*2,5.4);u.rotateX(-Math.PI/2),u.rotateY(h.yaw),u.translate(h.x,RS,h.z),a.push(u)}a.length&&e.add(new Ne(ct(a,!1),new je({map:o,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3})));for(let l=xu-8;l<Ds+4;l+=3.2)for(let h of[-1,1]){let u=Us(i,l+St()*2,h*(c+.7+St()*.9));if(!u)continue;let f=.75+St()*.65,d=.26+St()*.26,m=new _r(f,d,9);if(m.translate(0,d/2,0),m.scale(1,1,.7+St()*.5),m.rotateY(St()*Math.PI),m.translate(u.x,Fs,u.z),jo(m,[6048825,6969411,4865326][Math.floor(St()*3)]),t.push(m),St()<.55){let x=new et(.4+St()*.5,.09,.35+St()*.4);x.rotateZ((St()-.5)*.9),x.rotateY(St()*Math.PI),x.translate(u.x+(St()-.5)*1.4,Fs+.12,u.z+(St()-.5)*1.4),jo(x,2829352),t.push(x)}}for(let l=xu-10;l<Ds+6;l+=2.3)for(let h of[-1,1]){let u=Us(i,l,h*(c+1.9+St()*.4));u&&n.push({...u,tipped:St()<.16})}Jp(i,_u,Ds,4.4,s,r),Jp(i,_u,Ds,-4.4,s,r),LS(i,Ds+2,s,r)}function Jp(i,e,t,n,s,r){for(let o=e;o<t;o+=jn+.1){let a=Us(i,o+jn/2,n);if(!a)break;St()<.12||jp(a.x,a.z,a.yaw,s,r,St()<.18)}}function LS(i,e,t,n){for(let s=-6;s<=6;s+=jn+.1){let r=Us(i,e,s+jn/2);r&&jp(r.x,r.z,r.yaw+Math.PI/2,t,n,St()<.25)}}function jp(i,e,t,n,s,r){let o=r?(St()-.5)*.5:(St()-.5)*.06,a=[],c=(d,m,x,p,g)=>{let S=new et(d,m,x);S.translate(p,g,0),a.push(S)};c(.05,Ns,.05,-jn/2,Ns/2),c(.05,Ns,.05,jn/2,Ns/2),c(jn,.05,.05,0,Ns-.03),c(jn,.05,.05,0,.03);let l=new et(.5,.11,.26);l.translate(-jn/2,.055,0);let h=new et(.5,.11,.26);h.translate(jn/2,.055,0),a.push(l,h);let u=ct(a,!1);u.rotateZ(o),u.rotateY(t),u.translate(i,Fs,e),n.push(u);let f=new Jt(jn-.1,Ns-.1);f.translate(0,Ns/2,0),f.rotateZ(o),f.rotateY(t),f.translate(i,Fs,e),s.push(f)}function NS(i,e,t){i.length&&t.add(new Ne(ct(i,!1),new je({color:5592911,flatShading:!0}))),e.length&&t.add(new Ne(ct(e,!1),new je({map:zS(),transparent:!0,alphaTest:.35,side:Et,depthWrite:!0})))}function DS(i,e){let t=IS(i);for(let n=40;n<t-20;n+=wS){if(n>_u-40&&n<Ds+40)continue;let s=3+Math.floor(St()*6);for(let r=0;r<s;r++){let o=Us(i,n+(St()-.5)*14,(St()-.5)*12);o&&e.push({...o,tipped:St()<.35})}}}function US(){let i=[],e=new _r(.24,.62,10);e.translate(0,.31,0),jo(e,11025678),i.push(e);let t=new Bn(.125,.15,.13,10);t.translate(0,.33,0),jo(t,13223092),i.push(t);let n=new et(.34,.05,.34);return n.translate(0,.025,0),jo(n,8006666),i.push(n),ct(i,!1)}function FS(i,e){if(!i.length)return;let t=US(),n=new je({vertexColors:!0,flatShading:!0}),s=new Rn(t,n,i.length),r=new Xe,o=new Ft,a=new en,c=new L,l=new L(1,1,1);i.forEach((h,u)=>{a.set(h.tipped?Math.PI/2*(.75+St()*.3):(St()-.5)*.08,St()*Math.PI*2,0,"YXZ"),o.setFromEuler(a),c.set(h.x,Fs+(h.tipped?.2:0),h.z),r.compose(c,o,l),s.setMatrixAt(u,r)}),s.instanceMatrix.needsUpdate=!0,e.add(s)}function OS(i,e){let t=Us(i,TS,AS);if(!t)return;let n=4.2,s=2.5,r=.45,o=new Jt(n,s);o.translate(0,r+s/2,0);let[a,c]=t.tangent,l=Math.atan2(-a,-c);o.rotateY(l),o.translate(t.x,Fs,t.z),e.add(new Ne(o,new je({map:BS(),side:Et})));let h=[];for(let f of[-1,1]){let d=new et(.12,r+.3,.12);d.translate(f*(n/2-.3),(r+.3)/2,0),h.push(d)}let u=ct(h,!1);u.rotateY(l),u.translate(t.x,Fs,t.z),e.add(new Ne(u,new je({color:4867128})))}function BS(){let t=document.createElement("canvas");t.width=1024,t.height=610;let n=t.getContext("2d");n.fillStyle="#26506e",n.fillRect(0,0,1024,610);for(let r=0;r<2600;r++){let o=Math.random()*1024,a=Math.random()*610;n.fillStyle=`rgba(${20+Math.random()*60},${30+Math.random()*50},${40+Math.random()*50},0.06)`,n.fillRect(o,a,Math.random()*90,Math.random()*5)}n.fillStyle="#e8e6dc",n.textAlign="center",n.font="bold 62px Helvetica, Arial, sans-serif",n.fillText("LEITH WALK",1024/2,110),n.fillText("IMPROVEMENT PROJECT",1024/2,180),n.fillStyle="#f0c02a",n.fillRect(120,232,784,6),n.fillStyle="#e8e6dc",n.font="bold 50px Helvetica, Arial, sans-serif",n.fillText("COMPLETION: SPRING 2023",1024/2,310),n.font="30px Helvetica, Arial, sans-serif",n.fillStyle="#b8c6d2",n.fillText("WE APOLOGISE FOR ANY INCONVENIENCE",1024/2,380),n.font="24px Helvetica, Arial, sans-serif",n.fillText("City of Edinburgh Council",1024/2,430),n.strokeStyle="rgba(210,60,40,0.85)",n.lineWidth=9,n.lineCap="round",n.beginPath(),n.moveTo(190,340),n.lineTo(835,285),n.stroke(),n.save(),n.translate(1024/2,520),n.rotate(-.05),n.fillStyle="rgba(214,66,44,0.9)",n.font="bold 58px Helvetica, Arial, sans-serif",n.fillText("STILL WAITING",0,0),n.restore(),n.globalCompositeOperation="destination-out";for(let r=0;r<26;r++){let o=Math.random()*1024,a=Math.random()<.5?Math.random()*40:610-Math.random()*40;n.beginPath(),n.ellipse(o,a,10+Math.random()*50,6+Math.random()*22,Math.random()*3,0,Math.PI*2),n.fill()}n.globalCompositeOperation="source-over";let s=new Bt(t);return s.colorSpace=tt,s.anisotropy=16,s}function zS(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.clearRect(0,0,128,128),t.strokeStyle="#50524b",t.lineWidth=2;let n=128/8;for(let r=0;r<=8;r++)t.beginPath(),t.moveTo(r*n,0),t.lineTo(r*n,128),t.stroke(),t.beginPath(),t.moveTo(0,r*n),t.lineTo(128,r*n),t.stroke();let s=new Bt(e);return s.wrapS=s.wrapT=On,s.repeat.set(6,4),s.colorSpace=tt,s.anisotropy=16,s}function HS(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.fillStyle="#241d16",t.fillRect(0,0,256,256);for(let s=0;s<2200;s++){let r=Math.random();t.fillStyle=`rgba(${30+r*55},${25+r*45},${18+r*35},0.5)`,t.beginPath(),t.arc(Math.random()*256,Math.random()*256,Math.random()*5,0,Math.PI*2),t.fill()}t.fillStyle="rgba(78,84,74,0.45)",t.beginPath(),t.ellipse(256*.55,256*.62,256*.3,256*.13,.3,0,Math.PI*2),t.fill(),t.fillStyle="#4a4235",t.fillRect(0,256*.4,256,16),t.fillStyle="rgba(255,255,255,0.07)",t.fillRect(0,256*.4,256,5);let n=new Bt(e);return n.colorSpace=tt,n.anisotropy=16,n}function jo(i,e){let t=new ve(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;i.setAttribute("color",new Je(s,3))}var sn=(()=>{let i=39441;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),kS=115,GS=90,VS=40,Qp=10,WS=27,XS=8,em=22,qS=55,bl=1.35;function tm(i,e,t){let n=i.streetLine||[];if(n.length<2)return{group:new nt,update(){}};let s=new nt;t.add(s);let r=YS(n,s);return KS(i,e,s),JS(n,s),{group:s,update(o,a){ZS(r,a)}}}function yu(i,e){let t=i/2,n=[],s=h=>{let u=new Float32Array([h*.04,0,e*.18,h*.04,0,-e*.16,h*t*.55,.03*t,-e*.3,h*.04,0,e*.18,h*t*.55,.03*t,-e*.3,h*t*.58,.03*t,e*.06,h*t*.58,.03*t,e*.06,h*t*.55,.03*t,-e*.3,h*t,.1*t,-e*.38,h*t*.58,.03*t,e*.06,h*t,.1*t,-e*.38,h*t*.97,.1*t,-e*.1]),f=new gt;return f.setAttribute("position",new Je(u,3)),f.computeVertexNormals(),f},r=s(-1);Qo(r,4869188);let o=s(1);Qo(o,4869188),n.push(r,o);let a=(h,u,f)=>{let d=new et(h,u,f).toNonIndexed();return d.deleteAttribute("uv"),d},c=a(e*.17,e*.15,e);Qo(c,7237734),n.push(c);let l=a(e*.34,.012,e*.3);return l.translate(0,0,-e*.6),Qo(l,2895400),n.push(l),ct(n,!1)}function vu(){return new je({vertexColors:!0,flatShading:!0,side:Et})}function YS(i,e){let t=im(i),n=[];for(let r=0;r<kS;r++){let o=nm(i,30+sn()*Math.max(1,t-60));if(!o)continue;let[a,c]=o.tangent;n.push({ox:o.point[0],oz:o.point[1],ax:a,az:c,px:-c,pz:a,rAlong:em+sn()*(qS-em),rAcross:2.5+sn()*(XS-2.5),y:Qp+sn()*(WS-Qp),speed:(sn()<.5?-1:1)*(.1+sn()*.14),phase:sn()*Math.PI*2,bobAmp:.5+sn()*1.4,bobFreq:.25+sn()*.45,scale:.85+sn()*.5})}let s=new Rn(yu(bl,bl*.42),vu(),n.length);return s.frustumCulled=!1,e.add(s),{mesh:s,birds:n}}function ZS({mesh:i,birds:e},t){let n=new Xe,s=new Ft,r=new en,o=new L,a=new L;e.forEach((c,l)=>{let h=t*c.speed+c.phase,u=Math.cos(h),f=Math.sin(h),d=u*c.rAlong,m=f*c.rAcross,x=c.ox+c.ax*d+c.px*m,p=c.oz+c.az*d+c.pz*m,g=c.y+Math.sin(t*c.bobFreq+c.phase)*c.bobAmp,S=(-f*c.rAlong*c.ax+u*c.rAcross*c.px)*c.speed,M=(-f*c.rAlong*c.az+u*c.rAcross*c.pz)*c.speed,v=Math.atan2(S,M),A=(-u*c.rAlong*c.ax-f*c.rAcross*c.px)*c.speed*c.speed,E=(-u*c.rAlong*c.az-f*c.rAcross*c.pz)*c.speed*c.speed,R=Math.hypot(S,M)||1e-4,_=(A*M-E*S)/R,T=$i.clamp(_*90,-1,1);r.set(Math.sin(t*c.bobFreq+c.phase)*.06,v,T,"YXZ"),s.setFromEuler(r),o.set(x,g,p),a.setScalar(c.scale),n.compose(o,s,a),i.setMatrixAt(l,n)}),i.instanceMatrix.needsUpdate=!0}function KS(i,e,t){let n=e&&e.buildings||[],s=i.nearestStreetPoint,r=[],o=n.filter(f=>{let d=f.footprint;if(!d||d.length<3)return!1;let m=s?s(d[0][0],d[0][1]):null;return!m||m.distance<=30}),a=o.length?GS/o.length:0;for(let f of o){let d=f.footprint,m=Math.max(1,f.levels||1)*3.2,x=Math.floor(a)+(sn()<a%1?1:0);for(let p=0;p<x;p++){let g=Math.floor(sn()*d.length),S=(g+1)%d.length,M=.15+sn()*.7;r.push({x:d[g][0]+(d[S][0]-d[g][0])*M,z:d[g][1]+(d[S][1]-d[g][1])*M,y:m+.12,yaw:sn()*Math.PI*2})}}if(!r.length)return;let c=new Rn(yu(bl*.42,bl*.46),vu(),r.length),l=new Xe,h=new Ft,u=new en;r.forEach((f,d)=>{u.set(0,f.yaw,0,"YXZ"),h.setFromEuler(u),l.compose(new L(f.x,f.y,f.z),h,new L(1,1,1)),c.setMatrixAt(d,l)}),c.instanceMatrix.needsUpdate=!0,t.add(c)}function JS(i,e){let t=im(i),n=[];for(let l=0;l<VS;l++){let h=nm(i,25+sn()*Math.max(1,t-50));if(!h)continue;let[u,f]=h.tangent,d=-f,m=u,x=(sn()*2-1)*5.5;n.push({x:h.point[0]+d*x,z:h.point[1]+m*x,yaw:sn()*Math.PI*2})}if(!n.length)return;let s=yu(.3,.3);Qo(s,5263948);let r=new Rn(s,vu(),n.length),o=new Xe,a=new Ft,c=new en;n.forEach((l,h)=>{c.set(0,l.yaw,0,"YXZ"),a.setFromEuler(c),o.compose(new L(l.x,.1,l.z),a,new L(1,1,1)),r.setMatrixAt(h,o)}),r.instanceMatrix.needsUpdate=!0,e.add(r)}function nm(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,h=Math.hypot(c,l);if(t+h>=e){let u=h>0?(e-t)/h:0;return{point:[s+c*u,r+l*u],tangent:[c/(h||1),l/(h||1)]}}t+=h}return null}function im(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function Qo(i,e){let t=new ve(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;i.setAttribute("color",new Je(s,3))}var Os=(()=>{let i=10775;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),$S=90,jS=6.6,sm=2.5,QS=9,eb=.06;function cm(i,e){let t=i.streetLine||[];if(t.length<2)return{group:new nt,update(){}};let n=new nt;e.add(n);let s=sb(t),r=[];for(let a=0;a<$S;a++){let c=20+Os()*Math.max(1,s-45),l=sm+Os()*(QS-sm),h=am(t,c),u=am(t,Math.min(c+l,s-1));if(!h||!u)continue;let d=(Os()<.5?1:-1)*(jS+(Os()-.5)*.8),m=om(h,d),x=om(u,d);r.push({ax:m[0],az:m[1],bx:x[0],bz:x[1],rate:.07+Os()*.16,phase:Os(),scale:.8+Os()*.5})}let o=new Rn(ib(),new je({vertexColors:!0,flatShading:!0}),r.length);return n.add(o),{group:n,update(a,c){nb(o,r,c)}}}function tb(i){return i<.18?rm(0,.18,i):i<.5?1:i<.68?1-rm(.5,.68,i):0}function rm(i,e,t){let n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)}function nb(i,e,t){let n=new Xe,s=new Ft,r=new en,o=new L,a=new L;e.forEach((c,l)=>{let h=(t*c.rate+c.phase)%1,u=tb(h),f=c.ax+(c.bx-c.ax)*u,d=c.az+(c.bz-c.az)*u,m=h>=.5,x=m?c.ax-c.bx:c.bx-c.ax,p=m?c.az-c.bz:c.bz-c.az,g=Math.atan2(x,p),M=h<.18||h>=.5&&h<.68?Math.abs(Math.sin(t*26+l))*.025:0;r.set(0,g,0,"YXZ"),s.setFromEuler(r),o.set(f,eb+M,d),a.setScalar(c.scale),n.compose(o,s,a),i.setMatrixAt(l,n)}),i.instanceMatrix.needsUpdate=!0}function ib(){let i=[],e=(r,o,a)=>{let c=new et(r,o,a).toNonIndexed();return c.deleteAttribute("uv"),c},t=e(.11,.1,.23);t.translate(0,.05,0),Mu(t,4537909),i.push(t);let n=e(.075,.07,.1);n.translate(0,.045,.15),Mu(n,5129787),i.push(n);let s=e(.016,.016,.21);return s.translate(0,.035,-.21),Mu(s,4866617),i.push(s),ct(i,!1)}function om(i,e){let[t,n]=i.tangent;return[i.point[0]+-n*e,i.point[1]+t*e]}function am(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,h=Math.hypot(c,l);if(t+h>=e){let u=h>0?(e-t)/h:0;return{point:[s+c*u,r+l*u],tangent:[c/(h||1),l/(h||1)]}}t+=h}return null}function sb(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function Mu(i,e){let t=new ve(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;i.setAttribute("color",new Je(s,3))}var ut=(()=>{let i=11590938;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),rb=210,ob=130,ab=260,cb=22;function lm(i,e,t){let n=i.streetLine||[];if(n.length<2)return{group:new nt};let s=new nt;return t.add(s),lb(i,e,n,s),ub(n,s),fb(n,s),db(n,s),{group:s}}function lb(i,e,t,n){let s=hb(),r=[],o=(f,d,m,x,p)=>{for(let g=0;g<3;g++){let S=new Jt(x,x);S.translate(0,x/2,0),S.rotateZ(p),S.rotateY(g/3*Math.PI+ut()*.4),S.translate(f,d,m),r.push(S)}},a=e&&e.buildings||[],c=i.nearestStreetPoint,l=a.filter(f=>{let d=f.footprint;if(!d||d.length<3)return!1;let m=c?c(d[0][0],d[0][1]):null;return!m||m.distance<=28}),h=l.length?rb/l.length:0;for(let f of l){let d=f.footprint,m=Math.floor(h)+(ut()<h%1?1:0),x=Math.max(1,f.levels||1)*3.2;for(let p=0;p<m;p++){let g=Math.floor(ut()*d.length),S=(g+1)%d.length,M=.1+ut()*.8;o(d[g][0]+(d[S][0]-d[g][0])*M,x-.25,d[g][1]+(d[S][1]-d[g][1])*M,1.1+ut()*1.5,(ut()-.5)*.5)}}let u=Su(t);for(let f=0;f<ob;f++){let d=Al(t,20+ut()*Math.max(1,u-40));if(!d)continue;let x=(ut()<.5?1:-1)*(7.2+ut()*2.6),p=Tl(d,x);o(p[0],.03,p[1],.8+ut()*1.1,(ut()-.5)*.3)}r.length&&n.add(new Ne(ct(r,!1),new je({map:s,transparent:!0,alphaTest:.45,side:Et,depthWrite:!0})))}function hb(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.clearRect(0,0,256,256);for(let s=0;s<170;s++){let r=-Math.PI/2+(Math.random()-.5)*2.5,o=30+Math.random()*78,a=256/2+(Math.random()-.5)*58,c=256-Math.random()*44,l=46+Math.random()*52;t.strokeStyle=`rgba(${28+Math.random()*26},${l},${30+Math.random()*22},0.95)`,t.lineWidth=2+Math.random()*5,t.lineCap="round",t.beginPath(),t.moveTo(a,c),t.quadraticCurveTo(a+Math.cos(r)*o*.5+(Math.random()-.5)*24,c+Math.sin(r)*o*.5,a+Math.cos(r)*o,c+Math.sin(r)*o),t.stroke()}for(let s=0;s<13;s++){let r=34+Math.random()*188,o=26+Math.random()*96,a=26+Math.random()*40;for(let c=0;c<26;c++){let l=c/26,h=(1-l)*8+1.5;t.fillStyle=`rgba(${74+Math.random()*30},${44+Math.random()*22},${88+Math.random()*32},0.88)`,t.beginPath(),t.ellipse(r+(Math.random()-.5)*4,o+l*a,h,3.5,0,0,Math.PI*2),t.fill()}}let n=new Bt(e);return n.colorSpace=tt,n.anisotropy=16,n}function ub(i,e){let t=Su(i),n=[];for(let s=0;s<ab;s++){let r=Al(i,15+ut()*Math.max(1,t-30));if(!r)continue;let a=(ut()<.5?1:-1)*(ut()<.65?6.3+ut()*.7:7.5+ut()*2.2),c=Tl(r,a),l=ut(),h,u;l<.3?(h=new Bn(.037,.042,.27,6),h.rotateZ(Math.PI/2),h.rotateY(ut()*Math.PI*2),h.translate(0,.04,0),u=2899230):l<.55?(h=new Bn(.032,.032,.1,6),h.rotateZ(Math.PI/2+(ut()-.5)*.7),h.scale(1,1,.6),h.translate(0,.032,0),u=ut()<.5?10115614:3100522):l<.8?(h=new et(.16+ut()*.08,.05,.12+ut()*.06),h.rotateY(ut()*Math.PI),h.rotateZ((ut()-.5)*.5),h.translate(0,.026,0),u=11051924):(h=new Jt(.24+ut()*.2,.18+ut()*.14),h.rotateX(-Math.PI/2),h.rotateY(ut()*Math.PI),h.translate(0,.036,0),u=7170652),h.translate(c[0],.03,c[1]),El(h,u),n.push(h)}n.length&&e.add(new Ne(ct(n,!1),new je({vertexColors:!0,flatShading:!0,side:Et})))}function fb(i,e){let t=Su(i),n=[];for(let s=0;s<cb;s++){let r=Al(i,25+ut()*Math.max(1,t-50));if(!r)continue;let o=ut()<.5?1:-1,a=Tl(r,o*(7.6+ut()*1.8)),c=ut()<.6,l=[],h=new et(.62,1.05,.72).toNonIndexed();h.deleteAttribute("uv"),h.translate(0,.525,0),El(h,[3095084,3813160,2634298][Math.floor(ut()*3)]),l.push(h);let u=new et(.66,.07,.76).toNonIndexed();u.deleteAttribute("uv"),u.translate(0,1.07,c?.1:-.3),u.rotateX(c?.2:-.7),El(u,1975840),l.push(u);let f=ct(l,!1);f.rotateY(ut()*Math.PI*2),c&&f.rotateZ(Math.PI/2+(ut()-.5)*.3),f.translate(a[0],c?.34:.03,a[1]),n.push(f)}n.length&&e.add(new Ne(ct(n,!1),new je({vertexColors:!0,flatShading:!0})))}function db(i,e){let t=Al(i,415);if(!t)return;let n=Tl(t,-3.4),s=[],r=(h,u,f,d,m,x)=>{let p=new et(h,u,f).toNonIndexed();p.deleteAttribute("uv"),p.translate(d,m,x),s.push(p)},o=.56,a=.44,c=.86;for(let h=0;h<=6;h++){let u=-c/2+h/6*c;r(o,.018,.018,0,a,u),r(.018,a,.018,-o/2,a/2,u),r(.018,a,.018,o/2,a/2,u)}for(let h=0;h<=4;h++){let u=-o/2+h/4*o;r(.018,.018,c,u,.02,0),r(.018,.018,c,u,a,0)}r(o,a,.018,0,a/2,-c/2),r(.03,.3,.03,0,a+.15,-c/2);let l=ct(s,!1);El(l,6974822),l.rotateZ(Math.PI/2*.92),l.rotateY(ut()*Math.PI*2),l.translate(n[0],.3,n[1]),e.add(new Ne(l,new je({vertexColors:!0,flatShading:!0})))}function Tl(i,e){let[t,n]=i.tangent;return[i.point[0]+-n*e,i.point[1]+t*e]}function Al(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,h=Math.hypot(c,l);if(t+h>=e){let u=h>0?(e-t)/h:0;return{point:[s+c*u,r+l*u],tangent:[c/(h||1),l/(h||1)]}}t+=h}return null}function Su(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function El(i,e){let t=new ve(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;i.setAttribute("color",new Je(s,3))}function hm(i){let e=new Map,t=new Map,n=i.clone();return um(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function um(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)um(i.children[n],e.children[n],t)}var wl=class extends Yn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Cu(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new Rl(t,lt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Rl(t,lt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Gu(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Ci.extractUrlBase(e);o=Ci.resolveURL(l,this.path)}else o=Ci.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new As(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===gm){try{o[lt.KHR_BINARY_GLTF]=new Vu(e)}catch(u){s&&s(u);return}r=JSON.parse(o[lt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Ju(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case lt.KHR_MATERIALS_UNLIT:o[u]=new wu;break;case lt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Wu(r,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:o[u]=new Xu;break;case lt.KHR_MESH_QUANTIZATION:o[u]=new qu;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function pb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Wt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Au=class{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new ve(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],pn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ws(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ri(h),l.distance=u;break;case"spot":l=new Eo(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),fi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},wu=class{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return Yt}extendParams(e,t,n){let s=[];e.color=new ve(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],pn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,tt))}return Promise.all(s)}},Ru=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Cu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ue(r,r)}return Promise.all(s)}},Iu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Pu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Lu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new ve(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],pn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,tt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Nu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Du=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new ve().setRGB(r[0],r[1],r[2],pn),Promise.all(s)}},Uu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Fu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new ve().setRGB(r[0],r[1],r[2],pn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,tt)),Promise.all(s)}},Ou=class{constructor(e){this.parser=e,this.name=lt.EXT_MATERIALS_BUMP}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Bu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},zu=class{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Hu=class{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},ku=class{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},Rl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}},Gu=class{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Hn.TRIANGLES&&l.mode!==Hn.TRIANGLE_STRIP&&l.mode!==Hn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let m of u){let x=new Xe,p=new L,g=new Ft,S=new L(1,1,1),M=new Rn(m.geometry,m.material,f);for(let v=0;v<f;v++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,v),c.SCALE&&S.fromBufferAttribute(c.SCALE,v),M.setMatrixAt(v,x.compose(p,g,S));for(let v in c)if(v==="_COLOR_0"){let A=c[v];M.instanceColor=new Vi(A.array,A.itemSize,A.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&m.geometry.setAttribute(v,c[v]);Rt.prototype.copy.call(M,m),this.parser.assignFinalMaterial(M),d.push(M)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},gm="glTF",ea=12,fm={JSON:1313821514,BIN:5130562},Vu=class{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ea),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==gm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ea,r=new DataView(e,ea),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===fm.JSON){let l=new Uint8Array(e,ea+o,a);this.content=n.decode(l)}else if(c===fm.BIN){let l=ea+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Wu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Zu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Zu[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=Pr[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(let m in d.attributes){let x=d.attributes[m],p=c[m];p!==void 0&&(x.normalized=p)}u(d)},a,l,pn,f)})})}},Xu=class{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},qu=class{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}},Cl=class extends oi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,m=e*l,x=m-l,p=-2*d+3*f,g=d-f,S=1-p,M=g-f+u;for(let v=0;v!==a;v++){let A=o[x+v+a],E=o[x+v+c]*h,R=o[m+v+a],_=o[m+v]*h;r[v]=S*A+M*E+p*R+g*_}return r}},mb=new Ft,Yu=class extends Cl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return mb.fromArray(r).normalize().toArray(r),r}},Hn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Pr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},dm={9728:Gt,9729:Vt,9984:vc,9985:br,9986:Cs,9987:Kn},pm={33071:Un,33648:cr,10497:On},bu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Zu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},es={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},gb={CUBICSPLINE:void 0,LINEAR:_s,STEP:xs},Eu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function xb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ts({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:qn})),i.DefaultMaterial}function Bs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function fi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function _b(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function yb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function vb(i){let e,t=i.extensions&&i.extensions[lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Tu(t.attributes):e=i.indices+":"+Tu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Tu(i.targets[n]);return e}function Tu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Ku(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Mb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Sb=new Xe,Ju=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new pb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new ai(this.options.manager):this.textureLoader=new Ao(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new As(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Bs(r,a,s),fi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Ci.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=bu[s.type],a=Pr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new kt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=bu[s.type],l=Pr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,x,p;if(d&&d!==u){let g=Math.floor(f/d),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,M=t.cache.get(S);M||(x=new l(a,g*d,s.count*d/h),M=new vs(x,d/h),t.cache.add(S,M)),p=new Gi(M,c,f%d/h,m)}else a===null?x=new l(s.count*c):x=new l(a,f,s.count*c),p=new kt(x,c,m);if(s.sparse!==void 0){let g=bu.SCALAR,S=Pr[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,A=new S(o[1],M,s.sparse.count*g),E=new l(o[2],v,s.sparse.count*c);a!==null&&(p=new kt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let R=0,_=A.length;R<_;R++){let T=A[R];if(p.setX(T,E[R*c]),c>=2&&p.setY(T,E[R*c+1]),c>=3&&p.setZ(T,E[R*c+2]),c>=4&&p.setW(T,E[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=dm[f.magFilter]||Vt,h.minFilter=dm[f.minFilter]||Kn,h.wrapS=pm[f.wrapS]||On,h.wrapT=pm[f.wrapT]||On,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Gt&&h.minFilter!==Vt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(x){let p=new Kt(x);p.needsUpdate=!0,f(p)}),t.load(Ci.resolveURL(u,r.path),m,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),fi(u,o),u.userData.mimeType=o.mimeType||Mb(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[lt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new xr,hn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Wi,hn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ts}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[lt.KHR_MATERIALS_UNLIT]){let u=s[lt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new ve(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],pn),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,tt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Et);let h=r.alphaMode||Eu.OPAQUE;if(h===Eu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Eu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Yt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ue(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Yt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Yt){let u=r.emissiveFactor;a.emissive=new ve().setRGB(u[0],u[1],u[2],pn)}return r.emissiveTexture!==void 0&&o!==Yt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,tt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),fi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Bs(s,u,r),u})}createUniqueName(e){let t=wt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return mm(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=vb(l),u=s[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=mm(new gt,l,t),s[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?xb(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,m=h.length;d<m;d++){let x=h[d],p=o[d],g,S=l[d];if(p.mode===Hn.TRIANGLES||p.mode===Hn.TRIANGLE_STRIP||p.mode===Hn.TRIANGLE_FAN||p.mode===void 0)g=r.isSkinnedMesh===!0?new io(x,S):new Ne(x,S),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),p.mode===Hn.TRIANGLE_STRIP?g.geometry=lu(g.geometry,ko):p.mode===Hn.TRIANGLE_FAN&&(g.geometry=lu(g.geometry,Ar));else if(p.mode===Hn.LINES)g=new bs(x,S);else if(p.mode===Hn.LINE_STRIP)g=new Ss(x,S);else if(p.mode===Hn.LINE_LOOP)g=new ro(x,S);else if(p.mode===Hn.POINTS)g=new oo(x,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&yb(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),fi(g,r),p.extensions&&Bs(s,g,p),t.assignFinalMaterial(g),u.push(g)}for(let d=0,m=u.length;d<m;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Bs(s,u[0],r),u[0];let f=new nt;r.extensions&&Bs(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,m=u.length;d<m;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new qt($i.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Yi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),fi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new Xe;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new so(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],m=s.samplers[d.sampler],x=d.target,p=x.node,g=s.parameters!==void 0?s.parameters[m.input]:m.input,S=s.parameters!==void 0?s.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",S)),l.push(m),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],m=u[2],x=u[3],p=u[4],g=[];for(let M=0,v=f.length;M<v;M++){let A=f[M],E=d[M],R=m[M],_=x[M],T=p[M];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();let I=n._createAnimationTracks(A,E,R,_,T);if(I)for(let C=0;C<I.length;C++)g.push(I[C])}let S=new vo(r,void 0,g);return fi(S,s),S})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Sb)});for(let d=0,m=u.length;d<m;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,m=u[0];h.pivot=new L().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new pr:l.length>1?h=new nt:l.length===1?h=l[0]:h=new Rt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),fi(h,r),r.extensions&&Bs(n,h,r),r.matrix!==void 0){let u=new Xe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new nt;n.name&&(r.name=s.createUniqueName(n.name)),fi(r,n),n.extensions&&Bs(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++){let f=c[h];f.parent!==null?r.add(hm(f)):r.add(f)}let l=h=>{let u=new Map;for(let[f,d]of s.associations)(f instanceof hn||f instanceof Kt)&&u.set(f,d);return h.traverse(f=>{let d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];function l(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}es[r.path]===es.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let h;switch(es[r.path]){case es.weights:h=Ti;break;case es.rotation:h=Ai;break;case es.translation:case es.scale:h=Xi;break;default:n.itemSize===1?h=Ti:h=Xi;break}let u=s.interpolation!==void 0?gb[s.interpolation]:_s,f=this._getArrayFromAccessor(n);for(let d=0,m=c.length;d<m;d++){let x=new h(c[d]+"."+es[r.path],t.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Ku(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ai?Yu:Cl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function bb(i,e,t){let n=e.attributes,s=new ln;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),a.normalized){let h=Ku(Pr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new L,c=new L;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){let x=Ku(Pr[f.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new _n;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function mm(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=Zu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return rt.workingColorSpace!==pn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${rt.workingColorSpace}" not supported.`),fi(i,e),bb(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?_b(i,e.targets,t):i})}var $u=[{file:"cars/sedan.glb",kind:"car",targetLen:4.3},{file:"cars/hatchback-sports.glb",kind:"car",targetLen:3.9},{file:"cars/van.glb",kind:"van",targetLen:5.4},{file:"cars/bus.glb",kind:"bus",targetLen:11}],Eb=16,xm=6.1,Tb=405,_m=[560,700],Sn=(()=>{let i=3394627454;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})();function vm(i,e,t){let n=e&&e.streetLine;if(!n||n.length<2)return{group:null};let s=new nt;s.name="cars",t.add(s);let r=new wl,o=a=>r.loadAsync(zn(i,a.file)).then(c=>Ab(c.scene,a)).catch(()=>null);return Promise.all($u.map(o)).then(a=>{let c={};for(let l=0;l<$u.length;l++)a[l]&&(c[$u[l].kind]??=[]).push(a[l]);!c.car&&!c.van&&!c.bus||wb(c,n,s)}),{group:s}}function Ab(i,e){let n=new ln().setFromObject(i).getSize(new L),s=Math.max(n.x,n.z)||1,r=e.targetLen/s;i.scale.setScalar(r),i.updateMatrixWorld(!0);let o=new ln().setFromObject(i);i.position.y=-o.min.y;let a=new nt;return a.add(i),a}function ym(i,e){let t=e?.05+Sn()*.04:.18+Sn()*.2,n=Sn()<.5&&!e;i.traverse(s=>{if(!s.isMesh||!s.material)return;let r=s.material,o=new je({map:r.map||null,color:(r.color?r.color.clone():new ve(8947848)).multiplyScalar(t)});n&&(o.color.r=Math.min(1,o.color.r*1.35+.03),o.color.b*=.75),s.material=o})}function wb(i,e,t){let n=[...i.car||[],...i.van||[]];if(n.length)for(let r=0;r<Eb;r++){let o=40+Sn()*1160;if(o>_m[0]&&o<_m[1])continue;let a=Zo(e,o);if(!a)continue;let c=Sn()<.5?1:-1,[l,h]=a.tangent,u=n[Math.floor(Sn()*n.length)].clone(!0);ym(u,Sn()<.12),u.position.set(a.point[0]+-h*c*(xm+Sn()*.7),0,a.point[1]+l*c*(xm+Sn()*.7));let f=Math.atan2(l,h)+(Sn()<.5?Math.PI:0);Sn()<.15&&(f+=(Sn()-.5)*1.2),u.rotation.y=f+(Sn()-.5)*.12,u.rotation.z=(Sn()-.5)*.05,t.add(u)}let s=(i.bus||[])[0];if(s){let r=Zo(e,Tb);if(r){let o=s.clone(!0);ym(o,!0),o.position.set(r.point[0],0,r.point[1]),o.rotation.y=Math.atan2(r.tangent[0],r.tangent[1])+.06,o.rotation.z=.07,t.add(o)}}}var Rb=30,Cb=7.6,Lr=30,Ib=50,Pb=9,Mm=25,Lb=3,Sm=[4999740,4145720,5655614,4472891,5263946,3816500],bm=[7027246,3033690,7826250,4864602,5921354],Em=['"%Q" \u2014 whit?','did ye hear that? "%Q"','"%Q", says he','"%Q" \u2014 aye, right','"%Q"... ma nerves',`he's away wi it \u2014 "%Q"`],rn=(()=>{let i=1972196;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})();function Tm(i,e,t,n){let s=e.streetLine||[];if(s.length<2)return{update(){}};let r=i.comicLines||{},a=Fb(s)-Lr-Ib;if(a<50)return{update(){}};let c=new nt;c.name="leithers",t.add(c);let l=[];for(let d=0;d<Rb;d++){let m=Nb();m.s=Lr+rn()*a,m.side=rn()<.5?1:-1,m.dir=rn()<.5?1:-1,m.speed=.55+rn()*.5,m.offset=Cb+rn()*1.6,m.state="walk",m.listenT=0,m.cooldown=rn()*Mm,m.phase=rn()*10,m.bubble=null,m.bubbleT=0,c.add(m.group),l.push(m)}let h=0,u=0;function f(d,m){for(let x=0;x<l.length;x++){let p=l[x];p.cooldown>0&&(p.cooldown-=d),p.state==="listen"?(p.listenT-=d,(p.listenT<=0||!(p.target&&p.target.speaking))&&(p.state="walk",p.target=null,p.cooldown=Mm)):(p.s+=p.dir*p.speed*d,(p.s<Lr||p.s>Lr+a)&&(p.dir*=-1,p.s=Math.max(Lr,Math.min(Lr+a,p.s))));let g=Ob(s,p.s);if(g){let[S,M]=g.tangent,v=g.point[0]+-M*p.side*p.offset,A=g.point[1]+S*p.side*p.offset;if(p.group.position.set(v,0,A),p.state==="listen"&&p.target){let E=p.target.group.position;p.group.rotation.y=Math.atan2(E.x-v,E.z-A)}else{p.group.rotation.y=Math.atan2(S*p.dir,M*p.dir);let E=m*(4.6*p.speed)+p.phase;p.group.position.y=Math.abs(Math.sin(E))*.045,p.group.rotation.z=Math.sin(E)*.03}}p.bubble&&(p.bubbleT-=d,p.bubbleT<=0&&(p.group.remove(p.bubble),p.bubble.material.map.dispose(),p.bubble.material.dispose(),p.bubble=null,h--))}for(let x=0;x<4;x++){let p=l[u++%l.length];if(p.state!=="walk"||p.cooldown>0)continue;let g=p.group.position;for(let S of n){if(!S.speaking)continue;let M=S.group.position;if(Math.hypot(M.x-g.x,M.z-g.z)>Pb)continue;p.state="listen",p.target=S,p.listenT=6+rn()*9;let v=r[S.comic.id];if(v&&v.length&&h<Lb&&rn()<.6){let A=v[Math.floor(rn()*v.length)],E=Em[Math.floor(rn()*Em.length)];p.bubble=Ub(E.replace("%Q",A)),p.bubble.position.set(0,p.headTopY+.5,0),p.group.add(p.bubble),p.bubbleT=7,h++}break}}}return{walkers:l,update:f}}function Nb(){let i=1.5+rn()*.35,e=.8+rn()*.45,t=Sm[Math.floor(rn()*Sm.length)],n=new nt,s=Jo(t,!1),r=Jo(Db(t,.62),!0),o=new je({color:1578512,flatShading:!0}),a=.1,c=i*.32,l=.44*e,h=.3*e,u=i*.44,f=.26,d=a+c,m=d+u,x=m+f+.02,p=[];for(let _ of[-1,1]){let T=new et(l*.34,c,h*.7);T.translate(_*l*.24,a+c*.5,0),p.push(T);let I=new et(.11,u*.7,.11);I.translate(_*(l*.5+.05),m-u*.62,0),p.push(I)}let g=new et(l,u,h);g.translate(0,d+u*.5,0),p.push(g),n.add(new Ne(ct(p),s));let S=[];for(let _ of[-1,1]){let T=new et(l*.36,a,h*1.3);T.translate(_*l*.24,a*.5,h*.15),S.push(T)}n.add(new Ne(ct(S),o));let M=new je({color:2235928,flatShading:!0}),v=[r,r,r,r,M,r],A=new Ne(new et(f,f,f*.9),v);A.position.set(0,m+f*.5+.02,0),n.add(A);let E=new je({color:bm[Math.floor(rn()*bm.length)],flatShading:!0}),R=rn()<.3?[-1,1]:[rn()<.5?-1:1];for(let _ of R){let T=new Ne(new et(.2,.24,.11),E);T.position.set(_*(l*.5+.1),d+u*.12,.02),n.add(T)}return{group:n,headTopY:x}}function Db(i,e){let t=Math.round((i>>16&255)*e),n=Math.round((i>>8&255)*e),s=Math.round((i&255)*e);return t<<16|n<<8|s}function Ub(i){let e=document.createElement("canvas");e.width=512,e.height=160;let t=e.getContext("2d"),n=i.split(" "),s=[""];for(let c of n)(s[s.length-1]+" "+c).trim().length>30&&s.length<3&&s.push(""),s[s.length-1]=(s[s.length-1]+" "+c).trim();t.fillStyle="rgba(20, 22, 16, 0.82)",t.strokeStyle="rgba(200, 200, 180, 0.5)",t.lineWidth=3;let r=34+s.length*34;t.beginPath(),t.roundRect(8,80-r/2,496,r,14),t.fill(),t.stroke(),t.fillStyle="#d8d4c0",t.font="italic 26px Georgia, serif",t.textAlign="center",s.forEach((c,l)=>t.fillText(c,256,80-r/2+44+l*32));let o=new Bt(e),a=new Mi(new ri({map:o,transparent:!0,depthTest:!0}));return a.scale.set(1.9,.59,1),a}function Fb(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function Ob(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,h=Math.hypot(c,l);if(t+h>=e){let u=h>0?(e-t)/h:0;return{point:[s+c*u,r+l*u],tangent:[c/(h||1),l/(h||1)]}}t+=h}return null}function Am(){let i=null,e=null,t=!1,n=!1;function s(){if(t){i&&i.state==="suspended"&&i.resume();return}t=!0;let a=window.AudioContext||window.webkitAudioContext;a&&(i=new a,e=i.createGain(),e.gain.value=.16,e.connect(i.destination),Bb(i,e),zb(i,e))}function r(a){if(n=!!a,!i||!e)return;let c=(n?.5:1)*.16,l=i.currentTime;e.gain.cancelScheduledValues(l),e.gain.setValueAtTime(e.gain.value,l),e.gain.linearRampToValueAtTime(c,l+.6)}function o(){!i||!e||Hb(i,e)}return{start:s,setDucked:r,triggerCrackle:o}}function Bb(i,e){let t=i.createGain();t.gain.value=.55;let n=i.createBiquadFilter();n.type="lowpass",n.frequency.value=220,n.Q.value=.7,t.connect(n).connect(e);let s=[55,55.6];for(let r of s){let o=i.createOscillator();o.type="sawtooth",o.frequency.value=r,o.connect(t),o.start()}}function zb(i,e){let t=i.createBufferSource();t.buffer=wm(i,4),t.loop=!0;let n=i.createBiquadFilter();n.type="bandpass",n.frequency.value=500,n.Q.value=.6;let s=i.createGain();s.gain.value=.18,t.connect(n).connect(s).connect(e),t.start();let r=i.createOscillator();r.type="sine",r.frequency.value=.07;let o=i.createGain();o.gain.value=.12,r.connect(o).connect(s.gain),r.start()}function Hb(i,e){let n=i.createBufferSource();n.buffer=wm(i,.18);let s=i.createBiquadFilter();s.type="highpass",s.frequency.value=1800;let r=i.createGain(),o=i.currentTime;r.gain.setValueAtTime(.9,o),r.gain.exponentialRampToValueAtTime(.001,o+.18),n.connect(s).connect(r).connect(e),n.start(o),n.stop(o+.18+.02)}function wm(i,e){let t=Math.max(1,Math.floor(i.sampleRate*e)),n=i.createBuffer(1,t,i.sampleRate),s=n.getChannelData(0);for(let r=0;r<t;r++)s[r]=Math.random()*2-1;return n}function Rm({controls:i,onEnter:e}){let t=document.getElementById("title-card"),n=document.getElementById("touch-forward");function s(){!t||t.classList.contains("hidden")||(t.classList.add("hidden"),i.setEnabled(!0),e&&e())}if(t&&(t.addEventListener("click",s),t.addEventListener("touchend",r=>{r.preventDefault(),s()},{passive:!1})),n){let r=a=>{n.classList.toggle("active",a),i.setForward(a)};n.addEventListener("pointerdown",a=>{a.preventDefault(),n.setPointerCapture?.(a.pointerId),r(!0)});let o=()=>r(!1);n.addEventListener("pointerup",o),n.addEventListener("pointercancel",o),n.addEventListener("pointerleave",o)}return{enter:s}}async function kb(){let i=document.getElementById("scene"),e=["localhost","127.0.0.1"].includes(location.hostname),t=new hl({canvas:i,antialias:!0,preserveDrawingBuffer:e});t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.setSize(window.innerWidth,window.innerHeight),t.toneMapping=No,t.toneMappingExposure=1.46;let n=new eo,s=new qt(70,window.innerWidth/window.innerHeight,.1,1e3);n.add(s);let r=await dp(),o=Rp(r.leith);n.add(o.group),n.fog=o.fog;let a=Kp(o.fog.color,o.streetLine);s.add(a.mesh);let c=Cp(s),l=o.streetLine[0]||[0,0],h=o.streetLine[1]||[l[0],l[1]+1],u={x:l[0],z:l[1],yaw:Math.atan2(-(h[0]-l[0]),-(h[1]-l[1]))},f=Pp(s,i,{nearestStreetPoint:o.nearestStreetPoint,spawn:u});f.setEnabled(!1);let d=Op(r,o,n,s),m=Tm(r,o,n,d.npcs);zp(r,o,n),bp(o,n),$p(o,n);let x=tm(o,r.leith,n),p=cm(o,n);lm(o,r.leith,n),vm(r,o,n);let g=Zp(o,n),S=Am();g.onArcFlash=()=>S.triggerCrackle();let M=!1,v=!1,A=()=>S.setDucked(M||v),E=kp({camera:s,npcs:d.npcs,assets:r,onActiveChange:C=>{v=C>0,A()}}),R=Gp({assets:r,npcs:d.npcs,camera:s,controls:f,proximityAudio:E,onReadingChange:C=>{M=C,A()}});Rm({controls:f,onEnter:()=>{S.start(),E.resume()}}),window.addEventListener("resize",_);function _(){s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.setSize(window.innerWidth,window.innerHeight)}["localhost","127.0.0.1"].includes(location.hostname)&&(window.__mcgrotDebug={camera:s,world:o,npcs:d,leithers:m,controls:f,proximityAudio:E,renderer:t,stepFrame:(C,P)=>{f.update(C),d.update(C,P),m.update(C,P),a.update(P),x.update(C,P),p.update(C,P),g.update(C,P),R.update(C),E.update(),c.update(P),t.render(n,s)}});let T=performance.now();function I(){requestAnimationFrame(I);let C=performance.now(),P=Math.min((C-T)/1e3,.1);T=C;let W=C/1e3;f.update(P),d.update(P,W),a.update(W),x.update(P,W),p.update(P,W),g.update(P,W),R.update(P),E.update(),c.update(W),t.render(n,s)}I()}kb().catch(i=>{console.error("McGrot Walk failed to start:",i)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
