(()=>{var Jp=0,Gh=1,jp=2;var Na=1,Qp=2,yo=3,Cn=0,Mn=1,Pt=2,Ui=0,tr=1,ls=2,Vh=3,Wh=4,em=5;var bs=100,tm=101,nm=102,im=103,sm=104,rm=200,om=201,am=202,cm=203,Xc=204,Yc=205,lm=206,um=207,hm=208,dm=209,fm=210,pm=211,mm=212,gm=213,xm=214,qc=0,Zc=1,Kc=2,nr=3,$c=4,Jc=5,jc=6,Qc=7,wl=0,_m=1,ym=2,Ei=0,Xh=1,Yh=2,qh=3,Da=4,Zh=5,Kh=6,$h=7,Th="attached",vm="detached",Jh=300,Ps=301,xr=302,Al=303,Rl=304,Fa=306,ci=1e3,oi=1001,so=1002,qt=1003,Cl=1004;var _r=1005;var Zt=1006,vo=1007;var Ti=1008;var Wn=1009,jh=1010,Qh=1011,Mo=1012,Il=1013,wi=1014,ei=1015,Oi=1016,Pl=1017,Ll=1018,bo=1020,ed=35902,td=35899,nd=1021,id=1022,ti=1023,Li=1026,Ls=1027,Nl=1028,Dl=1029,Ns=1030,Fl=1031;var Ul=1033,Ua=33776,Oa=33777,Ba=33778,za=33779,Ol=35840,Bl=35841,zl=35842,Hl=35843,kl=36196,Gl=37492,Vl=37496,Wl=37488,Xl=37489,Ha=37490,Yl=37491,ql=37808,Zl=37809,Kl=37810,$l=37811,Jl=37812,jl=37813,Ql=37814,eu=37815,tu=37816,nu=37817,iu=37818,su=37819,ru=37820,ou=37821,au=36492,cu=36494,lu=36495,uu=36283,hu=36284,ka=36285,du=36286;var ir=2300,sr=2301,Wc=2302,wh=2303,Ah=2400,Rh=2401,Ch=2402,Mm=2500;var sd=0,Ga=1,So=2,bm=3200;var Va=0,Sm=1,us="",tt="srgb",On="srgb-linear",sa="linear",St="srgb";var js=7680;var Ih=519,Em=512,Tm=513,wm=514,fu=515,Am=516,Rm=517,pu=518,Cm=519,el=35044;var rd="300 es",Mi=2e3,ro=2001;function b_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function S_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function oo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Im(){let i=oo("canvas");return i.style.display="block",i}var op={},ao=null;function ra(...i){let e="THREE."+i.shift();ao?ao("log",e,...i):console.log(e,...i)}function Pm(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function We(...i){i=Pm(i);let e="THREE."+i.shift();if(ao)ao("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function et(...i){i=Pm(i);let e="THREE."+i.shift();if(ao)ao("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function er(...i){let e=i.join(" ");e in op||(op[e]=!0,We(...i))}function Lm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Nm={[qc]:Zc,[Kc]:jc,[$c]:Qc,[nr]:Jc,[Zc]:qc,[jc]:Kc,[Qc]:$c,[Jc]:nr},Ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ap=1234567,ea=Math.PI/180,rr=180/Math.PI;function ai(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]).toLowerCase()}function dt(i,e,t){return Math.max(e,Math.min(t,i))}function od(i,e){return(i%e+e)%e}function E_(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function T_(i,e,t){return i!==e?(t-i)/(e-i):0}function ta(i,e,t){return(1-t)*i+t*e}function w_(i,e,t,n){return ta(i,e,1-Math.exp(-t*n))}function A_(i,e=1){return e-Math.abs(od(i,e*2)-e)}function R_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function C_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function I_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function P_(i,e){return i+Math.random()*(e-i)}function L_(i){return i*(.5-Math.random())}function N_(i){i!==void 0&&(ap=i);let e=ap+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function D_(i){return i*ea}function F_(i){return i*rr}function U_(i){return(i&i-1)===0&&i!==0}function O_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function B_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function z_(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*p,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*p,a*l);break;case"ZYZ":i.set(c*p,c*f,a*u,a*l);break;default:We("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ui={DEG2RAD:ea,RAD2DEG:rr,generateUUID:ai,clamp:dt,euclideanModulo:od,mapLinear:E_,inverseLerp:T_,lerp:ta,damp:w_,pingpong:A_,smoothstep:R_,smootherstep:C_,randInt:I_,randFloat:P_,randFloatSpread:L_,seededRandom:N_,degToRad:D_,radToDeg:F_,isPowerOfTwo:U_,ceilPowerOfTwo:O_,floorPowerOfTwo:B_,setQuaternionFromProperEuler:z_,normalize:Tt,denormalize:vi},Te=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ut=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(h!==x||c!==d||l!==f||u!==p){let m=c*d+l*f+u*p+h*x;m<0&&(d=-d,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let b=Math.acos(m),v=Math.sin(b);g=Math.sin(g*b)/v,a=Math.sin(a*b)/v,c=c*g+d*a,l=l*g+f*a,u=u*g+p*a,h=h*g+x*a}else{c=c*g+d*a,l=l*g+f*a,u=u*g+p*a,h=h*g+x*a;let b=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=b,l*=b,u*=b,h*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+u*h+c*f-l*d,e[t+1]=c*p+u*d+l*h-a*f,e[t+2]=l*p+u*f+a*d-c*h,e[t+3]=u*p-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),f=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"YZX":this._x=d*u*h+l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h-d*f*p;break;case"XZY":this._x=d*u*h-l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h+d*f*p;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zu.copy(this).projectOnVector(e),this.sub(Zu)}reflect(e){return this.sub(Zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zu=new U,cp=new Ut,rt=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],x=s[0],m=s[3],g=s[6],b=s[1],v=s[4],_=s[7],S=s[2],y=s[5],T=s[8];return r[0]=o*x+a*b+c*S,r[3]=o*m+a*v+c*y,r[6]=o*g+a*_+c*T,r[1]=l*x+u*b+h*S,r[4]=l*m+u*v+h*y,r[7]=l*g+u*_+h*T,r[2]=d*x+f*b+p*S,r[5]=d*m+f*v+p*y,r[8]=d*g+f*_+p*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,p=t*h+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=h*x,e[1]=(s*l-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return er("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ku.makeScale(e,t)),this}rotate(e){return er("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ku.makeRotation(-e)),this}translate(e,t){return er("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ku.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ku=new rt,lp=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),up=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function H_(){let i={enabled:!0,workingColorSpace:On,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===St&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(s.r=io(s.r),s.g=io(s.g),s.b=io(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===us?sa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return er("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return er("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[On]:{primaries:e,whitePoint:n,transfer:sa,toXYZ:lp,fromXYZ:up,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:tt},outputColorSpaceConfig:{drawingBufferColorSpace:tt}},[tt]:{primaries:e,whitePoint:n,transfer:St,toXYZ:lp,fromXYZ:up,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:tt}}}),i}var ht=H_();function Qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function io(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var zr,tl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zr===void 0&&(zr=oo("canvas")),zr.width=e.width,zr.height=e.height;let s=zr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=zr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=oo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qi(t[n]/255)*255):t[n]=Qi(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},k_=0,co=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=ai(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($u(s[o].image)):r.push($u(s[o]))}else r=$u(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function $u(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?tl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}var G_=0,Ju=new U,an=class i extends Ni{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=oi,s=oi,r=Zt,o=Ti,a=ti,c=Wn,l=i.DEFAULT_ANISOTROPY,u=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=ai(),this.name="",this.source=new co(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ju).x}get height(){return this.source.getSize(Ju).y}get depth(){return this.source.getSize(Ju).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ci:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case so:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ci:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case so:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Jh;an.DEFAULT_ANISOTROPY=1;var At=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],p=c[9],x=c[2],m=c[6],g=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(p+m)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,_=(f+1)/2,S=(g+1)/2,y=(u+d)/4,T=(h+x)/4,M=(p+m)/4;return v>_&&v>S?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=y/n,r=T/n):_>S?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=y/s,r=M/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=T/r,s=M/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-p)*(m-p)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-p)/b,this.y=(h-x)/b,this.z=(d-u)/b,this.w=Math.acos((l+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nl=class extends Ni{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new an(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new co(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jn=class extends nl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},oa=class extends an{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var il=class extends an{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $e=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,c,l,u,h,d,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,d,f,p,x,m)}set(e,t,n,s,r,o,a,c,l,u,h,d,f,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Hr.setFromMatrixColumn(e,0).length(),r=1/Hr.setFromMatrixColumn(e,1).length(),o=1/Hr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,p=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+p*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=p+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,p=l*u,x=l*h;t[0]=d+x*a,t[4]=p*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,p=l*u,x=l*h;t[0]=d-x*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*u,f=o*h,p=a*u,x=a*h;t[0]=c*u,t[4]=p*l-f,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=f*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,p=a*c,x=a*l;t[0]=c*u,t[4]=x-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+p,t[10]=d-x*h}else if(e.order==="XZY"){let d=o*c,f=o*l,p=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(V_,e,W_)}lookAt(e,t,n){let s=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),gs.crossVectors(n,Kn),gs.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),gs.crossVectors(n,Kn)),gs.normalize(),dc.crossVectors(Kn,gs),s[0]=gs.x,s[4]=dc.x,s[8]=Kn.x,s[1]=gs.y,s[5]=dc.y,s[9]=Kn.y,s[2]=gs.z,s[6]=dc.z,s[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],b=n[3],v=n[7],_=n[11],S=n[15],y=s[0],T=s[4],M=s[8],w=s[12],C=s[1],R=s[5],P=s[9],F=s[13],z=s[2],D=s[6],B=s[10],H=s[14],K=s[3],se=s[7],de=s[11],V=s[15];return r[0]=o*y+a*C+c*z+l*K,r[4]=o*T+a*R+c*D+l*se,r[8]=o*M+a*P+c*B+l*de,r[12]=o*w+a*F+c*H+l*V,r[1]=u*y+h*C+d*z+f*K,r[5]=u*T+h*R+d*D+f*se,r[9]=u*M+h*P+d*B+f*de,r[13]=u*w+h*F+d*H+f*V,r[2]=p*y+x*C+m*z+g*K,r[6]=p*T+x*R+m*D+g*se,r[10]=p*M+x*P+m*B+g*de,r[14]=p*w+x*F+m*H+g*V,r[3]=b*y+v*C+_*z+S*K,r[7]=b*T+v*R+_*D+S*se,r[11]=b*M+v*P+_*B+S*de,r[15]=b*w+v*F+_*H+S*V,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],x=e[7],m=e[11],g=e[15],b=c*f-l*d,v=a*f-l*h,_=a*d-c*h,S=o*f-l*u,y=o*d-c*u,T=o*h-a*u;return t*(x*b-m*v+g*_)-n*(p*b-m*S+g*y)+s*(p*v-x*S+g*T)-r*(p*_-x*y+m*T)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-n*(r*u-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],x=e[13],m=e[14],g=e[15],b=t*a-n*o,v=t*c-s*o,_=t*l-r*o,S=n*c-s*a,y=n*l-r*a,T=s*l-r*c,M=u*x-h*p,w=u*m-d*p,C=u*g-f*p,R=h*m-d*x,P=h*g-f*x,F=d*g-f*m,z=b*F-v*P+_*R+S*C-y*w+T*M;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/z;return e[0]=(a*F-c*P+l*R)*D,e[1]=(s*P-n*F-r*R)*D,e[2]=(x*T-m*y+g*S)*D,e[3]=(d*y-h*T-f*S)*D,e[4]=(c*C-o*F-l*w)*D,e[5]=(t*F-s*C+r*w)*D,e[6]=(m*_-p*T-g*v)*D,e[7]=(u*T-d*_+f*v)*D,e[8]=(o*P-a*C+l*M)*D,e[9]=(n*C-t*P-r*M)*D,e[10]=(p*y-x*_+g*b)*D,e[11]=(h*_-u*y-f*b)*D,e[12]=(a*w-o*R-c*M)*D,e[13]=(t*R-n*w+s*M)*D,e[14]=(x*v-p*S-m*b)*D,e[15]=(u*S-h*v+d*b)*D,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,p=r*h,x=o*u,m=o*h,g=a*h,b=c*l,v=c*u,_=c*h,S=n.x,y=n.y,T=n.z;return s[0]=(1-(x+g))*S,s[1]=(f+_)*S,s[2]=(p-v)*S,s[3]=0,s[4]=(f-_)*y,s[5]=(1-(d+g))*y,s[6]=(m+b)*y,s[7]=0,s[8]=(p+v)*T,s[9]=(m-b)*T,s[10]=(1-(d+x))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Hr.set(s[0],s[1],s[2]).length(),a=Hr.set(s[4],s[5],s[6]).length(),c=Hr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),xi.copy(this);let l=1/o,u=1/a,h=1/c;return xi.elements[0]*=l,xi.elements[1]*=l,xi.elements[2]*=l,xi.elements[4]*=u,xi.elements[5]*=u,xi.elements[6]*=u,xi.elements[8]*=h,xi.elements[9]*=h,xi.elements[10]*=h,t.setFromRotationMatrix(xi),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=Mi,c=!1){let l=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),p,x;if(c)p=r/(o-r),x=o*r/(o-r);else if(a===Mi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ro)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Mi,c=!1){let l=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),p,x;if(c)p=1/(o-r),x=o/(o-r);else if(a===Mi)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===ro)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Hr=new U,xi=new $e,V_=new U(0,0,0),W_=new U(1,1,1),gs=new U,dc=new U,Kn=new U,hp=new $e,dp=new Ut,Jt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dp.setFromEuler(this),this.setFromQuaternion(dp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jt.DEFAULT_ORDER="XYZ";var aa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},X_=0,fp=new U,kr=new Ut,Yi=new $e,fc=new U,Go=new U,Y_=new U,q_=new Ut,pp=new U(1,0,0),mp=new U(0,1,0),gp=new U(0,0,1),xp={type:"added"},Z_={type:"removed"},Gr={type:"childadded",child:null},ju={type:"childremoved",child:null},Ot=class i extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new Jt,n=new Ut,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new rt}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new aa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return kr.setFromAxisAngle(e,t),this.quaternion.multiply(kr),this}rotateOnWorldAxis(e,t){return kr.setFromAxisAngle(e,t),this.quaternion.premultiply(kr),this}rotateX(e){return this.rotateOnAxis(pp,e)}rotateY(e){return this.rotateOnAxis(mp,e)}rotateZ(e){return this.rotateOnAxis(gp,e)}translateOnAxis(e,t){return fp.copy(e).applyQuaternion(this.quaternion),this.position.add(fp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pp,e)}translateY(e){return this.translateOnAxis(mp,e)}translateZ(e){return this.translateOnAxis(gp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fc.copy(e):fc.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(Go,fc,this.up):Yi.lookAt(fc,Go,this.up),this.quaternion.setFromRotationMatrix(Yi),s&&(Yi.extractRotation(s.matrixWorld),kr.setFromRotationMatrix(Yi),this.quaternion.premultiply(kr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xp),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Z_),ju.child=e,this.dispatchEvent(ju),ju.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xp),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,Y_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,q_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ot.DEFAULT_UP=new U(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var nt=class extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}},K_={type:"move"},lo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(l,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(K_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Dm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xs={h:0,s:0,l:0},pc={h:0,s:0,l:0};function Qu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ht.workingColorSpace){if(e=od(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Qu(o,r,e+1/3),this.g=Qu(o,r,e),this.b=Qu(o,r,e-1/3)}return ht.colorSpaceToWorking(this,s),this}setStyle(e,t=tt){function n(r){r!==void 0&&parseFloat(r)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tt){let n=Dm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tt){return ht.workingToColorSpace(Rn.copy(this),e),Math.round(dt(Rn.r*255,0,255))*65536+Math.round(dt(Rn.g*255,0,255))*256+Math.round(dt(Rn.b*255,0,255))}getHexString(e=tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(Rn.copy(this),t);let n=Rn.r,s=Rn.g,r=Rn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=tt){ht.workingToColorSpace(Rn.copy(this),e);let t=Rn.r,n=Rn.g,s=Rn.b;return e!==tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(xs),this.setHSL(xs.h+e,xs.s+t,xs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xs),e.getHSL(pc);let n=ta(xs.h,pc.h,t),s=ta(xs.s,pc.s,t),r=ta(xs.l,pc.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rn=new pe;pe.NAMES=Dm;var or=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new pe(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var es=class extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jt,this.environmentIntensity=1,this.environmentRotation=new Jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},_i=new U,qi=new U,eh=new U,Zi=new U,Vr=new U,Wr=new U,_p=new U,th=new U,nh=new U,ih=new U,sh=new At,rh=new At,oh=new At,ji=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),_i.subVectors(e,t),s.cross(_i);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){_i.subVectors(s,t),qi.subVectors(n,t),eh.subVectors(e,t);let o=_i.dot(_i),a=_i.dot(qi),c=_i.dot(eh),l=qi.dot(qi),u=qi.dot(eh),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(l*c-a*u)*d,p=(o*u-a*c)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Zi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Zi.x),c.addScaledVector(o,Zi.y),c.addScaledVector(a,Zi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return sh.setScalar(0),rh.setScalar(0),oh.setScalar(0),sh.fromBufferAttribute(e,t),rh.fromBufferAttribute(e,n),oh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(sh,r.x),o.addScaledVector(rh,r.y),o.addScaledVector(oh,r.z),o}static isFrontFacing(e,t,n,s){return _i.subVectors(n,t),qi.subVectors(e,t),_i.cross(qi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),_i.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Vr.subVectors(s,n),Wr.subVectors(r,n),th.subVectors(e,n);let c=Vr.dot(th),l=Wr.dot(th);if(c<=0&&l<=0)return t.copy(n);nh.subVectors(e,s);let u=Vr.dot(nh),h=Wr.dot(nh);if(u>=0&&h<=u)return t.copy(s);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Vr,o);ih.subVectors(e,r);let f=Vr.dot(ih),p=Wr.dot(ih);if(p>=0&&f<=p)return t.copy(r);let x=f*l-c*p;if(x<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(Wr,a);let m=u*p-f*h;if(m<=0&&h-u>=0&&f-p>=0)return _p.subVectors(r,s),a=(h-u)/(h-u+(f-p)),t.copy(s).addScaledVector(_p,a);let g=1/(m+x+d);return o=x*g,a=d*g,t.copy(n).addScaledVector(Vr,o).addScaledVector(Wr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},en=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,yi):yi.fromBufferAttribute(r,o),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mc.copy(n.boundingBox)),mc.applyMatrix4(e.matrixWorld),this.union(mc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),gc.subVectors(this.max,Vo),Xr.subVectors(e.a,Vo),Yr.subVectors(e.b,Vo),qr.subVectors(e.c,Vo),_s.subVectors(Yr,Xr),ys.subVectors(qr,Yr),Vs.subVectors(Xr,qr);let t=[0,-_s.z,_s.y,0,-ys.z,ys.y,0,-Vs.z,Vs.y,_s.z,0,-_s.x,ys.z,0,-ys.x,Vs.z,0,-Vs.x,-_s.y,_s.x,0,-ys.y,ys.x,0,-Vs.y,Vs.x,0];return!ah(t,Xr,Yr,qr,gc)||(t=[1,0,0,0,1,0,0,0,1],!ah(t,Xr,Yr,qr,gc))?!1:(xc.crossVectors(_s,ys),t=[xc.x,xc.y,xc.z],ah(t,Xr,Yr,qr,gc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ki=[new U,new U,new U,new U,new U,new U,new U,new U],yi=new U,mc=new en,Xr=new U,Yr=new U,qr=new U,_s=new U,ys=new U,Vs=new U,Vo=new U,gc=new U,xc=new U,Ws=new U;function ah(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ws.fromArray(i,r);let a=s.x*Math.abs(Ws.x)+s.y*Math.abs(Ws.y)+s.z*Math.abs(Ws.z),c=e.dot(Ws),l=t.dot(Ws),u=n.dot(Ws);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var rn=new U,_c=new Te,$_=0,wt=class extends Ni{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=el,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_c.fromBufferAttribute(this,t),_c.applyMatrix3(e),this.setXY(t,_c.x,_c.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==el&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var ca=class extends wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var la=class extends wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Qe=class extends wt{constructor(e,t,n){super(new Float32Array(e),t,n)}},J_=new en,Wo=new U,ch=new U,Hn=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):J_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);let t=Wo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Wo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ch.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add(ch)),this.expandByPoint(Wo.copy(e.center).sub(ch))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},j_=0,ri=new $e,lh=new Ot,Zr=new U,$n=new en,Xo=new en,mn=new U,pt=class i extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(b_(e)?la:ca)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new rt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,n){return ri.makeTranslation(e,t,n),this.applyMatrix4(ri),this}scale(e,t,n){return ri.makeScale(e,t,n),this.applyMatrix4(ri),this}lookAt(e){return lh.lookAt(e),lh.updateMatrix(),this.applyMatrix4(lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qe(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];$n.setFromBufferAttribute(r),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Xo.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors($n.min,Xo.min),$n.expandByPoint(mn),mn.addVectors($n.max,Xo.max),$n.expandByPoint(mn)):($n.expandByPoint(Xo.min),$n.expandByPoint(Xo.max))}$n.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)mn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(mn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)mn.fromBufferAttribute(a,l),c&&(Zr.fromBufferAttribute(e,l),mn.add(Zr)),s=Math.max(s,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new wt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let M=0;M<n.count;M++)a[M]=new U,c[M]=new U;let l=new U,u=new U,h=new U,d=new Te,f=new Te,p=new Te,x=new U,m=new U;function g(M,w,C){l.fromBufferAttribute(n,M),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,C),d.fromBufferAttribute(r,M),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,C),u.sub(l),h.sub(l),f.sub(d),p.sub(d);let R=1/(f.x*p.y-p.x*f.y);isFinite(R)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(R),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(R),a[M].add(x),a[w].add(x),a[C].add(x),c[M].add(m),c[w].add(m),c[C].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let M=0,w=b.length;M<w;++M){let C=b[M],R=C.start,P=C.count;for(let F=R,z=R+P;F<z;F+=3)g(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let v=new U,_=new U,S=new U,y=new U;function T(M){S.fromBufferAttribute(s,M),y.copy(S);let w=a[M];v.copy(w),v.sub(S.multiplyScalar(S.dot(w))).normalize(),_.crossVectors(y,w);let R=_.dot(c[M])<0?-1:1;o.setXYZW(M,v.x,v.y,v.z,R)}for(let M=0,w=b.length;M<w;++M){let C=b[M],R=C.start,P=C.count;for(let F=R,z=R+P;F<z;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,u=new U,h=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u),f=0,p=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let g=0;g<u;g++)d[p++]=l[f++]}return new wt(d,u,h)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ar=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=el,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Un=new U,Ss=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyMatrix4(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyNormalMatrix(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.transformDirection(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ra("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ra("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Q_=0,In=class extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=tr,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xc,this.blendDst=Yc,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xc&&(n.blendSrc=this.blendSrc),this.blendDst!==Yc&&(n.blendDst=this.blendDst),this.blendEquation!==bs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==nr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ih&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==js&&(n.stencilFail=this.stencilFail),this.stencilZFail!==js&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==js&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Te().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Te().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Di=class extends In{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Kr,Yo=new U,$r=new U,Jr=new U,jr=new Te,qo=new Te,Fm=new $e,yc=new U,Zo=new U,vc=new U,yp=new Te,uh=new Te,vp=new Te,ts=class extends Ot{constructor(e=new Di){if(super(),this.isSprite=!0,this.type="Sprite",Kr===void 0){Kr=new pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ar(t,5);Kr.setIndex([0,1,2,0,2,3]),Kr.setAttribute("position",new Ss(n,3,0,!1)),Kr.setAttribute("uv",new Ss(n,2,3,!1))}this.geometry=Kr,this.material=e,this.center=new Te(.5,.5),this.count=1}raycast(e,t){e.camera===null&&et('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$r.setFromMatrixScale(this.matrixWorld),Fm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Jr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$r.multiplyScalar(-Jr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Mc(yc.set(-.5,-.5,0),Jr,o,$r,s,r),Mc(Zo.set(.5,-.5,0),Jr,o,$r,s,r),Mc(vc.set(.5,.5,0),Jr,o,$r,s,r),yp.set(0,0),uh.set(1,0),vp.set(1,1);let a=e.ray.intersectTriangle(yc,Zo,vc,!1,Yo);if(a===null&&(Mc(Zo.set(-.5,.5,0),Jr,o,$r,s,r),uh.set(0,1),a=e.ray.intersectTriangle(yc,vc,Zo,!1,Yo),a===null))return;let c=e.ray.origin.distanceTo(Yo);c<e.near||c>e.far||t.push({distance:c,point:Yo.clone(),uv:ji.getInterpolation(Yo,yc,Zo,vc,yp,uh,vp,new Te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Mc(i,e,t,n,s,r){jr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(qo.x=r*jr.x-s*jr.y,qo.y=s*jr.x+r*jr.y):qo.copy(jr),i.copy(e),i.x+=qo.x,i.y+=qo.y,i.applyMatrix4(Fm)}var $i=new U,hh=new U,bc=new U,vs=new U,dh=new U,Sc=new U,fh=new U,cr=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){hh.copy(e).add(t).multiplyScalar(.5),bc.copy(t).sub(e).normalize(),vs.copy(this.origin).sub(hh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(bc),a=vs.dot(this.direction),c=-vs.dot(bc),l=vs.lengthSq(),u=Math.abs(1-o*o),h,d,f,p;if(u>0)if(h=o*c-a,d=o*a-c,p=r*u,h>=0)if(d>=-p)if(d<=p){let x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-p?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=p?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(hh).addScaledVector(bc,d),f}intersectSphere(e,t){$i.subVectors(e.center,this.origin);let n=$i.dot(this.direction),s=$i.dot($i)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,n,s,r){dh.subVectors(t,e),Sc.subVectors(n,e),fh.crossVectors(dh,Sc);let o=this.direction.dot(fh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vs.subVectors(this.origin,e);let c=a*this.direction.dot(Sc.crossVectors(vs,Sc));if(c<0)return null;let l=a*this.direction.dot(dh.cross(vs));if(l<0||c+l>o)return null;let u=-a*vs.dot(fh);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},un=class extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Mp=new $e,Xs=new cr,Ec=new Hn,bp=new U,Tc=new U,wc=new U,Ac=new U,ph=new U,Rc=new U,Sp=new U,Cc=new U,Pe=class extends Ot{constructor(e=new pt,t=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Rc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(ph.fromBufferAttribute(h,e),o?Rc.addScaledVector(ph,u):Rc.addScaledVector(ph.sub(t),u))}t.add(Rc)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ec.copy(n.boundingSphere),Ec.applyMatrix4(r),Xs.copy(e.ray).recast(e.near),!(Ec.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(Ec,bp)===null||Xs.origin.distanceToSquared(bp)>(e.far-e.near)**2))&&(Mp.copy(r).invert(),Xs.copy(e.ray).applyMatrix4(Mp),!(n.boundingBox!==null&&Xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],b=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,S=v;_<S;_+=3){let y=a.getX(_),T=a.getX(_+1),M=a.getX(_+2);s=Ic(this,g,e,n,l,u,h,y,T,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let b=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);s=Ic(this,o,e,n,l,u,h,b,v,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],b=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,S=v;_<S;_+=3){let y=_,T=_+1,M=_+2;s=Ic(this,g,e,n,l,u,h,y,T,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let b=m,v=m+1,_=m+2;s=Ic(this,o,e,n,l,u,h,b,v,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function ey(i,e,t,n,s,r,o,a){let c;if(e.side===Mn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Cn,a),c===null)return null;Cc.copy(a),Cc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Cc);return l<t.near||l>t.far?null:{distance:l,point:Cc.clone(),object:i}}function Ic(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Tc),i.getVertexPosition(c,wc),i.getVertexPosition(l,Ac);let u=ey(i,e,t,n,Tc,wc,Ac,Sp);if(u){let h=new U;ji.getBarycoord(Sp,Tc,wc,Ac,h),s&&(u.uv=ji.getInterpolatedAttribute(s,a,c,l,h,new Te)),r&&(u.uv1=ji.getInterpolatedAttribute(r,a,c,l,h,new Te)),o&&(u.normal=ji.getInterpolatedAttribute(o,a,c,l,h,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new U,materialIndex:0};ji.getNormal(Tc,wc,Ac,d.normal),u.face=d,u.barycoord=h}return u}var Ko=new At,Ep=new At,Tp=new At,ty=new At,wp=new $e,Pc=new U,mh=new Hn,Ap=new $e,gh=new cr,ua=class extends Pe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Th,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new en),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pc),this.boundingBox.expandByPoint(Pc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Hn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pc),this.boundingSphere.expandByPoint(Pc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mh.copy(this.boundingSphere),mh.applyMatrix4(s),e.ray.intersectsSphere(mh)!==!1&&(Ap.copy(s).invert(),gh.copy(e.ray).applyMatrix4(Ap),!(this.boundingBox!==null&&gh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,gh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new At,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Th?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===vm?this.bindMatrixInverse.copy(this.bindMatrix).invert():We("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Ep.fromBufferAttribute(s.attributes.skinIndex,e),Tp.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Ko.copy(t),t.set(0,0,0,0)):(Ko.set(...t,1),t.set(0,0,0)),Ko.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Tp.getComponent(r);if(o!==0){let a=Ep.getComponent(r);wp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(ty.copy(Ko).applyMatrix4(wp),o)}}return t.isVector4&&(t.w=Ko.w),t.applyMatrix4(this.bindMatrixInverse)}},uo=class extends Ot{constructor(){super(),this.isBone=!0,this.type="Bone"}},ho=class extends an{constructor(e=null,t=1,n=1,s,r,o,a,c,l=qt,u=qt,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Rp=new $e,ny=new $e,ha=class i{constructor(e=[],t=[]){this.uuid=ai(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){We("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:ny;Rp.multiplyMatrices(a,t[r]),Rp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ho(t,e,e,ti,ei);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(We("Skeleton: No bone found with UUID:",r),o=new uo),this.bones.push(o),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Es=class extends wt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qr=new $e,Cp=new $e,Lc=[],Ip=new en,iy=new $e,$o=new Pe,Jo=new Hn,gn=class extends Pe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Es(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,iy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new en),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qr),Ip.copy(e.boundingBox).applyMatrix4(Qr),this.boundingBox.union(Ip)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qr),Jo.copy(e.boundingSphere).applyMatrix4(Qr),this.boundingSphere.union(Jo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if($o.geometry=this.geometry,$o.material=this.material,$o.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jo.copy(this.boundingSphere),Jo.applyMatrix4(n),e.ray.intersectsSphere(Jo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qr),Cp.multiplyMatrices(n,Qr),$o.matrixWorld=Cp,$o.raycast(e,Lc);for(let o=0,a=Lc.length;o<a;o++){let c=Lc[o];c.instanceId=r,c.object=this,t.push(c)}Lc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Es(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ho(new Float32Array(s*this.count),s,this.count,Nl,ei));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xh=new U,sy=new U,ry=new rt,Ii=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=xh.subVectors(n,t).cross(sy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(xh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ry.getNormalMatrix(e),s=this.coplanarPoint(xh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ys=new Hn,oy=new Te(.5,.5),Nc=new U,fo=class{constructor(e=new Ii,t=new Ii,n=new Ii,s=new Ii,r=new Ii,o=new Ii){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mi,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],b=r[12],v=r[13],_=r[14],S=r[15];if(s[0].setComponents(l-o,f-u,g-p,S-b).normalize(),s[1].setComponents(l+o,f+u,g+p,S+b).normalize(),s[2].setComponents(l+a,f+h,g+x,S+v).normalize(),s[3].setComponents(l-a,f-h,g-x,S-v).normalize(),n)s[4].setComponents(c,d,m,_).normalize(),s[5].setComponents(l-c,f-d,g-m,S-_).normalize();else if(s[4].setComponents(l-c,f-d,g-m,S-_).normalize(),t===Mi)s[5].setComponents(l+c,f+d,g+m,S+_).normalize();else if(t===ro)s[5].setComponents(c,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ys)}intersectsSprite(e){Ys.center.set(0,0,0);let t=oy.distanceTo(e.center);return Ys.radius=.7071067811865476+t,Ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ys)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Nc.x=s.normal.x>0?e.max.x:e.min.x,Nc.y=s.normal.y>0?e.max.y:e.min.y,Nc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Nc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ts=class extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},sl=new U,rl=new U,Pp=new $e,jo=new cr,Dc=new Hn,_h=new U,Lp=new U,lr=class extends Ot{constructor(e=new pt,t=new Ts){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)sl.fromBufferAttribute(t,s-1),rl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=sl.distanceTo(rl);e.setAttribute("lineDistance",new Qe(n,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dc.copy(n.boundingSphere),Dc.applyMatrix4(s),Dc.radius+=r,e.ray.intersectsSphere(Dc)===!1)return;Pp.copy(s).invert(),jo.copy(e.ray).applyMatrix4(Pp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=l){let g=u.getX(x),b=u.getX(x+1),v=Fc(this,e,jo,c,g,b,x);v&&t.push(v)}if(this.isLineLoop){let x=u.getX(p-1),m=u.getX(f),g=Fc(this,e,jo,c,x,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=l){let g=Fc(this,e,jo,c,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=Fc(this,e,jo,c,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Fc(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(sl.fromBufferAttribute(a,s),rl.fromBufferAttribute(a,r),t.distanceSqToSegment(sl,rl,_h,Lp)>n)return;_h.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(_h);if(!(l<e.near||l>e.far))return{distance:l,point:Lp.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Np=new U,Dp=new U,ur=class extends lr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Np.fromBufferAttribute(t,s),Dp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Np.distanceTo(Dp);e.setAttribute("lineDistance",new Qe(n,1))}else We("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},da=class extends lr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ws=class extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fp=new $e,Ph=new cr,Uc=new Hn,Oc=new U,hr=class extends Ot{constructor(e=new pt,t=new ws){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uc.copy(n.boundingSphere),Uc.applyMatrix4(s),Uc.radius+=r,e.ray.intersectsSphere(Uc)===!1)return;Fp.copy(s).invert(),Ph.copy(e.ray).applyMatrix4(Fp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let p=d,x=f;p<x;p++){let m=l.getX(p);Oc.fromBufferAttribute(h,m),Up(Oc,m,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let p=d,x=f;p<x;p++)Oc.fromBufferAttribute(h,p),Up(Oc,p,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Up(i,e,t,n,s,r,o){let a=Ph.distanceSqToPoint(i);if(a<t){let c=new U;Ph.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var po=class extends an{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=qt,this.minFilter=qt,this.generateMipmaps=!1,this.needsUpdate=!0}};var fa=class extends an{constructor(e=[],t=Ps,n,s,r,o,a,c,l,u){super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},xt=class extends an{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ns=class extends an{constructor(e,t,n=wi,s,r,o,a=qt,c=qt,l,u=Li,h=1){if(u!==Li&&u!==Ls)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new co(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ol=class extends ns{constructor(e,t=wi,n=Ps,s,r,o=qt,a=qt,c,l=Li){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},pa=class extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ze=class i extends pt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(u,3)),this.setAttribute("uv",new Qe(h,2));function p(x,m,g,b,v,_,S,y,T,M,w){let C=_/T,R=S/M,P=_/2,F=S/2,z=y/2,D=T+1,B=M+1,H=0,K=0,se=new U;for(let de=0;de<B;de++){let V=de*R-F;for(let j=0;j<D;j++){let he=j*C-P;se[x]=he*b,se[m]=V*v,se[g]=z,l.push(se.x,se.y,se.z),se[x]=0,se[m]=0,se[g]=y>0?1:-1,u.push(se.x,se.y,se.z),h.push(j/T),h.push(1-de/M),H+=1}}for(let de=0;de<M;de++)for(let V=0;V<T;V++){let j=d+V+D*de,he=d+V+D*(de+1),Se=d+(V+1)+D*(de+1),Ee=d+(V+1)+D*de;c.push(j,he,Ee),c.push(he,Se,Ee),K+=6}a.addGroup(f,K,w),f+=K,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var tn=class i extends pt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],p=0,x=[],m=n/2,g=0;b(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Qe(h,3)),this.setAttribute("normal",new Qe(d,3)),this.setAttribute("uv",new Qe(f,2));function b(){let _=new U,S=new U,y=0,T=(t-e)/n;for(let M=0;M<=r;M++){let w=[],C=M/r,R=C*(t-e)+e;for(let P=0;P<=s;P++){let F=P/s,z=F*c+a,D=Math.sin(z),B=Math.cos(z);S.x=R*D,S.y=-C*n+m,S.z=R*B,h.push(S.x,S.y,S.z),_.set(D,T,B).normalize(),d.push(_.x,_.y,_.z),f.push(F,1-C),w.push(p++)}x.push(w)}for(let M=0;M<s;M++)for(let w=0;w<r;w++){let C=x[w][M],R=x[w+1][M],P=x[w+1][M+1],F=x[w][M+1];(e>0||w!==0)&&(u.push(C,R,F),y+=3),(t>0||w!==r-1)&&(u.push(R,P,F),y+=3)}l.addGroup(g,y,0),g+=y}function v(_){let S=p,y=new Te,T=new U,M=0,w=_===!0?e:t,C=_===!0?1:-1;for(let P=1;P<=s;P++)h.push(0,m*C,0),d.push(0,C,0),f.push(.5,.5),p++;let R=p;for(let P=0;P<=s;P++){let z=P/s*c+a,D=Math.cos(z),B=Math.sin(z);T.x=w*B,T.y=m*C,T.z=w*D,h.push(T.x,T.y,T.z),d.push(0,C,0),y.x=D*.5+.5,y.y=B*.5*C+.5,f.push(y.x,y.y),p++}for(let P=0;P<s;P++){let F=S+P,z=R+P;_===!0?u.push(z,z+1,F):u.push(z+1,z,F),M+=3}l.addGroup(g,M,_===!0?1:2),g+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},As=class i extends tn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){We("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Te:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new U,s=[],r=[],o=[],a=new U,c=new $e;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new U)}r[0]=new U,o[0]=new U;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(dt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(dt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},mo=class extends jn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Te){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},al=class extends mo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ad(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Op=new U,Bp=new U,yh=new ad,vh=new ad,Mh=new ad,cl=class extends jn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new U){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Bp.subVectors(s[0],s[1]).add(s[0]),l=Bp);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Op.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Op),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),yh.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,p,x,m),vh.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,p,x,m),Mh.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,p,x,m)}else this.curveType==="catmullrom"&&(yh.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),vh.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Mh.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(yh.calc(c),vh.calc(c),Mh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function zp(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function ay(i,e){let t=1-i;return t*t*e}function cy(i,e){return 2*(1-i)*i*e}function ly(i,e){return i*i*e}function na(i,e,t,n){return ay(i,e)+cy(i,t)+ly(i,n)}function uy(i,e){let t=1-i;return t*t*t*e}function hy(i,e){let t=1-i;return 3*t*t*i*e}function dy(i,e){return 3*(1-i)*i*i*e}function fy(i,e){return i*i*i*e}function ia(i,e,t,n,s){return uy(i,e)+hy(i,t)+dy(i,n)+fy(i,s)}var ma=class extends jn{constructor(e=new Te,t=new Te,n=new Te,s=new Te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Te){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ia(e,s.x,r.x,o.x,a.x),ia(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ll=class extends jn{constructor(e=new U,t=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ia(e,s.x,r.x,o.x,a.x),ia(e,s.y,r.y,o.y,a.y),ia(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ga=class extends jn{constructor(e=new Te,t=new Te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Te){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ul=class extends jn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xa=class extends jn{constructor(e=new Te,t=new Te,n=new Te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Te){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(na(e,s.x,r.x,o.x),na(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hl=class extends jn{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(na(e,s.x,r.x,o.x),na(e,s.y,r.y,o.y),na(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_a=class extends jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Te){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(zp(a,c.x,l.x,u.x,h.x),zp(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Te().fromArray(s))}return this}},Lh=Object.freeze({__proto__:null,ArcCurve:al,CatmullRomCurve3:cl,CubicBezierCurve:ma,CubicBezierCurve3:ll,EllipseCurve:mo,LineCurve:ga,LineCurve3:ul,QuadraticBezierCurve:xa,QuadraticBezierCurve3:hl,SplineCurve:_a}),dl=class extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Lh[s.type]().fromJSON(s))}return this}},ya=class extends dl{constructor(e){super(),this.type="Path",this.currentPoint=new Te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ga(this.currentPoint.clone(),new Te(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new xa(this.currentPoint.clone(),new Te(e,t),new Te(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new ma(this.currentPoint.clone(),new Te(e,t),new Te(n,s),new Te(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new _a(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new mo(e,t,n,s,r,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},go=class extends ya{constructor(e){super(e),this.uuid=ai(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ya().fromJSON(s))}return this}};function py(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Um(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=yy(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let u=a,h=c;for(let d=t;d<s;d+=t){let f=i[d],p=i[d+1];f<a&&(a=f),p<c&&(c=p),f>u&&(u=f),p>h&&(h=p)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return va(r,o,t,a,c,l,0),o}function Um(i,e,t,n,s){let r;if(s===Iy(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Hp(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Hp(o/n|0,i[o],i[o+1],r);return r&&xo(r,r.next)&&(ba(r),r=r.next),r}function dr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(xo(t,t.next)||Yt(t.prev,t,t.next)===0)){if(ba(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function va(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Ey(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?gy(i,n,s,r):my(i)){e.push(c.i,i.i,l.i),ba(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=xy(dr(i),e),va(i,e,t,n,s,r,2)):o===2&&_y(i,e,t,n,s,r):va(dr(i),e,t,n,s,r,1);break}}}function my(i){let e=i.prev,t=i,n=i.next;if(Yt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=Math.min(s,r,o),h=Math.min(a,c,l),d=Math.max(s,r,o),f=Math.max(a,c,l),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&Qo(s,a,r,c,o,l,p.x,p.y)&&Yt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function gy(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Yt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,f=Math.min(a,c,l),p=Math.min(u,h,d),x=Math.max(a,c,l),m=Math.max(u,h,d),g=Nh(f,p,e,t,n),b=Nh(x,m,e,t,n),v=i.prevZ,_=i.nextZ;for(;v&&v.z>=g&&_&&_.z<=b;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&Qo(a,u,c,h,l,d,v.x,v.y)&&Yt(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=f&&_.x<=x&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&Qo(a,u,c,h,l,d,_.x,_.y)&&Yt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=g;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&Qo(a,u,c,h,l,d,v.x,v.y)&&Yt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=b;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&Qo(a,u,c,h,l,d,_.x,_.y)&&Yt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function xy(i,e){let t=i;do{let n=t.prev,s=t.next.next;!xo(n,s)&&Bm(n,t,t.next,s)&&Ma(n,s)&&Ma(s,n)&&(e.push(n.i,t.i,s.i),ba(t),ba(t.next),t=i=s),t=t.next}while(t!==i);return dr(t)}function _y(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ay(o,a)){let c=zm(o,a);o=dr(o,o.next),c=dr(c,c.next),va(o,e,t,n,s,r,0),va(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function yy(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Um(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(wy(l))}s.sort(vy);for(let r=0;r<s.length;r++)t=My(s[r],t);return t}function vy(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function My(i,e){let t=by(i,e);if(!t)return e;let n=zm(t,i);return dr(n,n.next),dr(t,t.next)}function by(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(xo(i,t))return t;do{if(xo(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Om(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let h=Math.abs(s-t.y)/(n-t.x);Ma(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Sy(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function Sy(i,e){return Yt(i.prev,i,e.prev)<0&&Yt(e.next,i,i.next)<0}function Ey(i,e,t,n){let s=i;do s.z===0&&(s.z=Nh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ty(s)}function Ty(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Nh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function wy(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Om(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Qo(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Om(i,e,t,n,s,r,o,a)}function Ay(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ry(i,e)&&(Ma(i,e)&&Ma(e,i)&&Cy(i,e)&&(Yt(i.prev,i,e.prev)||Yt(i,e.prev,e))||xo(i,e)&&Yt(i.prev,i,i.next)>0&&Yt(e.prev,e,e.next)>0)}function Yt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function xo(i,e){return i.x===e.x&&i.y===e.y}function Bm(i,e,t,n){let s=zc(Yt(i,e,t)),r=zc(Yt(i,e,n)),o=zc(Yt(t,n,i)),a=zc(Yt(t,n,e));return!!(s!==r&&o!==a||s===0&&Bc(i,t,e)||r===0&&Bc(i,n,e)||o===0&&Bc(t,i,n)||a===0&&Bc(t,e,n))}function Bc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function zc(i){return i>0?1:i<0?-1:0}function Ry(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Bm(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ma(i,e){return Yt(i.prev,i,i.next)<0?Yt(i,e,i.next)>=0&&Yt(i,i.prev,e)>=0:Yt(i,e,i.prev)<0||Yt(i,i.next,e)<0}function Cy(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function zm(i,e){let t=Dh(i.i,i.x,i.y),n=Dh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Hp(i,e,t,n){let s=Dh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ba(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Dh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Iy(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Fh=class{static triangulate(e,t,n=2){return py(e,t,n)}},Qs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];kp(e),Gp(n,e);let o=e.length;t.forEach(kp);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Gp(n,t[c]);let a=Fh.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function kp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Gp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Sa=class i extends pt{constructor(e=new go([new Te(.5,.5),new Te(-.5,.5),new Te(-.5,-.5),new Te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new Qe(s,3)),this.setAttribute("uv",new Qe(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:Py,v,_=!1,S,y,T,M;if(g){v=g.getSpacedPoints(u),_=!0,d=!1;let ne=g.isCatmullRomCurve3?g.closed:!1;S=g.computeFrenetFrames(u,ne),y=new U,T=new U,M=new U}d||(m=0,f=0,p=0,x=0);let w=a.extractPoints(l),C=w.shape,R=w.holes;if(!Qs.isClockWise(C)){C=C.reverse();for(let ne=0,re=R.length;ne<re;ne++){let oe=R[ne];Qs.isClockWise(oe)&&(R[ne]=oe.reverse())}}function F(ne){let oe=10000000000000001e-36,fe=ne[0];for(let me=1;me<=ne.length;me++){let Le=me%ne.length,Ae=ne[Le],ke=Ae.x-fe.x,He=Ae.y-fe.y,N=ke*ke+He*He,ve=Math.max(Math.abs(Ae.x),Math.abs(Ae.y),Math.abs(fe.x),Math.abs(fe.y)),ue=oe*ve*ve;if(N<=ue){ne.splice(Le,1),me--;continue}fe=Ae}}F(C),R.forEach(F);let z=R.length,D=C;for(let ne=0;ne<z;ne++){let re=R[ne];C=C.concat(re)}function B(ne,re,oe){return re||et("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(re,oe)}let H=C.length;function K(ne,re,oe){let fe,me,Le,Ae=ne.x-re.x,ke=ne.y-re.y,He=oe.x-ne.x,N=oe.y-ne.y,ve=Ae*Ae+ke*ke,ue=Ae*N-ke*He;if(Math.abs(ue)>Number.EPSILON){let A=Math.sqrt(ve),E=Math.sqrt(He*He+N*N),G=re.x-ke/A,L=re.y+Ae/A,O=oe.x-N/E,X=oe.y+He/E,W=((O-G)*N-(X-L)*He)/(Ae*N-ke*He);fe=G+Ae*W-ne.x,me=L+ke*W-ne.y;let Y=fe*fe+me*me;if(Y<=2)return new Te(fe,me);Le=Math.sqrt(Y/2)}else{let A=!1;Ae>Number.EPSILON?He>Number.EPSILON&&(A=!0):Ae<-Number.EPSILON?He<-Number.EPSILON&&(A=!0):Math.sign(ke)===Math.sign(N)&&(A=!0),A?(fe=-ke,me=Ae,Le=Math.sqrt(ve)):(fe=Ae,me=ke,Le=Math.sqrt(ve/2))}return new Te(fe/Le,me/Le)}let se=[];for(let ne=0,re=D.length,oe=re-1,fe=ne+1;ne<re;ne++,oe++,fe++)oe===re&&(oe=0),fe===re&&(fe=0),se[ne]=K(D[ne],D[oe],D[fe]);let de=[],V,j=se.concat();for(let ne=0,re=z;ne<re;ne++){let oe=R[ne];V=[];for(let fe=0,me=oe.length,Le=me-1,Ae=fe+1;fe<me;fe++,Le++,Ae++)Le===me&&(Le=0),Ae===me&&(Ae=0),V[fe]=K(oe[fe],oe[Le],oe[Ae]);de.push(V),j=j.concat(V)}let he;if(m===0)he=Qs.triangulateShape(D,R);else{let ne=[],re=[];for(let oe=0;oe<m;oe++){let fe=oe/m,me=f*Math.cos(fe*Math.PI/2),Le=p*Math.sin(fe*Math.PI/2)+x;for(let Ae=0,ke=D.length;Ae<ke;Ae++){let He=B(D[Ae],se[Ae],Le);ge(He.x,He.y,-me),fe===0&&ne.push(He)}for(let Ae=0,ke=z;Ae<ke;Ae++){let He=R[Ae];V=de[Ae];let N=[];for(let ve=0,ue=He.length;ve<ue;ve++){let A=B(He[ve],V[ve],Le);ge(A.x,A.y,-me),fe===0&&N.push(A)}fe===0&&re.push(N)}}he=Qs.triangulateShape(ne,re)}let Se=he.length,Ee=p+x;for(let ne=0;ne<H;ne++){let re=d?B(C[ne],j[ne],Ee):C[ne];_?(T.copy(S.normals[0]).multiplyScalar(re.x),y.copy(S.binormals[0]).multiplyScalar(re.y),M.copy(v[0]).add(T).add(y),ge(M.x,M.y,M.z)):ge(re.x,re.y,0)}for(let ne=1;ne<=u;ne++)for(let re=0;re<H;re++){let oe=d?B(C[re],j[re],Ee):C[re];_?(T.copy(S.normals[ne]).multiplyScalar(oe.x),y.copy(S.binormals[ne]).multiplyScalar(oe.y),M.copy(v[ne]).add(T).add(y),ge(M.x,M.y,M.z)):ge(oe.x,oe.y,h/u*ne)}for(let ne=m-1;ne>=0;ne--){let re=ne/m,oe=f*Math.cos(re*Math.PI/2),fe=p*Math.sin(re*Math.PI/2)+x;for(let me=0,Le=D.length;me<Le;me++){let Ae=B(D[me],se[me],fe);ge(Ae.x,Ae.y,h+oe)}for(let me=0,Le=R.length;me<Le;me++){let Ae=R[me];V=de[me];for(let ke=0,He=Ae.length;ke<He;ke++){let N=B(Ae[ke],V[ke],fe);_?ge(N.x,N.y+v[u-1].y,v[u-1].x+oe):ge(N.x,N.y,h+oe)}}}$(),Q();function $(){let ne=s.length/3;if(d){let re=0,oe=H*re;for(let fe=0;fe<Se;fe++){let me=he[fe];xe(me[2]+oe,me[1]+oe,me[0]+oe)}re=u+m*2,oe=H*re;for(let fe=0;fe<Se;fe++){let me=he[fe];xe(me[0]+oe,me[1]+oe,me[2]+oe)}}else{for(let re=0;re<Se;re++){let oe=he[re];xe(oe[2],oe[1],oe[0])}for(let re=0;re<Se;re++){let oe=he[re];xe(oe[0]+H*u,oe[1]+H*u,oe[2]+H*u)}}n.addGroup(ne,s.length/3-ne,0)}function Q(){let ne=s.length/3,re=0;J(D,re),re+=D.length;for(let oe=0,fe=R.length;oe<fe;oe++){let me=R[oe];J(me,re),re+=me.length}n.addGroup(ne,s.length/3-ne,1)}function J(ne,re){let oe=ne.length;for(;--oe>=0;){let fe=oe,me=oe-1;me<0&&(me=ne.length-1);for(let Le=0,Ae=u+m*2;Le<Ae;Le++){let ke=H*Le,He=H*(Le+1),N=re+fe+ke,ve=re+me+ke,ue=re+me+He,A=re+fe+He;ye(N,ve,ue,A)}}}function ge(ne,re,oe){c.push(ne),c.push(re),c.push(oe)}function xe(ne,re,oe){ze(ne),ze(re),ze(oe);let fe=s.length/3,me=b.generateTopUV(n,s,fe-3,fe-2,fe-1);ce(me[0]),ce(me[1]),ce(me[2])}function ye(ne,re,oe,fe){ze(ne),ze(re),ze(fe),ze(re),ze(oe),ze(fe);let me=s.length/3,Le=b.generateSideWallUV(n,s,me-6,me-3,me-2,me-1);ce(Le[0]),ce(Le[1]),ce(Le[3]),ce(Le[1]),ce(Le[2]),ce(Le[3])}function ze(ne){s.push(c[ne*3+0]),s.push(c[ne*3+1]),s.push(c[ne*3+2])}function ce(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ly(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Lh[s.type]().fromJSON(s)),new i(n,e.options)}},Py={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new Te(r,o),new Te(a,c),new Te(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Te(o,1-c),new Te(l,1-h),new Te(d,1-p),new Te(x,1-g)]:[new Te(a,1-c),new Te(u,1-h),new Te(f,1-p),new Te(m,1-g)]}};function Ly(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var yt=class i extends pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,f=[],p=[],x=[],m=[];for(let g=0;g<u;g++){let b=g*d-o;for(let v=0;v<l;v++){let _=v*h-r;p.push(_,-b,0),x.push(0,0,1),m.push(v/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let b=0;b<a;b++){let v=b+l*g,_=b+l*(g+1),S=b+1+l*(g+1),y=b+1+l*g;f.push(v,_,y),f.push(_,S,y)}this.setIndex(f),this.setAttribute("position",new Qe(p,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Qn=class i extends pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new U,d=new U,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let b=[],v=g/n,_=o+v*a,S=e*Math.cos(_),y=Math.sqrt(e*e-S*S),T=0;g===0&&o===0?T=.5/t:g===n&&c===Math.PI&&(T=-.5/t);for(let M=0;M<=t;M++){let w=M/t,C=s+w*r;h.x=-y*Math.cos(C),h.y=S,h.z=y*Math.sin(C),p.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(w+T,1-v),b.push(l++)}u.push(b)}for(let g=0;g<n;g++)for(let b=0;b<t;b++){let v=u[g][b+1],_=u[g][b],S=u[g+1][b],y=u[g+1][b+1];(g!==0||o>0)&&f.push(v,_,y),(g!==n-1||c<Math.PI)&&f.push(_,S,y)}this.setIndex(f),this.setAttribute("position",new Qe(p,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function yr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Vp(s))s.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Vp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Pn(i){let e={};for(let t=0;t<i.length;t++){let n=yr(i[t]);for(let s in n)e[s]=n[s]}return e}function Vp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ny(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var Hm={clone:yr,merge:Pn},Dy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bn=class extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dy,this.fragmentShader=Fy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=Ny(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new pe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Te().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new At().fromArray(s.value);break;case"m3":this.uniforms[n].value=new rt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new $e().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},_o=class extends Bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},li=class extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Va,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},kn=class extends li{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ye=class extends In{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Va,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.combine=wl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},fl=class extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pl=class extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Hc(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Uy(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Wp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Oy(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Fi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ml=class extends Fi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ah,endingEnd:Ah}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rh:r=e,a=2*t-n;break;case Ch:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Rh:o=e,c=2*n-t;break;case Ch:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,b=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,v=(-1-f)*m+(1.5+f)*x+.5*p,_=f*m-f*x;for(let S=0;S!==a;++S)r[S]=g*o[u+S]+b*o[l+S]+v*o[c+S]+_*o[h+S];return r}},gl=class extends Fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}},xl=class extends Fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},_l=class extends Fi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(n-t)/(s-t),x=1-p;for(let m=0;m!==a;++m)r[m]=o[l+m]*x+o[c+m]*p;return r}let d=a*2,f=e-1;for(let p=0;p!==a;++p){let x=o[l+p],m=o[c+p],g=f*d+p*2,b=h[g],v=h[g+1],_=e*d+p*2,S=u[_],y=u[_+1],T=(n-t)/(s-t),M,w,C,R,P;for(let F=0;F<8;F++){M=T*T,w=M*T,C=1-T,R=C*C,P=R*C;let D=P*t+3*R*T*b+3*C*M*S+w*s-n;if(Math.abs(D)<1e-10)break;let B=3*R*(b-t)+6*C*T*(S-b)+3*M*(s-S);if(Math.abs(B)<1e-10)break;T=T-D/B,T=Math.max(0,Math.min(1,T))}r[p]=P*x+3*R*T*v+3*C*M*y+w*m}return r}},Gn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hc(t,this.TimeBufferType),this.values=Hc(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Hc(e.times,Array),values:Hc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new _l(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ir:t=this.InterpolantFactoryMethodDiscrete;break;case sr:t=this.InterpolantFactoryMethodLinear;break;case Wc:t=this.InterpolantFactoryMethodSmooth;break;case wh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return We("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ir;case this.InterpolantFactoryMethodLinear:return sr;case this.InterpolantFactoryMethodSmooth:return Wc;case this.InterpolantFactoryMethodBezier:return wh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(et("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(et("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){et("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){et("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&S_(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){et("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Wc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{let h=a*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){let x=t[h+p];if(x!==t[d+p]||x!==t[f+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=sr;var is=class extends Gn{constructor(e,t,n){super(e,t,n)}};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=ir;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Ea=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}};Ea.prototype.ValueTypeName="color";var ss=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}};ss.prototype.ValueTypeName="number";var yl=class extends Fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let u=l+a;l!==u;l+=4)Ut.slerpFlat(r,0,o,l-a,o,l,c);return r}},rs=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new yl(this.times,this.values,this.getValueSize(),e)}};rs.prototype.ValueTypeName="quaternion";rs.prototype.InterpolantFactoryMethodSmooth=void 0;var os=class extends Gn{constructor(e,t,n){super(e,t,n)}};os.prototype.ValueTypeName="string";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=ir;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var Rs=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}};Rs.prototype.ValueTypeName="vector";var Ta=class{constructor(e="",t=-1,n=[],s=Mm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ai(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(zy(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Gn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let u=Uy(c);c=Wp(c,1,u),l=Wp(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ss(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function By(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ss;case"vector":case"vector2":case"vector3":case"vector4":return Rs;case"color":return Ea;case"quaternion":return rs;case"bool":case"boolean":return is;case"string":return os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function zy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=By(i.type);if(i.times===void 0){let t=[],n=[];Oy(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Pi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Xp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Xp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Xp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var vl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],p=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},km=new vl,bi=class{constructor(e){this.manager=e!==void 0?e:km,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};bi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ji={},Uh=class extends Error{constructor(e,t){super(e),this.response=t}},fr=class extends bi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Pi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ji[e]!==void 0){Ji[e].push({onLoad:t,onProgress:n,onError:s});return}Ji[e]=[],Ji[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&We("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Ji[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,x=0,m=new ReadableStream({start(g){b();function b(){h.read().then(({done:v,value:_})=>{if(v)g.close();else{x+=_.byteLength;let S=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let y=0,T=u.length;y<T;y++){let M=u[y];M.onProgress&&M.onProgress(S)}g.enqueue(_),b()}},v=>{g.error(v)})}}});return new Response(m)}else throw new Uh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{Pi.add(`file:${e}`,l);let u=Ji[e];delete Ji[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{let u=Ji[e];if(u===void 0)throw this.manager.itemError(e),l;delete Ji[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var eo=new WeakMap,Ml=class extends bi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Pi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=eo.get(o);h===void 0&&(h=[],eo.set(o,h)),h.push({onLoad:t,onError:s})}return o}let a=oo("img");function c(){u(),t&&t(this);let h=eo.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}eo.delete(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),Pi.remove(`image:${e}`);let d=eo.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(h)}eo.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Pi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Si=class extends bi{constructor(e){super(e)}load(e,t,n,s){let r=new an,o=new Ml(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Cs=class extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},pr=class extends Cs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},bh=new $e,Yp=new U,qp=new U,wa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fo,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Yp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yp),qp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qp),t.updateMatrixWorld(),bh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bh,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ro||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},kc=new U,Gc=new Ut,Ci=new U,mr=class extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(kc,Gc,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,Gc,Ci.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(kc,Gc,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,Gc,Ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ms=new U,Zp=new Te,Kp=new Te,on=class extends mr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rr*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z),Ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z)}getViewSize(e,t){return this.getViewBounds(e,Zp,Kp),t.subVectors(Kp,Zp)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ea*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Oh=class extends wa{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=rr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Aa=class extends Cs{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Oh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Bh=class extends wa{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0}},Vn=class extends Cs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Bh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Is=class extends mr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zh=class extends wa{constructor(){super(new Is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},as=class extends Cs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new zh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ra=class extends Cs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var cs=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Sh=new WeakMap,Ca=class extends bi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&We("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&We("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Pi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{Sh.has(o)===!0?(s&&s(Sh.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Pi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),Sh.set(c,l),Pi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Pi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Vc,gr=class{static getContext(){return Vc===void 0&&(Vc=new(window.AudioContext||window.webkitAudioContext)),Vc}static setContext(e){Vc=e}},Ia=class extends bi{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new fr(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{let l=c.slice(0),u=gr.getContext(),h=e+"#decode";r.manager.itemStart(h),u.decodeAudioData(l,function(d){t(d),r.manager.itemEnd(h)}).catch(function(d){a(d),r.manager.itemEnd(h)})}catch(l){a(l)}},n,s);function a(c){s?s(c):et(c),r.manager.itemError(e)}}};var to=-90,no=1,bl=class extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(to,no,e,t);s.layers=this.layers,this.add(s);let r=new on(to,no,e,t);r.layers=this.layers,this.add(r);let o=new on(to,no,e,t);o.layers=this.layers,this.add(o);let a=new on(to,no,e,t);a.layers=this.layers,this.add(a);let c=new on(to,no,e,t);c.layers=this.layers,this.add(c);let l=new on(to,no,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Mi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Sl=class extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},El=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Hy.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Hy(){this._document.hidden===!1&&this.reset()}var qs=new U,Eh=new Ut,ky=new U,Zs=new U,Ks=new U,Pa=class extends Ot{constructor(){super(),this.type="AudioListener",this.context=gr.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new El}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();let t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(qs,Eh,ky),Zs.set(0,0,-1).applyQuaternion(Eh),Ks.set(0,1,0).applyQuaternion(Eh),t.positionX){let n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(qs.x,n),t.positionY.linearRampToValueAtTime(qs.y,n),t.positionZ.linearRampToValueAtTime(qs.z,n),t.forwardX.linearRampToValueAtTime(Zs.x,n),t.forwardY.linearRampToValueAtTime(Zs.y,n),t.forwardZ.linearRampToValueAtTime(Zs.z,n),t.upX.linearRampToValueAtTime(Ks.x,n),t.upY.linearRampToValueAtTime(Ks.y,n),t.upZ.linearRampToValueAtTime(Ks.z,n)}else t.setPosition(qs.x,qs.y,qs.z),t.setOrientation(Zs.x,Zs.y,Zs.z,Ks.x,Ks.y,Ks.z)}},Tl=class extends Ot{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){We("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){We("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){We("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){We("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){We("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(We("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){We("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(We("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}},$s=new U,$p=new Ut,Gy=new U,Js=new U,La=class extends Tl{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose($s,$p,Gy),Js.set(0,0,1).applyQuaternion($p);let t=this.panner;if(t.positionX){let n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime($s.x,n),t.positionY.linearRampToValueAtTime($s.y,n),t.positionZ.linearRampToValueAtTime($s.z,n),t.orientationX.linearRampToValueAtTime(Js.x,n),t.orientationY.linearRampToValueAtTime(Js.y,n),t.orientationZ.linearRampToValueAtTime(Js.z,n)}else t.setPosition($s.x,$s.y,$s.z),t.setOrientation(Js.x,Js.y,Js.z)}};var ld="\\[\\]\\.:\\/",Vy=new RegExp("["+ld+"]","g"),ud="[^"+ld+"]",Wy="[^"+ld.replace("\\.","")+"]",Xy=/((?:WC+[\/:])*)/.source.replace("WC",ud),Yy=/(WCOD+)?/.source.replace("WCOD",Wy),qy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ud),Zy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ud),Ky=new RegExp("^"+Xy+Yy+qy+Zy+"$"),$y=["material","materials","bones","map"],Hh=class{constructor(e,t,n){let s=n||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ft=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Vy,"")}static parseTrackName(e){let t=Ky.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);$y.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;et("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ft.Composite=Hh;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var P2=new Float32Array(1);var kh=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function hd(i,e,t,n){let s=Jy(n);switch(t){case nd:return i*e;case Nl:return i*e/s.components*s.byteLength;case Dl:return i*e/s.components*s.byteLength;case Ns:return i*e*2/s.components*s.byteLength;case Fl:return i*e*2/s.components*s.byteLength;case id:return i*e*3/s.components*s.byteLength;case ti:return i*e*4/s.components*s.byteLength;case Ul:return i*e*4/s.components*s.byteLength;case Ua:case Oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ba:case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bl:case Hl:return Math.max(i,16)*Math.max(e,8)/4;case Ol:case zl:return Math.max(i,8)*Math.max(e,8)/2;case kl:case Gl:case Wl:case Xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vl:case Ha:case Yl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case $l:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case eu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case tu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case nu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case iu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case su:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ru:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ou:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case au:case cu:case lu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case uu:case hu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ka:case du:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jy(i){switch(i){case Wn:case jh:return{byteLength:1,components:1};case Mo:case Qh:case Oi:return{byteLength:2,components:1};case Pl:case Ll:return{byteLength:2,components:4};case wi:case Il:case ei:return{byteLength:4,components:1};case ed:case td:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function u0(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Qy(i){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],x=h[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let x=h[f];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var ev=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tv=`#ifdef USE_ALPHAHASH
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
#endif`,nv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ov=`#ifdef USE_AOMAP
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
#endif`,av=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cv=`#ifdef USE_BATCHING
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
#endif`,lv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fv=`#ifdef USE_IRIDESCENCE
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
#endif`,pv=`#ifdef USE_BUMPMAP
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
#endif`,mv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Sv=`#define PI 3.141592653589793
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
} // validated`,Ev=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tv=`vec3 transformedNormal = objectNormal;
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
#endif`,wv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Av=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Iv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lv=`#ifdef USE_ENVMAP
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
#endif`,Nv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dv=`#ifdef USE_ENVMAP
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
#endif`,Fv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uv=`#ifdef USE_ENVMAP
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
#endif`,Ov=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kv=`#ifdef USE_GRADIENTMAP
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
}`,Gv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Yv=`#ifdef USE_ENVMAP
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
#endif`,qv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$v=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jv=`PhysicalMaterial material;
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
#endif`,jv=`uniform sampler2D dfgLUT;
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
}`,Qv=`
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
#endif`,eM=`#if defined( RE_IndirectDiffuse )
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
#endif`,tM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nM=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,iM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uM=`#if defined( USE_POINTS_UV )
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
#endif`,hM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gM=`#ifdef USE_MORPHTARGETS
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
#endif`,xM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_M=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,SM=`#ifdef USE_NORMALMAP
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
#endif`,EM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,IM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zM=`float getShadowMask() {
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
}`,HM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kM=`#ifdef USE_SKINNING
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
#endif`,GM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VM=`#ifdef USE_SKINNING
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
#endif`,WM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZM=`#ifdef USE_TRANSMISSION
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
#endif`,KM=`#ifdef USE_TRANSMISSION
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
#endif`,$M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,e1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t1=`uniform sampler2D t2D;
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
}`,n1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`#include <common>
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
}`,a1=`#if DEPTH_PACKING == 3200
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
}`,c1=`#define DISTANCE
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
}`,l1=`#define DISTANCE
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
}`,u1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d1=`uniform float scale;
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
}`,f1=`uniform vec3 diffuse;
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
}`,p1=`#include <common>
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
}`,m1=`uniform vec3 diffuse;
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
}`,g1=`#define LAMBERT
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
}`,x1=`#define LAMBERT
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
}`,_1=`#define MATCAP
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
}`,y1=`#define MATCAP
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
}`,v1=`#define NORMAL
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
}`,M1=`#define NORMAL
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
}`,b1=`#define PHONG
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
}`,S1=`#define PHONG
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
}`,E1=`#define STANDARD
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
}`,T1=`#define STANDARD
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
}`,w1=`#define TOON
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
}`,A1=`#define TOON
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
}`,R1=`uniform float size;
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
}`,C1=`uniform vec3 diffuse;
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
}`,I1=`#include <common>
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
}`,P1=`uniform vec3 color;
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
}`,L1=`uniform float rotation;
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
}`,N1=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:ev,alphahash_pars_fragment:tv,alphamap_fragment:nv,alphamap_pars_fragment:iv,alphatest_fragment:sv,alphatest_pars_fragment:rv,aomap_fragment:ov,aomap_pars_fragment:av,batching_pars_vertex:cv,batching_vertex:lv,begin_vertex:uv,beginnormal_vertex:hv,bsdfs:dv,iridescence_fragment:fv,bumpmap_pars_fragment:pv,clipping_planes_fragment:mv,clipping_planes_pars_fragment:gv,clipping_planes_pars_vertex:xv,clipping_planes_vertex:_v,color_fragment:yv,color_pars_fragment:vv,color_pars_vertex:Mv,color_vertex:bv,common:Sv,cube_uv_reflection_fragment:Ev,defaultnormal_vertex:Tv,displacementmap_pars_vertex:wv,displacementmap_vertex:Av,emissivemap_fragment:Rv,emissivemap_pars_fragment:Cv,colorspace_fragment:Iv,colorspace_pars_fragment:Pv,envmap_fragment:Lv,envmap_common_pars_fragment:Nv,envmap_pars_fragment:Dv,envmap_pars_vertex:Fv,envmap_physical_pars_fragment:Yv,envmap_vertex:Uv,fog_vertex:Ov,fog_pars_vertex:Bv,fog_fragment:zv,fog_pars_fragment:Hv,gradientmap_pars_fragment:kv,lightmap_pars_fragment:Gv,lights_lambert_fragment:Vv,lights_lambert_pars_fragment:Wv,lights_pars_begin:Xv,lights_toon_fragment:qv,lights_toon_pars_fragment:Zv,lights_phong_fragment:Kv,lights_phong_pars_fragment:$v,lights_physical_fragment:Jv,lights_physical_pars_fragment:jv,lights_fragment_begin:Qv,lights_fragment_maps:eM,lights_fragment_end:tM,lightprobes_pars_fragment:nM,logdepthbuf_fragment:iM,logdepthbuf_pars_fragment:sM,logdepthbuf_pars_vertex:rM,logdepthbuf_vertex:oM,map_fragment:aM,map_pars_fragment:cM,map_particle_fragment:lM,map_particle_pars_fragment:uM,metalnessmap_fragment:hM,metalnessmap_pars_fragment:dM,morphinstance_vertex:fM,morphcolor_vertex:pM,morphnormal_vertex:mM,morphtarget_pars_vertex:gM,morphtarget_vertex:xM,normal_fragment_begin:_M,normal_fragment_maps:yM,normal_pars_fragment:vM,normal_pars_vertex:MM,normal_vertex:bM,normalmap_pars_fragment:SM,clearcoat_normal_fragment_begin:EM,clearcoat_normal_fragment_maps:TM,clearcoat_pars_fragment:wM,iridescence_pars_fragment:AM,opaque_fragment:RM,packing:CM,premultiplied_alpha_fragment:IM,project_vertex:PM,dithering_fragment:LM,dithering_pars_fragment:NM,roughnessmap_fragment:DM,roughnessmap_pars_fragment:FM,shadowmap_pars_fragment:UM,shadowmap_pars_vertex:OM,shadowmap_vertex:BM,shadowmask_pars_fragment:zM,skinbase_vertex:HM,skinning_pars_vertex:kM,skinning_vertex:GM,skinnormal_vertex:VM,specularmap_fragment:WM,specularmap_pars_fragment:XM,tonemapping_fragment:YM,tonemapping_pars_fragment:qM,transmission_fragment:ZM,transmission_pars_fragment:KM,uv_pars_fragment:$M,uv_pars_vertex:JM,uv_vertex:jM,worldpos_vertex:QM,background_vert:e1,background_frag:t1,backgroundCube_vert:n1,backgroundCube_frag:i1,cube_vert:s1,cube_frag:r1,depth_vert:o1,depth_frag:a1,distance_vert:c1,distance_frag:l1,equirect_vert:u1,equirect_frag:h1,linedashed_vert:d1,linedashed_frag:f1,meshbasic_vert:p1,meshbasic_frag:m1,meshlambert_vert:g1,meshlambert_frag:x1,meshmatcap_vert:_1,meshmatcap_frag:y1,meshnormal_vert:v1,meshnormal_frag:M1,meshphong_vert:b1,meshphong_frag:S1,meshphysical_vert:E1,meshphysical_frag:T1,meshtoon_vert:w1,meshtoon_frag:A1,points_vert:R1,points_frag:C1,shadow_vert:I1,shadow_frag:P1,sprite_vert:L1,sprite_frag:N1},Ue={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},zi={basic:{uniforms:Pn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Pn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new pe(0)},envMapIntensity:{value:1}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Pn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Pn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Pn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new pe(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Pn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Pn([Ue.points,Ue.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Pn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Pn([Ue.common,Ue.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Pn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Pn([Ue.sprite,Ue.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distance:{uniforms:Pn([Ue.common,Ue.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distance_vert,fragmentShader:lt.distance_frag},shadow:{uniforms:Pn([Ue.lights,Ue.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};zi.physical={uniforms:Pn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var mu={r:0,b:0,g:0},D1=new $e,h0=new rt;h0.set(-1,0,0,0,1,0,0,0,1);function F1(i,e,t,n,s,r){let o=new pe(0),a=s===!0?0:1,c,l,u=null,h=0,d=null;function f(b){let v=b.isScene===!0?b.background:null;if(v&&v.isTexture){let _=b.backgroundBlurriness>0;v=e.get(v,_)}return v}function p(b){let v=!1,_=f(b);_===null?m(o,a):_&&_.isColor&&(m(_,1),v=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(b,v){let _=f(v);_&&(_.isCubeTexture||_.mapping===Fa)?(l===void 0&&(l=new Pe(new Ze(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:yr(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,y,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(D1.makeRotationFromEuler(v.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(h0),l.material.toneMapped=ht.getTransfer(_.colorSpace)!==St,(u!==_||h!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,h=_.version,d=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Pe(new yt(2,2),new Bn({name:"BackgroundMaterial",uniforms:yr(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ht.getTransfer(_.colorSpace)!==St,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||h!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,h=_.version,d=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,v){b.getRGB(mu,cd(i)),t.buffers.color.setClear(mu.r,mu.g,mu.b,v,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,v=1){o.set(b),a=v,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(o,a)},render:p,addToRenderList:x,dispose:g}}function U1(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(R,P,F,z,D){let B=!1,H=h(R,z,F,P);r!==H&&(r=H,l(r.object)),B=f(R,z,F,D),B&&p(R,z,F,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,_(R,P,F,z),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return i.createVertexArray()}function l(R){return i.bindVertexArray(R)}function u(R){return i.deleteVertexArray(R)}function h(R,P,F,z){let D=z.wireframe===!0,B=n[P.id];B===void 0&&(B={},n[P.id]=B);let H=R.isInstancedMesh===!0?R.id:0,K=B[H];K===void 0&&(K={},B[H]=K);let se=K[F.id];se===void 0&&(se={},K[F.id]=se);let de=se[D];return de===void 0&&(de=d(c()),se[D]=de),de}function d(R){let P=[],F=[],z=[];for(let D=0;D<t;D++)P[D]=0,F[D]=0,z[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:z,object:R,attributes:{},index:null}}function f(R,P,F,z){let D=r.attributes,B=P.attributes,H=0,K=F.getAttributes();for(let se in K)if(K[se].location>=0){let V=D[se],j=B[se];if(j===void 0&&(se==="instanceMatrix"&&R.instanceMatrix&&(j=R.instanceMatrix),se==="instanceColor"&&R.instanceColor&&(j=R.instanceColor)),V===void 0||V.attribute!==j||j&&V.data!==j.data)return!0;H++}return r.attributesNum!==H||r.index!==z}function p(R,P,F,z){let D={},B=P.attributes,H=0,K=F.getAttributes();for(let se in K)if(K[se].location>=0){let V=B[se];V===void 0&&(se==="instanceMatrix"&&R.instanceMatrix&&(V=R.instanceMatrix),se==="instanceColor"&&R.instanceColor&&(V=R.instanceColor));let j={};j.attribute=V,V&&V.data&&(j.data=V.data),D[se]=j,H++}r.attributes=D,r.attributesNum=H,r.index=z}function x(){let R=r.newAttributes;for(let P=0,F=R.length;P<F;P++)R[P]=0}function m(R){g(R,0)}function g(R,P){let F=r.newAttributes,z=r.enabledAttributes,D=r.attributeDivisors;F[R]=1,z[R]===0&&(i.enableVertexAttribArray(R),z[R]=1),D[R]!==P&&(i.vertexAttribDivisor(R,P),D[R]=P)}function b(){let R=r.newAttributes,P=r.enabledAttributes;for(let F=0,z=P.length;F<z;F++)P[F]!==R[F]&&(i.disableVertexAttribArray(F),P[F]=0)}function v(R,P,F,z,D,B,H){H===!0?i.vertexAttribIPointer(R,P,F,D,B):i.vertexAttribPointer(R,P,F,z,D,B)}function _(R,P,F,z){x();let D=z.attributes,B=F.getAttributes(),H=P.defaultAttributeValues;for(let K in B){let se=B[K];if(se.location>=0){let de=D[K];if(de===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(de=R.instanceColor)),de!==void 0){let V=de.normalized,j=de.itemSize,he=e.get(de);if(he===void 0)continue;let Se=he.buffer,Ee=he.type,$=he.bytesPerElement,Q=Ee===i.INT||Ee===i.UNSIGNED_INT||de.gpuType===Il;if(de.isInterleavedBufferAttribute){let J=de.data,ge=J.stride,xe=de.offset;if(J.isInstancedInterleavedBuffer){for(let ye=0;ye<se.locationSize;ye++)g(se.location+ye,J.meshPerAttribute);R.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ye=0;ye<se.locationSize;ye++)m(se.location+ye);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let ye=0;ye<se.locationSize;ye++)v(se.location+ye,j/se.locationSize,Ee,V,ge*$,(xe+j/se.locationSize*ye)*$,Q)}else{if(de.isInstancedBufferAttribute){for(let J=0;J<se.locationSize;J++)g(se.location+J,de.meshPerAttribute);R.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let J=0;J<se.locationSize;J++)m(se.location+J);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let J=0;J<se.locationSize;J++)v(se.location+J,j/se.locationSize,Ee,V,j*$,j/se.locationSize*J*$,Q)}}else if(H!==void 0){let V=H[K];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(se.location,V);break;case 3:i.vertexAttrib3fv(se.location,V);break;case 4:i.vertexAttrib4fv(se.location,V);break;default:i.vertexAttrib1fv(se.location,V)}}}}b()}function S(){w();for(let R in n){let P=n[R];for(let F in P){let z=P[F];for(let D in z){let B=z[D];for(let H in B)u(B[H].object),delete B[H];delete z[D]}}delete n[R]}}function y(R){if(n[R.id]===void 0)return;let P=n[R.id];for(let F in P){let z=P[F];for(let D in z){let B=z[D];for(let H in B)u(B[H].object),delete B[H];delete z[D]}}delete n[R.id]}function T(R){for(let P in n){let F=n[P];for(let z in F){let D=F[z];if(D[R.id]===void 0)continue;let B=D[R.id];for(let H in B)u(B[H].object),delete B[H];delete D[R.id]}}}function M(R){for(let P in n){let F=n[P],z=R.isInstancedMesh===!0?R.id:0,D=F[z];if(D!==void 0){for(let B in D){let H=D[B];for(let K in H)u(H[K].object),delete H[K];delete D[B]}delete F[z],Object.keys(F).length===0&&delete n[P]}}}function w(){C(),o=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:y,releaseStatesOfObject:M,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function O1(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let d=0;for(let f=0;f<u;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function B1(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==ti&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let M=T===Oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Wn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ei&&!M)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(We("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:b,maxVaryings:v,maxFragmentUniforms:_,maxSamples:S,samples:y}}function z1(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Ii,a=new rt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,g=i.get(h);if(!s||p===null||p.length===0||r&&!m)r?u(null):l();else{let b=r?0:n,v=b*4,_=g.clippingState||null;c.value=_,_=u(p,d,v,f);for(let S=0;S!==v;++S)_[S]=t[S];g.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=c.value,p!==!0||m===null){let g=f+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<g)&&(m=new Float32Array(g));for(let v=0,_=f;v!==x;++v,_+=4)o.copy(h[v]).applyMatrix4(b,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Ds=4,Gm=[.125,.215,.35,.446,.526,.582],vr=20,H1=256,Wa=new Is,Vm=new pe,dd=null,fd=0,pd=0,md=!1,k1=new U,xu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=k1}=r;dd=this._renderer.getRenderTarget(),fd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ym(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(dd,fd,pd),this._renderer.xr.enabled=md,e.scissorTest=!1,Eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ps||e.mapping===xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dd=this._renderer.getRenderTarget(),fd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Oi,format:ti,colorSpace:On,depthBuffer:!1},s=Wm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wm(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=G1(r)),this._blurMaterial=W1(r,e,t),this._ggxMaterial=V1(r,e,t)}return s}_compileMaterial(e){let t=new Pe(new pt,e);this._renderer.compile(t,Wa)}_sceneToCubeUV(e,t,n,s,r){let c=new on(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Vm),h.toneMapping=Ei,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pe(new Ze,new un({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,g=!0):(m.color.copy(Vm),g=!0);for(let v=0;v<6;v++){let _=v%3;_===0?(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[v],r.y,r.z)):_===1?(c.up.set(0,0,l[v]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[v],r.z)):(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[v]));let S=this._cubeSize;Eo(s,_*S,v>2?S:0,S,S),h.setRenderTarget(s),g&&h.render(x,c),h.render(e,c)}h.toneMapping=f,h.autoClear=d,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ps||e.mapping===xr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ym()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Eo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Wa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=0+l*1.25,f=h*d,{_lodMax:p}=this,x=this._sizeLods[n],m=3*x*(n>p-Ds?n-p+Ds:0),g=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=p-t,Eo(r,m,g,3*x,2*x),s.setRenderTarget(r),s.render(a,Wa),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,Eo(e,m,g,3*x,2*x),s.setRenderTarget(e),s.render(a,Wa)}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");let u=3,h=this._lodMeshes[s];h.material=l;let d=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*vr-1),x=r/p,m=isFinite(r)?1+Math.floor(u*x):vr;m>vr&&We(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vr}`);let g=[],b=0;for(let T=0;T<vr;++T){let M=T/x,w=Math.exp(-M*M/2);g.push(w),T===0?b+=w:T<m&&(b+=2*w)}for(let T=0;T<g.length;T++)g[T]=g[T]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-n;let _=this._sizeLods[s],S=3*_*(s>v-Ds?s-v+Ds:0),y=4*(this._cubeSize-_);Eo(t,S,y,3*_,2*_),c.setRenderTarget(t),c.render(h,Wa)}};function G1(i){let e=[],t=[],n=[],s=i,r=i-Ds+1+Gm.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ds?c=Gm[o-i+Ds-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,x=3,m=2,g=1,b=new Float32Array(x*p*f),v=new Float32Array(m*p*f),_=new Float32Array(g*p*f);for(let y=0;y<f;y++){let T=y%3*2/3-1,M=y>2?0:-1,w=[T,M,0,T+2/3,M,0,T+2/3,M+1,0,T,M,0,T+2/3,M+1,0,T,M+1,0];b.set(w,x*p*y),v.set(d,m*p*y);let C=[y,y,y,y,y,y];_.set(C,g*p*y)}let S=new pt;S.setAttribute("position",new wt(b,x)),S.setAttribute("uv",new wt(v,m)),S.setAttribute("faceIndex",new wt(_,g)),n.push(new Pe(S,null)),s>Ds&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Wm(i,e,t){let n=new Jn(i,e,t);return n.texture.mapping=Fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Eo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function V1(i,e,t){return new Bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:H1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vu(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function W1(i,e,t){let n=new Float32Array(vr),s=new U(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vu(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Xm(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vu(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Ym(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function vu(){return`

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
	`}var _u=class extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new fa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ze(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:Ui});r.uniforms.tEquirect.value=t;let o=new Pe(s,r),a=t.minFilter;return t.minFilter===Ti&&(t.minFilter=Zt),new bl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function X1(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Al||f===Rl)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new _u(p.height);return x.fromEquirectangularTexture(i,d),e.set(d,x),d.addEventListener("dispose",l),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,p=f===Al||f===Rl,x=f===Ps||f===xr;if(p||x){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new xu(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let b=d.image;return p&&b&&b.height>0||x&&b&&c(b)?(n===null&&(n=new xu(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,f){return f===Al?d.mapping=Ps:f===Rl&&(d.mapping=xr),d}function c(d){let f=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function l(d){let f=d.target;f.removeEventListener("dispose",l);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Y1(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&er("WebGLRenderer: "+n+" extension not supported."),s}}}function q1(i,e,t,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(h){let d=[],f=h.index,p=h.attributes.position,x=0;if(p===void 0)return;if(f!==null){let b=f.array;x=f.version;for(let v=0,_=b.length;v<_;v+=3){let S=b[v+0],y=b[v+1],T=b[v+2];d.push(S,y,y,T,T,S)}}else{let b=p.array;x=p.version;for(let v=0,_=b.length/3-1;v<_;v+=3){let S=v+0,y=v+1,T=v+2;d.push(S,y,y,T,T,S)}}let m=new(p.count>=65535?la:ca)(d,1);m.version=x;let g=r.get(h);g&&e.remove(g),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Z1(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,d){i.drawElements(n,d,r,h*o),t.update(d,n,1)}function l(h,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,h*o,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function K1(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:et("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function $1(i,e,t){let n=new WeakMap,s=new At;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let w=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],v=0;f===!0&&(v=1),p===!0&&(v=2),x===!0&&(v=3);let _=a.attributes.position.count*v,S=1;_>e.maxTextureSize&&(S=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let y=new Float32Array(_*S*4*h),T=new oa(y,_,S,h);T.type=ei,T.needsUpdate=!0;let M=v*4;for(let C=0;C<h;C++){let R=m[C],P=g[C],F=b[C],z=_*S*4*C;for(let D=0;D<R.count;D++){let B=D*M;f===!0&&(s.fromBufferAttribute(R,D),y[z+B+0]=s.x,y[z+B+1]=s.y,y[z+B+2]=s.z,y[z+B+3]=0),p===!0&&(s.fromBufferAttribute(P,D),y[z+B+4]=s.x,y[z+B+5]=s.y,y[z+B+6]=s.z,y[z+B+7]=0),x===!0&&(s.fromBufferAttribute(F,D),y[z+B+8]=s.x,y[z+B+9]=s.y,y[z+B+10]=s.z,y[z+B+11]=F.itemSize===4?s.w:1)}}d={count:h,texture:T,size:new Te(_,S)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let p=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function J1(i,e,t,n,s){let r=new WeakMap;function o(l){let u=s.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var j1={[Xh]:"LINEAR_TONE_MAPPING",[Yh]:"REINHARD_TONE_MAPPING",[qh]:"CINEON_TONE_MAPPING",[Da]:"ACES_FILMIC_TONE_MAPPING",[Kh]:"AGX_TONE_MAPPING",[$h]:"NEUTRAL_TONE_MAPPING",[Zh]:"CUSTOM_TONE_MAPPING"};function Q1(i,e,t,n,s,r){let o=new Jn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new ns(e,t):void 0}),a=new Jn(e,t,{type:Oi,depthBuffer:!1,stencilBuffer:!1}),c=new pt;c.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Qe([0,2,0,0,2,0],2));let l=new _o({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Pe(c,l),h=new Is(-1,1,1,-1,0,1),d=null,f=null,p=!1,x,m=null,g=[],b=!1;this.setSize=function(v,_){o.setSize(v,_),a.setSize(v,_);for(let S=0;S<g.length;S++){let y=g[S];y.setSize&&y.setSize(v,_)}},this.setEffects=function(v){g=v,b=g.length>0&&g[0].isRenderPass===!0;let _=o.width,S=o.height;for(let y=0;y<g.length;y++){let T=g[y];T.setSize&&T.setSize(_,S)}},this.begin=function(v,_){if(p||v.toneMapping===Ei&&g.length===0)return!1;if(m=_,_!==null){let S=_.width,y=_.height;(o.width!==S||o.height!==y)&&this.setSize(S,y)}return b===!1&&v.setRenderTarget(o),x=v.toneMapping,v.toneMapping=Ei,!0},this.hasRenderPass=function(){return b},this.end=function(v,_){v.toneMapping=x,p=!0;let S=o,y=a;for(let T=0;T<g.length;T++){let M=g[T];if(M.enabled!==!1&&(M.render(v,y,S,_),M.needsSwap!==!1)){let w=S;S=y,y=w}}if(d!==v.outputColorSpace||f!==v.toneMapping){d=v.outputColorSpace,f=v.toneMapping,l.defines={},ht.getTransfer(d)===St&&(l.defines.SRGB_TRANSFER="");let T=j1[f];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(m),v.render(u,h),m=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}var d0=new an,_d=new ns(1,1),f0=new oa,p0=new il,m0=new fa,qm=[],Zm=[],Km=new Float32Array(16),$m=new Float32Array(9),Jm=new Float32Array(4);function wo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=qm[s];if(r===void 0&&(r=new Float32Array(s),qm[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function hn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Mu(i,e){let t=Zm[e];t===void 0&&(t=new Int32Array(e),Zm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function eb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function tb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2fv(this.addr,e),dn(t,e)}}function nb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;i.uniform3fv(this.addr,e),dn(t,e)}}function ib(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4fv(this.addr,e),dn(t,e)}}function sb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,n))return;Jm.set(n),i.uniformMatrix2fv(this.addr,!1,Jm),dn(t,n)}}function rb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,n))return;$m.set(n),i.uniformMatrix3fv(this.addr,!1,$m),dn(t,n)}}function ob(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,n))return;Km.set(n),i.uniformMatrix4fv(this.addr,!1,Km),dn(t,n)}}function ab(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function cb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2iv(this.addr,e),dn(t,e)}}function lb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3iv(this.addr,e),dn(t,e)}}function ub(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4iv(this.addr,e),dn(t,e)}}function hb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function db(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2uiv(this.addr,e),dn(t,e)}}function fb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3uiv(this.addr,e),dn(t,e)}}function pb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4uiv(this.addr,e),dn(t,e)}}function mb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_d.compareFunction=t.isReversedDepthBuffer()?pu:fu,r=_d):r=d0,t.setTexture2D(e||r,s)}function gb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||p0,s)}function xb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||m0,s)}function _b(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||f0,s)}function yb(i){switch(i){case 5126:return eb;case 35664:return tb;case 35665:return nb;case 35666:return ib;case 35674:return sb;case 35675:return rb;case 35676:return ob;case 5124:case 35670:return ab;case 35667:case 35671:return cb;case 35668:case 35672:return lb;case 35669:case 35673:return ub;case 5125:return hb;case 36294:return db;case 36295:return fb;case 36296:return pb;case 35678:case 36198:case 36298:case 36306:case 35682:return mb;case 35679:case 36299:case 36307:return gb;case 35680:case 36300:case 36308:case 36293:return xb;case 36289:case 36303:case 36311:case 36292:return _b}}function vb(i,e){i.uniform1fv(this.addr,e)}function Mb(i,e){let t=wo(e,this.size,2);i.uniform2fv(this.addr,t)}function bb(i,e){let t=wo(e,this.size,3);i.uniform3fv(this.addr,t)}function Sb(i,e){let t=wo(e,this.size,4);i.uniform4fv(this.addr,t)}function Eb(i,e){let t=wo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Tb(i,e){let t=wo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function wb(i,e){let t=wo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ab(i,e){i.uniform1iv(this.addr,e)}function Rb(i,e){i.uniform2iv(this.addr,e)}function Cb(i,e){i.uniform3iv(this.addr,e)}function Ib(i,e){i.uniform4iv(this.addr,e)}function Pb(i,e){i.uniform1uiv(this.addr,e)}function Lb(i,e){i.uniform2uiv(this.addr,e)}function Nb(i,e){i.uniform3uiv(this.addr,e)}function Db(i,e){i.uniform4uiv(this.addr,e)}function Fb(i,e,t){let n=this.cache,s=e.length,r=Mu(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),dn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=_d:o=d0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Ub(i,e,t){let n=this.cache,s=e.length,r=Mu(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),dn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||p0,r[o])}function Ob(i,e,t){let n=this.cache,s=e.length,r=Mu(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),dn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||m0,r[o])}function Bb(i,e,t){let n=this.cache,s=e.length,r=Mu(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),dn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||f0,r[o])}function zb(i){switch(i){case 5126:return vb;case 35664:return Mb;case 35665:return bb;case 35666:return Sb;case 35674:return Eb;case 35675:return Tb;case 35676:return wb;case 5124:case 35670:return Ab;case 35667:case 35671:return Rb;case 35668:case 35672:return Cb;case 35669:case 35673:return Ib;case 5125:return Pb;case 36294:return Lb;case 36295:return Nb;case 36296:return Db;case 35678:case 36198:case 36298:case 36306:case 35682:return Fb;case 35679:case 36299:case 36307:return Ub;case 35680:case 36300:case 36308:case 36293:return Ob;case 36289:case 36303:case 36311:case 36292:return Bb}}var yd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yb(t.type)}},vd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zb(t.type)}},Md=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},gd=/(\w+)(\])?(\[|\.)?/g;function jm(i,e){i.seq.push(e),i.map[e.id]=e}function Hb(i,e,t){let n=i.name,s=n.length;for(gd.lastIndex=0;;){let r=gd.exec(n),o=gd.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){jm(t,l===void 0?new yd(a,i,e):new vd(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Md(a),jm(t,h)),t=h}}}var To=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Hb(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Qm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var kb=37297,Gb=0;function Vb(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var e0=new rt;function Wb(i){ht._getMatrix(e0,ht.workingColorSpace,i);let e=`mat3( ${e0.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case sa:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function t0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Vb(i.getShaderSource(e),a)}else return r}function Xb(i,e){let t=Wb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Yb={[Xh]:"Linear",[Yh]:"Reinhard",[qh]:"Cineon",[Da]:"ACESFilmic",[Kh]:"AgX",[$h]:"Neutral",[Zh]:"Custom"};function qb(i,e){let t=Yb[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var gu=new U;function Zb(){ht.getLuminanceCoefficients(gu);let i=gu.x.toFixed(4),e=gu.y.toFixed(4),t=gu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ya).join(`
`)}function $b(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jb(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ya(i){return i!==""}function n0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function i0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var jb=/^[ \t]*#include +<([\w\d./]+)>/gm;function bd(i){return i.replace(jb,eS)}var Qb=new Map;function eS(i,e){let t=lt[e];if(t===void 0){let n=Qb.get(e);if(n!==void 0)t=lt[n],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return bd(t)}var tS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function s0(i){return i.replace(tS,nS)}function nS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function r0(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var iS={[Na]:"SHADOWMAP_TYPE_PCF",[yo]:"SHADOWMAP_TYPE_VSM"};function sS(i){return iS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var rS={[Ps]:"ENVMAP_TYPE_CUBE",[xr]:"ENVMAP_TYPE_CUBE",[Fa]:"ENVMAP_TYPE_CUBE_UV"};function oS(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":rS[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var aS={[xr]:"ENVMAP_MODE_REFRACTION"};function cS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":aS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var lS={[wl]:"ENVMAP_BLENDING_MULTIPLY",[_m]:"ENVMAP_BLENDING_MIX",[ym]:"ENVMAP_BLENDING_ADD"};function uS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":lS[i.combine]||"ENVMAP_BLENDING_NONE"}function hS(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function dS(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=sS(t),l=oS(t),u=cS(t),h=uS(t),d=hS(t),f=Kb(t),p=$b(r),x=s.createProgram(),m,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ya).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ya).join(`
`),g.length>0&&(g+=`
`)):(m=[r0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ya).join(`
`),g=[r0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?lt.tonemapping_pars_fragment:"",t.toneMapping!==Ei?qb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,Xb("linearToOutputTexel",t.outputColorSpace),Zb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ya).join(`
`)),o=bd(o),o=n0(o,t),o=i0(o,t),a=bd(a),a=n0(a,t),a=i0(a,t),o=s0(o),a=s0(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===rd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=b+m+o,_=b+g+a,S=Qm(s,s.VERTEX_SHADER,v),y=Qm(s,s.FRAGMENT_SHADER,_);s.attachShader(x,S),s.attachShader(x,y),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(R){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(x)||"",F=s.getShaderInfoLog(S)||"",z=s.getShaderInfoLog(y)||"",D=P.trim(),B=F.trim(),H=z.trim(),K=!0,se=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,S,y);else{let de=t0(s,S,"vertex"),V=t0(s,y,"fragment");et("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+de+`
`+V)}else D!==""?We("WebGLProgram: Program Info Log:",D):(B===""||H==="")&&(se=!1);se&&(R.diagnostics={runnable:K,programLog:D,vertexShader:{log:B,prefix:m},fragmentShader:{log:H,prefix:g}})}s.deleteShader(S),s.deleteShader(y),M=new To(s,x),w=Jb(s,x)}let M;this.getUniforms=function(){return M===void 0&&T(this),M};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,kb)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gb++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=y,this}var fS=0,Sd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ed(e),t.set(e,n)),n}},Ed=class{constructor(e){this.id=fS++,this.code=e,this.usedTimes=0}};function pS(i){return i===Ns||i===Ha||i===ka}function mS(i,e,t,n,s,r){let o=new aa,a=new Sd,c=new Set,l=[],u=new Map,h=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return c.add(M),M===0?"uv":`uv${M}`}function x(M,w,C,R,P,F){let z=R.fog,D=P.geometry,B=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?R.environment:null,H=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,K=e.get(M.envMap||B,H),se=K&&K.mapping===Fa?K.image.height:null,de=f[M.type];M.precision!==null&&(d=n.getMaxPrecision(M.precision),d!==M.precision&&We("WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let V=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,j=V!==void 0?V.length:0,he=0;D.morphAttributes.position!==void 0&&(he=1),D.morphAttributes.normal!==void 0&&(he=2),D.morphAttributes.color!==void 0&&(he=3);let Se,Ee,$,Q;if(de){let Fe=zi[de];Se=Fe.vertexShader,Ee=Fe.fragmentShader}else{Se=M.vertexShader,Ee=M.fragmentShader;let Fe=a.getVertexShaderStage(M),ot=a.getFragmentShaderStage(M);a.update(M,Fe,ot),$=Fe.id,Q=ot.id}let J=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),xe=P.isInstancedMesh===!0,ye=P.isBatchedMesh===!0,ze=!!M.map,ce=!!M.matcap,ne=!!K,re=!!M.aoMap,oe=!!M.lightMap,fe=!!M.bumpMap&&M.wireframe===!1,me=!!M.normalMap,Le=!!M.displacementMap,Ae=!!M.emissiveMap,ke=!!M.metalnessMap,He=!!M.roughnessMap,N=M.anisotropy>0,ve=M.clearcoat>0,ue=M.dispersion>0,A=M.iridescence>0,E=M.sheen>0,G=M.transmission>0,L=N&&!!M.anisotropyMap,O=ve&&!!M.clearcoatMap,X=ve&&!!M.clearcoatNormalMap,W=ve&&!!M.clearcoatRoughnessMap,Y=A&&!!M.iridescenceMap,Z=A&&!!M.iridescenceThicknessMap,be=E&&!!M.sheenColorMap,Ne=E&&!!M.sheenRoughnessMap,Ie=!!M.specularMap,Ce=!!M.specularColorMap,Ge=!!M.specularIntensityMap,qe=G&&!!M.transmissionMap,_e=G&&!!M.thicknessMap,k=!!M.gradientMap,Me=!!M.alphaMap,ae=M.alphaTest>0,we=!!M.alphaHash,Re=!!M.extensions,le=Ei;M.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(le=i.toneMapping);let De={shaderID:de,shaderType:M.type,shaderName:M.name,vertexShader:Se,fragmentShader:Ee,defines:M.defines,customVertexShaderID:$,customFragmentShaderID:Q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:ye,batchingColor:ye&&P._colorsTexture!==null,instancing:xe,instancingColor:xe&&P.instanceColor!==null,instancingMorph:xe&&P.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:ze,matcap:ce,envMap:ne,envMapMode:ne&&K.mapping,envMapCubeUVHeight:se,aoMap:re,lightMap:oe,bumpMap:fe,normalMap:me,displacementMap:Le,emissiveMap:Ae,normalMapObjectSpace:me&&M.normalMapType===Sm,normalMapTangentSpace:me&&M.normalMapType===Va,packedNormalMap:me&&M.normalMapType===Va&&pS(M.normalMap.format),metalnessMap:ke,roughnessMap:He,anisotropy:N,anisotropyMap:L,clearcoat:ve,clearcoatMap:O,clearcoatNormalMap:X,clearcoatRoughnessMap:W,dispersion:ue,iridescence:A,iridescenceMap:Y,iridescenceThicknessMap:Z,sheen:E,sheenColorMap:be,sheenRoughnessMap:Ne,specularMap:Ie,specularColorMap:Ce,specularIntensityMap:Ge,transmission:G,transmissionMap:qe,thicknessMap:_e,gradientMap:k,opaque:M.transparent===!1&&M.blending===tr&&M.alphaToCoverage===!1,alphaMap:Me,alphaTest:ae,alphaHash:we,combine:M.combine,mapUv:ze&&p(M.map.channel),aoMapUv:re&&p(M.aoMap.channel),lightMapUv:oe&&p(M.lightMap.channel),bumpMapUv:fe&&p(M.bumpMap.channel),normalMapUv:me&&p(M.normalMap.channel),displacementMapUv:Le&&p(M.displacementMap.channel),emissiveMapUv:Ae&&p(M.emissiveMap.channel),metalnessMapUv:ke&&p(M.metalnessMap.channel),roughnessMapUv:He&&p(M.roughnessMap.channel),anisotropyMapUv:L&&p(M.anisotropyMap.channel),clearcoatMapUv:O&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:X&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:be&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&p(M.sheenRoughnessMap.channel),specularMapUv:Ie&&p(M.specularMap.channel),specularColorMapUv:Ce&&p(M.specularColorMap.channel),specularIntensityMapUv:Ge&&p(M.specularIntensityMap.channel),transmissionMapUv:qe&&p(M.transmissionMap.channel),thicknessMapUv:_e&&p(M.thicknessMap.channel),alphaMapUv:Me&&p(M.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(me||N),vertexNormals:!!D.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!D.attributes.uv&&(ze||Me),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||D.attributes.normal===void 0&&me===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ge,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:he,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:ze&&M.map.isVideoTexture===!0&&ht.getTransfer(M.map.colorSpace)===St,decodeVideoTextureEmissive:Ae&&M.emissiveMap.isVideoTexture===!0&&ht.getTransfer(M.emissiveMap.colorSpace)===St,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Pt,flipSided:M.side===Mn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Re&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&M.extensions.multiDraw===!0||ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return De.vertexUv1s=c.has(1),De.vertexUv2s=c.has(2),De.vertexUv3s=c.has(3),c.clear(),De}function m(M){let w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(let C in M.defines)w.push(C),w.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(g(w,M),b(w,M),w.push(i.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function g(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function b(M,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function v(M){let w=f[M.type],C;if(w){let R=zi[w];C=Hm.clone(R.uniforms)}else C=M.uniforms;return C}function _(M,w){let C=u.get(w);return C!==void 0?++C.usedTimes:(C=new dS(i,w,M,s),l.push(C),u.set(w,C)),C}function S(M){if(--M.usedTimes===0){let w=l.indexOf(M);l[w]=l[l.length-1],l.pop(),u.delete(M.cacheKey),M.destroy()}}function y(M){a.remove(M)}function T(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:v,acquireProgram:_,releaseProgram:S,releaseShaderCache:y,programs:l,dispose:T}}function gS(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function xS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function o0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function a0(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,x,m,g){let b=i[e];return b===void 0?(b={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},i[e]=b):(b.id=d.id,b.object=d,b.geometry=f,b.material=p,b.materialVariant=o(d),b.groupOrder=x,b.renderOrder=d.renderOrder,b.z=m,b.group=g),e++,b}function c(d,f,p,x,m,g){let b=a(d,f,p,x,m,g);p.transmission>0?n.push(b):p.transparent===!0?s.push(b):t.push(b)}function l(d,f,p,x,m,g){let b=a(d,f,p,x,m,g);p.transmission>0?n.unshift(b):p.transparent===!0?s.unshift(b):t.unshift(b)}function u(d,f,p){t.length>1&&t.sort(d||xS),n.length>1&&n.sort(f||o0),s.length>1&&s.sort(f||o0),p&&(t.reverse(),n.reverse(),s.reverse())}function h(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function _S(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new a0,i.set(n,[o])):s>=r.length?(o=new a0,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function yS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new pe};break;case"SpotLight":t={position:new U,direction:new U,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function vS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var MS=0;function bS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function SS(i){let e=new yS,t=vS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let s=new U,r=new $e,o=new $e;function a(l){let u=0,h=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,b=0,v=0,_=0,S=0,y=0,T=0;l.sort(bS);for(let w=0,C=l.length;w<C;w++){let R=l[w],P=R.color,F=R.intensity,z=R.distance,D=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Ns?D=R.shadow.map.texture:D=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=P.r*F,h+=P.g*F,d+=P.b*F;else if(R.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(R.sh.coefficients[B],F);T++}else if(R.isDirectionalLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let H=R.shadow,K=t.get(R);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,n.directionalShadow[f]=K,n.directionalShadowMap[f]=D,n.directionalShadowMatrix[f]=R.shadow.matrix,b++}n.directional[f]=B,f++}else if(R.isSpotLight){let B=e.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(P).multiplyScalar(F),B.distance=z,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,n.spot[x]=B;let H=R.shadow;if(R.map&&(n.spotLightMap[S]=R.map,S++,H.updateMatrices(R),R.castShadow&&y++),n.spotLightMatrix[x]=H.matrix,R.castShadow){let K=t.get(R);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,n.spotShadow[x]=K,n.spotShadowMap[x]=D,_++}x++}else if(R.isRectAreaLight){let B=e.get(R);B.color.copy(P).multiplyScalar(F),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=B,m++}else if(R.isPointLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){let H=R.shadow,K=t.get(R);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,K.shadowCameraNear=H.camera.near,K.shadowCameraFar=H.camera.far,n.pointShadow[p]=K,n.pointShadowMap[p]=D,n.pointShadowMatrix[p]=R.shadow.matrix,v++}n.point[p]=B,p++}else if(R.isHemisphereLight){let B=e.get(R);B.skyColor.copy(R.color).multiplyScalar(F),B.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[g]=B,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ue.LTC_FLOAT_1,n.rectAreaLTC2=Ue.LTC_FLOAT_2):(n.rectAreaLTC1=Ue.LTC_HALF_1,n.rectAreaLTC2=Ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let M=n.hash;(M.directionalLength!==f||M.pointLength!==p||M.spotLength!==x||M.rectAreaLength!==m||M.hemiLength!==g||M.numDirectionalShadows!==b||M.numPointShadows!==v||M.numSpotShadows!==_||M.numSpotMaps!==S||M.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+S-y,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=T,M.directionalLength=f,M.pointLength=p,M.spotLength=x,M.rectAreaLength=m,M.hemiLength=g,M.numDirectionalShadows=b,M.numPointShadows=v,M.numSpotShadows=_,M.numSpotMaps=S,M.numLightProbes=T,n.version=MS++)}function c(l,u){let h=0,d=0,f=0,p=0,x=0,m=u.matrixWorldInverse;for(let g=0,b=l.length;g<b;g++){let v=l[g];if(v.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(v.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let _=n.rectArea[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function c0(i){let e=new SS(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function o(d){t.push(d)}function a(d){n.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function ES(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new c0(i),e.set(s,[a])):r>=o.length?(a=new c0(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var TS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wS=`uniform sampler2D shadow_pass;
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
}`,AS=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],RS=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],l0=new $e,Xa=new U,xd=new U;function CS(i,e,t){let n=new fo,s=new Te,r=new Te,o=new At,a=new fl,c=new pl,l={},u=t.maxTextureSize,h={[Cn]:Mn,[Mn]:Cn,[Pt]:Pt},d=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:TS,fragmentShader:wS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new pt;p.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Pe(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Na;let g=this.type;this.render=function(y,T,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;this.type===Qp&&(We("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Na);let w=i.getRenderTarget(),C=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Ui),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let F=g!==this.type;F&&T.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(D=>D.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,D=y.length;z<D;z++){let B=y[z],H=B.shadow;if(H===void 0){We("WebGLShadowMap:",B,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let K=H.getFrameExtents();s.multiply(K),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/K.x),s.x=r.x*K.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/K.y),s.y=r.y*K.y,H.mapSize.y=r.y));let se=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=se,H.map===null||F===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===yo){if(B.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Jn(s.x,s.y,{format:Ns,type:Oi,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),H.map.texture.name=B.name+".shadowMap",H.map.depthTexture=new ns(s.x,s.y,ei),H.map.depthTexture.name=B.name+".shadowMapDepth",H.map.depthTexture.format=Li,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=qt,H.map.depthTexture.magFilter=qt}else B.isPointLight?(H.map=new _u(s.x),H.map.depthTexture=new ol(s.x,wi)):(H.map=new Jn(s.x,s.y),H.map.depthTexture=new ns(s.x,s.y,wi)),H.map.depthTexture.name=B.name+".shadowMap",H.map.depthTexture.format=Li,this.type===Na?(H.map.depthTexture.compareFunction=se?pu:fu,H.map.depthTexture.minFilter=Zt,H.map.depthTexture.magFilter=Zt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=qt,H.map.depthTexture.magFilter=qt);H.camera.updateProjectionMatrix()}let de=H.map.isWebGLCubeRenderTarget?6:1;for(let V=0;V<de;V++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,V),i.clear();else{V===0&&(i.setRenderTarget(H.map),i.clear());let j=H.getViewport(V);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),P.viewport(o)}if(B.isPointLight){let j=H.camera,he=H.matrix,Se=B.distance||j.far;Se!==j.far&&(j.far=Se,j.updateProjectionMatrix()),Xa.setFromMatrixPosition(B.matrixWorld),j.position.copy(Xa),xd.copy(j.position),xd.add(AS[V]),j.up.copy(RS[V]),j.lookAt(xd),j.updateMatrixWorld(),he.makeTranslation(-Xa.x,-Xa.y,-Xa.z),l0.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),H._frustum.setFromProjectionMatrix(l0,j.coordinateSystem,j.reversedDepth)}else H.updateMatrices(B);n=H.getFrustum(),_(T,M,H.camera,B,this.type)}H.isPointLightShadow!==!0&&this.type===yo&&b(H,M),H.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(w,C,R)};function b(y,T){let M=e.update(x);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Jn(s.x,s.y,{format:Ns,type:Oi})),d.uniforms.shadow_pass.value=y.map.depthTexture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(T,null,M,d,x,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(T,null,M,f,x,null)}function v(y,T,M,w){let C=null,R=M.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(R!==void 0)C=R;else if(C=M.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let P=C.uuid,F=T.uuid,z=l[P];z===void 0&&(z={},l[P]=z);let D=z[F];D===void 0&&(D=C.clone(),z[F]=D,T.addEventListener("dispose",S)),C=D}if(C.visible=T.visible,C.wireframe=T.wireframe,w===yo?C.side=T.shadowSide!==null?T.shadowSide:T.side:C.side=T.shadowSide!==null?T.shadowSide:h[T.side],C.alphaMap=T.alphaMap,C.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,C.map=T.map,C.clipShadows=T.clipShadows,C.clippingPlanes=T.clippingPlanes,C.clipIntersection=T.clipIntersection,C.displacementMap=T.displacementMap,C.displacementScale=T.displacementScale,C.displacementBias=T.displacementBias,C.wireframeLinewidth=T.wireframeLinewidth,C.linewidth=T.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let P=i.properties.get(C);P.light=M}return C}function _(y,T,M,w,C){if(y.visible===!1)return;if(y.layers.test(T.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&C===yo)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,y.matrixWorld);let F=e.update(y),z=y.material;if(Array.isArray(z)){let D=F.groups;for(let B=0,H=D.length;B<H;B++){let K=D[B],se=z[K.materialIndex];if(se&&se.visible){let de=v(y,se,w,C);y.onBeforeShadow(i,y,T,M,F,de,K),i.renderBufferDirect(M,null,F,de,y,K),y.onAfterShadow(i,y,T,M,F,de,K)}}}else if(z.visible){let D=v(y,z,w,C);y.onBeforeShadow(i,y,T,M,F,D,null),i.renderBufferDirect(M,null,F,D,y,null),y.onAfterShadow(i,y,T,M,F,D,null)}}let P=y.children;for(let F=0,z=P.length;F<z;F++)_(P[F],T,M,w,C)}function S(y){y.target.removeEventListener("dispose",S);for(let M in l){let w=l[M],C=y.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function IS(i,e){function t(){let k=!1,Me=new At,ae=null,we=new At(0,0,0,0);return{setMask:function(Re){ae!==Re&&!k&&(i.colorMask(Re,Re,Re,Re),ae=Re)},setLocked:function(Re){k=Re},setClear:function(Re,le,De,Fe,ot){ot===!0&&(Re*=Fe,le*=Fe,De*=Fe),Me.set(Re,le,De,Fe),we.equals(Me)===!1&&(i.clearColor(Re,le,De,Fe),we.copy(Me))},reset:function(){k=!1,ae=null,we.set(-1,0,0,0)}}}function n(){let k=!1,Me=!1,ae=null,we=null,Re=null;return{setReversed:function(le){if(Me!==le){let De=e.get("EXT_clip_control");le?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),Me=le;let Fe=Re;Re=null,this.setClear(Fe)}},getReversed:function(){return Me},setTest:function(le){le?J(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(le){ae!==le&&!k&&(i.depthMask(le),ae=le)},setFunc:function(le){if(Me&&(le=Nm[le]),we!==le){switch(le){case qc:i.depthFunc(i.NEVER);break;case Zc:i.depthFunc(i.ALWAYS);break;case Kc:i.depthFunc(i.LESS);break;case nr:i.depthFunc(i.LEQUAL);break;case $c:i.depthFunc(i.EQUAL);break;case Jc:i.depthFunc(i.GEQUAL);break;case jc:i.depthFunc(i.GREATER);break;case Qc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}we=le}},setLocked:function(le){k=le},setClear:function(le){Re!==le&&(Re=le,Me&&(le=1-le),i.clearDepth(le))},reset:function(){k=!1,ae=null,we=null,Re=null,Me=!1}}}function s(){let k=!1,Me=null,ae=null,we=null,Re=null,le=null,De=null,Fe=null,ot=null;return{setTest:function(ct){k||(ct?J(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(ct){Me!==ct&&!k&&(i.stencilMask(ct),Me=ct)},setFunc:function(ct,Gt,fn){(ae!==ct||we!==Gt||Re!==fn)&&(i.stencilFunc(ct,Gt,fn),ae=ct,we=Gt,Re=fn)},setOp:function(ct,Gt,fn){(le!==ct||De!==Gt||Fe!==fn)&&(i.stencilOp(ct,Gt,fn),le=ct,De=Gt,Fe=fn)},setLocked:function(ct){k=ct},setClear:function(ct){ot!==ct&&(i.clearStencil(ct),ot=ct)},reset:function(){k=!1,Me=null,ae=null,we=null,Re=null,le=null,De=null,Fe=null,ot=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},h={},d={},f=new WeakMap,p=[],x=null,m=!1,g=null,b=null,v=null,_=null,S=null,y=null,T=null,M=new pe(0,0,0),w=0,C=!1,R=null,P=null,F=null,z=null,D=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,K=0,se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(se)[1]),H=K>=1):se.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),H=K>=2);let de=null,V={},j=i.getParameter(i.SCISSOR_BOX),he=i.getParameter(i.VIEWPORT),Se=new At().fromArray(j),Ee=new At().fromArray(he);function $(k,Me,ae,we){let Re=new Uint8Array(4),le=i.createTexture();i.bindTexture(k,le),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<ae;De++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Me,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(Me+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return le}let Q={};Q[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(nr),fe(!1),me(Gh),J(i.CULL_FACE),re(Ui);function J(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function ge(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function xe(k,Me){return d[k]!==Me?(i.bindFramebuffer(k,Me),d[k]=Me,k===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Me),k===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Me),!0):!1}function ye(k,Me){let ae=p,we=!1;if(k){ae=f.get(Me),ae===void 0&&(ae=[],f.set(Me,ae));let Re=k.textures;if(ae.length!==Re.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let le=0,De=Re.length;le<De;le++)ae[le]=i.COLOR_ATTACHMENT0+le;ae.length=Re.length,we=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,we=!0);we&&i.drawBuffers(ae)}function ze(k){return x!==k?(i.useProgram(k),x=k,!0):!1}let ce={[bs]:i.FUNC_ADD,[tm]:i.FUNC_SUBTRACT,[nm]:i.FUNC_REVERSE_SUBTRACT};ce[im]=i.MIN,ce[sm]=i.MAX;let ne={[rm]:i.ZERO,[om]:i.ONE,[am]:i.SRC_COLOR,[Xc]:i.SRC_ALPHA,[fm]:i.SRC_ALPHA_SATURATE,[hm]:i.DST_COLOR,[lm]:i.DST_ALPHA,[cm]:i.ONE_MINUS_SRC_COLOR,[Yc]:i.ONE_MINUS_SRC_ALPHA,[dm]:i.ONE_MINUS_DST_COLOR,[um]:i.ONE_MINUS_DST_ALPHA,[pm]:i.CONSTANT_COLOR,[mm]:i.ONE_MINUS_CONSTANT_COLOR,[gm]:i.CONSTANT_ALPHA,[xm]:i.ONE_MINUS_CONSTANT_ALPHA};function re(k,Me,ae,we,Re,le,De,Fe,ot,ct){if(k===Ui){m===!0&&(ge(i.BLEND),m=!1);return}if(m===!1&&(J(i.BLEND),m=!0),k!==em){if(k!==g||ct!==C){if((b!==bs||S!==bs)&&(i.blendEquation(i.FUNC_ADD),b=bs,S=bs),ct)switch(k){case tr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ls:i.blendFunc(i.ONE,i.ONE);break;case Vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:et("WebGLState: Invalid blending: ",k);break}else switch(k){case tr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vh:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wh:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",k);break}v=null,_=null,y=null,T=null,M.set(0,0,0),w=0,g=k,C=ct}return}Re=Re||Me,le=le||ae,De=De||we,(Me!==b||Re!==S)&&(i.blendEquationSeparate(ce[Me],ce[Re]),b=Me,S=Re),(ae!==v||we!==_||le!==y||De!==T)&&(i.blendFuncSeparate(ne[ae],ne[we],ne[le],ne[De]),v=ae,_=we,y=le,T=De),(Fe.equals(M)===!1||ot!==w)&&(i.blendColor(Fe.r,Fe.g,Fe.b,ot),M.copy(Fe),w=ot),g=k,C=!1}function oe(k,Me){k.side===Pt?ge(i.CULL_FACE):J(i.CULL_FACE);let ae=k.side===Mn;Me&&(ae=!ae),fe(ae),k.blending===tr&&k.transparent===!1?re(Ui):re(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let we=k.stencilWrite;a.setTest(we),we&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ae(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function fe(k){R!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),R=k)}function me(k){k!==Jp?(J(i.CULL_FACE),k!==P&&(k===Gh?i.cullFace(i.BACK):k===jp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),P=k}function Le(k){k!==F&&(H&&i.lineWidth(k),F=k)}function Ae(k,Me,ae){k?(J(i.POLYGON_OFFSET_FILL),(z!==Me||D!==ae)&&(z=Me,D=ae,o.getReversed()&&(Me=-Me),i.polygonOffset(Me,ae))):ge(i.POLYGON_OFFSET_FILL)}function ke(k){k?J(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function He(k){k===void 0&&(k=i.TEXTURE0+B-1),de!==k&&(i.activeTexture(k),de=k)}function N(k,Me,ae){ae===void 0&&(de===null?ae=i.TEXTURE0+B-1:ae=de);let we=V[ae];we===void 0&&(we={type:void 0,texture:void 0},V[ae]=we),(we.type!==k||we.texture!==Me)&&(de!==ae&&(i.activeTexture(ae),de=ae),i.bindTexture(k,Me||Q[k]),we.type=k,we.texture=Me)}function ve(){let k=V[de];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ue(){try{i.compressedTexImage2D(...arguments)}catch(k){et("WebGLState:",k)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(k){et("WebGLState:",k)}}function E(){try{i.texSubImage2D(...arguments)}catch(k){et("WebGLState:",k)}}function G(){try{i.texSubImage3D(...arguments)}catch(k){et("WebGLState:",k)}}function L(){try{i.compressedTexSubImage2D(...arguments)}catch(k){et("WebGLState:",k)}}function O(){try{i.compressedTexSubImage3D(...arguments)}catch(k){et("WebGLState:",k)}}function X(){try{i.texStorage2D(...arguments)}catch(k){et("WebGLState:",k)}}function W(){try{i.texStorage3D(...arguments)}catch(k){et("WebGLState:",k)}}function Y(){try{i.texImage2D(...arguments)}catch(k){et("WebGLState:",k)}}function Z(){try{i.texImage3D(...arguments)}catch(k){et("WebGLState:",k)}}function be(k){return h[k]!==void 0?h[k]:i.getParameter(k)}function Ne(k,Me){h[k]!==Me&&(i.pixelStorei(k,Me),h[k]=Me)}function Ie(k){Se.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Se.copy(k))}function Ce(k){Ee.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Ee.copy(k))}function Ge(k,Me){let ae=l.get(Me);ae===void 0&&(ae=new WeakMap,l.set(Me,ae));let we=ae.get(k);we===void 0&&(we=i.getUniformBlockIndex(Me,k.name),ae.set(k,we))}function qe(k,Me){let we=l.get(Me).get(k);c.get(Me)!==we&&(i.uniformBlockBinding(Me,we,k.__bindingPointIndex),c.set(Me,we))}function _e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},de=null,V={},d={},f=new WeakMap,p=[],x=null,m=!1,g=null,b=null,v=null,_=null,S=null,y=null,T=null,M=new pe(0,0,0),w=0,C=!1,R=null,P=null,F=null,z=null,D=null,Se.set(0,0,i.canvas.width,i.canvas.height),Ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:ge,bindFramebuffer:xe,drawBuffers:ye,useProgram:ze,setBlending:re,setMaterial:oe,setFlipSided:fe,setCullFace:me,setLineWidth:Le,setPolygonOffset:Ae,setScissorTest:ke,activeTexture:He,bindTexture:N,unbindTexture:ve,compressedTexImage2D:ue,compressedTexImage3D:A,texImage2D:Y,texImage3D:Z,pixelStorei:Ne,getParameter:be,updateUBOMapping:Ge,uniformBlockBinding:qe,texStorage2D:X,texStorage3D:W,texSubImage2D:E,texSubImage3D:G,compressedTexSubImage2D:L,compressedTexSubImage3D:O,scissor:Ie,viewport:Ce,reset:_e}}function PS(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Te,u=new WeakMap,h=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,E){return p?new OffscreenCanvas(A,E):oo("canvas")}function m(A,E,G){let L=1,O=ue(A);if((O.width>G||O.height>G)&&(L=G/Math.max(O.width,O.height)),L<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let X=Math.floor(L*O.width),W=Math.floor(L*O.height);d===void 0&&(d=x(X,W));let Y=E?x(X,W):d;return Y.width=X,Y.height=W,Y.getContext("2d").drawImage(A,0,0,X,W),We("WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+X+"x"+W+")."),Y}else return"data"in A&&We("WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),A;return A}function g(A){return A.generateMipmaps}function b(A){i.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(A,E,G,L,O,X=!1){if(A!==null){if(i[A]!==void 0)return i[A];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let W;L&&(W=e.get("EXT_texture_norm16"),W||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=E;if(E===i.RED&&(G===i.FLOAT&&(Y=i.R32F),G===i.HALF_FLOAT&&(Y=i.R16F),G===i.UNSIGNED_BYTE&&(Y=i.R8),G===i.UNSIGNED_SHORT&&W&&(Y=W.R16_EXT),G===i.SHORT&&W&&(Y=W.R16_SNORM_EXT)),E===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.R8UI),G===i.UNSIGNED_SHORT&&(Y=i.R16UI),G===i.UNSIGNED_INT&&(Y=i.R32UI),G===i.BYTE&&(Y=i.R8I),G===i.SHORT&&(Y=i.R16I),G===i.INT&&(Y=i.R32I)),E===i.RG&&(G===i.FLOAT&&(Y=i.RG32F),G===i.HALF_FLOAT&&(Y=i.RG16F),G===i.UNSIGNED_BYTE&&(Y=i.RG8),G===i.UNSIGNED_SHORT&&W&&(Y=W.RG16_EXT),G===i.SHORT&&W&&(Y=W.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.RG8UI),G===i.UNSIGNED_SHORT&&(Y=i.RG16UI),G===i.UNSIGNED_INT&&(Y=i.RG32UI),G===i.BYTE&&(Y=i.RG8I),G===i.SHORT&&(Y=i.RG16I),G===i.INT&&(Y=i.RG32I)),E===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),G===i.UNSIGNED_INT&&(Y=i.RGB32UI),G===i.BYTE&&(Y=i.RGB8I),G===i.SHORT&&(Y=i.RGB16I),G===i.INT&&(Y=i.RGB32I)),E===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),G===i.UNSIGNED_INT&&(Y=i.RGBA32UI),G===i.BYTE&&(Y=i.RGBA8I),G===i.SHORT&&(Y=i.RGBA16I),G===i.INT&&(Y=i.RGBA32I)),E===i.RGB&&(G===i.UNSIGNED_SHORT&&W&&(Y=W.RGB16_EXT),G===i.SHORT&&W&&(Y=W.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),E===i.RGBA){let Z=X?sa:ht.getTransfer(O);G===i.FLOAT&&(Y=i.RGBA32F),G===i.HALF_FLOAT&&(Y=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Y=Z===St?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&W&&(Y=W.RGBA16_EXT),G===i.SHORT&&W&&(Y=W.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function S(A,E){let G;return A?E===null||E===wi||E===bo?G=i.DEPTH24_STENCIL8:E===ei?G=i.DEPTH32F_STENCIL8:E===Mo&&(G=i.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===wi||E===bo?G=i.DEPTH_COMPONENT24:E===ei?G=i.DEPTH_COMPONENT32F:E===Mo&&(G=i.DEPTH_COMPONENT16),G}function y(A,E){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==qt&&A.minFilter!==Zt?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function T(A){let E=A.target;E.removeEventListener("dispose",T),w(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&h.delete(E)}function M(A){let E=A.target;E.removeEventListener("dispose",M),R(E)}function w(A){let E=n.get(A);if(E.__webglInit===void 0)return;let G=A.source,L=f.get(G);if(L){let O=L[E.__cacheKey];O.usedTimes--,O.usedTimes===0&&C(A),Object.keys(L).length===0&&f.delete(G)}n.remove(A)}function C(A){let E=n.get(A);i.deleteTexture(E.__webglTexture);let G=A.source,L=f.get(G);delete L[E.__cacheKey],o.memory.textures--}function R(A){let E=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(E.__webglFramebuffer[L]))for(let O=0;O<E.__webglFramebuffer[L].length;O++)i.deleteFramebuffer(E.__webglFramebuffer[L][O]);else i.deleteFramebuffer(E.__webglFramebuffer[L]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[L])}else{if(Array.isArray(E.__webglFramebuffer))for(let L=0;L<E.__webglFramebuffer.length;L++)i.deleteFramebuffer(E.__webglFramebuffer[L]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let L=0;L<E.__webglColorRenderbuffer.length;L++)E.__webglColorRenderbuffer[L]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[L]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let G=A.textures;for(let L=0,O=G.length;L<O;L++){let X=n.get(G[L]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(G[L])}n.remove(A)}let P=0;function F(){P=0}function z(){return P}function D(A){P=A}function B(){let A=P;return A>=s.maxTextures&&We("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),P+=1,A}function H(A){let E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function K(A,E){let G=n.get(A);if(A.isVideoTexture&&N(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&G.__version!==A.version){let L=A.image;if(L===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(L.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(G,A,E);return}}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+E)}function se(A,E){let G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){ge(G,A,E);return}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+E)}function de(A,E){let G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){ge(G,A,E);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+E)}function V(A,E){let G=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&G.__version!==A.version){xe(G,A,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+E)}let j={[ci]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[so]:i.MIRRORED_REPEAT},he={[qt]:i.NEAREST,[Cl]:i.NEAREST_MIPMAP_NEAREST,[_r]:i.NEAREST_MIPMAP_LINEAR,[Zt]:i.LINEAR,[vo]:i.LINEAR_MIPMAP_NEAREST,[Ti]:i.LINEAR_MIPMAP_LINEAR},Se={[Em]:i.NEVER,[Cm]:i.ALWAYS,[Tm]:i.LESS,[fu]:i.LEQUAL,[wm]:i.EQUAL,[pu]:i.GEQUAL,[Am]:i.GREATER,[Rm]:i.NOTEQUAL};function Ee(A,E){if(E.type===ei&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Zt||E.magFilter===vo||E.magFilter===_r||E.magFilter===Ti||E.minFilter===Zt||E.minFilter===vo||E.minFilter===_r||E.minFilter===Ti)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,j[E.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,j[E.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,j[E.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,he[E.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,he[E.minFilter]),E.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Se[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===qt||E.minFilter!==_r&&E.minFilter!==Ti||E.type===ei&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function $(A,E){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",T));let L=E.source,O=f.get(L);O===void 0&&(O={},f.set(L,O));let X=H(E);if(X!==A.__cacheKey){O[X]===void 0&&(O[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),O[X].usedTimes++;let W=O[A.__cacheKey];W!==void 0&&(O[A.__cacheKey].usedTimes--,W.usedTimes===0&&C(E)),A.__cacheKey=X,A.__webglTexture=O[X].texture}return G}function Q(A,E,G){return Math.floor(Math.floor(A/G)/E)}function J(A,E,G,L){let X=A.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,G,L,E.data);else{X.sort((Ne,Ie)=>Ne.start-Ie.start);let W=0;for(let Ne=1;Ne<X.length;Ne++){let Ie=X[W],Ce=X[Ne],Ge=Ie.start+Ie.count,qe=Q(Ce.start,E.width,4),_e=Q(Ie.start,E.width,4);Ce.start<=Ge+1&&qe===_e&&Q(Ce.start+Ce.count-1,E.width,4)===qe?Ie.count=Math.max(Ie.count,Ce.start+Ce.count-Ie.start):(++W,X[W]=Ce)}X.length=W+1;let Y=t.getParameter(i.UNPACK_ROW_LENGTH),Z=t.getParameter(i.UNPACK_SKIP_PIXELS),be=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let Ne=0,Ie=X.length;Ne<Ie;Ne++){let Ce=X[Ne],Ge=Math.floor(Ce.start/4),qe=Math.ceil(Ce.count/4),_e=Ge%E.width,k=Math.floor(Ge/E.width),Me=qe,ae=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(i.UNPACK_SKIP_ROWS,k),t.texSubImage2D(i.TEXTURE_2D,0,_e,k,Me,ae,G,L,E.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(i.UNPACK_SKIP_ROWS,be)}}function ge(A,E,G){let L=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(L=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(L=i.TEXTURE_3D);let O=$(A,E),X=E.source;t.bindTexture(L,A.__webglTexture,i.TEXTURE0+G);let W=n.get(X);if(X.version!==W.__version||O===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let ae=ht.getPrimaries(ht.workingColorSpace),we=E.colorSpace===us?null:ht.getPrimaries(E.colorSpace),Re=E.colorSpace===us||ae===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let Z=m(E.image,!1,s.maxTextureSize);Z=ve(E,Z);let be=r.convert(E.format,E.colorSpace),Ne=r.convert(E.type),Ie=_(E.internalFormat,be,Ne,E.normalized,E.colorSpace,E.isVideoTexture);Ee(L,E);let Ce,Ge=E.mipmaps,qe=E.isVideoTexture!==!0,_e=W.__version===void 0||O===!0,k=X.dataReady,Me=y(E,Z);if(E.isDepthTexture)Ie=S(E.format===Ls,E.type),_e&&(qe?t.texStorage2D(i.TEXTURE_2D,1,Ie,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,Ie,Z.width,Z.height,0,be,Ne,null));else if(E.isDataTexture)if(Ge.length>0){qe&&_e&&t.texStorage2D(i.TEXTURE_2D,Me,Ie,Ge[0].width,Ge[0].height);for(let ae=0,we=Ge.length;ae<we;ae++)Ce=Ge[ae],qe?k&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Ce.width,Ce.height,be,Ne,Ce.data):t.texImage2D(i.TEXTURE_2D,ae,Ie,Ce.width,Ce.height,0,be,Ne,Ce.data);E.generateMipmaps=!1}else qe?(_e&&t.texStorage2D(i.TEXTURE_2D,Me,Ie,Z.width,Z.height),k&&J(E,Z,be,Ne)):t.texImage2D(i.TEXTURE_2D,0,Ie,Z.width,Z.height,0,be,Ne,Z.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){qe&&_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Ie,Ge[0].width,Ge[0].height,Z.depth);for(let ae=0,we=Ge.length;ae<we;ae++)if(Ce=Ge[ae],E.format!==ti)if(be!==null)if(qe){if(k)if(E.layerUpdates.size>0){let Re=hd(Ce.width,Ce.height,E.format,E.type);for(let le of E.layerUpdates){let De=Ce.data.subarray(le*Re/Ce.data.BYTES_PER_ELEMENT,(le+1)*Re/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,le,Ce.width,Ce.height,1,be,De)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Ce.width,Ce.height,Z.depth,be,Ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,Ie,Ce.width,Ce.height,Z.depth,0,Ce.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Ce.width,Ce.height,Z.depth,be,Ne,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,Ie,Ce.width,Ce.height,Z.depth,0,be,Ne,Ce.data)}else{qe&&_e&&t.texStorage2D(i.TEXTURE_2D,Me,Ie,Ge[0].width,Ge[0].height);for(let ae=0,we=Ge.length;ae<we;ae++)Ce=Ge[ae],E.format!==ti?be!==null?qe?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,Ce.width,Ce.height,be,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,Ie,Ce.width,Ce.height,0,Ce.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?k&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Ce.width,Ce.height,be,Ne,Ce.data):t.texImage2D(i.TEXTURE_2D,ae,Ie,Ce.width,Ce.height,0,be,Ne,Ce.data)}else if(E.isDataArrayTexture)if(qe){if(_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Ie,Z.width,Z.height,Z.depth),k)if(E.layerUpdates.size>0){let ae=hd(Z.width,Z.height,E.format,E.type);for(let we of E.layerUpdates){let Re=Z.data.subarray(we*ae/Z.data.BYTES_PER_ELEMENT,(we+1)*ae/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,we,Z.width,Z.height,1,be,Ne,Re)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,be,Ne,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,Z.width,Z.height,Z.depth,0,be,Ne,Z.data);else if(E.isData3DTexture)qe?(_e&&t.texStorage3D(i.TEXTURE_3D,Me,Ie,Z.width,Z.height,Z.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,be,Ne,Z.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,Z.width,Z.height,Z.depth,0,be,Ne,Z.data);else if(E.isFramebufferTexture){if(_e)if(qe)t.texStorage2D(i.TEXTURE_2D,Me,Ie,Z.width,Z.height);else{let ae=Z.width,we=Z.height;for(let Re=0;Re<Me;Re++)t.texImage2D(i.TEXTURE_2D,Re,Ie,ae,we,0,be,Ne,null),ae>>=1,we>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let ae=i.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),Z.parentNode!==ae){ae.appendChild(Z),h.add(E),ae.onpaint=we=>{let Re=we.changedElements;for(let le of h)Re.includes(le.image)&&(le.needsUpdate=!0)},ae.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Z);else{let Re=i.RGBA,le=i.RGBA,De=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Re,le,De,Z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ge.length>0){if(qe&&_e){let ae=ue(Ge[0]);t.texStorage2D(i.TEXTURE_2D,Me,Ie,ae.width,ae.height)}for(let ae=0,we=Ge.length;ae<we;ae++)Ce=Ge[ae],qe?k&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,be,Ne,Ce):t.texImage2D(i.TEXTURE_2D,ae,Ie,be,Ne,Ce);E.generateMipmaps=!1}else if(qe){if(_e){let ae=ue(Z);t.texStorage2D(i.TEXTURE_2D,Me,Ie,ae.width,ae.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,Ne,Z)}else t.texImage2D(i.TEXTURE_2D,0,Ie,be,Ne,Z);g(E)&&b(L),W.__version=X.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function xe(A,E,G){if(E.image.length!==6)return;let L=$(A,E),O=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+G);let X=n.get(O);if(O.version!==X.__version||L===!0){t.activeTexture(i.TEXTURE0+G);let W=ht.getPrimaries(ht.workingColorSpace),Y=E.colorSpace===us?null:ht.getPrimaries(E.colorSpace),Z=E.colorSpace===us||W===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let be=E.isCompressedTexture||E.image[0].isCompressedTexture,Ne=E.image[0]&&E.image[0].isDataTexture,Ie=[];for(let le=0;le<6;le++)!be&&!Ne?Ie[le]=m(E.image[le],!0,s.maxCubemapSize):Ie[le]=Ne?E.image[le].image:E.image[le],Ie[le]=ve(E,Ie[le]);let Ce=Ie[0],Ge=r.convert(E.format,E.colorSpace),qe=r.convert(E.type),_e=_(E.internalFormat,Ge,qe,E.normalized,E.colorSpace),k=E.isVideoTexture!==!0,Me=X.__version===void 0||L===!0,ae=O.dataReady,we=y(E,Ce);Ee(i.TEXTURE_CUBE_MAP,E);let Re;if(be){k&&Me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,_e,Ce.width,Ce.height);for(let le=0;le<6;le++){Re=Ie[le].mipmaps;for(let De=0;De<Re.length;De++){let Fe=Re[De];E.format!==ti?Ge!==null?k?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De,0,0,Fe.width,Fe.height,Ge,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De,_e,Fe.width,Fe.height,0,Fe.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De,0,0,Fe.width,Fe.height,Ge,qe,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De,_e,Fe.width,Fe.height,0,Ge,qe,Fe.data)}}}else{if(Re=E.mipmaps,k&&Me){Re.length>0&&we++;let le=ue(Ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,_e,le.width,le.height)}for(let le=0;le<6;le++)if(Ne){k?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ie[le].width,Ie[le].height,Ge,qe,Ie[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,_e,Ie[le].width,Ie[le].height,0,Ge,qe,Ie[le].data);for(let De=0;De<Re.length;De++){let ot=Re[De].image[le].image;k?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De+1,0,0,ot.width,ot.height,Ge,qe,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De+1,_e,ot.width,ot.height,0,Ge,qe,ot.data)}}else{k?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ge,qe,Ie[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,_e,Ge,qe,Ie[le]);for(let De=0;De<Re.length;De++){let Fe=Re[De];k?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De+1,0,0,Ge,qe,Fe.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De+1,_e,Ge,qe,Fe.image[le])}}}g(E)&&b(i.TEXTURE_CUBE_MAP),X.__version=O.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function ye(A,E,G,L,O,X){let W=r.convert(G.format,G.colorSpace),Y=r.convert(G.type),Z=_(G.internalFormat,W,Y,G.normalized,G.colorSpace),be=n.get(E),Ne=n.get(G);if(Ne.__renderTarget=E,!be.__hasExternalTextures){let Ie=Math.max(1,E.width>>X),Ce=Math.max(1,E.height>>X);O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?t.texImage3D(O,X,Z,Ie,Ce,E.depth,0,W,Y,null):t.texImage2D(O,X,Z,Ie,Ce,0,W,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),He(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,L,O,Ne.__webglTexture,0,ke(E)):(O===i.TEXTURE_2D||O>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,L,O,Ne.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(A,E,G){if(i.bindRenderbuffer(i.RENDERBUFFER,A),E.depthBuffer){let L=E.depthTexture,O=L&&L.isDepthTexture?L.type:null,X=S(E.stencilBuffer,O),W=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;He(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke(E),X,E.width,E.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke(E),X,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,X,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,A)}else{let L=E.textures;for(let O=0;O<L.length;O++){let X=L[O],W=r.convert(X.format,X.colorSpace),Y=r.convert(X.type),Z=_(X.internalFormat,W,Y,X.normalized,X.colorSpace);He(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke(E),Z,E.width,E.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke(E),Z,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Z,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ce(A,E,G){let L=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let O=n.get(E.depthTexture);if(O.__renderTarget=E,(!O.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),L){if(O.__webglInit===void 0&&(O.__webglInit=!0,E.depthTexture.addEventListener("dispose",T)),O.__webglTexture===void 0){O.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,E.depthTexture);let be=r.convert(E.depthTexture.format),Ne=r.convert(E.depthTexture.type),Ie;E.depthTexture.format===Li?Ie=i.DEPTH_COMPONENT24:E.depthTexture.format===Ls&&(Ie=i.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Ie,E.width,E.height,0,be,Ne,null)}}else K(E.depthTexture,0);let X=O.__webglTexture,W=ke(E),Y=L?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,Z=E.depthTexture.format===Ls?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Li)He(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,Y,X,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,Z,Y,X,0);else if(E.depthTexture.format===Ls)He(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,Y,X,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,Z,Y,X,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(A){let E=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){let L=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),L){let O=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,L.removeEventListener("dispose",O)};L.addEventListener("dispose",O),E.__depthDisposeCallback=O}E.__boundDepthTexture=L}if(A.depthTexture&&!E.__autoAllocateDepthBuffer)if(G)for(let L=0;L<6;L++)ce(E.__webglFramebuffer[L],A,L);else{let L=A.texture.mipmaps;L&&L.length>0?ce(E.__webglFramebuffer[0],A,0):ce(E.__webglFramebuffer,A,0)}else if(G){E.__webglDepthbuffer=[];for(let L=0;L<6;L++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[L]),E.__webglDepthbuffer[L]===void 0)E.__webglDepthbuffer[L]=i.createRenderbuffer(),ze(E.__webglDepthbuffer[L],A,!1);else{let O=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=E.__webglDepthbuffer[L];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,O,i.RENDERBUFFER,X)}}else{let L=A.texture.mipmaps;if(L&&L.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ze(E.__webglDepthbuffer,A,!1);else{let O=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,O,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(A,E,G){let L=n.get(A);E!==void 0&&ye(L.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&ne(A)}function oe(A){let E=A.texture,G=n.get(A),L=n.get(E);A.addEventListener("dispose",M);let O=A.textures,X=A.isWebGLCubeRenderTarget===!0,W=O.length>1;if(W||(L.__webglTexture===void 0&&(L.__webglTexture=i.createTexture()),L.__version=E.version,o.memory.textures++),X){G.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[Y]=[];for(let Z=0;Z<E.mipmaps.length;Z++)G.__webglFramebuffer[Y][Z]=i.createFramebuffer()}else G.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let Y=0;Y<E.mipmaps.length;Y++)G.__webglFramebuffer[Y]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(W)for(let Y=0,Z=O.length;Y<Z;Y++){let be=n.get(O[Y]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&He(A)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Y=0;Y<O.length;Y++){let Z=O[Y];G.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[Y]);let be=r.convert(Z.format,Z.colorSpace),Ne=r.convert(Z.type),Ie=_(Z.internalFormat,be,Ne,Z.normalized,Z.colorSpace,A.isXRRenderTarget===!0),Ce=ke(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,Ie,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,G.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(G.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,E);for(let Y=0;Y<6;Y++)if(E.mipmaps&&E.mipmaps.length>0)for(let Z=0;Z<E.mipmaps.length;Z++)ye(G.__webglFramebuffer[Y][Z],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Z);else ye(G.__webglFramebuffer[Y],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);g(E)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(W){for(let Y=0,Z=O.length;Y<Z;Y++){let be=O[Y],Ne=n.get(be),Ie=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Ie=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ie,Ne.__webglTexture),Ee(Ie,be),ye(G.__webglFramebuffer,A,be,i.COLOR_ATTACHMENT0+Y,Ie,0),g(be)&&b(Ie)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,L.__webglTexture),Ee(Y,E),E.mipmaps&&E.mipmaps.length>0)for(let Z=0;Z<E.mipmaps.length;Z++)ye(G.__webglFramebuffer[Z],A,E,i.COLOR_ATTACHMENT0,Y,Z);else ye(G.__webglFramebuffer,A,E,i.COLOR_ATTACHMENT0,Y,0);g(E)&&b(Y),t.unbindTexture()}A.depthBuffer&&ne(A)}function fe(A){let E=A.textures;for(let G=0,L=E.length;G<L;G++){let O=E[G];if(g(O)){let X=v(A),W=n.get(O).__webglTexture;t.bindTexture(X,W),b(X),t.unbindTexture()}}}let me=[],Le=[];function Ae(A){if(A.samples>0){if(He(A)===!1){let E=A.textures,G=A.width,L=A.height,O=i.COLOR_BUFFER_BIT,X=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=n.get(A),Y=E.length>1;if(Y)for(let be=0;be<E.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,W.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,W.__webglMultisampledFramebuffer);let Z=A.texture.mipmaps;Z&&Z.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,W.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,W.__webglFramebuffer);for(let be=0;be<E.length;be++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(O|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(O|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,W.__webglColorRenderbuffer[be]);let Ne=n.get(E[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ne,0)}i.blitFramebuffer(0,0,G,L,0,0,G,L,O,i.NEAREST),c===!0&&(me.length=0,Le.length=0,me.push(i.COLOR_ATTACHMENT0+be),A.depthBuffer&&A.resolveDepthBuffer===!1&&(me.push(X),Le.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Le)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let be=0;be<E.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,W.__webglColorRenderbuffer[be]);let Ne=n.get(E[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,W.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,Ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,W.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let E=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function ke(A){return Math.min(s.maxSamples,A.samples)}function He(A){let E=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function N(A){let E=o.render.frame;u.get(A)!==E&&(u.set(A,E),A.update())}function ve(A,E){let G=A.colorSpace,L=A.format,O=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==On&&G!==us&&(ht.getTransfer(G)===St?(L!==ti||O!==Wn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",G)),E}function ue(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.getTextureUnits=z,this.setTextureUnits=D,this.setTexture2D=K,this.setTexture2DArray=se,this.setTexture3D=de,this.setTextureCube=V,this.rebindTextures=re,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function LS(i,e){function t(n,s=us){let r,o=ht.getTransfer(s);if(n===Wn)return i.UNSIGNED_BYTE;if(n===Pl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ll)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ed)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===td)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===jh)return i.BYTE;if(n===Qh)return i.SHORT;if(n===Mo)return i.UNSIGNED_SHORT;if(n===Il)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===ei)return i.FLOAT;if(n===Oi)return i.HALF_FLOAT;if(n===nd)return i.ALPHA;if(n===id)return i.RGB;if(n===ti)return i.RGBA;if(n===Li)return i.DEPTH_COMPONENT;if(n===Ls)return i.DEPTH_STENCIL;if(n===Nl)return i.RED;if(n===Dl)return i.RED_INTEGER;if(n===Ns)return i.RG;if(n===Fl)return i.RG_INTEGER;if(n===Ul)return i.RGBA_INTEGER;if(n===Ua||n===Oa||n===Ba||n===za)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ol||n===Bl||n===zl||n===Hl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kl||n===Gl||n===Vl||n===Wl||n===Xl||n===Ha||n===Yl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===kl||n===Gl)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wl)return r.COMPRESSED_R11_EAC;if(n===Xl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ha)return r.COMPRESSED_RG11_EAC;if(n===Yl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ql||n===Zl||n===Kl||n===$l||n===Jl||n===jl||n===Ql||n===eu||n===tu||n===nu||n===iu||n===su||n===ru||n===ou)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ql)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$l)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ql)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===eu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===iu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===su)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ru)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ou)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===au||n===cu||n===lu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===au)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uu||n===hu||n===ka||n===du)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===uu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===du)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var NS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DS=`
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

}`,Td=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new pa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Bn({vertexShader:NS,fragmentShader:DS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pe(new yt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wd=class extends Ni{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new Td,g={},b=t.getContextAttributes(),v=null,_=null,S=[],y=[],T=new Te,M=null,w=new on;w.viewport=new At;let C=new on;C.viewport=new At;let R=[w,C],P=new Sl,F=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=S[$];return Q===void 0&&(Q=new lo,S[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=S[$];return Q===void 0&&(Q=new lo,S[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=S[$];return Q===void 0&&(Q=new lo,S[$]=Q),Q.getHandSpace()};function D($){let Q=y.indexOf($.inputSource);if(Q===-1)return;let J=S[Q];J!==void 0&&(J.update($.inputSource,$.frame,l||o),J.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",H);for(let $=0;$<S.length;$++){let Q=y[$];Q!==null&&(y[$]=null,S[$].disconnect(Q))}F=null,z=null,m.reset();for(let $ in g)delete g[$];e.setRenderTarget(v),f=null,d=null,h=null,s=null,_=null,Ee.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",B),s.addEventListener("inputsourceschange",H),b.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,ge=null,xe=null;b.depth&&(xe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=b.stencil?Ls:Li,ge=b.stencil?bo:wi);let ye={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(ye),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Jn(d.textureWidth,d.textureHeight,{format:ti,type:Wn,depthTexture:new ns(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let J={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Jn(f.framebufferWidth,f.framebufferHeight,{format:ti,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ee.setContext(s),Ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H($){for(let Q=0;Q<$.removed.length;Q++){let J=$.removed[Q],ge=y.indexOf(J);ge>=0&&(y[ge]=null,S[ge].disconnect(J))}for(let Q=0;Q<$.added.length;Q++){let J=$.added[Q],ge=y.indexOf(J);if(ge===-1){for(let ye=0;ye<S.length;ye++)if(ye>=y.length){y.push(J),ge=ye;break}else if(y[ye]===null){y[ye]=J,ge=ye;break}if(ge===-1)break}let xe=S[ge];xe&&xe.connect(J)}}let K=new U,se=new U;function de($,Q,J){K.setFromMatrixPosition(Q.matrixWorld),se.setFromMatrixPosition(J.matrixWorld);let ge=K.distanceTo(se),xe=Q.projectionMatrix.elements,ye=J.projectionMatrix.elements,ze=xe[14]/(xe[10]-1),ce=xe[14]/(xe[10]+1),ne=(xe[9]+1)/xe[5],re=(xe[9]-1)/xe[5],oe=(xe[8]-1)/xe[0],fe=(ye[8]+1)/ye[0],me=ze*oe,Le=ze*fe,Ae=ge/(-oe+fe),ke=Ae*-oe;if(Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ke),$.translateZ(Ae),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),xe[10]===-1)$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let He=ze+Ae,N=ce+Ae,ve=me-ke,ue=Le+(ge-ke),A=ne*ce/N*He,E=re*ce/N*He;$.projectionMatrix.makePerspective(ve,ue,A,E,He,N),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function V($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let Q=$.near,J=$.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(J=m.depthFar)),P.near=C.near=w.near=Q,P.far=C.far=w.far=J,(F!==P.near||z!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),F=P.near,z=P.far),P.layers.mask=$.layers.mask|6,w.layers.mask=P.layers.mask&-5,C.layers.mask=P.layers.mask&-3;let ge=$.parent,xe=P.cameras;V(P,ge);for(let ye=0;ye<xe.length;ye++)V(xe[ye],ge);xe.length===2?de(P,w,C):P.projectionMatrix.copy(w.projectionMatrix),j($,P,ge)};function j($,Q,J){J===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(J.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=rr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function($){return g[$]};let he=null;function Se($,Q){if(u=Q.getViewerPose(l||o),p=Q,u!==null){let J=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let ge=!1;J.length!==P.cameras.length&&(P.cameras.length=0,ge=!0);for(let ce=0;ce<J.length;ce++){let ne=J[ce],re=null;if(f!==null)re=f.getViewport(ne);else{let fe=h.getViewSubImage(d,ne);re=fe.viewport,ce===0&&(e.setRenderTargetTextures(_,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(_))}let oe=R[ce];oe===void 0&&(oe=new on,oe.layers.enable(ce),oe.viewport=new At,R[ce]=oe),oe.matrix.fromArray(ne.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(ne.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(re.x,re.y,re.width,re.height),ce===0&&(P.matrix.copy(oe.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),ge===!0&&P.cameras.push(oe)}let xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let ce=h.getDepthInformation(J[0]);ce&&ce.isValid&&ce.texture&&m.init(ce,s.renderState)}if(xe&&xe.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let ce=0;ce<J.length;ce++){let ne=J[ce].camera;if(ne){let re=g[ne];re||(re=new pa,g[ne]=re);let oe=h.getCameraImage(ne);re.sourceTexture=oe}}}}for(let J=0;J<S.length;J++){let ge=y[J],xe=S[J];ge!==null&&xe!==void 0&&xe.update(ge,Q,l||o)}he&&he($,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),p=null}let Ee=new u0;Ee.setAnimationLoop(Se),this.setAnimationLoop=function($){he=$},this.dispose=function(){}}},FS=new $e,g0=new rt;g0.set(-1,0,0,0,1,0,0,0,1);function US(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,cd(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,b,v,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,_)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,b,v):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Mn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Mn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let b=e.get(g),v=b.envMap,_=b.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(FS.makeRotationFromEuler(_)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(g0),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,b,v){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*b,m.scale.value=v*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,b){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Mn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let b=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function OS(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,S){let y=S.program;n.uniformBlockBinding(_,y)}function l(_,S){let y=s[_.id];y===void 0&&(m(_),y=u(_),s[_.id]=y,_.addEventListener("dispose",b));let T=S.program;n.updateUBOMapping(_,T);let M=e.render.frame;r[_.id]!==M&&(d(_),r[_.id]=M)}function u(_){let S=h();_.__bindingPointIndex=S;let y=i.createBuffer(),T=_.__size,M=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,T,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,y),y}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let S=s[_.id],y=_.uniforms,T=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let M=0,w=y.length;M<w;M++){let C=y[M];if(Array.isArray(C))for(let R=0,P=C.length;R<P;R++)f(C[R],M,R,T);else f(C,M,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,S,y,T){if(x(_,S,y,T)===!0){let M=_.__offset,w=_.value;if(Array.isArray(w)){let C=0;for(let R=0;R<w.length;R++){let P=w[R],F=g(P);p(P,_.__data,C),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(C+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(w,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,_.__data)}}function p(_,S,y){typeof _=="number"||typeof _=="boolean"?S[0]=_:_.isMatrix3?(S[0]=_.elements[0],S[1]=_.elements[1],S[2]=_.elements[2],S[3]=0,S[4]=_.elements[3],S[5]=_.elements[4],S[6]=_.elements[5],S[7]=0,S[8]=_.elements[6],S[9]=_.elements[7],S[10]=_.elements[8],S[11]=0):ArrayBuffer.isView(_)?S.set(new _.constructor(_.buffer,_.byteOffset,S.length)):_.toArray(S,y)}function x(_,S,y,T){let M=_.value,w=S+"_"+y;if(T[w]===void 0)return typeof M=="number"||typeof M=="boolean"?T[w]=M:ArrayBuffer.isView(M)?T[w]=M.slice():T[w]=M.clone(),!0;{let C=T[w];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return T[w]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(C.equals(M)===!1)return C.copy(M),!0}}return!1}function m(_){let S=_.uniforms,y=0,T=16;for(let w=0,C=S.length;w<C;w++){let R=Array.isArray(S[w])?S[w]:[S[w]];for(let P=0,F=R.length;P<F;P++){let z=R[P],D=Array.isArray(z.value)?z.value:[z.value];for(let B=0,H=D.length;B<H;B++){let K=D[B],se=g(K),de=y%T,V=de%se.boundary,j=de+V;y+=V,j!==0&&T-j<se.storage&&(y+=T-j),z.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=se.storage}}}let M=y%T;return M>0&&(y+=T-M),_.__size=y,_.__cache={},this}function g(_){let S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):We("WebGLRenderer: Unsupported uniform value type.",_),S}function b(_){let S=_.target;S.removeEventListener("dispose",b);let y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function v(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:v}}var BS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bi=null;function zS(){return Bi===null&&(Bi=new ho(BS,16,16,Ns,Oi),Bi.name="DFG_LUT",Bi.minFilter=Zt,Bi.magFilter=Zt,Bi.wrapS=oi,Bi.wrapT=oi,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}var yu=class{constructor(e={}){let{canvas:t=Im(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Wn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=f,m=new Set([Ul,Fl,Dl]),g=new Set([Wn,wi,Mo,bo,Pl,Ll]),b=new Uint32Array(4),v=new Int32Array(4),_=new U,S=null,y=null,T=[],M=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,R=!1,P=null,F=null,z=null,D=null;this._outputColorSpace=tt;let B=0,H=0,K=null,se=-1,de=null,V=new At,j=new At,he=null,Se=new pe(0),Ee=0,$=t.width,Q=t.height,J=1,ge=null,xe=null,ye=new At(0,0,$,Q),ze=new At(0,0,$,Q),ce=!1,ne=new fo,re=!1,oe=!1,fe=new $e,me=new U,Le=new At,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function He(){return K===null?J:1}let N=n;function ve(I,q){return t.getContext(I,q)}try{let I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",ot,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",Gt,!1),N===null){let q="webgl2";if(N=ve(q,I),N===null)throw ve(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(I){throw et("WebGLRenderer: "+I.message),I}let ue,A,E,G,L,O,X,W,Y,Z,be,Ne,Ie,Ce,Ge,qe,_e,k,Me,ae,we,Re,le;function De(){ue=new Y1(N),ue.init(),we=new LS(N,ue),A=new B1(N,ue,e,we),E=new IS(N,ue),A.reversedDepthBuffer&&d&&E.buffers.depth.setReversed(!0),F=N.createFramebuffer(),z=N.createFramebuffer(),D=N.createFramebuffer(),G=new K1(N),L=new gS,O=new PS(N,ue,E,L,A,we,G),X=new X1(C),W=new Qy(N),Re=new U1(N,W),Y=new q1(N,W,G,Re),Z=new J1(N,Y,W,Re,G),k=new $1(N,A,O),Ge=new z1(L),be=new mS(C,X,ue,A,Re,Ge),Ne=new US(C,L),Ie=new _S,Ce=new ES(ue),_e=new F1(C,X,E,Z,p,c),qe=new CS(C,Z,A),le=new OS(N,G,A,E),Me=new O1(N,ue,G),ae=new Z1(N,ue,G),G.programs=be.programs,C.capabilities=A,C.extensions=ue,C.properties=L,C.renderLists=Ie,C.shadowMap=qe,C.state=E,C.info=G}De(),x!==Wn&&(w=new Q1(x,t.width,t.height,a,s,r));let Fe=new wd(C,N);this.xr=Fe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let I=ue.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=ue.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(I){I!==void 0&&(J=I,this.setSize($,Q,!1))},this.getSize=function(I){return I.set($,Q)},this.setSize=function(I,q,ie=!0){if(Fe.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}$=I,Q=q,t.width=Math.floor(I*J),t.height=Math.floor(q*J),ie===!0&&(t.style.width=I+"px",t.style.height=q+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,I,q)},this.getDrawingBufferSize=function(I){return I.set($*J,Q*J).floor()},this.setDrawingBufferSize=function(I,q,ie){$=I,Q=q,J=ie,t.width=Math.floor(I*ie),t.height=Math.floor(q*ie),this.setViewport(0,0,I,q)},this.setEffects=function(I){if(x===Wn){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let q=0;q<I.length;q++)if(I[q].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(V)},this.getViewport=function(I){return I.copy(ye)},this.setViewport=function(I,q,ie,ee){I.isVector4?ye.set(I.x,I.y,I.z,I.w):ye.set(I,q,ie,ee),E.viewport(V.copy(ye).multiplyScalar(J).round())},this.getScissor=function(I){return I.copy(ze)},this.setScissor=function(I,q,ie,ee){I.isVector4?ze.set(I.x,I.y,I.z,I.w):ze.set(I,q,ie,ee),E.scissor(j.copy(ze).multiplyScalar(J).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(I){E.setScissorTest(ce=I)},this.setOpaqueSort=function(I){ge=I},this.setTransparentSort=function(I){xe=I},this.getClearColor=function(I){return I.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(I=!0,q=!0,ie=!0){let ee=0;if(I){let te=!1;if(K!==null){let Oe=K.texture.format;te=m.has(Oe)}if(te){let Oe=K.texture.type,Ve=g.has(Oe),Be=_e.getClearColor(),Ke=_e.getClearAlpha(),Je=Be.r,at=Be.g,ut=Be.b;Ve?(b[0]=Je,b[1]=at,b[2]=ut,b[3]=Ke,N.clearBufferuiv(N.COLOR,0,b)):(v[0]=Je,v[1]=at,v[2]=ut,v[3]=Ke,N.clearBufferiv(N.COLOR,0,v))}else ee|=N.COLOR_BUFFER_BIT}q&&(ee|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ie&&(ee|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&N.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),P=I},this.dispose=function(){t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",Gt,!1),_e.dispose(),Ie.dispose(),Ce.dispose(),L.dispose(),X.dispose(),Z.dispose(),Re.dispose(),le.dispose(),be.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",st),Fe.removeEventListener("sessionend",_t),Lt.stop()};function ot(I){I.preventDefault(),ra("WebGLRenderer: Context Lost."),R=!0}function ct(){ra("WebGLRenderer: Context Restored."),R=!1;let I=G.autoReset,q=qe.enabled,ie=qe.autoUpdate,ee=qe.needsUpdate,te=qe.type;De(),G.autoReset=I,qe.enabled=q,qe.autoUpdate=ie,qe.needsUpdate=ee,qe.type=te}function Gt(I){et("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function fn(I){let q=I.target;q.removeEventListener("dispose",fn),gi(q)}function gi(I){Wi(I),L.remove(I)}function Wi(I){let q=L.get(I).programs;q!==void 0&&(q.forEach(function(ie){be.releaseProgram(ie)}),I.isShaderMaterial&&be.releaseShaderCache(I))}this.renderBufferDirect=function(I,q,ie,ee,te,Oe){q===null&&(q=Ae);let Ve=te.isMesh&&te.matrixWorld.determinantAffine()<0,Be=Ho(I,q,ie,ee,te);E.setMaterial(ee,Ve);let Ke=ie.index,Je=1;if(ee.wireframe===!0){if(Ke=Y.getWireframeAttribute(ie),Ke===void 0)return;Je=2}let at=ie.drawRange,ut=ie.attributes.position,je=at.start*Je,It=(at.start+at.count)*Je;Oe!==null&&(je=Math.max(je,Oe.start*Je),It=Math.min(It,(Oe.start+Oe.count)*Je)),Ke!==null?(je=Math.max(je,0),It=Math.min(It,Ke.count)):ut!=null&&(je=Math.max(je,0),It=Math.min(It,ut.count));let jt=It-je;if(jt<0||jt===1/0)return;Re.setup(te,ee,Be,ie,Ke);let $t,Nt=Me;if(Ke!==null&&($t=W.get(Ke),Nt=ae,Nt.setIndex($t)),te.isMesh)ee.wireframe===!0?(E.setLineWidth(ee.wireframeLinewidth*He()),Nt.setMode(N.LINES)):Nt.setMode(N.TRIANGLES);else if(te.isLine){let wn=ee.linewidth;wn===void 0&&(wn=1),E.setLineWidth(wn*He()),te.isLineSegments?Nt.setMode(N.LINES):te.isLineLoop?Nt.setMode(N.LINE_LOOP):Nt.setMode(N.LINE_STRIP)}else te.isPoints?Nt.setMode(N.POINTS):te.isSprite&&Nt.setMode(N.TRIANGLES);if(te.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))Nt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{let wn=te._multiDrawStarts,Xe=te._multiDrawCounts,Zn=te._multiDrawCount,gt=Ke?W.get(Ke).bytesPerElement:1,si=L.get(ee).currentProgram.getUniforms();for(let Ri=0;Ri<Zn;Ri++)si.setValue(N,"_gl_DrawID",Ri),Nt.render(wn[Ri]/gt,Xe[Ri])}else if(te.isInstancedMesh)Nt.renderInstances(je,jt,te.count);else if(ie.isInstancedBufferGeometry){let wn=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Xe=Math.min(ie.instanceCount,wn);Nt.renderInstances(je,jt,Xe)}else Nt.render(je,jt)};function ln(I,q,ie){I.transparent===!0&&I.side===Pt&&I.forceSinglePass===!1?(I.side=Mn,I.needsUpdate=!0,yn(I,q,ie),I.side=Cn,I.needsUpdate=!0,yn(I,q,ie),I.side=Pt):yn(I,q,ie)}this.compile=function(I,q,ie=null){ie===null&&(ie=I),y=Ce.get(ie),y.init(q),M.push(y),ie.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(y.pushLight(te),te.castShadow&&y.pushShadow(te))}),I!==ie&&I.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(y.pushLight(te),te.castShadow&&y.pushShadow(te))}),y.setupLights();let ee=new Set;return I.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;let Oe=te.material;if(Oe)if(Array.isArray(Oe))for(let Ve=0;Ve<Oe.length;Ve++){let Be=Oe[Ve];ln(Be,ie,te),ee.add(Be)}else ln(Oe,ie,te),ee.add(Oe)}),y=M.pop(),ee},this.compileAsync=function(I,q,ie=null){let ee=this.compile(I,q,ie);return new Promise(te=>{function Oe(){if(ee.forEach(function(Ve){L.get(Ve).currentProgram.isReady()&&ee.delete(Ve)}),ee.size===0){te(I);return}setTimeout(Oe,10)}ue.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let zn=null;function qn(I){zn&&zn(I)}function st(){Lt.stop()}function _t(){Lt.start()}let Lt=new u0;Lt.setAnimationLoop(qn),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(I){zn=I,Fe.setAnimationLoop(I),I===null?Lt.stop():Lt.start()},Fe.addEventListener("sessionstart",st),Fe.addEventListener("sessionend",_t),this.render=function(I,q){if(q!==void 0&&q.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;P!==null&&P.renderStart(I,q);let ie=Fe.enabled===!0&&Fe.isPresenting===!0,ee=w!==null&&(K===null||ie)&&w.begin(C,K);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(q),q=Fe.getCamera()),I.isScene===!0&&I.onBeforeRender(C,I,q,K),y=Ce.get(I,M.length),y.init(q),y.state.textureUnits=O.getTextureUnits(),M.push(y),fe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ne.setFromProjectionMatrix(fe,Mi,q.reversedDepth),oe=this.localClippingEnabled,re=Ge.init(this.clippingPlanes,oe),S=Ie.get(I,T.length),S.init(),T.push(S),Fe.enabled===!0&&Fe.isPresenting===!0){let Ve=C.xr.getDepthSensingMesh();Ve!==null&&bt(Ve,q,-1/0,C.sortObjects)}bt(I,q,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(ge,xe,q.reversedDepth),ke=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,ke&&_e.addToRenderList(S,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&Ge.beginShadows();let te=y.state.shadowsArray;if(qe.render(te,I,q),re===!0&&Ge.endShadows(),(ee&&w.hasRenderPass())===!1){let Ve=S.opaque,Be=S.transmissive;if(y.setupLights(),q.isArrayCamera){let Ke=q.cameras;if(Be.length>0)for(let Je=0,at=Ke.length;Je<at;Je++){let ut=Ke[Je];Wt(Ve,Be,I,ut)}ke&&_e.render(I);for(let Je=0,at=Ke.length;Je<at;Je++){let ut=Ke[Je];Vt(S,I,ut,ut.viewport)}}else Be.length>0&&Wt(Ve,Be,I,q),ke&&_e.render(I),Vt(S,I,q)}K!==null&&H===0&&(O.updateMultisampleRenderTarget(K),O.updateRenderTargetMipmap(K)),ee&&w.end(C),I.isScene===!0&&I.onAfterRender(C,I,q),Re.resetDefaultState(),se=-1,de=null,M.pop(),M.length>0?(y=M[M.length-1],O.setTextureUnits(y.state.textureUnits),re===!0&&Ge.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,T.pop(),T.length>0?S=T[T.length-1]:S=null,P!==null&&P.renderEnd()};function bt(I,q,ie,ee){if(I.visible===!1)return;if(I.layers.test(q.layers)){if(I.isGroup)ie=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(q);else if(I.isLightProbeGrid)y.pushLightProbeGrid(I);else if(I.isLight)y.pushLight(I),I.castShadow&&y.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||ne.intersectsSprite(I)){ee&&Le.setFromMatrixPosition(I.matrixWorld).applyMatrix4(fe);let Ve=Z.update(I),Be=I.material;Be.visible&&S.push(I,Ve,Be,ie,Le.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||ne.intersectsObject(I))){let Ve=Z.update(I),Be=I.material;if(ee&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Le.copy(I.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Le.copy(Ve.boundingSphere.center)),Le.applyMatrix4(I.matrixWorld).applyMatrix4(fe)),Array.isArray(Be)){let Ke=Ve.groups;for(let Je=0,at=Ke.length;Je<at;Je++){let ut=Ke[Je],je=Be[ut.materialIndex];je&&je.visible&&S.push(I,Ve,je,ie,Le.z,ut)}}else Be.visible&&S.push(I,Ve,Be,ie,Le.z,null)}}let Oe=I.children;for(let Ve=0,Be=Oe.length;Ve<Be;Ve++)bt(Oe[Ve],q,ie,ee)}function Vt(I,q,ie,ee){let{opaque:te,transmissive:Oe,transparent:Ve}=I;y.setupLightsView(ie),re===!0&&Ge.setGlobalState(C.clippingPlanes,ie),ee&&E.viewport(V.copy(ee)),te.length>0&&Xt(te,q,ie),Oe.length>0&&Xt(Oe,q,ie),Ve.length>0&&Xt(Ve,q,ie),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Wt(I,q,ie,ee){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[ee.id]===void 0){let je=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[ee.id]=new Jn(1,1,{generateMipmaps:!0,type:je?Oi:Wn,minFilter:Ti,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let Oe=y.state.transmissionRenderTarget[ee.id],Ve=ee.viewport||V;Oe.setSize(Ve.z*C.transmissionResolutionScale,Ve.w*C.transmissionResolutionScale);let Be=C.getRenderTarget(),Ke=C.getActiveCubeFace(),Je=C.getActiveMipmapLevel();C.setRenderTarget(Oe),C.getClearColor(Se),Ee=C.getClearAlpha(),Ee<1&&C.setClearColor(16777215,.5),C.clear(),ke&&_e.render(ie);let at=C.toneMapping;C.toneMapping=Ei;let ut=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),y.setupLightsView(ee),re===!0&&Ge.setGlobalState(C.clippingPlanes,ee),Xt(I,ie,ee),O.updateMultisampleRenderTarget(Oe),O.updateRenderTargetMipmap(Oe),ue.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let It=0,jt=q.length;It<jt;It++){let $t=q[It],{object:Nt,geometry:wn,material:Xe,group:Zn}=$t;if(Xe.side===Pt&&Nt.layers.test(ee.layers)){let gt=Xe.side;Xe.side=Mn,Xe.needsUpdate=!0,Fn(Nt,ie,ee,wn,Xe,Zn),Xe.side=gt,Xe.needsUpdate=!0,je=!0}}je===!0&&(O.updateMultisampleRenderTarget(Oe),O.updateRenderTargetMipmap(Oe))}C.setRenderTarget(Be,Ke,Je),C.setClearColor(Se,Ee),ut!==void 0&&(ee.viewport=ut),C.toneMapping=at}function Xt(I,q,ie){let ee=q.isScene===!0?q.overrideMaterial:null;for(let te=0,Oe=I.length;te<Oe;te++){let Ve=I[te],{object:Be,geometry:Ke,group:Je}=Ve,at=Ve.material;at.allowOverride===!0&&ee!==null&&(at=ee),Be.layers.test(ie.layers)&&Fn(Be,q,ie,Ke,at,Je)}}function Fn(I,q,ie,ee,te,Oe){I.onBeforeRender(C,q,ie,ee,te,Oe),I.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),te.onBeforeRender(C,q,ie,ee,I,Oe),te.transparent===!0&&te.side===Pt&&te.forceSinglePass===!1?(te.side=Mn,te.needsUpdate=!0,C.renderBufferDirect(ie,q,ee,te,I,Oe),te.side=Cn,te.needsUpdate=!0,C.renderBufferDirect(ie,q,ee,te,I,Oe),te.side=Pt):C.renderBufferDirect(ie,q,ee,te,I,Oe),I.onAfterRender(C,q,ie,ee,te,Oe)}function yn(I,q,ie){q.isScene!==!0&&(q=Ae);let ee=L.get(I),te=y.state.lights,Oe=y.state.shadowsArray,Ve=te.state.version,Be=be.getParameters(I,te.state,Oe,q,ie,y.state.lightProbeGridArray),Ke=be.getProgramCacheKey(Be),Je=ee.programs;ee.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?q.environment:null,ee.fog=q.fog;let at=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;ee.envMap=X.get(I.envMap||ee.environment,at),ee.envMapRotation=ee.environment!==null&&I.envMap===null?q.environmentRotation:I.envMapRotation,Je===void 0&&(I.addEventListener("dispose",fn),Je=new Map,ee.programs=Je);let ut=Je.get(Ke);if(ut!==void 0){if(ee.currentProgram===ut&&ee.lightsStateVersion===Ve)return pn(I,Be),ut}else Be.uniforms=be.getUniforms(I),P!==null&&I.isNodeMaterial&&P.build(I,ie,Be),I.onBeforeCompile(Be,C),ut=be.acquireProgram(Be,Ke),Je.set(Ke,ut),ee.uniforms=Be.uniforms;let je=ee.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(je.clippingPlanes=Ge.uniform),pn(I,Be),ee.needsLights=qu(I),ee.lightsStateVersion=Ve,ee.needsLights&&(je.ambientLightColor.value=te.state.ambient,je.lightProbe.value=te.state.probe,je.directionalLights.value=te.state.directional,je.directionalLightShadows.value=te.state.directionalShadow,je.spotLights.value=te.state.spot,je.spotLightShadows.value=te.state.spotShadow,je.rectAreaLights.value=te.state.rectArea,je.ltc_1.value=te.state.rectAreaLTC1,je.ltc_2.value=te.state.rectAreaLTC2,je.pointLights.value=te.state.point,je.pointLightShadows.value=te.state.pointShadow,je.hemisphereLights.value=te.state.hemi,je.directionalShadowMatrix.value=te.state.directionalShadowMatrix,je.spotLightMatrix.value=te.state.spotLightMatrix,je.spotLightMap.value=te.state.spotLightMap,je.pointShadowMatrix.value=te.state.pointShadowMatrix),ee.lightProbeGrid=y.state.lightProbeGridArray.length>0,ee.currentProgram=ut,ee.uniformsList=null,ut}function vn(I){if(I.uniformsList===null){let q=I.currentProgram.getUniforms();I.uniformsList=To.seqWithValue(q.seq,I.uniforms)}return I.uniformsList}function pn(I,q){let ie=L.get(I);ie.outputColorSpace=q.outputColorSpace,ie.batching=q.batching,ie.batchingColor=q.batchingColor,ie.instancing=q.instancing,ie.instancingColor=q.instancingColor,ie.instancingMorph=q.instancingMorph,ie.skinning=q.skinning,ie.morphTargets=q.morphTargets,ie.morphNormals=q.morphNormals,ie.morphColors=q.morphColors,ie.morphTargetsCount=q.morphTargetsCount,ie.numClippingPlanes=q.numClippingPlanes,ie.numIntersection=q.numClipIntersection,ie.vertexAlphas=q.vertexAlphas,ie.vertexTangents=q.vertexTangents,ie.toneMapping=q.toneMapping}function Xi(I,q){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;_.setFromMatrixPosition(q.matrixWorld);for(let ie=0,ee=I.length;ie<ee;ie++){let te=I[ie];if(te.texture!==null&&te.boundingBox.containsPoint(_))return te}return null}function Ho(I,q,ie,ee,te){q.isScene!==!0&&(q=Ae),O.resetTextureUnits();let Oe=q.fog,Ve=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?q.environment:null,Be=K===null?C.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ht.workingColorSpace,Ke=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,Je=X.get(ee.envMap||Ve,Ke),at=ee.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,ut=!!ie.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),je=!!ie.morphAttributes.position,It=!!ie.morphAttributes.normal,jt=!!ie.morphAttributes.color,$t=Ei;ee.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&($t=C.toneMapping);let Nt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,wn=Nt!==void 0?Nt.length:0,Xe=L.get(ee),Zn=y.state.lights;if(re===!0&&(oe===!0||I!==de)){let zt=I===de&&ee.id===se;Ge.setState(ee,I,zt)}let gt=!1;ee.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Zn.state.version||Xe.outputColorSpace!==Be||te.isBatchedMesh&&Xe.batching===!1||!te.isBatchedMesh&&Xe.batching===!0||te.isBatchedMesh&&Xe.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&Xe.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&Xe.instancing===!1||!te.isInstancedMesh&&Xe.instancing===!0||te.isSkinnedMesh&&Xe.skinning===!1||!te.isSkinnedMesh&&Xe.skinning===!0||te.isInstancedMesh&&Xe.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Xe.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Xe.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Xe.instancingMorph===!1&&te.morphTexture!==null||Xe.envMap!==Je||ee.fog===!0&&Xe.fog!==Oe||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Ge.numPlanes||Xe.numIntersection!==Ge.numIntersection)||Xe.vertexAlphas!==at||Xe.vertexTangents!==ut||Xe.morphTargets!==je||Xe.morphNormals!==It||Xe.morphColors!==jt||Xe.toneMapping!==$t||Xe.morphTargetsCount!==wn||!!Xe.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,Xe.__version=ee.version);let si=Xe.currentProgram;gt===!0&&(si=yn(ee,q,te),P&&ee.isNodeMaterial&&P.onUpdateProgram(ee,si,Xe));let Ri=!1,fs=!1,Or=!1,Dt=si.getUniforms(),Qt=Xe.uniforms;if(E.useProgram(si.program)&&(Ri=!0,fs=!0,Or=!0),ee.id!==se&&(se=ee.id,fs=!0),Xe.needsLights){let zt=Xi(y.state.lightProbeGridArray,te);Xe.lightProbeGrid!==zt&&(Xe.lightProbeGrid=zt,fs=!0)}if(Ri||de!==I){E.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Dt.setValue(N,"projectionMatrix",I.projectionMatrix),Dt.setValue(N,"viewMatrix",I.matrixWorldInverse);let ms=Dt.map.cameraPosition;ms!==void 0&&ms.setValue(N,me.setFromMatrixPosition(I.matrixWorld)),A.logarithmicDepthBuffer&&Dt.setValue(N,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Dt.setValue(N,"isOrthographic",I.isOrthographicCamera===!0),de!==I&&(de=I,fs=!0,Or=!0)}if(Xe.needsLights&&(Zn.state.directionalShadowMap.length>0&&Dt.setValue(N,"directionalShadowMap",Zn.state.directionalShadowMap,O),Zn.state.spotShadowMap.length>0&&Dt.setValue(N,"spotShadowMap",Zn.state.spotShadowMap,O),Zn.state.pointShadowMap.length>0&&Dt.setValue(N,"pointShadowMap",Zn.state.pointShadowMap,O)),te.isSkinnedMesh){Dt.setOptional(N,te,"bindMatrix"),Dt.setOptional(N,te,"bindMatrixInverse");let zt=te.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),Dt.setValue(N,"boneTexture",zt.boneTexture,O))}te.isBatchedMesh&&(Dt.setOptional(N,te,"batchingTexture"),Dt.setValue(N,"batchingTexture",te._matricesTexture,O),Dt.setOptional(N,te,"batchingIdTexture"),Dt.setValue(N,"batchingIdTexture",te._indirectTexture,O),Dt.setOptional(N,te,"batchingColorTexture"),te._colorsTexture!==null&&Dt.setValue(N,"batchingColorTexture",te._colorsTexture,O));let ps=ie.morphAttributes;if((ps.position!==void 0||ps.normal!==void 0||ps.color!==void 0)&&k.update(te,ie,si),(fs||Xe.receiveShadow!==te.receiveShadow)&&(Xe.receiveShadow=te.receiveShadow,Dt.setValue(N,"receiveShadow",te.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&q.environment!==null&&(Qt.envMapIntensity.value=q.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=zS()),fs){if(Dt.setValue(N,"toneMappingExposure",C.toneMappingExposure),Xe.needsLights&&ko(Qt,Or),Oe&&ee.fog===!0&&Ne.refreshFogUniforms(Qt,Oe),Ne.refreshMaterialUniforms(Qt,ee,J,Q,y.state.transmissionRenderTarget[I.id]),Xe.needsLights&&Xe.lightProbeGrid){let zt=Xe.lightProbeGrid;Qt.probesSH.value=zt.texture,Qt.probesMin.value.copy(zt.boundingBox.min),Qt.probesMax.value.copy(zt.boundingBox.max),Qt.probesResolution.value.copy(zt.resolution)}To.upload(N,vn(Xe),Qt,O)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(To.upload(N,vn(Xe),Qt,O),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Dt.setValue(N,"center",te.center),Dt.setValue(N,"modelViewMatrix",te.modelViewMatrix),Dt.setValue(N,"normalMatrix",te.normalMatrix),Dt.setValue(N,"modelMatrix",te.matrixWorld),ee.uniformsGroups!==void 0){let zt=ee.uniformsGroups;for(let ms=0,Br=zt.length;ms<Br;ms++){let rp=zt[ms];le.update(rp,si),le.bind(rp,si)}}return si}function ko(I,q){I.ambientLightColor.needsUpdate=q,I.lightProbe.needsUpdate=q,I.directionalLights.needsUpdate=q,I.directionalLightShadows.needsUpdate=q,I.pointLights.needsUpdate=q,I.pointLightShadows.needsUpdate=q,I.spotLights.needsUpdate=q,I.spotLightShadows.needsUpdate=q,I.rectAreaLights.needsUpdate=q,I.hemisphereLights.needsUpdate=q}function qu(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(I,q,ie){let ee=L.get(I);ee.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),L.get(I.texture).__webglTexture=q,L.get(I.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:ie,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,q){let ie=L.get(I);ie.__webglFramebuffer=q,ie.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(I,q=0,ie=0){K=I,B=q,H=ie;let ee=null,te=!1,Oe=!1;if(I){let Be=L.get(I);if(Be.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(N.FRAMEBUFFER,Be.__webglFramebuffer),V.copy(I.viewport),j.copy(I.scissor),he=I.scissorTest,E.viewport(V),E.scissor(j),E.setScissorTest(he),se=-1;return}else if(Be.__webglFramebuffer===void 0)O.setupRenderTarget(I);else if(Be.__hasExternalTextures)O.rebindTextures(I,L.get(I.texture).__webglTexture,L.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let at=I.depthTexture;if(Be.__boundDepthTexture!==at){if(at!==null&&L.has(at)&&(I.width!==at.image.width||I.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(I)}}let Ke=I.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Oe=!0);let Je=L.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Je[q])?ee=Je[q][ie]:ee=Je[q],te=!0):I.samples>0&&O.useMultisampledRTT(I)===!1?ee=L.get(I).__webglMultisampledFramebuffer:Array.isArray(Je)?ee=Je[ie]:ee=Je,V.copy(I.viewport),j.copy(I.scissor),he=I.scissorTest}else V.copy(ye).multiplyScalar(J).floor(),j.copy(ze).multiplyScalar(J).floor(),he=ce;if(ie!==0&&(ee=F),E.bindFramebuffer(N.FRAMEBUFFER,ee)&&E.drawBuffers(I,ee),E.viewport(V),E.scissor(j),E.setScissorTest(he),te){let Be=L.get(I.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+q,Be.__webglTexture,ie)}else if(Oe){let Be=q;for(let Ke=0;Ke<I.textures.length;Ke++){let Je=L.get(I.textures[Ke]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ke,Je.__webglTexture,ie,Be)}}else if(I!==null&&ie!==0){let Be=L.get(I.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Be.__webglTexture,ie)}se=-1},this.readRenderTargetPixels=function(I,q,ie,ee,te,Oe,Ve,Be=0){if(!(I&&I.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=L.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ke=Ke[Ve]),Ke){E.bindFramebuffer(N.FRAMEBUFFER,Ke);try{let Je=I.textures[Be],at=Je.format,ut=Je.type;if(I.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Be),!A.textureFormatReadable(at)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!A.textureTypeReadable(ut)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=I.width-ee&&ie>=0&&ie<=I.height-te&&N.readPixels(q,ie,ee,te,we.convert(at),we.convert(ut),Oe)}finally{let Je=K!==null?L.get(K).__webglFramebuffer:null;E.bindFramebuffer(N.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(I,q,ie,ee,te,Oe,Ve,Be=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=L.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ke=Ke[Ve]),Ke)if(q>=0&&q<=I.width-ee&&ie>=0&&ie<=I.height-te){E.bindFramebuffer(N.FRAMEBUFFER,Ke);let Je=I.textures[Be],at=Je.format,ut=Je.type;if(I.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Be),!A.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!A.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let je=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,je),N.bufferData(N.PIXEL_PACK_BUFFER,Oe.byteLength,N.STREAM_READ),N.readPixels(q,ie,ee,te,we.convert(at),we.convert(ut),0);let It=K!==null?L.get(K).__webglFramebuffer:null;E.bindFramebuffer(N.FRAMEBUFFER,It);let jt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Lm(N,jt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,je),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Oe),N.deleteBuffer(je),N.deleteSync(jt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,q=null,ie=0){let ee=Math.pow(2,-ie),te=Math.floor(I.image.width*ee),Oe=Math.floor(I.image.height*ee),Ve=q!==null?q.x:0,Be=q!==null?q.y:0;O.setTexture2D(I,0),N.copyTexSubImage2D(N.TEXTURE_2D,ie,0,0,Ve,Be,te,Oe),E.unbindTexture()},this.copyTextureToTexture=function(I,q,ie=null,ee=null,te=0,Oe=0){let Ve,Be,Ke,Je,at,ut,je,It,jt,$t=I.isCompressedTexture?I.mipmaps[Oe]:I.image;if(ie!==null)Ve=ie.max.x-ie.min.x,Be=ie.max.y-ie.min.y,Ke=ie.isBox3?ie.max.z-ie.min.z:1,Je=ie.min.x,at=ie.min.y,ut=ie.isBox3?ie.min.z:0;else{let Qt=Math.pow(2,-te);Ve=Math.floor($t.width*Qt),Be=Math.floor($t.height*Qt),I.isDataArrayTexture?Ke=$t.depth:I.isData3DTexture?Ke=Math.floor($t.depth*Qt):Ke=1,Je=0,at=0,ut=0}ee!==null?(je=ee.x,It=ee.y,jt=ee.z):(je=0,It=0,jt=0);let Nt=we.convert(q.format),wn=we.convert(q.type),Xe;q.isData3DTexture?(O.setTexture3D(q,0),Xe=N.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(O.setTexture2DArray(q,0),Xe=N.TEXTURE_2D_ARRAY):(O.setTexture2D(q,0),Xe=N.TEXTURE_2D),E.activeTexture(N.TEXTURE0),E.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,q.flipY),E.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),E.pixelStorei(N.UNPACK_ALIGNMENT,q.unpackAlignment);let Zn=E.getParameter(N.UNPACK_ROW_LENGTH),gt=E.getParameter(N.UNPACK_IMAGE_HEIGHT),si=E.getParameter(N.UNPACK_SKIP_PIXELS),Ri=E.getParameter(N.UNPACK_SKIP_ROWS),fs=E.getParameter(N.UNPACK_SKIP_IMAGES);E.pixelStorei(N.UNPACK_ROW_LENGTH,$t.width),E.pixelStorei(N.UNPACK_IMAGE_HEIGHT,$t.height),E.pixelStorei(N.UNPACK_SKIP_PIXELS,Je),E.pixelStorei(N.UNPACK_SKIP_ROWS,at),E.pixelStorei(N.UNPACK_SKIP_IMAGES,ut);let Or=I.isDataArrayTexture||I.isData3DTexture,Dt=q.isDataArrayTexture||q.isData3DTexture;if(I.isDepthTexture){let Qt=L.get(I),ps=L.get(q),zt=L.get(Qt.__renderTarget),ms=L.get(ps.__renderTarget);E.bindFramebuffer(N.READ_FRAMEBUFFER,zt.__webglFramebuffer),E.bindFramebuffer(N.DRAW_FRAMEBUFFER,ms.__webglFramebuffer);for(let Br=0;Br<Ke;Br++)Or&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,L.get(I).__webglTexture,te,ut+Br),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,L.get(q).__webglTexture,Oe,jt+Br)),N.blitFramebuffer(Je,at,Ve,Be,je,It,Ve,Be,N.DEPTH_BUFFER_BIT,N.NEAREST);E.bindFramebuffer(N.READ_FRAMEBUFFER,null),E.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(te!==0||I.isRenderTargetTexture||L.has(I)){let Qt=L.get(I),ps=L.get(q);E.bindFramebuffer(N.READ_FRAMEBUFFER,z),E.bindFramebuffer(N.DRAW_FRAMEBUFFER,D);for(let zt=0;zt<Ke;zt++)Or?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Qt.__webglTexture,te,ut+zt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Qt.__webglTexture,te),Dt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ps.__webglTexture,Oe,jt+zt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ps.__webglTexture,Oe),te!==0?N.blitFramebuffer(Je,at,Ve,Be,je,It,Ve,Be,N.COLOR_BUFFER_BIT,N.NEAREST):Dt?N.copyTexSubImage3D(Xe,Oe,je,It,jt+zt,Je,at,Ve,Be):N.copyTexSubImage2D(Xe,Oe,je,It,Je,at,Ve,Be);E.bindFramebuffer(N.READ_FRAMEBUFFER,null),E.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Dt?I.isDataTexture||I.isData3DTexture?N.texSubImage3D(Xe,Oe,je,It,jt,Ve,Be,Ke,Nt,wn,$t.data):q.isCompressedArrayTexture?N.compressedTexSubImage3D(Xe,Oe,je,It,jt,Ve,Be,Ke,Nt,$t.data):N.texSubImage3D(Xe,Oe,je,It,jt,Ve,Be,Ke,Nt,wn,$t):I.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Oe,je,It,Ve,Be,Nt,wn,$t.data):I.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Oe,je,It,$t.width,$t.height,Nt,$t.data):N.texSubImage2D(N.TEXTURE_2D,Oe,je,It,Ve,Be,Nt,wn,$t);E.pixelStorei(N.UNPACK_ROW_LENGTH,Zn),E.pixelStorei(N.UNPACK_IMAGE_HEIGHT,gt),E.pixelStorei(N.UNPACK_SKIP_PIXELS,si),E.pixelStorei(N.UNPACK_SKIP_ROWS,Ri),E.pixelStorei(N.UNPACK_SKIP_IMAGES,fs),Oe===0&&q.generateMipmaps&&N.generateMipmap(Xe),E.unbindTexture()},this.initRenderTarget=function(I){L.get(I).__webglFramebuffer===void 0&&O.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?O.setTextureCube(I,0):I.isData3DTexture?O.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?O.setTexture2DArray(I,0):O.setTexture2D(I,0),E.unbindTexture()},this.resetState=function(){B=0,H=0,K=null,E.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};async function x0(){if(typeof window<"u"&&window.MCGROT_ASSETS)return window.MCGROT_ASSETS;let[i,e,t,n,s]=await Promise.all([fetch("assets/manifest.json").then(a=>a.json()),fetch("assets/leith.json").then(a=>a.json()),fetch("assets/catalog.json").then(a=>a.ok?a.json():null).catch(()=>null),fetch("assets/shopfronts/manifest.json").then(a=>a.ok?a.json():null).catch(()=>null),fetch("assets/shopfronts/atlas-pages.json").then(a=>a.ok?a.json():null).catch(()=>null)]),r=await fetch("assets/comic-lines.json").then(a=>a.ok?a.json():null).catch(()=>null),o=await fetch("assets/readings.json").then(a=>a.ok?a.json():null).catch(()=>null);return{manifest:i,leith:e,catalog:t,facadeManifest:n,facadeAtlas:s,comicLines:r,readings:o,images:null,audio:null}}function xn(i,e){if(i){if(i.images&&i.images[e])return i.images[e];if(i.audio&&i.audio[e])return i.audio[e];if(i.models&&i.models[e])return i.models[e]}return`assets/${e}`}function it(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new pt,l=0;for(let u=0;u<i.length;++u){let h=i[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0,h=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+u);u+=i[d].attributes.position.count}c.setIndex(h)}for(let u in r){let h=_0(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][d]);let p=_0(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(p)}}}return c}function _0(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new wt(o,t,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let h=c/t;for(let d=0,f=u.count;d<f;d++)for(let p=0;p<t;p++){let x=u.getComponent(d,p);a.setComponent(d+h,p,x)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function Ad(i,e){if(e===sd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===So||e===Ga){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===So)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var qa=(()=>{let i=6221086;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),M0=8,Cd=2.4,y0=1.435,bu=.075,v0=.09,HS=620,kS=90,GS=34,VS=.04;function hi(i,e,t){let n=Math.imul(i,374761393)^Math.imul(e,668265263)^Math.imul(t,2246822519);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function WS(i,e,t,n){let s=Math.floor(i),r=Math.floor(e),o=i-s,a=e-r,c=o*o*(3-2*o),l=a*a*(3-2*a),u=(x,m)=>hi((x%t+t)%t,(m%t+t)%t,n),h=u(s,r),d=u(s+1,r),f=u(s,r+1),p=u(s+1,r+1);return h+(d-h)*c+(f+(p-f)*c-(h+(d-h)*c))*l}function cn(i,e,t,n,s){let r=0,o=.5,a=1;for(let c=0;c<n;c++)r+=o*WS(i*a,e*a,t*a,s+c*17),a*=2,o*=.5;return r}function Mr(i,e){let t=new xt(i);return t.wrapS=t.wrapT=ci,t.colorSpace=tt,t.anisotropy=16,e&&t.repeat.set(e[0],e[1]),t}function b0(){let t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d"),s=n.createImageData(512,512),r=s.data;for(let o=0;o<512;o++)for(let a=0;a<512;a++){let c=a/512*8,l=o/512*8,u=44,h=45,d=41,f=cn(c,l,8,4,1)-.5;u+=f*26,h+=f*26,d+=f*22;let p=cn(c*.5,l*.5,Math.max(1,4),2,7);if(p>.6){let S=Math.min(1,(p-.6)*6);u+=(26-u)*.55*S,h+=(26-h)*.55*S,d+=(25-d)*.55*S}let x=hi(a,o,99),m=x>.86?(x-.86)*300:x<.1?-x*90:0;u+=m,h+=m,d+=m*.9;let g=c*1.6+cn(c*3,l*3,32,2,55)*1.4,b=l*1.6+cn(c*3+9,l*3+9,32,2,71)*1.4,v=Math.abs(cn(g,b,16,3,21)-.5);if(v<.012){let S=1-v/.012;u-=15*S,h-=15*S,d-=14*S}let _=(o*512+a)*4;r[_]=Math.max(0,Math.min(255,u)),r[_+1]=Math.max(0,Math.min(255,h)),r[_+2]=Math.max(0,Math.min(255,d)),r[_+3]=255}return n.putImageData(s,0,0),Mr(t)}function S0(){let n=document.createElement("canvas");n.width=n.height=512;let s=n.getContext("2d"),r=s.createImageData(512,512),o=r.data,a=512/4,c=3;for(let l=0;l<512;l++)for(let u=0;u<512;u++){let h=Math.floor(u/a),d=Math.floor(l/a),f=u-h*a,p=l-d*a,x=f<c||p<c||f>a-c||p>a-c,m=(hi(h,d,5)-.5)*18,g=78+m,b=77+m,v=71+m,_=u/512*8,S=l/512*8,y=cn(_,S,8,4,3)-.5;g+=y*34,b+=y*34,v+=y*30,x&&(g*=.52,b*=.56,v*=.48);let T=hi(u,l,41),M=T>.9?(T-.9)*160:0;g+=M,b+=M,v+=M;let w=(l*512+u)*4;o[w]=Math.max(0,Math.min(255,g)),o[w+1]=Math.max(0,Math.min(255,b)),o[w+2]=Math.max(0,Math.min(255,v)),o[w+3]=255}return s.putImageData(r,0,0),Mr(n)}function E0(i,e){let n=document.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d"),r=s.createImageData(256,256),o=r.data,a=256/2;for(let l=0;l<256;l++)for(let u=0;u<256;u++){let h=(u-a)/a,d=(l-a)/a,f=Math.atan2(d,h),p=Math.hypot(h,d),x=.7+.26*cn(Math.cos(f)*2+4,Math.sin(f)*2+4,8,3,i),[m,g,b,v]=e(p/x,u,l),_=(l*256+u)*4;o[_]=Math.max(0,Math.min(255,m)),o[_+1]=Math.max(0,Math.min(255,g)),o[_+2]=Math.max(0,Math.min(255,b)),o[_+3]=Math.max(0,Math.min(255,v))}s.putImageData(r,0,0);let c=new xt(n);return c.colorSpace=tt,c.anisotropy=16,c}function Rd(i,e,t){return[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t]}function XS(){let i=[10,10,9],e=[40,39,35],t=[104,100,88];return E0(11,(n,s,r)=>{let o=hi(s,r,63),a;n<.72?a=Rd(i,e,Za(0,.72,n)):(a=Rd(e,t,Za(.72,.97,n)),a=a.map(l=>l+(o-.5)*26));let c=(1-Za(.9,1,n))*255;return[a[0],a[1],a[2],c]})}function YS(){let i=[104,110,96],e=[52,54,48];return E0(23,t=>{let n=Rd(i,e,Za(.35,1,t)),s=(1-Za(.86,1,t))*255;return[n[0],n[1],n[2],s]})}function Za(i,e,t){let n=Math.max(0,Math.min(1,(t-i)/(e-i||1e-6)));return n*n*(3-2*n)}var Id=26;function T0(){let t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d"),s=n.createImageData(512,512),r=s.data;for(let o=0;o<512;o++)for(let a=0;a<512;a++){let c=a/512*8,l=o/512*8,u=62,h=52,d=36,f=cn(c,l,8,4,131)-.5;u+=f*30,h+=f*26,d+=f*20;let p=cn(c*.9+3,l*.9+3,8,3,137);if(p>.56){let v=Math.min(1,(p-.56)*5);u+=(52-u)*.6*v,h+=(60-h)*.6*v,d+=(34-d)*.6*v}let x=cn(c*.6+11,l*.6+11,8,3,149);if(x<.42){let v=Math.min(1,(.42-x)*4);u*=1-.28*v,h*=1-.26*v,d*=1-.22*v}let m=hi(a,o,151),g=m>.9?(m-.9)*220:m<.07?-m*120:0;u+=g,h+=g*.95,d+=g*.8;let b=(o*512+a)*4;r[b]=Math.max(0,Math.min(255,u)),r[b+1]=Math.max(0,Math.min(255,h)),r[b+2]=Math.max(0,Math.min(255,d)),r[b+3]=255}return n.putImageData(s,0,0),Mr(t)}function w0(){let t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d"),s=n.createImageData(512,512),r=s.data;for(let a=0;a<512;a++)for(let c=0;c<512;c++){let l=c/512*22,u=a/512*22,h=40,d=47,f=26,p=cn(l,u,22,4,211)-.5;h+=p*30,d+=p*36,f+=p*20;let x=cn(l*.55+5,u*.55+5,22,3,223);if(x>.5){let C=Math.min(1,(x-.5)*5);h+=(24-h)*.8*C,d+=(33-d)*.8*C,f+=(17-f)*.8*C}let m=cn(l*.7+17,u*.7+2,22,3,239);if(m>.62){let C=Math.min(1,(m-.62)*6);h+=(66-h)*.55*C,d+=(58-d)*.55*C,f+=(36-f)*.55*C}let g=Math.abs(cn(l*.5+9,u*2.2,22,2,227)-.5);if(g<.035){let C=1-g/.035;h+=(74-h)*.5*C,d+=(64-d)*.5*C,f+=(44-f)*.5*C}let b=hi(c,a,229),v=b>.88?(b-.88)*160:0;h+=v*.7,d+=v,f+=v*.5;let _=Math.min(c,511-c)/512,S=Math.min(a,511-a)/512,y=Math.min(_,S)/.14,T=cn(l*2,u*2,44,2,233)*.5,M=Math.max(0,Math.min(1,y-T)),w=(a*512+c)*4;r[w]=Math.max(0,Math.min(255,h)),r[w+1]=Math.max(0,Math.min(255,d)),r[w+2]=Math.max(0,Math.min(255,f)),r[w+3]=Math.round(M*255)}n.putImageData(s,0,0);let o=new xt(t);return o.colorSpace=tt,o.anisotropy=16,o}function A0(i,e){let t=i.streetLine||[];if(t.length<2)return{group:new nt};let n=i.groundHeight||(()=>0),s=new nt;return e.add(s),qS(t,s,n),ZS(t,s,n),{group:s}}function Ka(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0;return{point:[s+c*h,r+l*h],tangent:[c/(u||1),l/(u||1)]}}t+=u}return null}function R0(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function qS(i,e,t){let n=Math.min(HS,R0(i)),s=3,r=[],o=[[-bu/2,0],[-bu/2,v0],[bu/2,v0],[bu/2,0]];for(let l of[-1,1]){let u=[],h=[],d=0;for(let x=0;x<=n;x+=s){let m=Ka(i,x);if(!m)break;let[g,b]=m.tangent,v=-b,_=g,S=m.point[0]+v*l*(y0/2),y=m.point[1]+_*l*(y0/2),T=t(S,y);for(let[M,w]of o)u.push(S+v*M,T+w,y+_*M);d++}if(d<2)continue;let f=o.length;for(let x=0;x<d-1;x++)for(let m=0;m<f-1;m++){let g=x*f+m,b=x*f+m+1,v=(x+1)*f+m,_=(x+1)*f+m+1;h.push(g,v,b,b,v,_)}let p=new pt;p.setAttribute("position",new Qe(u,3)),p.setIndex(h),p.computeVertexNormals(),r.push(p)}if(!r.length)return;let a=it(r,!1),c=new Ye({color:4142124,side:Pt});e.add(new Pe(a,c))}function ZS(i,e,t){let n=R0(i),s=XS(),r=YS(),o=(a,c,l,u,h,d)=>{let f=[];for(let x=0;x<c;x++){let m=20+qa()*Math.max(1,n-40),g=Ka(i,m);if(!g)continue;let[b,v]=g.tangent,_=-v,S=b,y=(qa()*2-1)*l,T=g.point[0]+_*y,M=g.point[1]+S*y,w=u+qa()*(h-u),C=new yt(w,w*(.6+qa()*.7));C.rotateX(-Math.PI/2),C.rotateY(qa()*Math.PI*2),C.translate(T,t(T,M)+VS,M),f.push(C)}if(!f.length)return;let p=new Ye({map:a,transparent:!0,opacity:d,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});e.add(new Pe(it(f,!1),p))};o(s,kS,6.2,.7,2.4,.92),o(r,GS,6.2,1.2,3.6,.5)}var KS=2;function C0(i){let e=[],t=[],n=[];function s(h){for(let d=0;d<e.length;d++){let f=e[d].x-h[0],p=e[d].z-h[1];if(Math.hypot(f,p)<KS)return d}return e.push({x:h[0],z:h[1]}),e.length-1}i.forEach((h,d)=>{if(h.length<2)return;let f=s(h[0]),p=s(h[h.length-1]);t[d]=[f,p],(n[f]??=[]).push({segIdx:d,otherNode:p}),(n[p]??=[]).push({segIdx:d,otherNode:f})});let r=new Set;function o(h){let d=[[e[h].x,e[h].z]],f=h;for(;;){let p=(n[f]||[]).filter(_=>!r.has(_.segIdx));if(p.length===0)break;let{segIdx:x,otherNode:m}=p[0];r.add(x);let g=i[x],[b]=t[x],v=b===f?g:[...g].reverse();for(let _=1;_<v.length;_++)d.push(v[_]);f=m}return d}function a(h){let d=0;for(let f=1;f<h.length;f++)d+=Math.hypot(h[f][0]-h[f-1][0],h[f][1]-h[f-1][1]);return d}let c=[],l=e.map((h,d)=>d).filter(h=>(n[h]||[]).length!==2);for(let h of l){let d=r.size,f=o(h);r.size>d&&c.push(f)}for(let h=0;h<e.length;h++)(n[h]||[]).some(f=>!r.has(f.segIdx))&&c.push(o(h));c.sort((h,d)=>a(d)-a(h));let u=c[0]||[];return u.length>1&&u[0][1]>u[u.length-1][1]&&u.reverse(),u}function I0(i){return function(t,n){let s=null,r=1/0,o=null;for(let a=0;a<i.length-1;a++){let[c,l]=i[a],[u,h]=i[a+1],d=u-c,f=h-l,p=d*d+f*f,x=p>0?((t-c)*d+(n-l)*f)/p:0;x=Math.max(0,Math.min(1,x));let m=c+x*d,g=l+x*f,b=Math.hypot(t-m,n-g);if(b<r){r=b,s=[m,g];let v=Math.sqrt(p);o=v>0?[d/v,f/v]:[0,1]}}return{point:s,distance:r,tangent:o}}}function Fs(i,e,t){let n=1/0,s=0,r=0;for(let o=0;o<t.length-1;o++){let[a,c]=t[o],[l,u]=t[o+1],h=l-a,d=u-c,f=h*h+d*d,p=Math.sqrt(f),x=f>0?((i-a)*h+(e-c)*d)/f:0;x=Math.max(0,Math.min(1,x));let m=Math.hypot(i-(a+x*h),e-(c+x*d));m<n&&(n=m,s=r+x*p),r+=p}return s}function Pd(i,e){let t=0,n=0;for(let o=0;o<i.length-1;o++){let[a,c]=i[o],[l,u]=i[o+1],h=Math.hypot(l-a,u-c);if(n=t,t+=h,e<=t||o===i.length-2){let d=h>0?Math.max(0,Math.min(1,(e-n)/h)):0,f=a+(l-a)*d,p=c+(u-c)*d,x=h>0?[(l-a)/h,(u-c)/h]:[0,1];return{point:[f,p],tangent:x}}}let[s,r]=i[0]||[0,0];return{point:[s,r],tangent:[0,1]}}function Ao(i,e){let t=i.footprint,n=[];if(!t||t.length<3||!e)return n;let s=0,r=0;for(let a of t)s+=a[0],r+=a[1];s/=t.length,r/=t.length;let o=[];for(let a=0;a<t.length;a++){let c=t[a],l=t[(a+1)%t.length],u=l[0]-c[0],h=l[1]-c[1],d=Math.hypot(u,h);if(d<.25)continue;let f=(c[0]+l[0])/2,p=(c[1]+l[1])/2,x=e(f,p);if(!x||!x.point)continue;let m=e(c[0],c[1]),g=e(l[0],l[1]);if(Math.min(x.distance,m?m.distance:1/0,g?g.distance:1/0)>30)continue;let v=1/d,_=-h*v,S=u*v;_*(f-s)+S*(p-r)<0&&(_=-_,S=-S);let y=x.point[0]-f,T=x.point[1]-p,M=Math.hypot(y,T)||1,w=(_*y+S*T)/M;if(w<-.3||!(w>=.35))continue;let R=!1;x.tangent&&d<=9&&(R=Math.abs(u*v*x.tangent[0]+h*v*x.tangent[1])<.88),o.push({i:a,ax:c[0],az:c[1],bx:l[0],bz:l[1],dirx:u*v,dirz:h*v,len:d,isChamfer:R})}for(let a of o){let c=n[n.length-1];c&&a.i===c.endEdge+1&&c.dirx*a.dirx+c.dirz*a.dirz>.985?(c.bx=a.bx,c.bz=a.bz,c.len+=a.len,c.endEdge=a.i,c.isChamfer=c.isChamfer||a.isChamfer):n.push({ax:a.ax,az:a.az,bx:a.bx,bz:a.bz,dirx:a.dirx,dirz:a.dirz,len:a.len,isChamfer:a.isChamfer,startEdge:a.i,endEdge:a.i})}if(n.length>1){let a=n[0],c=n[n.length-1];c.endEdge===t.length-1&&a.startEdge===0&&Math.hypot(c.bx-a.ax,c.bz-a.az)<.5&&c.dirx*a.dirx+c.dirz*a.dirz>.985&&(a.ax=c.ax,a.az=c.az,a.len+=c.len,a.isChamfer=a.isChamfer||c.isChamfer,n.pop())}return n}var hs=[[0,0],[150,.6],[300,1.8],[450,3.6],[600,6.2],[750,9.4],[900,13],[1050,16.6],[1200,19.9],[1350,22.8],[1500,25.4],[1617,27]],Dd=1;function $S(i){Dd=Number.isFinite(i)&&i>0?i:1}function JS(){return Dd}var Nd=hs.length,P0=hs.map((i,e)=>{if(e===0||e===Nd-1)return 0;let t=hs[e-1],n=hs[e+1];return(n[1]-t[1])/(n[0]-t[0])});function jS(i,e,t,n,s,r){let o=i*i,a=o*i,c=2*a-3*o+1,l=a-2*o+i,u=-2*a+3*o,h=a-o;return c*e+l*r*n+u*t+h*r*s}function QS(i){if(i<=hs[0][0])return hs[0][1];let e=hs[Nd-1];if(i>=e[0])return e[1];for(let t=0;t<Nd-1;t++){let[n,s]=hs[t],[r,o]=hs[t+1];if(i>=n&&i<=r){let a=r-n,c=a>0?(i-n)/a:0;return jS(c,s,o,P0[t],P0[t+1],a)}}return e[1]}function Ld(i){return QS(i)*Dd}function L0(i){function e(t,n){if(!i||i.length<2)return Ld(0);let s=Fs(t,n,i);return Ld(s)}return{groundHeight:e,heightAtChainage:Ld,setExaggeration:$S,getExaggeration:JS}}function eE(i){let e=1/0,t=-1/0,n=1/0,s=-1/0;for(let[r,o]of i)r<e&&(e=r),r>t&&(t=r),o<n&&(n=o),o>s&&(s=o);return{minX:e,maxX:t,minZ:n,maxZ:s}}function D0(i,e,t,n,s,r){let o=s-t,a=r-n,c=o*o+a*a,l=c>0?((i-t)*o+(e-n)*a)/c:0;l=l<0?0:l>1?1:l;let u=t+o*l,h=n+a*l;return{cx:u,cz:h,dist:Math.hypot(i-u,e-h)}}function F0(i,e,t){let n=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){let[o,a]=t[s],[c,l]=t[r];a>e!=l>e&&i<(c-o)*(e-a)/(l-a)+o&&(n=!n)}return n}function tE(i,e,t,n){if(i.type==="circle"){let d=e-i.x,f=t-i.z,p=Math.hypot(d,f),x=i.r+n;return p>=x?null:p<1e-6?{depth:x,nx:1,nz:0}:{depth:x-p,nx:d/p,nz:f/p}}let s=i.pts,r=null;for(let d=0,f=s.length-1;d<s.length;f=d++){let p=D0(e,t,s[f][0],s[f][1],s[d][0],s[d][1]);(!r||p.dist<r.dist)&&(r=p)}if(!r)return null;let o=F0(e,t,s);if(!o&&r.dist>=n)return null;let a=o?-1:1,c=(e-r.cx)*a,l=(t-r.cz)*a,u=Math.hypot(c,l),h=o?r.dist+n:n-r.dist;return u<1e-6?{depth:h,nx:1,nz:0}:{depth:h,nx:c/u,nz:l/u}}function N0(i,e,t,n){if(i.type==="circle"){let h=e-i.x,d=t-i.z,f=Math.hypot(h,d),p=i.r+n;return f>=p?null:f<1e-6?[i.x+p,i.z]:[i.x+h/f*p,i.z+d/f*p]}let s=i.pts,r=null;for(let h=0,d=s.length-1;h<s.length;d=h++){let f=D0(e,t,s[d][0],s[d][1],s[h][0],s[h][1]);(!r||f.dist<r.dist)&&(r=f)}if(!r)return null;let o=F0(e,t,s);if(!o&&r.dist>=n)return null;let a=o?1:-1,c=(r.cx-e)*a,l=(r.cz-t)*a,u=Math.hypot(c,l);return u<1e-6?[r.cx,r.cz]:[r.cx+c/u*n,r.cz+l/u*n]}function U0(){let i=[],e=[],t=new Map,n=!0,s=(b,v)=>`${b},${v}`;function r(b){let v=i.length;i.push(b);let{minX:_,maxX:S,minZ:y,maxZ:T}=b.bounds,M=Math.floor(_/8),w=Math.floor(S/8),C=Math.floor(y/8),R=Math.floor(T/8);for(let P=M;P<=w;P++)for(let F=C;F<=R;F++){let z=s(P,F),D=t.get(z);D||t.set(z,D=[]),D.push(v)}return v}function o(b,v="poly"){if(!Array.isArray(b)||b.length<3)return-1;let _=b.filter(S=>Array.isArray(S)&&Number.isFinite(S[0])&&Number.isFinite(S[1]));return _.length<3?-1:r({type:"poly",tag:v,pts:_,bounds:eE(_)})}function a(b,v,_,S,y=0,T="box"){if(![b,v,_,S,y].every(Number.isFinite)||_<=0||S<=0)return-1;let M=Math.sin(y),w=Math.cos(y),C=(R,P)=>[b+R*_*w+P*S*M,v-R*_*M+P*S*w];return o([C(-1,-1),C(1,-1),C(1,1),C(-1,1)],T)}function c(b,v,_,S="circle"){return![b,v,_].every(Number.isFinite)||_<=0?-1:r({type:"circle",tag:S,x:b,z:v,r:_,bounds:{minX:b-_,maxX:b+_,minZ:v-_,maxZ:v+_}})}function l(b,v,_,S="mover"){return typeof b!="function"||typeof v!="function"||!Number.isFinite(_)||_<=0?-1:(e.push({type:"circle",tag:S,r:_,get x(){return b()},get z(){return v()}}),e.length-1)}function u(b,v,_){let S=new Set,y=[],T=Math.floor((b-_)/8),M=Math.floor((b+_)/8),w=Math.floor((v-_)/8),C=Math.floor((v+_)/8);for(let R=T;R<=M;R++)for(let P=w;P<=C;P++){let F=t.get(s(R,P));if(F)for(let z of F)S.has(z)||(S.add(z),y.push(i[z]))}for(let R of e)y.push(R);return y}function h(b,v,_){let S=b,y=v;for(let T=0;T<4;T++){let M=!1;for(let w of u(S,y,_)){let C=N0(w,S,y,_);C&&(S=C[0],y=C[1],M=!0)}if(!M)return[S,y,!0]}return[S,y,!1]}function d(b,v,_){let S=null;for(let y of u(b,v,_)){let T=tE(y,b,v,_);T&&(!S||T.depth>S.depth)&&(S=T)}return S}function f(b,v,_,S){if(!n||i.length===0&&e.length===0)return[_,S];let y=_-b,T=S-v,M=Math.hypot(y,T);if(M<1e-9)return[_,S];let w=b,C=v;if(x(w,C)){let[z,D]=h(w,C,.35);w=z,C=D}let R=M>.25?Math.ceil(M/.25):1,P=y/R,F=T/R;for(let z=0;z<R;z++){let D=w+P,B=C+F;if(!x(D,B)){w=D,C=B;continue}let H=d(D,B,.35);if(!H)break;let K=P*H.nx+F*H.nz,se=w+P-H.nx*K,de=C+F-H.nz*K;if(!x(se,de)){w=se,C=de;continue}break}return[w,C]}function p(b,v,_=.35*1.5){if(i.length===0&&e.length===0)return[b,v];let[S,y]=h(b,v,_);return[S,y]}function x(b,v,_=.35){for(let S of u(b,v,_))if(N0(S,b,v,_))return!0;return!1}function m(){let b={};for(let v of i)b[v.tag]=(b[v.tag]||0)+1;for(let v of e)b[v.tag]=(b[v.tag]||0)+1;return{solids:i.length,movers:e.length,cells:t.size,byTag:b,enabled:n}}function g(b){let v=[];for(let _ of i)_.tag===b&&_.type==="circle"&&v.push(_.r);for(let _ of e)_.tag===b&&v.push(_.r);return v}return{addPolygon:o,addBox:a,addCircle:c,addMover:l,radii:g,playerRadius:.35,resolveMove:f,resolveFree:p,isBlocked:x,stats:m,setEnabled:b=>{n=!!b},isEnabled:()=>n,get count(){return i.length+e.length}}}var $a=7,nE=3,O0=$a+nE,iE=.03,sE=3.2,B0=-.06,rE=4870466,z0=[9078112,7039843,8016448,5592655,7630666,7232847,6249034,8153690],H0=4;function oE(){let t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d"),s=n.createImageData(256,256),r=s.data,a=256/13;for(let c=0;c<256;c++){let l=Math.floor(c/a),h=c-l*a<2;for(let d=0;d<256;d++){let f=d/256*16,p=c/256*16,x=150,m=146,g=134,b=cn(f,p,16,4,61)-.5;x+=b*34,m+=b*32,g+=b*28;let v=Math.floor((d+l*37)/(256/5)),_=(hi(v,l,17)-.5)*22;x+=_,m+=_,g+=_,h&&(x*=.62,m*=.62,g*=.6);let S=cn(f*.35,p*.9+4,16,3,83);if(S>.56){let w=Math.min(1,(S-.56)*4.5);x*=1-.35*w,m*=1-.33*w,g*=1-.28*w}let y=hi(d,c,97),T=y>.92?(y-.92)*200:0;x+=T,m+=T,g+=T*.9;let M=(c*256+d)*4;r[M]=Math.max(0,Math.min(255,x)),r[M+1]=Math.max(0,Math.min(255,m)),r[M+2]=Math.max(0,Math.min(255,g)),r[M+3]=255}}return n.putImageData(s,0,0),Mr(t,[1/H0,1/H0])}function V0(i){let e=new nt,t=C0(i.streetPaths),n=L0(t),s=n.groundHeight,r=aE(i.streetPaths,s);r&&e.add(r);let o=r?{road:r.children[0].material,pavement:r.children[1].material}:{},a=lE(i.buildings,s);a&&e.add(a);let c=U0();for(let h of i.buildings)c.addPolygon(h.footprint,"building");e.add(fE(i,s)),e.add(pE(s));let l=mE(e),u=new or(rE,.0095);return{group:e,streetLine:t,nearestStreetPoint:I0(t),collision:c,fog:u,groundHeight:s,setExaggeration:n.setExaggeration,getExaggeration:n.getExaggeration,lights:l,surfaces:o}}function aE(i,e){let t=[],n=[];for(let r of i){if(r.length<2)continue;let o=cE(r,e);o&&(t.push(o.road),n.push(o.paving))}if(t.length===0)return null;let s=new nt;return s.position.y=iE,s.add(new Pe(it(t,!1),new li({map:b0(),roughness:1,metalness:0}))),s.add(new Pe(it(n,!1),new li({map:S0(),roughness:1,metalness:0}))),s}function cE(i,e){let t=i.length,n=[],s=[],r=0;for(let a=0;a<t;a++){let c=i[Math.max(0,a-1)],l=i[Math.min(t-1,a+1)],u=l[0]-c[0],h=l[1]-c[1],d=Math.hypot(u,h)||1;n.push([-h/d,u/d]),a>0&&(r+=Math.hypot(i[a][0]-i[a-1][0],i[a][1]-i[a-1][1])),s.push(r)}let o=(a,c,l)=>{let u=[],h=[],d=[],f=Math.abs(c-a);for(let x=0;x<t;x++){let[m,g]=i[x],[b,v]=n[x],_=s[x]/l,S=m+b*a,y=g+v*a,T=m+b*c,M=g+v*c;u.push(S,e?e(S,y):0,y),u.push(T,e?e(T,M):0,M),h.push(0,_,f/l,_)}for(let x=0;x<t-1;x++){let m=x*2,g=x*2+1,b=(x+1)*2,v=(x+1)*2+1;d.push(m,g,v,m,v,b)}let p=new pt;return p.setAttribute("position",new Qe(u,3)),p.setAttribute("uv",new Qe(h,2)),p.setIndex(d),p.computeVertexNormals(),p};return{road:o(-$a,$a,M0),paving:it([o(-O0,-$a,Cd),o($a,O0,Cd)],!1)}}function lE(i,e){let t=[],n=0;if(i.forEach((a,c)=>{let l=hE(a,c,e);l?t.push(l):n++}),t.length===0)return null;n>0&&console.warn(`[world] skipped ${n}/${i.length} buildings with bad footprints`);let s=it(t,!1),r=new Ye({vertexColors:!0,flatShading:!0,map:oE()}),o=new Pe(s,r);return o.name="buildings",o}var uE=3;function hE(i,e,t){let{footprint:n,levels:s}=i;if(!n||n.length<3)return null;let r=Math.max(1,s||1)*sE;try{let o=new go;o.moveTo(n[0][0],-n[0][1]);for(let d=1;d<n.length;d++)o.lineTo(n[d][0],-n[d][1]);o.closePath();let a=t?uE:0,c=new Sa(o,{depth:r+a,bevelEnabled:!1,curveSegments:1});if(c.rotateX(-Math.PI/2),t){let d=0,f=0;for(let[x,m]of n)d+=x,f+=m;d/=n.length,f/=n.length;let p=t(d,f);c.translate(0,p-a,0)}let l=Od(e,i),u=c.attributes.position.count,h=new Float32Array(u*3);for(let d=0;d<u;d++)h[d*3]=l.r,h[d*3+1]=l.g,h[d*3+2]=l.b;return c.setAttribute("color",new Qe(h,3)),c}catch{return null}}function Od(i,e){let t=Math.abs(dE(`${i}:${e.footprint[0][0]}:${e.footprint[0][1]}`)),n=new pe(z0[t%z0.length]),s={h:0,s:0,l:0};n.getHSL(s);let r=(t%17/17-.5)*.12,o=new pe;return o.setHSL(s.h,s.s,Math.min(.85,Math.max(.08,s.l+r))),o}function dE(i){let e=0;for(let t=0;t<i.length;t++)e=(e<<5)-e+i.charCodeAt(t),e|=0;return e}function fE(i,e){let t=1/0,n=-1/0,s=1/0,r=-1/0;for(let g of i.buildings)for(let[b,v]of g.footprint)b<t&&(t=b),b>n&&(n=b),v<s&&(s=v),v>r&&(r=v);let o=400,a=n-t+o*2,c=r-s+o*2,l=(t+n)/2,u=(s+r)/2,h=Math.max(1,Math.round(a/10)),d=Math.max(1,Math.round(c/10)),f=new yt(a,c,h,d);if(f.rotateX(-Math.PI/2),e){let g=f.attributes.position;for(let b=0;b<g.count;b++){let v=g.getX(b)+l,_=g.getZ(b)+u;g.setY(b,e(v,_)+B0)}g.needsUpdate=!0,f.computeVertexNormals()}let p=T0();p.repeat.set(a/Id,c/Id);let x=new Ye({map:p}),m=new Pe(f,x);return m.position.set(l,e?0:B0,u),m}var Fd=-719,Ud=1303;function pE(i){let e=new yt(80,14,20,2);e.rotateX(-Math.PI/2);let t=-.483,n=.876;if(e.rotateY(Math.atan2(-n,t)),i){let u=e.attributes.position;for(let h=0;h<u.count;h++){let d=u.getX(h)+Fd,f=u.getZ(h)+Ud;u.setY(h,i(d,f)+.02)}u.needsUpdate=!0,e.computeVertexNormals()}let s=new Pe(e,new Ye({map:w0(),transparent:!0,depthWrite:!1}));s.position.set(Fd,i?0:.02,Ud),s.name="elm-row-gardens";let r=924192,o=()=>{r|=0,r=r+1831565813|0;let u=Math.imul(r^r>>>15,1|r);return u=u+Math.imul(u^u>>>7,61|u)^u,((u^u>>>14)>>>0)/4294967296},a=[];for(let u=0;u<26;u++){let h=(o()-.5)*74,d=(o()-.5)*10,f=new Qn(1,6,4),p=.5+o()*1.3;f.scale(.9+o()*1.6,p,.9+o()*1.6),f.rotateY(o()*Math.PI);let x=Fd+t*h-n*d,m=Ud+n*h+t*d,g=i?i(x,m):0;f.translate(x,g+p*.55,m),a.push(f)}let c=new Pe(it(a),new Ye({color:3029024}));c.name="elm-row-bushes";let l=new nt;return l.add(s,c),l}function mE(i){let e=new pr(9147296,3814180,3.9);i.add(e);let t=new as(13621480,1.15);t.position.set(-200,300,150),t.castShadow=!1,i.add(t);let n=new Ra(4999224,1.4);return i.add(n),{hemi:e,sun:t,ambient:n}}var gE=16747082,k0=18,xE=5,G0=10;function W0(i){let e=new Vn(gE,k0,G0,2);e.position.set(.15,-.15,.1),i.add(e);let t=1,n=!0;function s(c){t=c,o()}function r(c){n=!!c,o()}function o(){e.distance=n?Math.max(.05,G0*t):.05}function a(c){let l=Math.sin(c*11.3)*.5+Math.sin(c*27.1)*.3+Math.sin(c*4.7)*.2;e.intensity=n?(k0+l*xE*.3333)*t:0}return{light:e,update:a,setDarkness:s,setToggle:r}}var Su=Math.PI/2-.05,Eu={KeyW:"forward",ArrowUp:"forward",KeyS:"backward",ArrowDown:"backward",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right"};function Y0(i,e,{nearestStreetPoint:t,spawn:n,groundHeight:s,collision:r}){let o=n.yaw||0,a=0,c=s?s(n.x,n.z):0;i.position.set(n.x,c+1.7,n.z),i.rotation.order="YXZ",g();let l=new Set,u=!1,h=0,d=0,f=!1,p=!0,x=!0,m=null;function g(){i.rotation.set(a,o,0)}function b(D){p&&Eu[D.code]&&(l.add(Eu[D.code]),D.preventDefault())}function v(D){Eu[D.code]&&l.delete(Eu[D.code])}function _(D){if(p&&(u=!0,h=D.clientX,d=D.clientY,e.setPointerCapture?.(D.pointerId),!f&&e.requestPointerLock))try{let B=e.requestPointerLock();B&&typeof B.catch=="function"&&B.catch(()=>{})}catch{}}function S(D){if(f){o-=(D.movementX||0)*.0025,a-=(D.movementY||0)*.0025,a=X0(a,-Su,Su),g();return}if(!u)return;let B=D.clientX-h,H=D.clientY-d;h=D.clientX,d=D.clientY,o-=B*.0035,a-=H*.0035,a=X0(a,-Su,Su),g()}function y(D){u=!1,e.releasePointerCapture?.(D.pointerId)}function T(){f=document.pointerLockElement===e}window.addEventListener("keydown",b),window.addEventListener("keyup",v),e.addEventListener("pointerdown",_),window.addEventListener("pointermove",S),window.addEventListener("pointerup",y),document.addEventListener("pointerlockchange",T);function M(D){p=!!D,p||(l.clear(),u=!1)}function w(D){p&&(D?l.add("forward"):l.delete("forward"))}function C(D){if(!p)return;let B=0,H=0;if(l.has("forward")&&(H-=1),l.has("backward")&&(H+=1),l.has("left")&&(B-=1),l.has("right")&&(B+=1),B!==0||H!==0){let K=Math.hypot(B,H);B/=K,H/=K;let se=Math.sin(o),de=Math.cos(o),V=-se,j=-de,he=de,Se=-se,Ee=(V*-H+he*B)*14*D,$=(j*-H+Se*B)*14*D,Q=i.position.x+Ee,J=i.position.z+$;if(m){i.position.x=R(Q,i.position.z)?Q:i.position.x,i.position.z=R(i.position.x,J)?J:i.position.z;return}if(r){let[ye,ze]=r.resolveMove(i.position.x,i.position.z,Q,J);Q=ye,J=ze}let{point:ge,distance:xe}=t(Q,J);if(ge&&xe>16){let ye=16/xe;Q=ge[0]+(Q-ge[0])*ye,J=ge[1]+(J-ge[1])*ye}i.position.x=Q,i.position.z=J}m&&x?i.position.y=m.bounds.floorY+1.7:s&&x&&(i.position.y=s(i.position.x,i.position.z)+1.7)}function R(D,B){let H=m.bounds;if(D<H.minX||D>H.maxX||B<H.minZ||B>H.maxZ)return!1;for(let K of m.solids)if(D>K.minX&&D<K.maxX&&B>K.minZ&&B<K.maxZ)return!1;return!0}function P(D){m=D&&D.bounds?D:null}function F(){window.removeEventListener("keydown",b),window.removeEventListener("keyup",v),e.removeEventListener("pointerdown",_),window.removeEventListener("pointermove",S),window.removeEventListener("pointerup",y),document.removeEventListener("pointerlockchange",T)}function z(D){Number.isFinite(D)&&(o=D)}return{update:C,dispose:F,setEnabled:M,setForward:w,setYaw:z,setRoom:P,inRoom:()=>!!m,setYFollow:D=>{x=!!D}}}function X0(i,e,t){return Math.max(e,Math.min(t,i))}var Ja=[{id:"01b27ac5",landmark:"Spey Lounge",kind:"pub",chainage:82},{id:"081eb3ed",landmark:"Kvasa",kind:"bakery",chainage:196},{id:"0e21d212",landmark:"Toast",kind:"cafe",chainage:394},{id:"124327ee",landmark:"Alhambra Bar",kind:"pub",chainage:467},{id:"1a29e4f5",landmark:"Storries Home Bakery",kind:"bakery",chainage:621},{id:"1f6380d3",landmark:"Cupp",kind:"cafe",chainage:725},{id:"26210448",landmark:"GAIA Italian Delicatessen",kind:"cafe",chainage:862},{id:"2b05b3fb",landmark:"Golden Ambal",kind:"restaurant",chainage:994},{id:"2dd9394b",landmark:"Otherworld",kind:"pub",chainage:1056},{id:"315d8c0e",landmark:"Not Just Coffee",kind:"cafe",chainage:1142},{id:"3706c73f",landmark:"The Joker & The Thief",kind:"pub",chainage:1250},{id:"51834c74",landmark:"Guajira",kind:"cafe",chainage:1391}];function q0(){return new Map(Ja.map(i=>[i.id,i]))}function Z0(i){return Array.isArray(i)?i.length:0}function _E(){return typeof location<"u"&&["localhost","127.0.0.1"].includes(location.hostname)}function Ln(i,e){if(_E()&&typeof window<"u"){let t=window[`__mcgrotForce${i}`];if(t!=null)return!!t}return!!e}var vE=6,K0=40,ME=60,bE=1.35,SE=85,J0=[4867638,4276026,5525567,3882292,5195578,3749420,4737602,5919040],$0=[7025448,7363619,3032640,5849646,4011091,6703646],EE=.024,TE=10,wE=.012,AE=25,RE=8,CE=new Si;function j0(i,e){return CE.load(i,t=>{t.colorSpace=tt,e&&e(t)})}function br(i,e,t){let n=Math.imul(i,374761393)^Math.imul(e,668265263)^Math.imul(t,2246822519);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function IE(i,e,t){let s=document.createElement("canvas");s.width=s.height=64;let r=s.getContext("2d"),o=r.createImageData(64,64),a=o.data,c={r:(i>>16&255)/255,g:(i>>8&255)/255,b:(i&255)/255};for(let u=0;u<64;u++)for(let h=0;h<64;h++){let d=t?1+.14*Math.sin(u*1.9)+(br(h,u,e)-.5)*.1:1.05+.1*Math.sin(h*2.3)+(br(h,u,e)-.5)*.16,f=1-.18*br(h>>3,u>>3,e+7)*br(h>>4,u>>4,e+13),p=1-.2*Math.pow(u/64,3),x=d*f*p,m=(u*64+h)*4;a[m]=Math.min(255,c.r*255*x),a[m+1]=Math.min(255,c.g*255*x),a[m+2]=Math.min(255,c.b*255*x),a[m+3]=255}r.putImageData(o,0,0);let l=new xt(s);return l.colorSpace=tt,l}var Bd=new Map;function ja(i,e){let t=i*2+(e?1:0);return Bd.has(t)||Bd.set(t,new Ye({map:IE(i,i&65535^(e?40503:0),e),flatShading:!0})),Bd.get(t)}function PE(){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createImageData(64,64),s=n.data,r={r:.4,g:.38,b:.32};for(let a=0;a<64;a++)for(let c=0;c<64;c++){let l=1+(br(c,a,2465)-.5)*.12,u=Math.floor(a/5),h=br(u,0,707),f=h>.45&&h<.85?1-.28*br(c>>1,u,1915):1,p=Math.min(c,63-c)/(64*.5),x=Math.min(a,63-a)/(64*.5),m=1-.22*(1-Math.min(p,x)),g=l*f*m,b=(a*64+c)*4;s[b]=Math.min(255,r.r*255*g),s[b+1]=Math.min(255,r.g*255*g),s[b+2]=Math.min(255,r.b*255*g),s[b+3]=255}t.putImageData(n,0,0);let o=new xt(e);return o.colorSpace=tt,o}var zd=null;function Hd(){return zd||(zd=PE()),zd}function kd(i,e,t){let n=q0(),s=FE(e),r=Math.max(1,s-K0-ME),o=i.length>1?r/(i.length-1):0,a=[];return i.forEach((c,l)=>{let u=K0+l*o,h=t?n.get(c.id):null,d=h?h.chainage:u,f=l%2===0?1:-1,p=h&&h.offset!=null?h.offset:vE,x=UE(e,d);if(!x)return;let[m,g]=x.tangent,b=-g,v=m,_=x.point[0]+b*p*f,S=x.point[1]+v*p*f,y=x.point[0]-_,T=x.point[1]-S,M=Math.atan2(y,T);a.push({id:c.id,index:l,dist:d,baseDist:u,side:f,coatIndex:l%J0.length,px:_,pz:S,baseY:M,isAnchor:!!h,landmark:h?h.landmark:null})}),a}function Q0(i,e,t,n){let s=i.catalog&&Array.isArray(i.catalog.comics)?i.catalog.comics.filter(x=>x.npc):i.manifest.comics||[],r=e.streetLine||[],o=[],a=new Map,c=new Map,l=(x,m)=>{x.map=m,x.color.setScalar(x.userData.anchorGlow||4.7),x.needsUpdate=!0},u=(x,m)=>{if(x){if(a.has(x)){l(m,a.get(x));return}if(c.has(x)){c.get(x).push(m);return}c.set(x,[m]),j0(xn(i,x),g=>{a.set(x,g);for(let b of c.get(x))l(b,g);c.set(x,[])})}},h=Ln("Anchors",!0);kd(s,r,h).forEach(x=>{let m=s[x.index],g=LE(i,m,J0[x.coatIndex],u,x.isAnchor),b=e.groundHeight?e.groundHeight(x.px,x.pz):0;g.group.position.set(x.px,b,x.pz),e.collision&&e.collision.addCircle(x.px,x.pz,g.collisionRadius,"vendor"),g.group.rotation.y=x.baseY,g.baseY=x.baseY,g.phase=x.index*2.1,g.isAnchor=x.isAnchor,g.anchorLandmark=x.landmark,t.add(g.group),o.push(g)});let f=new U;function p(x,m){let g=n?n.position:null;for(let b=0;b<o.length;b++){let v=o[b];if(v.tick(m,x),g&&!v.comicLoaded){let _=v.group.position;Math.hypot(g.x-_.x,g.z-_.z)<SE&&v.loadComic()}}}return{npcs:o,update:p,list:s,anchorsEnabled:h}}var Tu={height:1.9,girth:1,headScale:1.5};function Gd(i){let e=i.height,t=i.girth,n=i.headScale,s=.12,r=e*.3,o=.52*t,a=.34*t,c=e*.48,l=.34*n,u=s+r,h=u+c,d=h+l*.5+.02;return{bootH:s,legH:r,bodyW:o,bodyD:a,bodyH:c,headSize:l,legTopY:u,bodyTopY:h,headCenterY:d,headTopY:d+l*.5,legX:o*.24}}function LE(i,e,t,n,s){let r=s?bE:1,o=e.npc.build||Tu,a=new nt,{bootH:c,legH:l,bodyW:u,bodyD:h,bodyH:d,headSize:f,legTopY:p,bodyTopY:x,headCenterY:m,headTopY:g,legX:b}=Gd(o),v=0;for(let P of e.npc.name||"")v=v*31+P.charCodeAt(0)|0;let _=$0[Math.abs(v)%$0.length],S=new pe(_),y=d*.55,T=4.7*r,M=new Ye({map:Hd(),color:new pe(T,T,T),side:Pt}),w=new Pe(new yt(1,1),M);w.position.set(0,p+d*.55,h*.5+.17),w.scale.set(y*.7,y,1),a.add(w);let C=NE(e.npc.name,e.npc.blurb);C.position.set(0,g+.42,0),a.add(C);let R={group:a,comicMesh:w,comic:e,build:o,noteColor:S,collisionRadius:u/2,head:null,scarf:null,dollBody:[],hasDoll:!1,name:e.npc.name,blurb:e.npc.blurb,voice:null,baseY:0,phase:0,speaking:!1,comicLoaded:!1,loadComic(){R.comicLoaded||(R.comicLoaded=!0,j0(xn(i,e.image),P=>{M.map=P,M.color.setScalar(T),M.needsUpdate=!0;let F=P.image;F&&F.width&&F.height&&w.scale.set(y*(F.width/F.height),y,1)}))},buildDoll(){if(R.hasDoll)return R;R.hasDoll=!0;let P=ja(t,!1),F=new Ye({color:1381391,flatShading:!0}),z=[],D=[];for(let Q of[-1,1]){let J=new Ze(u*.4,c,h*1.5);J.translate(Q*b,c*.5,h*.2),D.push(J)}for(let Q of[-1,1]){let J=new Ze(u*.36,l,h*.75);J.translate(Q*b,c+l*.5,0),z.push(J)}{let Q=new Ze(u,d,h);Q.translate(0,p+d*.5,0),z.push(Q)}let B=x-d*.14,H=d*.62;for(let Q of[-1,1]){let J=new Ze(.13,H,.13);J.rotateX(-1.15),J.rotateZ(Q*.25),J.translate(Q*(u*.5+.02),B-H*.28,h*.5+.06),z.push(J)}let K=new Pe(it(z),P),se=new Pe(it(D),F);a.add(K,se);let de=ja(new pe(t).multiplyScalar(.62).getHex(),!0),V=new Ye({color:new pe(9077874).multiplyScalar(4.7*r)});V.userData.anchorGlow=4.7*r,n(e.npc.face,V);let j=[de,de,de,de,V,de],he=new Pe(new Ze(f,f,f*.85),j);he.position.set(0,m,0),a.add(he);let Se=new Pe(new Ze(f*.95,.09,f*.85),new Ye({color:_,flatShading:!0}));Se.position.set(0,x+.02,0),a.add(Se);let Ee=new Ye({color:8680542,flatShading:!0}),$=[];for(let Q of[-1,1]){let J=new Pe(new Ze(.09,.07,.06),Ee);J.position.set(Q*y*.28,p+d*.55-y*.48,h*.5+.18),a.add(J),$.push(J)}return R.head=he,R.scarf=Se,R.dollBody=[K,se,he,...$],R},setSpeaking(P){R.speaking=!!P},leanAmp:0,tick(P,F){R.leanAmp+=((R.speaking?1:0)-R.leanAmp)*Math.min(1,(F||0)*RE);let z=R.leanAmp;a.rotation.z=Math.sin(P*.6+R.phase)*.01+(z?Math.sin(P*TE+R.phase)*EE*z:0),a.rotation.y=R.baseY+Math.sin(P*.4+R.phase)*.008+(z?Math.sin(P*AE+R.phase)*wE*z:0)}};return R}function NE(i,e){let t=document.createElement("canvas");t.width=512,t.height=160;let n=t.getContext("2d");n.fillStyle="rgba(20, 22, 16, 0.82)",DE(n,6,6,t.width-12,t.height-12,14),n.fill(),n.lineWidth=2,n.strokeStyle="rgba(120, 116, 92, 0.6)",n.stroke(),n.textAlign="center",n.fillStyle="#d8d4c0",n.font='bold 44px "Courier New", monospace',n.fillText(i,t.width/2,68,t.width-40),n.fillStyle="#a9a48c",n.font='italic 30px "Courier New", monospace',n.fillText(e,t.width/2,116,t.width-36);let s=new xt(t);s.colorSpace=tt;let r=new Di({map:s,transparent:!0,depthTest:!0}),o=new ts(r);return o.scale.set(2.4,.75,1),o}function DE(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function FE(i){let e=0;for(let t=0;t<i.length-1;t++)e+=Math.hypot(i[t+1][0]-i[t][0],i[t+1][1]-i[t][1]);return e}function UE(i,e){if(!i||i.length<2)return null;let t=0;for(let c=0;c<i.length-1;c++){let[l,u]=i[c],[h,d]=i[c+1],f=h-l,p=d-u,x=Math.hypot(f,p);if(t+x>=e){let m=x>0?(e-t)/x:0,g=x||1;return{point:[l+f*m,u+p*m],tangent:[f/g,p/g]}}t+=x}let n=i[i.length-1],s=i[i.length-2],r=n[0]-s[0],o=n[1]-s[1],a=Math.hypot(r,o)||1;return{point:[n[0],n[1]],tangent:[r/a,o/a]}}var wu=256,Au=128,Ru=16,eg=["#0e0c0b","#120f1a","#101512","#12100a","#0a1210","#150d0d","#0c1015"],tg=['"Arial Narrow", "Helvetica Neue", Arial, sans-serif','"Futura", "Century Gothic", "Helvetica Neue", sans-serif','Georgia, "Times New Roman", serif'];function OE(i,e,t,n,s,r,o){let a=HE(o);i.save(),i.beginPath(),i.rect(e,t,n,s),i.clip(),i.fillStyle="#171410",i.fillRect(e,t,n,s);let c=Math.round(n*(.04+a()*.024));for(let T of[e,e+n-c]){i.fillStyle="#332e28",i.fillRect(T,t,c,s);for(let M=0;M<40;M++)i.fillStyle=`rgba(0,0,0,${.05+a()*.12})`,i.fillRect(T+a()*c,t+a()*s,1+a()*2,1+a()*2)}let l=e+c,u=n-c*2,h=a(),d=h<.3,f=t+s*(d?.2:.08);if(d){let T=t+s*.06,M=f-T,w=["#3a2420","#243a2e","#2a2438"][Math.floor(a()*3)],C="#d8d0c0",R=Math.max(3,Math.round(n*.045));for(let P=l;P<l+u;P+=R)i.fillStyle=(P-l)/R%2<1?w:C,i.beginPath(),i.moveTo(P,f),i.lineTo(Math.min(P+R,l+u),f),i.lineTo(Math.min(P+R-M*.35,l+u),T),i.lineTo(Math.max(P-M*.35,l),T),i.closePath(),i.fill();i.fillStyle="rgba(0,0,0,0.25)",i.fillRect(l,f-2,u,2)}let p=t+s*.4;if(h<.55)for(let T=p;T<t+s;T+=Math.max(2,s*.03))i.fillStyle=Math.round((T-p)/Math.max(2,s*.03))%2===0?"#211d18":"#15110d",i.fillRect(l,T,u,Math.max(2,s*.03));else{let T=t+s;i.fillStyle="#14181a",i.fillRect(l,p,u,T-p);let M=3+Math.floor(a()*2);i.strokeStyle="rgba(0,0,0,0.65)",i.lineWidth=2;for(let R=1;R<M;R++){let P=l+u/M*R;i.beginPath(),i.moveTo(P,p),i.lineTo(P,T),i.stroke()}i.strokeStyle="rgba(0,0,0,0.5)",i.lineWidth=1;let w=p+(T-p)*.55;i.beginPath(),i.moveTo(l,w),i.lineTo(l+u,w),i.stroke(),i.fillStyle="rgba(150,158,160,0.12)",i.beginPath(),i.moveTo(l,p),i.lineTo(l+u*.42,p),i.lineTo(l+u*.14,T),i.lineTo(l,T),i.closePath(),i.fill();let C=(T-p)*.16;i.fillStyle=["#2b2016","#1c231e","#241c26"][Math.floor(a()*3)],i.fillRect(l,T-C,u,C)}let x=f,m=p-f,g=eg[Math.floor(a()*eg.length)];i.fillStyle=g,i.fillRect(l,x,u,m),i.strokeStyle="rgba(0,0,0,0.6)",i.lineWidth=1,i.strokeRect(l+.5,x+.5,u-1,m-1);let b=tg[Math.floor(a()*tg.length)],v=a()<.75?"bold":"900",S=a()<.3?r.replace(/\w\S*/g,T=>T.charAt(0).toUpperCase()+T.slice(1).toLowerCase()):r.toUpperCase(),y=200+Math.floor(a()*30);i.fillStyle=`rgb(${y},${y-15},${y-45})`,i.textAlign="center",i.textBaseline="middle";try{i.letterSpacing="0.5px"}catch{}BE(i,S,l+u/2,x+m/2,u-12,m-6,b,v);for(let T=0;T<6;T++){i.fillStyle=`rgba(0,0,0,${.05+a()*.08})`;let M=e+a()*n;i.fillRect(M,t,1+a()*3,s)}i.restore()}function BE(i,e,t,n,s,r,o,a){o=o||'"Arial Narrow", "Helvetica Neue", Arial, sans-serif',a=a||"bold";let c=4;for(let u=22;u>=c;u--){if(i.font=`${a} ${u}px ${o}`,i.measureText(e).width<=s){i.fillText(e,t,n);return}let h=zE(i,e,s);if(h&&u<=18&&h.length===2){let d=u*1.05;if(d*2<=r){i.fillText(h[0],t,n-d/2),i.fillText(h[1],t,n+d/2);return}}}i.font=`bold ${c}px ${o}`;let l=e;for(;l.length>3&&i.measureText(l+"\u2026").width>s;)l=l.slice(0,-1);i.fillText(l+(l.length<e.length?"\u2026":""),t,n)}function zE(i,e,t){let n=e.split(" ");if(n.length<2)return null;for(let s=1;s<n.length;s++){let r=n.slice(0,s).join(" "),o=n.slice(s).join(" ");if(i.measureText(r).width<=t&&i.measureText(o).width<=t)return[r,o]}return null}function HE(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function kE(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function ng(i){let e=[...new Set(i)],t=Math.max(1,Math.ceil(e.length/Ru)),n=document.createElement("canvas");n.width=Ru*wu,n.height=t*Au;let s=n.getContext("2d");s.fillStyle="#171410",s.fillRect(0,0,n.width,n.height);let r=new Map;e.forEach((a,c)=>{let l=c%Ru,u=Math.floor(c/Ru),h=l*wu,d=u*Au;OE(s,h,d,wu,Au,a,kE(a)),r.set(a,{u0:h/n.width,u1:(h+wu)/n.width,vTop:1-d/n.height,vBot:1-(d+Au)/n.height})});let o=new xt(n);return o.colorSpace=tt,o.anisotropy=4,{texture:o,uvFor:r,count:e.length}}var Ai=.05,ig=.25,Vd=.3,GE=3,Wd=1.2,sg=250,vt=3.2,rg=.3,Sr=.4,og=.08,ag=.16,cg=1.5,lg=6.4,VE=2.5,WE=15,Qa=.06,XE=2.2;function ug(i,e,t){let n=i&&i.facadeManifest,s=i&&i.facadeAtlas,r=i&&i.leith&&i.leith.buildings||[],o=e&&e.streetLine||[],a=e&&e.nearestStreetPoint,c=e&&e.groundHeight;if(!n||!s||!r.length||!a||o.length<2)return{group:null,count:0,update(){}};let l=0,u=s.buildings||{},h=.5,d=.5,f=[];for(let V of n.buildings)for(let j of V.businesses||[])f.push(j.name);let p=f.length?ng(f):null,x=[],m=[],g=[],b=[],v=0;function _(V,j,he,Se){let Ee=he-V,$=Se-j,Q=Math.hypot(Ee,$)||1;return[-$/Q,0,Ee/Q]}let S=s.pages.map(()=>({positions:[],uvs:[],colors:[],normals:[],indices:[],quadCount:0})),y=new Map;for(let V of n.buildings){let j=u[V.buildingIndex];if(!j)continue;let he=j.regions.find(J=>J.kind!=="corner")||j.regions[0];if(!he)continue;let Se=s.pages[j.page],Ee=1/Se.width,$=1/Se.height,Q=y.get(j.page)||[];Q.push({bi:V.buildingIndex,chainage:V.chainage,region:he,u0Full:(he.x+h)*Ee,u1Full:(he.x+he.w-h)*Ee,vTop:1-(he.y+d)*$,vBot:1-(he.y+he.h-d)*$}),y.set(j.page,Q)}function T(V,j,he,Se,Ee,$,Q,J,ge,xe,ye){let ze=V.quadCount*4,ce=xe+l,ne=ye+l;V.positions.push($,ce,Q,J,ce,ge,J,ne,ge,$,ne,Q),V.uvs.push(j,he,Se,he,Se,Ee,j,Ee),V.colors.push(1,1,1,1,1,1,1,1,1,1,1,1);let[re,oe,fe]=_($,Q,J,ge);V.normals.push(re,oe,fe,re,oe,fe,re,oe,fe,re,oe,fe),V.indices.push(ze,ze+1,ze+2,ze,ze+2,ze+3),V.quadCount++}function M(V,j,he,Se,Ee,$,Q,J,ge,xe,ye,ze,ce,ne,re){let oe=V.quadCount*4,fe=xe+l,me=ye+l;V.positions.push($,fe,Q,J,fe,ge,J,me,ge,$,me,Q),V.uvs.push(j,he,Se,he,Se,Ee,j,Ee),V.colors.push(...ze,...ce,...ne,...re);let[Le,Ae,ke]=_($,Q,J,ge);V.normals.push(Le,Ae,ke,Le,Ae,ke,Le,Ae,ke,Le,Ae,ke),V.indices.push(oe,oe+1,oe+2,oe,oe+2,oe+3),V.quadCount++}let w=.1,C=1.1;function R(V,j,he,Se,Ee,$,Q,J,ge,xe){let ye=Se-Ee,ze=Ee+ye*Math.min(1,vt/($||vt)),ce=ge-Q,ne=xe-J,re=Math.hypot(ce,ne)||1,oe=He=>[Q+ce*He,J+ne*He],fe=He=>j+(he-j)*He,me=[1,1,1],Le=[0,0,0],Ae=Math.min(.4,Math.max(w,C/re));if(1-2*Ae<=.001)return T(V,j,Ee,he,ze,Q,J,ge,xe,Ai,vt),1;let ke=[[0,Ae,Le,me],[Ae,1-Ae,me,me],[1-Ae,1,me,Le]];for(let[He,N,ve,ue]of ke){let[A,E]=oe(He),[G,L]=oe(N);M(V,fe(He),Ee,fe(N),ze,A,E,G,L,Ai,vt,ve,ue,ue,ve)}return ke.length}function P(V,j){let he=V*73856093^j*19349663;return he=Math.imul(he^he>>>13,2246822507),he^=he>>>16,he>>>0}let F=0,z=(V,j,he,Se,Ee,$,Q,J,ge,xe,ye,ze,ce,ne=0)=>{let re=Qa*(he-j),oe=j+re,fe=he-re,me=Se-Ee,Le=me>0?Ee+$*me:Ee,Ae=Se-og*me,ke=Math.max(.1,(Ae-Le)/(me||1)*Q),He=ze,N=0;for(;He<ce-1e-6&&ke>1e-4;){let ve=Math.min(ke,ce-He),ue=ve/ke,A=(P(ne,N)&1)===0,E=A?Ae:Le,L=E+((A?Le:Ae)-E)*ue;T(V,oe,E,fe,L,J,ge,xe,ye,He,He+ve),F++,He+=ve,N++}};function D(V){let j=-1,he=1/0;return s.pages.forEach((Se,Ee)=>{if(V>=Se.chainageMin&&V<=Se.chainageMax)j=Ee,he=0;else if(j===-1||he>0){let $=V<Se.chainageMin?Se.chainageMin-V:V-Se.chainageMax;$<he&&(he=$,j=Ee)}}),j}for(let V of n.buildings){let j=V.buildingIndex,he=r[j];if(!he||!he.footprint||he.footprint.length<3)continue;let Se=Ao(he,a);if(!Se.length)continue;let Ee=0,$=0;for(let xe of he.footprint)Ee+=xe[0],$+=xe[1];Ee/=he.footprint.length,$/=he.footprint.length;let Q=u[j],J=new Map,ge=0;if(Q)for(let xe of Se){let ye=Math.hypot(xe.bx-xe.ax,xe.bz-xe.az);if(ye<Vd)continue;let ze=Q.regions.find(ne=>xe.isChamfer?ne.kind==="corner":ne.kind!=="corner")||Q.regions[0];if(!ze||ye/ze.widthM>Wd)continue;let ce=J.get(ze)||{totalSpan:0,count:0,cursor:0};ce.totalSpan+=ye,ce.count+=1,J.set(ze,ce)}Se.forEach((xe,ye)=>{let ze=xe.bx-xe.ax,ce=xe.bz-xe.az,ne=Math.hypot(ze,ce);if(ne<Vd)return;let re=xe.ax,oe=xe.az,fe=ze,me=ce,Le=-ce/ne,Ae=ze/ne,ke=(xe.ax+xe.bx)/2,He=(xe.az+xe.bz)/2;Le*(ke-Ee)+Ae*(He-$)<0&&(Le=-Le,Ae=-Ae,re=xe.bx,oe=xe.bz,fe=-ze,me=-ce);let N=ue=>({x:re+fe*ue+Le*ig,z:oe+me*ue+Ae*ig});l=c?c(ke,He):0;let ve=Q?Q.regions.find(ue=>xe.isChamfer?ue.kind==="corner":ue.kind!=="corner")||Q.regions[0]:null;if(ve){let ue=s.pages[Q.page],A=S[Q.page],E=1/ue.width,G=1/ue.height,L=(ve.x+h)*E,O=(ve.x+ve.w-h)*E,X=1-(ve.y+d)*G,W=1-(ve.y+ve.h-d)*G,Y=ne/ve.widthM,Z=Math.max(2,V.levels||2)*vt,be=Math.min(.75,Math.max(Sr,vt/ve.heightM)),Ne=X-W,Ie=(y.get(Q.page)||[]).filter(_e=>_e.bi!==j),Ce=Ie.filter(_e=>Math.abs(_e.chainage-V.chainage)>=WE),Ge=Ce.length>=3?Ce:Ie,qe=[];if(Y>VE){let _e=Math.min(1,ve.widthM/ne),k=Math.max(0,.5-_e/2),Me=Math.min(1,.5+_e/2),ae=N(k),we=N(Me);qe.push({u0:L,u1:O,ax:ae.x,az:ae.z,bx:we.x,bz:we.z});let Re=[{side:0,innerT:k,dirSign:-1},{side:1,innerT:Me,dirSign:1}];for(let{side:le,innerT:De,dirSign:Fe}of Re){let ot=le===0?k:1-Me,ct=ot*ne;if(ct<Vd)continue;let Gt=Math.max(1,Math.round(ct/lg)),fn=ot/Gt,gi=V.businesses?V.businesses.length-ge:0,Wi=p?Math.max(0,Math.min(gi,Gt)):0;for(let ln=0;ln<Gt;ln++){let zn=De+Fe*ln*fn,qn=De+Fe*(ln+1)*fn,st=N(Math.min(zn,qn)),_t=N(Math.max(zn,qn));if(ln<Wi){let Lt=V.businesses[ge];ge++;let bt=p.uvFor.get(Lt.name);if(bt){let Vt=v*4;x.push(st.x,Ai+l,st.z,_t.x,Ai+l,_t.z,_t.x,vt+l,_t.z,st.x,vt+l,st.z),m.push(bt.u0,bt.vBot,bt.u1,bt.vBot,bt.u1,bt.vTop,bt.u0,bt.vTop);{let[Wt,Xt,Fn]=_(st.x,st.z,_t.x,_t.z);b.push(Wt,Xt,Fn,Wt,Xt,Fn,Wt,Xt,Fn,Wt,Xt,Fn)}g.push(Vt,Vt+1,Vt+2,Vt,Vt+2,Vt+3),v++,F++}continue}if(Ge.length>=3){let Lt=P(j,ye*6151+le*331+ln)%Ge.length,bt=Ge[Lt],Vt=Math.min(.75,Math.max(Sr,vt/bt.region.heightM));z(A,bt.u0Full,bt.u1Full,bt.vTop,bt.vBot,Vt,bt.region.heightM,st.x,st.z,_t.x,_t.z,Ai,vt,P(j,ye*6151+le*331+ln+1))}else Ne>0&&z(A,L,O,X,W,be,ve.heightM,st.x,st.z,_t.x,_t.z,Ai,vt,P(j,ye*6151+le*331+ln+1))}if(Z>vt+1e-6){let ln=le===0?0:1,zn=N(Math.min(De,ln)),qn=N(Math.max(De,ln));if(Ge.length<3)Ne>0&&z(A,L,O,X,W,be,ve.heightM,zn.x,zn.z,qn.x,qn.z,vt,Z,P(j,ye*4111+le*211+2));else{let st=De,_t=0,Lt=-1,bt=0;for(;Math.abs(st-De)<ot-1e-6&&bt++<64;){let Vt=P(j,ye*4111+le*211+_t)%Ge.length;Vt===Lt&&(Vt=(Vt+1)%Ge.length);let Wt=Ge[Vt];Lt=Vt;let Xt=ot-Math.abs(st-De),Fn=Math.min(Xt,Math.max(Wt.region.widthM/ne,1e-4)),yn=st+Fe*Fn,vn=N(Math.min(st,yn)),pn=N(Math.max(st,yn)),Xi=Math.min(.75,Math.max(Sr,vt/Wt.region.heightM));z(A,Wt.u0Full,Wt.u1Full,Wt.vTop,Wt.vBot,Xi,Wt.region.heightM,vn.x,vn.z,pn.x,pn.z,vt,Z,P(j,ye*4111+le*211+_t)),st=yn,_t++}}}}}else if(Y>Wd){let _e=Math.min(1,ve.widthM/ne),k=Math.max(0,.5-_e/2),Me=Math.min(1,.5+_e/2),ae=N(k),we=N(Me);qe.push({u0:L,u1:O,ax:ae.x,az:ae.z,bx:we.x,bz:we.z});let Re=Math.min(.75,Math.max(Sr,vt/ve.heightM)),le=X-W,De=W+Re*le,ot=(1-Re)*ve.heightM,ct=O-L,Gt=rg*ct,gi=rg*ve.widthM/ne,Wi=Math.max(0,ct-Gt),ln=Qa*ct,zn=Math.max(0,Wi-2*ln),qn=(Lt,bt,Vt,Wt,Xt,Fn,yn,vn)=>{let pn=yn===0?1:-1,Xi=Ai,Ho=0;for(;Xi<ve.heightM-1e-6&&ot>1e-4;){let ko=Math.min(ot,ve.heightM-Xi),qu=ko/ot,I=Wi>0&&vn>0?Math.min(ln+P(j,ye*977+yn*97+Ho)%1e3/1e3*zn,Wi):0,q=Lt+pn*I,ie=bt+pn*I,ee=Ho%2===0,te=ee?De:X,Ve=te+((ee?X:De)-te)*qu;T(A,q,te,ie,Ve,Vt,Wt,Xt,Fn,Xi,Xi+ko),F++,Xi+=ko,Ho++}},st=k,_t=0;for(;st>1e-6;){let Lt=Math.min(gi,st),bt=st-Lt,Vt=gi>0?Lt/gi:1,Wt=_t%2===0,Xt=Wt?L:L+Gt,Fn=Wt?L+Gt:L,yn=Xt+(Fn-Xt)*Vt,vn=N(bt),pn=N(st);qn(yn,Xt,vn.x,vn.z,pn.x,pn.z,0,_t),qe.push({u0:yn,u1:Xt,ax:vn.x,az:vn.z,bx:pn.x,bz:pn.z,skipBase:!0,side:0}),st=bt,_t++}for(st=Me,_t=0;st<1-1e-6;){let Lt=Math.min(gi,1-st),bt=st+Lt,Vt=gi>0?Lt/gi:1,Wt=_t%2===0,Xt=Wt?O:O-Gt,Fn=Wt?O-Gt:O,yn=Xt+(Fn-Xt)*Vt,vn=N(st),pn=N(bt);qn(Xt,yn,vn.x,vn.z,pn.x,pn.z,1,_t),qe.push({u0:Xt,u1:yn,ax:vn.x,az:vn.z,bx:pn.x,bz:pn.z,skipBase:!0,side:1}),st=bt,_t++}}else{let _e=J.get(ve),k,Me;if(_e&&_e.count>1&&_e.totalSpan>0){let Re=Qa*(O-L),le=L+Re,De=O-Re,Fe=Math.max(0,De-le),ot=le+Fe*(_e.cursor/_e.totalSpan);_e.cursor+=ne;let ct=le+Fe*(_e.cursor/_e.totalSpan);k=ot,Me=ct}else if(Y<1/Wd){let Re=Math.max(.08,Y),le=(O-L)*Re/2,De=(P(j,ye)%1e3/1e3-.5)*.3,Fe=L+le+.5*(O-L)+De*(O-le-(L+le));k=Math.max(L,Fe-le),Me=Math.min(O,Fe+le)}else{let Re=Qa*(O-L);k=L+Re,Me=O-Re}let ae=N(0),we=N(1);if(_e&&_e.count>1&&ne<XE){let Re=Math.min(.9,vt/ve.heightM);qe.push({u0:k,u1:Me,ax:ae.x,az:ae.z,bx:we.x,bz:we.z,y0:vt,v0:W+(X-W)*Re})}else qe.push({u0:k,u1:Me,ax:ae.x,az:ae.z,bx:we.x,bz:we.z,groundFade:!0})}for(let _e of qe)if(!_e.skipBase){if(_e.groundFade){if(F+=R(A,_e.u0,_e.u1,X,W,ve.heightM,_e.ax,_e.az,_e.bx,_e.bz),ve.heightM>vt+1e-6){let k=W+(X-W)*Math.min(1,vt/(ve.heightM||vt));T(A,_e.u0,k,_e.u1,X,_e.ax,_e.az,_e.bx,_e.bz,vt,ve.heightM),F++}continue}T(A,_e.u0,_e.v0??W,_e.u1,_e.v1??X,_e.ax,_e.az,_e.bx,_e.bz,_e.y0??Ai,ve.heightM),F++}if(Z-ve.heightM>cg){for(let _e of qe)if(_e.side===void 0)if(Ge.length>=3){let k=P(j,ye*8231+17)%Ge.length,Me=Ge[k],ae=Math.min(.75,Math.max(Sr,vt/Me.region.heightM));z(A,Me.u0Full,Me.u1Full,Me.vTop,Me.vBot,ae,Me.region.heightM,_e.ax,_e.az,_e.bx,_e.bz,ve.heightM,Z,P(j,ye*8231+18))}else Ne>0&&z(A,_e.u0,_e.u1,X,W,be,ve.heightM,_e.ax,_e.az,_e.bx,_e.bz,ve.heightM,Z,P(j,ye*8231+18))}if(Z-ve.heightM>cg&&qe.some(_e=>_e.side!==void 0)){let _e=X-W,k=X-og*_e,Me=Math.max(W,k-ag*_e),ae=ag*ve.heightM,we=O-L,Re=Qa*we,le={};for(let ot of qe){if(ot.side===void 0)continue;let ct=Math.max(0,we-Math.abs(ot.u1-ot.u0));(le[ot.side]===void 0||ct<le[ot.side])&&(le[ot.side]=ct)}let De=ve.heightM,Fe=0;for(;De<Z-1e-6&&ae>1e-4;){let ot=Math.min(ae,Z-De),ct=ot/ae,Gt=Fe%2===0,fn=Gt?k:Me,Wi=fn+((Gt?Me:k)-fn)*ct,ln=De,zn=De+ot,qn={};for(let st of[0,1]){let _t=le[st];if(_t===void 0)continue;let Lt=Math.max(0,_t-2*Re);qn[st]=_t>0?Math.min(Re+P(j,ye*613+Fe*31+st)%1e3/1e3*Lt,_t):0}for(let st of qe){if(st.side===void 0)continue;let Lt=(st.side===0?1:-1)*(qn[st.side]||0);T(A,st.u0+Lt,fn,st.u1+Lt,Wi,st.ax,st.az,st.bx,st.bz,ln,zn),F++}De=zn,Fe++}}}else if(p&&V.businesses&&V.businesses.length&&ne>=GE){let ue=V.businesses.length-ge,A=ue>0?Math.min(ue,Math.max(1,Math.round(ne/lg))):0;for(let G=0;G<A;G++){let L=V.businesses[ge+G],O=p.uvFor.get(L.name);if(!O)continue;let X=N(G/A),W=N((G+1)/A),Y=v*4;x.push(X.x,Ai+l,X.z,W.x,Ai+l,W.z,W.x,vt+l,W.z,X.x,vt+l,X.z),m.push(O.u0,O.vBot,O.u1,O.vBot,O.u1,O.vTop,O.u0,O.vTop);{let[Z,be,Ne]=_(X.x,X.z,W.x,W.z);b.push(Z,be,Ne,Z,be,Ne,Z,be,Ne,Z,be,Ne)}g.push(Y,Y+1,Y+2,Y,Y+2,Y+3),v++}ge+=A,F+=A;let E=Math.max(2,V.levels||2)*vt;if(E>vt+1e-6){let G=D(V.chainage),L=G>=0?(y.get(G)||[]).filter(O=>O.bi!==j):[];if(L.length){let O=S[G],X=0,W=0,Y=-1,Z=0;for(;X<1-1e-6&&Z++<64;){let be=P(j,ye*5813+W)%L.length;be===Y&&(be=(be+1)%L.length);let Ne=L[be];Y=be;let Ie=Math.min(1-X,Math.max(Ne.region.widthM/ne,1e-4)),Ce=N(X),Ge=N(X+Ie),qe=Math.min(.75,Math.max(Sr,vt/Ne.region.heightM));z(O,Ne.u0Full,Ne.u1Full,Ne.vTop,Ne.vBot,qe,Ne.region.heightM,Ce.x,Ce.z,Ge.x,Ge.z,vt,E,P(j,ye*5813+W+1)),X+=Ie,W++}}}}else if(!V.businesses||!V.businesses.length){let ue=D(V.chainage),A=ue>=0?(y.get(ue)||[]).filter(E=>E.bi!==j):[];if(A.length){let E=S[ue],G=Math.max(2,V.levels||2)*vt,L=0,O=0,X=-1,W=0;for(;L<1-1e-6&&W++<64;){let Y=P(j,ye*3457+O)%A.length;Y===X&&(Y=(Y+1)%A.length);let Z=A[Y];X=Y;let be=Math.min(1-L,Math.max(Z.region.widthM/ne,1e-4)),Ne=N(L),Ie=N(L+be),Ce=Math.min(.75,Math.max(Sr,vt/Z.region.heightM));z(E,Z.u0Full,Z.u1Full,Z.vTop,Z.vBot,Ce,Z.region.heightM,Ne.x,Ne.z,Ie.x,Ie.z,Ai,G,P(j,ye*3457+O+1)),L+=be,O++}}}})}if(F===0&&v===0)return{group:null,count:0,update(){}};let B=null;if(v&&p){let V=new pt;V.setAttribute("position",new Qe(x,3)),V.setAttribute("uv",new Qe(m,2)),V.setAttribute("normal",new Qe(b,3)),V.setIndex(g),V.computeBoundingSphere(),B=new Pe(V,new Ye({map:p.texture,color:new pe(4.7,4.7,4.7),side:Cn,fog:!0})),B.name="shopfront-placeholders",t.add(B)}let H=s.pages.map((V,j)=>{let he=S[j];if(!he.quadCount)return null;let Se=new pt;Se.setAttribute("position",new Qe(he.positions,3)),Se.setAttribute("uv",new Qe(he.uvs,2)),Se.setAttribute("color",new Qe(he.colors,3)),Se.setAttribute("normal",new Qe(he.normals,3)),Se.setIndex(he.indices),Se.computeBoundingSphere();let Ee=xn(i,V.file);return Ee.startsWith("assets/")&&V.etag&&(Ee+=`?v=${V.etag}`),{geo:Se,url:Ee,chainageMin:V.chainageMin,chainageMax:V.chainageMax,loaded:!1,mesh:null}});function K(V){if(V.loaded)return;V.loaded=!0;let j=new Si().load(V.url);j.colorSpace=tt,j.generateMipmaps=!1,j.minFilter=Zt,j.anisotropy=1,V.material||(V.material=new Ye({vertexColors:!0,color:new pe(4.7,4.7,4.7),side:Cn,fog:!0}),V.mesh=new Pe(V.geo,V.material),V.mesh.name="shopfronts-page"),V.material.map=j,t.add(V.mesh)}function se(V){V.loaded&&(V.loaded=!1,t.remove(V.mesh),V.material.map.dispose(),V.material.map=null)}function de(V){if(!V)return;let j=Fs(V.x,V.z,o);for(let he of H){if(!he)continue;j>=he.chainageMin-sg&&j<=he.chainageMax+sg?K(he):se(he)}}return de({x:o[0][0],z:o[0][1]}),{group:null,placeholders:B,count:F,placeholderCount:v,update:de,pages:H}}function Hi(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function YE(i){let e=i.getFullYear(),t=String(i.getMonth()+1).padStart(2,"0"),n=String(i.getDate()).padStart(2,"0");return`${e}-${t}-${n}`}function Er(){return typeof window<"u"&&typeof window.__mcgrotForceDate=="string"?window.__mcgrotForceDate:YE(new Date)}function Cu(){return Hi(Er())}function Iu(i=Er()){return Hi(i)%1e4/1e4*24}var qE=["January","February","March","April","May","June","July","August","September","October","November","December"];function ZE(i=Er()){let e=/^(\d{4})-(\d{2})-(\d{2})$/.exec(i);if(!e)return i;let t=qE[Number(e[2])-1]||e[2];return`${Number(e[3])} ${t} ${e[1]}`}function KE(i){let e=Math.floor((i%24+24)%24*60),t=String(Math.floor(e/60)).padStart(2,"0"),n=String(e%60).padStart(2,"0");return`${t}:${n}`}var $E={overcast:"dreich",clear:"clear",rain:"wet",drizzle:"smirr",haar:"haar"};function JE(i){return $E[i]||i}function hg(i,e,t){return`Leith Walk \u2014 ${ZE(i)} \xB7 arrived ${KE(e)}, ${JE(t)}`}var jE=18,Xd=23,Yd=34,QE=.08,eT=380,Pu=2e4,dg=.15,tT=6,nT=2.5,iT=22,sT=1.4;function rT(i,e){let t=i*73856093^e*19349663;return t=Math.imul(t^t>>>13,2246822507),t^=t>>>16,t>>>0}function oT(){return typeof window<"u"&&window.__mcgrotForceDaySeed!=null?window.__mcgrotForceDaySeed>>>0:Cu()}function aT(i,e){let t=i.comic&&i.comic.id||i.name||"";return rT(Hi(t),e)%1e6/1e6}function fg({camera:i,npcs:e,assets:t,onActiveChange:n}){let s=null,r=new Ia,o=new Map,a=!1,c=!1,l=0,u=0;function h(_,S){let y=o.get(_);if(!(y==="missing"||y==="loading")){if(y){S(y);return}o.set(_,"loading"),r.load(xn(t,_),T=>{o.set(_,T),S(T)},void 0,()=>{o.set(_,"missing")})}}function d(_){if(_.voice)return _.voice;if(!s)return null;let S=new La(s);S.setRefDistance(nT),S.setMaxDistance(iT),S.setDistanceModel("inverse"),S.setRolloffFactor(sT),S.setLoop(!0);let y=S.context.createBiquadFilter();return y.type="lowpass",y.frequency.value=Pu,S.setFilter(y),S._mutterFilter=y,_.group.add(S),_.voice=S,S}function f(_,S){_._readStartCtx=s.context.currentTime,_._readOffsetAtStart=S}function p(_,S){let y=_.comic.audio;y&&h(y,T=>{let M=d(_);if(!M)return;if(M.buffer!==T&&M.setBuffer(T),M.isPlaying){if(!S)return;M.stop()}let w=S?0:(u+aT(_,oT())*T.duration)%T.duration;M.offset=w,M.gain.gain.value=1,M._mutterFilter&&(M._mutterFilter.frequency.value=Pu),M.play(),f(M,w),_.setSpeaking(!0)})}function x(_){_.voice&&_.voice.isPlaying&&(_.voice.stop(),_.setSpeaking(!1))}function m(){let _=0;for(let S of e)S.voice&&S.voice.isPlaying&&_++;_!==l&&(l=_,n&&n(_))}function g(_,S){let y=_.voice;if(!y)return;let T=S<=Xd?0:Math.min(1,(S-Xd)/(Yd-Xd)),M=1-(1-QE)*T,w=Pu+(eT-Pu)*T,C=y.context;y.gain.gain.setTargetAtTime(M,C.currentTime,dg),y._mutterFilter&&y._mutterFilter.frequency.setTargetAtTime(w,C.currentTime,dg)}function b(_,S){if(u=S||0,!a||c)return;let y=i.position,T=[];for(let w of e){if(!w.comic.audio)continue;let C=w.group.position,R=Math.hypot(y.x-C.x,y.z-C.z);R<Yd&&T.push({npc:w,d:R})}T.sort((w,C)=>w.d-C.d);let M=new Map;for(let{npc:w,d:C}of T){if(M.size>=tT)break;let R=w.voice&&w.voice.isPlaying;(C<jE||R&&C<Yd)&&M.set(w,C)}for(let w of e)w.voice&&w.voice.isPlaying&&!M.has(w)&&x(w);for(let[w]of M)w.voice&&w.voice.isPlaying||p(w,!1);for(let[w,C]of M)g(w,C);m()}return{get listener(){return s},update:b,restart(_){p(_,!0),m()},togglePause(_){let S=_.voice;if(!S||!S.buffer)return p(_,!0),!0;if(S.isPlaying){let y=v(_);return S.pause(),_.setSpeaking(!1),m(),y!=null&&f(S,y),!1}return S.play(),f(S,S._readOffsetAtStart||0),_.setSpeaking(!0),m(),!0},setOverlayOpen(_){if(c=!!_,c){for(let S of e)S.voice&&S.voice.isPlaying&&x(S);m()}},getElapsed:v,isEnabled(){return a},setEnabled(_){a=!!_},resume(){s||(s=new Pa,i.add(s)),a=!0;let _=s.context;_&&_.state==="suspended"&&_.resume()}};function v(_){let S=_&&_.voice;if(!S||!S.buffer||S._readStartCtx==null)return null;let y=S.buffer.duration;if(!y)return 0;let M=(S.isPlaying?s.context.currentTime-S._readStartCtx+S._readOffsetAtStart:S._readOffsetAtStart)%y;return M<0&&(M+=y),M}}var cT=new Set(["INPUT","TEXTAREA","SELECT"]);function Us(i){let e=i&&i.target;return!e||!e.tagName?!1:cT.has(e.tagName)||e.isContentEditable===!0}var pg=8,lT=600;function mg({assets:i,npcs:e,camera:t,controls:n,proximityAudio:s,onReadingChange:r,litter:o,leithers:a,journal:c}){let l=document.getElementById("npc-prompt"),u=document.getElementById("npc-prompt-label"),h=document.getElementById("comic-overlay"),d=document.getElementById("comic-title"),f=document.getElementById("comic-image"),p=document.getElementById("comic-meta"),x=document.getElementById("comic-close"),m=document.getElementById("comic-playpause"),g=document.getElementById("comic-transcript"),b=null,v=null,_=null,S=null,y=!0,T=null,M=!1,w=null,C=null,R=-1;function P(ce){m&&(m.textContent=ce?"\u23F8":"\u25B6")}function F(ce){if(w=null,C=null,R=-1,!g)return;let ne=y&&i.readings&&ce&&ce.comic&&i.readings[ce.comic.id];if(!ne||!ne.phrases||!ne.phrases.length){g.style.display="none",g.textContent="";return}g.textContent="";let re=document.createDocumentFragment(),oe=[];for(let fe of ne.phrases){let me=document.createElement("div");me.className=`phrase ${fe.kind}`,me.textContent=fe.text,re.appendChild(me),oe.push(me)}g.appendChild(re),g.style.display="block",g.scrollTop=0,w=ne.phrases,C=oe}function z(){if(!w||!v)return;let ce=s.getElapsed(v);if(ce==null)return;let ne=-1;for(let fe=0;fe<w.length;fe++)ce>=w[fe].start&&(ne=fe);if(ne===R||(R>=0&&C[R]&&C[R].classList.remove("current"),R=ne,ne<0))return;let re=C[ne];re.classList.add("current");let oe=re.offsetTop-g.clientHeight/2+re.clientHeight/2;g.scrollTop=Math.max(0,oe)}function D(ce){r&&r(!!ce)}let B=()=>document.documentElement.classList.contains("touch");function H(ce){l&&(u&&(u.textContent=B()?`Tap to hear ${ce.name} read`:`[E] Hear ${ce.name} read`),l.style.display="block")}function K(){l&&(l.style.display="none")}function se(ce){T=null,M=!1,s.restart(ce),c&&ce.comic&&!ce.skipJournal&&(c.credit(ce.comic.id,"heard"),ce.isAnchor&&c.credit(ce.comic.id,"anchor"))}function de(){!M||!v||(clearTimeout(T),se(v))}function V(ce){!ce||v||c&&c.isOpen()||(v=ce,K(),d&&(d.textContent=ce.comic.title),p&&(p.textContent=`${ce.name} \u2014 ${ce.blurb}`),f&&(f.src=xn(i,ce.comic.image),f.alt=ce.comic.title,f.parentElement.scrollTop=0),F(ce),h&&(h.style.display="flex"),n.setEnabled(!1),s.setOverlayOpen(!0),P(!!(ce.comic&&ce.comic.audio)),D(!0),M=!0,T=setTimeout(()=>se(ce),lT))}function j(){!v&&!S||(T&&(clearTimeout(T),T=null),M=!1,P(!1),D(!1),h&&(h.style.display="none"),n.setEnabled(!0),s.setOverlayOpen(!1),v=null,S=null,F(null),b=null,_=null)}function he(ce){v||S||c&&c.isOpen()||(S=ce,K(),d&&(d.textContent=ce.comic.title||"McGrot"),p&&(p.textContent="found lying on the street"),f&&(f.src=xn(i,ce.comic.image),f.alt=ce.comic.title||"McGrot comic",f.parentElement.scrollTop=0),F(null),h&&(h.style.display="flex"),n.setEnabled(!1),s.setOverlayOpen(!0),c&&ce.comic&&c.credit(ce.comic.id,"found"),a&&Math.random()<.7&&a.summonReader(ce))}function Se(){if(!v)return;if(M){de();return}let ce=s.togglePause(v);P(ce),D(ce)}function Ee(ce){if(ce.code==="Escape"){(v||S)&&j();return}if(!Us(ce)&&ce.code==="KeyE"){if(M){de();return}!v&&!S&&(b?V(b):_&&he(_))}}function $(){v||S||(b?V(b):_&&he(_))}function Q(ce){if(M){de();return}ce.target===h&&j()}window.addEventListener("keydown",Ee),l&&l.addEventListener("click",$),h&&h.addEventListener("click",Q),x&&x.addEventListener("click",j),m&&m.addEventListener("click",Se);function J(){if(v||S){z();return}let ce=t.position.x,ne=t.position.z,re=null,oe=pg;for(let me=0;me<e.length;me++){let Le=e[me].group.position,Ae=Math.hypot(ce-Le.x,ne-Le.z);Ae<oe&&(oe=Ae,re=e[me])}let fe=!re&&o?o.nearestItem(ce,ne,3.2):null;(re!==b||fe!==_)&&(b=re,_=fe,b?H(b):_?(u&&(u.textContent=B()?"Tap to read the comic on the ground":"[E] Read the comic on the ground"),l&&(l.style.display="block")):K())}function ge(){window.removeEventListener("keydown",Ee),l&&l.removeEventListener("click",$),h&&h.removeEventListener("click",Q),x&&x.removeEventListener("click",j),m&&m.removeEventListener("click",Se),T&&clearTimeout(T)}function xe(ce){y=!!ce,v&&F(v)}function ye(){return!!(v||S)}function ze(){j(),K(),b=null}return{update:J,dispose:ge,setReadAlong:xe,suspend:ze,isOpen:ye,range:pg,readerCount:()=>e.length}}var Et=(()=>{let i=12648430;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),uT=35,Lu=11,hT=.9,dT=90,gg=[7027238,8013360,6042916,9065014,5189153],fT=22,pT=8,mT=3,xg=.06,gT=.16,Du=4,vg=14,_g=55;function Mg(i,e){let t=i.streetLine||[],n=i.groundHeight||(()=>0),s=new nt;e.add(s);let r=xT(t,s,n);bT(t,s,n,i.collision),ST(t,s,n);let o=ET(t,s,n),a=yT(r,s),c={group:s,poles:r,onArcFlash:null};return c.update=function(u,h){TT(o,u,h),MT(a,h,()=>{c.onArcFlash&&c.onArcFlash()})},c}function Fu(i,e){if(!i||i.length<2||e<0)return null;let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0,d=u||1;return{point:[s+c*h,r+l*h],tangent:[c/d,l/d]}}t+=u}return null}function qd(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function Nu(i,e){let t=new pe(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;i.setAttribute("color",new Qe(s,3))}function xT(i,e,t){let n=qd(i),s=[],r=[],o=[];for(let a=12;a<n-5;a+=uT){let c=Fu(i,a);if(!c)break;let[l,u]=c.tangent,h=-u,d=l,f=c.point[0]+h*Lu,p=c.point[1]+d*Lu,x=c.point[0]-h*Lu,m=c.point[1]-d*Lu,g=t(f,p),b=t(x,m),v=new U(f,g,p),_=new U(x,b,m),S=7.5+Et()*.6;s.push(yg(v,S)),s.push(yg(_,S)),r.push(_T(v.clone().setY(g+S-.4),_.clone().setY(b+S-.4))),o.push({position:v.clone().setY(g+S-.4)},{position:_.clone().setY(b+S-.4)})}if(s.length){let a=it(s,!1),c=new Ye({color:3814700,flatShading:!0});e.add(new Pe(a,c))}if(r.length){let a=it(r,!1),c=new Ts({color:1841685});e.add(new ur(a,c))}return o}function yg(i,e){let t=new tn(.09,.13,e,6);return t.translate(i.x,i.y+e/2,i.z),t}function _T(i,e){let n=[];for(let o=0;o<=8;o++){let a=o/8,c=ui.lerp(i.x,e.x,a),l=ui.lerp(i.z,e.z,a),u=ui.lerp(i.y,e.y,a),h=4*a*(1-a)*hT;n.push(c,u-h,l)}let s=[];for(let o=0;o<8;o++)s.push(n[o*3],n[o*3+1],n[o*3+2]),s.push(n[(o+1)*3],n[(o+1)*3+1],n[(o+1)*3+2]);let r=new pt;return r.setAttribute("position",new Qe(s,3)),r}function yT(i,e){if(!i.length)return[];let t=Math.min(mT,i.length),n=vT(i.length,t),s=[];for(let r of n){let o=i[r],a=new Vn(10473727,0,14,2);a.position.copy(o.position),e.add(a);let c=new un({color:14676735,transparent:!0,opacity:0,depthWrite:!1,blending:ls});c.userData.unlit=!1;let l=new Pe(new Qn(.12,6,6),c);l.position.copy(o.position),e.add(l),s.push({light:a,spark:l,active:!1,nextTime:Du+Et()*(vg-Du),flashEnd:0})}return s}function vT(i,e){let t=[];for(let n=0;n<e;n++)t.push(Math.floor((n+.5)/e*i));return t}function MT(i,e,t){for(let n of i)if(!n.active&&e>=n.nextTime){n.active=!0;let s=xg+Et()*(gT-xg);n.flashEnd=e+s,n.light.intensity=_g,n.spark.material.opacity=1,n.spark.scale.setScalar(.8+Et()*.6),t()}else n.active&&e>=n.flashEnd?(n.active=!1,n.light.intensity=0,n.spark.material.opacity=0,n.nextTime=e+Du+Et()*(vg-Du)):n.active&&(n.light.intensity=_g*(.7+Et()*.3))}function bT(i,e,t,n){let s=Fu(i,dT);if(!s)return;let[r,o]=s.tangent,a=-o,c=r,l=5.5,u=s.point[0]+a*l,h=s.point[1]+c*l,d=t(u,h),f=Math.atan2(r,o),p=[],x=new Ze(2.6,3.1,11);Nu(x,7030064),p.push(x);let m=new Ze(2.3,.3,10.6);m.translate(0,1.7,0),Nu(m,4864556),p.push(m);for(let _=-1;_<=1;_++)for(let S of[-1,1]){let y=(Et()-.5)*.3,T=new Ze(.08,.9+Et()*.3,1.6);T.translate(S*1.32,.5+y,_*3.2+(Et()-.5)*.6),Nu(T,789770),p.push(T)}let g=it(p,!1),b=new Ye({vertexColors:!0,flatShading:!0}),v=new Pe(g,b);v.position.set(u,d+1.85,h),v.rotation.y=f,v.rotation.z=.09,e.add(v),n&&n.addBox(u,h,1.3,5.5,f,"tram")}function ST(i,e,t){let n=qd(i);if(n<4)return;let s=[];for(let a=0;a<fT;a++){let c=25+Et()*Math.max(10,n-33),l=Fu(i,c);if(!l)continue;let[u,h]=l.tangent,d=-h,f=u,p=Et()<.5?1:-1,x=(7.5+Et()*3)*p,m=l.point[0]+d*x,g=l.point[1]+f*x,b=Et()<.4,v=b?new tn(.32,.34,.7,8):new Ze(.5+Et()*.3,.4+Et()*.3,.5+Et()*.3),_=b?.35:.2;v.translate(0,_,0),v.rotateY(Et()*Math.PI),Et()<.3&&v.rotateZ((Et()-.5)*.5),v.translate(m,t(m,g),g),Nu(v,gg[a%gg.length]),s.push(v)}if(!s.length)return;let r=it(s,!1),o=new Ye({vertexColors:!0,flatShading:!0});e.add(new Pe(r,o))}function ET(i,e,t){let n=qd(i);if(n<4)return[];let s=wT(),r=[];for(let o=0;o<pT;o++){let a=35+Et()*Math.max(20,n-55),c=Fu(i,a);if(!c)continue;let l=new Di({map:s,transparent:!0,opacity:.18,depthWrite:!1,color:3815468}),u=new ts(l),h=8+Et()*4;u.scale.set(h,h,1),e.add(u);let d=c.point[0]+(Et()-.5)*14,f=c.point[1]+(Et()-.5)*14;r.push({sprite:u,baseX:d,baseZ:f,baseY:t(d,f)+6+Et()*3,phase:Et()*Math.PI*2,riseSpeed:.25+Et()*.15,riseRange:9+Et()*3,driftAmp:2+Et()*2,driftFreq:.05+Et()*.05,baseOpacity:.14+Et()*.1})}return r}function TT(i,e,t){for(let n of i){let s=(t*n.riseSpeed+n.phase)%n.riseRange;n.sprite.position.set(n.baseX+Math.sin(t*n.driftFreq+n.phase)*n.driftAmp,n.baseY+s,n.baseZ+Math.cos(t*n.driftFreq*.8+n.phase)*n.driftAmp);let r=s/n.riseRange;n.sprite.material.opacity=n.baseOpacity*(1-Math.abs(r-.5)*1.4)}}function wT(){let e=document.createElement("canvas");e.width=128,e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,"rgba(60,58,48,0.55)"),n.addColorStop(.5,"rgba(50,48,40,0.25)"),n.addColorStop(1,"rgba(40,38,32,0)"),t.fillStyle=n,t.fillRect(0,0,128,128);let s=new xt(e);return s.colorSpace=tt,s}function bg(i){let e=new Map,t=new Map,n=i.clone();return Sg(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Sg(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Sg(i.children[n],e.children[n],t)}var Bs=class extends bi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ef(t)}),this.register(function(t){return new tf(t)}),this.register(function(t){return new hf(t)}),this.register(function(t){return new df(t)}),this.register(function(t){return new ff(t)}),this.register(function(t){return new sf(t)}),this.register(function(t){return new rf(t)}),this.register(function(t){return new of(t)}),this.register(function(t){return new af(t)}),this.register(function(t){return new Qd(t)}),this.register(function(t){return new cf(t)}),this.register(function(t){return new nf(t)}),this.register(function(t){return new uf(t)}),this.register(function(t){return new lf(t)}),this.register(function(t){return new Jd(t)}),this.register(function(t){return new Uu(t,ft.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Uu(t,ft.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new pf(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=cs.extractUrlBase(e);o=cs.resolveURL(l,this.path)}else o=cs.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new fr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Rg){try{o[ft.KHR_BINARY_GLTF]=new mf(e)}catch(h){s&&s(h);return}r=JSON.parse(o[ft.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new bf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case ft.KHR_MATERIALS_UNLIT:o[h]=new jd;break;case ft.KHR_DRACO_MESH_COMPRESSION:o[h]=new gf(r,this.dracoLoader);break;case ft.KHR_TEXTURE_TRANSFORM:o[h]=new xf;break;case ft.KHR_MESH_QUANTIZATION:o[h]=new _f;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function AT(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function nn(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Jd=class{constructor(e){this.parser=e,this.name=ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new pe(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],On);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new as(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Vn(u),l.distance=h;break;case"spot":l=new Aa(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ki(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},jd=class{constructor(){this.name=ft.KHR_MATERIALS_UNLIT}getMaterialType(){return un}extendParams(e,t,n){let s=[];e.color=new pe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],On),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,tt))}return Promise.all(s)}},Qd=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=nn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},ef=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return nn(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=nn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Te(r,r)}return Promise.all(s)}},tf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DISPERSION}getMaterialType(e){return nn(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=nn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},nf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return nn(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=nn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},sf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SHEEN}getMaterialType(e){return nn(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=nn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new pe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],On)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,tt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},rf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return nn(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=nn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},of=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_VOLUME}getMaterialType(e){return nn(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=nn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new pe().setRGB(r[0],r[1],r[2],On),Promise.all(s)}},af=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IOR}getMaterialType(e){return nn(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=nn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},cf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){return nn(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=nn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new pe().setRGB(r[0],r[1],r[2],On),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,tt)),Promise.all(s)}},lf=class{constructor(e){this.parser=e,this.name=ft.EXT_MATERIALS_BUMP}getMaterialType(e){return nn(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=nn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},uf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return nn(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=nn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},hf=class{constructor(e){this.parser=e,this.name=ft.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},df=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},ff=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},Uu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},pf=class{constructor(e){this.name=ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==di.TRIANGLES&&l.mode!==di.TRIANGLE_STRIP&&l.mode!==di.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(let p of h){let x=new $e,m=new U,g=new Ut,b=new U(1,1,1),v=new gn(p.geometry,p.material,d);for(let _=0;_<d;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,_),c.SCALE&&b.fromBufferAttribute(c.SCALE,_),v.setMatrixAt(_,x.compose(m,g,b));for(let _ in c)if(_==="_COLOR_0"){let S=c[_];v.instanceColor=new Es(S.array,S.itemSize,S.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&p.geometry.setAttribute(_,c[_]);Ot.prototype.copy.call(v,p),this.parser.assignFinalMaterial(v),f.push(v)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},Rg="glTF",ec=12,Eg={JSON:1313821514,BIN:5130562},mf=class{constructor(e){this.name=ft.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ec),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Rg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ec,r=new DataView(e,ec),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Eg.JSON){let l=new Uint8Array(e,ec+o,a);this.content=n.decode(l)}else if(c===Eg.BIN){let l=ec+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},gf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let u in o){let h=vf[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=vf[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=Ro[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let p in f.attributes){let x=f.attributes[p],m=c[p];m!==void 0&&(x.normalized=m)}h(f)},a,l,On,d)})})}},xf=class{constructor(){this.name=ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},_f=class{constructor(){this.name=ft.KHR_MESH_QUANTIZATION}},Ou=class extends Fi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,p=e*l,x=p-l,m=-2*f+3*d,g=f-d,b=1-m,v=g-d+h;for(let _=0;_!==a;_++){let S=o[x+_+a],y=o[x+_+c]*u,T=o[p+_+a],M=o[p+_]*u;r[_]=b*S+v*y+m*T+g*M}return r}},RT=new Ut,yf=class extends Ou{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return RT.fromArray(r).normalize().toArray(r),r}},di={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ro={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Tg={9728:qt,9729:Zt,9984:Cl,9985:vo,9986:_r,9987:Ti},wg={33071:oi,33648:so,10497:ci},Zd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Os={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},CT={CUBICSPLINE:void 0,LINEAR:sr,STEP:ir},Kd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function IT(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new li({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Cn})),i.DefaultMaterial}function Tr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ki(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function PT(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function LT(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function NT(i){let e,t=i.extensions&&i.extensions[ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+$d(t.attributes):e=i.indices+":"+$d(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+$d(i.targets[n]);return e}function $d(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Mf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function DT(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var FT=new $e,bf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new AT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Si(this.options.manager):this.textureLoader=new Ca(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new fr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Tr(r,a,s),ki(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,u]of o.children.entries())r(u,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ft.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(cs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Zd[s.type],a=Ro[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new wt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Zd[s.type],l=Ro[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,x,m;if(f&&f!==h){let g=Math.floor(d/f),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,v=t.cache.get(b);v||(x=new l(a,g*f,s.count*f/u),v=new ar(x,f/u),t.cache.add(b,v)),m=new Ss(v,c,d%f/u,p)}else a===null?x=new l(s.count*c):x=new l(a,d,s.count*c),m=new wt(x,c,p);if(s.sparse!==void 0){let g=Zd.SCALAR,b=Ro[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,S=new b(o[1],v,s.sparse.count*g),y=new l(o[2],_,s.sparse.count*c);a!==null&&(m=new wt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,M=S.length;T<M;T++){let w=S[T];if(m.setX(w,y[T*c]),c>=2&&m.setY(w,y[T*c+1]),c>=3&&m.setZ(w,y[T*c+2]),c>=4&&m.setW(w,y[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Tg[d.magFilter]||Zt,u.minFilter=Tg[d.minFilter]||Ti,u.wrapS=wg[d.wrapS]||ci,u.wrapT=wg[d.wrapT]||ci,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==qt&&u.minFilter!==Zt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;let d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(x){let m=new an(x);m.needsUpdate=!0,d(m)}),t.load(cs.resolveURL(h,r.path),p,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),ki(h,o),h.userData.mimeType=o.mimeType||DT(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ft.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ft.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[ft.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new ws,In.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Ts,In.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return li}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[ft.KHR_MATERIALS_UNLIT]){let h=s[ft.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new pe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],On),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,tt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Pt);let u=r.alphaMode||Kd.OPAQUE;if(u===Kd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Kd.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==un&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Te(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==un&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==un){let h=r.emissiveFactor;a.emissive=new pe().setRGB(h[0],h[1],h[2],On)}return r.emissiveTexture!==void 0&&o!==un&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,tt)),Promise.all(l).then(function(){let h=new o(a);return r.name&&(h.name=r.name),ki(h,r),t.associations.set(h,{materials:e}),r.extensions&&Tr(s,h,r),h})}createUniqueName(e){let t=Ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Ag(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],u=NT(l),h=s[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[ft.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Ag(new pt,l,t),s[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let u=o[c].material===void 0?IT(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,p=u.length;f<p;f++){let x=u[f],m=o[f],g,b=l[f];if(m.mode===di.TRIANGLES||m.mode===di.TRIANGLE_STRIP||m.mode===di.TRIANGLE_FAN||m.mode===void 0)g=r.isSkinnedMesh===!0?new ua(x,b):new Pe(x,b),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===di.TRIANGLE_STRIP?g.geometry=Ad(g.geometry,Ga):m.mode===di.TRIANGLE_FAN&&(g.geometry=Ad(g.geometry,So));else if(m.mode===di.LINES)g=new ur(x,b);else if(m.mode===di.LINE_STRIP)g=new lr(x,b);else if(m.mode===di.LINE_LOOP)g=new da(x,b);else if(m.mode===di.POINTS)g=new hr(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&LT(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),ki(g,r),m.extensions&&Tr(s,g,m),t.assignFinalMaterial(g),h.push(g)}for(let f=0,p=h.length;f<p;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Tr(s,h[0],r),h[0];let d=new nt;r.extensions&&Tr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=h.length;f<p;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new on(ui.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Is(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ki(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){let h=o[l];if(h){a.push(h);let d=new $e;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ha(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],p=s.samplers[f.sampler],x=f.target,m=x.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,b=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",b)),l.push(p),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],p=h[2],x=h[3],m=h[4],g=[];for(let v=0,_=d.length;v<_;v++){let S=d[v],y=f[v],T=p[v],M=x[v],w=m[v];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let C=n._createAnimationTracks(S,y,T,M,w);if(C)for(let R=0;R<C.length;R++)g.push(C[R])}let b=new Ta(r,void 0,g);return ki(b,s),b})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,FT)});for(let f=0,p=h.length;f<p;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){let f=u.userData.pivot,p=h[0];u.pivot=new U().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new uo:l.length>1?u=new nt:l.length===1?u=l[0]:u=new Ot,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),ki(u,r),r.extensions&&Tr(n,u,r),r.matrix!==void 0){let h=new $e;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new nt;n.name&&(r.name=s.createUniqueName(n.name)),ki(r,n),n.extensions&&Tr(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++){let d=c[u];d.parent!==null?r.add(bg(d)):r.add(d)}let l=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof In||d instanceof an)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Os[r.path]===Os.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let u;switch(Os[r.path]){case Os.weights:u=ss;break;case Os.rotation:u=rs;break;case Os.translation:case Os.scale:u=Rs;break;default:n.itemSize===1?u=ss:u=Rs;break}let h=s.interpolation!==void 0?CT[s.interpolation]:sr,d=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let x=new u(c[f]+"."+Os[r.path],t.array,d,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Mf(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof rs?yf:Ou;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function UT(i,e,t){let n=e.attributes,s=new en;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new U(c[0],c[1],c[2]),new U(l[0],l[1],l[2])),a.normalized){let u=Mf(Ro[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new U,c=new U;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let x=Mf(Ro[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Hn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Ag(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=vf[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ht.workingColorSpace!==On&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),ki(i,e),UT(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?PT(i,e.targets,t):i})}var OT=!0,Ef=[{name:"bulk",file:"characters/rab-form.glb",girth:1.42,headScale:1.198,frontZ:.2},{name:"slab",file:"characters/slab-form.glb",girth:1.195,headScale:1.204,frontZ:.15},{name:"runt",file:"characters/runt-form.glb",girth:.918,headScale:1.47,frontZ:.093},{name:"stoop",file:"characters/morag-form.glb",girth:.712,headScale:1.485,frontZ:.187},{name:"spindle",file:"characters/kenneth-form.glb",girth:.68,headScale:1.357,frontZ:.083}],BT=.17,zT=.27,HT=.14,kT=.2848,GT=.1239,VT=.25;function Tf(i,e=VT){let t=i||Tu,n=Ef[0],s=1/0;for(let r of Ef){let o=(t.girth-r.girth)/kT,a=(t.headScale-r.headScale)/GT,c=o*o+e*a*a;c<s&&(s=c,n=r)}return n}function WT(i){let e=i||Tu,t=Tf(e),n=Gd(e).headTopY;return{arch:t,height:n,squash:e.girth/t.girth}}function Pg(i,e,t,n){let s=Ln("Characters",OT),r=Ln("Tint",!0),o=Ln("CharacterFail",!1),a=n&&Array.isArray(n.npcs)?n.npcs:[];if(!s||!a.length){for(let S of a)S.buildDoll();return{enabled:s,tinted:r,loaded:()=>0,assigned:0,counts:{},onArchetype:()=>{}}}let c=a,l=new Map;for(let S of c){let y=WT(S.build);S.archetype=y.arch.name,S.squash=y.squash,l.has(y.arch.name)||l.set(y.arch.name,{arch:y.arch,npcs:[]}),l.get(y.arch.name).npcs.push({npc:S,...y})}let u=new Bs,h=[],d=0,f=0,p=new Map,x=[],m=(S,y,T)=>{try{S(y,T)}catch(M){console.error("archetype subscriber failed",y.name,M)}},g=(S,y)=>{p.set(S.name,{arch:S,proto:y});for(let T of x)m(T,S,y)},b=S=>{for(let{arch:y,proto:T}of p.values())m(S,y,T);x.push(S)};for(let S of Ef){let y=(l.get(S.name)||{npcs:[]}).npcs;(o?Promise.reject(new Error("forced")):u.loadAsync(xn(i,S.file))).then(T=>{let M=wf(T.scene),w=Ig(M,M),C=w.x/(w.y||1),R=null;M.traverse(P=>{!R&&P.isMesh&&P.material&&(R=P.material.color.clone())});for(let P of y){let F=M.clone(!0);F.name="vendor-mesh",r&&YT(F,P.npc),F.scale.set(P.height*P.squash,P.height,P.height*P.squash),P.npc.group.add(F),P.npc.comicMesh&&(P.npc.comicMesh.position.z=S.frontZ*P.height*P.squash+BT),h.push({npc:P.npc,arch:S,inst:F,protoAspect:C,protoColor:R}),d++}g(S,M)}).catch(()=>{for(let T of y)T.npc.buildDoll(),f++;g(S,null)})}let v={};for(let[S,y]of l)v[S]=y.npcs.length;return{enabled:s,tinted:r,loaded:()=>d,fellBack:()=>f,assigned:c.length,counts:v,measure:_,onArchetype:b};function _(){return h.map(({npc:S,arch:y,inst:T,protoAspect:M,protoColor:w})=>{let C=Ig(T,S.group),R=null;T.traverse(F=>{!R&&F.isMesh&&F.material&&(R=F.material)});let P=R&&w?new pe(R.color.r/(w.r||1),R.color.g/(w.g||1),R.color.b/(w.b||1)):null;return{name:S.name,archetype:y.name,meshTop:C.y,distortion:C.x/(C.y||1)/(M||1),materialId:R?R.uuid:null,meshNote:P?XT(P):null}})}}function XT(i){let e=(i.r+i.g+i.b)/3;return e>0?[i.r/e,i.g/e,i.b/e]:[1,1,1]}function YT(i,e){let t=e.noteColor;if(!t)return;let n=t.clone(),s=(n.r+n.g+n.b)/3;s>0&&n.multiplyScalar(1/s);let r=[n.r-1,n.g-1,n.b-1],o=Math.hypot(r[0],r[1],r[2]),a=o>0?zT/o:0,c=new pe(1+r[0]*a,1+r[1]*a,1+r[2]*a),l=0;for(let h of e.name||"")l=l*31+h.charCodeAt(0)|0;let u=1+((Math.abs(l)>>7)%1e3/1e3-.5)*2*HT;c.multiplyScalar(u),i.traverse(h=>{!h.isMesh||!h.material||(h.material=h.material.clone(),h.material.color.multiply(c))})}var qT=new $e,Cg=new en,Sf=new en;function Ig(i,e){e.updateWorldMatrix(!0,!1),i.updateWorldMatrix(!1,!0),Sf.makeEmpty();let t=qT.copy(e.matrixWorld).invert(),n=new $e;return i.traverse(s=>{!s.isMesh||!s.geometry||(s.geometry.computeBoundingBox(),Cg.copy(s.geometry.boundingBox).applyMatrix4(n.multiplyMatrices(t,s.matrixWorld)),Sf.union(Cg))}),Sf.getSize(new U)}function wf(i){i.traverse(o=>{if(!o.isMesh||!o.material)return;let a=o.material;o.material=new Ye({map:a.map||null,color:(a.color?a.color.clone():new pe(16777215)).multiplyScalar(.42)})});let e=new en().setFromObject(i),t=e.getSize(new U),n=e.getCenter(new U),s=1/(t.y||1);i.scale.setScalar(s),i.position.set(-n.x*s,-e.min.y*s,-n.z*s);let r=new nt;return r.add(i),r}var ZT=!0,Lg=740,tc=1,Af=7.6,Ng="characters/mcgrot-form.glb",Dg="characters/pomple-form.glb",KT=1.72,$T=.42,Og=.45,JT=.3,jT=3,QT=8,Rf=["AWAY.","BACK NEVER.","\u2014 McG"],ew="3c6b637b",tw="McGrot",nw="Proprietor o' the Gullet",Kt=4.4,Mt=2.6,bn=2.05,sn=.62,Cf=.42,Co=2.2,Vi=.35,Gi=sn+.52,zs=sn+1.8,Fg=1973273,iw=6116421,Bg=4860444,sw=7164440,rw=4857114,nc=(()=>{let i=7143703;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})();function ow(){return Ln("Gullet",ZT)}function aw(i){return Hi(`gullet:${i}`)%QT<jT}function zg(i,e,t){let n=ow(),s={enabled:!1,group:null,placement:null,solids:0,dayKey:null,mcgrotIn:!1,mcgrot:null,pomple:null,reader:null,meshes:()=>0};if(!n||!e||!t)return s;let r=e.streetLine||[],o=mw(r,Lg);if(!o)return s;let a=e.groundHeight||(()=>0),[c,l]=o.tangent,u=-l,h=c,d=o.point[0]+u*Af*tc,f=o.point[1]+h*Af*tc,p=a(d,f),x=Math.atan2(-u*tc,-h*tc),m=new nt;m.name="gullet",m.position.set(d,p,f),m.rotation.y=x,t.add(m),cw(m),lw(m),uw(m),hw(m);let g=Er(),b=aw(g);b||fw(m);let v=0;if(e.collision){e.collision.addBox(d,f,Kt*.5,Mt*.5,x,"gullet"),v++;let[D,B]=Ug(d,f,x,Kt*.5+.5,-Mt*.35);e.collision.addBox(D,B,.15,.85,x,"gullet"),v++}let _=[Vi,-.15],S=sn,y=b?[Kt*.5+.9,Mt*.5+.25]:[Kt*.5+1.4+Hi(`pomple:${g}`)%100/100*1.6,Mt*.5-.4-Hi(`pomple-z:${g}`)%100/100*1.2],T={mcgrot:null,pomple:null},M=0,w=0,C=new Bs,R=(D,B,H,K,se=0)=>{let[de,V]=Ug(d,f,x,B[0],B[1]),j=a(de,V)+se;e.collision&&(e.collision.addCircle(de,V,K==="mcgrot"?Og:JT,"gullet-cast"),M++);let he=new nt;he.name=`gullet-${K}`,he.position.set(de,j,V),he.rotation.y=x,t.add(he),T[K]={holder:he,x:de,y:j,z:V,height:H,loaded:!1},C.loadAsync(xn(i,D)).then(Se=>{let Ee=wf(Se.scene);Ee.name=`${K}-mesh`,Ee.scale.setScalar(H),he.add(Ee),T[K].loaded=!0,w++}).catch(()=>{})},P=typeof window<"u"&&!!window.MCGROT_ASSETS,F=D=>!P||!!(i&&i.models&&i.models[D]);b&&F(Ng)&&R(Ng,_,KT,"mcgrot",S);let z=b?dw(i,T.mcgrot):null;return F(Dg)&&R(Dg,y,$T,"pomple"),{enabled:!0,group:m,solids:v,castSolids:M,dayKey:g,mcgrotIn:b,mcgrot:T.mcgrot,pomple:T.pomple,reader:z,meshes:()=>w,placement:{chainage:Lg,side:tc,offset:Af,x:d,y:p,z:f,yaw:x}}}function cw(i){let e=[],t=[],s=sn,r=sn+bn,o=(g,b,v,_,S,y)=>{let T=new Ze(g,b,v);T.translate(_,S,y),e.push(T)};o(Kt,bn,.08,0,sn+bn*.5,-Mt*.5+.08*.5),o(.08,bn,Mt,-Kt*.5+.08*.5,sn+bn*.5,0),o(.08,bn,Mt,Kt*.5-.08*.5,sn+bn*.5,0),o(Kt,.08,Mt,0,r-.08*.5,0),o(Kt,.08,Mt,0,s+.08*.5,0);let a=Vi-Co*.5,c=Vi+Co*.5,l=Mt*.5-.08*.5;o(a+Kt*.5,bn,.08,(-Kt*.5+a)*.5,sn+bn*.5,l),o(Kt*.5-c,bn,.08,(c+Kt*.5)*.5,sn+bn*.5,l),o(Co,Gi-s,.08,Vi,(s+Gi)*.5,l),o(Co,r-zs,.08,Vi,(zs+r)*.5,l);let u=.03,h=(g,b,v,_,S,y)=>{let T=new Ze(g,b,v);T.translate(_,S,y),t.push(T)},d=Kt-.08*2,f=bn-.08*2;h(d,f,u,0,sn+bn*.5,-Mt*.5+.08+u*.5),h(u,f,Mt-.08*2,-Kt*.5+.08+u*.5,sn+bn*.5,0),h(u,f,Mt-.08*2,Kt*.5-.08-u*.5,sn+bn*.5,0),h(d,u,Mt-.08*2,0,r-.08-u*.5,0),h(d,u,Mt-.08*2,0,s+.08+u*.5,0);let p=new Ze(1.5,bn*.72,Mt*.94);p.translate(-Kt*.5-.72,sn+bn*.36,0),e.push(p);for(let[g,b,v,_]of[[Co+.12,.07,Vi,Gi],[Co+.12,.07,Vi,zs],[.07,zs-Gi,a,(Gi+zs)*.5],[.07,zs-Gi,c,(Gi+zs)*.5]]){let S=new Ze(g,b,.1);S.translate(v,_,Mt*.5-.02),t.push(S)}let x=new Ze(2.5,.05,.95);x.rotateX(-.34),x.translate(.15,sn+1.95,Mt*.5+.42);for(let g of[-1,1]){let b=new Ze(.04,.04,.95);b.rotateX(-.34),b.translate(.15+g*1.18,sn+1.95,Mt*.5+.42),t.push(b)}for(let g of[1,-1]){let b=new Ze(Kt*.998,.34,.05);b.translate(0,sn+.17,g*(Mt*.5+.01)),t.push(b)}for(let g of[1,-1]){let b=new Ze(.05,.34,Mt*.998);b.translate(g*(Kt*.5+.01),sn+.17,0),t.push(b)}let m=[];for(let g of[-Kt*.34,Kt*.34])for(let b of[-Mt*.42,Mt*.42]){let v=new tn(Cf,Cf,.26,10);v.rotateZ(Math.PI/2),v.translate(g,Cf,b),m.push(v)}wr(i,e,iw,"gullet-body"),wr(i,t,Fg,"gullet-trim"),wr(i,m,Fg,"gullet-wheels"),wr(i,[x],sw,"gullet-awning")}function lw(i){let e=[],t=[],n=new Ze(2.5,.07,.42);n.translate(Vi,Gi-.02,Mt*.5+.19),e.push(n);for(let o=0;o<5;o++){let a=.2+nc()*.09,c=new tn(.045,.055,a,6);c.translate(Vi-1.05+o*.5+(nc()-.5)*.12,Gi+.02+a*.5,Mt*.5+.17+(nc()-.5)*.06),t.push(c)}let s=new tn(.018,.018,.44,5);s.rotateZ(.16),s.translate(1.42,sn+1.34,Mt*.5+.09),e.push(s);let r=new Qn(.085,7,5,0,Math.PI*2,Math.PI*.5,Math.PI*.5);r.translate(1.46,sn+1.12,Mt*.5+.09),e.push(r),wr(i,e,Bg,"gullet-counter"),wr(i,t,rw,"gullet-props")}function uw(i){let e=[],t=new Ze(1.5,1.7,.06);t.rotateY(Math.PI/2),t.rotateZ(-.09),t.translate(Kt*.5+.5,.85,-Mt*.35),e.push(t);for(let n=0;n<3;n++){let s=new Ze(.09,1.5+nc()*.3,.05);s.rotateZ((nc()-.5)*.5),s.translate(Kt*.5+.52,.8,-Mt*.35-.5+n*.5),e.push(s)}wr(i,e,Bg,"gullet-hoarding")}function hw(i){let e=new xt(pw());e.colorSpace=tt;let t=new Pe(new yt(1.15,.86),new Ye({map:e}));t.name="gullet-price-board",t.position.set(-1.4,sn+1.34,Mt*.5+.13),t.rotation.y=.12,i.add(t)}function dw(i,e){let n=(i&&i.catalog&&Array.isArray(i.catalog.comics)?i.catalog.comics:[]).find(s=>s.id===ew);return!n||!e?null:{group:e.holder,comic:n,name:tw,blurb:nw,isAnchor:!1,skipJournal:!0,collisionRadius:Og,voice:null,speaking:!1,setSpeaking(s){this.speaking=!!s}}}function fw(i){let e=document.createElement("canvas");e.width=384,e.height=192;let t=e.getContext("2d");t.fillStyle="#2b2620",t.fillRect(0,0,e.width,e.height),t.strokeStyle="#5e513c",t.lineWidth=6,t.strokeRect(8,8,e.width-16,e.height-16),t.textAlign="center",t.fillStyle="#bfa871",t.font='bold 46px "Courier New", monospace',t.fillText(Rf[0],e.width/2,66),t.fillText(Rf[1],e.width/2,116),t.font='italic 30px "Courier New", monospace',t.fillStyle="#8e7b52",t.fillText(Rf[2],e.width/2,160);let n=new xt(e);n.colorSpace=tt;let s=new Pe(new yt(1.9,.95),new Ye({map:n}));s.name="gullet-shut-sign",s.position.set(Vi,(Gi+zs)*.5,Mt*.5+.16),s.rotation.y=-.05,i.add(s)}function pw(){let i=document.createElement("canvas");i.width=320,i.height=240;let e=i.getContext("2d");return e.fillStyle="#3a3226",e.fillRect(0,0,i.width,i.height),e.strokeStyle="#6f6047",e.lineWidth=5,e.strokeRect(7,7,i.width-14,i.height-14),e.textAlign="center",e.fillStyle="#c9b787",e.font='bold 40px "Courier New", monospace',e.fillText("THE GULLET",i.width/2,54),e.font='25px "Courier New", monospace',e.textAlign="left",[["MEAT","1.20"],["MEAT (HOT)","1.60"],["SOUP","90p"],["THE USUAL","ASK"]].forEach(([n,s],r)=>{let o=100+r*32;e.fillStyle="#b9a87c",e.fillText(n,26,o),e.textAlign="right",e.fillText(s,i.width-26,o),e.textAlign="left"}),e.font='italic 19px "Courier New", monospace',e.fillStyle="#8e7f5d",e.fillText("NO REFUNDS. NO QUESTIONS.",24,226),i}function wr(i,e,t,n){if(!e.length)return;let s=new Pe(it(e,!1),new Ye({color:t,flatShading:!0}));s.name=n,i.add(s)}function Ug(i,e,t,n,s){let r=Math.cos(t),o=Math.sin(t);return[i+n*r+s*o,e-n*o+s*r]}function mw(i,e){if(!i||i.length<2||e<0)return null;let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0,d=u||1;return{point:[s+c*h,r+l*h],tangent:[c/d,l/d]}}t+=u}return null}var gw=!0,Hg="valvona-crolla",xw="Valvona & Crolla";var ic=7,Rr=9,Nn=3.6,Sn=ic/2,Dn=Rr/2,ds=.25,rc=-1.6,Ar=1.05,oc=.72,sc=-Sn,Io=1.7,Po=.45,kg=5,Gg=2.55,pi=1.02,fi=2.12,Xn=1.35,No=-3.15,Do=.45,Pf=.92,Lf=2.62,_w=5984832,yw=4537646,Cr=6971204,Vg=7957582,If=4931626,vw=4866869,Hs=7298099,Ir=4996898,Mw=10195064,Bu=8024675,Nf=9073716,Lo=[9071156,7166508,9730367,6246186,8218424,10522449],bw=11050627,Wg=2762009,Sw=.028,Xg=1.05;function Ew(){return Ln("Interior",gw)}function Tw(i){let e=Hi(`interior:${i}`)|0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Rt(i,e,t,n,s,r,o,a,c=0){let l=new Ze(s,r,o);c&&l.rotateY(c),l.translate(e,t,n);let u=new pe(a),h=l.attributes.position.count,d=new Float32Array(h*3);for(let f=0;f<h;f+=1)d[f*3]=u.r,d[f*3+1]=u.g,d[f*3+2]=u.b;return l.setAttribute("color",new wt(d,3)),i.push(l),l}function zu(i,e,t,n,s,r,o,a=8){let c=new tn(s,s,r,a);c.translate(e,t,n);let l=new pe(o),u=c.attributes.position.count,h=new Float32Array(u*3);for(let d=0;d<u;d+=1)h[d*3]=l.r,h[d*3+1]=l.g,h[d*3+2]=l.b;return c.setAttribute("color",new wt(h,3)),i.push(c),c}function ww(i){let e=Dn,t=Xn-pi/2,n=Xn+pi/2,s=(r,o,a,c,l)=>{o-r<.01||c-a<.01||Rt(i,(r+o)/2,(a+c)/2,e,o-r,c-a,ds,l)};s(-Sn,No,0,Nn,Cr),s(Do,t,0,Nn,Cr),s(n,Sn,0,Nn,Cr),s(No,Do,0,Pf,Cr),s(No,Do,Lf,Nn,Vg),s(t,n,fi,Nn,Vg)}function Aw(i){let t=Math.ceil(ic/.7),n=Math.ceil(Rr/.7);for(let c=0;c<t;c+=1)for(let l=0;l<n;l+=1){let u=-Sn+(c+.5)*.7,h=-Dn+(l+.5)*.7;Rt(i,u,-.05,h,.7*.98,.1,.7*.98,(c+l)%2?_w:yw)}Rt(i,0,Nn+.05,0,ic+ds*2,.1,Rr+ds*2,vw),Rt(i,-Sn-ds/2,Nn/2,0,ds,Nn,Rr,Cr),Rt(i,Sn+ds/2,Nn/2,0,ds,Nn,Rr,Cr),Rt(i,0,Nn/2,-Dn-ds/2,ic,Nn,ds,Cr),ww(i);let s=1.12;Rt(i,-Sn+.03,s/2,0,.06,s,Rr,If),Rt(i,Sn-.03,s/2,0,.06,s,Rr,If),Rt(i,0,s/2,-Dn+.03,ic,s,.06,If);for(let[c,l]of[[-.3,-2.4],[.4,2.1]])Rt(i,c,Nn-.14,l,.03,.28,.03,Bu),zu(i,c,Nn-.36,l,.17,.13,Bu,10);let r=Dn,o=pi/2-.03,a=1.02;Rt(i,Xn-o+.07,fi/2,r,.14,fi-.04,.06,Hs),Rt(i,Xn+o-.07,fi/2,r,.14,fi-.04,.06,Hs),Rt(i,Xn,fi-.07,r,pi-.06,.14,.06,Hs),Rt(i,Xn,a,r,pi-.06,.16,.06,Hs),Rt(i,Xn,.09,r,pi-.06,.18,.06,Hs),Rt(i,Xn,(a+.18)/2+.09,r,pi-.3,a-.27,.04,Ir),Rt(i,Xn-pi/2-.06,fi/2,r-.06,.12,fi+.12,.06,Ir),Rt(i,Xn+pi/2+.06,fi/2,r-.06,.12,fi+.12,.06,Ir),Rt(i,Xn,fi+.06,r-.06,pi+.24,.12,.06,Ir),Rt(i,Xn-o+.16,a+.08,r-.07,.05,.05,.14,Nf)}function Rw(){return{x0:Xn-pi/2+.09,x1:Xn+pi/2-.09,y0:1.1,y1:fi-.16}}function Cw(i,e){let t=rc,n=Io-sc,s=(sc+Io)/2;Rt(i,s,Ar/2-.06,t,n,Ar-.12,oc,Hs),Rt(i,s,Ar-.03,t,n+.1,.06,oc+.1,Mw);let r=Math.max(3,Math.round(n/1.15));for(let a=0;a<r;a+=1){let c=n/r;Rt(i,sc+(a+.5)*c,.52,t+oc/2+.01,c-.14,.66,.03,Ir)}Rt(i,Io-.55,Ar+.16,t,.42,.26,.34,Bu),zu(i,Io-1.35,Ar+.06,t+.02,.19,.06,Nf,12),Rt(i,Io-1.35,Ar+.2,t-.16,.16,.22,.05,Nf);let o=3+Math.floor(e()*3);for(let a=0;a<o;a+=1){let c=sc+.5+e()*(n-1.4),l=.11+e()*.1;zu(i,c,Ar+.03+l*.35,t+(e()-.5)*.22,l,l*.7,Lo[Math.floor(e()*Lo.length)],10)}}function Iw(i,e){let t=[{x0:-Sn,x1:Sn,z:-Dn+Po/2,yaw:0},{x0:-Dn,x1:rc-.4,z:-Sn+Po/2,yaw:Math.PI/2}];for(let a of t){let c=a.x1-a.x0,l=(a.x0+a.x1)/2,u=(h,d,f,p,x,m)=>{a.yaw===0?Rt(i,h,d,a.z,f,p,x,m):Rt(i,a.z,d,h,x,p,f,m)};u(l,Gg/2,c,.06,Po,Ir);for(let h=0;h<kg;h+=1){let d=.34+h*((Gg-.34)/(kg-1));u(l,d,c,.05,Po,Hs);let f=a.x0+.12;for(;f<a.x1-.2;){if(e()<.34){f+=.18+e()*.5;continue}let p=e()<.35,x=p?.09:.11,m=p?.28:.13;u(f+x/2,d+.025+m/2,x,m,x,Lo[Math.floor(e()*Lo.length)]),f+=x+.015}}}let n=Dn-.52,s=No+.35,r=Do-.35;Rt(i,(s+r)/2,2.42,n,r-s,.05,.05,Bu);for(let a=0;a<5;a+=1){let c=s+(a+.5)*((r-s)/5)+(e()-.5)*.1,l=.34+e()*.24;zu(i,c,2.4-l/2-.03,n,.065+e()*.03,l,Lo[Math.floor(e()*Lo.length)],8)}let o=3;for(let a=0;a<o;a+=1){let c=-2.6+e()*5,l=.6+e()*3,u=(e()-.5)*.9,h=1+Math.floor(e()*3);for(let d=0;d<h;d+=1)Rt(i,c,.16+d*.32,l,.62,.3,.44,d%2?Ir:Hs,u)}}function Pw(i){let e=new pr(3813666,1315080,.7);i.add(e);let t=new Vn(16767392,11,9.5,2);t.position.set(-.3,Nn-.42,-2.4),i.add(t);let n=new Vn(16767392,7.5,8.5,2);n.position.set(.4,Nn-.42,2.1),i.add(n);let s=new as(13156260,.5);return s.position.set(.6,5.2,Dn+7),s.target.position.set(-.4,.6,-1.2),i.add(s),i.add(s.target),{hemi:e,back:t,front:n,day:s}}function Yg(){if(!Ew())return{enabled:!1,scene:null,spawn:null,bounds:null,solids:[],layoutHash:0,triangles:0,enter(){return!1},exit(){return!1},isInside:()=>!1,state:()=>({enabled:!1,inside:!1}),update(){},dispose(){}};let i=Tw(Hg),e=new es;e.fog=new or(Wg,Sw),e.background=new pe(Wg);let t=[];Aw(t),Cw(t,i),Iw(t,i);let n=it(t,!1);for(let _ of t)_.dispose();let s=new li({vertexColors:!0,roughness:.94,metalness:.03}),r=new Pe(n,s);r.name="interior-room",e.add(r);let o=Rw(),a=new yt(Do-No,Lf-Pf);a.translate((No+Do)/2,(Pf+Lf)/2,Dn-.02);let c=new yt(o.x1-o.x0,o.y1-o.y0);c.translate((o.x0+o.x1)/2,(o.y0+o.y1)/2,Dn-.02);let l=it([a,c],!1);a.dispose(),c.dispose();let u=new Pe(l,new un({color:bw,side:Pt}));u.name="interior-glass",e.add(u);let h=Pw(e),d={minX:-Sn+.42,maxX:Sn-.42,minZ:-Dn+.42,maxZ:Dn-.42,floorY:0},f=[{minX:sc-.42,maxX:Io+.42,minZ:rc-oc/2-.42,maxZ:rc+oc/2+.42},{minX:-Sn,maxX:Sn,minZ:-Dn,maxZ:-Dn+Po+.42},{minX:-Sn,maxX:-Sn+Po+.42,minZ:-Dn,maxZ:rc-.4}],p={x:.4,y:1.7,z:3.1,yaw:0},x=n.index?n.index.count/3:n.attributes.position.count/3,m=2166136261,g=n.attributes.position.array;for(let _=0;_<g.length;_+=1)m^=Math.round(g[_]*1e3)|0,m=Math.imul(m,16777619);m>>>=0;let b=!1;function v(){return{enabled:!0,inside:b,slug:Hg,name:xw,layoutHash:m,triangles:x}}return{enabled:!0,scene:e,lights:h,spawn:p,bounds:d,solids:f,layoutHash:m,triangles:x,isInside:()=>b,state:v,enter(){return b?!1:(b=!0,!0)},exit(){return b?(b=!1,!0):!1},update(){},dispose(){n.dispose(),s.dispose(),l.dispose(),u.material.dispose()}}}var Lw=!0,ac=1.7,Nw=.35,Dw=.3,Df=.34,Fw=.17,Uw=4,qg=74,Ow=38,Bw=1500,zw=16757850,Hw=12876330,kw=3090978,Zg=.22,Gw=.6;function Vw(i){let e=Number.isFinite(i)?i:0,t=Math.max(0,Math.min(1,(e-Zg)/(Gw-Zg)));return t*t*(3-2*t)}function Ww(){return Ln("Lamps",Lw)}function Kg({scene:i,camera:e,poles:t}){let n=Ww(),s={enabled:!1,count:0,poolSize:0,lamps:[],setGlow(){},update(){},glow:()=>0,activeCount:()=>0};if(!n||!i||!e||!t||t.length<2)return s;let r=[],o=[],a=[],c=Math.floor(t.length/2);for(let b=0;b<c;b++){let v=t[b*2+b%2],_=t[b*2+(b+1)%2];if(!v||!_)continue;let S=v.position,y=_.position.x-S.x,T=_.position.z-S.z,M=Math.hypot(y,T)||1,w=y/M,C=T/M,R=S.y-Nw,P=S.x+w*ac,F=S.z+C*ac,z=new Ze(ac,.08,.08);z.rotateY(-Math.atan2(C,w)),z.translate(S.x+w*ac*.5,R,S.z+C*ac*.5),o.push(z);let D=new As(Dw,Df,8,1,!0);D.translate(P,R-Df*.5,F),o.push(D);let B=R-Df*.75,H=new Qn(Fw,8,6);H.translate(P,B,F),a.push(H),r.push({position:new U(P,B,F)})}if(!r.length)return s;let l=new Pe(it(o,!1),new Ye({color:kw,flatShading:!0}));l.name="lamp-fittings",i.add(l);let u=new un({color:Hw,transparent:!0,opacity:0,depthWrite:!1,blending:ls});u.userData.unlit=!1;let h=new Pe(it(a,!1),u);h.name="lamp-bulbs",i.add(h);let d=[];for(let b=0;b<Uw;b++){let v=new Vn(zw,0,Ow,2);v.name=`lamp-pool-${b}`,i.add(v),d.push(v)}let f=0,p=0;function x(b){f=Vw(b),u.opacity=f}let m=[];function g(){m.length=0;let b=e.position.x,v=e.position.z;for(let _=0;_<r.length;_++){let S=r[_].position,y=(S.x-b)*(S.x-b)+(S.z-v)*(S.z-v);y>qg*qg||m.push({d2:y,p:S})}m.sort((_,S)=>_.d2-S.d2),p=0;for(let _=0;_<d.length;_++){let S=m[_];S&&f>0?(d[_].position.copy(S.p),d[_].intensity=f*Bw,p++):d[_].intensity=0}}return{enabled:!0,count:r.length,poolSize:d.length,lamps:r,fittingMesh:l,bulbMesh:h,pool:d,setGlow:x,update:g,glow:()=>f,activeCount:()=>p}}var Xw=!0,Ff=40,$g=5;function Yw(){return Ln("Legs",Xw)}function Jg({camera:i,world:e,atmosphere:t,seed:n=0,onHinge:s=null}){let r=Yw(),o=e&&e.streetLine||[],a={enabled:!1,update(){},state:()=>({enabled:!1,leg:0,hinges:0,zone:null,lastHingeZone:null,chainage:0}),history:()=>[]};if(!r||o.length<2||!i||!t)return a;let c=0;for(let g=1;g<o.length;g++)c+=Math.hypot(o[g][0]-o[g-1][0],o[g][1]-o[g-1][1]);function l(g){return g<=Ff?"north":g>=c-Ff?"south":null}let u=Fs(i.position.x,i.position.z,o),h=l(u),d=h,f=0,p=0,x=[];function m(){let g=Fs(i.position.x,i.position.z,o),b=l(g);if(b===h)return;let v=h;if(h=b,!b||b===d)return;d=b,f+=1,p+=1;let _=t.nudge($g,n,f);x.push({leg:f,arrivedAt:b,leftBehind:v,..._}),s&&s({leg:f,zone:b,..._})}return{enabled:!0,update:m,state:()=>({enabled:!0,leg:f,hinges:p,zone:h,lastHingeZone:d,chainage:Fs(i.position.x,i.position.z,o),length:c,endRadius:Ff,turnaroundHours:$g}),history:()=>x.slice()}}function jg({camera:i,world:e,legs:t,atmosphere:n,ambience:s,controls:r,renderer:o}){let a=typeof document<"u"?document.getElementById("ending-prompt"):null,c=typeof document<"u"?document.getElementById("ending-card"):null,l=typeof document<"u"?document.getElementById("ending-resume"):null,u=e&&e.streetLine||[],h={update(){},begin(){return!1},canOffer:()=>!1,state:()=>({phase:"idle",offered:!1,elapsed:0,ended:0})};if(!i||!t||!n||u.length<2)return h;let d=u[0],f=u[1],p=d[0]-f[0],x=d[1]-f[1],m=Math.hypot(p,x)||1;p/=m,x/=m;let g="idle",b=0,v=!1,_=0,S=null,y=0,T=1,M=null,w={r:0,g:0,b:0},C={r:154/255,g:160/255,b:154/255};function R(){if(g!=="idle")return!1;let B=t.state();return!!B.enabled&&B.leg>=1&&B.zone==="north"}function P(B){a&&B!==v&&(v=B,a.style.display=B?"block":"none")}function F(){if(!R())return!1;let B=n.acquireSuspend("ending");return B?(M=B,g="running",b=0,P(!1),S=i.position.clone(),y=e.fog?e.fog.density:0,T=o?o.toneMappingExposure:1,e.fog&&(w.r=e.fog.color.r,w.g=e.fog.color.g,w.b=e.fog.color.b),r&&r.setEnabled(!1),s&&s.setDucked(!0),!0):!1}function z(){return g!=="ended"?!1:(g="idle",b=0,c&&(c.style.display="none"),S&&i.position.copy(S),n.releaseSuspend(M),M=null,r&&r.setEnabled(!0),s&&s.setDucked(!1),!0)}function D(B){if(g==="idle"){P(R());return}if(g==="ended")return;b=Math.min(10,b+(Number.isFinite(B)?B:0));let H=b/10,K=H*H*(3-2*H);e.fog&&(e.fog.density=y*(1+8*K),e.fog.color.setRGB(w.r+(C.r-w.r)*K,w.g+(C.g-w.g)*K,w.b+(C.b-w.b)*K)),o&&(o.toneMappingExposure=T+(.5-T)*K),S&&(i.position.x=S.x+p*26*K,i.position.z=S.z+x*26*K),b>=10&&(g="ended",_+=1,c&&(c.style.display="flex"))}return l&&l.addEventListener("click",z),a&&a.addEventListener("click",F),{update:D,begin:F,resume:z,canOffer:R,state:()=>({phase:g,offered:v,elapsed:+b.toFixed(3),ended:_,minLeg:1,sequenceSeconds:10})}}var qw=3.2,Hu=.1,Zw=2.5,Kw=60,$w=40,Jw=.15,ni=512,Qg=4,nx=4,jw=1/3;function ku(i,e){let t=i*73856093^e*19349663;return t=Math.imul(t^t>>>13,2246822507),t^=t>>>16,t>>>0}function ix(i){let e=i|0;return function(){e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function ex(i,e,t,n,s,r){let o=ix(r*7919+13);i.save(),i.beginPath(),i.rect(e,t,n,s),i.clip(),i.fillStyle="rgb(150,146,134)",i.fillRect(e,t,n,s);let a=20,c=s/a;for(let u=0;u<a;u++){let h=t+u*c,d=5+Math.floor(o()*3);for(let f=0;f<d;f++){let p=e+f/d*n,x=n/d,m=(o()-.5)*26;i.fillStyle=`rgba(${150+m},${146+m},${134+m},0.6)`,i.fillRect(p,h+2,x,c-2)}i.fillStyle="rgba(0,0,0,0.22)",i.fillRect(e,h,n,2)}for(let u=0;u<20;u++){let h=e+o()*n,d=4+o()*12,f=t+o()*s*.35,p=s*(.3+o()*.45),x=i.createLinearGradient(0,f,0,f+p);x.addColorStop(0,"rgba(20,18,15,0.22)"),x.addColorStop(1,"rgba(20,18,15,0)"),i.fillStyle=x,i.fillRect(h,f,d,p)}let l=2+Math.floor(o()*3);for(let u=0;u<l;u++){let h=n*(.12+o()*.08),d=s*(.15+o()*.09),f=e+n*.08+o()*(n*.84-h),p=t+s*.14+o()*(s*.62-d);i.fillStyle="rgba(64,58,48,0.7)",i.fillRect(f,p,h,d),i.strokeStyle="rgba(112,106,90,0.5)",i.lineWidth=3,i.strokeRect(f+1.5,p+1.5,h-3,d-3)}i.restore()}function Qw(i,e,t,n,s,r,o){let a=ix(o*104729+5);i.save(),i.translate(e+n/2,t+s*.4),i.rotate((a()-.5)*.05);let c=r.toUpperCase(),l=72;for(i.font=`bold ${l}px Georgia, "Times New Roman", serif`;i.measureText(c).width>n*.8&&l>16;)l-=2,i.font=`bold ${l}px Georgia, "Times New Roman", serif`;i.textAlign="center",i.textBaseline="middle",i.globalAlpha=.2+a()*.12,i.fillStyle="rgb(150,58,42)",i.fillText(c,0,0),i.restore()}function eA(i){let e=Qg,t=2,n=document.createElement("canvas");n.width=ni*e,n.height=ni*t;let s=n.getContext("2d"),r=[];for(let c=0;c<Qg;c++){let l=c*ni,u=0;ex(s,l,u,ni,ni,c),r.push(tx(l,u,n.width,n.height))}let o=[];for(let c=0;c<nx;c++){let l=c*ni,u=ni;ex(s,l,u,ni,ni,c+97),i[c]&&Qw(s,l,u,ni,ni,i[c],c),o.push(tx(l,u,n.width,n.height))}let a=new xt(n);return a.colorSpace=tt,a.anisotropy=4,{texture:a,baseUv:r,ghostUv:o}}function tx(i,e,t,n){return{u0:i/t,u1:(i+ni)/t,v0:1-(e+ni)/n,v1:1-e/n}}function sx(i,e,t){let n=i&&i.leith&&i.leith.buildings||[],s=i&&i.facadeManifest,r=e&&e.nearestStreetPoint,o=e&&e.groundHeight;if(!n.length||!r)return{mesh:null,count:0};let a=[];if(s)for(let b of s.buildings)for(let v of b.businesses||[])a.push(v.name);let c=[];if(a.length)for(let b=0;b<nx;b++)c.push(a[ku(b,a.length)%a.length]);let l=eA(c),u=[],h=[],d=[],f=[],p=0,x=(b,v,_,S,y,T,M,w,C,R,P)=>{let F=p*4;u.push(y,C,T,M,C,w,M,R,w,y,R,T),h.push(b,v,_,v,_,S,b,S);for(let z=0;z<4;z++)d.push(P.r,P.g,P.b);f.push(F,F+1,F+2,F,F+2,F+3),p++};if(n.forEach((b,v)=>{let _=b&&b.footprint;if(!_||_.length<3)return;let S=Math.max(1,b.levels||1)*qw,y=0,T=0;for(let R of _)y+=R[0],T+=R[1];y/=_.length,T/=_.length;let M=o?o(y,T):0,w=nA(b,r),C=Od(v,b);for(let R=0;R<_.length;R++){let P=_[R],F=_[(R+1)%_.length],z=F[0]-P[0],D=F[1]-P[1],B=Math.hypot(z,D);if(B<Zw||tA(P[0],P[1],F[0],F[1],w))continue;let H=(P[0]+F[0])/2,K=(P[1]+F[1])/2,se=r(H,K),de=r(P[0],P[1]),V=r(F[0],F[1]);if(Math.min(se?se.distance:1/0,de?de.distance:1/0,V?V.distance:1/0)>Kw||B*S<$w)continue;let Se=P[0],Ee=P[1],$=z,Q=D,J=-D/B,ge=z/B;J*(H-y)+ge*(K-T)<0&&(J=-J,ge=-ge,Se=F[0],Ee=F[1],$=-z,Q=-D);let xe=Se+J*Hu,ye=Ee+ge*Hu,ze=Se+$+J*Hu,ce=Ee+Q+ge*Hu,re=c.length&&ku(v,R*31+7)%1e3/1e3<jw?l.ghostUv:l.baseUv,oe=ku(v,R*131+41)%re.length,fe=re[oe],me=ku(v,R*991+3)%2===0,Le=me?fe.u1:fe.u0,Ae=me?fe.u0:fe.u1;x(Le,fe.v0,Ae,fe.v1,xe,ye,ze,ce,M,M+S,C)}}),!p)return{mesh:null,count:0};let m=new pt;m.setAttribute("position",new Qe(u,3)),m.setAttribute("uv",new Qe(h,2)),m.setAttribute("color",new Qe(d,3)),m.setIndex(f),m.computeVertexNormals();let g=new Pe(m,new Ye({map:l.texture,vertexColors:!0,flatShading:!0}));return g.name="gable-dressing",t.add(g),{mesh:g,count:p}}function tA(i,e,t,n,s){let r=(i+t)/2,o=(e+n)/2;for(let a of s){let c=a.bx-a.ax,l=a.bz-a.az,u=c*c+l*l||1,h=((r-a.ax)*c+(o-a.az)*l)/u;if(h<-.01||h>1.01)continue;let d=a.ax+h*c,f=a.az+h*l;if(Math.hypot(r-d,o-f)<Jw)return!0}return!1}function nA(i,e){try{return Ao(i,e)}catch{return[]}}var rx=3.2,ox=80,iA=10,ax=.5,Uf=2500,sA=1/5;function cx(i,e){let t=i*73856093^e*19349663;return t=Math.imul(t^t>>>13,2246822507),t^=t>>>16,t>>>0}function Pr(i,e){return cx(i,e)%1e5/1e5}function rA(){let i=[],e=new Ze(.9,1.8,.55).toNonIndexed();e.deleteAttribute("uv"),e.translate(0,.9,0),i.push(e);let t=[[-.28,0],[.05,.15],[.3,-.12]];for(let[n,s]of t){let r=new tn(.12,.13,.4,5,1,!0).toNonIndexed();r.deleteAttribute("uv"),r.translate(n,1.8+.2,s),i.push(r)}return it(i,!1)}function oA(){let i=[],e=new tn(.02,.03,1.4,5,1,!0).toNonIndexed();e.deleteAttribute("uv"),e.translate(0,.7,0),i.push(e);for(let t=0;t<2;t++){let n=new Ze(.5-t*.14,.02,.02).toNonIndexed();n.deleteAttribute("uv"),n.translate(0,1+t*.22,0),i.push(n)}return it(i,!1)}function lx(i,e,t){let n=i&&i.leith&&i.leith.buildings||[],s=e&&e.nearestStreetPoint,r=e&&e.groundHeight;if(!n.length||!s)return{chimneys:null,aerials:null,count:0};let o=(T,M)=>`${Math.round(T/ax)}:${Math.round(M/ax)}`,a=new Map;n.forEach(T=>{let M=T&&T.footprint;if(M)for(let[w,C]of M){let R=o(w,C);a.set(R,(a.get(R)||0)+1)}});let c=[];n.forEach((T,M)=>{let w=T&&T.footprint;if(!w||w.length<3)return;let C=0,R=0;for(let D of w)C+=D[0],R+=D[1];C/=w.length,R/=w.length;let P=s(C,R);if(!P||P.distance>ox)return;let F=Math.max(1,T.levels||1)*rx,z=new Set;for(let D=0;D<w.length;D++){let B=w[D],H=w[(D+1)%w.length],K=o(B[0],B[1]);if(a.get(K)>1&&!z.has(K)){z.add(K);let Q=s(B[0],B[1]),J=F+(r?r(B[0],B[1]):0);c.push({x:B[0],z:B[1],y:J,dist:Q?Q.distance:P.distance,bi:M,edgeSeed:D})}let se=H[0]-B[0],de=H[1]-B[1],V=Math.hypot(se,de);if(V<3)continue;let j=(B[0]+H[0])/2,he=(B[1]+H[1])/2,Se=s(j,he),Ee=!0;if(Se&&Se.point){let Q=1/V,J=-de*Q,ge=se*Q;J*(j-C)+ge*(he-R)<0&&(J=-J,ge=-ge);let xe=Se.point[0]-j,ye=Se.point[1]-he,ze=Math.hypot(xe,ye)||1;Ee=(J*xe+ge*ye)/ze>=0}if(!Ee)continue;let $=Math.max(1,Math.round(V/iA));for(let Q=0;Q<$;Q++){let J=(Q+.5)/$,ge=B[0]+se*J,xe=B[1]+de*J,ye=F+(r?r(ge,xe):0);c.push({x:ge,z:xe,y:ye,dist:(s(ge,xe)||P).distance,bi:M,edgeSeed:D*97+Q})}}}),c.sort((T,M)=>T.dist-M.dist);let l=Math.max(0,c.length-Uf),u=l>0?c.slice(0,Uf):c;l>0&&console.warn(`[chimneys] ${l} candidate chimney placements beyond ${Uf} dropped (furthest-from-street first, not a silent mid-street gap)`);let h=rA(),d=new Ye({color:3025444}),f=u.length?new gn(h,d,u.length):null,p=new $e,x=new U,m=new Ut,g=new U,b=new Jt;f&&(u.forEach((T,M)=>{let w=.75+Pr(T.bi,T.edgeSeed*3+1)*.65,C=(Pr(T.bi,T.edgeSeed*3+2)-.5)*.12,R=(Pr(T.bi,T.edgeSeed*3+3)-.5)*.12,P=Pr(T.bi,T.edgeSeed*3+4)*Math.PI*2;x.set(T.x,T.y,T.z),b.set(C,P,R),m.setFromEuler(b),g.set(1,w,1),p.compose(x,m,g),f.setMatrixAt(M,p)}),f.instanceMatrix.needsUpdate=!0,f.name="chimneys",t.add(f));let v=[];n.forEach((T,M)=>{let w=T&&T.footprint;if(!w||w.length<3||cx(M,5153)%1e3/1e3>=sA)return;let C=0,R=0;for(let H of w)C+=H[0],R+=H[1];C/=w.length,R/=w.length;let P=s(C,R);if(!P||P.distance>ox)return;let F=Math.max(1,T.levels||1)*rx,z=w[0],D=1/0;for(let H of w){let K=P.point?Math.hypot(H[0]-P.point[0],H[1]-P.point[1]):0;K<D&&(D=K,z=H)}let B=F+(r?r(z[0],z[1]):0);v.push({x:z[0],z:z[1],y:B,bi:M})});let _=oA(),S=new Ye({color:1842204}),y=v.length?new gn(_,S,v.length):null;return y&&(v.forEach((T,M)=>{let w=(Pr(T.bi,71)-.5)*.3,C=(Pr(T.bi,73)-.5)*.3,R=Pr(T.bi,79)*Math.PI*2;x.set(T.x,T.y,T.z),b.set(w,R,C),m.setFromEuler(b),g.set(1,1,1),p.compose(x,m,g),y.setMatrixAt(M,p)}),y.instanceMatrix.needsUpdate=!0,y.name="aerials",t.add(y)),{chimneys:f,aerials:y,count:u.length,aerialCount:v.length,dropped:l}}var aA=3028026,cA=9278327,lA=2304048,uA=6051656,hA=11557412,dA=3.2,fA=1/700,pA=`
  varying vec3 vDir;
  void main() {
    // World-space view ray. Correct whether the dome is parented to the camera
    // or to the scene, because modelMatrix carries whichever transform applies.
    vDir = (modelMatrix * vec4(position, 1.0)).xyz - cameraPosition;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,mA=`
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
    vec2 p = d.xz / max(h, 0.05) * ${dA.toFixed(2)}
           + cameraPosition.xz * ${fA.toFixed(6)};
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
`;function ux(i,e){let t=new Te(0,-1);if(e&&e.length>1){let o=e[0],a=e[e.length-1];t.set(o[0]-a[0],o[1]-a[1]).normalize()}let n={uFog:{value:i},uBand:{value:new pe(cA)},uZenith:{value:new pe(aA)},uCloudDark:{value:new pe(lA)},uCloudLit:{value:new pe(uA)},uGlow:{value:new pe(hA)},uDock:{value:t},uTime:{value:0},uCoverage:{value:1}},s=new Bn({uniforms:n,vertexShader:pA,fragmentShader:mA,side:Mn,depthWrite:!1,depthTest:!1,fog:!1}),r=new Pe(new Qn(1,32,20),s);return r.renderOrder=-1e3,r.frustumCulled=!1,{mesh:r,uniforms:n,update(o){n.uTime.value=o},setPalette({band:o,zenith:a,cloudDark:c,cloudLit:l,glow:u}){o&&n.uBand.value.copy(o),a&&n.uZenith.value.copy(a),c&&n.uCloudDark.value.copy(c),l&&n.uCloudLit.value.copy(l),u&&n.uGlow.value.copy(u)},setCoverage(o){n.uCoverage.value=o}}}var xA=1,_A=10,yA=30,vA=[{hour:0,sun:{color:3359834,intensity:.05,pos:{x:-100,y:-50,z:80}},hemi:{sky:1844272,ground:855048,intensity:.6},ambient:{color:1315855,intensity:.25},fog:1316111,fogDensity:.0095,exposure:.55,tint:{r:.12,g:.12,b:.15},sky:{band:1711126,zenith:855826,cloudDark:658447,cloudLit:2237468,glow:6040594},torch:1,windowGlow:1,coverage:1,rain:0,wetness:0},{hour:5,sun:{color:3820126,intensity:.08,pos:{x:250,y:20,z:-150}},hemi:{sky:2239544,ground:1052426,intensity:.7},ambient:{color:1513231,intensity:.3},fog:1579539,fogDensity:.0095,exposure:.6,tint:{r:.14,g:.14,b:.17},sky:{band:2105882,zenith:1053464,cloudDark:855826,cloudLit:2500640,glow:6500367},torch:.95,windowGlow:.9,coverage:1,rain:0,wetness:0},{hour:8,sun:{color:10465480,intensity:.5,pos:{x:200,y:180,z:-100}},hemi:{sky:6055282,ground:2367770,intensity:2},ambient:{color:3158047,intensity:.8},fog:3817528,fogDensity:.0095,exposure:1,tint:{r:.55,g:.55,b:.6},sky:{band:6384210,zenith:2304048,cloudDark:1843240,cloudLit:4802102,glow:9062942},torch:.3,windowGlow:.15,coverage:1,rain:0,wetness:0},{hour:12,sun:{color:13621480,intensity:1.15,pos:{x:-200,y:300,z:150}},hemi:{sky:9147296,ground:3814180,intensity:3.9},ambient:{color:4999224,intensity:1.4},fog:4870466,fogDensity:.0095,exposure:1.46,tint:{r:1,g:1,b:1},sky:{band:9278327,zenith:3028026,cloudDark:2304048,cloudLit:6051656,glow:11557412},torch:.03,windowGlow:0,coverage:1,rain:0,wetness:0},{hour:17,sun:{color:12101768,intensity:.6,pos:{x:-250,y:150,z:200}},hemi:{sky:6972504,ground:3025438,intensity:2.3},ambient:{color:3551264,intensity:.9},fog:3948336,fogDensity:.0095,exposure:1.05,tint:{r:.6,g:.58,b:.55},sky:{band:7629650,zenith:2632756,cloudDark:1974826,cloudLit:5130812,glow:11031582},torch:.15,windowGlow:.1,coverage:1,rain:0,wetness:0},{hour:20,sun:{color:6050920,intensity:.15,pos:{x:-300,y:40,z:220}},hemi:{sky:3027518,ground:1578256,intensity:1},ambient:{color:1841682,intensity:.4},fog:2434847,fogDensity:.0095,exposure:.75,tint:{r:.3,g:.28,b:.3},sky:{band:3421226,zenith:1579808,cloudDark:1185050,cloudLit:3683626,glow:9190936},torch:.55,windowGlow:.6,coverage:1,rain:0,wetness:0},{hour:22,sun:{color:3818070,intensity:.06,pos:{x:-150,y:-30,z:100}},hemi:{sky:1975600,ground:920841,intensity:.7},ambient:{color:1381646,intensity:.3},fog:1579540,fogDensity:.0095,exposure:.6,tint:{r:.16,g:.16,b:.19},sky:{band:1842711,zenith:921620,cloudDark:724240,cloudLit:2369054,glow:6696722},torch:.9,windowGlow:.95,coverage:1,rain:0,wetness:0}],MA=[{hour:0,sun:{color:3030096,intensity:.04,pos:{x:-100,y:-50,z:80}},hemi:{sky:1317930,ground:657670,intensity:.45},ambient:{color:921097,intensity:.18},fog:987919,fogDensity:.0095,exposure:.5,tint:{r:.09,g:.09,b:.13},sky:{band:1186324,zenith:526864,cloudDark:460810,cloudLit:1579542,glow:6040594},torch:1,windowGlow:1,coverage:.05,rain:0,wetness:0},{hour:5,sun:{color:3689060,intensity:.06,pos:{x:250,y:20,z:-150}},hemi:{sky:1713206,ground:789256,intensity:.55},ambient:{color:1052937,intensity:.22},fog:1185039,fogDensity:.0095,exposure:.55,tint:{r:.11,g:.11,b:.15},sky:{band:1580568,zenith:658968,cloudDark:592654,cloudLit:1842712,glow:6500367},torch:.95,windowGlow:.85,coverage:.08,rain:0,wetness:0},{hour:8,sun:{color:16768160,intensity:2.9,pos:{x:200,y:180,z:-100}},hemi:{sky:5535904,ground:2104338,intensity:1.25},ambient:{color:1973268,intensity:.42},fog:8691900,fogDensity:.0022,exposure:1.15,tint:{r:.68,g:.64,b:.58},sky:{band:11059928,zenith:3824764,cloudDark:3361378,cloudLit:6850724,glow:10114592},torch:.05,windowGlow:.05,coverage:.15,rain:0,wetness:0},{hour:12,sun:{color:16773848,intensity:3,pos:{x:-200,y:300,z:150}},hemi:{sky:6852788,ground:2367253,intensity:1.55},ambient:{color:2104851,intensity:.5},fog:8691898,fogDensity:.0022,exposure:1.25,tint:{r:1,g:.98,b:.92},sky:{band:11455184,zenith:2905206,cloudDark:4216428,cloudLit:8822970,glow:11557412},torch:0,windowGlow:0,coverage:.12,rain:0,wetness:0},{hour:17,sun:{color:16758906,intensity:1.3,pos:{x:-250,y:150,z:200}},hemi:{sky:4608100,ground:1841423,intensity:1},ambient:{color:1578254,intensity:.35},fog:5660532,fogDensity:.0022,exposure:.98,tint:{r:.6,g:.53,b:.46},sky:{band:8810324,zenith:2634828,cloudDark:2765380,cloudLit:5791860,glow:11031582},torch:.1,windowGlow:.08,coverage:.15,rain:0,wetness:0},{hour:20,sun:{color:6837876,intensity:.18,pos:{x:-300,y:40,z:220}},hemi:{sky:2239032,ground:1183498,intensity:.7},ambient:{color:1183753,intensity:.28},fog:1843248,fogDensity:.0095,exposure:.68,tint:{r:.3,g:.26,b:.3},sky:{band:2632248,zenith:1185314,cloudDark:987674,cloudLit:2632248,glow:9190936},torch:.5,windowGlow:.55,coverage:.1,rain:0,wetness:0},{hour:22,sun:{color:3687524,intensity:.045,pos:{x:-150,y:-30,z:100}},hemi:{sky:1581102,ground:657670,intensity:.5},ambient:{color:986376,intensity:.22},fog:1250852,fogDensity:.0095,exposure:.52,tint:{r:.14,g:.14,b:.18},sky:{band:1448486,zenith:592916,cloudDark:461070,cloudLit:1842726,glow:6696722},torch:.85,windowGlow:.9,coverage:.06,rain:0,wetness:0}],bA=[{hour:0,sun:{color:2766408,intensity:.04,pos:{x:-100,y:-50,z:80}},hemi:{sky:1449512,ground:723463,intensity:.5},ambient:{color:1052680,intensity:.2},fog:1053198,fogDensity:.0095,exposure:.48,tint:{r:.1,g:.1,b:.13},sky:{band:1382933,zenith:724240,cloudDark:526861,cloudLit:1842712,glow:6040594},torch:1,windowGlow:1,coverage:1,rain:.7,wetness:.85},{hour:5,sun:{color:3095630,intensity:.06,pos:{x:250,y:20,z:-150}},hemi:{sky:1712684,ground:855048,intensity:.6},ambient:{color:1250057,intensity:.25},fog:1250575,fogDensity:.0095,exposure:.52,tint:{r:.12,g:.12,b:.15},sky:{band:1711126,zenith:855826,cloudDark:658447,cloudLit:1974296,glow:6500367},torch:.95,windowGlow:.9,coverage:1,rain:.7,wetness:.85},{hour:8,sun:{color:8030364,intensity:.3,pos:{x:200,y:180,z:-100}},hemi:{sky:4739164,ground:1973013,intensity:1.6},ambient:{color:2500119,intensity:.6},fog:3027504,fogDensity:.0095,exposure:.85,tint:{r:.42,g:.44,b:.48},sky:{band:5133892,zenith:1843238,cloudDark:1448480,cloudLit:3815468,glow:9062942},torch:.35,windowGlow:.2,coverage:1,rain:.85,wetness:.9},{hour:12,sun:{color:10135738,intensity:.65,pos:{x:-200,y:300,z:150}},hemi:{sky:6975608,ground:2893852,intensity:2.9},ambient:{color:3683871,intensity:1},fog:3685428,fogDensity:.0095,exposure:1.1,tint:{r:.72,g:.74,b:.78},sky:{band:6975834,zenith:2369584,cloudDark:1843240,cloudLit:4736566,glow:11557412},torch:.06,windowGlow:0,coverage:1,rain:.85,wetness:.9},{hour:17,sun:{color:9076336,intensity:.4,pos:{x:-250,y:150,z:200}},hemi:{sky:5261630,ground:2236438,intensity:1.7},ambient:{color:2762264,intensity:.65},fog:3026984,fogDensity:.0095,exposure:.9,tint:{r:.46,g:.44,b:.42},sky:{band:5788224,zenith:2106154,cloudDark:1580066,cloudLit:3947054,glow:11031582},torch:.2,windowGlow:.15,coverage:1,rain:.8,wetness:.9},{hour:20,sun:{color:4603984,intensity:.12,pos:{x:-300,y:40,z:220}},hemi:{sky:2369070,ground:1315341,intensity:.8},ambient:{color:1446921,intensity:.32},fog:1842456,fogDensity:.0095,exposure:.62,tint:{r:.24,g:.22,b:.24},sky:{band:2631712,zenith:1316640,cloudDark:987414,cloudLit:2894370,glow:9190936},torch:.6,windowGlow:.6,coverage:1,rain:.75,wetness:.9},{hour:22,sun:{color:3028552,intensity:.05,pos:{x:-150,y:-30,z:100}},hemi:{sky:1580584,ground:789256,intensity:.6},ambient:{color:1184264,intensity:.25},fog:1250575,fogDensity:.0095,exposure:.52,tint:{r:.13,g:.13,b:.16},sky:{band:1579540,zenith:724240,cloudDark:592654,cloudLit:1974296,glow:6696722},torch:.92,windowGlow:.95,coverage:1,rain:.7,wetness:.85}],SA=[{hour:0,sun:{color:1844272,intensity:.03,pos:{x:-100,y:-50,z:80}},hemi:{sky:2106922,ground:789514,intensity:.5},ambient:{color:1316374,intensity:.22},fog:1711646,fogDensity:.03,exposure:.55,tint:{r:.14,g:.15,b:.16},sky:{band:1843230,zenith:1316890,cloudDark:1053204,cloudLit:2237988,glow:4865072},torch:1,windowGlow:1,coverage:1,rain:0,wetness:.25},{hour:5,sun:{color:2371644,intensity:.05,pos:{x:250,y:20,z:-150}},hemi:{sky:2501680,ground:921100,intensity:.6},ambient:{color:1579546,intensity:.28},fog:2237990,fogDensity:.03,exposure:.62,tint:{r:.18,g:.19,b:.2},sky:{band:2369578,zenith:1711650,cloudDark:1316376,cloudLit:2632746,glow:5260342},torch:.9,windowGlow:.85,coverage:1,rain:0,wetness:.25},{hour:8,sun:{color:12107972,intensity:.15,pos:{x:200,y:180,z:-100}},hemi:{sky:14212316,ground:6316120,intensity:3.4},ambient:{color:10264732,intensity:1.6},fog:13555412,fogDensity:.03,exposure:1.3,tint:{r:.82,g:.84,b:.84},sky:{band:13818584,zenith:13161168,cloudDark:12108480,cloudLit:14476514,glow:9074280},torch:.02,windowGlow:.02,coverage:1,rain:0,wetness:.25},{hour:12,sun:{color:11581626,intensity:.2,pos:{x:-200,y:300,z:150}},hemi:{sky:15001830,ground:6842464,intensity:3.8},ambient:{color:11054248,intensity:1.8},fog:14081756,fogDensity:.03,exposure:1.42,tint:{r:1,g:1,b:.98},sky:{band:14344928,zenith:13686998,cloudDark:12634824,cloudLit:14871272,glow:9205866},torch:0,windowGlow:0,coverage:1,rain:0,wetness:.25},{hour:17,sun:{color:11049104,intensity:.18,pos:{x:-250,y:150,z:200}},hemi:{sky:13158592,ground:6314574,intensity:3},ambient:{color:9867912,intensity:1.5},fog:12894906,fogDensity:.03,exposure:1.2,tint:{r:.86,g:.82,b:.78},sky:{band:13026490,zenith:12369076,cloudDark:11316388,cloudLit:13684420,glow:9073760},torch:.08,windowGlow:.06,coverage:1,rain:0,wetness:.25},{hour:20,sun:{color:5789800,intensity:.1,pos:{x:-300,y:40,z:220}},hemi:{sky:3685440,ground:1842200,intensity:1.3},ambient:{color:2631722,intensity:.55},fog:3027510,fogDensity:.03,exposure:.78,tint:{r:.36,g:.35,b:.38},sky:{band:3159094,zenith:2369580,cloudDark:1843236,cloudLit:3553850,glow:6048316},torch:.5,windowGlow:.55,coverage:1,rain:0,wetness:.25},{hour:22,sun:{color:3160648,intensity:.05,pos:{x:-150,y:-30,z:100}},hemi:{sky:2237998,ground:921100,intensity:.6},ambient:{color:1447962,intensity:.28},fog:1843236,fogDensity:.03,exposure:.58,tint:{r:.16,g:.17,b:.19},sky:{band:1974820,zenith:1448478,cloudDark:1184790,cloudLit:2369578,glow:4996658},torch:.88,windowGlow:.9,coverage:1,rain:0,wetness:.25}],zf={overcast:vA,clear:MA,rain:bA,haar:SA};function EA(i){return zf[i]||zf.overcast}var dx={drizzle:{from:"overcast",to:"rain",k:.45}},Of={overcast:["clear","drizzle","haar"],clear:["overcast"],drizzle:["overcast","rain"],rain:["drizzle"],haar:["overcast"]},fx=1.5,TA=4;function Bf(i,e){let t=i*73856093^e*19349663;return t=Math.imul(t^t>>>13,2246822507),t^=t>>>16,t>>>0}function wA(i,e){let t=EA(e),n=t.length-1;for(let c=0;c<t.length&&t[c].hour<=i;c++)n=c;let s=t[n],r=t[(n+1)%t.length],o=r.hour-s.hour;o<=0&&(o+=24);let a=i-s.hour;return a<0&&(a+=24),a=o>0?Math.max(0,Math.min(1,a/o)):0,{a:s,b:r,t:a}}function Ht(i,e,t){return i+(e-i)*t}function Fo(){return{sun:{color:new pe,intensity:0,pos:new U},hemi:{sky:new pe,ground:new pe,intensity:0},ambient:{color:new pe,intensity:0},fog:new pe,fogDensity:.0095,exposure:1,tint:new pe(1,1,1),sky:{band:new pe,zenith:new pe,cloudDark:new pe,cloudLit:new pe,glow:new pe},torch:0,windowGlow:0,coverage:1,rain:0,wetness:0}}function px(i,e){return e.sun.color.copy(i.sun.color),e.sun.intensity=i.sun.intensity,e.sun.pos.copy(i.sun.pos),e.hemi.sky.copy(i.hemi.sky),e.hemi.ground.copy(i.hemi.ground),e.hemi.intensity=i.hemi.intensity,e.ambient.color.copy(i.ambient.color),e.ambient.intensity=i.ambient.intensity,e.fog.copy(i.fog),e.fogDensity=i.fogDensity,e.exposure=i.exposure,e.tint.copy(i.tint),e.sky.band.copy(i.sky.band),e.sky.zenith.copy(i.sky.zenith),e.sky.cloudDark.copy(i.sky.cloudDark),e.sky.cloudLit.copy(i.sky.cloudLit),e.sky.glow.copy(i.sky.glow),e.torch=i.torch,e.windowGlow=i.windowGlow,e.coverage=i.coverage,e.rain=i.rain,e.wetness=i.wetness,e}function mx({scene:i,renderer:e,world:t,sky:n,torch:s,windows:r,rain:o,ambience:a}){let c=null,l=null,u=t.lights&&t.lights.hemi,h=t.lights&&t.lights.sun,d=t.lights&&t.lights.ambient,f=t.fog,p=t.surfaces||{},x=p.road?p.road.color.clone():null,m=p.pavement?p.pavement.color.clone():null,g=.5;function b(L){let O=1-g*L,X=1+(.25-1)*L;p.road&&x&&(p.road.color.copy(x).multiplyScalar(O),p.road.roughness=X),p.pavement&&m&&(p.pavement.color.copy(m).multiplyScalar(O),p.pavement.roughness=X)}let v=Iu(),_=xA,S="overcast",y=null,T=0,M=!0,w=Math.floor(v*1e6)>>>0,C=0,R=null,P=null;function F(L){let O=Of[L]||Of.overcast,X=Bf(w,C++);return O[X%O.length]}function z(L){P=F(L);let O=Bf(w,C++),X=fx+O%1e3/1e3*(TA-fx);R=T+X}function D(L){M=!!L}let B=Fo(),H=Fo(),K=Fo(),se=Fo(),de=Fo(),V=Fo(),j=new pe,he=new pe;function Se(L,O,X,W){return L.lerpColors(j.set(O),he.set(X),W)}function Ee(L,O,X){let{a:W,b:Y,t:Z}=wA(L,O);return Se(X.sun.color,W.sun.color,Y.sun.color,Z),X.sun.intensity=Ht(W.sun.intensity,Y.sun.intensity,Z),X.sun.pos.set(Ht(W.sun.pos.x,Y.sun.pos.x,Z),Ht(W.sun.pos.y,Y.sun.pos.y,Z),Ht(W.sun.pos.z,Y.sun.pos.z,Z)),Se(X.hemi.sky,W.hemi.sky,Y.hemi.sky,Z),Se(X.hemi.ground,W.hemi.ground,Y.hemi.ground,Z),X.hemi.intensity=Ht(W.hemi.intensity,Y.hemi.intensity,Z),Se(X.ambient.color,W.ambient.color,Y.ambient.color,Z),X.ambient.intensity=Ht(W.ambient.intensity,Y.ambient.intensity,Z),Se(X.fog,W.fog,Y.fog,Z),X.fogDensity=Ht(W.fogDensity,Y.fogDensity,Z),X.exposure=Ht(W.exposure,Y.exposure,Z),X.tint.setRGB(Ht(W.tint.r,Y.tint.r,Z),Ht(W.tint.g,Y.tint.g,Z),Ht(W.tint.b,Y.tint.b,Z)),Se(X.sky.band,W.sky.band,Y.sky.band,Z),Se(X.sky.zenith,W.sky.zenith,Y.sky.zenith,Z),Se(X.sky.cloudDark,W.sky.cloudDark,Y.sky.cloudDark,Z),Se(X.sky.cloudLit,W.sky.cloudLit,Y.sky.cloudLit,Z),Se(X.sky.glow,W.sky.glow,Y.sky.glow,Z),X.torch=Ht(W.torch,Y.torch,Z),X.windowGlow=Ht(W.windowGlow,Y.windowGlow,Z),X.coverage=Ht(W.coverage,Y.coverage,Z),X.rain=Ht(W.rain,Y.rain,Z),X.wetness=Ht(W.wetness,Y.wetness,Z),X}function $(L,O,X,W){return W.sun.color.lerpColors(L.sun.color,O.sun.color,X),W.sun.intensity=Ht(L.sun.intensity,O.sun.intensity,X),W.sun.pos.lerpVectors(L.sun.pos,O.sun.pos,X),W.hemi.sky.lerpColors(L.hemi.sky,O.hemi.sky,X),W.hemi.ground.lerpColors(L.hemi.ground,O.hemi.ground,X),W.hemi.intensity=Ht(L.hemi.intensity,O.hemi.intensity,X),W.ambient.color.lerpColors(L.ambient.color,O.ambient.color,X),W.ambient.intensity=Ht(L.ambient.intensity,O.ambient.intensity,X),W.fog.lerpColors(L.fog,O.fog,X),W.fogDensity=Ht(L.fogDensity,O.fogDensity,X),W.exposure=Ht(L.exposure,O.exposure,X),W.tint.lerpColors(L.tint,O.tint,X),W.sky.band.lerpColors(L.sky.band,O.sky.band,X),W.sky.zenith.lerpColors(L.sky.zenith,O.sky.zenith,X),W.sky.cloudDark.lerpColors(L.sky.cloudDark,O.sky.cloudDark,X),W.sky.cloudLit.lerpColors(L.sky.cloudLit,O.sky.cloudLit,X),W.sky.glow.lerpColors(L.sky.glow,O.sky.glow,X),W.torch=Ht(L.torch,O.torch,X),W.windowGlow=Ht(L.windowGlow,O.windowGlow,X),W.coverage=Ht(L.coverage,O.coverage,X),W.rain=Ht(L.rain,O.rain,X),W.wetness=Ht(L.wetness,O.wetness,X),W}function Q(L,O,X){let W=dx[O];return W?(Ee(L,W.from,de),Ee(L,W.to,V),$(de,V,W.k,X),W.rainScale!=null&&(X.rain*=W.rainScale),X):Ee(L,O,X)}let J=0,ge=e.toneMappingExposure,xe=new pe(1,1,1);function ye(L){if(h){h.color.copy(L.sun.color),h.intensity=L.sun.intensity,h.position.copy(L.sun.pos);let O=L.sun.pos.length()||1;J=Math.asin(ui.clamp(L.sun.pos.y/O,-1,1))*ui.RAD2DEG}u&&(u.color.copy(L.hemi.sky),u.groundColor.copy(L.hemi.ground),u.intensity=L.hemi.intensity),d&&(d.color.copy(L.ambient.color),d.intensity=L.ambient.intensity),f&&(f.color.copy(L.fog),f.density=L.fogDensity),ge=L.exposure,e.toneMappingExposure=ge,xe.copy(L.tint),n&&(n.setPalette({band:L.sky.band,zenith:L.sky.zenith,cloudDark:L.sky.cloudDark,cloudLit:L.sky.cloudLit,glow:L.sky.glow}),n.setCoverage(L.coverage)),s&&s.setDarkness(L.torch),r&&r.setGlow(L.windowGlow),c&&c.setGlow(L.windowGlow),o&&o.setIntensity(L.rain),a&&a.setRain(L.rain),b(L.wetness)}let ze=new Map,ce=0;function ne(L){ze.has(L)||L.userData&&L.userData.unlit===!1||ze.set(L,L.color.clone())}function re(){let L=new Set;i.traverse(O=>{if(!O.isMesh||!O.material)return;let X=Array.isArray(O.material)?O.material:[O.material];for(let W of X)W&&(L.add(W),W.isMeshBasicMaterial&&ne(W))});for(let O of ze.keys())L.has(O)||ze.delete(O)}function oe(){for(let[L,O]of ze)L.color.copy(O).multiply(xe)}function fe(L,O){if(l){_!==0&&(v=((v+_*(L/60))%24+24)%24);return}if(_!==0&&(v=(v+_*(L/60))%24,v<0&&(v+=24),T+=_*(L/60),M&&R!==null&&T>=R&&!y)){let Y=P;He(Y),z(Y)}let X=y?y.toWeather:S;Q(v,X,B);let W;if(y){y.elapsed+=L;let Y=Math.min(1,y.elapsed/y.duration);$(y.from,B,Y,H),W=H,Y>=1&&(S=y.toWeather,y=null)}else W=B;ye(W),px(W,se),ce++,ce%yA===0&&re(),oe()}z(S),re(),fe(0,0);function me(L){v=(L%24+24)%24,_=0,fe(0,0)}function Le(L){_=L}function Ae(){return v}let ke=new Set([...Object.keys(zf),...Object.keys(dx)]);function He(L){if(y){if(L===y.toWeather)return}else if(L===S)return;px(se,K),y={from:K,toWeather:L,elapsed:0,duration:_A}}function N(L){if(!ke.has(L)){console.warn(`[atmosphere] setWeather: unknown weather "${L}", ignoring`);return}He(L),M&&z(L)}function ve(){return{hours:v,rate:_,weather:S,weatherTransition:y?{target:y.toWeather,progress:Math.min(1,y.elapsed/y.duration)}:null,sunAltitude:J,exposure:ge,fogDensity:f?f.density:se.fogDensity,tint:{r:xe.r,g:xe.g,b:xe.b},rain:se.rain,wetness:se.wetness,weatherScheduleEnabled:M}}function ue(L,O,X){let W=y?y.toWeather:S;v=((v+L)%24+24)%24,fe(0,0);let Y=Of[W]||[],Z=W;return Y.length&&(Z=Y[Bf(O>>>0,X>>>0)%Y.length],N(Z)),{hours:L,from:W,to:Z}}function A(L){c=L||null,c&&c.setGlow(se.windowGlow)}function E(L){if(typeof L!="string"||!L)throw new Error("atmosphere.acquireSuspend needs a named owner");return l?null:(l={owner:L,released:!1},l)}function G(L){return!L||L!==l?!1:(l=null,L.released=!0,fe(0,0),!0)}return{update:fe,setTime:me,getTime:Ae,setRate:Le,setWeather:N,setWeatherSchedule:D,state:ve,setLamps:A,nudge:ue,acquireSuspend:E,releaseSuspend:G,isSuspended:()=>!!l,suspendOwner:()=>l?l.owner:null}}var gx=3.2,AA=2.4,RA=.85,CA=1.15,xx=.34,IA=1/11,Hf=4e3;function PA(i,e){let t=i*73856093^e*19349663;return t=Math.imul(t^t>>>13,2246822507),t^=t>>>16,t>>>0}function kf(i,e){return PA(i,e)%1e5/1e5}function LA(){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255, 214, 150, 0.95)"),n.addColorStop(.5,"rgba(255, 190, 110, 0.55)"),n.addColorStop(1,"rgba(255, 170, 90, 0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let s=new xt(e);return s.colorSpace=tt,s}function _x(i,e,t){let n=i&&i.leith&&i.leith.buildings||[],s=e&&e.nearestStreetPoint,r=e&&e.groundHeight;if(!n.length||!s)return{mesh:null,count:0,setGlow(){}};let o=[];n.forEach((b,v)=>{let _=Math.max(1,b.levels||1);if(_<2)return;Ao(b,s).forEach((y,T)=>{if(y.len<1)return;let M=(y.ax+y.bx)/2,w=(y.az+y.bz)/2,C=s(M,w);if(!C||!C.point)return;let R=-y.dirz,P=y.dirx,F=C.point[0]-M,z=C.point[1]-w;R*F+P*z<0&&(R=-R,P=-P);let D=Math.atan2(R,P),B=Math.max(1,Math.round(y.len/AA));for(let H=0;H<B;H++){let K=T*4099+H;if(kf(v,K)>=IA)continue;let se=(H+.5)/B,de=y.ax+y.dirx*y.len*se+R*xx,V=y.az+y.dirz*y.len*se+P*xx,j=1+Math.floor(kf(v,K+1)*(_-1)),he=.3+kf(v,K+2)*.4,Ee=(r?r(de,V):0)+j*gx+he*gx,$=s(de,V);o.push({x:de,y:Ee,z:V,yaw:D,dist:$?$.distance:0})}})}),o.sort((b,v)=>b.dist-v.dist);let a=Math.max(0,o.length-Hf),c=a>0?o.slice(0,Hf):o;if(a>0&&console.warn(`[windows] ${a} candidate lit windows beyond ${Hf} dropped (furthest-from-street first)`),!c.length)return{mesh:null,count:0,setGlow(){}};let l=new yt(RA,CA),u=new un({map:LA(),transparent:!0,opacity:0,depthWrite:!1,blending:ls,side:Cn});u.userData.unlit=!1;let h=new gn(l,u,c.length);h.name="lit-windows";let d=new $e,f=new U,p=new Ut,x=new Jt,m=new U(1,1,1);c.forEach((b,v)=>{f.set(b.x,b.y,b.z),x.set(0,b.yaw,0),p.setFromEuler(x),d.compose(f,p,m),h.setMatrixAt(v,d)}),h.instanceMatrix.needsUpdate=!0,t.add(h);function g(b){u.opacity=Math.max(0,Math.min(1,b))}return{mesh:h,count:c.length,dropped:a,setGlow:g}}var Gf={r:44,g:50,b:45},NA=2501416,yx=60;function DA(){let t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d"),s=n.createImageData(256,256),r=s.data;for(let o=0;o<256;o++)for(let a=0;a<256;a++){let c=a/256*6,l=o/256*6,u=Gf.r,h=Gf.g,d=Gf.b,f=cn(c,l,6,3,401)-.5;u+=f*10,h+=f*12,d+=f*10,hi(a,o,419)>.986&&(u+=26,h+=26,d+=22);let x=(o*256+a)*4;r[x]=Math.max(0,Math.min(255,u)),r[x+1]=Math.max(0,Math.min(255,h)),r[x+2]=Math.max(0,Math.min(255,d)),r[x+3]=255}return n.putImageData(s,0,0),Mr(t)}function vx(i,e){let t=i.streetLine||[];if(t.length<2)return{group:null};let n=t[0],s=t[t.length-1],r=n[0]-s[0],o=n[1]-s[1],a=Math.hypot(r,o)||1;r/=a,o/=a;let c=-o,l=r,h=(i.groundHeight?i.groundHeight(n[0],n[1]):0)-2.5,d=new nt;d.name="forth";let f=1400,p=15,x=new yt(f,f);x.rotateX(-Math.PI/2);let m=DA();m.repeat.set(f/yx,f/yx);let g=new Pe(x,new Ye({map:m}));g.position.set(n[0]+r*(p+f/2),h,n[1]+o*(p+f/2)),g.name="forth-water",d.add(g);let b=p+340,v=12,_=new Ze(26,v,900);_.translate(0,v/2,0),_.rotateY(Math.atan2(c,l)),_.translate(n[0]+r*b,h,n[1]+o*b);let S=new Pe(_,new Ye({color:new pe(NA).multiplyScalar(4.7)}));return S.name="forth-shore",d.add(S),e.add(d),{group:d,water:g,shore:S}}var Ct=(()=>{let i=13723136;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),Wf=596,Nr=690,Vf=620,FA=593,UA=-3.2,OA=115,mi=3.5,Lr=2,Fr=.03,BA=.042;function bx(i,e){let t=i.streetLine||[];if(t.length<2)return{group:new nt};let n=i.groundHeight,s=new nt;e.add(s);let r=[],o=[],a=[],c=[];if(kA(t,s,c,r,o,a,n,i.collision),WA(t,r,n),qA(t,s,n,i.collision),i.collision)for(let l of r)l.tipped||i.collision.addCircle(l.x,l.z,.26,"cone");return YA(r,s),VA(o,a,s),c.length&&s.add(new Pe(it(c,!1),new Ye({vertexColors:!0,flatShading:!0}))),{group:s}}function zA(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0;return{point:[s+c*h,r+l*h],tangent:[c/(u||1),l/(u||1)]}}t+=u}return null}function HA(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function Dr(i,e,t,n){let s=zA(i,e);if(!s)return null;let[r,o]=s.tangent,a=-o,c=r,l=s.point[0]+a*t,u=s.point[1]+c*t;return{x:l,z:u,y:n?n(l,u):0,yaw:Math.atan2(r,o),tangent:s.tangent}}function kA(i,e,t,n,s,r,o,a){let c=$A(),l=[],u=1.5;for(let h=Vf-6;h<Nr;h+=5){let d=Dr(i,h+2.5,(Ct()-.5)*.8,o);if(!d)break;let f=new yt(u*2,5.4);f.rotateX(-Math.PI/2),f.rotateY(d.yaw),f.translate(d.x,d.y+BA,d.z),l.push(f)}l.length&&e.add(new Pe(it(l,!1),new Ye({map:c,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3})));for(let h=Vf-8;h<Nr+4;h+=3.2)for(let d of[-1,1]){let f=Dr(i,h+Ct()*2,d*(u+.7+Ct()*.9),o);if(!f)continue;let p=.75+Ct()*.65,x=.26+Ct()*.26,m=new As(p,x,9);if(m.translate(0,x/2,0),m.scale(1,1,.7+Ct()*.5),m.rotateY(Ct()*Math.PI),m.translate(f.x,f.y+Fr,f.z),cc(m,[6048825,6969411,4865326][Math.floor(Ct()*3)]),t.push(m),Ct()<.55){let g=new Ze(.4+Ct()*.5,.09,.35+Ct()*.4);g.rotateZ((Ct()-.5)*.9),g.rotateY(Ct()*Math.PI),g.translate(f.x+(Ct()-.5)*1.4,f.y+Fr+.12,f.z+(Ct()-.5)*1.4),cc(g,2829352),t.push(g)}}for(let h=Vf-10;h<Nr+6;h+=2.3)for(let d of[-1,1]){let f=Dr(i,h,d*(u+1.9+Ct()*.4),o);f&&n.push({...f,tipped:Ct()<.16})}Mx(i,Wf,Nr,4.4,s,r,o,a),Mx(i,Wf,Nr,-4.4,s,r,o,a),GA(i,Nr+2,s,r,o,a)}function Mx(i,e,t,n,s,r,o,a){for(let c=e;c<t;c+=mi+.1){let l=Dr(i,c+mi/2,n,o);if(!l)break;Ct()<.12||(Ex(l.x,l.z,l.y,l.yaw,s,r,Ct()<.18),Sx(a,l.x,l.z,l.yaw))}}function GA(i,e,t,n,s,r){for(let o=-6;o<=6;o+=mi+.1){let a=Dr(i,e,o+mi/2,s);a&&(Ex(a.x,a.z,a.y,a.yaw+Math.PI/2,t,n,Ct()<.25),Sx(r,a.x,a.z,a.yaw+Math.PI/2))}}function Sx(i,e,t,n){i&&i.addBox(e,t,mi/2,.13,n,"fence")}function Ex(i,e,t,n,s,r,o){let a=o?(Ct()-.5)*.5:(Ct()-.5)*.06,c=[],l=(p,x,m,g,b)=>{let v=new Ze(p,x,m);v.translate(g,b,0),c.push(v)};l(.05,Lr,.05,-mi/2,Lr/2),l(.05,Lr,.05,mi/2,Lr/2),l(mi,.05,.05,0,Lr-.03),l(mi,.05,.05,0,.03);let u=new Ze(.5,.11,.26);u.translate(-mi/2,.055,0);let h=new Ze(.5,.11,.26);h.translate(mi/2,.055,0),c.push(u,h);let d=it(c,!1);d.rotateZ(a),d.rotateY(n),d.translate(i,t+Fr,e),s.push(d);let f=new yt(mi-.1,Lr-.1);f.translate(0,Lr/2,0),f.rotateZ(a),f.rotateY(n),f.translate(i,t+Fr,e),r.push(f)}function VA(i,e,t){i.length&&t.add(new Pe(it(i,!1),new Ye({color:5592911,flatShading:!0}))),e.length&&t.add(new Pe(it(e,!1),new Ye({map:KA(),transparent:!0,alphaTest:.35,side:Pt,depthWrite:!0})))}function WA(i,e,t){let n=HA(i);for(let s=40;s<n-20;s+=OA){if(s>Wf-40&&s<Nr+40)continue;let r=3+Math.floor(Ct()*6);for(let o=0;o<r;o++){let a=Dr(i,s+(Ct()-.5)*14,(Ct()-.5)*12,t);a&&e.push({...a,tipped:Ct()<.35})}}}function XA(){let i=[],e=new As(.24,.62,10);e.translate(0,.31,0),cc(e,11025678),i.push(e);let t=new tn(.125,.15,.13,10);t.translate(0,.33,0),cc(t,13223092),i.push(t);let n=new Ze(.34,.05,.34);return n.translate(0,.025,0),cc(n,8006666),i.push(n),it(i,!1)}function YA(i,e){if(!i.length)return;let t=XA(),n=new Ye({vertexColors:!0,flatShading:!0}),s=new gn(t,n,i.length),r=new $e,o=new Ut,a=new Jt,c=new U,l=new U(1,1,1);i.forEach((u,h)=>{a.set(u.tipped?Math.PI/2*(.75+Ct()*.3):(Ct()-.5)*.08,Ct()*Math.PI*2,0,"YXZ"),o.setFromEuler(a),c.set(u.x,(u.y||0)+Fr+(u.tipped?.2:0),u.z),r.compose(c,o,l),s.setMatrixAt(h,r)}),s.instanceMatrix.needsUpdate=!0,e.add(s)}function qA(i,e,t,n){let s=Dr(i,FA,UA,t);if(!s)return;let r=4.2,o=2.5,a=.45,c=new yt(r,o);c.translate(0,a+o/2,0);let[l,u]=s.tangent,h=Math.atan2(-l,-u);c.rotateY(h),c.translate(s.x,s.y+Fr,s.z),e.add(new Pe(c,new Ye({map:ZA(),side:Pt})));let d=[];for(let p of[-1,1]){let x=new Ze(.12,a+.3,.12);x.translate(p*(r/2-.3),(a+.3)/2,0),d.push(x)}let f=it(d,!1);f.rotateY(h),f.translate(s.x,s.y+Fr,s.z),e.add(new Pe(f,new Ye({color:4867128}))),n&&n.addBox(s.x,s.z,r/2,.15,h,"hoarding")}function ZA(){let t=document.createElement("canvas");t.width=1024,t.height=610;let n=t.getContext("2d");n.fillStyle="#26506e",n.fillRect(0,0,1024,610);for(let r=0;r<2600;r++){let o=Math.random()*1024,a=Math.random()*610;n.fillStyle=`rgba(${20+Math.random()*60},${30+Math.random()*50},${40+Math.random()*50},0.06)`,n.fillRect(o,a,Math.random()*90,Math.random()*5)}n.fillStyle="#e8e6dc",n.textAlign="center",n.font="bold 62px Helvetica, Arial, sans-serif",n.fillText("LEITH WALK",1024/2,110),n.fillText("IMPROVEMENT PROJECT",1024/2,180),n.fillStyle="#f0c02a",n.fillRect(120,232,784,6),n.fillStyle="#e8e6dc",n.font="bold 50px Helvetica, Arial, sans-serif",n.fillText("COMPLETION: SPRING 2023",1024/2,310),n.font="30px Helvetica, Arial, sans-serif",n.fillStyle="#b8c6d2",n.fillText("WE APOLOGISE FOR ANY INCONVENIENCE",1024/2,380),n.font="24px Helvetica, Arial, sans-serif",n.fillText("City of Edinburgh Council",1024/2,430),n.strokeStyle="rgba(210,60,40,0.85)",n.lineWidth=9,n.lineCap="round",n.beginPath(),n.moveTo(190,340),n.lineTo(835,285),n.stroke(),n.save(),n.translate(1024/2,520),n.rotate(-.05),n.fillStyle="rgba(214,66,44,0.9)",n.font="bold 58px Helvetica, Arial, sans-serif",n.fillText("STILL WAITING",0,0),n.restore(),n.globalCompositeOperation="destination-out";for(let r=0;r<26;r++){let o=Math.random()*1024,a=Math.random()<.5?Math.random()*40:610-Math.random()*40;n.beginPath(),n.ellipse(o,a,10+Math.random()*50,6+Math.random()*22,Math.random()*3,0,Math.PI*2),n.fill()}n.globalCompositeOperation="source-over";let s=new xt(t);return s.colorSpace=tt,s.anisotropy=16,s}function KA(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.clearRect(0,0,128,128),t.strokeStyle="#50524b",t.lineWidth=2;let n=128/8;for(let r=0;r<=8;r++)t.beginPath(),t.moveTo(r*n,0),t.lineTo(r*n,128),t.stroke(),t.beginPath(),t.moveTo(0,r*n),t.lineTo(128,r*n),t.stroke();let s=new xt(e);return s.wrapS=s.wrapT=ci,s.repeat.set(6,4),s.colorSpace=tt,s.anisotropy=16,s}function $A(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.fillStyle="#241d16",t.fillRect(0,0,256,256);for(let s=0;s<2200;s++){let r=Math.random();t.fillStyle=`rgba(${30+r*55},${25+r*45},${18+r*35},0.5)`,t.beginPath(),t.arc(Math.random()*256,Math.random()*256,Math.random()*5,0,Math.PI*2),t.fill()}t.fillStyle="rgba(78,84,74,0.45)",t.beginPath(),t.ellipse(256*.55,256*.62,256*.3,256*.13,.3,0,Math.PI*2),t.fill(),t.fillStyle="#4a4235",t.fillRect(0,256*.4,256,16),t.fillStyle="rgba(255,255,255,0.07)",t.fillRect(0,256*.4,256,5);let n=new xt(e);return n.colorSpace=tt,n.anisotropy=16,n}function cc(i,e){let t=new pe(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;i.setAttribute("color",new Qe(s,3))}var En=(()=>{let i=39441;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),JA=115,jA=90,QA=40,Tx=10,eR=27,tR=8,wx=22,nR=55,Gu=1.35;function Ax(i,e,t){let n=i.streetLine||[];if(n.length<2)return{group:new nt,update(){}};let s=i.groundHeight||(()=>0),r=new nt;r.name="birds",t.add(r);let o=iR(n,r);return rR(i,e,r),oR(n,r,s),{group:r,update(a,c){sR(o,c,s)}}}function Xf(i,e){let t=i/2,n=[],s=u=>{let h=new Float32Array([u*.04,0,e*.18,u*.04,0,-e*.16,u*t*.55,.03*t,-e*.3,u*.04,0,e*.18,u*t*.55,.03*t,-e*.3,u*t*.58,.03*t,e*.06,u*t*.58,.03*t,e*.06,u*t*.55,.03*t,-e*.3,u*t,.1*t,-e*.38,u*t*.58,.03*t,e*.06,u*t,.1*t,-e*.38,u*t*.97,.1*t,-e*.1]),d=new pt;return d.setAttribute("position",new Qe(h,3)),d.computeVertexNormals(),d},r=s(-1);lc(r,4869188);let o=s(1);lc(o,4869188),n.push(r,o);let a=(u,h,d)=>{let f=new Ze(u,h,d).toNonIndexed();return f.deleteAttribute("uv"),f},c=a(e*.17,e*.15,e);lc(c,7237734),n.push(c);let l=a(e*.34,.012,e*.3);return l.translate(0,0,-e*.6),lc(l,2895400),n.push(l),it(n,!1)}function Yf(){return new Ye({vertexColors:!0,flatShading:!0,side:Pt})}function iR(i,e){let t=Cx(i),n=[];for(let r=0;r<JA;r++){let o=Rx(i,30+En()*Math.max(1,t-60));if(!o)continue;let[a,c]=o.tangent;n.push({ox:o.point[0],oz:o.point[1],ax:a,az:c,px:-c,pz:a,rAlong:wx+En()*(nR-wx),rAcross:2.5+En()*(tR-2.5),y:Tx+En()*(eR-Tx),speed:(En()<.5?-1:1)*(.1+En()*.14),phase:En()*Math.PI*2,bobAmp:.5+En()*1.4,bobFreq:.25+En()*.45,scale:.85+En()*.5})}let s=new gn(Xf(Gu,Gu*.42),Yf(),n.length);return s.frustumCulled=!1,e.add(s),{mesh:s,birds:n}}function sR({mesh:i,birds:e},t,n){let s=new $e,r=new Ut,o=new Jt,a=new U,c=new U;e.forEach((l,u)=>{let h=t*l.speed+l.phase,d=Math.cos(h),f=Math.sin(h),p=d*l.rAlong,x=f*l.rAcross,m=l.ox+l.ax*p+l.px*x,g=l.oz+l.az*p+l.pz*x,b=n(m,g)+l.y+Math.sin(t*l.bobFreq+l.phase)*l.bobAmp,v=(-f*l.rAlong*l.ax+d*l.rAcross*l.px)*l.speed,_=(-f*l.rAlong*l.az+d*l.rAcross*l.pz)*l.speed,S=Math.atan2(v,_),y=(-d*l.rAlong*l.ax-f*l.rAcross*l.px)*l.speed*l.speed,T=(-d*l.rAlong*l.az-f*l.rAcross*l.pz)*l.speed*l.speed,M=Math.hypot(v,_)||1e-4,w=(y*_-T*v)/M,C=ui.clamp(w*90,-1,1);o.set(Math.sin(t*l.bobFreq+l.phase)*.06,S,C,"YXZ"),r.setFromEuler(o),a.set(m,b,g),c.setScalar(l.scale),s.compose(a,r,c),i.setMatrixAt(u,s)}),i.instanceMatrix.needsUpdate=!0}function rR(i,e,t){let n=e&&e.buildings||[],s=i.nearestStreetPoint,r=i.groundHeight||(()=>0),o=[],a=n.filter(f=>{let p=f.footprint;if(!p||p.length<3)return!1;let x=s?s(p[0][0],p[0][1]):null;return!x||x.distance<=30}),c=a.length?jA/a.length:0;for(let f of a){let p=f.footprint,x=Math.max(1,f.levels||1)*3.2,m=Math.floor(c)+(En()<c%1?1:0);for(let g=0;g<m;g++){let b=Math.floor(En()*p.length),v=(b+1)%p.length,_=.15+En()*.7,S=p[b][0]+(p[v][0]-p[b][0])*_,y=p[b][1]+(p[v][1]-p[b][1])*_;o.push({x:S,z:y,y:r(S,y)+x+.12,yaw:En()*Math.PI*2})}}if(!o.length)return;let l=new gn(Xf(Gu*.42,Gu*.46),Yf(),o.length),u=new $e,h=new Ut,d=new Jt;o.forEach((f,p)=>{d.set(0,f.yaw,0,"YXZ"),h.setFromEuler(d),u.compose(new U(f.x,f.y,f.z),h,new U(1,1,1)),l.setMatrixAt(p,u)}),l.instanceMatrix.needsUpdate=!0,t.add(l)}function oR(i,e,t){let n=Cx(i),s=[];for(let u=0;u<QA;u++){let h=Rx(i,25+En()*Math.max(1,n-50));if(!h)continue;let[d,f]=h.tangent,p=-f,x=d,m=(En()*2-1)*5.5,g=h.point[0]+p*m,b=h.point[1]+x*m;s.push({x:g,z:b,yaw:En()*Math.PI*2})}if(!s.length)return;let r=Xf(.3,.3);lc(r,5263948);let o=new gn(r,Yf(),s.length),a=new $e,c=new Ut,l=new Jt;s.forEach((u,h)=>{l.set(0,u.yaw,0,"YXZ"),c.setFromEuler(l),a.compose(new U(u.x,t(u.x,u.z)+.1,u.z),c,new U(1,1,1)),o.setMatrixAt(h,a)}),o.instanceMatrix.needsUpdate=!0,e.add(o)}function Rx(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0;return{point:[s+c*h,r+l*h],tangent:[c/(u||1),l/(u||1)]}}t+=u}return null}function Cx(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function lc(i,e){let t=new pe(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;i.setAttribute("color",new Qe(s,3))}var Ur=(()=>{let i=10775;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),aR=90,cR=6.6,Ix=2.5,lR=9,uR=.06;function Dx(i,e){let t=i.streetLine||[];if(t.length<2)return{group:new nt,update(){}};let n=new nt;n.name="vermin",e.add(n);let s=pR(t),r=[];for(let c=0;c<aR;c++){let l=20+Ur()*Math.max(1,s-45),u=Ix+Ur()*(lR-Ix),h=Nx(t,l),d=Nx(t,Math.min(l+u,s-1));if(!h||!d)continue;let p=(Ur()<.5?1:-1)*(cR+(Ur()-.5)*.8),x=Lx(h,p),m=Lx(d,p);r.push({ax:x[0],az:x[1],bx:m[0],bz:m[1],rate:.07+Ur()*.16,phase:Ur(),scale:.8+Ur()*.5})}let o=new gn(fR(),new Ye({vertexColors:!0,flatShading:!0}),r.length);n.add(o);let a=i.groundHeight||(()=>0);return{group:n,update(c,l){dR(o,r,l,a)}}}function hR(i){return i<.18?Px(0,.18,i):i<.5?1:i<.68?1-Px(.5,.68,i):0}function Px(i,e,t){let n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)}function dR(i,e,t,n){let s=new $e,r=new Ut,o=new Jt,a=new U,c=new U;e.forEach((l,u)=>{let h=(t*l.rate+l.phase)%1,d=hR(h),f=l.ax+(l.bx-l.ax)*d,p=l.az+(l.bz-l.az)*d,x=h>=.5,m=x?l.ax-l.bx:l.bx-l.ax,g=x?l.az-l.bz:l.bz-l.az,b=Math.atan2(m,g),_=h<.18||h>=.5&&h<.68?Math.abs(Math.sin(t*26+u))*.025:0;o.set(0,b,0,"YXZ"),r.setFromEuler(o),a.set(f,n(f,p)+uR+_,p),c.setScalar(l.scale),s.compose(a,r,c),i.setMatrixAt(u,s)}),i.instanceMatrix.needsUpdate=!0}function fR(){let i=[],e=(r,o,a)=>{let c=new Ze(r,o,a).toNonIndexed();return c.deleteAttribute("uv"),c},t=e(.11,.1,.23);t.translate(0,.05,0),qf(t,4537909),i.push(t);let n=e(.075,.07,.1);n.translate(0,.045,.15),qf(n,5129787),i.push(n);let s=e(.016,.016,.21);return s.translate(0,.035,-.21),qf(s,4866617),i.push(s),it(i,!1)}function Lx(i,e){let[t,n]=i.tangent;return[i.point[0]+-n*e,i.point[1]+t*e]}function Nx(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0;return{point:[s+c*h,r+l*h],tangent:[c/(u||1),l/(u||1)]}}t+=u}return null}function pR(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function qf(i,e){let t=new pe(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;i.setAttribute("color",new Qe(s,3))}var mt=(()=>{let i=11590938;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),mR=210,gR=130,xR=260,_R=22;function Fx(i,e,t){let n=i.streetLine||[];if(n.length<2)return{group:new nt};let s=i.groundHeight||(()=>0),r=new nt;return t.add(r),yR(i,e,n,r),MR(n,r,s),bR(n,r,s),SR(n,r,s),{group:r}}function yR(i,e,t,n){let s=vR(),r=[],o=(f,p,x,m,g)=>{for(let b=0;b<3;b++){let v=new yt(m,m);v.translate(0,m/2,0),v.rotateZ(g),v.rotateY(b/3*Math.PI+mt()*.4),v.translate(f,p,x),r.push(v)}},a=e&&e.buildings||[],c=i.nearestStreetPoint,l=a.filter(f=>{let p=f.footprint;if(!p||p.length<3)return!1;let x=c?c(p[0][0],p[0][1]):null;return!x||x.distance<=28}),u=i.groundHeight||(()=>0),h=l.length?mR/l.length:0;for(let f of l){let p=f.footprint,x=Math.floor(h)+(mt()<h%1?1:0),m=Math.max(1,f.levels||1)*3.2;for(let g=0;g<x;g++){let b=Math.floor(mt()*p.length),v=(b+1)%p.length,_=.1+mt()*.8,S=p[b][0]+(p[v][0]-p[b][0])*_,y=p[b][1]+(p[v][1]-p[b][1])*_;o(S,u(S,y)+m-.25,y,1.1+mt()*1.5,(mt()-.5)*.5)}}let d=Zf(t);for(let f=0;f<gR;f++){let p=Xu(t,20+mt()*Math.max(1,d-40));if(!p)continue;let m=(mt()<.5?1:-1)*(7.2+mt()*2.6),g=Wu(p,m);o(g[0],u(g[0],g[1])+.03,g[1],.8+mt()*1.1,(mt()-.5)*.3)}r.length&&n.add(new Pe(it(r,!1),new Ye({map:s,transparent:!0,alphaTest:.45,side:Pt,depthWrite:!0})))}function vR(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.clearRect(0,0,256,256);for(let s=0;s<170;s++){let r=-Math.PI/2+(Math.random()-.5)*2.5,o=30+Math.random()*78,a=256/2+(Math.random()-.5)*58,c=256-Math.random()*44,l=46+Math.random()*52;t.strokeStyle=`rgba(${28+Math.random()*26},${l},${30+Math.random()*22},0.95)`,t.lineWidth=2+Math.random()*5,t.lineCap="round",t.beginPath(),t.moveTo(a,c),t.quadraticCurveTo(a+Math.cos(r)*o*.5+(Math.random()-.5)*24,c+Math.sin(r)*o*.5,a+Math.cos(r)*o,c+Math.sin(r)*o),t.stroke()}for(let s=0;s<13;s++){let r=34+Math.random()*188,o=26+Math.random()*96,a=26+Math.random()*40;for(let c=0;c<26;c++){let l=c/26,u=(1-l)*8+1.5;t.fillStyle=`rgba(${74+Math.random()*30},${44+Math.random()*22},${88+Math.random()*32},0.88)`,t.beginPath(),t.ellipse(r+(Math.random()-.5)*4,o+l*a,u,3.5,0,0,Math.PI*2),t.fill()}}let n=new xt(e);return n.colorSpace=tt,n.anisotropy=16,n}function MR(i,e,t){let n=Zf(i),s=[];for(let r=0;r<xR;r++){let o=Xu(i,15+mt()*Math.max(1,n-30));if(!o)continue;let c=(mt()<.5?1:-1)*(mt()<.65?6.3+mt()*.7:7.5+mt()*2.2),l=Wu(o,c),u=t(l[0],l[1]),h=mt(),d,f;h<.3?(d=new tn(.037,.042,.27,6),d.rotateZ(Math.PI/2),d.rotateY(mt()*Math.PI*2),d.translate(0,.04,0),f=2899230):h<.55?(d=new tn(.032,.032,.1,6),d.rotateZ(Math.PI/2+(mt()-.5)*.7),d.scale(1,1,.6),d.translate(0,.032,0),f=mt()<.5?10115614:3100522):h<.8?(d=new Ze(.16+mt()*.08,.05,.12+mt()*.06),d.rotateY(mt()*Math.PI),d.rotateZ((mt()-.5)*.5),d.translate(0,.026,0),f=11051924):(d=new yt(.24+mt()*.2,.18+mt()*.14),d.rotateX(-Math.PI/2),d.rotateY(mt()*Math.PI),d.translate(0,.036,0),f=7170652),d.translate(l[0],u+.03,l[1]),Vu(d,f),s.push(d)}s.length&&e.add(new Pe(it(s,!1),new Ye({vertexColors:!0,flatShading:!0,side:Pt})))}function bR(i,e,t){let n=Zf(i),s=[];for(let r=0;r<_R;r++){let o=Xu(i,25+mt()*Math.max(1,n-50));if(!o)continue;let a=mt()<.5?1:-1,c=Wu(o,a*(7.6+mt()*1.8)),l=t(c[0],c[1]),u=mt()<.6,h=[],d=new Ze(.62,1.05,.72).toNonIndexed();d.deleteAttribute("uv"),d.translate(0,.525,0),Vu(d,[3095084,3813160,2634298][Math.floor(mt()*3)]),h.push(d);let f=new Ze(.66,.07,.76).toNonIndexed();f.deleteAttribute("uv"),f.translate(0,1.07,u?.1:-.3),f.rotateX(u?.2:-.7),Vu(f,1975840),h.push(f);let p=it(h,!1);p.rotateY(mt()*Math.PI*2),u&&p.rotateZ(Math.PI/2+(mt()-.5)*.3),p.translate(c[0],l+(u?.34:.03),c[1]),s.push(p)}s.length&&e.add(new Pe(it(s,!1),new Ye({vertexColors:!0,flatShading:!0})))}function SR(i,e,t){let n=Xu(i,415);if(!n)return;let s=Wu(n,-3.4),r=t(s[0],s[1]),o=[],a=(d,f,p,x,m,g)=>{let b=new Ze(d,f,p).toNonIndexed();b.deleteAttribute("uv"),b.translate(x,m,g),o.push(b)},c=.56,l=.44,u=.86;for(let d=0;d<=6;d++){let f=-u/2+d/6*u;a(c,.018,.018,0,l,f),a(.018,l,.018,-c/2,l/2,f),a(.018,l,.018,c/2,l/2,f)}for(let d=0;d<=4;d++){let f=-c/2+d/4*c;a(.018,.018,u,f,.02,0),a(.018,.018,u,f,l,0)}a(c,l,.018,0,l/2,-u/2),a(.03,.3,.03,0,l+.15,-u/2);let h=it(o,!1);Vu(h,6974822),h.rotateZ(Math.PI/2*.92),h.rotateY(mt()*Math.PI*2),h.translate(s[0],r+.3,s[1]),e.add(new Pe(h,new Ye({vertexColors:!0,flatShading:!0})))}function Wu(i,e){let[t,n]=i.tangent;return[i.point[0]+-n*e,i.point[1]+t*e]}function Xu(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0;return{point:[s+c*h,r+l*h],tangent:[c/(u||1),l/(u||1)]}}t+=u}return null}function Zf(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function Vu(i,e){let t=new pe(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;i.setAttribute("color",new Qe(s,3))}var Kf=[{file:"cars/sedan.glb",kind:"car",targetLen:4.3},{file:"cars/hatchback-sports.glb",kind:"car",targetLen:3.9},{file:"cars/van.glb",kind:"van",targetLen:5.4},{file:"cars/bus.glb",kind:"bus",targetLen:11}],ER=16,Ux=6.1,TR=405,Ox=[560,700],Yn=(()=>{let i=3394627454;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})();function Hx(i,e,t){let n=e&&e.streetLine;if(!n||n.length<2)return{group:null};let s=new nt;s.name="cars",t.add(s);let r=new Bs,o=a=>r.loadAsync(xn(i,a.file)).then(c=>wR(c.scene,a)).catch(()=>null);return Promise.all(Kf.map(o)).then(a=>{let c={};for(let l=0;l<Kf.length;l++)a[l]&&(c[Kf[l].kind]??=[]).push(a[l]);!c.car&&!c.van&&!c.bus||AR(c,n,s,e.groundHeight,e.collision)}),{group:s}}function wR(i,e){let n=new en().setFromObject(i).getSize(new U),s=Math.max(n.x,n.z)||1,r=e.targetLen/s;i.scale.setScalar(r),i.updateMatrixWorld(!0);let o=new en().setFromObject(i);i.position.y=-o.min.y;let a=new nt;a.add(i);let c=new en().setFromObject(i);return a.userData.plan={halfW:(c.max.x-c.min.x)/2,halfD:(c.max.z-c.min.z)/2,cx:(c.max.x+c.min.x)/2,cz:(c.max.z+c.min.z)/2},a}function Bx(i,e,t){let n=e.userData&&e.userData.plan;if(!i||!n)return;let s=e.rotation.y,r=Math.sin(s),o=Math.cos(s);i.addBox(e.position.x+n.cx*o+n.cz*r,e.position.z-n.cx*r+n.cz*o,n.halfW,n.halfD,s,t)}function zx(i,e){let t=e?.05+Yn()*.04:.18+Yn()*.2,n=Yn()<.5&&!e;i.traverse(s=>{if(!s.isMesh||!s.material)return;let r=s.material,o=new Ye({map:r.map||null,color:(r.color?r.color.clone():new pe(8947848)).multiplyScalar(t)});n&&(o.color.r=Math.min(1,o.color.r*1.35+.03),o.color.b*=.75),s.material=o})}function AR(i,e,t,n,s){let r=[...i.car||[],...i.van||[]];if(r.length)for(let a=0;a<ER;a++){let c=40+Yn()*1160;if(c>Ox[0]&&c<Ox[1])continue;let l=Ka(e,c);if(!l)continue;let u=Yn()<.5?1:-1,[h,d]=l.tangent,f=r[Math.floor(Yn()*r.length)].clone(!0);zx(f,Yn()<.12);let p=l.point[0]+-d*u*(Ux+Yn()*.7),x=l.point[1]+h*u*(Ux+Yn()*.7);f.position.set(p,n?n(p,x):0,x);let m=Math.atan2(h,d)+(Yn()<.5?Math.PI:0);Yn()<.15&&(m+=(Yn()-.5)*1.2),f.rotation.y=m+(Yn()-.5)*.12,f.rotation.z=(Yn()-.5)*.05,t.add(f),Bx(s,f,"car")}let o=(i.bus||[])[0];if(o){let a=Ka(e,TR);if(a){let c=o.clone(!0);zx(c,!0);let l=n?n(a.point[0],a.point[1]):0;c.position.set(a.point[0],l,a.point[1]),c.rotation.y=Math.atan2(a.tangent[0],a.tangent[1])+.06,c.rotation.z=.07,t.add(c),Bx(s,c,"bus")}}}var RR=!0,CR=.34,IR=.78,PR=0,LR=30,NR=7.6,Uo=30,DR=50,FR=9,$f=25,UR=3,kx=[4999740,4145720,5655614,4472891,5263946,3816500],Gx=[7027246,3033690,7826250,4864602,5921354],Vx=['"%Q" \u2014 whit?','did ye hear that? "%Q"','"%Q", says he','"%Q" \u2014 aye, right','"%Q"... ma nerves',`he's away wi it \u2014 "%Q"`],OR=i=>{let e=i;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}},Tn=OR(1972196);function Xx(i,e,t,n){let s=e.streetLine||[],r=e.groundHeight||(()=>0);if(s.length<2)return{update(){}};let o=i.comicLines||{},c=kR(s)-Uo-DR;if(c<50)return{update(){}};let l=new nt;l.name="leithers",t.add(l);let u=Ln("LeitherMesh",RR),h=[];for(let v=0;v<LR;v++){let _=BR();_.s=Uo+Tn()*c,_.side=Tn()<.5?1:-1,_.dir=Tn()<.5?1:-1,_.speed=.55+Tn()*.5,_.offset=NR+Tn()*1.6,_.state="walk",_.listenT=0,_.cooldown=Tn()*$f,_.phase=Tn()*10,_.bubble=null,_.bubbleT=0,l.add(_.group),h.push(_)}let d=!1;function f(){if(!(d||!e.collision)){d=!0;for(let v of h)e.collision.addMover(()=>v.group.position.x,()=>v.group.position.z,v.collisionRadius,"walker")}}if(!u)for(let v of h)v.buildDoll();function p(v){if(!u)return;if(!v||!v.onArchetype||!v.enabled){for(let S of h)S.buildDoll();return}let _=new Map;for(let S of h){let y=Tf(S.build,PR);S.archetype=y.name,S.squash=S.build.girth/y.girth,_.has(y.name)||_.set(y.name,[]),_.get(y.name).push(S)}v.onArchetype((S,y)=>{let T=_.get(S.name);if(T)for(let M of T){if(!y){M.buildDoll();continue}let w=y.clone(!0);w.name="leither-mesh",zR(w,M.coat),w.scale.set(M.headTopY*M.squash,M.headTopY,M.headTopY*M.squash),M.group.add(w),M.mesh=w}})}let x=0,m=0;function g(v,_){for(let S=0;S<h.length;S++){let y=h[S];if(y.cooldown>0&&(y.cooldown-=v),y.state==="fetch"){let w=y.fetchItem.chainage-y.s;if(Math.abs(w)>2)y.dir=Math.sign(w),y.s+=y.dir*y.speed*1.5*v;else{y.state="approach",y.approachT=0;let C=y.group.position;y.approachFrom={x:C.x,z:C.z}}}else if(y.state==="approach"){y.approachT=Math.min(1,y.approachT+v/1.6);let M=y.fetchItem,w=y.approachT,C=M.x+.75,R=M.z,P=y.approachFrom.x+(C-y.approachFrom.x)*w,F=y.approachFrom.z+(R-y.approachFrom.z)*w;y.group.position.set(P,r(P,F)+Math.abs(Math.sin((y.s+w*8)*2))*.03,F),y.group.rotation.y=Math.atan2(M.x-y.group.position.x,M.z-y.group.position.z),w>=1&&(y.state="readaloud",y.readQueue=(y.fetchItem.lines||[]).slice(0,8),y.readT=.5);continue}else if(y.state==="readaloud"){if(y.readT-=v,y.readT<=0&&!y.bubble){let M=y.readQueue.shift();M==null?(y.state="walk",y.fetchItem.adopted=!1,y.fetchItem=null,y.cooldown=$f):(y.bubble=Wx('"'+M+'"'),y.bubble.position.set(0,y.headTopY+.5,0),y.group.add(y.bubble),y.bubbleT=4.2,x++,y.readT=.6)}y.bubble&&(y.bubbleT-=v,y.bubbleT<=0&&(y.group.remove(y.bubble),y.bubble.material.map.dispose(),y.bubble.material.dispose(),y.bubble=null,x--));continue}else y.state==="listen"?(y.listenT-=v,(y.listenT<=0||!(y.target&&y.target.speaking))&&(y.state="walk",y.target=null,y.cooldown=$f)):(y.s+=y.dir*y.speed*v,(y.s<Uo||y.s>Uo+c)&&(y.dir*=-1,y.s=Math.max(Uo,Math.min(Uo+c,y.s))));let T=GR(s,y.s);if(T){let[M,w]=T.tangent,C=T.point[0]+-w*y.side*y.offset,R=T.point[1]+M*y.side*y.offset,P=r(C,R);if(y.group.position.set(C,P,R),y.state==="listen"&&y.target){let F=y.target.group.position;y.group.rotation.y=Math.atan2(F.x-C,F.z-R)}else{y.group.rotation.y=Math.atan2(M*y.dir,w*y.dir);let F=_*(4.6*y.speed)+y.phase;y.group.position.y=P+Math.abs(Math.sin(F))*.045,y.group.rotation.z=Math.sin(F)*.03}}y.bubble&&(y.bubbleT-=v,y.bubbleT<=0&&(y.group.remove(y.bubble),y.bubble.material.map.dispose(),y.bubble.material.dispose(),y.bubble=null,x--))}f();for(let S=0;S<4;S++){let y=h[m++%h.length];if(y.state!=="walk"||y.cooldown>0)continue;let T=y.group.position;for(let M of n){if(!M.speaking)continue;let w=M.group.position;if(Math.hypot(w.x-T.x,w.z-T.z)>FR)continue;y.state="listen",y.target=M,y.listenT=6+Tn()*9;let C=o[M.comic.id];if(C&&C.length&&x<UR&&Tn()<.6){let R=C[Math.floor(Tn()*C.length)],P=Vx[Math.floor(Tn()*Vx.length)];y.bubble=Wx(P.replace("%Q",R)),y.bubble.position.set(0,y.headTopY+.5,0),y.group.add(y.bubble),y.bubbleT=7,x++}break}}}function b(v){if(!v||v.adopted||!(v.lines&&v.lines.length))return!1;let _=null,S=70;for(let y of h){if(y.state!=="walk")continue;let T=y.group.position,M=Math.hypot(T.x-v.x,T.z-v.z);M<S&&(S=M,_=y)}return _?(v.adopted=!0,_.state="fetch",_.fetchItem=v,!0):!1}return{walkers:h,update:g,summonReader:b,useArchetypes:p,meshed:u}}function BR(){let i=1.5+Tn()*.35,e=.8+Tn()*.45,t=kx[Math.floor(Tn()*kx.length)],n=new nt,s=.1,r=i*.32,o=.44*e,a=.3*e,c=i*.44,l=.26,u=s+r,h=u+c,d=h+l+.02,f=Gx[Math.floor(Tn()*Gx.length)],p=Tn()<.3?[-1,1]:[Tn()<.5?-1:1],x=new Ye({color:f,flatShading:!0});for(let g of p){let b=new Pe(new Ze(.2,.24,.11),x);b.position.set(g*(o*.5+.1),u+c*.12,.02),n.add(b)}let m={group:n,headTopY:d,coat:t,build:{height:i,girth:e,headScale:1.5},collisionRadius:o/2,archetype:null,squash:1,mesh:null,hasDoll:!1,buildDoll(){if(m.hasDoll)return m;m.hasDoll=!0;let g=ja(t,!1),b=ja(HR(t,.62),!0),v=new Ye({color:1578512,flatShading:!0}),_=[];for(let P of[-1,1]){let F=new Ze(o*.34,r,a*.7);F.translate(P*o*.24,s+r*.5,0),_.push(F);let z=new Ze(.11,c*.7,.11);z.translate(P*(o*.5+.05),h-c*.62,0),_.push(z)}let S=new Ze(o,c,a);S.translate(0,u+c*.5,0),_.push(S);let y=new Pe(it(_),g);n.add(y);let T=[];for(let P of[-1,1]){let F=new Ze(o*.36,s,a*1.3);F.translate(P*o*.24,s*.5,a*.15),T.push(F)}let M=new Pe(it(T),v);n.add(M);let w=new Ye({color:2235928,flatShading:!0}),C=[b,b,b,b,w,b],R=new Pe(new Ze(l,l,l*.9),C);return R.position.set(0,h+l*.5+.02,0),n.add(R),m.dollBody=[y,M,R],m.head=R,m},dollBody:[],head:null};return m}function zR(i,e){let t=new pe(e),n=(t.r+t.g+t.b)/3;n>0&&t.multiplyScalar(1/n);let s=[t.r-1,t.g-1,t.b-1],r=Math.hypot(s[0],s[1],s[2]),o=r>0?CR/r:0,a=new pe(1+s[0]*o,1+s[1]*o,1+s[2]*o).multiplyScalar(IR);i.traverse(c=>{!c.isMesh||!c.material||(c.material=c.material.clone(),c.material.color.multiply(a))})}function HR(i,e){let t=Math.round((i>>16&255)*e),n=Math.round((i>>8&255)*e),s=Math.round((i&255)*e);return t<<16|n<<8|s}function Wx(i){let e=document.createElement("canvas");e.width=512,e.height=160;let t=e.getContext("2d"),n=i.split(" "),s=[""];for(let c of n)(s[s.length-1]+" "+c).trim().length>30&&s.length<3&&s.push(""),s[s.length-1]=(s[s.length-1]+" "+c).trim();t.fillStyle="rgba(20, 22, 16, 0.82)",t.strokeStyle="rgba(200, 200, 180, 0.5)",t.lineWidth=3;let r=34+s.length*34;t.beginPath(),t.roundRect(8,80-r/2,496,r,14),t.fill(),t.stroke(),t.fillStyle="#d8d4c0",t.font="italic 26px Georgia, serif",t.textAlign="center",s.forEach((c,l)=>t.fillText(c,256,80-r/2+44+l*32));let o=new xt(e),a=new ts(new Di({map:o,transparent:!0,depthTest:!0}));return a.scale.set(1.9,.59,1),a}function kR(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function GR(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0;return{point:[s+c*h,r+l*h],tangent:[c/(u||1),l/(u||1)]}}t+=u}return null}var Yx=24,VR=70,qx=60,WR=70,ks=(()=>{let i=1146442;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),XR=new Si;function Zx(i,e,t){let n=i.catalog&&i.catalog.comics||[],s=e.streetLine||[];if(!n.length||s.length<2)return{items:[],update(){},nearestItem:()=>null};let r=i.comicLines||{},o=n.filter(p=>r[p.id]&&r[p.id].length>=3),a=o.length>=Yx?[...o]:[...o,...n.filter(p=>!r[p.id])],c=[];for(;c.length<Math.min(Yx,a.length);)c.push(a.splice(Math.floor(ks()*a.length),1)[0]);let l=YR(s),u=new nt;u.name="litter-comics",t.add(u);let h=c.map((p,x)=>{let m=qx+ks()*(l-qx-WR),g=qR(s,m);if(!g)return null;let[b,v]=g.tangent,_=ks()<.5?1:-1,S=3.5+ks()*6,y=g.point[0]+-v*_*S,T=g.point[1]+b*_*S,M=new Ye({map:Hd(),color:new pe(4.7,4.7,4.7),side:Pt}),w=new Pe(new yt(.42,.58),M);w.rotation.x=-Math.PI/2,w.rotation.z=ks()*Math.PI*2,ks()<.3&&(w.rotation.y=(ks()-.5)*.5);let C=e.groundHeight?e.groundHeight(y,T):0;return w.position.set(y,C+.055+ks()*.01,T),u.add(w),{comic:p,lines:r[p.id]||[],mesh:w,x:y,z:T,chainage:m,loaded:!1,adopted:!1,load(){this.loaded||(this.loaded=!0,XR.load(xn(i,p.image),R=>{R.colorSpace=tt,M.map=R,M.color.setScalar(4.7),M.needsUpdate=!0}))}}}).filter(Boolean);function d(p){if(p)for(let x of h)!x.loaded&&Math.hypot(p.x-x.x,p.z-x.z)<VR&&x.load()}function f(p,x,m){let g=null,b=m;for(let v of h){let _=Math.hypot(p-v.x,x-v.z);_<b&&(b=_,g=v)}return g}return{items:h,update:d,nearestItem:f}}function YR(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function qR(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0;return{point:[s+c*h,r+l*h],tangent:[c/(u||1),l/(u||1)]}}t+=u}return null}var Oo=900,Kx=16,$x=20,ZR=-3,KR=13,Jf=.35,$R=.85,JR=.5;function jR(i){let e=i|0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function QR(i,e){return(i%e+e)%e}function e2(){let e=document.createElement("canvas");e.width=32,e.height=32;let t=e.getContext("2d");t.translate(32/2,32/2),t.scale(.22,1);let n=t.createRadialGradient(0,0,0,0,0,32/2);n.addColorStop(0,"rgba(200,210,220,0.85)"),n.addColorStop(.55,"rgba(200,210,220,0.4)"),n.addColorStop(1,"rgba(200,210,220,0)"),t.fillStyle=n,t.fillRect(-32/2,-32/2,32,32);let s=new xt(e);return s.colorSpace=tt,s}function Jx(i){let e=jR(5904299),t=new Float32Array(Oo),n=new Float32Array(Oo),s=new Float32Array(Oo);for(let h=0;h<Oo;h++)t[h]=(e()-.5)*2*Kx,n[h]=e()*$x,s[h]=(e()-.5)*2*Kx;let r=new Float32Array(Oo*3),o=new pt;o.setAttribute("position",new wt(r,3));let a=new ws({map:e2(),size:Jf,color:11187392,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0}),c=new hr(o,a);c.name="rain",c.frustumCulled=!1,c.visible=!1;function l(h){let d=Math.max(0,Math.min(1,h));c.visible=d>0,a.opacity=JR*d,a.size=Jf+($R-Jf)*d}function u(h,d){if(!c.visible)return;let f=i.position.x,p=i.position.y,x=i.position.z,m=o.attributes.position.array;for(let g=0;g<Oo;g++){let b=p+ZR+QR(n[g]-KR*d,$x);m[g*3]=f+t[g],m[g*3+1]=b,m[g*3+2]=x+s[g]}o.attributes.position.needsUpdate=!0}return{object:c,setIntensity:l,update:u}}function jx(){let i=null,e=null,t=!1,n=!1,s=null,r=0;function o(u){if(t){i&&i.state==="suspended"&&i.resume();return}if(t=!0,u)i=u;else{let h=window.AudioContext||window.webkitAudioContext;if(!h)return;i=new h}e=i.createGain(),e.gain.value=.16,e.connect(i.destination),t2(i,e),n2(i,e),s=i2(i,e),s.gain.value=r}function a(u){if(n=!!u,!i||!e)return;let h=(n?.5:1)*.16,d=i.currentTime;e.gain.cancelScheduledValues(d),e.gain.setValueAtTime(e.gain.value,d),e.gain.linearRampToValueAtTime(h,d+.6)}function c(){!i||!e||s2(i,e)}function l(u){let h=Math.max(0,Math.min(1,u))*.5;if(r=h,!i||!s)return;let d=i.currentTime;s.gain.cancelScheduledValues(d),s.gain.setValueAtTime(s.gain.value,d),s.gain.linearRampToValueAtTime(h,d+.8)}return{start:o,setDucked:a,triggerCrackle:c,setRain:l,get context(){return i}}}function t2(i,e){let t=i.createGain();t.gain.value=.55;let n=i.createBiquadFilter();n.type="lowpass",n.frequency.value=220,n.Q.value=.7,t.connect(n).connect(e);let s=[55,55.6];for(let r of s){let o=i.createOscillator();o.type="sawtooth",o.frequency.value=r,o.connect(t),o.start()}}function n2(i,e){let t=i.createBufferSource();t.buffer=jf(i,4),t.loop=!0;let n=i.createBiquadFilter();n.type="bandpass",n.frequency.value=500,n.Q.value=.6;let s=i.createGain();s.gain.value=.18,t.connect(n).connect(s).connect(e),t.start();let r=i.createOscillator();r.type="sine",r.frequency.value=.07;let o=i.createGain();o.gain.value=.12,r.connect(o).connect(s.gain),r.start()}function i2(i,e){let t=i.createBufferSource();t.buffer=jf(i,4),t.loop=!0;let n=i.createBiquadFilter();n.type="bandpass",n.frequency.value=2200,n.Q.value=.5;let s=i.createGain();s.gain.value=0,t.connect(n).connect(s).connect(e),t.start();let r=i.createOscillator();r.type="sine",r.frequency.value=.15;let o=i.createGain();return o.gain.value=.06,r.connect(o).connect(s.gain),r.start(),s}function s2(i,e){let n=i.createBufferSource();n.buffer=jf(i,.18);let s=i.createBiquadFilter();s.type="highpass",s.frequency.value=1800;let r=i.createGain(),o=i.currentTime;r.gain.setValueAtTime(.9,o),r.gain.exponentialRampToValueAtTime(.001,o+.18),n.connect(s).connect(r).connect(e),n.start(o),n.stop(o+.18+.02)}function jf(i,e){let t=Math.max(1,Math.floor(i.sampleRate*e)),n=i.createBuffer(1,t,i.sampleRate),s=n.getChannelData(0);for(let r=0;r<t;r++)s[r]=Math.random()*2-1;return n}var Qx="mcgrot-torch-on";function e_(){if(!document.documentElement.classList.contains("touch"))return;let i=document.getElementById("hud-hint"),e=document.getElementById("title-hint"),t=document.getElementById("title-enter");i&&(i.textContent="drag \u2014 look"),e&&(e.textContent="drag to look \u2014 walk up to a resident, tap them"),t&&(t.textContent="TAP TO ENTER")}function r2(i){let e=document.getElementById("torch-toggle");if(!i)return;let t=localStorage.getItem(Qx),n=t===null?!0:t==="true";function s(r){n=!!r,i.setToggle(n),e&&e.classList.toggle("active",n),localStorage.setItem(Qx,String(n))}i.setToggle(n),e&&e.classList.toggle("active",n),e&&e.addEventListener("click",()=>s(!n)),window.addEventListener("keydown",r=>{r.code!=="KeyT"||Us(r)||s(!n)})}function t_({controls:i,torch:e,onEnter:t}){let n=document.getElementById("title-card"),s=document.getElementById("touch-forward");e_(),window.addEventListener("mcgrot:touchmodechange",e_),r2(e);function r(){!n||n.classList.contains("hidden")||(n.classList.add("hidden"),i.setEnabled(!0),t&&t())}if(n&&(n.addEventListener("click",r),n.addEventListener("touchend",o=>{o.preventDefault(),r()},{passive:!1})),s){let o=c=>{s.classList.toggle("active",c),i.setForward(c)};s.addEventListener("pointerdown",c=>{c.preventDefault();try{s.setPointerCapture?.(c.pointerId)}catch{}o(!0)});let a=()=>o(!1);s.addEventListener("pointerup",a),s.addEventListener("pointercancel",a),s.addEventListener("pointerleave",a)}return{enter:r}}var ep="p=",o2=.4,a2=.25,c2=1,i_=1e5;function r_(i){return(i%360+360)%360}function tp(i){return r_(i*180/Math.PI)}function l2(i){return i*Math.PI/180}function Qf({x:i,z:e,yaw:t}){let n=Math.round(tp(t))%360;return`#${ep}${i.toFixed(1)},${e.toFixed(1)},${n}`}function u2(i){if(typeof i!="string")return null;let e=i.replace(/^#/,"");if(!e.startsWith(ep))return null;let t=e.slice(ep.length).split(",");if(t.length!==3)return null;let[n,s,r]=t.map(Number);return![n,s,r].every(o=>Number.isFinite(o))||Math.abs(n)>i_||Math.abs(s)>i_?null:{x:n,z:s,yaw:l2(r_(r))}}function o_(i,e){let t=u2(typeof location>"u"?"":location.hash);if(!t)return null;if(i){let{point:n,distance:s}=i(t.x,t.z);if(n&&s>16){let r=16/s;t.x=n[0]+(t.x-n[0])*r,t.z=n[1]+(t.z-n[1])*r}}if(e){let[n,s]=e.resolveFree(t.x,t.z);t.x=n,t.z=s}return t}function a_({camera:i,isEnabled:e}){let t=0,n=null,s=null,r=null,o=0;function a(){return{x:i.position.x,z:i.position.z,yaw:i.rotation.y}}function c(){return typeof location>"u"?Qf(a()):`${location.origin}${location.pathname}${location.search}${Qf(a())}`}function l(){let h=a(),d=Math.round(tp(h.yaw))%360;n=h.x,s=h.z,r=d,o++;try{history.replaceState(null,"",Qf(h))}catch{}}function u(h){if(e&&!e()||(t+=h,t<o2))return;t=0;let d=a(),f=Math.round(tp(d.yaw))%360;if(n!==null){let p=Math.hypot(d.x-n,d.z-s),x=Math.abs(f-r);if(x>180&&(x=360-x),p<a2&&x<c2)return}l()}return{update:u,href:c,current:a,writeNow:l,writeCount:()=>o}}var s_=2600;function c_({moments:i}){let e=document.getElementById("link-toggle"),t=document.getElementById("link-toast"),n=document.getElementById("link-field"),s=null,r=null;function o(u,h){if(!t)return;n&&(n.value=h,n.style.display=h?"block":"none");let d=t.querySelector("#link-toast-label");d&&(d.textContent=u),t.style.display="block",s&&clearTimeout(s),s=setTimeout(()=>{t.style.display="none"},h?s_*3:s_)}function a(){let u=i.href();i.writeNow();let h=typeof navigator<"u"&&navigator.clipboard;return!h||!h.writeText?(r="manual",o("copy this link",u),Promise.resolve(r)):h.writeText(u).then(()=>(r="copied",o("link copied",""),r),()=>(r="manual",o("copy this link",u),r))}function c(u){u.code==="KeyL"&&a()}function l(u){u.preventDefault();try{e.setPointerCapture?.(u.pointerId)}catch{}}return window.addEventListener("keydown",c),e&&(e.addEventListener("pointerdown",l),e.addEventListener("pointerup",()=>a())),n&&(n.addEventListener("focus",()=>n.select()),n.addEventListener("click",()=>n.select())),{share:a,lastResult:()=>r,isToastOpen:()=>!!t&&t.style.display==="block"}}var Bo=[{to:90,name:"The Foot of the Walk"},{to:1200,name:"Leith Walk"},{to:1/0,name:"Elm Row"}],h2=4.2,l_=1.1,d2=2;function f2(i){for(let e=0;e<Bo.length;e++)if(i<=Bo[e].to)return e;return Bo.length-1}function p2(i,e,t){let n=0,s=1/0,r=0;for(let o=1;o<i.length;o++){let[a,c]=i[o-1],[l,u]=i[o],h=l-a,d=u-c,f=Math.hypot(h,d),p=h*h+d*d,x=p>0?((e-a)*h+(t-c)*d)/p:0;x=x<0?0:x>1?1:x;let m=a+h*x,g=c+d*x,b=Math.hypot(e-m,t-g);b<s&&(s=b,r=n+f*x),n+=f}return r}function u_({camera:i,streetLine:e,isEnabled:t}){let n=typeof document<"u"?document.getElementById("caption"):null,s=typeof document<"u"?document.getElementById("caption-text"):null,r=null,o=null,a=null,c=0,l=0,u=null;function h(p){u=p,l++,c=h2+l_,n&&(s&&(s.textContent=p),n.style.display="block",n.classList.remove("fading"))}function d(p){let x=i.position.x,m=i.position.z;if(c>0&&(c-=p,n&&c<=l_&&n.classList.add("fading"),c<=0&&(n&&(n.style.display="none",n.classList.remove("fading")),u=null)),t&&!t()){o=x,a=m;return}let g=o===null?0:Math.hypot(x-o,m-a);o=x,a=m;let b=f2(p2(e,x,m));if(r===null){r=b;return}b!==r&&(r=b,!(g>d2||g===0)&&h(Bo[b].name))}function f(){c=0,u=null,r=null,o=null,a=null,n&&(n.style.display="none",n.classList.remove("fading"))}return{update:d,suspend:f,state:()=>({band:r,name:Bo[r===null?0:r].name,current:u,shown:l,timer:c}),bands:Bo.map(p=>p.name)}}var m2=.28,g2=.035,x2=1,_2=24,h_=.5,y2=1.46,kt={label:"fine-litho",pressDay:.72,pressNight:.95,cell:2.6,halftoneDay:.35,halftoneNight:.1,highCut:.6,misreg:.7,sat:.85,shadowTint:[.97,.99,1.03],highTint:[1.04,1.01,.96],stockDay:.35,stockNight:.12,ink:[.06,.05,.05],paper:[.98,.96,.92],artefact:.05},d_=1,zo=i=>Number.isInteger(i)?i.toFixed(1):String(i),Yu=i=>`vec3(${i.map(zo).join(", ")})`,v2=`
const float S_CELL      = ${zo(kt.cell)};
const float S_HIGHCUT   = ${zo(kt.highCut)};
const float S_MISREG    = ${zo(kt.misreg)};
const float S_SAT       = ${zo(kt.sat)};
const vec3  S_SHADOW    = ${Yu(kt.shadowTint)};
const vec3  S_HIGH      = ${Yu(kt.highTint)};
const vec3  S_INK       = ${Yu(kt.ink)};
const vec3  S_PAPER     = ${Yu(kt.paper)};
const float S_ARTEFACT  = ${zo(kt.artefact)};
`,M2=`
attribute vec3 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`,b2=`
precision highp float;

uniform sampler2D tDiffuse;
uniform vec2  uResolution;
uniform float uStrength;   // 0 = provably neutral, 1 = as authored
uniform float uVignette;
uniform float uGrain;
uniform float uGrade;
uniform float uTime;

// E8 style axis. TWO uniforms survive the hardening: uStyle, so the grade can
// be switched off for the opposed-pair gate and for a bit-identical neutral
// frame, and uPress, which is DERIVED from the renderer's live exposure every
// frame and therefore cannot be a constant. Every other axis is compiled in
// from STYLE \u2014 see the note above it.
uniform float uStyle;
uniform float uPress;       // exposure for the plate \u2014 see the note beside it
uniform float uHalftone;    // screen depth \u2014 derived per frame, like uPress
uniform float uStock;       // ink..paper remap depth \u2014 ditto
${v2}

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

  // ---- E8: the printed page. Sits between the grade and the lens, because
  // the ink is a property of the image and the vignette and grain are
  // properties of the thing looking at it.
  //
  // Gated on uStyle * uStrength, not on uStyle alone, and that product is
  // what E8 close changed. Check 26a asserts that strength 0 is BIT-identical
  // to a direct render; before the grade shipped, uStyle was 0 anyway and the
  // question never arose. Now that it ships at 1, a strength-0 frame would
  // have come out printed and 26a would have gone red for a reason that has
  // nothing to do with the invariant it guards. Branching on the product
  // keeps neutral neutral by construction rather than by a mix() with a zero
  // factor, which is the same argument the block was written under.
  float styleAmt = uStyle * uStrength;
  if (styleAmt > 0.0) {
    vec2 texel = 1.0 / uResolution;
    vec2 fromCentre = vUv - 0.5;

    // Ink misregistration: the plates drift apart toward the edges of the
    // sheet and are in register at the centre. Applied as the DIFFERENCE
    // between a shifted and an unshifted tap, so the authored grade above
    // survives underneath it rather than being resampled away.
    vec2 dir = fromCentre / (length(fromCentre) + 0.0001);
    vec2 mis = dir * S_MISREG * smoothstep(0.05, 0.62, length(fromCentre)) * texel;
    vec3 raw = texture2D(tDiffuse, vUv).rgb;
    vec3 shifted = vec3(
      texture2D(tDiffuse, vUv + mis).r,
      raw.g,
      texture2D(tDiffuse, vUv - mis).b);
    vec3 base = c + (shifted - raw);

    float bl = dot(base, vec3(0.299, 0.587, 0.114));

    // Press exposure, and the reason it is not optional. This scene is a dark
    // one \u2014 MEASURED median display luminance 0.139 at noon overcast and 0.055
    // at night rain \u2014 while a printed page is a LIGHT object: mostly paper,
    // with ink where the picture is. Screening the scene's own tonality
    // produced a frame that was ink almost everywhere, because sqrt(1 - 0.139)
    // is a dot that nearly fills its cell and a highlight gate never fires.
    // So the tone is re-exposed for the plate first, exactly as a repro camera
    // did \u2014 uPress is that exposure, and it is a per-preset axis because how
    // far the night should be lifted is a judgement, not a constant.
    float tone = pow(clamp(bl, 0.0, 1.0), uPress);
    vec3 lifted = base * (tone / max(bl, 0.0015));

    // Palette pull, not posterise: compress saturation, then push the shadows
    // and the highlights apart in temperature. The photographs keep their
    // tonality \u2014 hard quantisation is what turns brick to mush.
    vec3 pulled = mix(vec3(tone), lifted, S_SAT)
      * mix(S_SHADOW, S_HIGH, smoothstep(0.1, 0.9, tone));

    // Dot screen at 45 degrees. Analytic, so the dot edge can be
    // fwidth-antialiased \u2014 a hard threshold crawls as the camera moves, which
    // is the single artefact that reads as "filter" rather than "printing".
    vec2 p = vUv * uResolution;
    vec2 rot = vec2(p.x - p.y, p.x + p.y) * 0.70710678 / max(S_CELL, 1.0);
    float dist = length(fract(rot) - 0.5) * 2.0;
    float radius = sqrt(clamp(1.0 - tone, 0.0, 1.0));
    // The AA band is derived, not sampled: the rotation preserves length, so
    // one screen pixel is exactly 2/uCell in dot-distance units. fwidth would read
    // the same number out of the hardware at the cost of a derivative \u2014 and a
    // derivative is a driver-dependent quantity in a project whose goldens are
    // already pinned to one GPU. This is the anti-swim edge with none of that.
    float aa = 1.5 / max(S_CELL, 1.0);
    float dotMask = 1.0 - smoothstep(radius - aa, radius + aa, dist);

    // Shadow/mid gating. This is the part that makes it read as printing:
    // ungated, every highlight gets dots too and the whole frame turns into
    // an effect. Highlights stay clean paper.
    float gate = 1.0 - smoothstep(S_HIGHCUT - 0.18, S_HIGHCUT, tone);
    vec3 twoTone = mix(vec3(1.0), pulled * 0.35, dotMask);
    vec3 printed = mix(pulled, twoTone, gate * uHalftone);

    // The stock. Nothing on a printed page is pure black or pure white, so
    // the whole range is remapped into ink..paper \u2014 per channel, which keeps
    // hue rather than collapsing to a duotone.
    vec3 styled = mix(printed, mix(S_INK, S_PAPER, clamp(printed, 0.0, 1.0)), uStock);

    // Press artefacts: sparse specks on a slow reseed. Low-rate is the whole
    // point \u2014 resampled every frame it reads as video noise, not as a press.
    float sp = hash21(floor(vUv * uResolution / 3.0) + vec2(floor(uTime * 6.0) * 37.0, 0.0));
    styled -= smoothstep(0.985, 1.0, sp) * S_ARTEFACT;

    c = mix(c, styled, styleAmt);
  }

  // Vignette.
  float d = length(vUv - 0.5);
  c *= mix(1.0, 1.0 - smoothstep(0.35, 0.78, d), uVignette * uStrength);

  // Grain, weighted towards the midtones the way film is \u2014 near-black and
  // blown-out areas stay clean, so the murk gets the texture and the sky
  // does not crawl.
  float n = hash21(vUv * uResolution + vec2(floor(uTime * ${_2.toFixed(1)}), 0.0));
  float midtone = 1.0 - abs(lum * 2.0 - 1.0);
  c += (n - 0.5) * uGrain * midtone * uStrength;

  gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
}
`;function f_(i){let e=i.getDrawingBufferSize(new Te),t=new po(e.x,e.y),n={tDiffuse:{value:t},uResolution:{value:new Te(e.x,e.y)},uStrength:{value:1},uVignette:{value:m2},uGrain:{value:g2},uGrade:{value:x2},uTime:{value:0},uStyle:{value:d_},uPress:{value:kt.pressDay},uHalftone:{value:kt.halftoneDay},uStock:{value:kt.stockDay}};function s(x){return Math.min(1,Math.max(0,(x-h_)/(y2-h_)))}function r(x){return kt.pressNight+(kt.pressDay-kt.pressNight)*s(x)}function o(x){return kt.halftoneNight+(kt.halftoneDay-kt.halftoneNight)*s(x)}function a(x){return kt.stockNight+(kt.stockDay-kt.stockNight)*s(x)}let c=new _o({name:"McGrotPost",uniforms:n,vertexShader:M2,fragmentShader:b2,depthTest:!1,depthWrite:!1}),l=new pt;l.setAttribute("position",new wt(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),l.setAttribute("uv",new wt(new Float32Array([0,0,2,0,0,2]),2));let u=new Pe(l,c);u.frustumCulled=!1;let h=new es;h.add(u);let d=new mr,f=!0;function p(){let x=i.getDrawingBufferSize(new Te);x.x===t.image.width&&x.y===t.image.height||(t.dispose(),t=new po(x.x,x.y),n.tDiffuse.value=t,n.uResolution.value.set(x.x,x.y))}return{setTime(x){n.uTime.value=x},resize:p,setEnabled(x){f=!!x},isEnabled(){return f},setStrength(x){n.uStrength.value=x},getStrength(){return n.uStrength.value},styleName:kt.label,styleShipped:d_,setStyleStrength(x){n.uStyle.value=x},getStyleStrength(){return n.uStyle.value},stylePress(x){return x===void 0?{day:kt.pressDay,night:kt.pressNight,exposure:i.toneMappingExposure,press:n.uPress.value,halftone:n.uHalftone.value,stock:n.uStock.value}:{press:r(x),halftone:o(x),stock:a(x)}},render(x,m){i.render(x,m),f&&(n.uStyle.value>0&&(n.uPress.value=r(i.toneMappingExposure),n.uHalftone.value=o(i.toneMappingExposure),n.uStock.value=a(i.toneMappingExposure)),i.copyFramebufferToTexture(t),i.render(h,d))}}}var p_="mcgrot.journal.v1";function S2(){try{let i=localStorage.getItem(p_);if(!i)return[];let e=JSON.parse(i);return Array.isArray(e&&e.entries)?e.entries:[]}catch{return[]}}function E2(i){try{localStorage.setItem(p_,JSON.stringify({entries:i}))}catch{}}function np(i){if(!i||!Array.isArray(i))return 0;let e=0;for(let t of i)t.comic&&t.comic.audio&&e++;return e}function m_({assets:i,npcs:e,litter:t,canOpen:n,anchorsEnabled:s}){let r=S2(),o=new Set(r.map(F=>`${F.kind}:${F.id}`)),a=np(e),c=t&&Array.isArray(t.items)?t.items.length:0,l=Z0(Ja),u=new Map((i&&i.catalog&&i.catalog.comics||[]).map(F=>[F.id,F])),h=document.getElementById("journal-panel"),d=document.getElementById("journal-toggle"),f=document.getElementById("journal-close"),p=document.getElementById("journal-counts"),x=document.getElementById("journal-list"),m=!1;function g(F,z){return o.has(`${z}:${F}`)}function b(F,z){if(!F||z!=="heard"&&z!=="found"&&z!=="anchor")return!1;let D=`${z}:${F}`;return o.has(D)?!1:(o.add(D),r.push({id:F,kind:z}),E2(r),S(),!0)}function v(){let F=0,z=0,D=0;for(let B of r)B.kind==="heard"?F++:B.kind==="found"?z++:B.kind==="anchor"&&D++;return{heard:F,found:z,denominator:a,foundTotal:c,anchorsFound:D,anchorsTotal:l}}function _(){return r.filter(F=>F.kind!=="anchor").slice().reverse()}function S(){if(p){let{heard:z,found:D,anchorsFound:B}=v();p.textContent=s?`${z} of ${a} heard \u2014 more being unearthed  \xB7  ${D}${c?` of ${c}`:""} found  \xB7  ${B} of ${l} anchors`:`${z} of ${a} heard \u2014 more being unearthed  \xB7  ${D}${c?` of ${c}`:""} found`}if(!x)return;x.textContent="";let F=document.createDocumentFragment();for(let z of _()){let D=u.get(z.id),B=D&&D.title||z.id,H=D&&D.npc&&D.npc.name,K=document.createElement("div");K.className="journal-entry";let se=document.createElement("span");se.className="journal-entry-kind",se.textContent=z.kind==="heard"?"HEARD":"FOUND";let de=document.createElement("span");de.className="journal-entry-text",de.textContent=H?`${B} \u2014 ${H}`:B,K.appendChild(se),K.appendChild(de),F.appendChild(K)}x.appendChild(F)}function y(F){m=!!F,h&&(h.style.display=m?"flex":"none")}function T(){!m&&n&&!n()||y(!m)}function M(){return m}function w(F){if(F.code==="Escape"){m&&y(!1);return}Us(F)||F.code==="KeyJ"&&T()}function C(F){F.preventDefault();try{d.setPointerCapture?.(F.pointerId)}catch{}}function R(){T()}window.addEventListener("keydown",w),d&&(d.addEventListener("pointerdown",C),d.addEventListener("pointerup",R)),f&&f.addEventListener("click",()=>y(!1));function P(){window.removeEventListener("keydown",w),d&&(d.removeEventListener("pointerdown",C),d.removeEventListener("pointerup",R))}return S(),{has:g,credit:b,counts:v,list:_,isOpen:M,setOpen:y,toggle:T,dispose:P}}var Gs=1.7,ip=150,ii=1/60,T2=5,g_=12,x_=40,w2=4e3,__=[{id:"north-150-close",chainage:150,side:"east",distance:"close"},{id:"north-250-far",chainage:250,side:"west",distance:"far"},{id:"elm-row-hero",chainage:1300,side:"west",distance:"far"},{id:"mid-550-close",chainage:550,side:"east",distance:"close"},{id:"mid-805-far",chainage:805,side:"west",distance:"far"},{id:"fascia-close",chainage:300,side:"east",distance:"close"},{id:"foot-1500-far",chainage:1500,side:"west",distance:"far"},{id:"skyline",custom:!0,camera:{x:-293.81,y:15,z:633.95},lookAt:{x:-317.4,y:6,z:683.62}}],y_=[{id:"lamp-hero-night",custom:!0,camera:{x:-284.62,y:9.7,z:623.92},lookAt:{x:-303.93,y:12.99,z:664.57}}];function v_(i,e){for(let t=0;t<i.length;t++)e^=i[t],e=Math.imul(e,16777619)>>>0;return e}function uc(i,e){let t=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);return v_(t,e)}function hc(i,e){for(let t=0;t<i.length;t++)e=v_([i.charCodeAt(t)&255],e);return e}function A2({scene:i,world:e,npcs:t}){let n=2166136261,s=e.group.getObjectByName("buildings");s&&s.geometry&&(n=hc("buildings",n),n=uc(s.geometry.attributes.position.array,n));let r=[];i.traverse(o=>{o.isInstancedMesh&&r.push(o)}),r.sort((o,a)=>(o.name||"").localeCompare(a.name||""));for(let o of r)n=hc(`inst:${o.name||"unnamed"}`,n),n=uc(o.instanceMatrix.array,n);if(t&&Array.isArray(t.npcs)&&t.npcs.length){let o=new Float32Array(t.npcs.length*3);t.npcs.forEach((a,c)=>{let l=a.group.position;o[c*3]=l.x,o[c*3+1]=l.y,o[c*3+2]=l.z}),n=hc("npcs",n),n=uc(o,n)}return(n>>>0).toString(16).padStart(8,"0")}function R2({scene:i,leithers:e}){let t=2166136261;if(e&&Array.isArray(e.walkers)&&e.walkers.length){let n=new Float32Array(e.walkers.length*3);e.walkers.forEach((s,r)=>{n[r*3]=s.s,n[r*3+1]=s.side,n[r*3+2]=s.dir}),t=hc("leithers-realtime",t),t=uc(n,t)}for(let n of["birds","vermin"]){let s=i.getObjectByName(n);if(!s)continue;let r=0;s.traverse(o=>{o.isInstancedMesh&&(t=hc(`${n}-realtime-${r++}`,t),t=uc(o.instanceMatrix.array,t))})}return(t>>>0).toString(16).padStart(8,"0")}function C2(i,e){return new Promise(t=>{let s=(Date.now?Date.now():0)+e;function r(){if(!(i&&i.pages||[]).some(c=>c&&c.loaded&&c.mesh&&!(c.mesh.material.map&&c.mesh.material.map.image&&c.mesh.material.map.image.complete))||Date.now()>s){t();return}setTimeout(r,20)}r()})}function M_(i){let{camera:e,world:t,npcs:n,leithers:s,litter:r,shopfronts:o,controls:a,proximityAudio:c,interact:l,renderer:u,scene:h,sky:d,atmosphere:f,torch:p,stepFrame:x,updateFrame:m,updaters:g,setAutoAnimate:b,DPR_CAP:v,ambience:_,post:S,renderNow:y,setPostProcessing:T,journal:M,countVendorsWithAudio:w,vendorList:C,anchorsEnabled:R,anchorSet:P,computeVendorLayout:F,moments:z,shareUi:D,lamps:B,legs:H,ending:K,characters:se,captions:de,gullet:V,interior:j,enterInterior:he,exitInterior:Se,getActiveScene:Ee}=i,$=[],Q=console.error.bind(console);console.error=(...ue)=>{$.push(ue.map(A=>A&&A.message||String(A)).join(" ")),Q(...ue)},window.addEventListener("error",ue=>{$.push(ue.message||String(ue.error||ue))}),window.addEventListener("unhandledrejection",ue=>{$.push("unhandledrejection: "+(ue.reason&&ue.reason.message||ue.reason))});async function J(ue,A,E,G,L={}){let O=L.eyeY!=null?L.eyeY:t.groundHeight?t.groundHeight(ue,A)+Gs:Gs,X=L.lookY!=null?L.lookY:t.groundHeight?t.groundHeight(E,G)+Gs:Gs;e.position.set(ue,O,A),e.lookAt(E,X,G);for(let W=0;W<ip;W++)try{m(ii,W*ii)}catch{}e.position.set(ue,O,A),e.lookAt(E,X,G),x(ii,ip*ii),await C2(o,w2);for(let W=0;W<T2;W++)await new Promise(Y=>setTimeout(Y,0)),e.position.set(ue,O,A),e.lookAt(E,X,G),x(ii,(ip+1+W)*ii)}async function ge(ue,A,E){let{point:G,tangent:L}=Pd(t.streetLine,ue),O=-L[1],X=L[0],W=A==="east"?1:-1,Y=E==="close"?W:-W,Z=G[0]+O*g_*Y,be=G[1]+X*g_*Y,Ne=Z+O*W*x_,Ie=be+X*W*x_;await J(Z,be,Ne,Ie);let Ce=t.groundHeight?t.groundHeight(Z,be)+Gs:Gs;return{chainage:ue,side:A,distance:E,position:{x:Z,y:Ce,z:be}}}async function xe(ue,A=4){let{point:E,tangent:G}=Pd(t.streetLine,ue),L=E[0],O=E[1],X=L+G[0]*A,W=O+G[1]*A,Y=t.groundHeight?t.groundHeight(L,O)+Gs:Gs,Z=t.groundHeight?t.groundHeight(X,W)+.3:.3;return await J(L,O,X,W,{lookY:Z}),{chainage:ue,position:{x:L,y:Y,z:O}}}async function ye(ue){let A=__.find(E=>E.id===ue)||y_.find(E=>E.id===ue);if(!A)throw new Error(`[debug] unknown bookmark: ${ue}`);return A.custom?(await J(A.camera.x,A.camera.z,A.lookAt.x,A.lookAt.z,{eyeY:A.camera.y,lookY:A.lookAt.y}),A):(await ge(A.chainage,A.side,A.distance),A)}function ze(ue,A){e.lookAt(ue,e.position.y,A)}function ce(ue){f.setTime(ue)}function ne(ue){f.setWeather(ue)}function re(ue){f.setWeatherSchedule(ue)}function oe(ue){f.setRate(ue)}function fe(ue){document.documentElement.classList.toggle("touch",!!ue),window.dispatchEvent(new CustomEvent("mcgrot:touchmodechange"))}function me(ue){u.setPixelRatio(ue)}function Le(ue=60){let A=[];for(let L=0;L<ue;L++){let O=performance.now();x(ii,L*ii),A.push(performance.now()-O)}A.sort((L,O)=>L-O);let E=A.reduce((L,O)=>L+O,0)/A.length,G=A[Math.min(A.length-1,Math.floor(A.length*.95))];return{meanMs:E,p95Ms:G,pixelRatio:u.getPixelRatio(),frames:ue}}function Ae(ue,A=0){if(!(ue<=0)){for(let E=0;E<ue-1;E++)try{m(ii,A+E*ii)}catch{}try{x(ii,A+(ue-1)*ii)}catch{}}}function ke(){x(ii,0);let ue=u.info.render,A=f.state();return{drawCalls:ue.calls,triangles:ue.triangles,geomHash:A2({scene:h,world:t,npcs:n}),realtimeHash:R2({scene:h,leithers:s}),updaterCount:g.length,updaterNames:g.map(E=>E.name),consoleErrors:$.slice(),time:A.hours,rate:A.rate,weather:A.weather,weatherTransition:A.weatherTransition,exposure:A.exposure,fogDensity:A.fogDensity,rain:A.rain,wetness:A.wetness,skyFogLinked:!!(d&&t.fog&&d.uniforms.uFog.value===t.fog.color)}}function He(ue){l&&l.setReadAlong(ue)}function N(ue){window.__mcgrotForceDaySeed=ue==null?void 0:ue>>>0}function ve(ue){return F(C,t.streetLine,!!ue)}return{camera:e,world:t,npcs:n,leithers:s,litter:r,shopfronts:o,controls:a,proximityAudio:c,interact:l,renderer:u,scene:h,journal:M,countVendorsWithAudio:w,captions:de,gullet:V,interior:j,enterInterior:he,exitInterior:Se,getActiveScene:Ee,stepFrame:x,stepFrames:Ae,goto:ge,gotoBookmark:ye,torchGroundPose:xe,face:ze,setTime:ce,setWeather:ne,setWeatherSchedule:re,setRate:oe,setReadAlong:He,setDaySeed:N,anchorsEnabled:R,anchorSet:P,characters:se,anchorLayout:ve,moments:z,shareUi:D,lamps:B,legs:H,ending:K,setTouchMode:fe,setPixelRatio:me,measureFrameTiming:Le,torch:p,DPR_CAP:v,ambience:_,post:S,renderNow:y,setPostProcessing:T,setPostStrength:ue=>S.setStrength(ue),setStyleStrength:ue=>S.setStyleStrength(ue),getStyleStrength:()=>S.getStyleStrength(),styleName:S.styleName,styleShipped:S.styleShipped,stylePress:ue=>S.stylePress(ue),invariants:ke,atmosphereState:()=>f.state(),atmosphereNudge:(ue,A,E)=>f.nudge(ue,A,E),atmosphereIsSuspended:()=>f.isSuspended(),bookmarks:__,nightBookmarks:y_,pauseAuto:()=>b(!1),resumeAuto:()=>b(!0)}}var sp=2;async function I2(){let i=document.getElementById("scene"),e=["localhost","127.0.0.1"].includes(location.hostname),t=new yu({canvas:i,antialias:!0,preserveDrawingBuffer:e});t.setPixelRatio(Math.min(window.devicePixelRatio||1,sp)),t.setSize(window.innerWidth,window.innerHeight),t.toneMapping=Da,t.toneMappingExposure=1.46,t.info.autoReset=!1;let n=new es,s=new on(70,window.innerWidth/window.innerHeight,.1,1e3);n.add(s);let r=f_(t),o=await x0(),a=V0(o.leith);n.add(a.group),n.fog=a.fog;let c=ux(a.fog.color,a.streetLine);s.add(c.mesh),vx(a,n);let l=W0(s),u=_x(o,a,n),h=Jx(s);n.add(h.object);let d=jx(),f=mx({scene:n,renderer:t,world:a,sky:c,torch:l,windows:u,rain:h,ambience:d}),p=a.streetLine[0]||[0,0],x=a.streetLine[1]||[p[0],p[1]+1],m={x:p[0],z:p[1],yaw:Math.atan2(-(x[0]-p[0]),-(x[1]-p[1]))},g=o_(a.nearestStreetPoint,a.collision)||m,b=Y0(s,i,{nearestStreetPoint:a.nearestStreetPoint,spawn:g,groundHeight:a.groundHeight,collision:a.collision});b.setEnabled(!1);let v=Q0(o,a,n,s),_=Xx(o,a,n,v.npcs),S=Zx(o,a,n),y=ug(o,a,n);A0(a,n),bx(a,n);let T=Ax(a,o.leith,n),M=Dx(a,n);Fx(a,o.leith,n),sx(o,a,n),lx(o,a,n),Hx(o,a,n);let w=Pg(o,a,n,v);_.useArchetypes(w);let C=Mg(a,n);C.onArcFlash=()=>d.triggerCrackle();let R=zg(o,a,n),P=Yg(),F=Kg({scene:n,camera:s,poles:C.poles});f.setLamps(F);let z=Jg({camera:s,world:a,atmosphere:f,seed:Cu()}),D=jg({camera:s,world:a,legs:z,atmosphere:f,ambience:d,controls:b,renderer:t});window.addEventListener("keydown",N=>{N.code!=="Enter"||Us(N)||(D.state().phase==="ended"?D.resume():D.begin())});let B=n,H=null,K=null;function se(){if(!P.enabled)return!1;let N=f.acquireSuspend("interior");return N?(K=N,H={x:s.position.x,y:s.position.y,z:s.position.z,rx:s.rotation.x,ry:s.rotation.y,rz:s.rotation.z},P.enter(),P.scene.add(s),c.mesh&&(c.mesh.visible=!1),l.light&&(l.light.visible=!1),s.position.set(P.spawn.x,P.spawn.y,P.spawn.z),b.setYaw(P.spawn.yaw),s.rotation.set(0,P.spawn.yaw,0),b.setRoom(P),t.toneMappingExposure=Xg,B=P.scene,Q.suspend(),ye.suspend(),!0):!1}function de(){return!P.enabled||!P.isInside()?!1:(P.exit(),n.add(s),c.mesh&&(c.mesh.visible=!0),l.light&&(l.light.visible=!0),H&&(s.position.set(H.x,H.y,H.z),s.rotation.set(H.rx,H.ry,H.rz),b.setYaw(H.ry),H=null),b.setRoom(null),B=n,f.releaseSuspend(K),K=null,!0)}let V=new Set(["litter","shopfronts","interact","proximityAudio","legs","ending","moments","captions"]),j=!1,he=!1,Se=()=>d.setDucked(j||he),Ee=R.reader?[...v.npcs,R.reader]:v.npcs,$=fg({camera:s,npcs:Ee,assets:o,onActiveChange:N=>{he=N>0,Se()}}),Q,J=m_({assets:o,npcs:v.npcs,litter:S,canOpen:()=>!Q.isOpen(),anchorsEnabled:v.anchorsEnabled});Q=mg({assets:o,npcs:Ee,camera:s,controls:b,proximityAudio:$,onReadingChange:N=>{j=N,Se()},litter:S,leithers:_,journal:J});let ge=!1,xe=a_({camera:s,isEnabled:()=>ge}),ye=u_({camera:s,streetLine:a.streetLine,isEnabled:()=>ge}),ze=c_({moments:xe}),ce=document.getElementById("hud-day");ce&&(ce.textContent=hg(Er(),Iu(),f.state().weather)),t_({controls:b,torch:l,onEnter:()=>{let N=null;try{if(window.__mcgrotForceAudioContextError&&["localhost","127.0.0.1"].includes(location.hostname))throw new Error("[debug] forced AudioContext setup failure");let A=window.AudioContext||window.webkitAudioContext;if(N=A?new A:null,N){gr.setContext(N);let E=N.createBufferSource();E.buffer=N.createBuffer(1,1,N.sampleRate),E.connect(N.destination),E.start(0)}}catch(A){console.warn("[title] shared AudioContext setup failed, falling back to per-subsystem contexts:",A),N=null}d.start(N),$.resume(),ge=!0;let[ve,ue]=a.collision.resolveFree(s.position.x,s.position.z);s.position.x=ve,s.position.z=ue}}),window.addEventListener("resize",ne);function ne(){s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),t.setPixelRatio(Math.min(window.devicePixelRatio||1,sp)),t.setSize(window.innerWidth,window.innerHeight),r.resize()}let re=[{name:"controls",update:N=>b.update(N)},{name:"npcs",update:(N,ve)=>v.update(N,ve)},{name:"leithers",update:(N,ve)=>_.update(N,ve)},{name:"litter",update:()=>S.update(s.position)},{name:"shopfronts",update:()=>y.update(s.position)},{name:"sky",update:(N,ve)=>c.update(ve)},{name:"atmosphere",update:(N,ve)=>f.update(N,ve)},{name:"rain",update:(N,ve)=>h.update(N,ve)},{name:"birds",update:(N,ve)=>T.update(N,ve)},{name:"vermin",update:(N,ve)=>M.update(N,ve)},{name:"scenery",update:(N,ve)=>C.update(N,ve)},{name:"lamps",update:()=>F.update()},{name:"legs",update:()=>z.update()},{name:"ending",update:N=>D.update(N)},{name:"interact",update:N=>Q.update(N)},{name:"proximityAudio",update:(N,ve)=>$.update(N,ve)},{name:"torch",update:(N,ve)=>l.update(ve)},{name:"post",update:(N,ve)=>r.setTime(ve)},{name:"moments",update:N=>xe.update(N)},{name:"captions",update:N=>ye.update(N)}];function oe(N,ve){let ue=P.isInside();for(let A of re)ue&&V.has(A.name)||A.update(N,ve)}function fe(){t.info.reset(),r.render(B,s)}function me(N,ve){oe(N,ve),fe()}function Le(N){r.setEnabled(N)}let Ae=performance.now(),ke=!0;function He(){if(!ke)return;requestAnimationFrame(He);let N=performance.now(),ve=Math.min((N-Ae)/1e3,.1);Ae=N,me(ve,N/1e3)}e&&window.__mcgrotFreezeAtBoot||He(),["localhost","127.0.0.1"].includes(location.hostname)&&(window.__mcgrotDebug=M_({camera:s,world:a,npcs:v,leithers:_,litter:S,shopfronts:y,controls:b,proximityAudio:$,interact:Q,renderer:t,scene:n,sky:c,atmosphere:f,torch:l,DPR_CAP:sp,ambience:d,post:r,journal:J,countVendorsWithAudio:np,vendorList:v.list,anchorsEnabled:v.anchorsEnabled,anchorSet:Ja,computeVendorLayout:kd,moments:xe,shareUi:ze,lamps:F,legs:z,ending:D,characters:w,captions:ye,gullet:R,interior:P,enterInterior:se,exitInterior:de,getActiveScene:()=>B,stepFrame:me,renderNow:fe,setPostProcessing:Le,updateFrame:oe,updaters:re,setAutoAnimate(N){ke=N,b.setYFollow(N),N&&(Ae=performance.now(),requestAnimationFrame(He))}}))}I2().catch(i=>{console.error("McGrot Walk failed to start:",i)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
