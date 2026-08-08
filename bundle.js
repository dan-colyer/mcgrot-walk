(()=>{var Sp=0,_h=1,Ep=2;var ma=1,Tp=2,io=3,An=0,vn=1,Ot=2,Ci=0,Ws=1,Qi=2,yh=3,vh=4,wp=5;var hs=100,Ap=101,Rp=102,Cp=103,Ip=104,Pp=200,Lp=201,Np=202,Dp=203,Sc=204,Ec=205,Fp=206,Up=207,Op=208,Bp=209,zp=210,Hp=211,kp=212,Gp=213,Vp=214,Tc=0,wc=1,Ac=2,Xs=3,Rc=4,Cc=5,Ic=6,Pc=7,sl=0,Wp=1,Xp=2,gi=0,Mh=1,bh=2,Sh=3,ga=4,Eh=5,Th=6,wh=7,th="attached",qp="detached",Ah=300,vs=301,or=302,rl=303,ol=304,xa=306,ni=1e3,ei=1001,Vr=1002,qt=1003,al=1004;var ar=1005;var Yt=1006,so=1007;var xi=1008;var Bn=1009,Rh=1010,Ch=1011,ro=1012,cl=1013,_i=1014,Zn=1015,Ii=1016,ll=1017,ul=1018,oo=1020,Ih=35902,Ph=35899,Lh=1021,Nh=1022,Kn=1023,Ei=1026,Ms=1027,hl=1028,dl=1029,bs=1030,fl=1031;var pl=1033,_a=33776,ya=33777,va=33778,Ma=33779,ml=35840,gl=35841,xl=35842,_l=35843,yl=36196,vl=37492,Ml=37496,bl=37488,Sl=37489,ba=37490,El=37491,Tl=37808,wl=37809,Al=37810,Rl=37811,Cl=37812,Il=37813,Pl=37814,Ll=37815,Nl=37816,Dl=37817,Fl=37818,Ul=37819,Ol=37820,Bl=37821,zl=36492,Hl=36494,kl=36495,Gl=36283,Vl=36284,Sa=36285,Wl=36286;var qs=2300,Ys=2301,bc=2302,nh=2303,ih=2400,sh=2401,rh=2402,Yp=2500;var Dh=0,Ea=1,ao=2,Zp=3200;var Ta=0,Kp=1,es="",tt="srgb",Ln="srgb-linear",Bo="linear",bt="srgb";var ks=7680;var oh=519,$p=512,Jp=513,jp=514,Xl=515,Qp=516,em=517,ql=518,tm=519,Lc=35044;var Fh="300 es",di=2e3,Wr=2001;function kx(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Gx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nm(){let i=Xr("canvas");return i.style.display="block",i}var Lf={},qr=null;function zo(...i){let e="THREE."+i.shift();qr?qr("log",e,...i):console.log(e,...i)}function im(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function We(...i){i=im(i);let e="THREE."+i.shift();if(qr)qr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function et(...i){i=im(i);let e="THREE."+i.shift();if(qr)qr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Vs(...i){let e=i.join(" ");e in Lf||(Lf[e]=!0,We(...i))}function sm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var rm={[Tc]:wc,[Ac]:Ic,[Rc]:Pc,[Xs]:Cc,[wc]:Tc,[Ic]:Ac,[Pc]:Rc,[Cc]:Xs},Ti=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nf=1234567,Do=Math.PI/180,Zs=180/Math.PI;function ti(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function dt(i,e,t){return Math.max(e,Math.min(t,i))}function Uh(i,e){return(i%e+e)%e}function Vx(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Wx(i,e,t){return i!==e?(t-i)/(e-i):0}function Fo(i,e,t){return(1-t)*i+t*e}function Xx(i,e,t,n){return Fo(i,e,1-Math.exp(-t*n))}function qx(i,e=1){return e-Math.abs(Uh(i,e*2)-e)}function Yx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Zx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Kx(i,e){return i+Math.floor(Math.random()*(e-i+1))}function $x(i,e){return i+Math.random()*(e-i)}function Jx(i){return i*(.5-Math.random())}function jx(i){i!==void 0&&(Nf=i);let e=Nf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qx(i){return i*Do}function e_(i){return i*Zs}function t_(i){return(i&i-1)===0&&i!==0}function n_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function i_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function s_(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*p,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*p,a*l);break;case"ZYZ":i.set(c*p,c*f,a*u,a*l);break;default:We("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ii={DEG2RAD:Do,RAD2DEG:Zs,generateUUID:ti,clamp:dt,euclideanModulo:Uh,mapLinear:Vx,inverseLerp:Wx,lerp:Fo,damp:Xx,pingpong:qx,smoothstep:Yx,smootherstep:Zx,randInt:Kx,randFloat:$x,randFloatSpread:Jx,seededRandom:jx,degToRad:Qx,radToDeg:e_,isPowerOfTwo:t_,ceilPowerOfTwo:n_,floorPowerOfTwo:i_,setQuaternionFromProperEuler:s_,normalize:Et,denormalize:hi},Te=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(h!==x||c!==d||l!==f||u!==p){let g=c*d+l*f+u*p+h*x;g<0&&(d=-d,f=-f,p=-p,x=-x,g=-g);let m=1-a;if(g<.9995){let b=Math.acos(g),M=Math.sin(b);m=Math.sin(m*b)/M,a=Math.sin(a*b)/M,c=c*m+d*a,l=l*m+f*a,u=u*m+p*a,h=h*m+x*a}else{c=c*m+d*a,l=l*m+f*a,u=u*m+p*a,h=h*m+x*a;let b=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=b,l*=b,u*=b,h*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+u*h+c*f-l*d,e[t+1]=c*p+u*d+l*h-a*f,e[t+2]=l*p+u*f+a*d-c*h,e[t+3]=u*p-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),f=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"YZX":this._x=d*u*h+l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h-d*f*p;break;case"XZY":this._x=d*u*h-l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h+d*f*p;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Df.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Df.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Eu.copy(this).projectOnVector(e),this.sub(Eu)}reflect(e){return this.sub(Eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Eu=new O,Df=new Nt,rt=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],x=s[0],g=s[3],m=s[6],b=s[1],M=s[4],_=s[7],S=s[2],y=s[5],T=s[8];return r[0]=o*x+a*b+c*S,r[3]=o*g+a*M+c*y,r[6]=o*m+a*_+c*T,r[1]=l*x+u*b+h*S,r[4]=l*g+u*M+h*y,r[7]=l*m+u*_+h*T,r[2]=d*x+f*b+p*S,r[5]=d*g+f*M+p*y,r[8]=d*m+f*_+p*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,p=t*h+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=h*x,e[1]=(s*l-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Vs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Tu.makeScale(e,t)),this}rotate(e){return Vs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Tu.makeRotation(-e)),this}translate(e,t){return Vs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Tu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Tu=new rt,Ff=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uf=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function r_(){let i={enabled:!0,workingColorSpace:Ln,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===bt&&(s.r=Xi(s.r),s.g=Xi(s.g),s.b=Xi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===bt&&(s.r=Gr(s.r),s.g=Gr(s.g),s.b=Gr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===es?Bo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Vs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Vs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ln]:{primaries:e,whitePoint:n,transfer:Bo,toXYZ:Ff,fromXYZ:Uf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:tt},outputColorSpaceConfig:{drawingBufferColorSpace:tt}},[tt]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:Ff,fromXYZ:Uf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:tt}}}),i}var ht=r_();function Xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Er,Nc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Er===void 0&&(Er=Xr("canvas")),Er.width=e.width,Er.height=e.height;let s=Er.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Er}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Xr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xi(t[n]/255)*255):t[n]=Xi(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},o_=0,Yr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=ti(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(wu(s[o].image)):r.push(wu(s[o]))}else r=wu(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function wu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}var a_=0,Au=new O,rn=class i extends Ti{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ei,s=ei,r=Yt,o=xi,a=Kn,c=Bn,l=i.DEFAULT_ANISOTROPY,u=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=ti(),this.name="",this.source=new Yr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Au).x}get height(){return this.source.getSize(Au).y}get depth(){return this.source.getSize(Au).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ah)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ni:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case Vr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ni:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case Vr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Ah;rn.DEFAULT_ANISOTROPY=1;var Tt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],p=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,_=(f+1)/2,S=(m+1)/2,y=(u+d)/4,T=(h+x)/4,v=(p+g)/4;return M>_&&M>S?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=y/n,r=T/n):_>S?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=y/s,r=v/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=T/r,s=v/r),this.set(n,s,r,t),this}let b=Math.sqrt((g-p)*(g-p)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(g-p)/b,this.y=(h-x)/b,this.z=(d-u)/b,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Dc=class extends Ti{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new rn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Yr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xn=class extends Dc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ho=class extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fc=class extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $e=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,c,l,u,h,d,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,d,f,p,x,g)}set(e,t,n,s,r,o,a,c,l,u,h,d,f,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Tr.setFromMatrixColumn(e,0).length(),r=1/Tr.setFromMatrixColumn(e,1).length(),o=1/Tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,p=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+p*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=p+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,p=l*u,x=l*h;t[0]=d+x*a,t[4]=p*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,p=l*u,x=l*h;t[0]=d-x*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*u,f=o*h,p=a*u,x=a*h;t[0]=c*u,t[4]=p*l-f,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=f*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,p=a*c,x=a*l;t[0]=c*u,t[4]=x-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+p,t[10]=d-x*h}else if(e.order==="XZY"){let d=o*c,f=o*l,p=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(c_,e,l_)}lookAt(e,t,n){let s=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),rs.crossVectors(n,Vn),rs.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),rs.crossVectors(n,Vn)),rs.normalize(),Wa.crossVectors(Vn,rs),s[0]=rs.x,s[4]=Wa.x,s[8]=Vn.x,s[1]=rs.y,s[5]=Wa.y,s[9]=Vn.y,s[2]=rs.z,s[6]=Wa.z,s[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],x=n[6],g=n[10],m=n[14],b=n[3],M=n[7],_=n[11],S=n[15],y=s[0],T=s[4],v=s[8],w=s[12],R=s[1],A=s[5],C=s[9],N=s[13],z=s[2],F=s[6],k=s[10],G=s[14],J=s[3],oe=s[7],de=s[11],V=s[15];return r[0]=o*y+a*R+c*z+l*J,r[4]=o*T+a*A+c*F+l*oe,r[8]=o*v+a*C+c*k+l*de,r[12]=o*w+a*N+c*G+l*V,r[1]=u*y+h*R+d*z+f*J,r[5]=u*T+h*A+d*F+f*oe,r[9]=u*v+h*C+d*k+f*de,r[13]=u*w+h*N+d*G+f*V,r[2]=p*y+x*R+g*z+m*J,r[6]=p*T+x*A+g*F+m*oe,r[10]=p*v+x*C+g*k+m*de,r[14]=p*w+x*N+g*G+m*V,r[3]=b*y+M*R+_*z+S*J,r[7]=b*T+M*A+_*F+S*oe,r[11]=b*v+M*C+_*k+S*de,r[15]=b*w+M*N+_*G+S*V,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15],b=c*f-l*d,M=a*f-l*h,_=a*d-c*h,S=o*f-l*u,y=o*d-c*u,T=o*h-a*u;return t*(x*b-g*M+m*_)-n*(p*b-g*S+m*y)+s*(p*M-x*S+m*T)-r*(p*_-x*y+g*T)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-n*(r*u-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],b=t*a-n*o,M=t*c-s*o,_=t*l-r*o,S=n*c-s*a,y=n*l-r*a,T=s*l-r*c,v=u*x-h*p,w=u*g-d*p,R=u*m-f*p,A=h*g-d*x,C=h*m-f*x,N=d*m-f*g,z=b*N-M*C+_*A+S*R-y*w+T*v;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/z;return e[0]=(a*N-c*C+l*A)*F,e[1]=(s*C-n*N-r*A)*F,e[2]=(x*T-g*y+m*S)*F,e[3]=(d*y-h*T-f*S)*F,e[4]=(c*R-o*N-l*w)*F,e[5]=(t*N-s*R+r*w)*F,e[6]=(g*_-p*T-m*M)*F,e[7]=(u*T-d*_+f*M)*F,e[8]=(o*C-a*R+l*v)*F,e[9]=(n*R-t*C-r*v)*F,e[10]=(p*y-x*_+m*b)*F,e[11]=(h*_-u*y-f*b)*F,e[12]=(a*w-o*A-c*v)*F,e[13]=(t*A-n*w+s*v)*F,e[14]=(x*M-p*S-g*b)*F,e[15]=(u*S-h*M+d*b)*F,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,p=r*h,x=o*u,g=o*h,m=a*h,b=c*l,M=c*u,_=c*h,S=n.x,y=n.y,T=n.z;return s[0]=(1-(x+m))*S,s[1]=(f+_)*S,s[2]=(p-M)*S,s[3]=0,s[4]=(f-_)*y,s[5]=(1-(d+m))*y,s[6]=(g+b)*y,s[7]=0,s[8]=(p+M)*T,s[9]=(g-b)*T,s[10]=(1-(d+x))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Tr.set(s[0],s[1],s[2]).length(),a=Tr.set(s[4],s[5],s[6]).length(),c=Tr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ci.copy(this);let l=1/o,u=1/a,h=1/c;return ci.elements[0]*=l,ci.elements[1]*=l,ci.elements[2]*=l,ci.elements[4]*=u,ci.elements[5]*=u,ci.elements[6]*=u,ci.elements[8]*=h,ci.elements[9]*=h,ci.elements[10]*=h,t.setFromRotationMatrix(ci),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=di,c=!1){let l=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),p,x;if(c)p=r/(o-r),x=o*r/(o-r);else if(a===di)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Wr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=di,c=!1){let l=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),p,x;if(c)p=1/(o-r),x=o/(o-r);else if(a===di)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Wr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Tr=new O,ci=new $e,c_=new O(0,0,0),l_=new O(1,1,1),rs=new O,Wa=new O,Vn=new O,Of=new $e,Bf=new Nt,$t=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Of.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Of,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bf.setFromEuler(this),this.setFromQuaternion(Bf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$t.DEFAULT_ORDER="XYZ";var ko=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},u_=0,zf=new O,wr=new Nt,Bi=new $e,Xa=new O,bo=new O,h_=new O,d_=new Nt,Hf=new O(1,0,0),kf=new O(0,1,0),Gf=new O(0,0,1),Vf={type:"added"},f_={type:"removed"},Ar={type:"childadded",child:null},Ru={type:"childremoved",child:null},Dt=class i extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new $t,n=new Nt,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new rt}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(Hf,e)}rotateY(e){return this.rotateOnAxis(kf,e)}rotateZ(e){return this.rotateOnAxis(Gf,e)}translateOnAxis(e,t){return zf.copy(e).applyQuaternion(this.quaternion),this.position.add(zf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hf,e)}translateY(e){return this.translateOnAxis(kf,e)}translateZ(e){return this.translateOnAxis(Gf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xa.copy(e):Xa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(bo,Xa,this.up):Bi.lookAt(Xa,bo,this.up),this.quaternion.setFromRotationMatrix(Bi),s&&(Bi.extractRotation(s.matrixWorld),wr.setFromRotationMatrix(Bi),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vf),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(f_),Ru.child=e,this.dispatchEvent(Ru),Ru.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vf),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,h_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,d_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Dt.DEFAULT_UP=new O(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var nt=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},p_={type:"move"},Zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),m=this._getHandJoint(l,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(p_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},om={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},qa={h:0,s:0,l:0};function Cu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var me=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ht.workingColorSpace){if(e=Uh(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Cu(o,r,e+1/3),this.g=Cu(o,r,e),this.b=Cu(o,r,e-1/3)}return ht.colorSpaceToWorking(this,s),this}setStyle(e,t=tt){function n(r){r!==void 0&&parseFloat(r)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tt){let n=om[e.toLowerCase()];return n!==void 0?this.setHex(n,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tt){return ht.workingToColorSpace(wn.copy(this),e),Math.round(dt(wn.r*255,0,255))*65536+Math.round(dt(wn.g*255,0,255))*256+Math.round(dt(wn.b*255,0,255))}getHexString(e=tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(wn.copy(this),t);let n=wn.r,s=wn.g,r=wn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=tt){ht.workingToColorSpace(wn.copy(this),e);let t=wn.r,n=wn.g,s=wn.b;return e!==tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(os),this.setHSL(os.h+e,os.s+t,os.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(os),e.getHSL(qa);let n=Fo(os.h,qa.h,t),s=Fo(os.s,qa.s,t),r=Fo(os.l,qa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new me;me.NAMES=om;var Go=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new me(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ks=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $t,this.environmentIntensity=1,this.environmentRotation=new $t,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},li=new O,zi=new O,Iu=new O,Hi=new O,Rr=new O,Cr=new O,Wf=new O,Pu=new O,Lu=new O,Nu=new O,Du=new Tt,Fu=new Tt,Uu=new Tt,Wi=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),li.subVectors(e,t),s.cross(li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){li.subVectors(s,t),zi.subVectors(n,t),Iu.subVectors(e,t);let o=li.dot(li),a=li.dot(zi),c=li.dot(Iu),l=zi.dot(zi),u=zi.dot(Iu),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(l*c-a*u)*d,p=(o*u-a*c)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Hi.x),c.addScaledVector(o,Hi.y),c.addScaledVector(a,Hi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Du.setScalar(0),Fu.setScalar(0),Uu.setScalar(0),Du.fromBufferAttribute(e,t),Fu.fromBufferAttribute(e,n),Uu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Du,r.x),o.addScaledVector(Fu,r.y),o.addScaledVector(Uu,r.z),o}static isFrontFacing(e,t,n,s){return li.subVectors(n,t),zi.subVectors(e,t),li.cross(zi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),li.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Rr.subVectors(s,n),Cr.subVectors(r,n),Pu.subVectors(e,n);let c=Rr.dot(Pu),l=Cr.dot(Pu);if(c<=0&&l<=0)return t.copy(n);Lu.subVectors(e,s);let u=Rr.dot(Lu),h=Cr.dot(Lu);if(u>=0&&h<=u)return t.copy(s);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Rr,o);Nu.subVectors(e,r);let f=Rr.dot(Nu),p=Cr.dot(Nu);if(p>=0&&f<=p)return t.copy(r);let x=f*l-c*p;if(x<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(Cr,a);let g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return Wf.subVectors(r,s),a=(h-u)/(h-u+(f-p)),t.copy(s).addScaledVector(Wf,a);let m=1/(g+x+d);return o=x*m,a=d*m,t.copy(n).addScaledVector(Rr,o).addScaledVector(Cr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qt=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ui):ui.fromBufferAttribute(r,o),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ya.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ya.copy(n.boundingBox)),Ya.applyMatrix4(e.matrixWorld),this.union(Ya)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(So),Za.subVectors(this.max,So),Ir.subVectors(e.a,So),Pr.subVectors(e.b,So),Lr.subVectors(e.c,So),as.subVectors(Pr,Ir),cs.subVectors(Lr,Pr),Ls.subVectors(Ir,Lr);let t=[0,-as.z,as.y,0,-cs.z,cs.y,0,-Ls.z,Ls.y,as.z,0,-as.x,cs.z,0,-cs.x,Ls.z,0,-Ls.x,-as.y,as.x,0,-cs.y,cs.x,0,-Ls.y,Ls.x,0];return!Ou(t,Ir,Pr,Lr,Za)||(t=[1,0,0,0,1,0,0,0,1],!Ou(t,Ir,Pr,Lr,Za))?!1:(Ka.crossVectors(as,cs),t=[Ka.x,Ka.y,Ka.z],Ou(t,Ir,Pr,Lr,Za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ki=[new O,new O,new O,new O,new O,new O,new O,new O],ui=new O,Ya=new Qt,Ir=new O,Pr=new O,Lr=new O,as=new O,cs=new O,Ls=new O,So=new O,Za=new O,Ka=new O,Ns=new O;function Ou(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ns.fromArray(i,r);let a=s.x*Math.abs(Ns.x)+s.y*Math.abs(Ns.y)+s.z*Math.abs(Ns.z),c=e.dot(Ns),l=t.dot(Ns),u=n.dot(Ns);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var nn=new O,$a=new Te,m_=0,Ut=class extends Ti{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:m_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Lc,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$a.fromBufferAttribute(this,t),$a.applyMatrix3(e),this.setXY(t,$a.x,$a.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lc&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Vo=class extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Wo=class extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Qe=class extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}},g_=new Qt,Eo=new O,Bu=new O,Fn=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):g_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Eo.subVectors(e,this.center);let t=Eo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Eo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Eo.copy(e.center).add(Bu)),this.expandByPoint(Eo.copy(e.center).sub(Bu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},x_=0,Qn=new $e,zu=new Dt,Nr=new O,Wn=new Qt,To=new Qt,fn=new O,pt=class i extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kx(e)?Wo:Vo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new rt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,n){return Qn.makeTranslation(e,t,n),this.applyMatrix4(Qn),this}scale(e,t,n){return Qn.makeScale(e,t,n),this.applyMatrix4(Qn),this}lookAt(e){return zu.lookAt(e),zu.updateMatrix(),this.applyMatrix4(zu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qe(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];To.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(Wn.min,To.min),Wn.expandByPoint(fn),fn.addVectors(Wn.max,To.max),Wn.expandByPoint(fn)):(Wn.expandByPoint(To.min),Wn.expandByPoint(To.max))}Wn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)fn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(fn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)fn.fromBufferAttribute(a,l),c&&(Nr.fromBufferAttribute(e,l),fn.add(Nr)),s=Math.max(s,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ut(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let v=0;v<n.count;v++)a[v]=new O,c[v]=new O;let l=new O,u=new O,h=new O,d=new Te,f=new Te,p=new Te,x=new O,g=new O;function m(v,w,R){l.fromBufferAttribute(n,v),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,R),d.fromBufferAttribute(r,v),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,R),u.sub(l),h.sub(l),f.sub(d),p.sub(d);let A=1/(f.x*p.y-p.x*f.y);isFinite(A)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(A),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(A),a[v].add(x),a[w].add(x),a[R].add(x),c[v].add(g),c[w].add(g),c[R].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let v=0,w=b.length;v<w;++v){let R=b[v],A=R.start,C=R.count;for(let N=A,z=A+C;N<z;N+=3)m(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let M=new O,_=new O,S=new O,y=new O;function T(v){S.fromBufferAttribute(s,v),y.copy(S);let w=a[v];M.copy(w),M.sub(S.multiplyScalar(S.dot(w))).normalize(),_.crossVectors(y,w);let A=_.dot(c[v])<0?-1:1;o.setXYZW(v,M.x,M.y,M.z,A)}for(let v=0,w=b.length;v<w;++v){let R=b[v],A=R.start,C=R.count;for(let N=A,z=A+C;N<z;N+=3)T(e.getX(N+0)),T(e.getX(N+1)),T(e.getX(N+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new O,r=new O,o=new O,a=new O,c=new O,l=new O,u=new O,h=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u),f=0,p=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let m=0;m<u;m++)d[p++]=l[f++]}return new Ut(d,u,h)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},$s=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Lc,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Pn=new O,ds=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyMatrix4(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyNormalMatrix(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.transformDirection(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=hi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){zo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){zo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},__=0,Rn=class extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=Ws,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sc,this.blendDst=Ec,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sc&&(n.blendSrc=this.blendSrc),this.blendDst!==Ec&&(n.blendDst=this.blendDst),this.blendEquation!==hs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new me().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Te().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Te().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},wi=class extends Rn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Dr,wo=new O,Fr=new O,Ur=new O,Or=new Te,Ao=new Te,am=new $e,Ja=new O,Ro=new O,ja=new O,Xf=new Te,Hu=new Te,qf=new Te,qi=class extends Dt{constructor(e=new wi){if(super(),this.isSprite=!0,this.type="Sprite",Dr===void 0){Dr=new pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $s(t,5);Dr.setIndex([0,1,2,0,2,3]),Dr.setAttribute("position",new ds(n,3,0,!1)),Dr.setAttribute("uv",new ds(n,2,3,!1))}this.geometry=Dr,this.material=e,this.center=new Te(.5,.5),this.count=1}raycast(e,t){e.camera===null&&et('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fr.setFromMatrixScale(this.matrixWorld),am.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ur.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fr.multiplyScalar(-Ur.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Qa(Ja.set(-.5,-.5,0),Ur,o,Fr,s,r),Qa(Ro.set(.5,-.5,0),Ur,o,Fr,s,r),Qa(ja.set(.5,.5,0),Ur,o,Fr,s,r),Xf.set(0,0),Hu.set(1,0),qf.set(1,1);let a=e.ray.intersectTriangle(Ja,Ro,ja,!1,wo);if(a===null&&(Qa(Ro.set(-.5,.5,0),Ur,o,Fr,s,r),Hu.set(0,1),a=e.ray.intersectTriangle(Ja,ja,Ro,!1,wo),a===null))return;let c=e.ray.origin.distanceTo(wo);c<e.near||c>e.far||t.push({distance:c,point:wo.clone(),uv:Wi.getInterpolation(wo,Ja,Ro,ja,Xf,Hu,qf,new Te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Qa(i,e,t,n,s,r){Or.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ao.x=r*Or.x-s*Or.y,Ao.y=s*Or.x+r*Or.y):Ao.copy(Or),i.copy(e),i.x+=Ao.x,i.y+=Ao.y,i.applyMatrix4(am)}var Gi=new O,ku=new O,ec=new O,ls=new O,Gu=new O,tc=new O,Vu=new O,Js=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ku.copy(e).add(t).multiplyScalar(.5),ec.copy(t).sub(e).normalize(),ls.copy(this.origin).sub(ku);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ec),a=ls.dot(this.direction),c=-ls.dot(ec),l=ls.lengthSq(),u=Math.abs(1-o*o),h,d,f,p;if(u>0)if(h=o*c-a,d=o*a-c,p=r*u,h>=0)if(d>=-p)if(d<=p){let x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-p?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=p?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ku).addScaledVector(ec,d),f}intersectSphere(e,t){Gi.subVectors(e.center,this.origin);let n=Gi.dot(this.direction),s=Gi.dot(Gi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,n,s,r){Gu.subVectors(t,e),tc.subVectors(n,e),Vu.crossVectors(Gu,tc);let o=this.direction.dot(Vu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ls.subVectors(this.origin,e);let c=a*this.direction.dot(tc.crossVectors(ls,tc));if(c<0)return null;let l=a*this.direction.dot(Gu.cross(ls));if(l<0||c+l>o)return null;let u=-a*ls.dot(Vu);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yn=class extends Rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Yf=new $e,Ds=new Js,nc=new Fn,Zf=new O,ic=new O,sc=new O,rc=new O,Wu=new O,oc=new O,Kf=new O,ac=new O,Oe=class extends Dt{constructor(e=new pt,t=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){oc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(Wu.fromBufferAttribute(h,e),o?oc.addScaledVector(Wu,u):oc.addScaledVector(Wu.sub(t),u))}t.add(oc)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nc.copy(n.boundingSphere),nc.applyMatrix4(r),Ds.copy(e.ray).recast(e.near),!(nc.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(nc,Zf)===null||Ds.origin.distanceToSquared(Zf)>(e.far-e.near)**2))&&(Yf.copy(r).invert(),Ds.copy(e.ray).applyMatrix4(Yf),!(n.boundingBox!==null&&Ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ds)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=o[g.materialIndex],b=Math.max(g.start,f.start),M=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=b,S=M;_<S;_+=3){let y=a.getX(_),T=a.getX(_+1),v=a.getX(_+2);s=cc(this,m,e,n,l,u,h,y,T,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let b=a.getX(g),M=a.getX(g+1),_=a.getX(g+2);s=cc(this,o,e,n,l,u,h,b,M,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=o[g.materialIndex],b=Math.max(g.start,f.start),M=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let _=b,S=M;_<S;_+=3){let y=_,T=_+1,v=_+2;s=cc(this,m,e,n,l,u,h,y,T,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let b=g,M=g+1,_=g+2;s=cc(this,o,e,n,l,u,h,b,M,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function y_(i,e,t,n,s,r,o,a){let c;if(e.side===vn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===An,a),c===null)return null;ac.copy(a),ac.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ac);return l<t.near||l>t.far?null:{distance:l,point:ac.clone(),object:i}}function cc(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,ic),i.getVertexPosition(c,sc),i.getVertexPosition(l,rc);let u=y_(i,e,t,n,ic,sc,rc,Kf);if(u){let h=new O;Wi.getBarycoord(Kf,ic,sc,rc,h),s&&(u.uv=Wi.getInterpolatedAttribute(s,a,c,l,h,new Te)),r&&(u.uv1=Wi.getInterpolatedAttribute(r,a,c,l,h,new Te)),o&&(u.normal=Wi.getInterpolatedAttribute(o,a,c,l,h,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new O,materialIndex:0};Wi.getNormal(ic,sc,rc,d.normal),u.face=d,u.barycoord=h}return u}var Co=new Tt,$f=new Tt,Jf=new Tt,v_=new Tt,jf=new $e,lc=new O,Xu=new Fn,Qf=new $e,qu=new Js,Xo=class extends Oe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=th,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Qt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,lc),this.boundingBox.expandByPoint(lc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,lc),this.boundingSphere.expandByPoint(lc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xu.copy(this.boundingSphere),Xu.applyMatrix4(s),e.ray.intersectsSphere(Xu)!==!1&&(Qf.copy(s).invert(),qu.copy(e.ray).applyMatrix4(Qf),!(this.boundingBox!==null&&qu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,qu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Tt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===th?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===qp?this.bindMatrixInverse.copy(this.bindMatrix).invert():We("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;$f.fromBufferAttribute(s.attributes.skinIndex,e),Jf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Co.copy(t),t.set(0,0,0,0)):(Co.set(...t,1),t.set(0,0,0)),Co.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Jf.getComponent(r);if(o!==0){let a=$f.getComponent(r);jf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(v_.copy(Co).applyMatrix4(jf),o)}}return t.isVector4&&(t.w=Co.w),t.applyMatrix4(this.bindMatrixInverse)}},Kr=class extends Dt{constructor(){super(),this.isBone=!0,this.type="Bone"}},$r=class extends rn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=qt,u=qt,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ep=new $e,M_=new $e,qo=class i{constructor(e=[],t=[]){this.uuid=ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){We("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:M_;ep.multiplyMatrices(a,t[r]),ep.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new $r(t,e,e,Kn,Zn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(We("Skeleton: No bone found with UUID:",r),o=new Kr),this.bones.push(o),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},fs=class extends Ut{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Br=new $e,tp=new $e,uc=[],np=new Qt,b_=new $e,Io=new Oe,Po=new Fn,pn=class extends Oe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,b_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Br),np.copy(e.boundingBox).applyMatrix4(Br),this.boundingBox.union(np)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Br),Po.copy(e.boundingSphere).applyMatrix4(Br),this.boundingSphere.union(Po)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Io.geometry=this.geometry,Io.material=this.material,Io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Po.copy(this.boundingSphere),Po.applyMatrix4(n),e.ray.intersectsSphere(Po)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Br),tp.multiplyMatrices(n,Br),Io.matrixWorld=tp,Io.raycast(e,uc);for(let o=0,a=uc.length;o<a;o++){let c=uc[o];c.instanceId=r,c.object=this,t.push(c)}uc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new fs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new $r(new Float32Array(s*this.count),s,this.count,hl,Zn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Yu=new O,S_=new O,E_=new rt,bi=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Yu.subVectors(n,t).cross(S_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Yu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||E_.getNormalMatrix(e),s=this.coplanarPoint(Yu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fs=new Fn,T_=new Te(.5,.5),hc=new O,Jr=class{constructor(e=new bi,t=new bi,n=new bi,s=new bi,r=new bi,o=new bi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=di,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],b=r[12],M=r[13],_=r[14],S=r[15];if(s[0].setComponents(l-o,f-u,m-p,S-b).normalize(),s[1].setComponents(l+o,f+u,m+p,S+b).normalize(),s[2].setComponents(l+a,f+h,m+x,S+M).normalize(),s[3].setComponents(l-a,f-h,m-x,S-M).normalize(),n)s[4].setComponents(c,d,g,_).normalize(),s[5].setComponents(l-c,f-d,m-g,S-_).normalize();else if(s[4].setComponents(l-c,f-d,m-g,S-_).normalize(),t===di)s[5].setComponents(l+c,f+d,m+g,S+_).normalize();else if(t===Wr)s[5].setComponents(c,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(e){Fs.center.set(0,0,0);let t=T_.distanceTo(e.center);return Fs.radius=.7071067811865476+t,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(hc.x=s.normal.x>0?e.max.x:e.min.x,hc.y=s.normal.y>0?e.max.y:e.min.y,hc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(hc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ps=class extends Rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Uc=new O,Oc=new O,ip=new $e,Lo=new Js,dc=new Fn,Zu=new O,sp=new O,js=class extends Dt{constructor(e=new pt,t=new ps){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Uc.fromBufferAttribute(t,s-1),Oc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Uc.distanceTo(Oc);e.setAttribute("lineDistance",new Qe(n,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dc.copy(n.boundingSphere),dc.applyMatrix4(s),dc.radius+=r,e.ray.intersectsSphere(dc)===!1)return;ip.copy(s).invert(),Lo.copy(e.ray).applyMatrix4(ip);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=l){let m=u.getX(x),b=u.getX(x+1),M=fc(this,e,Lo,c,m,b,x);M&&t.push(M)}if(this.isLineLoop){let x=u.getX(p-1),g=u.getX(f),m=fc(this,e,Lo,c,x,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=l){let m=fc(this,e,Lo,c,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=fc(this,e,Lo,c,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function fc(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Uc.fromBufferAttribute(a,s),Oc.fromBufferAttribute(a,r),t.distanceSqToSegment(Uc,Oc,Zu,sp)>n)return;Zu.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Zu);if(!(l<e.near||l>e.far))return{distance:l,point:sp.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var rp=new O,op=new O,Qs=class extends js{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)rp.fromBufferAttribute(t,s),op.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+rp.distanceTo(op);e.setAttribute("lineDistance",new Qe(n,1))}else We("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Yo=class extends js{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ms=class extends Rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ap=new $e,ah=new Js,pc=new Fn,mc=new O,er=class extends Dt{constructor(e=new pt,t=new ms){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pc.copy(n.boundingSphere),pc.applyMatrix4(s),pc.radius+=r,e.ray.intersectsSphere(pc)===!1)return;ap.copy(s).invert(),ah.copy(e.ray).applyMatrix4(ap);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let p=d,x=f;p<x;p++){let g=l.getX(p);mc.fromBufferAttribute(h,g),cp(mc,g,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let p=d,x=f;p<x;p++)mc.fromBufferAttribute(h,p),cp(mc,p,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function cp(i,e,t,n,s,r,o){let a=ah.distanceSqToPoint(i);if(a<t){let c=new O;ah.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var jr=class extends rn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=qt,this.minFilter=qt,this.generateMipmaps=!1,this.needsUpdate=!0}};var Zo=class extends rn{constructor(e=[],t=vs,n,s,r,o,a,c,l,u){super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},xt=class extends rn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Yi=class extends rn{constructor(e,t,n=_i,s,r,o,a=qt,c=qt,l,u=Ei,h=1){if(u!==Ei&&u!==Ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Bc=class extends Yi{constructor(e,t=_i,n=vs,s,r,o=qt,a=qt,c,l=Ei){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ko=class extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ze=class i extends pt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(u,3)),this.setAttribute("uv",new Qe(h,2));function p(x,g,m,b,M,_,S,y,T,v,w){let R=_/T,A=S/v,C=_/2,N=S/2,z=y/2,F=T+1,k=v+1,G=0,J=0,oe=new O;for(let de=0;de<k;de++){let V=de*A-N;for(let K=0;K<F;K++){let he=K*R-C;oe[x]=he*b,oe[g]=V*M,oe[m]=z,l.push(oe.x,oe.y,oe.z),oe[x]=0,oe[g]=0,oe[m]=y>0?1:-1,u.push(oe.x,oe.y,oe.z),h.push(K/T),h.push(1-de/v),G+=1}}for(let de=0;de<v;de++)for(let V=0;V<T;V++){let K=d+V+F*de,he=d+V+F*(de+1),ge=d+(V+1)+F*(de+1),be=d+(V+1)+F*de;c.push(K,he,be),c.push(he,ge,be),J+=6}a.addGroup(f,J,w),f+=J,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var cn=class i extends pt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],p=0,x=[],g=n/2,m=0;b(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Qe(h,3)),this.setAttribute("normal",new Qe(d,3)),this.setAttribute("uv",new Qe(f,2));function b(){let _=new O,S=new O,y=0,T=(t-e)/n;for(let v=0;v<=r;v++){let w=[],R=v/r,A=R*(t-e)+e;for(let C=0;C<=s;C++){let N=C/s,z=N*c+a,F=Math.sin(z),k=Math.cos(z);S.x=A*F,S.y=-R*n+g,S.z=A*k,h.push(S.x,S.y,S.z),_.set(F,T,k).normalize(),d.push(_.x,_.y,_.z),f.push(N,1-R),w.push(p++)}x.push(w)}for(let v=0;v<s;v++)for(let w=0;w<r;w++){let R=x[w][v],A=x[w+1][v],C=x[w+1][v+1],N=x[w][v+1];(e>0||w!==0)&&(u.push(R,A,N),y+=3),(t>0||w!==r-1)&&(u.push(A,C,N),y+=3)}l.addGroup(m,y,0),m+=y}function M(_){let S=p,y=new Te,T=new O,v=0,w=_===!0?e:t,R=_===!0?1:-1;for(let C=1;C<=s;C++)h.push(0,g*R,0),d.push(0,R,0),f.push(.5,.5),p++;let A=p;for(let C=0;C<=s;C++){let z=C/s*c+a,F=Math.cos(z),k=Math.sin(z);T.x=w*k,T.y=g*R,T.z=w*F,h.push(T.x,T.y,T.z),d.push(0,R,0),y.x=F*.5+.5,y.y=k*.5*R+.5,f.push(y.x,y.y),p++}for(let C=0;C<s;C++){let N=S+C,z=A+C;_===!0?u.push(z,z+1,N):u.push(z+1,z,N),v+=3}l.addGroup(m,v,_===!0?1:2),m+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},gs=class i extends cn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var qn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){We("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Te:new O);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new O,s=[],r=[],o=[],a=new O,c=new $e;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new O)}r[0]=new O,o[0]=new O;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(dt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(dt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Qr=class extends qn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Te){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},zc=class extends Qr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Oh(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var lp=new O,up=new O,Ku=new Oh,$u=new Oh,Ju=new Oh,Hc=class extends qn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new O){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(up.subVectors(s[0],s[1]).add(s[0]),l=up);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(lp.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=lp),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Ku.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,p,x,g),$u.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,p,x,g),Ju.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,p,x,g)}else this.curveType==="catmullrom"&&(Ku.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),$u.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Ju.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Ku.calc(c),$u.calc(c),Ju.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function hp(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function w_(i,e){let t=1-i;return t*t*e}function A_(i,e){return 2*(1-i)*i*e}function R_(i,e){return i*i*e}function Uo(i,e,t,n){return w_(i,e)+A_(i,t)+R_(i,n)}function C_(i,e){let t=1-i;return t*t*t*e}function I_(i,e){let t=1-i;return 3*t*t*i*e}function P_(i,e){return 3*(1-i)*i*i*e}function L_(i,e){return i*i*i*e}function Oo(i,e,t,n,s){return C_(i,e)+I_(i,t)+P_(i,n)+L_(i,s)}var $o=class extends qn{constructor(e=new Te,t=new Te,n=new Te,s=new Te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Te){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Oo(e,s.x,r.x,o.x,a.x),Oo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},kc=class extends qn{constructor(e=new O,t=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new O){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Oo(e,s.x,r.x,o.x,a.x),Oo(e,s.y,r.y,o.y,a.y),Oo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jo=class extends qn{constructor(e=new Te,t=new Te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Te){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gc=class extends qn{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jo=class extends qn{constructor(e=new Te,t=new Te,n=new Te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Te){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Uo(e,s.x,r.x,o.x),Uo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vc=class extends qn{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Uo(e,s.x,r.x,o.x),Uo(e,s.y,r.y,o.y),Uo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qo=class extends qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Te){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(hp(a,c.x,l.x,u.x,h.x),hp(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Te().fromArray(s))}return this}},ch=Object.freeze({__proto__:null,ArcCurve:zc,CatmullRomCurve3:Hc,CubicBezierCurve:$o,CubicBezierCurve3:kc,EllipseCurve:Qr,LineCurve:Jo,LineCurve3:Gc,QuadraticBezierCurve:jo,QuadraticBezierCurve3:Vc,SplineCurve:Qo}),Wc=class extends qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ch[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new ch[s.type]().fromJSON(s))}return this}},ea=class extends Wc{constructor(e){super(),this.type="Path",this.currentPoint=new Te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Jo(this.currentPoint.clone(),new Te(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new jo(this.currentPoint.clone(),new Te(e,t),new Te(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new $o(this.currentPoint.clone(),new Te(e,t),new Te(n,s),new Te(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Qo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new Qr(e,t,n,s,r,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},eo=class extends ea{constructor(e){super(e),this.uuid=ti(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ea().fromJSON(s))}return this}};function N_(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=cm(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=B_(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let u=a,h=c;for(let d=t;d<s;d+=t){let f=i[d],p=i[d+1];f<a&&(a=f),p<c&&(c=p),f>u&&(u=f),p>h&&(h=p)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return ta(r,o,t,a,c,l,0),o}function cm(i,e,t,n,s){let r;if(s===K_(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=dp(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=dp(o/n|0,i[o],i[o+1],r);return r&&to(r,r.next)&&(ia(r),r=r.next),r}function tr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(to(t,t.next)||Xt(t.prev,t,t.next)===0)){if(ia(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ta(i,e,t,n,s,r,o){if(!i)return;!o&&r&&V_(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?F_(i,n,s,r):D_(i)){e.push(c.i,i.i,l.i),ia(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=U_(tr(i),e),ta(i,e,t,n,s,r,2)):o===2&&O_(i,e,t,n,s,r):ta(tr(i),e,t,n,s,r,1);break}}}function D_(i){let e=i.prev,t=i,n=i.next;if(Xt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=Math.min(s,r,o),h=Math.min(a,c,l),d=Math.max(s,r,o),f=Math.max(a,c,l),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&No(s,a,r,c,o,l,p.x,p.y)&&Xt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function F_(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Xt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,f=Math.min(a,c,l),p=Math.min(u,h,d),x=Math.max(a,c,l),g=Math.max(u,h,d),m=lh(f,p,e,t,n),b=lh(x,g,e,t,n),M=i.prevZ,_=i.nextZ;for(;M&&M.z>=m&&_&&_.z<=b;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=g&&M!==s&&M!==o&&No(a,u,c,h,l,d,M.x,M.y)&&Xt(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&No(a,u,c,h,l,d,_.x,_.y)&&Xt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=m;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=g&&M!==s&&M!==o&&No(a,u,c,h,l,d,M.x,M.y)&&Xt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=b;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&No(a,u,c,h,l,d,_.x,_.y)&&Xt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function U_(i,e){let t=i;do{let n=t.prev,s=t.next.next;!to(n,s)&&um(n,t,t.next,s)&&na(n,s)&&na(s,n)&&(e.push(n.i,t.i,s.i),ia(t),ia(t.next),t=i=s),t=t.next}while(t!==i);return tr(t)}function O_(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&q_(o,a)){let c=hm(o,a);o=tr(o,o.next),c=tr(c,c.next),ta(o,e,t,n,s,r,0),ta(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function B_(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=cm(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(X_(l))}s.sort(z_);for(let r=0;r<s.length;r++)t=H_(s[r],t);return t}function z_(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function H_(i,e){let t=k_(i,e);if(!t)return e;let n=hm(t,i);return tr(n,n.next),tr(t,t.next)}function k_(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(to(i,t))return t;do{if(to(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&lm(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let h=Math.abs(s-t.y)/(n-t.x);na(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&G_(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function G_(i,e){return Xt(i.prev,i,e.prev)<0&&Xt(e.next,i,i.next)<0}function V_(i,e,t,n){let s=i;do s.z===0&&(s.z=lh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,W_(s)}function W_(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function lh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function X_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function lm(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function No(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&lm(i,e,t,n,s,r,o,a)}function q_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Y_(i,e)&&(na(i,e)&&na(e,i)&&Z_(i,e)&&(Xt(i.prev,i,e.prev)||Xt(i,e.prev,e))||to(i,e)&&Xt(i.prev,i,i.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function to(i,e){return i.x===e.x&&i.y===e.y}function um(i,e,t,n){let s=xc(Xt(i,e,t)),r=xc(Xt(i,e,n)),o=xc(Xt(t,n,i)),a=xc(Xt(t,n,e));return!!(s!==r&&o!==a||s===0&&gc(i,t,e)||r===0&&gc(i,n,e)||o===0&&gc(t,i,n)||a===0&&gc(t,e,n))}function gc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function xc(i){return i>0?1:i<0?-1:0}function Y_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&um(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function na(i,e){return Xt(i.prev,i,i.next)<0?Xt(i,e,i.next)>=0&&Xt(i,i.prev,e)>=0:Xt(i,e,i.prev)<0||Xt(i,i.next,e)<0}function Z_(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function hm(i,e){let t=uh(i.i,i.x,i.y),n=uh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function dp(i,e,t,n){let s=uh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ia(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function uh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function K_(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var hh=class{static triangulate(e,t,n=2){return N_(e,t,n)}},Gs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];fp(e),pp(n,e);let o=e.length;t.forEach(fp);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,pp(n,t[c]);let a=hh.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function fp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function pp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var sa=class i extends pt{constructor(e=new eo([new Te(.5,.5),new Te(-.5,.5),new Te(-.5,-.5),new Te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new Qe(s,3)),this.setAttribute("uv",new Qe(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:$_,M,_=!1,S,y,T,v;if(m){M=m.getSpacedPoints(u),_=!0,d=!1;let ee=m.isCatmullRomCurve3?m.closed:!1;S=m.computeFrenetFrames(u,ee),y=new O,T=new O,v=new O}d||(g=0,f=0,p=0,x=0);let w=a.extractPoints(l),R=w.shape,A=w.holes;if(!Gs.isClockWise(R)){R=R.reverse();for(let ee=0,ce=A.length;ee<ce;ee++){let X=A[ee];Gs.isClockWise(X)&&(A[ee]=X.reverse())}}function N(ee){let X=10000000000000001e-36,se=ee[0];for(let xe=1;xe<=ee.length;xe++){let Ne=xe%ee.length,Ce=ee[Ne],ue=Ce.x-se.x,pe=Ce.y-se.y,D=ue*ue+pe*pe,Le=Math.max(Math.abs(Ce.x),Math.abs(Ce.y),Math.abs(se.x),Math.abs(se.y)),De=X*Le*Le;if(D<=De){ee.splice(Ne,1),xe--;continue}se=Ce}}N(R),A.forEach(N);let z=A.length,F=R;for(let ee=0;ee<z;ee++){let ce=A[ee];R=R.concat(ce)}function k(ee,ce,X){return ce||et("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(ce,X)}let G=R.length;function J(ee,ce,X){let se,xe,Ne,Ce=ee.x-ce.x,ue=ee.y-ce.y,pe=X.x-ee.x,D=X.y-ee.y,Le=Ce*Ce+ue*ue,De=Ce*D-ue*pe;if(Math.abs(De)>Number.EPSILON){let P=Math.sqrt(Le),E=Math.sqrt(pe*pe+D*D),L=ce.x-ue/P,U=ce.y+Ce/P,B=X.x-D/E,W=X.y+pe/E,ne=((B-L)*D-(W-U)*pe)/(Ce*D-ue*pe);se=L+Ce*ne-ee.x,xe=U+ue*ne-ee.y;let q=se*se+xe*xe;if(q<=2)return new Te(se,xe);Ne=Math.sqrt(q/2)}else{let P=!1;Ce>Number.EPSILON?pe>Number.EPSILON&&(P=!0):Ce<-Number.EPSILON?pe<-Number.EPSILON&&(P=!0):Math.sign(ue)===Math.sign(D)&&(P=!0),P?(se=-ue,xe=Ce,Ne=Math.sqrt(Le)):(se=Ce,xe=ue,Ne=Math.sqrt(Le/2))}return new Te(se/Ne,xe/Ne)}let oe=[];for(let ee=0,ce=F.length,X=ce-1,se=ee+1;ee<ce;ee++,X++,se++)X===ce&&(X=0),se===ce&&(se=0),oe[ee]=J(F[ee],F[X],F[se]);let de=[],V,K=oe.concat();for(let ee=0,ce=z;ee<ce;ee++){let X=A[ee];V=[];for(let se=0,xe=X.length,Ne=xe-1,Ce=se+1;se<xe;se++,Ne++,Ce++)Ne===xe&&(Ne=0),Ce===xe&&(Ce=0),V[se]=J(X[se],X[Ne],X[Ce]);de.push(V),K=K.concat(V)}let he;if(g===0)he=Gs.triangulateShape(F,A);else{let ee=[],ce=[];for(let X=0;X<g;X++){let se=X/g,xe=f*Math.cos(se*Math.PI/2),Ne=p*Math.sin(se*Math.PI/2)+x;for(let Ce=0,ue=F.length;Ce<ue;Ce++){let pe=k(F[Ce],oe[Ce],Ne);_e(pe.x,pe.y,-xe),se===0&&ee.push(pe)}for(let Ce=0,ue=z;Ce<ue;Ce++){let pe=A[Ce];V=de[Ce];let D=[];for(let Le=0,De=pe.length;Le<De;Le++){let P=k(pe[Le],V[Le],Ne);_e(P.x,P.y,-xe),se===0&&D.push(P)}se===0&&ce.push(D)}}he=Gs.triangulateShape(ee,ce)}let ge=he.length,be=p+x;for(let ee=0;ee<G;ee++){let ce=d?k(R[ee],K[ee],be):R[ee];_?(T.copy(S.normals[0]).multiplyScalar(ce.x),y.copy(S.binormals[0]).multiplyScalar(ce.y),v.copy(M[0]).add(T).add(y),_e(v.x,v.y,v.z)):_e(ce.x,ce.y,0)}for(let ee=1;ee<=u;ee++)for(let ce=0;ce<G;ce++){let X=d?k(R[ce],K[ce],be):R[ce];_?(T.copy(S.normals[ee]).multiplyScalar(X.x),y.copy(S.binormals[ee]).multiplyScalar(X.y),v.copy(M[ee]).add(T).add(y),_e(v.x,v.y,v.z)):_e(X.x,X.y,h/u*ee)}for(let ee=g-1;ee>=0;ee--){let ce=ee/g,X=f*Math.cos(ce*Math.PI/2),se=p*Math.sin(ce*Math.PI/2)+x;for(let xe=0,Ne=F.length;xe<Ne;xe++){let Ce=k(F[xe],oe[xe],se);_e(Ce.x,Ce.y,h+X)}for(let xe=0,Ne=A.length;xe<Ne;xe++){let Ce=A[xe];V=de[xe];for(let ue=0,pe=Ce.length;ue<pe;ue++){let D=k(Ce[ue],V[ue],se);_?_e(D.x,D.y+M[u-1].y,M[u-1].x+X):_e(D.x,D.y,h+X)}}}Z(),te();function Z(){let ee=s.length/3;if(d){let ce=0,X=G*ce;for(let se=0;se<ge;se++){let xe=he[se];Me(xe[2]+X,xe[1]+X,xe[0]+X)}ce=u+g*2,X=G*ce;for(let se=0;se<ge;se++){let xe=he[se];Me(xe[0]+X,xe[1]+X,xe[2]+X)}}else{for(let ce=0;ce<ge;ce++){let X=he[ce];Me(X[2],X[1],X[0])}for(let ce=0;ce<ge;ce++){let X=he[ce];Me(X[0]+G*u,X[1]+G*u,X[2]+G*u)}}n.addGroup(ee,s.length/3-ee,0)}function te(){let ee=s.length/3,ce=0;$(F,ce),ce+=F.length;for(let X=0,se=A.length;X<se;X++){let xe=A[X];$(xe,ce),ce+=xe.length}n.addGroup(ee,s.length/3-ee,1)}function $(ee,ce){let X=ee.length;for(;--X>=0;){let se=X,xe=X-1;xe<0&&(xe=ee.length-1);for(let Ne=0,Ce=u+g*2;Ne<Ce;Ne++){let ue=G*Ne,pe=G*(Ne+1),D=ce+se+ue,Le=ce+xe+ue,De=ce+xe+pe,P=ce+se+pe;Se(D,Le,De,P)}}}function _e(ee,ce,X){c.push(ee),c.push(ce),c.push(X)}function Me(ee,ce,X){fe(ee),fe(ce),fe(X);let se=s.length/3,xe=b.generateTopUV(n,s,se-3,se-2,se-1);we(xe[0]),we(xe[1]),we(xe[2])}function Se(ee,ce,X,se){fe(ee),fe(ce),fe(se),fe(ce),fe(X),fe(se);let xe=s.length/3,Ne=b.generateSideWallUV(n,s,xe-6,xe-3,xe-2,xe-1);we(Ne[0]),we(Ne[1]),we(Ne[3]),we(Ne[1]),we(Ne[2]),we(Ne[3])}function fe(ee){s.push(c[ee*3+0]),s.push(c[ee*3+1]),s.push(c[ee*3+2])}function we(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return J_(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ch[s.type]().fromJSON(s)),new i(n,e.options)}},$_={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new Te(r,o),new Te(a,c),new Te(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Te(o,1-c),new Te(l,1-h),new Te(d,1-p),new Te(x,1-m)]:[new Te(a,1-c),new Te(u,1-h),new Te(f,1-p),new Te(g,1-m)]}};function J_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Rt=class i extends pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,f=[],p=[],x=[],g=[];for(let m=0;m<u;m++){let b=m*d-o;for(let M=0;M<l;M++){let _=M*h-r;p.push(_,-b,0),x.push(0,0,1),g.push(M/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let b=0;b<a;b++){let M=b+l*m,_=b+l*(m+1),S=b+1+l*(m+1),y=b+1+l*m;f.push(M,_,y),f.push(_,S,y)}this.setIndex(f),this.setAttribute("position",new Qe(p,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Yn=class i extends pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new O,d=new O,f=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let b=[],M=m/n,_=o+M*a,S=e*Math.cos(_),y=Math.sqrt(e*e-S*S),T=0;m===0&&o===0?T=.5/t:m===n&&c===Math.PI&&(T=-.5/t);for(let v=0;v<=t;v++){let w=v/t,R=s+w*r;h.x=-y*Math.cos(R),h.y=S,h.z=y*Math.sin(R),p.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),g.push(w+T,1-M),b.push(l++)}u.push(b)}for(let m=0;m<n;m++)for(let b=0;b<t;b++){let M=u[m][b+1],_=u[m][b],S=u[m+1][b],y=u[m+1][b+1];(m!==0||o>0)&&f.push(M,_,y),(m!==n-1||c<Math.PI)&&f.push(_,S,y)}this.setIndex(f),this.setAttribute("position",new Qe(p,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function cr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(mp(s))s.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(mp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Cn(i){let e={};for(let t=0;t<i.length;t++){let n=cr(i[t]);for(let s in n)e[s]=n[s]}return e}function mp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function j_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Bh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var dm={clone:cr,merge:Cn},Q_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ey=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends Rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Q_,this.fragmentShader=ey,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=j_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new me().setHex(s.value);break;case"v2":this.uniforms[n].value=new Te().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Tt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new rt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new $e().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},no=class extends Nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ai=class extends Rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Un=class extends Ai{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var qe=class extends Rn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=sl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xc=class extends Rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},qc=class extends Rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function _c(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ty(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function gp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function ny(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Ri=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Yc=class extends Ri{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ih,endingEnd:ih}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case sh:r=e,a=2*t-n;break;case rh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case sh:o=e,c=2*n-t;break;case rh:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,b=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,M=(-1-f)*g+(1.5+f)*x+.5*p,_=f*g-f*x;for(let S=0;S!==a;++S)r[S]=m*o[u+S]+b*o[l+S]+M*o[c+S]+_*o[h+S];return r}},Zc=class extends Ri{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}},Kc=class extends Ri{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},$c=class extends Ri{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(n-t)/(s-t),x=1-p;for(let g=0;g!==a;++g)r[g]=o[l+g]*x+o[c+g]*p;return r}let d=a*2,f=e-1;for(let p=0;p!==a;++p){let x=o[l+p],g=o[c+p],m=f*d+p*2,b=h[m],M=h[m+1],_=e*d+p*2,S=u[_],y=u[_+1],T=(n-t)/(s-t),v,w,R,A,C;for(let N=0;N<8;N++){v=T*T,w=v*T,R=1-T,A=R*R,C=A*R;let F=C*t+3*A*T*b+3*R*v*S+w*s-n;if(Math.abs(F)<1e-10)break;let k=3*A*(b-t)+6*R*T*(S-b)+3*v*(s-S);if(Math.abs(k)<1e-10)break;T=T-F/k,T=Math.max(0,Math.min(1,T))}r[p]=C*x+3*A*T*M+3*R*v*y+w*g}return r}},On=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_c(t,this.TimeBufferType),this.values=_c(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_c(e.times,Array),values:_c(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new $c(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case qs:t=this.InterpolantFactoryMethodDiscrete;break;case Ys:t=this.InterpolantFactoryMethodLinear;break;case bc:t=this.InterpolantFactoryMethodSmooth;break;case nh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return We("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return Ys;case this.InterpolantFactoryMethodSmooth:return bc;case this.InterpolantFactoryMethodBezier:return nh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(et("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(et("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){et("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){et("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Gx(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){et("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===bc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{let h=a*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){let x=t[h+p];if(x!==t[d+p]||x!==t[f+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Ys;var Zi=class extends On{constructor(e,t,n){super(e,t,n)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=qs;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var ra=class extends On{constructor(e,t,n,s){super(e,t,n,s)}};ra.prototype.ValueTypeName="color";var Ki=class extends On{constructor(e,t,n,s){super(e,t,n,s)}};Ki.prototype.ValueTypeName="number";var Jc=class extends Ri{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let u=l+a;l!==u;l+=4)Nt.slerpFlat(r,0,o,l-a,o,l,c);return r}},$i=class extends On{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Jc(this.times,this.values,this.getValueSize(),e)}};$i.prototype.ValueTypeName="quaternion";$i.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends On{constructor(e,t,n){super(e,t,n)}};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=qs;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends On{constructor(e,t,n,s){super(e,t,n,s)}};xs.prototype.ValueTypeName="vector";var oa=class{constructor(e="",t=-1,n=[],s=Yp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ti(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(sy(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(On.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let u=ty(c);c=gp(c,1,u),l=gp(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ki(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function iy(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ki;case"vector":case"vector2":case"vector3":case"vector4":return xs;case"color":return ra;case"quaternion":return $i;case"bool":case"boolean":return Zi;case"string":return Ji}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function sy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=iy(i.type);if(i.times===void 0){let t=[],n=[];ny(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Si={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(xp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!xp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function xp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var jc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],p=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},fm=new jc,fi=class{constructor(e){this.manager=e!==void 0?e:fm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};fi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vi={},dh=class extends Error{constructor(e,t){super(e),this.response=t}},nr=class extends fi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Si.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Vi[e]!==void 0){Vi[e].push({onLoad:t,onProgress:n,onError:s});return}Vi[e]=[],Vi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&We("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Vi[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,x=0,g=new ReadableStream({start(m){b();function b(){h.read().then(({done:M,value:_})=>{if(M)m.close();else{x+=_.byteLength;let S=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let y=0,T=u.length;y<T;y++){let v=u[y];v.onProgress&&v.onProgress(S)}m.enqueue(_),b()}},M=>{m.error(M)})}}});return new Response(g)}else throw new dh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{Si.add(`file:${e}`,l);let u=Vi[e];delete Vi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{let u=Vi[e];if(u===void 0)throw this.manager.itemError(e),l;delete Vi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var zr=new WeakMap,Qc=class extends fi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Si.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=zr.get(o);h===void 0&&(h=[],zr.set(o,h)),h.push({onLoad:t,onError:s})}return o}let a=Xr("img");function c(){u(),t&&t(this);let h=zr.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}zr.delete(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),Si.remove(`image:${e}`);let d=zr.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(h)}zr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Si.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var pi=class extends fi{constructor(e){super(e)}load(e,t,n,s){let r=new rn,o=new Qc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},_s=class extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new me(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},aa=class extends _s{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ju=new $e,_p=new O,yp=new O,ca=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jr,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;_p.setFromMatrixPosition(e.matrixWorld),t.position.copy(_p),yp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yp),t.updateMatrixWorld(),ju.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ju,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Wr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ju)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},yc=new O,vc=new Nt,Mi=new O,ir=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yc,vc,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yc,vc,Mi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(yc,vc,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yc,vc,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},us=new O,vp=new Te,Mp=new Te,sn=class extends ir{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Do*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(Do*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,t){return this.getViewBounds(e,vp,Mp),t.subVectors(Mp,vp)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Do*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},fh=class extends ca{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Zs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},la=class extends _s{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new fh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},ph=class extends ca{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0}},mi=class extends _s{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ph}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ys=class extends ir{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},mh=class extends ca{constructor(){super(new ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},sr=class extends _s{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new mh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ua=class extends _s{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ji=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Qu=new WeakMap,ha=class extends fi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&We("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&We("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Si.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{Qu.has(o)===!0?(s&&s(Qu.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Si.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),Qu.set(c,l),Si.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Si.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Mc,rr=class{static getContext(){return Mc===void 0&&(Mc=new(window.AudioContext||window.webkitAudioContext)),Mc}static setContext(e){Mc=e}},da=class extends fi{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new nr(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{let l=c.slice(0),u=rr.getContext(),h=e+"#decode";r.manager.itemStart(h),u.decodeAudioData(l,function(d){t(d),r.manager.itemEnd(h)}).catch(function(d){a(d),r.manager.itemEnd(h)})}catch(l){a(l)}},n,s);function a(c){s?s(c):et(c),r.manager.itemError(e)}}};var Hr=-90,kr=1,el=class extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new sn(Hr,kr,e,t);s.layers=this.layers,this.add(s);let r=new sn(Hr,kr,e,t);r.layers=this.layers,this.add(r);let o=new sn(Hr,kr,e,t);o.layers=this.layers,this.add(o);let a=new sn(Hr,kr,e,t);a.layers=this.layers,this.add(a);let c=new sn(Hr,kr,e,t);c.layers=this.layers,this.add(c);let l=new sn(Hr,kr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},tl=class extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},nl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=ry.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function ry(){this._document.hidden===!1&&this.reset()}var Us=new O,eh=new Nt,oy=new O,Os=new O,Bs=new O,fa=class extends Dt{constructor(){super(),this.type="AudioListener",this.context=rr.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new nl}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();let t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Us,eh,oy),Os.set(0,0,-1).applyQuaternion(eh),Bs.set(0,1,0).applyQuaternion(eh),t.positionX){let n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Us.x,n),t.positionY.linearRampToValueAtTime(Us.y,n),t.positionZ.linearRampToValueAtTime(Us.z,n),t.forwardX.linearRampToValueAtTime(Os.x,n),t.forwardY.linearRampToValueAtTime(Os.y,n),t.forwardZ.linearRampToValueAtTime(Os.z,n),t.upX.linearRampToValueAtTime(Bs.x,n),t.upY.linearRampToValueAtTime(Bs.y,n),t.upZ.linearRampToValueAtTime(Bs.z,n)}else t.setPosition(Us.x,Us.y,Us.z),t.setOrientation(Os.x,Os.y,Os.z,Bs.x,Bs.y,Bs.z)}},il=class extends Dt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){We("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){We("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){We("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){We("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){We("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(We("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){We("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(We("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}},zs=new O,bp=new Nt,ay=new O,Hs=new O,pa=class extends il{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(zs,bp,ay),Hs.set(0,0,1).applyQuaternion(bp);let t=this.panner;if(t.positionX){let n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(zs.x,n),t.positionY.linearRampToValueAtTime(zs.y,n),t.positionZ.linearRampToValueAtTime(zs.z,n),t.orientationX.linearRampToValueAtTime(Hs.x,n),t.orientationY.linearRampToValueAtTime(Hs.y,n),t.orientationZ.linearRampToValueAtTime(Hs.z,n)}else t.setPosition(zs.x,zs.y,zs.z),t.setOrientation(Hs.x,Hs.y,Hs.z)}};var zh="\\[\\]\\.:\\/",cy=new RegExp("["+zh+"]","g"),Hh="[^"+zh+"]",ly="[^"+zh.replace("\\.","")+"]",uy=/((?:WC+[\/:])*)/.source.replace("WC",Hh),hy=/(WCOD+)?/.source.replace("WCOD",ly),dy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hh),fy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hh),py=new RegExp("^"+uy+hy+dy+fy+"$"),my=["material","materials","bones","map"],gh=class{constructor(e,t,n){let s=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Lt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cy,"")}static parseTrackName(e){let t=py.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);my.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;et("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=gh;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var DR=new Float32Array(1);var xh=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function kh(i,e,t,n){let s=gy(n);switch(t){case Lh:return i*e;case hl:return i*e/s.components*s.byteLength;case dl:return i*e/s.components*s.byteLength;case bs:return i*e*2/s.components*s.byteLength;case fl:return i*e*2/s.components*s.byteLength;case Nh:return i*e*3/s.components*s.byteLength;case Kn:return i*e*4/s.components*s.byteLength;case pl:return i*e*4/s.components*s.byteLength;case _a:case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case va:case Ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gl:case _l:return Math.max(i,16)*Math.max(e,8)/4;case ml:case xl:return Math.max(i,8)*Math.max(e,8)/2;case yl:case vl:case bl:case Sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ml:case ba:case El:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Al:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Il:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ll:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ol:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Bl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case zl:case Hl:case kl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Gl:case Vl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Sa:case Wl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gy(i){switch(i){case Bn:case Rh:return{byteLength:1,components:1};case ro:case Ch:case Ii:return{byteLength:2,components:1};case ll:case ul:return{byteLength:2,components:4};case _i:case cl:case Zn:return{byteLength:4,components:1};case Ih:case Ph:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Um(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function _y(i){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],x=h[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let x=h[f];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var yy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vy=`#ifdef USE_ALPHAHASH
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
#endif`,My=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,by=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ey=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ty=`#ifdef USE_AOMAP
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
#endif`,wy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ay=`#ifdef USE_BATCHING
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
#endif`,Ry=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Iy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Py=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ly=`#ifdef USE_IRIDESCENCE
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
#endif`,Ny=`#ifdef USE_BUMPMAP
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
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Oy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,By=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ky=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Gy=`#define PI 3.141592653589793
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
} // validated`,Vy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wy=`vec3 transformedNormal = objectNormal;
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
#endif`,Xy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ky="gl_FragColor = linearToOutputTexel( gl_FragColor );",$y=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jy=`#ifdef USE_ENVMAP
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
#endif`,jy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qy=`#ifdef USE_ENVMAP
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
#endif`,ev=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tv=`#ifdef USE_ENVMAP
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
#endif`,nv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ov=`#ifdef USE_GRADIENTMAP
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
}`,av=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,hv=`#ifdef USE_ENVMAP
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
#endif`,dv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gv=`PhysicalMaterial material;
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
#endif`,xv=`uniform sampler2D dfgLUT;
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
}`,_v=`
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
#endif`,yv=`#if defined( RE_IndirectDiffuse )
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
#endif`,vv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,bv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ev=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Av=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cv=`#if defined( USE_POINTS_UV )
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
#endif`,Iv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fv=`#ifdef USE_MORPHTARGETS
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
#endif`,Uv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ov=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Gv=`#ifdef USE_NORMALMAP
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
#endif`,Vv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$v=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sM=`float getShadowMask() {
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
}`,rM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oM=`#ifdef USE_SKINNING
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
#endif`,aM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cM=`#ifdef USE_SKINNING
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
#endif`,lM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fM=`#ifdef USE_TRANSMISSION
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
#endif`,pM=`#ifdef USE_TRANSMISSION
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
#endif`,mM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_M=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vM=`uniform sampler2D t2D;
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
}`,MM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,SM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TM=`#include <common>
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
}`,wM=`#if DEPTH_PACKING == 3200
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
}`,AM=`#define DISTANCE
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
}`,RM=`#define DISTANCE
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
}`,CM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PM=`uniform float scale;
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
}`,LM=`uniform vec3 diffuse;
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
}`,NM=`#include <common>
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
}`,DM=`uniform vec3 diffuse;
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
}`,FM=`#define LAMBERT
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
}`,UM=`#define LAMBERT
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
}`,OM=`#define MATCAP
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
}`,BM=`#define MATCAP
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
}`,zM=`#define NORMAL
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
}`,HM=`#define NORMAL
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
}`,kM=`#define PHONG
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
}`,GM=`#define PHONG
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
}`,VM=`#define STANDARD
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
}`,WM=`#define STANDARD
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
}`,XM=`#define TOON
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
}`,qM=`#define TOON
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
}`,YM=`uniform float size;
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
}`,ZM=`uniform vec3 diffuse;
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
}`,KM=`#include <common>
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
}`,$M=`uniform vec3 color;
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
}`,JM=`uniform float rotation;
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
}`,jM=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:yy,alphahash_pars_fragment:vy,alphamap_fragment:My,alphamap_pars_fragment:by,alphatest_fragment:Sy,alphatest_pars_fragment:Ey,aomap_fragment:Ty,aomap_pars_fragment:wy,batching_pars_vertex:Ay,batching_vertex:Ry,begin_vertex:Cy,beginnormal_vertex:Iy,bsdfs:Py,iridescence_fragment:Ly,bumpmap_pars_fragment:Ny,clipping_planes_fragment:Dy,clipping_planes_pars_fragment:Fy,clipping_planes_pars_vertex:Uy,clipping_planes_vertex:Oy,color_fragment:By,color_pars_fragment:zy,color_pars_vertex:Hy,color_vertex:ky,common:Gy,cube_uv_reflection_fragment:Vy,defaultnormal_vertex:Wy,displacementmap_pars_vertex:Xy,displacementmap_vertex:qy,emissivemap_fragment:Yy,emissivemap_pars_fragment:Zy,colorspace_fragment:Ky,colorspace_pars_fragment:$y,envmap_fragment:Jy,envmap_common_pars_fragment:jy,envmap_pars_fragment:Qy,envmap_pars_vertex:ev,envmap_physical_pars_fragment:hv,envmap_vertex:tv,fog_vertex:nv,fog_pars_vertex:iv,fog_fragment:sv,fog_pars_fragment:rv,gradientmap_pars_fragment:ov,lightmap_pars_fragment:av,lights_lambert_fragment:cv,lights_lambert_pars_fragment:lv,lights_pars_begin:uv,lights_toon_fragment:dv,lights_toon_pars_fragment:fv,lights_phong_fragment:pv,lights_phong_pars_fragment:mv,lights_physical_fragment:gv,lights_physical_pars_fragment:xv,lights_fragment_begin:_v,lights_fragment_maps:yv,lights_fragment_end:vv,lightprobes_pars_fragment:Mv,logdepthbuf_fragment:bv,logdepthbuf_pars_fragment:Sv,logdepthbuf_pars_vertex:Ev,logdepthbuf_vertex:Tv,map_fragment:wv,map_pars_fragment:Av,map_particle_fragment:Rv,map_particle_pars_fragment:Cv,metalnessmap_fragment:Iv,metalnessmap_pars_fragment:Pv,morphinstance_vertex:Lv,morphcolor_vertex:Nv,morphnormal_vertex:Dv,morphtarget_pars_vertex:Fv,morphtarget_vertex:Uv,normal_fragment_begin:Ov,normal_fragment_maps:Bv,normal_pars_fragment:zv,normal_pars_vertex:Hv,normal_vertex:kv,normalmap_pars_fragment:Gv,clearcoat_normal_fragment_begin:Vv,clearcoat_normal_fragment_maps:Wv,clearcoat_pars_fragment:Xv,iridescence_pars_fragment:qv,opaque_fragment:Yv,packing:Zv,premultiplied_alpha_fragment:Kv,project_vertex:$v,dithering_fragment:Jv,dithering_pars_fragment:jv,roughnessmap_fragment:Qv,roughnessmap_pars_fragment:eM,shadowmap_pars_fragment:tM,shadowmap_pars_vertex:nM,shadowmap_vertex:iM,shadowmask_pars_fragment:sM,skinbase_vertex:rM,skinning_pars_vertex:oM,skinning_vertex:aM,skinnormal_vertex:cM,specularmap_fragment:lM,specularmap_pars_fragment:uM,tonemapping_fragment:hM,tonemapping_pars_fragment:dM,transmission_fragment:fM,transmission_pars_fragment:pM,uv_pars_fragment:mM,uv_pars_vertex:gM,uv_vertex:xM,worldpos_vertex:_M,background_vert:yM,background_frag:vM,backgroundCube_vert:MM,backgroundCube_frag:bM,cube_vert:SM,cube_frag:EM,depth_vert:TM,depth_frag:wM,distance_vert:AM,distance_frag:RM,equirect_vert:CM,equirect_frag:IM,linedashed_vert:PM,linedashed_frag:LM,meshbasic_vert:NM,meshbasic_frag:DM,meshlambert_vert:FM,meshlambert_frag:UM,meshmatcap_vert:OM,meshmatcap_frag:BM,meshnormal_vert:zM,meshnormal_frag:HM,meshphong_vert:kM,meshphong_frag:GM,meshphysical_vert:VM,meshphysical_frag:WM,meshtoon_vert:XM,meshtoon_frag:qM,points_vert:YM,points_frag:ZM,shadow_vert:KM,shadow_frag:$M,sprite_vert:JM,sprite_frag:jM},ze={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Li={basic:{uniforms:Cn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Cn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new me(0)},envMapIntensity:{value:1}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Cn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Cn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Cn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new me(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Cn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Cn([ze.points,ze.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Cn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Cn([ze.common,ze.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Cn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Cn([ze.sprite,ze.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distance:{uniforms:Cn([ze.common,ze.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distance_vert,fragmentShader:lt.distance_frag},shadow:{uniforms:Cn([ze.lights,ze.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Li.physical={uniforms:Cn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var Yl={r:0,b:0,g:0},QM=new $e,Om=new rt;Om.set(-1,0,0,0,1,0,0,0,1);function eb(i,e,t,n,s,r){let o=new me(0),a=s===!0?0:1,c,l,u=null,h=0,d=null;function f(b){let M=b.isScene===!0?b.background:null;if(M&&M.isTexture){let _=b.backgroundBlurriness>0;M=e.get(M,_)}return M}function p(b){let M=!1,_=f(b);_===null?g(o,a):_&&_.isColor&&(g(_,1),M=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(b,M){let _=f(M);_&&(_.isCubeTexture||_.mapping===xa)?(l===void 0&&(l=new Oe(new Ze(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:cr(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,y,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(QM.makeRotationFromEuler(M.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Om),l.material.toneMapped=ht.getTransfer(_.colorSpace)!==bt,(u!==_||h!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,h=_.version,d=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Oe(new Rt(2,2),new Nn({name:"BackgroundMaterial",uniforms:cr(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ht.getTransfer(_.colorSpace)!==bt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||h!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,h=_.version,d=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function g(b,M){b.getRGB(Yl,Bh(i)),t.buffers.color.setClear(Yl.r,Yl.g,Yl.b,M,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),a=M,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,g(o,a)},render:p,addToRenderList:x,dispose:m}}function tb(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(A,C,N,z,F){let k=!1,G=h(A,z,N,C);r!==G&&(r=G,l(r.object)),k=f(A,z,N,F),k&&p(A,z,N,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,_(A,C,N,z),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return i.createVertexArray()}function l(A){return i.bindVertexArray(A)}function u(A){return i.deleteVertexArray(A)}function h(A,C,N,z){let F=z.wireframe===!0,k=n[C.id];k===void 0&&(k={},n[C.id]=k);let G=A.isInstancedMesh===!0?A.id:0,J=k[G];J===void 0&&(J={},k[G]=J);let oe=J[N.id];oe===void 0&&(oe={},J[N.id]=oe);let de=oe[F];return de===void 0&&(de=d(c()),oe[F]=de),de}function d(A){let C=[],N=[],z=[];for(let F=0;F<t;F++)C[F]=0,N[F]=0,z[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:z,object:A,attributes:{},index:null}}function f(A,C,N,z){let F=r.attributes,k=C.attributes,G=0,J=N.getAttributes();for(let oe in J)if(J[oe].location>=0){let V=F[oe],K=k[oe];if(K===void 0&&(oe==="instanceMatrix"&&A.instanceMatrix&&(K=A.instanceMatrix),oe==="instanceColor"&&A.instanceColor&&(K=A.instanceColor)),V===void 0||V.attribute!==K||K&&V.data!==K.data)return!0;G++}return r.attributesNum!==G||r.index!==z}function p(A,C,N,z){let F={},k=C.attributes,G=0,J=N.getAttributes();for(let oe in J)if(J[oe].location>=0){let V=k[oe];V===void 0&&(oe==="instanceMatrix"&&A.instanceMatrix&&(V=A.instanceMatrix),oe==="instanceColor"&&A.instanceColor&&(V=A.instanceColor));let K={};K.attribute=V,V&&V.data&&(K.data=V.data),F[oe]=K,G++}r.attributes=F,r.attributesNum=G,r.index=z}function x(){let A=r.newAttributes;for(let C=0,N=A.length;C<N;C++)A[C]=0}function g(A){m(A,0)}function m(A,C){let N=r.newAttributes,z=r.enabledAttributes,F=r.attributeDivisors;N[A]=1,z[A]===0&&(i.enableVertexAttribArray(A),z[A]=1),F[A]!==C&&(i.vertexAttribDivisor(A,C),F[A]=C)}function b(){let A=r.newAttributes,C=r.enabledAttributes;for(let N=0,z=C.length;N<z;N++)C[N]!==A[N]&&(i.disableVertexAttribArray(N),C[N]=0)}function M(A,C,N,z,F,k,G){G===!0?i.vertexAttribIPointer(A,C,N,F,k):i.vertexAttribPointer(A,C,N,z,F,k)}function _(A,C,N,z){x();let F=z.attributes,k=N.getAttributes(),G=C.defaultAttributeValues;for(let J in k){let oe=k[J];if(oe.location>=0){let de=F[J];if(de===void 0&&(J==="instanceMatrix"&&A.instanceMatrix&&(de=A.instanceMatrix),J==="instanceColor"&&A.instanceColor&&(de=A.instanceColor)),de!==void 0){let V=de.normalized,K=de.itemSize,he=e.get(de);if(he===void 0)continue;let ge=he.buffer,be=he.type,Z=he.bytesPerElement,te=be===i.INT||be===i.UNSIGNED_INT||de.gpuType===cl;if(de.isInterleavedBufferAttribute){let $=de.data,_e=$.stride,Me=de.offset;if($.isInstancedInterleavedBuffer){for(let Se=0;Se<oe.locationSize;Se++)m(oe.location+Se,$.meshPerAttribute);A.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Se=0;Se<oe.locationSize;Se++)g(oe.location+Se);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let Se=0;Se<oe.locationSize;Se++)M(oe.location+Se,K/oe.locationSize,be,V,_e*Z,(Me+K/oe.locationSize*Se)*Z,te)}else{if(de.isInstancedBufferAttribute){for(let $=0;$<oe.locationSize;$++)m(oe.location+$,de.meshPerAttribute);A.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let $=0;$<oe.locationSize;$++)g(oe.location+$);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let $=0;$<oe.locationSize;$++)M(oe.location+$,K/oe.locationSize,be,V,K*Z,K/oe.locationSize*$*Z,te)}}else if(G!==void 0){let V=G[J];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(oe.location,V);break;case 3:i.vertexAttrib3fv(oe.location,V);break;case 4:i.vertexAttrib4fv(oe.location,V);break;default:i.vertexAttrib1fv(oe.location,V)}}}}b()}function S(){w();for(let A in n){let C=n[A];for(let N in C){let z=C[N];for(let F in z){let k=z[F];for(let G in k)u(k[G].object),delete k[G];delete z[F]}}delete n[A]}}function y(A){if(n[A.id]===void 0)return;let C=n[A.id];for(let N in C){let z=C[N];for(let F in z){let k=z[F];for(let G in k)u(k[G].object),delete k[G];delete z[F]}}delete n[A.id]}function T(A){for(let C in n){let N=n[C];for(let z in N){let F=N[z];if(F[A.id]===void 0)continue;let k=F[A.id];for(let G in k)u(k[G].object),delete k[G];delete F[A.id]}}}function v(A){for(let C in n){let N=n[C],z=A.isInstancedMesh===!0?A.id:0,F=N[z];if(F!==void 0){for(let k in F){let G=F[k];for(let J in G)u(G[J].object),delete G[J];delete F[k]}delete N[z],Object.keys(N).length===0&&delete n[C]}}}function w(){R(),o=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:y,releaseStatesOfObject:v,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function nb(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let d=0;for(let f=0;f<u;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ib(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Kn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let v=T===Ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Bn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Zn&&!v)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(We("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:_,maxSamples:S,samples:y}}function sb(i){let e=this,t=null,n=0,s=!1,r=!1,o=new bi,a=new rt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!s||p===null||p.length===0||r&&!g)r?u(null):l();else{let b=r?0:n,M=b*4,_=m.clippingState||null;c.value=_,_=u(p,d,M,f);for(let S=0;S!==M;++S)_[S]=t[S];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=c.value,p!==!0||g===null){let m=f+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,_=f;M!==x;++M,_+=4)o.copy(h[M]).applyMatrix4(b,a),o.normal.toArray(g,_),g[_+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var Ss=4,pm=[.125,.215,.35,.446,.526,.582],lr=20,rb=256,wa=new ys,mm=new me,Gh=null,Vh=0,Wh=0,Xh=!1,ob=new O,Kl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=ob}=r;Gh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_m(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Gh,Vh,Wh),this._renderer.xr.enabled=Xh,e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vs||e.mapping===or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Ii,format:Kn,colorSpace:Ln,depthBuffer:!1},s=gm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gm(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ab(r)),this._blurMaterial=lb(r,e,t),this._ggxMaterial=cb(r,e,t)}return s}_compileMaterial(e){let t=new Oe(new pt,e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,n,s,r){let c=new sn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(mm),h.toneMapping=gi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oe(new Ze,new yn({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,b=e.background;b?b.isColor&&(g.color.copy(b),e.background=null,m=!0):(g.color.copy(mm),m=!0);for(let M=0;M<6;M++){let _=M%3;_===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[M],r.y,r.z)):_===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[M]));let S=this._cubeSize;co(s,_*S,M>2?S:0,S,S),h.setRenderTarget(s),m&&h.render(x,c),h.render(e,c)}h.toneMapping=f,h.autoClear=d,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===vs||e.mapping===or;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_m()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;co(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,wa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=0+l*1.25,f=h*d,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-Ss?n-p+Ss:0),m=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=p-t,co(r,g,m,3*x,2*x),s.setRenderTarget(r),s.render(a,wa),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,co(e,g,m,3*x,2*x),s.setRenderTarget(e),s.render(a,wa)}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");let u=3,h=this._lodMeshes[s];h.material=l;let d=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*lr-1),x=r/p,g=isFinite(r)?1+Math.floor(u*x):lr;g>lr&&We(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${lr}`);let m=[],b=0;for(let T=0;T<lr;++T){let v=T/x,w=Math.exp(-v*v/2);m.push(w),T===0?b+=w:T<g&&(b+=2*w)}for(let T=0;T<m.length;T++)m[T]=m[T]/b;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=p,d.mipInt.value=M-n;let _=this._sizeLods[s],S=3*_*(s>M-Ss?s-M+Ss:0),y=4*(this._cubeSize-_);co(t,S,y,3*_,2*_),c.setRenderTarget(t),c.render(h,wa)}};function ab(i){let e=[],t=[],n=[],s=i,r=i-Ss+1+pm.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ss?c=pm[o-i+Ss-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,x=3,g=2,m=1,b=new Float32Array(x*p*f),M=new Float32Array(g*p*f),_=new Float32Array(m*p*f);for(let y=0;y<f;y++){let T=y%3*2/3-1,v=y>2?0:-1,w=[T,v,0,T+2/3,v,0,T+2/3,v+1,0,T,v,0,T+2/3,v+1,0,T,v+1,0];b.set(w,x*p*y),M.set(d,g*p*y);let R=[y,y,y,y,y,y];_.set(R,m*p*y)}let S=new pt;S.setAttribute("position",new Ut(b,x)),S.setAttribute("uv",new Ut(M,g)),S.setAttribute("faceIndex",new Ut(_,m)),n.push(new Oe(S,null)),s>Ss&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function gm(i,e,t){let n=new Xn(i,e,t);return n.texture.mapping=xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function co(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function cb(i,e,t){return new Nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jl(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function lb(i,e,t){let n=new Float32Array(lr),s=new O(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jl(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function xm(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jl(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function _m(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function jl(){return`

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
	`}var $l=class extends Xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Zo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ze(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:Ci});r.uniforms.tEquirect.value=t;let o=new Oe(s,r),a=t.minFilter;return t.minFilter===xi&&(t.minFilter=Yt),new el(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function ub(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===rl||f===ol)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new $l(p.height);return x.fromEquirectangularTexture(i,d),e.set(d,x),d.addEventListener("dispose",l),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,p=f===rl||f===ol,x=f===vs||f===or;if(p||x){let g=t.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Kl(i)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let b=d.image;return p&&b&&b.height>0||x&&b&&c(b)?(n===null&&(n=new Kl(i)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function a(d,f){return f===rl?d.mapping=vs:f===ol&&(d.mapping=or),d}function c(d){let f=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function l(d){let f=d.target;f.removeEventListener("dispose",l);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function hb(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Vs("WebGLRenderer: "+n+" extension not supported."),s}}}function db(i,e,t,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(h){let d=[],f=h.index,p=h.attributes.position,x=0;if(p===void 0)return;if(f!==null){let b=f.array;x=f.version;for(let M=0,_=b.length;M<_;M+=3){let S=b[M+0],y=b[M+1],T=b[M+2];d.push(S,y,y,T,T,S)}}else{let b=p.array;x=p.version;for(let M=0,_=b.length/3-1;M<_;M+=3){let S=M+0,y=M+1,T=M+2;d.push(S,y,y,T,T,S)}}let g=new(p.count>=65535?Wo:Vo)(d,1);g.version=x;let m=r.get(h);m&&e.remove(m),r.set(h,g)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function fb(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,d){i.drawElements(n,d,r,h*o),t.update(d,n,1)}function l(h,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,h*o,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,f);let x=0;for(let g=0;g<f;g++)x+=d[g];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function pb(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:et("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function mb(i,e,t){let n=new WeakMap,s=new Tt;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let w=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],M=0;f===!0&&(M=1),p===!0&&(M=2),x===!0&&(M=3);let _=a.attributes.position.count*M,S=1;_>e.maxTextureSize&&(S=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let y=new Float32Array(_*S*4*h),T=new Ho(y,_,S,h);T.type=Zn,T.needsUpdate=!0;let v=M*4;for(let R=0;R<h;R++){let A=g[R],C=m[R],N=b[R],z=_*S*4*R;for(let F=0;F<A.count;F++){let k=F*v;f===!0&&(s.fromBufferAttribute(A,F),y[z+k+0]=s.x,y[z+k+1]=s.y,y[z+k+2]=s.z,y[z+k+3]=0),p===!0&&(s.fromBufferAttribute(C,F),y[z+k+4]=s.x,y[z+k+5]=s.y,y[z+k+6]=s.z,y[z+k+7]=0),x===!0&&(s.fromBufferAttribute(N,F),y[z+k+8]=s.x,y[z+k+9]=s.y,y[z+k+10]=s.z,y[z+k+11]=N.itemSize===4?s.w:1)}}d={count:h,texture:T,size:new Te(_,S)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let p=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function gb(i,e,t,n,s){let r=new WeakMap;function o(l){let u=s.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var xb={[Mh]:"LINEAR_TONE_MAPPING",[bh]:"REINHARD_TONE_MAPPING",[Sh]:"CINEON_TONE_MAPPING",[ga]:"ACES_FILMIC_TONE_MAPPING",[Th]:"AGX_TONE_MAPPING",[wh]:"NEUTRAL_TONE_MAPPING",[Eh]:"CUSTOM_TONE_MAPPING"};function _b(i,e,t,n,s,r){let o=new Xn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Yi(e,t):void 0}),a=new Xn(e,t,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),c=new pt;c.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Qe([0,2,0,0,2,0],2));let l=new no({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Oe(c,l),h=new ys(-1,1,1,-1,0,1),d=null,f=null,p=!1,x,g=null,m=[],b=!1;this.setSize=function(M,_){o.setSize(M,_),a.setSize(M,_);for(let S=0;S<m.length;S++){let y=m[S];y.setSize&&y.setSize(M,_)}},this.setEffects=function(M){m=M,b=m.length>0&&m[0].isRenderPass===!0;let _=o.width,S=o.height;for(let y=0;y<m.length;y++){let T=m[y];T.setSize&&T.setSize(_,S)}},this.begin=function(M,_){if(p||M.toneMapping===gi&&m.length===0)return!1;if(g=_,_!==null){let S=_.width,y=_.height;(o.width!==S||o.height!==y)&&this.setSize(S,y)}return b===!1&&M.setRenderTarget(o),x=M.toneMapping,M.toneMapping=gi,!0},this.hasRenderPass=function(){return b},this.end=function(M,_){M.toneMapping=x,p=!0;let S=o,y=a;for(let T=0;T<m.length;T++){let v=m[T];if(v.enabled!==!1&&(v.render(M,y,S,_),v.needsSwap!==!1)){let w=S;S=y,y=w}}if(d!==M.outputColorSpace||f!==M.toneMapping){d=M.outputColorSpace,f=M.toneMapping,l.defines={},ht.getTransfer(d)===bt&&(l.defines.SRGB_TRANSFER="");let T=xb[f];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,M.setRenderTarget(g),M.render(u,h),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}var Bm=new rn,Zh=new Yi(1,1),zm=new Ho,Hm=new Fc,km=new Zo,ym=[],vm=[],Mm=new Float32Array(16),bm=new Float32Array(9),Sm=new Float32Array(4);function uo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ym[s];if(r===void 0&&(r=new Float32Array(s),ym[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function ln(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function un(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ql(i,e){let t=vm[e];t===void 0&&(t=new Int32Array(e),vm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function yb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function vb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;i.uniform2fv(this.addr,e),un(t,e)}}function Mb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;i.uniform3fv(this.addr,e),un(t,e)}}function bb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;i.uniform4fv(this.addr,e),un(t,e)}}function Sb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(ln(t,n))return;Sm.set(n),i.uniformMatrix2fv(this.addr,!1,Sm),un(t,n)}}function Eb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(ln(t,n))return;bm.set(n),i.uniformMatrix3fv(this.addr,!1,bm),un(t,n)}}function Tb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(ln(t,n))return;Mm.set(n),i.uniformMatrix4fv(this.addr,!1,Mm),un(t,n)}}function wb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ab(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;i.uniform2iv(this.addr,e),un(t,e)}}function Rb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;i.uniform3iv(this.addr,e),un(t,e)}}function Cb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;i.uniform4iv(this.addr,e),un(t,e)}}function Ib(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Pb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;i.uniform2uiv(this.addr,e),un(t,e)}}function Lb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;i.uniform3uiv(this.addr,e),un(t,e)}}function Nb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;i.uniform4uiv(this.addr,e),un(t,e)}}function Db(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Zh.compareFunction=t.isReversedDepthBuffer()?ql:Xl,r=Zh):r=Bm,t.setTexture2D(e||r,s)}function Fb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Hm,s)}function Ub(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||km,s)}function Ob(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||zm,s)}function Bb(i){switch(i){case 5126:return yb;case 35664:return vb;case 35665:return Mb;case 35666:return bb;case 35674:return Sb;case 35675:return Eb;case 35676:return Tb;case 5124:case 35670:return wb;case 35667:case 35671:return Ab;case 35668:case 35672:return Rb;case 35669:case 35673:return Cb;case 5125:return Ib;case 36294:return Pb;case 36295:return Lb;case 36296:return Nb;case 35678:case 36198:case 36298:case 36306:case 35682:return Db;case 35679:case 36299:case 36307:return Fb;case 35680:case 36300:case 36308:case 36293:return Ub;case 36289:case 36303:case 36311:case 36292:return Ob}}function zb(i,e){i.uniform1fv(this.addr,e)}function Hb(i,e){let t=uo(e,this.size,2);i.uniform2fv(this.addr,t)}function kb(i,e){let t=uo(e,this.size,3);i.uniform3fv(this.addr,t)}function Gb(i,e){let t=uo(e,this.size,4);i.uniform4fv(this.addr,t)}function Vb(i,e){let t=uo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Wb(i,e){let t=uo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Xb(i,e){let t=uo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function qb(i,e){i.uniform1iv(this.addr,e)}function Yb(i,e){i.uniform2iv(this.addr,e)}function Zb(i,e){i.uniform3iv(this.addr,e)}function Kb(i,e){i.uniform4iv(this.addr,e)}function $b(i,e){i.uniform1uiv(this.addr,e)}function Jb(i,e){i.uniform2uiv(this.addr,e)}function jb(i,e){i.uniform3uiv(this.addr,e)}function Qb(i,e){i.uniform4uiv(this.addr,e)}function eS(i,e,t){let n=this.cache,s=e.length,r=Ql(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),un(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Zh:o=Bm;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function tS(i,e,t){let n=this.cache,s=e.length,r=Ql(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Hm,r[o])}function nS(i,e,t){let n=this.cache,s=e.length,r=Ql(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||km,r[o])}function iS(i,e,t){let n=this.cache,s=e.length,r=Ql(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||zm,r[o])}function sS(i){switch(i){case 5126:return zb;case 35664:return Hb;case 35665:return kb;case 35666:return Gb;case 35674:return Vb;case 35675:return Wb;case 35676:return Xb;case 5124:case 35670:return qb;case 35667:case 35671:return Yb;case 35668:case 35672:return Zb;case 35669:case 35673:return Kb;case 5125:return $b;case 36294:return Jb;case 36295:return jb;case 36296:return Qb;case 35678:case 36198:case 36298:case 36306:case 35682:return eS;case 35679:case 36299:case 36307:return tS;case 35680:case 36300:case 36308:case 36293:return nS;case 36289:case 36303:case 36311:case 36292:return iS}}var Kh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Bb(t.type)}},$h=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sS(t.type)}},Jh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},qh=/(\w+)(\])?(\[|\.)?/g;function Em(i,e){i.seq.push(e),i.map[e.id]=e}function rS(i,e,t){let n=i.name,s=n.length;for(qh.lastIndex=0;;){let r=qh.exec(n),o=qh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Em(t,l===void 0?new Kh(a,i,e):new $h(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Jh(a),Em(t,h)),t=h}}}var lo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);rS(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Tm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var oS=37297,aS=0;function cS(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var wm=new rt;function lS(i){ht._getMatrix(wm,ht.workingColorSpace,i);let e=`mat3( ${wm.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case Bo:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Am(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+cS(i.getShaderSource(e),a)}else return r}function uS(i,e){let t=lS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var hS={[Mh]:"Linear",[bh]:"Reinhard",[Sh]:"Cineon",[ga]:"ACESFilmic",[Th]:"AgX",[wh]:"Neutral",[Eh]:"Custom"};function dS(i,e){let t=hS[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Zl=new O;function fS(){ht.getLuminanceCoefficients(Zl);let i=Zl.x.toFixed(4),e=Zl.y.toFixed(4),t=Zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ra).join(`
`)}function mS(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gS(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ra(i){return i!==""}function Rm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var xS=/^[ \t]*#include +<([\w\d./]+)>/gm;function jh(i){return i.replace(xS,yS)}var _S=new Map;function yS(i,e){let t=lt[e];if(t===void 0){let n=_S.get(e);if(n!==void 0)t=lt[n],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return jh(t)}var vS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Im(i){return i.replace(vS,MS)}function MS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var bS={[ma]:"SHADOWMAP_TYPE_PCF",[io]:"SHADOWMAP_TYPE_VSM"};function SS(i){return bS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ES={[vs]:"ENVMAP_TYPE_CUBE",[or]:"ENVMAP_TYPE_CUBE",[xa]:"ENVMAP_TYPE_CUBE_UV"};function TS(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ES[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var wS={[or]:"ENVMAP_MODE_REFRACTION"};function AS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":wS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var RS={[sl]:"ENVMAP_BLENDING_MULTIPLY",[Wp]:"ENVMAP_BLENDING_MIX",[Xp]:"ENVMAP_BLENDING_ADD"};function CS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":RS[i.combine]||"ENVMAP_BLENDING_NONE"}function IS(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function PS(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=SS(t),l=TS(t),u=AS(t),h=CS(t),d=IS(t),f=pS(t),p=mS(r),x=s.createProgram(),g,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ra).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ra).join(`
`),m.length>0&&(m+=`
`)):(g=[Pm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ra).join(`
`),m=[Pm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?lt.tonemapping_pars_fragment:"",t.toneMapping!==gi?dS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,uS("linearToOutputTexel",t.outputColorSpace),fS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ra).join(`
`)),o=jh(o),o=Rm(o,t),o=Cm(o,t),a=jh(a),a=Rm(a,t),a=Cm(a,t),o=Im(o),a=Im(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=b+g+o,_=b+m+a,S=Tm(s,s.VERTEX_SHADER,M),y=Tm(s,s.FRAGMENT_SHADER,_);s.attachShader(x,S),s.attachShader(x,y),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(A){if(i.debug.checkShaderErrors){let C=s.getProgramInfoLog(x)||"",N=s.getShaderInfoLog(S)||"",z=s.getShaderInfoLog(y)||"",F=C.trim(),k=N.trim(),G=z.trim(),J=!0,oe=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,S,y);else{let de=Am(s,S,"vertex"),V=Am(s,y,"fragment");et("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+F+`
`+de+`
`+V)}else F!==""?We("WebGLProgram: Program Info Log:",F):(k===""||G==="")&&(oe=!1);oe&&(A.diagnostics={runnable:J,programLog:F,vertexShader:{log:k,prefix:g},fragmentShader:{log:G,prefix:m}})}s.deleteShader(S),s.deleteShader(y),v=new lo(s,x),w=gS(s,x)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,oS)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=aS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=y,this}var LS=0,Qh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ed(e),t.set(e,n)),n}},ed=class{constructor(e){this.id=LS++,this.code=e,this.usedTimes=0}};function NS(i){return i===bs||i===ba||i===Sa}function DS(i,e,t,n,s,r){let o=new ko,a=new Qh,c=new Set,l=[],u=new Map,h=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,w,R,A,C,N){let z=A.fog,F=C.geometry,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?A.environment:null,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,J=e.get(v.envMap||k,G),oe=J&&J.mapping===xa?J.image.height:null,de=f[v.type];v.precision!==null&&(d=n.getMaxPrecision(v.precision),d!==v.precision&&We("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let V=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,K=V!==void 0?V.length:0,he=0;F.morphAttributes.position!==void 0&&(he=1),F.morphAttributes.normal!==void 0&&(he=2),F.morphAttributes.color!==void 0&&(he=3);let ge,be,Z,te;if(de){let Be=Li[de];ge=Be.vertexShader,be=Be.fragmentShader}else{ge=v.vertexShader,be=v.fragmentShader;let Be=a.getVertexShaderStage(v),ot=a.getFragmentShaderStage(v);a.update(v,Be,ot),Z=Be.id,te=ot.id}let $=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),Me=C.isInstancedMesh===!0,Se=C.isBatchedMesh===!0,fe=!!v.map,we=!!v.matcap,ee=!!J,ce=!!v.aoMap,X=!!v.lightMap,se=!!v.bumpMap&&v.wireframe===!1,xe=!!v.normalMap,Ne=!!v.displacementMap,Ce=!!v.emissiveMap,ue=!!v.metalnessMap,pe=!!v.roughnessMap,D=v.anisotropy>0,Le=v.clearcoat>0,De=v.dispersion>0,P=v.iridescence>0,E=v.sheen>0,L=v.transmission>0,U=D&&!!v.anisotropyMap,B=Le&&!!v.clearcoatMap,W=Le&&!!v.clearcoatNormalMap,ne=Le&&!!v.clearcoatRoughnessMap,q=P&&!!v.iridescenceMap,re=P&&!!v.iridescenceThicknessMap,Ee=E&&!!v.sheenColorMap,Ue=E&&!!v.sheenRoughnessMap,Pe=!!v.specularMap,Ie=!!v.specularColorMap,Ge=!!v.specularIntensityMap,Ye=L&&!!v.transmissionMap,ye=L&&!!v.thicknessMap,H=!!v.gradientMap,ve=!!v.alphaMap,ae=v.alphaTest>0,Ae=!!v.alphaHash,Re=!!v.extensions,le=gi;v.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(le=i.toneMapping);let Fe={shaderID:de,shaderType:v.type,shaderName:v.name,vertexShader:ge,fragmentShader:be,defines:v.defines,customVertexShaderID:Z,customFragmentShaderID:te,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Se,batchingColor:Se&&C._colorsTexture!==null,instancing:Me,instancingColor:Me&&C.instanceColor!==null,instancingMorph:Me&&C.morphTexture!==null,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:fe,matcap:we,envMap:ee,envMapMode:ee&&J.mapping,envMapCubeUVHeight:oe,aoMap:ce,lightMap:X,bumpMap:se,normalMap:xe,displacementMap:Ne,emissiveMap:Ce,normalMapObjectSpace:xe&&v.normalMapType===Kp,normalMapTangentSpace:xe&&v.normalMapType===Ta,packedNormalMap:xe&&v.normalMapType===Ta&&NS(v.normalMap.format),metalnessMap:ue,roughnessMap:pe,anisotropy:D,anisotropyMap:U,clearcoat:Le,clearcoatMap:B,clearcoatNormalMap:W,clearcoatRoughnessMap:ne,dispersion:De,iridescence:P,iridescenceMap:q,iridescenceThicknessMap:re,sheen:E,sheenColorMap:Ee,sheenRoughnessMap:Ue,specularMap:Pe,specularColorMap:Ie,specularIntensityMap:Ge,transmission:L,transmissionMap:Ye,thicknessMap:ye,gradientMap:H,opaque:v.transparent===!1&&v.blending===Ws&&v.alphaToCoverage===!1,alphaMap:ve,alphaTest:ae,alphaHash:Ae,combine:v.combine,mapUv:fe&&p(v.map.channel),aoMapUv:ce&&p(v.aoMap.channel),lightMapUv:X&&p(v.lightMap.channel),bumpMapUv:se&&p(v.bumpMap.channel),normalMapUv:xe&&p(v.normalMap.channel),displacementMapUv:Ne&&p(v.displacementMap.channel),emissiveMapUv:Ce&&p(v.emissiveMap.channel),metalnessMapUv:ue&&p(v.metalnessMap.channel),roughnessMapUv:pe&&p(v.roughnessMap.channel),anisotropyMapUv:U&&p(v.anisotropyMap.channel),clearcoatMapUv:B&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:W&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:re&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&p(v.sheenRoughnessMap.channel),specularMapUv:Pe&&p(v.specularMap.channel),specularColorMapUv:Ie&&p(v.specularColorMap.channel),specularIntensityMapUv:Ge&&p(v.specularIntensityMap.channel),transmissionMapUv:Ye&&p(v.transmissionMap.channel),thicknessMapUv:ye&&p(v.thicknessMap.channel),alphaMapUv:ve&&p(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(xe||D),vertexNormals:!!F.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!F.attributes.uv&&(fe||ve),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||F.attributes.normal===void 0&&xe===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:_e,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:he,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:fe&&v.map.isVideoTexture===!0&&ht.getTransfer(v.map.colorSpace)===bt,decodeVideoTextureEmissive:Ce&&v.emissiveMap.isVideoTexture===!0&&ht.getTransfer(v.emissiveMap.colorSpace)===bt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ot,flipSided:v.side===vn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Re&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&v.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function g(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)w.push(R),w.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(m(w,v),b(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function m(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function b(v,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function M(v){let w=f[v.type],R;if(w){let A=Li[w];R=dm.clone(A.uniforms)}else R=v.uniforms;return R}function _(v,w){let R=u.get(w);return R!==void 0?++R.usedTimes:(R=new PS(i,w,v,s),l.push(R),u.set(w,R)),R}function S(v){if(--v.usedTimes===0){let w=l.indexOf(v);l[w]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function y(v){a.remove(v)}function T(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:M,acquireProgram:_,releaseProgram:S,releaseShaderCache:y,programs:l,dispose:T}}function FS(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function US(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Lm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Nm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,x,g,m){let b=i[e];return b===void 0?(b={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},i[e]=b):(b.id=d.id,b.object=d,b.geometry=f,b.material=p,b.materialVariant=o(d),b.groupOrder=x,b.renderOrder=d.renderOrder,b.z=g,b.group=m),e++,b}function c(d,f,p,x,g,m){let b=a(d,f,p,x,g,m);p.transmission>0?n.push(b):p.transparent===!0?s.push(b):t.push(b)}function l(d,f,p,x,g,m){let b=a(d,f,p,x,g,m);p.transmission>0?n.unshift(b):p.transparent===!0?s.unshift(b):t.unshift(b)}function u(d,f,p){t.length>1&&t.sort(d||US),n.length>1&&n.sort(f||Lm),s.length>1&&s.sort(f||Lm),p&&(t.reverse(),n.reverse(),s.reverse())}function h(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function OS(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Nm,i.set(n,[o])):s>=r.length?(o=new Nm,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function BS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new me};break;case"SpotLight":t={position:new O,direction:new O,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function zS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var HS=0;function kS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function GS(i){let e=new BS,t=zS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);let s=new O,r=new $e,o=new $e;function a(l){let u=0,h=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,b=0,M=0,_=0,S=0,y=0,T=0;l.sort(kS);for(let w=0,R=l.length;w<R;w++){let A=l[w],C=A.color,N=A.intensity,z=A.distance,F=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===bs?F=A.shadow.map.texture:F=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)u+=C.r*N,h+=C.g*N,d+=C.b*N;else if(A.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(A.sh.coefficients[k],N);T++}else if(A.isDirectionalLight){let k=e.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let G=A.shadow,J=t.get(A);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,n.directionalShadow[f]=J,n.directionalShadowMap[f]=F,n.directionalShadowMatrix[f]=A.shadow.matrix,b++}n.directional[f]=k,f++}else if(A.isSpotLight){let k=e.get(A);k.position.setFromMatrixPosition(A.matrixWorld),k.color.copy(C).multiplyScalar(N),k.distance=z,k.coneCos=Math.cos(A.angle),k.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),k.decay=A.decay,n.spot[x]=k;let G=A.shadow;if(A.map&&(n.spotLightMap[S]=A.map,S++,G.updateMatrices(A),A.castShadow&&y++),n.spotLightMatrix[x]=G.matrix,A.castShadow){let J=t.get(A);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,n.spotShadow[x]=J,n.spotShadowMap[x]=F,_++}x++}else if(A.isRectAreaLight){let k=e.get(A);k.color.copy(C).multiplyScalar(N),k.halfWidth.set(A.width*.5,0,0),k.halfHeight.set(0,A.height*.5,0),n.rectArea[g]=k,g++}else if(A.isPointLight){let k=e.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity),k.distance=A.distance,k.decay=A.decay,A.castShadow){let G=A.shadow,J=t.get(A);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,J.shadowCameraNear=G.camera.near,J.shadowCameraFar=G.camera.far,n.pointShadow[p]=J,n.pointShadowMap[p]=F,n.pointShadowMatrix[p]=A.shadow.matrix,M++}n.point[p]=k,p++}else if(A.isHemisphereLight){let k=e.get(A);k.skyColor.copy(A.color).multiplyScalar(N),k.groundColor.copy(A.groundColor).multiplyScalar(N),n.hemi[m]=k,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ze.LTC_FLOAT_1,n.rectAreaLTC2=ze.LTC_FLOAT_2):(n.rectAreaLTC1=ze.LTC_HALF_1,n.rectAreaLTC2=ze.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let v=n.hash;(v.directionalLength!==f||v.pointLength!==p||v.spotLength!==x||v.rectAreaLength!==g||v.hemiLength!==m||v.numDirectionalShadows!==b||v.numPointShadows!==M||v.numSpotShadows!==_||v.numSpotMaps!==S||v.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+S-y,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=T,v.directionalLength=f,v.pointLength=p,v.spotLength=x,v.rectAreaLength=g,v.hemiLength=m,v.numDirectionalShadows=b,v.numPointShadows=M,v.numSpotShadows=_,v.numSpotMaps=S,v.numLightProbes=T,n.version=HS++)}function c(l,u){let h=0,d=0,f=0,p=0,x=0,g=u.matrixWorldInverse;for(let m=0,b=l.length;m<b;m++){let M=l[m];if(M.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),h++}else if(M.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(M.isRectAreaLight){let _=n.rectArea[p];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(M.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function Dm(i){let e=new GS(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function o(d){t.push(d)}function a(d){n.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function VS(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Dm(i),e.set(s,[a])):r>=o.length?(a=new Dm(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var WS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XS=`uniform sampler2D shadow_pass;
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
}`,qS=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],YS=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Fm=new $e,Aa=new O,Yh=new O;function ZS(i,e,t){let n=new Jr,s=new Te,r=new Te,o=new Tt,a=new Xc,c=new qc,l={},u=t.maxTextureSize,h={[An]:vn,[vn]:An,[Ot]:Ot},d=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:WS,fragmentShader:XS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new pt;p.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Oe(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ma;let m=this.type;this.render=function(y,T,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;this.type===Tp&&(We("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ma);let w=i.getRenderTarget(),R=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),C=i.state;C.setBlending(Ci),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let N=m!==this.type;N&&T.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(F=>F.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,F=y.length;z<F;z++){let k=y[z],G=k.shadow;if(G===void 0){We("WebGLShadowMap:",k,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let J=G.getFrameExtents();s.multiply(J),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,G.mapSize.y=r.y));let oe=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=oe,G.map===null||N===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===io){if(k.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Xn(s.x,s.y,{format:bs,type:Ii,minFilter:Yt,magFilter:Yt,generateMipmaps:!1}),G.map.texture.name=k.name+".shadowMap",G.map.depthTexture=new Yi(s.x,s.y,Zn),G.map.depthTexture.name=k.name+".shadowMapDepth",G.map.depthTexture.format=Ei,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=qt,G.map.depthTexture.magFilter=qt}else k.isPointLight?(G.map=new $l(s.x),G.map.depthTexture=new Bc(s.x,_i)):(G.map=new Xn(s.x,s.y),G.map.depthTexture=new Yi(s.x,s.y,_i)),G.map.depthTexture.name=k.name+".shadowMap",G.map.depthTexture.format=Ei,this.type===ma?(G.map.depthTexture.compareFunction=oe?ql:Xl,G.map.depthTexture.minFilter=Yt,G.map.depthTexture.magFilter=Yt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=qt,G.map.depthTexture.magFilter=qt);G.camera.updateProjectionMatrix()}let de=G.map.isWebGLCubeRenderTarget?6:1;for(let V=0;V<de;V++){if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,V),i.clear();else{V===0&&(i.setRenderTarget(G.map),i.clear());let K=G.getViewport(V);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),C.viewport(o)}if(k.isPointLight){let K=G.camera,he=G.matrix,ge=k.distance||K.far;ge!==K.far&&(K.far=ge,K.updateProjectionMatrix()),Aa.setFromMatrixPosition(k.matrixWorld),K.position.copy(Aa),Yh.copy(K.position),Yh.add(qS[V]),K.up.copy(YS[V]),K.lookAt(Yh),K.updateMatrixWorld(),he.makeTranslation(-Aa.x,-Aa.y,-Aa.z),Fm.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Fm,K.coordinateSystem,K.reversedDepth)}else G.updateMatrices(k);n=G.getFrustum(),_(T,v,G.camera,k,this.type)}G.isPointLightShadow!==!0&&this.type===io&&b(G,v),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(w,R,A)};function b(y,T){let v=e.update(x);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Xn(s.x,s.y,{format:bs,type:Ii})),d.uniforms.shadow_pass.value=y.map.depthTexture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(T,null,v,d,x,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(T,null,v,f,x,null)}function M(y,T,v,w){let R=null,A=v.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(A!==void 0)R=A;else if(R=v.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let C=R.uuid,N=T.uuid,z=l[C];z===void 0&&(z={},l[C]=z);let F=z[N];F===void 0&&(F=R.clone(),z[N]=F,T.addEventListener("dispose",S)),R=F}if(R.visible=T.visible,R.wireframe=T.wireframe,w===io?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:h[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let C=i.properties.get(R);C.light=v}return R}function _(y,T,v,w,R){if(y.visible===!1)return;if(y.layers.test(T.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&R===io)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,y.matrixWorld);let N=e.update(y),z=y.material;if(Array.isArray(z)){let F=N.groups;for(let k=0,G=F.length;k<G;k++){let J=F[k],oe=z[J.materialIndex];if(oe&&oe.visible){let de=M(y,oe,w,R);y.onBeforeShadow(i,y,T,v,N,de,J),i.renderBufferDirect(v,null,N,de,y,J),y.onAfterShadow(i,y,T,v,N,de,J)}}}else if(z.visible){let F=M(y,z,w,R);y.onBeforeShadow(i,y,T,v,N,F,null),i.renderBufferDirect(v,null,N,F,y,null),y.onAfterShadow(i,y,T,v,N,F,null)}}let C=y.children;for(let N=0,z=C.length;N<z;N++)_(C[N],T,v,w,R)}function S(y){y.target.removeEventListener("dispose",S);for(let v in l){let w=l[v],R=y.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function KS(i,e){function t(){let H=!1,ve=new Tt,ae=null,Ae=new Tt(0,0,0,0);return{setMask:function(Re){ae!==Re&&!H&&(i.colorMask(Re,Re,Re,Re),ae=Re)},setLocked:function(Re){H=Re},setClear:function(Re,le,Fe,Be,ot){ot===!0&&(Re*=Be,le*=Be,Fe*=Be),ve.set(Re,le,Fe,Be),Ae.equals(ve)===!1&&(i.clearColor(Re,le,Fe,Be),Ae.copy(ve))},reset:function(){H=!1,ae=null,Ae.set(-1,0,0,0)}}}function n(){let H=!1,ve=!1,ae=null,Ae=null,Re=null;return{setReversed:function(le){if(ve!==le){let Fe=e.get("EXT_clip_control");le?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),ve=le;let Be=Re;Re=null,this.setClear(Be)}},getReversed:function(){return ve},setTest:function(le){le?$(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(le){ae!==le&&!H&&(i.depthMask(le),ae=le)},setFunc:function(le){if(ve&&(le=rm[le]),Ae!==le){switch(le){case Tc:i.depthFunc(i.NEVER);break;case wc:i.depthFunc(i.ALWAYS);break;case Ac:i.depthFunc(i.LESS);break;case Xs:i.depthFunc(i.LEQUAL);break;case Rc:i.depthFunc(i.EQUAL);break;case Cc:i.depthFunc(i.GEQUAL);break;case Ic:i.depthFunc(i.GREATER);break;case Pc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=le}},setLocked:function(le){H=le},setClear:function(le){Re!==le&&(Re=le,ve&&(le=1-le),i.clearDepth(le))},reset:function(){H=!1,ae=null,Ae=null,Re=null,ve=!1}}}function s(){let H=!1,ve=null,ae=null,Ae=null,Re=null,le=null,Fe=null,Be=null,ot=null;return{setTest:function(ct){H||(ct?$(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(ct){ve!==ct&&!H&&(i.stencilMask(ct),ve=ct)},setFunc:function(ct,kt,hn){(ae!==ct||Ae!==kt||Re!==hn)&&(i.stencilFunc(ct,kt,hn),ae=ct,Ae=kt,Re=hn)},setOp:function(ct,kt,hn){(le!==ct||Fe!==kt||Be!==hn)&&(i.stencilOp(ct,kt,hn),le=ct,Fe=kt,Be=hn)},setLocked:function(ct){H=ct},setClear:function(ct){ot!==ct&&(i.clearStencil(ct),ot=ct)},reset:function(){H=!1,ve=null,ae=null,Ae=null,Re=null,le=null,Fe=null,Be=null,ot=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},h={},d={},f=new WeakMap,p=[],x=null,g=!1,m=null,b=null,M=null,_=null,S=null,y=null,T=null,v=new me(0,0,0),w=0,R=!1,A=null,C=null,N=null,z=null,F=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,J=0,oe=i.getParameter(i.VERSION);oe.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(oe)[1]),G=J>=1):oe.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),G=J>=2);let de=null,V={},K=i.getParameter(i.SCISSOR_BOX),he=i.getParameter(i.VIEWPORT),ge=new Tt().fromArray(K),be=new Tt().fromArray(he);function Z(H,ve,ae,Ae){let Re=new Uint8Array(4),le=i.createTexture();i.bindTexture(H,le),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<ae;Fe++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(ve+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return le}let te={};te[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(i.DEPTH_TEST),o.setFunc(Xs),se(!1),xe(_h),$(i.CULL_FACE),ce(Ci);function $(H){u[H]!==!0&&(i.enable(H),u[H]=!0)}function _e(H){u[H]!==!1&&(i.disable(H),u[H]=!1)}function Me(H,ve){return d[H]!==ve?(i.bindFramebuffer(H,ve),d[H]=ve,H===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ve),H===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function Se(H,ve){let ae=p,Ae=!1;if(H){ae=f.get(ve),ae===void 0&&(ae=[],f.set(ve,ae));let Re=H.textures;if(ae.length!==Re.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let le=0,Fe=Re.length;le<Fe;le++)ae[le]=i.COLOR_ATTACHMENT0+le;ae.length=Re.length,Ae=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(ae)}function fe(H){return x!==H?(i.useProgram(H),x=H,!0):!1}let we={[hs]:i.FUNC_ADD,[Ap]:i.FUNC_SUBTRACT,[Rp]:i.FUNC_REVERSE_SUBTRACT};we[Cp]=i.MIN,we[Ip]=i.MAX;let ee={[Pp]:i.ZERO,[Lp]:i.ONE,[Np]:i.SRC_COLOR,[Sc]:i.SRC_ALPHA,[zp]:i.SRC_ALPHA_SATURATE,[Op]:i.DST_COLOR,[Fp]:i.DST_ALPHA,[Dp]:i.ONE_MINUS_SRC_COLOR,[Ec]:i.ONE_MINUS_SRC_ALPHA,[Bp]:i.ONE_MINUS_DST_COLOR,[Up]:i.ONE_MINUS_DST_ALPHA,[Hp]:i.CONSTANT_COLOR,[kp]:i.ONE_MINUS_CONSTANT_COLOR,[Gp]:i.CONSTANT_ALPHA,[Vp]:i.ONE_MINUS_CONSTANT_ALPHA};function ce(H,ve,ae,Ae,Re,le,Fe,Be,ot,ct){if(H===Ci){g===!0&&(_e(i.BLEND),g=!1);return}if(g===!1&&($(i.BLEND),g=!0),H!==wp){if(H!==m||ct!==R){if((b!==hs||S!==hs)&&(i.blendEquation(i.FUNC_ADD),b=hs,S=hs),ct)switch(H){case Ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qi:i.blendFunc(i.ONE,i.ONE);break;case yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:et("WebGLState: Invalid blending: ",H);break}else switch(H){case Ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case yh:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vh:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",H);break}M=null,_=null,y=null,T=null,v.set(0,0,0),w=0,m=H,R=ct}return}Re=Re||ve,le=le||ae,Fe=Fe||Ae,(ve!==b||Re!==S)&&(i.blendEquationSeparate(we[ve],we[Re]),b=ve,S=Re),(ae!==M||Ae!==_||le!==y||Fe!==T)&&(i.blendFuncSeparate(ee[ae],ee[Ae],ee[le],ee[Fe]),M=ae,_=Ae,y=le,T=Fe),(Be.equals(v)===!1||ot!==w)&&(i.blendColor(Be.r,Be.g,Be.b,ot),v.copy(Be),w=ot),m=H,R=!1}function X(H,ve){H.side===Ot?_e(i.CULL_FACE):$(i.CULL_FACE);let ae=H.side===vn;ve&&(ae=!ae),se(ae),H.blending===Ws&&H.transparent===!1?ce(Ci):ce(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let Ae=H.stencilWrite;a.setTest(Ae),Ae&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ce(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function se(H){A!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),A=H)}function xe(H){H!==Sp?($(i.CULL_FACE),H!==C&&(H===_h?i.cullFace(i.BACK):H===Ep?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),C=H}function Ne(H){H!==N&&(G&&i.lineWidth(H),N=H)}function Ce(H,ve,ae){H?($(i.POLYGON_OFFSET_FILL),(z!==ve||F!==ae)&&(z=ve,F=ae,o.getReversed()&&(ve=-ve),i.polygonOffset(ve,ae))):_e(i.POLYGON_OFFSET_FILL)}function ue(H){H?$(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function pe(H){H===void 0&&(H=i.TEXTURE0+k-1),de!==H&&(i.activeTexture(H),de=H)}function D(H,ve,ae){ae===void 0&&(de===null?ae=i.TEXTURE0+k-1:ae=de);let Ae=V[ae];Ae===void 0&&(Ae={type:void 0,texture:void 0},V[ae]=Ae),(Ae.type!==H||Ae.texture!==ve)&&(de!==ae&&(i.activeTexture(ae),de=ae),i.bindTexture(H,ve||te[H]),Ae.type=H,Ae.texture=ve)}function Le(){let H=V[de];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function De(){try{i.compressedTexImage2D(...arguments)}catch(H){et("WebGLState:",H)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(H){et("WebGLState:",H)}}function E(){try{i.texSubImage2D(...arguments)}catch(H){et("WebGLState:",H)}}function L(){try{i.texSubImage3D(...arguments)}catch(H){et("WebGLState:",H)}}function U(){try{i.compressedTexSubImage2D(...arguments)}catch(H){et("WebGLState:",H)}}function B(){try{i.compressedTexSubImage3D(...arguments)}catch(H){et("WebGLState:",H)}}function W(){try{i.texStorage2D(...arguments)}catch(H){et("WebGLState:",H)}}function ne(){try{i.texStorage3D(...arguments)}catch(H){et("WebGLState:",H)}}function q(){try{i.texImage2D(...arguments)}catch(H){et("WebGLState:",H)}}function re(){try{i.texImage3D(...arguments)}catch(H){et("WebGLState:",H)}}function Ee(H){return h[H]!==void 0?h[H]:i.getParameter(H)}function Ue(H,ve){h[H]!==ve&&(i.pixelStorei(H,ve),h[H]=ve)}function Pe(H){ge.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),ge.copy(H))}function Ie(H){be.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),be.copy(H))}function Ge(H,ve){let ae=l.get(ve);ae===void 0&&(ae=new WeakMap,l.set(ve,ae));let Ae=ae.get(H);Ae===void 0&&(Ae=i.getUniformBlockIndex(ve,H.name),ae.set(H,Ae))}function Ye(H,ve){let Ae=l.get(ve).get(H);c.get(ve)!==Ae&&(i.uniformBlockBinding(ve,Ae,H.__bindingPointIndex),c.set(ve,Ae))}function ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},de=null,V={},d={},f=new WeakMap,p=[],x=null,g=!1,m=null,b=null,M=null,_=null,S=null,y=null,T=null,v=new me(0,0,0),w=0,R=!1,A=null,C=null,N=null,z=null,F=null,ge.set(0,0,i.canvas.width,i.canvas.height),be.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:$,disable:_e,bindFramebuffer:Me,drawBuffers:Se,useProgram:fe,setBlending:ce,setMaterial:X,setFlipSided:se,setCullFace:xe,setLineWidth:Ne,setPolygonOffset:Ce,setScissorTest:ue,activeTexture:pe,bindTexture:D,unbindTexture:Le,compressedTexImage2D:De,compressedTexImage3D:P,texImage2D:q,texImage3D:re,pixelStorei:Ue,getParameter:Ee,updateUBOMapping:Ge,uniformBlockBinding:Ye,texStorage2D:W,texStorage3D:ne,texSubImage2D:E,texSubImage3D:L,compressedTexSubImage2D:U,compressedTexSubImage3D:B,scissor:Pe,viewport:Ie,reset:ye}}function $S(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Te,u=new WeakMap,h=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,E){return p?new OffscreenCanvas(P,E):Xr("canvas")}function g(P,E,L){let U=1,B=De(P);if((B.width>L||B.height>L)&&(U=L/Math.max(B.width,B.height)),U<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let W=Math.floor(U*B.width),ne=Math.floor(U*B.height);d===void 0&&(d=x(W,ne));let q=E?x(W,ne):d;return q.width=W,q.height=ne,q.getContext("2d").drawImage(P,0,0,W,ne),We("WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+W+"x"+ne+")."),q}else return"data"in P&&We("WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),P;return P}function m(P){return P.generateMipmaps}function b(P){i.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(P,E,L,U,B,W=!1){if(P!==null){if(i[P]!==void 0)return i[P];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ne;U&&(ne=e.get("EXT_texture_norm16"),ne||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=E;if(E===i.RED&&(L===i.FLOAT&&(q=i.R32F),L===i.HALF_FLOAT&&(q=i.R16F),L===i.UNSIGNED_BYTE&&(q=i.R8),L===i.UNSIGNED_SHORT&&ne&&(q=ne.R16_EXT),L===i.SHORT&&ne&&(q=ne.R16_SNORM_EXT)),E===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(q=i.R8UI),L===i.UNSIGNED_SHORT&&(q=i.R16UI),L===i.UNSIGNED_INT&&(q=i.R32UI),L===i.BYTE&&(q=i.R8I),L===i.SHORT&&(q=i.R16I),L===i.INT&&(q=i.R32I)),E===i.RG&&(L===i.FLOAT&&(q=i.RG32F),L===i.HALF_FLOAT&&(q=i.RG16F),L===i.UNSIGNED_BYTE&&(q=i.RG8),L===i.UNSIGNED_SHORT&&ne&&(q=ne.RG16_EXT),L===i.SHORT&&ne&&(q=ne.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(q=i.RG8UI),L===i.UNSIGNED_SHORT&&(q=i.RG16UI),L===i.UNSIGNED_INT&&(q=i.RG32UI),L===i.BYTE&&(q=i.RG8I),L===i.SHORT&&(q=i.RG16I),L===i.INT&&(q=i.RG32I)),E===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(q=i.RGB8UI),L===i.UNSIGNED_SHORT&&(q=i.RGB16UI),L===i.UNSIGNED_INT&&(q=i.RGB32UI),L===i.BYTE&&(q=i.RGB8I),L===i.SHORT&&(q=i.RGB16I),L===i.INT&&(q=i.RGB32I)),E===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),L===i.UNSIGNED_INT&&(q=i.RGBA32UI),L===i.BYTE&&(q=i.RGBA8I),L===i.SHORT&&(q=i.RGBA16I),L===i.INT&&(q=i.RGBA32I)),E===i.RGB&&(L===i.UNSIGNED_SHORT&&ne&&(q=ne.RGB16_EXT),L===i.SHORT&&ne&&(q=ne.RGB16_SNORM_EXT),L===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),L===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),E===i.RGBA){let re=W?Bo:ht.getTransfer(B);L===i.FLOAT&&(q=i.RGBA32F),L===i.HALF_FLOAT&&(q=i.RGBA16F),L===i.UNSIGNED_BYTE&&(q=re===bt?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT&&ne&&(q=ne.RGBA16_EXT),L===i.SHORT&&ne&&(q=ne.RGBA16_SNORM_EXT),L===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function S(P,E){let L;return P?E===null||E===_i||E===oo?L=i.DEPTH24_STENCIL8:E===Zn?L=i.DEPTH32F_STENCIL8:E===ro&&(L=i.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===_i||E===oo?L=i.DEPTH_COMPONENT24:E===Zn?L=i.DEPTH_COMPONENT32F:E===ro&&(L=i.DEPTH_COMPONENT16),L}function y(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==qt&&P.minFilter!==Yt?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function T(P){let E=P.target;E.removeEventListener("dispose",T),w(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&h.delete(E)}function v(P){let E=P.target;E.removeEventListener("dispose",v),A(E)}function w(P){let E=n.get(P);if(E.__webglInit===void 0)return;let L=P.source,U=f.get(L);if(U){let B=U[E.__cacheKey];B.usedTimes--,B.usedTimes===0&&R(P),Object.keys(U).length===0&&f.delete(L)}n.remove(P)}function R(P){let E=n.get(P);i.deleteTexture(E.__webglTexture);let L=P.source,U=f.get(L);delete U[E.__cacheKey],o.memory.textures--}function A(P){let E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(E.__webglFramebuffer[U]))for(let B=0;B<E.__webglFramebuffer[U].length;B++)i.deleteFramebuffer(E.__webglFramebuffer[U][B]);else i.deleteFramebuffer(E.__webglFramebuffer[U]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[U])}else{if(Array.isArray(E.__webglFramebuffer))for(let U=0;U<E.__webglFramebuffer.length;U++)i.deleteFramebuffer(E.__webglFramebuffer[U]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let U=0;U<E.__webglColorRenderbuffer.length;U++)E.__webglColorRenderbuffer[U]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[U]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let L=P.textures;for(let U=0,B=L.length;U<B;U++){let W=n.get(L[U]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),o.memory.textures--),n.remove(L[U])}n.remove(P)}let C=0;function N(){C=0}function z(){return C}function F(P){C=P}function k(){let P=C;return P>=s.maxTextures&&We("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),C+=1,P}function G(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function J(P,E){let L=n.get(P);if(P.isVideoTexture&&D(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&L.__version!==P.version){let U=P.image;if(U===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(L,P,E);return}}else P.isExternalTexture&&(L.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+E)}function oe(P,E){let L=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&L.__version!==P.version){_e(L,P,E);return}else P.isExternalTexture&&(L.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+E)}function de(P,E){let L=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&L.__version!==P.version){_e(L,P,E);return}t.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+E)}function V(P,E){let L=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&L.__version!==P.version){Me(L,P,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+E)}let K={[ni]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[Vr]:i.MIRRORED_REPEAT},he={[qt]:i.NEAREST,[al]:i.NEAREST_MIPMAP_NEAREST,[ar]:i.NEAREST_MIPMAP_LINEAR,[Yt]:i.LINEAR,[so]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},ge={[$p]:i.NEVER,[tm]:i.ALWAYS,[Jp]:i.LESS,[Xl]:i.LEQUAL,[jp]:i.EQUAL,[ql]:i.GEQUAL,[Qp]:i.GREATER,[em]:i.NOTEQUAL};function be(P,E){if(E.type===Zn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Yt||E.magFilter===so||E.magFilter===ar||E.magFilter===xi||E.minFilter===Yt||E.minFilter===so||E.minFilter===ar||E.minFilter===xi)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,K[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,K[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,K[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,he[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,he[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ge[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===qt||E.minFilter!==ar&&E.minFilter!==xi||E.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Z(P,E){let L=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",T));let U=E.source,B=f.get(U);B===void 0&&(B={},f.set(U,B));let W=G(E);if(W!==P.__cacheKey){B[W]===void 0&&(B[W]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,L=!0),B[W].usedTimes++;let ne=B[P.__cacheKey];ne!==void 0&&(B[P.__cacheKey].usedTimes--,ne.usedTimes===0&&R(E)),P.__cacheKey=W,P.__webglTexture=B[W].texture}return L}function te(P,E,L){return Math.floor(Math.floor(P/L)/E)}function $(P,E,L,U){let W=P.updateRanges;if(W.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,L,U,E.data);else{W.sort((Ue,Pe)=>Ue.start-Pe.start);let ne=0;for(let Ue=1;Ue<W.length;Ue++){let Pe=W[ne],Ie=W[Ue],Ge=Pe.start+Pe.count,Ye=te(Ie.start,E.width,4),ye=te(Pe.start,E.width,4);Ie.start<=Ge+1&&Ye===ye&&te(Ie.start+Ie.count-1,E.width,4)===Ye?Pe.count=Math.max(Pe.count,Ie.start+Ie.count-Pe.start):(++ne,W[ne]=Ie)}W.length=ne+1;let q=t.getParameter(i.UNPACK_ROW_LENGTH),re=t.getParameter(i.UNPACK_SKIP_PIXELS),Ee=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let Ue=0,Pe=W.length;Ue<Pe;Ue++){let Ie=W[Ue],Ge=Math.floor(Ie.start/4),Ye=Math.ceil(Ie.count/4),ye=Ge%E.width,H=Math.floor(Ge/E.width),ve=Ye,ae=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(i.UNPACK_SKIP_ROWS,H),t.texSubImage2D(i.TEXTURE_2D,0,ye,H,ve,ae,L,U,E.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ee)}}function _e(P,E,L){let U=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(U=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(U=i.TEXTURE_3D);let B=Z(P,E),W=E.source;t.bindTexture(U,P.__webglTexture,i.TEXTURE0+L);let ne=n.get(W);if(W.version!==ne.__version||B===!0){if(t.activeTexture(i.TEXTURE0+L),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let ae=ht.getPrimaries(ht.workingColorSpace),Ae=E.colorSpace===es?null:ht.getPrimaries(E.colorSpace),Re=E.colorSpace===es||ae===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let re=g(E.image,!1,s.maxTextureSize);re=Le(E,re);let Ee=r.convert(E.format,E.colorSpace),Ue=r.convert(E.type),Pe=_(E.internalFormat,Ee,Ue,E.normalized,E.colorSpace,E.isVideoTexture);be(U,E);let Ie,Ge=E.mipmaps,Ye=E.isVideoTexture!==!0,ye=ne.__version===void 0||B===!0,H=W.dataReady,ve=y(E,re);if(E.isDepthTexture)Pe=S(E.format===Ms,E.type),ye&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,Pe,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Pe,re.width,re.height,0,Ee,Ue,null));else if(E.isDataTexture)if(Ge.length>0){Ye&&ye&&t.texStorage2D(i.TEXTURE_2D,ve,Pe,Ge[0].width,Ge[0].height);for(let ae=0,Ae=Ge.length;ae<Ae;ae++)Ie=Ge[ae],Ye?H&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Ie.width,Ie.height,Ee,Ue,Ie.data):t.texImage2D(i.TEXTURE_2D,ae,Pe,Ie.width,Ie.height,0,Ee,Ue,Ie.data);E.generateMipmaps=!1}else Ye?(ye&&t.texStorage2D(i.TEXTURE_2D,ve,Pe,re.width,re.height),H&&$(E,re,Ee,Ue)):t.texImage2D(i.TEXTURE_2D,0,Pe,re.width,re.height,0,Ee,Ue,re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ye&&ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Pe,Ge[0].width,Ge[0].height,re.depth);for(let ae=0,Ae=Ge.length;ae<Ae;ae++)if(Ie=Ge[ae],E.format!==Kn)if(Ee!==null)if(Ye){if(H)if(E.layerUpdates.size>0){let Re=kh(Ie.width,Ie.height,E.format,E.type);for(let le of E.layerUpdates){let Fe=Ie.data.subarray(le*Re/Ie.data.BYTES_PER_ELEMENT,(le+1)*Re/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,le,Ie.width,Ie.height,1,Ee,Fe)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Ie.width,Ie.height,re.depth,Ee,Ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,Pe,Ie.width,Ie.height,re.depth,0,Ie.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?H&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Ie.width,Ie.height,re.depth,Ee,Ue,Ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,Pe,Ie.width,Ie.height,re.depth,0,Ee,Ue,Ie.data)}else{Ye&&ye&&t.texStorage2D(i.TEXTURE_2D,ve,Pe,Ge[0].width,Ge[0].height);for(let ae=0,Ae=Ge.length;ae<Ae;ae++)Ie=Ge[ae],E.format!==Kn?Ee!==null?Ye?H&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,Ie.width,Ie.height,Ee,Ie.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,Pe,Ie.width,Ie.height,0,Ie.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?H&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Ie.width,Ie.height,Ee,Ue,Ie.data):t.texImage2D(i.TEXTURE_2D,ae,Pe,Ie.width,Ie.height,0,Ee,Ue,Ie.data)}else if(E.isDataArrayTexture)if(Ye){if(ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Pe,re.width,re.height,re.depth),H)if(E.layerUpdates.size>0){let ae=kh(re.width,re.height,E.format,E.type);for(let Ae of E.layerUpdates){let Re=re.data.subarray(Ae*ae/re.data.BYTES_PER_ELEMENT,(Ae+1)*ae/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ae,re.width,re.height,1,Ee,Ue,Re)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Ee,Ue,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,re.width,re.height,re.depth,0,Ee,Ue,re.data);else if(E.isData3DTexture)Ye?(ye&&t.texStorage3D(i.TEXTURE_3D,ve,Pe,re.width,re.height,re.depth),H&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Ee,Ue,re.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,re.width,re.height,re.depth,0,Ee,Ue,re.data);else if(E.isFramebufferTexture){if(ye)if(Ye)t.texStorage2D(i.TEXTURE_2D,ve,Pe,re.width,re.height);else{let ae=re.width,Ae=re.height;for(let Re=0;Re<ve;Re++)t.texImage2D(i.TEXTURE_2D,Re,Pe,ae,Ae,0,Ee,Ue,null),ae>>=1,Ae>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let ae=i.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),re.parentNode!==ae){ae.appendChild(re),h.add(E),ae.onpaint=Ae=>{let Re=Ae.changedElements;for(let le of h)Re.includes(le.image)&&(le.needsUpdate=!0)},ae.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,re);else{let Re=i.RGBA,le=i.RGBA,Fe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Re,le,Fe,re)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ge.length>0){if(Ye&&ye){let ae=De(Ge[0]);t.texStorage2D(i.TEXTURE_2D,ve,Pe,ae.width,ae.height)}for(let ae=0,Ae=Ge.length;ae<Ae;ae++)Ie=Ge[ae],Ye?H&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Ee,Ue,Ie):t.texImage2D(i.TEXTURE_2D,ae,Pe,Ee,Ue,Ie);E.generateMipmaps=!1}else if(Ye){if(ye){let ae=De(re);t.texStorage2D(i.TEXTURE_2D,ve,Pe,ae.width,ae.height)}H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Ue,re)}else t.texImage2D(i.TEXTURE_2D,0,Pe,Ee,Ue,re);m(E)&&b(U),ne.__version=W.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Me(P,E,L){if(E.image.length!==6)return;let U=Z(P,E),B=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+L);let W=n.get(B);if(B.version!==W.__version||U===!0){t.activeTexture(i.TEXTURE0+L);let ne=ht.getPrimaries(ht.workingColorSpace),q=E.colorSpace===es?null:ht.getPrimaries(E.colorSpace),re=E.colorSpace===es||ne===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let Ee=E.isCompressedTexture||E.image[0].isCompressedTexture,Ue=E.image[0]&&E.image[0].isDataTexture,Pe=[];for(let le=0;le<6;le++)!Ee&&!Ue?Pe[le]=g(E.image[le],!0,s.maxCubemapSize):Pe[le]=Ue?E.image[le].image:E.image[le],Pe[le]=Le(E,Pe[le]);let Ie=Pe[0],Ge=r.convert(E.format,E.colorSpace),Ye=r.convert(E.type),ye=_(E.internalFormat,Ge,Ye,E.normalized,E.colorSpace),H=E.isVideoTexture!==!0,ve=W.__version===void 0||U===!0,ae=B.dataReady,Ae=y(E,Ie);be(i.TEXTURE_CUBE_MAP,E);let Re;if(Ee){H&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,ye,Ie.width,Ie.height);for(let le=0;le<6;le++){Re=Pe[le].mipmaps;for(let Fe=0;Fe<Re.length;Fe++){let Be=Re[Fe];E.format!==Kn?Ge!==null?H?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe,0,0,Be.width,Be.height,Ge,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe,ye,Be.width,Be.height,0,Be.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe,0,0,Be.width,Be.height,Ge,Ye,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe,ye,Be.width,Be.height,0,Ge,Ye,Be.data)}}}else{if(Re=E.mipmaps,H&&ve){Re.length>0&&Ae++;let le=De(Pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,ye,le.width,le.height)}for(let le=0;le<6;le++)if(Ue){H?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Pe[le].width,Pe[le].height,Ge,Ye,Pe[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ye,Pe[le].width,Pe[le].height,0,Ge,Ye,Pe[le].data);for(let Fe=0;Fe<Re.length;Fe++){let ot=Re[Fe].image[le].image;H?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe+1,0,0,ot.width,ot.height,Ge,Ye,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe+1,ye,ot.width,ot.height,0,Ge,Ye,ot.data)}}else{H?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ge,Ye,Pe[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ye,Ge,Ye,Pe[le]);for(let Fe=0;Fe<Re.length;Fe++){let Be=Re[Fe];H?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe+1,0,0,Ge,Ye,Be.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe+1,ye,Ge,Ye,Be.image[le])}}}m(E)&&b(i.TEXTURE_CUBE_MAP),W.__version=B.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Se(P,E,L,U,B,W){let ne=r.convert(L.format,L.colorSpace),q=r.convert(L.type),re=_(L.internalFormat,ne,q,L.normalized,L.colorSpace),Ee=n.get(E),Ue=n.get(L);if(Ue.__renderTarget=E,!Ee.__hasExternalTextures){let Pe=Math.max(1,E.width>>W),Ie=Math.max(1,E.height>>W);B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?t.texImage3D(B,W,re,Pe,Ie,E.depth,0,ne,q,null):t.texImage2D(B,W,re,Pe,Ie,0,ne,q,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),pe(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,U,B,Ue.__webglTexture,0,ue(E)):(B===i.TEXTURE_2D||B>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,U,B,Ue.__webglTexture,W),t.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(P,E,L){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){let U=E.depthTexture,B=U&&U.isDepthTexture?U.type:null,W=S(E.stencilBuffer,B),ne=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pe(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(E),W,E.width,E.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(E),W,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,W,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,P)}else{let U=E.textures;for(let B=0;B<U.length;B++){let W=U[B],ne=r.convert(W.format,W.colorSpace),q=r.convert(W.type),re=_(W.internalFormat,ne,q,W.normalized,W.colorSpace);pe(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(E),re,E.width,E.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(E),re,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,re,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(P,E,L){let U=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let B=n.get(E.depthTexture);if(B.__renderTarget=E,(!B.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),U){if(B.__webglInit===void 0&&(B.__webglInit=!0,E.depthTexture.addEventListener("dispose",T)),B.__webglTexture===void 0){B.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),be(i.TEXTURE_CUBE_MAP,E.depthTexture);let Ee=r.convert(E.depthTexture.format),Ue=r.convert(E.depthTexture.type),Pe;E.depthTexture.format===Ei?Pe=i.DEPTH_COMPONENT24:E.depthTexture.format===Ms&&(Pe=i.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Pe,E.width,E.height,0,Ee,Ue,null)}}else J(E.depthTexture,0);let W=B.__webglTexture,ne=ue(E),q=U?i.TEXTURE_CUBE_MAP_POSITIVE_X+L:i.TEXTURE_2D,re=E.depthTexture.format===Ms?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ei)pe(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,q,W,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,re,q,W,0);else if(E.depthTexture.format===Ms)pe(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,q,W,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,re,q,W,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ee(P){let E=n.get(P),L=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){let U=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),U){let B=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,U.removeEventListener("dispose",B)};U.addEventListener("dispose",B),E.__depthDisposeCallback=B}E.__boundDepthTexture=U}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(L)for(let U=0;U<6;U++)we(E.__webglFramebuffer[U],P,U);else{let U=P.texture.mipmaps;U&&U.length>0?we(E.__webglFramebuffer[0],P,0):we(E.__webglFramebuffer,P,0)}else if(L){E.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[U]),E.__webglDepthbuffer[U]===void 0)E.__webglDepthbuffer[U]=i.createRenderbuffer(),fe(E.__webglDepthbuffer[U],P,!1);else{let B=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=E.__webglDepthbuffer[U];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,W)}}else{let U=P.texture.mipmaps;if(U&&U.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),fe(E.__webglDepthbuffer,P,!1);else{let B=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,W)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(P,E,L){let U=n.get(P);E!==void 0&&Se(U.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&ee(P)}function X(P){let E=P.texture,L=n.get(P),U=n.get(E);P.addEventListener("dispose",v);let B=P.textures,W=P.isWebGLCubeRenderTarget===!0,ne=B.length>1;if(ne||(U.__webglTexture===void 0&&(U.__webglTexture=i.createTexture()),U.__version=E.version,o.memory.textures++),W){L.__webglFramebuffer=[];for(let q=0;q<6;q++)if(E.mipmaps&&E.mipmaps.length>0){L.__webglFramebuffer[q]=[];for(let re=0;re<E.mipmaps.length;re++)L.__webglFramebuffer[q][re]=i.createFramebuffer()}else L.__webglFramebuffer[q]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){L.__webglFramebuffer=[];for(let q=0;q<E.mipmaps.length;q++)L.__webglFramebuffer[q]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(ne)for(let q=0,re=B.length;q<re;q++){let Ee=n.get(B[q]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&pe(P)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let q=0;q<B.length;q++){let re=B[q];L.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[q]);let Ee=r.convert(re.format,re.colorSpace),Ue=r.convert(re.type),Pe=_(re.internalFormat,Ee,Ue,re.normalized,re.colorSpace,P.isXRRenderTarget===!0),Ie=ue(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,Pe,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,L.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),fe(L.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture),be(i.TEXTURE_CUBE_MAP,E);for(let q=0;q<6;q++)if(E.mipmaps&&E.mipmaps.length>0)for(let re=0;re<E.mipmaps.length;re++)Se(L.__webglFramebuffer[q][re],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,re);else Se(L.__webglFramebuffer[q],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);m(E)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){for(let q=0,re=B.length;q<re;q++){let Ee=B[q],Ue=n.get(Ee),Pe=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Pe=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Pe,Ue.__webglTexture),be(Pe,Ee),Se(L.__webglFramebuffer,P,Ee,i.COLOR_ATTACHMENT0+q,Pe,0),m(Ee)&&b(Pe)}t.unbindTexture()}else{let q=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(q=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(q,U.__webglTexture),be(q,E),E.mipmaps&&E.mipmaps.length>0)for(let re=0;re<E.mipmaps.length;re++)Se(L.__webglFramebuffer[re],P,E,i.COLOR_ATTACHMENT0,q,re);else Se(L.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,q,0);m(E)&&b(q),t.unbindTexture()}P.depthBuffer&&ee(P)}function se(P){let E=P.textures;for(let L=0,U=E.length;L<U;L++){let B=E[L];if(m(B)){let W=M(P),ne=n.get(B).__webglTexture;t.bindTexture(W,ne),b(W),t.unbindTexture()}}}let xe=[],Ne=[];function Ce(P){if(P.samples>0){if(pe(P)===!1){let E=P.textures,L=P.width,U=P.height,B=i.COLOR_BUFFER_BIT,W=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=n.get(P),q=E.length>1;if(q)for(let Ee=0;Ee<E.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer);let re=P.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ne.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let Ee=0;Ee<E.length;Ee++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(B|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(B|=i.STENCIL_BUFFER_BIT)),q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ne.__webglColorRenderbuffer[Ee]);let Ue=n.get(E[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ue,0)}i.blitFramebuffer(0,0,L,U,0,0,L,U,B,i.NEAREST),c===!0&&(xe.length=0,Ne.length=0,xe.push(i.COLOR_ATTACHMENT0+Ee),P.depthBuffer&&P.resolveDepthBuffer===!1&&(xe.push(W),Ne.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ne)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let Ee=0;Ee<E.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,ne.__webglColorRenderbuffer[Ee]);let Ue=n.get(E[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,Ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function ue(P){return Math.min(s.maxSamples,P.samples)}function pe(P){let E=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function D(P){let E=o.render.frame;u.get(P)!==E&&(u.set(P,E),P.update())}function Le(P,E){let L=P.colorSpace,U=P.format,B=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||L!==Ln&&L!==es&&(ht.getTransfer(L)===bt?(U!==Kn||B!==Bn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",L)),E}function De(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=N,this.getTextureUnits=z,this.setTextureUnits=F,this.setTexture2D=J,this.setTexture2DArray=oe,this.setTexture3D=de,this.setTextureCube=V,this.rebindTextures=ce,this.setupRenderTarget=X,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function JS(i,e){function t(n,s=es){let r,o=ht.getTransfer(s);if(n===Bn)return i.UNSIGNED_BYTE;if(n===ll)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ul)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ih)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ph)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Rh)return i.BYTE;if(n===Ch)return i.SHORT;if(n===ro)return i.UNSIGNED_SHORT;if(n===cl)return i.INT;if(n===_i)return i.UNSIGNED_INT;if(n===Zn)return i.FLOAT;if(n===Ii)return i.HALF_FLOAT;if(n===Lh)return i.ALPHA;if(n===Nh)return i.RGB;if(n===Kn)return i.RGBA;if(n===Ei)return i.DEPTH_COMPONENT;if(n===Ms)return i.DEPTH_STENCIL;if(n===hl)return i.RED;if(n===dl)return i.RED_INTEGER;if(n===bs)return i.RG;if(n===fl)return i.RG_INTEGER;if(n===pl)return i.RGBA_INTEGER;if(n===_a||n===ya||n===va||n===Ma)if(o===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ml||n===gl||n===xl||n===_l)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_l)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yl||n===vl||n===Ml||n===bl||n===Sl||n===ba||n===El)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yl||n===vl)return o===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ml)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===bl)return r.COMPRESSED_R11_EAC;if(n===Sl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ba)return r.COMPRESSED_RG11_EAC;if(n===El)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Tl||n===wl||n===Al||n===Rl||n===Cl||n===Il||n===Pl||n===Ll||n===Nl||n===Dl||n===Fl||n===Ul||n===Ol||n===Bl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Tl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Al)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Il)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ll)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ul)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ol)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zl||n===Hl||n===kl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===zl)return o===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gl||n===Vl||n===Sa||n===Wl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===oo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var jS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QS=`
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

}`,td=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ko(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Nn({vertexShader:jS,fragmentShader:QS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oe(new Rt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nd=class extends Ti{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new td,m={},b=t.getContextAttributes(),M=null,_=null,S=[],y=[],T=new Te,v=null,w=new sn;w.viewport=new Tt;let R=new sn;R.viewport=new Tt;let A=[w,R],C=new tl,N=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let te=S[Z];return te===void 0&&(te=new Zr,S[Z]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Z){let te=S[Z];return te===void 0&&(te=new Zr,S[Z]=te),te.getGripSpace()},this.getHand=function(Z){let te=S[Z];return te===void 0&&(te=new Zr,S[Z]=te),te.getHandSpace()};function F(Z){let te=y.indexOf(Z.inputSource);if(te===-1)return;let $=S[te];$!==void 0&&($.update(Z.inputSource,Z.frame,l||o),$.dispatchEvent({type:Z.type,data:Z.inputSource}))}function k(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",G);for(let Z=0;Z<S.length;Z++){let te=y[Z];te!==null&&(y[Z]=null,S[Z].disconnect(te))}N=null,z=null,g.reset();for(let Z in m)delete m[Z];e.setRenderTarget(M),f=null,d=null,h=null,s=null,_=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",k),s.addEventListener("inputsourceschange",G),b.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let $=null,_e=null,Me=null;b.depth&&(Me=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=b.stencil?Ms:Ei,_e=b.stencil?oo:_i);let Se={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Se),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Xn(d.textureWidth,d.textureHeight,{format:Kn,type:Bn,depthTexture:new Yi(d.textureWidth,d.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let $={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,$),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Xn(f.framebufferWidth,f.framebufferHeight,{format:Kn,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),be.setContext(s),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(Z){for(let te=0;te<Z.removed.length;te++){let $=Z.removed[te],_e=y.indexOf($);_e>=0&&(y[_e]=null,S[_e].disconnect($))}for(let te=0;te<Z.added.length;te++){let $=Z.added[te],_e=y.indexOf($);if(_e===-1){for(let Se=0;Se<S.length;Se++)if(Se>=y.length){y.push($),_e=Se;break}else if(y[Se]===null){y[Se]=$,_e=Se;break}if(_e===-1)break}let Me=S[_e];Me&&Me.connect($)}}let J=new O,oe=new O;function de(Z,te,$){J.setFromMatrixPosition(te.matrixWorld),oe.setFromMatrixPosition($.matrixWorld);let _e=J.distanceTo(oe),Me=te.projectionMatrix.elements,Se=$.projectionMatrix.elements,fe=Me[14]/(Me[10]-1),we=Me[14]/(Me[10]+1),ee=(Me[9]+1)/Me[5],ce=(Me[9]-1)/Me[5],X=(Me[8]-1)/Me[0],se=(Se[8]+1)/Se[0],xe=fe*X,Ne=fe*se,Ce=_e/(-X+se),ue=Ce*-X;if(te.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ue),Z.translateZ(Ce),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Me[10]===-1)Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let pe=fe+Ce,D=we+Ce,Le=xe-ue,De=Ne+(_e-ue),P=ee*we/D*pe,E=ce*we/D*pe;Z.projectionMatrix.makePerspective(Le,De,P,E,pe,D),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function V(Z,te){te===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(te.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let te=Z.near,$=Z.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&($=g.depthFar)),C.near=R.near=w.near=te,C.far=R.far=w.far=$,(N!==C.near||z!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),N=C.near,z=C.far),C.layers.mask=Z.layers.mask|6,w.layers.mask=C.layers.mask&-5,R.layers.mask=C.layers.mask&-3;let _e=Z.parent,Me=C.cameras;V(C,_e);for(let Se=0;Se<Me.length;Se++)V(Me[Se],_e);Me.length===2?de(C,w,R):C.projectionMatrix.copy(w.projectionMatrix),K(Z,C,_e)};function K(Z,te,$){$===null?Z.matrix.copy(te.matrixWorld):(Z.matrix.copy($.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(te.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Zs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(C)},this.getCameraTexture=function(Z){return m[Z]};let he=null;function ge(Z,te){if(u=te.getViewerPose(l||o),p=te,u!==null){let $=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let _e=!1;$.length!==C.cameras.length&&(C.cameras.length=0,_e=!0);for(let we=0;we<$.length;we++){let ee=$[we],ce=null;if(f!==null)ce=f.getViewport(ee);else{let se=h.getViewSubImage(d,ee);ce=se.viewport,we===0&&(e.setRenderTargetTextures(_,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(_))}let X=A[we];X===void 0&&(X=new sn,X.layers.enable(we),X.viewport=new Tt,A[we]=X),X.matrix.fromArray(ee.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(ee.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(ce.x,ce.y,ce.width,ce.height),we===0&&(C.matrix.copy(X.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),_e===!0&&C.cameras.push(X)}let Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let we=h.getDepthInformation($[0]);we&&we.isValid&&we.texture&&g.init(we,s.renderState)}if(Me&&Me.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let we=0;we<$.length;we++){let ee=$[we].camera;if(ee){let ce=m[ee];ce||(ce=new Ko,m[ee]=ce);let X=h.getCameraImage(ee);ce.sourceTexture=X}}}}for(let $=0;$<S.length;$++){let _e=y[$],Me=S[$];_e!==null&&Me!==void 0&&Me.update(_e,te,l||o)}he&&he(Z,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),p=null}let be=new Um;be.setAnimationLoop(ge),this.setAnimationLoop=function(Z){he=Z},this.dispose=function(){}}},e1=new $e,Gm=new rt;Gm.set(-1,0,0,0,1,0,0,0,1);function t1(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Bh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,b,M,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,b,M):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===vn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===vn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let b=e.get(m),M=b.envMap,_=b.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(e1.makeRotationFromEuler(_)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Gm),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,b,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=M*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,b){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===vn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let b=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function n1(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,S){let y=S.program;n.uniformBlockBinding(_,y)}function l(_,S){let y=s[_.id];y===void 0&&(g(_),y=u(_),s[_.id]=y,_.addEventListener("dispose",b));let T=S.program;n.updateUBOMapping(_,T);let v=e.render.frame;r[_.id]!==v&&(d(_),r[_.id]=v)}function u(_){let S=h();_.__bindingPointIndex=S;let y=i.createBuffer(),T=_.__size,v=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,T,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,y),y}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let S=s[_.id],y=_.uniforms,T=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let v=0,w=y.length;v<w;v++){let R=y[v];if(Array.isArray(R))for(let A=0,C=R.length;A<C;A++)f(R[A],v,A,T);else f(R,v,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,S,y,T){if(x(_,S,y,T)===!0){let v=_.__offset,w=_.value;if(Array.isArray(w)){let R=0;for(let A=0;A<w.length;A++){let C=w[A],N=m(C);p(C,_.__data,R),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(R+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(w,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,_.__data)}}function p(_,S,y){typeof _=="number"||typeof _=="boolean"?S[0]=_:_.isMatrix3?(S[0]=_.elements[0],S[1]=_.elements[1],S[2]=_.elements[2],S[3]=0,S[4]=_.elements[3],S[5]=_.elements[4],S[6]=_.elements[5],S[7]=0,S[8]=_.elements[6],S[9]=_.elements[7],S[10]=_.elements[8],S[11]=0):ArrayBuffer.isView(_)?S.set(new _.constructor(_.buffer,_.byteOffset,S.length)):_.toArray(S,y)}function x(_,S,y,T){let v=_.value,w=S+"_"+y;if(T[w]===void 0)return typeof v=="number"||typeof v=="boolean"?T[w]=v:ArrayBuffer.isView(v)?T[w]=v.slice():T[w]=v.clone(),!0;{let R=T[w];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return T[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function g(_){let S=_.uniforms,y=0,T=16;for(let w=0,R=S.length;w<R;w++){let A=Array.isArray(S[w])?S[w]:[S[w]];for(let C=0,N=A.length;C<N;C++){let z=A[C],F=Array.isArray(z.value)?z.value:[z.value];for(let k=0,G=F.length;k<G;k++){let J=F[k],oe=m(J),de=y%T,V=de%oe.boundary,K=de+V;y+=V,K!==0&&T-K<oe.storage&&(y+=T-K),z.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=oe.storage}}}let v=y%T;return v>0&&(y+=T-v),_.__size=y,_.__cache={},this}function m(_){let S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):We("WebGLRenderer: Unsupported uniform value type.",_),S}function b(_){let S=_.target;S.removeEventListener("dispose",b);let y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function M(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:M}}var i1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Pi=null;function s1(){return Pi===null&&(Pi=new $r(i1,16,16,bs,Ii),Pi.name="DFG_LUT",Pi.minFilter=Yt,Pi.magFilter=Yt,Pi.wrapS=ei,Pi.wrapT=ei,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}var Jl=class{constructor(e={}){let{canvas:t=nm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Bn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=f,g=new Set([pl,fl,dl]),m=new Set([Bn,_i,ro,oo,ll,ul]),b=new Uint32Array(4),M=new Int32Array(4),_=new O,S=null,y=null,T=[],v=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,A=!1,C=null,N=null,z=null,F=null;this._outputColorSpace=tt;let k=0,G=0,J=null,oe=-1,de=null,V=new Tt,K=new Tt,he=null,ge=new me(0),be=0,Z=t.width,te=t.height,$=1,_e=null,Me=null,Se=new Tt(0,0,Z,te),fe=new Tt(0,0,Z,te),we=!1,ee=new Jr,ce=!1,X=!1,se=new $e,xe=new O,Ne=new Tt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function pe(){return J===null?$:1}let D=n;function Le(I,Y){return t.getContext(I,Y)}try{let I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",ot,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",kt,!1),D===null){let Y="webgl2";if(D=Le(Y,I),D===null)throw Le(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(I){throw et("WebGLRenderer: "+I.message),I}let De,P,E,L,U,B,W,ne,q,re,Ee,Ue,Pe,Ie,Ge,Ye,ye,H,ve,ae,Ae,Re,le;function Fe(){De=new hb(D),De.init(),Ae=new JS(D,De),P=new ib(D,De,e,Ae),E=new KS(D,De),P.reversedDepthBuffer&&d&&E.buffers.depth.setReversed(!0),N=D.createFramebuffer(),z=D.createFramebuffer(),F=D.createFramebuffer(),L=new pb(D),U=new FS,B=new $S(D,De,E,U,P,Ae,L),W=new ub(R),ne=new _y(D),Re=new tb(D,ne),q=new db(D,ne,L,Re),re=new gb(D,q,ne,Re,L),H=new mb(D,P,B),Ge=new sb(U),Ee=new DS(R,W,De,P,Re,Ge),Ue=new t1(R,U),Pe=new OS,Ie=new VS(De),ye=new eb(R,W,E,re,p,c),Ye=new ZS(R,re,P),le=new n1(D,L,P,E),ve=new nb(D,De,L),ae=new fb(D,De,L),L.programs=Ee.programs,R.capabilities=P,R.extensions=De,R.properties=U,R.renderLists=Pe,R.shadowMap=Ye,R.state=E,R.info=L}Fe(),x!==Bn&&(w=new _b(x,t.width,t.height,a,s,r));let Be=new nd(R,D);this.xr=Be,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let I=De.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=De.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(I){I!==void 0&&($=I,this.setSize(Z,te,!1))},this.getSize=function(I){return I.set(Z,te)},this.setSize=function(I,Y,ie=!0){if(Be.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=I,te=Y,t.width=Math.floor(I*$),t.height=Math.floor(Y*$),ie===!0&&(t.style.width=I+"px",t.style.height=Y+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,I,Y)},this.getDrawingBufferSize=function(I){return I.set(Z*$,te*$).floor()},this.setDrawingBufferSize=function(I,Y,ie){Z=I,te=Y,$=ie,t.width=Math.floor(I*ie),t.height=Math.floor(Y*ie),this.setViewport(0,0,I,Y)},this.setEffects=function(I){if(x===Bn){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let Y=0;Y<I.length;Y++)if(I[Y].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(V)},this.getViewport=function(I){return I.copy(Se)},this.setViewport=function(I,Y,ie,j){I.isVector4?Se.set(I.x,I.y,I.z,I.w):Se.set(I,Y,ie,j),E.viewport(V.copy(Se).multiplyScalar($).round())},this.getScissor=function(I){return I.copy(fe)},this.setScissor=function(I,Y,ie,j){I.isVector4?fe.set(I.x,I.y,I.z,I.w):fe.set(I,Y,ie,j),E.scissor(K.copy(fe).multiplyScalar($).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(I){E.setScissorTest(we=I)},this.setOpaqueSort=function(I){_e=I},this.setTransparentSort=function(I){Me=I},this.getClearColor=function(I){return I.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(I=!0,Y=!0,ie=!0){let j=0;if(I){let Q=!1;if(J!==null){let He=J.texture.format;Q=g.has(He)}if(Q){let He=J.texture.type,Ve=m.has(He),ke=ye.getClearColor(),Ke=ye.getClearAlpha(),Je=ke.r,at=ke.g,ut=ke.b;Ve?(b[0]=Je,b[1]=at,b[2]=ut,b[3]=Ke,D.clearBufferuiv(D.COLOR,0,b)):(M[0]=Je,M[1]=at,M[2]=ut,M[3]=Ke,D.clearBufferiv(D.COLOR,0,M))}else j|=D.COLOR_BUFFER_BIT}Y&&(j|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ie&&(j|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&D.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),C=I},this.dispose=function(){t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",kt,!1),ye.dispose(),Pe.dispose(),Ie.dispose(),U.dispose(),W.dispose(),re.dispose(),Re.dispose(),le.dispose(),Ee.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",it),Be.removeEventListener("sessionend",_t),Ct.stop()};function ot(I){I.preventDefault(),zo("WebGLRenderer: Context Lost."),A=!0}function ct(){zo("WebGLRenderer: Context Restored."),A=!1;let I=L.autoReset,Y=Ye.enabled,ie=Ye.autoUpdate,j=Ye.needsUpdate,Q=Ye.type;Fe(),L.autoReset=I,Ye.enabled=Y,Ye.autoUpdate=ie,Ye.needsUpdate=j,Ye.type=Q}function kt(I){et("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function hn(I){let Y=I.target;Y.removeEventListener("dispose",hn),ai(Y)}function ai(I){Ui(I),U.remove(I)}function Ui(I){let Y=U.get(I).programs;Y!==void 0&&(Y.forEach(function(ie){Ee.releaseProgram(ie)}),I.isShaderMaterial&&Ee.releaseShaderCache(I))}this.renderBufferDirect=function(I,Y,ie,j,Q,He){Y===null&&(Y=Ce);let Ve=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,ke=vo(I,Y,ie,j,Q);E.setMaterial(j,Ve);let Ke=ie.index,Je=1;if(j.wireframe===!0){if(Ke=q.getWireframeAttribute(ie),Ke===void 0)return;Je=2}let at=ie.drawRange,ut=ie.attributes.position,je=at.start*Je,At=(at.start+at.count)*Je;He!==null&&(je=Math.max(je,He.start*Je),At=Math.min(At,(He.start+He.count)*Je)),Ke!==null?(je=Math.max(je,0),At=Math.min(At,Ke.count)):ut!=null&&(je=Math.max(je,0),At=Math.min(At,ut.count));let Jt=At-je;if(Jt<0||Jt===1/0)return;Re.setup(Q,j,ke,ie,Ke);let Kt,It=ve;if(Ke!==null&&(Kt=ne.get(Ke),It=ae,It.setIndex(Kt)),Q.isMesh)j.wireframe===!0?(E.setLineWidth(j.wireframeLinewidth*pe()),It.setMode(D.LINES)):It.setMode(D.TRIANGLES);else if(Q.isLine){let En=j.linewidth;En===void 0&&(En=1),E.setLineWidth(En*pe()),Q.isLineSegments?It.setMode(D.LINES):Q.isLineLoop?It.setMode(D.LINE_LOOP):It.setMode(D.LINE_STRIP)}else Q.isPoints?It.setMode(D.POINTS):Q.isSprite&&It.setMode(D.TRIANGLES);if(Q.isBatchedMesh)if(De.get("WEBGL_multi_draw"))It.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let En=Q._multiDrawStarts,Xe=Q._multiDrawCounts,Gn=Q._multiDrawCount,gt=Ke?ne.get(Ke).bytesPerElement:1,jn=U.get(j).currentProgram.getUniforms();for(let vi=0;vi<Gn;vi++)jn.setValue(D,"_gl_DrawID",vi),It.render(En[vi]/gt,Xe[vi])}else if(Q.isInstancedMesh)It.renderInstances(je,Jt,Q.count);else if(ie.isInstancedBufferGeometry){let En=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Xe=Math.min(ie.instanceCount,En);It.renderInstances(je,Jt,Xe)}else It.render(je,Jt)};function an(I,Y,ie){I.transparent===!0&&I.side===Ot&&I.forceSinglePass===!1?(I.side=vn,I.needsUpdate=!0,xn(I,Y,ie),I.side=An,I.needsUpdate=!0,xn(I,Y,ie),I.side=Ot):xn(I,Y,ie)}this.compile=function(I,Y,ie=null){ie===null&&(ie=I),y=Ie.get(ie),y.init(Y),v.push(y),ie.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),I!==ie&&I.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),y.setupLights();let j=new Set;return I.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let He=Q.material;if(He)if(Array.isArray(He))for(let Ve=0;Ve<He.length;Ve++){let ke=He[Ve];an(ke,ie,Q),j.add(ke)}else an(He,ie,Q),j.add(He)}),y=v.pop(),j},this.compileAsync=function(I,Y,ie=null){let j=this.compile(I,Y,ie);return new Promise(Q=>{function He(){if(j.forEach(function(Ve){U.get(Ve).currentProgram.isReady()&&j.delete(Ve)}),j.size===0){Q(I);return}setTimeout(He,10)}De.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let Dn=null;function kn(I){Dn&&Dn(I)}function it(){Ct.stop()}function _t(){Ct.start()}let Ct=new Um;Ct.setAnimationLoop(kn),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(I){Dn=I,Be.setAnimationLoop(I),I===null?Ct.stop():Ct.start()},Be.addEventListener("sessionstart",it),Be.addEventListener("sessionend",_t),this.render=function(I,Y){if(Y!==void 0&&Y.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;C!==null&&C.renderStart(I,Y);let ie=Be.enabled===!0&&Be.isPresenting===!0,j=w!==null&&(J===null||ie)&&w.begin(R,J);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(Y),Y=Be.getCamera()),I.isScene===!0&&I.onBeforeRender(R,I,Y,J),y=Ie.get(I,v.length),y.init(Y),y.state.textureUnits=B.getTextureUnits(),v.push(y),se.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ee.setFromProjectionMatrix(se,di,Y.reversedDepth),X=this.localClippingEnabled,ce=Ge.init(this.clippingPlanes,X),S=Pe.get(I,T.length),S.init(),T.push(S),Be.enabled===!0&&Be.isPresenting===!0){let Ve=R.xr.getDepthSensingMesh();Ve!==null&&Mt(Ve,Y,-1/0,R.sortObjects)}Mt(I,Y,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(_e,Me,Y.reversedDepth),ue=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1,ue&&ye.addToRenderList(S,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ce===!0&&Ge.beginShadows();let Q=y.state.shadowsArray;if(Ye.render(Q,I,Y),ce===!0&&Ge.endShadows(),(j&&w.hasRenderPass())===!1){let Ve=S.opaque,ke=S.transmissive;if(y.setupLights(),Y.isArrayCamera){let Ke=Y.cameras;if(ke.length>0)for(let Je=0,at=Ke.length;Je<at;Je++){let ut=Ke[Je];Vt(Ve,ke,I,ut)}ue&&ye.render(I);for(let Je=0,at=Ke.length;Je<at;Je++){let ut=Ke[Je];Gt(S,I,ut,ut.viewport)}}else ke.length>0&&Vt(Ve,ke,I,Y),ue&&ye.render(I),Gt(S,I,Y)}J!==null&&G===0&&(B.updateMultisampleRenderTarget(J),B.updateRenderTargetMipmap(J)),j&&w.end(R),I.isScene===!0&&I.onAfterRender(R,I,Y),Re.resetDefaultState(),oe=-1,de=null,v.pop(),v.length>0?(y=v[v.length-1],B.setTextureUnits(y.state.textureUnits),ce===!0&&Ge.setGlobalState(R.clippingPlanes,y.state.camera)):y=null,T.pop(),T.length>0?S=T[T.length-1]:S=null,C!==null&&C.renderEnd()};function Mt(I,Y,ie,j){if(I.visible===!1)return;if(I.layers.test(Y.layers)){if(I.isGroup)ie=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(Y);else if(I.isLightProbeGrid)y.pushLightProbeGrid(I);else if(I.isLight)y.pushLight(I),I.castShadow&&y.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||ee.intersectsSprite(I)){j&&Ne.setFromMatrixPosition(I.matrixWorld).applyMatrix4(se);let Ve=re.update(I),ke=I.material;ke.visible&&S.push(I,Ve,ke,ie,Ne.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||ee.intersectsObject(I))){let Ve=re.update(I),ke=I.material;if(j&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Ne.copy(I.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Ne.copy(Ve.boundingSphere.center)),Ne.applyMatrix4(I.matrixWorld).applyMatrix4(se)),Array.isArray(ke)){let Ke=Ve.groups;for(let Je=0,at=Ke.length;Je<at;Je++){let ut=Ke[Je],je=ke[ut.materialIndex];je&&je.visible&&S.push(I,Ve,je,ie,Ne.z,ut)}}else ke.visible&&S.push(I,Ve,ke,ie,Ne.z,null)}}let He=I.children;for(let Ve=0,ke=He.length;Ve<ke;Ve++)Mt(He[Ve],Y,ie,j)}function Gt(I,Y,ie,j){let{opaque:Q,transmissive:He,transparent:Ve}=I;y.setupLightsView(ie),ce===!0&&Ge.setGlobalState(R.clippingPlanes,ie),j&&E.viewport(V.copy(j)),Q.length>0&&Wt(Q,Y,ie),He.length>0&&Wt(He,Y,ie),Ve.length>0&&Wt(Ve,Y,ie),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Vt(I,Y,ie,j){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[j.id]===void 0){let je=De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[j.id]=new Xn(1,1,{generateMipmaps:!0,type:je?Ii:Bn,minFilter:xi,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let He=y.state.transmissionRenderTarget[j.id],Ve=j.viewport||V;He.setSize(Ve.z*R.transmissionResolutionScale,Ve.w*R.transmissionResolutionScale);let ke=R.getRenderTarget(),Ke=R.getActiveCubeFace(),Je=R.getActiveMipmapLevel();R.setRenderTarget(He),R.getClearColor(ge),be=R.getClearAlpha(),be<1&&R.setClearColor(16777215,.5),R.clear(),ue&&ye.render(ie);let at=R.toneMapping;R.toneMapping=gi;let ut=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),y.setupLightsView(j),ce===!0&&Ge.setGlobalState(R.clippingPlanes,j),Wt(I,ie,j),B.updateMultisampleRenderTarget(He),B.updateRenderTargetMipmap(He),De.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let At=0,Jt=Y.length;At<Jt;At++){let Kt=Y[At],{object:It,geometry:En,material:Xe,group:Gn}=Kt;if(Xe.side===Ot&&It.layers.test(j.layers)){let gt=Xe.side;Xe.side=vn,Xe.needsUpdate=!0,In(It,ie,j,En,Xe,Gn),Xe.side=gt,Xe.needsUpdate=!0,je=!0}}je===!0&&(B.updateMultisampleRenderTarget(He),B.updateRenderTargetMipmap(He))}R.setRenderTarget(ke,Ke,Je),R.setClearColor(ge,be),ut!==void 0&&(j.viewport=ut),R.toneMapping=at}function Wt(I,Y,ie){let j=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,He=I.length;Q<He;Q++){let Ve=I[Q],{object:ke,geometry:Ke,group:Je}=Ve,at=Ve.material;at.allowOverride===!0&&j!==null&&(at=j),ke.layers.test(ie.layers)&&In(ke,Y,ie,Ke,at,Je)}}function In(I,Y,ie,j,Q,He){I.onBeforeRender(R,Y,ie,j,Q,He),I.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),Q.onBeforeRender(R,Y,ie,j,I,He),Q.transparent===!0&&Q.side===Ot&&Q.forceSinglePass===!1?(Q.side=vn,Q.needsUpdate=!0,R.renderBufferDirect(ie,Y,j,Q,I,He),Q.side=An,Q.needsUpdate=!0,R.renderBufferDirect(ie,Y,j,Q,I,He),Q.side=Ot):R.renderBufferDirect(ie,Y,j,Q,I,He),I.onAfterRender(R,Y,ie,j,Q,He)}function xn(I,Y,ie){Y.isScene!==!0&&(Y=Ce);let j=U.get(I),Q=y.state.lights,He=y.state.shadowsArray,Ve=Q.state.version,ke=Ee.getParameters(I,Q.state,He,Y,ie,y.state.lightProbeGridArray),Ke=Ee.getProgramCacheKey(ke),Je=j.programs;j.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?Y.environment:null,j.fog=Y.fog;let at=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;j.envMap=W.get(I.envMap||j.environment,at),j.envMapRotation=j.environment!==null&&I.envMap===null?Y.environmentRotation:I.envMapRotation,Je===void 0&&(I.addEventListener("dispose",hn),Je=new Map,j.programs=Je);let ut=Je.get(Ke);if(ut!==void 0){if(j.currentProgram===ut&&j.lightsStateVersion===Ve)return dn(I,ke),ut}else ke.uniforms=Ee.getUniforms(I),C!==null&&I.isNodeMaterial&&C.build(I,ie,ke),I.onBeforeCompile(ke,R),ut=Ee.acquireProgram(ke,Ke),Je.set(Ke,ut),j.uniforms=ke.uniforms;let je=j.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(je.clippingPlanes=Ge.uniform),dn(I,ke),j.needsLights=Su(I),j.lightsStateVersion=Ve,j.needsLights&&(je.ambientLightColor.value=Q.state.ambient,je.lightProbe.value=Q.state.probe,je.directionalLights.value=Q.state.directional,je.directionalLightShadows.value=Q.state.directionalShadow,je.spotLights.value=Q.state.spot,je.spotLightShadows.value=Q.state.spotShadow,je.rectAreaLights.value=Q.state.rectArea,je.ltc_1.value=Q.state.rectAreaLTC1,je.ltc_2.value=Q.state.rectAreaLTC2,je.pointLights.value=Q.state.point,je.pointLightShadows.value=Q.state.pointShadow,je.hemisphereLights.value=Q.state.hemi,je.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,je.spotLightMatrix.value=Q.state.spotLightMatrix,je.spotLightMap.value=Q.state.spotLightMap,je.pointShadowMatrix.value=Q.state.pointShadowMatrix),j.lightProbeGrid=y.state.lightProbeGridArray.length>0,j.currentProgram=ut,j.uniformsList=null,ut}function _n(I){if(I.uniformsList===null){let Y=I.currentProgram.getUniforms();I.uniformsList=lo.seqWithValue(Y.seq,I.uniforms)}return I.uniformsList}function dn(I,Y){let ie=U.get(I);ie.outputColorSpace=Y.outputColorSpace,ie.batching=Y.batching,ie.batchingColor=Y.batchingColor,ie.instancing=Y.instancing,ie.instancingColor=Y.instancingColor,ie.instancingMorph=Y.instancingMorph,ie.skinning=Y.skinning,ie.morphTargets=Y.morphTargets,ie.morphNormals=Y.morphNormals,ie.morphColors=Y.morphColors,ie.morphTargetsCount=Y.morphTargetsCount,ie.numClippingPlanes=Y.numClippingPlanes,ie.numIntersection=Y.numClipIntersection,ie.vertexAlphas=Y.vertexAlphas,ie.vertexTangents=Y.vertexTangents,ie.toneMapping=Y.toneMapping}function Oi(I,Y){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;_.setFromMatrixPosition(Y.matrixWorld);for(let ie=0,j=I.length;ie<j;ie++){let Q=I[ie];if(Q.texture!==null&&Q.boundingBox.containsPoint(_))return Q}return null}function vo(I,Y,ie,j,Q){Y.isScene!==!0&&(Y=Ce),B.resetTextureUnits();let He=Y.fog,Ve=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?Y.environment:null,ke=J===null?R.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ht.workingColorSpace,Ke=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Je=W.get(j.envMap||Ve,Ke),at=j.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,ut=!!ie.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),je=!!ie.morphAttributes.position,At=!!ie.morphAttributes.normal,Jt=!!ie.morphAttributes.color,Kt=gi;j.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Kt=R.toneMapping);let It=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,En=It!==void 0?It.length:0,Xe=U.get(j),Gn=y.state.lights;if(ce===!0&&(X===!0||I!==de)){let Ft=I===de&&j.id===oe;Ge.setState(j,I,Ft)}let gt=!1;j.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Gn.state.version||Xe.outputColorSpace!==ke||Q.isBatchedMesh&&Xe.batching===!1||!Q.isBatchedMesh&&Xe.batching===!0||Q.isBatchedMesh&&Xe.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Xe.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Xe.instancing===!1||!Q.isInstancedMesh&&Xe.instancing===!0||Q.isSkinnedMesh&&Xe.skinning===!1||!Q.isSkinnedMesh&&Xe.skinning===!0||Q.isInstancedMesh&&Xe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Xe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Xe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Xe.instancingMorph===!1&&Q.morphTexture!==null||Xe.envMap!==Je||j.fog===!0&&Xe.fog!==He||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Ge.numPlanes||Xe.numIntersection!==Ge.numIntersection)||Xe.vertexAlphas!==at||Xe.vertexTangents!==ut||Xe.morphTargets!==je||Xe.morphNormals!==At||Xe.morphColors!==Jt||Xe.toneMapping!==Kt||Xe.morphTargetsCount!==En||!!Xe.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,Xe.__version=j.version);let jn=Xe.currentProgram;gt===!0&&(jn=xn(j,Y,Q),C&&j.isNodeMaterial&&C.onUpdateProgram(j,jn,Xe));let vi=!1,ns=!1,br=!1,Pt=jn.getUniforms(),jt=Xe.uniforms;if(E.useProgram(jn.program)&&(vi=!0,ns=!0,br=!0),j.id!==oe&&(oe=j.id,ns=!0),Xe.needsLights){let Ft=Oi(y.state.lightProbeGridArray,Q);Xe.lightProbeGrid!==Ft&&(Xe.lightProbeGrid=Ft,ns=!0)}if(vi||de!==I){E.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Pt.setValue(D,"projectionMatrix",I.projectionMatrix),Pt.setValue(D,"viewMatrix",I.matrixWorldInverse);let ss=Pt.map.cameraPosition;ss!==void 0&&ss.setValue(D,xe.setFromMatrixPosition(I.matrixWorld)),P.logarithmicDepthBuffer&&Pt.setValue(D,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Pt.setValue(D,"isOrthographic",I.isOrthographicCamera===!0),de!==I&&(de=I,ns=!0,br=!0)}if(Xe.needsLights&&(Gn.state.directionalShadowMap.length>0&&Pt.setValue(D,"directionalShadowMap",Gn.state.directionalShadowMap,B),Gn.state.spotShadowMap.length>0&&Pt.setValue(D,"spotShadowMap",Gn.state.spotShadowMap,B),Gn.state.pointShadowMap.length>0&&Pt.setValue(D,"pointShadowMap",Gn.state.pointShadowMap,B)),Q.isSkinnedMesh){Pt.setOptional(D,Q,"bindMatrix"),Pt.setOptional(D,Q,"bindMatrixInverse");let Ft=Q.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),Pt.setValue(D,"boneTexture",Ft.boneTexture,B))}Q.isBatchedMesh&&(Pt.setOptional(D,Q,"batchingTexture"),Pt.setValue(D,"batchingTexture",Q._matricesTexture,B),Pt.setOptional(D,Q,"batchingIdTexture"),Pt.setValue(D,"batchingIdTexture",Q._indirectTexture,B),Pt.setOptional(D,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Pt.setValue(D,"batchingColorTexture",Q._colorsTexture,B));let is=ie.morphAttributes;if((is.position!==void 0||is.normal!==void 0||is.color!==void 0)&&H.update(Q,ie,jn),(ns||Xe.receiveShadow!==Q.receiveShadow)&&(Xe.receiveShadow=Q.receiveShadow,Pt.setValue(D,"receiveShadow",Q.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&Y.environment!==null&&(jt.envMapIntensity.value=Y.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=s1()),ns){if(Pt.setValue(D,"toneMappingExposure",R.toneMappingExposure),Xe.needsLights&&Mo(jt,br),He&&j.fog===!0&&Ue.refreshFogUniforms(jt,He),Ue.refreshMaterialUniforms(jt,j,$,te,y.state.transmissionRenderTarget[I.id]),Xe.needsLights&&Xe.lightProbeGrid){let Ft=Xe.lightProbeGrid;jt.probesSH.value=Ft.texture,jt.probesMin.value.copy(Ft.boundingBox.min),jt.probesMax.value.copy(Ft.boundingBox.max),jt.probesResolution.value.copy(Ft.resolution)}lo.upload(D,_n(Xe),jt,B)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(lo.upload(D,_n(Xe),jt,B),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Pt.setValue(D,"center",Q.center),Pt.setValue(D,"modelViewMatrix",Q.modelViewMatrix),Pt.setValue(D,"normalMatrix",Q.normalMatrix),Pt.setValue(D,"modelMatrix",Q.matrixWorld),j.uniformsGroups!==void 0){let Ft=j.uniformsGroups;for(let ss=0,Sr=Ft.length;ss<Sr;ss++){let Pf=Ft[ss];le.update(Pf,jn),le.bind(Pf,jn)}}return jn}function Mo(I,Y){I.ambientLightColor.needsUpdate=Y,I.lightProbe.needsUpdate=Y,I.directionalLights.needsUpdate=Y,I.directionalLightShadows.needsUpdate=Y,I.pointLights.needsUpdate=Y,I.pointLightShadows.needsUpdate=Y,I.spotLights.needsUpdate=Y,I.spotLightShadows.needsUpdate=Y,I.rectAreaLights.needsUpdate=Y,I.hemisphereLights.needsUpdate=Y}function Su(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(I,Y,ie){let j=U.get(I);j.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),U.get(I.texture).__webglTexture=Y,U.get(I.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:ie,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,Y){let ie=U.get(I);ie.__webglFramebuffer=Y,ie.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(I,Y=0,ie=0){J=I,k=Y,G=ie;let j=null,Q=!1,He=!1;if(I){let ke=U.get(I);if(ke.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(D.FRAMEBUFFER,ke.__webglFramebuffer),V.copy(I.viewport),K.copy(I.scissor),he=I.scissorTest,E.viewport(V),E.scissor(K),E.setScissorTest(he),oe=-1;return}else if(ke.__webglFramebuffer===void 0)B.setupRenderTarget(I);else if(ke.__hasExternalTextures)B.rebindTextures(I,U.get(I.texture).__webglTexture,U.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let at=I.depthTexture;if(ke.__boundDepthTexture!==at){if(at!==null&&U.has(at)&&(I.width!==at.image.width||I.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(I)}}let Ke=I.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(He=!0);let Je=U.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Je[Y])?j=Je[Y][ie]:j=Je[Y],Q=!0):I.samples>0&&B.useMultisampledRTT(I)===!1?j=U.get(I).__webglMultisampledFramebuffer:Array.isArray(Je)?j=Je[ie]:j=Je,V.copy(I.viewport),K.copy(I.scissor),he=I.scissorTest}else V.copy(Se).multiplyScalar($).floor(),K.copy(fe).multiplyScalar($).floor(),he=we;if(ie!==0&&(j=N),E.bindFramebuffer(D.FRAMEBUFFER,j)&&E.drawBuffers(I,j),E.viewport(V),E.scissor(K),E.setScissorTest(he),Q){let ke=U.get(I.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ke.__webglTexture,ie)}else if(He){let ke=Y;for(let Ke=0;Ke<I.textures.length;Ke++){let Je=U.get(I.textures[Ke]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ke,Je.__webglTexture,ie,ke)}}else if(I!==null&&ie!==0){let ke=U.get(I.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ke.__webglTexture,ie)}oe=-1},this.readRenderTargetPixels=function(I,Y,ie,j,Q,He,Ve,ke=0){if(!(I&&I.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=U.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ke=Ke[Ve]),Ke){E.bindFramebuffer(D.FRAMEBUFFER,Ke);try{let Je=I.textures[ke],at=Je.format,ut=Je.type;if(I.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ke),!P.textureFormatReadable(at)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(ut)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=I.width-j&&ie>=0&&ie<=I.height-Q&&D.readPixels(Y,ie,j,Q,Ae.convert(at),Ae.convert(ut),He)}finally{let Je=J!==null?U.get(J).__webglFramebuffer:null;E.bindFramebuffer(D.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(I,Y,ie,j,Q,He,Ve,ke=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=U.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ke=Ke[Ve]),Ke)if(Y>=0&&Y<=I.width-j&&ie>=0&&ie<=I.height-Q){E.bindFramebuffer(D.FRAMEBUFFER,Ke);let Je=I.textures[ke],at=Je.format,ut=Je.type;if(I.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ke),!P.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let je=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,je),D.bufferData(D.PIXEL_PACK_BUFFER,He.byteLength,D.STREAM_READ),D.readPixels(Y,ie,j,Q,Ae.convert(at),Ae.convert(ut),0);let At=J!==null?U.get(J).__webglFramebuffer:null;E.bindFramebuffer(D.FRAMEBUFFER,At);let Jt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await sm(D,Jt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,je),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,He),D.deleteBuffer(je),D.deleteSync(Jt),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,Y=null,ie=0){let j=Math.pow(2,-ie),Q=Math.floor(I.image.width*j),He=Math.floor(I.image.height*j),Ve=Y!==null?Y.x:0,ke=Y!==null?Y.y:0;B.setTexture2D(I,0),D.copyTexSubImage2D(D.TEXTURE_2D,ie,0,0,Ve,ke,Q,He),E.unbindTexture()},this.copyTextureToTexture=function(I,Y,ie=null,j=null,Q=0,He=0){let Ve,ke,Ke,Je,at,ut,je,At,Jt,Kt=I.isCompressedTexture?I.mipmaps[He]:I.image;if(ie!==null)Ve=ie.max.x-ie.min.x,ke=ie.max.y-ie.min.y,Ke=ie.isBox3?ie.max.z-ie.min.z:1,Je=ie.min.x,at=ie.min.y,ut=ie.isBox3?ie.min.z:0;else{let jt=Math.pow(2,-Q);Ve=Math.floor(Kt.width*jt),ke=Math.floor(Kt.height*jt),I.isDataArrayTexture?Ke=Kt.depth:I.isData3DTexture?Ke=Math.floor(Kt.depth*jt):Ke=1,Je=0,at=0,ut=0}j!==null?(je=j.x,At=j.y,Jt=j.z):(je=0,At=0,Jt=0);let It=Ae.convert(Y.format),En=Ae.convert(Y.type),Xe;Y.isData3DTexture?(B.setTexture3D(Y,0),Xe=D.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(B.setTexture2DArray(Y,0),Xe=D.TEXTURE_2D_ARRAY):(B.setTexture2D(Y,0),Xe=D.TEXTURE_2D),E.activeTexture(D.TEXTURE0),E.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,Y.flipY),E.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),E.pixelStorei(D.UNPACK_ALIGNMENT,Y.unpackAlignment);let Gn=E.getParameter(D.UNPACK_ROW_LENGTH),gt=E.getParameter(D.UNPACK_IMAGE_HEIGHT),jn=E.getParameter(D.UNPACK_SKIP_PIXELS),vi=E.getParameter(D.UNPACK_SKIP_ROWS),ns=E.getParameter(D.UNPACK_SKIP_IMAGES);E.pixelStorei(D.UNPACK_ROW_LENGTH,Kt.width),E.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Kt.height),E.pixelStorei(D.UNPACK_SKIP_PIXELS,Je),E.pixelStorei(D.UNPACK_SKIP_ROWS,at),E.pixelStorei(D.UNPACK_SKIP_IMAGES,ut);let br=I.isDataArrayTexture||I.isData3DTexture,Pt=Y.isDataArrayTexture||Y.isData3DTexture;if(I.isDepthTexture){let jt=U.get(I),is=U.get(Y),Ft=U.get(jt.__renderTarget),ss=U.get(is.__renderTarget);E.bindFramebuffer(D.READ_FRAMEBUFFER,Ft.__webglFramebuffer),E.bindFramebuffer(D.DRAW_FRAMEBUFFER,ss.__webglFramebuffer);for(let Sr=0;Sr<Ke;Sr++)br&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,U.get(I).__webglTexture,Q,ut+Sr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,U.get(Y).__webglTexture,He,Jt+Sr)),D.blitFramebuffer(Je,at,Ve,ke,je,At,Ve,ke,D.DEPTH_BUFFER_BIT,D.NEAREST);E.bindFramebuffer(D.READ_FRAMEBUFFER,null),E.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(Q!==0||I.isRenderTargetTexture||U.has(I)){let jt=U.get(I),is=U.get(Y);E.bindFramebuffer(D.READ_FRAMEBUFFER,z),E.bindFramebuffer(D.DRAW_FRAMEBUFFER,F);for(let Ft=0;Ft<Ke;Ft++)br?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,jt.__webglTexture,Q,ut+Ft):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,jt.__webglTexture,Q),Pt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,is.__webglTexture,He,Jt+Ft):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,is.__webglTexture,He),Q!==0?D.blitFramebuffer(Je,at,Ve,ke,je,At,Ve,ke,D.COLOR_BUFFER_BIT,D.NEAREST):Pt?D.copyTexSubImage3D(Xe,He,je,At,Jt+Ft,Je,at,Ve,ke):D.copyTexSubImage2D(Xe,He,je,At,Je,at,Ve,ke);E.bindFramebuffer(D.READ_FRAMEBUFFER,null),E.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Pt?I.isDataTexture||I.isData3DTexture?D.texSubImage3D(Xe,He,je,At,Jt,Ve,ke,Ke,It,En,Kt.data):Y.isCompressedArrayTexture?D.compressedTexSubImage3D(Xe,He,je,At,Jt,Ve,ke,Ke,It,Kt.data):D.texSubImage3D(Xe,He,je,At,Jt,Ve,ke,Ke,It,En,Kt):I.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,He,je,At,Ve,ke,It,En,Kt.data):I.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,He,je,At,Kt.width,Kt.height,It,Kt.data):D.texSubImage2D(D.TEXTURE_2D,He,je,At,Ve,ke,It,En,Kt);E.pixelStorei(D.UNPACK_ROW_LENGTH,Gn),E.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt),E.pixelStorei(D.UNPACK_SKIP_PIXELS,jn),E.pixelStorei(D.UNPACK_SKIP_ROWS,vi),E.pixelStorei(D.UNPACK_SKIP_IMAGES,ns),He===0&&Y.generateMipmaps&&D.generateMipmap(Xe),E.unbindTexture()},this.initRenderTarget=function(I){U.get(I).__webglFramebuffer===void 0&&B.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?B.setTextureCube(I,0):I.isData3DTexture?B.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?B.setTexture2DArray(I,0):B.setTexture2D(I,0),E.unbindTexture()},this.resetState=function(){k=0,G=0,J=null,E.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};async function Vm(){if(typeof window<"u"&&window.MCGROT_ASSETS)return window.MCGROT_ASSETS;let[i,e,t,n,s]=await Promise.all([fetch("assets/manifest.json").then(a=>a.json()),fetch("assets/leith.json").then(a=>a.json()),fetch("assets/catalog.json").then(a=>a.ok?a.json():null).catch(()=>null),fetch("assets/shopfronts/manifest.json").then(a=>a.ok?a.json():null).catch(()=>null),fetch("assets/shopfronts/atlas-pages.json").then(a=>a.ok?a.json():null).catch(()=>null)]),r=await fetch("assets/comic-lines.json").then(a=>a.ok?a.json():null).catch(()=>null),o=await fetch("assets/readings.json").then(a=>a.ok?a.json():null).catch(()=>null);return{manifest:i,leith:e,catalog:t,facadeManifest:n,facadeAtlas:s,comicLines:r,readings:o,images:null,audio:null}}function mn(i,e){if(i){if(i.images&&i.images[e])return i.images[e];if(i.audio&&i.audio[e])return i.audio[e];if(i.models&&i.models[e])return i.models[e]}return`assets/${e}`}function st(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new pt,l=0;for(let u=0;u<i.length;++u){let h=i[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0,h=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+u);u+=i[d].attributes.position.count}c.setIndex(h)}for(let u in r){let h=Wm(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][d]);let p=Wm(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(p)}}}return c}function Wm(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new Ut(o,t,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let h=c/t;for(let d=0,f=u.count;d<f;d++)for(let p=0;p<t;p++){let x=u.getComponent(d,p);a.setComponent(d+h,p,x)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function id(i,e){if(e===Dh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ao||e===Ea){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===ao)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Ca=(()=>{let i=6221086;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),Ym=8,rd=2.4,Xm=1.435,eu=.075,qm=.09,r1=620,o1=90,a1=34,c1=.04;function si(i,e,t){let n=Math.imul(i,374761393)^Math.imul(e,668265263)^Math.imul(t,2246822519);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function l1(i,e,t,n){let s=Math.floor(i),r=Math.floor(e),o=i-s,a=e-r,c=o*o*(3-2*o),l=a*a*(3-2*a),u=(x,g)=>si((x%t+t)%t,(g%t+t)%t,n),h=u(s,r),d=u(s+1,r),f=u(s,r+1),p=u(s+1,r+1);return h+(d-h)*c+(f+(p-f)*c-(h+(d-h)*c))*l}function on(i,e,t,n,s){let r=0,o=.5,a=1;for(let c=0;c<n;c++)r+=o*l1(i*a,e*a,t*a,s+c*17),a*=2,o*=.5;return r}function ur(i,e){let t=new xt(i);return t.wrapS=t.wrapT=ni,t.colorSpace=tt,t.anisotropy=16,e&&t.repeat.set(e[0],e[1]),t}function Zm(){let t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d"),s=n.createImageData(512,512),r=s.data;for(let o=0;o<512;o++)for(let a=0;a<512;a++){let c=a/512*8,l=o/512*8,u=44,h=45,d=41,f=on(c,l,8,4,1)-.5;u+=f*26,h+=f*26,d+=f*22;let p=on(c*.5,l*.5,Math.max(1,4),2,7);if(p>.6){let S=Math.min(1,(p-.6)*6);u+=(26-u)*.55*S,h+=(26-h)*.55*S,d+=(25-d)*.55*S}let x=si(a,o,99),g=x>.86?(x-.86)*300:x<.1?-x*90:0;u+=g,h+=g,d+=g*.9;let m=c*1.6+on(c*3,l*3,32,2,55)*1.4,b=l*1.6+on(c*3+9,l*3+9,32,2,71)*1.4,M=Math.abs(on(m,b,16,3,21)-.5);if(M<.012){let S=1-M/.012;u-=15*S,h-=15*S,d-=14*S}let _=(o*512+a)*4;r[_]=Math.max(0,Math.min(255,u)),r[_+1]=Math.max(0,Math.min(255,h)),r[_+2]=Math.max(0,Math.min(255,d)),r[_+3]=255}return n.putImageData(s,0,0),ur(t)}function Km(){let n=document.createElement("canvas");n.width=n.height=512;let s=n.getContext("2d"),r=s.createImageData(512,512),o=r.data,a=512/4,c=3;for(let l=0;l<512;l++)for(let u=0;u<512;u++){let h=Math.floor(u/a),d=Math.floor(l/a),f=u-h*a,p=l-d*a,x=f<c||p<c||f>a-c||p>a-c,g=(si(h,d,5)-.5)*18,m=78+g,b=77+g,M=71+g,_=u/512*8,S=l/512*8,y=on(_,S,8,4,3)-.5;m+=y*34,b+=y*34,M+=y*30,x&&(m*=.52,b*=.56,M*=.48);let T=si(u,l,41),v=T>.9?(T-.9)*160:0;m+=v,b+=v,M+=v;let w=(l*512+u)*4;o[w]=Math.max(0,Math.min(255,m)),o[w+1]=Math.max(0,Math.min(255,b)),o[w+2]=Math.max(0,Math.min(255,M)),o[w+3]=255}return s.putImageData(r,0,0),ur(n)}function $m(i,e){let n=document.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d"),r=s.createImageData(256,256),o=r.data,a=256/2;for(let l=0;l<256;l++)for(let u=0;u<256;u++){let h=(u-a)/a,d=(l-a)/a,f=Math.atan2(d,h),p=Math.hypot(h,d),x=.7+.26*on(Math.cos(f)*2+4,Math.sin(f)*2+4,8,3,i),[g,m,b,M]=e(p/x,u,l),_=(l*256+u)*4;o[_]=Math.max(0,Math.min(255,g)),o[_+1]=Math.max(0,Math.min(255,m)),o[_+2]=Math.max(0,Math.min(255,b)),o[_+3]=Math.max(0,Math.min(255,M))}s.putImageData(r,0,0);let c=new xt(n);return c.colorSpace=tt,c.anisotropy=16,c}function sd(i,e,t){return[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t]}function u1(){let i=[10,10,9],e=[40,39,35],t=[104,100,88];return $m(11,(n,s,r)=>{let o=si(s,r,63),a;n<.72?a=sd(i,e,Ia(0,.72,n)):(a=sd(e,t,Ia(.72,.97,n)),a=a.map(l=>l+(o-.5)*26));let c=(1-Ia(.9,1,n))*255;return[a[0],a[1],a[2],c]})}function h1(){let i=[104,110,96],e=[52,54,48];return $m(23,t=>{let n=sd(i,e,Ia(.35,1,t)),s=(1-Ia(.86,1,t))*255;return[n[0],n[1],n[2],s]})}function Ia(i,e,t){let n=Math.max(0,Math.min(1,(t-i)/(e-i||1e-6)));return n*n*(3-2*n)}var od=26;function Jm(){let t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d"),s=n.createImageData(512,512),r=s.data;for(let o=0;o<512;o++)for(let a=0;a<512;a++){let c=a/512*8,l=o/512*8,u=62,h=52,d=36,f=on(c,l,8,4,131)-.5;u+=f*30,h+=f*26,d+=f*20;let p=on(c*.9+3,l*.9+3,8,3,137);if(p>.56){let M=Math.min(1,(p-.56)*5);u+=(52-u)*.6*M,h+=(60-h)*.6*M,d+=(34-d)*.6*M}let x=on(c*.6+11,l*.6+11,8,3,149);if(x<.42){let M=Math.min(1,(.42-x)*4);u*=1-.28*M,h*=1-.26*M,d*=1-.22*M}let g=si(a,o,151),m=g>.9?(g-.9)*220:g<.07?-g*120:0;u+=m,h+=m*.95,d+=m*.8;let b=(o*512+a)*4;r[b]=Math.max(0,Math.min(255,u)),r[b+1]=Math.max(0,Math.min(255,h)),r[b+2]=Math.max(0,Math.min(255,d)),r[b+3]=255}return n.putImageData(s,0,0),ur(t)}function jm(){let t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d"),s=n.createImageData(512,512),r=s.data;for(let a=0;a<512;a++)for(let c=0;c<512;c++){let l=c/512*22,u=a/512*22,h=40,d=47,f=26,p=on(l,u,22,4,211)-.5;h+=p*30,d+=p*36,f+=p*20;let x=on(l*.55+5,u*.55+5,22,3,223);if(x>.5){let R=Math.min(1,(x-.5)*5);h+=(24-h)*.8*R,d+=(33-d)*.8*R,f+=(17-f)*.8*R}let g=on(l*.7+17,u*.7+2,22,3,239);if(g>.62){let R=Math.min(1,(g-.62)*6);h+=(66-h)*.55*R,d+=(58-d)*.55*R,f+=(36-f)*.55*R}let m=Math.abs(on(l*.5+9,u*2.2,22,2,227)-.5);if(m<.035){let R=1-m/.035;h+=(74-h)*.5*R,d+=(64-d)*.5*R,f+=(44-f)*.5*R}let b=si(c,a,229),M=b>.88?(b-.88)*160:0;h+=M*.7,d+=M,f+=M*.5;let _=Math.min(c,511-c)/512,S=Math.min(a,511-a)/512,y=Math.min(_,S)/.14,T=on(l*2,u*2,44,2,233)*.5,v=Math.max(0,Math.min(1,y-T)),w=(a*512+c)*4;r[w]=Math.max(0,Math.min(255,h)),r[w+1]=Math.max(0,Math.min(255,d)),r[w+2]=Math.max(0,Math.min(255,f)),r[w+3]=Math.round(v*255)}n.putImageData(s,0,0);let o=new xt(t);return o.colorSpace=tt,o.anisotropy=16,o}function Qm(i,e){let t=i.streetLine||[];if(t.length<2)return{group:new nt};let n=i.groundHeight||(()=>0),s=new nt;return e.add(s),d1(t,s,n),f1(t,s,n),{group:s}}function Pa(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0;return{point:[s+c*h,r+l*h],tangent:[c/(u||1),l/(u||1)]}}t+=u}return null}function e0(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function d1(i,e,t){let n=Math.min(r1,e0(i)),s=3,r=[],o=[[-eu/2,0],[-eu/2,qm],[eu/2,qm],[eu/2,0]];for(let l of[-1,1]){let u=[],h=[],d=0;for(let x=0;x<=n;x+=s){let g=Pa(i,x);if(!g)break;let[m,b]=g.tangent,M=-b,_=m,S=g.point[0]+M*l*(Xm/2),y=g.point[1]+_*l*(Xm/2),T=t(S,y);for(let[v,w]of o)u.push(S+M*v,T+w,y+_*v);d++}if(d<2)continue;let f=o.length;for(let x=0;x<d-1;x++)for(let g=0;g<f-1;g++){let m=x*f+g,b=x*f+g+1,M=(x+1)*f+g,_=(x+1)*f+g+1;h.push(m,M,b,b,M,_)}let p=new pt;p.setAttribute("position",new Qe(u,3)),p.setIndex(h),p.computeVertexNormals(),r.push(p)}if(!r.length)return;let a=st(r,!1),c=new qe({color:4142124,side:Ot});e.add(new Oe(a,c))}function f1(i,e,t){let n=e0(i),s=u1(),r=h1(),o=(a,c,l,u,h,d)=>{let f=[];for(let x=0;x<c;x++){let g=20+Ca()*Math.max(1,n-40),m=Pa(i,g);if(!m)continue;let[b,M]=m.tangent,_=-M,S=b,y=(Ca()*2-1)*l,T=m.point[0]+_*y,v=m.point[1]+S*y,w=u+Ca()*(h-u),R=new Rt(w,w*(.6+Ca()*.7));R.rotateX(-Math.PI/2),R.rotateY(Ca()*Math.PI*2),R.translate(T,t(T,v)+c1,v),f.push(R)}if(!f.length)return;let p=new qe({map:a,transparent:!0,opacity:d,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});e.add(new Oe(st(f,!1),p))};o(s,o1,6.2,.7,2.4,.92),o(r,a1,6.2,1.2,3.6,.5)}var p1=2;function t0(i){let e=[],t=[],n=[];function s(h){for(let d=0;d<e.length;d++){let f=e[d].x-h[0],p=e[d].z-h[1];if(Math.hypot(f,p)<p1)return d}return e.push({x:h[0],z:h[1]}),e.length-1}i.forEach((h,d)=>{if(h.length<2)return;let f=s(h[0]),p=s(h[h.length-1]);t[d]=[f,p],(n[f]??=[]).push({segIdx:d,otherNode:p}),(n[p]??=[]).push({segIdx:d,otherNode:f})});let r=new Set;function o(h){let d=[[e[h].x,e[h].z]],f=h;for(;;){let p=(n[f]||[]).filter(_=>!r.has(_.segIdx));if(p.length===0)break;let{segIdx:x,otherNode:g}=p[0];r.add(x);let m=i[x],[b]=t[x],M=b===f?m:[...m].reverse();for(let _=1;_<M.length;_++)d.push(M[_]);f=g}return d}function a(h){let d=0;for(let f=1;f<h.length;f++)d+=Math.hypot(h[f][0]-h[f-1][0],h[f][1]-h[f-1][1]);return d}let c=[],l=e.map((h,d)=>d).filter(h=>(n[h]||[]).length!==2);for(let h of l){let d=r.size,f=o(h);r.size>d&&c.push(f)}for(let h=0;h<e.length;h++)(n[h]||[]).some(f=>!r.has(f.segIdx))&&c.push(o(h));c.sort((h,d)=>a(d)-a(h));let u=c[0]||[];return u.length>1&&u[0][1]>u[u.length-1][1]&&u.reverse(),u}function n0(i){return function(t,n){let s=null,r=1/0,o=null;for(let a=0;a<i.length-1;a++){let[c,l]=i[a],[u,h]=i[a+1],d=u-c,f=h-l,p=d*d+f*f,x=p>0?((t-c)*d+(n-l)*f)/p:0;x=Math.max(0,Math.min(1,x));let g=c+x*d,m=l+x*f,b=Math.hypot(t-g,n-m);if(b<r){r=b,s=[g,m];let M=Math.sqrt(p);o=M>0?[d/M,f/M]:[0,1]}}return{point:s,distance:r,tangent:o}}}function Es(i,e,t){let n=1/0,s=0,r=0;for(let o=0;o<t.length-1;o++){let[a,c]=t[o],[l,u]=t[o+1],h=l-a,d=u-c,f=h*h+d*d,p=Math.sqrt(f),x=f>0?((i-a)*h+(e-c)*d)/f:0;x=Math.max(0,Math.min(1,x));let g=Math.hypot(i-(a+x*h),e-(c+x*d));g<n&&(n=g,s=r+x*p),r+=p}return s}function ad(i,e){let t=0,n=0;for(let o=0;o<i.length-1;o++){let[a,c]=i[o],[l,u]=i[o+1],h=Math.hypot(l-a,u-c);if(n=t,t+=h,e<=t||o===i.length-2){let d=h>0?Math.max(0,Math.min(1,(e-n)/h)):0,f=a+(l-a)*d,p=c+(u-c)*d,x=h>0?[(l-a)/h,(u-c)/h]:[0,1];return{point:[f,p],tangent:x}}}let[s,r]=i[0]||[0,0];return{point:[s,r],tangent:[0,1]}}function ho(i,e){let t=i.footprint,n=[];if(!t||t.length<3||!e)return n;let s=0,r=0;for(let a of t)s+=a[0],r+=a[1];s/=t.length,r/=t.length;let o=[];for(let a=0;a<t.length;a++){let c=t[a],l=t[(a+1)%t.length],u=l[0]-c[0],h=l[1]-c[1],d=Math.hypot(u,h);if(d<.25)continue;let f=(c[0]+l[0])/2,p=(c[1]+l[1])/2,x=e(f,p);if(!x||!x.point)continue;let g=e(c[0],c[1]),m=e(l[0],l[1]);if(Math.min(x.distance,g?g.distance:1/0,m?m.distance:1/0)>30)continue;let M=1/d,_=-h*M,S=u*M;_*(f-s)+S*(p-r)<0&&(_=-_,S=-S);let y=x.point[0]-f,T=x.point[1]-p,v=Math.hypot(y,T)||1,w=(_*y+S*T)/v;if(w<-.3||!(w>=.35))continue;let A=!1;x.tangent&&d<=9&&(A=Math.abs(u*M*x.tangent[0]+h*M*x.tangent[1])<.88),o.push({i:a,ax:c[0],az:c[1],bx:l[0],bz:l[1],dirx:u*M,dirz:h*M,len:d,isChamfer:A})}for(let a of o){let c=n[n.length-1];c&&a.i===c.endEdge+1&&c.dirx*a.dirx+c.dirz*a.dirz>.985?(c.bx=a.bx,c.bz=a.bz,c.len+=a.len,c.endEdge=a.i,c.isChamfer=c.isChamfer||a.isChamfer):n.push({ax:a.ax,az:a.az,bx:a.bx,bz:a.bz,dirx:a.dirx,dirz:a.dirz,len:a.len,isChamfer:a.isChamfer,startEdge:a.i,endEdge:a.i})}if(n.length>1){let a=n[0],c=n[n.length-1];c.endEdge===t.length-1&&a.startEdge===0&&Math.hypot(c.bx-a.ax,c.bz-a.az)<.5&&c.dirx*a.dirx+c.dirz*a.dirz>.985&&(a.ax=c.ax,a.az=c.az,a.len+=c.len,a.isChamfer=a.isChamfer||c.isChamfer,n.pop())}return n}var ts=[[0,0],[150,.6],[300,1.8],[450,3.6],[600,6.2],[750,9.4],[900,13],[1050,16.6],[1200,19.9],[1350,22.8],[1500,25.4],[1617,27]],ud=1;function m1(i){ud=Number.isFinite(i)&&i>0?i:1}function g1(){return ud}var ld=ts.length,i0=ts.map((i,e)=>{if(e===0||e===ld-1)return 0;let t=ts[e-1],n=ts[e+1];return(n[1]-t[1])/(n[0]-t[0])});function x1(i,e,t,n,s,r){let o=i*i,a=o*i,c=2*a-3*o+1,l=a-2*o+i,u=-2*a+3*o,h=a-o;return c*e+l*r*n+u*t+h*r*s}function _1(i){if(i<=ts[0][0])return ts[0][1];let e=ts[ld-1];if(i>=e[0])return e[1];for(let t=0;t<ld-1;t++){let[n,s]=ts[t],[r,o]=ts[t+1];if(i>=n&&i<=r){let a=r-n,c=a>0?(i-n)/a:0;return x1(c,s,o,i0[t],i0[t+1],a)}}return e[1]}function cd(i){return _1(i)*ud}function s0(i){function e(t,n){if(!i||i.length<2)return cd(0);let s=Es(t,n,i);return cd(s)}return{groundHeight:e,heightAtChainage:cd,setExaggeration:m1,getExaggeration:g1}}function y1(i){let e=1/0,t=-1/0,n=1/0,s=-1/0;for(let[r,o]of i)r<e&&(e=r),r>t&&(t=r),o<n&&(n=o),o>s&&(s=o);return{minX:e,maxX:t,minZ:n,maxZ:s}}function o0(i,e,t,n,s,r){let o=s-t,a=r-n,c=o*o+a*a,l=c>0?((i-t)*o+(e-n)*a)/c:0;l=l<0?0:l>1?1:l;let u=t+o*l,h=n+a*l;return{cx:u,cz:h,dist:Math.hypot(i-u,e-h)}}function a0(i,e,t){let n=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){let[o,a]=t[s],[c,l]=t[r];a>e!=l>e&&i<(c-o)*(e-a)/(l-a)+o&&(n=!n)}return n}function v1(i,e,t,n){if(i.type==="circle"){let d=e-i.x,f=t-i.z,p=Math.hypot(d,f),x=i.r+n;return p>=x?null:p<1e-6?{depth:x,nx:1,nz:0}:{depth:x-p,nx:d/p,nz:f/p}}let s=i.pts,r=null;for(let d=0,f=s.length-1;d<s.length;f=d++){let p=o0(e,t,s[f][0],s[f][1],s[d][0],s[d][1]);(!r||p.dist<r.dist)&&(r=p)}if(!r)return null;let o=a0(e,t,s);if(!o&&r.dist>=n)return null;let a=o?-1:1,c=(e-r.cx)*a,l=(t-r.cz)*a,u=Math.hypot(c,l),h=o?r.dist+n:n-r.dist;return u<1e-6?{depth:h,nx:1,nz:0}:{depth:h,nx:c/u,nz:l/u}}function r0(i,e,t,n){if(i.type==="circle"){let h=e-i.x,d=t-i.z,f=Math.hypot(h,d),p=i.r+n;return f>=p?null:f<1e-6?[i.x+p,i.z]:[i.x+h/f*p,i.z+d/f*p]}let s=i.pts,r=null;for(let h=0,d=s.length-1;h<s.length;d=h++){let f=o0(e,t,s[d][0],s[d][1],s[h][0],s[h][1]);(!r||f.dist<r.dist)&&(r=f)}if(!r)return null;let o=a0(e,t,s);if(!o&&r.dist>=n)return null;let a=o?1:-1,c=(r.cx-e)*a,l=(r.cz-t)*a,u=Math.hypot(c,l);return u<1e-6?[r.cx,r.cz]:[r.cx+c/u*n,r.cz+l/u*n]}function c0(){let i=[],e=[],t=new Map,n=!0,s=(b,M)=>`${b},${M}`;function r(b){let M=i.length;i.push(b);let{minX:_,maxX:S,minZ:y,maxZ:T}=b.bounds,v=Math.floor(_/8),w=Math.floor(S/8),R=Math.floor(y/8),A=Math.floor(T/8);for(let C=v;C<=w;C++)for(let N=R;N<=A;N++){let z=s(C,N),F=t.get(z);F||t.set(z,F=[]),F.push(M)}return M}function o(b,M="poly"){if(!Array.isArray(b)||b.length<3)return-1;let _=b.filter(S=>Array.isArray(S)&&Number.isFinite(S[0])&&Number.isFinite(S[1]));return _.length<3?-1:r({type:"poly",tag:M,pts:_,bounds:y1(_)})}function a(b,M,_,S,y=0,T="box"){if(![b,M,_,S,y].every(Number.isFinite)||_<=0||S<=0)return-1;let v=Math.sin(y),w=Math.cos(y),R=(A,C)=>[b+A*_*w+C*S*v,M-A*_*v+C*S*w];return o([R(-1,-1),R(1,-1),R(1,1),R(-1,1)],T)}function c(b,M,_,S="circle"){return![b,M,_].every(Number.isFinite)||_<=0?-1:r({type:"circle",tag:S,x:b,z:M,r:_,bounds:{minX:b-_,maxX:b+_,minZ:M-_,maxZ:M+_}})}function l(b,M,_,S="mover"){return typeof b!="function"||typeof M!="function"||!Number.isFinite(_)||_<=0?-1:(e.push({type:"circle",tag:S,r:_,get x(){return b()},get z(){return M()}}),e.length-1)}function u(b,M,_){let S=new Set,y=[],T=Math.floor((b-_)/8),v=Math.floor((b+_)/8),w=Math.floor((M-_)/8),R=Math.floor((M+_)/8);for(let A=T;A<=v;A++)for(let C=w;C<=R;C++){let N=t.get(s(A,C));if(N)for(let z of N)S.has(z)||(S.add(z),y.push(i[z]))}for(let A of e)y.push(A);return y}function h(b,M,_){let S=b,y=M;for(let T=0;T<4;T++){let v=!1;for(let w of u(S,y,_)){let R=r0(w,S,y,_);R&&(S=R[0],y=R[1],v=!0)}if(!v)return[S,y,!0]}return[S,y,!1]}function d(b,M,_){let S=null;for(let y of u(b,M,_)){let T=v1(y,b,M,_);T&&(!S||T.depth>S.depth)&&(S=T)}return S}function f(b,M,_,S){if(!n||i.length===0&&e.length===0)return[_,S];let y=_-b,T=S-M,v=Math.hypot(y,T);if(v<1e-9)return[_,S];let w=b,R=M;if(x(w,R)){let[z,F]=h(w,R,.35);w=z,R=F}let A=v>.25?Math.ceil(v/.25):1,C=y/A,N=T/A;for(let z=0;z<A;z++){let F=w+C,k=R+N;if(!x(F,k)){w=F,R=k;continue}let G=d(F,k,.35);if(!G)break;let J=C*G.nx+N*G.nz,oe=w+C-G.nx*J,de=R+N-G.nz*J;if(!x(oe,de)){w=oe,R=de;continue}break}return[w,R]}function p(b,M,_=.35*1.5){if(i.length===0&&e.length===0)return[b,M];let[S,y]=h(b,M,_);return[S,y]}function x(b,M,_=.35){for(let S of u(b,M,_))if(r0(S,b,M,_))return!0;return!1}function g(){let b={};for(let M of i)b[M.tag]=(b[M.tag]||0)+1;for(let M of e)b[M.tag]=(b[M.tag]||0)+1;return{solids:i.length,movers:e.length,cells:t.size,byTag:b,enabled:n}}function m(b){let M=[];for(let _ of i)_.tag===b&&_.type==="circle"&&M.push(_.r);for(let _ of e)_.tag===b&&M.push(_.r);return M}return{addPolygon:o,addBox:a,addCircle:c,addMover:l,radii:m,playerRadius:.35,resolveMove:f,resolveFree:p,isBlocked:x,stats:g,setEnabled:b=>{n=!!b},isEnabled:()=>n,get count(){return i.length+e.length}}}var La=7,M1=3,l0=La+M1,b1=.03,S1=3.2,u0=-.06,E1=4870466,h0=[9078112,7039843,8016448,5592655,7630666,7232847,6249034,8153690],d0=4;function T1(){let t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d"),s=n.createImageData(256,256),r=s.data,a=256/13;for(let c=0;c<256;c++){let l=Math.floor(c/a),h=c-l*a<2;for(let d=0;d<256;d++){let f=d/256*16,p=c/256*16,x=150,g=146,m=134,b=on(f,p,16,4,61)-.5;x+=b*34,g+=b*32,m+=b*28;let M=Math.floor((d+l*37)/(256/5)),_=(si(M,l,17)-.5)*22;x+=_,g+=_,m+=_,h&&(x*=.62,g*=.62,m*=.6);let S=on(f*.35,p*.9+4,16,3,83);if(S>.56){let w=Math.min(1,(S-.56)*4.5);x*=1-.35*w,g*=1-.33*w,m*=1-.28*w}let y=si(d,c,97),T=y>.92?(y-.92)*200:0;x+=T,g+=T,m+=T*.9;let v=(c*256+d)*4;r[v]=Math.max(0,Math.min(255,x)),r[v+1]=Math.max(0,Math.min(255,g)),r[v+2]=Math.max(0,Math.min(255,m)),r[v+3]=255}}return n.putImageData(s,0,0),ur(t,[1/d0,1/d0])}function m0(i){let e=new nt,t=t0(i.streetPaths),n=s0(t),s=n.groundHeight,r=w1(i.streetPaths,s);r&&e.add(r);let o=r?{road:r.children[0].material,pavement:r.children[1].material}:{},a=R1(i.buildings,s);a&&e.add(a);let c=c0();for(let h of i.buildings)c.addPolygon(h.footprint,"building");e.add(L1(i,s)),e.add(N1(s));let l=D1(e),u=new Go(E1,.0095);return{group:e,streetLine:t,nearestStreetPoint:n0(t),collision:c,fog:u,groundHeight:s,setExaggeration:n.setExaggeration,getExaggeration:n.getExaggeration,lights:l,surfaces:o}}function w1(i,e){let t=[],n=[];for(let r of i){if(r.length<2)continue;let o=A1(r,e);o&&(t.push(o.road),n.push(o.paving))}if(t.length===0)return null;let s=new nt;return s.position.y=b1,s.add(new Oe(st(t,!1),new Ai({map:Zm(),roughness:1,metalness:0}))),s.add(new Oe(st(n,!1),new Ai({map:Km(),roughness:1,metalness:0}))),s}function A1(i,e){let t=i.length,n=[],s=[],r=0;for(let a=0;a<t;a++){let c=i[Math.max(0,a-1)],l=i[Math.min(t-1,a+1)],u=l[0]-c[0],h=l[1]-c[1],d=Math.hypot(u,h)||1;n.push([-h/d,u/d]),a>0&&(r+=Math.hypot(i[a][0]-i[a-1][0],i[a][1]-i[a-1][1])),s.push(r)}let o=(a,c,l)=>{let u=[],h=[],d=[],f=Math.abs(c-a);for(let x=0;x<t;x++){let[g,m]=i[x],[b,M]=n[x],_=s[x]/l,S=g+b*a,y=m+M*a,T=g+b*c,v=m+M*c;u.push(S,e?e(S,y):0,y),u.push(T,e?e(T,v):0,v),h.push(0,_,f/l,_)}for(let x=0;x<t-1;x++){let g=x*2,m=x*2+1,b=(x+1)*2,M=(x+1)*2+1;d.push(g,m,M,g,M,b)}let p=new pt;return p.setAttribute("position",new Qe(u,3)),p.setAttribute("uv",new Qe(h,2)),p.setIndex(d),p.computeVertexNormals(),p};return{road:o(-La,La,Ym),paving:st([o(-l0,-La,rd),o(La,l0,rd)],!1)}}function R1(i,e){let t=[],n=0;if(i.forEach((a,c)=>{let l=I1(a,c,e);l?t.push(l):n++}),t.length===0)return null;n>0&&console.warn(`[world] skipped ${n}/${i.length} buildings with bad footprints`);let s=st(t,!1),r=new qe({vertexColors:!0,flatShading:!0,map:T1()}),o=new Oe(s,r);return o.name="buildings",o}var C1=3;function I1(i,e,t){let{footprint:n,levels:s}=i;if(!n||n.length<3)return null;let r=Math.max(1,s||1)*S1;try{let o=new eo;o.moveTo(n[0][0],-n[0][1]);for(let d=1;d<n.length;d++)o.lineTo(n[d][0],-n[d][1]);o.closePath();let a=t?C1:0,c=new sa(o,{depth:r+a,bevelEnabled:!1,curveSegments:1});if(c.rotateX(-Math.PI/2),t){let d=0,f=0;for(let[x,g]of n)d+=x,f+=g;d/=n.length,f/=n.length;let p=t(d,f);c.translate(0,p-a,0)}let l=fd(e,i),u=c.attributes.position.count,h=new Float32Array(u*3);for(let d=0;d<u;d++)h[d*3]=l.r,h[d*3+1]=l.g,h[d*3+2]=l.b;return c.setAttribute("color",new Qe(h,3)),c}catch{return null}}function fd(i,e){let t=Math.abs(P1(`${i}:${e.footprint[0][0]}:${e.footprint[0][1]}`)),n=new me(h0[t%h0.length]),s={h:0,s:0,l:0};n.getHSL(s);let r=(t%17/17-.5)*.12,o=new me;return o.setHSL(s.h,s.s,Math.min(.85,Math.max(.08,s.l+r))),o}function P1(i){let e=0;for(let t=0;t<i.length;t++)e=(e<<5)-e+i.charCodeAt(t),e|=0;return e}function L1(i,e){let t=1/0,n=-1/0,s=1/0,r=-1/0;for(let m of i.buildings)for(let[b,M]of m.footprint)b<t&&(t=b),b>n&&(n=b),M<s&&(s=M),M>r&&(r=M);let o=400,a=n-t+o*2,c=r-s+o*2,l=(t+n)/2,u=(s+r)/2,h=Math.max(1,Math.round(a/10)),d=Math.max(1,Math.round(c/10)),f=new Rt(a,c,h,d);if(f.rotateX(-Math.PI/2),e){let m=f.attributes.position;for(let b=0;b<m.count;b++){let M=m.getX(b)+l,_=m.getZ(b)+u;m.setY(b,e(M,_)+u0)}m.needsUpdate=!0,f.computeVertexNormals()}let p=Jm();p.repeat.set(a/od,c/od);let x=new qe({map:p}),g=new Oe(f,x);return g.position.set(l,e?0:u0,u),g}var hd=-719,dd=1303;function N1(i){let e=new Rt(80,14,20,2);e.rotateX(-Math.PI/2);let t=-.483,n=.876;if(e.rotateY(Math.atan2(-n,t)),i){let u=e.attributes.position;for(let h=0;h<u.count;h++){let d=u.getX(h)+hd,f=u.getZ(h)+dd;u.setY(h,i(d,f)+.02)}u.needsUpdate=!0,e.computeVertexNormals()}let s=new Oe(e,new qe({map:jm(),transparent:!0,depthWrite:!1}));s.position.set(hd,i?0:.02,dd),s.name="elm-row-gardens";let r=924192,o=()=>{r|=0,r=r+1831565813|0;let u=Math.imul(r^r>>>15,1|r);return u=u+Math.imul(u^u>>>7,61|u)^u,((u^u>>>14)>>>0)/4294967296},a=[];for(let u=0;u<26;u++){let h=(o()-.5)*74,d=(o()-.5)*10,f=new Yn(1,6,4),p=.5+o()*1.3;f.scale(.9+o()*1.6,p,.9+o()*1.6),f.rotateY(o()*Math.PI);let x=hd+t*h-n*d,g=dd+n*h+t*d,m=i?i(x,g):0;f.translate(x,m+p*.55,g),a.push(f)}let c=new Oe(st(a),new qe({color:3029024}));c.name="elm-row-bushes";let l=new nt;return l.add(s,c),l}function D1(i){let e=new aa(9147296,3814180,3.9);i.add(e);let t=new sr(13621480,1.15);t.position.set(-200,300,150),t.castShadow=!1,i.add(t);let n=new ua(4999224,1.4);return i.add(n),{hemi:e,sun:t,ambient:n}}var F1=16747082,f0=18,U1=5,p0=10;function g0(i){let e=new mi(F1,f0,p0,2);e.position.set(.15,-.15,.1),i.add(e);let t=1,n=!0;function s(c){t=c,o()}function r(c){n=!!c,o()}function o(){e.distance=n?Math.max(.05,p0*t):.05}function a(c){let l=Math.sin(c*11.3)*.5+Math.sin(c*27.1)*.3+Math.sin(c*4.7)*.2;e.intensity=n?(f0+l*U1*.3333)*t:0}return{light:e,update:a,setDarkness:s,setToggle:r}}var tu=Math.PI/2-.05,nu={KeyW:"forward",ArrowUp:"forward",KeyS:"backward",ArrowDown:"backward",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right"};function _0(i,e,{nearestStreetPoint:t,spawn:n,groundHeight:s,collision:r}){let o=n.yaw||0,a=0,c=s?s(n.x,n.z):0;i.position.set(n.x,c+1.7,n.z),i.rotation.order="YXZ",g();let l=new Set,u=!1,h=0,d=0,f=!1,p=!0,x=!0;function g(){i.rotation.set(a,o,0)}function m(C){p&&nu[C.code]&&(l.add(nu[C.code]),C.preventDefault())}function b(C){nu[C.code]&&l.delete(nu[C.code])}function M(C){if(p&&(u=!0,h=C.clientX,d=C.clientY,e.setPointerCapture?.(C.pointerId),!f&&e.requestPointerLock))try{let N=e.requestPointerLock();N&&typeof N.catch=="function"&&N.catch(()=>{})}catch{}}function _(C){if(f){o-=(C.movementX||0)*.0025,a-=(C.movementY||0)*.0025,a=x0(a,-tu,tu),g();return}if(!u)return;let N=C.clientX-h,z=C.clientY-d;h=C.clientX,d=C.clientY,o-=N*.0035,a-=z*.0035,a=x0(a,-tu,tu),g()}function S(C){u=!1,e.releasePointerCapture?.(C.pointerId)}function y(){f=document.pointerLockElement===e}window.addEventListener("keydown",m),window.addEventListener("keyup",b),e.addEventListener("pointerdown",M),window.addEventListener("pointermove",_),window.addEventListener("pointerup",S),document.addEventListener("pointerlockchange",y);function T(C){p=!!C,p||(l.clear(),u=!1)}function v(C){p&&(C?l.add("forward"):l.delete("forward"))}function w(C){if(!p)return;let N=0,z=0;if(l.has("forward")&&(z-=1),l.has("backward")&&(z+=1),l.has("left")&&(N-=1),l.has("right")&&(N+=1),N!==0||z!==0){let F=Math.hypot(N,z);N/=F,z/=F;let k=Math.sin(o),G=Math.cos(o),J=-k,oe=-G,de=G,V=-k,K=(J*-z+de*N)*14*C,he=(oe*-z+V*N)*14*C,ge=i.position.x+K,be=i.position.z+he;if(r){let[$,_e]=r.resolveMove(i.position.x,i.position.z,ge,be);ge=$,be=_e}let{point:Z,distance:te}=t(ge,be);if(Z&&te>16){let $=16/te;ge=Z[0]+(ge-Z[0])*$,be=Z[1]+(be-Z[1])*$}i.position.x=ge,i.position.z=be}s&&x&&(i.position.y=s(i.position.x,i.position.z)+1.7)}function R(){window.removeEventListener("keydown",m),window.removeEventListener("keyup",b),e.removeEventListener("pointerdown",M),window.removeEventListener("pointermove",_),window.removeEventListener("pointerup",S),document.removeEventListener("pointerlockchange",y)}function A(C){Number.isFinite(C)&&(o=C)}return{update:w,dispose:R,setEnabled:T,setForward:v,setYaw:A,setYFollow:C=>{x=!!C}}}function x0(i,e,t){return Math.max(e,Math.min(t,i))}var Na=[{id:"01b27ac5",landmark:"Spey Lounge",kind:"pub",chainage:82},{id:"081eb3ed",landmark:"Kvasa",kind:"bakery",chainage:196},{id:"0e21d212",landmark:"Toast",kind:"cafe",chainage:394},{id:"124327ee",landmark:"Alhambra Bar",kind:"pub",chainage:467},{id:"1a29e4f5",landmark:"Storries Home Bakery",kind:"bakery",chainage:621},{id:"1f6380d3",landmark:"Cupp",kind:"cafe",chainage:725},{id:"26210448",landmark:"GAIA Italian Delicatessen",kind:"cafe",chainage:862},{id:"2b05b3fb",landmark:"Golden Ambal",kind:"restaurant",chainage:994},{id:"2dd9394b",landmark:"Otherworld",kind:"pub",chainage:1056},{id:"315d8c0e",landmark:"Not Just Coffee",kind:"cafe",chainage:1142},{id:"3706c73f",landmark:"The Joker & The Thief",kind:"pub",chainage:1250},{id:"51834c74",landmark:"Guajira",kind:"cafe",chainage:1391}];function y0(){return new Map(Na.map(i=>[i.id,i]))}function v0(i){return Array.isArray(i)?i.length:0}function O1(){return typeof location<"u"&&["localhost","127.0.0.1"].includes(location.hostname)}function zn(i,e){if(O1()&&typeof window<"u"){let t=window[`__mcgrotForce${i}`];if(t!=null)return!!t}return!!e}var z1=6,M0=40,H1=60,k1=1.35,G1=85,S0=[4867638,4276026,5525567,3882292,5195578,3749420,4737602,5919040],b0=[7025448,7363619,3032640,5849646,4011091,6703646],V1=.024,W1=10,X1=.012,q1=25,Y1=8,Z1=new pi;function E0(i,e){return Z1.load(i,t=>{t.colorSpace=tt,e&&e(t)})}function hr(i,e,t){let n=Math.imul(i,374761393)^Math.imul(e,668265263)^Math.imul(t,2246822519);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function K1(i,e,t){let s=document.createElement("canvas");s.width=s.height=64;let r=s.getContext("2d"),o=r.createImageData(64,64),a=o.data,c={r:(i>>16&255)/255,g:(i>>8&255)/255,b:(i&255)/255};for(let u=0;u<64;u++)for(let h=0;h<64;h++){let d=t?1+.14*Math.sin(u*1.9)+(hr(h,u,e)-.5)*.1:1.05+.1*Math.sin(h*2.3)+(hr(h,u,e)-.5)*.16,f=1-.18*hr(h>>3,u>>3,e+7)*hr(h>>4,u>>4,e+13),p=1-.2*Math.pow(u/64,3),x=d*f*p,g=(u*64+h)*4;a[g]=Math.min(255,c.r*255*x),a[g+1]=Math.min(255,c.g*255*x),a[g+2]=Math.min(255,c.b*255*x),a[g+3]=255}r.putImageData(o,0,0);let l=new xt(s);return l.colorSpace=tt,l}var pd=new Map;function Da(i,e){let t=i*2+(e?1:0);return pd.has(t)||pd.set(t,new qe({map:K1(i,i&65535^(e?40503:0),e),flatShading:!0})),pd.get(t)}function $1(){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createImageData(64,64),s=n.data,r={r:.4,g:.38,b:.32};for(let a=0;a<64;a++)for(let c=0;c<64;c++){let l=1+(hr(c,a,2465)-.5)*.12,u=Math.floor(a/5),h=hr(u,0,707),f=h>.45&&h<.85?1-.28*hr(c>>1,u,1915):1,p=Math.min(c,63-c)/(64*.5),x=Math.min(a,63-a)/(64*.5),g=1-.22*(1-Math.min(p,x)),m=l*f*g,b=(a*64+c)*4;s[b]=Math.min(255,r.r*255*m),s[b+1]=Math.min(255,r.g*255*m),s[b+2]=Math.min(255,r.b*255*m),s[b+3]=255}t.putImageData(n,0,0);let o=new xt(e);return o.colorSpace=tt,o}var md=null;function gd(){return md||(md=$1()),md}function xd(i,e,t){let n=y0(),s=eE(e),r=Math.max(1,s-M0-H1),o=i.length>1?r/(i.length-1):0,a=[];return i.forEach((c,l)=>{let u=M0+l*o,h=t?n.get(c.id):null,d=h?h.chainage:u,f=l%2===0?1:-1,p=h&&h.offset!=null?h.offset:z1,x=tE(e,d);if(!x)return;let[g,m]=x.tangent,b=-m,M=g,_=x.point[0]+b*p*f,S=x.point[1]+M*p*f,y=x.point[0]-_,T=x.point[1]-S,v=Math.atan2(y,T);a.push({id:c.id,index:l,dist:d,baseDist:u,side:f,coatIndex:l%S0.length,px:_,pz:S,baseY:v,isAnchor:!!h,landmark:h?h.landmark:null})}),a}function T0(i,e,t,n){let s=i.catalog&&Array.isArray(i.catalog.comics)?i.catalog.comics.filter(x=>x.npc):i.manifest.comics||[],r=e.streetLine||[],o=[],a=new Map,c=new Map,l=(x,g)=>{x.map=g,x.color.setScalar(x.userData.anchorGlow||4.7),x.needsUpdate=!0},u=(x,g)=>{if(x){if(a.has(x)){l(g,a.get(x));return}if(c.has(x)){c.get(x).push(g);return}c.set(x,[g]),E0(mn(i,x),m=>{a.set(x,m);for(let b of c.get(x))l(b,m);c.set(x,[])})}},h=zn("Anchors",!0);xd(s,r,h).forEach(x=>{let g=s[x.index],m=J1(i,g,S0[x.coatIndex],u,x.isAnchor),b=e.groundHeight?e.groundHeight(x.px,x.pz):0;m.group.position.set(x.px,b,x.pz),e.collision&&e.collision.addCircle(x.px,x.pz,m.collisionRadius,"vendor"),m.group.rotation.y=x.baseY,m.baseY=x.baseY,m.phase=x.index*2.1,m.isAnchor=x.isAnchor,m.anchorLandmark=x.landmark,t.add(m.group),o.push(m)});let f=new O;function p(x,g){let m=n?n.position:null;for(let b=0;b<o.length;b++){let M=o[b];if(M.tick(g,x),m&&!M.comicLoaded){let _=M.group.position;Math.hypot(m.x-_.x,m.z-_.z)<G1&&M.loadComic()}}}return{npcs:o,update:p,list:s,anchorsEnabled:h}}var iu={height:1.9,girth:1,headScale:1.5};function _d(i){let e=i.height,t=i.girth,n=i.headScale,s=.12,r=e*.3,o=.52*t,a=.34*t,c=e*.48,l=.34*n,u=s+r,h=u+c,d=h+l*.5+.02;return{bootH:s,legH:r,bodyW:o,bodyD:a,bodyH:c,headSize:l,legTopY:u,bodyTopY:h,headCenterY:d,headTopY:d+l*.5,legX:o*.24}}function J1(i,e,t,n,s){let r=s?k1:1,o=e.npc.build||iu,a=new nt,{bootH:c,legH:l,bodyW:u,bodyD:h,bodyH:d,headSize:f,legTopY:p,bodyTopY:x,headCenterY:g,headTopY:m,legX:b}=_d(o),M=0;for(let C of e.npc.name||"")M=M*31+C.charCodeAt(0)|0;let _=b0[Math.abs(M)%b0.length],S=new me(_),y=d*.55,T=4.7*r,v=new qe({map:gd(),color:new me(T,T,T),side:Ot}),w=new Oe(new Rt(1,1),v);w.position.set(0,p+d*.55,h*.5+.17),w.scale.set(y*.7,y,1),a.add(w);let R=j1(e.npc.name,e.npc.blurb);R.position.set(0,m+.42,0),a.add(R);let A={group:a,comicMesh:w,comic:e,build:o,noteColor:S,collisionRadius:u/2,head:null,scarf:null,dollBody:[],hasDoll:!1,name:e.npc.name,blurb:e.npc.blurb,voice:null,baseY:0,phase:0,speaking:!1,comicLoaded:!1,loadComic(){A.comicLoaded||(A.comicLoaded=!0,E0(mn(i,e.image),C=>{v.map=C,v.color.setScalar(T),v.needsUpdate=!0;let N=C.image;N&&N.width&&N.height&&w.scale.set(y*(N.width/N.height),y,1)}))},buildDoll(){if(A.hasDoll)return A;A.hasDoll=!0;let C=Da(t,!1),N=new qe({color:1381391,flatShading:!0}),z=[],F=[];for(let te of[-1,1]){let $=new Ze(u*.4,c,h*1.5);$.translate(te*b,c*.5,h*.2),F.push($)}for(let te of[-1,1]){let $=new Ze(u*.36,l,h*.75);$.translate(te*b,c+l*.5,0),z.push($)}{let te=new Ze(u,d,h);te.translate(0,p+d*.5,0),z.push(te)}let k=x-d*.14,G=d*.62;for(let te of[-1,1]){let $=new Ze(.13,G,.13);$.rotateX(-1.15),$.rotateZ(te*.25),$.translate(te*(u*.5+.02),k-G*.28,h*.5+.06),z.push($)}let J=new Oe(st(z),C),oe=new Oe(st(F),N);a.add(J,oe);let de=Da(new me(t).multiplyScalar(.62).getHex(),!0),V=new qe({color:new me(9077874).multiplyScalar(4.7*r)});V.userData.anchorGlow=4.7*r,n(e.npc.face,V);let K=[de,de,de,de,V,de],he=new Oe(new Ze(f,f,f*.85),K);he.position.set(0,g,0),a.add(he);let ge=new Oe(new Ze(f*.95,.09,f*.85),new qe({color:_,flatShading:!0}));ge.position.set(0,x+.02,0),a.add(ge);let be=new qe({color:8680542,flatShading:!0}),Z=[];for(let te of[-1,1]){let $=new Oe(new Ze(.09,.07,.06),be);$.position.set(te*y*.28,p+d*.55-y*.48,h*.5+.18),a.add($),Z.push($)}return A.head=he,A.scarf=ge,A.dollBody=[J,oe,he,...Z],A},setSpeaking(C){A.speaking=!!C},leanAmp:0,tick(C,N){A.leanAmp+=((A.speaking?1:0)-A.leanAmp)*Math.min(1,(N||0)*Y1);let z=A.leanAmp;a.rotation.z=Math.sin(C*.6+A.phase)*.01+(z?Math.sin(C*W1+A.phase)*V1*z:0),a.rotation.y=A.baseY+Math.sin(C*.4+A.phase)*.008+(z?Math.sin(C*q1+A.phase)*X1*z:0)}};return A}function j1(i,e){let t=document.createElement("canvas");t.width=512,t.height=160;let n=t.getContext("2d");n.fillStyle="rgba(20, 22, 16, 0.82)",Q1(n,6,6,t.width-12,t.height-12,14),n.fill(),n.lineWidth=2,n.strokeStyle="rgba(120, 116, 92, 0.6)",n.stroke(),n.textAlign="center",n.fillStyle="#d8d4c0",n.font='bold 44px "Courier New", monospace',n.fillText(i,t.width/2,68,t.width-40),n.fillStyle="#a9a48c",n.font='italic 30px "Courier New", monospace',n.fillText(e,t.width/2,116,t.width-36);let s=new xt(t);s.colorSpace=tt;let r=new wi({map:s,transparent:!0,depthTest:!0}),o=new qi(r);return o.scale.set(2.4,.75,1),o}function Q1(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function eE(i){let e=0;for(let t=0;t<i.length-1;t++)e+=Math.hypot(i[t+1][0]-i[t][0],i[t+1][1]-i[t][1]);return e}function tE(i,e){if(!i||i.length<2)return null;let t=0;for(let c=0;c<i.length-1;c++){let[l,u]=i[c],[h,d]=i[c+1],f=h-l,p=d-u,x=Math.hypot(f,p);if(t+x>=e){let g=x>0?(e-t)/x:0,m=x||1;return{point:[l+f*g,u+p*g],tangent:[f/m,p/m]}}t+=x}let n=i[i.length-1],s=i[i.length-2],r=n[0]-s[0],o=n[1]-s[1],a=Math.hypot(r,o)||1;return{point:[n[0],n[1]],tangent:[r/a,o/a]}}var su=256,ru=128,ou=16,w0=["#0e0c0b","#120f1a","#101512","#12100a","#0a1210","#150d0d","#0c1015"],A0=['"Arial Narrow", "Helvetica Neue", Arial, sans-serif','"Futura", "Century Gothic", "Helvetica Neue", sans-serif','Georgia, "Times New Roman", serif'];function nE(i,e,t,n,s,r,o){let a=rE(o);i.save(),i.beginPath(),i.rect(e,t,n,s),i.clip(),i.fillStyle="#171410",i.fillRect(e,t,n,s);let c=Math.round(n*(.04+a()*.024));for(let T of[e,e+n-c]){i.fillStyle="#332e28",i.fillRect(T,t,c,s);for(let v=0;v<40;v++)i.fillStyle=`rgba(0,0,0,${.05+a()*.12})`,i.fillRect(T+a()*c,t+a()*s,1+a()*2,1+a()*2)}let l=e+c,u=n-c*2,h=a(),d=h<.3,f=t+s*(d?.2:.08);if(d){let T=t+s*.06,v=f-T,w=["#3a2420","#243a2e","#2a2438"][Math.floor(a()*3)],R="#d8d0c0",A=Math.max(3,Math.round(n*.045));for(let C=l;C<l+u;C+=A)i.fillStyle=(C-l)/A%2<1?w:R,i.beginPath(),i.moveTo(C,f),i.lineTo(Math.min(C+A,l+u),f),i.lineTo(Math.min(C+A-v*.35,l+u),T),i.lineTo(Math.max(C-v*.35,l),T),i.closePath(),i.fill();i.fillStyle="rgba(0,0,0,0.25)",i.fillRect(l,f-2,u,2)}let p=t+s*.4;if(h<.55)for(let T=p;T<t+s;T+=Math.max(2,s*.03))i.fillStyle=Math.round((T-p)/Math.max(2,s*.03))%2===0?"#211d18":"#15110d",i.fillRect(l,T,u,Math.max(2,s*.03));else{let T=t+s;i.fillStyle="#14181a",i.fillRect(l,p,u,T-p);let v=3+Math.floor(a()*2);i.strokeStyle="rgba(0,0,0,0.65)",i.lineWidth=2;for(let A=1;A<v;A++){let C=l+u/v*A;i.beginPath(),i.moveTo(C,p),i.lineTo(C,T),i.stroke()}i.strokeStyle="rgba(0,0,0,0.5)",i.lineWidth=1;let w=p+(T-p)*.55;i.beginPath(),i.moveTo(l,w),i.lineTo(l+u,w),i.stroke(),i.fillStyle="rgba(150,158,160,0.12)",i.beginPath(),i.moveTo(l,p),i.lineTo(l+u*.42,p),i.lineTo(l+u*.14,T),i.lineTo(l,T),i.closePath(),i.fill();let R=(T-p)*.16;i.fillStyle=["#2b2016","#1c231e","#241c26"][Math.floor(a()*3)],i.fillRect(l,T-R,u,R)}let x=f,g=p-f,m=w0[Math.floor(a()*w0.length)];i.fillStyle=m,i.fillRect(l,x,u,g),i.strokeStyle="rgba(0,0,0,0.6)",i.lineWidth=1,i.strokeRect(l+.5,x+.5,u-1,g-1);let b=A0[Math.floor(a()*A0.length)],M=a()<.75?"bold":"900",S=a()<.3?r.replace(/\w\S*/g,T=>T.charAt(0).toUpperCase()+T.slice(1).toLowerCase()):r.toUpperCase(),y=200+Math.floor(a()*30);i.fillStyle=`rgb(${y},${y-15},${y-45})`,i.textAlign="center",i.textBaseline="middle";try{i.letterSpacing="0.5px"}catch{}iE(i,S,l+u/2,x+g/2,u-12,g-6,b,M);for(let T=0;T<6;T++){i.fillStyle=`rgba(0,0,0,${.05+a()*.08})`;let v=e+a()*n;i.fillRect(v,t,1+a()*3,s)}i.restore()}function iE(i,e,t,n,s,r,o,a){o=o||'"Arial Narrow", "Helvetica Neue", Arial, sans-serif',a=a||"bold";let c=4;for(let u=22;u>=c;u--){if(i.font=`${a} ${u}px ${o}`,i.measureText(e).width<=s){i.fillText(e,t,n);return}let h=sE(i,e,s);if(h&&u<=18&&h.length===2){let d=u*1.05;if(d*2<=r){i.fillText(h[0],t,n-d/2),i.fillText(h[1],t,n+d/2);return}}}i.font=`bold ${c}px ${o}`;let l=e;for(;l.length>3&&i.measureText(l+"\u2026").width>s;)l=l.slice(0,-1);i.fillText(l+(l.length<e.length?"\u2026":""),t,n)}function sE(i,e,t){let n=e.split(" ");if(n.length<2)return null;for(let s=1;s<n.length;s++){let r=n.slice(0,s).join(" "),o=n.slice(s).join(" ");if(i.measureText(r).width<=t&&i.measureText(o).width<=t)return[r,o]}return null}function rE(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function oE(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function R0(i){let e=[...new Set(i)],t=Math.max(1,Math.ceil(e.length/ou)),n=document.createElement("canvas");n.width=ou*su,n.height=t*ru;let s=n.getContext("2d");s.fillStyle="#171410",s.fillRect(0,0,n.width,n.height);let r=new Map;e.forEach((a,c)=>{let l=c%ou,u=Math.floor(c/ou),h=l*su,d=u*ru;nE(s,h,d,su,ru,a,oE(a)),r.set(a,{u0:h/n.width,u1:(h+su)/n.width,vTop:1-d/n.height,vBot:1-(d+ru)/n.height})});let o=new xt(n);return o.colorSpace=tt,o.anisotropy=4,{texture:o,uvFor:r,count:e.length}}var yi=.05,C0=.25,yd=.3,aE=3,vd=1.2,I0=250,yt=3.2,P0=.3,dr=.4,L0=.08,N0=.16,D0=1.5,F0=6.4,cE=2.5,lE=15,Fa=.06,uE=2.2;function U0(i,e,t){let n=i&&i.facadeManifest,s=i&&i.facadeAtlas,r=i&&i.leith&&i.leith.buildings||[],o=e&&e.streetLine||[],a=e&&e.nearestStreetPoint,c=e&&e.groundHeight;if(!n||!s||!r.length||!a||o.length<2)return{group:null,count:0,update(){}};let l=0,u=s.buildings||{},h=.5,d=.5,f=[];for(let V of n.buildings)for(let K of V.businesses||[])f.push(K.name);let p=f.length?R0(f):null,x=[],g=[],m=[],b=[],M=0;function _(V,K,he,ge){let be=he-V,Z=ge-K,te=Math.hypot(be,Z)||1;return[-Z/te,0,be/te]}let S=s.pages.map(()=>({positions:[],uvs:[],colors:[],normals:[],indices:[],quadCount:0})),y=new Map;for(let V of n.buildings){let K=u[V.buildingIndex];if(!K)continue;let he=K.regions.find($=>$.kind!=="corner")||K.regions[0];if(!he)continue;let ge=s.pages[K.page],be=1/ge.width,Z=1/ge.height,te=y.get(K.page)||[];te.push({bi:V.buildingIndex,chainage:V.chainage,region:he,u0Full:(he.x+h)*be,u1Full:(he.x+he.w-h)*be,vTop:1-(he.y+d)*Z,vBot:1-(he.y+he.h-d)*Z}),y.set(K.page,te)}function T(V,K,he,ge,be,Z,te,$,_e,Me,Se){let fe=V.quadCount*4,we=Me+l,ee=Se+l;V.positions.push(Z,we,te,$,we,_e,$,ee,_e,Z,ee,te),V.uvs.push(K,he,ge,he,ge,be,K,be),V.colors.push(1,1,1,1,1,1,1,1,1,1,1,1);let[ce,X,se]=_(Z,te,$,_e);V.normals.push(ce,X,se,ce,X,se,ce,X,se,ce,X,se),V.indices.push(fe,fe+1,fe+2,fe,fe+2,fe+3),V.quadCount++}function v(V,K,he,ge,be,Z,te,$,_e,Me,Se,fe,we,ee,ce){let X=V.quadCount*4,se=Me+l,xe=Se+l;V.positions.push(Z,se,te,$,se,_e,$,xe,_e,Z,xe,te),V.uvs.push(K,he,ge,he,ge,be,K,be),V.colors.push(...fe,...we,...ee,...ce);let[Ne,Ce,ue]=_(Z,te,$,_e);V.normals.push(Ne,Ce,ue,Ne,Ce,ue,Ne,Ce,ue,Ne,Ce,ue),V.indices.push(X,X+1,X+2,X,X+2,X+3),V.quadCount++}let w=.1,R=1.1;function A(V,K,he,ge,be,Z,te,$,_e,Me){let Se=ge-be,fe=be+Se*Math.min(1,yt/(Z||yt)),we=_e-te,ee=Me-$,ce=Math.hypot(we,ee)||1,X=pe=>[te+we*pe,$+ee*pe],se=pe=>K+(he-K)*pe,xe=[1,1,1],Ne=[0,0,0],Ce=Math.min(.4,Math.max(w,R/ce));if(1-2*Ce<=.001)return T(V,K,be,he,fe,te,$,_e,Me,yi,yt),1;let ue=[[0,Ce,Ne,xe],[Ce,1-Ce,xe,xe],[1-Ce,1,xe,Ne]];for(let[pe,D,Le,De]of ue){let[P,E]=X(pe),[L,U]=X(D);v(V,se(pe),be,se(D),fe,P,E,L,U,yi,yt,Le,De,De,Le)}return ue.length}function C(V,K){let he=V*73856093^K*19349663;return he=Math.imul(he^he>>>13,2246822507),he^=he>>>16,he>>>0}let N=0,z=(V,K,he,ge,be,Z,te,$,_e,Me,Se,fe,we,ee=0)=>{let ce=Fa*(he-K),X=K+ce,se=he-ce,xe=ge-be,Ne=xe>0?be+Z*xe:be,Ce=ge-L0*xe,ue=Math.max(.1,(Ce-Ne)/(xe||1)*te),pe=fe,D=0;for(;pe<we-1e-6&&ue>1e-4;){let Le=Math.min(ue,we-pe),De=Le/ue,P=(C(ee,D)&1)===0,E=P?Ce:Ne,U=E+((P?Ne:Ce)-E)*De;T(V,X,E,se,U,$,_e,Me,Se,pe,pe+Le),N++,pe+=Le,D++}};function F(V){let K=-1,he=1/0;return s.pages.forEach((ge,be)=>{if(V>=ge.chainageMin&&V<=ge.chainageMax)K=be,he=0;else if(K===-1||he>0){let Z=V<ge.chainageMin?ge.chainageMin-V:V-ge.chainageMax;Z<he&&(he=Z,K=be)}}),K}for(let V of n.buildings){let K=V.buildingIndex,he=r[K];if(!he||!he.footprint||he.footprint.length<3)continue;let ge=ho(he,a);if(!ge.length)continue;let be=0,Z=0;for(let Me of he.footprint)be+=Me[0],Z+=Me[1];be/=he.footprint.length,Z/=he.footprint.length;let te=u[K],$=new Map,_e=0;if(te)for(let Me of ge){let Se=Math.hypot(Me.bx-Me.ax,Me.bz-Me.az);if(Se<yd)continue;let fe=te.regions.find(ee=>Me.isChamfer?ee.kind==="corner":ee.kind!=="corner")||te.regions[0];if(!fe||Se/fe.widthM>vd)continue;let we=$.get(fe)||{totalSpan:0,count:0,cursor:0};we.totalSpan+=Se,we.count+=1,$.set(fe,we)}ge.forEach((Me,Se)=>{let fe=Me.bx-Me.ax,we=Me.bz-Me.az,ee=Math.hypot(fe,we);if(ee<yd)return;let ce=Me.ax,X=Me.az,se=fe,xe=we,Ne=-we/ee,Ce=fe/ee,ue=(Me.ax+Me.bx)/2,pe=(Me.az+Me.bz)/2;Ne*(ue-be)+Ce*(pe-Z)<0&&(Ne=-Ne,Ce=-Ce,ce=Me.bx,X=Me.bz,se=-fe,xe=-we);let D=De=>({x:ce+se*De+Ne*C0,z:X+xe*De+Ce*C0});l=c?c(ue,pe):0;let Le=te?te.regions.find(De=>Me.isChamfer?De.kind==="corner":De.kind!=="corner")||te.regions[0]:null;if(Le){let De=s.pages[te.page],P=S[te.page],E=1/De.width,L=1/De.height,U=(Le.x+h)*E,B=(Le.x+Le.w-h)*E,W=1-(Le.y+d)*L,ne=1-(Le.y+Le.h-d)*L,q=ee/Le.widthM,re=Math.max(2,V.levels||2)*yt,Ee=Math.min(.75,Math.max(dr,yt/Le.heightM)),Ue=W-ne,Pe=(y.get(te.page)||[]).filter(ye=>ye.bi!==K),Ie=Pe.filter(ye=>Math.abs(ye.chainage-V.chainage)>=lE),Ge=Ie.length>=3?Ie:Pe,Ye=[];if(q>cE){let ye=Math.min(1,Le.widthM/ee),H=Math.max(0,.5-ye/2),ve=Math.min(1,.5+ye/2),ae=D(H),Ae=D(ve);Ye.push({u0:U,u1:B,ax:ae.x,az:ae.z,bx:Ae.x,bz:Ae.z});let Re=[{side:0,innerT:H,dirSign:-1},{side:1,innerT:ve,dirSign:1}];for(let{side:le,innerT:Fe,dirSign:Be}of Re){let ot=le===0?H:1-ve,ct=ot*ee;if(ct<yd)continue;let kt=Math.max(1,Math.round(ct/F0)),hn=ot/kt,ai=V.businesses?V.businesses.length-_e:0,Ui=p?Math.max(0,Math.min(ai,kt)):0;for(let an=0;an<kt;an++){let Dn=Fe+Be*an*hn,kn=Fe+Be*(an+1)*hn,it=D(Math.min(Dn,kn)),_t=D(Math.max(Dn,kn));if(an<Ui){let Ct=V.businesses[_e];_e++;let Mt=p.uvFor.get(Ct.name);if(Mt){let Gt=M*4;x.push(it.x,yi+l,it.z,_t.x,yi+l,_t.z,_t.x,yt+l,_t.z,it.x,yt+l,it.z),g.push(Mt.u0,Mt.vBot,Mt.u1,Mt.vBot,Mt.u1,Mt.vTop,Mt.u0,Mt.vTop);{let[Vt,Wt,In]=_(it.x,it.z,_t.x,_t.z);b.push(Vt,Wt,In,Vt,Wt,In,Vt,Wt,In,Vt,Wt,In)}m.push(Gt,Gt+1,Gt+2,Gt,Gt+2,Gt+3),M++,N++}continue}if(Ge.length>=3){let Ct=C(K,Se*6151+le*331+an)%Ge.length,Mt=Ge[Ct],Gt=Math.min(.75,Math.max(dr,yt/Mt.region.heightM));z(P,Mt.u0Full,Mt.u1Full,Mt.vTop,Mt.vBot,Gt,Mt.region.heightM,it.x,it.z,_t.x,_t.z,yi,yt,C(K,Se*6151+le*331+an+1))}else Ue>0&&z(P,U,B,W,ne,Ee,Le.heightM,it.x,it.z,_t.x,_t.z,yi,yt,C(K,Se*6151+le*331+an+1))}if(re>yt+1e-6){let an=le===0?0:1,Dn=D(Math.min(Fe,an)),kn=D(Math.max(Fe,an));if(Ge.length<3)Ue>0&&z(P,U,B,W,ne,Ee,Le.heightM,Dn.x,Dn.z,kn.x,kn.z,yt,re,C(K,Se*4111+le*211+2));else{let it=Fe,_t=0,Ct=-1,Mt=0;for(;Math.abs(it-Fe)<ot-1e-6&&Mt++<64;){let Gt=C(K,Se*4111+le*211+_t)%Ge.length;Gt===Ct&&(Gt=(Gt+1)%Ge.length);let Vt=Ge[Gt];Ct=Gt;let Wt=ot-Math.abs(it-Fe),In=Math.min(Wt,Math.max(Vt.region.widthM/ee,1e-4)),xn=it+Be*In,_n=D(Math.min(it,xn)),dn=D(Math.max(it,xn)),Oi=Math.min(.75,Math.max(dr,yt/Vt.region.heightM));z(P,Vt.u0Full,Vt.u1Full,Vt.vTop,Vt.vBot,Oi,Vt.region.heightM,_n.x,_n.z,dn.x,dn.z,yt,re,C(K,Se*4111+le*211+_t)),it=xn,_t++}}}}}else if(q>vd){let ye=Math.min(1,Le.widthM/ee),H=Math.max(0,.5-ye/2),ve=Math.min(1,.5+ye/2),ae=D(H),Ae=D(ve);Ye.push({u0:U,u1:B,ax:ae.x,az:ae.z,bx:Ae.x,bz:Ae.z});let Re=Math.min(.75,Math.max(dr,yt/Le.heightM)),le=W-ne,Fe=ne+Re*le,ot=(1-Re)*Le.heightM,ct=B-U,kt=P0*ct,ai=P0*Le.widthM/ee,Ui=Math.max(0,ct-kt),an=Fa*ct,Dn=Math.max(0,Ui-2*an),kn=(Ct,Mt,Gt,Vt,Wt,In,xn,_n)=>{let dn=xn===0?1:-1,Oi=yi,vo=0;for(;Oi<Le.heightM-1e-6&&ot>1e-4;){let Mo=Math.min(ot,Le.heightM-Oi),Su=Mo/ot,I=Ui>0&&_n>0?Math.min(an+C(K,Se*977+xn*97+vo)%1e3/1e3*Dn,Ui):0,Y=Ct+dn*I,ie=Mt+dn*I,j=vo%2===0,Q=j?Fe:W,Ve=Q+((j?W:Fe)-Q)*Su;T(P,Y,Q,ie,Ve,Gt,Vt,Wt,In,Oi,Oi+Mo),N++,Oi+=Mo,vo++}},it=H,_t=0;for(;it>1e-6;){let Ct=Math.min(ai,it),Mt=it-Ct,Gt=ai>0?Ct/ai:1,Vt=_t%2===0,Wt=Vt?U:U+kt,In=Vt?U+kt:U,xn=Wt+(In-Wt)*Gt,_n=D(Mt),dn=D(it);kn(xn,Wt,_n.x,_n.z,dn.x,dn.z,0,_t),Ye.push({u0:xn,u1:Wt,ax:_n.x,az:_n.z,bx:dn.x,bz:dn.z,skipBase:!0,side:0}),it=Mt,_t++}for(it=ve,_t=0;it<1-1e-6;){let Ct=Math.min(ai,1-it),Mt=it+Ct,Gt=ai>0?Ct/ai:1,Vt=_t%2===0,Wt=Vt?B:B-kt,In=Vt?B-kt:B,xn=Wt+(In-Wt)*Gt,_n=D(it),dn=D(Mt);kn(Wt,xn,_n.x,_n.z,dn.x,dn.z,1,_t),Ye.push({u0:Wt,u1:xn,ax:_n.x,az:_n.z,bx:dn.x,bz:dn.z,skipBase:!0,side:1}),it=Mt,_t++}}else{let ye=$.get(Le),H,ve;if(ye&&ye.count>1&&ye.totalSpan>0){let Re=Fa*(B-U),le=U+Re,Fe=B-Re,Be=Math.max(0,Fe-le),ot=le+Be*(ye.cursor/ye.totalSpan);ye.cursor+=ee;let ct=le+Be*(ye.cursor/ye.totalSpan);H=ot,ve=ct}else if(q<1/vd){let Re=Math.max(.08,q),le=(B-U)*Re/2,Fe=(C(K,Se)%1e3/1e3-.5)*.3,Be=U+le+.5*(B-U)+Fe*(B-le-(U+le));H=Math.max(U,Be-le),ve=Math.min(B,Be+le)}else{let Re=Fa*(B-U);H=U+Re,ve=B-Re}let ae=D(0),Ae=D(1);if(ye&&ye.count>1&&ee<uE){let Re=Math.min(.9,yt/Le.heightM);Ye.push({u0:H,u1:ve,ax:ae.x,az:ae.z,bx:Ae.x,bz:Ae.z,y0:yt,v0:ne+(W-ne)*Re})}else Ye.push({u0:H,u1:ve,ax:ae.x,az:ae.z,bx:Ae.x,bz:Ae.z,groundFade:!0})}for(let ye of Ye)if(!ye.skipBase){if(ye.groundFade){if(N+=A(P,ye.u0,ye.u1,W,ne,Le.heightM,ye.ax,ye.az,ye.bx,ye.bz),Le.heightM>yt+1e-6){let H=ne+(W-ne)*Math.min(1,yt/(Le.heightM||yt));T(P,ye.u0,H,ye.u1,W,ye.ax,ye.az,ye.bx,ye.bz,yt,Le.heightM),N++}continue}T(P,ye.u0,ye.v0??ne,ye.u1,ye.v1??W,ye.ax,ye.az,ye.bx,ye.bz,ye.y0??yi,Le.heightM),N++}if(re-Le.heightM>D0){for(let ye of Ye)if(ye.side===void 0)if(Ge.length>=3){let H=C(K,Se*8231+17)%Ge.length,ve=Ge[H],ae=Math.min(.75,Math.max(dr,yt/ve.region.heightM));z(P,ve.u0Full,ve.u1Full,ve.vTop,ve.vBot,ae,ve.region.heightM,ye.ax,ye.az,ye.bx,ye.bz,Le.heightM,re,C(K,Se*8231+18))}else Ue>0&&z(P,ye.u0,ye.u1,W,ne,Ee,Le.heightM,ye.ax,ye.az,ye.bx,ye.bz,Le.heightM,re,C(K,Se*8231+18))}if(re-Le.heightM>D0&&Ye.some(ye=>ye.side!==void 0)){let ye=W-ne,H=W-L0*ye,ve=Math.max(ne,H-N0*ye),ae=N0*Le.heightM,Ae=B-U,Re=Fa*Ae,le={};for(let ot of Ye){if(ot.side===void 0)continue;let ct=Math.max(0,Ae-Math.abs(ot.u1-ot.u0));(le[ot.side]===void 0||ct<le[ot.side])&&(le[ot.side]=ct)}let Fe=Le.heightM,Be=0;for(;Fe<re-1e-6&&ae>1e-4;){let ot=Math.min(ae,re-Fe),ct=ot/ae,kt=Be%2===0,hn=kt?H:ve,Ui=hn+((kt?ve:H)-hn)*ct,an=Fe,Dn=Fe+ot,kn={};for(let it of[0,1]){let _t=le[it];if(_t===void 0)continue;let Ct=Math.max(0,_t-2*Re);kn[it]=_t>0?Math.min(Re+C(K,Se*613+Be*31+it)%1e3/1e3*Ct,_t):0}for(let it of Ye){if(it.side===void 0)continue;let Ct=(it.side===0?1:-1)*(kn[it.side]||0);T(P,it.u0+Ct,hn,it.u1+Ct,Ui,it.ax,it.az,it.bx,it.bz,an,Dn),N++}Fe=Dn,Be++}}}else if(p&&V.businesses&&V.businesses.length&&ee>=aE){let De=V.businesses.length-_e,P=De>0?Math.min(De,Math.max(1,Math.round(ee/F0))):0;for(let L=0;L<P;L++){let U=V.businesses[_e+L],B=p.uvFor.get(U.name);if(!B)continue;let W=D(L/P),ne=D((L+1)/P),q=M*4;x.push(W.x,yi+l,W.z,ne.x,yi+l,ne.z,ne.x,yt+l,ne.z,W.x,yt+l,W.z),g.push(B.u0,B.vBot,B.u1,B.vBot,B.u1,B.vTop,B.u0,B.vTop);{let[re,Ee,Ue]=_(W.x,W.z,ne.x,ne.z);b.push(re,Ee,Ue,re,Ee,Ue,re,Ee,Ue,re,Ee,Ue)}m.push(q,q+1,q+2,q,q+2,q+3),M++}_e+=P,N+=P;let E=Math.max(2,V.levels||2)*yt;if(E>yt+1e-6){let L=F(V.chainage),U=L>=0?(y.get(L)||[]).filter(B=>B.bi!==K):[];if(U.length){let B=S[L],W=0,ne=0,q=-1,re=0;for(;W<1-1e-6&&re++<64;){let Ee=C(K,Se*5813+ne)%U.length;Ee===q&&(Ee=(Ee+1)%U.length);let Ue=U[Ee];q=Ee;let Pe=Math.min(1-W,Math.max(Ue.region.widthM/ee,1e-4)),Ie=D(W),Ge=D(W+Pe),Ye=Math.min(.75,Math.max(dr,yt/Ue.region.heightM));z(B,Ue.u0Full,Ue.u1Full,Ue.vTop,Ue.vBot,Ye,Ue.region.heightM,Ie.x,Ie.z,Ge.x,Ge.z,yt,E,C(K,Se*5813+ne+1)),W+=Pe,ne++}}}}else if(!V.businesses||!V.businesses.length){let De=F(V.chainage),P=De>=0?(y.get(De)||[]).filter(E=>E.bi!==K):[];if(P.length){let E=S[De],L=Math.max(2,V.levels||2)*yt,U=0,B=0,W=-1,ne=0;for(;U<1-1e-6&&ne++<64;){let q=C(K,Se*3457+B)%P.length;q===W&&(q=(q+1)%P.length);let re=P[q];W=q;let Ee=Math.min(1-U,Math.max(re.region.widthM/ee,1e-4)),Ue=D(U),Pe=D(U+Ee),Ie=Math.min(.75,Math.max(dr,yt/re.region.heightM));z(E,re.u0Full,re.u1Full,re.vTop,re.vBot,Ie,re.region.heightM,Ue.x,Ue.z,Pe.x,Pe.z,yi,L,C(K,Se*3457+B+1)),U+=Ee,B++}}}})}if(N===0&&M===0)return{group:null,count:0,update(){}};let k=null;if(M&&p){let V=new pt;V.setAttribute("position",new Qe(x,3)),V.setAttribute("uv",new Qe(g,2)),V.setAttribute("normal",new Qe(b,3)),V.setIndex(m),V.computeBoundingSphere(),k=new Oe(V,new qe({map:p.texture,color:new me(4.7,4.7,4.7),side:An,fog:!0})),k.name="shopfront-placeholders",t.add(k)}let G=s.pages.map((V,K)=>{let he=S[K];if(!he.quadCount)return null;let ge=new pt;ge.setAttribute("position",new Qe(he.positions,3)),ge.setAttribute("uv",new Qe(he.uvs,2)),ge.setAttribute("color",new Qe(he.colors,3)),ge.setAttribute("normal",new Qe(he.normals,3)),ge.setIndex(he.indices),ge.computeBoundingSphere();let be=mn(i,V.file);return be.startsWith("assets/")&&V.etag&&(be+=`?v=${V.etag}`),{geo:ge,url:be,chainageMin:V.chainageMin,chainageMax:V.chainageMax,loaded:!1,mesh:null}});function J(V){if(V.loaded)return;V.loaded=!0;let K=new pi().load(V.url);K.colorSpace=tt,K.generateMipmaps=!1,K.minFilter=Yt,K.anisotropy=1,V.material||(V.material=new qe({vertexColors:!0,color:new me(4.7,4.7,4.7),side:An,fog:!0}),V.mesh=new Oe(V.geo,V.material),V.mesh.name="shopfronts-page"),V.material.map=K,t.add(V.mesh)}function oe(V){V.loaded&&(V.loaded=!1,t.remove(V.mesh),V.material.map.dispose(),V.material.map=null)}function de(V){if(!V)return;let K=Es(V.x,V.z,o);for(let he of G){if(!he)continue;K>=he.chainageMin-I0&&K<=he.chainageMax+I0?J(he):oe(he)}}return de({x:o[0][0],z:o[0][1]}),{group:null,placeholders:k,count:N,placeholderCount:M,update:de,pages:G}}function Ts(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function hE(i){let e=i.getFullYear(),t=String(i.getMonth()+1).padStart(2,"0"),n=String(i.getDate()).padStart(2,"0");return`${e}-${t}-${n}`}function fr(){return typeof window<"u"&&typeof window.__mcgrotForceDate=="string"?window.__mcgrotForceDate:hE(new Date)}function au(){return Ts(fr())}function cu(i=fr()){return Ts(i)%1e4/1e4*24}var dE=["January","February","March","April","May","June","July","August","September","October","November","December"];function fE(i=fr()){let e=/^(\d{4})-(\d{2})-(\d{2})$/.exec(i);if(!e)return i;let t=dE[Number(e[2])-1]||e[2];return`${Number(e[3])} ${t} ${e[1]}`}function pE(i){let e=Math.floor((i%24+24)%24*60),t=String(Math.floor(e/60)).padStart(2,"0"),n=String(e%60).padStart(2,"0");return`${t}:${n}`}var mE={overcast:"dreich",clear:"clear",rain:"wet",drizzle:"smirr",haar:"haar"};function gE(i){return mE[i]||i}function O0(i,e,t){return`Leith Walk \u2014 ${fE(i)} \xB7 arrived ${pE(e)}, ${gE(t)}`}var xE=18,Md=23,bd=34,_E=.08,yE=380,lu=2e4,B0=.15,vE=6,ME=2.5,bE=22,SE=1.4;function EE(i,e){let t=i*73856093^e*19349663;return t=Math.imul(t^t>>>13,2246822507),t^=t>>>16,t>>>0}function TE(){return typeof window<"u"&&window.__mcgrotForceDaySeed!=null?window.__mcgrotForceDaySeed>>>0:au()}function wE(i,e){let t=i.comic&&i.comic.id||i.name||"";return EE(Ts(t),e)%1e6/1e6}function z0({camera:i,npcs:e,assets:t,onActiveChange:n}){let s=null,r=new da,o=new Map,a=!1,c=!1,l=0,u=0;function h(_,S){let y=o.get(_);if(!(y==="missing"||y==="loading")){if(y){S(y);return}o.set(_,"loading"),r.load(mn(t,_),T=>{o.set(_,T),S(T)},void 0,()=>{o.set(_,"missing")})}}function d(_){if(_.voice)return _.voice;if(!s)return null;let S=new pa(s);S.setRefDistance(ME),S.setMaxDistance(bE),S.setDistanceModel("inverse"),S.setRolloffFactor(SE),S.setLoop(!0);let y=S.context.createBiquadFilter();return y.type="lowpass",y.frequency.value=lu,S.setFilter(y),S._mutterFilter=y,_.group.add(S),_.voice=S,S}function f(_,S){_._readStartCtx=s.context.currentTime,_._readOffsetAtStart=S}function p(_,S){let y=_.comic.audio;y&&h(y,T=>{let v=d(_);if(!v)return;if(v.buffer!==T&&v.setBuffer(T),v.isPlaying){if(!S)return;v.stop()}let w=S?0:(u+wE(_,TE())*T.duration)%T.duration;v.offset=w,v.gain.gain.value=1,v._mutterFilter&&(v._mutterFilter.frequency.value=lu),v.play(),f(v,w),_.setSpeaking(!0)})}function x(_){_.voice&&_.voice.isPlaying&&(_.voice.stop(),_.setSpeaking(!1))}function g(){let _=0;for(let S of e)S.voice&&S.voice.isPlaying&&_++;_!==l&&(l=_,n&&n(_))}function m(_,S){let y=_.voice;if(!y)return;let T=S<=Md?0:Math.min(1,(S-Md)/(bd-Md)),v=1-(1-_E)*T,w=lu+(yE-lu)*T,R=y.context;y.gain.gain.setTargetAtTime(v,R.currentTime,B0),y._mutterFilter&&y._mutterFilter.frequency.setTargetAtTime(w,R.currentTime,B0)}function b(_,S){if(u=S||0,!a||c)return;let y=i.position,T=[];for(let w of e){if(!w.comic.audio)continue;let R=w.group.position,A=Math.hypot(y.x-R.x,y.z-R.z);A<bd&&T.push({npc:w,d:A})}T.sort((w,R)=>w.d-R.d);let v=new Map;for(let{npc:w,d:R}of T){if(v.size>=vE)break;let A=w.voice&&w.voice.isPlaying;(R<xE||A&&R<bd)&&v.set(w,R)}for(let w of e)w.voice&&w.voice.isPlaying&&!v.has(w)&&x(w);for(let[w]of v)w.voice&&w.voice.isPlaying||p(w,!1);for(let[w,R]of v)m(w,R);g()}return{get listener(){return s},update:b,restart(_){p(_,!0),g()},togglePause(_){let S=_.voice;if(!S||!S.buffer)return p(_,!0),!0;if(S.isPlaying){let y=M(_);return S.pause(),_.setSpeaking(!1),g(),y!=null&&f(S,y),!1}return S.play(),f(S,S._readOffsetAtStart||0),_.setSpeaking(!0),g(),!0},setOverlayOpen(_){if(c=!!_,c){for(let S of e)S.voice&&S.voice.isPlaying&&x(S);g()}},getElapsed:M,isEnabled(){return a},setEnabled(_){a=!!_},resume(){s||(s=new fa,i.add(s)),a=!0;let _=s.context;_&&_.state==="suspended"&&_.resume()}};function M(_){let S=_&&_.voice;if(!S||!S.buffer||S._readStartCtx==null)return null;let y=S.buffer.duration;if(!y)return 0;let v=(S.isPlaying?s.context.currentTime-S._readStartCtx+S._readOffsetAtStart:S._readOffsetAtStart)%y;return v<0&&(v+=y),v}}var AE=new Set(["INPUT","TEXTAREA","SELECT"]);function ws(i){let e=i&&i.target;return!e||!e.tagName?!1:AE.has(e.tagName)||e.isContentEditable===!0}var H0=8,RE=600;function k0({assets:i,npcs:e,camera:t,controls:n,proximityAudio:s,onReadingChange:r,litter:o,leithers:a,journal:c}){let l=document.getElementById("npc-prompt"),u=document.getElementById("npc-prompt-label"),h=document.getElementById("comic-overlay"),d=document.getElementById("comic-title"),f=document.getElementById("comic-image"),p=document.getElementById("comic-meta"),x=document.getElementById("comic-close"),g=document.getElementById("comic-playpause"),m=document.getElementById("comic-transcript"),b=null,M=null,_=null,S=null,y=!0,T=null,v=!1,w=null,R=null,A=-1;function C(fe){g&&(g.textContent=fe?"\u23F8":"\u25B6")}function N(fe){if(w=null,R=null,A=-1,!m)return;let we=y&&i.readings&&fe&&fe.comic&&i.readings[fe.comic.id];if(!we||!we.phrases||!we.phrases.length){m.style.display="none",m.textContent="";return}m.textContent="";let ee=document.createDocumentFragment(),ce=[];for(let X of we.phrases){let se=document.createElement("div");se.className=`phrase ${X.kind}`,se.textContent=X.text,ee.appendChild(se),ce.push(se)}m.appendChild(ee),m.style.display="block",m.scrollTop=0,w=we.phrases,R=ce}function z(){if(!w||!M)return;let fe=s.getElapsed(M);if(fe==null)return;let we=-1;for(let X=0;X<w.length;X++)fe>=w[X].start&&(we=X);if(we===A||(A>=0&&R[A]&&R[A].classList.remove("current"),A=we,we<0))return;let ee=R[we];ee.classList.add("current");let ce=ee.offsetTop-m.clientHeight/2+ee.clientHeight/2;m.scrollTop=Math.max(0,ce)}function F(fe){r&&r(!!fe)}let k=()=>document.documentElement.classList.contains("touch");function G(fe){l&&(u&&(u.textContent=k()?`Tap to hear ${fe.name} read`:`[E] Hear ${fe.name} read`),l.style.display="block")}function J(){l&&(l.style.display="none")}function oe(fe){T=null,v=!1,s.restart(fe),c&&fe.comic&&!fe.skipJournal&&(c.credit(fe.comic.id,"heard"),fe.isAnchor&&c.credit(fe.comic.id,"anchor"))}function de(){!v||!M||(clearTimeout(T),oe(M))}function V(fe){!fe||M||c&&c.isOpen()||(M=fe,J(),d&&(d.textContent=fe.comic.title),p&&(p.textContent=`${fe.name} \u2014 ${fe.blurb}`),f&&(f.src=mn(i,fe.comic.image),f.alt=fe.comic.title,f.parentElement.scrollTop=0),N(fe),h&&(h.style.display="flex"),n.setEnabled(!1),s.setOverlayOpen(!0),C(!!(fe.comic&&fe.comic.audio)),F(!0),v=!0,T=setTimeout(()=>oe(fe),RE))}function K(){!M&&!S||(T&&(clearTimeout(T),T=null),v=!1,C(!1),F(!1),h&&(h.style.display="none"),n.setEnabled(!0),s.setOverlayOpen(!1),M=null,S=null,N(null),b=null,_=null)}function he(fe){M||S||c&&c.isOpen()||(S=fe,J(),d&&(d.textContent=fe.comic.title||"McGrot"),p&&(p.textContent="found lying on the street"),f&&(f.src=mn(i,fe.comic.image),f.alt=fe.comic.title||"McGrot comic",f.parentElement.scrollTop=0),N(null),h&&(h.style.display="flex"),n.setEnabled(!1),s.setOverlayOpen(!0),c&&fe.comic&&c.credit(fe.comic.id,"found"),a&&Math.random()<.7&&a.summonReader(fe))}function ge(){if(!M)return;if(v){de();return}let fe=s.togglePause(M);C(fe),F(fe)}function be(fe){if(fe.code==="Escape"){(M||S)&&K();return}if(!ws(fe)&&fe.code==="KeyE"){if(v){de();return}!M&&!S&&(b?V(b):_&&he(_))}}function Z(){M||S||(b?V(b):_&&he(_))}function te(fe){if(v){de();return}fe.target===h&&K()}window.addEventListener("keydown",be),l&&l.addEventListener("click",Z),h&&h.addEventListener("click",te),x&&x.addEventListener("click",K),g&&g.addEventListener("click",ge);function $(){if(M||S){z();return}let fe=t.position.x,we=t.position.z,ee=null,ce=H0;for(let se=0;se<e.length;se++){let xe=e[se].group.position,Ne=Math.hypot(fe-xe.x,we-xe.z);Ne<ce&&(ce=Ne,ee=e[se])}let X=!ee&&o?o.nearestItem(fe,we,3.2):null;(ee!==b||X!==_)&&(b=ee,_=X,b?G(b):_?(u&&(u.textContent=k()?"Tap to read the comic on the ground":"[E] Read the comic on the ground"),l&&(l.style.display="block")):J())}function _e(){window.removeEventListener("keydown",be),l&&l.removeEventListener("click",Z),h&&h.removeEventListener("click",te),x&&x.removeEventListener("click",K),g&&g.removeEventListener("click",ge),T&&clearTimeout(T)}function Me(fe){y=!!fe,M&&N(M)}function Se(){return!!(M||S)}return{update:$,dispose:_e,setReadAlong:Me,isOpen:Se,range:H0,readerCount:()=>e.length}}var St=(()=>{let i=12648430;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),CE=35,uu=11,IE=.9,PE=90,G0=[7027238,8013360,6042916,9065014,5189153],LE=22,NE=8,DE=3,V0=.06,FE=.16,du=4,q0=14,W0=55;function Y0(i,e){let t=i.streetLine||[],n=i.groundHeight||(()=>0),s=new nt;e.add(s);let r=UE(t,s,n);kE(t,s,n,i.collision),GE(t,s,n);let o=VE(t,s,n),a=BE(r,s),c={group:s,poles:r,onArcFlash:null};return c.update=function(u,h){WE(o,u,h),HE(a,h,()=>{c.onArcFlash&&c.onArcFlash()})},c}function fu(i,e){if(!i||i.length<2||e<0)return null;let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0,d=u||1;return{point:[s+c*h,r+l*h],tangent:[c/d,l/d]}}t+=u}return null}function Sd(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function hu(i,e){let t=new me(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;i.setAttribute("color",new Qe(s,3))}function UE(i,e,t){let n=Sd(i),s=[],r=[],o=[];for(let a=12;a<n-5;a+=CE){let c=fu(i,a);if(!c)break;let[l,u]=c.tangent,h=-u,d=l,f=c.point[0]+h*uu,p=c.point[1]+d*uu,x=c.point[0]-h*uu,g=c.point[1]-d*uu,m=t(f,p),b=t(x,g),M=new O(f,m,p),_=new O(x,b,g),S=7.5+St()*.6;s.push(X0(M,S)),s.push(X0(_,S)),r.push(OE(M.clone().setY(m+S-.4),_.clone().setY(b+S-.4))),o.push({position:M.clone().setY(m+S-.4)},{position:_.clone().setY(b+S-.4)})}if(s.length){let a=st(s,!1),c=new qe({color:3814700,flatShading:!0});e.add(new Oe(a,c))}if(r.length){let a=st(r,!1),c=new ps({color:1841685});e.add(new Qs(a,c))}return o}function X0(i,e){let t=new cn(.09,.13,e,6);return t.translate(i.x,i.y+e/2,i.z),t}function OE(i,e){let n=[];for(let o=0;o<=8;o++){let a=o/8,c=ii.lerp(i.x,e.x,a),l=ii.lerp(i.z,e.z,a),u=ii.lerp(i.y,e.y,a),h=4*a*(1-a)*IE;n.push(c,u-h,l)}let s=[];for(let o=0;o<8;o++)s.push(n[o*3],n[o*3+1],n[o*3+2]),s.push(n[(o+1)*3],n[(o+1)*3+1],n[(o+1)*3+2]);let r=new pt;return r.setAttribute("position",new Qe(s,3)),r}function BE(i,e){if(!i.length)return[];let t=Math.min(DE,i.length),n=zE(i.length,t),s=[];for(let r of n){let o=i[r],a=new mi(10473727,0,14,2);a.position.copy(o.position),e.add(a);let c=new yn({color:14676735,transparent:!0,opacity:0,depthWrite:!1,blending:Qi});c.userData.unlit=!1;let l=new Oe(new Yn(.12,6,6),c);l.position.copy(o.position),e.add(l),s.push({light:a,spark:l,active:!1,nextTime:du+St()*(q0-du),flashEnd:0})}return s}function zE(i,e){let t=[];for(let n=0;n<e;n++)t.push(Math.floor((n+.5)/e*i));return t}function HE(i,e,t){for(let n of i)if(!n.active&&e>=n.nextTime){n.active=!0;let s=V0+St()*(FE-V0);n.flashEnd=e+s,n.light.intensity=W0,n.spark.material.opacity=1,n.spark.scale.setScalar(.8+St()*.6),t()}else n.active&&e>=n.flashEnd?(n.active=!1,n.light.intensity=0,n.spark.material.opacity=0,n.nextTime=e+du+St()*(q0-du)):n.active&&(n.light.intensity=W0*(.7+St()*.3))}function kE(i,e,t,n){let s=fu(i,PE);if(!s)return;let[r,o]=s.tangent,a=-o,c=r,l=5.5,u=s.point[0]+a*l,h=s.point[1]+c*l,d=t(u,h),f=Math.atan2(r,o),p=[],x=new Ze(2.6,3.1,11);hu(x,7030064),p.push(x);let g=new Ze(2.3,.3,10.6);g.translate(0,1.7,0),hu(g,4864556),p.push(g);for(let _=-1;_<=1;_++)for(let S of[-1,1]){let y=(St()-.5)*.3,T=new Ze(.08,.9+St()*.3,1.6);T.translate(S*1.32,.5+y,_*3.2+(St()-.5)*.6),hu(T,789770),p.push(T)}let m=st(p,!1),b=new qe({vertexColors:!0,flatShading:!0}),M=new Oe(m,b);M.position.set(u,d+1.85,h),M.rotation.y=f,M.rotation.z=.09,e.add(M),n&&n.addBox(u,h,1.3,5.5,f,"tram")}function GE(i,e,t){let n=Sd(i);if(n<4)return;let s=[];for(let a=0;a<LE;a++){let c=25+St()*Math.max(10,n-33),l=fu(i,c);if(!l)continue;let[u,h]=l.tangent,d=-h,f=u,p=St()<.5?1:-1,x=(7.5+St()*3)*p,g=l.point[0]+d*x,m=l.point[1]+f*x,b=St()<.4,M=b?new cn(.32,.34,.7,8):new Ze(.5+St()*.3,.4+St()*.3,.5+St()*.3),_=b?.35:.2;M.translate(0,_,0),M.rotateY(St()*Math.PI),St()<.3&&M.rotateZ((St()-.5)*.5),M.translate(g,t(g,m),m),hu(M,G0[a%G0.length]),s.push(M)}if(!s.length)return;let r=st(s,!1),o=new qe({vertexColors:!0,flatShading:!0});e.add(new Oe(r,o))}function VE(i,e,t){let n=Sd(i);if(n<4)return[];let s=XE(),r=[];for(let o=0;o<NE;o++){let a=35+St()*Math.max(20,n-55),c=fu(i,a);if(!c)continue;let l=new wi({map:s,transparent:!0,opacity:.18,depthWrite:!1,color:3815468}),u=new qi(l),h=8+St()*4;u.scale.set(h,h,1),e.add(u);let d=c.point[0]+(St()-.5)*14,f=c.point[1]+(St()-.5)*14;r.push({sprite:u,baseX:d,baseZ:f,baseY:t(d,f)+6+St()*3,phase:St()*Math.PI*2,riseSpeed:.25+St()*.15,riseRange:9+St()*3,driftAmp:2+St()*2,driftFreq:.05+St()*.05,baseOpacity:.14+St()*.1})}return r}function WE(i,e,t){for(let n of i){let s=(t*n.riseSpeed+n.phase)%n.riseRange;n.sprite.position.set(n.baseX+Math.sin(t*n.driftFreq+n.phase)*n.driftAmp,n.baseY+s,n.baseZ+Math.cos(t*n.driftFreq*.8+n.phase)*n.driftAmp);let r=s/n.riseRange;n.sprite.material.opacity=n.baseOpacity*(1-Math.abs(r-.5)*1.4)}}function XE(){let e=document.createElement("canvas");e.width=128,e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,"rgba(60,58,48,0.55)"),n.addColorStop(.5,"rgba(50,48,40,0.25)"),n.addColorStop(1,"rgba(40,38,32,0)"),t.fillStyle=n,t.fillRect(0,0,128,128);let s=new xt(e);return s.colorSpace=tt,s}function Z0(i){let e=new Map,t=new Map,n=i.clone();return K0(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function K0(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)K0(i.children[n],e.children[n],t)}var Rs=class extends fi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Id(t)}),this.register(function(t){return new Pd(t)}),this.register(function(t){return new Hd(t)}),this.register(function(t){return new kd(t)}),this.register(function(t){return new Gd(t)}),this.register(function(t){return new Nd(t)}),this.register(function(t){return new Dd(t)}),this.register(function(t){return new Fd(t)}),this.register(function(t){return new Ud(t)}),this.register(function(t){return new Cd(t)}),this.register(function(t){return new Od(t)}),this.register(function(t){return new Ld(t)}),this.register(function(t){return new zd(t)}),this.register(function(t){return new Bd(t)}),this.register(function(t){return new Ad(t)}),this.register(function(t){return new pu(t,ft.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new pu(t,ft.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Vd(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=ji.extractUrlBase(e);o=ji.resolveURL(l,this.path)}else o=ji.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new nr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===eg){try{o[ft.KHR_BINARY_GLTF]=new Wd(e)}catch(h){s&&s(h);return}r=JSON.parse(o[ft.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Jd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case ft.KHR_MATERIALS_UNLIT:o[h]=new Rd;break;case ft.KHR_DRACO_MESH_COMPRESSION:o[h]=new Xd(r,this.dracoLoader);break;case ft.KHR_TEXTURE_TRANSFORM:o[h]=new qd;break;case ft.KHR_MESH_QUANTIZATION:o[h]=new Yd;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function qE(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function en(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ad=class{constructor(e){this.parser=e,this.name=ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new me(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Ln);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new sr(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new mi(u),l.distance=h;break;case"spot":l=new la(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Ni(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Rd=class{constructor(){this.name=ft.KHR_MATERIALS_UNLIT}getMaterialType(){return yn}extendParams(e,t,n){let s=[];e.color=new me(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ln),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,tt))}return Promise.all(s)}},Cd=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Id=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return en(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Te(r,r)}return Promise.all(s)}},Pd=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DISPERSION}getMaterialType(e){return en(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Ld=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return en(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Nd=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SHEEN}getMaterialType(e){return en(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new me(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Ln)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,tt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Dd=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return en(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Fd=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_VOLUME}getMaterialType(e){return en(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new me().setRGB(r[0],r[1],r[2],Ln),Promise.all(s)}},Ud=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IOR}getMaterialType(e){return en(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Od=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){return en(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new me().setRGB(r[0],r[1],r[2],Ln),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,tt)),Promise.all(s)}},Bd=class{constructor(e){this.parser=e,this.name=ft.EXT_MATERIALS_BUMP}getMaterialType(e){return en(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},zd=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return en(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Hd=class{constructor(e){this.parser=e,this.name=ft.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},kd=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},Gd=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},pu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},Vd=class{constructor(e){this.name=ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==ri.TRIANGLES&&l.mode!==ri.TRIANGLE_STRIP&&l.mode!==ri.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(let p of h){let x=new $e,g=new O,m=new Nt,b=new O(1,1,1),M=new pn(p.geometry,p.material,d);for(let _=0;_<d;_++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,_),c.SCALE&&b.fromBufferAttribute(c.SCALE,_),M.setMatrixAt(_,x.compose(g,m,b));for(let _ in c)if(_==="_COLOR_0"){let S=c[_];M.instanceColor=new fs(S.array,S.itemSize,S.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&p.geometry.setAttribute(_,c[_]);Dt.prototype.copy.call(M,p),this.parser.assignFinalMaterial(M),f.push(M)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},eg="glTF",Ua=12,$0={JSON:1313821514,BIN:5130562},Wd=class{constructor(e){this.name=ft.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ua),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==eg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ua,r=new DataView(e,Ua),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===$0.JSON){let l=new Uint8Array(e,Ua+o,a);this.content=n.decode(l)}else if(c===$0.BIN){let l=Ua+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Xd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let u in o){let h=Kd[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Kd[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=fo[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let p in f.attributes){let x=f.attributes[p],g=c[p];g!==void 0&&(x.normalized=g)}h(f)},a,l,Ln,d)})})}},qd=class{constructor(){this.name=ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Yd=class{constructor(){this.name=ft.KHR_MESH_QUANTIZATION}},mu=class extends Ri{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,p=e*l,x=p-l,g=-2*f+3*d,m=f-d,b=1-g,M=m-d+h;for(let _=0;_!==a;_++){let S=o[x+_+a],y=o[x+_+c]*u,T=o[p+_+a],v=o[p+_]*u;r[_]=b*S+M*y+g*T+m*v}return r}},YE=new Nt,Zd=class extends mu{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return YE.fromArray(r).normalize().toArray(r),r}},ri={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},fo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},J0={9728:qt,9729:Yt,9984:al,9985:so,9986:ar,9987:xi},j0={33071:ei,33648:Vr,10497:ni},Ed={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Kd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},As={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ZE={CUBICSPLINE:void 0,LINEAR:Ys,STEP:qs},Td={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function KE(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ai({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:An})),i.DefaultMaterial}function pr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ni(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function $E(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function JE(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function jE(i){let e,t=i.extensions&&i.extensions[ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+wd(t.attributes):e=i.indices+":"+wd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+wd(i.targets[n]);return e}function wd(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function $d(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function QE(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var eT=new $e,Jd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new qE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new pi(this.options.manager):this.textureLoader=new ha(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new nr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return pr(r,a,s),Ni(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,u]of o.children.entries())r(u,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ft.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(ji.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Ed[s.type],a=fo[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Ut(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Ed[s.type],l=fo[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,x,g;if(f&&f!==h){let m=Math.floor(d/f),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,M=t.cache.get(b);M||(x=new l(a,m*f,s.count*f/u),M=new $s(x,f/u),t.cache.add(b,M)),g=new ds(M,c,d%f/u,p)}else a===null?x=new l(s.count*c):x=new l(a,d,s.count*c),g=new Ut(x,c,p);if(s.sparse!==void 0){let m=Ed.SCALAR,b=fo[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,S=new b(o[1],M,s.sparse.count*m),y=new l(o[2],_,s.sparse.count*c);a!==null&&(g=new Ut(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let T=0,v=S.length;T<v;T++){let w=S[T];if(g.setX(w,y[T*c]),c>=2&&g.setY(w,y[T*c+1]),c>=3&&g.setZ(w,y[T*c+2]),c>=4&&g.setW(w,y[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=J0[d.magFilter]||Yt,u.minFilter=J0[d.minFilter]||xi,u.wrapS=j0[d.wrapS]||ni,u.wrapT=j0[d.wrapT]||ni,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==qt&&u.minFilter!==Yt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;let d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(x){let g=new rn(x);g.needsUpdate=!0,d(g)}),t.load(ji.resolveURL(h,r.path),p,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),Ni(h,o),h.userData.mimeType=o.mimeType||QE(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ft.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ft.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[ft.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new ms,Rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new ps,Rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ai}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[ft.KHR_MATERIALS_UNLIT]){let h=s[ft.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new me(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Ln),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,tt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ot);let u=r.alphaMode||Td.OPAQUE;if(u===Td.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Td.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==yn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Te(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==yn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==yn){let h=r.emissiveFactor;a.emissive=new me().setRGB(h[0],h[1],h[2],Ln)}return r.emissiveTexture!==void 0&&o!==yn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,tt)),Promise.all(l).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Ni(h,r),t.associations.set(h,{materials:e}),r.extensions&&pr(s,h,r),h})}createUniqueName(e){let t=Lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Q0(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],u=jE(l),h=s[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[ft.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Q0(new pt,l,t),s[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let u=o[c].material===void 0?KE(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,p=u.length;f<p;f++){let x=u[f],g=o[f],m,b=l[f];if(g.mode===ri.TRIANGLES||g.mode===ri.TRIANGLE_STRIP||g.mode===ri.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new Xo(x,b):new Oe(x,b),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===ri.TRIANGLE_STRIP?m.geometry=id(m.geometry,Ea):g.mode===ri.TRIANGLE_FAN&&(m.geometry=id(m.geometry,ao));else if(g.mode===ri.LINES)m=new Qs(x,b);else if(g.mode===ri.LINE_STRIP)m=new js(x,b);else if(g.mode===ri.LINE_LOOP)m=new Yo(x,b);else if(g.mode===ri.POINTS)m=new er(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&JE(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Ni(m,r),g.extensions&&pr(s,m,g),t.assignFinalMaterial(m),h.push(m)}for(let f=0,p=h.length;f<p;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&pr(s,h[0],r),h[0];let d=new nt;r.extensions&&pr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=h.length;f<p;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new sn(ii.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ys(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ni(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){let h=o[l];if(h){a.push(h);let d=new $e;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new qo(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],p=s.samplers[f.sampler],x=f.target,g=x.node,m=s.parameters!==void 0?s.parameters[p.input]:p.input,b=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",b)),l.push(p),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],p=h[2],x=h[3],g=h[4],m=[];for(let M=0,_=d.length;M<_;M++){let S=d[M],y=f[M],T=p[M],v=x[M],w=g[M];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let R=n._createAnimationTracks(S,y,T,v,w);if(R)for(let A=0;A<R.length;A++)m.push(R[A])}let b=new oa(r,void 0,m);return Ni(b,s),b})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,eT)});for(let f=0,p=h.length;f<p;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){let f=u.userData.pivot,p=h[0];u.pivot=new O().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Kr:l.length>1?u=new nt:l.length===1?u=l[0]:u=new Dt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Ni(u,r),r.extensions&&pr(n,u,r),r.matrix!==void 0){let h=new $e;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new nt;n.name&&(r.name=s.createUniqueName(n.name)),Ni(r,n),n.extensions&&pr(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++){let d=c[u];d.parent!==null?r.add(Z0(d)):r.add(d)}let l=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof Rn||d instanceof rn)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}As[r.path]===As.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let u;switch(As[r.path]){case As.weights:u=Ki;break;case As.rotation:u=$i;break;case As.translation:case As.scale:u=xs;break;default:n.itemSize===1?u=Ki:u=xs;break}let h=s.interpolation!==void 0?ZE[s.interpolation]:Ys,d=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let x=new u(c[f]+"."+As[r.path],t.array,d,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=$d(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof $i?Zd:mu;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function tT(i,e,t){let n=e.attributes,s=new Qt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new O(c[0],c[1],c[2]),new O(l[0],l[1],l[2])),a.normalized){let u=$d(fo[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new O,c=new O;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let x=$d(fo[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Fn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Q0(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=Kd[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ht.workingColorSpace!==Ln&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),Ni(i,e),tT(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?$E(i,e.targets,t):i})}var nT=!0,Qd=[{name:"bulk",file:"characters/rab-form.glb",girth:1.42,headScale:1.198,frontZ:.2},{name:"slab",file:"characters/slab-form.glb",girth:1.195,headScale:1.204,frontZ:.15},{name:"runt",file:"characters/runt-form.glb",girth:.918,headScale:1.47,frontZ:.093},{name:"stoop",file:"characters/morag-form.glb",girth:.712,headScale:1.485,frontZ:.187},{name:"spindle",file:"characters/kenneth-form.glb",girth:.68,headScale:1.357,frontZ:.083}],iT=.17,sT=.27,rT=.14,oT=.2848,aT=.1239,cT=.25;function ef(i,e=cT){let t=i||iu,n=Qd[0],s=1/0;for(let r of Qd){let o=(t.girth-r.girth)/oT,a=(t.headScale-r.headScale)/aT,c=o*o+e*a*a;c<s&&(s=c,n=r)}return n}function lT(i){let e=i||iu,t=ef(e),n=_d(e).headTopY;return{arch:t,height:n,squash:e.girth/t.girth}}function ig(i,e,t,n){let s=zn("Characters",nT),r=zn("Tint",!0),o=zn("CharacterFail",!1),a=n&&Array.isArray(n.npcs)?n.npcs:[];if(!s||!a.length){for(let S of a)S.buildDoll();return{enabled:s,tinted:r,loaded:()=>0,assigned:0,counts:{},onArchetype:()=>{}}}let c=a,l=new Map;for(let S of c){let y=lT(S.build);S.archetype=y.arch.name,S.squash=y.squash,l.has(y.arch.name)||l.set(y.arch.name,{arch:y.arch,npcs:[]}),l.get(y.arch.name).npcs.push({npc:S,...y})}let u=new Rs,h=[],d=0,f=0,p=new Map,x=[],g=(S,y,T)=>{try{S(y,T)}catch(v){console.error("archetype subscriber failed",y.name,v)}},m=(S,y)=>{p.set(S.name,{arch:S,proto:y});for(let T of x)g(T,S,y)},b=S=>{for(let{arch:y,proto:T}of p.values())g(S,y,T);x.push(S)};for(let S of Qd){let y=(l.get(S.name)||{npcs:[]}).npcs;(o?Promise.reject(new Error("forced")):u.loadAsync(mn(i,S.file))).then(T=>{let v=tf(T.scene),w=ng(v,v),R=w.x/(w.y||1),A=null;v.traverse(C=>{!A&&C.isMesh&&C.material&&(A=C.material.color.clone())});for(let C of y){let N=v.clone(!0);N.name="vendor-mesh",r&&hT(N,C.npc),N.scale.set(C.height*C.squash,C.height,C.height*C.squash),C.npc.group.add(N),C.npc.comicMesh&&(C.npc.comicMesh.position.z=S.frontZ*C.height*C.squash+iT),h.push({npc:C.npc,arch:S,inst:N,protoAspect:R,protoColor:A}),d++}m(S,v)}).catch(()=>{for(let T of y)T.npc.buildDoll(),f++;m(S,null)})}let M={};for(let[S,y]of l)M[S]=y.npcs.length;return{enabled:s,tinted:r,loaded:()=>d,fellBack:()=>f,assigned:c.length,counts:M,measure:_,onArchetype:b};function _(){return h.map(({npc:S,arch:y,inst:T,protoAspect:v,protoColor:w})=>{let R=ng(T,S.group),A=null;T.traverse(N=>{!A&&N.isMesh&&N.material&&(A=N.material)});let C=A&&w?new me(A.color.r/(w.r||1),A.color.g/(w.g||1),A.color.b/(w.b||1)):null;return{name:S.name,archetype:y.name,meshTop:R.y,distortion:R.x/(R.y||1)/(v||1),materialId:A?A.uuid:null,meshNote:C?uT(C):null}})}}function uT(i){let e=(i.r+i.g+i.b)/3;return e>0?[i.r/e,i.g/e,i.b/e]:[1,1,1]}function hT(i,e){let t=e.noteColor;if(!t)return;let n=t.clone(),s=(n.r+n.g+n.b)/3;s>0&&n.multiplyScalar(1/s);let r=[n.r-1,n.g-1,n.b-1],o=Math.hypot(r[0],r[1],r[2]),a=o>0?sT/o:0,c=new me(1+r[0]*a,1+r[1]*a,1+r[2]*a),l=0;for(let h of e.name||"")l=l*31+h.charCodeAt(0)|0;let u=1+((Math.abs(l)>>7)%1e3/1e3-.5)*2*rT;c.multiplyScalar(u),i.traverse(h=>{!h.isMesh||!h.material||(h.material=h.material.clone(),h.material.color.multiply(c))})}var dT=new $e,tg=new Qt,jd=new Qt;function ng(i,e){e.updateWorldMatrix(!0,!1),i.updateWorldMatrix(!1,!0),jd.makeEmpty();let t=dT.copy(e.matrixWorld).invert(),n=new $e;return i.traverse(s=>{!s.isMesh||!s.geometry||(s.geometry.computeBoundingBox(),tg.copy(s.geometry.boundingBox).applyMatrix4(n.multiplyMatrices(t,s.matrixWorld)),jd.union(tg))}),jd.getSize(new O)}function tf(i){i.traverse(o=>{if(!o.isMesh||!o.material)return;let a=o.material;o.material=new qe({map:a.map||null,color:(a.color?a.color.clone():new me(16777215)).multiplyScalar(.42)})});let e=new Qt().setFromObject(i),t=e.getSize(new O),n=e.getCenter(new O),s=1/(t.y||1);i.scale.setScalar(s),i.position.set(-n.x*s,-e.min.y*s,-n.z*s);let r=new nt;return r.add(i),r}var fT=!0,sg=740,Oa=1,nf=7.6,rg="characters/mcgrot-form.glb",og="characters/pomple-form.glb",pT=1.72,mT=.42,lg=.45,gT=.3,xT=3,_T=8,sf=["AWAY.","BACK NEVER.","\u2014 McG"],yT="3c6b637b",vT="McGrot",MT="Proprietor o' the Gullet",Zt=4.4,vt=2.6,Mn=2.05,tn=.62,rf=.42,po=2.2,Fi=.35,Di=tn+.52,Cs=tn+1.8,ag=1973273,bT=6116421,ug=4860444,ST=7164440,ET=4857114,Ba=(()=>{let i=7143703;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})();function TT(){return zn("Gullet",fT)}function wT(i){return Ts(`gullet:${i}`)%_T<xT}function hg(i,e,t){let n=TT(),s={enabled:!1,group:null,placement:null,solids:0,dayKey:null,mcgrotIn:!1,mcgrot:null,pomple:null,reader:null,meshes:()=>0};if(!n||!e||!t)return s;let r=e.streetLine||[],o=DT(r,sg);if(!o)return s;let a=e.groundHeight||(()=>0),[c,l]=o.tangent,u=-l,h=c,d=o.point[0]+u*nf*Oa,f=o.point[1]+h*nf*Oa,p=a(d,f),x=Math.atan2(-u*Oa,-h*Oa),g=new nt;g.name="gullet",g.position.set(d,p,f),g.rotation.y=x,t.add(g),AT(g),RT(g),CT(g),IT(g);let m=fr(),b=wT(m);b||LT(g);let M=0;if(e.collision){e.collision.addBox(d,f,Zt*.5,vt*.5,x,"gullet"),M++;let[F,k]=cg(d,f,x,Zt*.5+.5,-vt*.35);e.collision.addBox(F,k,.15,.85,x,"gullet"),M++}let _=[Fi,-.15],S=tn,y=b?[Zt*.5+.9,vt*.5+.25]:[Zt*.5+1.4+Ts(`pomple:${m}`)%100/100*1.6,vt*.5-.4-Ts(`pomple-z:${m}`)%100/100*1.2],T={mcgrot:null,pomple:null},v=0,w=0,R=new Rs,A=(F,k,G,J,oe=0)=>{let[de,V]=cg(d,f,x,k[0],k[1]),K=a(de,V)+oe;e.collision&&(e.collision.addCircle(de,V,J==="mcgrot"?lg:gT,"gullet-cast"),v++);let he=new nt;he.name=`gullet-${J}`,he.position.set(de,K,V),he.rotation.y=x,t.add(he),T[J]={holder:he,x:de,y:K,z:V,height:G,loaded:!1},R.loadAsync(mn(i,F)).then(ge=>{let be=tf(ge.scene);be.name=`${J}-mesh`,be.scale.setScalar(G),he.add(be),T[J].loaded=!0,w++}).catch(()=>{})},C=typeof window<"u"&&!!window.MCGROT_ASSETS,N=F=>!C||!!(i&&i.models&&i.models[F]);b&&N(rg)&&A(rg,_,pT,"mcgrot",S);let z=b?PT(i,T.mcgrot):null;return N(og)&&A(og,y,mT,"pomple"),{enabled:!0,group:g,solids:M,castSolids:v,dayKey:m,mcgrotIn:b,mcgrot:T.mcgrot,pomple:T.pomple,reader:z,meshes:()=>w,placement:{chainage:sg,side:Oa,offset:nf,x:d,y:p,z:f,yaw:x}}}function AT(i){let e=[],t=[],s=tn,r=tn+Mn,o=(m,b,M,_,S,y)=>{let T=new Ze(m,b,M);T.translate(_,S,y),e.push(T)};o(Zt,Mn,.08,0,tn+Mn*.5,-vt*.5+.08*.5),o(.08,Mn,vt,-Zt*.5+.08*.5,tn+Mn*.5,0),o(.08,Mn,vt,Zt*.5-.08*.5,tn+Mn*.5,0),o(Zt,.08,vt,0,r-.08*.5,0),o(Zt,.08,vt,0,s+.08*.5,0);let a=Fi-po*.5,c=Fi+po*.5,l=vt*.5-.08*.5;o(a+Zt*.5,Mn,.08,(-Zt*.5+a)*.5,tn+Mn*.5,l),o(Zt*.5-c,Mn,.08,(c+Zt*.5)*.5,tn+Mn*.5,l),o(po,Di-s,.08,Fi,(s+Di)*.5,l),o(po,r-Cs,.08,Fi,(Cs+r)*.5,l);let u=.03,h=(m,b,M,_,S,y)=>{let T=new Ze(m,b,M);T.translate(_,S,y),t.push(T)},d=Zt-.08*2,f=Mn-.08*2;h(d,f,u,0,tn+Mn*.5,-vt*.5+.08+u*.5),h(u,f,vt-.08*2,-Zt*.5+.08+u*.5,tn+Mn*.5,0),h(u,f,vt-.08*2,Zt*.5-.08-u*.5,tn+Mn*.5,0),h(d,u,vt-.08*2,0,r-.08-u*.5,0),h(d,u,vt-.08*2,0,s+.08+u*.5,0);let p=new Ze(1.5,Mn*.72,vt*.94);p.translate(-Zt*.5-.72,tn+Mn*.36,0),e.push(p);for(let[m,b,M,_]of[[po+.12,.07,Fi,Di],[po+.12,.07,Fi,Cs],[.07,Cs-Di,a,(Di+Cs)*.5],[.07,Cs-Di,c,(Di+Cs)*.5]]){let S=new Ze(m,b,.1);S.translate(M,_,vt*.5-.02),t.push(S)}let x=new Ze(2.5,.05,.95);x.rotateX(-.34),x.translate(.15,tn+1.95,vt*.5+.42);for(let m of[-1,1]){let b=new Ze(.04,.04,.95);b.rotateX(-.34),b.translate(.15+m*1.18,tn+1.95,vt*.5+.42),t.push(b)}for(let m of[1,-1]){let b=new Ze(Zt*.998,.34,.05);b.translate(0,tn+.17,m*(vt*.5+.01)),t.push(b)}for(let m of[1,-1]){let b=new Ze(.05,.34,vt*.998);b.translate(m*(Zt*.5+.01),tn+.17,0),t.push(b)}let g=[];for(let m of[-Zt*.34,Zt*.34])for(let b of[-vt*.42,vt*.42]){let M=new cn(rf,rf,.26,10);M.rotateZ(Math.PI/2),M.translate(m,rf,b),g.push(M)}mr(i,e,bT,"gullet-body"),mr(i,t,ag,"gullet-trim"),mr(i,g,ag,"gullet-wheels"),mr(i,[x],ST,"gullet-awning")}function RT(i){let e=[],t=[],n=new Ze(2.5,.07,.42);n.translate(Fi,Di-.02,vt*.5+.19),e.push(n);for(let o=0;o<5;o++){let a=.2+Ba()*.09,c=new cn(.045,.055,a,6);c.translate(Fi-1.05+o*.5+(Ba()-.5)*.12,Di+.02+a*.5,vt*.5+.17+(Ba()-.5)*.06),t.push(c)}let s=new cn(.018,.018,.44,5);s.rotateZ(.16),s.translate(1.42,tn+1.34,vt*.5+.09),e.push(s);let r=new Yn(.085,7,5,0,Math.PI*2,Math.PI*.5,Math.PI*.5);r.translate(1.46,tn+1.12,vt*.5+.09),e.push(r),mr(i,e,ug,"gullet-counter"),mr(i,t,ET,"gullet-props")}function CT(i){let e=[],t=new Ze(1.5,1.7,.06);t.rotateY(Math.PI/2),t.rotateZ(-.09),t.translate(Zt*.5+.5,.85,-vt*.35),e.push(t);for(let n=0;n<3;n++){let s=new Ze(.09,1.5+Ba()*.3,.05);s.rotateZ((Ba()-.5)*.5),s.translate(Zt*.5+.52,.8,-vt*.35-.5+n*.5),e.push(s)}mr(i,e,ug,"gullet-hoarding")}function IT(i){let e=new xt(NT());e.colorSpace=tt;let t=new Oe(new Rt(1.15,.86),new qe({map:e}));t.name="gullet-price-board",t.position.set(-1.4,tn+1.34,vt*.5+.13),t.rotation.y=.12,i.add(t)}function PT(i,e){let n=(i&&i.catalog&&Array.isArray(i.catalog.comics)?i.catalog.comics:[]).find(s=>s.id===yT);return!n||!e?null:{group:e.holder,comic:n,name:vT,blurb:MT,isAnchor:!1,skipJournal:!0,collisionRadius:lg,voice:null,speaking:!1,setSpeaking(s){this.speaking=!!s}}}function LT(i){let e=document.createElement("canvas");e.width=384,e.height=192;let t=e.getContext("2d");t.fillStyle="#2b2620",t.fillRect(0,0,e.width,e.height),t.strokeStyle="#5e513c",t.lineWidth=6,t.strokeRect(8,8,e.width-16,e.height-16),t.textAlign="center",t.fillStyle="#bfa871",t.font='bold 46px "Courier New", monospace',t.fillText(sf[0],e.width/2,66),t.fillText(sf[1],e.width/2,116),t.font='italic 30px "Courier New", monospace',t.fillStyle="#8e7b52",t.fillText(sf[2],e.width/2,160);let n=new xt(e);n.colorSpace=tt;let s=new Oe(new Rt(1.9,.95),new qe({map:n}));s.name="gullet-shut-sign",s.position.set(Fi,(Di+Cs)*.5,vt*.5+.16),s.rotation.y=-.05,i.add(s)}function NT(){let i=document.createElement("canvas");i.width=320,i.height=240;let e=i.getContext("2d");return e.fillStyle="#3a3226",e.fillRect(0,0,i.width,i.height),e.strokeStyle="#6f6047",e.lineWidth=5,e.strokeRect(7,7,i.width-14,i.height-14),e.textAlign="center",e.fillStyle="#c9b787",e.font='bold 40px "Courier New", monospace',e.fillText("THE GULLET",i.width/2,54),e.font='25px "Courier New", monospace',e.textAlign="left",[["MEAT","1.20"],["MEAT (HOT)","1.60"],["SOUP","90p"],["THE USUAL","ASK"]].forEach(([n,s],r)=>{let o=100+r*32;e.fillStyle="#b9a87c",e.fillText(n,26,o),e.textAlign="right",e.fillText(s,i.width-26,o),e.textAlign="left"}),e.font='italic 19px "Courier New", monospace',e.fillStyle="#8e7f5d",e.fillText("NO REFUNDS. NO QUESTIONS.",24,226),i}function mr(i,e,t,n){if(!e.length)return;let s=new Oe(st(e,!1),new qe({color:t,flatShading:!0}));s.name=n,i.add(s)}function cg(i,e,t,n,s){let r=Math.cos(t),o=Math.sin(t);return[i+n*r+s*o,e-n*o+s*r]}function DT(i,e){if(!i||i.length<2||e<0)return null;let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0,d=u||1;return{point:[s+c*h,r+l*h],tangent:[c/d,l/d]}}t+=u}return null}var FT=!0,za=1.7,UT=.35,OT=.3,of=.34,BT=.17,zT=4,dg=74,HT=38,kT=1500,GT=16757850,VT=12876330,WT=3090978,fg=.22,XT=.6;function qT(i){let e=Number.isFinite(i)?i:0,t=Math.max(0,Math.min(1,(e-fg)/(XT-fg)));return t*t*(3-2*t)}function YT(){return zn("Lamps",FT)}function pg({scene:i,camera:e,poles:t}){let n=YT(),s={enabled:!1,count:0,poolSize:0,lamps:[],setGlow(){},update(){},glow:()=>0,activeCount:()=>0};if(!n||!i||!e||!t||t.length<2)return s;let r=[],o=[],a=[],c=Math.floor(t.length/2);for(let b=0;b<c;b++){let M=t[b*2+b%2],_=t[b*2+(b+1)%2];if(!M||!_)continue;let S=M.position,y=_.position.x-S.x,T=_.position.z-S.z,v=Math.hypot(y,T)||1,w=y/v,R=T/v,A=S.y-UT,C=S.x+w*za,N=S.z+R*za,z=new Ze(za,.08,.08);z.rotateY(-Math.atan2(R,w)),z.translate(S.x+w*za*.5,A,S.z+R*za*.5),o.push(z);let F=new gs(OT,of,8,1,!0);F.translate(C,A-of*.5,N),o.push(F);let k=A-of*.75,G=new Yn(BT,8,6);G.translate(C,k,N),a.push(G),r.push({position:new O(C,k,N)})}if(!r.length)return s;let l=new Oe(st(o,!1),new qe({color:WT,flatShading:!0}));l.name="lamp-fittings",i.add(l);let u=new yn({color:VT,transparent:!0,opacity:0,depthWrite:!1,blending:Qi});u.userData.unlit=!1;let h=new Oe(st(a,!1),u);h.name="lamp-bulbs",i.add(h);let d=[];for(let b=0;b<zT;b++){let M=new mi(GT,0,HT,2);M.name=`lamp-pool-${b}`,i.add(M),d.push(M)}let f=0,p=0;function x(b){f=qT(b),u.opacity=f}let g=[];function m(){g.length=0;let b=e.position.x,M=e.position.z;for(let _=0;_<r.length;_++){let S=r[_].position,y=(S.x-b)*(S.x-b)+(S.z-M)*(S.z-M);y>dg*dg||g.push({d2:y,p:S})}g.sort((_,S)=>_.d2-S.d2),p=0;for(let _=0;_<d.length;_++){let S=g[_];S&&f>0?(d[_].position.copy(S.p),d[_].intensity=f*kT,p++):d[_].intensity=0}}return{enabled:!0,count:r.length,poolSize:d.length,lamps:r,fittingMesh:l,bulbMesh:h,pool:d,setGlow:x,update:m,glow:()=>f,activeCount:()=>p}}var ZT=!0,af=40,mg=5;function KT(){return zn("Legs",ZT)}function gg({camera:i,world:e,atmosphere:t,seed:n=0,onHinge:s=null}){let r=KT(),o=e&&e.streetLine||[],a={enabled:!1,update(){},state:()=>({enabled:!1,leg:0,hinges:0,zone:null,lastHingeZone:null,chainage:0}),history:()=>[]};if(!r||o.length<2||!i||!t)return a;let c=0;for(let m=1;m<o.length;m++)c+=Math.hypot(o[m][0]-o[m-1][0],o[m][1]-o[m-1][1]);function l(m){return m<=af?"north":m>=c-af?"south":null}let u=Es(i.position.x,i.position.z,o),h=l(u),d=h,f=0,p=0,x=[];function g(){let m=Es(i.position.x,i.position.z,o),b=l(m);if(b===h)return;let M=h;if(h=b,!b||b===d)return;d=b,f+=1,p+=1;let _=t.nudge(mg,n,f);x.push({leg:f,arrivedAt:b,leftBehind:M,..._}),s&&s({leg:f,zone:b,..._})}return{enabled:!0,update:g,state:()=>({enabled:!0,leg:f,hinges:p,zone:h,lastHingeZone:d,chainage:Es(i.position.x,i.position.z,o),length:c,endRadius:af,turnaroundHours:mg}),history:()=>x.slice()}}function xg({camera:i,world:e,legs:t,atmosphere:n,ambience:s,controls:r,renderer:o}){let a=typeof document<"u"?document.getElementById("ending-prompt"):null,c=typeof document<"u"?document.getElementById("ending-card"):null,l=typeof document<"u"?document.getElementById("ending-resume"):null,u=e&&e.streetLine||[],h={update(){},begin(){return!1},canOffer:()=>!1,state:()=>({phase:"idle",offered:!1,elapsed:0,ended:0})};if(!i||!t||!n||u.length<2)return h;let d=u[0],f=u[1],p=d[0]-f[0],x=d[1]-f[1],g=Math.hypot(p,x)||1;p/=g,x/=g;let m="idle",b=0,M=!1,_=0,S=null,y=0,T=1,v={r:0,g:0,b:0},w={r:154/255,g:160/255,b:154/255};function R(){if(m!=="idle")return!1;let F=t.state();return!!F.enabled&&F.leg>=1&&F.zone==="north"}function A(F){a&&F!==M&&(M=F,a.style.display=F?"block":"none")}function C(){return R()?(m="running",b=0,A(!1),S=i.position.clone(),y=e.fog?e.fog.density:0,T=o?o.toneMappingExposure:1,e.fog&&(v.r=e.fog.color.r,v.g=e.fog.color.g,v.b=e.fog.color.b),n.setSuspended(!0),r&&r.setEnabled(!1),s&&s.setDucked(!0),!0):!1}function N(){return m!=="ended"?!1:(m="idle",b=0,c&&(c.style.display="none"),S&&i.position.copy(S),n.setSuspended(!1),r&&r.setEnabled(!0),s&&s.setDucked(!1),!0)}function z(F){if(m==="idle"){A(R());return}if(m==="ended")return;b=Math.min(10,b+(Number.isFinite(F)?F:0));let k=b/10,G=k*k*(3-2*k);e.fog&&(e.fog.density=y*(1+8*G),e.fog.color.setRGB(v.r+(w.r-v.r)*G,v.g+(w.g-v.g)*G,v.b+(w.b-v.b)*G)),o&&(o.toneMappingExposure=T+(.5-T)*G),S&&(i.position.x=S.x+p*26*G,i.position.z=S.z+x*26*G),b>=10&&(m="ended",_+=1,c&&(c.style.display="flex"))}return l&&l.addEventListener("click",N),a&&a.addEventListener("click",C),{update:z,begin:C,resume:N,canOffer:R,state:()=>({phase:m,offered:M,elapsed:+b.toFixed(3),ended:_,minLeg:1,sequenceSeconds:10})}}var $T=3.2,gu=.1,JT=2.5,jT=60,QT=40,ew=.15,$n=512,_g=4,Mg=4,tw=1/3;function xu(i,e){let t=i*73856093^e*19349663;return t=Math.imul(t^t>>>13,2246822507),t^=t>>>16,t>>>0}function bg(i){let e=i|0;return function(){e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function yg(i,e,t,n,s,r){let o=bg(r*7919+13);i.save(),i.beginPath(),i.rect(e,t,n,s),i.clip(),i.fillStyle="rgb(150,146,134)",i.fillRect(e,t,n,s);let a=20,c=s/a;for(let u=0;u<a;u++){let h=t+u*c,d=5+Math.floor(o()*3);for(let f=0;f<d;f++){let p=e+f/d*n,x=n/d,g=(o()-.5)*26;i.fillStyle=`rgba(${150+g},${146+g},${134+g},0.6)`,i.fillRect(p,h+2,x,c-2)}i.fillStyle="rgba(0,0,0,0.22)",i.fillRect(e,h,n,2)}for(let u=0;u<20;u++){let h=e+o()*n,d=4+o()*12,f=t+o()*s*.35,p=s*(.3+o()*.45),x=i.createLinearGradient(0,f,0,f+p);x.addColorStop(0,"rgba(20,18,15,0.22)"),x.addColorStop(1,"rgba(20,18,15,0)"),i.fillStyle=x,i.fillRect(h,f,d,p)}let l=2+Math.floor(o()*3);for(let u=0;u<l;u++){let h=n*(.12+o()*.08),d=s*(.15+o()*.09),f=e+n*.08+o()*(n*.84-h),p=t+s*.14+o()*(s*.62-d);i.fillStyle="rgba(64,58,48,0.7)",i.fillRect(f,p,h,d),i.strokeStyle="rgba(112,106,90,0.5)",i.lineWidth=3,i.strokeRect(f+1.5,p+1.5,h-3,d-3)}i.restore()}function nw(i,e,t,n,s,r,o){let a=bg(o*104729+5);i.save(),i.translate(e+n/2,t+s*.4),i.rotate((a()-.5)*.05);let c=r.toUpperCase(),l=72;for(i.font=`bold ${l}px Georgia, "Times New Roman", serif`;i.measureText(c).width>n*.8&&l>16;)l-=2,i.font=`bold ${l}px Georgia, "Times New Roman", serif`;i.textAlign="center",i.textBaseline="middle",i.globalAlpha=.2+a()*.12,i.fillStyle="rgb(150,58,42)",i.fillText(c,0,0),i.restore()}function iw(i){let e=_g,t=2,n=document.createElement("canvas");n.width=$n*e,n.height=$n*t;let s=n.getContext("2d"),r=[];for(let c=0;c<_g;c++){let l=c*$n,u=0;yg(s,l,u,$n,$n,c),r.push(vg(l,u,n.width,n.height))}let o=[];for(let c=0;c<Mg;c++){let l=c*$n,u=$n;yg(s,l,u,$n,$n,c+97),i[c]&&nw(s,l,u,$n,$n,i[c],c),o.push(vg(l,u,n.width,n.height))}let a=new xt(n);return a.colorSpace=tt,a.anisotropy=4,{texture:a,baseUv:r,ghostUv:o}}function vg(i,e,t,n){return{u0:i/t,u1:(i+$n)/t,v0:1-(e+$n)/n,v1:1-e/n}}function Sg(i,e,t){let n=i&&i.leith&&i.leith.buildings||[],s=i&&i.facadeManifest,r=e&&e.nearestStreetPoint,o=e&&e.groundHeight;if(!n.length||!r)return{mesh:null,count:0};let a=[];if(s)for(let b of s.buildings)for(let M of b.businesses||[])a.push(M.name);let c=[];if(a.length)for(let b=0;b<Mg;b++)c.push(a[xu(b,a.length)%a.length]);let l=iw(c),u=[],h=[],d=[],f=[],p=0,x=(b,M,_,S,y,T,v,w,R,A,C)=>{let N=p*4;u.push(y,R,T,v,R,w,v,A,w,y,A,T),h.push(b,M,_,M,_,S,b,S);for(let z=0;z<4;z++)d.push(C.r,C.g,C.b);f.push(N,N+1,N+2,N,N+2,N+3),p++};if(n.forEach((b,M)=>{let _=b&&b.footprint;if(!_||_.length<3)return;let S=Math.max(1,b.levels||1)*$T,y=0,T=0;for(let A of _)y+=A[0],T+=A[1];y/=_.length,T/=_.length;let v=o?o(y,T):0,w=rw(b,r),R=fd(M,b);for(let A=0;A<_.length;A++){let C=_[A],N=_[(A+1)%_.length],z=N[0]-C[0],F=N[1]-C[1],k=Math.hypot(z,F);if(k<JT||sw(C[0],C[1],N[0],N[1],w))continue;let G=(C[0]+N[0])/2,J=(C[1]+N[1])/2,oe=r(G,J),de=r(C[0],C[1]),V=r(N[0],N[1]);if(Math.min(oe?oe.distance:1/0,de?de.distance:1/0,V?V.distance:1/0)>jT||k*S<QT)continue;let ge=C[0],be=C[1],Z=z,te=F,$=-F/k,_e=z/k;$*(G-y)+_e*(J-T)<0&&($=-$,_e=-_e,ge=N[0],be=N[1],Z=-z,te=-F);let Me=ge+$*gu,Se=be+_e*gu,fe=ge+Z+$*gu,we=be+te+_e*gu,ce=c.length&&xu(M,A*31+7)%1e3/1e3<tw?l.ghostUv:l.baseUv,X=xu(M,A*131+41)%ce.length,se=ce[X],xe=xu(M,A*991+3)%2===0,Ne=xe?se.u1:se.u0,Ce=xe?se.u0:se.u1;x(Ne,se.v0,Ce,se.v1,Me,Se,fe,we,v,v+S,R)}}),!p)return{mesh:null,count:0};let g=new pt;g.setAttribute("position",new Qe(u,3)),g.setAttribute("uv",new Qe(h,2)),g.setAttribute("color",new Qe(d,3)),g.setIndex(f),g.computeVertexNormals();let m=new Oe(g,new qe({map:l.texture,vertexColors:!0,flatShading:!0}));return m.name="gable-dressing",t.add(m),{mesh:m,count:p}}function sw(i,e,t,n,s){let r=(i+t)/2,o=(e+n)/2;for(let a of s){let c=a.bx-a.ax,l=a.bz-a.az,u=c*c+l*l||1,h=((r-a.ax)*c+(o-a.az)*l)/u;if(h<-.01||h>1.01)continue;let d=a.ax+h*c,f=a.az+h*l;if(Math.hypot(r-d,o-f)<ew)return!0}return!1}function rw(i,e){try{return ho(i,e)}catch{return[]}}var Eg=3.2,Tg=80,ow=10,wg=.5,cf=2500,aw=1/5;function Ag(i,e){let t=i*73856093^e*19349663;return t=Math.imul(t^t>>>13,2246822507),t^=t>>>16,t>>>0}function gr(i,e){return Ag(i,e)%1e5/1e5}function cw(){let i=[],e=new Ze(.9,1.8,.55).toNonIndexed();e.deleteAttribute("uv"),e.translate(0,.9,0),i.push(e);let t=[[-.28,0],[.05,.15],[.3,-.12]];for(let[n,s]of t){let r=new cn(.12,.13,.4,5,1,!0).toNonIndexed();r.deleteAttribute("uv"),r.translate(n,1.8+.2,s),i.push(r)}return st(i,!1)}function lw(){let i=[],e=new cn(.02,.03,1.4,5,1,!0).toNonIndexed();e.deleteAttribute("uv"),e.translate(0,.7,0),i.push(e);for(let t=0;t<2;t++){let n=new Ze(.5-t*.14,.02,.02).toNonIndexed();n.deleteAttribute("uv"),n.translate(0,1+t*.22,0),i.push(n)}return st(i,!1)}function Rg(i,e,t){let n=i&&i.leith&&i.leith.buildings||[],s=e&&e.nearestStreetPoint,r=e&&e.groundHeight;if(!n.length||!s)return{chimneys:null,aerials:null,count:0};let o=(T,v)=>`${Math.round(T/wg)}:${Math.round(v/wg)}`,a=new Map;n.forEach(T=>{let v=T&&T.footprint;if(v)for(let[w,R]of v){let A=o(w,R);a.set(A,(a.get(A)||0)+1)}});let c=[];n.forEach((T,v)=>{let w=T&&T.footprint;if(!w||w.length<3)return;let R=0,A=0;for(let F of w)R+=F[0],A+=F[1];R/=w.length,A/=w.length;let C=s(R,A);if(!C||C.distance>Tg)return;let N=Math.max(1,T.levels||1)*Eg,z=new Set;for(let F=0;F<w.length;F++){let k=w[F],G=w[(F+1)%w.length],J=o(k[0],k[1]);if(a.get(J)>1&&!z.has(J)){z.add(J);let te=s(k[0],k[1]),$=N+(r?r(k[0],k[1]):0);c.push({x:k[0],z:k[1],y:$,dist:te?te.distance:C.distance,bi:v,edgeSeed:F})}let oe=G[0]-k[0],de=G[1]-k[1],V=Math.hypot(oe,de);if(V<3)continue;let K=(k[0]+G[0])/2,he=(k[1]+G[1])/2,ge=s(K,he),be=!0;if(ge&&ge.point){let te=1/V,$=-de*te,_e=oe*te;$*(K-R)+_e*(he-A)<0&&($=-$,_e=-_e);let Me=ge.point[0]-K,Se=ge.point[1]-he,fe=Math.hypot(Me,Se)||1;be=($*Me+_e*Se)/fe>=0}if(!be)continue;let Z=Math.max(1,Math.round(V/ow));for(let te=0;te<Z;te++){let $=(te+.5)/Z,_e=k[0]+oe*$,Me=k[1]+de*$,Se=N+(r?r(_e,Me):0);c.push({x:_e,z:Me,y:Se,dist:(s(_e,Me)||C).distance,bi:v,edgeSeed:F*97+te})}}}),c.sort((T,v)=>T.dist-v.dist);let l=Math.max(0,c.length-cf),u=l>0?c.slice(0,cf):c;l>0&&console.warn(`[chimneys] ${l} candidate chimney placements beyond ${cf} dropped (furthest-from-street first, not a silent mid-street gap)`);let h=cw(),d=new qe({color:3025444}),f=u.length?new pn(h,d,u.length):null,p=new $e,x=new O,g=new Nt,m=new O,b=new $t;f&&(u.forEach((T,v)=>{let w=.75+gr(T.bi,T.edgeSeed*3+1)*.65,R=(gr(T.bi,T.edgeSeed*3+2)-.5)*.12,A=(gr(T.bi,T.edgeSeed*3+3)-.5)*.12,C=gr(T.bi,T.edgeSeed*3+4)*Math.PI*2;x.set(T.x,T.y,T.z),b.set(R,C,A),g.setFromEuler(b),m.set(1,w,1),p.compose(x,g,m),f.setMatrixAt(v,p)}),f.instanceMatrix.needsUpdate=!0,f.name="chimneys",t.add(f));let M=[];n.forEach((T,v)=>{let w=T&&T.footprint;if(!w||w.length<3||Ag(v,5153)%1e3/1e3>=aw)return;let R=0,A=0;for(let G of w)R+=G[0],A+=G[1];R/=w.length,A/=w.length;let C=s(R,A);if(!C||C.distance>Tg)return;let N=Math.max(1,T.levels||1)*Eg,z=w[0],F=1/0;for(let G of w){let J=C.point?Math.hypot(G[0]-C.point[0],G[1]-C.point[1]):0;J<F&&(F=J,z=G)}let k=N+(r?r(z[0],z[1]):0);M.push({x:z[0],z:z[1],y:k,bi:v})});let _=lw(),S=new qe({color:1842204}),y=M.length?new pn(_,S,M.length):null;return y&&(M.forEach((T,v)=>{let w=(gr(T.bi,71)-.5)*.3,R=(gr(T.bi,73)-.5)*.3,A=gr(T.bi,79)*Math.PI*2;x.set(T.x,T.y,T.z),b.set(w,A,R),g.setFromEuler(b),m.set(1,1,1),p.compose(x,g,m),y.setMatrixAt(v,p)}),y.instanceMatrix.needsUpdate=!0,y.name="aerials",t.add(y)),{chimneys:f,aerials:y,count:u.length,aerialCount:M.length,dropped:l}}var uw=3028026,hw=9278327,dw=2304048,fw=6051656,pw=11557412,mw=3.2,gw=1/700,xw=`
  varying vec3 vDir;
  void main() {
    // World-space view ray. Correct whether the dome is parented to the camera
    // or to the scene, because modelMatrix carries whichever transform applies.
    vDir = (modelMatrix * vec4(position, 1.0)).xyz - cameraPosition;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,_w=`
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
    vec2 p = d.xz / max(h, 0.05) * ${mw.toFixed(2)}
           + cameraPosition.xz * ${gw.toFixed(6)};
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
`;function Cg(i,e){let t=new Te(0,-1);if(e&&e.length>1){let o=e[0],a=e[e.length-1];t.set(o[0]-a[0],o[1]-a[1]).normalize()}let n={uFog:{value:i},uBand:{value:new me(hw)},uZenith:{value:new me(uw)},uCloudDark:{value:new me(dw)},uCloudLit:{value:new me(fw)},uGlow:{value:new me(pw)},uDock:{value:t},uTime:{value:0},uCoverage:{value:1}},s=new Nn({uniforms:n,vertexShader:xw,fragmentShader:_w,side:vn,depthWrite:!1,depthTest:!1,fog:!1}),r=new Oe(new Yn(1,32,20),s);return r.renderOrder=-1e3,r.frustumCulled=!1,{mesh:r,uniforms:n,update(o){n.uTime.value=o},setPalette({band:o,zenith:a,cloudDark:c,cloudLit:l,glow:u}){o&&n.uBand.value.copy(o),a&&n.uZenith.value.copy(a),c&&n.uCloudDark.value.copy(c),l&&n.uCloudLit.value.copy(l),u&&n.uGlow.value.copy(u)},setCoverage(o){n.uCoverage.value=o}}}var vw=1,Mw=10,bw=30,Sw=[{hour:0,sun:{color:3359834,intensity:.05,pos:{x:-100,y:-50,z:80}},hemi:{sky:1844272,ground:855048,intensity:.6},ambient:{color:1315855,intensity:.25},fog:1316111,fogDensity:.0095,exposure:.55,tint:{r:.12,g:.12,b:.15},sky:{band:1711126,zenith:855826,cloudDark:658447,cloudLit:2237468,glow:6040594},torch:1,windowGlow:1,coverage:1,rain:0,wetness:0},{hour:5,sun:{color:3820126,intensity:.08,pos:{x:250,y:20,z:-150}},hemi:{sky:2239544,ground:1052426,intensity:.7},ambient:{color:1513231,intensity:.3},fog:1579539,fogDensity:.0095,exposure:.6,tint:{r:.14,g:.14,b:.17},sky:{band:2105882,zenith:1053464,cloudDark:855826,cloudLit:2500640,glow:6500367},torch:.95,windowGlow:.9,coverage:1,rain:0,wetness:0},{hour:8,sun:{color:10465480,intensity:.5,pos:{x:200,y:180,z:-100}},hemi:{sky:6055282,ground:2367770,intensity:2},ambient:{color:3158047,intensity:.8},fog:3817528,fogDensity:.0095,exposure:1,tint:{r:.55,g:.55,b:.6},sky:{band:6384210,zenith:2304048,cloudDark:1843240,cloudLit:4802102,glow:9062942},torch:.3,windowGlow:.15,coverage:1,rain:0,wetness:0},{hour:12,sun:{color:13621480,intensity:1.15,pos:{x:-200,y:300,z:150}},hemi:{sky:9147296,ground:3814180,intensity:3.9},ambient:{color:4999224,intensity:1.4},fog:4870466,fogDensity:.0095,exposure:1.46,tint:{r:1,g:1,b:1},sky:{band:9278327,zenith:3028026,cloudDark:2304048,cloudLit:6051656,glow:11557412},torch:.03,windowGlow:0,coverage:1,rain:0,wetness:0},{hour:17,sun:{color:12101768,intensity:.6,pos:{x:-250,y:150,z:200}},hemi:{sky:6972504,ground:3025438,intensity:2.3},ambient:{color:3551264,intensity:.9},fog:3948336,fogDensity:.0095,exposure:1.05,tint:{r:.6,g:.58,b:.55},sky:{band:7629650,zenith:2632756,cloudDark:1974826,cloudLit:5130812,glow:11031582},torch:.15,windowGlow:.1,coverage:1,rain:0,wetness:0},{hour:20,sun:{color:6050920,intensity:.15,pos:{x:-300,y:40,z:220}},hemi:{sky:3027518,ground:1578256,intensity:1},ambient:{color:1841682,intensity:.4},fog:2434847,fogDensity:.0095,exposure:.75,tint:{r:.3,g:.28,b:.3},sky:{band:3421226,zenith:1579808,cloudDark:1185050,cloudLit:3683626,glow:9190936},torch:.55,windowGlow:.6,coverage:1,rain:0,wetness:0},{hour:22,sun:{color:3818070,intensity:.06,pos:{x:-150,y:-30,z:100}},hemi:{sky:1975600,ground:920841,intensity:.7},ambient:{color:1381646,intensity:.3},fog:1579540,fogDensity:.0095,exposure:.6,tint:{r:.16,g:.16,b:.19},sky:{band:1842711,zenith:921620,cloudDark:724240,cloudLit:2369054,glow:6696722},torch:.9,windowGlow:.95,coverage:1,rain:0,wetness:0}],Ew=[{hour:0,sun:{color:3030096,intensity:.04,pos:{x:-100,y:-50,z:80}},hemi:{sky:1317930,ground:657670,intensity:.45},ambient:{color:921097,intensity:.18},fog:987919,fogDensity:.0095,exposure:.5,tint:{r:.09,g:.09,b:.13},sky:{band:1186324,zenith:526864,cloudDark:460810,cloudLit:1579542,glow:6040594},torch:1,windowGlow:1,coverage:.05,rain:0,wetness:0},{hour:5,sun:{color:3689060,intensity:.06,pos:{x:250,y:20,z:-150}},hemi:{sky:1713206,ground:789256,intensity:.55},ambient:{color:1052937,intensity:.22},fog:1185039,fogDensity:.0095,exposure:.55,tint:{r:.11,g:.11,b:.15},sky:{band:1580568,zenith:658968,cloudDark:592654,cloudLit:1842712,glow:6500367},torch:.95,windowGlow:.85,coverage:.08,rain:0,wetness:0},{hour:8,sun:{color:16768160,intensity:2.9,pos:{x:200,y:180,z:-100}},hemi:{sky:5535904,ground:2104338,intensity:1.25},ambient:{color:1973268,intensity:.42},fog:8691900,fogDensity:.0022,exposure:1.15,tint:{r:.68,g:.64,b:.58},sky:{band:11059928,zenith:3824764,cloudDark:3361378,cloudLit:6850724,glow:10114592},torch:.05,windowGlow:.05,coverage:.15,rain:0,wetness:0},{hour:12,sun:{color:16773848,intensity:3,pos:{x:-200,y:300,z:150}},hemi:{sky:6852788,ground:2367253,intensity:1.55},ambient:{color:2104851,intensity:.5},fog:8691898,fogDensity:.0022,exposure:1.25,tint:{r:1,g:.98,b:.92},sky:{band:11455184,zenith:2905206,cloudDark:4216428,cloudLit:8822970,glow:11557412},torch:0,windowGlow:0,coverage:.12,rain:0,wetness:0},{hour:17,sun:{color:16758906,intensity:1.3,pos:{x:-250,y:150,z:200}},hemi:{sky:4608100,ground:1841423,intensity:1},ambient:{color:1578254,intensity:.35},fog:5660532,fogDensity:.0022,exposure:.98,tint:{r:.6,g:.53,b:.46},sky:{band:8810324,zenith:2634828,cloudDark:2765380,cloudLit:5791860,glow:11031582},torch:.1,windowGlow:.08,coverage:.15,rain:0,wetness:0},{hour:20,sun:{color:6837876,intensity:.18,pos:{x:-300,y:40,z:220}},hemi:{sky:2239032,ground:1183498,intensity:.7},ambient:{color:1183753,intensity:.28},fog:1843248,fogDensity:.0095,exposure:.68,tint:{r:.3,g:.26,b:.3},sky:{band:2632248,zenith:1185314,cloudDark:987674,cloudLit:2632248,glow:9190936},torch:.5,windowGlow:.55,coverage:.1,rain:0,wetness:0},{hour:22,sun:{color:3687524,intensity:.045,pos:{x:-150,y:-30,z:100}},hemi:{sky:1581102,ground:657670,intensity:.5},ambient:{color:986376,intensity:.22},fog:1250852,fogDensity:.0095,exposure:.52,tint:{r:.14,g:.14,b:.18},sky:{band:1448486,zenith:592916,cloudDark:461070,cloudLit:1842726,glow:6696722},torch:.85,windowGlow:.9,coverage:.06,rain:0,wetness:0}],Tw=[{hour:0,sun:{color:2766408,intensity:.04,pos:{x:-100,y:-50,z:80}},hemi:{sky:1449512,ground:723463,intensity:.5},ambient:{color:1052680,intensity:.2},fog:1053198,fogDensity:.0095,exposure:.48,tint:{r:.1,g:.1,b:.13},sky:{band:1382933,zenith:724240,cloudDark:526861,cloudLit:1842712,glow:6040594},torch:1,windowGlow:1,coverage:1,rain:.7,wetness:.85},{hour:5,sun:{color:3095630,intensity:.06,pos:{x:250,y:20,z:-150}},hemi:{sky:1712684,ground:855048,intensity:.6},ambient:{color:1250057,intensity:.25},fog:1250575,fogDensity:.0095,exposure:.52,tint:{r:.12,g:.12,b:.15},sky:{band:1711126,zenith:855826,cloudDark:658447,cloudLit:1974296,glow:6500367},torch:.95,windowGlow:.9,coverage:1,rain:.7,wetness:.85},{hour:8,sun:{color:8030364,intensity:.3,pos:{x:200,y:180,z:-100}},hemi:{sky:4739164,ground:1973013,intensity:1.6},ambient:{color:2500119,intensity:.6},fog:3027504,fogDensity:.0095,exposure:.85,tint:{r:.42,g:.44,b:.48},sky:{band:5133892,zenith:1843238,cloudDark:1448480,cloudLit:3815468,glow:9062942},torch:.35,windowGlow:.2,coverage:1,rain:.85,wetness:.9},{hour:12,sun:{color:10135738,intensity:.65,pos:{x:-200,y:300,z:150}},hemi:{sky:6975608,ground:2893852,intensity:2.9},ambient:{color:3683871,intensity:1},fog:3685428,fogDensity:.0095,exposure:1.1,tint:{r:.72,g:.74,b:.78},sky:{band:6975834,zenith:2369584,cloudDark:1843240,cloudLit:4736566,glow:11557412},torch:.06,windowGlow:0,coverage:1,rain:.85,wetness:.9},{hour:17,sun:{color:9076336,intensity:.4,pos:{x:-250,y:150,z:200}},hemi:{sky:5261630,ground:2236438,intensity:1.7},ambient:{color:2762264,intensity:.65},fog:3026984,fogDensity:.0095,exposure:.9,tint:{r:.46,g:.44,b:.42},sky:{band:5788224,zenith:2106154,cloudDark:1580066,cloudLit:3947054,glow:11031582},torch:.2,windowGlow:.15,coverage:1,rain:.8,wetness:.9},{hour:20,sun:{color:4603984,intensity:.12,pos:{x:-300,y:40,z:220}},hemi:{sky:2369070,ground:1315341,intensity:.8},ambient:{color:1446921,intensity:.32},fog:1842456,fogDensity:.0095,exposure:.62,tint:{r:.24,g:.22,b:.24},sky:{band:2631712,zenith:1316640,cloudDark:987414,cloudLit:2894370,glow:9190936},torch:.6,windowGlow:.6,coverage:1,rain:.75,wetness:.9},{hour:22,sun:{color:3028552,intensity:.05,pos:{x:-150,y:-30,z:100}},hemi:{sky:1580584,ground:789256,intensity:.6},ambient:{color:1184264,intensity:.25},fog:1250575,fogDensity:.0095,exposure:.52,tint:{r:.13,g:.13,b:.16},sky:{band:1579540,zenith:724240,cloudDark:592654,cloudLit:1974296,glow:6696722},torch:.92,windowGlow:.95,coverage:1,rain:.7,wetness:.85}],ww=[{hour:0,sun:{color:1844272,intensity:.03,pos:{x:-100,y:-50,z:80}},hemi:{sky:2106922,ground:789514,intensity:.5},ambient:{color:1316374,intensity:.22},fog:1711646,fogDensity:.03,exposure:.55,tint:{r:.14,g:.15,b:.16},sky:{band:1843230,zenith:1316890,cloudDark:1053204,cloudLit:2237988,glow:4865072},torch:1,windowGlow:1,coverage:1,rain:0,wetness:.25},{hour:5,sun:{color:2371644,intensity:.05,pos:{x:250,y:20,z:-150}},hemi:{sky:2501680,ground:921100,intensity:.6},ambient:{color:1579546,intensity:.28},fog:2237990,fogDensity:.03,exposure:.62,tint:{r:.18,g:.19,b:.2},sky:{band:2369578,zenith:1711650,cloudDark:1316376,cloudLit:2632746,glow:5260342},torch:.9,windowGlow:.85,coverage:1,rain:0,wetness:.25},{hour:8,sun:{color:12107972,intensity:.15,pos:{x:200,y:180,z:-100}},hemi:{sky:14212316,ground:6316120,intensity:3.4},ambient:{color:10264732,intensity:1.6},fog:13555412,fogDensity:.03,exposure:1.3,tint:{r:.82,g:.84,b:.84},sky:{band:13818584,zenith:13161168,cloudDark:12108480,cloudLit:14476514,glow:9074280},torch:.02,windowGlow:.02,coverage:1,rain:0,wetness:.25},{hour:12,sun:{color:11581626,intensity:.2,pos:{x:-200,y:300,z:150}},hemi:{sky:15001830,ground:6842464,intensity:3.8},ambient:{color:11054248,intensity:1.8},fog:14081756,fogDensity:.03,exposure:1.42,tint:{r:1,g:1,b:.98},sky:{band:14344928,zenith:13686998,cloudDark:12634824,cloudLit:14871272,glow:9205866},torch:0,windowGlow:0,coverage:1,rain:0,wetness:.25},{hour:17,sun:{color:11049104,intensity:.18,pos:{x:-250,y:150,z:200}},hemi:{sky:13158592,ground:6314574,intensity:3},ambient:{color:9867912,intensity:1.5},fog:12894906,fogDensity:.03,exposure:1.2,tint:{r:.86,g:.82,b:.78},sky:{band:13026490,zenith:12369076,cloudDark:11316388,cloudLit:13684420,glow:9073760},torch:.08,windowGlow:.06,coverage:1,rain:0,wetness:.25},{hour:20,sun:{color:5789800,intensity:.1,pos:{x:-300,y:40,z:220}},hemi:{sky:3685440,ground:1842200,intensity:1.3},ambient:{color:2631722,intensity:.55},fog:3027510,fogDensity:.03,exposure:.78,tint:{r:.36,g:.35,b:.38},sky:{band:3159094,zenith:2369580,cloudDark:1843236,cloudLit:3553850,glow:6048316},torch:.5,windowGlow:.55,coverage:1,rain:0,wetness:.25},{hour:22,sun:{color:3160648,intensity:.05,pos:{x:-150,y:-30,z:100}},hemi:{sky:2237998,ground:921100,intensity:.6},ambient:{color:1447962,intensity:.28},fog:1843236,fogDensity:.03,exposure:.58,tint:{r:.16,g:.17,b:.19},sky:{band:1974820,zenith:1448478,cloudDark:1184790,cloudLit:2369578,glow:4996658},torch:.88,windowGlow:.9,coverage:1,rain:0,wetness:.25}],hf={overcast:Sw,clear:Ew,rain:Tw,haar:ww};function Aw(i){return hf[i]||hf.overcast}var Pg={drizzle:{from:"overcast",to:"rain",k:.45}},lf={overcast:["clear","drizzle","haar"],clear:["overcast"],drizzle:["overcast","rain"],rain:["drizzle"],haar:["overcast"]},Lg=1.5,Rw=4;function uf(i,e){let t=i*73856093^e*19349663;return t=Math.imul(t^t>>>13,2246822507),t^=t>>>16,t>>>0}function Cw(i,e){let t=Aw(e),n=t.length-1;for(let c=0;c<t.length&&t[c].hour<=i;c++)n=c;let s=t[n],r=t[(n+1)%t.length],o=r.hour-s.hour;o<=0&&(o+=24);let a=i-s.hour;return a<0&&(a+=24),a=o>0?Math.max(0,Math.min(1,a/o)):0,{a:s,b:r,t:a}}function zt(i,e,t){return i+(e-i)*t}function mo(){return{sun:{color:new me,intensity:0,pos:new O},hemi:{sky:new me,ground:new me,intensity:0},ambient:{color:new me,intensity:0},fog:new me,fogDensity:.0095,exposure:1,tint:new me(1,1,1),sky:{band:new me,zenith:new me,cloudDark:new me,cloudLit:new me,glow:new me},torch:0,windowGlow:0,coverage:1,rain:0,wetness:0}}function Ng(i,e){return e.sun.color.copy(i.sun.color),e.sun.intensity=i.sun.intensity,e.sun.pos.copy(i.sun.pos),e.hemi.sky.copy(i.hemi.sky),e.hemi.ground.copy(i.hemi.ground),e.hemi.intensity=i.hemi.intensity,e.ambient.color.copy(i.ambient.color),e.ambient.intensity=i.ambient.intensity,e.fog.copy(i.fog),e.fogDensity=i.fogDensity,e.exposure=i.exposure,e.tint.copy(i.tint),e.sky.band.copy(i.sky.band),e.sky.zenith.copy(i.sky.zenith),e.sky.cloudDark.copy(i.sky.cloudDark),e.sky.cloudLit.copy(i.sky.cloudLit),e.sky.glow.copy(i.sky.glow),e.torch=i.torch,e.windowGlow=i.windowGlow,e.coverage=i.coverage,e.rain=i.rain,e.wetness=i.wetness,e}function Dg({scene:i,renderer:e,world:t,sky:n,torch:s,windows:r,rain:o,ambience:a}){let c=null,l=!1,u=t.lights&&t.lights.hemi,h=t.lights&&t.lights.sun,d=t.lights&&t.lights.ambient,f=t.fog,p=t.surfaces||{},x=p.road?p.road.color.clone():null,g=p.pavement?p.pavement.color.clone():null,m=.5;function b(L){let U=1-m*L,B=1+(.25-1)*L;p.road&&x&&(p.road.color.copy(x).multiplyScalar(U),p.road.roughness=B),p.pavement&&g&&(p.pavement.color.copy(g).multiplyScalar(U),p.pavement.roughness=B)}let M=cu(),_=vw,S="overcast",y=null,T=0,v=!0,w=Math.floor(M*1e6)>>>0,R=0,A=null,C=null;function N(L){let U=lf[L]||lf.overcast,B=uf(w,R++);return U[B%U.length]}function z(L){C=N(L);let U=uf(w,R++),B=Lg+U%1e3/1e3*(Rw-Lg);A=T+B}function F(L){v=!!L}let k=mo(),G=mo(),J=mo(),oe=mo(),de=mo(),V=mo(),K=new me,he=new me;function ge(L,U,B,W){return L.lerpColors(K.set(U),he.set(B),W)}function be(L,U,B){let{a:W,b:ne,t:q}=Cw(L,U);return ge(B.sun.color,W.sun.color,ne.sun.color,q),B.sun.intensity=zt(W.sun.intensity,ne.sun.intensity,q),B.sun.pos.set(zt(W.sun.pos.x,ne.sun.pos.x,q),zt(W.sun.pos.y,ne.sun.pos.y,q),zt(W.sun.pos.z,ne.sun.pos.z,q)),ge(B.hemi.sky,W.hemi.sky,ne.hemi.sky,q),ge(B.hemi.ground,W.hemi.ground,ne.hemi.ground,q),B.hemi.intensity=zt(W.hemi.intensity,ne.hemi.intensity,q),ge(B.ambient.color,W.ambient.color,ne.ambient.color,q),B.ambient.intensity=zt(W.ambient.intensity,ne.ambient.intensity,q),ge(B.fog,W.fog,ne.fog,q),B.fogDensity=zt(W.fogDensity,ne.fogDensity,q),B.exposure=zt(W.exposure,ne.exposure,q),B.tint.setRGB(zt(W.tint.r,ne.tint.r,q),zt(W.tint.g,ne.tint.g,q),zt(W.tint.b,ne.tint.b,q)),ge(B.sky.band,W.sky.band,ne.sky.band,q),ge(B.sky.zenith,W.sky.zenith,ne.sky.zenith,q),ge(B.sky.cloudDark,W.sky.cloudDark,ne.sky.cloudDark,q),ge(B.sky.cloudLit,W.sky.cloudLit,ne.sky.cloudLit,q),ge(B.sky.glow,W.sky.glow,ne.sky.glow,q),B.torch=zt(W.torch,ne.torch,q),B.windowGlow=zt(W.windowGlow,ne.windowGlow,q),B.coverage=zt(W.coverage,ne.coverage,q),B.rain=zt(W.rain,ne.rain,q),B.wetness=zt(W.wetness,ne.wetness,q),B}function Z(L,U,B,W){return W.sun.color.lerpColors(L.sun.color,U.sun.color,B),W.sun.intensity=zt(L.sun.intensity,U.sun.intensity,B),W.sun.pos.lerpVectors(L.sun.pos,U.sun.pos,B),W.hemi.sky.lerpColors(L.hemi.sky,U.hemi.sky,B),W.hemi.ground.lerpColors(L.hemi.ground,U.hemi.ground,B),W.hemi.intensity=zt(L.hemi.intensity,U.hemi.intensity,B),W.ambient.color.lerpColors(L.ambient.color,U.ambient.color,B),W.ambient.intensity=zt(L.ambient.intensity,U.ambient.intensity,B),W.fog.lerpColors(L.fog,U.fog,B),W.fogDensity=zt(L.fogDensity,U.fogDensity,B),W.exposure=zt(L.exposure,U.exposure,B),W.tint.lerpColors(L.tint,U.tint,B),W.sky.band.lerpColors(L.sky.band,U.sky.band,B),W.sky.zenith.lerpColors(L.sky.zenith,U.sky.zenith,B),W.sky.cloudDark.lerpColors(L.sky.cloudDark,U.sky.cloudDark,B),W.sky.cloudLit.lerpColors(L.sky.cloudLit,U.sky.cloudLit,B),W.sky.glow.lerpColors(L.sky.glow,U.sky.glow,B),W.torch=zt(L.torch,U.torch,B),W.windowGlow=zt(L.windowGlow,U.windowGlow,B),W.coverage=zt(L.coverage,U.coverage,B),W.rain=zt(L.rain,U.rain,B),W.wetness=zt(L.wetness,U.wetness,B),W}function te(L,U,B){let W=Pg[U];return W?(be(L,W.from,de),be(L,W.to,V),Z(de,V,W.k,B),W.rainScale!=null&&(B.rain*=W.rainScale),B):be(L,U,B)}let $=0,_e=e.toneMappingExposure,Me=new me(1,1,1);function Se(L){if(h){h.color.copy(L.sun.color),h.intensity=L.sun.intensity,h.position.copy(L.sun.pos);let U=L.sun.pos.length()||1;$=Math.asin(ii.clamp(L.sun.pos.y/U,-1,1))*ii.RAD2DEG}u&&(u.color.copy(L.hemi.sky),u.groundColor.copy(L.hemi.ground),u.intensity=L.hemi.intensity),d&&(d.color.copy(L.ambient.color),d.intensity=L.ambient.intensity),f&&(f.color.copy(L.fog),f.density=L.fogDensity),_e=L.exposure,e.toneMappingExposure=_e,Me.copy(L.tint),n&&(n.setPalette({band:L.sky.band,zenith:L.sky.zenith,cloudDark:L.sky.cloudDark,cloudLit:L.sky.cloudLit,glow:L.sky.glow}),n.setCoverage(L.coverage)),s&&s.setDarkness(L.torch),r&&r.setGlow(L.windowGlow),c&&c.setGlow(L.windowGlow),o&&o.setIntensity(L.rain),a&&a.setRain(L.rain),b(L.wetness)}let fe=new Map,we=0;function ee(L){fe.has(L)||L.userData&&L.userData.unlit===!1||fe.set(L,L.color.clone())}function ce(){let L=new Set;i.traverse(U=>{if(!U.isMesh||!U.material)return;let B=Array.isArray(U.material)?U.material:[U.material];for(let W of B)W&&(L.add(W),W.isMeshBasicMaterial&&ee(W))});for(let U of fe.keys())L.has(U)||fe.delete(U)}function X(){for(let[L,U]of fe)L.color.copy(U).multiply(Me)}function se(L,U){if(l){_!==0&&(M=((M+_*(L/60))%24+24)%24);return}if(_!==0&&(M=(M+_*(L/60))%24,M<0&&(M+=24),T+=_*(L/60),v&&A!==null&&T>=A&&!y)){let ne=C;pe(ne),z(ne)}let B=y?y.toWeather:S;te(M,B,k);let W;if(y){y.elapsed+=L;let ne=Math.min(1,y.elapsed/y.duration);Z(y.from,k,ne,G),W=G,ne>=1&&(S=y.toWeather,y=null)}else W=k;Se(W),Ng(W,oe),we++,we%bw===0&&ce(),X()}z(S),ce(),se(0,0);function xe(L){M=(L%24+24)%24,_=0,se(0,0)}function Ne(L){_=L}function Ce(){return M}let ue=new Set([...Object.keys(hf),...Object.keys(Pg)]);function pe(L){if(y){if(L===y.toWeather)return}else if(L===S)return;Ng(oe,J),y={from:J,toWeather:L,elapsed:0,duration:Mw}}function D(L){if(!ue.has(L)){console.warn(`[atmosphere] setWeather: unknown weather "${L}", ignoring`);return}pe(L),v&&z(L)}function Le(){return{hours:M,rate:_,weather:S,weatherTransition:y?{target:y.toWeather,progress:Math.min(1,y.elapsed/y.duration)}:null,sunAltitude:$,exposure:_e,fogDensity:f?f.density:oe.fogDensity,tint:{r:Me.r,g:Me.g,b:Me.b},rain:oe.rain,wetness:oe.wetness,weatherScheduleEnabled:v}}function De(L,U,B){let W=y?y.toWeather:S;M=((M+L)%24+24)%24,se(0,0);let ne=lf[W]||[],q=W;return ne.length&&(q=ne[uf(U>>>0,B>>>0)%ne.length],D(q)),{hours:L,from:W,to:q}}function P(L){c=L||null,c&&c.setGlow(oe.windowGlow)}function E(L){let U=l;l=!!L,U&&!l&&se(0,0)}return{update:se,setTime:xe,getTime:Ce,setRate:Ne,setWeather:D,setWeatherSchedule:F,state:Le,setLamps:P,nudge:De,setSuspended:E,isSuspended:()=>l}}var Fg=3.2,Iw=2.4,Pw=.85,Lw=1.15,Ug=.34,Nw=1/11,df=4e3;function Dw(i,e){let t=i*73856093^e*19349663;return t=Math.imul(t^t>>>13,2246822507),t^=t>>>16,t>>>0}function ff(i,e){return Dw(i,e)%1e5/1e5}function Fw(){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255, 214, 150, 0.95)"),n.addColorStop(.5,"rgba(255, 190, 110, 0.55)"),n.addColorStop(1,"rgba(255, 170, 90, 0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let s=new xt(e);return s.colorSpace=tt,s}function Og(i,e,t){let n=i&&i.leith&&i.leith.buildings||[],s=e&&e.nearestStreetPoint,r=e&&e.groundHeight;if(!n.length||!s)return{mesh:null,count:0,setGlow(){}};let o=[];n.forEach((b,M)=>{let _=Math.max(1,b.levels||1);if(_<2)return;ho(b,s).forEach((y,T)=>{if(y.len<1)return;let v=(y.ax+y.bx)/2,w=(y.az+y.bz)/2,R=s(v,w);if(!R||!R.point)return;let A=-y.dirz,C=y.dirx,N=R.point[0]-v,z=R.point[1]-w;A*N+C*z<0&&(A=-A,C=-C);let F=Math.atan2(A,C),k=Math.max(1,Math.round(y.len/Iw));for(let G=0;G<k;G++){let J=T*4099+G;if(ff(M,J)>=Nw)continue;let oe=(G+.5)/k,de=y.ax+y.dirx*y.len*oe+A*Ug,V=y.az+y.dirz*y.len*oe+C*Ug,K=1+Math.floor(ff(M,J+1)*(_-1)),he=.3+ff(M,J+2)*.4,be=(r?r(de,V):0)+K*Fg+he*Fg,Z=s(de,V);o.push({x:de,y:be,z:V,yaw:F,dist:Z?Z.distance:0})}})}),o.sort((b,M)=>b.dist-M.dist);let a=Math.max(0,o.length-df),c=a>0?o.slice(0,df):o;if(a>0&&console.warn(`[windows] ${a} candidate lit windows beyond ${df} dropped (furthest-from-street first)`),!c.length)return{mesh:null,count:0,setGlow(){}};let l=new Rt(Pw,Lw),u=new yn({map:Fw(),transparent:!0,opacity:0,depthWrite:!1,blending:Qi,side:An});u.userData.unlit=!1;let h=new pn(l,u,c.length);h.name="lit-windows";let d=new $e,f=new O,p=new Nt,x=new $t,g=new O(1,1,1);c.forEach((b,M)=>{f.set(b.x,b.y,b.z),x.set(0,b.yaw,0),p.setFromEuler(x),d.compose(f,p,g),h.setMatrixAt(M,d)}),h.instanceMatrix.needsUpdate=!0,t.add(h);function m(b){u.opacity=Math.max(0,Math.min(1,b))}return{mesh:h,count:c.length,dropped:a,setGlow:m}}var pf={r:44,g:50,b:45},Uw=2501416,Bg=60;function Ow(){let t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d"),s=n.createImageData(256,256),r=s.data;for(let o=0;o<256;o++)for(let a=0;a<256;a++){let c=a/256*6,l=o/256*6,u=pf.r,h=pf.g,d=pf.b,f=on(c,l,6,3,401)-.5;u+=f*10,h+=f*12,d+=f*10,si(a,o,419)>.986&&(u+=26,h+=26,d+=22);let x=(o*256+a)*4;r[x]=Math.max(0,Math.min(255,u)),r[x+1]=Math.max(0,Math.min(255,h)),r[x+2]=Math.max(0,Math.min(255,d)),r[x+3]=255}return n.putImageData(s,0,0),ur(t)}function zg(i,e){let t=i.streetLine||[];if(t.length<2)return{group:null};let n=t[0],s=t[t.length-1],r=n[0]-s[0],o=n[1]-s[1],a=Math.hypot(r,o)||1;r/=a,o/=a;let c=-o,l=r,h=(i.groundHeight?i.groundHeight(n[0],n[1]):0)-2.5,d=new nt;d.name="forth";let f=1400,p=15,x=new Rt(f,f);x.rotateX(-Math.PI/2);let g=Ow();g.repeat.set(f/Bg,f/Bg);let m=new Oe(x,new qe({map:g}));m.position.set(n[0]+r*(p+f/2),h,n[1]+o*(p+f/2)),m.name="forth-water",d.add(m);let b=p+340,M=12,_=new Ze(26,M,900);_.translate(0,M/2,0),_.rotateY(Math.atan2(c,l)),_.translate(n[0]+r*b,h,n[1]+o*b);let S=new Oe(_,new qe({color:new me(Uw).multiplyScalar(4.7)}));return S.name="forth-shore",d.add(S),e.add(d),{group:d,water:m,shore:S}}var wt=(()=>{let i=13723136;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),gf=596,_r=690,mf=620,Bw=593,zw=-3.2,Hw=115,oi=3.5,xr=2,vr=.03,kw=.042;function kg(i,e){let t=i.streetLine||[];if(t.length<2)return{group:new nt};let n=i.groundHeight,s=new nt;e.add(s);let r=[],o=[],a=[],c=[];if(Ww(t,s,c,r,o,a,n,i.collision),Yw(t,r,n),$w(t,s,n,i.collision),i.collision)for(let l of r)l.tipped||i.collision.addCircle(l.x,l.z,.26,"cone");return Kw(r,s),qw(o,a,s),c.length&&s.add(new Oe(st(c,!1),new qe({vertexColors:!0,flatShading:!0}))),{group:s}}function Gw(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0;return{point:[s+c*h,r+l*h],tangent:[c/(u||1),l/(u||1)]}}t+=u}return null}function Vw(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function yr(i,e,t,n){let s=Gw(i,e);if(!s)return null;let[r,o]=s.tangent,a=-o,c=r,l=s.point[0]+a*t,u=s.point[1]+c*t;return{x:l,z:u,y:n?n(l,u):0,yaw:Math.atan2(r,o),tangent:s.tangent}}function Ww(i,e,t,n,s,r,o,a){let c=Qw(),l=[],u=1.5;for(let h=mf-6;h<_r;h+=5){let d=yr(i,h+2.5,(wt()-.5)*.8,o);if(!d)break;let f=new Rt(u*2,5.4);f.rotateX(-Math.PI/2),f.rotateY(d.yaw),f.translate(d.x,d.y+kw,d.z),l.push(f)}l.length&&e.add(new Oe(st(l,!1),new qe({map:c,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3})));for(let h=mf-8;h<_r+4;h+=3.2)for(let d of[-1,1]){let f=yr(i,h+wt()*2,d*(u+.7+wt()*.9),o);if(!f)continue;let p=.75+wt()*.65,x=.26+wt()*.26,g=new gs(p,x,9);if(g.translate(0,x/2,0),g.scale(1,1,.7+wt()*.5),g.rotateY(wt()*Math.PI),g.translate(f.x,f.y+vr,f.z),Ha(g,[6048825,6969411,4865326][Math.floor(wt()*3)]),t.push(g),wt()<.55){let m=new Ze(.4+wt()*.5,.09,.35+wt()*.4);m.rotateZ((wt()-.5)*.9),m.rotateY(wt()*Math.PI),m.translate(f.x+(wt()-.5)*1.4,f.y+vr+.12,f.z+(wt()-.5)*1.4),Ha(m,2829352),t.push(m)}}for(let h=mf-10;h<_r+6;h+=2.3)for(let d of[-1,1]){let f=yr(i,h,d*(u+1.9+wt()*.4),o);f&&n.push({...f,tipped:wt()<.16})}Hg(i,gf,_r,4.4,s,r,o,a),Hg(i,gf,_r,-4.4,s,r,o,a),Xw(i,_r+2,s,r,o,a)}function Hg(i,e,t,n,s,r,o,a){for(let c=e;c<t;c+=oi+.1){let l=yr(i,c+oi/2,n,o);if(!l)break;wt()<.12||(Vg(l.x,l.z,l.y,l.yaw,s,r,wt()<.18),Gg(a,l.x,l.z,l.yaw))}}function Xw(i,e,t,n,s,r){for(let o=-6;o<=6;o+=oi+.1){let a=yr(i,e,o+oi/2,s);a&&(Vg(a.x,a.z,a.y,a.yaw+Math.PI/2,t,n,wt()<.25),Gg(r,a.x,a.z,a.yaw+Math.PI/2))}}function Gg(i,e,t,n){i&&i.addBox(e,t,oi/2,.13,n,"fence")}function Vg(i,e,t,n,s,r,o){let a=o?(wt()-.5)*.5:(wt()-.5)*.06,c=[],l=(p,x,g,m,b)=>{let M=new Ze(p,x,g);M.translate(m,b,0),c.push(M)};l(.05,xr,.05,-oi/2,xr/2),l(.05,xr,.05,oi/2,xr/2),l(oi,.05,.05,0,xr-.03),l(oi,.05,.05,0,.03);let u=new Ze(.5,.11,.26);u.translate(-oi/2,.055,0);let h=new Ze(.5,.11,.26);h.translate(oi/2,.055,0),c.push(u,h);let d=st(c,!1);d.rotateZ(a),d.rotateY(n),d.translate(i,t+vr,e),s.push(d);let f=new Rt(oi-.1,xr-.1);f.translate(0,xr/2,0),f.rotateZ(a),f.rotateY(n),f.translate(i,t+vr,e),r.push(f)}function qw(i,e,t){i.length&&t.add(new Oe(st(i,!1),new qe({color:5592911,flatShading:!0}))),e.length&&t.add(new Oe(st(e,!1),new qe({map:jw(),transparent:!0,alphaTest:.35,side:Ot,depthWrite:!0})))}function Yw(i,e,t){let n=Vw(i);for(let s=40;s<n-20;s+=Hw){if(s>gf-40&&s<_r+40)continue;let r=3+Math.floor(wt()*6);for(let o=0;o<r;o++){let a=yr(i,s+(wt()-.5)*14,(wt()-.5)*12,t);a&&e.push({...a,tipped:wt()<.35})}}}function Zw(){let i=[],e=new gs(.24,.62,10);e.translate(0,.31,0),Ha(e,11025678),i.push(e);let t=new cn(.125,.15,.13,10);t.translate(0,.33,0),Ha(t,13223092),i.push(t);let n=new Ze(.34,.05,.34);return n.translate(0,.025,0),Ha(n,8006666),i.push(n),st(i,!1)}function Kw(i,e){if(!i.length)return;let t=Zw(),n=new qe({vertexColors:!0,flatShading:!0}),s=new pn(t,n,i.length),r=new $e,o=new Nt,a=new $t,c=new O,l=new O(1,1,1);i.forEach((u,h)=>{a.set(u.tipped?Math.PI/2*(.75+wt()*.3):(wt()-.5)*.08,wt()*Math.PI*2,0,"YXZ"),o.setFromEuler(a),c.set(u.x,(u.y||0)+vr+(u.tipped?.2:0),u.z),r.compose(c,o,l),s.setMatrixAt(h,r)}),s.instanceMatrix.needsUpdate=!0,e.add(s)}function $w(i,e,t,n){let s=yr(i,Bw,zw,t);if(!s)return;let r=4.2,o=2.5,a=.45,c=new Rt(r,o);c.translate(0,a+o/2,0);let[l,u]=s.tangent,h=Math.atan2(-l,-u);c.rotateY(h),c.translate(s.x,s.y+vr,s.z),e.add(new Oe(c,new qe({map:Jw(),side:Ot})));let d=[];for(let p of[-1,1]){let x=new Ze(.12,a+.3,.12);x.translate(p*(r/2-.3),(a+.3)/2,0),d.push(x)}let f=st(d,!1);f.rotateY(h),f.translate(s.x,s.y+vr,s.z),e.add(new Oe(f,new qe({color:4867128}))),n&&n.addBox(s.x,s.z,r/2,.15,h,"hoarding")}function Jw(){let t=document.createElement("canvas");t.width=1024,t.height=610;let n=t.getContext("2d");n.fillStyle="#26506e",n.fillRect(0,0,1024,610);for(let r=0;r<2600;r++){let o=Math.random()*1024,a=Math.random()*610;n.fillStyle=`rgba(${20+Math.random()*60},${30+Math.random()*50},${40+Math.random()*50},0.06)`,n.fillRect(o,a,Math.random()*90,Math.random()*5)}n.fillStyle="#e8e6dc",n.textAlign="center",n.font="bold 62px Helvetica, Arial, sans-serif",n.fillText("LEITH WALK",1024/2,110),n.fillText("IMPROVEMENT PROJECT",1024/2,180),n.fillStyle="#f0c02a",n.fillRect(120,232,784,6),n.fillStyle="#e8e6dc",n.font="bold 50px Helvetica, Arial, sans-serif",n.fillText("COMPLETION: SPRING 2023",1024/2,310),n.font="30px Helvetica, Arial, sans-serif",n.fillStyle="#b8c6d2",n.fillText("WE APOLOGISE FOR ANY INCONVENIENCE",1024/2,380),n.font="24px Helvetica, Arial, sans-serif",n.fillText("City of Edinburgh Council",1024/2,430),n.strokeStyle="rgba(210,60,40,0.85)",n.lineWidth=9,n.lineCap="round",n.beginPath(),n.moveTo(190,340),n.lineTo(835,285),n.stroke(),n.save(),n.translate(1024/2,520),n.rotate(-.05),n.fillStyle="rgba(214,66,44,0.9)",n.font="bold 58px Helvetica, Arial, sans-serif",n.fillText("STILL WAITING",0,0),n.restore(),n.globalCompositeOperation="destination-out";for(let r=0;r<26;r++){let o=Math.random()*1024,a=Math.random()<.5?Math.random()*40:610-Math.random()*40;n.beginPath(),n.ellipse(o,a,10+Math.random()*50,6+Math.random()*22,Math.random()*3,0,Math.PI*2),n.fill()}n.globalCompositeOperation="source-over";let s=new xt(t);return s.colorSpace=tt,s.anisotropy=16,s}function jw(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.clearRect(0,0,128,128),t.strokeStyle="#50524b",t.lineWidth=2;let n=128/8;for(let r=0;r<=8;r++)t.beginPath(),t.moveTo(r*n,0),t.lineTo(r*n,128),t.stroke(),t.beginPath(),t.moveTo(0,r*n),t.lineTo(128,r*n),t.stroke();let s=new xt(e);return s.wrapS=s.wrapT=ni,s.repeat.set(6,4),s.colorSpace=tt,s.anisotropy=16,s}function Qw(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.fillStyle="#241d16",t.fillRect(0,0,256,256);for(let s=0;s<2200;s++){let r=Math.random();t.fillStyle=`rgba(${30+r*55},${25+r*45},${18+r*35},0.5)`,t.beginPath(),t.arc(Math.random()*256,Math.random()*256,Math.random()*5,0,Math.PI*2),t.fill()}t.fillStyle="rgba(78,84,74,0.45)",t.beginPath(),t.ellipse(256*.55,256*.62,256*.3,256*.13,.3,0,Math.PI*2),t.fill(),t.fillStyle="#4a4235",t.fillRect(0,256*.4,256,16),t.fillStyle="rgba(255,255,255,0.07)",t.fillRect(0,256*.4,256,5);let n=new xt(e);return n.colorSpace=tt,n.anisotropy=16,n}function Ha(i,e){let t=new me(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;i.setAttribute("color",new Qe(s,3))}var bn=(()=>{let i=39441;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),eA=115,tA=90,nA=40,Wg=10,iA=27,sA=8,Xg=22,rA=55,_u=1.35;function qg(i,e,t){let n=i.streetLine||[];if(n.length<2)return{group:new nt,update(){}};let s=i.groundHeight||(()=>0),r=new nt;r.name="birds",t.add(r);let o=oA(n,r);return cA(i,e,r),lA(n,r,s),{group:r,update(a,c){aA(o,c,s)}}}function xf(i,e){let t=i/2,n=[],s=u=>{let h=new Float32Array([u*.04,0,e*.18,u*.04,0,-e*.16,u*t*.55,.03*t,-e*.3,u*.04,0,e*.18,u*t*.55,.03*t,-e*.3,u*t*.58,.03*t,e*.06,u*t*.58,.03*t,e*.06,u*t*.55,.03*t,-e*.3,u*t,.1*t,-e*.38,u*t*.58,.03*t,e*.06,u*t,.1*t,-e*.38,u*t*.97,.1*t,-e*.1]),d=new pt;return d.setAttribute("position",new Qe(h,3)),d.computeVertexNormals(),d},r=s(-1);ka(r,4869188);let o=s(1);ka(o,4869188),n.push(r,o);let a=(u,h,d)=>{let f=new Ze(u,h,d).toNonIndexed();return f.deleteAttribute("uv"),f},c=a(e*.17,e*.15,e);ka(c,7237734),n.push(c);let l=a(e*.34,.012,e*.3);return l.translate(0,0,-e*.6),ka(l,2895400),n.push(l),st(n,!1)}function _f(){return new qe({vertexColors:!0,flatShading:!0,side:Ot})}function oA(i,e){let t=Zg(i),n=[];for(let r=0;r<eA;r++){let o=Yg(i,30+bn()*Math.max(1,t-60));if(!o)continue;let[a,c]=o.tangent;n.push({ox:o.point[0],oz:o.point[1],ax:a,az:c,px:-c,pz:a,rAlong:Xg+bn()*(rA-Xg),rAcross:2.5+bn()*(sA-2.5),y:Wg+bn()*(iA-Wg),speed:(bn()<.5?-1:1)*(.1+bn()*.14),phase:bn()*Math.PI*2,bobAmp:.5+bn()*1.4,bobFreq:.25+bn()*.45,scale:.85+bn()*.5})}let s=new pn(xf(_u,_u*.42),_f(),n.length);return s.frustumCulled=!1,e.add(s),{mesh:s,birds:n}}function aA({mesh:i,birds:e},t,n){let s=new $e,r=new Nt,o=new $t,a=new O,c=new O;e.forEach((l,u)=>{let h=t*l.speed+l.phase,d=Math.cos(h),f=Math.sin(h),p=d*l.rAlong,x=f*l.rAcross,g=l.ox+l.ax*p+l.px*x,m=l.oz+l.az*p+l.pz*x,b=n(g,m)+l.y+Math.sin(t*l.bobFreq+l.phase)*l.bobAmp,M=(-f*l.rAlong*l.ax+d*l.rAcross*l.px)*l.speed,_=(-f*l.rAlong*l.az+d*l.rAcross*l.pz)*l.speed,S=Math.atan2(M,_),y=(-d*l.rAlong*l.ax-f*l.rAcross*l.px)*l.speed*l.speed,T=(-d*l.rAlong*l.az-f*l.rAcross*l.pz)*l.speed*l.speed,v=Math.hypot(M,_)||1e-4,w=(y*_-T*M)/v,R=ii.clamp(w*90,-1,1);o.set(Math.sin(t*l.bobFreq+l.phase)*.06,S,R,"YXZ"),r.setFromEuler(o),a.set(g,b,m),c.setScalar(l.scale),s.compose(a,r,c),i.setMatrixAt(u,s)}),i.instanceMatrix.needsUpdate=!0}function cA(i,e,t){let n=e&&e.buildings||[],s=i.nearestStreetPoint,r=i.groundHeight||(()=>0),o=[],a=n.filter(f=>{let p=f.footprint;if(!p||p.length<3)return!1;let x=s?s(p[0][0],p[0][1]):null;return!x||x.distance<=30}),c=a.length?tA/a.length:0;for(let f of a){let p=f.footprint,x=Math.max(1,f.levels||1)*3.2,g=Math.floor(c)+(bn()<c%1?1:0);for(let m=0;m<g;m++){let b=Math.floor(bn()*p.length),M=(b+1)%p.length,_=.15+bn()*.7,S=p[b][0]+(p[M][0]-p[b][0])*_,y=p[b][1]+(p[M][1]-p[b][1])*_;o.push({x:S,z:y,y:r(S,y)+x+.12,yaw:bn()*Math.PI*2})}}if(!o.length)return;let l=new pn(xf(_u*.42,_u*.46),_f(),o.length),u=new $e,h=new Nt,d=new $t;o.forEach((f,p)=>{d.set(0,f.yaw,0,"YXZ"),h.setFromEuler(d),u.compose(new O(f.x,f.y,f.z),h,new O(1,1,1)),l.setMatrixAt(p,u)}),l.instanceMatrix.needsUpdate=!0,t.add(l)}function lA(i,e,t){let n=Zg(i),s=[];for(let u=0;u<nA;u++){let h=Yg(i,25+bn()*Math.max(1,n-50));if(!h)continue;let[d,f]=h.tangent,p=-f,x=d,g=(bn()*2-1)*5.5,m=h.point[0]+p*g,b=h.point[1]+x*g;s.push({x:m,z:b,yaw:bn()*Math.PI*2})}if(!s.length)return;let r=xf(.3,.3);ka(r,5263948);let o=new pn(r,_f(),s.length),a=new $e,c=new Nt,l=new $t;s.forEach((u,h)=>{l.set(0,u.yaw,0,"YXZ"),c.setFromEuler(l),a.compose(new O(u.x,t(u.x,u.z)+.1,u.z),c,new O(1,1,1)),o.setMatrixAt(h,a)}),o.instanceMatrix.needsUpdate=!0,e.add(o)}function Yg(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0;return{point:[s+c*h,r+l*h],tangent:[c/(u||1),l/(u||1)]}}t+=u}return null}function Zg(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function ka(i,e){let t=new me(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;i.setAttribute("color",new Qe(s,3))}var Mr=(()=>{let i=10775;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),uA=90,hA=6.6,Kg=2.5,dA=9,fA=.06;function Qg(i,e){let t=i.streetLine||[];if(t.length<2)return{group:new nt,update(){}};let n=new nt;n.name="vermin",e.add(n);let s=xA(t),r=[];for(let c=0;c<uA;c++){let l=20+Mr()*Math.max(1,s-45),u=Kg+Mr()*(dA-Kg),h=jg(t,l),d=jg(t,Math.min(l+u,s-1));if(!h||!d)continue;let p=(Mr()<.5?1:-1)*(hA+(Mr()-.5)*.8),x=Jg(h,p),g=Jg(d,p);r.push({ax:x[0],az:x[1],bx:g[0],bz:g[1],rate:.07+Mr()*.16,phase:Mr(),scale:.8+Mr()*.5})}let o=new pn(gA(),new qe({vertexColors:!0,flatShading:!0}),r.length);n.add(o);let a=i.groundHeight||(()=>0);return{group:n,update(c,l){mA(o,r,l,a)}}}function pA(i){return i<.18?$g(0,.18,i):i<.5?1:i<.68?1-$g(.5,.68,i):0}function $g(i,e,t){let n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)}function mA(i,e,t,n){let s=new $e,r=new Nt,o=new $t,a=new O,c=new O;e.forEach((l,u)=>{let h=(t*l.rate+l.phase)%1,d=pA(h),f=l.ax+(l.bx-l.ax)*d,p=l.az+(l.bz-l.az)*d,x=h>=.5,g=x?l.ax-l.bx:l.bx-l.ax,m=x?l.az-l.bz:l.bz-l.az,b=Math.atan2(g,m),_=h<.18||h>=.5&&h<.68?Math.abs(Math.sin(t*26+u))*.025:0;o.set(0,b,0,"YXZ"),r.setFromEuler(o),a.set(f,n(f,p)+fA+_,p),c.setScalar(l.scale),s.compose(a,r,c),i.setMatrixAt(u,s)}),i.instanceMatrix.needsUpdate=!0}function gA(){let i=[],e=(r,o,a)=>{let c=new Ze(r,o,a).toNonIndexed();return c.deleteAttribute("uv"),c},t=e(.11,.1,.23);t.translate(0,.05,0),yf(t,4537909),i.push(t);let n=e(.075,.07,.1);n.translate(0,.045,.15),yf(n,5129787),i.push(n);let s=e(.016,.016,.21);return s.translate(0,.035,-.21),yf(s,4866617),i.push(s),st(i,!1)}function Jg(i,e){let[t,n]=i.tangent;return[i.point[0]+-n*e,i.point[1]+t*e]}function jg(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0;return{point:[s+c*h,r+l*h],tangent:[c/(u||1),l/(u||1)]}}t+=u}return null}function xA(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function yf(i,e){let t=new me(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;i.setAttribute("color",new Qe(s,3))}var mt=(()=>{let i=11590938;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),_A=210,yA=130,vA=260,MA=22;function ex(i,e,t){let n=i.streetLine||[];if(n.length<2)return{group:new nt};let s=i.groundHeight||(()=>0),r=new nt;return t.add(r),bA(i,e,n,r),EA(n,r,s),TA(n,r,s),wA(n,r,s),{group:r}}function bA(i,e,t,n){let s=SA(),r=[],o=(f,p,x,g,m)=>{for(let b=0;b<3;b++){let M=new Rt(g,g);M.translate(0,g/2,0),M.rotateZ(m),M.rotateY(b/3*Math.PI+mt()*.4),M.translate(f,p,x),r.push(M)}},a=e&&e.buildings||[],c=i.nearestStreetPoint,l=a.filter(f=>{let p=f.footprint;if(!p||p.length<3)return!1;let x=c?c(p[0][0],p[0][1]):null;return!x||x.distance<=28}),u=i.groundHeight||(()=>0),h=l.length?_A/l.length:0;for(let f of l){let p=f.footprint,x=Math.floor(h)+(mt()<h%1?1:0),g=Math.max(1,f.levels||1)*3.2;for(let m=0;m<x;m++){let b=Math.floor(mt()*p.length),M=(b+1)%p.length,_=.1+mt()*.8,S=p[b][0]+(p[M][0]-p[b][0])*_,y=p[b][1]+(p[M][1]-p[b][1])*_;o(S,u(S,y)+g-.25,y,1.1+mt()*1.5,(mt()-.5)*.5)}}let d=vf(t);for(let f=0;f<yA;f++){let p=Mu(t,20+mt()*Math.max(1,d-40));if(!p)continue;let g=(mt()<.5?1:-1)*(7.2+mt()*2.6),m=vu(p,g);o(m[0],u(m[0],m[1])+.03,m[1],.8+mt()*1.1,(mt()-.5)*.3)}r.length&&n.add(new Oe(st(r,!1),new qe({map:s,transparent:!0,alphaTest:.45,side:Ot,depthWrite:!0})))}function SA(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.clearRect(0,0,256,256);for(let s=0;s<170;s++){let r=-Math.PI/2+(Math.random()-.5)*2.5,o=30+Math.random()*78,a=256/2+(Math.random()-.5)*58,c=256-Math.random()*44,l=46+Math.random()*52;t.strokeStyle=`rgba(${28+Math.random()*26},${l},${30+Math.random()*22},0.95)`,t.lineWidth=2+Math.random()*5,t.lineCap="round",t.beginPath(),t.moveTo(a,c),t.quadraticCurveTo(a+Math.cos(r)*o*.5+(Math.random()-.5)*24,c+Math.sin(r)*o*.5,a+Math.cos(r)*o,c+Math.sin(r)*o),t.stroke()}for(let s=0;s<13;s++){let r=34+Math.random()*188,o=26+Math.random()*96,a=26+Math.random()*40;for(let c=0;c<26;c++){let l=c/26,u=(1-l)*8+1.5;t.fillStyle=`rgba(${74+Math.random()*30},${44+Math.random()*22},${88+Math.random()*32},0.88)`,t.beginPath(),t.ellipse(r+(Math.random()-.5)*4,o+l*a,u,3.5,0,0,Math.PI*2),t.fill()}}let n=new xt(e);return n.colorSpace=tt,n.anisotropy=16,n}function EA(i,e,t){let n=vf(i),s=[];for(let r=0;r<vA;r++){let o=Mu(i,15+mt()*Math.max(1,n-30));if(!o)continue;let c=(mt()<.5?1:-1)*(mt()<.65?6.3+mt()*.7:7.5+mt()*2.2),l=vu(o,c),u=t(l[0],l[1]),h=mt(),d,f;h<.3?(d=new cn(.037,.042,.27,6),d.rotateZ(Math.PI/2),d.rotateY(mt()*Math.PI*2),d.translate(0,.04,0),f=2899230):h<.55?(d=new cn(.032,.032,.1,6),d.rotateZ(Math.PI/2+(mt()-.5)*.7),d.scale(1,1,.6),d.translate(0,.032,0),f=mt()<.5?10115614:3100522):h<.8?(d=new Ze(.16+mt()*.08,.05,.12+mt()*.06),d.rotateY(mt()*Math.PI),d.rotateZ((mt()-.5)*.5),d.translate(0,.026,0),f=11051924):(d=new Rt(.24+mt()*.2,.18+mt()*.14),d.rotateX(-Math.PI/2),d.rotateY(mt()*Math.PI),d.translate(0,.036,0),f=7170652),d.translate(l[0],u+.03,l[1]),yu(d,f),s.push(d)}s.length&&e.add(new Oe(st(s,!1),new qe({vertexColors:!0,flatShading:!0,side:Ot})))}function TA(i,e,t){let n=vf(i),s=[];for(let r=0;r<MA;r++){let o=Mu(i,25+mt()*Math.max(1,n-50));if(!o)continue;let a=mt()<.5?1:-1,c=vu(o,a*(7.6+mt()*1.8)),l=t(c[0],c[1]),u=mt()<.6,h=[],d=new Ze(.62,1.05,.72).toNonIndexed();d.deleteAttribute("uv"),d.translate(0,.525,0),yu(d,[3095084,3813160,2634298][Math.floor(mt()*3)]),h.push(d);let f=new Ze(.66,.07,.76).toNonIndexed();f.deleteAttribute("uv"),f.translate(0,1.07,u?.1:-.3),f.rotateX(u?.2:-.7),yu(f,1975840),h.push(f);let p=st(h,!1);p.rotateY(mt()*Math.PI*2),u&&p.rotateZ(Math.PI/2+(mt()-.5)*.3),p.translate(c[0],l+(u?.34:.03),c[1]),s.push(p)}s.length&&e.add(new Oe(st(s,!1),new qe({vertexColors:!0,flatShading:!0})))}function wA(i,e,t){let n=Mu(i,415);if(!n)return;let s=vu(n,-3.4),r=t(s[0],s[1]),o=[],a=(d,f,p,x,g,m)=>{let b=new Ze(d,f,p).toNonIndexed();b.deleteAttribute("uv"),b.translate(x,g,m),o.push(b)},c=.56,l=.44,u=.86;for(let d=0;d<=6;d++){let f=-u/2+d/6*u;a(c,.018,.018,0,l,f),a(.018,l,.018,-c/2,l/2,f),a(.018,l,.018,c/2,l/2,f)}for(let d=0;d<=4;d++){let f=-c/2+d/4*c;a(.018,.018,u,f,.02,0),a(.018,.018,u,f,l,0)}a(c,l,.018,0,l/2,-u/2),a(.03,.3,.03,0,l+.15,-u/2);let h=st(o,!1);yu(h,6974822),h.rotateZ(Math.PI/2*.92),h.rotateY(mt()*Math.PI*2),h.translate(s[0],r+.3,s[1]),e.add(new Oe(h,new qe({vertexColors:!0,flatShading:!0})))}function vu(i,e){let[t,n]=i.tangent;return[i.point[0]+-n*e,i.point[1]+t*e]}function Mu(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0;return{point:[s+c*h,r+l*h],tangent:[c/(u||1),l/(u||1)]}}t+=u}return null}function vf(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function yu(i,e){let t=new me(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;i.setAttribute("color",new Qe(s,3))}var Mf=[{file:"cars/sedan.glb",kind:"car",targetLen:4.3},{file:"cars/hatchback-sports.glb",kind:"car",targetLen:3.9},{file:"cars/van.glb",kind:"van",targetLen:5.4},{file:"cars/bus.glb",kind:"bus",targetLen:11}],AA=16,tx=6.1,RA=405,nx=[560,700],Hn=(()=>{let i=3394627454;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})();function rx(i,e,t){let n=e&&e.streetLine;if(!n||n.length<2)return{group:null};let s=new nt;s.name="cars",t.add(s);let r=new Rs,o=a=>r.loadAsync(mn(i,a.file)).then(c=>CA(c.scene,a)).catch(()=>null);return Promise.all(Mf.map(o)).then(a=>{let c={};for(let l=0;l<Mf.length;l++)a[l]&&(c[Mf[l].kind]??=[]).push(a[l]);!c.car&&!c.van&&!c.bus||IA(c,n,s,e.groundHeight,e.collision)}),{group:s}}function CA(i,e){let n=new Qt().setFromObject(i).getSize(new O),s=Math.max(n.x,n.z)||1,r=e.targetLen/s;i.scale.setScalar(r),i.updateMatrixWorld(!0);let o=new Qt().setFromObject(i);i.position.y=-o.min.y;let a=new nt;a.add(i);let c=new Qt().setFromObject(i);return a.userData.plan={halfW:(c.max.x-c.min.x)/2,halfD:(c.max.z-c.min.z)/2,cx:(c.max.x+c.min.x)/2,cz:(c.max.z+c.min.z)/2},a}function ix(i,e,t){let n=e.userData&&e.userData.plan;if(!i||!n)return;let s=e.rotation.y,r=Math.sin(s),o=Math.cos(s);i.addBox(e.position.x+n.cx*o+n.cz*r,e.position.z-n.cx*r+n.cz*o,n.halfW,n.halfD,s,t)}function sx(i,e){let t=e?.05+Hn()*.04:.18+Hn()*.2,n=Hn()<.5&&!e;i.traverse(s=>{if(!s.isMesh||!s.material)return;let r=s.material,o=new qe({map:r.map||null,color:(r.color?r.color.clone():new me(8947848)).multiplyScalar(t)});n&&(o.color.r=Math.min(1,o.color.r*1.35+.03),o.color.b*=.75),s.material=o})}function IA(i,e,t,n,s){let r=[...i.car||[],...i.van||[]];if(r.length)for(let a=0;a<AA;a++){let c=40+Hn()*1160;if(c>nx[0]&&c<nx[1])continue;let l=Pa(e,c);if(!l)continue;let u=Hn()<.5?1:-1,[h,d]=l.tangent,f=r[Math.floor(Hn()*r.length)].clone(!0);sx(f,Hn()<.12);let p=l.point[0]+-d*u*(tx+Hn()*.7),x=l.point[1]+h*u*(tx+Hn()*.7);f.position.set(p,n?n(p,x):0,x);let g=Math.atan2(h,d)+(Hn()<.5?Math.PI:0);Hn()<.15&&(g+=(Hn()-.5)*1.2),f.rotation.y=g+(Hn()-.5)*.12,f.rotation.z=(Hn()-.5)*.05,t.add(f),ix(s,f,"car")}let o=(i.bus||[])[0];if(o){let a=Pa(e,RA);if(a){let c=o.clone(!0);sx(c,!0);let l=n?n(a.point[0],a.point[1]):0;c.position.set(a.point[0],l,a.point[1]),c.rotation.y=Math.atan2(a.tangent[0],a.tangent[1])+.06,c.rotation.z=.07,t.add(c),ix(s,c,"bus")}}}var PA=!0,LA=.34,NA=.78,DA=0,FA=30,UA=7.6,go=30,OA=50,BA=9,bf=25,zA=3,ox=[4999740,4145720,5655614,4472891,5263946,3816500],ax=[7027246,3033690,7826250,4864602,5921354],cx=['"%Q" \u2014 whit?','did ye hear that? "%Q"','"%Q", says he','"%Q" \u2014 aye, right','"%Q"... ma nerves',`he's away wi it \u2014 "%Q"`],HA=i=>{let e=i;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}},Sn=HA(1972196);function ux(i,e,t,n){let s=e.streetLine||[],r=e.groundHeight||(()=>0);if(s.length<2)return{update(){}};let o=i.comicLines||{},c=WA(s)-go-OA;if(c<50)return{update(){}};let l=new nt;l.name="leithers",t.add(l);let u=zn("LeitherMesh",PA),h=[];for(let M=0;M<FA;M++){let _=kA();_.s=go+Sn()*c,_.side=Sn()<.5?1:-1,_.dir=Sn()<.5?1:-1,_.speed=.55+Sn()*.5,_.offset=UA+Sn()*1.6,_.state="walk",_.listenT=0,_.cooldown=Sn()*bf,_.phase=Sn()*10,_.bubble=null,_.bubbleT=0,l.add(_.group),h.push(_)}let d=!1;function f(){if(!(d||!e.collision)){d=!0;for(let M of h)e.collision.addMover(()=>M.group.position.x,()=>M.group.position.z,M.collisionRadius,"walker")}}if(!u)for(let M of h)M.buildDoll();function p(M){if(!u)return;if(!M||!M.onArchetype||!M.enabled){for(let S of h)S.buildDoll();return}let _=new Map;for(let S of h){let y=ef(S.build,DA);S.archetype=y.name,S.squash=S.build.girth/y.girth,_.has(y.name)||_.set(y.name,[]),_.get(y.name).push(S)}M.onArchetype((S,y)=>{let T=_.get(S.name);if(T)for(let v of T){if(!y){v.buildDoll();continue}let w=y.clone(!0);w.name="leither-mesh",GA(w,v.coat),w.scale.set(v.headTopY*v.squash,v.headTopY,v.headTopY*v.squash),v.group.add(w),v.mesh=w}})}let x=0,g=0;function m(M,_){for(let S=0;S<h.length;S++){let y=h[S];if(y.cooldown>0&&(y.cooldown-=M),y.state==="fetch"){let w=y.fetchItem.chainage-y.s;if(Math.abs(w)>2)y.dir=Math.sign(w),y.s+=y.dir*y.speed*1.5*M;else{y.state="approach",y.approachT=0;let R=y.group.position;y.approachFrom={x:R.x,z:R.z}}}else if(y.state==="approach"){y.approachT=Math.min(1,y.approachT+M/1.6);let v=y.fetchItem,w=y.approachT,R=v.x+.75,A=v.z,C=y.approachFrom.x+(R-y.approachFrom.x)*w,N=y.approachFrom.z+(A-y.approachFrom.z)*w;y.group.position.set(C,r(C,N)+Math.abs(Math.sin((y.s+w*8)*2))*.03,N),y.group.rotation.y=Math.atan2(v.x-y.group.position.x,v.z-y.group.position.z),w>=1&&(y.state="readaloud",y.readQueue=(y.fetchItem.lines||[]).slice(0,8),y.readT=.5);continue}else if(y.state==="readaloud"){if(y.readT-=M,y.readT<=0&&!y.bubble){let v=y.readQueue.shift();v==null?(y.state="walk",y.fetchItem.adopted=!1,y.fetchItem=null,y.cooldown=bf):(y.bubble=lx('"'+v+'"'),y.bubble.position.set(0,y.headTopY+.5,0),y.group.add(y.bubble),y.bubbleT=4.2,x++,y.readT=.6)}y.bubble&&(y.bubbleT-=M,y.bubbleT<=0&&(y.group.remove(y.bubble),y.bubble.material.map.dispose(),y.bubble.material.dispose(),y.bubble=null,x--));continue}else y.state==="listen"?(y.listenT-=M,(y.listenT<=0||!(y.target&&y.target.speaking))&&(y.state="walk",y.target=null,y.cooldown=bf)):(y.s+=y.dir*y.speed*M,(y.s<go||y.s>go+c)&&(y.dir*=-1,y.s=Math.max(go,Math.min(go+c,y.s))));let T=XA(s,y.s);if(T){let[v,w]=T.tangent,R=T.point[0]+-w*y.side*y.offset,A=T.point[1]+v*y.side*y.offset,C=r(R,A);if(y.group.position.set(R,C,A),y.state==="listen"&&y.target){let N=y.target.group.position;y.group.rotation.y=Math.atan2(N.x-R,N.z-A)}else{y.group.rotation.y=Math.atan2(v*y.dir,w*y.dir);let N=_*(4.6*y.speed)+y.phase;y.group.position.y=C+Math.abs(Math.sin(N))*.045,y.group.rotation.z=Math.sin(N)*.03}}y.bubble&&(y.bubbleT-=M,y.bubbleT<=0&&(y.group.remove(y.bubble),y.bubble.material.map.dispose(),y.bubble.material.dispose(),y.bubble=null,x--))}f();for(let S=0;S<4;S++){let y=h[g++%h.length];if(y.state!=="walk"||y.cooldown>0)continue;let T=y.group.position;for(let v of n){if(!v.speaking)continue;let w=v.group.position;if(Math.hypot(w.x-T.x,w.z-T.z)>BA)continue;y.state="listen",y.target=v,y.listenT=6+Sn()*9;let R=o[v.comic.id];if(R&&R.length&&x<zA&&Sn()<.6){let A=R[Math.floor(Sn()*R.length)],C=cx[Math.floor(Sn()*cx.length)];y.bubble=lx(C.replace("%Q",A)),y.bubble.position.set(0,y.headTopY+.5,0),y.group.add(y.bubble),y.bubbleT=7,x++}break}}}function b(M){if(!M||M.adopted||!(M.lines&&M.lines.length))return!1;let _=null,S=70;for(let y of h){if(y.state!=="walk")continue;let T=y.group.position,v=Math.hypot(T.x-M.x,T.z-M.z);v<S&&(S=v,_=y)}return _?(M.adopted=!0,_.state="fetch",_.fetchItem=M,!0):!1}return{walkers:h,update:m,summonReader:b,useArchetypes:p,meshed:u}}function kA(){let i=1.5+Sn()*.35,e=.8+Sn()*.45,t=ox[Math.floor(Sn()*ox.length)],n=new nt,s=.1,r=i*.32,o=.44*e,a=.3*e,c=i*.44,l=.26,u=s+r,h=u+c,d=h+l+.02,f=ax[Math.floor(Sn()*ax.length)],p=Sn()<.3?[-1,1]:[Sn()<.5?-1:1],x=new qe({color:f,flatShading:!0});for(let m of p){let b=new Oe(new Ze(.2,.24,.11),x);b.position.set(m*(o*.5+.1),u+c*.12,.02),n.add(b)}let g={group:n,headTopY:d,coat:t,build:{height:i,girth:e,headScale:1.5},collisionRadius:o/2,archetype:null,squash:1,mesh:null,hasDoll:!1,buildDoll(){if(g.hasDoll)return g;g.hasDoll=!0;let m=Da(t,!1),b=Da(VA(t,.62),!0),M=new qe({color:1578512,flatShading:!0}),_=[];for(let C of[-1,1]){let N=new Ze(o*.34,r,a*.7);N.translate(C*o*.24,s+r*.5,0),_.push(N);let z=new Ze(.11,c*.7,.11);z.translate(C*(o*.5+.05),h-c*.62,0),_.push(z)}let S=new Ze(o,c,a);S.translate(0,u+c*.5,0),_.push(S);let y=new Oe(st(_),m);n.add(y);let T=[];for(let C of[-1,1]){let N=new Ze(o*.36,s,a*1.3);N.translate(C*o*.24,s*.5,a*.15),T.push(N)}let v=new Oe(st(T),M);n.add(v);let w=new qe({color:2235928,flatShading:!0}),R=[b,b,b,b,w,b],A=new Oe(new Ze(l,l,l*.9),R);return A.position.set(0,h+l*.5+.02,0),n.add(A),g.dollBody=[y,v,A],g.head=A,g},dollBody:[],head:null};return g}function GA(i,e){let t=new me(e),n=(t.r+t.g+t.b)/3;n>0&&t.multiplyScalar(1/n);let s=[t.r-1,t.g-1,t.b-1],r=Math.hypot(s[0],s[1],s[2]),o=r>0?LA/r:0,a=new me(1+s[0]*o,1+s[1]*o,1+s[2]*o).multiplyScalar(NA);i.traverse(c=>{!c.isMesh||!c.material||(c.material=c.material.clone(),c.material.color.multiply(a))})}function VA(i,e){let t=Math.round((i>>16&255)*e),n=Math.round((i>>8&255)*e),s=Math.round((i&255)*e);return t<<16|n<<8|s}function lx(i){let e=document.createElement("canvas");e.width=512,e.height=160;let t=e.getContext("2d"),n=i.split(" "),s=[""];for(let c of n)(s[s.length-1]+" "+c).trim().length>30&&s.length<3&&s.push(""),s[s.length-1]=(s[s.length-1]+" "+c).trim();t.fillStyle="rgba(20, 22, 16, 0.82)",t.strokeStyle="rgba(200, 200, 180, 0.5)",t.lineWidth=3;let r=34+s.length*34;t.beginPath(),t.roundRect(8,80-r/2,496,r,14),t.fill(),t.stroke(),t.fillStyle="#d8d4c0",t.font="italic 26px Georgia, serif",t.textAlign="center",s.forEach((c,l)=>t.fillText(c,256,80-r/2+44+l*32));let o=new xt(e),a=new qi(new wi({map:o,transparent:!0,depthTest:!0}));return a.scale.set(1.9,.59,1),a}function WA(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function XA(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0;return{point:[s+c*h,r+l*h],tangent:[c/(u||1),l/(u||1)]}}t+=u}return null}var hx=24,qA=70,dx=60,YA=70,Is=(()=>{let i=1146442;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),ZA=new pi;function fx(i,e,t){let n=i.catalog&&i.catalog.comics||[],s=e.streetLine||[];if(!n.length||s.length<2)return{items:[],update(){},nearestItem:()=>null};let r=i.comicLines||{},o=n.filter(p=>r[p.id]&&r[p.id].length>=3),a=o.length>=hx?[...o]:[...o,...n.filter(p=>!r[p.id])],c=[];for(;c.length<Math.min(hx,a.length);)c.push(a.splice(Math.floor(Is()*a.length),1)[0]);let l=KA(s),u=new nt;u.name="litter-comics",t.add(u);let h=c.map((p,x)=>{let g=dx+Is()*(l-dx-YA),m=$A(s,g);if(!m)return null;let[b,M]=m.tangent,_=Is()<.5?1:-1,S=3.5+Is()*6,y=m.point[0]+-M*_*S,T=m.point[1]+b*_*S,v=new qe({map:gd(),color:new me(4.7,4.7,4.7),side:Ot}),w=new Oe(new Rt(.42,.58),v);w.rotation.x=-Math.PI/2,w.rotation.z=Is()*Math.PI*2,Is()<.3&&(w.rotation.y=(Is()-.5)*.5);let R=e.groundHeight?e.groundHeight(y,T):0;return w.position.set(y,R+.055+Is()*.01,T),u.add(w),{comic:p,lines:r[p.id]||[],mesh:w,x:y,z:T,chainage:g,loaded:!1,adopted:!1,load(){this.loaded||(this.loaded=!0,ZA.load(mn(i,p.image),A=>{A.colorSpace=tt,v.map=A,v.color.setScalar(4.7),v.needsUpdate=!0}))}}}).filter(Boolean);function d(p){if(p)for(let x of h)!x.loaded&&Math.hypot(p.x-x.x,p.z-x.z)<qA&&x.load()}function f(p,x,g){let m=null,b=g;for(let M of h){let _=Math.hypot(p-M.x,x-M.z);_<b&&(b=_,m=M)}return m}return{items:h,update:d,nearestItem:f}}function KA(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function $A(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,u=Math.hypot(c,l);if(t+u>=e){let h=u>0?(e-t)/u:0;return{point:[s+c*h,r+l*h],tangent:[c/(u||1),l/(u||1)]}}t+=u}return null}var xo=900,px=16,mx=20,JA=-3,jA=13,Sf=.35,QA=.85,eR=.5;function tR(i){let e=i|0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function nR(i,e){return(i%e+e)%e}function iR(){let e=document.createElement("canvas");e.width=32,e.height=32;let t=e.getContext("2d");t.translate(32/2,32/2),t.scale(.22,1);let n=t.createRadialGradient(0,0,0,0,0,32/2);n.addColorStop(0,"rgba(200,210,220,0.85)"),n.addColorStop(.55,"rgba(200,210,220,0.4)"),n.addColorStop(1,"rgba(200,210,220,0)"),t.fillStyle=n,t.fillRect(-32/2,-32/2,32,32);let s=new xt(e);return s.colorSpace=tt,s}function gx(i){let e=tR(5904299),t=new Float32Array(xo),n=new Float32Array(xo),s=new Float32Array(xo);for(let h=0;h<xo;h++)t[h]=(e()-.5)*2*px,n[h]=e()*mx,s[h]=(e()-.5)*2*px;let r=new Float32Array(xo*3),o=new pt;o.setAttribute("position",new Ut(r,3));let a=new ms({map:iR(),size:Sf,color:11187392,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0}),c=new er(o,a);c.name="rain",c.frustumCulled=!1,c.visible=!1;function l(h){let d=Math.max(0,Math.min(1,h));c.visible=d>0,a.opacity=eR*d,a.size=Sf+(QA-Sf)*d}function u(h,d){if(!c.visible)return;let f=i.position.x,p=i.position.y,x=i.position.z,g=o.attributes.position.array;for(let m=0;m<xo;m++){let b=p+JA+nR(n[m]-jA*d,mx);g[m*3]=f+t[m],g[m*3+1]=b,g[m*3+2]=x+s[m]}o.attributes.position.needsUpdate=!0}return{object:c,setIntensity:l,update:u}}function xx(){let i=null,e=null,t=!1,n=!1,s=null,r=0;function o(u){if(t){i&&i.state==="suspended"&&i.resume();return}if(t=!0,u)i=u;else{let h=window.AudioContext||window.webkitAudioContext;if(!h)return;i=new h}e=i.createGain(),e.gain.value=.16,e.connect(i.destination),sR(i,e),rR(i,e),s=oR(i,e),s.gain.value=r}function a(u){if(n=!!u,!i||!e)return;let h=(n?.5:1)*.16,d=i.currentTime;e.gain.cancelScheduledValues(d),e.gain.setValueAtTime(e.gain.value,d),e.gain.linearRampToValueAtTime(h,d+.6)}function c(){!i||!e||aR(i,e)}function l(u){let h=Math.max(0,Math.min(1,u))*.5;if(r=h,!i||!s)return;let d=i.currentTime;s.gain.cancelScheduledValues(d),s.gain.setValueAtTime(s.gain.value,d),s.gain.linearRampToValueAtTime(h,d+.8)}return{start:o,setDucked:a,triggerCrackle:c,setRain:l,get context(){return i}}}function sR(i,e){let t=i.createGain();t.gain.value=.55;let n=i.createBiquadFilter();n.type="lowpass",n.frequency.value=220,n.Q.value=.7,t.connect(n).connect(e);let s=[55,55.6];for(let r of s){let o=i.createOscillator();o.type="sawtooth",o.frequency.value=r,o.connect(t),o.start()}}function rR(i,e){let t=i.createBufferSource();t.buffer=Ef(i,4),t.loop=!0;let n=i.createBiquadFilter();n.type="bandpass",n.frequency.value=500,n.Q.value=.6;let s=i.createGain();s.gain.value=.18,t.connect(n).connect(s).connect(e),t.start();let r=i.createOscillator();r.type="sine",r.frequency.value=.07;let o=i.createGain();o.gain.value=.12,r.connect(o).connect(s.gain),r.start()}function oR(i,e){let t=i.createBufferSource();t.buffer=Ef(i,4),t.loop=!0;let n=i.createBiquadFilter();n.type="bandpass",n.frequency.value=2200,n.Q.value=.5;let s=i.createGain();s.gain.value=0,t.connect(n).connect(s).connect(e),t.start();let r=i.createOscillator();r.type="sine",r.frequency.value=.15;let o=i.createGain();return o.gain.value=.06,r.connect(o).connect(s.gain),r.start(),s}function aR(i,e){let n=i.createBufferSource();n.buffer=Ef(i,.18);let s=i.createBiquadFilter();s.type="highpass",s.frequency.value=1800;let r=i.createGain(),o=i.currentTime;r.gain.setValueAtTime(.9,o),r.gain.exponentialRampToValueAtTime(.001,o+.18),n.connect(s).connect(r).connect(e),n.start(o),n.stop(o+.18+.02)}function Ef(i,e){let t=Math.max(1,Math.floor(i.sampleRate*e)),n=i.createBuffer(1,t,i.sampleRate),s=n.getChannelData(0);for(let r=0;r<t;r++)s[r]=Math.random()*2-1;return n}var _x="mcgrot-torch-on";function yx(){if(!document.documentElement.classList.contains("touch"))return;let i=document.getElementById("hud-hint"),e=document.getElementById("title-hint"),t=document.getElementById("title-enter");i&&(i.textContent="drag \u2014 look"),e&&(e.textContent="drag to look \u2014 walk up to a resident, tap them"),t&&(t.textContent="TAP TO ENTER")}function cR(i){let e=document.getElementById("torch-toggle");if(!i)return;let t=localStorage.getItem(_x),n=t===null?!0:t==="true";function s(r){n=!!r,i.setToggle(n),e&&e.classList.toggle("active",n),localStorage.setItem(_x,String(n))}i.setToggle(n),e&&e.classList.toggle("active",n),e&&e.addEventListener("click",()=>s(!n)),window.addEventListener("keydown",r=>{r.code!=="KeyT"||ws(r)||s(!n)})}function vx({controls:i,torch:e,onEnter:t}){let n=document.getElementById("title-card"),s=document.getElementById("touch-forward");yx(),window.addEventListener("mcgrot:touchmodechange",yx),cR(e);function r(){!n||n.classList.contains("hidden")||(n.classList.add("hidden"),i.setEnabled(!0),t&&t())}if(n&&(n.addEventListener("click",r),n.addEventListener("touchend",o=>{o.preventDefault(),r()},{passive:!1})),s){let o=c=>{s.classList.toggle("active",c),i.setForward(c)};s.addEventListener("pointerdown",c=>{c.preventDefault();try{s.setPointerCapture?.(c.pointerId)}catch{}o(!0)});let a=()=>o(!1);s.addEventListener("pointerup",a),s.addEventListener("pointercancel",a),s.addEventListener("pointerleave",a)}return{enter:r}}var wf="p=",lR=.4,uR=.25,hR=1,bx=1e5;function Ex(i){return(i%360+360)%360}function Af(i){return Ex(i*180/Math.PI)}function dR(i){return i*Math.PI/180}function Tf({x:i,z:e,yaw:t}){let n=Math.round(Af(t))%360;return`#${wf}${i.toFixed(1)},${e.toFixed(1)},${n}`}function fR(i){if(typeof i!="string")return null;let e=i.replace(/^#/,"");if(!e.startsWith(wf))return null;let t=e.slice(wf.length).split(",");if(t.length!==3)return null;let[n,s,r]=t.map(Number);return![n,s,r].every(o=>Number.isFinite(o))||Math.abs(n)>bx||Math.abs(s)>bx?null:{x:n,z:s,yaw:dR(Ex(r))}}function Tx(i,e){let t=fR(typeof location>"u"?"":location.hash);if(!t)return null;if(i){let{point:n,distance:s}=i(t.x,t.z);if(n&&s>16){let r=16/s;t.x=n[0]+(t.x-n[0])*r,t.z=n[1]+(t.z-n[1])*r}}if(e){let[n,s]=e.resolveFree(t.x,t.z);t.x=n,t.z=s}return t}function wx({camera:i,isEnabled:e}){let t=0,n=null,s=null,r=null,o=0;function a(){return{x:i.position.x,z:i.position.z,yaw:i.rotation.y}}function c(){return typeof location>"u"?Tf(a()):`${location.origin}${location.pathname}${location.search}${Tf(a())}`}function l(){let h=a(),d=Math.round(Af(h.yaw))%360;n=h.x,s=h.z,r=d,o++;try{history.replaceState(null,"",Tf(h))}catch{}}function u(h){if(e&&!e()||(t+=h,t<lR))return;t=0;let d=a(),f=Math.round(Af(d.yaw))%360;if(n!==null){let p=Math.hypot(d.x-n,d.z-s),x=Math.abs(f-r);if(x>180&&(x=360-x),p<uR&&x<hR)return}l()}return{update:u,href:c,current:a,writeNow:l,writeCount:()=>o}}var Sx=2600;function Ax({moments:i}){let e=document.getElementById("link-toggle"),t=document.getElementById("link-toast"),n=document.getElementById("link-field"),s=null,r=null;function o(u,h){if(!t)return;n&&(n.value=h,n.style.display=h?"block":"none");let d=t.querySelector("#link-toast-label");d&&(d.textContent=u),t.style.display="block",s&&clearTimeout(s),s=setTimeout(()=>{t.style.display="none"},h?Sx*3:Sx)}function a(){let u=i.href();i.writeNow();let h=typeof navigator<"u"&&navigator.clipboard;return!h||!h.writeText?(r="manual",o("copy this link",u),Promise.resolve(r)):h.writeText(u).then(()=>(r="copied",o("link copied",""),r),()=>(r="manual",o("copy this link",u),r))}function c(u){u.code==="KeyL"&&a()}function l(u){u.preventDefault();try{e.setPointerCapture?.(u.pointerId)}catch{}}return window.addEventListener("keydown",c),e&&(e.addEventListener("pointerdown",l),e.addEventListener("pointerup",()=>a())),n&&(n.addEventListener("focus",()=>n.select()),n.addEventListener("click",()=>n.select())),{share:a,lastResult:()=>r,isToastOpen:()=>!!t&&t.style.display==="block"}}var _o=[{to:90,name:"The Foot of the Walk"},{to:1200,name:"Leith Walk"},{to:1/0,name:"Elm Row"}],pR=4.2,Rx=1.1,mR=2;function gR(i){for(let e=0;e<_o.length;e++)if(i<=_o[e].to)return e;return _o.length-1}function xR(i,e,t){let n=0,s=1/0,r=0;for(let o=1;o<i.length;o++){let[a,c]=i[o-1],[l,u]=i[o],h=l-a,d=u-c,f=Math.hypot(h,d),p=h*h+d*d,x=p>0?((e-a)*h+(t-c)*d)/p:0;x=x<0?0:x>1?1:x;let g=a+h*x,m=c+d*x,b=Math.hypot(e-g,t-m);b<s&&(s=b,r=n+f*x),n+=f}return r}function Cx({camera:i,streetLine:e,isEnabled:t}){let n=typeof document<"u"?document.getElementById("caption"):null,s=typeof document<"u"?document.getElementById("caption-text"):null,r=null,o=null,a=null,c=0,l=0,u=null;function h(f){u=f,l++,c=pR+Rx,n&&(s&&(s.textContent=f),n.style.display="block",n.classList.remove("fading"))}function d(f){let p=i.position.x,x=i.position.z;if(c>0&&(c-=f,n&&c<=Rx&&n.classList.add("fading"),c<=0&&(n&&(n.style.display="none",n.classList.remove("fading")),u=null)),t&&!t()){o=p,a=x;return}let g=o===null?0:Math.hypot(p-o,x-a);o=p,a=x;let m=gR(xR(e,p,x));if(r===null){r=m;return}m!==r&&(r=m,!(g>mR||g===0)&&h(_o[m].name))}return{update:d,state:()=>({band:r,name:_o[r===null?0:r].name,current:u,shown:l,timer:c}),bands:_o.map(f=>f.name)}}var _R=.28,yR=.035,vR=1,MR=24,Ix=.5,bR=1.46,Ht={label:"fine-litho",pressDay:.72,pressNight:.95,cell:2.6,halftoneDay:.35,halftoneNight:.1,highCut:.6,misreg:.7,sat:.85,shadowTint:[.97,.99,1.03],highTint:[1.04,1.01,.96],stockDay:.35,stockNight:.12,ink:[.06,.05,.05],paper:[.98,.96,.92],artefact:.05},Px=1,yo=i=>Number.isInteger(i)?i.toFixed(1):String(i),bu=i=>`vec3(${i.map(yo).join(", ")})`,SR=`
const float S_CELL      = ${yo(Ht.cell)};
const float S_HIGHCUT   = ${yo(Ht.highCut)};
const float S_MISREG    = ${yo(Ht.misreg)};
const float S_SAT       = ${yo(Ht.sat)};
const vec3  S_SHADOW    = ${bu(Ht.shadowTint)};
const vec3  S_HIGH      = ${bu(Ht.highTint)};
const vec3  S_INK       = ${bu(Ht.ink)};
const vec3  S_PAPER     = ${bu(Ht.paper)};
const float S_ARTEFACT  = ${yo(Ht.artefact)};
`,ER=`
attribute vec3 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`,TR=`
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
${SR}

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
  float n = hash21(vUv * uResolution + vec2(floor(uTime * ${MR.toFixed(1)}), 0.0));
  float midtone = 1.0 - abs(lum * 2.0 - 1.0);
  c += (n - 0.5) * uGrain * midtone * uStrength;

  gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
}
`;function Lx(i){let e=i.getDrawingBufferSize(new Te),t=new jr(e.x,e.y),n={tDiffuse:{value:t},uResolution:{value:new Te(e.x,e.y)},uStrength:{value:1},uVignette:{value:_R},uGrain:{value:yR},uGrade:{value:vR},uTime:{value:0},uStyle:{value:Px},uPress:{value:Ht.pressDay},uHalftone:{value:Ht.halftoneDay},uStock:{value:Ht.stockDay}};function s(x){return Math.min(1,Math.max(0,(x-Ix)/(bR-Ix)))}function r(x){return Ht.pressNight+(Ht.pressDay-Ht.pressNight)*s(x)}function o(x){return Ht.halftoneNight+(Ht.halftoneDay-Ht.halftoneNight)*s(x)}function a(x){return Ht.stockNight+(Ht.stockDay-Ht.stockNight)*s(x)}let c=new no({name:"McGrotPost",uniforms:n,vertexShader:ER,fragmentShader:TR,depthTest:!1,depthWrite:!1}),l=new pt;l.setAttribute("position",new Ut(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),l.setAttribute("uv",new Ut(new Float32Array([0,0,2,0,0,2]),2));let u=new Oe(l,c);u.frustumCulled=!1;let h=new Ks;h.add(u);let d=new ir,f=!0;function p(){let x=i.getDrawingBufferSize(new Te);x.x===t.image.width&&x.y===t.image.height||(t.dispose(),t=new jr(x.x,x.y),n.tDiffuse.value=t,n.uResolution.value.set(x.x,x.y))}return{setTime(x){n.uTime.value=x},resize:p,setEnabled(x){f=!!x},isEnabled(){return f},setStrength(x){n.uStrength.value=x},getStrength(){return n.uStrength.value},styleName:Ht.label,styleShipped:Px,setStyleStrength(x){n.uStyle.value=x},getStyleStrength(){return n.uStyle.value},stylePress(x){return x===void 0?{day:Ht.pressDay,night:Ht.pressNight,exposure:i.toneMappingExposure,press:n.uPress.value,halftone:n.uHalftone.value,stock:n.uStock.value}:{press:r(x),halftone:o(x),stock:a(x)}},render(x,g){i.render(x,g),f&&(n.uStyle.value>0&&(n.uPress.value=r(i.toneMappingExposure),n.uHalftone.value=o(i.toneMappingExposure),n.uStock.value=a(i.toneMappingExposure)),i.copyFramebufferToTexture(t),i.render(h,d))}}}var Nx="mcgrot.journal.v1";function wR(){try{let i=localStorage.getItem(Nx);if(!i)return[];let e=JSON.parse(i);return Array.isArray(e&&e.entries)?e.entries:[]}catch{return[]}}function AR(i){try{localStorage.setItem(Nx,JSON.stringify({entries:i}))}catch{}}function Rf(i){if(!i||!Array.isArray(i))return 0;let e=0;for(let t of i)t.comic&&t.comic.audio&&e++;return e}function Dx({assets:i,npcs:e,litter:t,canOpen:n,anchorsEnabled:s}){let r=wR(),o=new Set(r.map(N=>`${N.kind}:${N.id}`)),a=Rf(e),c=t&&Array.isArray(t.items)?t.items.length:0,l=v0(Na),u=new Map((i&&i.catalog&&i.catalog.comics||[]).map(N=>[N.id,N])),h=document.getElementById("journal-panel"),d=document.getElementById("journal-toggle"),f=document.getElementById("journal-close"),p=document.getElementById("journal-counts"),x=document.getElementById("journal-list"),g=!1;function m(N,z){return o.has(`${z}:${N}`)}function b(N,z){if(!N||z!=="heard"&&z!=="found"&&z!=="anchor")return!1;let F=`${z}:${N}`;return o.has(F)?!1:(o.add(F),r.push({id:N,kind:z}),AR(r),S(),!0)}function M(){let N=0,z=0,F=0;for(let k of r)k.kind==="heard"?N++:k.kind==="found"?z++:k.kind==="anchor"&&F++;return{heard:N,found:z,denominator:a,foundTotal:c,anchorsFound:F,anchorsTotal:l}}function _(){return r.filter(N=>N.kind!=="anchor").slice().reverse()}function S(){if(p){let{heard:z,found:F,anchorsFound:k}=M();p.textContent=s?`${z} of ${a} heard \u2014 more being unearthed  \xB7  ${F}${c?` of ${c}`:""} found  \xB7  ${k} of ${l} anchors`:`${z} of ${a} heard \u2014 more being unearthed  \xB7  ${F}${c?` of ${c}`:""} found`}if(!x)return;x.textContent="";let N=document.createDocumentFragment();for(let z of _()){let F=u.get(z.id),k=F&&F.title||z.id,G=F&&F.npc&&F.npc.name,J=document.createElement("div");J.className="journal-entry";let oe=document.createElement("span");oe.className="journal-entry-kind",oe.textContent=z.kind==="heard"?"HEARD":"FOUND";let de=document.createElement("span");de.className="journal-entry-text",de.textContent=G?`${k} \u2014 ${G}`:k,J.appendChild(oe),J.appendChild(de),N.appendChild(J)}x.appendChild(N)}function y(N){g=!!N,h&&(h.style.display=g?"flex":"none")}function T(){!g&&n&&!n()||y(!g)}function v(){return g}function w(N){if(N.code==="Escape"){g&&y(!1);return}ws(N)||N.code==="KeyJ"&&T()}function R(N){N.preventDefault();try{d.setPointerCapture?.(N.pointerId)}catch{}}function A(){T()}window.addEventListener("keydown",w),d&&(d.addEventListener("pointerdown",R),d.addEventListener("pointerup",A)),f&&f.addEventListener("click",()=>y(!1));function C(){window.removeEventListener("keydown",w),d&&(d.removeEventListener("pointerdown",R),d.removeEventListener("pointerup",A))}return S(),{has:m,credit:b,counts:M,list:_,isOpen:v,setOpen:y,toggle:T,dispose:C}}var Ps=1.7,Cf=150,Jn=1/60,RR=5,Fx=12,Ux=40,CR=4e3,Ox=[{id:"north-150-close",chainage:150,side:"east",distance:"close"},{id:"north-250-far",chainage:250,side:"west",distance:"far"},{id:"elm-row-hero",chainage:1300,side:"west",distance:"far"},{id:"mid-550-close",chainage:550,side:"east",distance:"close"},{id:"mid-805-far",chainage:805,side:"west",distance:"far"},{id:"fascia-close",chainage:300,side:"east",distance:"close"},{id:"foot-1500-far",chainage:1500,side:"west",distance:"far"},{id:"skyline",custom:!0,camera:{x:-293.81,y:15,z:633.95},lookAt:{x:-317.4,y:6,z:683.62}}],Bx=[{id:"lamp-hero-night",custom:!0,camera:{x:-284.62,y:9.7,z:623.92},lookAt:{x:-303.93,y:12.99,z:664.57}}];function zx(i,e){for(let t=0;t<i.length;t++)e^=i[t],e=Math.imul(e,16777619)>>>0;return e}function Ga(i,e){let t=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);return zx(t,e)}function Va(i,e){for(let t=0;t<i.length;t++)e=zx([i.charCodeAt(t)&255],e);return e}function IR({scene:i,world:e,npcs:t}){let n=2166136261,s=e.group.getObjectByName("buildings");s&&s.geometry&&(n=Va("buildings",n),n=Ga(s.geometry.attributes.position.array,n));let r=[];i.traverse(o=>{o.isInstancedMesh&&r.push(o)}),r.sort((o,a)=>(o.name||"").localeCompare(a.name||""));for(let o of r)n=Va(`inst:${o.name||"unnamed"}`,n),n=Ga(o.instanceMatrix.array,n);if(t&&Array.isArray(t.npcs)&&t.npcs.length){let o=new Float32Array(t.npcs.length*3);t.npcs.forEach((a,c)=>{let l=a.group.position;o[c*3]=l.x,o[c*3+1]=l.y,o[c*3+2]=l.z}),n=Va("npcs",n),n=Ga(o,n)}return(n>>>0).toString(16).padStart(8,"0")}function PR({scene:i,leithers:e}){let t=2166136261;if(e&&Array.isArray(e.walkers)&&e.walkers.length){let n=new Float32Array(e.walkers.length*3);e.walkers.forEach((s,r)=>{n[r*3]=s.s,n[r*3+1]=s.side,n[r*3+2]=s.dir}),t=Va("leithers-realtime",t),t=Ga(n,t)}for(let n of["birds","vermin"]){let s=i.getObjectByName(n);if(!s)continue;let r=0;s.traverse(o=>{o.isInstancedMesh&&(t=Va(`${n}-realtime-${r++}`,t),t=Ga(o.instanceMatrix.array,t))})}return(t>>>0).toString(16).padStart(8,"0")}function LR(i,e){return new Promise(t=>{let s=(Date.now?Date.now():0)+e;function r(){if(!(i&&i.pages||[]).some(c=>c&&c.loaded&&c.mesh&&!(c.mesh.material.map&&c.mesh.material.map.image&&c.mesh.material.map.image.complete))||Date.now()>s){t();return}setTimeout(r,20)}r()})}function Hx(i){let{camera:e,world:t,npcs:n,leithers:s,litter:r,shopfronts:o,controls:a,proximityAudio:c,interact:l,renderer:u,scene:h,sky:d,atmosphere:f,torch:p,stepFrame:x,updateFrame:g,updaters:m,setAutoAnimate:b,DPR_CAP:M,ambience:_,post:S,renderNow:y,setPostProcessing:T,journal:v,countVendorsWithAudio:w,vendorList:R,anchorsEnabled:A,anchorSet:C,computeVendorLayout:N,moments:z,shareUi:F,lamps:k,legs:G,ending:J,characters:oe,captions:de,gullet:V}=i,K=[],he=console.error.bind(console);console.error=(...ue)=>{K.push(ue.map(pe=>pe&&pe.message||String(pe)).join(" ")),he(...ue)},window.addEventListener("error",ue=>{K.push(ue.message||String(ue.error||ue))}),window.addEventListener("unhandledrejection",ue=>{K.push("unhandledrejection: "+(ue.reason&&ue.reason.message||ue.reason))});async function ge(ue,pe,D,Le,De={}){let P=De.eyeY!=null?De.eyeY:t.groundHeight?t.groundHeight(ue,pe)+Ps:Ps,E=De.lookY!=null?De.lookY:t.groundHeight?t.groundHeight(D,Le)+Ps:Ps;e.position.set(ue,P,pe),e.lookAt(D,E,Le);for(let L=0;L<Cf;L++)try{g(Jn,L*Jn)}catch{}e.position.set(ue,P,pe),e.lookAt(D,E,Le),x(Jn,Cf*Jn),await LR(o,CR);for(let L=0;L<RR;L++)await new Promise(U=>setTimeout(U,0)),e.position.set(ue,P,pe),e.lookAt(D,E,Le),x(Jn,(Cf+1+L)*Jn)}async function be(ue,pe,D){let{point:Le,tangent:De}=ad(t.streetLine,ue),P=-De[1],E=De[0],L=pe==="east"?1:-1,U=D==="close"?L:-L,B=Le[0]+P*Fx*U,W=Le[1]+E*Fx*U,ne=B+P*L*Ux,q=W+E*L*Ux;await ge(B,W,ne,q);let re=t.groundHeight?t.groundHeight(B,W)+Ps:Ps;return{chainage:ue,side:pe,distance:D,position:{x:B,y:re,z:W}}}async function Z(ue,pe=4){let{point:D,tangent:Le}=ad(t.streetLine,ue),De=D[0],P=D[1],E=De+Le[0]*pe,L=P+Le[1]*pe,U=t.groundHeight?t.groundHeight(De,P)+Ps:Ps,B=t.groundHeight?t.groundHeight(E,L)+.3:.3;return await ge(De,P,E,L,{lookY:B}),{chainage:ue,position:{x:De,y:U,z:P}}}async function te(ue){let pe=Ox.find(D=>D.id===ue)||Bx.find(D=>D.id===ue);if(!pe)throw new Error(`[debug] unknown bookmark: ${ue}`);return pe.custom?(await ge(pe.camera.x,pe.camera.z,pe.lookAt.x,pe.lookAt.z,{eyeY:pe.camera.y,lookY:pe.lookAt.y}),pe):(await be(pe.chainage,pe.side,pe.distance),pe)}function $(ue,pe){e.lookAt(ue,e.position.y,pe)}function _e(ue){f.setTime(ue)}function Me(ue){f.setWeather(ue)}function Se(ue){f.setWeatherSchedule(ue)}function fe(ue){f.setRate(ue)}function we(ue){document.documentElement.classList.toggle("touch",!!ue),window.dispatchEvent(new CustomEvent("mcgrot:touchmodechange"))}function ee(ue){u.setPixelRatio(ue)}function ce(ue=60){let pe=[];for(let De=0;De<ue;De++){let P=performance.now();x(Jn,De*Jn),pe.push(performance.now()-P)}pe.sort((De,P)=>De-P);let D=pe.reduce((De,P)=>De+P,0)/pe.length,Le=pe[Math.min(pe.length-1,Math.floor(pe.length*.95))];return{meanMs:D,p95Ms:Le,pixelRatio:u.getPixelRatio(),frames:ue}}function X(ue,pe=0){if(!(ue<=0)){for(let D=0;D<ue-1;D++)try{g(Jn,pe+D*Jn)}catch{}try{x(Jn,pe+(ue-1)*Jn)}catch{}}}function se(){x(Jn,0);let ue=u.info.render,pe=f.state();return{drawCalls:ue.calls,triangles:ue.triangles,geomHash:IR({scene:h,world:t,npcs:n}),realtimeHash:PR({scene:h,leithers:s}),updaterCount:m.length,updaterNames:m.map(D=>D.name),consoleErrors:K.slice(),time:pe.hours,rate:pe.rate,weather:pe.weather,weatherTransition:pe.weatherTransition,exposure:pe.exposure,fogDensity:pe.fogDensity,rain:pe.rain,wetness:pe.wetness,skyFogLinked:!!(d&&t.fog&&d.uniforms.uFog.value===t.fog.color)}}function xe(ue){l&&l.setReadAlong(ue)}function Ne(ue){window.__mcgrotForceDaySeed=ue==null?void 0:ue>>>0}function Ce(ue){return N(R,t.streetLine,!!ue)}return{camera:e,world:t,npcs:n,leithers:s,litter:r,shopfronts:o,controls:a,proximityAudio:c,interact:l,renderer:u,scene:h,journal:v,countVendorsWithAudio:w,captions:de,gullet:V,stepFrame:x,stepFrames:X,goto:be,gotoBookmark:te,torchGroundPose:Z,face:$,setTime:_e,setWeather:Me,setWeatherSchedule:Se,setRate:fe,setReadAlong:xe,setDaySeed:Ne,anchorsEnabled:A,anchorSet:C,characters:oe,anchorLayout:Ce,moments:z,shareUi:F,lamps:k,legs:G,ending:J,setTouchMode:we,setPixelRatio:ee,measureFrameTiming:ce,torch:p,DPR_CAP:M,ambience:_,post:S,renderNow:y,setPostProcessing:T,setPostStrength:ue=>S.setStrength(ue),setStyleStrength:ue=>S.setStyleStrength(ue),getStyleStrength:()=>S.getStyleStrength(),styleName:S.styleName,styleShipped:S.styleShipped,stylePress:ue=>S.stylePress(ue),invariants:se,atmosphereState:()=>f.state(),atmosphereNudge:(ue,pe,D)=>f.nudge(ue,pe,D),atmosphereIsSuspended:()=>f.isSuspended(),bookmarks:Ox,nightBookmarks:Bx,pauseAuto:()=>b(!1),resumeAuto:()=>b(!0)}}var If=2;async function NR(){let i=document.getElementById("scene"),e=["localhost","127.0.0.1"].includes(location.hostname),t=new Jl({canvas:i,antialias:!0,preserveDrawingBuffer:e});t.setPixelRatio(Math.min(window.devicePixelRatio||1,If)),t.setSize(window.innerWidth,window.innerHeight),t.toneMapping=ga,t.toneMappingExposure=1.46,t.info.autoReset=!1;let n=new Ks,s=new sn(70,window.innerWidth/window.innerHeight,.1,1e3);n.add(s);let r=Lx(t),o=await Vm(),a=m0(o.leith);n.add(a.group),n.fog=a.fog;let c=Cg(a.fog.color,a.streetLine);s.add(c.mesh),zg(a,n);let l=g0(s),u=Og(o,a,n),h=gx(s);n.add(h.object);let d=xx(),f=Dg({scene:n,renderer:t,world:a,sky:c,torch:l,windows:u,rain:h,ambience:d}),p=a.streetLine[0]||[0,0],x=a.streetLine[1]||[p[0],p[1]+1],g={x:p[0],z:p[1],yaw:Math.atan2(-(x[0]-p[0]),-(x[1]-p[1]))},m=Tx(a.nearestStreetPoint,a.collision)||g,b=_0(s,i,{nearestStreetPoint:a.nearestStreetPoint,spawn:m,groundHeight:a.groundHeight,collision:a.collision});b.setEnabled(!1);let M=T0(o,a,n,s),_=ux(o,a,n,M.npcs),S=fx(o,a,n),y=U0(o,a,n);Qm(a,n),kg(a,n);let T=qg(a,o.leith,n),v=Qg(a,n);ex(a,o.leith,n),Sg(o,a,n),Rg(o,a,n),rx(o,a,n);let w=ig(o,a,n,M);_.useArchetypes(w);let R=Y0(a,n);R.onArcFlash=()=>d.triggerCrackle();let A=hg(o,a,n),C=pg({scene:n,camera:s,poles:R.poles});f.setLamps(C);let N=gg({camera:s,world:a,atmosphere:f,seed:au()}),z=xg({camera:s,world:a,legs:N,atmosphere:f,ambience:d,controls:b,renderer:t});window.addEventListener("keydown",X=>{X.code!=="Enter"||ws(X)||(z.state().phase==="ended"?z.resume():z.begin())});let F=!1,k=!1,G=()=>d.setDucked(F||k),J=A.reader?[...M.npcs,A.reader]:M.npcs,oe=z0({camera:s,npcs:J,assets:o,onActiveChange:X=>{k=X>0,G()}}),de,V=Dx({assets:o,npcs:M.npcs,litter:S,canOpen:()=>!de.isOpen(),anchorsEnabled:M.anchorsEnabled});de=k0({assets:o,npcs:J,camera:s,controls:b,proximityAudio:oe,onReadingChange:X=>{F=X,G()},litter:S,leithers:_,journal:V});let K=!1,he=wx({camera:s,isEnabled:()=>K}),ge=Cx({camera:s,streetLine:a.streetLine,isEnabled:()=>K}),be=Ax({moments:he}),Z=document.getElementById("hud-day");Z&&(Z.textContent=O0(fr(),cu(),f.state().weather)),vx({controls:b,torch:l,onEnter:()=>{let X=null;try{if(window.__mcgrotForceAudioContextError&&["localhost","127.0.0.1"].includes(location.hostname))throw new Error("[debug] forced AudioContext setup failure");let Ne=window.AudioContext||window.webkitAudioContext;if(X=Ne?new Ne:null,X){rr.setContext(X);let Ce=X.createBufferSource();Ce.buffer=X.createBuffer(1,1,X.sampleRate),Ce.connect(X.destination),Ce.start(0)}}catch(Ne){console.warn("[title] shared AudioContext setup failed, falling back to per-subsystem contexts:",Ne),X=null}d.start(X),oe.resume(),K=!0;let[se,xe]=a.collision.resolveFree(s.position.x,s.position.z);s.position.x=se,s.position.z=xe}}),window.addEventListener("resize",te);function te(){s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),t.setPixelRatio(Math.min(window.devicePixelRatio||1,If)),t.setSize(window.innerWidth,window.innerHeight),r.resize()}let $=[{name:"controls",update:X=>b.update(X)},{name:"npcs",update:(X,se)=>M.update(X,se)},{name:"leithers",update:(X,se)=>_.update(X,se)},{name:"litter",update:()=>S.update(s.position)},{name:"shopfronts",update:()=>y.update(s.position)},{name:"sky",update:(X,se)=>c.update(se)},{name:"atmosphere",update:(X,se)=>f.update(X,se)},{name:"rain",update:(X,se)=>h.update(X,se)},{name:"birds",update:(X,se)=>T.update(X,se)},{name:"vermin",update:(X,se)=>v.update(X,se)},{name:"scenery",update:(X,se)=>R.update(X,se)},{name:"lamps",update:()=>C.update()},{name:"legs",update:()=>N.update()},{name:"ending",update:X=>z.update(X)},{name:"interact",update:X=>de.update(X)},{name:"proximityAudio",update:(X,se)=>oe.update(X,se)},{name:"torch",update:(X,se)=>l.update(se)},{name:"post",update:(X,se)=>r.setTime(se)},{name:"moments",update:X=>he.update(X)},{name:"captions",update:X=>ge.update(X)}];function _e(X,se){for(let xe of $)xe.update(X,se)}function Me(){t.info.reset(),r.render(n,s)}function Se(X,se){_e(X,se),Me()}function fe(X){r.setEnabled(X)}let we=performance.now(),ee=!0;function ce(){if(!ee)return;requestAnimationFrame(ce);let X=performance.now(),se=Math.min((X-we)/1e3,.1);we=X,Se(se,X/1e3)}e&&window.__mcgrotFreezeAtBoot||ce(),["localhost","127.0.0.1"].includes(location.hostname)&&(window.__mcgrotDebug=Hx({camera:s,world:a,npcs:M,leithers:_,litter:S,shopfronts:y,controls:b,proximityAudio:oe,interact:de,renderer:t,scene:n,sky:c,atmosphere:f,torch:l,DPR_CAP:If,ambience:d,post:r,journal:V,countVendorsWithAudio:Rf,vendorList:M.list,anchorsEnabled:M.anchorsEnabled,anchorSet:Na,computeVendorLayout:xd,moments:he,shareUi:be,lamps:C,legs:N,ending:z,characters:w,captions:ge,gullet:A,stepFrame:Se,renderNow:Me,setPostProcessing:fe,updateFrame:_e,updaters:$,setAutoAnimate(X){ee=X,b.setYFollow(X),X&&(we=performance.now(),requestAnimationFrame(ce))}}))}NR().catch(i=>{console.error("McGrot Walk failed to start:",i)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
