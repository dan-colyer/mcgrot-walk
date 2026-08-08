(()=>{var ap=0,oh=1,cp=2;var ia=1,lp=2,Xr=3,Mn=0,mn=1,Ft=2,Ei=0,Ds=1,qi=2,ah=3,ch=4,up=5;var ss=100,hp=101,dp=102,fp=103,pp=104,mp=200,gp=201,xp=202,_p=203,uc=204,hc=205,yp=206,vp=207,Mp=208,bp=209,Sp=210,Ep=211,Tp=212,wp=213,Ap=214,dc=0,fc=1,pc=2,Fs=3,mc=4,gc=5,xc=6,_c=7,Xc=0,Rp=1,Cp=2,hi=0,lh=1,uh=2,hh=3,sa=4,dh=5,fh=6,ph=7,Vu="attached",Ip="detached",mh=300,fs=301,$s=302,qc=303,Yc=304,ra=306,$n=1e3,Zn=1001,Pr=1002,Xt=1003,Zc=1004;var Js=1005;var qt=1006,qr=1007;var di=1008;var Dn=1009,gh=1010,xh=1011,Yr=1012,Kc=1013,fi=1014,Gn=1015,Ti=1016,$c=1017,Jc=1018,Zr=1020,_h=35902,yh=35899,vh=1021,Mh=1022,Vn=1023,yi=1026,ps=1027,jc=1028,Qc=1029,ms=1030,el=1031;var tl=1033,oa=33776,aa=33777,ca=33778,la=33779,nl=35840,il=35841,sl=35842,rl=35843,ol=36196,al=37492,cl=37496,ll=37488,ul=37489,ua=37490,hl=37491,dl=37808,fl=37809,pl=37810,ml=37811,gl=37812,xl=37813,_l=37814,yl=37815,vl=37816,Ml=37817,bl=37818,Sl=37819,El=37820,Tl=37821,wl=36492,Al=36494,Rl=36495,Cl=36283,Il=36284,ha=36285,Pl=36286;var Us=2300,Os=2301,lc=2302,Wu=2303,Xu=2400,qu=2401,Yu=2402,Pp=2500;var bh=0,da=1,Kr=2,Lp=3200;var fa=0,Np=1,Yi="",tt="srgb",An="srgb-linear",wo="linear",vt="srgb";var Ps=7680;var Zu=519,Dp=512,Fp=513,Up=514,Ll=515,Op=516,Bp=517,Nl=518,zp=519,yc=35044;var Sh="300 es",oi=2e3,Lr=2001;function xx(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _x(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kp(){let i=Nr("canvas");return i.style.display="block",i}var gf={},Dr=null;function Ao(...i){let e="THREE."+i.shift();Dr?Dr("log",e,...i):console.log(e,...i)}function Hp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function We(...i){i=Hp(i);let e="THREE."+i.shift();if(Dr)Dr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Qe(...i){i=Hp(i);let e="THREE."+i.shift();if(Dr)Dr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ns(...i){let e=i.join(" ");e in gf||(gf[e]=!0,We(...i))}function Gp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Vp={[dc]:fc,[pc]:xc,[mc]:_c,[Fs]:gc,[fc]:dc,[xc]:pc,[_c]:mc,[gc]:Fs},vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xf=1234567,bo=Math.PI/180,Bs=180/Math.PI;function Kn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function dt(i,e,t){return Math.max(e,Math.min(t,i))}function Eh(i,e){return(i%e+e)%e}function yx(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function vx(i,e,t){return i!==e?(t-i)/(e-i):0}function So(i,e,t){return(1-t)*i+t*e}function Mx(i,e,t,n){return So(i,e,1-Math.exp(-t*n))}function bx(i,e=1){return e-Math.abs(Eh(i,e*2)-e)}function Sx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ex(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Tx(i,e){return i+Math.floor(Math.random()*(e-i+1))}function wx(i,e){return i+Math.random()*(e-i)}function Ax(i){return i*(.5-Math.random())}function Rx(i){i!==void 0&&(xf=i);let e=xf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cx(i){return i*bo}function Ix(i){return i*Bs}function Px(i){return(i&i-1)===0&&i!==0}function Lx(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Nx(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Dx(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*p,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*p,a*l);break;case"ZYZ":i.set(c*p,c*f,a*u,a*l);break;default:We("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ri(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Jn={DEG2RAD:bo,RAD2DEG:Bs,generateUUID:Kn,clamp:dt,euclideanModulo:Eh,mapLinear:yx,inverseLerp:vx,lerp:So,damp:Mx,pingpong:bx,smoothstep:Sx,smootherstep:Ex,randInt:Tx,randFloat:wx,randFloatSpread:Ax,seededRandom:Rx,degToRad:Cx,radToDeg:Ix,isPowerOfTwo:Px,ceilPowerOfTwo:Lx,floorPowerOfTwo:Nx,setQuaternionFromProperEuler:Dx,normalize:bt,denormalize:ri},Ee=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(h!==_||c!==d||l!==f||u!==p){let m=c*d+l*f+u*p+h*_;m<0&&(d=-d,f=-f,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let b=Math.acos(m),M=Math.sin(b);g=Math.sin(g*b)/M,a=Math.sin(a*b)/M,c=c*g+d*a,l=l*g+f*a,u=u*g+p*a,h=h*g+_*a}else{c=c*g+d*a,l=l*g+f*a,u=u*g+p*a,h=h*g+_*a;let b=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=b,l*=b,u*=b,h*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+u*h+c*f-l*d,e[t+1]=c*p+u*d+l*h-a*f,e[t+2]=l*p+u*f+a*d-c*h,e[t+3]=u*p-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),f=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"YZX":this._x=d*u*h+l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h-d*f*p;break;case"XZY":this._x=d*u*h-l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h+d*f*p;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_f.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_f.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return du.copy(this).projectOnVector(e),this.sub(du)}reflect(e){return this.sub(du.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},du=new U,_f=new Pt,st=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],_=s[0],m=s[3],g=s[6],b=s[1],M=s[4],x=s[7],S=s[2],E=s[5],v=s[8];return r[0]=o*_+a*b+c*S,r[3]=o*m+a*M+c*E,r[6]=o*g+a*x+c*v,r[1]=l*_+u*b+h*S,r[4]=l*m+u*M+h*E,r[7]=l*g+u*x+h*v,r[2]=d*_+f*b+p*S,r[5]=d*m+f*M+p*E,r[8]=d*g+f*x+p*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,p=t*h+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=h*_,e[1]=(s*l-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fu.makeScale(e,t)),this}rotate(e){return Ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fu.makeRotation(-e)),this}translate(e,t){return Ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},fu=new st,yf=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vf=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fx(){let i={enabled:!0,workingColorSpace:An,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(s.r=Ir(s.r),s.g=Ir(s.g),s.b=Ir(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yi?wo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ns("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ns("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[An]:{primaries:e,whitePoint:n,transfer:wo,toXYZ:yf,fromXYZ:vf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:tt},outputColorSpaceConfig:{drawingBufferColorSpace:tt}},[tt]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:yf,fromXYZ:vf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:tt}}}),i}var ht=Fx();function Bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var dr,vc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{dr===void 0&&(dr=Nr("canvas")),dr.width=e.width,dr.height=e.height;let s=dr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=dr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Nr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bi(t[n]/255)*255):t[n]=Bi(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ux=0,Fr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=Kn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(pu(s[o].image)):r.push(pu(s[o]))}else r=pu(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function pu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}var Ox=0,mu=new U,tn=class i extends vi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Zn,s=Zn,r=qt,o=di,a=Vn,c=Dn,l=i.DEFAULT_ANISOTROPY,u=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=Kn(),this.name="",this.source=new Fr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(mu).x}get height(){return this.source.getSize(mu).y}get depth(){return this.source.getSize(mu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $n:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case Pr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $n:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case Pr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=mh;tn.DEFAULT_ANISOTROPY=1;var St=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],p=c[9],_=c[2],m=c[6],g=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(p+m)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,x=(f+1)/2,S=(g+1)/2,E=(u+d)/4,v=(h+_)/4,y=(p+m)/4;return M>x&&M>S?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=E/n,r=v/n):x>S?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=y/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=v/r,s=y/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-p)*(m-p)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-p)/b,this.y=(h-_)/b,this.z=(d-u)/b,this.w=Math.acos((l+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Mc=class extends vi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new tn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Fr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},kn=class extends Mc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ro=class extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var bc=class extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ke=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,c,l,u,h,d,f,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,d,f,p,_,m)}set(e,t,n,s,r,o,a,c,l,u,h,d,f,p,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/fr.setFromMatrixColumn(e,0).length(),r=1/fr.setFromMatrixColumn(e,1).length(),o=1/fr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,p=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+p*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=p+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,p=l*u,_=l*h;t[0]=d+_*a,t[4]=p*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,p=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*u,f=o*h,p=a*u,_=a*h;t[0]=c*u,t[4]=p*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,p=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+p,t[10]=d-_*h}else if(e.order==="XZY"){let d=o*c,f=o*l,p=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bx,e,zx)}lookAt(e,t,n){let s=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),ji.crossVectors(n,Bn),ji.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),ji.crossVectors(n,Bn)),ji.normalize(),Pa.crossVectors(Bn,ji),s[0]=ji.x,s[4]=Pa.x,s[8]=Bn.x,s[1]=ji.y,s[5]=Pa.y,s[9]=Bn.y,s[2]=ji.z,s[6]=Pa.z,s[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],b=n[3],M=n[7],x=n[11],S=n[15],E=s[0],v=s[4],y=s[8],w=s[12],R=s[1],A=s[5],I=s[9],N=s[13],B=s[2],O=s[6],G=s[10],V=s[14],ee=s[3],ae=s[7],de=s[11],W=s[15];return r[0]=o*E+a*R+c*B+l*ee,r[4]=o*v+a*A+c*O+l*ae,r[8]=o*y+a*I+c*G+l*de,r[12]=o*w+a*N+c*V+l*W,r[1]=u*E+h*R+d*B+f*ee,r[5]=u*v+h*A+d*O+f*ae,r[9]=u*y+h*I+d*G+f*de,r[13]=u*w+h*N+d*V+f*W,r[2]=p*E+_*R+m*B+g*ee,r[6]=p*v+_*A+m*O+g*ae,r[10]=p*y+_*I+m*G+g*de,r[14]=p*w+_*N+m*V+g*W,r[3]=b*E+M*R+x*B+S*ee,r[7]=b*v+M*A+x*O+S*ae,r[11]=b*y+M*I+x*G+S*de,r[15]=b*w+M*N+x*V+S*W,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],_=e[7],m=e[11],g=e[15],b=c*f-l*d,M=a*f-l*h,x=a*d-c*h,S=o*f-l*u,E=o*d-c*u,v=o*h-a*u;return t*(_*b-m*M+g*x)-n*(p*b-m*S+g*E)+s*(p*M-_*S+g*v)-r*(p*x-_*E+m*v)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-n*(r*u-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],_=e[13],m=e[14],g=e[15],b=t*a-n*o,M=t*c-s*o,x=t*l-r*o,S=n*c-s*a,E=n*l-r*a,v=s*l-r*c,y=u*_-h*p,w=u*m-d*p,R=u*g-f*p,A=h*m-d*_,I=h*g-f*_,N=d*g-f*m,B=b*N-M*I+x*A+S*R-E*w+v*y;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/B;return e[0]=(a*N-c*I+l*A)*O,e[1]=(s*I-n*N-r*A)*O,e[2]=(_*v-m*E+g*S)*O,e[3]=(d*E-h*v-f*S)*O,e[4]=(c*R-o*N-l*w)*O,e[5]=(t*N-s*R+r*w)*O,e[6]=(m*x-p*v-g*M)*O,e[7]=(u*v-d*x+f*M)*O,e[8]=(o*I-a*R+l*y)*O,e[9]=(n*R-t*I-r*y)*O,e[10]=(p*E-_*x+g*b)*O,e[11]=(h*x-u*E-f*b)*O,e[12]=(a*w-o*A-c*y)*O,e[13]=(t*A-n*w+s*y)*O,e[14]=(_*M-p*S-m*b)*O,e[15]=(u*S-h*M+d*b)*O,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,p=r*h,_=o*u,m=o*h,g=a*h,b=c*l,M=c*u,x=c*h,S=n.x,E=n.y,v=n.z;return s[0]=(1-(_+g))*S,s[1]=(f+x)*S,s[2]=(p-M)*S,s[3]=0,s[4]=(f-x)*E,s[5]=(1-(d+g))*E,s[6]=(m+b)*E,s[7]=0,s[8]=(p+M)*v,s[9]=(m-b)*v,s[10]=(1-(d+_))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=fr.set(s[0],s[1],s[2]).length(),a=fr.set(s[4],s[5],s[6]).length(),c=fr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ni.copy(this);let l=1/o,u=1/a,h=1/c;return ni.elements[0]*=l,ni.elements[1]*=l,ni.elements[2]*=l,ni.elements[4]*=u,ni.elements[5]*=u,ni.elements[6]*=u,ni.elements[8]*=h,ni.elements[9]*=h,ni.elements[10]*=h,t.setFromRotationMatrix(ni),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=oi,c=!1){let l=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),p,_;if(c)p=r/(o-r),_=o*r/(o-r);else if(a===oi)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Lr)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=oi,c=!1){let l=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),p,_;if(c)p=1/(o-r),_=o/(o-r);else if(a===oi)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===Lr)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},fr=new U,ni=new Ke,Bx=new U(0,0,0),zx=new U(1,1,1),ji=new U,Pa=new U,Bn=new U,Mf=new Ke,bf=new Pt,Zt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bf.setFromEuler(this),this.setFromQuaternion(bf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zt.DEFAULT_ORDER="XYZ";var Co=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},kx=0,Sf=new U,pr=new Pt,Pi=new Ke,La=new U,lo=new U,Hx=new U,Gx=new Pt,Ef=new U(1,0,0),Tf=new U(0,1,0),wf=new U(0,0,1),Af={type:"added"},Vx={type:"removed"},mr={type:"childadded",child:null},gu={type:"childremoved",child:null},Lt=class i extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new Zt,n=new Pt,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new st}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(Ef,e)}rotateY(e){return this.rotateOnAxis(Tf,e)}rotateZ(e){return this.rotateOnAxis(wf,e)}translateOnAxis(e,t){return Sf.copy(e).applyQuaternion(this.quaternion),this.position.add(Sf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ef,e)}translateY(e){return this.translateOnAxis(Tf,e)}translateZ(e){return this.translateOnAxis(wf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?La.copy(e):La.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(lo,La,this.up):Pi.lookAt(La,lo,this.up),this.quaternion.setFromRotationMatrix(Pi),s&&(Pi.extractRotation(s.matrixWorld),pr.setFromRotationMatrix(Pi),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Af),mr.child=e,this.dispatchEvent(mr),mr.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vx),gu.child=e,this.dispatchEvent(gu),gu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Af),mr.child=e,this.dispatchEvent(mr),mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,e,Hx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,Gx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Lt.DEFAULT_UP=new U(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var it=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wx={type:"move"},Ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new it,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new it,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new it,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),g=this._getHandJoint(l,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new it;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Na={h:0,s:0,l:0};function xu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var me=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ht.workingColorSpace){if(e=Eh(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=xu(o,r,e+1/3),this.g=xu(o,r,e),this.b=xu(o,r,e-1/3)}return ht.colorSpaceToWorking(this,s),this}setStyle(e,t=tt){function n(r){r!==void 0&&parseFloat(r)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tt){let n=Wp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tt){return ht.workingToColorSpace(vn.copy(this),e),Math.round(dt(vn.r*255,0,255))*65536+Math.round(dt(vn.g*255,0,255))*256+Math.round(dt(vn.b*255,0,255))}getHexString(e=tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(vn.copy(this),t);let n=vn.r,s=vn.g,r=vn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=tt){ht.workingToColorSpace(vn.copy(this),e);let t=vn.r,n=vn.g,s=vn.b;return e!==tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(Na);let n=So(Qi.h,Na.h,t),s=So(Qi.s,Na.s,t),r=So(Qi.l,Na.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new me;me.NAMES=Wp;var Io=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new me(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var zs=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zt,this.environmentIntensity=1,this.environmentRotation=new Zt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ii=new U,Li=new U,_u=new U,Ni=new U,gr=new U,xr=new U,Rf=new U,yu=new U,vu=new U,Mu=new U,bu=new St,Su=new St,Eu=new St,Oi=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ii.subVectors(e,t),s.cross(ii);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ii.subVectors(s,t),Li.subVectors(n,t),_u.subVectors(e,t);let o=ii.dot(ii),a=ii.dot(Li),c=ii.dot(_u),l=Li.dot(Li),u=Li.dot(_u),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(l*c-a*u)*d,p=(o*u-a*c)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ni.x),c.addScaledVector(o,Ni.y),c.addScaledVector(a,Ni.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return bu.setScalar(0),Su.setScalar(0),Eu.setScalar(0),bu.fromBufferAttribute(e,t),Su.fromBufferAttribute(e,n),Eu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(bu,r.x),o.addScaledVector(Su,r.y),o.addScaledVector(Eu,r.z),o}static isFrontFacing(e,t,n,s){return ii.subVectors(n,t),Li.subVectors(e,t),ii.cross(Li).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ii.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;gr.subVectors(s,n),xr.subVectors(r,n),yu.subVectors(e,n);let c=gr.dot(yu),l=xr.dot(yu);if(c<=0&&l<=0)return t.copy(n);vu.subVectors(e,s);let u=gr.dot(vu),h=xr.dot(vu);if(u>=0&&h<=u)return t.copy(s);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(gr,o);Mu.subVectors(e,r);let f=gr.dot(Mu),p=xr.dot(Mu);if(p>=0&&f<=p)return t.copy(r);let _=f*l-c*p;if(_<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(xr,a);let m=u*p-f*h;if(m<=0&&h-u>=0&&f-p>=0)return Rf.subVectors(r,s),a=(h-u)/(h-u+(f-p)),t.copy(s).addScaledVector(Rf,a);let g=1/(m+_+d);return o=_*g,a=d*g,t.copy(n).addScaledVector(gr,o).addScaledVector(xr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Jt=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,si):si.fromBufferAttribute(r,o),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Da.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Da.copy(n.boundingBox)),Da.applyMatrix4(e.matrixWorld),this.union(Da)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(uo),Fa.subVectors(this.max,uo),_r.subVectors(e.a,uo),yr.subVectors(e.b,uo),vr.subVectors(e.c,uo),es.subVectors(yr,_r),ts.subVectors(vr,yr),bs.subVectors(_r,vr);let t=[0,-es.z,es.y,0,-ts.z,ts.y,0,-bs.z,bs.y,es.z,0,-es.x,ts.z,0,-ts.x,bs.z,0,-bs.x,-es.y,es.x,0,-ts.y,ts.x,0,-bs.y,bs.x,0];return!Tu(t,_r,yr,vr,Fa)||(t=[1,0,0,0,1,0,0,0,1],!Tu(t,_r,yr,vr,Fa))?!1:(Ua.crossVectors(es,ts),t=[Ua.x,Ua.y,Ua.z],Tu(t,_r,yr,vr,Fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Di=[new U,new U,new U,new U,new U,new U,new U,new U],si=new U,Da=new Jt,_r=new U,yr=new U,vr=new U,es=new U,ts=new U,bs=new U,uo=new U,Fa=new U,Ua=new U,Ss=new U;function Tu(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ss.fromArray(i,r);let a=s.x*Math.abs(Ss.x)+s.y*Math.abs(Ss.y)+s.z*Math.abs(Ss.z),c=e.dot(Ss),l=t.dot(Ss),u=n.dot(Ss);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Qt=new U,Oa=new Ee,Xx=0,Dt=class extends vi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yc,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Oa.fromBufferAttribute(this,t),Oa.applyMatrix3(e),this.setXY(t,Oa.x,Oa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yc&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Po=class extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Lo=class extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var je=class extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}},qx=new Jt,ho=new U,wu=new U,Pn=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):qx.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ho.subVectors(e,this.center);let t=ho.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ho,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ho.copy(e.center).add(wu)),this.expandByPoint(ho.copy(e.center).sub(wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Yx=0,Yn=new Ke,Au=new Lt,Mr=new U,zn=new Jt,fo=new Jt,ln=new U,pt=class i extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yx++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xx(e)?Lo:Po)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,n){return Yn.makeTranslation(e,t,n),this.applyMatrix4(Yn),this}scale(e,t,n){return Yn.makeScale(e,t,n),this.applyMatrix4(Yn),this}lookAt(e){return Au.lookAt(e),Au.updateMatrix(),this.applyMatrix4(Au.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new je(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];zn.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];fo.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(zn.min,fo.min),zn.expandByPoint(ln),ln.addVectors(zn.max,fo.max),zn.expandByPoint(ln)):(zn.expandByPoint(fo.min),zn.expandByPoint(fo.max))}zn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)ln.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ln));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ln.fromBufferAttribute(a,l),c&&(Mr.fromBufferAttribute(e,l),ln.add(Mr)),s=Math.max(s,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Dt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let y=0;y<n.count;y++)a[y]=new U,c[y]=new U;let l=new U,u=new U,h=new U,d=new Ee,f=new Ee,p=new Ee,_=new U,m=new U;function g(y,w,R){l.fromBufferAttribute(n,y),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,R),d.fromBufferAttribute(r,y),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,R),u.sub(l),h.sub(l),f.sub(d),p.sub(d);let A=1/(f.x*p.y-p.x*f.y);isFinite(A)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(A),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(A),a[y].add(_),a[w].add(_),a[R].add(_),c[y].add(m),c[w].add(m),c[R].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let y=0,w=b.length;y<w;++y){let R=b[y],A=R.start,I=R.count;for(let N=A,B=A+I;N<B;N+=3)g(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let M=new U,x=new U,S=new U,E=new U;function v(y){S.fromBufferAttribute(s,y),E.copy(S);let w=a[y];M.copy(w),M.sub(S.multiplyScalar(S.dot(w))).normalize(),x.crossVectors(E,w);let A=x.dot(c[y])<0?-1:1;o.setXYZW(y,M.x,M.y,M.z,A)}for(let y=0,w=b.length;y<w;++y){let R=b[y],A=R.start,I=R.count;for(let N=A,B=A+I;N<B;N+=3)v(e.getX(N+0)),v(e.getX(N+1)),v(e.getX(N+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,u=new U,h=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u),f=0,p=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let g=0;g<u;g++)d[p++]=l[f++]}return new Dt(d,u,h)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ks=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yc,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},wn=new U,rs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ri(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ao("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ao("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zx=0,bn=class extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=Ds,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uc,this.blendDst=hc,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uc&&(n.blendSrc=this.blendSrc),this.blendDst!==hc&&(n.blendDst=this.blendDst),this.blendEquation!==ss&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new me().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ee().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ee().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Mi=class extends bn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},br,po=new U,Sr=new U,Er=new U,Tr=new Ee,mo=new Ee,Xp=new Ke,Ba=new U,go=new U,za=new U,Cf=new Ee,Ru=new Ee,If=new Ee,zi=class extends Lt{constructor(e=new Mi){if(super(),this.isSprite=!0,this.type="Sprite",br===void 0){br=new pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ks(t,5);br.setIndex([0,1,2,0,2,3]),br.setAttribute("position",new rs(n,3,0,!1)),br.setAttribute("uv",new rs(n,2,3,!1))}this.geometry=br,this.material=e,this.center=new Ee(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Qe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Sr.setFromMatrixScale(this.matrixWorld),Xp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Er.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Sr.multiplyScalar(-Er.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ka(Ba.set(-.5,-.5,0),Er,o,Sr,s,r),ka(go.set(.5,-.5,0),Er,o,Sr,s,r),ka(za.set(.5,.5,0),Er,o,Sr,s,r),Cf.set(0,0),Ru.set(1,0),If.set(1,1);let a=e.ray.intersectTriangle(Ba,go,za,!1,po);if(a===null&&(ka(go.set(-.5,.5,0),Er,o,Sr,s,r),Ru.set(0,1),a=e.ray.intersectTriangle(Ba,za,go,!1,po),a===null))return;let c=e.ray.origin.distanceTo(po);c<e.near||c>e.far||t.push({distance:c,point:po.clone(),uv:Oi.getInterpolation(po,Ba,go,za,Cf,Ru,If,new Ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ka(i,e,t,n,s,r){Tr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(mo.x=r*Tr.x-s*Tr.y,mo.y=s*Tr.x+r*Tr.y):mo.copy(Tr),i.copy(e),i.x+=mo.x,i.y+=mo.y,i.applyMatrix4(Xp)}var Fi=new U,Cu=new U,Ha=new U,ns=new U,Iu=new U,Ga=new U,Pu=new U,Hs=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Cu.copy(e).add(t).multiplyScalar(.5),Ha.copy(t).sub(e).normalize(),ns.copy(this.origin).sub(Cu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ha),a=ns.dot(this.direction),c=-ns.dot(Ha),l=ns.lengthSq(),u=Math.abs(1-o*o),h,d,f,p;if(u>0)if(h=o*c-a,d=o*a-c,p=r*u,h>=0)if(d>=-p)if(d<=p){let _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-p?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=p?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Cu).addScaledVector(Ha,d),f}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);let n=Fi.dot(this.direction),s=Fi.dot(Fi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,n,s,r){Iu.subVectors(t,e),Ga.subVectors(n,e),Pu.crossVectors(Iu,Ga);let o=this.direction.dot(Pu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ns.subVectors(this.origin,e);let c=a*this.direction.dot(Ga.crossVectors(ns,Ga));if(c<0)return null;let l=a*this.direction.dot(Iu.cross(ns));if(l<0||c+l>o)return null;let u=-a*ns.dot(Pu);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pn=class extends bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=Xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Pf=new Ke,Es=new Hs,Va=new Pn,Lf=new U,Wa=new U,Xa=new U,qa=new U,Lu=new U,Ya=new U,Nf=new U,Za=new U,He=class extends Lt{constructor(e=new pt,t=new pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ya.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(Lu.fromBufferAttribute(h,e),o?Ya.addScaledVector(Lu,u):Ya.addScaledVector(Lu.sub(t),u))}t.add(Ya)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(r),Es.copy(e.ray).recast(e.near),!(Va.containsPoint(Es.origin)===!1&&(Es.intersectSphere(Va,Lf)===null||Es.origin.distanceToSquared(Lf)>(e.far-e.near)**2))&&(Pf.copy(r).invert(),Es.copy(e.ray).applyMatrix4(Pf),!(n.boundingBox!==null&&Es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Es)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){let m=d[p],g=o[m.materialIndex],b=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,S=M;x<S;x+=3){let E=a.getX(x),v=a.getX(x+1),y=a.getX(x+2);s=Ka(this,g,e,n,l,u,h,E,v,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let b=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);s=Ka(this,o,e,n,l,u,h,b,M,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){let m=d[p],g=o[m.materialIndex],b=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,S=M;x<S;x+=3){let E=x,v=x+1,y=x+2;s=Ka(this,g,e,n,l,u,h,E,v,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let b=m,M=m+1,x=m+2;s=Ka(this,o,e,n,l,u,h,b,M,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Kx(i,e,t,n,s,r,o,a){let c;if(e.side===mn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Mn,a),c===null)return null;Za.copy(a),Za.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Za);return l<t.near||l>t.far?null:{distance:l,point:Za.clone(),object:i}}function Ka(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Wa),i.getVertexPosition(c,Xa),i.getVertexPosition(l,qa);let u=Kx(i,e,t,n,Wa,Xa,qa,Nf);if(u){let h=new U;Oi.getBarycoord(Nf,Wa,Xa,qa,h),s&&(u.uv=Oi.getInterpolatedAttribute(s,a,c,l,h,new Ee)),r&&(u.uv1=Oi.getInterpolatedAttribute(r,a,c,l,h,new Ee)),o&&(u.normal=Oi.getInterpolatedAttribute(o,a,c,l,h,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new U,materialIndex:0};Oi.getNormal(Wa,Xa,qa,d.normal),u.face=d,u.barycoord=h}return u}var xo=new St,Df=new St,Ff=new St,$x=new St,Uf=new Ke,$a=new U,Nu=new Pn,Of=new Ke,Du=new Hs,No=class extends He{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vu,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Jt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$a),this.boundingBox.expandByPoint($a)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$a),this.boundingSphere.expandByPoint($a)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nu.copy(this.boundingSphere),Nu.applyMatrix4(s),e.ray.intersectsSphere(Nu)!==!1&&(Of.copy(s).invert(),Du.copy(e.ray).applyMatrix4(Of),!(this.boundingBox!==null&&Du.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Du)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new St,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ip?this.bindMatrixInverse.copy(this.bindMatrix).invert():We("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Df.fromBufferAttribute(s.attributes.skinIndex,e),Ff.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(xo.copy(t),t.set(0,0,0,0)):(xo.set(...t,1),t.set(0,0,0)),xo.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Ff.getComponent(r);if(o!==0){let a=Df.getComponent(r);Uf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector($x.copy(xo).applyMatrix4(Uf),o)}}return t.isVector4&&(t.w=xo.w),t.applyMatrix4(this.bindMatrixInverse)}},Or=class extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Br=class extends tn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Xt,u=Xt,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Bf=new Ke,Jx=new Ke,Do=class i{constructor(e=[],t=[]){this.uuid=Kn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){We("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Jx;Bf.multiplyMatrices(a,t[r]),Bf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Br(t,e,e,Vn,Gn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(We("Skeleton: No bone found with UUID:",r),o=new Or),this.bones.push(o),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},os=class extends Dt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},wr=new Ke,zf=new Ke,Ja=[],kf=new Jt,jx=new Ke,_o=new He,yo=new Pn,un=class extends He{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new os(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,jx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wr),kf.copy(e.boundingBox).applyMatrix4(wr),this.boundingBox.union(kf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wr),yo.copy(e.boundingSphere).applyMatrix4(wr),this.boundingSphere.union(yo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(_o.geometry=this.geometry,_o.material=this.material,_o.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yo.copy(this.boundingSphere),yo.applyMatrix4(n),e.ray.intersectsSphere(yo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,wr),zf.multiplyMatrices(n,wr),_o.matrixWorld=zf,_o.raycast(e,Ja);for(let o=0,a=Ja.length;o<a;o++){let c=Ja[o];c.instanceId=r,c.object=this,t.push(c)}Ja.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new os(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Br(new Float32Array(s*this.count),s,this.count,jc,Gn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Fu=new U,Qx=new U,e_=new st,xi=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Fu.subVectors(n,t).cross(Qx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Fu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||e_.getNormalMatrix(e),s=this.coplanarPoint(Fu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ts=new Pn,t_=new Ee(.5,.5),ja=new U,zr=class{constructor(e=new xi,t=new xi,n=new xi,s=new xi,r=new xi,o=new xi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=oi,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],p=r[8],_=r[9],m=r[10],g=r[11],b=r[12],M=r[13],x=r[14],S=r[15];if(s[0].setComponents(l-o,f-u,g-p,S-b).normalize(),s[1].setComponents(l+o,f+u,g+p,S+b).normalize(),s[2].setComponents(l+a,f+h,g+_,S+M).normalize(),s[3].setComponents(l-a,f-h,g-_,S-M).normalize(),n)s[4].setComponents(c,d,m,x).normalize(),s[5].setComponents(l-c,f-d,g-m,S-x).normalize();else if(s[4].setComponents(l-c,f-d,g-m,S-x).normalize(),t===oi)s[5].setComponents(l+c,f+d,g+m,S+x).normalize();else if(t===Lr)s[5].setComponents(c,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){Ts.center.set(0,0,0);let t=t_.distanceTo(e.center);return Ts.radius=.7071067811865476+t,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ja.x=s.normal.x>0?e.max.x:e.min.x,ja.y=s.normal.y>0?e.max.y:e.min.y,ja.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ja)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var as=class extends bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Sc=new U,Ec=new U,Hf=new Ke,vo=new Hs,Qa=new Pn,Uu=new U,Gf=new U,Gs=class extends Lt{constructor(e=new pt,t=new as){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Sc.fromBufferAttribute(t,s-1),Ec.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Sc.distanceTo(Ec);e.setAttribute("lineDistance",new je(n,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(s),Qa.radius+=r,e.ray.intersectsSphere(Qa)===!1)return;Hf.copy(s).invert(),vo.copy(e.ray).applyMatrix4(Hf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=l){let g=u.getX(_),b=u.getX(_+1),M=ec(this,e,vo,c,g,b,_);M&&t.push(M)}if(this.isLineLoop){let _=u.getX(p-1),m=u.getX(f),g=ec(this,e,vo,c,_,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=l){let g=ec(this,e,vo,c,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=ec(this,e,vo,c,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ec(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Sc.fromBufferAttribute(a,s),Ec.fromBufferAttribute(a,r),t.distanceSqToSegment(Sc,Ec,Uu,Gf)>n)return;Uu.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Uu);if(!(l<e.near||l>e.far))return{distance:l,point:Gf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Vf=new U,Wf=new U,Vs=class extends Gs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Vf.fromBufferAttribute(t,s),Wf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Vf.distanceTo(Wf);e.setAttribute("lineDistance",new je(n,1))}else We("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Fo=class extends Gs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},cs=class extends bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xf=new Ke,Ku=new Hs,tc=new Pn,nc=new U,Ws=class extends Lt{constructor(e=new pt,t=new cs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tc.copy(n.boundingSphere),tc.applyMatrix4(s),tc.radius+=r,e.ray.intersectsSphere(tc)===!1)return;Xf.copy(s).invert(),Ku.copy(e.ray).applyMatrix4(Xf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let p=d,_=f;p<_;p++){let m=l.getX(p);nc.fromBufferAttribute(h,m),qf(nc,m,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let p=d,_=f;p<_;p++)nc.fromBufferAttribute(h,p),qf(nc,p,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function qf(i,e,t,n,s,r,o){let a=Ku.distanceSqToPoint(i);if(a<t){let c=new U;Ku.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var kr=class extends tn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Xt,this.minFilter=Xt,this.generateMipmaps=!1,this.needsUpdate=!0}};var Uo=class extends tn{constructor(e=[],t=fs,n,s,r,o,a,c,l,u){super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Et=class extends tn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ki=class extends tn{constructor(e,t,n=fi,s,r,o,a=Xt,c=Xt,l,u=yi,h=1){if(u!==yi&&u!==ps)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Tc=class extends ki{constructor(e,t=fi,n=fs,s,r,o=Xt,a=Xt,c,l=yi){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Oo=class extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},et=class i extends pt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new je(l,3)),this.setAttribute("normal",new je(u,3)),this.setAttribute("uv",new je(h,2));function p(_,m,g,b,M,x,S,E,v,y,w){let R=x/v,A=S/y,I=x/2,N=S/2,B=E/2,O=v+1,G=y+1,V=0,ee=0,ae=new U;for(let de=0;de<G;de++){let W=de*A-N;for(let Q=0;Q<O;Q++){let ue=Q*R-I;ae[_]=ue*b,ae[m]=W*M,ae[g]=B,l.push(ae.x,ae.y,ae.z),ae[_]=0,ae[m]=0,ae[g]=E>0?1:-1,u.push(ae.x,ae.y,ae.z),h.push(Q/v),h.push(1-de/y),V+=1}}for(let de=0;de<y;de++)for(let W=0;W<v;W++){let Q=d+W+O*de,ue=d+W+O*(de+1),_e=d+(W+1)+O*(de+1),Te=d+(W+1)+O*de;c.push(Q,ue,Te),c.push(ue,_e,Te),ee+=6}a.addGroup(f,ee,w),f+=ee,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Rn=class i extends pt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],p=0,_=[],m=n/2,g=0;b(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new je(h,3)),this.setAttribute("normal",new je(d,3)),this.setAttribute("uv",new je(f,2));function b(){let x=new U,S=new U,E=0,v=(t-e)/n;for(let y=0;y<=r;y++){let w=[],R=y/r,A=R*(t-e)+e;for(let I=0;I<=s;I++){let N=I/s,B=N*c+a,O=Math.sin(B),G=Math.cos(B);S.x=A*O,S.y=-R*n+m,S.z=A*G,h.push(S.x,S.y,S.z),x.set(O,v,G).normalize(),d.push(x.x,x.y,x.z),f.push(N,1-R),w.push(p++)}_.push(w)}for(let y=0;y<s;y++)for(let w=0;w<r;w++){let R=_[w][y],A=_[w+1][y],I=_[w+1][y+1],N=_[w][y+1];(e>0||w!==0)&&(u.push(R,A,N),E+=3),(t>0||w!==r-1)&&(u.push(A,I,N),E+=3)}l.addGroup(g,E,0),g+=E}function M(x){let S=p,E=new Ee,v=new U,y=0,w=x===!0?e:t,R=x===!0?1:-1;for(let I=1;I<=s;I++)h.push(0,m*R,0),d.push(0,R,0),f.push(.5,.5),p++;let A=p;for(let I=0;I<=s;I++){let B=I/s*c+a,O=Math.cos(B),G=Math.sin(B);v.x=w*G,v.y=m*R,v.z=w*O,h.push(v.x,v.y,v.z),d.push(0,R,0),E.x=O*.5+.5,E.y=G*.5*R+.5,f.push(E.x,E.y),p++}for(let I=0;I<s;I++){let N=S+I,B=A+I;x===!0?u.push(B,B+1,N):u.push(B+1,B,N),y+=3}l.addGroup(g,y,x===!0?1:2),g+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ls=class i extends Rn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){We("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Ee:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new U,s=[],r=[],o=[],a=new U,c=new Ke;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new U)}r[0]=new U,o[0]=new U;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(dt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(dt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Hr=class extends Hn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Ee){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},wc=class extends Hr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Th(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Yf=new U,Zf=new U,Ou=new Th,Bu=new Th,zu=new Th,Ac=class extends Hn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new U){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Zf.subVectors(s[0],s[1]).add(s[0]),l=Zf);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Yf.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Yf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),Ou.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,p,_,m),Bu.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,p,_,m),zu.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,p,_,m)}else this.curveType==="catmullrom"&&(Ou.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Bu.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),zu.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Ou.calc(c),Bu.calc(c),zu.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Kf(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function n_(i,e){let t=1-i;return t*t*e}function i_(i,e){return 2*(1-i)*i*e}function s_(i,e){return i*i*e}function Eo(i,e,t,n){return n_(i,e)+i_(i,t)+s_(i,n)}function r_(i,e){let t=1-i;return t*t*t*e}function o_(i,e){let t=1-i;return 3*t*t*i*e}function a_(i,e){return 3*(1-i)*i*i*e}function c_(i,e){return i*i*i*e}function To(i,e,t,n,s){return r_(i,e)+o_(i,t)+a_(i,n)+c_(i,s)}var Bo=class extends Hn{constructor(e=new Ee,t=new Ee,n=new Ee,s=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ee){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(To(e,s.x,r.x,o.x,a.x),To(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Rc=class extends Hn{constructor(e=new U,t=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(To(e,s.x,r.x,o.x,a.x),To(e,s.y,r.y,o.y,a.y),To(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},zo=class extends Hn{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cc=class extends Hn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ko=class extends Hn{constructor(e=new Ee,t=new Ee,n=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ee){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Eo(e,s.x,r.x,o.x),Eo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ic=class extends Hn{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Eo(e,s.x,r.x,o.x),Eo(e,s.y,r.y,o.y),Eo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ho=class extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Kf(a,c.x,l.x,u.x,h.x),Kf(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ee().fromArray(s))}return this}},$u=Object.freeze({__proto__:null,ArcCurve:wc,CatmullRomCurve3:Ac,CubicBezierCurve:Bo,CubicBezierCurve3:Rc,EllipseCurve:Hr,LineCurve:zo,LineCurve3:Cc,QuadraticBezierCurve:ko,QuadraticBezierCurve3:Ic,SplineCurve:Ho}),Pc=class extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $u[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new $u[s.type]().fromJSON(s))}return this}},Go=class extends Pc{constructor(e){super(),this.type="Path",this.currentPoint=new Ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new zo(this.currentPoint.clone(),new Ee(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ko(this.currentPoint.clone(),new Ee(e,t),new Ee(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Bo(this.currentPoint.clone(),new Ee(e,t),new Ee(n,s),new Ee(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ho(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new Hr(e,t,n,s,r,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Gr=class extends Go{constructor(e){super(e),this.uuid=Kn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Go().fromJSON(s))}return this}};function l_(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=qp(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=p_(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let u=a,h=c;for(let d=t;d<s;d+=t){let f=i[d],p=i[d+1];f<a&&(a=f),p<c&&(c=p),f>u&&(u=f),p>h&&(h=p)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return Vo(r,o,t,a,c,l,0),o}function qp(i,e,t,n,s){let r;if(s===T_(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=$f(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=$f(o/n|0,i[o],i[o+1],r);return r&&Vr(r,r.next)&&(Xo(r),r=r.next),r}function Xs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Vr(t,t.next)||Wt(t.prev,t,t.next)===0)){if(Xo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Vo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&y_(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?h_(i,n,s,r):u_(i)){e.push(c.i,i.i,l.i),Xo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=d_(Xs(i),e),Vo(i,e,t,n,s,r,2)):o===2&&f_(i,e,t,n,s,r):Vo(Xs(i),e,t,n,s,r,1);break}}}function u_(i){let e=i.prev,t=i,n=i.next;if(Wt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=Math.min(s,r,o),h=Math.min(a,c,l),d=Math.max(s,r,o),f=Math.max(a,c,l),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&Mo(s,a,r,c,o,l,p.x,p.y)&&Wt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function h_(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Wt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,f=Math.min(a,c,l),p=Math.min(u,h,d),_=Math.max(a,c,l),m=Math.max(u,h,d),g=Ju(f,p,e,t,n),b=Ju(_,m,e,t,n),M=i.prevZ,x=i.nextZ;for(;M&&M.z>=g&&x&&x.z<=b;){if(M.x>=f&&M.x<=_&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&Mo(a,u,c,h,l,d,M.x,M.y)&&Wt(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=f&&x.x<=_&&x.y>=p&&x.y<=m&&x!==s&&x!==o&&Mo(a,u,c,h,l,d,x.x,x.y)&&Wt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=g;){if(M.x>=f&&M.x<=_&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&Mo(a,u,c,h,l,d,M.x,M.y)&&Wt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=b;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=m&&x!==s&&x!==o&&Mo(a,u,c,h,l,d,x.x,x.y)&&Wt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function d_(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Vr(n,s)&&Zp(n,t,t.next,s)&&Wo(n,s)&&Wo(s,n)&&(e.push(n.i,t.i,s.i),Xo(t),Xo(t.next),t=i=s),t=t.next}while(t!==i);return Xs(t)}function f_(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&b_(o,a)){let c=Kp(o,a);o=Xs(o,o.next),c=Xs(c,c.next),Vo(o,e,t,n,s,r,0),Vo(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function p_(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=qp(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(M_(l))}s.sort(m_);for(let r=0;r<s.length;r++)t=g_(s[r],t);return t}function m_(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function g_(i,e){let t=x_(i,e);if(!t)return e;let n=Kp(t,i);return Xs(n,n.next),Xs(t,t.next)}function x_(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Vr(i,t))return t;do{if(Vr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Yp(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let h=Math.abs(s-t.y)/(n-t.x);Wo(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&__(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function __(i,e){return Wt(i.prev,i,e.prev)<0&&Wt(e.next,i,i.next)<0}function y_(i,e,t,n){let s=i;do s.z===0&&(s.z=Ju(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,v_(s)}function v_(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Ju(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function M_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Yp(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Mo(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Yp(i,e,t,n,s,r,o,a)}function b_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!S_(i,e)&&(Wo(i,e)&&Wo(e,i)&&E_(i,e)&&(Wt(i.prev,i,e.prev)||Wt(i,e.prev,e))||Vr(i,e)&&Wt(i.prev,i,i.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Vr(i,e){return i.x===e.x&&i.y===e.y}function Zp(i,e,t,n){let s=sc(Wt(i,e,t)),r=sc(Wt(i,e,n)),o=sc(Wt(t,n,i)),a=sc(Wt(t,n,e));return!!(s!==r&&o!==a||s===0&&ic(i,t,e)||r===0&&ic(i,n,e)||o===0&&ic(t,i,n)||a===0&&ic(t,e,n))}function ic(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function sc(i){return i>0?1:i<0?-1:0}function S_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Zp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Wo(i,e){return Wt(i.prev,i,i.next)<0?Wt(i,e,i.next)>=0&&Wt(i,i.prev,e)>=0:Wt(i,e,i.prev)<0||Wt(i,i.next,e)<0}function E_(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Kp(i,e){let t=ju(i.i,i.x,i.y),n=ju(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function $f(i,e,t,n){let s=ju(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Xo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ju(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function T_(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Qu=class{static triangulate(e,t,n=2){return l_(e,t,n)}},Ls=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Jf(e),jf(n,e);let o=e.length;t.forEach(Jf);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,jf(n,t[c]);let a=Qu.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Jf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function jf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var qo=class i extends pt{constructor(e=new Gr([new Ee(.5,.5),new Ee(-.5,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new je(s,3)),this.setAttribute("uv",new je(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:w_,M,x=!1,S,E,v,y;if(g){M=g.getSpacedPoints(u),x=!0,d=!1;let H=g.isCatmullRomCurve3?g.closed:!1;S=g.computeFrenetFrames(u,H),E=new U,v=new U,y=new U}d||(m=0,f=0,p=0,_=0);let w=a.extractPoints(l),R=w.shape,A=w.holes;if(!Ls.isClockWise(R)){R=R.reverse();for(let H=0,K=A.length;H<K;H++){let oe=A[H];Ls.isClockWise(oe)&&(A[H]=oe.reverse())}}function N(H){let oe=10000000000000001e-36,fe=H[0];for(let ge=1;ge<=H.length;ge++){let Fe=ge%H.length,se=H[Fe],pe=se.x-fe.x,Ie=se.y-fe.y,F=pe*pe+Ie*Ie,Ae=Math.max(Math.abs(se.x),Math.abs(se.y),Math.abs(fe.x),Math.abs(fe.y)),De=oe*Ae*Ae;if(F<=De){H.splice(Fe,1),ge--;continue}fe=se}}N(R),A.forEach(N);let B=A.length,O=R;for(let H=0;H<B;H++){let K=A[H];R=R.concat(K)}function G(H,K,oe){return K||Qe("ExtrudeGeometry: vec does not exist"),H.clone().addScaledVector(K,oe)}let V=R.length;function ee(H,K,oe){let fe,ge,Fe,se=H.x-K.x,pe=H.y-K.y,Ie=oe.x-H.x,F=oe.y-H.y,Ae=se*se+pe*pe,De=se*F-pe*Ie;if(Math.abs(De)>Number.EPSILON){let P=Math.sqrt(Ae),T=Math.sqrt(Ie*Ie+F*F),L=K.x-pe/P,D=K.y+se/P,z=oe.x-F/T,X=oe.y+Ie/T,ne=((z-L)*F-(X-D)*Ie)/(se*F-pe*Ie);fe=L+se*ne-H.x,ge=D+pe*ne-H.y;let q=fe*fe+ge*ge;if(q<=2)return new Ee(fe,ge);Fe=Math.sqrt(q/2)}else{let P=!1;se>Number.EPSILON?Ie>Number.EPSILON&&(P=!0):se<-Number.EPSILON?Ie<-Number.EPSILON&&(P=!0):Math.sign(pe)===Math.sign(F)&&(P=!0),P?(fe=-pe,ge=se,Fe=Math.sqrt(Ae)):(fe=se,ge=pe,Fe=Math.sqrt(Ae/2))}return new Ee(fe/Fe,ge/Fe)}let ae=[];for(let H=0,K=O.length,oe=K-1,fe=H+1;H<K;H++,oe++,fe++)oe===K&&(oe=0),fe===K&&(fe=0),ae[H]=ee(O[H],O[oe],O[fe]);let de=[],W,Q=ae.concat();for(let H=0,K=B;H<K;H++){let oe=A[H];W=[];for(let fe=0,ge=oe.length,Fe=ge-1,se=fe+1;fe<ge;fe++,Fe++,se++)Fe===ge&&(Fe=0),se===ge&&(se=0),W[fe]=ee(oe[fe],oe[Fe],oe[se]);de.push(W),Q=Q.concat(W)}let ue;if(m===0)ue=Ls.triangulateShape(O,A);else{let H=[],K=[];for(let oe=0;oe<m;oe++){let fe=oe/m,ge=f*Math.cos(fe*Math.PI/2),Fe=p*Math.sin(fe*Math.PI/2)+_;for(let se=0,pe=O.length;se<pe;se++){let Ie=G(O[se],ae[se],Fe);ye(Ie.x,Ie.y,-ge),fe===0&&H.push(Ie)}for(let se=0,pe=B;se<pe;se++){let Ie=A[se];W=de[se];let F=[];for(let Ae=0,De=Ie.length;Ae<De;Ae++){let P=G(Ie[Ae],W[Ae],Fe);ye(P.x,P.y,-ge),fe===0&&F.push(P)}fe===0&&K.push(F)}}ue=Ls.triangulateShape(H,K)}let _e=ue.length,Te=p+_;for(let H=0;H<V;H++){let K=d?G(R[H],Q[H],Te):R[H];x?(v.copy(S.normals[0]).multiplyScalar(K.x),E.copy(S.binormals[0]).multiplyScalar(K.y),y.copy(M[0]).add(v).add(E),ye(y.x,y.y,y.z)):ye(K.x,K.y,0)}for(let H=1;H<=u;H++)for(let K=0;K<V;K++){let oe=d?G(R[K],Q[K],Te):R[K];x?(v.copy(S.normals[H]).multiplyScalar(oe.x),E.copy(S.binormals[H]).multiplyScalar(oe.y),y.copy(M[H]).add(v).add(E),ye(y.x,y.y,y.z)):ye(oe.x,oe.y,h/u*H)}for(let H=m-1;H>=0;H--){let K=H/m,oe=f*Math.cos(K*Math.PI/2),fe=p*Math.sin(K*Math.PI/2)+_;for(let ge=0,Fe=O.length;ge<Fe;ge++){let se=G(O[ge],ae[ge],fe);ye(se.x,se.y,h+oe)}for(let ge=0,Fe=A.length;ge<Fe;ge++){let se=A[ge];W=de[ge];for(let pe=0,Ie=se.length;pe<Ie;pe++){let F=G(se[pe],W[pe],fe);x?ye(F.x,F.y+M[u-1].y,M[u-1].x+oe):ye(F.x,F.y,h+oe)}}}Z(),te();function Z(){let H=s.length/3;if(d){let K=0,oe=V*K;for(let fe=0;fe<_e;fe++){let ge=ue[fe];Me(ge[2]+oe,ge[1]+oe,ge[0]+oe)}K=u+m*2,oe=V*K;for(let fe=0;fe<_e;fe++){let ge=ue[fe];Me(ge[0]+oe,ge[1]+oe,ge[2]+oe)}}else{for(let K=0;K<_e;K++){let oe=ue[K];Me(oe[2],oe[1],oe[0])}for(let K=0;K<_e;K++){let oe=ue[K];Me(oe[0]+V*u,oe[1]+V*u,oe[2]+V*u)}}n.addGroup(H,s.length/3-H,0)}function te(){let H=s.length/3,K=0;j(O,K),K+=O.length;for(let oe=0,fe=A.length;oe<fe;oe++){let ge=A[oe];j(ge,K),K+=ge.length}n.addGroup(H,s.length/3-H,1)}function j(H,K){let oe=H.length;for(;--oe>=0;){let fe=oe,ge=oe-1;ge<0&&(ge=H.length-1);for(let Fe=0,se=u+m*2;Fe<se;Fe++){let pe=V*Fe,Ie=V*(Fe+1),F=K+fe+pe,Ae=K+ge+pe,De=K+ge+Ie,P=K+fe+Ie;be(F,Ae,De,P)}}}function ye(H,K,oe){c.push(H),c.push(K),c.push(oe)}function Me(H,K,oe){he(H),he(K),he(oe);let fe=s.length/3,ge=b.generateTopUV(n,s,fe-3,fe-2,fe-1);we(ge[0]),we(ge[1]),we(ge[2])}function be(H,K,oe,fe){he(H),he(K),he(fe),he(K),he(oe),he(fe);let ge=s.length/3,Fe=b.generateSideWallUV(n,s,ge-6,ge-3,ge-2,ge-1);we(Fe[0]),we(Fe[1]),we(Fe[3]),we(Fe[1]),we(Fe[2]),we(Fe[3])}function he(H){s.push(c[H*3+0]),s.push(c[H*3+1]),s.push(c[H*3+2])}function we(H){r.push(H.x),r.push(H.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return A_(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new $u[s.type]().fromJSON(s)),new i(n,e.options)}},w_={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new Ee(r,o),new Ee(a,c),new Ee(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],_=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Ee(o,1-c),new Ee(l,1-h),new Ee(d,1-p),new Ee(_,1-g)]:[new Ee(a,1-c),new Ee(u,1-h),new Ee(f,1-p),new Ee(m,1-g)]}};function A_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ot=class i extends pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,f=[],p=[],_=[],m=[];for(let g=0;g<u;g++){let b=g*d-o;for(let M=0;M<l;M++){let x=M*h-r;p.push(x,-b,0),_.push(0,0,1),m.push(M/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let b=0;b<a;b++){let M=b+l*g,x=b+l*(g+1),S=b+1+l*(g+1),E=b+1+l*g;f.push(M,x,E),f.push(x,S,E)}this.setIndex(f),this.setAttribute("position",new je(p,3)),this.setAttribute("normal",new je(_,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var ai=class i extends pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new U,d=new U,f=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){let b=[],M=g/n,x=o+M*a,S=e*Math.cos(x),E=Math.sqrt(e*e-S*S),v=0;g===0&&o===0?v=.5/t:g===n&&c===Math.PI&&(v=-.5/t);for(let y=0;y<=t;y++){let w=y/t,R=s+w*r;h.x=-E*Math.cos(R),h.y=S,h.z=E*Math.sin(R),p.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(w+v,1-M),b.push(l++)}u.push(b)}for(let g=0;g<n;g++)for(let b=0;b<t;b++){let M=u[g][b+1],x=u[g][b],S=u[g+1][b],E=u[g+1][b+1];(g!==0||o>0)&&f.push(M,x,E),(g!==n-1||c<Math.PI)&&f.push(x,S,E)}this.setIndex(f),this.setAttribute("position",new je(p,3)),this.setAttribute("normal",new je(_,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function js(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Qf(s))s.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Qf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Sn(i){let e={};for(let t=0;t<i.length;t++){let n=js(i[t]);for(let s in n)e[s]=n[s]}return e}function Qf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function R_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var $p={clone:js,merge:Sn},C_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,I_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Cn=class extends bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C_,this.fragmentShader=I_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=R_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new me().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new St().fromArray(s.value);break;case"m3":this.uniforms[n].value=new st().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ke().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Wr=class extends Cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},bi=class extends bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fa,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ln=class extends bi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ye=class extends bn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fa,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=Xc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Lc=class extends bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Nc=class extends bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function rc(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function P_(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function ep(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function L_(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Si=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Dc=class extends Si{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xu,endingEnd:Xu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case qu:r=e,a=2*t-n;break;case Yu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case qu:o=e,c=2*n-t;break;case Yu:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),_=p*p,m=_*p,g=-d*m+2*d*_-d*p,b=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*p+1,M=(-1-f)*m+(1.5+f)*_+.5*p,x=f*m-f*_;for(let S=0;S!==a;++S)r[S]=g*o[u+S]+b*o[l+S]+M*o[c+S]+x*o[h+S];return r}},Fc=class extends Si{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}},Uc=class extends Si{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Oc=class extends Si{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(n-t)/(s-t),_=1-p;for(let m=0;m!==a;++m)r[m]=o[l+m]*_+o[c+m]*p;return r}let d=a*2,f=e-1;for(let p=0;p!==a;++p){let _=o[l+p],m=o[c+p],g=f*d+p*2,b=h[g],M=h[g+1],x=e*d+p*2,S=u[x],E=u[x+1],v=(n-t)/(s-t),y,w,R,A,I;for(let N=0;N<8;N++){y=v*v,w=y*v,R=1-v,A=R*R,I=A*R;let O=I*t+3*A*v*b+3*R*y*S+w*s-n;if(Math.abs(O)<1e-10)break;let G=3*A*(b-t)+6*R*v*(S-b)+3*y*(s-S);if(Math.abs(G)<1e-10)break;v=v-O/G,v=Math.max(0,Math.min(1,v))}r[p]=I*_+3*A*v*M+3*R*y*E+w*m}return r}},Nn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=rc(t,this.TimeBufferType),this.values=rc(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:rc(e.times,Array),values:rc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Uc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Oc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Us:t=this.InterpolantFactoryMethodDiscrete;break;case Os:t=this.InterpolantFactoryMethodLinear;break;case lc:t=this.InterpolantFactoryMethodSmooth;break;case Wu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return We("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Us;case this.InterpolantFactoryMethodLinear:return Os;case this.InterpolantFactoryMethodSmooth:return lc;case this.InterpolantFactoryMethodBezier:return Wu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Qe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Qe("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Qe("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&_x(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Qe("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===lc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{let h=a*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){let _=t[h+p];if(_!==t[d+p]||_!==t[f+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=Os;var Hi=class extends Nn{constructor(e,t,n){super(e,t,n)}};Hi.prototype.ValueTypeName="bool";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Us;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Yo=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};Yo.prototype.ValueTypeName="color";var Gi=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};Gi.prototype.ValueTypeName="number";var Bc=class extends Si{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let u=l+a;l!==u;l+=4)Pt.slerpFlat(r,0,o,l-a,o,l,c);return r}},Vi=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Bc(this.times,this.values,this.getValueSize(),e)}};Vi.prototype.ValueTypeName="quaternion";Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends Nn{constructor(e,t,n){super(e,t,n)}};Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Us;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};us.prototype.ValueTypeName="vector";var Zo=class{constructor(e="",t=-1,n=[],s=Pp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Kn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(D_(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Nn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let u=P_(c);c=ep(c,1,u),l=ep(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Gi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function N_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Gi;case"vector":case"vector2":case"vector3":case"vector4":return us;case"color":return Yo;case"quaternion":return Vi;case"bool":case"boolean":return Hi;case"string":return Wi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function D_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=N_(i.type);if(i.times===void 0){let t=[],n=[];L_(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var _i={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(tp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!tp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function tp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var zc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],p=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Jp=new zc,ci=class{constructor(e){this.manager=e!==void 0?e:Jp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ci.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ui={},eh=class extends Error{constructor(e,t){super(e),this.response=t}},qs=class extends ci{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=_i.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ui[e]!==void 0){Ui[e].push({onLoad:t,onProgress:n,onError:s});return}Ui[e]=[],Ui[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&We("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Ui[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,_=0,m=new ReadableStream({start(g){b();function b(){h.read().then(({done:M,value:x})=>{if(M)g.close();else{_+=x.byteLength;let S=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let E=0,v=u.length;E<v;E++){let y=u[E];y.onProgress&&y.onProgress(S)}g.enqueue(x),b()}},M=>{g.error(M)})}}});return new Response(m)}else throw new eh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{_i.add(`file:${e}`,l);let u=Ui[e];delete Ui[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{let u=Ui[e];if(u===void 0)throw this.manager.itemError(e),l;delete Ui[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ar=new WeakMap,kc=class extends ci{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=_i.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Ar.get(o);h===void 0&&(h=[],Ar.set(o,h)),h.push({onLoad:t,onError:s})}return o}let a=Nr("img");function c(){u(),t&&t(this);let h=Ar.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}Ar.delete(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),_i.remove(`image:${e}`);let d=Ar.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(h)}Ar.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),_i.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var li=class extends ci{constructor(e){super(e)}load(e,t,n,s){let r=new tn,o=new kc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},hs=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new me(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ko=class extends hs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ku=new Ke,np=new U,ip=new U,$o=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zr,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;np.setFromMatrixPosition(e.matrixWorld),t.position.copy(np),ip.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ip),t.updateMatrixWorld(),ku.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ku,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Lr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ku)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},oc=new U,ac=new Pt,gi=new U,Ys=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(oc,ac,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oc,ac,gi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(oc,ac,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oc,ac,gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},is=new U,sp=new Ee,rp=new Ee,en=class extends Ys{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(bo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,t){return this.getViewBounds(e,sp,rp),t.subVectors(rp,sp)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(bo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},th=class extends $o{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Bs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Jo=class extends hs{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new th}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},nh=class extends $o{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0}},ui=class extends hs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new nh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ds=class extends Ys{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ih=class extends $o{constructor(){super(new ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zs=class extends hs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new ih}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},jo=class extends hs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Xi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Hu=new WeakMap,Qo=class extends ci{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&We("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&We("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=_i.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{Hu.has(o)===!0?(s&&s(Hu.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){_i.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),Hu.set(c,l),_i.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});_i.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},cc,Ks=class{static getContext(){return cc===void 0&&(cc=new(window.AudioContext||window.webkitAudioContext)),cc}static setContext(e){cc=e}},ea=class extends ci{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new qs(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{let l=c.slice(0),u=Ks.getContext(),h=e+"#decode";r.manager.itemStart(h),u.decodeAudioData(l,function(d){t(d),r.manager.itemEnd(h)}).catch(function(d){a(d),r.manager.itemEnd(h)})}catch(l){a(l)}},n,s);function a(c){s?s(c):Qe(c),r.manager.itemError(e)}}};var Rr=-90,Cr=1,Hc=class extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(Rr,Cr,e,t);s.layers=this.layers,this.add(s);let r=new en(Rr,Cr,e,t);r.layers=this.layers,this.add(r);let o=new en(Rr,Cr,e,t);o.layers=this.layers,this.add(o);let a=new en(Rr,Cr,e,t);a.layers=this.layers,this.add(a);let c=new en(Rr,Cr,e,t);c.layers=this.layers,this.add(c);let l=new en(Rr,Cr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===oi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Gc=class extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Vc=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=F_.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function F_(){this._document.hidden===!1&&this.reset()}var ws=new U,Gu=new Pt,U_=new U,As=new U,Rs=new U,ta=class extends Lt{constructor(){super(),this.type="AudioListener",this.context=Ks.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new Vc}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();let t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(ws,Gu,U_),As.set(0,0,-1).applyQuaternion(Gu),Rs.set(0,1,0).applyQuaternion(Gu),t.positionX){let n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(ws.x,n),t.positionY.linearRampToValueAtTime(ws.y,n),t.positionZ.linearRampToValueAtTime(ws.z,n),t.forwardX.linearRampToValueAtTime(As.x,n),t.forwardY.linearRampToValueAtTime(As.y,n),t.forwardZ.linearRampToValueAtTime(As.z,n),t.upX.linearRampToValueAtTime(Rs.x,n),t.upY.linearRampToValueAtTime(Rs.y,n),t.upZ.linearRampToValueAtTime(Rs.z,n)}else t.setPosition(ws.x,ws.y,ws.z),t.setOrientation(As.x,As.y,As.z,Rs.x,Rs.y,Rs.z)}},Wc=class extends Lt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){We("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){We("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){We("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){We("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){We("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(We("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){We("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(We("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}},Cs=new U,op=new Pt,O_=new U,Is=new U,na=class extends Wc{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Cs,op,O_),Is.set(0,0,1).applyQuaternion(op);let t=this.panner;if(t.positionX){let n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Cs.x,n),t.positionY.linearRampToValueAtTime(Cs.y,n),t.positionZ.linearRampToValueAtTime(Cs.z,n),t.orientationX.linearRampToValueAtTime(Is.x,n),t.orientationY.linearRampToValueAtTime(Is.y,n),t.orientationZ.linearRampToValueAtTime(Is.z,n)}else t.setPosition(Cs.x,Cs.y,Cs.z),t.setOrientation(Is.x,Is.y,Is.z)}};var Ah="\\[\\]\\.:\\/",B_=new RegExp("["+Ah+"]","g"),Rh="[^"+Ah+"]",z_="[^"+Ah.replace("\\.","")+"]",k_=/((?:WC+[\/:])*)/.source.replace("WC",Rh),H_=/(WCOD+)?/.source.replace("WCOD",z_),G_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rh),V_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rh),W_=new RegExp("^"+k_+H_+G_+V_+"$"),X_=["material","materials","bones","map"],sh=class{constructor(e,t,n){let s=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},It=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(B_,"")}static parseTrackName(e){let t=W_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);X_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;Qe("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=sh;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var GA=new Float32Array(1);var rh=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function Ch(i,e,t,n){let s=q_(n);switch(t){case vh:return i*e;case jc:return i*e/s.components*s.byteLength;case Qc:return i*e/s.components*s.byteLength;case ms:return i*e*2/s.components*s.byteLength;case el:return i*e*2/s.components*s.byteLength;case Mh:return i*e*3/s.components*s.byteLength;case Vn:return i*e*4/s.components*s.byteLength;case tl:return i*e*4/s.components*s.byteLength;case oa:case aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ca:case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case il:case rl:return Math.max(i,16)*Math.max(e,8)/4;case nl:case sl:return Math.max(i,8)*Math.max(e,8)/2;case ol:case al:case ll:case ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cl:case ua:case hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case pl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ml:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case gl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case xl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case _l:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case yl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case vl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case bl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case El:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Tl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case wl:case Al:case Rl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Cl:case Il:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ha:case Pl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function q_(i){switch(i){case Dn:case gh:return{byteLength:1,components:1};case Yr:case xh:case Ti:return{byteLength:2,components:1};case $c:case Jc:return{byteLength:2,components:4};case fi:case Kc:case Gn:return{byteLength:4,components:1};case _h:case yh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function vm(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Z_(i){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],_=h[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let _=h[f];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var K_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$_=`#ifdef USE_ALPHAHASH
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
#endif`,J_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ey=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ty=`#ifdef USE_AOMAP
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
#endif`,ny=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iy=`#ifdef USE_BATCHING
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
#endif`,sy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ry=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ay=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cy=`#ifdef USE_IRIDESCENCE
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
#endif`,ly=`#ifdef USE_BUMPMAP
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
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,py=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,my=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_y=`#define PI 3.141592653589793
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
} // validated`,yy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vy=`vec3 transformedNormal = objectNormal;
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
#endif`,My=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,by=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ey=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ty="gl_FragColor = linearToOutputTexel( gl_FragColor );",wy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ay=`#ifdef USE_ENVMAP
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
#endif`,Ry=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cy=`#ifdef USE_ENVMAP
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
#endif`,Iy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Py=`#ifdef USE_ENVMAP
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
#endif`,Ly=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ny=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uy=`#ifdef USE_GRADIENTMAP
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
}`,Oy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,By=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ky=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Hy=`#ifdef USE_ENVMAP
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
#endif`,Gy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qy=`PhysicalMaterial material;
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
#endif`,Yy=`uniform sampler2D dfgLUT;
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
}`,Zy=`
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
#endif`,Ky=`#if defined( RE_IndirectDiffuse )
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
#endif`,$y=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jy=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,jy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ev=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rv=`#if defined( USE_POINTS_UV )
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
#endif`,ov=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,av=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hv=`#ifdef USE_MORPHTARGETS
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
#endif`,dv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_v=`#ifdef USE_NORMALMAP
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
#endif`,yv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ev=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Av=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dv=`float getShadowMask() {
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
}`,Fv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uv=`#ifdef USE_SKINNING
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
#endif`,Ov=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bv=`#ifdef USE_SKINNING
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
#endif`,zv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vv=`#ifdef USE_TRANSMISSION
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
#endif`,Wv=`#ifdef USE_TRANSMISSION
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
#endif`,Xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Kv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$v=`uniform sampler2D t2D;
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
}`,Jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`#include <common>
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
}`,nM=`#if DEPTH_PACKING == 3200
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
}`,iM=`#define DISTANCE
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
}`,sM=`#define DISTANCE
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
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aM=`uniform float scale;
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
}`,cM=`uniform vec3 diffuse;
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
}`,lM=`#include <common>
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
}`,uM=`uniform vec3 diffuse;
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
}`,hM=`#define LAMBERT
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
}`,dM=`#define LAMBERT
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
}`,fM=`#define MATCAP
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
}`,pM=`#define MATCAP
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
}`,mM=`#define NORMAL
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
}`,gM=`#define NORMAL
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
}`,xM=`#define PHONG
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
}`,_M=`#define PHONG
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
}`,yM=`#define STANDARD
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
}`,vM=`#define STANDARD
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
}`,MM=`#define TOON
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
}`,bM=`#define TOON
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
}`,SM=`uniform float size;
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
}`,EM=`uniform vec3 diffuse;
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
}`,TM=`#include <common>
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
}`,wM=`uniform vec3 color;
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
}`,AM=`uniform float rotation;
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
}`,RM=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:K_,alphahash_pars_fragment:$_,alphamap_fragment:J_,alphamap_pars_fragment:j_,alphatest_fragment:Q_,alphatest_pars_fragment:ey,aomap_fragment:ty,aomap_pars_fragment:ny,batching_pars_vertex:iy,batching_vertex:sy,begin_vertex:ry,beginnormal_vertex:oy,bsdfs:ay,iridescence_fragment:cy,bumpmap_pars_fragment:ly,clipping_planes_fragment:uy,clipping_planes_pars_fragment:hy,clipping_planes_pars_vertex:dy,clipping_planes_vertex:fy,color_fragment:py,color_pars_fragment:my,color_pars_vertex:gy,color_vertex:xy,common:_y,cube_uv_reflection_fragment:yy,defaultnormal_vertex:vy,displacementmap_pars_vertex:My,displacementmap_vertex:by,emissivemap_fragment:Sy,emissivemap_pars_fragment:Ey,colorspace_fragment:Ty,colorspace_pars_fragment:wy,envmap_fragment:Ay,envmap_common_pars_fragment:Ry,envmap_pars_fragment:Cy,envmap_pars_vertex:Iy,envmap_physical_pars_fragment:Hy,envmap_vertex:Py,fog_vertex:Ly,fog_pars_vertex:Ny,fog_fragment:Dy,fog_pars_fragment:Fy,gradientmap_pars_fragment:Uy,lightmap_pars_fragment:Oy,lights_lambert_fragment:By,lights_lambert_pars_fragment:zy,lights_pars_begin:ky,lights_toon_fragment:Gy,lights_toon_pars_fragment:Vy,lights_phong_fragment:Wy,lights_phong_pars_fragment:Xy,lights_physical_fragment:qy,lights_physical_pars_fragment:Yy,lights_fragment_begin:Zy,lights_fragment_maps:Ky,lights_fragment_end:$y,lightprobes_pars_fragment:Jy,logdepthbuf_fragment:jy,logdepthbuf_pars_fragment:Qy,logdepthbuf_pars_vertex:ev,logdepthbuf_vertex:tv,map_fragment:nv,map_pars_fragment:iv,map_particle_fragment:sv,map_particle_pars_fragment:rv,metalnessmap_fragment:ov,metalnessmap_pars_fragment:av,morphinstance_vertex:cv,morphcolor_vertex:lv,morphnormal_vertex:uv,morphtarget_pars_vertex:hv,morphtarget_vertex:dv,normal_fragment_begin:fv,normal_fragment_maps:pv,normal_pars_fragment:mv,normal_pars_vertex:gv,normal_vertex:xv,normalmap_pars_fragment:_v,clearcoat_normal_fragment_begin:yv,clearcoat_normal_fragment_maps:vv,clearcoat_pars_fragment:Mv,iridescence_pars_fragment:bv,opaque_fragment:Sv,packing:Ev,premultiplied_alpha_fragment:Tv,project_vertex:wv,dithering_fragment:Av,dithering_pars_fragment:Rv,roughnessmap_fragment:Cv,roughnessmap_pars_fragment:Iv,shadowmap_pars_fragment:Pv,shadowmap_pars_vertex:Lv,shadowmap_vertex:Nv,shadowmask_pars_fragment:Dv,skinbase_vertex:Fv,skinning_pars_vertex:Uv,skinning_vertex:Ov,skinnormal_vertex:Bv,specularmap_fragment:zv,specularmap_pars_fragment:kv,tonemapping_fragment:Hv,tonemapping_pars_fragment:Gv,transmission_fragment:Vv,transmission_pars_fragment:Wv,uv_pars_fragment:Xv,uv_pars_vertex:qv,uv_vertex:Yv,worldpos_vertex:Zv,background_vert:Kv,background_frag:$v,backgroundCube_vert:Jv,backgroundCube_frag:jv,cube_vert:Qv,cube_frag:eM,depth_vert:tM,depth_frag:nM,distance_vert:iM,distance_frag:sM,equirect_vert:rM,equirect_frag:oM,linedashed_vert:aM,linedashed_frag:cM,meshbasic_vert:lM,meshbasic_frag:uM,meshlambert_vert:hM,meshlambert_frag:dM,meshmatcap_vert:fM,meshmatcap_frag:pM,meshnormal_vert:mM,meshnormal_frag:gM,meshphong_vert:xM,meshphong_frag:_M,meshphysical_vert:yM,meshphysical_frag:vM,meshtoon_vert:MM,meshtoon_frag:bM,points_vert:SM,points_frag:EM,shadow_vert:TM,shadow_frag:wM,sprite_vert:AM,sprite_frag:RM},Be={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Ai={basic:{uniforms:Sn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Sn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new me(0)},envMapIntensity:{value:1}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Sn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Sn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Sn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new me(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Sn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Sn([Be.points,Be.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Sn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Sn([Be.common,Be.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Sn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Sn([Be.sprite,Be.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distance:{uniforms:Sn([Be.common,Be.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distance_vert,fragmentShader:lt.distance_frag},shadow:{uniforms:Sn([Be.lights,Be.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Ai.physical={uniforms:Sn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var Dl={r:0,b:0,g:0},CM=new Ke,Mm=new st;Mm.set(-1,0,0,0,1,0,0,0,1);function IM(i,e,t,n,s,r){let o=new me(0),a=s===!0?0:1,c,l,u=null,h=0,d=null;function f(b){let M=b.isScene===!0?b.background:null;if(M&&M.isTexture){let x=b.backgroundBlurriness>0;M=e.get(M,x)}return M}function p(b){let M=!1,x=f(b);x===null?m(o,a):x&&x.isColor&&(m(x,1),M=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(b,M){let x=f(M);x&&(x.isCubeTexture||x.mapping===ra)?(l===void 0&&(l=new He(new et(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:js(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,E,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(CM.makeRotationFromEuler(M.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Mm),l.material.toneMapped=ht.getTransfer(x.colorSpace)!==vt,(u!==x||h!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,h=x.version,d=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new He(new Ot(2,2),new Cn({name:"BackgroundMaterial",uniforms:js(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ht.getTransfer(x.colorSpace)!==vt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||h!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,h=x.version,d=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,M){b.getRGB(Dl,wh(i)),t.buffers.color.setClear(Dl.r,Dl.g,Dl.b,M,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(o,a)},render:p,addToRenderList:_,dispose:g}}function PM(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(A,I,N,B,O){let G=!1,V=h(A,B,N,I);r!==V&&(r=V,l(r.object)),G=f(A,B,N,O),G&&p(A,B,N,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,x(A,I,N,B),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return i.createVertexArray()}function l(A){return i.bindVertexArray(A)}function u(A){return i.deleteVertexArray(A)}function h(A,I,N,B){let O=B.wireframe===!0,G=n[I.id];G===void 0&&(G={},n[I.id]=G);let V=A.isInstancedMesh===!0?A.id:0,ee=G[V];ee===void 0&&(ee={},G[V]=ee);let ae=ee[N.id];ae===void 0&&(ae={},ee[N.id]=ae);let de=ae[O];return de===void 0&&(de=d(c()),ae[O]=de),de}function d(A){let I=[],N=[],B=[];for(let O=0;O<t;O++)I[O]=0,N[O]=0,B[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:B,object:A,attributes:{},index:null}}function f(A,I,N,B){let O=r.attributes,G=I.attributes,V=0,ee=N.getAttributes();for(let ae in ee)if(ee[ae].location>=0){let W=O[ae],Q=G[ae];if(Q===void 0&&(ae==="instanceMatrix"&&A.instanceMatrix&&(Q=A.instanceMatrix),ae==="instanceColor"&&A.instanceColor&&(Q=A.instanceColor)),W===void 0||W.attribute!==Q||Q&&W.data!==Q.data)return!0;V++}return r.attributesNum!==V||r.index!==B}function p(A,I,N,B){let O={},G=I.attributes,V=0,ee=N.getAttributes();for(let ae in ee)if(ee[ae].location>=0){let W=G[ae];W===void 0&&(ae==="instanceMatrix"&&A.instanceMatrix&&(W=A.instanceMatrix),ae==="instanceColor"&&A.instanceColor&&(W=A.instanceColor));let Q={};Q.attribute=W,W&&W.data&&(Q.data=W.data),O[ae]=Q,V++}r.attributes=O,r.attributesNum=V,r.index=B}function _(){let A=r.newAttributes;for(let I=0,N=A.length;I<N;I++)A[I]=0}function m(A){g(A,0)}function g(A,I){let N=r.newAttributes,B=r.enabledAttributes,O=r.attributeDivisors;N[A]=1,B[A]===0&&(i.enableVertexAttribArray(A),B[A]=1),O[A]!==I&&(i.vertexAttribDivisor(A,I),O[A]=I)}function b(){let A=r.newAttributes,I=r.enabledAttributes;for(let N=0,B=I.length;N<B;N++)I[N]!==A[N]&&(i.disableVertexAttribArray(N),I[N]=0)}function M(A,I,N,B,O,G,V){V===!0?i.vertexAttribIPointer(A,I,N,O,G):i.vertexAttribPointer(A,I,N,B,O,G)}function x(A,I,N,B){_();let O=B.attributes,G=N.getAttributes(),V=I.defaultAttributeValues;for(let ee in G){let ae=G[ee];if(ae.location>=0){let de=O[ee];if(de===void 0&&(ee==="instanceMatrix"&&A.instanceMatrix&&(de=A.instanceMatrix),ee==="instanceColor"&&A.instanceColor&&(de=A.instanceColor)),de!==void 0){let W=de.normalized,Q=de.itemSize,ue=e.get(de);if(ue===void 0)continue;let _e=ue.buffer,Te=ue.type,Z=ue.bytesPerElement,te=Te===i.INT||Te===i.UNSIGNED_INT||de.gpuType===Kc;if(de.isInterleavedBufferAttribute){let j=de.data,ye=j.stride,Me=de.offset;if(j.isInstancedInterleavedBuffer){for(let be=0;be<ae.locationSize;be++)g(ae.location+be,j.meshPerAttribute);A.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let be=0;be<ae.locationSize;be++)m(ae.location+be);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let be=0;be<ae.locationSize;be++)M(ae.location+be,Q/ae.locationSize,Te,W,ye*Z,(Me+Q/ae.locationSize*be)*Z,te)}else{if(de.isInstancedBufferAttribute){for(let j=0;j<ae.locationSize;j++)g(ae.location+j,de.meshPerAttribute);A.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let j=0;j<ae.locationSize;j++)m(ae.location+j);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let j=0;j<ae.locationSize;j++)M(ae.location+j,Q/ae.locationSize,Te,W,Q*Z,Q/ae.locationSize*j*Z,te)}}else if(V!==void 0){let W=V[ee];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(ae.location,W);break;case 3:i.vertexAttrib3fv(ae.location,W);break;case 4:i.vertexAttrib4fv(ae.location,W);break;default:i.vertexAttrib1fv(ae.location,W)}}}}b()}function S(){w();for(let A in n){let I=n[A];for(let N in I){let B=I[N];for(let O in B){let G=B[O];for(let V in G)u(G[V].object),delete G[V];delete B[O]}}delete n[A]}}function E(A){if(n[A.id]===void 0)return;let I=n[A.id];for(let N in I){let B=I[N];for(let O in B){let G=B[O];for(let V in G)u(G[V].object),delete G[V];delete B[O]}}delete n[A.id]}function v(A){for(let I in n){let N=n[I];for(let B in N){let O=N[B];if(O[A.id]===void 0)continue;let G=O[A.id];for(let V in G)u(G[V].object),delete G[V];delete O[A.id]}}}function y(A){for(let I in n){let N=n[I],B=A.isInstancedMesh===!0?A.id:0,O=N[B];if(O!==void 0){for(let G in O){let V=O[G];for(let ee in V)u(V[ee].object),delete V[ee];delete O[G]}delete N[B],Object.keys(N).length===0&&delete n[I]}}}function w(){R(),o=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:v,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function LM(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let d=0;for(let f=0;f<u;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function NM(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==Vn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let y=v===Ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==Dn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&v!==Gn&&!y)}function c(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(We("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:x,maxSamples:S,samples:E}}function DM(i){let e=this,t=null,n=0,s=!1,r=!1,o=new xi,a=new st,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,g=i.get(h);if(!s||p===null||p.length===0||r&&!m)r?u(null):l();else{let b=r?0:n,M=b*4,x=g.clippingState||null;c.value=x,x=u(p,d,M,f);for(let S=0;S!==M;++S)x[S]=t[S];g.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=c.value,p!==!0||m===null){let g=f+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,x=f;M!==_;++M,x+=4)o.copy(h[M]).applyMatrix4(b,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var gs=4,jp=[.125,.215,.35,.446,.526,.582],Qs=20,FM=256,pa=new ds,Qp=new me,Ih=null,Ph=0,Lh=0,Nh=!1,UM=new U,Ul=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=UM}=r;Ih=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ih,Ph,Lh),this._renderer.xr.enabled=Nh,e.scissorTest=!1,$r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fs||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ih=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Ti,format:Vn,colorSpace:An,depthBuffer:!1},s=em(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=em(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=OM(r)),this._blurMaterial=zM(r,e,t),this._ggxMaterial=BM(r,e,t)}return s}_compileMaterial(e){let t=new He(new pt,e);this._renderer.compile(t,pa)}_sceneToCubeUV(e,t,n,s,r){let c=new en(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Qp),h.toneMapping=hi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new He(new et,new pn({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,g=!1,b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,g=!0):(m.color.copy(Qp),g=!0);for(let M=0;M<6;M++){let x=M%3;x===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[M],r.y,r.z)):x===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[M]));let S=this._cubeSize;$r(s,x*S,M>2?S:0,S,S),h.setRenderTarget(s),g&&h.render(_,c),h.render(e,c)}h.toneMapping=f,h.autoClear=d,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===fs||e.mapping===$s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;$r(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,pa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=0+l*1.25,f=h*d,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-gs?n-p+gs:0),g=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=p-t,$r(r,m,g,3*_,2*_),s.setRenderTarget(r),s.render(a,pa),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,$r(e,m,g,3*_,2*_),s.setRenderTarget(e),s.render(a,pa)}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");let u=3,h=this._lodMeshes[s];h.material=l;let d=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Qs-1),_=r/p,m=isFinite(r)?1+Math.floor(u*_):Qs;m>Qs&&We(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qs}`);let g=[],b=0;for(let v=0;v<Qs;++v){let y=v/_,w=Math.exp(-y*y/2);g.push(w),v===0?b+=w:v<m&&(b+=2*w)}for(let v=0;v<g.length;v++)g[v]=g[v]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=p,d.mipInt.value=M-n;let x=this._sizeLods[s],S=3*x*(s>M-gs?s-M+gs:0),E=4*(this._cubeSize-x);$r(t,S,E,3*x,2*x),c.setRenderTarget(t),c.render(h,pa)}};function OM(i){let e=[],t=[],n=[],s=i,r=i-gs+1+jp.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-gs?c=jp[o-i+gs-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,_=3,m=2,g=1,b=new Float32Array(_*p*f),M=new Float32Array(m*p*f),x=new Float32Array(g*p*f);for(let E=0;E<f;E++){let v=E%3*2/3-1,y=E>2?0:-1,w=[v,y,0,v+2/3,y,0,v+2/3,y+1,0,v,y,0,v+2/3,y+1,0,v,y+1,0];b.set(w,_*p*E),M.set(d,m*p*E);let R=[E,E,E,E,E,E];x.set(R,g*p*E)}let S=new pt;S.setAttribute("position",new Dt(b,_)),S.setAttribute("uv",new Dt(M,m)),S.setAttribute("faceIndex",new Dt(x,g)),n.push(new He(S,null)),s>gs&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function em(i,e,t){let n=new kn(i,e,t);return n.texture.mapping=ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $r(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function BM(i,e,t){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:FM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zl(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function zM(i,e,t){let n=new Float32Array(Qs),s=new U(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zl(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function tm(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zl(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function nm(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function zl(){return`

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
	`}var Ol=class extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Uo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new et(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:Ei});r.uniforms.tEquirect.value=t;let o=new He(s,r),a=t.minFilter;return t.minFilter===di&&(t.minFilter=qt),new Hc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function kM(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===qc||f===Yc)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let _=new Ol(p.height);return _.fromEquirectangularTexture(i,d),e.set(d,_),d.addEventListener("dispose",l),a(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,p=f===qc||f===Yc,_=f===fs||f===$s;if(p||_){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Ul(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let b=d.image;return p&&b&&b.height>0||_&&b&&c(b)?(n===null&&(n=new Ul(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,f){return f===qc?d.mapping=fs:f===Yc&&(d.mapping=$s),d}function c(d){let f=0,p=6;for(let _=0;_<p;_++)d[_]!==void 0&&f++;return f===p}function l(d){let f=d.target;f.removeEventListener("dispose",l);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function HM(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ns("WebGLRenderer: "+n+" extension not supported."),s}}}function GM(i,e,t,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(h){let d=[],f=h.index,p=h.attributes.position,_=0;if(p===void 0)return;if(f!==null){let b=f.array;_=f.version;for(let M=0,x=b.length;M<x;M+=3){let S=b[M+0],E=b[M+1],v=b[M+2];d.push(S,E,E,v,v,S)}}else{let b=p.array;_=p.version;for(let M=0,x=b.length/3-1;M<x;M+=3){let S=M+0,E=M+1,v=M+2;d.push(S,E,E,v,v,S)}}let m=new(p.count>=65535?Lo:Po)(d,1);m.version=_;let g=r.get(h);g&&e.remove(g),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function VM(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,d){i.drawElements(n,d,r,h*o),t.update(d,n,1)}function l(h,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,h*o,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,f);let _=0;for(let m=0;m<f;m++)_+=d[m];t.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function WM(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Qe("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function XM(i,e,t){let n=new WeakMap,s=new St;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let w=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],M=0;f===!0&&(M=1),p===!0&&(M=2),_===!0&&(M=3);let x=a.attributes.position.count*M,S=1;x>e.maxTextureSize&&(S=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let E=new Float32Array(x*S*4*h),v=new Ro(E,x,S,h);v.type=Gn,v.needsUpdate=!0;let y=M*4;for(let R=0;R<h;R++){let A=m[R],I=g[R],N=b[R],B=x*S*4*R;for(let O=0;O<A.count;O++){let G=O*y;f===!0&&(s.fromBufferAttribute(A,O),E[B+G+0]=s.x,E[B+G+1]=s.y,E[B+G+2]=s.z,E[B+G+3]=0),p===!0&&(s.fromBufferAttribute(I,O),E[B+G+4]=s.x,E[B+G+5]=s.y,E[B+G+6]=s.z,E[B+G+7]=0),_===!0&&(s.fromBufferAttribute(N,O),E[B+G+8]=s.x,E[B+G+9]=s.y,E[B+G+10]=s.z,E[B+G+11]=N.itemSize===4?s.w:1)}}d={count:h,texture:v,size:new Ee(x,S)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let p=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function qM(i,e,t,n,s){let r=new WeakMap;function o(l){let u=s.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var YM={[lh]:"LINEAR_TONE_MAPPING",[uh]:"REINHARD_TONE_MAPPING",[hh]:"CINEON_TONE_MAPPING",[sa]:"ACES_FILMIC_TONE_MAPPING",[fh]:"AGX_TONE_MAPPING",[ph]:"NEUTRAL_TONE_MAPPING",[dh]:"CUSTOM_TONE_MAPPING"};function ZM(i,e,t,n,s,r){let o=new kn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new ki(e,t):void 0}),a=new kn(e,t,{type:Ti,depthBuffer:!1,stencilBuffer:!1}),c=new pt;c.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new je([0,2,0,0,2,0],2));let l=new Wr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new He(c,l),h=new ds(-1,1,1,-1,0,1),d=null,f=null,p=!1,_,m=null,g=[],b=!1;this.setSize=function(M,x){o.setSize(M,x),a.setSize(M,x);for(let S=0;S<g.length;S++){let E=g[S];E.setSize&&E.setSize(M,x)}},this.setEffects=function(M){g=M,b=g.length>0&&g[0].isRenderPass===!0;let x=o.width,S=o.height;for(let E=0;E<g.length;E++){let v=g[E];v.setSize&&v.setSize(x,S)}},this.begin=function(M,x){if(p||M.toneMapping===hi&&g.length===0)return!1;if(m=x,x!==null){let S=x.width,E=x.height;(o.width!==S||o.height!==E)&&this.setSize(S,E)}return b===!1&&M.setRenderTarget(o),_=M.toneMapping,M.toneMapping=hi,!0},this.hasRenderPass=function(){return b},this.end=function(M,x){M.toneMapping=_,p=!0;let S=o,E=a;for(let v=0;v<g.length;v++){let y=g[v];if(y.enabled!==!1&&(y.render(M,E,S,x),y.needsSwap!==!1)){let w=S;S=E,E=w}}if(d!==M.outputColorSpace||f!==M.toneMapping){d=M.outputColorSpace,f=M.toneMapping,l.defines={},ht.getTransfer(d)===vt&&(l.defines.SRGB_TRANSFER="");let v=YM[f];v&&(l.defines[v]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,M.setRenderTarget(m),M.render(u,h),m=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}var bm=new tn,Uh=new ki(1,1),Sm=new Ro,Em=new bc,Tm=new Uo,im=[],sm=[],rm=new Float32Array(16),om=new Float32Array(9),am=new Float32Array(4);function jr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=im[s];if(r===void 0&&(r=new Float32Array(s),im[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function rn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function on(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function kl(i,e){let t=sm[e];t===void 0&&(t=new Int32Array(e),sm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function KM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function $M(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2fv(this.addr,e),on(t,e)}}function JM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;i.uniform3fv(this.addr,e),on(t,e)}}function jM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4fv(this.addr,e),on(t,e)}}function QM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(rn(t,n))return;am.set(n),i.uniformMatrix2fv(this.addr,!1,am),on(t,n)}}function eb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(rn(t,n))return;om.set(n),i.uniformMatrix3fv(this.addr,!1,om),on(t,n)}}function tb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(rn(t,n))return;rm.set(n),i.uniformMatrix4fv(this.addr,!1,rm),on(t,n)}}function nb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ib(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2iv(this.addr,e),on(t,e)}}function sb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3iv(this.addr,e),on(t,e)}}function rb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4iv(this.addr,e),on(t,e)}}function ob(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ab(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2uiv(this.addr,e),on(t,e)}}function cb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3uiv(this.addr,e),on(t,e)}}function lb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4uiv(this.addr,e),on(t,e)}}function ub(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Uh.compareFunction=t.isReversedDepthBuffer()?Nl:Ll,r=Uh):r=bm,t.setTexture2D(e||r,s)}function hb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Em,s)}function db(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Tm,s)}function fb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Sm,s)}function pb(i){switch(i){case 5126:return KM;case 35664:return $M;case 35665:return JM;case 35666:return jM;case 35674:return QM;case 35675:return eb;case 35676:return tb;case 5124:case 35670:return nb;case 35667:case 35671:return ib;case 35668:case 35672:return sb;case 35669:case 35673:return rb;case 5125:return ob;case 36294:return ab;case 36295:return cb;case 36296:return lb;case 35678:case 36198:case 36298:case 36306:case 35682:return ub;case 35679:case 36299:case 36307:return hb;case 35680:case 36300:case 36308:case 36293:return db;case 36289:case 36303:case 36311:case 36292:return fb}}function mb(i,e){i.uniform1fv(this.addr,e)}function gb(i,e){let t=jr(e,this.size,2);i.uniform2fv(this.addr,t)}function xb(i,e){let t=jr(e,this.size,3);i.uniform3fv(this.addr,t)}function _b(i,e){let t=jr(e,this.size,4);i.uniform4fv(this.addr,t)}function yb(i,e){let t=jr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function vb(i,e){let t=jr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Mb(i,e){let t=jr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function bb(i,e){i.uniform1iv(this.addr,e)}function Sb(i,e){i.uniform2iv(this.addr,e)}function Eb(i,e){i.uniform3iv(this.addr,e)}function Tb(i,e){i.uniform4iv(this.addr,e)}function wb(i,e){i.uniform1uiv(this.addr,e)}function Ab(i,e){i.uniform2uiv(this.addr,e)}function Rb(i,e){i.uniform3uiv(this.addr,e)}function Cb(i,e){i.uniform4uiv(this.addr,e)}function Ib(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Uh:o=bm;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Pb(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Em,r[o])}function Lb(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Tm,r[o])}function Nb(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Sm,r[o])}function Db(i){switch(i){case 5126:return mb;case 35664:return gb;case 35665:return xb;case 35666:return _b;case 35674:return yb;case 35675:return vb;case 35676:return Mb;case 5124:case 35670:return bb;case 35667:case 35671:return Sb;case 35668:case 35672:return Eb;case 35669:case 35673:return Tb;case 5125:return wb;case 36294:return Ab;case 36295:return Rb;case 36296:return Cb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ib;case 35679:case 36299:case 36307:return Pb;case 35680:case 36300:case 36308:case 36293:return Lb;case 36289:case 36303:case 36311:case 36292:return Nb}}var Oh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=pb(t.type)}},Bh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Db(t.type)}},zh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Dh=/(\w+)(\])?(\[|\.)?/g;function cm(i,e){i.seq.push(e),i.map[e.id]=e}function Fb(i,e,t){let n=i.name,s=n.length;for(Dh.lastIndex=0;;){let r=Dh.exec(n),o=Dh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){cm(t,l===void 0?new Oh(a,i,e):new Bh(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new zh(a),cm(t,h)),t=h}}}var Jr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Fb(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function lm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ub=37297,Ob=0;function Bb(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var um=new st;function zb(i){ht._getMatrix(um,ht.workingColorSpace,i);let e=`mat3( ${um.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case wo:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function hm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Bb(i.getShaderSource(e),a)}else return r}function kb(i,e){let t=zb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Hb={[lh]:"Linear",[uh]:"Reinhard",[hh]:"Cineon",[sa]:"ACESFilmic",[fh]:"AgX",[ph]:"Neutral",[dh]:"Custom"};function Gb(i,e){let t=Hb[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Fl=new U;function Vb(){ht.getLuminanceCoefficients(Fl);let i=Fl.x.toFixed(4),e=Fl.y.toFixed(4),t=Fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function Xb(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qb(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ga(i){return i!==""}function dm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Yb=/^[ \t]*#include +<([\w\d./]+)>/gm;function kh(i){return i.replace(Yb,Kb)}var Zb=new Map;function Kb(i,e){let t=lt[e];if(t===void 0){let n=Zb.get(e);if(n!==void 0)t=lt[n],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return kh(t)}var $b=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pm(i){return i.replace($b,Jb)}function Jb(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var jb={[ia]:"SHADOWMAP_TYPE_PCF",[Xr]:"SHADOWMAP_TYPE_VSM"};function Qb(i){return jb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var eS={[fs]:"ENVMAP_TYPE_CUBE",[$s]:"ENVMAP_TYPE_CUBE",[ra]:"ENVMAP_TYPE_CUBE_UV"};function tS(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":eS[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var nS={[$s]:"ENVMAP_MODE_REFRACTION"};function iS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":nS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var sS={[Xc]:"ENVMAP_BLENDING_MULTIPLY",[Rp]:"ENVMAP_BLENDING_MIX",[Cp]:"ENVMAP_BLENDING_ADD"};function rS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":sS[i.combine]||"ENVMAP_BLENDING_NONE"}function oS(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function aS(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Qb(t),l=tS(t),u=iS(t),h=rS(t),d=oS(t),f=Wb(t),p=Xb(r),_=s.createProgram(),m,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ga).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ga).join(`
`),g.length>0&&(g+=`
`)):(m=[mm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),g=[mm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?lt.tonemapping_pars_fragment:"",t.toneMapping!==hi?Gb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,kb("linearToOutputTexel",t.outputColorSpace),Vb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ga).join(`
`)),o=kh(o),o=dm(o,t),o=fm(o,t),a=kh(a),a=dm(a,t),a=fm(a,t),o=pm(o),a=pm(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let M=b+m+o,x=b+g+a,S=lm(s,s.VERTEX_SHADER,M),E=lm(s,s.FRAGMENT_SHADER,x);s.attachShader(_,S),s.attachShader(_,E),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function v(A){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(_)||"",N=s.getShaderInfoLog(S)||"",B=s.getShaderInfoLog(E)||"",O=I.trim(),G=N.trim(),V=B.trim(),ee=!0,ae=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,S,E);else{let de=hm(s,S,"vertex"),W=hm(s,E,"fragment");Qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+O+`
`+de+`
`+W)}else O!==""?We("WebGLProgram: Program Info Log:",O):(G===""||V==="")&&(ae=!1);ae&&(A.diagnostics={runnable:ee,programLog:O,vertexShader:{log:G,prefix:m},fragmentShader:{log:V,prefix:g}})}s.deleteShader(S),s.deleteShader(E),y=new Jr(s,_),w=qb(s,_)}let y;this.getUniforms=function(){return y===void 0&&v(this),y};let w;this.getAttributes=function(){return w===void 0&&v(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(_,Ub)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ob++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=E,this}var cS=0,Hh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Gh(e),t.set(e,n)),n}},Gh=class{constructor(e){this.id=cS++,this.code=e,this.usedTimes=0}};function lS(i){return i===ms||i===ua||i===ha}function uS(i,e,t,n,s,r){let o=new Co,a=new Hh,c=new Set,l=[],u=new Map,h=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function _(y,w,R,A,I,N){let B=A.fog,O=I.geometry,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?A.environment:null,V=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,ee=e.get(y.envMap||G,V),ae=ee&&ee.mapping===ra?ee.image.height:null,de=f[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&We("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let W=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Q=W!==void 0?W.length:0,ue=0;O.morphAttributes.position!==void 0&&(ue=1),O.morphAttributes.normal!==void 0&&(ue=2),O.morphAttributes.color!==void 0&&(ue=3);let _e,Te,Z,te;if(de){let Oe=Ai[de];_e=Oe.vertexShader,Te=Oe.fragmentShader}else{_e=y.vertexShader,Te=y.fragmentShader;let Oe=a.getVertexShaderStage(y),ot=a.getFragmentShaderStage(y);a.update(y,Oe,ot),Z=Oe.id,te=ot.id}let j=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Me=I.isInstancedMesh===!0,be=I.isBatchedMesh===!0,he=!!y.map,we=!!y.matcap,H=!!ee,K=!!y.aoMap,oe=!!y.lightMap,fe=!!y.bumpMap&&y.wireframe===!1,ge=!!y.normalMap,Fe=!!y.displacementMap,se=!!y.emissiveMap,pe=!!y.metalnessMap,Ie=!!y.roughnessMap,F=y.anisotropy>0,Ae=y.clearcoat>0,De=y.dispersion>0,P=y.iridescence>0,T=y.sheen>0,L=y.transmission>0,D=F&&!!y.anisotropyMap,z=Ae&&!!y.clearcoatMap,X=Ae&&!!y.clearcoatNormalMap,ne=Ae&&!!y.clearcoatRoughnessMap,q=P&&!!y.iridescenceMap,re=P&&!!y.iridescenceThicknessMap,Se=T&&!!y.sheenColorMap,Ue=T&&!!y.sheenRoughnessMap,Le=!!y.specularMap,Pe=!!y.specularColorMap,Ge=!!y.specularIntensityMap,qe=L&&!!y.transmissionMap,xe=L&&!!y.thicknessMap,k=!!y.gradientMap,ve=!!y.alphaMap,ce=y.alphaTest>0,Re=!!y.alphaHash,Ce=!!y.extensions,le=hi;y.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(le=i.toneMapping);let Ne={shaderID:de,shaderType:y.type,shaderName:y.name,vertexShader:_e,fragmentShader:Te,defines:y.defines,customVertexShaderID:Z,customFragmentShaderID:te,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:be,batchingColor:be&&I._colorsTexture!==null,instancing:Me,instancingColor:Me&&I.instanceColor!==null,instancingMorph:Me&&I.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:he,matcap:we,envMap:H,envMapMode:H&&ee.mapping,envMapCubeUVHeight:ae,aoMap:K,lightMap:oe,bumpMap:fe,normalMap:ge,displacementMap:Fe,emissiveMap:se,normalMapObjectSpace:ge&&y.normalMapType===Np,normalMapTangentSpace:ge&&y.normalMapType===fa,packedNormalMap:ge&&y.normalMapType===fa&&lS(y.normalMap.format),metalnessMap:pe,roughnessMap:Ie,anisotropy:F,anisotropyMap:D,clearcoat:Ae,clearcoatMap:z,clearcoatNormalMap:X,clearcoatRoughnessMap:ne,dispersion:De,iridescence:P,iridescenceMap:q,iridescenceThicknessMap:re,sheen:T,sheenColorMap:Se,sheenRoughnessMap:Ue,specularMap:Le,specularColorMap:Pe,specularIntensityMap:Ge,transmission:L,transmissionMap:qe,thicknessMap:xe,gradientMap:k,opaque:y.transparent===!1&&y.blending===Ds&&y.alphaToCoverage===!1,alphaMap:ve,alphaTest:ce,alphaHash:Re,combine:y.combine,mapUv:he&&p(y.map.channel),aoMapUv:K&&p(y.aoMap.channel),lightMapUv:oe&&p(y.lightMap.channel),bumpMapUv:fe&&p(y.bumpMap.channel),normalMapUv:ge&&p(y.normalMap.channel),displacementMapUv:Fe&&p(y.displacementMap.channel),emissiveMapUv:se&&p(y.emissiveMap.channel),metalnessMapUv:pe&&p(y.metalnessMap.channel),roughnessMapUv:Ie&&p(y.roughnessMap.channel),anisotropyMapUv:D&&p(y.anisotropyMap.channel),clearcoatMapUv:z&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:X&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:re&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&p(y.sheenRoughnessMap.channel),specularMapUv:Le&&p(y.specularMap.channel),specularColorMapUv:Pe&&p(y.specularColorMap.channel),specularIntensityMapUv:Ge&&p(y.specularIntensityMap.channel),transmissionMapUv:qe&&p(y.transmissionMap.channel),thicknessMapUv:xe&&p(y.thicknessMap.channel),alphaMapUv:ve&&p(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ge||F),vertexNormals:!!O.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!O.attributes.uv&&(he||ve),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||O.attributes.normal===void 0&&ge===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ye,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ue,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:he&&y.map.isVideoTexture===!0&&ht.getTransfer(y.map.colorSpace)===vt,decodeVideoTextureEmissive:se&&y.emissiveMap.isVideoTexture===!0&&ht.getTransfer(y.emissiveMap.colorSpace)===vt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ft,flipSided:y.side===mn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ce&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&y.extensions.multiDraw===!0||be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function m(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)w.push(R),w.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(g(w,y),b(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function g(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function b(y,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function M(y){let w=f[y.type],R;if(w){let A=Ai[w];R=$p.clone(A.uniforms)}else R=y.uniforms;return R}function x(y,w){let R=u.get(w);return R!==void 0?++R.usedTimes:(R=new aS(i,w,y,s),l.push(R),u.set(w,R)),R}function S(y){if(--y.usedTimes===0){let w=l.indexOf(y);l[w]=l[l.length-1],l.pop(),u.delete(y.cacheKey),y.destroy()}}function E(y){a.remove(y)}function v(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:M,acquireProgram:x,releaseProgram:S,releaseShaderCache:E,programs:l,dispose:v}}function hS(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function dS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function gm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function xm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,_,m,g){let b=i[e];return b===void 0?(b={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:g},i[e]=b):(b.id=d.id,b.object=d,b.geometry=f,b.material=p,b.materialVariant=o(d),b.groupOrder=_,b.renderOrder=d.renderOrder,b.z=m,b.group=g),e++,b}function c(d,f,p,_,m,g){let b=a(d,f,p,_,m,g);p.transmission>0?n.push(b):p.transparent===!0?s.push(b):t.push(b)}function l(d,f,p,_,m,g){let b=a(d,f,p,_,m,g);p.transmission>0?n.unshift(b):p.transparent===!0?s.unshift(b):t.unshift(b)}function u(d,f,p){t.length>1&&t.sort(d||dS),n.length>1&&n.sort(f||gm),s.length>1&&s.sort(f||gm),p&&(t.reverse(),n.reverse(),s.reverse())}function h(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function fS(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new xm,i.set(n,[o])):s>=r.length?(o=new xm,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function pS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new me};break;case"SpotLight":t={position:new U,direction:new U,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function mS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var gS=0;function xS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _S(i){let e=new pS,t=mS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let s=new U,r=new Ke,o=new Ke;function a(l){let u=0,h=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,b=0,M=0,x=0,S=0,E=0,v=0;l.sort(xS);for(let w=0,R=l.length;w<R;w++){let A=l[w],I=A.color,N=A.intensity,B=A.distance,O=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===ms?O=A.shadow.map.texture:O=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)u+=I.r*N,h+=I.g*N,d+=I.b*N;else if(A.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(A.sh.coefficients[G],N);v++}else if(A.isDirectionalLight){let G=e.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let V=A.shadow,ee=t.get(A);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,n.directionalShadow[f]=ee,n.directionalShadowMap[f]=O,n.directionalShadowMatrix[f]=A.shadow.matrix,b++}n.directional[f]=G,f++}else if(A.isSpotLight){let G=e.get(A);G.position.setFromMatrixPosition(A.matrixWorld),G.color.copy(I).multiplyScalar(N),G.distance=B,G.coneCos=Math.cos(A.angle),G.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),G.decay=A.decay,n.spot[_]=G;let V=A.shadow;if(A.map&&(n.spotLightMap[S]=A.map,S++,V.updateMatrices(A),A.castShadow&&E++),n.spotLightMatrix[_]=V.matrix,A.castShadow){let ee=t.get(A);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,n.spotShadow[_]=ee,n.spotShadowMap[_]=O,x++}_++}else if(A.isRectAreaLight){let G=e.get(A);G.color.copy(I).multiplyScalar(N),G.halfWidth.set(A.width*.5,0,0),G.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=G,m++}else if(A.isPointLight){let G=e.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),G.distance=A.distance,G.decay=A.decay,A.castShadow){let V=A.shadow,ee=t.get(A);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,ee.shadowCameraNear=V.camera.near,ee.shadowCameraFar=V.camera.far,n.pointShadow[p]=ee,n.pointShadowMap[p]=O,n.pointShadowMatrix[p]=A.shadow.matrix,M++}n.point[p]=G,p++}else if(A.isHemisphereLight){let G=e.get(A);G.skyColor.copy(A.color).multiplyScalar(N),G.groundColor.copy(A.groundColor).multiplyScalar(N),n.hemi[g]=G,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Be.LTC_FLOAT_1,n.rectAreaLTC2=Be.LTC_FLOAT_2):(n.rectAreaLTC1=Be.LTC_HALF_1,n.rectAreaLTC2=Be.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let y=n.hash;(y.directionalLength!==f||y.pointLength!==p||y.spotLength!==_||y.rectAreaLength!==m||y.hemiLength!==g||y.numDirectionalShadows!==b||y.numPointShadows!==M||y.numSpotShadows!==x||y.numSpotMaps!==S||y.numLightProbes!==v)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+S-E,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=v,y.directionalLength=f,y.pointLength=p,y.spotLength=_,y.rectAreaLength=m,y.hemiLength=g,y.numDirectionalShadows=b,y.numPointShadows=M,y.numSpotShadows=x,y.numSpotMaps=S,y.numLightProbes=v,n.version=gS++)}function c(l,u){let h=0,d=0,f=0,p=0,_=0,m=u.matrixWorldInverse;for(let g=0,b=l.length;g<b;g++){let M=l[g];if(M.isDirectionalLight){let x=n.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(M.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(M.isRectAreaLight){let x=n.rectArea[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(M.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function _m(i){let e=new _S(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function o(d){t.push(d)}function a(d){n.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function yS(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new _m(i),e.set(s,[a])):r>=o.length?(a=new _m(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var vS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MS=`uniform sampler2D shadow_pass;
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
}`,bS=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],SS=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],ym=new Ke,ma=new U,Fh=new U;function ES(i,e,t){let n=new zr,s=new Ee,r=new Ee,o=new St,a=new Lc,c=new Nc,l={},u=t.maxTextureSize,h={[Mn]:mn,[mn]:Mn,[Ft]:Ft},d=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:vS,fragmentShader:MS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new pt;p.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new He(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ia;let g=this.type;this.render=function(E,v,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===lp&&(We("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ia);let w=i.getRenderTarget(),R=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Ei),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let N=g!==this.type;N&&v.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(O=>O.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,O=E.length;B<O;B++){let G=E[B],V=G.shadow;if(V===void 0){We("WebGLShadowMap:",G,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ee=V.getFrameExtents();s.multiply(ee),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ee.x),s.x=r.x*ee.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ee.y),s.y=r.y*ee.y,V.mapSize.y=r.y));let ae=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=ae,V.map===null||N===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Xr){if(G.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new kn(s.x,s.y,{format:ms,type:Ti,minFilter:qt,magFilter:qt,generateMipmaps:!1}),V.map.texture.name=G.name+".shadowMap",V.map.depthTexture=new ki(s.x,s.y,Gn),V.map.depthTexture.name=G.name+".shadowMapDepth",V.map.depthTexture.format=yi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Xt,V.map.depthTexture.magFilter=Xt}else G.isPointLight?(V.map=new Ol(s.x),V.map.depthTexture=new Tc(s.x,fi)):(V.map=new kn(s.x,s.y),V.map.depthTexture=new ki(s.x,s.y,fi)),V.map.depthTexture.name=G.name+".shadowMap",V.map.depthTexture.format=yi,this.type===ia?(V.map.depthTexture.compareFunction=ae?Nl:Ll,V.map.depthTexture.minFilter=qt,V.map.depthTexture.magFilter=qt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Xt,V.map.depthTexture.magFilter=Xt);V.camera.updateProjectionMatrix()}let de=V.map.isWebGLCubeRenderTarget?6:1;for(let W=0;W<de;W++){if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,W),i.clear();else{W===0&&(i.setRenderTarget(V.map),i.clear());let Q=V.getViewport(W);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),I.viewport(o)}if(G.isPointLight){let Q=V.camera,ue=V.matrix,_e=G.distance||Q.far;_e!==Q.far&&(Q.far=_e,Q.updateProjectionMatrix()),ma.setFromMatrixPosition(G.matrixWorld),Q.position.copy(ma),Fh.copy(Q.position),Fh.add(bS[W]),Q.up.copy(SS[W]),Q.lookAt(Fh),Q.updateMatrixWorld(),ue.makeTranslation(-ma.x,-ma.y,-ma.z),ym.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),V._frustum.setFromProjectionMatrix(ym,Q.coordinateSystem,Q.reversedDepth)}else V.updateMatrices(G);n=V.getFrustum(),x(v,y,V.camera,G,this.type)}V.isPointLightShadow!==!0&&this.type===Xr&&b(V,y),V.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(w,R,A)};function b(E,v){let y=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new kn(s.x,s.y,{format:ms,type:Ti})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(v,null,y,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(v,null,y,f,_,null)}function M(E,v,y,w){let R=null,A=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)R=A;else if(R=y.isPointLight===!0?c:a,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let I=R.uuid,N=v.uuid,B=l[I];B===void 0&&(B={},l[I]=B);let O=B[N];O===void 0&&(O=R.clone(),B[N]=O,v.addEventListener("dispose",S)),R=O}if(R.visible=v.visible,R.wireframe=v.wireframe,w===Xr?R.side=v.shadowSide!==null?v.shadowSide:v.side:R.side=v.shadowSide!==null?v.shadowSide:h[v.side],R.alphaMap=v.alphaMap,R.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,R.map=v.map,R.clipShadows=v.clipShadows,R.clippingPlanes=v.clippingPlanes,R.clipIntersection=v.clipIntersection,R.displacementMap=v.displacementMap,R.displacementScale=v.displacementScale,R.displacementBias=v.displacementBias,R.wireframeLinewidth=v.wireframeLinewidth,R.linewidth=v.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let I=i.properties.get(R);I.light=y}return R}function x(E,v,y,w,R){if(E.visible===!1)return;if(E.layers.test(v.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===Xr)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let N=e.update(E),B=E.material;if(Array.isArray(B)){let O=N.groups;for(let G=0,V=O.length;G<V;G++){let ee=O[G],ae=B[ee.materialIndex];if(ae&&ae.visible){let de=M(E,ae,w,R);E.onBeforeShadow(i,E,v,y,N,de,ee),i.renderBufferDirect(y,null,N,de,E,ee),E.onAfterShadow(i,E,v,y,N,de,ee)}}}else if(B.visible){let O=M(E,B,w,R);E.onBeforeShadow(i,E,v,y,N,O,null),i.renderBufferDirect(y,null,N,O,E,null),E.onAfterShadow(i,E,v,y,N,O,null)}}let I=E.children;for(let N=0,B=I.length;N<B;N++)x(I[N],v,y,w,R)}function S(E){E.target.removeEventListener("dispose",S);for(let y in l){let w=l[y],R=E.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function TS(i,e){function t(){let k=!1,ve=new St,ce=null,Re=new St(0,0,0,0);return{setMask:function(Ce){ce!==Ce&&!k&&(i.colorMask(Ce,Ce,Ce,Ce),ce=Ce)},setLocked:function(Ce){k=Ce},setClear:function(Ce,le,Ne,Oe,ot){ot===!0&&(Ce*=Oe,le*=Oe,Ne*=Oe),ve.set(Ce,le,Ne,Oe),Re.equals(ve)===!1&&(i.clearColor(Ce,le,Ne,Oe),Re.copy(ve))},reset:function(){k=!1,ce=null,Re.set(-1,0,0,0)}}}function n(){let k=!1,ve=!1,ce=null,Re=null,Ce=null;return{setReversed:function(le){if(ve!==le){let Ne=e.get("EXT_clip_control");le?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ve=le;let Oe=Ce;Ce=null,this.setClear(Oe)}},getReversed:function(){return ve},setTest:function(le){le?j(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(le){ce!==le&&!k&&(i.depthMask(le),ce=le)},setFunc:function(le){if(ve&&(le=Vp[le]),Re!==le){switch(le){case dc:i.depthFunc(i.NEVER);break;case fc:i.depthFunc(i.ALWAYS);break;case pc:i.depthFunc(i.LESS);break;case Fs:i.depthFunc(i.LEQUAL);break;case mc:i.depthFunc(i.EQUAL);break;case gc:i.depthFunc(i.GEQUAL);break;case xc:i.depthFunc(i.GREATER);break;case _c:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Re=le}},setLocked:function(le){k=le},setClear:function(le){Ce!==le&&(Ce=le,ve&&(le=1-le),i.clearDepth(le))},reset:function(){k=!1,ce=null,Re=null,Ce=null,ve=!1}}}function s(){let k=!1,ve=null,ce=null,Re=null,Ce=null,le=null,Ne=null,Oe=null,ot=null;return{setTest:function(ct){k||(ct?j(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(ct){ve!==ct&&!k&&(i.stencilMask(ct),ve=ct)},setFunc:function(ct,kt,an){(ce!==ct||Re!==kt||Ce!==an)&&(i.stencilFunc(ct,kt,an),ce=ct,Re=kt,Ce=an)},setOp:function(ct,kt,an){(le!==ct||Ne!==kt||Oe!==an)&&(i.stencilOp(ct,kt,an),le=ct,Ne=kt,Oe=an)},setLocked:function(ct){k=ct},setClear:function(ct){ot!==ct&&(i.clearStencil(ct),ot=ct)},reset:function(){k=!1,ve=null,ce=null,Re=null,Ce=null,le=null,Ne=null,Oe=null,ot=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},h={},d={},f=new WeakMap,p=[],_=null,m=!1,g=null,b=null,M=null,x=null,S=null,E=null,v=null,y=new me(0,0,0),w=0,R=!1,A=null,I=null,N=null,B=null,O=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ee=0,ae=i.getParameter(i.VERSION);ae.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(ae)[1]),V=ee>=1):ae.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),V=ee>=2);let de=null,W={},Q=i.getParameter(i.SCISSOR_BOX),ue=i.getParameter(i.VIEWPORT),_e=new St().fromArray(Q),Te=new St().fromArray(ue);function Z(k,ve,ce,Re){let Ce=new Uint8Array(4),le=i.createTexture();i.bindTexture(k,le),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<ce;Ne++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(ve+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return le}let te={};te[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(i.DEPTH_TEST),o.setFunc(Fs),fe(!1),ge(oh),j(i.CULL_FACE),K(Ei);function j(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function ye(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function Me(k,ve){return d[k]!==ve?(i.bindFramebuffer(k,ve),d[k]=ve,k===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ve),k===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function be(k,ve){let ce=p,Re=!1;if(k){ce=f.get(ve),ce===void 0&&(ce=[],f.set(ve,ce));let Ce=k.textures;if(ce.length!==Ce.length||ce[0]!==i.COLOR_ATTACHMENT0){for(let le=0,Ne=Ce.length;le<Ne;le++)ce[le]=i.COLOR_ATTACHMENT0+le;ce.length=Ce.length,Re=!0}}else ce[0]!==i.BACK&&(ce[0]=i.BACK,Re=!0);Re&&i.drawBuffers(ce)}function he(k){return _!==k?(i.useProgram(k),_=k,!0):!1}let we={[ss]:i.FUNC_ADD,[hp]:i.FUNC_SUBTRACT,[dp]:i.FUNC_REVERSE_SUBTRACT};we[fp]=i.MIN,we[pp]=i.MAX;let H={[mp]:i.ZERO,[gp]:i.ONE,[xp]:i.SRC_COLOR,[uc]:i.SRC_ALPHA,[Sp]:i.SRC_ALPHA_SATURATE,[Mp]:i.DST_COLOR,[yp]:i.DST_ALPHA,[_p]:i.ONE_MINUS_SRC_COLOR,[hc]:i.ONE_MINUS_SRC_ALPHA,[bp]:i.ONE_MINUS_DST_COLOR,[vp]:i.ONE_MINUS_DST_ALPHA,[Ep]:i.CONSTANT_COLOR,[Tp]:i.ONE_MINUS_CONSTANT_COLOR,[wp]:i.CONSTANT_ALPHA,[Ap]:i.ONE_MINUS_CONSTANT_ALPHA};function K(k,ve,ce,Re,Ce,le,Ne,Oe,ot,ct){if(k===Ei){m===!0&&(ye(i.BLEND),m=!1);return}if(m===!1&&(j(i.BLEND),m=!0),k!==up){if(k!==g||ct!==R){if((b!==ss||S!==ss)&&(i.blendEquation(i.FUNC_ADD),b=ss,S=ss),ct)switch(k){case Ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qi:i.blendFunc(i.ONE,i.ONE);break;case ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ch:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qe("WebGLState: Invalid blending: ",k);break}else switch(k){case Ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ah:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ch:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",k);break}M=null,x=null,E=null,v=null,y.set(0,0,0),w=0,g=k,R=ct}return}Ce=Ce||ve,le=le||ce,Ne=Ne||Re,(ve!==b||Ce!==S)&&(i.blendEquationSeparate(we[ve],we[Ce]),b=ve,S=Ce),(ce!==M||Re!==x||le!==E||Ne!==v)&&(i.blendFuncSeparate(H[ce],H[Re],H[le],H[Ne]),M=ce,x=Re,E=le,v=Ne),(Oe.equals(y)===!1||ot!==w)&&(i.blendColor(Oe.r,Oe.g,Oe.b,ot),y.copy(Oe),w=ot),g=k,R=!1}function oe(k,ve){k.side===Ft?ye(i.CULL_FACE):j(i.CULL_FACE);let ce=k.side===mn;ve&&(ce=!ce),fe(ce),k.blending===Ds&&k.transparent===!1?K(Ei):K(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let Re=k.stencilWrite;a.setTest(Re),Re&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),se(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function fe(k){A!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),A=k)}function ge(k){k!==ap?(j(i.CULL_FACE),k!==I&&(k===oh?i.cullFace(i.BACK):k===cp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),I=k}function Fe(k){k!==N&&(V&&i.lineWidth(k),N=k)}function se(k,ve,ce){k?(j(i.POLYGON_OFFSET_FILL),(B!==ve||O!==ce)&&(B=ve,O=ce,o.getReversed()&&(ve=-ve),i.polygonOffset(ve,ce))):ye(i.POLYGON_OFFSET_FILL)}function pe(k){k?j(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function Ie(k){k===void 0&&(k=i.TEXTURE0+G-1),de!==k&&(i.activeTexture(k),de=k)}function F(k,ve,ce){ce===void 0&&(de===null?ce=i.TEXTURE0+G-1:ce=de);let Re=W[ce];Re===void 0&&(Re={type:void 0,texture:void 0},W[ce]=Re),(Re.type!==k||Re.texture!==ve)&&(de!==ce&&(i.activeTexture(ce),de=ce),i.bindTexture(k,ve||te[k]),Re.type=k,Re.texture=ve)}function Ae(){let k=W[de];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function De(){try{i.compressedTexImage2D(...arguments)}catch(k){Qe("WebGLState:",k)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(k){Qe("WebGLState:",k)}}function T(){try{i.texSubImage2D(...arguments)}catch(k){Qe("WebGLState:",k)}}function L(){try{i.texSubImage3D(...arguments)}catch(k){Qe("WebGLState:",k)}}function D(){try{i.compressedTexSubImage2D(...arguments)}catch(k){Qe("WebGLState:",k)}}function z(){try{i.compressedTexSubImage3D(...arguments)}catch(k){Qe("WebGLState:",k)}}function X(){try{i.texStorage2D(...arguments)}catch(k){Qe("WebGLState:",k)}}function ne(){try{i.texStorage3D(...arguments)}catch(k){Qe("WebGLState:",k)}}function q(){try{i.texImage2D(...arguments)}catch(k){Qe("WebGLState:",k)}}function re(){try{i.texImage3D(...arguments)}catch(k){Qe("WebGLState:",k)}}function Se(k){return h[k]!==void 0?h[k]:i.getParameter(k)}function Ue(k,ve){h[k]!==ve&&(i.pixelStorei(k,ve),h[k]=ve)}function Le(k){_e.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),_e.copy(k))}function Pe(k){Te.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Te.copy(k))}function Ge(k,ve){let ce=l.get(ve);ce===void 0&&(ce=new WeakMap,l.set(ve,ce));let Re=ce.get(k);Re===void 0&&(Re=i.getUniformBlockIndex(ve,k.name),ce.set(k,Re))}function qe(k,ve){let Re=l.get(ve).get(k);c.get(ve)!==Re&&(i.uniformBlockBinding(ve,Re,k.__bindingPointIndex),c.set(ve,Re))}function xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},de=null,W={},d={},f=new WeakMap,p=[],_=null,m=!1,g=null,b=null,M=null,x=null,S=null,E=null,v=null,y=new me(0,0,0),w=0,R=!1,A=null,I=null,N=null,B=null,O=null,_e.set(0,0,i.canvas.width,i.canvas.height),Te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:ye,bindFramebuffer:Me,drawBuffers:be,useProgram:he,setBlending:K,setMaterial:oe,setFlipSided:fe,setCullFace:ge,setLineWidth:Fe,setPolygonOffset:se,setScissorTest:pe,activeTexture:Ie,bindTexture:F,unbindTexture:Ae,compressedTexImage2D:De,compressedTexImage3D:P,texImage2D:q,texImage3D:re,pixelStorei:Ue,getParameter:Se,updateUBOMapping:Ge,uniformBlockBinding:qe,texStorage2D:X,texStorage3D:ne,texSubImage2D:T,texSubImage3D:L,compressedTexSubImage2D:D,compressedTexSubImage3D:z,scissor:Le,viewport:Pe,reset:xe}}function wS(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ee,u=new WeakMap,h=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,T){return p?new OffscreenCanvas(P,T):Nr("canvas")}function m(P,T,L){let D=1,z=De(P);if((z.width>L||z.height>L)&&(D=L/Math.max(z.width,z.height)),D<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let X=Math.floor(D*z.width),ne=Math.floor(D*z.height);d===void 0&&(d=_(X,ne));let q=T?_(X,ne):d;return q.width=X,q.height=ne,q.getContext("2d").drawImage(P,0,0,X,ne),We("WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+X+"x"+ne+")."),q}else return"data"in P&&We("WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),P;return P}function g(P){return P.generateMipmaps}function b(P){i.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(P,T,L,D,z,X=!1){if(P!==null){if(i[P]!==void 0)return i[P];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ne;D&&(ne=e.get("EXT_texture_norm16"),ne||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=T;if(T===i.RED&&(L===i.FLOAT&&(q=i.R32F),L===i.HALF_FLOAT&&(q=i.R16F),L===i.UNSIGNED_BYTE&&(q=i.R8),L===i.UNSIGNED_SHORT&&ne&&(q=ne.R16_EXT),L===i.SHORT&&ne&&(q=ne.R16_SNORM_EXT)),T===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(q=i.R8UI),L===i.UNSIGNED_SHORT&&(q=i.R16UI),L===i.UNSIGNED_INT&&(q=i.R32UI),L===i.BYTE&&(q=i.R8I),L===i.SHORT&&(q=i.R16I),L===i.INT&&(q=i.R32I)),T===i.RG&&(L===i.FLOAT&&(q=i.RG32F),L===i.HALF_FLOAT&&(q=i.RG16F),L===i.UNSIGNED_BYTE&&(q=i.RG8),L===i.UNSIGNED_SHORT&&ne&&(q=ne.RG16_EXT),L===i.SHORT&&ne&&(q=ne.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(q=i.RG8UI),L===i.UNSIGNED_SHORT&&(q=i.RG16UI),L===i.UNSIGNED_INT&&(q=i.RG32UI),L===i.BYTE&&(q=i.RG8I),L===i.SHORT&&(q=i.RG16I),L===i.INT&&(q=i.RG32I)),T===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(q=i.RGB8UI),L===i.UNSIGNED_SHORT&&(q=i.RGB16UI),L===i.UNSIGNED_INT&&(q=i.RGB32UI),L===i.BYTE&&(q=i.RGB8I),L===i.SHORT&&(q=i.RGB16I),L===i.INT&&(q=i.RGB32I)),T===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),L===i.UNSIGNED_INT&&(q=i.RGBA32UI),L===i.BYTE&&(q=i.RGBA8I),L===i.SHORT&&(q=i.RGBA16I),L===i.INT&&(q=i.RGBA32I)),T===i.RGB&&(L===i.UNSIGNED_SHORT&&ne&&(q=ne.RGB16_EXT),L===i.SHORT&&ne&&(q=ne.RGB16_SNORM_EXT),L===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),L===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),T===i.RGBA){let re=X?wo:ht.getTransfer(z);L===i.FLOAT&&(q=i.RGBA32F),L===i.HALF_FLOAT&&(q=i.RGBA16F),L===i.UNSIGNED_BYTE&&(q=re===vt?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT&&ne&&(q=ne.RGBA16_EXT),L===i.SHORT&&ne&&(q=ne.RGBA16_SNORM_EXT),L===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function S(P,T){let L;return P?T===null||T===fi||T===Zr?L=i.DEPTH24_STENCIL8:T===Gn?L=i.DEPTH32F_STENCIL8:T===Yr&&(L=i.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===fi||T===Zr?L=i.DEPTH_COMPONENT24:T===Gn?L=i.DEPTH_COMPONENT32F:T===Yr&&(L=i.DEPTH_COMPONENT16),L}function E(P,T){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Xt&&P.minFilter!==qt?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function v(P){let T=P.target;T.removeEventListener("dispose",v),w(T),T.isVideoTexture&&u.delete(T),T.isHTMLTexture&&h.delete(T)}function y(P){let T=P.target;T.removeEventListener("dispose",y),A(T)}function w(P){let T=n.get(P);if(T.__webglInit===void 0)return;let L=P.source,D=f.get(L);if(D){let z=D[T.__cacheKey];z.usedTimes--,z.usedTimes===0&&R(P),Object.keys(D).length===0&&f.delete(L)}n.remove(P)}function R(P){let T=n.get(P);i.deleteTexture(T.__webglTexture);let L=P.source,D=f.get(L);delete D[T.__cacheKey],o.memory.textures--}function A(P){let T=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let D=0;D<6;D++){if(Array.isArray(T.__webglFramebuffer[D]))for(let z=0;z<T.__webglFramebuffer[D].length;z++)i.deleteFramebuffer(T.__webglFramebuffer[D][z]);else i.deleteFramebuffer(T.__webglFramebuffer[D]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[D])}else{if(Array.isArray(T.__webglFramebuffer))for(let D=0;D<T.__webglFramebuffer.length;D++)i.deleteFramebuffer(T.__webglFramebuffer[D]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let D=0;D<T.__webglColorRenderbuffer.length;D++)T.__webglColorRenderbuffer[D]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[D]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let L=P.textures;for(let D=0,z=L.length;D<z;D++){let X=n.get(L[D]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(L[D])}n.remove(P)}let I=0;function N(){I=0}function B(){return I}function O(P){I=P}function G(){let P=I;return P>=s.maxTextures&&We("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),I+=1,P}function V(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function ee(P,T){let L=n.get(P);if(P.isVideoTexture&&F(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&L.__version!==P.version){let D=P.image;if(D===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(D.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(L,P,T);return}}else P.isExternalTexture&&(L.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+T)}function ae(P,T){let L=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&L.__version!==P.version){ye(L,P,T);return}else P.isExternalTexture&&(L.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+T)}function de(P,T){let L=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&L.__version!==P.version){ye(L,P,T);return}t.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+T)}function W(P,T){let L=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&L.__version!==P.version){Me(L,P,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+T)}let Q={[$n]:i.REPEAT,[Zn]:i.CLAMP_TO_EDGE,[Pr]:i.MIRRORED_REPEAT},ue={[Xt]:i.NEAREST,[Zc]:i.NEAREST_MIPMAP_NEAREST,[Js]:i.NEAREST_MIPMAP_LINEAR,[qt]:i.LINEAR,[qr]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},_e={[Dp]:i.NEVER,[zp]:i.ALWAYS,[Fp]:i.LESS,[Ll]:i.LEQUAL,[Up]:i.EQUAL,[Nl]:i.GEQUAL,[Op]:i.GREATER,[Bp]:i.NOTEQUAL};function Te(P,T){if(T.type===Gn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===qt||T.magFilter===qr||T.magFilter===Js||T.magFilter===di||T.minFilter===qt||T.minFilter===qr||T.minFilter===Js||T.minFilter===di)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Q[T.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Q[T.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Q[T.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ue[T.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ue[T.minFilter]),T.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,_e[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Xt||T.minFilter!==Js&&T.minFilter!==di||T.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Z(P,T){let L=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",v));let D=T.source,z=f.get(D);z===void 0&&(z={},f.set(D,z));let X=V(T);if(X!==P.__cacheKey){z[X]===void 0&&(z[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,L=!0),z[X].usedTimes++;let ne=z[P.__cacheKey];ne!==void 0&&(z[P.__cacheKey].usedTimes--,ne.usedTimes===0&&R(T)),P.__cacheKey=X,P.__webglTexture=z[X].texture}return L}function te(P,T,L){return Math.floor(Math.floor(P/L)/T)}function j(P,T,L,D){let X=P.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,L,D,T.data);else{X.sort((Ue,Le)=>Ue.start-Le.start);let ne=0;for(let Ue=1;Ue<X.length;Ue++){let Le=X[ne],Pe=X[Ue],Ge=Le.start+Le.count,qe=te(Pe.start,T.width,4),xe=te(Le.start,T.width,4);Pe.start<=Ge+1&&qe===xe&&te(Pe.start+Pe.count-1,T.width,4)===qe?Le.count=Math.max(Le.count,Pe.start+Pe.count-Le.start):(++ne,X[ne]=Pe)}X.length=ne+1;let q=t.getParameter(i.UNPACK_ROW_LENGTH),re=t.getParameter(i.UNPACK_SKIP_PIXELS),Se=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Ue=0,Le=X.length;Ue<Le;Ue++){let Pe=X[Ue],Ge=Math.floor(Pe.start/4),qe=Math.ceil(Pe.count/4),xe=Ge%T.width,k=Math.floor(Ge/T.width),ve=qe,ce=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(i.UNPACK_SKIP_ROWS,k),t.texSubImage2D(i.TEXTURE_2D,0,xe,k,ve,ce,L,D,T.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function ye(P,T,L){let D=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(D=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(D=i.TEXTURE_3D);let z=Z(P,T),X=T.source;t.bindTexture(D,P.__webglTexture,i.TEXTURE0+L);let ne=n.get(X);if(X.version!==ne.__version||z===!0){if(t.activeTexture(i.TEXTURE0+L),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let ce=ht.getPrimaries(ht.workingColorSpace),Re=T.colorSpace===Yi?null:ht.getPrimaries(T.colorSpace),Ce=T.colorSpace===Yi||ce===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let re=m(T.image,!1,s.maxTextureSize);re=Ae(T,re);let Se=r.convert(T.format,T.colorSpace),Ue=r.convert(T.type),Le=x(T.internalFormat,Se,Ue,T.normalized,T.colorSpace,T.isVideoTexture);Te(D,T);let Pe,Ge=T.mipmaps,qe=T.isVideoTexture!==!0,xe=ne.__version===void 0||z===!0,k=X.dataReady,ve=E(T,re);if(T.isDepthTexture)Le=S(T.format===ps,T.type),xe&&(qe?t.texStorage2D(i.TEXTURE_2D,1,Le,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Le,re.width,re.height,0,Se,Ue,null));else if(T.isDataTexture)if(Ge.length>0){qe&&xe&&t.texStorage2D(i.TEXTURE_2D,ve,Le,Ge[0].width,Ge[0].height);for(let ce=0,Re=Ge.length;ce<Re;ce++)Pe=Ge[ce],qe?k&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,Pe.width,Pe.height,Se,Ue,Pe.data):t.texImage2D(i.TEXTURE_2D,ce,Le,Pe.width,Pe.height,0,Se,Ue,Pe.data);T.generateMipmaps=!1}else qe?(xe&&t.texStorage2D(i.TEXTURE_2D,ve,Le,re.width,re.height),k&&j(T,re,Se,Ue)):t.texImage2D(i.TEXTURE_2D,0,Le,re.width,re.height,0,Se,Ue,re.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){qe&&xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Le,Ge[0].width,Ge[0].height,re.depth);for(let ce=0,Re=Ge.length;ce<Re;ce++)if(Pe=Ge[ce],T.format!==Vn)if(Se!==null)if(qe){if(k)if(T.layerUpdates.size>0){let Ce=Ch(Pe.width,Pe.height,T.format,T.type);for(let le of T.layerUpdates){let Ne=Pe.data.subarray(le*Ce/Pe.data.BYTES_PER_ELEMENT,(le+1)*Ce/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,le,Pe.width,Pe.height,1,Se,Ne)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,Pe.width,Pe.height,re.depth,Se,Pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,Le,Pe.width,Pe.height,re.depth,0,Pe.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,Pe.width,Pe.height,re.depth,Se,Ue,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,Le,Pe.width,Pe.height,re.depth,0,Se,Ue,Pe.data)}else{qe&&xe&&t.texStorage2D(i.TEXTURE_2D,ve,Le,Ge[0].width,Ge[0].height);for(let ce=0,Re=Ge.length;ce<Re;ce++)Pe=Ge[ce],T.format!==Vn?Se!==null?qe?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,Pe.width,Pe.height,Se,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,Le,Pe.width,Pe.height,0,Pe.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?k&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,Pe.width,Pe.height,Se,Ue,Pe.data):t.texImage2D(i.TEXTURE_2D,ce,Le,Pe.width,Pe.height,0,Se,Ue,Pe.data)}else if(T.isDataArrayTexture)if(qe){if(xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Le,re.width,re.height,re.depth),k)if(T.layerUpdates.size>0){let ce=Ch(re.width,re.height,T.format,T.type);for(let Re of T.layerUpdates){let Ce=re.data.subarray(Re*ce/re.data.BYTES_PER_ELEMENT,(Re+1)*ce/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Re,re.width,re.height,1,Se,Ue,Ce)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Se,Ue,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Le,re.width,re.height,re.depth,0,Se,Ue,re.data);else if(T.isData3DTexture)qe?(xe&&t.texStorage3D(i.TEXTURE_3D,ve,Le,re.width,re.height,re.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Se,Ue,re.data)):t.texImage3D(i.TEXTURE_3D,0,Le,re.width,re.height,re.depth,0,Se,Ue,re.data);else if(T.isFramebufferTexture){if(xe)if(qe)t.texStorage2D(i.TEXTURE_2D,ve,Le,re.width,re.height);else{let ce=re.width,Re=re.height;for(let Ce=0;Ce<ve;Ce++)t.texImage2D(i.TEXTURE_2D,Ce,Le,ce,Re,0,Se,Ue,null),ce>>=1,Re>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let ce=i.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),re.parentNode!==ce){ce.appendChild(re),h.add(T),ce.onpaint=Re=>{let Ce=Re.changedElements;for(let le of h)Ce.includes(le.image)&&(le.needsUpdate=!0)},ce.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,re);else{let Ce=i.RGBA,le=i.RGBA,Ne=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ce,le,Ne,re)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ge.length>0){if(qe&&xe){let ce=De(Ge[0]);t.texStorage2D(i.TEXTURE_2D,ve,Le,ce.width,ce.height)}for(let ce=0,Re=Ge.length;ce<Re;ce++)Pe=Ge[ce],qe?k&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,Se,Ue,Pe):t.texImage2D(i.TEXTURE_2D,ce,Le,Se,Ue,Pe);T.generateMipmaps=!1}else if(qe){if(xe){let ce=De(re);t.texStorage2D(i.TEXTURE_2D,ve,Le,ce.width,ce.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,Ue,re)}else t.texImage2D(i.TEXTURE_2D,0,Le,Se,Ue,re);g(T)&&b(D),ne.__version=X.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Me(P,T,L){if(T.image.length!==6)return;let D=Z(P,T),z=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+L);let X=n.get(z);if(z.version!==X.__version||D===!0){t.activeTexture(i.TEXTURE0+L);let ne=ht.getPrimaries(ht.workingColorSpace),q=T.colorSpace===Yi?null:ht.getPrimaries(T.colorSpace),re=T.colorSpace===Yi||ne===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let Se=T.isCompressedTexture||T.image[0].isCompressedTexture,Ue=T.image[0]&&T.image[0].isDataTexture,Le=[];for(let le=0;le<6;le++)!Se&&!Ue?Le[le]=m(T.image[le],!0,s.maxCubemapSize):Le[le]=Ue?T.image[le].image:T.image[le],Le[le]=Ae(T,Le[le]);let Pe=Le[0],Ge=r.convert(T.format,T.colorSpace),qe=r.convert(T.type),xe=x(T.internalFormat,Ge,qe,T.normalized,T.colorSpace),k=T.isVideoTexture!==!0,ve=X.__version===void 0||D===!0,ce=z.dataReady,Re=E(T,Pe);Te(i.TEXTURE_CUBE_MAP,T);let Ce;if(Se){k&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,xe,Pe.width,Pe.height);for(let le=0;le<6;le++){Ce=Le[le].mipmaps;for(let Ne=0;Ne<Ce.length;Ne++){let Oe=Ce[Ne];T.format!==Vn?Ge!==null?k?ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne,0,0,Oe.width,Oe.height,Ge,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne,xe,Oe.width,Oe.height,0,Oe.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne,0,0,Oe.width,Oe.height,Ge,qe,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne,xe,Oe.width,Oe.height,0,Ge,qe,Oe.data)}}}else{if(Ce=T.mipmaps,k&&ve){Ce.length>0&&Re++;let le=De(Le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,xe,le.width,le.height)}for(let le=0;le<6;le++)if(Ue){k?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Le[le].width,Le[le].height,Ge,qe,Le[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,xe,Le[le].width,Le[le].height,0,Ge,qe,Le[le].data);for(let Ne=0;Ne<Ce.length;Ne++){let ot=Ce[Ne].image[le].image;k?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne+1,0,0,ot.width,ot.height,Ge,qe,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne+1,xe,ot.width,ot.height,0,Ge,qe,ot.data)}}else{k?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ge,qe,Le[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,xe,Ge,qe,Le[le]);for(let Ne=0;Ne<Ce.length;Ne++){let Oe=Ce[Ne];k?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne+1,0,0,Ge,qe,Oe.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne+1,xe,Ge,qe,Oe.image[le])}}}g(T)&&b(i.TEXTURE_CUBE_MAP),X.__version=z.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function be(P,T,L,D,z,X){let ne=r.convert(L.format,L.colorSpace),q=r.convert(L.type),re=x(L.internalFormat,ne,q,L.normalized,L.colorSpace),Se=n.get(T),Ue=n.get(L);if(Ue.__renderTarget=T,!Se.__hasExternalTextures){let Le=Math.max(1,T.width>>X),Pe=Math.max(1,T.height>>X);z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?t.texImage3D(z,X,re,Le,Pe,T.depth,0,ne,q,null):t.texImage2D(z,X,re,Le,Pe,0,ne,q,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Ie(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,D,z,Ue.__webglTexture,0,pe(T)):(z===i.TEXTURE_2D||z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,D,z,Ue.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(P,T,L){if(i.bindRenderbuffer(i.RENDERBUFFER,P),T.depthBuffer){let D=T.depthTexture,z=D&&D.isDepthTexture?D.type:null,X=S(T.stencilBuffer,z),ne=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ie(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe(T),X,T.width,T.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe(T),X,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,X,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,P)}else{let D=T.textures;for(let z=0;z<D.length;z++){let X=D[z],ne=r.convert(X.format,X.colorSpace),q=r.convert(X.type),re=x(X.internalFormat,ne,q,X.normalized,X.colorSpace);Ie(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe(T),re,T.width,T.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe(T),re,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,re,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(P,T,L){let D=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let z=n.get(T.depthTexture);if(z.__renderTarget=T,(!z.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),D){if(z.__webglInit===void 0&&(z.__webglInit=!0,T.depthTexture.addEventListener("dispose",v)),z.__webglTexture===void 0){z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),Te(i.TEXTURE_CUBE_MAP,T.depthTexture);let Se=r.convert(T.depthTexture.format),Ue=r.convert(T.depthTexture.type),Le;T.depthTexture.format===yi?Le=i.DEPTH_COMPONENT24:T.depthTexture.format===ps&&(Le=i.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Le,T.width,T.height,0,Se,Ue,null)}}else ee(T.depthTexture,0);let X=z.__webglTexture,ne=pe(T),q=D?i.TEXTURE_CUBE_MAP_POSITIVE_X+L:i.TEXTURE_2D,re=T.depthTexture.format===ps?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===yi)Ie(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,q,X,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,re,q,X,0);else if(T.depthTexture.format===ps)Ie(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,q,X,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,re,q,X,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function H(P){let T=n.get(P),L=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){let D=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),D){let z=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,D.removeEventListener("dispose",z)};D.addEventListener("dispose",z),T.__depthDisposeCallback=z}T.__boundDepthTexture=D}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(L)for(let D=0;D<6;D++)we(T.__webglFramebuffer[D],P,D);else{let D=P.texture.mipmaps;D&&D.length>0?we(T.__webglFramebuffer[0],P,0):we(T.__webglFramebuffer,P,0)}else if(L){T.__webglDepthbuffer=[];for(let D=0;D<6;D++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[D]),T.__webglDepthbuffer[D]===void 0)T.__webglDepthbuffer[D]=i.createRenderbuffer(),he(T.__webglDepthbuffer[D],P,!1);else{let z=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=T.__webglDepthbuffer[D];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,z,i.RENDERBUFFER,X)}}else{let D=P.texture.mipmaps;if(D&&D.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),he(T.__webglDepthbuffer,P,!1);else{let z=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,z,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function K(P,T,L){let D=n.get(P);T!==void 0&&be(D.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&H(P)}function oe(P){let T=P.texture,L=n.get(P),D=n.get(T);P.addEventListener("dispose",y);let z=P.textures,X=P.isWebGLCubeRenderTarget===!0,ne=z.length>1;if(ne||(D.__webglTexture===void 0&&(D.__webglTexture=i.createTexture()),D.__version=T.version,o.memory.textures++),X){L.__webglFramebuffer=[];for(let q=0;q<6;q++)if(T.mipmaps&&T.mipmaps.length>0){L.__webglFramebuffer[q]=[];for(let re=0;re<T.mipmaps.length;re++)L.__webglFramebuffer[q][re]=i.createFramebuffer()}else L.__webglFramebuffer[q]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){L.__webglFramebuffer=[];for(let q=0;q<T.mipmaps.length;q++)L.__webglFramebuffer[q]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(ne)for(let q=0,re=z.length;q<re;q++){let Se=n.get(z[q]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&Ie(P)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let q=0;q<z.length;q++){let re=z[q];L.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[q]);let Se=r.convert(re.format,re.colorSpace),Ue=r.convert(re.type),Le=x(re.internalFormat,Se,Ue,re.normalized,re.colorSpace,P.isXRRenderTarget===!0),Pe=pe(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,Le,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,L.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),he(L.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture),Te(i.TEXTURE_CUBE_MAP,T);for(let q=0;q<6;q++)if(T.mipmaps&&T.mipmaps.length>0)for(let re=0;re<T.mipmaps.length;re++)be(L.__webglFramebuffer[q][re],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,re);else be(L.__webglFramebuffer[q],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);g(T)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){for(let q=0,re=z.length;q<re;q++){let Se=z[q],Ue=n.get(Se),Le=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Le=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Le,Ue.__webglTexture),Te(Le,Se),be(L.__webglFramebuffer,P,Se,i.COLOR_ATTACHMENT0+q,Le,0),g(Se)&&b(Le)}t.unbindTexture()}else{let q=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(q=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(q,D.__webglTexture),Te(q,T),T.mipmaps&&T.mipmaps.length>0)for(let re=0;re<T.mipmaps.length;re++)be(L.__webglFramebuffer[re],P,T,i.COLOR_ATTACHMENT0,q,re);else be(L.__webglFramebuffer,P,T,i.COLOR_ATTACHMENT0,q,0);g(T)&&b(q),t.unbindTexture()}P.depthBuffer&&H(P)}function fe(P){let T=P.textures;for(let L=0,D=T.length;L<D;L++){let z=T[L];if(g(z)){let X=M(P),ne=n.get(z).__webglTexture;t.bindTexture(X,ne),b(X),t.unbindTexture()}}}let ge=[],Fe=[];function se(P){if(P.samples>0){if(Ie(P)===!1){let T=P.textures,L=P.width,D=P.height,z=i.COLOR_BUFFER_BIT,X=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=n.get(P),q=T.length>1;if(q)for(let Se=0;Se<T.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer);let re=P.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ne.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let Se=0;Se<T.length;Se++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(z|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(z|=i.STENCIL_BUFFER_BIT)),q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ne.__webglColorRenderbuffer[Se]);let Ue=n.get(T[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ue,0)}i.blitFramebuffer(0,0,L,D,0,0,L,D,z,i.NEAREST),c===!0&&(ge.length=0,Fe.length=0,ge.push(i.COLOR_ATTACHMENT0+Se),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ge.push(X),Fe.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let Se=0;Se<T.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,ne.__webglColorRenderbuffer[Se]);let Ue=n.get(T[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,Ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let T=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function pe(P){return Math.min(s.maxSamples,P.samples)}function Ie(P){let T=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function F(P){let T=o.render.frame;u.get(P)!==T&&(u.set(P,T),P.update())}function Ae(P,T){let L=P.colorSpace,D=P.format,z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||L!==An&&L!==Yi&&(ht.getTransfer(L)===vt?(D!==Vn||z!==Dn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",L)),T}function De(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=N,this.getTextureUnits=B,this.setTextureUnits=O,this.setTexture2D=ee,this.setTexture2DArray=ae,this.setTexture3D=de,this.setTextureCube=W,this.rebindTextures=K,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function AS(i,e){function t(n,s=Yi){let r,o=ht.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===$c)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_h)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===gh)return i.BYTE;if(n===xh)return i.SHORT;if(n===Yr)return i.UNSIGNED_SHORT;if(n===Kc)return i.INT;if(n===fi)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===Ti)return i.HALF_FLOAT;if(n===vh)return i.ALPHA;if(n===Mh)return i.RGB;if(n===Vn)return i.RGBA;if(n===yi)return i.DEPTH_COMPONENT;if(n===ps)return i.DEPTH_STENCIL;if(n===jc)return i.RED;if(n===Qc)return i.RED_INTEGER;if(n===ms)return i.RG;if(n===el)return i.RG_INTEGER;if(n===tl)return i.RGBA_INTEGER;if(n===oa||n===aa||n===ca||n===la)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nl||n===il||n===sl||n===rl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ol||n===al||n===cl||n===ll||n===ul||n===ua||n===hl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ol||n===al)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===cl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ll)return r.COMPRESSED_R11_EAC;if(n===ul)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ua)return r.COMPRESSED_RG11_EAC;if(n===hl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===dl||n===fl||n===pl||n===ml||n===gl||n===xl||n===_l||n===yl||n===vl||n===Ml||n===bl||n===Sl||n===El||n===Tl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===dl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ml)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_l)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ml)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===El)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wl||n===Al||n===Rl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===wl)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cl||n===Il||n===ha||n===Pl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Cl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ha)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var RS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CS=`
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

}`,Vh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Oo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Cn({vertexShader:RS,fragmentShader:CS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new He(new Ot(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wh=class extends vi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,p=null,_=typeof XRWebGLBinding<"u",m=new Vh,g={},b=t.getContextAttributes(),M=null,x=null,S=[],E=[],v=new Ee,y=null,w=new en;w.viewport=new St;let R=new en;R.viewport=new St;let A=[w,R],I=new Gc,N=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let te=S[Z];return te===void 0&&(te=new Ur,S[Z]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Z){let te=S[Z];return te===void 0&&(te=new Ur,S[Z]=te),te.getGripSpace()},this.getHand=function(Z){let te=S[Z];return te===void 0&&(te=new Ur,S[Z]=te),te.getHandSpace()};function O(Z){let te=E.indexOf(Z.inputSource);if(te===-1)return;let j=S[te];j!==void 0&&(j.update(Z.inputSource,Z.frame,l||o),j.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",V);for(let Z=0;Z<S.length;Z++){let te=E[Z];te!==null&&(E[Z]=null,S[Z].disconnect(te))}N=null,B=null,m.reset();for(let Z in g)delete g[Z];e.setRenderTarget(M),f=null,d=null,h=null,s=null,x=null,Te.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",G),s.addEventListener("inputsourceschange",V),b.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(v),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,ye=null,Me=null;b.depth&&(Me=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=b.stencil?ps:yi,ye=b.stencil?Zr:fi);let be={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(be),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new kn(d.textureWidth,d.textureHeight,{format:Vn,type:Dn,depthTexture:new ki(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let j={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new kn(f.framebufferWidth,f.framebufferHeight,{format:Vn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Te.setContext(s),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(Z){for(let te=0;te<Z.removed.length;te++){let j=Z.removed[te],ye=E.indexOf(j);ye>=0&&(E[ye]=null,S[ye].disconnect(j))}for(let te=0;te<Z.added.length;te++){let j=Z.added[te],ye=E.indexOf(j);if(ye===-1){for(let be=0;be<S.length;be++)if(be>=E.length){E.push(j),ye=be;break}else if(E[be]===null){E[be]=j,ye=be;break}if(ye===-1)break}let Me=S[ye];Me&&Me.connect(j)}}let ee=new U,ae=new U;function de(Z,te,j){ee.setFromMatrixPosition(te.matrixWorld),ae.setFromMatrixPosition(j.matrixWorld);let ye=ee.distanceTo(ae),Me=te.projectionMatrix.elements,be=j.projectionMatrix.elements,he=Me[14]/(Me[10]-1),we=Me[14]/(Me[10]+1),H=(Me[9]+1)/Me[5],K=(Me[9]-1)/Me[5],oe=(Me[8]-1)/Me[0],fe=(be[8]+1)/be[0],ge=he*oe,Fe=he*fe,se=ye/(-oe+fe),pe=se*-oe;if(te.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(pe),Z.translateZ(se),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Me[10]===-1)Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let Ie=he+se,F=we+se,Ae=ge-pe,De=Fe+(ye-pe),P=H*we/F*Ie,T=K*we/F*Ie;Z.projectionMatrix.makePerspective(Ae,De,P,T,Ie,F),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function W(Z,te){te===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(te.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let te=Z.near,j=Z.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(j=m.depthFar)),I.near=R.near=w.near=te,I.far=R.far=w.far=j,(N!==I.near||B!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),N=I.near,B=I.far),I.layers.mask=Z.layers.mask|6,w.layers.mask=I.layers.mask&-5,R.layers.mask=I.layers.mask&-3;let ye=Z.parent,Me=I.cameras;W(I,ye);for(let be=0;be<Me.length;be++)W(Me[be],ye);Me.length===2?de(I,w,R):I.projectionMatrix.copy(w.projectionMatrix),Q(Z,I,ye)};function Q(Z,te,j){j===null?Z.matrix.copy(te.matrixWorld):(Z.matrix.copy(j.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(te.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Bs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(Z){return g[Z]};let ue=null;function _e(Z,te){if(u=te.getViewerPose(l||o),p=te,u!==null){let j=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let ye=!1;j.length!==I.cameras.length&&(I.cameras.length=0,ye=!0);for(let we=0;we<j.length;we++){let H=j[we],K=null;if(f!==null)K=f.getViewport(H);else{let fe=h.getViewSubImage(d,H);K=fe.viewport,we===0&&(e.setRenderTargetTextures(x,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(x))}let oe=A[we];oe===void 0&&(oe=new en,oe.layers.enable(we),oe.viewport=new St,A[we]=oe),oe.matrix.fromArray(H.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(H.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(K.x,K.y,K.width,K.height),we===0&&(I.matrix.copy(oe.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),ye===!0&&I.cameras.push(oe)}let Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let we=h.getDepthInformation(j[0]);we&&we.isValid&&we.texture&&m.init(we,s.renderState)}if(Me&&Me.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let we=0;we<j.length;we++){let H=j[we].camera;if(H){let K=g[H];K||(K=new Oo,g[H]=K);let oe=h.getCameraImage(H);K.sourceTexture=oe}}}}for(let j=0;j<S.length;j++){let ye=E[j],Me=S[j];ye!==null&&Me!==void 0&&Me.update(ye,te,l||o)}ue&&ue(Z,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),p=null}let Te=new vm;Te.setAnimationLoop(_e),this.setAnimationLoop=function(Z){ue=Z},this.dispose=function(){}}},IS=new Ke,wm=new st;wm.set(-1,0,0,0,1,0,0,0,1);function PS(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,wh(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,b,M,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,x)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,b,M):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===mn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===mn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let b=e.get(g),M=b.envMap,x=b.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(IS.makeRotationFromEuler(x)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(wm),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,b,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*b,m.scale.value=M*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,b){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===mn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let b=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function LS(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,S){let E=S.program;n.uniformBlockBinding(x,E)}function l(x,S){let E=s[x.id];E===void 0&&(m(x),E=u(x),s[x.id]=E,x.addEventListener("dispose",b));let v=S.program;n.updateUBOMapping(x,v);let y=e.render.frame;r[x.id]!==y&&(d(x),r[x.id]=y)}function u(x){let S=h();x.__bindingPointIndex=S;let E=i.createBuffer(),v=x.__size,y=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,v,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,E),E}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let S=s[x.id],E=x.uniforms,v=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let y=0,w=E.length;y<w;y++){let R=E[y];if(Array.isArray(R))for(let A=0,I=R.length;A<I;A++)f(R[A],y,A,v);else f(R,y,0,v)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,S,E,v){if(_(x,S,E,v)===!0){let y=x.__offset,w=x.value;if(Array.isArray(w)){let R=0;for(let A=0;A<w.length;A++){let I=w[A],N=g(I);p(I,x.__data,R),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(R+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(w,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,x.__data)}}function p(x,S,E){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,E)}function _(x,S,E,v){let y=x.value,w=S+"_"+E;if(v[w]===void 0)return typeof y=="number"||typeof y=="boolean"?v[w]=y:ArrayBuffer.isView(y)?v[w]=y.slice():v[w]=y.clone(),!0;{let R=v[w];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return v[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function m(x){let S=x.uniforms,E=0,v=16;for(let w=0,R=S.length;w<R;w++){let A=Array.isArray(S[w])?S[w]:[S[w]];for(let I=0,N=A.length;I<N;I++){let B=A[I],O=Array.isArray(B.value)?B.value:[B.value];for(let G=0,V=O.length;G<V;G++){let ee=O[G],ae=g(ee),de=E%v,W=de%ae.boundary,Q=de+W;E+=W,Q!==0&&v-Q<ae.storage&&(E+=v-Q),B.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,E+=ae.storage}}}let y=E%v;return y>0&&(E+=v-y),x.__size=E,x.__cache={},this}function g(x){let S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):We("WebGLRenderer: Unsupported uniform value type.",x),S}function b(x){let S=x.target;S.removeEventListener("dispose",b);let E=o.indexOf(S.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function M(){for(let x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:M}}var NS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),wi=null;function DS(){return wi===null&&(wi=new Br(NS,16,16,ms,Ti),wi.name="DFG_LUT",wi.minFilter=qt,wi.magFilter=qt,wi.wrapS=Zn,wi.wrapT=Zn,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}var Bl=class{constructor(e={}){let{canvas:t=kp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Dn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=f,m=new Set([tl,el,Qc]),g=new Set([Dn,fi,Yr,Zr,$c,Jc]),b=new Uint32Array(4),M=new Int32Array(4),x=new U,S=null,E=null,v=[],y=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,A=!1,I=null,N=null,B=null,O=null;this._outputColorSpace=tt;let G=0,V=0,ee=null,ae=-1,de=null,W=new St,Q=new St,ue=null,_e=new me(0),Te=0,Z=t.width,te=t.height,j=1,ye=null,Me=null,be=new St(0,0,Z,te),he=new St(0,0,Z,te),we=!1,H=new zr,K=!1,oe=!1,fe=new Ke,ge=new U,Fe=new St,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pe=!1;function Ie(){return ee===null?j:1}let F=n;function Ae(C,Y){return t.getContext(C,Y)}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",ot,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",kt,!1),F===null){let Y="webgl2";if(F=Ae(Y,C),F===null)throw Ae(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(C){throw Qe("WebGLRenderer: "+C.message),C}let De,P,T,L,D,z,X,ne,q,re,Se,Ue,Le,Pe,Ge,qe,xe,k,ve,ce,Re,Ce,le;function Ne(){De=new HM(F),De.init(),Re=new AS(F,De),P=new NM(F,De,e,Re),T=new TS(F,De),P.reversedDepthBuffer&&d&&T.buffers.depth.setReversed(!0),N=F.createFramebuffer(),B=F.createFramebuffer(),O=F.createFramebuffer(),L=new WM(F),D=new hS,z=new wS(F,De,T,D,P,Re,L),X=new kM(R),ne=new Z_(F),Ce=new PM(F,ne),q=new GM(F,ne,L,Ce),re=new qM(F,q,ne,Ce,L),k=new XM(F,P,z),Ge=new DM(D),Se=new uS(R,X,De,P,Ce,Ge),Ue=new PS(R,D),Le=new fS,Pe=new yS(De),xe=new IM(R,X,T,re,p,c),qe=new ES(R,re,P),le=new LS(F,L,P,T),ve=new LM(F,De,L),ce=new VM(F,De,L),L.programs=Se.programs,R.capabilities=P,R.extensions=De,R.properties=D,R.renderLists=Le,R.shadowMap=qe,R.state=T,R.info=L}Ne(),_!==Dn&&(w=new ZM(_,t.width,t.height,a,s,r));let Oe=new Wh(R,F);this.xr=Oe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let C=De.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=De.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(C){C!==void 0&&(j=C,this.setSize(Z,te,!1))},this.getSize=function(C){return C.set(Z,te)},this.setSize=function(C,Y,ie=!0){if(Oe.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=C,te=Y,t.width=Math.floor(C*j),t.height=Math.floor(Y*j),ie===!0&&(t.style.width=C+"px",t.style.height=Y+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(Z*j,te*j).floor()},this.setDrawingBufferSize=function(C,Y,ie){Z=C,te=Y,j=ie,t.width=Math.floor(C*ie),t.height=Math.floor(Y*ie),this.setViewport(0,0,C,Y)},this.setEffects=function(C){if(_===Dn){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Y=0;Y<C.length;Y++)if(C[Y].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(W)},this.getViewport=function(C){return C.copy(be)},this.setViewport=function(C,Y,ie,$){C.isVector4?be.set(C.x,C.y,C.z,C.w):be.set(C,Y,ie,$),T.viewport(W.copy(be).multiplyScalar(j).round())},this.getScissor=function(C){return C.copy(he)},this.setScissor=function(C,Y,ie,$){C.isVector4?he.set(C.x,C.y,C.z,C.w):he.set(C,Y,ie,$),T.scissor(Q.copy(he).multiplyScalar(j).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(C){T.setScissorTest(we=C)},this.setOpaqueSort=function(C){ye=C},this.setTransparentSort=function(C){Me=C},this.getClearColor=function(C){return C.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,ie=!0){let $=0;if(C){let J=!1;if(ee!==null){let ze=ee.texture.format;J=m.has(ze)}if(J){let ze=ee.texture.type,Ve=g.has(ze),ke=xe.getClearColor(),Ze=xe.getClearAlpha(),$e=ke.r,at=ke.g,ut=ke.b;Ve?(b[0]=$e,b[1]=at,b[2]=ut,b[3]=Ze,F.clearBufferuiv(F.COLOR,0,b)):(M[0]=$e,M[1]=at,M[2]=ut,M[3]=Ze,F.clearBufferiv(F.COLOR,0,M))}else $|=F.COLOR_BUFFER_BIT}Y&&($|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ie&&($|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&F.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),I=C},this.dispose=function(){t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",kt,!1),xe.dispose(),Le.dispose(),Pe.dispose(),D.dispose(),X.dispose(),re.dispose(),Ce.dispose(),le.dispose(),Se.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",nt),Oe.removeEventListener("sessionend",xt),At.stop()};function ot(C){C.preventDefault(),Ao("WebGLRenderer: Context Lost."),A=!0}function ct(){Ao("WebGLRenderer: Context Restored."),A=!1;let C=L.autoReset,Y=qe.enabled,ie=qe.autoUpdate,$=qe.needsUpdate,J=qe.type;Ne(),L.autoReset=C,qe.enabled=Y,qe.autoUpdate=ie,qe.needsUpdate=$,qe.type=J}function kt(C){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function an(C){let Y=C.target;Y.removeEventListener("dispose",an),ti(Y)}function ti(C){Ci(C),D.remove(C)}function Ci(C){let Y=D.get(C).programs;Y!==void 0&&(Y.forEach(function(ie){Se.releaseProgram(ie)}),C.isShaderMaterial&&Se.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,ie,$,J,ze){Y===null&&(Y=se);let Ve=J.isMesh&&J.matrixWorld.determinantAffine()<0,ke=ao(C,Y,ie,$,J);T.setMaterial($,Ve);let Ze=ie.index,$e=1;if($.wireframe===!0){if(Ze=q.getWireframeAttribute(ie),Ze===void 0)return;$e=2}let at=ie.drawRange,ut=ie.attributes.position,Je=at.start*$e,wt=(at.start+at.count)*$e;ze!==null&&(Je=Math.max(Je,ze.start*$e),wt=Math.min(wt,(ze.start+ze.count)*$e)),Ze!==null?(Je=Math.max(Je,0),wt=Math.min(wt,Ze.count)):ut!=null&&(Je=Math.max(Je,0),wt=Math.min(wt,ut.count));let Kt=wt-Je;if(Kt<0||Kt===1/0)return;Ce.setup(J,$,ke,ie,Ze);let Yt,Rt=ve;if(Ze!==null&&(Yt=ne.get(Ze),Rt=ce,Rt.setIndex(Yt)),J.isMesh)$.wireframe===!0?(T.setLineWidth($.wireframeLinewidth*Ie()),Rt.setMode(F.LINES)):Rt.setMode(F.TRIANGLES);else if(J.isLine){let _n=$.linewidth;_n===void 0&&(_n=1),T.setLineWidth(_n*Ie()),J.isLineSegments?Rt.setMode(F.LINES):J.isLineLoop?Rt.setMode(F.LINE_LOOP):Rt.setMode(F.LINE_STRIP)}else J.isPoints?Rt.setMode(F.POINTS):J.isSprite&&Rt.setMode(F.TRIANGLES);if(J.isBatchedMesh)if(De.get("WEBGL_multi_draw"))Rt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let _n=J._multiDrawStarts,Xe=J._multiDrawCounts,On=J._multiDrawCount,gt=Ze?ne.get(Ze).bytesPerElement:1,qn=D.get($).currentProgram.getUniforms();for(let mi=0;mi<On;mi++)qn.setValue(F,"_gl_DrawID",mi),Rt.render(_n[mi]/gt,Xe[mi])}else if(J.isInstancedMesh)Rt.renderInstances(Je,Kt,J.count);else if(ie.isInstancedBufferGeometry){let _n=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Xe=Math.min(ie.instanceCount,_n);Rt.renderInstances(Je,Kt,Xe)}else Rt.render(Je,Kt)};function sn(C,Y,ie){C.transparent===!0&&C.side===Ft&&C.forceSinglePass===!1?(C.side=mn,C.needsUpdate=!0,dn(C,Y,ie),C.side=Mn,C.needsUpdate=!0,dn(C,Y,ie),C.side=Ft):dn(C,Y,ie)}this.compile=function(C,Y,ie=null){ie===null&&(ie=C),E=Pe.get(ie),E.init(Y),y.push(E),ie.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(E.pushLight(J),J.castShadow&&E.pushShadow(J))}),C!==ie&&C.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(E.pushLight(J),J.castShadow&&E.pushShadow(J))}),E.setupLights();let $=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let ze=J.material;if(ze)if(Array.isArray(ze))for(let Ve=0;Ve<ze.length;Ve++){let ke=ze[Ve];sn(ke,ie,J),$.add(ke)}else sn(ze,ie,J),$.add(ze)}),E=y.pop(),$},this.compileAsync=function(C,Y,ie=null){let $=this.compile(C,Y,ie);return new Promise(J=>{function ze(){if($.forEach(function(Ve){D.get(Ve).currentProgram.isReady()&&$.delete(Ve)}),$.size===0){J(C);return}setTimeout(ze,10)}De.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let In=null;function Un(C){In&&In(C)}function nt(){At.stop()}function xt(){At.start()}let At=new vm;At.setAnimationLoop(Un),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(C){In=C,Oe.setAnimationLoop(C),C===null?At.stop():At.start()},Oe.addEventListener("sessionstart",nt),Oe.addEventListener("sessionend",xt),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;I!==null&&I.renderStart(C,Y);let ie=Oe.enabled===!0&&Oe.isPresenting===!0,$=w!==null&&(ee===null||ie)&&w.begin(R,ee);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(Y),Y=Oe.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,Y,ee),E=Pe.get(C,y.length),E.init(Y),E.state.textureUnits=z.getTextureUnits(),y.push(E),fe.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),H.setFromProjectionMatrix(fe,oi,Y.reversedDepth),oe=this.localClippingEnabled,K=Ge.init(this.clippingPlanes,oe),S=Le.get(C,v.length),S.init(),v.push(S),Oe.enabled===!0&&Oe.isPresenting===!0){let Ve=R.xr.getDepthSensingMesh();Ve!==null&&yt(Ve,Y,-1/0,R.sortObjects)}yt(C,Y,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(ye,Me,Y.reversedDepth),pe=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,pe&&xe.addToRenderList(S,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),K===!0&&Ge.beginShadows();let J=E.state.shadowsArray;if(qe.render(J,C,Y),K===!0&&Ge.endShadows(),($&&w.hasRenderPass())===!1){let Ve=S.opaque,ke=S.transmissive;if(E.setupLights(),Y.isArrayCamera){let Ze=Y.cameras;if(ke.length>0)for(let $e=0,at=Ze.length;$e<at;$e++){let ut=Ze[$e];Gt(Ve,ke,C,ut)}pe&&xe.render(C);for(let $e=0,at=Ze.length;$e<at;$e++){let ut=Ze[$e];Ht(S,C,ut,ut.viewport)}}else ke.length>0&&Gt(Ve,ke,C,Y),pe&&xe.render(C),Ht(S,C,Y)}ee!==null&&V===0&&(z.updateMultisampleRenderTarget(ee),z.updateRenderTargetMipmap(ee)),$&&w.end(R),C.isScene===!0&&C.onAfterRender(R,C,Y),Ce.resetDefaultState(),ae=-1,de=null,y.pop(),y.length>0?(E=y[y.length-1],z.setTextureUnits(E.state.textureUnits),K===!0&&Ge.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,v.pop(),v.length>0?S=v[v.length-1]:S=null,I!==null&&I.renderEnd()};function yt(C,Y,ie,$){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)ie=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLightProbeGrid)E.pushLightProbeGrid(C);else if(C.isLight)E.pushLight(C),C.castShadow&&E.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||H.intersectsSprite(C)){$&&Fe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(fe);let Ve=re.update(C),ke=C.material;ke.visible&&S.push(C,Ve,ke,ie,Fe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||H.intersectsObject(C))){let Ve=re.update(C),ke=C.material;if($&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Fe.copy(C.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Fe.copy(Ve.boundingSphere.center)),Fe.applyMatrix4(C.matrixWorld).applyMatrix4(fe)),Array.isArray(ke)){let Ze=Ve.groups;for(let $e=0,at=Ze.length;$e<at;$e++){let ut=Ze[$e],Je=ke[ut.materialIndex];Je&&Je.visible&&S.push(C,Ve,Je,ie,Fe.z,ut)}}else ke.visible&&S.push(C,Ve,ke,ie,Fe.z,null)}}let ze=C.children;for(let Ve=0,ke=ze.length;Ve<ke;Ve++)yt(ze[Ve],Y,ie,$)}function Ht(C,Y,ie,$){let{opaque:J,transmissive:ze,transparent:Ve}=C;E.setupLightsView(ie),K===!0&&Ge.setGlobalState(R.clippingPlanes,ie),$&&T.viewport(W.copy($)),J.length>0&&Vt(J,Y,ie),ze.length>0&&Vt(ze,Y,ie),Ve.length>0&&Vt(Ve,Y,ie),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function Gt(C,Y,ie,$){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[$.id]===void 0){let Je=De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[$.id]=new kn(1,1,{generateMipmaps:!0,type:Je?Ti:Dn,minFilter:di,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let ze=E.state.transmissionRenderTarget[$.id],Ve=$.viewport||W;ze.setSize(Ve.z*R.transmissionResolutionScale,Ve.w*R.transmissionResolutionScale);let ke=R.getRenderTarget(),Ze=R.getActiveCubeFace(),$e=R.getActiveMipmapLevel();R.setRenderTarget(ze),R.getClearColor(_e),Te=R.getClearAlpha(),Te<1&&R.setClearColor(16777215,.5),R.clear(),pe&&xe.render(ie);let at=R.toneMapping;R.toneMapping=hi;let ut=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),E.setupLightsView($),K===!0&&Ge.setGlobalState(R.clippingPlanes,$),Vt(C,ie,$),z.updateMultisampleRenderTarget(ze),z.updateRenderTargetMipmap(ze),De.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let wt=0,Kt=Y.length;wt<Kt;wt++){let Yt=Y[wt],{object:Rt,geometry:_n,material:Xe,group:On}=Yt;if(Xe.side===Ft&&Rt.layers.test($.layers)){let gt=Xe.side;Xe.side=mn,Xe.needsUpdate=!0,Tn(Rt,ie,$,_n,Xe,On),Xe.side=gt,Xe.needsUpdate=!0,Je=!0}}Je===!0&&(z.updateMultisampleRenderTarget(ze),z.updateRenderTargetMipmap(ze))}R.setRenderTarget(ke,Ze,$e),R.setClearColor(_e,Te),ut!==void 0&&($.viewport=ut),R.toneMapping=at}function Vt(C,Y,ie){let $=Y.isScene===!0?Y.overrideMaterial:null;for(let J=0,ze=C.length;J<ze;J++){let Ve=C[J],{object:ke,geometry:Ze,group:$e}=Ve,at=Ve.material;at.allowOverride===!0&&$!==null&&(at=$),ke.layers.test(ie.layers)&&Tn(ke,Y,ie,Ze,at,$e)}}function Tn(C,Y,ie,$,J,ze){C.onBeforeRender(R,Y,ie,$,J,ze),C.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(R,Y,ie,$,C,ze),J.transparent===!0&&J.side===Ft&&J.forceSinglePass===!1?(J.side=mn,J.needsUpdate=!0,R.renderBufferDirect(ie,Y,$,J,C,ze),J.side=Mn,J.needsUpdate=!0,R.renderBufferDirect(ie,Y,$,J,C,ze),J.side=Ft):R.renderBufferDirect(ie,Y,$,J,C,ze),C.onAfterRender(R,Y,ie,$,J,ze)}function dn(C,Y,ie){Y.isScene!==!0&&(Y=se);let $=D.get(C),J=E.state.lights,ze=E.state.shadowsArray,Ve=J.state.version,ke=Se.getParameters(C,J.state,ze,Y,ie,E.state.lightProbeGridArray),Ze=Se.getProgramCacheKey(ke),$e=$.programs;$.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Y.environment:null,$.fog=Y.fog;let at=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;$.envMap=X.get(C.envMap||$.environment,at),$.envMapRotation=$.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,$e===void 0&&(C.addEventListener("dispose",an),$e=new Map,$.programs=$e);let ut=$e.get(Ze);if(ut!==void 0){if($.currentProgram===ut&&$.lightsStateVersion===Ve)return cn(C,ke),ut}else ke.uniforms=Se.getUniforms(C),I!==null&&C.isNodeMaterial&&I.build(C,ie,ke),C.onBeforeCompile(ke,R),ut=Se.acquireProgram(ke,Ze),$e.set(Ze,ut),$.uniforms=ke.uniforms;let Je=$.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Je.clippingPlanes=Ge.uniform),cn(C,ke),$.needsLights=hu(C),$.lightsStateVersion=Ve,$.needsLights&&(Je.ambientLightColor.value=J.state.ambient,Je.lightProbe.value=J.state.probe,Je.directionalLights.value=J.state.directional,Je.directionalLightShadows.value=J.state.directionalShadow,Je.spotLights.value=J.state.spot,Je.spotLightShadows.value=J.state.spotShadow,Je.rectAreaLights.value=J.state.rectArea,Je.ltc_1.value=J.state.rectAreaLTC1,Je.ltc_2.value=J.state.rectAreaLTC2,Je.pointLights.value=J.state.point,Je.pointLightShadows.value=J.state.pointShadow,Je.hemisphereLights.value=J.state.hemi,Je.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Je.spotLightMatrix.value=J.state.spotLightMatrix,Je.spotLightMap.value=J.state.spotLightMap,Je.pointShadowMatrix.value=J.state.pointShadowMatrix),$.lightProbeGrid=E.state.lightProbeGridArray.length>0,$.currentProgram=ut,$.uniformsList=null,ut}function fn(C){if(C.uniformsList===null){let Y=C.currentProgram.getUniforms();C.uniformsList=Jr.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function cn(C,Y){let ie=D.get(C);ie.outputColorSpace=Y.outputColorSpace,ie.batching=Y.batching,ie.batchingColor=Y.batchingColor,ie.instancing=Y.instancing,ie.instancingColor=Y.instancingColor,ie.instancingMorph=Y.instancingMorph,ie.skinning=Y.skinning,ie.morphTargets=Y.morphTargets,ie.morphNormals=Y.morphNormals,ie.morphColors=Y.morphColors,ie.morphTargetsCount=Y.morphTargetsCount,ie.numClippingPlanes=Y.numClippingPlanes,ie.numIntersection=Y.numClipIntersection,ie.vertexAlphas=Y.vertexAlphas,ie.vertexTangents=Y.vertexTangents,ie.toneMapping=Y.toneMapping}function Ii(C,Y){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;x.setFromMatrixPosition(Y.matrixWorld);for(let ie=0,$=C.length;ie<$;ie++){let J=C[ie];if(J.texture!==null&&J.boundingBox.containsPoint(x))return J}return null}function ao(C,Y,ie,$,J){Y.isScene!==!0&&(Y=se),z.resetTextureUnits();let ze=Y.fog,Ve=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?Y.environment:null,ke=ee===null?R.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ht.workingColorSpace,Ze=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,$e=X.get($.envMap||Ve,Ze),at=$.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,ut=!!ie.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Je=!!ie.morphAttributes.position,wt=!!ie.morphAttributes.normal,Kt=!!ie.morphAttributes.color,Yt=hi;$.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Yt=R.toneMapping);let Rt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,_n=Rt!==void 0?Rt.length:0,Xe=D.get($),On=E.state.lights;if(K===!0&&(oe===!0||C!==de)){let Nt=C===de&&$.id===ae;Ge.setState($,C,Nt)}let gt=!1;$.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==On.state.version||Xe.outputColorSpace!==ke||J.isBatchedMesh&&Xe.batching===!1||!J.isBatchedMesh&&Xe.batching===!0||J.isBatchedMesh&&Xe.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Xe.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Xe.instancing===!1||!J.isInstancedMesh&&Xe.instancing===!0||J.isSkinnedMesh&&Xe.skinning===!1||!J.isSkinnedMesh&&Xe.skinning===!0||J.isInstancedMesh&&Xe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Xe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Xe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Xe.instancingMorph===!1&&J.morphTexture!==null||Xe.envMap!==$e||$.fog===!0&&Xe.fog!==ze||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Ge.numPlanes||Xe.numIntersection!==Ge.numIntersection)||Xe.vertexAlphas!==at||Xe.vertexTangents!==ut||Xe.morphTargets!==Je||Xe.morphNormals!==wt||Xe.morphColors!==Kt||Xe.toneMapping!==Yt||Xe.morphTargetsCount!==_n||!!Xe.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,Xe.__version=$.version);let qn=Xe.currentProgram;gt===!0&&(qn=dn($,Y,J),I&&$.isNodeMaterial&&I.onUpdateProgram($,qn,Xe));let mi=!1,Ki=!1,ur=!1,Ct=qn.getUniforms(),$t=Xe.uniforms;if(T.useProgram(qn.program)&&(mi=!0,Ki=!0,ur=!0),$.id!==ae&&(ae=$.id,Ki=!0),Xe.needsLights){let Nt=Ii(E.state.lightProbeGridArray,J);Xe.lightProbeGrid!==Nt&&(Xe.lightProbeGrid=Nt,Ki=!0)}if(mi||de!==C){T.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ct.setValue(F,"projectionMatrix",C.projectionMatrix),Ct.setValue(F,"viewMatrix",C.matrixWorldInverse);let Ji=Ct.map.cameraPosition;Ji!==void 0&&Ji.setValue(F,ge.setFromMatrixPosition(C.matrixWorld)),P.logarithmicDepthBuffer&&Ct.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ct.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),de!==C&&(de=C,Ki=!0,ur=!0)}if(Xe.needsLights&&(On.state.directionalShadowMap.length>0&&Ct.setValue(F,"directionalShadowMap",On.state.directionalShadowMap,z),On.state.spotShadowMap.length>0&&Ct.setValue(F,"spotShadowMap",On.state.spotShadowMap,z),On.state.pointShadowMap.length>0&&Ct.setValue(F,"pointShadowMap",On.state.pointShadowMap,z)),J.isSkinnedMesh){Ct.setOptional(F,J,"bindMatrix"),Ct.setOptional(F,J,"bindMatrixInverse");let Nt=J.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),Ct.setValue(F,"boneTexture",Nt.boneTexture,z))}J.isBatchedMesh&&(Ct.setOptional(F,J,"batchingTexture"),Ct.setValue(F,"batchingTexture",J._matricesTexture,z),Ct.setOptional(F,J,"batchingIdTexture"),Ct.setValue(F,"batchingIdTexture",J._indirectTexture,z),Ct.setOptional(F,J,"batchingColorTexture"),J._colorsTexture!==null&&Ct.setValue(F,"batchingColorTexture",J._colorsTexture,z));let $i=ie.morphAttributes;if(($i.position!==void 0||$i.normal!==void 0||$i.color!==void 0)&&k.update(J,ie,qn),(Ki||Xe.receiveShadow!==J.receiveShadow)&&(Xe.receiveShadow=J.receiveShadow,Ct.setValue(F,"receiveShadow",J.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&Y.environment!==null&&($t.envMapIntensity.value=Y.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=DS()),Ki){if(Ct.setValue(F,"toneMappingExposure",R.toneMappingExposure),Xe.needsLights&&co($t,ur),ze&&$.fog===!0&&Ue.refreshFogUniforms($t,ze),Ue.refreshMaterialUniforms($t,$,j,te,E.state.transmissionRenderTarget[C.id]),Xe.needsLights&&Xe.lightProbeGrid){let Nt=Xe.lightProbeGrid;$t.probesSH.value=Nt.texture,$t.probesMin.value.copy(Nt.boundingBox.min),$t.probesMax.value.copy(Nt.boundingBox.max),$t.probesResolution.value.copy(Nt.resolution)}Jr.upload(F,fn(Xe),$t,z)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Jr.upload(F,fn(Xe),$t,z),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ct.setValue(F,"center",J.center),Ct.setValue(F,"modelViewMatrix",J.modelViewMatrix),Ct.setValue(F,"normalMatrix",J.normalMatrix),Ct.setValue(F,"modelMatrix",J.matrixWorld),$.uniformsGroups!==void 0){let Nt=$.uniformsGroups;for(let Ji=0,hr=Nt.length;Ji<hr;Ji++){let mf=Nt[Ji];le.update(mf,qn),le.bind(mf,qn)}}return qn}function co(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function hu(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(C,Y,ie){let $=D.get(C);$.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),D.get(C.texture).__webglTexture=Y,D.get(C.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:ie,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){let ie=D.get(C);ie.__webglFramebuffer=Y,ie.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(C,Y=0,ie=0){ee=C,G=Y,V=ie;let $=null,J=!1,ze=!1;if(C){let ke=D.get(C);if(ke.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(F.FRAMEBUFFER,ke.__webglFramebuffer),W.copy(C.viewport),Q.copy(C.scissor),ue=C.scissorTest,T.viewport(W),T.scissor(Q),T.setScissorTest(ue),ae=-1;return}else if(ke.__webglFramebuffer===void 0)z.setupRenderTarget(C);else if(ke.__hasExternalTextures)z.rebindTextures(C,D.get(C.texture).__webglTexture,D.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let at=C.depthTexture;if(ke.__boundDepthTexture!==at){if(at!==null&&D.has(at)&&(C.width!==at.image.width||C.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(C)}}let Ze=C.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(ze=!0);let $e=D.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray($e[Y])?$=$e[Y][ie]:$=$e[Y],J=!0):C.samples>0&&z.useMultisampledRTT(C)===!1?$=D.get(C).__webglMultisampledFramebuffer:Array.isArray($e)?$=$e[ie]:$=$e,W.copy(C.viewport),Q.copy(C.scissor),ue=C.scissorTest}else W.copy(be).multiplyScalar(j).floor(),Q.copy(he).multiplyScalar(j).floor(),ue=we;if(ie!==0&&($=N),T.bindFramebuffer(F.FRAMEBUFFER,$)&&T.drawBuffers(C,$),T.viewport(W),T.scissor(Q),T.setScissorTest(ue),J){let ke=D.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ke.__webglTexture,ie)}else if(ze){let ke=Y;for(let Ze=0;Ze<C.textures.length;Ze++){let $e=D.get(C.textures[Ze]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ze,$e.__webglTexture,ie,ke)}}else if(C!==null&&ie!==0){let ke=D.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ke.__webglTexture,ie)}ae=-1},this.readRenderTargetPixels=function(C,Y,ie,$,J,ze,Ve,ke=0){if(!(C&&C.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=D.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ze=Ze[Ve]),Ze){T.bindFramebuffer(F.FRAMEBUFFER,Ze);try{let $e=C.textures[ke],at=$e.format,ut=$e.type;if(C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ke),!P.textureFormatReadable(at)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(ut)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-$&&ie>=0&&ie<=C.height-J&&F.readPixels(Y,ie,$,J,Re.convert(at),Re.convert(ut),ze)}finally{let $e=ee!==null?D.get(ee).__webglFramebuffer:null;T.bindFramebuffer(F.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(C,Y,ie,$,J,ze,Ve,ke=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=D.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ze=Ze[Ve]),Ze)if(Y>=0&&Y<=C.width-$&&ie>=0&&ie<=C.height-J){T.bindFramebuffer(F.FRAMEBUFFER,Ze);let $e=C.textures[ke],at=$e.format,ut=$e.type;if(C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ke),!P.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Je=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Je),F.bufferData(F.PIXEL_PACK_BUFFER,ze.byteLength,F.STREAM_READ),F.readPixels(Y,ie,$,J,Re.convert(at),Re.convert(ut),0);let wt=ee!==null?D.get(ee).__webglFramebuffer:null;T.bindFramebuffer(F.FRAMEBUFFER,wt);let Kt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Gp(F,Kt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Je),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ze),F.deleteBuffer(Je),F.deleteSync(Kt),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,ie=0){let $=Math.pow(2,-ie),J=Math.floor(C.image.width*$),ze=Math.floor(C.image.height*$),Ve=Y!==null?Y.x:0,ke=Y!==null?Y.y:0;z.setTexture2D(C,0),F.copyTexSubImage2D(F.TEXTURE_2D,ie,0,0,Ve,ke,J,ze),T.unbindTexture()},this.copyTextureToTexture=function(C,Y,ie=null,$=null,J=0,ze=0){let Ve,ke,Ze,$e,at,ut,Je,wt,Kt,Yt=C.isCompressedTexture?C.mipmaps[ze]:C.image;if(ie!==null)Ve=ie.max.x-ie.min.x,ke=ie.max.y-ie.min.y,Ze=ie.isBox3?ie.max.z-ie.min.z:1,$e=ie.min.x,at=ie.min.y,ut=ie.isBox3?ie.min.z:0;else{let $t=Math.pow(2,-J);Ve=Math.floor(Yt.width*$t),ke=Math.floor(Yt.height*$t),C.isDataArrayTexture?Ze=Yt.depth:C.isData3DTexture?Ze=Math.floor(Yt.depth*$t):Ze=1,$e=0,at=0,ut=0}$!==null?(Je=$.x,wt=$.y,Kt=$.z):(Je=0,wt=0,Kt=0);let Rt=Re.convert(Y.format),_n=Re.convert(Y.type),Xe;Y.isData3DTexture?(z.setTexture3D(Y,0),Xe=F.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(z.setTexture2DArray(Y,0),Xe=F.TEXTURE_2D_ARRAY):(z.setTexture2D(Y,0),Xe=F.TEXTURE_2D),T.activeTexture(F.TEXTURE0),T.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Y.flipY),T.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),T.pixelStorei(F.UNPACK_ALIGNMENT,Y.unpackAlignment);let On=T.getParameter(F.UNPACK_ROW_LENGTH),gt=T.getParameter(F.UNPACK_IMAGE_HEIGHT),qn=T.getParameter(F.UNPACK_SKIP_PIXELS),mi=T.getParameter(F.UNPACK_SKIP_ROWS),Ki=T.getParameter(F.UNPACK_SKIP_IMAGES);T.pixelStorei(F.UNPACK_ROW_LENGTH,Yt.width),T.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Yt.height),T.pixelStorei(F.UNPACK_SKIP_PIXELS,$e),T.pixelStorei(F.UNPACK_SKIP_ROWS,at),T.pixelStorei(F.UNPACK_SKIP_IMAGES,ut);let ur=C.isDataArrayTexture||C.isData3DTexture,Ct=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){let $t=D.get(C),$i=D.get(Y),Nt=D.get($t.__renderTarget),Ji=D.get($i.__renderTarget);T.bindFramebuffer(F.READ_FRAMEBUFFER,Nt.__webglFramebuffer),T.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let hr=0;hr<Ze;hr++)ur&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,D.get(C).__webglTexture,J,ut+hr),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,D.get(Y).__webglTexture,ze,Kt+hr)),F.blitFramebuffer($e,at,Ve,ke,Je,wt,Ve,ke,F.DEPTH_BUFFER_BIT,F.NEAREST);T.bindFramebuffer(F.READ_FRAMEBUFFER,null),T.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(J!==0||C.isRenderTargetTexture||D.has(C)){let $t=D.get(C),$i=D.get(Y);T.bindFramebuffer(F.READ_FRAMEBUFFER,B),T.bindFramebuffer(F.DRAW_FRAMEBUFFER,O);for(let Nt=0;Nt<Ze;Nt++)ur?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$t.__webglTexture,J,ut+Nt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,$t.__webglTexture,J),Ct?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$i.__webglTexture,ze,Kt+Nt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,$i.__webglTexture,ze),J!==0?F.blitFramebuffer($e,at,Ve,ke,Je,wt,Ve,ke,F.COLOR_BUFFER_BIT,F.NEAREST):Ct?F.copyTexSubImage3D(Xe,ze,Je,wt,Kt+Nt,$e,at,Ve,ke):F.copyTexSubImage2D(Xe,ze,Je,wt,$e,at,Ve,ke);T.bindFramebuffer(F.READ_FRAMEBUFFER,null),T.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ct?C.isDataTexture||C.isData3DTexture?F.texSubImage3D(Xe,ze,Je,wt,Kt,Ve,ke,Ze,Rt,_n,Yt.data):Y.isCompressedArrayTexture?F.compressedTexSubImage3D(Xe,ze,Je,wt,Kt,Ve,ke,Ze,Rt,Yt.data):F.texSubImage3D(Xe,ze,Je,wt,Kt,Ve,ke,Ze,Rt,_n,Yt):C.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ze,Je,wt,Ve,ke,Rt,_n,Yt.data):C.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ze,Je,wt,Yt.width,Yt.height,Rt,Yt.data):F.texSubImage2D(F.TEXTURE_2D,ze,Je,wt,Ve,ke,Rt,_n,Yt);T.pixelStorei(F.UNPACK_ROW_LENGTH,On),T.pixelStorei(F.UNPACK_IMAGE_HEIGHT,gt),T.pixelStorei(F.UNPACK_SKIP_PIXELS,qn),T.pixelStorei(F.UNPACK_SKIP_ROWS,mi),T.pixelStorei(F.UNPACK_SKIP_IMAGES,Ki),ze===0&&Y.generateMipmaps&&F.generateMipmap(Xe),T.unbindTexture()},this.initRenderTarget=function(C){D.get(C).__webglFramebuffer===void 0&&z.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?z.setTextureCube(C,0):C.isData3DTexture?z.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?z.setTexture2DArray(C,0):z.setTexture2D(C,0),T.unbindTexture()},this.resetState=function(){G=0,V=0,ee=null,T.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};async function Am(){if(typeof window<"u"&&window.MCGROT_ASSETS)return window.MCGROT_ASSETS;let[i,e,t,n,s]=await Promise.all([fetch("assets/manifest.json").then(a=>a.json()),fetch("assets/leith.json").then(a=>a.json()),fetch("assets/catalog.json").then(a=>a.ok?a.json():null).catch(()=>null),fetch("assets/shopfronts/manifest.json").then(a=>a.ok?a.json():null).catch(()=>null),fetch("assets/shopfronts/atlas-pages.json").then(a=>a.ok?a.json():null).catch(()=>null)]),r=await fetch("assets/comic-lines.json").then(a=>a.ok?a.json():null).catch(()=>null),o=await fetch("assets/readings.json").then(a=>a.ok?a.json():null).catch(()=>null);return{manifest:i,leith:e,catalog:t,facadeManifest:n,facadeAtlas:s,comicLines:r,readings:o,images:null,audio:null}}function En(i,e){if(i){if(i.images&&i.images[e])return i.images[e];if(i.audio&&i.audio[e])return i.audio[e];if(i.models&&i.models[e])return i.models[e]}return`assets/${e}`}function rt(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new pt,l=0;for(let u=0;u<i.length;++u){let h=i[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0,h=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+u);u+=i[d].attributes.position.count}c.setIndex(h)}for(let u in r){let h=Rm(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let _=0;_<o[u].length;++_)f.push(o[u][_][d]);let p=Rm(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(p)}}}return c}function Rm(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new Dt(o,t,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let h=c/t;for(let d=0,f=u.count;d<f;d++)for(let p=0;p<t;p++){let _=u.getComponent(d,p);a.setComponent(d+h,p,_)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function Xh(i,e){if(e===bh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Kr||e===da){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Kr)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var xa=(()=>{let i=6221086;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),Pm=8,Yh=2.4,Cm=1.435,Hl=.075,Im=.09,FS=620,US=90,OS=34,BS=.04;function jn(i,e,t){let n=Math.imul(i,374761393)^Math.imul(e,668265263)^Math.imul(t,2246822519);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function zS(i,e,t,n){let s=Math.floor(i),r=Math.floor(e),o=i-s,a=e-r,c=o*o*(3-2*o),l=a*a*(3-2*a),u=(_,m)=>jn((_%t+t)%t,(m%t+t)%t,n),h=u(s,r),d=u(s+1,r),f=u(s,r+1),p=u(s+1,r+1);return h+(d-h)*c+(f+(p-f)*c-(h+(d-h)*c))*l}function nn(i,e,t,n,s){let r=0,o=.5,a=1;for(let c=0;c<n;c++)r+=o*zS(i*a,e*a,t*a,s+c*17),a*=2,o*=.5;return r}function er(i,e){let t=new Et(i);return t.wrapS=t.wrapT=$n,t.colorSpace=tt,t.anisotropy=16,e&&t.repeat.set(e[0],e[1]),t}function Lm(){let t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d"),s=n.createImageData(512,512),r=s.data;for(let o=0;o<512;o++)for(let a=0;a<512;a++){let c=a/512*8,l=o/512*8,u=44,h=45,d=41,f=nn(c,l,8,4,1)-.5;u+=f*26,h+=f*26,d+=f*22;let p=nn(c*.5,l*.5,Math.max(1,4),2,7);if(p>.6){let S=Math.min(1,(p-.6)*6);u+=(26-u)*.55*S,h+=(26-h)*.55*S,d+=(25-d)*.55*S}let _=jn(a,o,99),m=_>.86?(_-.86)*300:_<.1?-_*90:0;u+=m,h+=m,d+=m*.9;let g=c*1.6+nn(c*3,l*3,32,2,55)*1.4,b=l*1.6+nn(c*3+9,l*3+9,32,2,71)*1.4,M=Math.abs(nn(g,b,16,3,21)-.5);if(M<.012){let S=1-M/.012;u-=15*S,h-=15*S,d-=14*S}let x=(o*512+a)*4;r[x]=Math.max(0,Math.min(255,u)),r[x+1]=Math.max(0,Math.min(255,h)),r[x+2]=Math.max(0,Math.min(255,d)),r[x+3]=255}return n.putImageData(s,0,0),er(t)}function Nm(){let n=document.createElement("canvas");n.width=n.height=512;let s=n.getContext("2d"),r=s.createImageData(512,512),o=r.data,a=512/4,c=3;for(let l=0;l<512;l++)for(let u=0;u<512;u++){let h=Math.floor(u/a),d=Math.floor(l/a),f=u-h*a,p=l-d*a,_=f<c||p<c||f>a-c||p>a-c,m=(jn(h,d,5)-.5)*18,g=78+m,b=77+m,M=71+m,x=u/512*8,S=l/512*8,E=nn(x,S,8,4,3)-.5;g+=E*34,b+=E*34,M+=E*30,_&&(g*=.52,b*=.56,M*=.48);let v=jn(u,l,41),y=v>.9?(v-.9)*160:0;g+=y,b+=y,M+=y;let w=(l*512+u)*4;o[w]=Math.max(0,Math.min(255,g)),o[w+1]=Math.max(0,Math.min(255,b)),o[w+2]=Math.max(0,Math.min(255,M)),o[w+3]=255}return s.putImageData(r,0,0),er(n)}function Dm(i,e){let n=document.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d"),r=s.createImageData(256,256),o=r.data,a=256/2;for(let l=0;l<256;l++)for(let u=0;u<256;u++){let h=(u-a)/a,d=(l-a)/a,f=Math.atan2(d,h),p=Math.hypot(h,d),_=.7+.26*nn(Math.cos(f)*2+4,Math.sin(f)*2+4,8,3,i),[m,g,b,M]=e(p/_,u,l),x=(l*256+u)*4;o[x]=Math.max(0,Math.min(255,m)),o[x+1]=Math.max(0,Math.min(255,g)),o[x+2]=Math.max(0,Math.min(255,b)),o[x+3]=Math.max(0,Math.min(255,M))}s.putImageData(r,0,0);let c=new Et(n);return c.colorSpace=tt,c.anisotropy=16,c}function qh(i,e,t){return[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t]}function kS(){let i=[10,10,9],e=[40,39,35],t=[104,100,88];return Dm(11,(n,s,r)=>{let o=jn(s,r,63),a;n<.72?a=qh(i,e,_a(0,.72,n)):(a=qh(e,t,_a(.72,.97,n)),a=a.map(l=>l+(o-.5)*26));let c=(1-_a(.9,1,n))*255;return[a[0],a[1],a[2],c]})}function HS(){let i=[104,110,96],e=[52,54,48];return Dm(23,t=>{let n=qh(i,e,_a(.35,1,t)),s=(1-_a(.86,1,t))*255;return[n[0],n[1],n[2],s]})}function _a(i,e,t){let n=Math.max(0,Math.min(1,(t-i)/(e-i||1e-6)));return n*n*(3-2*n)}var Zh=26;function Fm(){let t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d"),s=n.createImageData(512,512),r=s.data;for(let o=0;o<512;o++)for(let a=0;a<512;a++){let c=a/512*8,l=o/512*8,u=62,h=52,d=36,f=nn(c,l,8,4,131)-.5;u+=f*30,h+=f*26,d+=f*20;let p=nn(c*.9+3,l*.9+3,8,3,137);if(p>.56){let M=Math.min(1,(p-.56)*5);u+=(52-u)*.6*M,h+=(60-h)*.6*M,d+=(34-d)*.6*M}let _=nn(c*.6+11,l*.6+11,8,3,149);if(_<.42){let M=Math.min(1,(.42-_)*4);u*=1-.28*M,h*=1-.26*M,d*=1-.22*M}let m=jn(a,o,151),g=m>.9?(m-.9)*220:m<.07?-m*120:0;u+=g,h+=g*.95,d+=g*.8;let b=(o*512+a)*4;r[b]=Math.max(0,Math.min(255,u)),r[b+1]=Math.max(0,Math.min(255,h)),r[b+2]=Math.max(0,Math.min(255,d)),r[b+3]=255}return n.putImageData(s,0,0),er(t)}function Um(){let t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d"),s=n.createImageData(512,512),r=s.data;for(let a=0;a<512;a++)for(let c=0;c<512;c++){let l=c/512*22,u=a/512*22,h=40,d=47,f=26,p=nn(l,u,22,4,211)-.5;h+=p*30,d+=p*36,f+=p*20;let _=nn(l*.55+5,u*.55+5,22,3,223);if(_>.5){let R=Math.min(1,(_-.5)*5);h+=(24-h)*.8*R,d+=(33-d)*.8*R,f+=(17-f)*.8*R}let m=nn(l*.7+17,u*.7+2,22,3,239);if(m>.62){let R=Math.min(1,(m-.62)*6);h+=(66-h)*.55*R,d+=(58-d)*.55*R,f+=(36-f)*.55*R}let g=Math.abs(nn(l*.5+9,u*2.2,22,2,227)-.5);if(g<.035){let R=1-g/.035;h+=(74-h)*.5*R,d+=(64-d)*.5*R,f+=(44-f)*.5*R}let b=jn(c,a,229),M=b>.88?(b-.88)*160:0;h+=M*.7,d+=M,f+=M*.5;let x=Math.min(c,511-c)/512,S=Math.min(a,511-a)/512,E=Math.min(x,S)/.14,v=nn(l*2,u*2,44,2,233)*.5,y=Math.max(0,Math.min(1,E-v)),w=(a*512+c)*4;r[w]=Math.max(0,Math.min(255,h)),r[w+1]=Math.max(0,Math.min(255,d)),r[w+2]=Math.max(0,Math.min(255,f)),r[w+3]=Math.round(y*255)}n.putImageData(s,0,0);let o=new Et(t);return o.colorSpace=tt,o.anisotropy=16,o}function Om(i,e){let t=i.streetLine||[];if(t.length<2)return{group:new it};let n=i.groundHeight||(()=>0),s=new it;return e.add(s),GS(t,s,n),VS(t,s,n),{group:s}}function ya(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0;return{point:[s+c*h,r+l*h],tangent:[c/(u||1),l/(u||1)]}}t+=u}return null}function Bm(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function GS(i,e,t){let n=Math.min(FS,Bm(i)),s=3,r=[],o=[[-Hl/2,0],[-Hl/2,Im],[Hl/2,Im],[Hl/2,0]];for(let l of[-1,1]){let u=[],h=[],d=0;for(let _=0;_<=n;_+=s){let m=ya(i,_);if(!m)break;let[g,b]=m.tangent,M=-b,x=g,S=m.point[0]+M*l*(Cm/2),E=m.point[1]+x*l*(Cm/2),v=t(S,E);for(let[y,w]of o)u.push(S+M*y,v+w,E+x*y);d++}if(d<2)continue;let f=o.length;for(let _=0;_<d-1;_++)for(let m=0;m<f-1;m++){let g=_*f+m,b=_*f+m+1,M=(_+1)*f+m,x=(_+1)*f+m+1;h.push(g,M,b,b,M,x)}let p=new pt;p.setAttribute("position",new je(u,3)),p.setIndex(h),p.computeVertexNormals(),r.push(p)}if(!r.length)return;let a=rt(r,!1),c=new Ye({color:4142124,side:Ft});e.add(new He(a,c))}function VS(i,e,t){let n=Bm(i),s=kS(),r=HS(),o=(a,c,l,u,h,d)=>{let f=[];for(let _=0;_<c;_++){let m=20+xa()*Math.max(1,n-40),g=ya(i,m);if(!g)continue;let[b,M]=g.tangent,x=-M,S=b,E=(xa()*2-1)*l,v=g.point[0]+x*E,y=g.point[1]+S*E,w=u+xa()*(h-u),R=new Ot(w,w*(.6+xa()*.7));R.rotateX(-Math.PI/2),R.rotateY(xa()*Math.PI*2),R.translate(v,t(v,y)+BS,y),f.push(R)}if(!f.length)return;let p=new Ye({map:a,transparent:!0,opacity:d,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});e.add(new He(rt(f,!1),p))};o(s,US,6.2,.7,2.4,.92),o(r,OS,6.2,1.2,3.6,.5)}var WS=2;function zm(i){let e=[],t=[],n=[];function s(h){for(let d=0;d<e.length;d++){let f=e[d].x-h[0],p=e[d].z-h[1];if(Math.hypot(f,p)<WS)return d}return e.push({x:h[0],z:h[1]}),e.length-1}i.forEach((h,d)=>{if(h.length<2)return;let f=s(h[0]),p=s(h[h.length-1]);t[d]=[f,p],(n[f]??=[]).push({segIdx:d,otherNode:p}),(n[p]??=[]).push({segIdx:d,otherNode:f})});let r=new Set;function o(h){let d=[[e[h].x,e[h].z]],f=h;for(;;){let p=(n[f]||[]).filter(x=>!r.has(x.segIdx));if(p.length===0)break;let{segIdx:_,otherNode:m}=p[0];r.add(_);let g=i[_],[b]=t[_],M=b===f?g:[...g].reverse();for(let x=1;x<M.length;x++)d.push(M[x]);f=m}return d}function a(h){let d=0;for(let f=1;f<h.length;f++)d+=Math.hypot(h[f][0]-h[f-1][0],h[f][1]-h[f-1][1]);return d}let c=[],l=e.map((h,d)=>d).filter(h=>(n[h]||[]).length!==2);for(let h of l){let d=r.size,f=o(h);r.size>d&&c.push(f)}for(let h=0;h<e.length;h++)(n[h]||[]).some(f=>!r.has(f.segIdx))&&c.push(o(h));c.sort((h,d)=>a(d)-a(h));let u=c[0]||[];return u.length>1&&u[0][1]>u[u.length-1][1]&&u.reverse(),u}function km(i){return function(t,n){let s=null,r=1/0,o=null;for(let a=0;a<i.length-1;a++){let[c,l]=i[a],[u,h]=i[a+1],d=u-c,f=h-l,p=d*d+f*f,_=p>0?((t-c)*d+(n-l)*f)/p:0;_=Math.max(0,Math.min(1,_));let m=c+_*d,g=l+_*f,b=Math.hypot(t-m,n-g);if(b<r){r=b,s=[m,g];let M=Math.sqrt(p);o=M>0?[d/M,f/M]:[0,1]}}return{point:s,distance:r,tangent:o}}}function xs(i,e,t){let n=1/0,s=0,r=0;for(let o=0;o<t.length-1;o++){let[a,c]=t[o],[l,u]=t[o+1],h=l-a,d=u-c,f=h*h+d*d,p=Math.sqrt(f),_=f>0?((i-a)*h+(e-c)*d)/f:0;_=Math.max(0,Math.min(1,_));let m=Math.hypot(i-(a+_*h),e-(c+_*d));m<n&&(n=m,s=r+_*p),r+=p}return s}function Kh(i,e){let t=0,n=0;for(let o=0;o<i.length-1;o++){let[a,c]=i[o],[l,u]=i[o+1],h=Math.hypot(l-a,u-c);if(n=t,t+=h,e<=t||o===i.length-2){let d=h>0?Math.max(0,Math.min(1,(e-n)/h)):0,f=a+(l-a)*d,p=c+(u-c)*d,_=h>0?[(l-a)/h,(u-c)/h]:[0,1];return{point:[f,p],tangent:_}}}let[s,r]=i[0]||[0,0];return{point:[s,r],tangent:[0,1]}}function Qr(i,e){let t=i.footprint,n=[];if(!t||t.length<3||!e)return n;let s=0,r=0;for(let a of t)s+=a[0],r+=a[1];s/=t.length,r/=t.length;let o=[];for(let a=0;a<t.length;a++){let c=t[a],l=t[(a+1)%t.length],u=l[0]-c[0],h=l[1]-c[1],d=Math.hypot(u,h);if(d<.25)continue;let f=(c[0]+l[0])/2,p=(c[1]+l[1])/2,_=e(f,p);if(!_||!_.point)continue;let m=e(c[0],c[1]),g=e(l[0],l[1]);if(Math.min(_.distance,m?m.distance:1/0,g?g.distance:1/0)>30)continue;let M=1/d,x=-h*M,S=u*M;x*(f-s)+S*(p-r)<0&&(x=-x,S=-S);let E=_.point[0]-f,v=_.point[1]-p,y=Math.hypot(E,v)||1,w=(x*E+S*v)/y;if(w<-.3||!(w>=.35))continue;let A=!1;_.tangent&&d<=9&&(A=Math.abs(u*M*_.tangent[0]+h*M*_.tangent[1])<.88),o.push({i:a,ax:c[0],az:c[1],bx:l[0],bz:l[1],dirx:u*M,dirz:h*M,len:d,isChamfer:A})}for(let a of o){let c=n[n.length-1];c&&a.i===c.endEdge+1&&c.dirx*a.dirx+c.dirz*a.dirz>.985?(c.bx=a.bx,c.bz=a.bz,c.len+=a.len,c.endEdge=a.i,c.isChamfer=c.isChamfer||a.isChamfer):n.push({ax:a.ax,az:a.az,bx:a.bx,bz:a.bz,dirx:a.dirx,dirz:a.dirz,len:a.len,isChamfer:a.isChamfer,startEdge:a.i,endEdge:a.i})}if(n.length>1){let a=n[0],c=n[n.length-1];c.endEdge===t.length-1&&a.startEdge===0&&Math.hypot(c.bx-a.ax,c.bz-a.az)<.5&&c.dirx*a.dirx+c.dirz*a.dirz>.985&&(a.ax=c.ax,a.az=c.az,a.len+=c.len,a.isChamfer=a.isChamfer||c.isChamfer,n.pop())}return n}var Zi=[[0,0],[150,.6],[300,1.8],[450,3.6],[600,6.2],[750,9.4],[900,13],[1050,16.6],[1200,19.9],[1350,22.8],[1500,25.4],[1617,27]],jh=1;function XS(i){jh=Number.isFinite(i)&&i>0?i:1}function qS(){return jh}var Jh=Zi.length,Hm=Zi.map((i,e)=>{if(e===0||e===Jh-1)return 0;let t=Zi[e-1],n=Zi[e+1];return(n[1]-t[1])/(n[0]-t[0])});function YS(i,e,t,n,s,r){let o=i*i,a=o*i,c=2*a-3*o+1,l=a-2*o+i,u=-2*a+3*o,h=a-o;return c*e+l*r*n+u*t+h*r*s}function ZS(i){if(i<=Zi[0][0])return Zi[0][1];let e=Zi[Jh-1];if(i>=e[0])return e[1];for(let t=0;t<Jh-1;t++){let[n,s]=Zi[t],[r,o]=Zi[t+1];if(i>=n&&i<=r){let a=r-n,c=a>0?(i-n)/a:0;return YS(c,s,o,Hm[t],Hm[t+1],a)}}return e[1]}function $h(i){return ZS(i)*jh}function Gm(i){function e(t,n){if(!i||i.length<2)return $h(0);let s=xs(t,n,i);return $h(s)}return{groundHeight:e,heightAtChainage:$h,setExaggeration:XS,getExaggeration:qS}}function KS(i){let e=1/0,t=-1/0,n=1/0,s=-1/0;for(let[r,o]of i)r<e&&(e=r),r>t&&(t=r),o<n&&(n=o),o>s&&(s=o);return{minX:e,maxX:t,minZ:n,maxZ:s}}function Wm(i,e,t,n,s,r){let o=s-t,a=r-n,c=o*o+a*a,l=c>0?((i-t)*o+(e-n)*a)/c:0;l=l<0?0:l>1?1:l;let u=t+o*l,h=n+a*l;return{cx:u,cz:h,dist:Math.hypot(i-u,e-h)}}function Xm(i,e,t){let n=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){let[o,a]=t[s],[c,l]=t[r];a>e!=l>e&&i<(c-o)*(e-a)/(l-a)+o&&(n=!n)}return n}function $S(i,e,t,n){if(i.type==="circle"){let d=e-i.x,f=t-i.z,p=Math.hypot(d,f),_=i.r+n;return p>=_?null:p<1e-6?{depth:_,nx:1,nz:0}:{depth:_-p,nx:d/p,nz:f/p}}let s=i.pts,r=null;for(let d=0,f=s.length-1;d<s.length;f=d++){let p=Wm(e,t,s[f][0],s[f][1],s[d][0],s[d][1]);(!r||p.dist<r.dist)&&(r=p)}if(!r)return null;let o=Xm(e,t,s);if(!o&&r.dist>=n)return null;let a=o?-1:1,c=(e-r.cx)*a,l=(t-r.cz)*a,u=Math.hypot(c,l),h=o?r.dist+n:n-r.dist;return u<1e-6?{depth:h,nx:1,nz:0}:{depth:h,nx:c/u,nz:l/u}}function Vm(i,e,t,n){if(i.type==="circle"){let h=e-i.x,d=t-i.z,f=Math.hypot(h,d),p=i.r+n;return f>=p?null:f<1e-6?[i.x+p,i.z]:[i.x+h/f*p,i.z+d/f*p]}let s=i.pts,r=null;for(let h=0,d=s.length-1;h<s.length;d=h++){let f=Wm(e,t,s[d][0],s[d][1],s[h][0],s[h][1]);(!r||f.dist<r.dist)&&(r=f)}if(!r)return null;let o=Xm(e,t,s);if(!o&&r.dist>=n)return null;let a=o?1:-1,c=(r.cx-e)*a,l=(r.cz-t)*a,u=Math.hypot(c,l);return u<1e-6?[r.cx,r.cz]:[r.cx+c/u*n,r.cz+l/u*n]}function qm(){let i=[],e=[],t=new Map,n=!0,s=(b,M)=>`${b},${M}`;function r(b){let M=i.length;i.push(b);let{minX:x,maxX:S,minZ:E,maxZ:v}=b.bounds,y=Math.floor(x/8),w=Math.floor(S/8),R=Math.floor(E/8),A=Math.floor(v/8);for(let I=y;I<=w;I++)for(let N=R;N<=A;N++){let B=s(I,N),O=t.get(B);O||t.set(B,O=[]),O.push(M)}return M}function o(b,M="poly"){if(!Array.isArray(b)||b.length<3)return-1;let x=b.filter(S=>Array.isArray(S)&&Number.isFinite(S[0])&&Number.isFinite(S[1]));return x.length<3?-1:r({type:"poly",tag:M,pts:x,bounds:KS(x)})}function a(b,M,x,S,E=0,v="box"){if(![b,M,x,S,E].every(Number.isFinite)||x<=0||S<=0)return-1;let y=Math.sin(E),w=Math.cos(E),R=(A,I)=>[b+A*x*w+I*S*y,M-A*x*y+I*S*w];return o([R(-1,-1),R(1,-1),R(1,1),R(-1,1)],v)}function c(b,M,x,S="circle"){return![b,M,x].every(Number.isFinite)||x<=0?-1:r({type:"circle",tag:S,x:b,z:M,r:x,bounds:{minX:b-x,maxX:b+x,minZ:M-x,maxZ:M+x}})}function l(b,M,x,S="mover"){return typeof b!="function"||typeof M!="function"||!Number.isFinite(x)||x<=0?-1:(e.push({type:"circle",tag:S,r:x,get x(){return b()},get z(){return M()}}),e.length-1)}function u(b,M,x){let S=new Set,E=[],v=Math.floor((b-x)/8),y=Math.floor((b+x)/8),w=Math.floor((M-x)/8),R=Math.floor((M+x)/8);for(let A=v;A<=y;A++)for(let I=w;I<=R;I++){let N=t.get(s(A,I));if(N)for(let B of N)S.has(B)||(S.add(B),E.push(i[B]))}for(let A of e)E.push(A);return E}function h(b,M,x){let S=b,E=M;for(let v=0;v<4;v++){let y=!1;for(let w of u(S,E,x)){let R=Vm(w,S,E,x);R&&(S=R[0],E=R[1],y=!0)}if(!y)return[S,E,!0]}return[S,E,!1]}function d(b,M,x){let S=null;for(let E of u(b,M,x)){let v=$S(E,b,M,x);v&&(!S||v.depth>S.depth)&&(S=v)}return S}function f(b,M,x,S){if(!n||i.length===0&&e.length===0)return[x,S];let E=x-b,v=S-M,y=Math.hypot(E,v);if(y<1e-9)return[x,S];let w=b,R=M;if(_(w,R)){let[B,O]=h(w,R,.35);w=B,R=O}let A=y>.25?Math.ceil(y/.25):1,I=E/A,N=v/A;for(let B=0;B<A;B++){let O=w+I,G=R+N;if(!_(O,G)){w=O,R=G;continue}let V=d(O,G,.35);if(!V)break;let ee=I*V.nx+N*V.nz,ae=w+I-V.nx*ee,de=R+N-V.nz*ee;if(!_(ae,de)){w=ae,R=de;continue}break}return[w,R]}function p(b,M,x=.35*1.5){if(i.length===0&&e.length===0)return[b,M];let[S,E]=h(b,M,x);return[S,E]}function _(b,M,x=.35){for(let S of u(b,M,x))if(Vm(S,b,M,x))return!0;return!1}function m(){let b={};for(let M of i)b[M.tag]=(b[M.tag]||0)+1;for(let M of e)b[M.tag]=(b[M.tag]||0)+1;return{solids:i.length,movers:e.length,cells:t.size,byTag:b,enabled:n}}function g(b){let M=[];for(let x of i)x.tag===b&&x.type==="circle"&&M.push(x.r);for(let x of e)x.tag===b&&M.push(x.r);return M}return{addPolygon:o,addBox:a,addCircle:c,addMover:l,radii:g,playerRadius:.35,resolveMove:f,resolveFree:p,isBlocked:_,stats:m,setEnabled:b=>{n=!!b},isEnabled:()=>n,get count(){return i.length+e.length}}}var va=7,JS=3,Ym=va+JS,jS=.03,QS=3.2,Zm=-.06,e1=4870466,Km=[9078112,7039843,8016448,5592655,7630666,7232847,6249034,8153690],$m=4;function t1(){let t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d"),s=n.createImageData(256,256),r=s.data,a=256/13;for(let c=0;c<256;c++){let l=Math.floor(c/a),h=c-l*a<2;for(let d=0;d<256;d++){let f=d/256*16,p=c/256*16,_=150,m=146,g=134,b=nn(f,p,16,4,61)-.5;_+=b*34,m+=b*32,g+=b*28;let M=Math.floor((d+l*37)/(256/5)),x=(jn(M,l,17)-.5)*22;_+=x,m+=x,g+=x,h&&(_*=.62,m*=.62,g*=.6);let S=nn(f*.35,p*.9+4,16,3,83);if(S>.56){let w=Math.min(1,(S-.56)*4.5);_*=1-.35*w,m*=1-.33*w,g*=1-.28*w}let E=jn(d,c,97),v=E>.92?(E-.92)*200:0;_+=v,m+=v,g+=v*.9;let y=(c*256+d)*4;r[y]=Math.max(0,Math.min(255,_)),r[y+1]=Math.max(0,Math.min(255,m)),r[y+2]=Math.max(0,Math.min(255,g)),r[y+3]=255}}return n.putImageData(s,0,0),er(t,[1/$m,1/$m])}function Qm(i){let e=new it,t=zm(i.streetPaths),n=Gm(t),s=n.groundHeight,r=n1(i.streetPaths,s);r&&e.add(r);let o=r?{road:r.children[0].material,pavement:r.children[1].material}:{},a=s1(i.buildings,s);a&&e.add(a);let c=qm();for(let h of i.buildings)c.addPolygon(h.footprint,"building");e.add(c1(i,s)),e.add(l1(s));let l=u1(e),u=new Io(e1,.0095);return{group:e,streetLine:t,nearestStreetPoint:km(t),collision:c,fog:u,groundHeight:s,setExaggeration:n.setExaggeration,getExaggeration:n.getExaggeration,lights:l,surfaces:o}}function n1(i,e){let t=[],n=[];for(let r of i){if(r.length<2)continue;let o=i1(r,e);o&&(t.push(o.road),n.push(o.paving))}if(t.length===0)return null;let s=new it;return s.position.y=jS,s.add(new He(rt(t,!1),new bi({map:Lm(),roughness:1,metalness:0}))),s.add(new He(rt(n,!1),new bi({map:Nm(),roughness:1,metalness:0}))),s}function i1(i,e){let t=i.length,n=[],s=[],r=0;for(let a=0;a<t;a++){let c=i[Math.max(0,a-1)],l=i[Math.min(t-1,a+1)],u=l[0]-c[0],h=l[1]-c[1],d=Math.hypot(u,h)||1;n.push([-h/d,u/d]),a>0&&(r+=Math.hypot(i[a][0]-i[a-1][0],i[a][1]-i[a-1][1])),s.push(r)}let o=(a,c,l)=>{let u=[],h=[],d=[],f=Math.abs(c-a);for(let _=0;_<t;_++){let[m,g]=i[_],[b,M]=n[_],x=s[_]/l,S=m+b*a,E=g+M*a,v=m+b*c,y=g+M*c;u.push(S,e?e(S,E):0,E),u.push(v,e?e(v,y):0,y),h.push(0,x,f/l,x)}for(let _=0;_<t-1;_++){let m=_*2,g=_*2+1,b=(_+1)*2,M=(_+1)*2+1;d.push(m,g,M,m,M,b)}let p=new pt;return p.setAttribute("position",new je(u,3)),p.setAttribute("uv",new je(h,2)),p.setIndex(d),p.computeVertexNormals(),p};return{road:o(-va,va,Pm),paving:rt([o(-Ym,-va,Yh),o(va,Ym,Yh)],!1)}}function s1(i,e){let t=[],n=0;if(i.forEach((a,c)=>{let l=o1(a,c,e);l?t.push(l):n++}),t.length===0)return null;n>0&&console.warn(`[world] skipped ${n}/${i.length} buildings with bad footprints`);let s=rt(t,!1),r=new Ye({vertexColors:!0,flatShading:!0,map:t1()}),o=new He(s,r);return o.name="buildings",o}var r1=3;function o1(i,e,t){let{footprint:n,levels:s}=i;if(!n||n.length<3)return null;let r=Math.max(1,s||1)*QS;try{let o=new Gr;o.moveTo(n[0][0],-n[0][1]);for(let d=1;d<n.length;d++)o.lineTo(n[d][0],-n[d][1]);o.closePath();let a=t?r1:0,c=new qo(o,{depth:r+a,bevelEnabled:!1,curveSegments:1});if(c.rotateX(-Math.PI/2),t){let d=0,f=0;for(let[_,m]of n)d+=_,f+=m;d/=n.length,f/=n.length;let p=t(d,f);c.translate(0,p-a,0)}let l=td(e,i),u=c.attributes.position.count,h=new Float32Array(u*3);for(let d=0;d<u;d++)h[d*3]=l.r,h[d*3+1]=l.g,h[d*3+2]=l.b;return c.setAttribute("color",new je(h,3)),c}catch{return null}}function td(i,e){let t=Math.abs(a1(`${i}:${e.footprint[0][0]}:${e.footprint[0][1]}`)),n=new me(Km[t%Km.length]),s={h:0,s:0,l:0};n.getHSL(s);let r=(t%17/17-.5)*.12,o=new me;return o.setHSL(s.h,s.s,Math.min(.85,Math.max(.08,s.l+r))),o}function a1(i){let e=0;for(let t=0;t<i.length;t++)e=(e<<5)-e+i.charCodeAt(t),e|=0;return e}function c1(i,e){let t=1/0,n=-1/0,s=1/0,r=-1/0;for(let g of i.buildings)for(let[b,M]of g.footprint)b<t&&(t=b),b>n&&(n=b),M<s&&(s=M),M>r&&(r=M);let o=400,a=n-t+o*2,c=r-s+o*2,l=(t+n)/2,u=(s+r)/2,h=Math.max(1,Math.round(a/10)),d=Math.max(1,Math.round(c/10)),f=new Ot(a,c,h,d);if(f.rotateX(-Math.PI/2),e){let g=f.attributes.position;for(let b=0;b<g.count;b++){let M=g.getX(b)+l,x=g.getZ(b)+u;g.setY(b,e(M,x)+Zm)}g.needsUpdate=!0,f.computeVertexNormals()}let p=Fm();p.repeat.set(a/Zh,c/Zh);let _=new Ye({map:p}),m=new He(f,_);return m.position.set(l,e?0:Zm,u),m}var Qh=-719,ed=1303;function l1(i){let e=new Ot(80,14,20,2);e.rotateX(-Math.PI/2);let t=-.483,n=.876;if(e.rotateY(Math.atan2(-n,t)),i){let u=e.attributes.position;for(let h=0;h<u.count;h++){let d=u.getX(h)+Qh,f=u.getZ(h)+ed;u.setY(h,i(d,f)+.02)}u.needsUpdate=!0,e.computeVertexNormals()}let s=new He(e,new Ye({map:Um(),transparent:!0,depthWrite:!1}));s.position.set(Qh,i?0:.02,ed),s.name="elm-row-gardens";let r=924192,o=()=>{r|=0,r=r+1831565813|0;let u=Math.imul(r^r>>>15,1|r);return u=u+Math.imul(u^u>>>7,61|u)^u,((u^u>>>14)>>>0)/4294967296},a=[];for(let u=0;u<26;u++){let h=(o()-.5)*74,d=(o()-.5)*10,f=new ai(1,6,4),p=.5+o()*1.3;f.scale(.9+o()*1.6,p,.9+o()*1.6),f.rotateY(o()*Math.PI);let _=Qh+t*h-n*d,m=ed+n*h+t*d,g=i?i(_,m):0;f.translate(_,g+p*.55,m),a.push(f)}let c=new He(rt(a),new Ye({color:3029024}));c.name="elm-row-bushes";let l=new it;return l.add(s,c),l}function u1(i){let e=new Ko(9147296,3814180,3.9);i.add(e);let t=new Zs(13621480,1.15);t.position.set(-200,300,150),t.castShadow=!1,i.add(t);let n=new jo(4999224,1.4);return i.add(n),{hemi:e,sun:t,ambient:n}}var h1=16747082,Jm=18,d1=5,jm=10;function e0(i){let e=new ui(h1,Jm,jm,2);e.position.set(.15,-.15,.1),i.add(e);let t=1,n=!0;function s(c){t=c,o()}function r(c){n=!!c,o()}function o(){e.distance=n?Math.max(.05,jm*t):.05}function a(c){let l=Math.sin(c*11.3)*.5+Math.sin(c*27.1)*.3+Math.sin(c*4.7)*.2;e.intensity=n?(Jm+l*d1*.3333)*t:0}return{light:e,update:a,setDarkness:s,setToggle:r}}var Gl=Math.PI/2-.05,Vl={KeyW:"forward",ArrowUp:"forward",KeyS:"backward",ArrowDown:"backward",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right"};function n0(i,e,{nearestStreetPoint:t,spawn:n,groundHeight:s,collision:r}){let o=n.yaw||0,a=0,c=s?s(n.x,n.z):0;i.position.set(n.x,c+1.7,n.z),i.rotation.order="YXZ",m();let l=new Set,u=!1,h=0,d=0,f=!1,p=!0,_=!0;function m(){i.rotation.set(a,o,0)}function g(A){p&&Vl[A.code]&&(l.add(Vl[A.code]),A.preventDefault())}function b(A){Vl[A.code]&&l.delete(Vl[A.code])}function M(A){if(p&&(u=!0,h=A.clientX,d=A.clientY,e.setPointerCapture?.(A.pointerId),!f&&e.requestPointerLock))try{let I=e.requestPointerLock();I&&typeof I.catch=="function"&&I.catch(()=>{})}catch{}}function x(A){if(f){o-=(A.movementX||0)*.0025,a-=(A.movementY||0)*.0025,a=t0(a,-Gl,Gl),m();return}if(!u)return;let I=A.clientX-h,N=A.clientY-d;h=A.clientX,d=A.clientY,o-=I*.0035,a-=N*.0035,a=t0(a,-Gl,Gl),m()}function S(A){u=!1,e.releasePointerCapture?.(A.pointerId)}function E(){f=document.pointerLockElement===e}window.addEventListener("keydown",g),window.addEventListener("keyup",b),e.addEventListener("pointerdown",M),window.addEventListener("pointermove",x),window.addEventListener("pointerup",S),document.addEventListener("pointerlockchange",E);function v(A){p=!!A,p||(l.clear(),u=!1)}function y(A){p&&(A?l.add("forward"):l.delete("forward"))}function w(A){if(!p)return;let I=0,N=0;if(l.has("forward")&&(N-=1),l.has("backward")&&(N+=1),l.has("left")&&(I-=1),l.has("right")&&(I+=1),I!==0||N!==0){let B=Math.hypot(I,N);I/=B,N/=B;let O=Math.sin(o),G=Math.cos(o),V=-O,ee=-G,ae=G,de=-O,W=(V*-N+ae*I)*14*A,Q=(ee*-N+de*I)*14*A,ue=i.position.x+W,_e=i.position.z+Q;if(r){let[te,j]=r.resolveMove(i.position.x,i.position.z,ue,_e);ue=te,_e=j}let{point:Te,distance:Z}=t(ue,_e);if(Te&&Z>16){let te=16/Z;ue=Te[0]+(ue-Te[0])*te,_e=Te[1]+(_e-Te[1])*te}i.position.x=ue,i.position.z=_e}s&&_&&(i.position.y=s(i.position.x,i.position.z)+1.7)}function R(){window.removeEventListener("keydown",g),window.removeEventListener("keyup",b),e.removeEventListener("pointerdown",M),window.removeEventListener("pointermove",x),window.removeEventListener("pointerup",S),document.removeEventListener("pointerlockchange",E)}return{update:w,dispose:R,setEnabled:v,setForward:y,setYFollow:A=>{_=!!A}}}function t0(i,e,t){return Math.max(e,Math.min(t,i))}var Ma=[{id:"01b27ac5",landmark:"Spey Lounge",kind:"pub",chainage:82},{id:"081eb3ed",landmark:"Kvasa",kind:"bakery",chainage:196},{id:"0e21d212",landmark:"Toast",kind:"cafe",chainage:394},{id:"124327ee",landmark:"Alhambra Bar",kind:"pub",chainage:467},{id:"1a29e4f5",landmark:"Storries Home Bakery",kind:"bakery",chainage:621},{id:"1f6380d3",landmark:"Cupp",kind:"cafe",chainage:725},{id:"26210448",landmark:"GAIA Italian Delicatessen",kind:"cafe",chainage:862},{id:"2b05b3fb",landmark:"Golden Ambal",kind:"restaurant",chainage:994},{id:"2dd9394b",landmark:"Otherworld",kind:"pub",chainage:1056},{id:"315d8c0e",landmark:"Not Just Coffee",kind:"cafe",chainage:1142},{id:"3706c73f",landmark:"The Joker & The Thief",kind:"pub",chainage:1250},{id:"51834c74",landmark:"Guajira",kind:"cafe",chainage:1391}];function i0(){return new Map(Ma.map(i=>[i.id,i]))}function s0(i){return Array.isArray(i)?i.length:0}var p1=6,r0=40,m1=60,g1=1.35,x1=85,a0=[4867638,4276026,5525567,3882292,5195578,3749420,4737602,5919040],o0=[7025448,7363619,3032640,5849646,4011091,6703646],_1=.024,y1=10,v1=.012,M1=25,b1=8,S1=new li;function c0(i,e){return S1.load(i,t=>{t.colorSpace=tt,e&&e(t)})}function tr(i,e,t){let n=Math.imul(i,374761393)^Math.imul(e,668265263)^Math.imul(t,2246822519);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function E1(i,e,t){let s=document.createElement("canvas");s.width=s.height=64;let r=s.getContext("2d"),o=r.createImageData(64,64),a=o.data,c={r:(i>>16&255)/255,g:(i>>8&255)/255,b:(i&255)/255};for(let u=0;u<64;u++)for(let h=0;h<64;h++){let d=t?1+.14*Math.sin(u*1.9)+(tr(h,u,e)-.5)*.1:1.05+.1*Math.sin(h*2.3)+(tr(h,u,e)-.5)*.16,f=1-.18*tr(h>>3,u>>3,e+7)*tr(h>>4,u>>4,e+13),p=1-.2*Math.pow(u/64,3),_=d*f*p,m=(u*64+h)*4;a[m]=Math.min(255,c.r*255*_),a[m+1]=Math.min(255,c.g*255*_),a[m+2]=Math.min(255,c.b*255*_),a[m+3]=255}r.putImageData(o,0,0);let l=new Et(s);return l.colorSpace=tt,l}var nd=new Map;function ba(i,e){let t=i*2+(e?1:0);return nd.has(t)||nd.set(t,new Ye({map:E1(i,i&65535^(e?40503:0),e),flatShading:!0})),nd.get(t)}function T1(){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createImageData(64,64),s=n.data,r={r:.4,g:.38,b:.32};for(let a=0;a<64;a++)for(let c=0;c<64;c++){let l=1+(tr(c,a,2465)-.5)*.12,u=Math.floor(a/5),h=tr(u,0,707),f=h>.45&&h<.85?1-.28*tr(c>>1,u,1915):1,p=Math.min(c,63-c)/(64*.5),_=Math.min(a,63-a)/(64*.5),m=1-.22*(1-Math.min(p,_)),g=l*f*m,b=(a*64+c)*4;s[b]=Math.min(255,r.r*255*g),s[b+1]=Math.min(255,r.g*255*g),s[b+2]=Math.min(255,r.b*255*g),s[b+3]=255}t.putImageData(n,0,0);let o=new Et(e);return o.colorSpace=tt,o}var id=null;function sd(){return id||(id=T1()),id}function rd(i,e,t){let n=i0(),s=C1(e),r=Math.max(1,s-r0-m1),o=i.length>1?r/(i.length-1):0,a=[];return i.forEach((c,l)=>{let u=r0+l*o,h=t?n.get(c.id):null,d=h?h.chainage:u,f=l%2===0?1:-1,p=h&&h.offset!=null?h.offset:p1,_=I1(e,d);if(!_)return;let[m,g]=_.tangent,b=-g,M=m,x=_.point[0]+b*p*f,S=_.point[1]+M*p*f,E=_.point[0]-x,v=_.point[1]-S,y=Math.atan2(E,v);a.push({id:c.id,index:l,dist:d,baseDist:u,side:f,coatIndex:l%a0.length,px:x,pz:S,baseY:y,isAnchor:!!h,landmark:h?h.landmark:null})}),a}function l0(i,e,t,n){let s=i.catalog&&Array.isArray(i.catalog.comics)?i.catalog.comics.filter(m=>m.npc):i.manifest.comics||[],r=e.streetLine||[],o=[],a=new Map,c=new Map,l=(m,g)=>{m.map=g,m.color.setScalar(m.userData.anchorGlow||4.7),m.needsUpdate=!0},u=(m,g)=>{if(m){if(a.has(m)){l(g,a.get(m));return}if(c.has(m)){c.get(m).push(g);return}c.set(m,[g]),c0(En(i,m),b=>{a.set(m,b);for(let M of c.get(m))l(M,b);c.set(m,[])})}},d=typeof location<"u"&&["localhost","127.0.0.1"].includes(location.hostname)&&typeof window<"u"&&window.__mcgrotForceAnchors!=null?!!window.__mcgrotForceAnchors:!0;rd(s,r,d).forEach(m=>{let g=s[m.index],b=w1(i,g,a0[m.coatIndex],u,m.isAnchor),M=e.groundHeight?e.groundHeight(m.px,m.pz):0;b.group.position.set(m.px,M,m.pz),e.collision&&e.collision.addCircle(m.px,m.pz,b.collisionRadius,"vendor"),b.group.rotation.y=m.baseY,b.baseY=m.baseY,b.phase=m.index*2.1,b.isAnchor=m.isAnchor,b.anchorLandmark=m.landmark,t.add(b.group),o.push(b)});let p=new U;function _(m,g){let b=n?n.position:null;for(let M=0;M<o.length;M++){let x=o[M];if(x.tick(g,m),b&&!x.comicLoaded){let S=x.group.position;Math.hypot(b.x-S.x,b.z-S.z)<x1&&x.loadComic()}}}return{npcs:o,update:_,list:s,anchorsEnabled:d}}var Wl={height:1.9,girth:1,headScale:1.5};function od(i){let e=i.height,t=i.girth,n=i.headScale,s=.12,r=e*.3,o=.52*t,a=.34*t,c=e*.48,l=.34*n,u=s+r,h=u+c,d=h+l*.5+.02;return{bootH:s,legH:r,bodyW:o,bodyD:a,bodyH:c,headSize:l,legTopY:u,bodyTopY:h,headCenterY:d,headTopY:d+l*.5,legX:o*.24}}function w1(i,e,t,n,s){let r=s?g1:1,o=e.npc.build||Wl,a=new it,{bootH:c,legH:l,bodyW:u,bodyD:h,bodyH:d,headSize:f,legTopY:p,bodyTopY:_,headCenterY:m,headTopY:g,legX:b}=od(o),M=0;for(let I of e.npc.name||"")M=M*31+I.charCodeAt(0)|0;let x=o0[Math.abs(M)%o0.length],S=new me(x),E=d*.55,v=4.7*r,y=new Ye({map:sd(),color:new me(v,v,v),side:Ft}),w=new He(new Ot(1,1),y);w.position.set(0,p+d*.55,h*.5+.17),w.scale.set(E*.7,E,1),a.add(w);let R=A1(e.npc.name,e.npc.blurb);R.position.set(0,g+.42,0),a.add(R);let A={group:a,comicMesh:w,comic:e,build:o,noteColor:S,collisionRadius:u/2,head:null,scarf:null,dollBody:[],hasDoll:!1,name:e.npc.name,blurb:e.npc.blurb,voice:null,baseY:0,phase:0,speaking:!1,comicLoaded:!1,loadComic(){A.comicLoaded||(A.comicLoaded=!0,c0(En(i,e.image),I=>{y.map=I,y.color.setScalar(v),y.needsUpdate=!0;let N=I.image;N&&N.width&&N.height&&w.scale.set(E*(N.width/N.height),E,1)}))},buildDoll(){if(A.hasDoll)return A;A.hasDoll=!0;let I=ba(t,!1),N=new Ye({color:1381391,flatShading:!0}),B=[],O=[];for(let te of[-1,1]){let j=new et(u*.4,c,h*1.5);j.translate(te*b,c*.5,h*.2),O.push(j)}for(let te of[-1,1]){let j=new et(u*.36,l,h*.75);j.translate(te*b,c+l*.5,0),B.push(j)}{let te=new et(u,d,h);te.translate(0,p+d*.5,0),B.push(te)}let G=_-d*.14,V=d*.62;for(let te of[-1,1]){let j=new et(.13,V,.13);j.rotateX(-1.15),j.rotateZ(te*.25),j.translate(te*(u*.5+.02),G-V*.28,h*.5+.06),B.push(j)}let ee=new He(rt(B),I),ae=new He(rt(O),N);a.add(ee,ae);let de=ba(new me(t).multiplyScalar(.62).getHex(),!0),W=new Ye({color:new me(9077874).multiplyScalar(4.7*r)});W.userData.anchorGlow=4.7*r,n(e.npc.face,W);let Q=[de,de,de,de,W,de],ue=new He(new et(f,f,f*.85),Q);ue.position.set(0,m,0),a.add(ue);let _e=new He(new et(f*.95,.09,f*.85),new Ye({color:x,flatShading:!0}));_e.position.set(0,_+.02,0),a.add(_e);let Te=new Ye({color:8680542,flatShading:!0}),Z=[];for(let te of[-1,1]){let j=new He(new et(.09,.07,.06),Te);j.position.set(te*E*.28,p+d*.55-E*.48,h*.5+.18),a.add(j),Z.push(j)}return A.head=ue,A.scarf=_e,A.dollBody=[ee,ae,ue,...Z],A},setSpeaking(I){A.speaking=!!I},leanAmp:0,tick(I,N){A.leanAmp+=((A.speaking?1:0)-A.leanAmp)*Math.min(1,(N||0)*b1);let B=A.leanAmp;a.rotation.z=Math.sin(I*.6+A.phase)*.01+(B?Math.sin(I*y1+A.phase)*_1*B:0),a.rotation.y=A.baseY+Math.sin(I*.4+A.phase)*.008+(B?Math.sin(I*M1+A.phase)*v1*B:0)}};return A}function A1(i,e){let t=document.createElement("canvas");t.width=512,t.height=160;let n=t.getContext("2d");n.fillStyle="rgba(20, 22, 16, 0.82)",R1(n,6,6,t.width-12,t.height-12,14),n.fill(),n.lineWidth=2,n.strokeStyle="rgba(120, 116, 92, 0.6)",n.stroke(),n.textAlign="center",n.fillStyle="#d8d4c0",n.font='bold 44px "Courier New", monospace',n.fillText(i,t.width/2,68,t.width-40),n.fillStyle="#a9a48c",n.font='italic 30px "Courier New", monospace',n.fillText(e,t.width/2,116,t.width-36);let s=new Et(t);s.colorSpace=tt;let r=new Mi({map:s,transparent:!0,depthTest:!0}),o=new zi(r);return o.scale.set(2.4,.75,1),o}function R1(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function C1(i){let e=0;for(let t=0;t<i.length-1;t++)e+=Math.hypot(i[t+1][0]-i[t][0],i[t+1][1]-i[t][1]);return e}function I1(i,e){if(!i||i.length<2)return null;let t=0;for(let c=0;c<i.length-1;c++){let[l,u]=i[c],[h,d]=i[c+1],f=h-l,p=d-u,_=Math.hypot(f,p);if(t+_>=e){let m=_>0?(e-t)/_:0,g=_||1;return{point:[l+f*m,u+p*m],tangent:[f/g,p/g]}}t+=_}let n=i[i.length-1],s=i[i.length-2],r=n[0]-s[0],o=n[1]-s[1],a=Math.hypot(r,o)||1;return{point:[n[0],n[1]],tangent:[r/a,o/a]}}var Xl=256,ql=128,Yl=16,u0=["#0e0c0b","#120f1a","#101512","#12100a","#0a1210","#150d0d","#0c1015"],h0=['"Arial Narrow", "Helvetica Neue", Arial, sans-serif','"Futura", "Century Gothic", "Helvetica Neue", sans-serif','Georgia, "Times New Roman", serif'];function P1(i,e,t,n,s,r,o){let a=D1(o);i.save(),i.beginPath(),i.rect(e,t,n,s),i.clip(),i.fillStyle="#171410",i.fillRect(e,t,n,s);let c=Math.round(n*(.04+a()*.024));for(let v of[e,e+n-c]){i.fillStyle="#332e28",i.fillRect(v,t,c,s);for(let y=0;y<40;y++)i.fillStyle=`rgba(0,0,0,${.05+a()*.12})`,i.fillRect(v+a()*c,t+a()*s,1+a()*2,1+a()*2)}let l=e+c,u=n-c*2,h=a(),d=h<.3,f=t+s*(d?.2:.08);if(d){let v=t+s*.06,y=f-v,w=["#3a2420","#243a2e","#2a2438"][Math.floor(a()*3)],R="#d8d0c0",A=Math.max(3,Math.round(n*.045));for(let I=l;I<l+u;I+=A)i.fillStyle=(I-l)/A%2<1?w:R,i.beginPath(),i.moveTo(I,f),i.lineTo(Math.min(I+A,l+u),f),i.lineTo(Math.min(I+A-y*.35,l+u),v),i.lineTo(Math.max(I-y*.35,l),v),i.closePath(),i.fill();i.fillStyle="rgba(0,0,0,0.25)",i.fillRect(l,f-2,u,2)}let p=t+s*.4;if(h<.55)for(let v=p;v<t+s;v+=Math.max(2,s*.03))i.fillStyle=Math.round((v-p)/Math.max(2,s*.03))%2===0?"#211d18":"#15110d",i.fillRect(l,v,u,Math.max(2,s*.03));else{let v=t+s;i.fillStyle="#14181a",i.fillRect(l,p,u,v-p);let y=3+Math.floor(a()*2);i.strokeStyle="rgba(0,0,0,0.65)",i.lineWidth=2;for(let A=1;A<y;A++){let I=l+u/y*A;i.beginPath(),i.moveTo(I,p),i.lineTo(I,v),i.stroke()}i.strokeStyle="rgba(0,0,0,0.5)",i.lineWidth=1;let w=p+(v-p)*.55;i.beginPath(),i.moveTo(l,w),i.lineTo(l+u,w),i.stroke(),i.fillStyle="rgba(150,158,160,0.12)",i.beginPath(),i.moveTo(l,p),i.lineTo(l+u*.42,p),i.lineTo(l+u*.14,v),i.lineTo(l,v),i.closePath(),i.fill();let R=(v-p)*.16;i.fillStyle=["#2b2016","#1c231e","#241c26"][Math.floor(a()*3)],i.fillRect(l,v-R,u,R)}let _=f,m=p-f,g=u0[Math.floor(a()*u0.length)];i.fillStyle=g,i.fillRect(l,_,u,m),i.strokeStyle="rgba(0,0,0,0.6)",i.lineWidth=1,i.strokeRect(l+.5,_+.5,u-1,m-1);let b=h0[Math.floor(a()*h0.length)],M=a()<.75?"bold":"900",S=a()<.3?r.replace(/\w\S*/g,v=>v.charAt(0).toUpperCase()+v.slice(1).toLowerCase()):r.toUpperCase(),E=200+Math.floor(a()*30);i.fillStyle=`rgb(${E},${E-15},${E-45})`,i.textAlign="center",i.textBaseline="middle";try{i.letterSpacing="0.5px"}catch{}L1(i,S,l+u/2,_+m/2,u-12,m-6,b,M);for(let v=0;v<6;v++){i.fillStyle=`rgba(0,0,0,${.05+a()*.08})`;let y=e+a()*n;i.fillRect(y,t,1+a()*3,s)}i.restore()}function L1(i,e,t,n,s,r,o,a){o=o||'"Arial Narrow", "Helvetica Neue", Arial, sans-serif',a=a||"bold";let c=4;for(let u=22;u>=c;u--){if(i.font=`${a} ${u}px ${o}`,i.measureText(e).width<=s){i.fillText(e,t,n);return}let h=N1(i,e,s);if(h&&u<=18&&h.length===2){let d=u*1.05;if(d*2<=r){i.fillText(h[0],t,n-d/2),i.fillText(h[1],t,n+d/2);return}}}i.font=`bold ${c}px ${o}`;let l=e;for(;l.length>3&&i.measureText(l+"\u2026").width>s;)l=l.slice(0,-1);i.fillText(l+(l.length<e.length?"\u2026":""),t,n)}function N1(i,e,t){let n=e.split(" ");if(n.length<2)return null;for(let s=1;s<n.length;s++){let r=n.slice(0,s).join(" "),o=n.slice(s).join(" ");if(i.measureText(r).width<=t&&i.measureText(o).width<=t)return[r,o]}return null}function D1(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function F1(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function d0(i){let e=[...new Set(i)],t=Math.max(1,Math.ceil(e.length/Yl)),n=document.createElement("canvas");n.width=Yl*Xl,n.height=t*ql;let s=n.getContext("2d");s.fillStyle="#171410",s.fillRect(0,0,n.width,n.height);let r=new Map;e.forEach((a,c)=>{let l=c%Yl,u=Math.floor(c/Yl),h=l*Xl,d=u*ql;P1(s,h,d,Xl,ql,a,F1(a)),r.set(a,{u0:h/n.width,u1:(h+Xl)/n.width,vTop:1-d/n.height,vBot:1-(d+ql)/n.height})});let o=new Et(n);return o.colorSpace=tt,o.anisotropy=4,{texture:o,uvFor:r,count:e.length}}var pi=.05,f0=.25,ad=.3,U1=3,cd=1.2,p0=250,_t=3.2,m0=.3,nr=.4,g0=.08,x0=.16,_0=1.5,y0=6.4,O1=2.5,B1=15,Sa=.06,z1=2.2;function v0(i,e,t){let n=i&&i.facadeManifest,s=i&&i.facadeAtlas,r=i&&i.leith&&i.leith.buildings||[],o=e&&e.streetLine||[],a=e&&e.nearestStreetPoint,c=e&&e.groundHeight;if(!n||!s||!r.length||!a||o.length<2)return{group:null,count:0,update(){}};let l=0,u=s.buildings||{},h=.5,d=.5,f=[];for(let W of n.buildings)for(let Q of W.businesses||[])f.push(Q.name);let p=f.length?d0(f):null,_=[],m=[],g=[],b=[],M=0;function x(W,Q,ue,_e){let Te=ue-W,Z=_e-Q,te=Math.hypot(Te,Z)||1;return[-Z/te,0,Te/te]}let S=s.pages.map(()=>({positions:[],uvs:[],colors:[],normals:[],indices:[],quadCount:0})),E=new Map;for(let W of n.buildings){let Q=u[W.buildingIndex];if(!Q)continue;let ue=Q.regions.find(j=>j.kind!=="corner")||Q.regions[0];if(!ue)continue;let _e=s.pages[Q.page],Te=1/_e.width,Z=1/_e.height,te=E.get(Q.page)||[];te.push({bi:W.buildingIndex,chainage:W.chainage,region:ue,u0Full:(ue.x+h)*Te,u1Full:(ue.x+ue.w-h)*Te,vTop:1-(ue.y+d)*Z,vBot:1-(ue.y+ue.h-d)*Z}),E.set(Q.page,te)}function v(W,Q,ue,_e,Te,Z,te,j,ye,Me,be){let he=W.quadCount*4,we=Me+l,H=be+l;W.positions.push(Z,we,te,j,we,ye,j,H,ye,Z,H,te),W.uvs.push(Q,ue,_e,ue,_e,Te,Q,Te),W.colors.push(1,1,1,1,1,1,1,1,1,1,1,1);let[K,oe,fe]=x(Z,te,j,ye);W.normals.push(K,oe,fe,K,oe,fe,K,oe,fe,K,oe,fe),W.indices.push(he,he+1,he+2,he,he+2,he+3),W.quadCount++}function y(W,Q,ue,_e,Te,Z,te,j,ye,Me,be,he,we,H,K){let oe=W.quadCount*4,fe=Me+l,ge=be+l;W.positions.push(Z,fe,te,j,fe,ye,j,ge,ye,Z,ge,te),W.uvs.push(Q,ue,_e,ue,_e,Te,Q,Te),W.colors.push(...he,...we,...H,...K);let[Fe,se,pe]=x(Z,te,j,ye);W.normals.push(Fe,se,pe,Fe,se,pe,Fe,se,pe,Fe,se,pe),W.indices.push(oe,oe+1,oe+2,oe,oe+2,oe+3),W.quadCount++}let w=.1,R=1.1;function A(W,Q,ue,_e,Te,Z,te,j,ye,Me){let be=_e-Te,he=Te+be*Math.min(1,_t/(Z||_t)),we=ye-te,H=Me-j,K=Math.hypot(we,H)||1,oe=Ie=>[te+we*Ie,j+H*Ie],fe=Ie=>Q+(ue-Q)*Ie,ge=[1,1,1],Fe=[0,0,0],se=Math.min(.4,Math.max(w,R/K));if(1-2*se<=.001)return v(W,Q,Te,ue,he,te,j,ye,Me,pi,_t),1;let pe=[[0,se,Fe,ge],[se,1-se,ge,ge],[1-se,1,ge,Fe]];for(let[Ie,F,Ae,De]of pe){let[P,T]=oe(Ie),[L,D]=oe(F);y(W,fe(Ie),Te,fe(F),he,P,T,L,D,pi,_t,Ae,De,De,Ae)}return pe.length}function I(W,Q){let ue=W*73856093^Q*19349663;return ue=Math.imul(ue^ue>>>13,2246822507),ue^=ue>>>16,ue>>>0}let N=0,B=(W,Q,ue,_e,Te,Z,te,j,ye,Me,be,he,we,H=0)=>{let K=Sa*(ue-Q),oe=Q+K,fe=ue-K,ge=_e-Te,Fe=ge>0?Te+Z*ge:Te,se=_e-g0*ge,pe=Math.max(.1,(se-Fe)/(ge||1)*te),Ie=he,F=0;for(;Ie<we-1e-6&&pe>1e-4;){let Ae=Math.min(pe,we-Ie),De=Ae/pe,P=(I(H,F)&1)===0,T=P?se:Fe,D=T+((P?Fe:se)-T)*De;v(W,oe,T,fe,D,j,ye,Me,be,Ie,Ie+Ae),N++,Ie+=Ae,F++}};function O(W){let Q=-1,ue=1/0;return s.pages.forEach((_e,Te)=>{if(W>=_e.chainageMin&&W<=_e.chainageMax)Q=Te,ue=0;else if(Q===-1||ue>0){let Z=W<_e.chainageMin?_e.chainageMin-W:W-_e.chainageMax;Z<ue&&(ue=Z,Q=Te)}}),Q}for(let W of n.buildings){let Q=W.buildingIndex,ue=r[Q];if(!ue||!ue.footprint||ue.footprint.length<3)continue;let _e=Qr(ue,a);if(!_e.length)continue;let Te=0,Z=0;for(let Me of ue.footprint)Te+=Me[0],Z+=Me[1];Te/=ue.footprint.length,Z/=ue.footprint.length;let te=u[Q],j=new Map,ye=0;if(te)for(let Me of _e){let be=Math.hypot(Me.bx-Me.ax,Me.bz-Me.az);if(be<ad)continue;let he=te.regions.find(H=>Me.isChamfer?H.kind==="corner":H.kind!=="corner")||te.regions[0];if(!he||be/he.widthM>cd)continue;let we=j.get(he)||{totalSpan:0,count:0,cursor:0};we.totalSpan+=be,we.count+=1,j.set(he,we)}_e.forEach((Me,be)=>{let he=Me.bx-Me.ax,we=Me.bz-Me.az,H=Math.hypot(he,we);if(H<ad)return;let K=Me.ax,oe=Me.az,fe=he,ge=we,Fe=-we/H,se=he/H,pe=(Me.ax+Me.bx)/2,Ie=(Me.az+Me.bz)/2;Fe*(pe-Te)+se*(Ie-Z)<0&&(Fe=-Fe,se=-se,K=Me.bx,oe=Me.bz,fe=-he,ge=-we);let F=De=>({x:K+fe*De+Fe*f0,z:oe+ge*De+se*f0});l=c?c(pe,Ie):0;let Ae=te?te.regions.find(De=>Me.isChamfer?De.kind==="corner":De.kind!=="corner")||te.regions[0]:null;if(Ae){let De=s.pages[te.page],P=S[te.page],T=1/De.width,L=1/De.height,D=(Ae.x+h)*T,z=(Ae.x+Ae.w-h)*T,X=1-(Ae.y+d)*L,ne=1-(Ae.y+Ae.h-d)*L,q=H/Ae.widthM,re=Math.max(2,W.levels||2)*_t,Se=Math.min(.75,Math.max(nr,_t/Ae.heightM)),Ue=X-ne,Le=(E.get(te.page)||[]).filter(xe=>xe.bi!==Q),Pe=Le.filter(xe=>Math.abs(xe.chainage-W.chainage)>=B1),Ge=Pe.length>=3?Pe:Le,qe=[];if(q>O1){let xe=Math.min(1,Ae.widthM/H),k=Math.max(0,.5-xe/2),ve=Math.min(1,.5+xe/2),ce=F(k),Re=F(ve);qe.push({u0:D,u1:z,ax:ce.x,az:ce.z,bx:Re.x,bz:Re.z});let Ce=[{side:0,innerT:k,dirSign:-1},{side:1,innerT:ve,dirSign:1}];for(let{side:le,innerT:Ne,dirSign:Oe}of Ce){let ot=le===0?k:1-ve,ct=ot*H;if(ct<ad)continue;let kt=Math.max(1,Math.round(ct/y0)),an=ot/kt,ti=W.businesses?W.businesses.length-ye:0,Ci=p?Math.max(0,Math.min(ti,kt)):0;for(let sn=0;sn<kt;sn++){let In=Ne+Oe*sn*an,Un=Ne+Oe*(sn+1)*an,nt=F(Math.min(In,Un)),xt=F(Math.max(In,Un));if(sn<Ci){let At=W.businesses[ye];ye++;let yt=p.uvFor.get(At.name);if(yt){let Ht=M*4;_.push(nt.x,pi+l,nt.z,xt.x,pi+l,xt.z,xt.x,_t+l,xt.z,nt.x,_t+l,nt.z),m.push(yt.u0,yt.vBot,yt.u1,yt.vBot,yt.u1,yt.vTop,yt.u0,yt.vTop);{let[Gt,Vt,Tn]=x(nt.x,nt.z,xt.x,xt.z);b.push(Gt,Vt,Tn,Gt,Vt,Tn,Gt,Vt,Tn,Gt,Vt,Tn)}g.push(Ht,Ht+1,Ht+2,Ht,Ht+2,Ht+3),M++,N++}continue}if(Ge.length>=3){let At=I(Q,be*6151+le*331+sn)%Ge.length,yt=Ge[At],Ht=Math.min(.75,Math.max(nr,_t/yt.region.heightM));B(P,yt.u0Full,yt.u1Full,yt.vTop,yt.vBot,Ht,yt.region.heightM,nt.x,nt.z,xt.x,xt.z,pi,_t,I(Q,be*6151+le*331+sn+1))}else Ue>0&&B(P,D,z,X,ne,Se,Ae.heightM,nt.x,nt.z,xt.x,xt.z,pi,_t,I(Q,be*6151+le*331+sn+1))}if(re>_t+1e-6){let sn=le===0?0:1,In=F(Math.min(Ne,sn)),Un=F(Math.max(Ne,sn));if(Ge.length<3)Ue>0&&B(P,D,z,X,ne,Se,Ae.heightM,In.x,In.z,Un.x,Un.z,_t,re,I(Q,be*4111+le*211+2));else{let nt=Ne,xt=0,At=-1,yt=0;for(;Math.abs(nt-Ne)<ot-1e-6&&yt++<64;){let Ht=I(Q,be*4111+le*211+xt)%Ge.length;Ht===At&&(Ht=(Ht+1)%Ge.length);let Gt=Ge[Ht];At=Ht;let Vt=ot-Math.abs(nt-Ne),Tn=Math.min(Vt,Math.max(Gt.region.widthM/H,1e-4)),dn=nt+Oe*Tn,fn=F(Math.min(nt,dn)),cn=F(Math.max(nt,dn)),Ii=Math.min(.75,Math.max(nr,_t/Gt.region.heightM));B(P,Gt.u0Full,Gt.u1Full,Gt.vTop,Gt.vBot,Ii,Gt.region.heightM,fn.x,fn.z,cn.x,cn.z,_t,re,I(Q,be*4111+le*211+xt)),nt=dn,xt++}}}}}else if(q>cd){let xe=Math.min(1,Ae.widthM/H),k=Math.max(0,.5-xe/2),ve=Math.min(1,.5+xe/2),ce=F(k),Re=F(ve);qe.push({u0:D,u1:z,ax:ce.x,az:ce.z,bx:Re.x,bz:Re.z});let Ce=Math.min(.75,Math.max(nr,_t/Ae.heightM)),le=X-ne,Ne=ne+Ce*le,ot=(1-Ce)*Ae.heightM,ct=z-D,kt=m0*ct,ti=m0*Ae.widthM/H,Ci=Math.max(0,ct-kt),sn=Sa*ct,In=Math.max(0,Ci-2*sn),Un=(At,yt,Ht,Gt,Vt,Tn,dn,fn)=>{let cn=dn===0?1:-1,Ii=pi,ao=0;for(;Ii<Ae.heightM-1e-6&&ot>1e-4;){let co=Math.min(ot,Ae.heightM-Ii),hu=co/ot,C=Ci>0&&fn>0?Math.min(sn+I(Q,be*977+dn*97+ao)%1e3/1e3*In,Ci):0,Y=At+cn*C,ie=yt+cn*C,$=ao%2===0,J=$?Ne:X,Ve=J+(($?X:Ne)-J)*hu;v(P,Y,J,ie,Ve,Ht,Gt,Vt,Tn,Ii,Ii+co),N++,Ii+=co,ao++}},nt=k,xt=0;for(;nt>1e-6;){let At=Math.min(ti,nt),yt=nt-At,Ht=ti>0?At/ti:1,Gt=xt%2===0,Vt=Gt?D:D+kt,Tn=Gt?D+kt:D,dn=Vt+(Tn-Vt)*Ht,fn=F(yt),cn=F(nt);Un(dn,Vt,fn.x,fn.z,cn.x,cn.z,0,xt),qe.push({u0:dn,u1:Vt,ax:fn.x,az:fn.z,bx:cn.x,bz:cn.z,skipBase:!0,side:0}),nt=yt,xt++}for(nt=ve,xt=0;nt<1-1e-6;){let At=Math.min(ti,1-nt),yt=nt+At,Ht=ti>0?At/ti:1,Gt=xt%2===0,Vt=Gt?z:z-kt,Tn=Gt?z-kt:z,dn=Vt+(Tn-Vt)*Ht,fn=F(nt),cn=F(yt);Un(Vt,dn,fn.x,fn.z,cn.x,cn.z,1,xt),qe.push({u0:Vt,u1:dn,ax:fn.x,az:fn.z,bx:cn.x,bz:cn.z,skipBase:!0,side:1}),nt=yt,xt++}}else{let xe=j.get(Ae),k,ve;if(xe&&xe.count>1&&xe.totalSpan>0){let Ce=Sa*(z-D),le=D+Ce,Ne=z-Ce,Oe=Math.max(0,Ne-le),ot=le+Oe*(xe.cursor/xe.totalSpan);xe.cursor+=H;let ct=le+Oe*(xe.cursor/xe.totalSpan);k=ot,ve=ct}else if(q<1/cd){let Ce=Math.max(.08,q),le=(z-D)*Ce/2,Ne=(I(Q,be)%1e3/1e3-.5)*.3,Oe=D+le+.5*(z-D)+Ne*(z-le-(D+le));k=Math.max(D,Oe-le),ve=Math.min(z,Oe+le)}else{let Ce=Sa*(z-D);k=D+Ce,ve=z-Ce}let ce=F(0),Re=F(1);if(xe&&xe.count>1&&H<z1){let Ce=Math.min(.9,_t/Ae.heightM);qe.push({u0:k,u1:ve,ax:ce.x,az:ce.z,bx:Re.x,bz:Re.z,y0:_t,v0:ne+(X-ne)*Ce})}else qe.push({u0:k,u1:ve,ax:ce.x,az:ce.z,bx:Re.x,bz:Re.z,groundFade:!0})}for(let xe of qe)if(!xe.skipBase){if(xe.groundFade){if(N+=A(P,xe.u0,xe.u1,X,ne,Ae.heightM,xe.ax,xe.az,xe.bx,xe.bz),Ae.heightM>_t+1e-6){let k=ne+(X-ne)*Math.min(1,_t/(Ae.heightM||_t));v(P,xe.u0,k,xe.u1,X,xe.ax,xe.az,xe.bx,xe.bz,_t,Ae.heightM),N++}continue}v(P,xe.u0,xe.v0??ne,xe.u1,xe.v1??X,xe.ax,xe.az,xe.bx,xe.bz,xe.y0??pi,Ae.heightM),N++}if(re-Ae.heightM>_0){for(let xe of qe)if(xe.side===void 0)if(Ge.length>=3){let k=I(Q,be*8231+17)%Ge.length,ve=Ge[k],ce=Math.min(.75,Math.max(nr,_t/ve.region.heightM));B(P,ve.u0Full,ve.u1Full,ve.vTop,ve.vBot,ce,ve.region.heightM,xe.ax,xe.az,xe.bx,xe.bz,Ae.heightM,re,I(Q,be*8231+18))}else Ue>0&&B(P,xe.u0,xe.u1,X,ne,Se,Ae.heightM,xe.ax,xe.az,xe.bx,xe.bz,Ae.heightM,re,I(Q,be*8231+18))}if(re-Ae.heightM>_0&&qe.some(xe=>xe.side!==void 0)){let xe=X-ne,k=X-g0*xe,ve=Math.max(ne,k-x0*xe),ce=x0*Ae.heightM,Re=z-D,Ce=Sa*Re,le={};for(let ot of qe){if(ot.side===void 0)continue;let ct=Math.max(0,Re-Math.abs(ot.u1-ot.u0));(le[ot.side]===void 0||ct<le[ot.side])&&(le[ot.side]=ct)}let Ne=Ae.heightM,Oe=0;for(;Ne<re-1e-6&&ce>1e-4;){let ot=Math.min(ce,re-Ne),ct=ot/ce,kt=Oe%2===0,an=kt?k:ve,Ci=an+((kt?ve:k)-an)*ct,sn=Ne,In=Ne+ot,Un={};for(let nt of[0,1]){let xt=le[nt];if(xt===void 0)continue;let At=Math.max(0,xt-2*Ce);Un[nt]=xt>0?Math.min(Ce+I(Q,be*613+Oe*31+nt)%1e3/1e3*At,xt):0}for(let nt of qe){if(nt.side===void 0)continue;let At=(nt.side===0?1:-1)*(Un[nt.side]||0);v(P,nt.u0+At,an,nt.u1+At,Ci,nt.ax,nt.az,nt.bx,nt.bz,sn,In),N++}Ne=In,Oe++}}}else if(p&&W.businesses&&W.businesses.length&&H>=U1){let De=W.businesses.length-ye,P=De>0?Math.min(De,Math.max(1,Math.round(H/y0))):0;for(let L=0;L<P;L++){let D=W.businesses[ye+L],z=p.uvFor.get(D.name);if(!z)continue;let X=F(L/P),ne=F((L+1)/P),q=M*4;_.push(X.x,pi+l,X.z,ne.x,pi+l,ne.z,ne.x,_t+l,ne.z,X.x,_t+l,X.z),m.push(z.u0,z.vBot,z.u1,z.vBot,z.u1,z.vTop,z.u0,z.vTop);{let[re,Se,Ue]=x(X.x,X.z,ne.x,ne.z);b.push(re,Se,Ue,re,Se,Ue,re,Se,Ue,re,Se,Ue)}g.push(q,q+1,q+2,q,q+2,q+3),M++}ye+=P,N+=P;let T=Math.max(2,W.levels||2)*_t;if(T>_t+1e-6){let L=O(W.chainage),D=L>=0?(E.get(L)||[]).filter(z=>z.bi!==Q):[];if(D.length){let z=S[L],X=0,ne=0,q=-1,re=0;for(;X<1-1e-6&&re++<64;){let Se=I(Q,be*5813+ne)%D.length;Se===q&&(Se=(Se+1)%D.length);let Ue=D[Se];q=Se;let Le=Math.min(1-X,Math.max(Ue.region.widthM/H,1e-4)),Pe=F(X),Ge=F(X+Le),qe=Math.min(.75,Math.max(nr,_t/Ue.region.heightM));B(z,Ue.u0Full,Ue.u1Full,Ue.vTop,Ue.vBot,qe,Ue.region.heightM,Pe.x,Pe.z,Ge.x,Ge.z,_t,T,I(Q,be*5813+ne+1)),X+=Le,ne++}}}}else if(!W.businesses||!W.businesses.length){let De=O(W.chainage),P=De>=0?(E.get(De)||[]).filter(T=>T.bi!==Q):[];if(P.length){let T=S[De],L=Math.max(2,W.levels||2)*_t,D=0,z=0,X=-1,ne=0;for(;D<1-1e-6&&ne++<64;){let q=I(Q,be*3457+z)%P.length;q===X&&(q=(q+1)%P.length);let re=P[q];X=q;let Se=Math.min(1-D,Math.max(re.region.widthM/H,1e-4)),Ue=F(D),Le=F(D+Se),Pe=Math.min(.75,Math.max(nr,_t/re.region.heightM));B(T,re.u0Full,re.u1Full,re.vTop,re.vBot,Pe,re.region.heightM,Ue.x,Ue.z,Le.x,Le.z,pi,L,I(Q,be*3457+z+1)),D+=Se,z++}}}})}if(N===0&&M===0)return{group:null,count:0,update(){}};let G=null;if(M&&p){let W=new pt;W.setAttribute("position",new je(_,3)),W.setAttribute("uv",new je(m,2)),W.setAttribute("normal",new je(b,3)),W.setIndex(g),W.computeBoundingSphere(),G=new He(W,new Ye({map:p.texture,color:new me(4.7,4.7,4.7),side:Mn,fog:!0})),G.name="shopfront-placeholders",t.add(G)}let V=s.pages.map((W,Q)=>{let ue=S[Q];if(!ue.quadCount)return null;let _e=new pt;_e.setAttribute("position",new je(ue.positions,3)),_e.setAttribute("uv",new je(ue.uvs,2)),_e.setAttribute("color",new je(ue.colors,3)),_e.setAttribute("normal",new je(ue.normals,3)),_e.setIndex(ue.indices),_e.computeBoundingSphere();let Te=En(i,W.file);return Te.startsWith("assets/")&&W.etag&&(Te+=`?v=${W.etag}`),{geo:_e,url:Te,chainageMin:W.chainageMin,chainageMax:W.chainageMax,loaded:!1,mesh:null}});function ee(W){if(W.loaded)return;W.loaded=!0;let Q=new li().load(W.url);Q.colorSpace=tt,Q.generateMipmaps=!1,Q.minFilter=qt,Q.anisotropy=1,W.material||(W.material=new Ye({vertexColors:!0,color:new me(4.7,4.7,4.7),side:Mn,fog:!0}),W.mesh=new He(W.geo,W.material),W.mesh.name="shopfronts-page"),W.material.map=Q,t.add(W.mesh)}function ae(W){W.loaded&&(W.loaded=!1,t.remove(W.mesh),W.material.map.dispose(),W.material.map=null)}function de(W){if(!W)return;let Q=xs(W.x,W.z,o);for(let ue of V){if(!ue)continue;Q>=ue.chainageMin-p0&&Q<=ue.chainageMax+p0?ee(ue):ae(ue)}}return de({x:o[0][0],z:o[0][1]}),{group:null,placeholders:G,count:N,placeholderCount:M,update:de,pages:V}}function Zl(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function k1(i){let e=i.getFullYear(),t=String(i.getMonth()+1).padStart(2,"0"),n=String(i.getDate()).padStart(2,"0");return`${e}-${t}-${n}`}function Ea(){return typeof window<"u"&&typeof window.__mcgrotForceDate=="string"?window.__mcgrotForceDate:k1(new Date)}function Kl(){return Zl(Ea())}function $l(i=Ea()){return Zl(i)%1e4/1e4*24}var H1=["January","February","March","April","May","June","July","August","September","October","November","December"];function G1(i=Ea()){let e=/^(\d{4})-(\d{2})-(\d{2})$/.exec(i);if(!e)return i;let t=H1[Number(e[2])-1]||e[2];return`${Number(e[3])} ${t} ${e[1]}`}function V1(i){let e=Math.floor((i%24+24)%24*60),t=String(Math.floor(e/60)).padStart(2,"0"),n=String(e%60).padStart(2,"0");return`${t}:${n}`}var W1={overcast:"dreich",clear:"clear",rain:"wet",drizzle:"smirr",haar:"haar"};function X1(i){return W1[i]||i}function M0(i,e,t){return`Leith Walk \u2014 ${G1(i)} \xB7 arrived ${V1(e)}, ${X1(t)}`}var q1=18,ld=23,ud=34,Y1=.08,Z1=380,Jl=2e4,b0=.15,K1=6,$1=2.5,J1=22,j1=1.4;function Q1(i,e){let t=i*73856093^e*19349663;return t=Math.imul(t^t>>>13,2246822507),t^=t>>>16,t>>>0}function eE(){return typeof window<"u"&&window.__mcgrotForceDaySeed!=null?window.__mcgrotForceDaySeed>>>0:Kl()}function tE(i,e){let t=i.comic&&i.comic.id||i.name||"";return Q1(Zl(t),e)%1e6/1e6}function S0({camera:i,npcs:e,assets:t,onActiveChange:n}){let s=null,r=new ea,o=new Map,a=!1,c=!1,l=0,u=0;function h(x,S){let E=o.get(x);if(!(E==="missing"||E==="loading")){if(E){S(E);return}o.set(x,"loading"),r.load(En(t,x),v=>{o.set(x,v),S(v)},void 0,()=>{o.set(x,"missing")})}}function d(x){if(x.voice)return x.voice;if(!s)return null;let S=new na(s);S.setRefDistance($1),S.setMaxDistance(J1),S.setDistanceModel("inverse"),S.setRolloffFactor(j1),S.setLoop(!0);let E=S.context.createBiquadFilter();return E.type="lowpass",E.frequency.value=Jl,S.setFilter(E),S._mutterFilter=E,x.group.add(S),x.voice=S,S}function f(x,S){x._readStartCtx=s.context.currentTime,x._readOffsetAtStart=S}function p(x,S){let E=x.comic.audio;E&&h(E,v=>{let y=d(x);if(!y)return;if(y.buffer!==v&&y.setBuffer(v),y.isPlaying){if(!S)return;y.stop()}let w=S?0:(u+tE(x,eE())*v.duration)%v.duration;y.offset=w,y.gain.gain.value=1,y._mutterFilter&&(y._mutterFilter.frequency.value=Jl),y.play(),f(y,w),x.setSpeaking(!0)})}function _(x){x.voice&&x.voice.isPlaying&&(x.voice.stop(),x.setSpeaking(!1))}function m(){let x=0;for(let S of e)S.voice&&S.voice.isPlaying&&x++;x!==l&&(l=x,n&&n(x))}function g(x,S){let E=x.voice;if(!E)return;let v=S<=ld?0:Math.min(1,(S-ld)/(ud-ld)),y=1-(1-Y1)*v,w=Jl+(Z1-Jl)*v,R=E.context;E.gain.gain.setTargetAtTime(y,R.currentTime,b0),E._mutterFilter&&E._mutterFilter.frequency.setTargetAtTime(w,R.currentTime,b0)}function b(x,S){if(u=S||0,!a||c)return;let E=i.position,v=[];for(let w of e){if(!w.comic.audio)continue;let R=w.group.position,A=Math.hypot(E.x-R.x,E.z-R.z);A<ud&&v.push({npc:w,d:A})}v.sort((w,R)=>w.d-R.d);let y=new Map;for(let{npc:w,d:R}of v){if(y.size>=K1)break;let A=w.voice&&w.voice.isPlaying;(R<q1||A&&R<ud)&&y.set(w,R)}for(let w of e)w.voice&&w.voice.isPlaying&&!y.has(w)&&_(w);for(let[w]of y)w.voice&&w.voice.isPlaying||p(w,!1);for(let[w,R]of y)g(w,R);m()}return{get listener(){return s},update:b,restart(x){p(x,!0),m()},togglePause(x){let S=x.voice;if(!S||!S.buffer)return p(x,!0),!0;if(S.isPlaying){let E=M(x);return S.pause(),x.setSpeaking(!1),m(),E!=null&&f(S,E),!1}return S.play(),f(S,S._readOffsetAtStart||0),x.setSpeaking(!0),m(),!0},setOverlayOpen(x){if(c=!!x,c){for(let S of e)S.voice&&S.voice.isPlaying&&_(S);m()}},getElapsed:M,isEnabled(){return a},setEnabled(x){a=!!x},resume(){s||(s=new ta,i.add(s)),a=!0;let x=s.context;x&&x.state==="suspended"&&x.resume()}};function M(x){let S=x&&x.voice;if(!S||!S.buffer||S._readStartCtx==null)return null;let E=S.buffer.duration;if(!E)return 0;let y=(S.isPlaying?s.context.currentTime-S._readStartCtx+S._readOffsetAtStart:S._readOffsetAtStart)%E;return y<0&&(y+=E),y}}var nE=new Set(["INPUT","TEXTAREA","SELECT"]);function _s(i){let e=i&&i.target;return!e||!e.tagName?!1:nE.has(e.tagName)||e.isContentEditable===!0}var E0=8,iE=600;function T0({assets:i,npcs:e,camera:t,controls:n,proximityAudio:s,onReadingChange:r,litter:o,leithers:a,journal:c}){let l=document.getElementById("npc-prompt"),u=document.getElementById("npc-prompt-label"),h=document.getElementById("comic-overlay"),d=document.getElementById("comic-title"),f=document.getElementById("comic-image"),p=document.getElementById("comic-meta"),_=document.getElementById("comic-close"),m=document.getElementById("comic-playpause"),g=document.getElementById("comic-transcript"),b=null,M=null,x=null,S=null,E=!0,v=null,y=!1,w=null,R=null,A=-1;function I(he){m&&(m.textContent=he?"\u23F8":"\u25B6")}function N(he){if(w=null,R=null,A=-1,!g)return;let we=E&&i.readings&&he&&he.comic&&i.readings[he.comic.id];if(!we||!we.phrases||!we.phrases.length){g.style.display="none",g.textContent="";return}g.textContent="";let H=document.createDocumentFragment(),K=[];for(let oe of we.phrases){let fe=document.createElement("div");fe.className=`phrase ${oe.kind}`,fe.textContent=oe.text,H.appendChild(fe),K.push(fe)}g.appendChild(H),g.style.display="block",g.scrollTop=0,w=we.phrases,R=K}function B(){if(!w||!M)return;let he=s.getElapsed(M);if(he==null)return;let we=-1;for(let oe=0;oe<w.length;oe++)he>=w[oe].start&&(we=oe);if(we===A||(A>=0&&R[A]&&R[A].classList.remove("current"),A=we,we<0))return;let H=R[we];H.classList.add("current");let K=H.offsetTop-g.clientHeight/2+H.clientHeight/2;g.scrollTop=Math.max(0,K)}function O(he){r&&r(!!he)}let G=()=>document.documentElement.classList.contains("touch");function V(he){l&&(u&&(u.textContent=G()?`Tap to hear ${he.name} read`:`[E] Hear ${he.name} read`),l.style.display="block")}function ee(){l&&(l.style.display="none")}function ae(he){v=null,y=!1,s.restart(he),c&&he.comic&&(c.credit(he.comic.id,"heard"),he.isAnchor&&c.credit(he.comic.id,"anchor"))}function de(){!y||!M||(clearTimeout(v),ae(M))}function W(he){!he||M||c&&c.isOpen()||(M=he,ee(),d&&(d.textContent=he.comic.title),p&&(p.textContent=`${he.name} \u2014 ${he.blurb}`),f&&(f.src=En(i,he.comic.image),f.alt=he.comic.title,f.parentElement.scrollTop=0),N(he),h&&(h.style.display="flex"),n.setEnabled(!1),s.setOverlayOpen(!0),I(!0),O(!0),y=!0,v=setTimeout(()=>ae(he),iE))}function Q(){!M&&!S||(v&&(clearTimeout(v),v=null),y=!1,I(!1),O(!1),h&&(h.style.display="none"),n.setEnabled(!0),s.setOverlayOpen(!1),M=null,S=null,N(null),b=null,x=null)}function ue(he){M||S||c&&c.isOpen()||(S=he,ee(),d&&(d.textContent=he.comic.title||"McGrot"),p&&(p.textContent="found lying on the street"),f&&(f.src=En(i,he.comic.image),f.alt=he.comic.title||"McGrot comic",f.parentElement.scrollTop=0),N(null),h&&(h.style.display="flex"),n.setEnabled(!1),s.setOverlayOpen(!0),c&&he.comic&&c.credit(he.comic.id,"found"),a&&Math.random()<.7&&a.summonReader(he))}function _e(){if(!M)return;if(y){de();return}let he=s.togglePause(M);I(he),O(he)}function Te(he){if(he.code==="Escape"){(M||S)&&Q();return}if(!_s(he)&&he.code==="KeyE"){if(y){de();return}!M&&!S&&(b?W(b):x&&ue(x))}}function Z(){M||S||(b?W(b):x&&ue(x))}function te(he){if(y){de();return}he.target===h&&Q()}window.addEventListener("keydown",Te),l&&l.addEventListener("click",Z),h&&h.addEventListener("click",te),_&&_.addEventListener("click",Q),m&&m.addEventListener("click",_e);function j(){if(M||S){B();return}let he=t.position.x,we=t.position.z,H=null,K=E0;for(let fe=0;fe<e.length;fe++){let ge=e[fe].group.position,Fe=Math.hypot(he-ge.x,we-ge.z);Fe<K&&(K=Fe,H=e[fe])}let oe=!H&&o?o.nearestItem(he,we,3.2):null;(H!==b||oe!==x)&&(b=H,x=oe,b?V(b):x?(u&&(u.textContent=G()?"Tap to read the comic on the ground":"[E] Read the comic on the ground"),l&&(l.style.display="block")):ee())}function ye(){window.removeEventListener("keydown",Te),l&&l.removeEventListener("click",Z),h&&h.removeEventListener("click",te),_&&_.removeEventListener("click",Q),m&&m.removeEventListener("click",_e),v&&clearTimeout(v)}function Me(he){E=!!he,M&&N(M)}function be(){return!!(M||S)}return{update:j,dispose:ye,setReadAlong:Me,isOpen:be,range:E0}}var Mt=(()=>{let i=12648430;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),sE=35,jl=11,rE=.9,oE=90,w0=[7027238,8013360,6042916,9065014,5189153],aE=22,cE=8,lE=3,A0=.06,uE=.16,eu=4,I0=14,R0=55;function P0(i,e){let t=i.streetLine||[],n=i.groundHeight||(()=>0),s=new it;e.add(s);let r=hE(t,s,n);gE(t,s,n,i.collision),xE(t,s,n);let o=_E(t,s,n),a=fE(r,s),c={group:s,poles:r,onArcFlash:null};return c.update=function(u,h){yE(o,u,h),mE(a,h,()=>{c.onArcFlash&&c.onArcFlash()})},c}function tu(i,e){if(!i||i.length<2||e<0)return null;let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0,d=u||1;return{point:[s+c*h,r+l*h],tangent:[c/d,l/d]}}t+=u}return null}function hd(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function Ql(i,e){let t=new me(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;i.setAttribute("color",new je(s,3))}function hE(i,e,t){let n=hd(i),s=[],r=[],o=[];for(let a=12;a<n-5;a+=sE){let c=tu(i,a);if(!c)break;let[l,u]=c.tangent,h=-u,d=l,f=c.point[0]+h*jl,p=c.point[1]+d*jl,_=c.point[0]-h*jl,m=c.point[1]-d*jl,g=t(f,p),b=t(_,m),M=new U(f,g,p),x=new U(_,b,m),S=7.5+Mt()*.6;s.push(C0(M,S)),s.push(C0(x,S)),r.push(dE(M.clone().setY(g+S-.4),x.clone().setY(b+S-.4))),o.push({position:M.clone().setY(g+S-.4)},{position:x.clone().setY(b+S-.4)})}if(s.length){let a=rt(s,!1),c=new Ye({color:3814700,flatShading:!0});e.add(new He(a,c))}if(r.length){let a=rt(r,!1),c=new as({color:1841685});e.add(new Vs(a,c))}return o}function C0(i,e){let t=new Rn(.09,.13,e,6);return t.translate(i.x,i.y+e/2,i.z),t}function dE(i,e){let n=[];for(let o=0;o<=8;o++){let a=o/8,c=Jn.lerp(i.x,e.x,a),l=Jn.lerp(i.z,e.z,a),u=Jn.lerp(i.y,e.y,a),h=4*a*(1-a)*rE;n.push(c,u-h,l)}let s=[];for(let o=0;o<8;o++)s.push(n[o*3],n[o*3+1],n[o*3+2]),s.push(n[(o+1)*3],n[(o+1)*3+1],n[(o+1)*3+2]);let r=new pt;return r.setAttribute("position",new je(s,3)),r}function fE(i,e){if(!i.length)return[];let t=Math.min(lE,i.length),n=pE(i.length,t),s=[];for(let r of n){let o=i[r],a=new ui(10473727,0,14,2);a.position.copy(o.position),e.add(a);let c=new pn({color:14676735,transparent:!0,opacity:0,depthWrite:!1,blending:qi});c.userData.unlit=!1;let l=new He(new ai(.12,6,6),c);l.position.copy(o.position),e.add(l),s.push({light:a,spark:l,active:!1,nextTime:eu+Mt()*(I0-eu),flashEnd:0})}return s}function pE(i,e){let t=[];for(let n=0;n<e;n++)t.push(Math.floor((n+.5)/e*i));return t}function mE(i,e,t){for(let n of i)if(!n.active&&e>=n.nextTime){n.active=!0;let s=A0+Mt()*(uE-A0);n.flashEnd=e+s,n.light.intensity=R0,n.spark.material.opacity=1,n.spark.scale.setScalar(.8+Mt()*.6),t()}else n.active&&e>=n.flashEnd?(n.active=!1,n.light.intensity=0,n.spark.material.opacity=0,n.nextTime=e+eu+Mt()*(I0-eu)):n.active&&(n.light.intensity=R0*(.7+Mt()*.3))}function gE(i,e,t,n){let s=tu(i,oE);if(!s)return;let[r,o]=s.tangent,a=-o,c=r,l=5.5,u=s.point[0]+a*l,h=s.point[1]+c*l,d=t(u,h),f=Math.atan2(r,o),p=[],_=new et(2.6,3.1,11);Ql(_,7030064),p.push(_);let m=new et(2.3,.3,10.6);m.translate(0,1.7,0),Ql(m,4864556),p.push(m);for(let x=-1;x<=1;x++)for(let S of[-1,1]){let E=(Mt()-.5)*.3,v=new et(.08,.9+Mt()*.3,1.6);v.translate(S*1.32,.5+E,x*3.2+(Mt()-.5)*.6),Ql(v,789770),p.push(v)}let g=rt(p,!1),b=new Ye({vertexColors:!0,flatShading:!0}),M=new He(g,b);M.position.set(u,d+1.85,h),M.rotation.y=f,M.rotation.z=.09,e.add(M),n&&n.addBox(u,h,1.3,5.5,f,"tram")}function xE(i,e,t){let n=hd(i);if(n<4)return;let s=[];for(let a=0;a<aE;a++){let c=25+Mt()*Math.max(10,n-33),l=tu(i,c);if(!l)continue;let[u,h]=l.tangent,d=-h,f=u,p=Mt()<.5?1:-1,_=(7.5+Mt()*3)*p,m=l.point[0]+d*_,g=l.point[1]+f*_,b=Mt()<.4,M=b?new Rn(.32,.34,.7,8):new et(.5+Mt()*.3,.4+Mt()*.3,.5+Mt()*.3),x=b?.35:.2;M.translate(0,x,0),M.rotateY(Mt()*Math.PI),Mt()<.3&&M.rotateZ((Mt()-.5)*.5),M.translate(m,t(m,g),g),Ql(M,w0[a%w0.length]),s.push(M)}if(!s.length)return;let r=rt(s,!1),o=new Ye({vertexColors:!0,flatShading:!0});e.add(new He(r,o))}function _E(i,e,t){let n=hd(i);if(n<4)return[];let s=vE(),r=[];for(let o=0;o<cE;o++){let a=35+Mt()*Math.max(20,n-55),c=tu(i,a);if(!c)continue;let l=new Mi({map:s,transparent:!0,opacity:.18,depthWrite:!1,color:3815468}),u=new zi(l),h=8+Mt()*4;u.scale.set(h,h,1),e.add(u);let d=c.point[0]+(Mt()-.5)*14,f=c.point[1]+(Mt()-.5)*14;r.push({sprite:u,baseX:d,baseZ:f,baseY:t(d,f)+6+Mt()*3,phase:Mt()*Math.PI*2,riseSpeed:.25+Mt()*.15,riseRange:9+Mt()*3,driftAmp:2+Mt()*2,driftFreq:.05+Mt()*.05,baseOpacity:.14+Mt()*.1})}return r}function yE(i,e,t){for(let n of i){let s=(t*n.riseSpeed+n.phase)%n.riseRange;n.sprite.position.set(n.baseX+Math.sin(t*n.driftFreq+n.phase)*n.driftAmp,n.baseY+s,n.baseZ+Math.cos(t*n.driftFreq*.8+n.phase)*n.driftAmp);let r=s/n.riseRange;n.sprite.material.opacity=n.baseOpacity*(1-Math.abs(r-.5)*1.4)}}function vE(){let e=document.createElement("canvas");e.width=128,e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,"rgba(60,58,48,0.55)"),n.addColorStop(.5,"rgba(50,48,40,0.25)"),n.addColorStop(1,"rgba(40,38,32,0)"),t.fillStyle=n,t.fillRect(0,0,128,128);let s=new Et(e);return s.colorSpace=tt,s}var ME=!0,Ta=1.7,bE=.35,SE=.3,dd=.34,EE=.17,TE=4,L0=74,wE=38,AE=1500,RE=16757850,CE=12876330,IE=3090978,N0=.22,PE=.6;function LE(i){let e=Number.isFinite(i)?i:0,t=Math.max(0,Math.min(1,(e-N0)/(PE-N0)));return t*t*(3-2*t)}function NE(){return typeof location<"u"&&["localhost","127.0.0.1"].includes(location.hostname)&&typeof window<"u"&&window.__mcgrotForceLamps!=null?!!window.__mcgrotForceLamps:ME}function D0({scene:i,camera:e,poles:t}){let n=NE(),s={enabled:!1,count:0,poolSize:0,lamps:[],setGlow(){},update(){},glow:()=>0,activeCount:()=>0};if(!n||!i||!e||!t||t.length<2)return s;let r=[],o=[],a=[],c=Math.floor(t.length/2);for(let b=0;b<c;b++){let M=t[b*2+b%2],x=t[b*2+(b+1)%2];if(!M||!x)continue;let S=M.position,E=x.position.x-S.x,v=x.position.z-S.z,y=Math.hypot(E,v)||1,w=E/y,R=v/y,A=S.y-bE,I=S.x+w*Ta,N=S.z+R*Ta,B=new et(Ta,.08,.08);B.rotateY(-Math.atan2(R,w)),B.translate(S.x+w*Ta*.5,A,S.z+R*Ta*.5),o.push(B);let O=new ls(SE,dd,8,1,!0);O.translate(I,A-dd*.5,N),o.push(O);let G=A-dd*.75,V=new ai(EE,8,6);V.translate(I,G,N),a.push(V),r.push({position:new U(I,G,N)})}if(!r.length)return s;let l=new He(rt(o,!1),new Ye({color:IE,flatShading:!0}));l.name="lamp-fittings",i.add(l);let u=new pn({color:CE,transparent:!0,opacity:0,depthWrite:!1,blending:qi});u.userData.unlit=!1;let h=new He(rt(a,!1),u);h.name="lamp-bulbs",i.add(h);let d=[];for(let b=0;b<TE;b++){let M=new ui(RE,0,wE,2);M.name=`lamp-pool-${b}`,i.add(M),d.push(M)}let f=0,p=0;function _(b){f=LE(b),u.opacity=f}let m=[];function g(){m.length=0;let b=e.position.x,M=e.position.z;for(let x=0;x<r.length;x++){let S=r[x].position,E=(S.x-b)*(S.x-b)+(S.z-M)*(S.z-M);E>L0*L0||m.push({d2:E,p:S})}m.sort((x,S)=>x.d2-S.d2),p=0;for(let x=0;x<d.length;x++){let S=m[x];S&&f>0?(d[x].position.copy(S.p),d[x].intensity=f*AE,p++):d[x].intensity=0}}return{enabled:!0,count:r.length,poolSize:d.length,lamps:r,fittingMesh:l,bulbMesh:h,pool:d,setGlow:_,update:g,glow:()=>f,activeCount:()=>p}}var DE=!0,fd=40,F0=5;function FE(){return typeof location<"u"&&["localhost","127.0.0.1"].includes(location.hostname)&&typeof window<"u"&&window.__mcgrotForceLegs!=null?!!window.__mcgrotForceLegs:DE}function U0({camera:i,world:e,atmosphere:t,seed:n=0,onHinge:s=null}){let r=FE(),o=e&&e.streetLine||[],a={enabled:!1,update(){},state:()=>({enabled:!1,leg:0,hinges:0,zone:null,lastHingeZone:null,chainage:0}),history:()=>[]};if(!r||o.length<2||!i||!t)return a;let c=0;for(let g=1;g<o.length;g++)c+=Math.hypot(o[g][0]-o[g-1][0],o[g][1]-o[g-1][1]);function l(g){return g<=fd?"north":g>=c-fd?"south":null}let u=xs(i.position.x,i.position.z,o),h=l(u),d=h,f=0,p=0,_=[];function m(){let g=xs(i.position.x,i.position.z,o),b=l(g);if(b===h)return;let M=h;if(h=b,!b||b===d)return;d=b,f+=1,p+=1;let x=t.nudge(F0,n,f);_.push({leg:f,arrivedAt:b,leftBehind:M,...x}),s&&s({leg:f,zone:b,...x})}return{enabled:!0,update:m,state:()=>({enabled:!0,leg:f,hinges:p,zone:h,lastHingeZone:d,chainage:xs(i.position.x,i.position.z,o),length:c,endRadius:fd,turnaroundHours:F0}),history:()=>_.slice()}}function O0({camera:i,world:e,legs:t,atmosphere:n,ambience:s,controls:r,renderer:o}){let a=typeof document<"u"?document.getElementById("ending-prompt"):null,c=typeof document<"u"?document.getElementById("ending-card"):null,l=typeof document<"u"?document.getElementById("ending-resume"):null,u=e&&e.streetLine||[],h={update(){},begin(){return!1},canOffer:()=>!1,state:()=>({phase:"idle",offered:!1,elapsed:0,ended:0})};if(!i||!t||!n||u.length<2)return h;let d=u[0],f=u[1],p=d[0]-f[0],_=d[1]-f[1],m=Math.hypot(p,_)||1;p/=m,_/=m;let g="idle",b=0,M=!1,x=0,S=null,E=0,v=1,y={r:0,g:0,b:0},w={r:154/255,g:160/255,b:154/255};function R(){if(g!=="idle")return!1;let O=t.state();return!!O.enabled&&O.leg>=1&&O.zone==="north"}function A(O){a&&O!==M&&(M=O,a.style.display=O?"block":"none")}function I(){return R()?(g="running",b=0,A(!1),S=i.position.clone(),E=e.fog?e.fog.density:0,v=o?o.toneMappingExposure:1,e.fog&&(y.r=e.fog.color.r,y.g=e.fog.color.g,y.b=e.fog.color.b),n.setSuspended(!0),r&&r.setEnabled(!1),s&&s.setDucked(!0),!0):!1}function N(){return g!=="ended"?!1:(g="idle",b=0,c&&(c.style.display="none"),S&&i.position.copy(S),n.setSuspended(!1),r&&r.setEnabled(!0),s&&s.setDucked(!1),!0)}function B(O){if(g==="idle"){A(R());return}if(g==="ended")return;b=Math.min(10,b+(Number.isFinite(O)?O:0));let G=b/10,V=G*G*(3-2*G);e.fog&&(e.fog.density=E*(1+8*V),e.fog.color.setRGB(y.r+(w.r-y.r)*V,y.g+(w.g-y.g)*V,y.b+(w.b-y.b)*V)),o&&(o.toneMappingExposure=v+(.5-v)*V),S&&(i.position.x=S.x+p*26*V,i.position.z=S.z+_*26*V),b>=10&&(g="ended",x+=1,c&&(c.style.display="flex"))}return l&&l.addEventListener("click",N),a&&a.addEventListener("click",I),{update:B,begin:I,resume:N,canOffer:R,state:()=>({phase:g,offered:M,elapsed:+b.toFixed(3),ended:x,minLeg:1,sequenceSeconds:10})}}var UE=3.2,nu=.1,OE=2.5,BE=60,zE=40,kE=.15,Wn=512,B0=4,H0=4,HE=1/3;function iu(i,e){let t=i*73856093^e*19349663;return t=Math.imul(t^t>>>13,2246822507),t^=t>>>16,t>>>0}function G0(i){let e=i|0;return function(){e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function z0(i,e,t,n,s,r){let o=G0(r*7919+13);i.save(),i.beginPath(),i.rect(e,t,n,s),i.clip(),i.fillStyle="rgb(150,146,134)",i.fillRect(e,t,n,s);let a=20,c=s/a;for(let u=0;u<a;u++){let h=t+u*c,d=5+Math.floor(o()*3);for(let f=0;f<d;f++){let p=e+f/d*n,_=n/d,m=(o()-.5)*26;i.fillStyle=`rgba(${150+m},${146+m},${134+m},0.6)`,i.fillRect(p,h+2,_,c-2)}i.fillStyle="rgba(0,0,0,0.22)",i.fillRect(e,h,n,2)}for(let u=0;u<20;u++){let h=e+o()*n,d=4+o()*12,f=t+o()*s*.35,p=s*(.3+o()*.45),_=i.createLinearGradient(0,f,0,f+p);_.addColorStop(0,"rgba(20,18,15,0.22)"),_.addColorStop(1,"rgba(20,18,15,0)"),i.fillStyle=_,i.fillRect(h,f,d,p)}let l=2+Math.floor(o()*3);for(let u=0;u<l;u++){let h=n*(.12+o()*.08),d=s*(.15+o()*.09),f=e+n*.08+o()*(n*.84-h),p=t+s*.14+o()*(s*.62-d);i.fillStyle="rgba(64,58,48,0.7)",i.fillRect(f,p,h,d),i.strokeStyle="rgba(112,106,90,0.5)",i.lineWidth=3,i.strokeRect(f+1.5,p+1.5,h-3,d-3)}i.restore()}function GE(i,e,t,n,s,r,o){let a=G0(o*104729+5);i.save(),i.translate(e+n/2,t+s*.4),i.rotate((a()-.5)*.05);let c=r.toUpperCase(),l=72;for(i.font=`bold ${l}px Georgia, "Times New Roman", serif`;i.measureText(c).width>n*.8&&l>16;)l-=2,i.font=`bold ${l}px Georgia, "Times New Roman", serif`;i.textAlign="center",i.textBaseline="middle",i.globalAlpha=.2+a()*.12,i.fillStyle="rgb(150,58,42)",i.fillText(c,0,0),i.restore()}function VE(i){let e=B0,t=2,n=document.createElement("canvas");n.width=Wn*e,n.height=Wn*t;let s=n.getContext("2d"),r=[];for(let c=0;c<B0;c++){let l=c*Wn,u=0;z0(s,l,u,Wn,Wn,c),r.push(k0(l,u,n.width,n.height))}let o=[];for(let c=0;c<H0;c++){let l=c*Wn,u=Wn;z0(s,l,u,Wn,Wn,c+97),i[c]&&GE(s,l,u,Wn,Wn,i[c],c),o.push(k0(l,u,n.width,n.height))}let a=new Et(n);return a.colorSpace=tt,a.anisotropy=4,{texture:a,baseUv:r,ghostUv:o}}function k0(i,e,t,n){return{u0:i/t,u1:(i+Wn)/t,v0:1-(e+Wn)/n,v1:1-e/n}}function V0(i,e,t){let n=i&&i.leith&&i.leith.buildings||[],s=i&&i.facadeManifest,r=e&&e.nearestStreetPoint,o=e&&e.groundHeight;if(!n.length||!r)return{mesh:null,count:0};let a=[];if(s)for(let b of s.buildings)for(let M of b.businesses||[])a.push(M.name);let c=[];if(a.length)for(let b=0;b<H0;b++)c.push(a[iu(b,a.length)%a.length]);let l=VE(c),u=[],h=[],d=[],f=[],p=0,_=(b,M,x,S,E,v,y,w,R,A,I)=>{let N=p*4;u.push(E,R,v,y,R,w,y,A,w,E,A,v),h.push(b,M,x,M,x,S,b,S);for(let B=0;B<4;B++)d.push(I.r,I.g,I.b);f.push(N,N+1,N+2,N,N+2,N+3),p++};if(n.forEach((b,M)=>{let x=b&&b.footprint;if(!x||x.length<3)return;let S=Math.max(1,b.levels||1)*UE,E=0,v=0;for(let A of x)E+=A[0],v+=A[1];E/=x.length,v/=x.length;let y=o?o(E,v):0,w=XE(b,r),R=td(M,b);for(let A=0;A<x.length;A++){let I=x[A],N=x[(A+1)%x.length],B=N[0]-I[0],O=N[1]-I[1],G=Math.hypot(B,O);if(G<OE||WE(I[0],I[1],N[0],N[1],w))continue;let V=(I[0]+N[0])/2,ee=(I[1]+N[1])/2,ae=r(V,ee),de=r(I[0],I[1]),W=r(N[0],N[1]);if(Math.min(ae?ae.distance:1/0,de?de.distance:1/0,W?W.distance:1/0)>BE||G*S<zE)continue;let _e=I[0],Te=I[1],Z=B,te=O,j=-O/G,ye=B/G;j*(V-E)+ye*(ee-v)<0&&(j=-j,ye=-ye,_e=N[0],Te=N[1],Z=-B,te=-O);let Me=_e+j*nu,be=Te+ye*nu,he=_e+Z+j*nu,we=Te+te+ye*nu,K=c.length&&iu(M,A*31+7)%1e3/1e3<HE?l.ghostUv:l.baseUv,oe=iu(M,A*131+41)%K.length,fe=K[oe],ge=iu(M,A*991+3)%2===0,Fe=ge?fe.u1:fe.u0,se=ge?fe.u0:fe.u1;_(Fe,fe.v0,se,fe.v1,Me,be,he,we,y,y+S,R)}}),!p)return{mesh:null,count:0};let m=new pt;m.setAttribute("position",new je(u,3)),m.setAttribute("uv",new je(h,2)),m.setAttribute("color",new je(d,3)),m.setIndex(f),m.computeVertexNormals();let g=new He(m,new Ye({map:l.texture,vertexColors:!0,flatShading:!0}));return g.name="gable-dressing",t.add(g),{mesh:g,count:p}}function WE(i,e,t,n,s){let r=(i+t)/2,o=(e+n)/2;for(let a of s){let c=a.bx-a.ax,l=a.bz-a.az,u=c*c+l*l||1,h=((r-a.ax)*c+(o-a.az)*l)/u;if(h<-.01||h>1.01)continue;let d=a.ax+h*c,f=a.az+h*l;if(Math.hypot(r-d,o-f)<kE)return!0}return!1}function XE(i,e){try{return Qr(i,e)}catch{return[]}}var W0=3.2,X0=80,qE=10,q0=.5,pd=2500,YE=1/5;function Y0(i,e){let t=i*73856093^e*19349663;return t=Math.imul(t^t>>>13,2246822507),t^=t>>>16,t>>>0}function ir(i,e){return Y0(i,e)%1e5/1e5}function ZE(){let i=[],e=new et(.9,1.8,.55).toNonIndexed();e.deleteAttribute("uv"),e.translate(0,.9,0),i.push(e);let t=[[-.28,0],[.05,.15],[.3,-.12]];for(let[n,s]of t){let r=new Rn(.12,.13,.4,5,1,!0).toNonIndexed();r.deleteAttribute("uv"),r.translate(n,1.8+.2,s),i.push(r)}return rt(i,!1)}function KE(){let i=[],e=new Rn(.02,.03,1.4,5,1,!0).toNonIndexed();e.deleteAttribute("uv"),e.translate(0,.7,0),i.push(e);for(let t=0;t<2;t++){let n=new et(.5-t*.14,.02,.02).toNonIndexed();n.deleteAttribute("uv"),n.translate(0,1+t*.22,0),i.push(n)}return rt(i,!1)}function Z0(i,e,t){let n=i&&i.leith&&i.leith.buildings||[],s=e&&e.nearestStreetPoint,r=e&&e.groundHeight;if(!n.length||!s)return{chimneys:null,aerials:null,count:0};let o=(v,y)=>`${Math.round(v/q0)}:${Math.round(y/q0)}`,a=new Map;n.forEach(v=>{let y=v&&v.footprint;if(y)for(let[w,R]of y){let A=o(w,R);a.set(A,(a.get(A)||0)+1)}});let c=[];n.forEach((v,y)=>{let w=v&&v.footprint;if(!w||w.length<3)return;let R=0,A=0;for(let O of w)R+=O[0],A+=O[1];R/=w.length,A/=w.length;let I=s(R,A);if(!I||I.distance>X0)return;let N=Math.max(1,v.levels||1)*W0,B=new Set;for(let O=0;O<w.length;O++){let G=w[O],V=w[(O+1)%w.length],ee=o(G[0],G[1]);if(a.get(ee)>1&&!B.has(ee)){B.add(ee);let te=s(G[0],G[1]),j=N+(r?r(G[0],G[1]):0);c.push({x:G[0],z:G[1],y:j,dist:te?te.distance:I.distance,bi:y,edgeSeed:O})}let ae=V[0]-G[0],de=V[1]-G[1],W=Math.hypot(ae,de);if(W<3)continue;let Q=(G[0]+V[0])/2,ue=(G[1]+V[1])/2,_e=s(Q,ue),Te=!0;if(_e&&_e.point){let te=1/W,j=-de*te,ye=ae*te;j*(Q-R)+ye*(ue-A)<0&&(j=-j,ye=-ye);let Me=_e.point[0]-Q,be=_e.point[1]-ue,he=Math.hypot(Me,be)||1;Te=(j*Me+ye*be)/he>=0}if(!Te)continue;let Z=Math.max(1,Math.round(W/qE));for(let te=0;te<Z;te++){let j=(te+.5)/Z,ye=G[0]+ae*j,Me=G[1]+de*j,be=N+(r?r(ye,Me):0);c.push({x:ye,z:Me,y:be,dist:(s(ye,Me)||I).distance,bi:y,edgeSeed:O*97+te})}}}),c.sort((v,y)=>v.dist-y.dist);let l=Math.max(0,c.length-pd),u=l>0?c.slice(0,pd):c;l>0&&console.warn(`[chimneys] ${l} candidate chimney placements beyond ${pd} dropped (furthest-from-street first, not a silent mid-street gap)`);let h=ZE(),d=new Ye({color:3025444}),f=u.length?new un(h,d,u.length):null,p=new Ke,_=new U,m=new Pt,g=new U,b=new Zt;f&&(u.forEach((v,y)=>{let w=.75+ir(v.bi,v.edgeSeed*3+1)*.65,R=(ir(v.bi,v.edgeSeed*3+2)-.5)*.12,A=(ir(v.bi,v.edgeSeed*3+3)-.5)*.12,I=ir(v.bi,v.edgeSeed*3+4)*Math.PI*2;_.set(v.x,v.y,v.z),b.set(R,I,A),m.setFromEuler(b),g.set(1,w,1),p.compose(_,m,g),f.setMatrixAt(y,p)}),f.instanceMatrix.needsUpdate=!0,f.name="chimneys",t.add(f));let M=[];n.forEach((v,y)=>{let w=v&&v.footprint;if(!w||w.length<3||Y0(y,5153)%1e3/1e3>=YE)return;let R=0,A=0;for(let V of w)R+=V[0],A+=V[1];R/=w.length,A/=w.length;let I=s(R,A);if(!I||I.distance>X0)return;let N=Math.max(1,v.levels||1)*W0,B=w[0],O=1/0;for(let V of w){let ee=I.point?Math.hypot(V[0]-I.point[0],V[1]-I.point[1]):0;ee<O&&(O=ee,B=V)}let G=N+(r?r(B[0],B[1]):0);M.push({x:B[0],z:B[1],y:G,bi:y})});let x=KE(),S=new Ye({color:1842204}),E=M.length?new un(x,S,M.length):null;return E&&(M.forEach((v,y)=>{let w=(ir(v.bi,71)-.5)*.3,R=(ir(v.bi,73)-.5)*.3,A=ir(v.bi,79)*Math.PI*2;_.set(v.x,v.y,v.z),b.set(w,A,R),m.setFromEuler(b),g.set(1,1,1),p.compose(_,m,g),E.setMatrixAt(y,p)}),E.instanceMatrix.needsUpdate=!0,E.name="aerials",t.add(E)),{chimneys:f,aerials:E,count:u.length,aerialCount:M.length,dropped:l}}var $E=3028026,JE=9278327,jE=2304048,QE=6051656,eT=11557412,tT=3.2,nT=1/700,iT=`
  varying vec3 vDir;
  void main() {
    // World-space view ray. Correct whether the dome is parented to the camera
    // or to the scene, because modelMatrix carries whichever transform applies.
    vDir = (modelMatrix * vec4(position, 1.0)).xyz - cameraPosition;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,sT=`
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
    vec2 p = d.xz / max(h, 0.05) * ${tT.toFixed(2)}
           + cameraPosition.xz * ${nT.toFixed(6)};
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
`;function K0(i,e){let t=new Ee(0,-1);if(e&&e.length>1){let o=e[0],a=e[e.length-1];t.set(o[0]-a[0],o[1]-a[1]).normalize()}let n={uFog:{value:i},uBand:{value:new me(JE)},uZenith:{value:new me($E)},uCloudDark:{value:new me(jE)},uCloudLit:{value:new me(QE)},uGlow:{value:new me(eT)},uDock:{value:t},uTime:{value:0},uCoverage:{value:1}},s=new Cn({uniforms:n,vertexShader:iT,fragmentShader:sT,side:mn,depthWrite:!1,depthTest:!1,fog:!1}),r=new He(new ai(1,32,20),s);return r.renderOrder=-1e3,r.frustumCulled=!1,{mesh:r,uniforms:n,update(o){n.uTime.value=o},setPalette({band:o,zenith:a,cloudDark:c,cloudLit:l,glow:u}){o&&n.uBand.value.copy(o),a&&n.uZenith.value.copy(a),c&&n.uCloudDark.value.copy(c),l&&n.uCloudLit.value.copy(l),u&&n.uGlow.value.copy(u)},setCoverage(o){n.uCoverage.value=o}}}var oT=1,aT=10,cT=30,lT=[{hour:0,sun:{color:3359834,intensity:.05,pos:{x:-100,y:-50,z:80}},hemi:{sky:1844272,ground:855048,intensity:.6},ambient:{color:1315855,intensity:.25},fog:1316111,fogDensity:.0095,exposure:.55,tint:{r:.12,g:.12,b:.15},sky:{band:1711126,zenith:855826,cloudDark:658447,cloudLit:2237468,glow:6040594},torch:1,windowGlow:1,coverage:1,rain:0,wetness:0},{hour:5,sun:{color:3820126,intensity:.08,pos:{x:250,y:20,z:-150}},hemi:{sky:2239544,ground:1052426,intensity:.7},ambient:{color:1513231,intensity:.3},fog:1579539,fogDensity:.0095,exposure:.6,tint:{r:.14,g:.14,b:.17},sky:{band:2105882,zenith:1053464,cloudDark:855826,cloudLit:2500640,glow:6500367},torch:.95,windowGlow:.9,coverage:1,rain:0,wetness:0},{hour:8,sun:{color:10465480,intensity:.5,pos:{x:200,y:180,z:-100}},hemi:{sky:6055282,ground:2367770,intensity:2},ambient:{color:3158047,intensity:.8},fog:3817528,fogDensity:.0095,exposure:1,tint:{r:.55,g:.55,b:.6},sky:{band:6384210,zenith:2304048,cloudDark:1843240,cloudLit:4802102,glow:9062942},torch:.3,windowGlow:.15,coverage:1,rain:0,wetness:0},{hour:12,sun:{color:13621480,intensity:1.15,pos:{x:-200,y:300,z:150}},hemi:{sky:9147296,ground:3814180,intensity:3.9},ambient:{color:4999224,intensity:1.4},fog:4870466,fogDensity:.0095,exposure:1.46,tint:{r:1,g:1,b:1},sky:{band:9278327,zenith:3028026,cloudDark:2304048,cloudLit:6051656,glow:11557412},torch:.03,windowGlow:0,coverage:1,rain:0,wetness:0},{hour:17,sun:{color:12101768,intensity:.6,pos:{x:-250,y:150,z:200}},hemi:{sky:6972504,ground:3025438,intensity:2.3},ambient:{color:3551264,intensity:.9},fog:3948336,fogDensity:.0095,exposure:1.05,tint:{r:.6,g:.58,b:.55},sky:{band:7629650,zenith:2632756,cloudDark:1974826,cloudLit:5130812,glow:11031582},torch:.15,windowGlow:.1,coverage:1,rain:0,wetness:0},{hour:20,sun:{color:6050920,intensity:.15,pos:{x:-300,y:40,z:220}},hemi:{sky:3027518,ground:1578256,intensity:1},ambient:{color:1841682,intensity:.4},fog:2434847,fogDensity:.0095,exposure:.75,tint:{r:.3,g:.28,b:.3},sky:{band:3421226,zenith:1579808,cloudDark:1185050,cloudLit:3683626,glow:9190936},torch:.55,windowGlow:.6,coverage:1,rain:0,wetness:0},{hour:22,sun:{color:3818070,intensity:.06,pos:{x:-150,y:-30,z:100}},hemi:{sky:1975600,ground:920841,intensity:.7},ambient:{color:1381646,intensity:.3},fog:1579540,fogDensity:.0095,exposure:.6,tint:{r:.16,g:.16,b:.19},sky:{band:1842711,zenith:921620,cloudDark:724240,cloudLit:2369054,glow:6696722},torch:.9,windowGlow:.95,coverage:1,rain:0,wetness:0}],uT=[{hour:0,sun:{color:3030096,intensity:.04,pos:{x:-100,y:-50,z:80}},hemi:{sky:1317930,ground:657670,intensity:.45},ambient:{color:921097,intensity:.18},fog:987919,fogDensity:.0095,exposure:.5,tint:{r:.09,g:.09,b:.13},sky:{band:1186324,zenith:526864,cloudDark:460810,cloudLit:1579542,glow:6040594},torch:1,windowGlow:1,coverage:.05,rain:0,wetness:0},{hour:5,sun:{color:3689060,intensity:.06,pos:{x:250,y:20,z:-150}},hemi:{sky:1713206,ground:789256,intensity:.55},ambient:{color:1052937,intensity:.22},fog:1185039,fogDensity:.0095,exposure:.55,tint:{r:.11,g:.11,b:.15},sky:{band:1580568,zenith:658968,cloudDark:592654,cloudLit:1842712,glow:6500367},torch:.95,windowGlow:.85,coverage:.08,rain:0,wetness:0},{hour:8,sun:{color:16768160,intensity:2.9,pos:{x:200,y:180,z:-100}},hemi:{sky:5535904,ground:2104338,intensity:1.25},ambient:{color:1973268,intensity:.42},fog:8691900,fogDensity:.0022,exposure:1.15,tint:{r:.68,g:.64,b:.58},sky:{band:11059928,zenith:3824764,cloudDark:3361378,cloudLit:6850724,glow:10114592},torch:.05,windowGlow:.05,coverage:.15,rain:0,wetness:0},{hour:12,sun:{color:16773848,intensity:3,pos:{x:-200,y:300,z:150}},hemi:{sky:6852788,ground:2367253,intensity:1.55},ambient:{color:2104851,intensity:.5},fog:8691898,fogDensity:.0022,exposure:1.25,tint:{r:1,g:.98,b:.92},sky:{band:11455184,zenith:2905206,cloudDark:4216428,cloudLit:8822970,glow:11557412},torch:0,windowGlow:0,coverage:.12,rain:0,wetness:0},{hour:17,sun:{color:16758906,intensity:1.3,pos:{x:-250,y:150,z:200}},hemi:{sky:4608100,ground:1841423,intensity:1},ambient:{color:1578254,intensity:.35},fog:5660532,fogDensity:.0022,exposure:.98,tint:{r:.6,g:.53,b:.46},sky:{band:8810324,zenith:2634828,cloudDark:2765380,cloudLit:5791860,glow:11031582},torch:.1,windowGlow:.08,coverage:.15,rain:0,wetness:0},{hour:20,sun:{color:6837876,intensity:.18,pos:{x:-300,y:40,z:220}},hemi:{sky:2239032,ground:1183498,intensity:.7},ambient:{color:1183753,intensity:.28},fog:1843248,fogDensity:.0095,exposure:.68,tint:{r:.3,g:.26,b:.3},sky:{band:2632248,zenith:1185314,cloudDark:987674,cloudLit:2632248,glow:9190936},torch:.5,windowGlow:.55,coverage:.1,rain:0,wetness:0},{hour:22,sun:{color:3687524,intensity:.045,pos:{x:-150,y:-30,z:100}},hemi:{sky:1581102,ground:657670,intensity:.5},ambient:{color:986376,intensity:.22},fog:1250852,fogDensity:.0095,exposure:.52,tint:{r:.14,g:.14,b:.18},sky:{band:1448486,zenith:592916,cloudDark:461070,cloudLit:1842726,glow:6696722},torch:.85,windowGlow:.9,coverage:.06,rain:0,wetness:0}],hT=[{hour:0,sun:{color:2766408,intensity:.04,pos:{x:-100,y:-50,z:80}},hemi:{sky:1449512,ground:723463,intensity:.5},ambient:{color:1052680,intensity:.2},fog:1053198,fogDensity:.0095,exposure:.48,tint:{r:.1,g:.1,b:.13},sky:{band:1382933,zenith:724240,cloudDark:526861,cloudLit:1842712,glow:6040594},torch:1,windowGlow:1,coverage:1,rain:.7,wetness:.85},{hour:5,sun:{color:3095630,intensity:.06,pos:{x:250,y:20,z:-150}},hemi:{sky:1712684,ground:855048,intensity:.6},ambient:{color:1250057,intensity:.25},fog:1250575,fogDensity:.0095,exposure:.52,tint:{r:.12,g:.12,b:.15},sky:{band:1711126,zenith:855826,cloudDark:658447,cloudLit:1974296,glow:6500367},torch:.95,windowGlow:.9,coverage:1,rain:.7,wetness:.85},{hour:8,sun:{color:8030364,intensity:.3,pos:{x:200,y:180,z:-100}},hemi:{sky:4739164,ground:1973013,intensity:1.6},ambient:{color:2500119,intensity:.6},fog:3027504,fogDensity:.0095,exposure:.85,tint:{r:.42,g:.44,b:.48},sky:{band:5133892,zenith:1843238,cloudDark:1448480,cloudLit:3815468,glow:9062942},torch:.35,windowGlow:.2,coverage:1,rain:.85,wetness:.9},{hour:12,sun:{color:10135738,intensity:.65,pos:{x:-200,y:300,z:150}},hemi:{sky:6975608,ground:2893852,intensity:2.9},ambient:{color:3683871,intensity:1},fog:3685428,fogDensity:.0095,exposure:1.1,tint:{r:.72,g:.74,b:.78},sky:{band:6975834,zenith:2369584,cloudDark:1843240,cloudLit:4736566,glow:11557412},torch:.06,windowGlow:0,coverage:1,rain:.85,wetness:.9},{hour:17,sun:{color:9076336,intensity:.4,pos:{x:-250,y:150,z:200}},hemi:{sky:5261630,ground:2236438,intensity:1.7},ambient:{color:2762264,intensity:.65},fog:3026984,fogDensity:.0095,exposure:.9,tint:{r:.46,g:.44,b:.42},sky:{band:5788224,zenith:2106154,cloudDark:1580066,cloudLit:3947054,glow:11031582},torch:.2,windowGlow:.15,coverage:1,rain:.8,wetness:.9},{hour:20,sun:{color:4603984,intensity:.12,pos:{x:-300,y:40,z:220}},hemi:{sky:2369070,ground:1315341,intensity:.8},ambient:{color:1446921,intensity:.32},fog:1842456,fogDensity:.0095,exposure:.62,tint:{r:.24,g:.22,b:.24},sky:{band:2631712,zenith:1316640,cloudDark:987414,cloudLit:2894370,glow:9190936},torch:.6,windowGlow:.6,coverage:1,rain:.75,wetness:.9},{hour:22,sun:{color:3028552,intensity:.05,pos:{x:-150,y:-30,z:100}},hemi:{sky:1580584,ground:789256,intensity:.6},ambient:{color:1184264,intensity:.25},fog:1250575,fogDensity:.0095,exposure:.52,tint:{r:.13,g:.13,b:.16},sky:{band:1579540,zenith:724240,cloudDark:592654,cloudLit:1974296,glow:6696722},torch:.92,windowGlow:.95,coverage:1,rain:.7,wetness:.85}],dT=[{hour:0,sun:{color:1844272,intensity:.03,pos:{x:-100,y:-50,z:80}},hemi:{sky:2106922,ground:789514,intensity:.5},ambient:{color:1316374,intensity:.22},fog:1711646,fogDensity:.03,exposure:.55,tint:{r:.14,g:.15,b:.16},sky:{band:1843230,zenith:1316890,cloudDark:1053204,cloudLit:2237988,glow:4865072},torch:1,windowGlow:1,coverage:1,rain:0,wetness:.25},{hour:5,sun:{color:2371644,intensity:.05,pos:{x:250,y:20,z:-150}},hemi:{sky:2501680,ground:921100,intensity:.6},ambient:{color:1579546,intensity:.28},fog:2237990,fogDensity:.03,exposure:.62,tint:{r:.18,g:.19,b:.2},sky:{band:2369578,zenith:1711650,cloudDark:1316376,cloudLit:2632746,glow:5260342},torch:.9,windowGlow:.85,coverage:1,rain:0,wetness:.25},{hour:8,sun:{color:12107972,intensity:.15,pos:{x:200,y:180,z:-100}},hemi:{sky:14212316,ground:6316120,intensity:3.4},ambient:{color:10264732,intensity:1.6},fog:13555412,fogDensity:.03,exposure:1.3,tint:{r:.82,g:.84,b:.84},sky:{band:13818584,zenith:13161168,cloudDark:12108480,cloudLit:14476514,glow:9074280},torch:.02,windowGlow:.02,coverage:1,rain:0,wetness:.25},{hour:12,sun:{color:11581626,intensity:.2,pos:{x:-200,y:300,z:150}},hemi:{sky:15001830,ground:6842464,intensity:3.8},ambient:{color:11054248,intensity:1.8},fog:14081756,fogDensity:.03,exposure:1.42,tint:{r:1,g:1,b:.98},sky:{band:14344928,zenith:13686998,cloudDark:12634824,cloudLit:14871272,glow:9205866},torch:0,windowGlow:0,coverage:1,rain:0,wetness:.25},{hour:17,sun:{color:11049104,intensity:.18,pos:{x:-250,y:150,z:200}},hemi:{sky:13158592,ground:6314574,intensity:3},ambient:{color:9867912,intensity:1.5},fog:12894906,fogDensity:.03,exposure:1.2,tint:{r:.86,g:.82,b:.78},sky:{band:13026490,zenith:12369076,cloudDark:11316388,cloudLit:13684420,glow:9073760},torch:.08,windowGlow:.06,coverage:1,rain:0,wetness:.25},{hour:20,sun:{color:5789800,intensity:.1,pos:{x:-300,y:40,z:220}},hemi:{sky:3685440,ground:1842200,intensity:1.3},ambient:{color:2631722,intensity:.55},fog:3027510,fogDensity:.03,exposure:.78,tint:{r:.36,g:.35,b:.38},sky:{band:3159094,zenith:2369580,cloudDark:1843236,cloudLit:3553850,glow:6048316},torch:.5,windowGlow:.55,coverage:1,rain:0,wetness:.25},{hour:22,sun:{color:3160648,intensity:.05,pos:{x:-150,y:-30,z:100}},hemi:{sky:2237998,ground:921100,intensity:.6},ambient:{color:1447962,intensity:.28},fog:1843236,fogDensity:.03,exposure:.58,tint:{r:.16,g:.17,b:.19},sky:{band:1974820,zenith:1448478,cloudDark:1184790,cloudLit:2369578,glow:4996658},torch:.88,windowGlow:.9,coverage:1,rain:0,wetness:.25}],xd={overcast:lT,clear:uT,rain:hT,haar:dT};function fT(i){return xd[i]||xd.overcast}var J0={drizzle:{from:"overcast",to:"rain",k:.45}},md={overcast:["clear","drizzle","haar"],clear:["overcast"],drizzle:["overcast","rain"],rain:["drizzle"],haar:["overcast"]},j0=1.5,pT=4;function gd(i,e){let t=i*73856093^e*19349663;return t=Math.imul(t^t>>>13,2246822507),t^=t>>>16,t>>>0}function mT(i,e){let t=fT(e),n=t.length-1;for(let c=0;c<t.length&&t[c].hour<=i;c++)n=c;let s=t[n],r=t[(n+1)%t.length],o=r.hour-s.hour;o<=0&&(o+=24);let a=i-s.hour;return a<0&&(a+=24),a=o>0?Math.max(0,Math.min(1,a/o)):0,{a:s,b:r,t:a}}function Ut(i,e,t){return i+(e-i)*t}function eo(){return{sun:{color:new me,intensity:0,pos:new U},hemi:{sky:new me,ground:new me,intensity:0},ambient:{color:new me,intensity:0},fog:new me,fogDensity:.0095,exposure:1,tint:new me(1,1,1),sky:{band:new me,zenith:new me,cloudDark:new me,cloudLit:new me,glow:new me},torch:0,windowGlow:0,coverage:1,rain:0,wetness:0}}function Q0(i,e){return e.sun.color.copy(i.sun.color),e.sun.intensity=i.sun.intensity,e.sun.pos.copy(i.sun.pos),e.hemi.sky.copy(i.hemi.sky),e.hemi.ground.copy(i.hemi.ground),e.hemi.intensity=i.hemi.intensity,e.ambient.color.copy(i.ambient.color),e.ambient.intensity=i.ambient.intensity,e.fog.copy(i.fog),e.fogDensity=i.fogDensity,e.exposure=i.exposure,e.tint.copy(i.tint),e.sky.band.copy(i.sky.band),e.sky.zenith.copy(i.sky.zenith),e.sky.cloudDark.copy(i.sky.cloudDark),e.sky.cloudLit.copy(i.sky.cloudLit),e.sky.glow.copy(i.sky.glow),e.torch=i.torch,e.windowGlow=i.windowGlow,e.coverage=i.coverage,e.rain=i.rain,e.wetness=i.wetness,e}function eg({scene:i,renderer:e,world:t,sky:n,torch:s,windows:r,rain:o,ambience:a}){let c=null,l=!1,u=t.lights&&t.lights.hemi,h=t.lights&&t.lights.sun,d=t.lights&&t.lights.ambient,f=t.fog,p=t.surfaces||{},_=p.road?p.road.color.clone():null,m=p.pavement?p.pavement.color.clone():null,g=.5;function b(L){let D=1-g*L,z=1+(.25-1)*L;p.road&&_&&(p.road.color.copy(_).multiplyScalar(D),p.road.roughness=z),p.pavement&&m&&(p.pavement.color.copy(m).multiplyScalar(D),p.pavement.roughness=z)}let M=$l(),x=oT,S="overcast",E=null,v=0,y=!0,w=Math.floor(M*1e6)>>>0,R=0,A=null,I=null;function N(L){let D=md[L]||md.overcast,z=gd(w,R++);return D[z%D.length]}function B(L){I=N(L);let D=gd(w,R++),z=j0+D%1e3/1e3*(pT-j0);A=v+z}function O(L){y=!!L}let G=eo(),V=eo(),ee=eo(),ae=eo(),de=eo(),W=eo(),Q=new me,ue=new me;function _e(L,D,z,X){return L.lerpColors(Q.set(D),ue.set(z),X)}function Te(L,D,z){let{a:X,b:ne,t:q}=mT(L,D);return _e(z.sun.color,X.sun.color,ne.sun.color,q),z.sun.intensity=Ut(X.sun.intensity,ne.sun.intensity,q),z.sun.pos.set(Ut(X.sun.pos.x,ne.sun.pos.x,q),Ut(X.sun.pos.y,ne.sun.pos.y,q),Ut(X.sun.pos.z,ne.sun.pos.z,q)),_e(z.hemi.sky,X.hemi.sky,ne.hemi.sky,q),_e(z.hemi.ground,X.hemi.ground,ne.hemi.ground,q),z.hemi.intensity=Ut(X.hemi.intensity,ne.hemi.intensity,q),_e(z.ambient.color,X.ambient.color,ne.ambient.color,q),z.ambient.intensity=Ut(X.ambient.intensity,ne.ambient.intensity,q),_e(z.fog,X.fog,ne.fog,q),z.fogDensity=Ut(X.fogDensity,ne.fogDensity,q),z.exposure=Ut(X.exposure,ne.exposure,q),z.tint.setRGB(Ut(X.tint.r,ne.tint.r,q),Ut(X.tint.g,ne.tint.g,q),Ut(X.tint.b,ne.tint.b,q)),_e(z.sky.band,X.sky.band,ne.sky.band,q),_e(z.sky.zenith,X.sky.zenith,ne.sky.zenith,q),_e(z.sky.cloudDark,X.sky.cloudDark,ne.sky.cloudDark,q),_e(z.sky.cloudLit,X.sky.cloudLit,ne.sky.cloudLit,q),_e(z.sky.glow,X.sky.glow,ne.sky.glow,q),z.torch=Ut(X.torch,ne.torch,q),z.windowGlow=Ut(X.windowGlow,ne.windowGlow,q),z.coverage=Ut(X.coverage,ne.coverage,q),z.rain=Ut(X.rain,ne.rain,q),z.wetness=Ut(X.wetness,ne.wetness,q),z}function Z(L,D,z,X){return X.sun.color.lerpColors(L.sun.color,D.sun.color,z),X.sun.intensity=Ut(L.sun.intensity,D.sun.intensity,z),X.sun.pos.lerpVectors(L.sun.pos,D.sun.pos,z),X.hemi.sky.lerpColors(L.hemi.sky,D.hemi.sky,z),X.hemi.ground.lerpColors(L.hemi.ground,D.hemi.ground,z),X.hemi.intensity=Ut(L.hemi.intensity,D.hemi.intensity,z),X.ambient.color.lerpColors(L.ambient.color,D.ambient.color,z),X.ambient.intensity=Ut(L.ambient.intensity,D.ambient.intensity,z),X.fog.lerpColors(L.fog,D.fog,z),X.fogDensity=Ut(L.fogDensity,D.fogDensity,z),X.exposure=Ut(L.exposure,D.exposure,z),X.tint.lerpColors(L.tint,D.tint,z),X.sky.band.lerpColors(L.sky.band,D.sky.band,z),X.sky.zenith.lerpColors(L.sky.zenith,D.sky.zenith,z),X.sky.cloudDark.lerpColors(L.sky.cloudDark,D.sky.cloudDark,z),X.sky.cloudLit.lerpColors(L.sky.cloudLit,D.sky.cloudLit,z),X.sky.glow.lerpColors(L.sky.glow,D.sky.glow,z),X.torch=Ut(L.torch,D.torch,z),X.windowGlow=Ut(L.windowGlow,D.windowGlow,z),X.coverage=Ut(L.coverage,D.coverage,z),X.rain=Ut(L.rain,D.rain,z),X.wetness=Ut(L.wetness,D.wetness,z),X}function te(L,D,z){let X=J0[D];return X?(Te(L,X.from,de),Te(L,X.to,W),Z(de,W,X.k,z),X.rainScale!=null&&(z.rain*=X.rainScale),z):Te(L,D,z)}let j=0,ye=e.toneMappingExposure,Me=new me(1,1,1);function be(L){if(h){h.color.copy(L.sun.color),h.intensity=L.sun.intensity,h.position.copy(L.sun.pos);let D=L.sun.pos.length()||1;j=Math.asin(Jn.clamp(L.sun.pos.y/D,-1,1))*Jn.RAD2DEG}u&&(u.color.copy(L.hemi.sky),u.groundColor.copy(L.hemi.ground),u.intensity=L.hemi.intensity),d&&(d.color.copy(L.ambient.color),d.intensity=L.ambient.intensity),f&&(f.color.copy(L.fog),f.density=L.fogDensity),ye=L.exposure,e.toneMappingExposure=ye,Me.copy(L.tint),n&&(n.setPalette({band:L.sky.band,zenith:L.sky.zenith,cloudDark:L.sky.cloudDark,cloudLit:L.sky.cloudLit,glow:L.sky.glow}),n.setCoverage(L.coverage)),s&&s.setDarkness(L.torch),r&&r.setGlow(L.windowGlow),c&&c.setGlow(L.windowGlow),o&&o.setIntensity(L.rain),a&&a.setRain(L.rain),b(L.wetness)}let he=new Map,we=0;function H(L){he.has(L)||L.userData&&L.userData.unlit===!1||he.set(L,L.color.clone())}function K(){let L=new Set;i.traverse(D=>{if(!D.isMesh||!D.material)return;let z=Array.isArray(D.material)?D.material:[D.material];for(let X of z)X&&(L.add(X),X.isMeshBasicMaterial&&H(X))});for(let D of he.keys())L.has(D)||he.delete(D)}function oe(){for(let[L,D]of he)L.color.copy(D).multiply(Me)}function fe(L,D){if(l){x!==0&&(M=((M+x*(L/60))%24+24)%24);return}if(x!==0&&(M=(M+x*(L/60))%24,M<0&&(M+=24),v+=x*(L/60),y&&A!==null&&v>=A&&!E)){let ne=I;Ie(ne),B(ne)}let z=E?E.toWeather:S;te(M,z,G);let X;if(E){E.elapsed+=L;let ne=Math.min(1,E.elapsed/E.duration);Z(E.from,G,ne,V),X=V,ne>=1&&(S=E.toWeather,E=null)}else X=G;be(X),Q0(X,ae),we++,we%cT===0&&K(),oe()}B(S),K(),fe(0,0);function ge(L){M=(L%24+24)%24,x=0,fe(0,0)}function Fe(L){x=L}function se(){return M}let pe=new Set([...Object.keys(xd),...Object.keys(J0)]);function Ie(L){if(E){if(L===E.toWeather)return}else if(L===S)return;Q0(ae,ee),E={from:ee,toWeather:L,elapsed:0,duration:aT}}function F(L){if(!pe.has(L)){console.warn(`[atmosphere] setWeather: unknown weather "${L}", ignoring`);return}Ie(L),y&&B(L)}function Ae(){return{hours:M,rate:x,weather:S,weatherTransition:E?{target:E.toWeather,progress:Math.min(1,E.elapsed/E.duration)}:null,sunAltitude:j,exposure:ye,fogDensity:f?f.density:ae.fogDensity,tint:{r:Me.r,g:Me.g,b:Me.b},rain:ae.rain,wetness:ae.wetness,weatherScheduleEnabled:y}}function De(L,D,z){let X=E?E.toWeather:S;M=((M+L)%24+24)%24,fe(0,0);let ne=md[X]||[],q=X;return ne.length&&(q=ne[gd(D>>>0,z>>>0)%ne.length],F(q)),{hours:L,from:X,to:q}}function P(L){c=L||null,c&&c.setGlow(ae.windowGlow)}function T(L){let D=l;l=!!L,D&&!l&&fe(0,0)}return{update:fe,setTime:ge,getTime:se,setRate:Fe,setWeather:F,setWeatherSchedule:O,state:Ae,setLamps:P,nudge:De,setSuspended:T,isSuspended:()=>l}}var tg=3.2,gT=2.4,xT=.85,_T=1.15,ng=.34,yT=1/11,_d=4e3;function vT(i,e){let t=i*73856093^e*19349663;return t=Math.imul(t^t>>>13,2246822507),t^=t>>>16,t>>>0}function yd(i,e){return vT(i,e)%1e5/1e5}function MT(){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255, 214, 150, 0.95)"),n.addColorStop(.5,"rgba(255, 190, 110, 0.55)"),n.addColorStop(1,"rgba(255, 170, 90, 0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let s=new Et(e);return s.colorSpace=tt,s}function ig(i,e,t){let n=i&&i.leith&&i.leith.buildings||[],s=e&&e.nearestStreetPoint,r=e&&e.groundHeight;if(!n.length||!s)return{mesh:null,count:0,setGlow(){}};let o=[];n.forEach((b,M)=>{let x=Math.max(1,b.levels||1);if(x<2)return;Qr(b,s).forEach((E,v)=>{if(E.len<1)return;let y=(E.ax+E.bx)/2,w=(E.az+E.bz)/2,R=s(y,w);if(!R||!R.point)return;let A=-E.dirz,I=E.dirx,N=R.point[0]-y,B=R.point[1]-w;A*N+I*B<0&&(A=-A,I=-I);let O=Math.atan2(A,I),G=Math.max(1,Math.round(E.len/gT));for(let V=0;V<G;V++){let ee=v*4099+V;if(yd(M,ee)>=yT)continue;let ae=(V+.5)/G,de=E.ax+E.dirx*E.len*ae+A*ng,W=E.az+E.dirz*E.len*ae+I*ng,Q=1+Math.floor(yd(M,ee+1)*(x-1)),ue=.3+yd(M,ee+2)*.4,Te=(r?r(de,W):0)+Q*tg+ue*tg,Z=s(de,W);o.push({x:de,y:Te,z:W,yaw:O,dist:Z?Z.distance:0})}})}),o.sort((b,M)=>b.dist-M.dist);let a=Math.max(0,o.length-_d),c=a>0?o.slice(0,_d):o;if(a>0&&console.warn(`[windows] ${a} candidate lit windows beyond ${_d} dropped (furthest-from-street first)`),!c.length)return{mesh:null,count:0,setGlow(){}};let l=new Ot(xT,_T),u=new pn({map:MT(),transparent:!0,opacity:0,depthWrite:!1,blending:qi,side:Mn});u.userData.unlit=!1;let h=new un(l,u,c.length);h.name="lit-windows";let d=new Ke,f=new U,p=new Pt,_=new Zt,m=new U(1,1,1);c.forEach((b,M)=>{f.set(b.x,b.y,b.z),_.set(0,b.yaw,0),p.setFromEuler(_),d.compose(f,p,m),h.setMatrixAt(M,d)}),h.instanceMatrix.needsUpdate=!0,t.add(h);function g(b){u.opacity=Math.max(0,Math.min(1,b))}return{mesh:h,count:c.length,dropped:a,setGlow:g}}var vd={r:44,g:50,b:45},bT=2501416,sg=60;function ST(){let t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d"),s=n.createImageData(256,256),r=s.data;for(let o=0;o<256;o++)for(let a=0;a<256;a++){let c=a/256*6,l=o/256*6,u=vd.r,h=vd.g,d=vd.b,f=nn(c,l,6,3,401)-.5;u+=f*10,h+=f*12,d+=f*10,jn(a,o,419)>.986&&(u+=26,h+=26,d+=22);let _=(o*256+a)*4;r[_]=Math.max(0,Math.min(255,u)),r[_+1]=Math.max(0,Math.min(255,h)),r[_+2]=Math.max(0,Math.min(255,d)),r[_+3]=255}return n.putImageData(s,0,0),er(t)}function rg(i,e){let t=i.streetLine||[];if(t.length<2)return{group:null};let n=t[0],s=t[t.length-1],r=n[0]-s[0],o=n[1]-s[1],a=Math.hypot(r,o)||1;r/=a,o/=a;let c=-o,l=r,h=(i.groundHeight?i.groundHeight(n[0],n[1]):0)-2.5,d=new it;d.name="forth";let f=1400,p=15,_=new Ot(f,f);_.rotateX(-Math.PI/2);let m=ST();m.repeat.set(f/sg,f/sg);let g=new He(_,new Ye({map:m}));g.position.set(n[0]+r*(p+f/2),h,n[1]+o*(p+f/2)),g.name="forth-water",d.add(g);let b=p+340,M=12,x=new et(26,M,900);x.translate(0,M/2,0),x.rotateY(Math.atan2(c,l)),x.translate(n[0]+r*b,h,n[1]+o*b);let S=new He(x,new Ye({color:new me(bT).multiplyScalar(4.7)}));return S.name="forth-shore",d.add(S),e.add(d),{group:d,water:g,shore:S}}var Tt=(()=>{let i=13723136;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),bd=596,rr=690,Md=620,ET=593,TT=-3.2,wT=115,Qn=3.5,sr=2,ar=.03,AT=.042;function ag(i,e){let t=i.streetLine||[];if(t.length<2)return{group:new it};let n=i.groundHeight,s=new it;e.add(s);let r=[],o=[],a=[],c=[];if(IT(t,s,c,r,o,a,n,i.collision),NT(t,r,n),UT(t,s,n,i.collision),i.collision)for(let l of r)l.tipped||i.collision.addCircle(l.x,l.z,.26,"cone");return FT(r,s),LT(o,a,s),c.length&&s.add(new He(rt(c,!1),new Ye({vertexColors:!0,flatShading:!0}))),{group:s}}function RT(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0;return{point:[s+c*h,r+l*h],tangent:[c/(u||1),l/(u||1)]}}t+=u}return null}function CT(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function or(i,e,t,n){let s=RT(i,e);if(!s)return null;let[r,o]=s.tangent,a=-o,c=r,l=s.point[0]+a*t,u=s.point[1]+c*t;return{x:l,z:u,y:n?n(l,u):0,yaw:Math.atan2(r,o),tangent:s.tangent}}function IT(i,e,t,n,s,r,o,a){let c=zT(),l=[],u=1.5;for(let h=Md-6;h<rr;h+=5){let d=or(i,h+2.5,(Tt()-.5)*.8,o);if(!d)break;let f=new Ot(u*2,5.4);f.rotateX(-Math.PI/2),f.rotateY(d.yaw),f.translate(d.x,d.y+AT,d.z),l.push(f)}l.length&&e.add(new He(rt(l,!1),new Ye({map:c,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3})));for(let h=Md-8;h<rr+4;h+=3.2)for(let d of[-1,1]){let f=or(i,h+Tt()*2,d*(u+.7+Tt()*.9),o);if(!f)continue;let p=.75+Tt()*.65,_=.26+Tt()*.26,m=new ls(p,_,9);if(m.translate(0,_/2,0),m.scale(1,1,.7+Tt()*.5),m.rotateY(Tt()*Math.PI),m.translate(f.x,f.y+ar,f.z),wa(m,[6048825,6969411,4865326][Math.floor(Tt()*3)]),t.push(m),Tt()<.55){let g=new et(.4+Tt()*.5,.09,.35+Tt()*.4);g.rotateZ((Tt()-.5)*.9),g.rotateY(Tt()*Math.PI),g.translate(f.x+(Tt()-.5)*1.4,f.y+ar+.12,f.z+(Tt()-.5)*1.4),wa(g,2829352),t.push(g)}}for(let h=Md-10;h<rr+6;h+=2.3)for(let d of[-1,1]){let f=or(i,h,d*(u+1.9+Tt()*.4),o);f&&n.push({...f,tipped:Tt()<.16})}og(i,bd,rr,4.4,s,r,o,a),og(i,bd,rr,-4.4,s,r,o,a),PT(i,rr+2,s,r,o,a)}function og(i,e,t,n,s,r,o,a){for(let c=e;c<t;c+=Qn+.1){let l=or(i,c+Qn/2,n,o);if(!l)break;Tt()<.12||(lg(l.x,l.z,l.y,l.yaw,s,r,Tt()<.18),cg(a,l.x,l.z,l.yaw))}}function PT(i,e,t,n,s,r){for(let o=-6;o<=6;o+=Qn+.1){let a=or(i,e,o+Qn/2,s);a&&(lg(a.x,a.z,a.y,a.yaw+Math.PI/2,t,n,Tt()<.25),cg(r,a.x,a.z,a.yaw+Math.PI/2))}}function cg(i,e,t,n){i&&i.addBox(e,t,Qn/2,.13,n,"fence")}function lg(i,e,t,n,s,r,o){let a=o?(Tt()-.5)*.5:(Tt()-.5)*.06,c=[],l=(p,_,m,g,b)=>{let M=new et(p,_,m);M.translate(g,b,0),c.push(M)};l(.05,sr,.05,-Qn/2,sr/2),l(.05,sr,.05,Qn/2,sr/2),l(Qn,.05,.05,0,sr-.03),l(Qn,.05,.05,0,.03);let u=new et(.5,.11,.26);u.translate(-Qn/2,.055,0);let h=new et(.5,.11,.26);h.translate(Qn/2,.055,0),c.push(u,h);let d=rt(c,!1);d.rotateZ(a),d.rotateY(n),d.translate(i,t+ar,e),s.push(d);let f=new Ot(Qn-.1,sr-.1);f.translate(0,sr/2,0),f.rotateZ(a),f.rotateY(n),f.translate(i,t+ar,e),r.push(f)}function LT(i,e,t){i.length&&t.add(new He(rt(i,!1),new Ye({color:5592911,flatShading:!0}))),e.length&&t.add(new He(rt(e,!1),new Ye({map:BT(),transparent:!0,alphaTest:.35,side:Ft,depthWrite:!0})))}function NT(i,e,t){let n=CT(i);for(let s=40;s<n-20;s+=wT){if(s>bd-40&&s<rr+40)continue;let r=3+Math.floor(Tt()*6);for(let o=0;o<r;o++){let a=or(i,s+(Tt()-.5)*14,(Tt()-.5)*12,t);a&&e.push({...a,tipped:Tt()<.35})}}}function DT(){let i=[],e=new ls(.24,.62,10);e.translate(0,.31,0),wa(e,11025678),i.push(e);let t=new Rn(.125,.15,.13,10);t.translate(0,.33,0),wa(t,13223092),i.push(t);let n=new et(.34,.05,.34);return n.translate(0,.025,0),wa(n,8006666),i.push(n),rt(i,!1)}function FT(i,e){if(!i.length)return;let t=DT(),n=new Ye({vertexColors:!0,flatShading:!0}),s=new un(t,n,i.length),r=new Ke,o=new Pt,a=new Zt,c=new U,l=new U(1,1,1);i.forEach((u,h)=>{a.set(u.tipped?Math.PI/2*(.75+Tt()*.3):(Tt()-.5)*.08,Tt()*Math.PI*2,0,"YXZ"),o.setFromEuler(a),c.set(u.x,(u.y||0)+ar+(u.tipped?.2:0),u.z),r.compose(c,o,l),s.setMatrixAt(h,r)}),s.instanceMatrix.needsUpdate=!0,e.add(s)}function UT(i,e,t,n){let s=or(i,ET,TT,t);if(!s)return;let r=4.2,o=2.5,a=.45,c=new Ot(r,o);c.translate(0,a+o/2,0);let[l,u]=s.tangent,h=Math.atan2(-l,-u);c.rotateY(h),c.translate(s.x,s.y+ar,s.z),e.add(new He(c,new Ye({map:OT(),side:Ft})));let d=[];for(let p of[-1,1]){let _=new et(.12,a+.3,.12);_.translate(p*(r/2-.3),(a+.3)/2,0),d.push(_)}let f=rt(d,!1);f.rotateY(h),f.translate(s.x,s.y+ar,s.z),e.add(new He(f,new Ye({color:4867128}))),n&&n.addBox(s.x,s.z,r/2,.15,h,"hoarding")}function OT(){let t=document.createElement("canvas");t.width=1024,t.height=610;let n=t.getContext("2d");n.fillStyle="#26506e",n.fillRect(0,0,1024,610);for(let r=0;r<2600;r++){let o=Math.random()*1024,a=Math.random()*610;n.fillStyle=`rgba(${20+Math.random()*60},${30+Math.random()*50},${40+Math.random()*50},0.06)`,n.fillRect(o,a,Math.random()*90,Math.random()*5)}n.fillStyle="#e8e6dc",n.textAlign="center",n.font="bold 62px Helvetica, Arial, sans-serif",n.fillText("LEITH WALK",1024/2,110),n.fillText("IMPROVEMENT PROJECT",1024/2,180),n.fillStyle="#f0c02a",n.fillRect(120,232,784,6),n.fillStyle="#e8e6dc",n.font="bold 50px Helvetica, Arial, sans-serif",n.fillText("COMPLETION: SPRING 2023",1024/2,310),n.font="30px Helvetica, Arial, sans-serif",n.fillStyle="#b8c6d2",n.fillText("WE APOLOGISE FOR ANY INCONVENIENCE",1024/2,380),n.font="24px Helvetica, Arial, sans-serif",n.fillText("City of Edinburgh Council",1024/2,430),n.strokeStyle="rgba(210,60,40,0.85)",n.lineWidth=9,n.lineCap="round",n.beginPath(),n.moveTo(190,340),n.lineTo(835,285),n.stroke(),n.save(),n.translate(1024/2,520),n.rotate(-.05),n.fillStyle="rgba(214,66,44,0.9)",n.font="bold 58px Helvetica, Arial, sans-serif",n.fillText("STILL WAITING",0,0),n.restore(),n.globalCompositeOperation="destination-out";for(let r=0;r<26;r++){let o=Math.random()*1024,a=Math.random()<.5?Math.random()*40:610-Math.random()*40;n.beginPath(),n.ellipse(o,a,10+Math.random()*50,6+Math.random()*22,Math.random()*3,0,Math.PI*2),n.fill()}n.globalCompositeOperation="source-over";let s=new Et(t);return s.colorSpace=tt,s.anisotropy=16,s}function BT(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.clearRect(0,0,128,128),t.strokeStyle="#50524b",t.lineWidth=2;let n=128/8;for(let r=0;r<=8;r++)t.beginPath(),t.moveTo(r*n,0),t.lineTo(r*n,128),t.stroke(),t.beginPath(),t.moveTo(0,r*n),t.lineTo(128,r*n),t.stroke();let s=new Et(e);return s.wrapS=s.wrapT=$n,s.repeat.set(6,4),s.colorSpace=tt,s.anisotropy=16,s}function zT(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.fillStyle="#241d16",t.fillRect(0,0,256,256);for(let s=0;s<2200;s++){let r=Math.random();t.fillStyle=`rgba(${30+r*55},${25+r*45},${18+r*35},0.5)`,t.beginPath(),t.arc(Math.random()*256,Math.random()*256,Math.random()*5,0,Math.PI*2),t.fill()}t.fillStyle="rgba(78,84,74,0.45)",t.beginPath(),t.ellipse(256*.55,256*.62,256*.3,256*.13,.3,0,Math.PI*2),t.fill(),t.fillStyle="#4a4235",t.fillRect(0,256*.4,256,16),t.fillStyle="rgba(255,255,255,0.07)",t.fillRect(0,256*.4,256,5);let n=new Et(e);return n.colorSpace=tt,n.anisotropy=16,n}function wa(i,e){let t=new me(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;i.setAttribute("color",new je(s,3))}var gn=(()=>{let i=39441;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),kT=115,HT=90,GT=40,ug=10,VT=27,WT=8,hg=22,XT=55,su=1.35;function dg(i,e,t){let n=i.streetLine||[];if(n.length<2)return{group:new it,update(){}};let s=i.groundHeight||(()=>0),r=new it;r.name="birds",t.add(r);let o=qT(n,r);return ZT(i,e,r),KT(n,r,s),{group:r,update(a,c){YT(o,c,s)}}}function Sd(i,e){let t=i/2,n=[],s=u=>{let h=new Float32Array([u*.04,0,e*.18,u*.04,0,-e*.16,u*t*.55,.03*t,-e*.3,u*.04,0,e*.18,u*t*.55,.03*t,-e*.3,u*t*.58,.03*t,e*.06,u*t*.58,.03*t,e*.06,u*t*.55,.03*t,-e*.3,u*t,.1*t,-e*.38,u*t*.58,.03*t,e*.06,u*t,.1*t,-e*.38,u*t*.97,.1*t,-e*.1]),d=new pt;return d.setAttribute("position",new je(h,3)),d.computeVertexNormals(),d},r=s(-1);Aa(r,4869188);let o=s(1);Aa(o,4869188),n.push(r,o);let a=(u,h,d)=>{let f=new et(u,h,d).toNonIndexed();return f.deleteAttribute("uv"),f},c=a(e*.17,e*.15,e);Aa(c,7237734),n.push(c);let l=a(e*.34,.012,e*.3);return l.translate(0,0,-e*.6),Aa(l,2895400),n.push(l),rt(n,!1)}function Ed(){return new Ye({vertexColors:!0,flatShading:!0,side:Ft})}function qT(i,e){let t=pg(i),n=[];for(let r=0;r<kT;r++){let o=fg(i,30+gn()*Math.max(1,t-60));if(!o)continue;let[a,c]=o.tangent;n.push({ox:o.point[0],oz:o.point[1],ax:a,az:c,px:-c,pz:a,rAlong:hg+gn()*(XT-hg),rAcross:2.5+gn()*(WT-2.5),y:ug+gn()*(VT-ug),speed:(gn()<.5?-1:1)*(.1+gn()*.14),phase:gn()*Math.PI*2,bobAmp:.5+gn()*1.4,bobFreq:.25+gn()*.45,scale:.85+gn()*.5})}let s=new un(Sd(su,su*.42),Ed(),n.length);return s.frustumCulled=!1,e.add(s),{mesh:s,birds:n}}function YT({mesh:i,birds:e},t,n){let s=new Ke,r=new Pt,o=new Zt,a=new U,c=new U;e.forEach((l,u)=>{let h=t*l.speed+l.phase,d=Math.cos(h),f=Math.sin(h),p=d*l.rAlong,_=f*l.rAcross,m=l.ox+l.ax*p+l.px*_,g=l.oz+l.az*p+l.pz*_,b=n(m,g)+l.y+Math.sin(t*l.bobFreq+l.phase)*l.bobAmp,M=(-f*l.rAlong*l.ax+d*l.rAcross*l.px)*l.speed,x=(-f*l.rAlong*l.az+d*l.rAcross*l.pz)*l.speed,S=Math.atan2(M,x),E=(-d*l.rAlong*l.ax-f*l.rAcross*l.px)*l.speed*l.speed,v=(-d*l.rAlong*l.az-f*l.rAcross*l.pz)*l.speed*l.speed,y=Math.hypot(M,x)||1e-4,w=(E*x-v*M)/y,R=Jn.clamp(w*90,-1,1);o.set(Math.sin(t*l.bobFreq+l.phase)*.06,S,R,"YXZ"),r.setFromEuler(o),a.set(m,b,g),c.setScalar(l.scale),s.compose(a,r,c),i.setMatrixAt(u,s)}),i.instanceMatrix.needsUpdate=!0}function ZT(i,e,t){let n=e&&e.buildings||[],s=i.nearestStreetPoint,r=i.groundHeight||(()=>0),o=[],a=n.filter(f=>{let p=f.footprint;if(!p||p.length<3)return!1;let _=s?s(p[0][0],p[0][1]):null;return!_||_.distance<=30}),c=a.length?HT/a.length:0;for(let f of a){let p=f.footprint,_=Math.max(1,f.levels||1)*3.2,m=Math.floor(c)+(gn()<c%1?1:0);for(let g=0;g<m;g++){let b=Math.floor(gn()*p.length),M=(b+1)%p.length,x=.15+gn()*.7,S=p[b][0]+(p[M][0]-p[b][0])*x,E=p[b][1]+(p[M][1]-p[b][1])*x;o.push({x:S,z:E,y:r(S,E)+_+.12,yaw:gn()*Math.PI*2})}}if(!o.length)return;let l=new un(Sd(su*.42,su*.46),Ed(),o.length),u=new Ke,h=new Pt,d=new Zt;o.forEach((f,p)=>{d.set(0,f.yaw,0,"YXZ"),h.setFromEuler(d),u.compose(new U(f.x,f.y,f.z),h,new U(1,1,1)),l.setMatrixAt(p,u)}),l.instanceMatrix.needsUpdate=!0,t.add(l)}function KT(i,e,t){let n=pg(i),s=[];for(let u=0;u<GT;u++){let h=fg(i,25+gn()*Math.max(1,n-50));if(!h)continue;let[d,f]=h.tangent,p=-f,_=d,m=(gn()*2-1)*5.5,g=h.point[0]+p*m,b=h.point[1]+_*m;s.push({x:g,z:b,yaw:gn()*Math.PI*2})}if(!s.length)return;let r=Sd(.3,.3);Aa(r,5263948);let o=new un(r,Ed(),s.length),a=new Ke,c=new Pt,l=new Zt;s.forEach((u,h)=>{l.set(0,u.yaw,0,"YXZ"),c.setFromEuler(l),a.compose(new U(u.x,t(u.x,u.z)+.1,u.z),c,new U(1,1,1)),o.setMatrixAt(h,a)}),o.instanceMatrix.needsUpdate=!0,e.add(o)}function fg(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0;return{point:[s+c*h,r+l*h],tangent:[c/(u||1),l/(u||1)]}}t+=u}return null}function pg(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function Aa(i,e){let t=new me(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;i.setAttribute("color",new je(s,3))}var cr=(()=>{let i=10775;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),$T=90,JT=6.6,mg=2.5,jT=9,QT=.06;function yg(i,e){let t=i.streetLine||[];if(t.length<2)return{group:new it,update(){}};let n=new it;n.name="vermin",e.add(n);let s=iw(t),r=[];for(let c=0;c<$T;c++){let l=20+cr()*Math.max(1,s-45),u=mg+cr()*(jT-mg),h=_g(t,l),d=_g(t,Math.min(l+u,s-1));if(!h||!d)continue;let p=(cr()<.5?1:-1)*(JT+(cr()-.5)*.8),_=xg(h,p),m=xg(d,p);r.push({ax:_[0],az:_[1],bx:m[0],bz:m[1],rate:.07+cr()*.16,phase:cr(),scale:.8+cr()*.5})}let o=new un(nw(),new Ye({vertexColors:!0,flatShading:!0}),r.length);n.add(o);let a=i.groundHeight||(()=>0);return{group:n,update(c,l){tw(o,r,l,a)}}}function ew(i){return i<.18?gg(0,.18,i):i<.5?1:i<.68?1-gg(.5,.68,i):0}function gg(i,e,t){let n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)}function tw(i,e,t,n){let s=new Ke,r=new Pt,o=new Zt,a=new U,c=new U;e.forEach((l,u)=>{let h=(t*l.rate+l.phase)%1,d=ew(h),f=l.ax+(l.bx-l.ax)*d,p=l.az+(l.bz-l.az)*d,_=h>=.5,m=_?l.ax-l.bx:l.bx-l.ax,g=_?l.az-l.bz:l.bz-l.az,b=Math.atan2(m,g),x=h<.18||h>=.5&&h<.68?Math.abs(Math.sin(t*26+u))*.025:0;o.set(0,b,0,"YXZ"),r.setFromEuler(o),a.set(f,n(f,p)+QT+x,p),c.setScalar(l.scale),s.compose(a,r,c),i.setMatrixAt(u,s)}),i.instanceMatrix.needsUpdate=!0}function nw(){let i=[],e=(r,o,a)=>{let c=new et(r,o,a).toNonIndexed();return c.deleteAttribute("uv"),c},t=e(.11,.1,.23);t.translate(0,.05,0),Td(t,4537909),i.push(t);let n=e(.075,.07,.1);n.translate(0,.045,.15),Td(n,5129787),i.push(n);let s=e(.016,.016,.21);return s.translate(0,.035,-.21),Td(s,4866617),i.push(s),rt(i,!1)}function xg(i,e){let[t,n]=i.tangent;return[i.point[0]+-n*e,i.point[1]+t*e]}function _g(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0;return{point:[s+c*h,r+l*h],tangent:[c/(u||1),l/(u||1)]}}t+=u}return null}function iw(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function Td(i,e){let t=new me(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;i.setAttribute("color",new je(s,3))}var mt=(()=>{let i=11590938;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),sw=210,rw=130,ow=260,aw=22;function vg(i,e,t){let n=i.streetLine||[];if(n.length<2)return{group:new it};let s=i.groundHeight||(()=>0),r=new it;return t.add(r),cw(i,e,n,r),uw(n,r,s),hw(n,r,s),dw(n,r,s),{group:r}}function cw(i,e,t,n){let s=lw(),r=[],o=(f,p,_,m,g)=>{for(let b=0;b<3;b++){let M=new Ot(m,m);M.translate(0,m/2,0),M.rotateZ(g),M.rotateY(b/3*Math.PI+mt()*.4),M.translate(f,p,_),r.push(M)}},a=e&&e.buildings||[],c=i.nearestStreetPoint,l=a.filter(f=>{let p=f.footprint;if(!p||p.length<3)return!1;let _=c?c(p[0][0],p[0][1]):null;return!_||_.distance<=28}),u=i.groundHeight||(()=>0),h=l.length?sw/l.length:0;for(let f of l){let p=f.footprint,_=Math.floor(h)+(mt()<h%1?1:0),m=Math.max(1,f.levels||1)*3.2;for(let g=0;g<_;g++){let b=Math.floor(mt()*p.length),M=(b+1)%p.length,x=.1+mt()*.8,S=p[b][0]+(p[M][0]-p[b][0])*x,E=p[b][1]+(p[M][1]-p[b][1])*x;o(S,u(S,E)+m-.25,E,1.1+mt()*1.5,(mt()-.5)*.5)}}let d=wd(t);for(let f=0;f<rw;f++){let p=au(t,20+mt()*Math.max(1,d-40));if(!p)continue;let m=(mt()<.5?1:-1)*(7.2+mt()*2.6),g=ou(p,m);o(g[0],u(g[0],g[1])+.03,g[1],.8+mt()*1.1,(mt()-.5)*.3)}r.length&&n.add(new He(rt(r,!1),new Ye({map:s,transparent:!0,alphaTest:.45,side:Ft,depthWrite:!0})))}function lw(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.clearRect(0,0,256,256);for(let s=0;s<170;s++){let r=-Math.PI/2+(Math.random()-.5)*2.5,o=30+Math.random()*78,a=256/2+(Math.random()-.5)*58,c=256-Math.random()*44,l=46+Math.random()*52;t.strokeStyle=`rgba(${28+Math.random()*26},${l},${30+Math.random()*22},0.95)`,t.lineWidth=2+Math.random()*5,t.lineCap="round",t.beginPath(),t.moveTo(a,c),t.quadraticCurveTo(a+Math.cos(r)*o*.5+(Math.random()-.5)*24,c+Math.sin(r)*o*.5,a+Math.cos(r)*o,c+Math.sin(r)*o),t.stroke()}for(let s=0;s<13;s++){let r=34+Math.random()*188,o=26+Math.random()*96,a=26+Math.random()*40;for(let c=0;c<26;c++){let l=c/26,u=(1-l)*8+1.5;t.fillStyle=`rgba(${74+Math.random()*30},${44+Math.random()*22},${88+Math.random()*32},0.88)`,t.beginPath(),t.ellipse(r+(Math.random()-.5)*4,o+l*a,u,3.5,0,0,Math.PI*2),t.fill()}}let n=new Et(e);return n.colorSpace=tt,n.anisotropy=16,n}function uw(i,e,t){let n=wd(i),s=[];for(let r=0;r<ow;r++){let o=au(i,15+mt()*Math.max(1,n-30));if(!o)continue;let c=(mt()<.5?1:-1)*(mt()<.65?6.3+mt()*.7:7.5+mt()*2.2),l=ou(o,c),u=t(l[0],l[1]),h=mt(),d,f;h<.3?(d=new Rn(.037,.042,.27,6),d.rotateZ(Math.PI/2),d.rotateY(mt()*Math.PI*2),d.translate(0,.04,0),f=2899230):h<.55?(d=new Rn(.032,.032,.1,6),d.rotateZ(Math.PI/2+(mt()-.5)*.7),d.scale(1,1,.6),d.translate(0,.032,0),f=mt()<.5?10115614:3100522):h<.8?(d=new et(.16+mt()*.08,.05,.12+mt()*.06),d.rotateY(mt()*Math.PI),d.rotateZ((mt()-.5)*.5),d.translate(0,.026,0),f=11051924):(d=new Ot(.24+mt()*.2,.18+mt()*.14),d.rotateX(-Math.PI/2),d.rotateY(mt()*Math.PI),d.translate(0,.036,0),f=7170652),d.translate(l[0],u+.03,l[1]),ru(d,f),s.push(d)}s.length&&e.add(new He(rt(s,!1),new Ye({vertexColors:!0,flatShading:!0,side:Ft})))}function hw(i,e,t){let n=wd(i),s=[];for(let r=0;r<aw;r++){let o=au(i,25+mt()*Math.max(1,n-50));if(!o)continue;let a=mt()<.5?1:-1,c=ou(o,a*(7.6+mt()*1.8)),l=t(c[0],c[1]),u=mt()<.6,h=[],d=new et(.62,1.05,.72).toNonIndexed();d.deleteAttribute("uv"),d.translate(0,.525,0),ru(d,[3095084,3813160,2634298][Math.floor(mt()*3)]),h.push(d);let f=new et(.66,.07,.76).toNonIndexed();f.deleteAttribute("uv"),f.translate(0,1.07,u?.1:-.3),f.rotateX(u?.2:-.7),ru(f,1975840),h.push(f);let p=rt(h,!1);p.rotateY(mt()*Math.PI*2),u&&p.rotateZ(Math.PI/2+(mt()-.5)*.3),p.translate(c[0],l+(u?.34:.03),c[1]),s.push(p)}s.length&&e.add(new He(rt(s,!1),new Ye({vertexColors:!0,flatShading:!0})))}function dw(i,e,t){let n=au(i,415);if(!n)return;let s=ou(n,-3.4),r=t(s[0],s[1]),o=[],a=(d,f,p,_,m,g)=>{let b=new et(d,f,p).toNonIndexed();b.deleteAttribute("uv"),b.translate(_,m,g),o.push(b)},c=.56,l=.44,u=.86;for(let d=0;d<=6;d++){let f=-u/2+d/6*u;a(c,.018,.018,0,l,f),a(.018,l,.018,-c/2,l/2,f),a(.018,l,.018,c/2,l/2,f)}for(let d=0;d<=4;d++){let f=-c/2+d/4*c;a(.018,.018,u,f,.02,0),a(.018,.018,u,f,l,0)}a(c,l,.018,0,l/2,-u/2),a(.03,.3,.03,0,l+.15,-u/2);let h=rt(o,!1);ru(h,6974822),h.rotateZ(Math.PI/2*.92),h.rotateY(mt()*Math.PI*2),h.translate(s[0],r+.3,s[1]),e.add(new He(h,new Ye({vertexColors:!0,flatShading:!0})))}function ou(i,e){let[t,n]=i.tangent;return[i.point[0]+-n*e,i.point[1]+t*e]}function au(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0;return{point:[s+c*h,r+l*h],tangent:[c/(u||1),l/(u||1)]}}t+=u}return null}function wd(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function ru(i,e){let t=new me(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;i.setAttribute("color",new je(s,3))}function Mg(i){let e=new Map,t=new Map,n=i.clone();return bg(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function bg(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)bg(i.children[n],e.children[n],t)}var no=class extends ci{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Nd(t)}),this.register(function(t){return new Dd(t)}),this.register(function(t){return new Vd(t)}),this.register(function(t){return new Wd(t)}),this.register(function(t){return new Xd(t)}),this.register(function(t){return new Ud(t)}),this.register(function(t){return new Od(t)}),this.register(function(t){return new Bd(t)}),this.register(function(t){return new zd(t)}),this.register(function(t){return new Ld(t)}),this.register(function(t){return new kd(t)}),this.register(function(t){return new Fd(t)}),this.register(function(t){return new Gd(t)}),this.register(function(t){return new Hd(t)}),this.register(function(t){return new Id(t)}),this.register(function(t){return new cu(t,ft.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new cu(t,ft.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new qd(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Xi.extractUrlBase(e);o=Xi.resolveURL(l,this.path)}else o=Xi.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new qs(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Ag){try{o[ft.KHR_BINARY_GLTF]=new Yd(e)}catch(h){s&&s(h);return}r=JSON.parse(o[ft.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new ef(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case ft.KHR_MATERIALS_UNLIT:o[h]=new Pd;break;case ft.KHR_DRACO_MESH_COMPRESSION:o[h]=new Zd(r,this.dracoLoader);break;case ft.KHR_TEXTURE_TRANSFORM:o[h]=new Kd;break;case ft.KHR_MESH_QUANTIZATION:o[h]=new $d;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function fw(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function jt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Id=class{constructor(e){this.parser=e,this.name=ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new me(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],An);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Zs(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ui(u),l.distance=h;break;case"spot":l=new Jo(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Ri(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Pd=class{constructor(){this.name=ft.KHR_MATERIALS_UNLIT}getMaterialType(){return pn}extendParams(e,t,n){let s=[];e.color=new me(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],An),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,tt))}return Promise.all(s)}},Ld=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Nd=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ee(r,r)}return Promise.all(s)}},Dd=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DISPERSION}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Fd=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Ud=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SHEEN}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new me(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],An)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,tt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Od=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Bd=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_VOLUME}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new me().setRGB(r[0],r[1],r[2],An),Promise.all(s)}},zd=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IOR}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},kd=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new me().setRGB(r[0],r[1],r[2],An),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,tt)),Promise.all(s)}},Hd=class{constructor(e){this.parser=e,this.name=ft.EXT_MATERIALS_BUMP}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Gd=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Vd=class{constructor(e){this.parser=e,this.name=ft.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Wd=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},Xd=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},cu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},qd=class{constructor(e){this.name=ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==ei.TRIANGLES&&l.mode!==ei.TRIANGLE_STRIP&&l.mode!==ei.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(let p of h){let _=new Ke,m=new U,g=new Pt,b=new U(1,1,1),M=new un(p.geometry,p.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,x),c.SCALE&&b.fromBufferAttribute(c.SCALE,x),M.setMatrixAt(x,_.compose(m,g,b));for(let x in c)if(x==="_COLOR_0"){let S=c[x];M.instanceColor=new os(S.array,S.itemSize,S.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&p.geometry.setAttribute(x,c[x]);Lt.prototype.copy.call(M,p),this.parser.assignFinalMaterial(M),f.push(M)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},Ag="glTF",Ra=12,Sg={JSON:1313821514,BIN:5130562},Yd=class{constructor(e){this.name=ft.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ra),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ag)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ra,r=new DataView(e,Ra),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Sg.JSON){let l=new Uint8Array(e,Ra+o,a);this.content=n.decode(l)}else if(c===Sg.BIN){let l=Ra+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Zd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let u in o){let h=jd[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=jd[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=to[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let p in f.attributes){let _=f.attributes[p],m=c[p];m!==void 0&&(_.normalized=m)}h(f)},a,l,An,d)})})}},Kd=class{constructor(){this.name=ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},$d=class{constructor(){this.name=ft.KHR_MESH_QUANTIZATION}},lu=class extends Si{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,p=e*l,_=p-l,m=-2*f+3*d,g=f-d,b=1-m,M=g-d+h;for(let x=0;x!==a;x++){let S=o[_+x+a],E=o[_+x+c]*u,v=o[p+x+a],y=o[p+x]*u;r[x]=b*S+M*E+m*v+g*y}return r}},pw=new Pt,Jd=class extends lu{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return pw.fromArray(r).normalize().toArray(r),r}},ei={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},to={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Eg={9728:Xt,9729:qt,9984:Zc,9985:qr,9986:Js,9987:di},Tg={33071:Zn,33648:Pr,10497:$n},Ad={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},jd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ys={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},mw={CUBICSPLINE:void 0,LINEAR:Os,STEP:Us},Rd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function gw(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new bi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mn})),i.DefaultMaterial}function lr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ri(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function xw(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function _w(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function yw(i){let e,t=i.extensions&&i.extensions[ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Cd(t.attributes):e=i.indices+":"+Cd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Cd(i.targets[n]);return e}function Cd(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Qd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vw(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Mw=new Ke,ef=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new fw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new li(this.options.manager):this.textureLoader=new Qo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return lr(r,a,s),Ri(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,u]of o.children.entries())r(u,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ft.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Xi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Ad[s.type],a=to[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Dt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Ad[s.type],l=to[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,_,m;if(f&&f!==h){let g=Math.floor(d/f),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,M=t.cache.get(b);M||(_=new l(a,g*f,s.count*f/u),M=new ks(_,f/u),t.cache.add(b,M)),m=new rs(M,c,d%f/u,p)}else a===null?_=new l(s.count*c):_=new l(a,d,s.count*c),m=new Dt(_,c,p);if(s.sparse!==void 0){let g=Ad.SCALAR,b=to[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,S=new b(o[1],M,s.sparse.count*g),E=new l(o[2],x,s.sparse.count*c);a!==null&&(m=new Dt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let v=0,y=S.length;v<y;v++){let w=S[v];if(m.setX(w,E[v*c]),c>=2&&m.setY(w,E[v*c+1]),c>=3&&m.setZ(w,E[v*c+2]),c>=4&&m.setW(w,E[v*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Eg[d.magFilter]||qt,u.minFilter=Eg[d.minFilter]||di,u.wrapS=Tg[d.wrapS]||$n,u.wrapT=Tg[d.wrapT]||$n,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Xt&&u.minFilter!==qt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;let d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(_){let m=new tn(_);m.needsUpdate=!0,d(m)}),t.load(Xi.resolveURL(h,r.path),p,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),Ri(h,o),h.userData.mimeType=o.mimeType||vw(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ft.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ft.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[ft.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new cs,bn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new as,bn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return bi}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[ft.KHR_MATERIALS_UNLIT]){let h=s[ft.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new me(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],An),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,tt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ft);let u=r.alphaMode||Rd.OPAQUE;if(u===Rd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Rd.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==pn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ee(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==pn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==pn){let h=r.emissiveFactor;a.emissive=new me().setRGB(h[0],h[1],h[2],An)}return r.emissiveTexture!==void 0&&o!==pn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,tt)),Promise.all(l).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Ri(h,r),t.associations.set(h,{materials:e}),r.extensions&&lr(s,h,r),h})}createUniqueName(e){let t=It.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return wg(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],u=yw(l),h=s[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[ft.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=wg(new pt,l,t),s[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let u=o[c].material===void 0?gw(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,p=u.length;f<p;f++){let _=u[f],m=o[f],g,b=l[f];if(m.mode===ei.TRIANGLES||m.mode===ei.TRIANGLE_STRIP||m.mode===ei.TRIANGLE_FAN||m.mode===void 0)g=r.isSkinnedMesh===!0?new No(_,b):new He(_,b),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===ei.TRIANGLE_STRIP?g.geometry=Xh(g.geometry,da):m.mode===ei.TRIANGLE_FAN&&(g.geometry=Xh(g.geometry,Kr));else if(m.mode===ei.LINES)g=new Vs(_,b);else if(m.mode===ei.LINE_STRIP)g=new Gs(_,b);else if(m.mode===ei.LINE_LOOP)g=new Fo(_,b);else if(m.mode===ei.POINTS)g=new Ws(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&_w(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Ri(g,r),m.extensions&&lr(s,g,m),t.assignFinalMaterial(g),h.push(g)}for(let f=0,p=h.length;f<p;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&lr(s,h[0],r),h[0];let d=new it;r.extensions&&lr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=h.length;f<p;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new en(Jn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ds(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ri(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){let h=o[l];if(h){a.push(h);let d=new Ke;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Do(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],p=s.samplers[f.sampler],_=f.target,m=_.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,b=s.parameters!==void 0?s.parameters[p.output]:p.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",b)),l.push(p),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],p=h[2],_=h[3],m=h[4],g=[];for(let M=0,x=d.length;M<x;M++){let S=d[M],E=f[M],v=p[M],y=_[M],w=m[M];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let R=n._createAnimationTracks(S,E,v,y,w);if(R)for(let A=0;A<R.length;A++)g.push(R[A])}let b=new Zo(r,void 0,g);return Ri(b,s),b})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Mw)});for(let f=0,p=h.length;f<p;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){let f=u.userData.pivot,p=h[0];u.pivot=new U().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Or:l.length>1?u=new it:l.length===1?u=l[0]:u=new Lt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Ri(u,r),r.extensions&&lr(n,u,r),r.matrix!==void 0){let h=new Ke;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new it;n.name&&(r.name=s.createUniqueName(n.name)),Ri(r,n),n.extensions&&lr(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++){let d=c[u];d.parent!==null?r.add(Mg(d)):r.add(d)}let l=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof bn||d instanceof tn)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}ys[r.path]===ys.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let u;switch(ys[r.path]){case ys.weights:u=Gi;break;case ys.rotation:u=Vi;break;case ys.translation:case ys.scale:u=us;break;default:n.itemSize===1?u=Gi:u=us;break}let h=s.interpolation!==void 0?mw[s.interpolation]:Os,d=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let _=new u(c[f]+"."+ys[r.path],t.array,d,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Qd(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Vi?Jd:lu;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function bw(i,e,t){let n=e.attributes,s=new Jt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new U(c[0],c[1],c[2]),new U(l[0],l[1],l[2])),a.normalized){let u=Qd(to[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new U,c=new U;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let _=Qd(to[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Pn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function wg(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=jd[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ht.workingColorSpace!==An&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),Ri(i,e),bw(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?xw(i,e.targets,t):i})}var tf=[{file:"cars/sedan.glb",kind:"car",targetLen:4.3},{file:"cars/hatchback-sports.glb",kind:"car",targetLen:3.9},{file:"cars/van.glb",kind:"van",targetLen:5.4},{file:"cars/bus.glb",kind:"bus",targetLen:11}],Sw=16,Rg=6.1,Ew=405,Cg=[560,700],Fn=(()=>{let i=3394627454;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})();function Lg(i,e,t){let n=e&&e.streetLine;if(!n||n.length<2)return{group:null};let s=new it;s.name="cars",t.add(s);let r=new no,o=a=>r.loadAsync(En(i,a.file)).then(c=>Tw(c.scene,a)).catch(()=>null);return Promise.all(tf.map(o)).then(a=>{let c={};for(let l=0;l<tf.length;l++)a[l]&&(c[tf[l].kind]??=[]).push(a[l]);!c.car&&!c.van&&!c.bus||ww(c,n,s,e.groundHeight,e.collision)}),{group:s}}function Tw(i,e){let n=new Jt().setFromObject(i).getSize(new U),s=Math.max(n.x,n.z)||1,r=e.targetLen/s;i.scale.setScalar(r),i.updateMatrixWorld(!0);let o=new Jt().setFromObject(i);i.position.y=-o.min.y;let a=new it;a.add(i);let c=new Jt().setFromObject(i);return a.userData.plan={halfW:(c.max.x-c.min.x)/2,halfD:(c.max.z-c.min.z)/2,cx:(c.max.x+c.min.x)/2,cz:(c.max.z+c.min.z)/2},a}function Ig(i,e,t){let n=e.userData&&e.userData.plan;if(!i||!n)return;let s=e.rotation.y,r=Math.sin(s),o=Math.cos(s);i.addBox(e.position.x+n.cx*o+n.cz*r,e.position.z-n.cx*r+n.cz*o,n.halfW,n.halfD,s,t)}function Pg(i,e){let t=e?.05+Fn()*.04:.18+Fn()*.2,n=Fn()<.5&&!e;i.traverse(s=>{if(!s.isMesh||!s.material)return;let r=s.material,o=new Ye({map:r.map||null,color:(r.color?r.color.clone():new me(8947848)).multiplyScalar(t)});n&&(o.color.r=Math.min(1,o.color.r*1.35+.03),o.color.b*=.75),s.material=o})}function ww(i,e,t,n,s){let r=[...i.car||[],...i.van||[]];if(r.length)for(let a=0;a<Sw;a++){let c=40+Fn()*1160;if(c>Cg[0]&&c<Cg[1])continue;let l=ya(e,c);if(!l)continue;let u=Fn()<.5?1:-1,[h,d]=l.tangent,f=r[Math.floor(Fn()*r.length)].clone(!0);Pg(f,Fn()<.12);let p=l.point[0]+-d*u*(Rg+Fn()*.7),_=l.point[1]+h*u*(Rg+Fn()*.7);f.position.set(p,n?n(p,_):0,_);let m=Math.atan2(h,d)+(Fn()<.5?Math.PI:0);Fn()<.15&&(m+=(Fn()-.5)*1.2),f.rotation.y=m+(Fn()-.5)*.12,f.rotation.z=(Fn()-.5)*.05,t.add(f),Ig(s,f,"car")}let o=(i.bus||[])[0];if(o){let a=ya(e,Ew);if(a){let c=o.clone(!0);Pg(c,!0);let l=n?n(a.point[0],a.point[1]):0;c.position.set(a.point[0],l,a.point[1]),c.rotation.y=Math.atan2(a.tangent[0],a.tangent[1])+.06,c.rotation.z=.07,t.add(c),Ig(s,c,"bus")}}}var Aw=!0,sf=[{name:"bulk",file:"characters/rab-form.glb",girth:1.42,headScale:1.198,frontZ:.2},{name:"slab",file:"characters/slab-form.glb",girth:1.195,headScale:1.204,frontZ:.15},{name:"runt",file:"characters/runt-form.glb",girth:.918,headScale:1.47,frontZ:.093},{name:"stoop",file:"characters/morag-form.glb",girth:.712,headScale:1.485,frontZ:.187},{name:"spindle",file:"characters/kenneth-form.glb",girth:.68,headScale:1.357,frontZ:.083}],Rw=.17,Cw=.27,Iw=.14,Pw=.2848,Lw=.1239,Nw=.25;function rf(i,e=Nw){let t=i||Wl,n=sf[0],s=1/0;for(let r of sf){let o=(t.girth-r.girth)/Pw,a=(t.headScale-r.headScale)/Lw,c=o*o+e*a*a;c<s&&(s=c,n=r)}return n}function Dw(i){let e=i||Wl,t=rf(e),n=od(e).headTopY;return{arch:t,height:n,squash:e.girth/t.girth}}function Fg(i,e,t,n){let s=typeof location<"u"&&["localhost","127.0.0.1"].includes(location.hostname),r=s&&typeof window<"u"&&window.__mcgrotForceCharacters!=null?!!window.__mcgrotForceCharacters:Aw,o=s&&typeof window<"u"&&window.__mcgrotForceTint!=null?!!window.__mcgrotForceTint:!0,a=s&&typeof window<"u"&&!!window.__mcgrotForceCharacterFail,c=n&&Array.isArray(n.npcs)?n.npcs:[];if(!r||!c.length){for(let E of c)E.buildDoll();return{enabled:r,tinted:o,loaded:()=>0,assigned:0,counts:{},onArchetype:()=>{}}}let l=c,u=new Map;for(let E of l){let v=Dw(E.build);E.archetype=v.arch.name,E.squash=v.squash,u.has(v.arch.name)||u.set(v.arch.name,{arch:v.arch,npcs:[]}),u.get(v.arch.name).npcs.push({npc:E,...v})}let h=new no,d=[],f=0,p=0,_=new Map,m=[],g=(E,v,y)=>{try{E(v,y)}catch(w){console.error("archetype subscriber failed",v.name,w)}},b=(E,v)=>{_.set(E.name,{arch:E,proto:v});for(let y of m)g(y,E,v)},M=E=>{for(let{arch:v,proto:y}of _.values())g(E,v,y);m.push(E)};for(let E of sf){let v=(u.get(E.name)||{npcs:[]}).npcs;(a?Promise.reject(new Error("forced")):h.loadAsync(En(i,E.file))).then(y=>{let w=Bw(y.scene),R=Dg(w,w),A=R.x/(R.y||1),I=null;w.traverse(N=>{!I&&N.isMesh&&N.material&&(I=N.material.color.clone())});for(let N of v){let B=w.clone(!0);B.name="vendor-mesh",o&&Uw(B,N.npc),B.scale.set(N.height*N.squash,N.height,N.height*N.squash),N.npc.group.add(B),N.npc.comicMesh&&(N.npc.comicMesh.position.z=E.frontZ*N.height*N.squash+Rw),d.push({npc:N.npc,arch:E,inst:B,protoAspect:A,protoColor:I}),f++}b(E,w)}).catch(()=>{for(let y of v)y.npc.buildDoll(),p++;b(E,null)})}let x={};for(let[E,v]of u)x[E]=v.npcs.length;return{enabled:r,tinted:o,loaded:()=>f,fellBack:()=>p,assigned:l.length,counts:x,measure:S,onArchetype:M};function S(){return d.map(({npc:E,arch:v,inst:y,protoAspect:w,protoColor:R})=>{let A=Dg(y,E.group),I=null;y.traverse(B=>{!I&&B.isMesh&&B.material&&(I=B.material)});let N=I&&R?new me(I.color.r/(R.r||1),I.color.g/(R.g||1),I.color.b/(R.b||1)):null;return{name:E.name,archetype:v.name,meshTop:A.y,distortion:A.x/(A.y||1)/(w||1),materialId:I?I.uuid:null,meshNote:N?Fw(N):null}})}}function Fw(i){let e=(i.r+i.g+i.b)/3;return e>0?[i.r/e,i.g/e,i.b/e]:[1,1,1]}function Uw(i,e){let t=e.noteColor;if(!t)return;let n=t.clone(),s=(n.r+n.g+n.b)/3;s>0&&n.multiplyScalar(1/s);let r=[n.r-1,n.g-1,n.b-1],o=Math.hypot(r[0],r[1],r[2]),a=o>0?Cw/o:0,c=new me(1+r[0]*a,1+r[1]*a,1+r[2]*a),l=0;for(let h of e.name||"")l=l*31+h.charCodeAt(0)|0;let u=1+((Math.abs(l)>>7)%1e3/1e3-.5)*2*Iw;c.multiplyScalar(u),i.traverse(h=>{!h.isMesh||!h.material||(h.material=h.material.clone(),h.material.color.multiply(c))})}var Ow=new Ke,Ng=new Jt,nf=new Jt;function Dg(i,e){e.updateWorldMatrix(!0,!1),i.updateWorldMatrix(!1,!0),nf.makeEmpty();let t=Ow.copy(e.matrixWorld).invert(),n=new Ke;return i.traverse(s=>{!s.isMesh||!s.geometry||(s.geometry.computeBoundingBox(),Ng.copy(s.geometry.boundingBox).applyMatrix4(n.multiplyMatrices(t,s.matrixWorld)),nf.union(Ng))}),nf.getSize(new U)}function Bw(i){i.traverse(o=>{if(!o.isMesh||!o.material)return;let a=o.material;o.material=new Ye({map:a.map||null,color:(a.color?a.color.clone():new me(16777215)).multiplyScalar(.42)})});let e=new Jt().setFromObject(i),t=e.getSize(new U),n=e.getCenter(new U),s=1/(t.y||1);i.scale.setScalar(s),i.position.set(-n.x*s,-e.min.y*s,-n.z*s);let r=new it;return r.add(i),r}var zw=!0,kw=.34,Hw=.78,Gw=0,Vw=30,Ww=7.6,io=30,Xw=50,qw=9,of=25,Yw=3,Ug=[4999740,4145720,5655614,4472891,5263946,3816500],Og=[7027246,3033690,7826250,4864602,5921354],Bg=['"%Q" \u2014 whit?','did ye hear that? "%Q"','"%Q", says he','"%Q" \u2014 aye, right','"%Q"... ma nerves',`he's away wi it \u2014 "%Q"`],Zw=i=>{let e=i;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}},xn=Zw(1972196);function kg(i,e,t,n){let s=e.streetLine||[],r=e.groundHeight||(()=>0);if(s.length<2)return{update(){}};let o=i.comicLines||{},c=jw(s)-io-Xw;if(c<50)return{update(){}};let l=new it;l.name="leithers",t.add(l);let h=typeof location<"u"&&["localhost","127.0.0.1"].includes(location.hostname)&&typeof window<"u"&&window.__mcgrotForceLeitherMesh!=null?!!window.__mcgrotForceLeitherMesh:zw,d=[];for(let x=0;x<Vw;x++){let S=Kw();S.s=io+xn()*c,S.side=xn()<.5?1:-1,S.dir=xn()<.5?1:-1,S.speed=.55+xn()*.5,S.offset=Ww+xn()*1.6,S.state="walk",S.listenT=0,S.cooldown=xn()*of,S.phase=xn()*10,S.bubble=null,S.bubbleT=0,l.add(S.group),d.push(S)}let f=!1;function p(){if(!(f||!e.collision)){f=!0;for(let x of d)e.collision.addMover(()=>x.group.position.x,()=>x.group.position.z,x.collisionRadius,"walker")}}if(!h)for(let x of d)x.buildDoll();function _(x){if(!h)return;if(!x||!x.onArchetype||!x.enabled){for(let E of d)E.buildDoll();return}let S=new Map;for(let E of d){let v=rf(E.build,Gw);E.archetype=v.name,E.squash=E.build.girth/v.girth,S.has(v.name)||S.set(v.name,[]),S.get(v.name).push(E)}x.onArchetype((E,v)=>{let y=S.get(E.name);if(y)for(let w of y){if(!v){w.buildDoll();continue}let R=v.clone(!0);R.name="leither-mesh",$w(R,w.coat),R.scale.set(w.headTopY*w.squash,w.headTopY,w.headTopY*w.squash),w.group.add(R),w.mesh=R}})}let m=0,g=0;function b(x,S){for(let E=0;E<d.length;E++){let v=d[E];if(v.cooldown>0&&(v.cooldown-=x),v.state==="fetch"){let R=v.fetchItem.chainage-v.s;if(Math.abs(R)>2)v.dir=Math.sign(R),v.s+=v.dir*v.speed*1.5*x;else{v.state="approach",v.approachT=0;let A=v.group.position;v.approachFrom={x:A.x,z:A.z}}}else if(v.state==="approach"){v.approachT=Math.min(1,v.approachT+x/1.6);let w=v.fetchItem,R=v.approachT,A=w.x+.75,I=w.z,N=v.approachFrom.x+(A-v.approachFrom.x)*R,B=v.approachFrom.z+(I-v.approachFrom.z)*R;v.group.position.set(N,r(N,B)+Math.abs(Math.sin((v.s+R*8)*2))*.03,B),v.group.rotation.y=Math.atan2(w.x-v.group.position.x,w.z-v.group.position.z),R>=1&&(v.state="readaloud",v.readQueue=(v.fetchItem.lines||[]).slice(0,8),v.readT=.5);continue}else if(v.state==="readaloud"){if(v.readT-=x,v.readT<=0&&!v.bubble){let w=v.readQueue.shift();w==null?(v.state="walk",v.fetchItem.adopted=!1,v.fetchItem=null,v.cooldown=of):(v.bubble=zg('"'+w+'"'),v.bubble.position.set(0,v.headTopY+.5,0),v.group.add(v.bubble),v.bubbleT=4.2,m++,v.readT=.6)}v.bubble&&(v.bubbleT-=x,v.bubbleT<=0&&(v.group.remove(v.bubble),v.bubble.material.map.dispose(),v.bubble.material.dispose(),v.bubble=null,m--));continue}else v.state==="listen"?(v.listenT-=x,(v.listenT<=0||!(v.target&&v.target.speaking))&&(v.state="walk",v.target=null,v.cooldown=of)):(v.s+=v.dir*v.speed*x,(v.s<io||v.s>io+c)&&(v.dir*=-1,v.s=Math.max(io,Math.min(io+c,v.s))));let y=Qw(s,v.s);if(y){let[w,R]=y.tangent,A=y.point[0]+-R*v.side*v.offset,I=y.point[1]+w*v.side*v.offset,N=r(A,I);if(v.group.position.set(A,N,I),v.state==="listen"&&v.target){let B=v.target.group.position;v.group.rotation.y=Math.atan2(B.x-A,B.z-I)}else{v.group.rotation.y=Math.atan2(w*v.dir,R*v.dir);let B=S*(4.6*v.speed)+v.phase;v.group.position.y=N+Math.abs(Math.sin(B))*.045,v.group.rotation.z=Math.sin(B)*.03}}v.bubble&&(v.bubbleT-=x,v.bubbleT<=0&&(v.group.remove(v.bubble),v.bubble.material.map.dispose(),v.bubble.material.dispose(),v.bubble=null,m--))}p();for(let E=0;E<4;E++){let v=d[g++%d.length];if(v.state!=="walk"||v.cooldown>0)continue;let y=v.group.position;for(let w of n){if(!w.speaking)continue;let R=w.group.position;if(Math.hypot(R.x-y.x,R.z-y.z)>qw)continue;v.state="listen",v.target=w,v.listenT=6+xn()*9;let A=o[w.comic.id];if(A&&A.length&&m<Yw&&xn()<.6){let I=A[Math.floor(xn()*A.length)],N=Bg[Math.floor(xn()*Bg.length)];v.bubble=zg(N.replace("%Q",I)),v.bubble.position.set(0,v.headTopY+.5,0),v.group.add(v.bubble),v.bubbleT=7,m++}break}}}function M(x){if(!x||x.adopted||!(x.lines&&x.lines.length))return!1;let S=null,E=70;for(let v of d){if(v.state!=="walk")continue;let y=v.group.position,w=Math.hypot(y.x-x.x,y.z-x.z);w<E&&(E=w,S=v)}return S?(x.adopted=!0,S.state="fetch",S.fetchItem=x,!0):!1}return{walkers:d,update:b,summonReader:M,useArchetypes:_,meshed:h}}function Kw(){let i=1.5+xn()*.35,e=.8+xn()*.45,t=Ug[Math.floor(xn()*Ug.length)],n=new it,s=.1,r=i*.32,o=.44*e,a=.3*e,c=i*.44,l=.26,u=s+r,h=u+c,d=h+l+.02,f=Og[Math.floor(xn()*Og.length)],p=xn()<.3?[-1,1]:[xn()<.5?-1:1],_=new Ye({color:f,flatShading:!0});for(let g of p){let b=new He(new et(.2,.24,.11),_);b.position.set(g*(o*.5+.1),u+c*.12,.02),n.add(b)}let m={group:n,headTopY:d,coat:t,build:{height:i,girth:e,headScale:1.5},collisionRadius:o/2,archetype:null,squash:1,mesh:null,hasDoll:!1,buildDoll(){if(m.hasDoll)return m;m.hasDoll=!0;let g=ba(t,!1),b=ba(Jw(t,.62),!0),M=new Ye({color:1578512,flatShading:!0}),x=[];for(let I of[-1,1]){let N=new et(o*.34,r,a*.7);N.translate(I*o*.24,s+r*.5,0),x.push(N);let B=new et(.11,c*.7,.11);B.translate(I*(o*.5+.05),h-c*.62,0),x.push(B)}let S=new et(o,c,a);S.translate(0,u+c*.5,0),x.push(S);let E=new He(rt(x),g);n.add(E);let v=[];for(let I of[-1,1]){let N=new et(o*.36,s,a*1.3);N.translate(I*o*.24,s*.5,a*.15),v.push(N)}let y=new He(rt(v),M);n.add(y);let w=new Ye({color:2235928,flatShading:!0}),R=[b,b,b,b,w,b],A=new He(new et(l,l,l*.9),R);return A.position.set(0,h+l*.5+.02,0),n.add(A),m.dollBody=[E,y,A],m.head=A,m},dollBody:[],head:null};return m}function $w(i,e){let t=new me(e),n=(t.r+t.g+t.b)/3;n>0&&t.multiplyScalar(1/n);let s=[t.r-1,t.g-1,t.b-1],r=Math.hypot(s[0],s[1],s[2]),o=r>0?kw/r:0,a=new me(1+s[0]*o,1+s[1]*o,1+s[2]*o).multiplyScalar(Hw);i.traverse(c=>{!c.isMesh||!c.material||(c.material=c.material.clone(),c.material.color.multiply(a))})}function Jw(i,e){let t=Math.round((i>>16&255)*e),n=Math.round((i>>8&255)*e),s=Math.round((i&255)*e);return t<<16|n<<8|s}function zg(i){let e=document.createElement("canvas");e.width=512,e.height=160;let t=e.getContext("2d"),n=i.split(" "),s=[""];for(let c of n)(s[s.length-1]+" "+c).trim().length>30&&s.length<3&&s.push(""),s[s.length-1]=(s[s.length-1]+" "+c).trim();t.fillStyle="rgba(20, 22, 16, 0.82)",t.strokeStyle="rgba(200, 200, 180, 0.5)",t.lineWidth=3;let r=34+s.length*34;t.beginPath(),t.roundRect(8,80-r/2,496,r,14),t.fill(),t.stroke(),t.fillStyle="#d8d4c0",t.font="italic 26px Georgia, serif",t.textAlign="center",s.forEach((c,l)=>t.fillText(c,256,80-r/2+44+l*32));let o=new Et(e),a=new zi(new Mi({map:o,transparent:!0,depthTest:!0}));return a.scale.set(1.9,.59,1),a}function jw(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function Qw(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0;return{point:[s+c*h,r+l*h],tangent:[c/(u||1),l/(u||1)]}}t+=u}return null}var Hg=24,eA=70,Gg=60,tA=70,vs=(()=>{let i=1146442;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),nA=new li;function Vg(i,e,t){let n=i.catalog&&i.catalog.comics||[],s=e.streetLine||[];if(!n.length||s.length<2)return{items:[],update(){},nearestItem:()=>null};let r=i.comicLines||{},o=n.filter(p=>r[p.id]&&r[p.id].length>=3),a=o.length>=Hg?[...o]:[...o,...n.filter(p=>!r[p.id])],c=[];for(;c.length<Math.min(Hg,a.length);)c.push(a.splice(Math.floor(vs()*a.length),1)[0]);let l=iA(s),u=new it;u.name="litter-comics",t.add(u);let h=c.map((p,_)=>{let m=Gg+vs()*(l-Gg-tA),g=sA(s,m);if(!g)return null;let[b,M]=g.tangent,x=vs()<.5?1:-1,S=3.5+vs()*6,E=g.point[0]+-M*x*S,v=g.point[1]+b*x*S,y=new Ye({map:sd(),color:new me(4.7,4.7,4.7),side:Ft}),w=new He(new Ot(.42,.58),y);w.rotation.x=-Math.PI/2,w.rotation.z=vs()*Math.PI*2,vs()<.3&&(w.rotation.y=(vs()-.5)*.5);let R=e.groundHeight?e.groundHeight(E,v):0;return w.position.set(E,R+.055+vs()*.01,v),u.add(w),{comic:p,lines:r[p.id]||[],mesh:w,x:E,z:v,chainage:m,loaded:!1,adopted:!1,load(){this.loaded||(this.loaded=!0,nA.load(En(i,p.image),A=>{A.colorSpace=tt,y.map=A,y.color.setScalar(4.7),y.needsUpdate=!0}))}}}).filter(Boolean);function d(p){if(p)for(let _ of h)!_.loaded&&Math.hypot(p.x-_.x,p.z-_.z)<eA&&_.load()}function f(p,_,m){let g=null,b=m;for(let M of h){let x=Math.hypot(p-M.x,_-M.z);x<b&&(b=x,g=M)}return g}return{items:h,update:d,nearestItem:f}}function iA(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function sA(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0;return{point:[s+c*h,r+l*h],tangent:[c/(u||1),l/(u||1)]}}t+=u}return null}var so=900,Wg=16,Xg=20,rA=-3,oA=13,af=.35,aA=.85,cA=.5;function lA(i){let e=i|0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function uA(i,e){return(i%e+e)%e}function hA(){let e=document.createElement("canvas");e.width=32,e.height=32;let t=e.getContext("2d");t.translate(32/2,32/2),t.scale(.22,1);let n=t.createRadialGradient(0,0,0,0,0,32/2);n.addColorStop(0,"rgba(200,210,220,0.85)"),n.addColorStop(.55,"rgba(200,210,220,0.4)"),n.addColorStop(1,"rgba(200,210,220,0)"),t.fillStyle=n,t.fillRect(-32/2,-32/2,32,32);let s=new Et(e);return s.colorSpace=tt,s}function qg(i){let e=lA(5904299),t=new Float32Array(so),n=new Float32Array(so),s=new Float32Array(so);for(let h=0;h<so;h++)t[h]=(e()-.5)*2*Wg,n[h]=e()*Xg,s[h]=(e()-.5)*2*Wg;let r=new Float32Array(so*3),o=new pt;o.setAttribute("position",new Dt(r,3));let a=new cs({map:hA(),size:af,color:11187392,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0}),c=new Ws(o,a);c.name="rain",c.frustumCulled=!1,c.visible=!1;function l(h){let d=Math.max(0,Math.min(1,h));c.visible=d>0,a.opacity=cA*d,a.size=af+(aA-af)*d}function u(h,d){if(!c.visible)return;let f=i.position.x,p=i.position.y,_=i.position.z,m=o.attributes.position.array;for(let g=0;g<so;g++){let b=p+rA+uA(n[g]-oA*d,Xg);m[g*3]=f+t[g],m[g*3+1]=b,m[g*3+2]=_+s[g]}o.attributes.position.needsUpdate=!0}return{object:c,setIntensity:l,update:u}}function Yg(){let i=null,e=null,t=!1,n=!1,s=null,r=0;function o(u){if(t){i&&i.state==="suspended"&&i.resume();return}if(t=!0,u)i=u;else{let h=window.AudioContext||window.webkitAudioContext;if(!h)return;i=new h}e=i.createGain(),e.gain.value=.16,e.connect(i.destination),dA(i,e),fA(i,e),s=pA(i,e),s.gain.value=r}function a(u){if(n=!!u,!i||!e)return;let h=(n?.5:1)*.16,d=i.currentTime;e.gain.cancelScheduledValues(d),e.gain.setValueAtTime(e.gain.value,d),e.gain.linearRampToValueAtTime(h,d+.6)}function c(){!i||!e||mA(i,e)}function l(u){let h=Math.max(0,Math.min(1,u))*.5;if(r=h,!i||!s)return;let d=i.currentTime;s.gain.cancelScheduledValues(d),s.gain.setValueAtTime(s.gain.value,d),s.gain.linearRampToValueAtTime(h,d+.8)}return{start:o,setDucked:a,triggerCrackle:c,setRain:l,get context(){return i}}}function dA(i,e){let t=i.createGain();t.gain.value=.55;let n=i.createBiquadFilter();n.type="lowpass",n.frequency.value=220,n.Q.value=.7,t.connect(n).connect(e);let s=[55,55.6];for(let r of s){let o=i.createOscillator();o.type="sawtooth",o.frequency.value=r,o.connect(t),o.start()}}function fA(i,e){let t=i.createBufferSource();t.buffer=cf(i,4),t.loop=!0;let n=i.createBiquadFilter();n.type="bandpass",n.frequency.value=500,n.Q.value=.6;let s=i.createGain();s.gain.value=.18,t.connect(n).connect(s).connect(e),t.start();let r=i.createOscillator();r.type="sine",r.frequency.value=.07;let o=i.createGain();o.gain.value=.12,r.connect(o).connect(s.gain),r.start()}function pA(i,e){let t=i.createBufferSource();t.buffer=cf(i,4),t.loop=!0;let n=i.createBiquadFilter();n.type="bandpass",n.frequency.value=2200,n.Q.value=.5;let s=i.createGain();s.gain.value=0,t.connect(n).connect(s).connect(e),t.start();let r=i.createOscillator();r.type="sine",r.frequency.value=.15;let o=i.createGain();return o.gain.value=.06,r.connect(o).connect(s.gain),r.start(),s}function mA(i,e){let n=i.createBufferSource();n.buffer=cf(i,.18);let s=i.createBiquadFilter();s.type="highpass",s.frequency.value=1800;let r=i.createGain(),o=i.currentTime;r.gain.setValueAtTime(.9,o),r.gain.exponentialRampToValueAtTime(.001,o+.18),n.connect(s).connect(r).connect(e),n.start(o),n.stop(o+.18+.02)}function cf(i,e){let t=Math.max(1,Math.floor(i.sampleRate*e)),n=i.createBuffer(1,t,i.sampleRate),s=n.getChannelData(0);for(let r=0;r<t;r++)s[r]=Math.random()*2-1;return n}var Zg="mcgrot-torch-on";function Kg(){if(!document.documentElement.classList.contains("touch"))return;let i=document.getElementById("hud-hint"),e=document.getElementById("title-hint"),t=document.getElementById("title-enter");i&&(i.textContent="drag \u2014 look"),e&&(e.textContent="drag to look \u2014 walk up to a resident, tap them"),t&&(t.textContent="TAP TO ENTER")}function gA(i){let e=document.getElementById("torch-toggle");if(!i)return;let t=localStorage.getItem(Zg),n=t===null?!0:t==="true";function s(r){n=!!r,i.setToggle(n),e&&e.classList.toggle("active",n),localStorage.setItem(Zg,String(n))}i.setToggle(n),e&&e.classList.toggle("active",n),e&&e.addEventListener("click",()=>s(!n)),window.addEventListener("keydown",r=>{r.code!=="KeyT"||_s(r)||s(!n)})}function $g({controls:i,torch:e,onEnter:t}){let n=document.getElementById("title-card"),s=document.getElementById("touch-forward");Kg(),window.addEventListener("mcgrot:touchmodechange",Kg),gA(e);function r(){!n||n.classList.contains("hidden")||(n.classList.add("hidden"),i.setEnabled(!0),t&&t())}if(n&&(n.addEventListener("click",r),n.addEventListener("touchend",o=>{o.preventDefault(),r()},{passive:!1})),s){let o=c=>{s.classList.toggle("active",c),i.setForward(c)};s.addEventListener("pointerdown",c=>{c.preventDefault();try{s.setPointerCapture?.(c.pointerId)}catch{}o(!0)});let a=()=>o(!1);s.addEventListener("pointerup",a),s.addEventListener("pointercancel",a),s.addEventListener("pointerleave",a)}return{enter:r}}var uf="p=",xA=.4,_A=.25,yA=1,jg=1e5;function ex(i){return(i%360+360)%360}function hf(i){return ex(i*180/Math.PI)}function vA(i){return i*Math.PI/180}function lf({x:i,z:e,yaw:t}){let n=Math.round(hf(t))%360;return`#${uf}${i.toFixed(1)},${e.toFixed(1)},${n}`}function MA(i){if(typeof i!="string")return null;let e=i.replace(/^#/,"");if(!e.startsWith(uf))return null;let t=e.slice(uf.length).split(",");if(t.length!==3)return null;let[n,s,r]=t.map(Number);return![n,s,r].every(o=>Number.isFinite(o))||Math.abs(n)>jg||Math.abs(s)>jg?null:{x:n,z:s,yaw:vA(ex(r))}}function tx(i,e){let t=MA(typeof location>"u"?"":location.hash);if(!t)return null;if(i){let{point:n,distance:s}=i(t.x,t.z);if(n&&s>16){let r=16/s;t.x=n[0]+(t.x-n[0])*r,t.z=n[1]+(t.z-n[1])*r}}if(e){let[n,s]=e.resolveFree(t.x,t.z);t.x=n,t.z=s}return t}function nx({camera:i,isEnabled:e}){let t=0,n=null,s=null,r=null,o=0;function a(){return{x:i.position.x,z:i.position.z,yaw:i.rotation.y}}function c(){return typeof location>"u"?lf(a()):`${location.origin}${location.pathname}${location.search}${lf(a())}`}function l(){let h=a(),d=Math.round(hf(h.yaw))%360;n=h.x,s=h.z,r=d,o++;try{history.replaceState(null,"",lf(h))}catch{}}function u(h){if(e&&!e()||(t+=h,t<xA))return;t=0;let d=a(),f=Math.round(hf(d.yaw))%360;if(n!==null){let p=Math.hypot(d.x-n,d.z-s),_=Math.abs(f-r);if(_>180&&(_=360-_),p<_A&&_<yA)return}l()}return{update:u,href:c,current:a,writeNow:l,writeCount:()=>o}}var Qg=2600;function ix({moments:i}){let e=document.getElementById("link-toggle"),t=document.getElementById("link-toast"),n=document.getElementById("link-field"),s=null,r=null;function o(u,h){if(!t)return;n&&(n.value=h,n.style.display=h?"block":"none");let d=t.querySelector("#link-toast-label");d&&(d.textContent=u),t.style.display="block",s&&clearTimeout(s),s=setTimeout(()=>{t.style.display="none"},h?Qg*3:Qg)}function a(){let u=i.href();i.writeNow();let h=typeof navigator<"u"&&navigator.clipboard;return!h||!h.writeText?(r="manual",o("copy this link",u),Promise.resolve(r)):h.writeText(u).then(()=>(r="copied",o("link copied",""),r),()=>(r="manual",o("copy this link",u),r))}function c(u){u.code==="KeyL"&&a()}function l(u){u.preventDefault();try{e.setPointerCapture?.(u.pointerId)}catch{}}return window.addEventListener("keydown",c),e&&(e.addEventListener("pointerdown",l),e.addEventListener("pointerup",()=>a())),n&&(n.addEventListener("focus",()=>n.select()),n.addEventListener("click",()=>n.select())),{share:a,lastResult:()=>r,isToastOpen:()=>!!t&&t.style.display==="block"}}var ro=[{to:90,name:"The Foot of the Walk"},{to:1200,name:"Leith Walk"},{to:1/0,name:"Elm Row"}],bA=4.2,sx=1.1,SA=2;function EA(i){for(let e=0;e<ro.length;e++)if(i<=ro[e].to)return e;return ro.length-1}function TA(i,e,t){let n=0,s=1/0,r=0;for(let o=1;o<i.length;o++){let[a,c]=i[o-1],[l,u]=i[o],h=l-a,d=u-c,f=Math.hypot(h,d),p=h*h+d*d,_=p>0?((e-a)*h+(t-c)*d)/p:0;_=_<0?0:_>1?1:_;let m=a+h*_,g=c+d*_,b=Math.hypot(e-m,t-g);b<s&&(s=b,r=n+f*_),n+=f}return r}function rx({camera:i,streetLine:e,isEnabled:t}){let n=typeof document<"u"?document.getElementById("caption"):null,s=typeof document<"u"?document.getElementById("caption-text"):null,r=null,o=null,a=null,c=0,l=0,u=null;function h(f){u=f,l++,c=bA+sx,n&&(s&&(s.textContent=f),n.style.display="block",n.classList.remove("fading"))}function d(f){let p=i.position.x,_=i.position.z;if(c>0&&(c-=f,n&&c<=sx&&n.classList.add("fading"),c<=0&&(n&&(n.style.display="none",n.classList.remove("fading")),u=null)),t&&!t()){o=p,a=_;return}let m=o===null?0:Math.hypot(p-o,_-a);o=p,a=_;let g=EA(TA(e,p,_));if(r===null){r=g;return}g!==r&&(r=g,!(m>SA||m===0)&&h(ro[g].name))}return{update:d,state:()=>({band:r,name:ro[r===null?0:r].name,current:u,shown:l,timer:c}),bands:ro.map(f=>f.name)}}var wA=.28,AA=.035,RA=1,CA=24,ox=.5,IA=1.46,zt={label:"fine-litho",pressDay:.72,pressNight:.95,cell:2.6,halftoneDay:.35,halftoneNight:.1,highCut:.6,misreg:.7,sat:.85,shadowTint:[.97,.99,1.03],highTint:[1.04,1.01,.96],stockDay:.35,stockNight:.12,ink:[.06,.05,.05],paper:[.98,.96,.92],artefact:.05},ax=1,oo=i=>Number.isInteger(i)?i.toFixed(1):String(i),uu=i=>`vec3(${i.map(oo).join(", ")})`,PA=`
const float S_CELL      = ${oo(zt.cell)};
const float S_HIGHCUT   = ${oo(zt.highCut)};
const float S_MISREG    = ${oo(zt.misreg)};
const float S_SAT       = ${oo(zt.sat)};
const vec3  S_SHADOW    = ${uu(zt.shadowTint)};
const vec3  S_HIGH      = ${uu(zt.highTint)};
const vec3  S_INK       = ${uu(zt.ink)};
const vec3  S_PAPER     = ${uu(zt.paper)};
const float S_ARTEFACT  = ${oo(zt.artefact)};
`,LA=`
attribute vec3 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`,NA=`
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
${PA}

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
  float n = hash21(vUv * uResolution + vec2(floor(uTime * ${CA.toFixed(1)}), 0.0));
  float midtone = 1.0 - abs(lum * 2.0 - 1.0);
  c += (n - 0.5) * uGrain * midtone * uStrength;

  gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
}
`;function cx(i){let e=i.getDrawingBufferSize(new Ee),t=new kr(e.x,e.y),n={tDiffuse:{value:t},uResolution:{value:new Ee(e.x,e.y)},uStrength:{value:1},uVignette:{value:wA},uGrain:{value:AA},uGrade:{value:RA},uTime:{value:0},uStyle:{value:ax},uPress:{value:zt.pressDay},uHalftone:{value:zt.halftoneDay},uStock:{value:zt.stockDay}};function s(_){return Math.min(1,Math.max(0,(_-ox)/(IA-ox)))}function r(_){return zt.pressNight+(zt.pressDay-zt.pressNight)*s(_)}function o(_){return zt.halftoneNight+(zt.halftoneDay-zt.halftoneNight)*s(_)}function a(_){return zt.stockNight+(zt.stockDay-zt.stockNight)*s(_)}let c=new Wr({name:"McGrotPost",uniforms:n,vertexShader:LA,fragmentShader:NA,depthTest:!1,depthWrite:!1}),l=new pt;l.setAttribute("position",new Dt(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),l.setAttribute("uv",new Dt(new Float32Array([0,0,2,0,0,2]),2));let u=new He(l,c);u.frustumCulled=!1;let h=new zs;h.add(u);let d=new Ys,f=!0;function p(){let _=i.getDrawingBufferSize(new Ee);_.x===t.image.width&&_.y===t.image.height||(t.dispose(),t=new kr(_.x,_.y),n.tDiffuse.value=t,n.uResolution.value.set(_.x,_.y))}return{setTime(_){n.uTime.value=_},resize:p,setEnabled(_){f=!!_},isEnabled(){return f},setStrength(_){n.uStrength.value=_},getStrength(){return n.uStrength.value},styleName:zt.label,styleShipped:ax,setStyleStrength(_){n.uStyle.value=_},getStyleStrength(){return n.uStyle.value},stylePress(_){return _===void 0?{day:zt.pressDay,night:zt.pressNight,exposure:i.toneMappingExposure,press:n.uPress.value,halftone:n.uHalftone.value,stock:n.uStock.value}:{press:r(_),halftone:o(_),stock:a(_)}},render(_,m){i.render(_,m),f&&(n.uStyle.value>0&&(n.uPress.value=r(i.toneMappingExposure),n.uHalftone.value=o(i.toneMappingExposure),n.uStock.value=a(i.toneMappingExposure)),i.copyFramebufferToTexture(t),i.render(h,d))}}}var lx="mcgrot.journal.v1";function DA(){try{let i=localStorage.getItem(lx);if(!i)return[];let e=JSON.parse(i);return Array.isArray(e&&e.entries)?e.entries:[]}catch{return[]}}function FA(i){try{localStorage.setItem(lx,JSON.stringify({entries:i}))}catch{}}function df(i){if(!i||!Array.isArray(i))return 0;let e=0;for(let t of i)t.comic&&t.comic.audio&&e++;return e}function ux({assets:i,npcs:e,litter:t,canOpen:n,anchorsEnabled:s}){let r=DA(),o=new Set(r.map(N=>`${N.kind}:${N.id}`)),a=df(e),c=t&&Array.isArray(t.items)?t.items.length:0,l=s0(Ma),u=new Map((i&&i.catalog&&i.catalog.comics||[]).map(N=>[N.id,N])),h=document.getElementById("journal-panel"),d=document.getElementById("journal-toggle"),f=document.getElementById("journal-close"),p=document.getElementById("journal-counts"),_=document.getElementById("journal-list"),m=!1;function g(N,B){return o.has(`${B}:${N}`)}function b(N,B){if(!N||B!=="heard"&&B!=="found"&&B!=="anchor")return!1;let O=`${B}:${N}`;return o.has(O)?!1:(o.add(O),r.push({id:N,kind:B}),FA(r),S(),!0)}function M(){let N=0,B=0,O=0;for(let G of r)G.kind==="heard"?N++:G.kind==="found"?B++:G.kind==="anchor"&&O++;return{heard:N,found:B,denominator:a,foundTotal:c,anchorsFound:O,anchorsTotal:l}}function x(){return r.filter(N=>N.kind!=="anchor").slice().reverse()}function S(){if(p){let{heard:B,found:O,anchorsFound:G}=M();p.textContent=s?`${B} of ${a} heard \u2014 more being unearthed  \xB7  ${O}${c?` of ${c}`:""} found  \xB7  ${G} of ${l} anchors`:`${B} of ${a} heard \u2014 more being unearthed  \xB7  ${O}${c?` of ${c}`:""} found`}if(!_)return;_.textContent="";let N=document.createDocumentFragment();for(let B of x()){let O=u.get(B.id),G=O&&O.title||B.id,V=O&&O.npc&&O.npc.name,ee=document.createElement("div");ee.className="journal-entry";let ae=document.createElement("span");ae.className="journal-entry-kind",ae.textContent=B.kind==="heard"?"HEARD":"FOUND";let de=document.createElement("span");de.className="journal-entry-text",de.textContent=V?`${G} \u2014 ${V}`:G,ee.appendChild(ae),ee.appendChild(de),N.appendChild(ee)}_.appendChild(N)}function E(N){m=!!N,h&&(h.style.display=m?"flex":"none")}function v(){!m&&n&&!n()||E(!m)}function y(){return m}function w(N){if(N.code==="Escape"){m&&E(!1);return}_s(N)||N.code==="KeyJ"&&v()}function R(N){N.preventDefault();try{d.setPointerCapture?.(N.pointerId)}catch{}}function A(){v()}window.addEventListener("keydown",w),d&&(d.addEventListener("pointerdown",R),d.addEventListener("pointerup",A)),f&&f.addEventListener("click",()=>E(!1));function I(){window.removeEventListener("keydown",w),d&&(d.removeEventListener("pointerdown",R),d.removeEventListener("pointerup",A))}return S(),{has:g,credit:b,counts:M,list:x,isOpen:y,setOpen:E,toggle:v,dispose:I}}var Ms=1.7,ff=150,Xn=1/60,UA=5,hx=12,dx=40,OA=4e3,fx=[{id:"north-150-close",chainage:150,side:"east",distance:"close"},{id:"north-250-far",chainage:250,side:"west",distance:"far"},{id:"elm-row-hero",chainage:1300,side:"west",distance:"far"},{id:"mid-550-close",chainage:550,side:"east",distance:"close"},{id:"mid-805-far",chainage:805,side:"west",distance:"far"},{id:"fascia-close",chainage:300,side:"east",distance:"close"},{id:"foot-1500-far",chainage:1500,side:"west",distance:"far"},{id:"skyline",custom:!0,camera:{x:-293.81,y:15,z:633.95},lookAt:{x:-317.4,y:6,z:683.62}}],px=[{id:"lamp-hero-night",custom:!0,camera:{x:-284.62,y:9.7,z:623.92},lookAt:{x:-303.93,y:12.99,z:664.57}}];function mx(i,e){for(let t=0;t<i.length;t++)e^=i[t],e=Math.imul(e,16777619)>>>0;return e}function Ca(i,e){let t=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);return mx(t,e)}function Ia(i,e){for(let t=0;t<i.length;t++)e=mx([i.charCodeAt(t)&255],e);return e}function BA({scene:i,world:e,npcs:t}){let n=2166136261,s=e.group.getObjectByName("buildings");s&&s.geometry&&(n=Ia("buildings",n),n=Ca(s.geometry.attributes.position.array,n));let r=[];i.traverse(o=>{o.isInstancedMesh&&r.push(o)}),r.sort((o,a)=>(o.name||"").localeCompare(a.name||""));for(let o of r)n=Ia(`inst:${o.name||"unnamed"}`,n),n=Ca(o.instanceMatrix.array,n);if(t&&Array.isArray(t.npcs)&&t.npcs.length){let o=new Float32Array(t.npcs.length*3);t.npcs.forEach((a,c)=>{let l=a.group.position;o[c*3]=l.x,o[c*3+1]=l.y,o[c*3+2]=l.z}),n=Ia("npcs",n),n=Ca(o,n)}return(n>>>0).toString(16).padStart(8,"0")}function zA({scene:i,leithers:e}){let t=2166136261;if(e&&Array.isArray(e.walkers)&&e.walkers.length){let n=new Float32Array(e.walkers.length*3);e.walkers.forEach((s,r)=>{n[r*3]=s.s,n[r*3+1]=s.side,n[r*3+2]=s.dir}),t=Ia("leithers-realtime",t),t=Ca(n,t)}for(let n of["birds","vermin"]){let s=i.getObjectByName(n);if(!s)continue;let r=0;s.traverse(o=>{o.isInstancedMesh&&(t=Ia(`${n}-realtime-${r++}`,t),t=Ca(o.instanceMatrix.array,t))})}return(t>>>0).toString(16).padStart(8,"0")}function kA(i,e){return new Promise(t=>{let s=(Date.now?Date.now():0)+e;function r(){if(!(i&&i.pages||[]).some(c=>c&&c.loaded&&c.mesh&&!(c.mesh.material.map&&c.mesh.material.map.image&&c.mesh.material.map.image.complete))||Date.now()>s){t();return}setTimeout(r,20)}r()})}function gx(i){let{camera:e,world:t,npcs:n,leithers:s,litter:r,shopfronts:o,controls:a,proximityAudio:c,interact:l,renderer:u,scene:h,sky:d,atmosphere:f,torch:p,stepFrame:_,updateFrame:m,updaters:g,setAutoAnimate:b,DPR_CAP:M,ambience:x,post:S,renderNow:E,setPostProcessing:v,journal:y,countVendorsWithAudio:w,vendorList:R,anchorsEnabled:A,anchorSet:I,computeVendorLayout:N,moments:B,shareUi:O,lamps:G,legs:V,ending:ee,characters:ae,captions:de}=i,W=[],Q=console.error.bind(console);console.error=(...se)=>{W.push(se.map(pe=>pe&&pe.message||String(pe)).join(" ")),Q(...se)},window.addEventListener("error",se=>{W.push(se.message||String(se.error||se))}),window.addEventListener("unhandledrejection",se=>{W.push("unhandledrejection: "+(se.reason&&se.reason.message||se.reason))});async function ue(se,pe,Ie,F,Ae={}){let De=Ae.eyeY!=null?Ae.eyeY:t.groundHeight?t.groundHeight(se,pe)+Ms:Ms,P=Ae.lookY!=null?Ae.lookY:t.groundHeight?t.groundHeight(Ie,F)+Ms:Ms;e.position.set(se,De,pe),e.lookAt(Ie,P,F);for(let T=0;T<ff;T++)try{m(Xn,T*Xn)}catch{}e.position.set(se,De,pe),e.lookAt(Ie,P,F),_(Xn,ff*Xn),await kA(o,OA);for(let T=0;T<UA;T++)await new Promise(L=>setTimeout(L,0)),e.position.set(se,De,pe),e.lookAt(Ie,P,F),_(Xn,(ff+1+T)*Xn)}async function _e(se,pe,Ie){let{point:F,tangent:Ae}=Kh(t.streetLine,se),De=-Ae[1],P=Ae[0],T=pe==="east"?1:-1,L=Ie==="close"?T:-T,D=F[0]+De*hx*L,z=F[1]+P*hx*L,X=D+De*T*dx,ne=z+P*T*dx;await ue(D,z,X,ne);let q=t.groundHeight?t.groundHeight(D,z)+Ms:Ms;return{chainage:se,side:pe,distance:Ie,position:{x:D,y:q,z}}}async function Te(se,pe=4){let{point:Ie,tangent:F}=Kh(t.streetLine,se),Ae=Ie[0],De=Ie[1],P=Ae+F[0]*pe,T=De+F[1]*pe,L=t.groundHeight?t.groundHeight(Ae,De)+Ms:Ms,D=t.groundHeight?t.groundHeight(P,T)+.3:.3;return await ue(Ae,De,P,T,{lookY:D}),{chainage:se,position:{x:Ae,y:L,z:De}}}async function Z(se){let pe=fx.find(Ie=>Ie.id===se)||px.find(Ie=>Ie.id===se);if(!pe)throw new Error(`[debug] unknown bookmark: ${se}`);return pe.custom?(await ue(pe.camera.x,pe.camera.z,pe.lookAt.x,pe.lookAt.z,{eyeY:pe.camera.y,lookY:pe.lookAt.y}),pe):(await _e(pe.chainage,pe.side,pe.distance),pe)}function te(se,pe){e.lookAt(se,e.position.y,pe)}function j(se){f.setTime(se)}function ye(se){f.setWeather(se)}function Me(se){f.setWeatherSchedule(se)}function be(se){f.setRate(se)}function he(se){document.documentElement.classList.toggle("touch",!!se),window.dispatchEvent(new CustomEvent("mcgrot:touchmodechange"))}function we(se){u.setPixelRatio(se)}function H(se=60){let pe=[];for(let Ae=0;Ae<se;Ae++){let De=performance.now();_(Xn,Ae*Xn),pe.push(performance.now()-De)}pe.sort((Ae,De)=>Ae-De);let Ie=pe.reduce((Ae,De)=>Ae+De,0)/pe.length,F=pe[Math.min(pe.length-1,Math.floor(pe.length*.95))];return{meanMs:Ie,p95Ms:F,pixelRatio:u.getPixelRatio(),frames:se}}function K(se,pe=0){if(!(se<=0)){for(let Ie=0;Ie<se-1;Ie++)try{m(Xn,pe+Ie*Xn)}catch{}try{_(Xn,pe+(se-1)*Xn)}catch{}}}function oe(){_(Xn,0);let se=u.info.render,pe=f.state();return{drawCalls:se.calls,triangles:se.triangles,geomHash:BA({scene:h,world:t,npcs:n}),realtimeHash:zA({scene:h,leithers:s}),updaterCount:g.length,updaterNames:g.map(Ie=>Ie.name),consoleErrors:W.slice(),time:pe.hours,rate:pe.rate,weather:pe.weather,weatherTransition:pe.weatherTransition,exposure:pe.exposure,fogDensity:pe.fogDensity,rain:pe.rain,wetness:pe.wetness,skyFogLinked:!!(d&&t.fog&&d.uniforms.uFog.value===t.fog.color)}}function fe(se){l&&l.setReadAlong(se)}function ge(se){window.__mcgrotForceDaySeed=se==null?void 0:se>>>0}function Fe(se){return N(R,t.streetLine,!!se)}return{camera:e,world:t,npcs:n,leithers:s,litter:r,shopfronts:o,controls:a,proximityAudio:c,interact:l,renderer:u,scene:h,journal:y,countVendorsWithAudio:w,captions:de,stepFrame:_,stepFrames:K,goto:_e,gotoBookmark:Z,torchGroundPose:Te,face:te,setTime:j,setWeather:ye,setWeatherSchedule:Me,setRate:be,setReadAlong:fe,setDaySeed:ge,anchorsEnabled:A,anchorSet:I,characters:ae,anchorLayout:Fe,moments:B,shareUi:O,lamps:G,legs:V,ending:ee,setTouchMode:he,setPixelRatio:we,measureFrameTiming:H,torch:p,DPR_CAP:M,ambience:x,post:S,renderNow:E,setPostProcessing:v,setPostStrength:se=>S.setStrength(se),setStyleStrength:se=>S.setStyleStrength(se),getStyleStrength:()=>S.getStyleStrength(),styleName:S.styleName,styleShipped:S.styleShipped,stylePress:se=>S.stylePress(se),invariants:oe,atmosphereState:()=>f.state(),atmosphereNudge:(se,pe,Ie)=>f.nudge(se,pe,Ie),atmosphereIsSuspended:()=>f.isSuspended(),bookmarks:fx,nightBookmarks:px,pauseAuto:()=>b(!1),resumeAuto:()=>b(!0)}}var pf=2;async function HA(){let i=document.getElementById("scene"),e=["localhost","127.0.0.1"].includes(location.hostname),t=new Bl({canvas:i,antialias:!0,preserveDrawingBuffer:e});t.setPixelRatio(Math.min(window.devicePixelRatio||1,pf)),t.setSize(window.innerWidth,window.innerHeight),t.toneMapping=sa,t.toneMappingExposure=1.46,t.info.autoReset=!1;let n=new zs,s=new en(70,window.innerWidth/window.innerHeight,.1,1e3);n.add(s);let r=cx(t),o=await Am(),a=Qm(o.leith);n.add(a.group),n.fog=a.fog;let c=K0(a.fog.color,a.streetLine);s.add(c.mesh),rg(a,n);let l=e0(s),u=ig(o,a,n),h=qg(s);n.add(h.object);let d=Yg(),f=eg({scene:n,renderer:t,world:a,sky:c,torch:l,windows:u,rain:h,ambience:d}),p=a.streetLine[0]||[0,0],_=a.streetLine[1]||[p[0],p[1]+1],m={x:p[0],z:p[1],yaw:Math.atan2(-(_[0]-p[0]),-(_[1]-p[1]))},g=tx(a.nearestStreetPoint,a.collision)||m,b=n0(s,i,{nearestStreetPoint:a.nearestStreetPoint,spawn:g,groundHeight:a.groundHeight,collision:a.collision});b.setEnabled(!1);let M=l0(o,a,n,s),x=kg(o,a,n,M.npcs),S=Vg(o,a,n),E=v0(o,a,n);Om(a,n),ag(a,n);let v=dg(a,o.leith,n),y=yg(a,n);vg(a,o.leith,n),V0(o,a,n),Z0(o,a,n),Lg(o,a,n);let w=Fg(o,a,n,M);x.useArchetypes(w);let R=P0(a,n);R.onArcFlash=()=>d.triggerCrackle();let A=D0({scene:n,camera:s,poles:R.poles});f.setLamps(A);let I=U0({camera:s,world:a,atmosphere:f,seed:Kl()}),N=O0({camera:s,world:a,legs:I,atmosphere:f,ambience:d,controls:b,renderer:t});window.addEventListener("keydown",H=>{H.code!=="Enter"||_s(H)||(N.state().phase==="ended"?N.resume():N.begin())});let B=!1,O=!1,G=()=>d.setDucked(B||O),V=S0({camera:s,npcs:M.npcs,assets:o,onActiveChange:H=>{O=H>0,G()}}),ee,ae=ux({assets:o,npcs:M.npcs,litter:S,canOpen:()=>!ee.isOpen(),anchorsEnabled:M.anchorsEnabled});ee=T0({assets:o,npcs:M.npcs,camera:s,controls:b,proximityAudio:V,onReadingChange:H=>{B=H,G()},litter:S,leithers:x,journal:ae});let de=!1,W=nx({camera:s,isEnabled:()=>de}),Q=rx({camera:s,streetLine:a.streetLine,isEnabled:()=>de}),ue=ix({moments:W}),_e=document.getElementById("hud-day");_e&&(_e.textContent=M0(Ea(),$l(),f.state().weather)),$g({controls:b,torch:l,onEnter:()=>{let H=null;try{if(window.__mcgrotForceAudioContextError&&["localhost","127.0.0.1"].includes(location.hostname))throw new Error("[debug] forced AudioContext setup failure");let fe=window.AudioContext||window.webkitAudioContext;if(H=fe?new fe:null,H){Ks.setContext(H);let ge=H.createBufferSource();ge.buffer=H.createBuffer(1,1,H.sampleRate),ge.connect(H.destination),ge.start(0)}}catch(fe){console.warn("[title] shared AudioContext setup failed, falling back to per-subsystem contexts:",fe),H=null}d.start(H),V.resume(),de=!0;let[K,oe]=a.collision.resolveFree(s.position.x,s.position.z);s.position.x=K,s.position.z=oe}}),window.addEventListener("resize",Te);function Te(){s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),t.setPixelRatio(Math.min(window.devicePixelRatio||1,pf)),t.setSize(window.innerWidth,window.innerHeight),r.resize()}let Z=[{name:"controls",update:H=>b.update(H)},{name:"npcs",update:(H,K)=>M.update(H,K)},{name:"leithers",update:(H,K)=>x.update(H,K)},{name:"litter",update:()=>S.update(s.position)},{name:"shopfronts",update:()=>E.update(s.position)},{name:"sky",update:(H,K)=>c.update(K)},{name:"atmosphere",update:(H,K)=>f.update(H,K)},{name:"rain",update:(H,K)=>h.update(H,K)},{name:"birds",update:(H,K)=>v.update(H,K)},{name:"vermin",update:(H,K)=>y.update(H,K)},{name:"scenery",update:(H,K)=>R.update(H,K)},{name:"lamps",update:()=>A.update()},{name:"legs",update:()=>I.update()},{name:"ending",update:H=>N.update(H)},{name:"interact",update:H=>ee.update(H)},{name:"proximityAudio",update:(H,K)=>V.update(H,K)},{name:"torch",update:(H,K)=>l.update(K)},{name:"post",update:(H,K)=>r.setTime(K)},{name:"moments",update:H=>W.update(H)},{name:"captions",update:H=>Q.update(H)}];function te(H,K){for(let oe of Z)oe.update(H,K)}function j(){t.info.reset(),r.render(n,s)}function ye(H,K){te(H,K),j()}function Me(H){r.setEnabled(H)}let be=performance.now(),he=!0;function we(){if(!he)return;requestAnimationFrame(we);let H=performance.now(),K=Math.min((H-be)/1e3,.1);be=H,ye(K,H/1e3)}e&&window.__mcgrotFreezeAtBoot||we(),["localhost","127.0.0.1"].includes(location.hostname)&&(window.__mcgrotDebug=gx({camera:s,world:a,npcs:M,leithers:x,litter:S,shopfronts:E,controls:b,proximityAudio:V,interact:ee,renderer:t,scene:n,sky:c,atmosphere:f,torch:l,DPR_CAP:pf,ambience:d,post:r,journal:ae,countVendorsWithAudio:df,vendorList:M.list,anchorsEnabled:M.anchorsEnabled,anchorSet:Ma,computeVendorLayout:rd,moments:W,shareUi:ue,lamps:A,legs:I,ending:N,characters:w,captions:Q,stepFrame:ye,renderNow:j,setPostProcessing:Me,updateFrame:te,updaters:Z,setAutoAnimate(H){he=H,b.setYFollow(H),H&&(be=performance.now(),requestAnimationFrame(we))}}))}HA().catch(i=>{console.error("McGrot Walk failed to start:",i)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
