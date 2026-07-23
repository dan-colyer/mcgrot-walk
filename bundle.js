(()=>{var cd=0,Fh=1,ld=2;var Uo=1,hd=2,wr=3,bn=0,cn=1,Lt=2,di=0,ys=1,Fo=2,Oh=3,Bh=4,ud=5;var Yi=100,fd=101,dd=102,pd=103,md=104,gd=200,xd=201,_d=202,yd=203,Ga=204,Va=205,vd=206,Md=207,Sd=208,bd=209,Ed=210,Td=211,Ad=212,wd=213,Rd=214,Wa=0,Xa=1,qa=2,vs=3,Ya=4,Za=5,Ka=6,Ja=7,Ec=0,Cd=1,Id=2,Qn=0,zh=1,Hh=2,kh=3,Oo=4,Gh=5,Vh=6,Wh=7,yh="attached",Pd="detached",Xh=300,es=301,Ls=302,Tc=303,Ac=304,Bo=306,Vn=1e3,kn=1001,dr=1002,Xt=1003,wc=1004;var Ns=1005;var Bt=1006,Rr=1007;var ei=1008;var wn=1009,qh=1010,Yh=1011,Cr=1012,Rc=1013,ti=1014,Fn=1015,pi=1016,Cc=1017,Ic=1018,Ir=1020,Zh=35902,Kh=35899,Jh=1021,$h=1022,On=1023,li=1026,ts=1027,Pc=1028,Lc=1029,ns=1030,Nc=1031;var Dc=1033,zo=33776,Ho=33777,ko=33778,Go=33779,Uc=35840,Fc=35841,Oc=35842,Bc=35843,zc=36196,Hc=37492,kc=37496,Gc=37488,Vc=37489,Vo=37490,Wc=37491,Xc=37808,qc=37809,Yc=37810,Zc=37811,Kc=37812,Jc=37813,$c=37814,jc=37815,Qc=37816,el=37817,tl=37818,nl=37819,il=37820,sl=37821,rl=36492,ol=36494,al=36495,cl=36283,ll=36284,Wo=36285,hl=36286;var Ms=2300,Ss=2301,ka=2302,vh=2303,Mh=2400,Sh=2401,bh=2402,Ld=2500;var jh=0,Xo=1,Pr=2,Nd=3200;var qo=0,Dd=1,Fi="",nt="srgb",vn="srgb-linear",Qr="linear",_t="srgb";var gs=7680;var Eh=519,Ud=512,Fd=513,Od=514,ul=515,Bd=516,zd=517,fl=518,Hd=519,$a=35044;var Qh="300 es",Jn=2e3,pr=2001;function xg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _g(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kd(){let i=mr("canvas");return i.style.display="block",i}var xf={},gr=null;function eo(...i){let e="THREE."+i.shift();gr?gr("log",e,...i):console.log(e,...i)}function Gd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Oe(...i){i=Gd(i);let e="THREE."+i.shift();if(gr)gr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ke(...i){i=Gd(i);let e="THREE."+i.shift();if(gr)gr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function _s(...i){let e=i.join(" ");e in xf||(xf[e]=!0,Oe(...i))}function Vd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Wd={[Wa]:Xa,[qa]:Ka,[Ya]:Ja,[vs]:Za,[Xa]:Wa,[Ka]:qa,[Ja]:Ya,[Za]:vs},hi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_f=1234567,Kr=Math.PI/180,bs=180/Math.PI;function Gn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function ht(i,e,t){return Math.max(e,Math.min(t,i))}function eu(i,e){return(i%e+e)%e}function yg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function vg(i,e,t){return i!==e?(t-i)/(e-i):0}function Jr(i,e,t){return(1-t)*i+t*e}function Mg(i,e,t,n){return Jr(i,e,1-Math.exp(-t*n))}function Sg(i,e=1){return e-Math.abs(eu(i,e*2)-e)}function bg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Eg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Tg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ag(i,e){return i+Math.random()*(e-i)}function wg(i){return i*(.5-Math.random())}function Rg(i){i!==void 0&&(_f=i);let e=_f+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cg(i){return i*Kr}function Ig(i){return i*bs}function Pg(i){return(i&i-1)===0&&i!==0}function Lg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ng(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Dg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*d,a*h,a*l);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Kn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var is={DEG2RAD:Kr,RAD2DEG:bs,generateUUID:Gn,clamp:ht,euclideanModulo:eu,mapLinear:yg,inverseLerp:vg,lerp:Jr,damp:Mg,pingpong:Sg,smoothstep:bg,smootherstep:Eg,randInt:Tg,randFloat:Ag,randFloatSpread:wg,seededRandom:Rg,degToRad:Cg,radToDeg:Ig,isPowerOfTwo:Pg,ceilPowerOfTwo:Lg,floorPowerOfTwo:Ng,setQuaternionFromProperEuler:Dg,normalize:Mt,denormalize:Kn},_e=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(u!==x||c!==f||l!==d||h!==m){let g=c*f+l*d+h*m+u*x;g<0&&(f=-f,d=-d,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){let S=Math.acos(g),M=Math.sin(S);p=Math.sin(p*S)/M,a=Math.sin(a*S)/M,c=c*p+f*a,l=l*p+d*a,h=h*p+m*a,u=u*p+x*a}else{c=c*p+f*a,l=l*p+d*a,h=h*p+m*a,u=u*p+x*a;let S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+h*u+c*d-l*f,e[t+1]=c*m+h*f+l*u-a*d,e[t+2]=l*m+h*d+a*f-c*u,e[t+3]=h*m-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"YZX":this._x=f*h*u+l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u-f*d*m;break;case"XZY":this._x=f*h*u-l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u+f*d*m;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gl.copy(this).projectOnVector(e),this.sub(Gl)}reflect(e){return this.sub(Gl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Gl=new L,yf=new Nt,et=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],x=s[0],g=s[3],p=s[6],S=s[1],M=s[4],y=s[7],w=s[2],E=s[5],T=s[8];return r[0]=o*x+a*S+c*w,r[3]=o*g+a*M+c*E,r[6]=o*p+a*y+c*T,r[1]=l*x+h*S+u*w,r[4]=l*g+h*M+u*E,r[7]=l*p+h*y+u*T,r[2]=f*x+d*S+m*w,r[5]=f*g+d*M+m*E,r[8]=f*p+d*y+m*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,m=t*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return _s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vl.makeScale(e,t)),this}rotate(e){return _s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vl.makeRotation(-e)),this}translate(e,t){return _s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Vl=new et,vf=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mf=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ug(){let i={enabled:!0,workingColorSpace:vn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_t&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(s.r=fr(s.r),s.g=fr(s.g),s.b=fr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fi?Qr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return _s("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return _s("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vn]:{primaries:e,whitePoint:n,transfer:Qr,toXYZ:vf,fromXYZ:Mf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nt},outputColorSpaceConfig:{drawingBufferColorSpace:nt}},[nt]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:vf,fromXYZ:Mf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nt}}}),i}var lt=Ug();function Ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Zs,ja=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zs===void 0&&(Zs=mr("canvas")),Zs.width=e.width,Zs.height=e.height;let s=Zs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Zs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=mr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ai(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ai(t[n]/255)*255):t[n]=Ai(t[n]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Fg=0,xr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=Gn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wl(s[o].image)):r.push(Wl(s[o]))}else r=Wl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Wl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ja.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}var Og=0,Xl=new L,Qt=class i extends hi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=kn,s=kn,r=Bt,o=ei,a=On,c=wn,l=i.DEFAULT_ANISOTROPY,h=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=Gn(),this.name="",this.source=new xr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xl).x}get height(){return this.source.getSize(Xl).y}get depth(){return this.source.getSize(Xl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vn:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case dr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vn:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case dr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=Xh;Qt.DEFAULT_ANISOTROPY=1;var St=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,y=(d+1)/2,w=(p+1)/2,E=(h+f)/4,T=(u+x)/4,_=(m+g)/4;return M>y&&M>w?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=E/n,r=T/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=_/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=T/r,s=_/r),this.set(n,s,r,t),this}let S=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(u-x)/S,this.z=(f-h)/S,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qa=class extends hi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Qt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new xr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dn=class extends Qa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},to=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ec=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ze=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,c,l,h,u,f,d,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,f,d,m,x,g)}set(e,t,n,s,r,o,a,c,l,h,u,f,d,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ks.setFromMatrixColumn(e,0).length(),r=1/Ks.setFromMatrixColumn(e,1).length(),o=1/Ks.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,m=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+m*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=m+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,m=l*h,x=l*u;t[0]=f+x*a,t[4]=m*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-m,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,m=l*h,x=l*u;t[0]=f-x*a,t[4]=-o*u,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,m=a*h,x=a*u;t[0]=c*h,t[4]=m*l-d,t[8]=f*l+x,t[1]=c*u,t[5]=x*l+f,t[9]=d*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,m=a*c,x=a*l;t[0]=c*h,t[4]=x-f*u,t[8]=m*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+m,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*c,d=o*l,m=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bg,e,zg)}lookAt(e,t,n){let s=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),ki.crossVectors(n,Ln),ki.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),ki.crossVectors(n,Ln)),ki.normalize(),la.crossVectors(Ln,ki),s[0]=ki.x,s[4]=la.x,s[8]=Ln.x,s[1]=ki.y,s[5]=la.y,s[9]=Ln.y,s[2]=ki.z,s[6]=la.z,s[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],S=n[3],M=n[7],y=n[11],w=n[15],E=s[0],T=s[4],_=s[8],b=s[12],C=s[1],I=s[5],N=s[9],W=s[13],X=s[2],D=s[6],H=s[10],P=s[14],B=s[3],G=s[7],Q=s[11],te=s[15];return r[0]=o*E+a*C+c*X+l*B,r[4]=o*T+a*I+c*D+l*G,r[8]=o*_+a*N+c*H+l*Q,r[12]=o*b+a*W+c*P+l*te,r[1]=h*E+u*C+f*X+d*B,r[5]=h*T+u*I+f*D+d*G,r[9]=h*_+u*N+f*H+d*Q,r[13]=h*b+u*W+f*P+d*te,r[2]=m*E+x*C+g*X+p*B,r[6]=m*T+x*I+g*D+p*G,r[10]=m*_+x*N+g*H+p*Q,r[14]=m*b+x*W+g*P+p*te,r[3]=S*E+M*C+y*X+w*B,r[7]=S*T+M*I+y*D+w*G,r[11]=S*_+M*N+y*H+w*Q,r[15]=S*b+M*W+y*P+w*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],x=e[7],g=e[11],p=e[15],S=c*d-l*f,M=a*d-l*u,y=a*f-c*u,w=o*d-l*h,E=o*f-c*h,T=o*u-a*h;return t*(x*S-g*M+p*y)-n*(m*S-g*w+p*E)+s*(m*M-x*w+p*T)-r*(m*y-x*E+g*T)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],x=e[13],g=e[14],p=e[15],S=t*a-n*o,M=t*c-s*o,y=t*l-r*o,w=n*c-s*a,E=n*l-r*a,T=s*l-r*c,_=h*x-u*m,b=h*g-f*m,C=h*p-d*m,I=u*g-f*x,N=u*p-d*x,W=f*p-d*g,X=S*W-M*N+y*I+w*C-E*b+T*_;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/X;return e[0]=(a*W-c*N+l*I)*D,e[1]=(s*N-n*W-r*I)*D,e[2]=(x*T-g*E+p*w)*D,e[3]=(f*E-u*T-d*w)*D,e[4]=(c*C-o*W-l*b)*D,e[5]=(t*W-s*C+r*b)*D,e[6]=(g*y-m*T-p*M)*D,e[7]=(h*T-f*y+d*M)*D,e[8]=(o*N-a*C+l*_)*D,e[9]=(n*C-t*N-r*_)*D,e[10]=(m*E-x*y+p*S)*D,e[11]=(u*y-h*E-d*S)*D,e[12]=(a*b-o*I-c*_)*D,e[13]=(t*I-n*b+s*_)*D,e[14]=(x*M-m*w-g*S)*D,e[15]=(h*w-u*M+f*S)*D,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,m=r*u,x=o*h,g=o*u,p=a*u,S=c*l,M=c*h,y=c*u,w=n.x,E=n.y,T=n.z;return s[0]=(1-(x+p))*w,s[1]=(d+y)*w,s[2]=(m-M)*w,s[3]=0,s[4]=(d-y)*E,s[5]=(1-(f+p))*E,s[6]=(g+S)*E,s[7]=0,s[8]=(m+M)*T,s[9]=(g-S)*T,s[10]=(1-(f+x))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ks.set(s[0],s[1],s[2]).length(),a=Ks.set(s[4],s[5],s[6]).length(),c=Ks.set(s[8],s[9],s[10]).length();r<0&&(o=-o),qn.copy(this);let l=1/o,h=1/a,u=1/c;return qn.elements[0]*=l,qn.elements[1]*=l,qn.elements[2]*=l,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=u,qn.elements[9]*=u,qn.elements[10]*=u,t.setFromRotationMatrix(qn),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=Jn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),m,x;if(c)m=r/(o-r),x=o*r/(o-r);else if(a===Jn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===pr)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Jn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s),m,x;if(c)m=1/(o-r),x=o/(o-r);else if(a===Jn)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===pr)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ks=new L,qn=new Ze,Bg=new L(0,0,0),zg=new L(1,1,1),ki=new L,la=new L,Ln=new L,Sf=new Ze,bf=new Nt,jt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bf.setFromEuler(this),this.setFromQuaternion(bf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};jt.DEFAULT_ORDER="XYZ";var no=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Hg=0,Ef=new L,Js=new Nt,yi=new Ze,ha=new L,Or=new L,kg=new L,Gg=new Nt,Tf=new L(1,0,0),Af=new L(0,1,0),wf=new L(0,0,1),Rf={type:"added"},Vg={type:"removed"},$s={type:"childadded",child:null},ql={type:"childremoved",child:null},It=class i extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new jt,n=new Nt,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ze},normalMatrix:{value:new et}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new no,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(Tf,e)}rotateY(e){return this.rotateOnAxis(Af,e)}rotateZ(e){return this.rotateOnAxis(wf,e)}translateOnAxis(e,t){return Ef.copy(e).applyQuaternion(this.quaternion),this.position.add(Ef.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tf,e)}translateY(e){return this.translateOnAxis(Af,e)}translateZ(e){return this.translateOnAxis(wf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ha.copy(e):ha.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Or,ha,this.up):yi.lookAt(ha,Or,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),Js.setFromRotationMatrix(yi),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rf),$s.child=e,this.dispatchEvent($s),$s.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vg),ql.child=e,this.dispatchEvent(ql),ql.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rf),$s.child=e,this.dispatchEvent($s),$s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,kg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,Gg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};It.DEFAULT_UP=new L(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rt=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wg={type:"move"},_r=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},ua={h:0,s:0,l:0};function Yl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var we=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=eu(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Yl(o,r,e+1/3),this.g=Yl(o,r,e),this.b=Yl(o,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=nt){function n(r){r!==void 0&&parseFloat(r)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nt){let n=Xd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nt){return lt.workingToColorSpace(dn.copy(this),e),Math.round(ht(dn.r*255,0,255))*65536+Math.round(ht(dn.g*255,0,255))*256+Math.round(ht(dn.b*255,0,255))}getHexString(e=nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(dn.copy(this),t);let n=dn.r,s=dn.g,r=dn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=nt){lt.workingToColorSpace(dn.copy(this),e);let t=dn.r,n=dn.g,s=dn.b;return e!==nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(ua);let n=Jr(Gi.h,ua.h,t),s=Jr(Gi.s,ua.s,t),r=Jr(Gi.l,ua.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new we;we.NAMES=Xd;var io=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new we(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var so=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jt,this.environmentIntensity=1,this.environmentRotation=new jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Yn=new L,vi=new L,Zl=new L,Mi=new L,js=new L,Qs=new L,Cf=new L,Kl=new L,Jl=new L,$l=new L,jl=new St,Ql=new St,eh=new St,Ti=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Yn.subVectors(e,t),s.cross(Yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Yn.subVectors(s,t),vi.subVectors(n,t),Zl.subVectors(e,t);let o=Yn.dot(Yn),a=Yn.dot(vi),c=Yn.dot(Zl),l=vi.dot(vi),h=vi.dot(Zl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,m=(o*h-a*c)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Mi.x),c.addScaledVector(o,Mi.y),c.addScaledVector(a,Mi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return jl.setScalar(0),Ql.setScalar(0),eh.setScalar(0),jl.fromBufferAttribute(e,t),Ql.fromBufferAttribute(e,n),eh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(jl,r.x),o.addScaledVector(Ql,r.y),o.addScaledVector(eh,r.z),o}static isFrontFacing(e,t,n,s){return Yn.subVectors(n,t),vi.subVectors(e,t),Yn.cross(vi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Yn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;js.subVectors(s,n),Qs.subVectors(r,n),Kl.subVectors(e,n);let c=js.dot(Kl),l=Qs.dot(Kl);if(c<=0&&l<=0)return t.copy(n);Jl.subVectors(e,s);let h=js.dot(Jl),u=Qs.dot(Jl);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(js,o);$l.subVectors(e,r);let d=js.dot($l),m=Qs.dot($l);if(m>=0&&d<=m)return t.copy(r);let x=d*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(Qs,a);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return Cf.subVectors(r,s),a=(u-h)/(u-h+(d-m)),t.copy(s).addScaledVector(Cf,a);let p=1/(g+x+f);return o=x*p,a=f*p,t.copy(n).addScaledVector(js,o).addScaledVector(Qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zn):Zn.fromBufferAttribute(r,o),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fa.copy(n.boundingBox)),fa.applyMatrix4(e.matrixWorld),this.union(fa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Br),da.subVectors(this.max,Br),er.subVectors(e.a,Br),tr.subVectors(e.b,Br),nr.subVectors(e.c,Br),Vi.subVectors(tr,er),Wi.subVectors(nr,tr),as.subVectors(er,nr);let t=[0,-Vi.z,Vi.y,0,-Wi.z,Wi.y,0,-as.z,as.y,Vi.z,0,-Vi.x,Wi.z,0,-Wi.x,as.z,0,-as.x,-Vi.y,Vi.x,0,-Wi.y,Wi.x,0,-as.y,as.x,0];return!th(t,er,tr,nr,da)||(t=[1,0,0,0,1,0,0,0,1],!th(t,er,tr,nr,da))?!1:(pa.crossVectors(Vi,Wi),t=[pa.x,pa.y,pa.z],th(t,er,tr,nr,da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Si=[new L,new L,new L,new L,new L,new L,new L,new L],Zn=new L,fa=new pn,er=new L,tr=new L,nr=new L,Vi=new L,Wi=new L,as=new L,Br=new L,da=new L,pa=new L,cs=new L;function th(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){cs.fromArray(i,r);let a=s.x*Math.abs(cs.x)+s.y*Math.abs(cs.y)+s.z*Math.abs(cs.z),c=e.dot(cs),l=t.dot(cs),h=n.dot(cs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Jt=new L,ma=new _e,Xg=0,Wt=class extends hi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$a,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ma.fromBufferAttribute(this,t),ma.applyMatrix3(e),this.setXY(t,ma.x,ma.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$a&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var ro=class extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var oo=class extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Je=class extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}},qg=new pn,zr=new L,nh=new L,En=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):qg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zr.subVectors(e,this.center);let t=zr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(zr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zr.copy(e.center).add(nh)),this.expandByPoint(zr.copy(e.center).sub(nh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Yg=0,Hn=new Ze,ih=new It,ir=new L,Nn=new pn,Hr=new pn,sn=new L,mt=class i extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xg(e)?oo:ro)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,n){return Hn.makeTranslation(e,t,n),this.applyMatrix4(Hn),this}scale(e,t,n){return Hn.makeScale(e,t,n),this.applyMatrix4(Hn),this}lookAt(e){return ih.lookAt(e),ih.updateMatrix(),this.applyMatrix4(ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Je(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new En);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(Nn.min,Hr.min),Nn.expandByPoint(sn),sn.addVectors(Nn.max,Hr.max),Nn.expandByPoint(sn)):(Nn.expandByPoint(Hr.min),Nn.expandByPoint(Hr.max))}Nn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)sn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(sn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)sn.fromBufferAttribute(a,l),c&&(ir.fromBufferAttribute(e,l),sn.add(ir)),s=Math.max(s,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Wt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let _=0;_<n.count;_++)a[_]=new L,c[_]=new L;let l=new L,h=new L,u=new L,f=new _e,d=new _e,m=new _e,x=new L,g=new L;function p(_,b,C){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,C),f.fromBufferAttribute(r,_),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,C),h.sub(l),u.sub(l),d.sub(f),m.sub(f);let I=1/(d.x*m.y-m.x*d.y);isFinite(I)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(I),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(I),a[_].add(x),a[b].add(x),a[C].add(x),c[_].add(g),c[b].add(g),c[C].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let _=0,b=S.length;_<b;++_){let C=S[_],I=C.start,N=C.count;for(let W=I,X=I+N;W<X;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let M=new L,y=new L,w=new L,E=new L;function T(_){w.fromBufferAttribute(s,_),E.copy(w);let b=a[_];M.copy(b),M.sub(w.multiplyScalar(w.dot(b))).normalize(),y.crossVectors(E,b);let I=y.dot(c[_])<0?-1:1;o.setXYZW(_,M.x,M.y,M.z,I)}for(let _=0,b=S.length;_<b;++_){let C=S[_],I=C.start,N=C.count;for(let W=I,X=I+N;W<X;W+=3)T(e.getX(W+0)),T(e.getX(W+1)),T(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,m=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let p=0;p<h;p++)f[m++]=l[d++]}return new Wt(f,h,u)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Es=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$a,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},yn=new L,Zi=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Kn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){eo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){eo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zg=0,mn=class extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zg++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=ys,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=Va,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(n.blending=this.blending),this.side!==bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ga&&(n.blendSrc=this.blendSrc),this.blendDst!==Va&&(n.blendDst=this.blendDst),this.blendEquation!==Yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new we().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new _e().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _e().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ui=class extends mn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},sr,kr=new L,rr=new L,or=new L,ar=new _e,Gr=new _e,qd=new Ze,ga=new L,Vr=new L,xa=new L,If=new _e,sh=new _e,Pf=new _e,wi=class extends It{constructor(e=new ui){if(super(),this.isSprite=!0,this.type="Sprite",sr===void 0){sr=new mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Es(t,5);sr.setIndex([0,1,2,0,2,3]),sr.setAttribute("position",new Zi(n,3,0,!1)),sr.setAttribute("uv",new Zi(n,2,3,!1))}this.geometry=sr,this.material=e,this.center=new _e(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ke('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rr.setFromMatrixScale(this.matrixWorld),qd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),or.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rr.multiplyScalar(-or.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;_a(ga.set(-.5,-.5,0),or,o,rr,s,r),_a(Vr.set(.5,-.5,0),or,o,rr,s,r),_a(xa.set(.5,.5,0),or,o,rr,s,r),If.set(0,0),sh.set(1,0),Pf.set(1,1);let a=e.ray.intersectTriangle(ga,Vr,xa,!1,kr);if(a===null&&(_a(Vr.set(-.5,.5,0),or,o,rr,s,r),sh.set(0,1),a=e.ray.intersectTriangle(ga,xa,Vr,!1,kr),a===null))return;let c=e.ray.origin.distanceTo(kr);c<e.near||c>e.far||t.push({distance:c,point:kr.clone(),uv:Ti.getInterpolation(kr,ga,Vr,xa,If,sh,Pf,new _e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function _a(i,e,t,n,s,r){ar.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Gr.x=r*ar.x-s*ar.y,Gr.y=s*ar.x+r*ar.y):Gr.copy(ar),i.copy(e),i.x+=Gr.x,i.y+=Gr.y,i.applyMatrix4(qd)}var bi=new L,rh=new L,ya=new L,Xi=new L,oh=new L,va=new L,ah=new L,Ts=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){rh.copy(e).add(t).multiplyScalar(.5),ya.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(rh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ya),a=Xi.dot(this.direction),c=-Xi.dot(ya),l=Xi.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*c-a,f=o*a-c,m=r*h,u>=0)if(f>=-m)if(f<=m){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(rh).addScaledVector(ya,f),d}intersectSphere(e,t){bi.subVectors(e.center,this.origin);let n=bi.dot(this.direction),s=bi.dot(bi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,n,s,r){oh.subVectors(t,e),va.subVectors(n,e),ah.crossVectors(oh,va);let o=this.direction.dot(ah),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xi.subVectors(this.origin,e);let c=a*this.direction.dot(va.crossVectors(Xi,va));if(c<0)return null;let l=a*this.direction.dot(oh.cross(Xi));if(l<0||c+l>o)return null;let h=-a*Xi.dot(ah);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qt=class extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.combine=Ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Lf=new Ze,ls=new Ts,Ma=new En,Nf=new L,Sa=new L,ba=new L,Ea=new L,ch=new L,Ta=new L,Df=new L,Aa=new L,Ge=class extends It{constructor(e=new mt,t=new qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ta.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(ch.fromBufferAttribute(u,e),o?Ta.addScaledVector(ch,h):Ta.addScaledVector(ch.sub(t),h))}t.add(Ta)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(r),ls.copy(e.ray).recast(e.near),!(Ma.containsPoint(ls.origin)===!1&&(ls.intersectSphere(Ma,Nf)===null||ls.origin.distanceToSquared(Nf)>(e.far-e.near)**2))&&(Lf.copy(r).invert(),ls.copy(e.ray).applyMatrix4(Lf),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],S=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=S,w=M;y<w;y+=3){let E=a.getX(y),T=a.getX(y+1),_=a.getX(y+2);s=wa(this,p,e,n,l,h,u,E,T,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let S=a.getX(g),M=a.getX(g+1),y=a.getX(g+2);s=wa(this,o,e,n,l,h,u,S,M,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],S=Math.max(g.start,d.start),M=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let y=S,w=M;y<w;y+=3){let E=y,T=y+1,_=y+2;s=wa(this,p,e,n,l,h,u,E,T,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let S=g,M=g+1,y=g+2;s=wa(this,o,e,n,l,h,u,S,M,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Kg(i,e,t,n,s,r,o,a){let c;if(e.side===cn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===bn,a),c===null)return null;Aa.copy(a),Aa.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Aa);return l<t.near||l>t.far?null:{distance:l,point:Aa.clone(),object:i}}function wa(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Sa),i.getVertexPosition(c,ba),i.getVertexPosition(l,Ea);let h=Kg(i,e,t,n,Sa,ba,Ea,Df);if(h){let u=new L;Ti.getBarycoord(Df,Sa,ba,Ea,u),s&&(h.uv=Ti.getInterpolatedAttribute(s,a,c,l,u,new _e)),r&&(h.uv1=Ti.getInterpolatedAttribute(r,a,c,l,u,new _e)),o&&(h.normal=Ti.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new L,materialIndex:0};Ti.getNormal(Sa,ba,Ea,f.normal),h.face=f,h.barycoord=u}return h}var Wr=new St,Uf=new St,Ff=new St,Jg=new St,Of=new Ze,Ra=new L,lh=new En,Bf=new Ze,hh=new Ts,ao=class extends Ge{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yh,this.bindMatrix=new Ze,this.bindMatrixInverse=new Ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ra),this.boundingBox.expandByPoint(Ra)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new En),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ra),this.boundingSphere.expandByPoint(Ra)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lh.copy(this.boundingSphere),lh.applyMatrix4(s),e.ray.intersectsSphere(lh)!==!1&&(Bf.copy(s).invert(),hh.copy(e.ray).applyMatrix4(Bf),!(this.boundingBox!==null&&hh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,hh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new St,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===yh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Pd?this.bindMatrixInverse.copy(this.bindMatrix).invert():Oe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Uf.fromBufferAttribute(s.attributes.skinIndex,e),Ff.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Wr.copy(t),t.set(0,0,0,0)):(Wr.set(...t,1),t.set(0,0,0)),Wr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Ff.getComponent(r);if(o!==0){let a=Uf.getComponent(r);Of.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Jg.copy(Wr).applyMatrix4(Of),o)}}return t.isVector4&&(t.w=Wr.w),t.applyMatrix4(this.bindMatrixInverse)}},yr=class extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}},vr=class extends Qt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Xt,h=Xt,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},zf=new Ze,$g=new Ze,co=class i{constructor(e=[],t=[]){this.uuid=Gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Oe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:$g;zf.multiplyMatrices(a,t[r]),zf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new vr(t,e,e,On,Fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Oe("Skeleton: No bone found with UUID:",r),o=new yr),this.bones.push(o),this.boneInverses.push(new Ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Ki=class extends Wt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},cr=new Ze,Hf=new Ze,Ca=[],kf=new pn,jg=new Ze,Xr=new Ge,qr=new En,gn=class extends Ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ki(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,jg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cr),kf.copy(e.boundingBox).applyMatrix4(cr),this.boundingBox.union(kf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new En),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cr),qr.copy(e.boundingSphere).applyMatrix4(cr),this.boundingSphere.union(qr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Xr.geometry=this.geometry,Xr.material=this.material,Xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qr.copy(this.boundingSphere),qr.applyMatrix4(n),e.ray.intersectsSphere(qr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cr),Hf.multiplyMatrices(n,cr),Xr.matrixWorld=Hf,Xr.raycast(e,Ca);for(let o=0,a=Ca.length;o<a;o++){let c=Ca[o];c.instanceId=r,c.object=this,t.push(c)}Ca.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ki(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vr(new Float32Array(s*this.count),s,this.count,Pc,Fn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},uh=new L,Qg=new L,e0=new et,ai=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=uh.subVectors(n,t).cross(Qg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(uh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||e0.getNormalMatrix(e),s=this.coplanarPoint(uh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},hs=new En,t0=new _e(.5,.5),Ia=new L,Mr=class{constructor(e=new ai,t=new ai,n=new ai,s=new ai,r=new ai,o=new ai){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],x=r[9],g=r[10],p=r[11],S=r[12],M=r[13],y=r[14],w=r[15];if(s[0].setComponents(l-o,d-h,p-m,w-S).normalize(),s[1].setComponents(l+o,d+h,p+m,w+S).normalize(),s[2].setComponents(l+a,d+u,p+x,w+M).normalize(),s[3].setComponents(l-a,d-u,p-x,w-M).normalize(),n)s[4].setComponents(c,f,g,y).normalize(),s[5].setComponents(l-c,d-f,p-g,w-y).normalize();else if(s[4].setComponents(l-c,d-f,p-g,w-y).normalize(),t===Jn)s[5].setComponents(l+c,d+f,p+g,w+y).normalize();else if(t===pr)s[5].setComponents(c,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){hs.center.set(0,0,0);let t=t0.distanceTo(e.center);return hs.radius=.7071067811865476+t,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ia.x=s.normal.x>0?e.max.x:e.min.x,Ia.y=s.normal.y>0?e.max.y:e.min.y,Ia.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ji=class extends mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},tc=new L,nc=new L,Gf=new Ze,Yr=new Ts,Pa=new En,fh=new L,Vf=new L,As=class extends It{constructor(e=new mt,t=new Ji){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)tc.fromBufferAttribute(t,s-1),nc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=tc.distanceTo(nc);e.setAttribute("lineDistance",new Je(n,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(s),Pa.radius+=r,e.ray.intersectsSphere(Pa)===!1)return;Gf.copy(s).invert(),Yr.copy(e.ray).applyMatrix4(Gf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=l){let p=h.getX(x),S=h.getX(x+1),M=La(this,e,Yr,c,p,S,x);M&&t.push(M)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(d),p=La(this,e,Yr,c,x,g,m-1);p&&t.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=l){let p=La(this,e,Yr,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=La(this,e,Yr,c,m-1,d,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function La(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(tc.fromBufferAttribute(a,s),nc.fromBufferAttribute(a,r),t.distanceSqToSegment(tc,nc,fh,Vf)>n)return;fh.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(fh);if(!(l<e.near||l>e.far))return{distance:l,point:Vf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Wf=new L,Xf=new L,ws=class extends As{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Wf.fromBufferAttribute(t,s),Xf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Wf.distanceTo(Xf);e.setAttribute("lineDistance",new Je(n,1))}else Oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},lo=class extends As{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Sr=class extends mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},qf=new Ze,Th=new Ts,Na=new En,Da=new L,ho=class extends It{constructor(e=new mt,t=new Sr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(s),Na.radius+=r,e.ray.intersectsSphere(Na)===!1)return;qf.copy(s).invert(),Th.copy(e.ray).applyMatrix4(qf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let m=f,x=d;m<x;m++){let g=l.getX(m);Da.fromBufferAttribute(u,g),Yf(Da,g,c,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,x=d;m<x;m++)Da.fromBufferAttribute(u,m),Yf(Da,m,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Yf(i,e,t,n,s,r,o){let a=Th.distanceSqToPoint(i);if(a<t){let c=new L;Th.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var uo=class extends Qt{constructor(e=[],t=es,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Dt=class extends Qt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ri=class extends Qt{constructor(e,t,n=ti,s,r,o,a=Xt,c=Xt,l,h=li,u=1){if(h!==li&&h!==ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ic=class extends Ri{constructor(e,t=ti,n=es,s,r,o=Xt,a=Xt,c,l=li){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},fo=class extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},tt=class i extends mt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(u,2));function m(x,g,p,S,M,y,w,E,T,_,b){let C=y/T,I=w/_,N=y/2,W=w/2,X=E/2,D=T+1,H=_+1,P=0,B=0,G=new L;for(let Q=0;Q<H;Q++){let te=Q*I-W;for(let ce=0;ce<D;ce++){let ye=ce*C-N;G[x]=ye*S,G[g]=te*M,G[p]=X,l.push(G.x,G.y,G.z),G[x]=0,G[g]=0,G[p]=E>0?1:-1,h.push(G.x,G.y,G.z),u.push(ce/T),u.push(1-Q/_),P+=1}}for(let Q=0;Q<_;Q++)for(let te=0;te<T;te++){let ce=f+te+D*Q,ye=f+te+D*(Q+1),Te=f+(te+1)+D*(Q+1),Me=f+(te+1)+D*Q;c.push(ce,ye,Me),c.push(ye,Te,Me),B+=6}a.addGroup(d,B,b),d+=B,f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Mn=class i extends mt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,x=[],g=n/2,p=0;S(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(f,3)),this.setAttribute("uv",new Je(d,2));function S(){let y=new L,w=new L,E=0,T=(t-e)/n;for(let _=0;_<=r;_++){let b=[],C=_/r,I=C*(t-e)+e;for(let N=0;N<=s;N++){let W=N/s,X=W*c+a,D=Math.sin(X),H=Math.cos(X);w.x=I*D,w.y=-C*n+g,w.z=I*H,u.push(w.x,w.y,w.z),y.set(D,T,H).normalize(),f.push(y.x,y.y,y.z),d.push(W,1-C),b.push(m++)}x.push(b)}for(let _=0;_<s;_++)for(let b=0;b<r;b++){let C=x[b][_],I=x[b+1][_],N=x[b+1][_+1],W=x[b][_+1];(e>0||b!==0)&&(h.push(C,I,W),E+=3),(t>0||b!==r-1)&&(h.push(I,N,W),E+=3)}l.addGroup(p,E,0),p+=E}function M(y){let w=m,E=new _e,T=new L,_=0,b=y===!0?e:t,C=y===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,g*C,0),f.push(0,C,0),d.push(.5,.5),m++;let I=m;for(let N=0;N<=s;N++){let X=N/s*c+a,D=Math.cos(X),H=Math.sin(X);T.x=b*H,T.y=g*C,T.z=b*D,u.push(T.x,T.y,T.z),f.push(0,C,0),E.x=D*.5+.5,E.y=H*.5*C+.5,d.push(E.x,E.y),m++}for(let N=0;N<s;N++){let W=w+N,X=I+N;y===!0?h.push(X,X+1,W):h.push(X+1,X,W),_+=3}l.addGroup(p,_,y===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},br=class i extends Mn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Oe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new _e:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],o=[],a=new L,c=new Ze;for(let d=0;d<=e;d++){let m=d/e;s[d]=this.getTangentAt(m,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(ht(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(ht(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Er=class extends Un{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new _e){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},sc=class extends Er{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function tu(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Zf=new L,Kf=new L,dh=new tu,ph=new tu,mh=new tu,rc=class extends Un{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Kf.subVectors(s[0],s[1]).add(s[0]),l=Kf);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Zf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Zf),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),dh.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,m,x,g),ph.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,m,x,g),mh.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(dh.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),ph.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),mh.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(dh.calc(c),ph.calc(c),mh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Jf(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function n0(i,e){let t=1-i;return t*t*e}function i0(i,e){return 2*(1-i)*i*e}function s0(i,e){return i*i*e}function $r(i,e,t,n){return n0(i,e)+i0(i,t)+s0(i,n)}function r0(i,e){let t=1-i;return t*t*t*e}function o0(i,e){let t=1-i;return 3*t*t*i*e}function a0(i,e){return 3*(1-i)*i*i*e}function c0(i,e){return i*i*i*e}function jr(i,e,t,n,s){return r0(i,e)+o0(i,t)+a0(i,n)+c0(i,s)}var po=class extends Un{constructor(e=new _e,t=new _e,n=new _e,s=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new _e){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(jr(e,s.x,r.x,o.x,a.x),jr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},oc=class extends Un{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(jr(e,s.x,r.x,o.x,a.x),jr(e,s.y,r.y,o.y,a.y),jr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},mo=class extends Un{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ac=class extends Un{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},go=class extends Un{constructor(e=new _e,t=new _e,n=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _e){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set($r(e,s.x,r.x,o.x),$r(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cc=class extends Un{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set($r(e,s.x,r.x,o.x),$r(e,s.y,r.y,o.y),$r(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xo=class extends Un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Jf(a,c.x,l.x,h.x,u.x),Jf(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new _e().fromArray(s))}return this}},Ah=Object.freeze({__proto__:null,ArcCurve:sc,CatmullRomCurve3:rc,CubicBezierCurve:po,CubicBezierCurve3:oc,EllipseCurve:Er,LineCurve:mo,LineCurve3:ac,QuadraticBezierCurve:go,QuadraticBezierCurve3:cc,SplineCurve:xo}),lc=class extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ah[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ah[s.type]().fromJSON(s))}return this}},_o=class extends lc{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new mo(this.currentPoint.clone(),new _e(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new go(this.currentPoint.clone(),new _e(e,t),new _e(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new po(this.currentPoint.clone(),new _e(e,t),new _e(n,s),new _e(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new xo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new Er(e,t,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Tr=class extends _o{constructor(e){super(e),this.uuid=Gn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new _o().fromJSON(s))}return this}};function l0(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Yd(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=p0(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let h=a,u=c;for(let f=t;f<s;f+=t){let d=i[f],m=i[f+1];d<a&&(a=d),m<c&&(c=m),d>h&&(h=d),m>u&&(u=m)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return yo(r,o,t,a,c,l,0),o}function Yd(i,e,t,n,s){let r;if(s===T0(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=$f(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=$f(o/n|0,i[o],i[o+1],r);return r&&Ar(r,r.next)&&(Mo(r),r=r.next),r}function Rs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ar(t,t.next)||Ot(t.prev,t,t.next)===0)){if(Mo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function yo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&y0(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?u0(i,n,s,r):h0(i)){e.push(c.i,i.i,l.i),Mo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=f0(Rs(i),e),yo(i,e,t,n,s,r,2)):o===2&&d0(i,e,t,n,s,r):yo(Rs(i),e,t,n,s,r,1);break}}}function h0(i){let e=i.prev,t=i,n=i.next;if(Ot(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),f=Math.max(s,r,o),d=Math.max(a,c,l),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&Zr(s,a,r,c,o,l,m.x,m.y)&&Ot(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function u0(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Ot(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,c,l),m=Math.min(h,u,f),x=Math.max(a,c,l),g=Math.max(h,u,f),p=wh(d,m,e,t,n),S=wh(x,g,e,t,n),M=i.prevZ,y=i.nextZ;for(;M&&M.z>=p&&y&&y.z<=S;){if(M.x>=d&&M.x<=x&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&Zr(a,h,c,u,l,f,M.x,M.y)&&Ot(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&Zr(a,h,c,u,l,f,y.x,y.y)&&Ot(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=x&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&Zr(a,h,c,u,l,f,M.x,M.y)&&Ot(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=S;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&Zr(a,h,c,u,l,f,y.x,y.y)&&Ot(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function f0(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Ar(n,s)&&Kd(n,t,t.next,s)&&vo(n,s)&&vo(s,n)&&(e.push(n.i,t.i,s.i),Mo(t),Mo(t.next),t=i=s),t=t.next}while(t!==i);return Rs(t)}function d0(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&S0(o,a)){let c=Jd(o,a);o=Rs(o,o.next),c=Rs(c,c.next),yo(o,e,t,n,s,r,0),yo(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function p0(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Yd(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(M0(l))}s.sort(m0);for(let r=0;r<s.length;r++)t=g0(s[r],t);return t}function m0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function g0(i,e){let t=x0(i,e);if(!t)return e;let n=Jd(t,i);return Rs(n,n.next),Rs(t,t.next)}function x0(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Ar(i,t))return t;do{if(Ar(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Zd(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);vo(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&_0(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function _0(i,e){return Ot(i.prev,i,e.prev)<0&&Ot(e.next,i,i.next)<0}function y0(i,e,t,n){let s=i;do s.z===0&&(s.z=wh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,v0(s)}function v0(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function wh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function M0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Zd(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Zr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Zd(i,e,t,n,s,r,o,a)}function S0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!b0(i,e)&&(vo(i,e)&&vo(e,i)&&E0(i,e)&&(Ot(i.prev,i,e.prev)||Ot(i,e.prev,e))||Ar(i,e)&&Ot(i.prev,i,i.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ar(i,e){return i.x===e.x&&i.y===e.y}function Kd(i,e,t,n){let s=Fa(Ot(i,e,t)),r=Fa(Ot(i,e,n)),o=Fa(Ot(t,n,i)),a=Fa(Ot(t,n,e));return!!(s!==r&&o!==a||s===0&&Ua(i,t,e)||r===0&&Ua(i,n,e)||o===0&&Ua(t,i,n)||a===0&&Ua(t,e,n))}function Ua(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Fa(i){return i>0?1:i<0?-1:0}function b0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Kd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function vo(i,e){return Ot(i.prev,i,i.next)<0?Ot(i,e,i.next)>=0&&Ot(i,i.prev,e)>=0:Ot(i,e,i.prev)<0||Ot(i,i.next,e)<0}function E0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Jd(i,e){let t=Rh(i.i,i.x,i.y),n=Rh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function $f(i,e,t,n){let s=Rh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Mo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Rh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function T0(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ch=class{static triangulate(e,t,n=2){return l0(e,t,n)}},xs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];jf(e),Qf(n,e);let o=e.length;t.forEach(jf);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Qf(n,t[c]);let a=Ch.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function jf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Qf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var So=class i extends mt{constructor(e=new Tr([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new Je(s,3)),this.setAttribute("uv",new Je(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:A0,M,y=!1,w,E,T,_;if(p){M=p.getSpacedPoints(h),y=!0,f=!1;let se=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(h,se),E=new L,T=new L,_=new L}f||(g=0,d=0,m=0,x=0);let b=a.extractPoints(l),C=b.shape,I=b.holes;if(!xs.isClockWise(C)){C=C.reverse();for(let se=0,oe=I.length;se<oe;se++){let ae=I[se];xs.isClockWise(ae)&&(I[se]=ae.reverse())}}function W(se){let ae=10000000000000001e-36,ve=se[0];for(let pe=1;pe<=se.length;pe++){let be=pe%se.length,fe=se[be],Fe=fe.x-ve.x,Le=fe.y-ve.y,U=Fe*Fe+Le*Le,Qe=Math.max(Math.abs(fe.x),Math.abs(fe.y),Math.abs(ve.x),Math.abs(ve.y)),Ce=ae*Qe*Qe;if(U<=Ce){se.splice(be,1),pe--;continue}ve=fe}}W(C),I.forEach(W);let X=I.length,D=C;for(let se=0;se<X;se++){let oe=I[se];C=C.concat(oe)}function H(se,oe,ae){return oe||Ke("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(oe,ae)}let P=C.length;function B(se,oe,ae){let ve,pe,be,fe=se.x-oe.x,Fe=se.y-oe.y,Le=ae.x-se.x,U=ae.y-se.y,Qe=fe*fe+Fe*Fe,Ce=fe*U-Fe*Le;if(Math.abs(Ce)>Number.EPSILON){let R=Math.sqrt(Qe),v=Math.sqrt(Le*Le+U*U),O=oe.x-Fe/R,k=oe.y+fe/R,Z=ae.x-U/v,he=ae.y+Le/v,de=((Z-O)*U-(he-k)*Le)/(fe*U-Fe*Le);ve=O+fe*de-se.x,pe=k+Fe*de-se.y;let J=ve*ve+pe*pe;if(J<=2)return new _e(ve,pe);be=Math.sqrt(J/2)}else{let R=!1;fe>Number.EPSILON?Le>Number.EPSILON&&(R=!0):fe<-Number.EPSILON?Le<-Number.EPSILON&&(R=!0):Math.sign(Fe)===Math.sign(U)&&(R=!0),R?(ve=-Fe,pe=fe,be=Math.sqrt(Qe)):(ve=fe,pe=Fe,be=Math.sqrt(Qe/2))}return new _e(ve/be,pe/be)}let G=[];for(let se=0,oe=D.length,ae=oe-1,ve=se+1;se<oe;se++,ae++,ve++)ae===oe&&(ae=0),ve===oe&&(ve=0),G[se]=B(D[se],D[ae],D[ve]);let Q=[],te,ce=G.concat();for(let se=0,oe=X;se<oe;se++){let ae=I[se];te=[];for(let ve=0,pe=ae.length,be=pe-1,fe=ve+1;ve<pe;ve++,be++,fe++)be===pe&&(be=0),fe===pe&&(fe=0),te[ve]=B(ae[ve],ae[be],ae[fe]);Q.push(te),ce=ce.concat(te)}let ye;if(g===0)ye=xs.triangulateShape(D,I);else{let se=[],oe=[];for(let ae=0;ae<g;ae++){let ve=ae/g,pe=d*Math.cos(ve*Math.PI/2),be=m*Math.sin(ve*Math.PI/2)+x;for(let fe=0,Fe=D.length;fe<Fe;fe++){let Le=H(D[fe],G[fe],be);Se(Le.x,Le.y,-pe),ve===0&&se.push(Le)}for(let fe=0,Fe=X;fe<Fe;fe++){let Le=I[fe];te=Q[fe];let U=[];for(let Qe=0,Ce=Le.length;Qe<Ce;Qe++){let R=H(Le[Qe],te[Qe],be);Se(R.x,R.y,-pe),ve===0&&U.push(R)}ve===0&&oe.push(U)}}ye=xs.triangulateShape(se,oe)}let Te=ye.length,Me=m+x;for(let se=0;se<P;se++){let oe=f?H(C[se],ce[se],Me):C[se];y?(T.copy(w.normals[0]).multiplyScalar(oe.x),E.copy(w.binormals[0]).multiplyScalar(oe.y),_.copy(M[0]).add(T).add(E),Se(_.x,_.y,_.z)):Se(oe.x,oe.y,0)}for(let se=1;se<=h;se++)for(let oe=0;oe<P;oe++){let ae=f?H(C[oe],ce[oe],Me):C[oe];y?(T.copy(w.normals[se]).multiplyScalar(ae.x),E.copy(w.binormals[se]).multiplyScalar(ae.y),_.copy(M[se]).add(T).add(E),Se(_.x,_.y,_.z)):Se(ae.x,ae.y,u/h*se)}for(let se=g-1;se>=0;se--){let oe=se/g,ae=d*Math.cos(oe*Math.PI/2),ve=m*Math.sin(oe*Math.PI/2)+x;for(let pe=0,be=D.length;pe<be;pe++){let fe=H(D[pe],G[pe],ve);Se(fe.x,fe.y,u+ae)}for(let pe=0,be=I.length;pe<be;pe++){let fe=I[pe];te=Q[pe];for(let Fe=0,Le=fe.length;Fe<Le;Fe++){let U=H(fe[Fe],te[Fe],ve);y?Se(U.x,U.y+M[h-1].y,M[h-1].x+ae):Se(U.x,U.y,u+ae)}}}V(),ne();function V(){let se=s.length/3;if(f){let oe=0,ae=P*oe;for(let ve=0;ve<Te;ve++){let pe=ye[ve];Ee(pe[2]+ae,pe[1]+ae,pe[0]+ae)}oe=h+g*2,ae=P*oe;for(let ve=0;ve<Te;ve++){let pe=ye[ve];Ee(pe[0]+ae,pe[1]+ae,pe[2]+ae)}}else{for(let oe=0;oe<Te;oe++){let ae=ye[oe];Ee(ae[2],ae[1],ae[0])}for(let oe=0;oe<Te;oe++){let ae=ye[oe];Ee(ae[0]+P*h,ae[1]+P*h,ae[2]+P*h)}}n.addGroup(se,s.length/3-se,0)}function ne(){let se=s.length/3,oe=0;ee(D,oe),oe+=D.length;for(let ae=0,ve=I.length;ae<ve;ae++){let pe=I[ae];ee(pe,oe),oe+=pe.length}n.addGroup(se,s.length/3-se,1)}function ee(se,oe){let ae=se.length;for(;--ae>=0;){let ve=ae,pe=ae-1;pe<0&&(pe=se.length-1);for(let be=0,fe=h+g*2;be<fe;be++){let Fe=P*be,Le=P*(be+1),U=oe+ve+Fe,Qe=oe+pe+Fe,Ce=oe+pe+Le,R=oe+ve+Le;He(U,Qe,Ce,R)}}}function Se(se,oe,ae){c.push(se),c.push(oe),c.push(ae)}function Ee(se,oe,ae){je(se),je(oe),je(ae);let ve=s.length/3,pe=S.generateTopUV(n,s,ve-3,ve-2,ve-1);We(pe[0]),We(pe[1]),We(pe[2])}function He(se,oe,ae,ve){je(se),je(oe),je(ve),je(oe),je(ae),je(ve);let pe=s.length/3,be=S.generateSideWallUV(n,s,pe-6,pe-3,pe-2,pe-1);We(be[0]),We(be[1]),We(be[3]),We(be[1]),We(be[2]),We(be[3])}function je(se){s.push(c[se*3+0]),s.push(c[se*3+1]),s.push(c[se*3+2])}function We(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return w0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ah[s.type]().fromJSON(s)),new i(n,e.options)}},A0={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new _e(r,o),new _e(a,c),new _e(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],m=e[s*3+2],x=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new _e(o,1-c),new _e(l,1-u),new _e(f,1-m),new _e(x,1-p)]:[new _e(a,1-c),new _e(h,1-u),new _e(d,1-m),new _e(g,1-p)]}};function w0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Yt=class i extends mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,d=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let S=p*f-o;for(let M=0;M<l;M++){let y=M*u-r;m.push(y,-S,0),x.push(0,0,1),g.push(M/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){let M=S+l*p,y=S+l*(p+1),w=S+1+l*(p+1),E=S+1+l*p;d.push(M,y,E),d.push(y,w,E)}this.setIndex(d),this.setAttribute("position",new Je(m,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ci=class i extends mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new L,f=new L,d=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let S=[],M=p/n,y=o+M*a,w=e*Math.cos(y),E=Math.sqrt(e*e-w*w),T=0;p===0&&o===0?T=.5/t:p===n&&c===Math.PI&&(T=-.5/t);for(let _=0;_<=t;_++){let b=_/t,C=s+b*r;u.x=-E*Math.cos(C),u.y=w,u.z=E*Math.sin(C),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(b+T,1-M),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){let M=h[p][S+1],y=h[p][S],w=h[p+1][S],E=h[p+1][S+1];(p!==0||o>0)&&d.push(M,y,E),(p!==n-1||c<Math.PI)&&d.push(y,w,E)}this.setIndex(d),this.setAttribute("position",new Je(m,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Ds(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(ed(s))s.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(ed(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function xn(i){let e={};for(let t=0;t<i.length;t++){let n=Ds(i[t]);for(let s in n)e[s]=n[s]}return e}function ed(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function R0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function nu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var $d={clone:Ds,merge:xn},C0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,I0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Sn=class extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C0,this.fragmentShader=I0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=R0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new we().setHex(s.value);break;case"v2":this.uniforms[n].value=new _e().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new St().fromArray(s.value);break;case"m3":this.uniforms[n].value=new et().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ze().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},hc=class extends Sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Cs=class extends mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qo,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Tn=class extends Cs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var $e=class extends mn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qo,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.combine=Ec,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},uc=class extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fc=class extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Oa(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function P0(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function td(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function L0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var fi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},dc=class extends fi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mh,endingEnd:Mh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sh:r=e,a=2*t-n;break;case bh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Sh:o=e,c=2*n-t;break;case bh:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(s-t),x=m*m,g=x*m,p=-f*g+2*f*x-f*m,S=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,M=(-1-d)*g+(1.5+d)*x+.5*m,y=d*g-d*x;for(let w=0;w!==a;++w)r[w]=p*o[h+w]+S*o[l+w]+M*o[c+w]+y*o[u+w];return r}},pc=class extends fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},mc=class extends fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},gc=class extends fi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-t)/(s-t),x=1-m;for(let g=0;g!==a;++g)r[g]=o[l+g]*x+o[c+g]*m;return r}let f=a*2,d=e-1;for(let m=0;m!==a;++m){let x=o[l+m],g=o[c+m],p=d*f+m*2,S=u[p],M=u[p+1],y=e*f+m*2,w=h[y],E=h[y+1],T=(n-t)/(s-t),_,b,C,I,N;for(let W=0;W<8;W++){_=T*T,b=_*T,C=1-T,I=C*C,N=I*C;let D=N*t+3*I*T*S+3*C*_*w+b*s-n;if(Math.abs(D)<1e-10)break;let H=3*I*(S-t)+6*C*T*(w-S)+3*_*(s-w);if(Math.abs(H)<1e-10)break;T=T-D/H,T=Math.max(0,Math.min(1,T))}r[m]=N*x+3*I*T*M+3*C*_*E+b*g}return r}},An=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Oa(t,this.TimeBufferType),this.values=Oa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Oa(e.times,Array),values:Oa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new mc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new gc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ms:t=this.InterpolantFactoryMethodDiscrete;break;case Ss:t=this.InterpolantFactoryMethodLinear;break;case ka:t=this.InterpolantFactoryMethodSmooth;break;case vh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Oe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ms;case this.InterpolantFactoryMethodLinear:return Ss;case this.InterpolantFactoryMethodSmooth:return ka;case this.InterpolantFactoryMethodBezier:return vh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ke("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Ke("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Ke("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&_g(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Ke("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ka,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let x=t[u+m];if(x!==t[f+m]||x!==t[d+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};An.prototype.ValueTypeName="";An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=Ss;var Ii=class extends An{constructor(e,t,n){super(e,t,n)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Ms;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var bo=class extends An{constructor(e,t,n,s){super(e,t,n,s)}};bo.prototype.ValueTypeName="color";var Pi=class extends An{constructor(e,t,n,s){super(e,t,n,s)}};Pi.prototype.ValueTypeName="number";var xc=class extends fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Nt.slerpFlat(r,0,o,l-a,o,l,c);return r}},Li=class extends An{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new xc(this.times,this.values,this.getValueSize(),e)}};Li.prototype.ValueTypeName="quaternion";Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends An{constructor(e,t,n){super(e,t,n)}};Ni.prototype.ValueTypeName="string";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=Ms;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var $i=class extends An{constructor(e,t,n,s){super(e,t,n,s)}};$i.prototype.ValueTypeName="vector";var Eo=class{constructor(e="",t=-1,n=[],s=Ld){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Gn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(D0(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(An.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=P0(c);c=td(c,1,h),l=td(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Pi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function N0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Pi;case"vector":case"vector2":case"vector3":case"vector4":return $i;case"color":return bo;case"quaternion":return Li;case"bool":case"boolean":return Ii;case"string":return Ni}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function D0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=N0(i.type);if(i.times===void 0){let t=[],n=[];L0(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var ci={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(nd(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!nd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function nd(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var _c=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],m=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},jd=new _c,$n=class{constructor(e){this.manager=e!==void 0?e:jd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};$n.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ei={},Ih=class extends Error{constructor(e,t){super(e),this.response=t}},Is=class extends $n{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ci.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ei[e]!==void 0){Ei[e].push({onLoad:t,onProgress:n,onError:s});return}Ei[e]=[],Ei[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Oe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ei[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0,x=0,g=new ReadableStream({start(p){S();function S(){u.read().then(({done:M,value:y})=>{if(M)p.close();else{x+=y.byteLength;let w=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:d});for(let E=0,T=h.length;E<T;E++){let _=h[E];_.onProgress&&_.onProgress(w)}p.enqueue(y),S()}},M=>{p.error(M)})}}});return new Response(g)}else throw new Ih(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{ci.add(`file:${e}`,l);let h=Ei[e];delete Ei[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=Ei[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ei[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var lr=new WeakMap,yc=class extends $n{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ci.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=lr.get(o);u===void 0&&(u=[],lr.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=mr("img");function c(){h(),t&&t(this);let u=lr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}lr.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),ci.remove(`image:${e}`);let f=lr.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(u)}lr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ci.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var jn=class extends $n{constructor(e){super(e)}load(e,t,n,s){let r=new Qt,o=new yc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ji=class extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},To=class extends ji{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},gh=new Ze,id=new L,sd=new L,Ao=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mr,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;id.setFromMatrixPosition(e.matrixWorld),t.position.copy(id),sd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sd),t.updateMatrixWorld(),gh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gh,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===pr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ba=new L,za=new Nt,oi=new L,wo=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ba,za,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,za,oi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ba,za,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,za,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qi=new L,rd=new _e,od=new _e,$t=class extends wo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Kr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(Kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,rd,od),t.subVectors(od,rd)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Kr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ph=class extends Ao{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=bs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ro=class extends ji{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ph}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Lh=class extends Ao{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0}},Di=class extends ji{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Lh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Qi=class extends wo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Nh=class extends Ao{constructor(){super(new Qi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ps=class extends ji{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new Nh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Co=class extends ji{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ui=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var xh=new WeakMap,Io=class extends $n{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Oe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Oe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ci.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{xh.has(o)===!0?(s&&s(xh.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){ci.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),xh.set(c,l),ci.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ci.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Ha,Po=class{static getContext(){return Ha===void 0&&(Ha=new(window.AudioContext||window.webkitAudioContext)),Ha}static setContext(e){Ha=e}},Lo=class extends $n{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new Is(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{let l=c.slice(0),h=Po.getContext(),u=e+"#decode";r.manager.itemStart(u),h.decodeAudioData(l,function(f){t(f),r.manager.itemEnd(u)}).catch(function(f){a(f),r.manager.itemEnd(u)})}catch(l){a(l)}},n,s);function a(c){s?s(c):Ke(c),r.manager.itemError(e)}}};var hr=-90,ur=1,vc=class extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $t(hr,ur,e,t);s.layers=this.layers,this.add(s);let r=new $t(hr,ur,e,t);r.layers=this.layers,this.add(r);let o=new $t(hr,ur,e,t);o.layers=this.layers,this.add(o);let a=new $t(hr,ur,e,t);a.layers=this.layers,this.add(a);let c=new $t(hr,ur,e,t);c.layers=this.layers,this.add(c);let l=new $t(hr,ur,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Mc=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Sc=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=U0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function U0(){this._document.hidden===!1&&this.reset()}var us=new L,_h=new Nt,F0=new L,fs=new L,ds=new L,No=class extends It{constructor(){super(),this.type="AudioListener",this.context=Po.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new Sc}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();let t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(us,_h,F0),fs.set(0,0,-1).applyQuaternion(_h),ds.set(0,1,0).applyQuaternion(_h),t.positionX){let n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(us.x,n),t.positionY.linearRampToValueAtTime(us.y,n),t.positionZ.linearRampToValueAtTime(us.z,n),t.forwardX.linearRampToValueAtTime(fs.x,n),t.forwardY.linearRampToValueAtTime(fs.y,n),t.forwardZ.linearRampToValueAtTime(fs.z,n),t.upX.linearRampToValueAtTime(ds.x,n),t.upY.linearRampToValueAtTime(ds.y,n),t.upZ.linearRampToValueAtTime(ds.z,n)}else t.setPosition(us.x,us.y,us.z),t.setOrientation(fs.x,fs.y,fs.z,ds.x,ds.y,ds.z)}},bc=class extends It{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){Oe("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Oe("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Oe("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){Oe("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){Oe("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Oe("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){Oe("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(Oe("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}},ps=new L,ad=new Nt,O0=new L,ms=new L,Do=class extends bc{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(ps,ad,O0),ms.set(0,0,1).applyQuaternion(ad);let t=this.panner;if(t.positionX){let n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(ps.x,n),t.positionY.linearRampToValueAtTime(ps.y,n),t.positionZ.linearRampToValueAtTime(ps.z,n),t.orientationX.linearRampToValueAtTime(ms.x,n),t.orientationY.linearRampToValueAtTime(ms.y,n),t.orientationZ.linearRampToValueAtTime(ms.z,n)}else t.setPosition(ps.x,ps.y,ps.z),t.setOrientation(ms.x,ms.y,ms.z)}};var iu="\\[\\]\\.:\\/",B0=new RegExp("["+iu+"]","g"),su="[^"+iu+"]",z0="[^"+iu.replace("\\.","")+"]",H0=/((?:WC+[\/:])*)/.source.replace("WC",su),k0=/(WCOD+)?/.source.replace("WCOD",z0),G0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",su),V0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",su),W0=new RegExp("^"+H0+k0+G0+V0+"$"),X0=["material","materials","bones","map"],Dh=class{constructor(e,t,n){let s=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(B0,"")}static parseTrackName(e){let t=W0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);X0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;Ke("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=Dh;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var HE=new Float32Array(1);var Uh=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function ru(i,e,t,n){let s=q0(n);switch(t){case Jh:return i*e;case Pc:return i*e/s.components*s.byteLength;case Lc:return i*e/s.components*s.byteLength;case ns:return i*e*2/s.components*s.byteLength;case Nc:return i*e*2/s.components*s.byteLength;case $h:return i*e*3/s.components*s.byteLength;case On:return i*e*4/s.components*s.byteLength;case Dc:return i*e*4/s.components*s.byteLength;case zo:case Ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ko:case Go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fc:case Bc:return Math.max(i,16)*Math.max(e,8)/4;case Uc:case Oc:return Math.max(i,8)*Math.max(e,8)/2;case zc:case Hc:case Gc:case Vc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case kc:case Vo:case Wc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Yc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Jc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case $c:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case jc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Qc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case el:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case tl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case sl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case rl:case ol:case al:return Math.ceil(i/4)*Math.ceil(e/4)*16;case cl:case ll:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Wo:case hl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function q0(i){switch(i){case wn:case qh:return{byteLength:1,components:1};case Cr:case Yh:case pi:return{byteLength:2,components:1};case Cc:case Ic:return{byteLength:2,components:4};case ti:case Rc:case Fn:return{byteLength:4,components:1};case Zh:case Kh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Mp(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Z0(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let x=u[d];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var K0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J0=`#ifdef USE_ALPHAHASH
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
#endif`,$0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ex=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tx=`#ifdef USE_AOMAP
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
#endif`,nx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ix=`#ifdef USE_BATCHING
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
#endif`,sx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ox=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ax=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cx=`#ifdef USE_IRIDESCENCE
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
#endif`,lx=`#ifdef USE_BUMPMAP
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
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,px=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,mx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_x=`#define PI 3.141592653589793
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
} // validated`,yx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vx=`vec3 transformedNormal = objectNormal;
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
#endif`,Mx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ex=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ax=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wx=`#ifdef USE_ENVMAP
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
#endif`,Rx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cx=`#ifdef USE_ENVMAP
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
#endif`,Ix=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Px=`#ifdef USE_ENVMAP
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
#endif`,Lx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ux=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fx=`#ifdef USE_GRADIENTMAP
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
}`,Ox=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,kx=`#ifdef USE_ENVMAP
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
#endif`,Gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qx=`PhysicalMaterial material;
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
#endif`,Yx=`uniform sampler2D dfgLUT;
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
}`,Zx=`
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
#endif`,Kx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$x=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,jx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,n_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,r_=`#if defined( USE_POINTS_UV )
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
#endif`,o_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u_=`#ifdef USE_MORPHTARGETS
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
#endif`,f_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,p_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,m_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,__=`#ifdef USE_NORMALMAP
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
#endif`,y_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,T_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,D_=`float getShadowMask() {
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
}`,U_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F_=`#ifdef USE_SKINNING
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
#endif`,O_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B_=`#ifdef USE_SKINNING
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
#endif`,z_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,V_=`#ifdef USE_TRANSMISSION
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
#endif`,W_=`#ifdef USE_TRANSMISSION
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
#endif`,X_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,K_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J_=`uniform sampler2D t2D;
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
}`,$_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ey=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ty=`#include <common>
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
}`,ny=`#if DEPTH_PACKING == 3200
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
}`,iy=`#define DISTANCE
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
}`,sy=`#define DISTANCE
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
}`,ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ay=`uniform float scale;
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
}`,cy=`uniform vec3 diffuse;
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
}`,ly=`#include <common>
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
}`,hy=`uniform vec3 diffuse;
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
}`,uy=`#define LAMBERT
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
}`,fy=`#define LAMBERT
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
}`,dy=`#define MATCAP
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
}`,py=`#define MATCAP
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
}`,my=`#define NORMAL
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
}`,gy=`#define NORMAL
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
}`,xy=`#define PHONG
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
}`,_y=`#define PHONG
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
}`,yy=`#define STANDARD
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
}`,vy=`#define STANDARD
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
}`,My=`#define TOON
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
}`,Sy=`#define TOON
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
}`,by=`uniform float size;
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
}`,Ey=`uniform vec3 diffuse;
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
}`,Ty=`#include <common>
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
}`,Ay=`uniform vec3 color;
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
}`,wy=`uniform float rotation;
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
}`,Ry=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:K0,alphahash_pars_fragment:J0,alphamap_fragment:$0,alphamap_pars_fragment:j0,alphatest_fragment:Q0,alphatest_pars_fragment:ex,aomap_fragment:tx,aomap_pars_fragment:nx,batching_pars_vertex:ix,batching_vertex:sx,begin_vertex:rx,beginnormal_vertex:ox,bsdfs:ax,iridescence_fragment:cx,bumpmap_pars_fragment:lx,clipping_planes_fragment:hx,clipping_planes_pars_fragment:ux,clipping_planes_pars_vertex:fx,clipping_planes_vertex:dx,color_fragment:px,color_pars_fragment:mx,color_pars_vertex:gx,color_vertex:xx,common:_x,cube_uv_reflection_fragment:yx,defaultnormal_vertex:vx,displacementmap_pars_vertex:Mx,displacementmap_vertex:Sx,emissivemap_fragment:bx,emissivemap_pars_fragment:Ex,colorspace_fragment:Tx,colorspace_pars_fragment:Ax,envmap_fragment:wx,envmap_common_pars_fragment:Rx,envmap_pars_fragment:Cx,envmap_pars_vertex:Ix,envmap_physical_pars_fragment:kx,envmap_vertex:Px,fog_vertex:Lx,fog_pars_vertex:Nx,fog_fragment:Dx,fog_pars_fragment:Ux,gradientmap_pars_fragment:Fx,lightmap_pars_fragment:Ox,lights_lambert_fragment:Bx,lights_lambert_pars_fragment:zx,lights_pars_begin:Hx,lights_toon_fragment:Gx,lights_toon_pars_fragment:Vx,lights_phong_fragment:Wx,lights_phong_pars_fragment:Xx,lights_physical_fragment:qx,lights_physical_pars_fragment:Yx,lights_fragment_begin:Zx,lights_fragment_maps:Kx,lights_fragment_end:Jx,lightprobes_pars_fragment:$x,logdepthbuf_fragment:jx,logdepthbuf_pars_fragment:Qx,logdepthbuf_pars_vertex:e_,logdepthbuf_vertex:t_,map_fragment:n_,map_pars_fragment:i_,map_particle_fragment:s_,map_particle_pars_fragment:r_,metalnessmap_fragment:o_,metalnessmap_pars_fragment:a_,morphinstance_vertex:c_,morphcolor_vertex:l_,morphnormal_vertex:h_,morphtarget_pars_vertex:u_,morphtarget_vertex:f_,normal_fragment_begin:d_,normal_fragment_maps:p_,normal_pars_fragment:m_,normal_pars_vertex:g_,normal_vertex:x_,normalmap_pars_fragment:__,clearcoat_normal_fragment_begin:y_,clearcoat_normal_fragment_maps:v_,clearcoat_pars_fragment:M_,iridescence_pars_fragment:S_,opaque_fragment:b_,packing:E_,premultiplied_alpha_fragment:T_,project_vertex:A_,dithering_fragment:w_,dithering_pars_fragment:R_,roughnessmap_fragment:C_,roughnessmap_pars_fragment:I_,shadowmap_pars_fragment:P_,shadowmap_pars_vertex:L_,shadowmap_vertex:N_,shadowmask_pars_fragment:D_,skinbase_vertex:U_,skinning_pars_vertex:F_,skinning_vertex:O_,skinnormal_vertex:B_,specularmap_fragment:z_,specularmap_pars_fragment:H_,tonemapping_fragment:k_,tonemapping_pars_fragment:G_,transmission_fragment:V_,transmission_pars_fragment:W_,uv_pars_fragment:X_,uv_pars_vertex:q_,uv_vertex:Y_,worldpos_vertex:Z_,background_vert:K_,background_frag:J_,backgroundCube_vert:$_,backgroundCube_frag:j_,cube_vert:Q_,cube_frag:ey,depth_vert:ty,depth_frag:ny,distance_vert:iy,distance_frag:sy,equirect_vert:ry,equirect_frag:oy,linedashed_vert:ay,linedashed_frag:cy,meshbasic_vert:ly,meshbasic_frag:hy,meshlambert_vert:uy,meshlambert_frag:fy,meshmatcap_vert:dy,meshmatcap_frag:py,meshnormal_vert:my,meshnormal_frag:gy,meshphong_vert:xy,meshphong_frag:_y,meshphysical_vert:yy,meshphysical_frag:vy,meshtoon_vert:My,meshtoon_frag:Sy,points_vert:by,points_frag:Ey,shadow_vert:Ty,shadow_frag:Ay,sprite_vert:wy,sprite_frag:Ry},Re={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},gi={basic:{uniforms:xn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:xn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new we(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:xn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:xn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:xn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new we(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:xn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:xn([Re.points,Re.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:xn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:xn([Re.common,Re.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:xn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:xn([Re.sprite,Re.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:xn([Re.common,Re.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:xn([Re.lights,Re.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};gi.physical={uniforms:xn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var dl={r:0,b:0,g:0},Cy=new Ze,Sp=new et;Sp.set(-1,0,0,0,1,0,0,0,1);function Iy(i,e,t,n,s,r){let o=new we(0),a=s===!0?0:1,c,l,h=null,u=0,f=null;function d(S){let M=S.isScene===!0?S.background:null;if(M&&M.isTexture){let y=S.backgroundBlurriness>0;M=e.get(M,y)}return M}function m(S){let M=!1,y=d(S);y===null?g(o,a):y&&y.isColor&&(g(y,1),M=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(S,M){let y=d(M);y&&(y.isCubeTexture||y.mapping===Bo)?(l===void 0&&(l=new Ge(new tt(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Ds(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Cy.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Sp),l.material.toneMapped=lt.getTransfer(y.colorSpace)!==_t,(h!==y||u!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ge(new Yt(2,2),new Sn({name:"BackgroundMaterial",uniforms:Ds(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=lt.getTransfer(y.colorSpace)!==_t,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function g(S,M){S.getRGB(dl,nu(i)),t.buffers.color.setClear(dl.r,dl.g,dl.b,M,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,M=1){o.set(S),a=M,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,g(o,a)},render:m,addToRenderList:x,dispose:p}}function Py(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(I,N,W,X,D){let H=!1,P=u(I,X,W,N);r!==P&&(r=P,l(r.object)),H=d(I,X,W,D),H&&m(I,X,W,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(I,N,W,X),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function u(I,N,W,X){let D=X.wireframe===!0,H=n[N.id];H===void 0&&(H={},n[N.id]=H);let P=I.isInstancedMesh===!0?I.id:0,B=H[P];B===void 0&&(B={},H[P]=B);let G=B[W.id];G===void 0&&(G={},B[W.id]=G);let Q=G[D];return Q===void 0&&(Q=f(c()),G[D]=Q),Q}function f(I){let N=[],W=[],X=[];for(let D=0;D<t;D++)N[D]=0,W[D]=0,X[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:X,object:I,attributes:{},index:null}}function d(I,N,W,X){let D=r.attributes,H=N.attributes,P=0,B=W.getAttributes();for(let G in B)if(B[G].location>=0){let te=D[G],ce=H[G];if(ce===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(ce=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(ce=I.instanceColor)),te===void 0||te.attribute!==ce||ce&&te.data!==ce.data)return!0;P++}return r.attributesNum!==P||r.index!==X}function m(I,N,W,X){let D={},H=N.attributes,P=0,B=W.getAttributes();for(let G in B)if(B[G].location>=0){let te=H[G];te===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(te=I.instanceColor));let ce={};ce.attribute=te,te&&te.data&&(ce.data=te.data),D[G]=ce,P++}r.attributes=D,r.attributesNum=P,r.index=X}function x(){let I=r.newAttributes;for(let N=0,W=I.length;N<W;N++)I[N]=0}function g(I){p(I,0)}function p(I,N){let W=r.newAttributes,X=r.enabledAttributes,D=r.attributeDivisors;W[I]=1,X[I]===0&&(i.enableVertexAttribArray(I),X[I]=1),D[I]!==N&&(i.vertexAttribDivisor(I,N),D[I]=N)}function S(){let I=r.newAttributes,N=r.enabledAttributes;for(let W=0,X=N.length;W<X;W++)N[W]!==I[W]&&(i.disableVertexAttribArray(W),N[W]=0)}function M(I,N,W,X,D,H,P){P===!0?i.vertexAttribIPointer(I,N,W,D,H):i.vertexAttribPointer(I,N,W,X,D,H)}function y(I,N,W,X){x();let D=X.attributes,H=W.getAttributes(),P=N.defaultAttributeValues;for(let B in H){let G=H[B];if(G.location>=0){let Q=D[B];if(Q===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor)),Q!==void 0){let te=Q.normalized,ce=Q.itemSize,ye=e.get(Q);if(ye===void 0)continue;let Te=ye.buffer,Me=ye.type,V=ye.bytesPerElement,ne=Me===i.INT||Me===i.UNSIGNED_INT||Q.gpuType===Rc;if(Q.isInterleavedBufferAttribute){let ee=Q.data,Se=ee.stride,Ee=Q.offset;if(ee.isInstancedInterleavedBuffer){for(let He=0;He<G.locationSize;He++)p(G.location+He,ee.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let He=0;He<G.locationSize;He++)g(G.location+He);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let He=0;He<G.locationSize;He++)M(G.location+He,ce/G.locationSize,Me,te,Se*V,(Ee+ce/G.locationSize*He)*V,ne)}else{if(Q.isInstancedBufferAttribute){for(let ee=0;ee<G.locationSize;ee++)p(G.location+ee,Q.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ee=0;ee<G.locationSize;ee++)g(G.location+ee);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let ee=0;ee<G.locationSize;ee++)M(G.location+ee,ce/G.locationSize,Me,te,ce*V,ce/G.locationSize*ee*V,ne)}}else if(P!==void 0){let te=P[B];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(G.location,te);break;case 3:i.vertexAttrib3fv(G.location,te);break;case 4:i.vertexAttrib4fv(G.location,te);break;default:i.vertexAttrib1fv(G.location,te)}}}}S()}function w(){b();for(let I in n){let N=n[I];for(let W in N){let X=N[W];for(let D in X){let H=X[D];for(let P in H)h(H[P].object),delete H[P];delete X[D]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;let N=n[I.id];for(let W in N){let X=N[W];for(let D in X){let H=X[D];for(let P in H)h(H[P].object),delete H[P];delete X[D]}}delete n[I.id]}function T(I){for(let N in n){let W=n[N];for(let X in W){let D=W[X];if(D[I.id]===void 0)continue;let H=D[I.id];for(let P in H)h(H[P].object),delete H[P];delete D[I.id]}}}function _(I){for(let N in n){let W=n[N],X=I.isInstancedMesh===!0?I.id:0,D=W[X];if(D!==void 0){for(let H in D){let P=D[H];for(let B in P)h(P[B].object),delete P[B];delete D[H]}delete W[X],Object.keys(W).length===0&&delete n[N]}}}function b(){C(),o=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:g,disableUnusedAttributes:S}}function Ly(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let d=0;d<h;d++)f+=l[d];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Ny(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==On&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let _=T===pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==wn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Fn&&!_)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Oe("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:y,maxSamples:w,samples:E}}function Dy(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ai,a=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let S=r?0:n,M=S*4,y=p.clippingState||null;c.value=y,y=h(m,f,M,d);for(let w=0;w!==M;++w)y[w]=t[w];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let p=d+x*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,y=d;M!==x;++M,y+=4)o.copy(u[M]).applyMatrix4(S,a),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var ss=4,Qd=[.125,.215,.35,.446,.526,.582],Us=20,Uy=256,Yo=new Qi,ep=new we,ou=null,au=0,cu=0,lu=!1,Fy=new L,ml=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Fy}=r;ou=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ip(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=np(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ou,au,cu),this._renderer.xr.enabled=lu,e.scissorTest=!1,Lr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ou=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:pi,format:On,colorSpace:vn,depthBuffer:!1},s=tp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Oy(r)),this._blurMaterial=zy(r,e,t),this._ggxMaterial=By(r,e,t)}return s}_compileMaterial(e){let t=new Ge(new mt,e);this._renderer.compile(t,Yo)}_sceneToCubeUV(e,t,n,s,r){let c=new $t(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(ep),u.toneMapping=Qn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ge(new tt,new qt({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,S=e.background;S?S.isColor&&(g.color.copy(S),e.background=null,p=!0):(g.color.copy(ep),p=!0);for(let M=0;M<6;M++){let y=M%3;y===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[M],r.y,r.z)):y===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[M]));let w=this._cubeSize;Lr(s,y*w,M>2?w:0,w,w),u.setRenderTarget(s),p&&u.render(x,c),u.render(e,c)}u.toneMapping=d,u.autoClear=f,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===es||e.mapping===Ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ip()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=np());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Lr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Yo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),f=0+l*1.25,d=u*f,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-ss?n-m+ss:0),p=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=m-t,Lr(r,g,p,3*x,2*x),s.setRenderTarget(r),s.render(a,Yo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,Lr(e,g,p,3*x,2*x),s.setRenderTarget(e),s.render(a,Yo)}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[s];u.material=l;let f=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Us-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):Us;g>Us&&Oe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Us}`);let p=[],S=0;for(let T=0;T<Us;++T){let _=T/x,b=Math.exp(-_*_/2);p.push(b),T===0?S+=b:T<g&&(S+=2*b)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=m,f.mipInt.value=M-n;let y=this._sizeLods[s],w=3*y*(s>M-ss?s-M+ss:0),E=4*(this._cubeSize-y);Lr(t,w,E,3*y,2*y),c.setRenderTarget(t),c.render(u,Yo)}};function Oy(i){let e=[],t=[],n=[],s=i,r=i-ss+1+Qd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ss?c=Qd[o-i+ss-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,x=3,g=2,p=1,S=new Float32Array(x*m*d),M=new Float32Array(g*m*d),y=new Float32Array(p*m*d);for(let E=0;E<d;E++){let T=E%3*2/3-1,_=E>2?0:-1,b=[T,_,0,T+2/3,_,0,T+2/3,_+1,0,T,_,0,T+2/3,_+1,0,T,_+1,0];S.set(b,x*m*E),M.set(f,g*m*E);let C=[E,E,E,E,E,E];y.set(C,p*m*E)}let w=new mt;w.setAttribute("position",new Wt(S,x)),w.setAttribute("uv",new Wt(M,g)),w.setAttribute("faceIndex",new Wt(y,p)),n.push(new Ge(w,null)),s>ss&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function tp(i,e,t){let n=new Dn(i,e,t);return n.texture.mapping=Bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function By(i,e,t){return new Sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Uy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_l(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function zy(i,e,t){let n=new Float32Array(Us),s=new L(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_l(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function np(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_l(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function ip(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function _l(){return`

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
	`}var gl=class extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new uo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new tt(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:di});r.uniforms.tEquirect.value=t;let o=new Ge(s,r),a=t.minFilter;return t.minFilter===ei&&(t.minFilter=Bt),new vc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function Hy(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Tc||d===Ac)if(e.has(f)){let m=e.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let x=new gl(m.height);return x.fromEquirectangularTexture(i,f),e.set(f,x),f.addEventListener("dispose",l),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,m=d===Tc||d===Ac,x=d===es||d===Ls;if(m||x){let g=t.get(f),p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new ml(i)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let S=f.image;return m&&S&&S.height>0||x&&S&&c(S)?(n===null&&(n=new ml(i)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,d){return d===Tc?f.mapping=es:d===Ac&&(f.mapping=Ls),f}function c(f){let d=0,m=6;for(let x=0;x<m;x++)f[x]!==void 0&&d++;return d===m}function l(f){let d=f.target;d.removeEventListener("dispose",l);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function ky(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&_s("WebGLRenderer: "+n+" extension not supported."),s}}}function Gy(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let d in f)e.update(f[d],i.ARRAY_BUFFER)}function l(u){let f=[],d=u.index,m=u.attributes.position,x=0;if(m===void 0)return;if(d!==null){let S=d.array;x=d.version;for(let M=0,y=S.length;M<y;M+=3){let w=S[M+0],E=S[M+1],T=S[M+2];f.push(w,E,E,T,T,w)}}else{let S=m.array;x=m.version;for(let M=0,y=S.length/3-1;M<y;M+=3){let w=M+0,E=M+1,T=M+2;f.push(w,E,E,T,T,w)}}let g=new(m.count>=65535?oo:ro)(f,1);g.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Vy(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){i.drawElements(n,f,r,u*o),t.update(f,n,1)}function l(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let x=0;for(let g=0;g<d;g++)x+=f[g];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Wy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ke("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Xy(i,e,t){let n=new WeakMap,s=new St;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let b=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],M=0;d===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let y=a.attributes.position.count*M,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*w*4*u),T=new to(E,y,w,u);T.type=Fn,T.needsUpdate=!0;let _=M*4;for(let C=0;C<u;C++){let I=g[C],N=p[C],W=S[C],X=y*w*4*C;for(let D=0;D<I.count;D++){let H=D*_;d===!0&&(s.fromBufferAttribute(I,D),E[X+H+0]=s.x,E[X+H+1]=s.y,E[X+H+2]=s.z,E[X+H+3]=0),m===!0&&(s.fromBufferAttribute(N,D),E[X+H+4]=s.x,E[X+H+5]=s.y,E[X+H+6]=s.z,E[X+H+7]=0),x===!0&&(s.fromBufferAttribute(W,D),E[X+H+8]=s.x,E[X+H+9]=s.y,E[X+H+10]=s.z,E[X+H+11]=W.itemSize===4?s.w:1)}}f={count:u,texture:T,size:new _e(y,w)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let m=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function qy(i,e,t,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Yy={[zh]:"LINEAR_TONE_MAPPING",[Hh]:"REINHARD_TONE_MAPPING",[kh]:"CINEON_TONE_MAPPING",[Oo]:"ACES_FILMIC_TONE_MAPPING",[Vh]:"AGX_TONE_MAPPING",[Wh]:"NEUTRAL_TONE_MAPPING",[Gh]:"CUSTOM_TONE_MAPPING"};function Zy(i,e,t,n,s,r){let o=new Dn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Ri(e,t):void 0}),a=new Dn(e,t,{type:pi,depthBuffer:!1,stencilBuffer:!1}),c=new mt;c.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Je([0,2,0,0,2,0],2));let l=new hc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ge(c,l),u=new Qi(-1,1,1,-1,0,1),f=null,d=null,m=!1,x,g=null,p=[],S=!1;this.setSize=function(M,y){o.setSize(M,y),a.setSize(M,y);for(let w=0;w<p.length;w++){let E=p[w];E.setSize&&E.setSize(M,y)}},this.setEffects=function(M){p=M,S=p.length>0&&p[0].isRenderPass===!0;let y=o.width,w=o.height;for(let E=0;E<p.length;E++){let T=p[E];T.setSize&&T.setSize(y,w)}},this.begin=function(M,y){if(m||M.toneMapping===Qn&&p.length===0)return!1;if(g=y,y!==null){let w=y.width,E=y.height;(o.width!==w||o.height!==E)&&this.setSize(w,E)}return S===!1&&M.setRenderTarget(o),x=M.toneMapping,M.toneMapping=Qn,!0},this.hasRenderPass=function(){return S},this.end=function(M,y){M.toneMapping=x,m=!0;let w=o,E=a;for(let T=0;T<p.length;T++){let _=p[T];if(_.enabled!==!1&&(_.render(M,E,w,y),_.needsSwap!==!1)){let b=w;w=E,E=b}}if(f!==M.outputColorSpace||d!==M.toneMapping){f=M.outputColorSpace,d=M.toneMapping,l.defines={},lt.getTransfer(f)===_t&&(l.defines.SRGB_TRANSFER="");let T=Yy[d];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,M.setRenderTarget(g),M.render(h,u),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}var bp=new Qt,fu=new Ri(1,1),Ep=new to,Tp=new ec,Ap=new uo,sp=[],rp=[],op=new Float32Array(16),ap=new Float32Array(9),cp=new Float32Array(4);function Dr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=sp[s];if(r===void 0&&(r=new Float32Array(s),sp[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function en(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function tn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yl(i,e){let t=rp[e];t===void 0&&(t=new Int32Array(e),rp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ky(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Jy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2fv(this.addr,e),tn(t,e)}}function $y(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;i.uniform3fv(this.addr,e),tn(t,e)}}function jy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4fv(this.addr,e),tn(t,e)}}function Qy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;cp.set(n),i.uniformMatrix2fv(this.addr,!1,cp),tn(t,n)}}function ev(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;ap.set(n),i.uniformMatrix3fv(this.addr,!1,ap),tn(t,n)}}function tv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;op.set(n),i.uniformMatrix4fv(this.addr,!1,op),tn(t,n)}}function nv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2iv(this.addr,e),tn(t,e)}}function sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3iv(this.addr,e),tn(t,e)}}function rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4iv(this.addr,e),tn(t,e)}}function ov(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function av(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2uiv(this.addr,e),tn(t,e)}}function cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3uiv(this.addr,e),tn(t,e)}}function lv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4uiv(this.addr,e),tn(t,e)}}function hv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(fu.compareFunction=t.isReversedDepthBuffer()?fl:ul,r=fu):r=bp,t.setTexture2D(e||r,s)}function uv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Tp,s)}function fv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ap,s)}function dv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ep,s)}function pv(i){switch(i){case 5126:return Ky;case 35664:return Jy;case 35665:return $y;case 35666:return jy;case 35674:return Qy;case 35675:return ev;case 35676:return tv;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return sv;case 35669:case 35673:return rv;case 5125:return ov;case 36294:return av;case 36295:return cv;case 36296:return lv;case 35678:case 36198:case 36298:case 36306:case 35682:return hv;case 35679:case 36299:case 36307:return uv;case 35680:case 36300:case 36308:case 36293:return fv;case 36289:case 36303:case 36311:case 36292:return dv}}function mv(i,e){i.uniform1fv(this.addr,e)}function gv(i,e){let t=Dr(e,this.size,2);i.uniform2fv(this.addr,t)}function xv(i,e){let t=Dr(e,this.size,3);i.uniform3fv(this.addr,t)}function _v(i,e){let t=Dr(e,this.size,4);i.uniform4fv(this.addr,t)}function yv(i,e){let t=Dr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function vv(i,e){let t=Dr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Mv(i,e){let t=Dr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Sv(i,e){i.uniform1iv(this.addr,e)}function bv(i,e){i.uniform2iv(this.addr,e)}function Ev(i,e){i.uniform3iv(this.addr,e)}function Tv(i,e){i.uniform4iv(this.addr,e)}function Av(i,e){i.uniform1uiv(this.addr,e)}function wv(i,e){i.uniform2uiv(this.addr,e)}function Rv(i,e){i.uniform3uiv(this.addr,e)}function Cv(i,e){i.uniform4uiv(this.addr,e)}function Iv(i,e,t){let n=this.cache,s=e.length,r=yl(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=fu:o=bp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Pv(i,e,t){let n=this.cache,s=e.length,r=yl(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Tp,r[o])}function Lv(i,e,t){let n=this.cache,s=e.length,r=yl(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ap,r[o])}function Nv(i,e,t){let n=this.cache,s=e.length,r=yl(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ep,r[o])}function Dv(i){switch(i){case 5126:return mv;case 35664:return gv;case 35665:return xv;case 35666:return _v;case 35674:return yv;case 35675:return vv;case 35676:return Mv;case 5124:case 35670:return Sv;case 35667:case 35671:return bv;case 35668:case 35672:return Ev;case 35669:case 35673:return Tv;case 5125:return Av;case 36294:return wv;case 36295:return Rv;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Iv;case 35679:case 36299:case 36307:return Pv;case 35680:case 36300:case 36308:case 36293:return Lv;case 36289:case 36303:case 36311:case 36292:return Nv}}var du=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=pv(t.type)}},pu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dv(t.type)}},mu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},hu=/(\w+)(\])?(\[|\.)?/g;function lp(i,e){i.seq.push(e),i.map[e.id]=e}function Uv(i,e,t){let n=i.name,s=n.length;for(hu.lastIndex=0;;){let r=hu.exec(n),o=hu.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){lp(t,l===void 0?new du(a,i,e):new pu(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new mu(a),lp(t,u)),t=u}}}var Nr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Uv(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function hp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Fv=37297,Ov=0;function Bv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var up=new et;function zv(i){lt._getMatrix(up,lt.workingColorSpace,i);let e=`mat3( ${up.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case Qr:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function fp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Bv(i.getShaderSource(e),a)}else return r}function Hv(i,e){let t=zv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var kv={[zh]:"Linear",[Hh]:"Reinhard",[kh]:"Cineon",[Oo]:"ACESFilmic",[Vh]:"AgX",[Wh]:"Neutral",[Gh]:"Custom"};function Gv(i,e){let t=kv[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var pl=new L;function Vv(){lt.getLuminanceCoefficients(pl);let i=pl.x.toFixed(4),e=pl.y.toFixed(4),t=pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function Xv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ko(i){return i!==""}function dp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Yv=/^[ \t]*#include +<([\w\d./]+)>/gm;function gu(i){return i.replace(Yv,Kv)}var Zv=new Map;function Kv(i,e){let t=at[e];if(t===void 0){let n=Zv.get(e);if(n!==void 0)t=at[n],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return gu(t)}var Jv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mp(i){return i.replace(Jv,$v)}function $v(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var jv={[Uo]:"SHADOWMAP_TYPE_PCF",[wr]:"SHADOWMAP_TYPE_VSM"};function Qv(i){return jv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var eM={[es]:"ENVMAP_TYPE_CUBE",[Ls]:"ENVMAP_TYPE_CUBE",[Bo]:"ENVMAP_TYPE_CUBE_UV"};function tM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":eM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var nM={[Ls]:"ENVMAP_MODE_REFRACTION"};function iM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":nM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var sM={[Ec]:"ENVMAP_BLENDING_MULTIPLY",[Cd]:"ENVMAP_BLENDING_MIX",[Id]:"ENVMAP_BLENDING_ADD"};function rM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":sM[i.combine]||"ENVMAP_BLENDING_NONE"}function oM(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function aM(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Qv(t),l=tM(t),h=iM(t),u=rM(t),f=oM(t),d=Wv(t),m=Xv(r),x=s.createProgram(),g,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ko).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ko).join(`
`),p.length>0&&(p+=`
`)):(g=[gp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),p=[gp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?at.tonemapping_pars_fragment:"",t.toneMapping!==Qn?Gv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,Hv("linearToOutputTexel",t.outputColorSpace),Vv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ko).join(`
`)),o=gu(o),o=dp(o,t),o=pp(o,t),a=gu(a),a=dp(a,t),a=pp(a,t),o=mp(o),a=mp(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=S+g+o,y=S+p+a,w=hp(s,s.VERTEX_SHADER,M),E=hp(s,s.FRAGMENT_SHADER,y);s.attachShader(x,w),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(I){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(x)||"",W=s.getShaderInfoLog(w)||"",X=s.getShaderInfoLog(E)||"",D=N.trim(),H=W.trim(),P=X.trim(),B=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,E);else{let Q=fp(s,w,"vertex"),te=fp(s,E,"fragment");Ke("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+D+`
`+Q+`
`+te)}else D!==""?Oe("WebGLProgram: Program Info Log:",D):(H===""||P==="")&&(G=!1);G&&(I.diagnostics={runnable:B,programLog:D,vertexShader:{log:H,prefix:g},fragmentShader:{log:P,prefix:p}})}s.deleteShader(w),s.deleteShader(E),_=new Nr(s,x),b=qv(s,x)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,Fv)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ov++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=E,this}var cM=0,xu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new _u(e),t.set(e,n)),n}},_u=class{constructor(e){this.id=cM++,this.code=e,this.usedTimes=0}};function lM(i){return i===ns||i===Vo||i===Wo}function hM(i,e,t,n,s,r){let o=new no,a=new xu,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,b,C,I,N,W){let X=I.fog,D=N.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,P=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,B=e.get(_.envMap||H,P),G=B&&B.mapping===Bo?B.image.height:null,Q=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&Oe("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let te=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ce=te!==void 0?te.length:0,ye=0;D.morphAttributes.position!==void 0&&(ye=1),D.morphAttributes.normal!==void 0&&(ye=2),D.morphAttributes.color!==void 0&&(ye=3);let Te,Me,V,ne;if(Q){let Ue=gi[Q];Te=Ue.vertexShader,Me=Ue.fragmentShader}else{Te=_.vertexShader,Me=_.fragmentShader;let Ue=a.getVertexShaderStage(_),gt=a.getFragmentShaderStage(_);a.update(_,Ue,gt),V=Ue.id,ne=gt.id}let ee=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),Ee=N.isInstancedMesh===!0,He=N.isBatchedMesh===!0,je=!!_.map,We=!!_.matcap,se=!!B,oe=!!_.aoMap,ae=!!_.lightMap,ve=!!_.bumpMap&&_.wireframe===!1,pe=!!_.normalMap,be=!!_.displacementMap,fe=!!_.emissiveMap,Fe=!!_.metalnessMap,Le=!!_.roughnessMap,U=_.anisotropy>0,Qe=_.clearcoat>0,Ce=_.dispersion>0,R=_.iridescence>0,v=_.sheen>0,O=_.transmission>0,k=U&&!!_.anisotropyMap,Z=Qe&&!!_.clearcoatMap,he=Qe&&!!_.clearcoatNormalMap,de=Qe&&!!_.clearcoatRoughnessMap,J=R&&!!_.iridescenceMap,ie=R&&!!_.iridescenceThicknessMap,xe=v&&!!_.sheenColorMap,Ne=v&&!!_.sheenRoughnessMap,j=!!_.specularMap,ue=!!_.specularColorMap,Ae=!!_.specularIntensityMap,Be=O&&!!_.transmissionMap,qe=O&&!!_.thicknessMap,F=!!_.gradientMap,le=!!_.alphaMap,$=_.alphaTest>0,ge=!!_.alphaHash,me=!!_.extensions,re=Qn;_.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(re=i.toneMapping);let De={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:Te,fragmentShader:Me,defines:_.defines,customVertexShaderID:V,customFragmentShaderID:ne,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:He,batchingColor:He&&N._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&N.instanceColor!==null,instancingMorph:Ee&&N.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:je,matcap:We,envMap:se,envMapMode:se&&B.mapping,envMapCubeUVHeight:G,aoMap:oe,lightMap:ae,bumpMap:ve,normalMap:pe,displacementMap:be,emissiveMap:fe,normalMapObjectSpace:pe&&_.normalMapType===Dd,normalMapTangentSpace:pe&&_.normalMapType===qo,packedNormalMap:pe&&_.normalMapType===qo&&lM(_.normalMap.format),metalnessMap:Fe,roughnessMap:Le,anisotropy:U,anisotropyMap:k,clearcoat:Qe,clearcoatMap:Z,clearcoatNormalMap:he,clearcoatRoughnessMap:de,dispersion:Ce,iridescence:R,iridescenceMap:J,iridescenceThicknessMap:ie,sheen:v,sheenColorMap:xe,sheenRoughnessMap:Ne,specularMap:j,specularColorMap:ue,specularIntensityMap:Ae,transmission:O,transmissionMap:Be,thicknessMap:qe,gradientMap:F,opaque:_.transparent===!1&&_.blending===ys&&_.alphaToCoverage===!1,alphaMap:le,alphaTest:$,alphaHash:ge,combine:_.combine,mapUv:je&&m(_.map.channel),aoMapUv:oe&&m(_.aoMap.channel),lightMapUv:ae&&m(_.lightMap.channel),bumpMapUv:ve&&m(_.bumpMap.channel),normalMapUv:pe&&m(_.normalMap.channel),displacementMapUv:be&&m(_.displacementMap.channel),emissiveMapUv:fe&&m(_.emissiveMap.channel),metalnessMapUv:Fe&&m(_.metalnessMap.channel),roughnessMapUv:Le&&m(_.roughnessMap.channel),anisotropyMapUv:k&&m(_.anisotropyMap.channel),clearcoatMapUv:Z&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:he&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&m(_.sheenRoughnessMap.channel),specularMapUv:j&&m(_.specularMap.channel),specularColorMapUv:ue&&m(_.specularColorMap.channel),specularIntensityMapUv:Ae&&m(_.specularIntensityMap.channel),transmissionMapUv:Be&&m(_.transmissionMap.channel),thicknessMapUv:qe&&m(_.thicknessMap.channel),alphaMapUv:le&&m(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(pe||U),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!D.attributes.uv&&(je||le),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&pe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Se,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:ye,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:re,decodeVideoTexture:je&&_.map.isVideoTexture===!0&&lt.getTransfer(_.map.colorSpace)===_t,decodeVideoTextureEmissive:fe&&_.emissiveMap.isVideoTexture===!0&&lt.getTransfer(_.emissiveMap.colorSpace)===_t,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Lt,flipSided:_.side===cn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:me&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&_.extensions.multiDraw===!0||He)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return De.vertexUv1s=c.has(1),De.vertexUv2s=c.has(2),De.vertexUv3s=c.has(3),c.clear(),De}function g(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)b.push(C),b.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(b,_),S(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function p(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function S(_,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function M(_){let b=d[_.type],C;if(b){let I=gi[b];C=$d.clone(I.uniforms)}else C=_.uniforms;return C}function y(_,b){let C=h.get(b);return C!==void 0?++C.usedTimes:(C=new aM(i,b,_,s),l.push(C),h.set(b,C)),C}function w(_){if(--_.usedTimes===0){let b=l.indexOf(_);l[b]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){a.remove(_)}function T(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:M,acquireProgram:y,releaseProgram:w,releaseShaderCache:E,programs:l,dispose:T}}function uM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function fM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function xp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _p(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,x,g,p){let S=i[e];return S===void 0?(S={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:p},i[e]=S):(S.id=f.id,S.object=f,S.geometry=d,S.material=m,S.materialVariant=o(f),S.groupOrder=x,S.renderOrder=f.renderOrder,S.z=g,S.group=p),e++,S}function c(f,d,m,x,g,p){let S=a(f,d,m,x,g,p);m.transmission>0?n.push(S):m.transparent===!0?s.push(S):t.push(S)}function l(f,d,m,x,g,p){let S=a(f,d,m,x,g,p);m.transmission>0?n.unshift(S):m.transparent===!0?s.unshift(S):t.unshift(S)}function h(f,d,m){t.length>1&&t.sort(f||fM),n.length>1&&n.sort(d||xp),s.length>1&&s.sort(d||xp),m&&(t.reverse(),n.reverse(),s.reverse())}function u(){for(let f=e,d=i.length;f<d;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function dM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new _p,i.set(n,[o])):s>=r.length?(o=new _p,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function pM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new we};break;case"SpotLight":t={position:new L,direction:new L,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function mM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var gM=0;function xM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _M(i){let e=new pM,t=mM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new Ze,o=new Ze;function a(l){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,S=0,M=0,y=0,w=0,E=0,T=0;l.sort(xM);for(let b=0,C=l.length;b<C;b++){let I=l[b],N=I.color,W=I.intensity,X=I.distance,D=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ns?D=I.shadow.map.texture:D=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=N.r*W,u+=N.g*W,f+=N.b*W;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],W);T++}else if(I.isDirectionalLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let P=I.shadow,B=t.get(I);B.shadowIntensity=P.intensity,B.shadowBias=P.bias,B.shadowNormalBias=P.normalBias,B.shadowRadius=P.radius,B.shadowMapSize=P.mapSize,n.directionalShadow[d]=B,n.directionalShadowMap[d]=D,n.directionalShadowMatrix[d]=I.shadow.matrix,S++}n.directional[d]=H,d++}else if(I.isSpotLight){let H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(N).multiplyScalar(W),H.distance=X,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[x]=H;let P=I.shadow;if(I.map&&(n.spotLightMap[w]=I.map,w++,P.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[x]=P.matrix,I.castShadow){let B=t.get(I);B.shadowIntensity=P.intensity,B.shadowBias=P.bias,B.shadowNormalBias=P.normalBias,B.shadowRadius=P.radius,B.shadowMapSize=P.mapSize,n.spotShadow[x]=B,n.spotShadowMap[x]=D,y++}x++}else if(I.isRectAreaLight){let H=e.get(I);H.color.copy(N).multiplyScalar(W),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=H,g++}else if(I.isPointLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let P=I.shadow,B=t.get(I);B.shadowIntensity=P.intensity,B.shadowBias=P.bias,B.shadowNormalBias=P.normalBias,B.shadowRadius=P.radius,B.shadowMapSize=P.mapSize,B.shadowCameraNear=P.camera.near,B.shadowCameraFar=P.camera.far,n.pointShadow[m]=B,n.pointShadowMap[m]=D,n.pointShadowMatrix[m]=I.shadow.matrix,M++}n.point[m]=H,m++}else if(I.isHemisphereLight){let H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(W),H.groundColor.copy(I.groundColor).multiplyScalar(W),n.hemi[p]=H,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let _=n.hash;(_.directionalLength!==d||_.pointLength!==m||_.spotLength!==x||_.rectAreaLength!==g||_.hemiLength!==p||_.numDirectionalShadows!==S||_.numPointShadows!==M||_.numSpotShadows!==y||_.numSpotMaps!==w||_.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+w-E,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,_.directionalLength=d,_.pointLength=m,_.spotLength=x,_.rectAreaLength=g,_.hemiLength=p,_.numDirectionalShadows=S,_.numPointShadows=M,_.numSpotShadows=y,_.numSpotMaps=w,_.numLightProbes=T,n.version=gM++)}function c(l,h){let u=0,f=0,d=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){let M=l[p];if(M.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(M.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),d++}else if(M.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function yp(i){let e=new _M(i),t=[],n=[],s=[];function r(f){u.camera=f,t.length=0,n.length=0,s.length=0}function o(f){t.push(f)}function a(f){n.push(f)}function c(f){s.push(f)}function l(){e.setup(t)}function h(f){e.setupView(t,f)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function yM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new yp(i),e.set(s,[a])):r>=o.length?(a=new yp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var vM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MM=`uniform sampler2D shadow_pass;
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
}`,SM=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],bM=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],vp=new Ze,Zo=new L,uu=new L;function EM(i,e,t){let n=new Mr,s=new _e,r=new _e,o=new St,a=new uc,c=new fc,l={},h=t.maxTextureSize,u={[bn]:cn,[cn]:bn,[Lt]:Lt},f=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:vM,fragmentShader:MM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new mt;m.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ge(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uo;let p=this.type;this.render=function(E,T,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===hd&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Uo);let b=i.getRenderTarget(),C=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),N=i.state;N.setBlending(di),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let W=p!==this.type;W&&T.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(D=>D.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,D=E.length;X<D;X++){let H=E[X],P=H.shadow;if(P===void 0){Oe("WebGLShadowMap:",H,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;s.copy(P.mapSize);let B=P.getFrameExtents();s.multiply(B),r.copy(P.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/B.x),s.x=r.x*B.x,P.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/B.y),s.y=r.y*B.y,P.mapSize.y=r.y));let G=i.state.buffers.depth.getReversed();if(P.camera._reversedDepth=G,P.map===null||W===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===wr){if(H.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new Dn(s.x,s.y,{format:ns,type:pi,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),P.map.texture.name=H.name+".shadowMap",P.map.depthTexture=new Ri(s.x,s.y,Fn),P.map.depthTexture.name=H.name+".shadowMapDepth",P.map.depthTexture.format=li,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Xt,P.map.depthTexture.magFilter=Xt}else H.isPointLight?(P.map=new gl(s.x),P.map.depthTexture=new ic(s.x,ti)):(P.map=new Dn(s.x,s.y),P.map.depthTexture=new Ri(s.x,s.y,ti)),P.map.depthTexture.name=H.name+".shadowMap",P.map.depthTexture.format=li,this.type===Uo?(P.map.depthTexture.compareFunction=G?fl:ul,P.map.depthTexture.minFilter=Bt,P.map.depthTexture.magFilter=Bt):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Xt,P.map.depthTexture.magFilter=Xt);P.camera.updateProjectionMatrix()}let Q=P.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<Q;te++){if(P.map.isWebGLCubeRenderTarget)i.setRenderTarget(P.map,te),i.clear();else{te===0&&(i.setRenderTarget(P.map),i.clear());let ce=P.getViewport(te);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),N.viewport(o)}if(H.isPointLight){let ce=P.camera,ye=P.matrix,Te=H.distance||ce.far;Te!==ce.far&&(ce.far=Te,ce.updateProjectionMatrix()),Zo.setFromMatrixPosition(H.matrixWorld),ce.position.copy(Zo),uu.copy(ce.position),uu.add(SM[te]),ce.up.copy(bM[te]),ce.lookAt(uu),ce.updateMatrixWorld(),ye.makeTranslation(-Zo.x,-Zo.y,-Zo.z),vp.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),P._frustum.setFromProjectionMatrix(vp,ce.coordinateSystem,ce.reversedDepth)}else P.updateMatrices(H);n=P.getFrustum(),y(T,_,P.camera,H,this.type)}P.isPointLightShadow!==!0&&this.type===wr&&S(P,_),P.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(b,C,I)};function S(E,T){let _=e.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Dn(s.x,s.y,{format:ns,type:pi})),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,_,f,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,_,d,x,null)}function M(E,T,_,b){let C=null,I=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)C=I;else if(C=_.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let N=C.uuid,W=T.uuid,X=l[N];X===void 0&&(X={},l[N]=X);let D=X[W];D===void 0&&(D=C.clone(),X[W]=D,T.addEventListener("dispose",w)),C=D}if(C.visible=T.visible,C.wireframe=T.wireframe,b===wr?C.side=T.shadowSide!==null?T.shadowSide:T.side:C.side=T.shadowSide!==null?T.shadowSide:u[T.side],C.alphaMap=T.alphaMap,C.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,C.map=T.map,C.clipShadows=T.clipShadows,C.clippingPlanes=T.clippingPlanes,C.clipIntersection=T.clipIntersection,C.displacementMap=T.displacementMap,C.displacementScale=T.displacementScale,C.displacementBias=T.displacementBias,C.wireframeLinewidth=T.wireframeLinewidth,C.linewidth=T.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let N=i.properties.get(C);N.light=_}return C}function y(E,T,_,b,C){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===wr)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let W=e.update(E),X=E.material;if(Array.isArray(X)){let D=W.groups;for(let H=0,P=D.length;H<P;H++){let B=D[H],G=X[B.materialIndex];if(G&&G.visible){let Q=M(E,G,b,C);E.onBeforeShadow(i,E,T,_,W,Q,B),i.renderBufferDirect(_,null,W,Q,E,B),E.onAfterShadow(i,E,T,_,W,Q,B)}}}else if(X.visible){let D=M(E,X,b,C);E.onBeforeShadow(i,E,T,_,W,D,null),i.renderBufferDirect(_,null,W,D,E,null),E.onAfterShadow(i,E,T,_,W,D,null)}}let N=E.children;for(let W=0,X=N.length;W<X;W++)y(N[W],T,_,b,C)}function w(E){E.target.removeEventListener("dispose",w);for(let _ in l){let b=l[_],C=E.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function TM(i,e){function t(){let F=!1,le=new St,$=null,ge=new St(0,0,0,0);return{setMask:function(me){$!==me&&!F&&(i.colorMask(me,me,me,me),$=me)},setLocked:function(me){F=me},setClear:function(me,re,De,Ue,gt){gt===!0&&(me*=Ue,re*=Ue,De*=Ue),le.set(me,re,De,Ue),ge.equals(le)===!1&&(i.clearColor(me,re,De,Ue),ge.copy(le))},reset:function(){F=!1,$=null,ge.set(-1,0,0,0)}}}function n(){let F=!1,le=!1,$=null,ge=null,me=null;return{setReversed:function(re){if(le!==re){let De=e.get("EXT_clip_control");re?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),le=re;let Ue=me;me=null,this.setClear(Ue)}},getReversed:function(){return le},setTest:function(re){re?ee(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(re){$!==re&&!F&&(i.depthMask(re),$=re)},setFunc:function(re){if(le&&(re=Wd[re]),ge!==re){switch(re){case Wa:i.depthFunc(i.NEVER);break;case Xa:i.depthFunc(i.ALWAYS);break;case qa:i.depthFunc(i.LESS);break;case vs:i.depthFunc(i.LEQUAL);break;case Ya:i.depthFunc(i.EQUAL);break;case Za:i.depthFunc(i.GEQUAL);break;case Ka:i.depthFunc(i.GREATER);break;case Ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=re}},setLocked:function(re){F=re},setClear:function(re){me!==re&&(me=re,le&&(re=1-re),i.clearDepth(re))},reset:function(){F=!1,$=null,ge=null,me=null,le=!1}}}function s(){let F=!1,le=null,$=null,ge=null,me=null,re=null,De=null,Ue=null,gt=null;return{setTest:function(dt){F||(dt?ee(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(dt){le!==dt&&!F&&(i.stencilMask(dt),le=dt)},setFunc:function(dt,At,Ht){($!==dt||ge!==At||me!==Ht)&&(i.stencilFunc(dt,At,Ht),$=dt,ge=At,me=Ht)},setOp:function(dt,At,Ht){(re!==dt||De!==At||Ue!==Ht)&&(i.stencilOp(dt,At,Ht),re=dt,De=At,Ue=Ht)},setLocked:function(dt){F=dt},setClear:function(dt){gt!==dt&&(i.clearStencil(dt),gt=dt)},reset:function(){F=!1,le=null,$=null,ge=null,me=null,re=null,De=null,Ue=null,gt=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f={},d=new WeakMap,m=[],x=null,g=!1,p=null,S=null,M=null,y=null,w=null,E=null,T=null,_=new we(0,0,0),b=0,C=!1,I=null,N=null,W=null,X=null,D=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),P=!1,B=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(G)[1]),P=B>=1):G.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),P=B>=2);let Q=null,te={},ce=i.getParameter(i.SCISSOR_BOX),ye=i.getParameter(i.VIEWPORT),Te=new St().fromArray(ce),Me=new St().fromArray(ye);function V(F,le,$,ge){let me=new Uint8Array(4),re=i.createTexture();i.bindTexture(F,re),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<$;De++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(le+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return re}let ne={};ne[i.TEXTURE_2D]=V(i.TEXTURE_2D,i.TEXTURE_2D,1),ne[i.TEXTURE_CUBE_MAP]=V(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[i.TEXTURE_2D_ARRAY]=V(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ne[i.TEXTURE_3D]=V(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(i.DEPTH_TEST),o.setFunc(vs),ve(!1),pe(Fh),ee(i.CULL_FACE),oe(di);function ee(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Se(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Ee(F,le){return f[F]!==le?(i.bindFramebuffer(F,le),f[F]=le,F===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=le),F===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=le),!0):!1}function He(F,le){let $=m,ge=!1;if(F){$=d.get(le),$===void 0&&($=[],d.set(le,$));let me=F.textures;if($.length!==me.length||$[0]!==i.COLOR_ATTACHMENT0){for(let re=0,De=me.length;re<De;re++)$[re]=i.COLOR_ATTACHMENT0+re;$.length=me.length,ge=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,ge=!0);ge&&i.drawBuffers($)}function je(F){return x!==F?(i.useProgram(F),x=F,!0):!1}let We={[Yi]:i.FUNC_ADD,[fd]:i.FUNC_SUBTRACT,[dd]:i.FUNC_REVERSE_SUBTRACT};We[pd]=i.MIN,We[md]=i.MAX;let se={[gd]:i.ZERO,[xd]:i.ONE,[_d]:i.SRC_COLOR,[Ga]:i.SRC_ALPHA,[Ed]:i.SRC_ALPHA_SATURATE,[Sd]:i.DST_COLOR,[vd]:i.DST_ALPHA,[yd]:i.ONE_MINUS_SRC_COLOR,[Va]:i.ONE_MINUS_SRC_ALPHA,[bd]:i.ONE_MINUS_DST_COLOR,[Md]:i.ONE_MINUS_DST_ALPHA,[Td]:i.CONSTANT_COLOR,[Ad]:i.ONE_MINUS_CONSTANT_COLOR,[wd]:i.CONSTANT_ALPHA,[Rd]:i.ONE_MINUS_CONSTANT_ALPHA};function oe(F,le,$,ge,me,re,De,Ue,gt,dt){if(F===di){g===!0&&(Se(i.BLEND),g=!1);return}if(g===!1&&(ee(i.BLEND),g=!0),F!==ud){if(F!==p||dt!==C){if((S!==Yi||w!==Yi)&&(i.blendEquation(i.FUNC_ADD),S=Yi,w=Yi),dt)switch(F){case ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fo:i.blendFunc(i.ONE,i.ONE);break;case Oh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ke("WebGLState: Invalid blending: ",F);break}else switch(F){case ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Oh:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bh:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",F);break}M=null,y=null,E=null,T=null,_.set(0,0,0),b=0,p=F,C=dt}return}me=me||le,re=re||$,De=De||ge,(le!==S||me!==w)&&(i.blendEquationSeparate(We[le],We[me]),S=le,w=me),($!==M||ge!==y||re!==E||De!==T)&&(i.blendFuncSeparate(se[$],se[ge],se[re],se[De]),M=$,y=ge,E=re,T=De),(Ue.equals(_)===!1||gt!==b)&&(i.blendColor(Ue.r,Ue.g,Ue.b,gt),_.copy(Ue),b=gt),p=F,C=!1}function ae(F,le){F.side===Lt?Se(i.CULL_FACE):ee(i.CULL_FACE);let $=F.side===cn;le&&($=!$),ve($),F.blending===ys&&F.transparent===!1?oe(di):oe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let ge=F.stencilWrite;a.setTest(ge),ge&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),fe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function ve(F){I!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),I=F)}function pe(F){F!==cd?(ee(i.CULL_FACE),F!==N&&(F===Fh?i.cullFace(i.BACK):F===ld?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),N=F}function be(F){F!==W&&(P&&i.lineWidth(F),W=F)}function fe(F,le,$){F?(ee(i.POLYGON_OFFSET_FILL),(X!==le||D!==$)&&(X=le,D=$,o.getReversed()&&(le=-le),i.polygonOffset(le,$))):Se(i.POLYGON_OFFSET_FILL)}function Fe(F){F?ee(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function Le(F){F===void 0&&(F=i.TEXTURE0+H-1),Q!==F&&(i.activeTexture(F),Q=F)}function U(F,le,$){$===void 0&&(Q===null?$=i.TEXTURE0+H-1:$=Q);let ge=te[$];ge===void 0&&(ge={type:void 0,texture:void 0},te[$]=ge),(ge.type!==F||ge.texture!==le)&&(Q!==$&&(i.activeTexture($),Q=$),i.bindTexture(F,le||ne[F]),ge.type=F,ge.texture=le)}function Qe(){let F=te[Q];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Ce(){try{i.compressedTexImage2D(...arguments)}catch(F){Ke("WebGLState:",F)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(F){Ke("WebGLState:",F)}}function v(){try{i.texSubImage2D(...arguments)}catch(F){Ke("WebGLState:",F)}}function O(){try{i.texSubImage3D(...arguments)}catch(F){Ke("WebGLState:",F)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Ke("WebGLState:",F)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Ke("WebGLState:",F)}}function he(){try{i.texStorage2D(...arguments)}catch(F){Ke("WebGLState:",F)}}function de(){try{i.texStorage3D(...arguments)}catch(F){Ke("WebGLState:",F)}}function J(){try{i.texImage2D(...arguments)}catch(F){Ke("WebGLState:",F)}}function ie(){try{i.texImage3D(...arguments)}catch(F){Ke("WebGLState:",F)}}function xe(F){return u[F]!==void 0?u[F]:i.getParameter(F)}function Ne(F,le){u[F]!==le&&(i.pixelStorei(F,le),u[F]=le)}function j(F){Te.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Te.copy(F))}function ue(F){Me.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Me.copy(F))}function Ae(F,le){let $=l.get(le);$===void 0&&($=new WeakMap,l.set(le,$));let ge=$.get(F);ge===void 0&&(ge=i.getUniformBlockIndex(le,F.name),$.set(F,ge))}function Be(F,le){let ge=l.get(le).get(F);c.get(le)!==ge&&(i.uniformBlockBinding(le,ge,F.__bindingPointIndex),c.set(le,ge))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},Q=null,te={},f={},d=new WeakMap,m=[],x=null,g=!1,p=null,S=null,M=null,y=null,w=null,E=null,T=null,_=new we(0,0,0),b=0,C=!1,I=null,N=null,W=null,X=null,D=null,Te.set(0,0,i.canvas.width,i.canvas.height),Me.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ee,disable:Se,bindFramebuffer:Ee,drawBuffers:He,useProgram:je,setBlending:oe,setMaterial:ae,setFlipSided:ve,setCullFace:pe,setLineWidth:be,setPolygonOffset:fe,setScissorTest:Fe,activeTexture:Le,bindTexture:U,unbindTexture:Qe,compressedTexImage2D:Ce,compressedTexImage3D:R,texImage2D:J,texImage3D:ie,pixelStorei:Ne,getParameter:xe,updateUBOMapping:Ae,uniformBlockBinding:Be,texStorage2D:he,texStorage3D:de,texSubImage2D:v,texSubImage3D:O,compressedTexSubImage2D:k,compressedTexSubImage3D:Z,scissor:j,viewport:ue,reset:qe}}function AM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new _e,h=new WeakMap,u=new Set,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,v){return m?new OffscreenCanvas(R,v):mr("canvas")}function g(R,v,O){let k=1,Z=Ce(R);if((Z.width>O||Z.height>O)&&(k=O/Math.max(Z.width,Z.height)),k<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let he=Math.floor(k*Z.width),de=Math.floor(k*Z.height);f===void 0&&(f=x(he,de));let J=v?x(he,de):f;return J.width=he,J.height=de,J.getContext("2d").drawImage(R,0,0,he,de),Oe("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+he+"x"+de+")."),J}else return"data"in R&&Oe("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function p(R){return R.generateMipmaps}function S(R){i.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,v,O,k,Z,he=!1){if(R!==null){if(i[R]!==void 0)return i[R];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let de;k&&(de=e.get("EXT_texture_norm16"),de||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=v;if(v===i.RED&&(O===i.FLOAT&&(J=i.R32F),O===i.HALF_FLOAT&&(J=i.R16F),O===i.UNSIGNED_BYTE&&(J=i.R8),O===i.UNSIGNED_SHORT&&de&&(J=de.R16_EXT),O===i.SHORT&&de&&(J=de.R16_SNORM_EXT)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.R8UI),O===i.UNSIGNED_SHORT&&(J=i.R16UI),O===i.UNSIGNED_INT&&(J=i.R32UI),O===i.BYTE&&(J=i.R8I),O===i.SHORT&&(J=i.R16I),O===i.INT&&(J=i.R32I)),v===i.RG&&(O===i.FLOAT&&(J=i.RG32F),O===i.HALF_FLOAT&&(J=i.RG16F),O===i.UNSIGNED_BYTE&&(J=i.RG8),O===i.UNSIGNED_SHORT&&de&&(J=de.RG16_EXT),O===i.SHORT&&de&&(J=de.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RG8UI),O===i.UNSIGNED_SHORT&&(J=i.RG16UI),O===i.UNSIGNED_INT&&(J=i.RG32UI),O===i.BYTE&&(J=i.RG8I),O===i.SHORT&&(J=i.RG16I),O===i.INT&&(J=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGB8UI),O===i.UNSIGNED_SHORT&&(J=i.RGB16UI),O===i.UNSIGNED_INT&&(J=i.RGB32UI),O===i.BYTE&&(J=i.RGB8I),O===i.SHORT&&(J=i.RGB16I),O===i.INT&&(J=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),O===i.UNSIGNED_INT&&(J=i.RGBA32UI),O===i.BYTE&&(J=i.RGBA8I),O===i.SHORT&&(J=i.RGBA16I),O===i.INT&&(J=i.RGBA32I)),v===i.RGB&&(O===i.UNSIGNED_SHORT&&de&&(J=de.RGB16_EXT),O===i.SHORT&&de&&(J=de.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),v===i.RGBA){let ie=he?Qr:lt.getTransfer(Z);O===i.FLOAT&&(J=i.RGBA32F),O===i.HALF_FLOAT&&(J=i.RGBA16F),O===i.UNSIGNED_BYTE&&(J=ie===_t?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&de&&(J=de.RGBA16_EXT),O===i.SHORT&&de&&(J=de.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function w(R,v){let O;return R?v===null||v===ti||v===Ir?O=i.DEPTH24_STENCIL8:v===Fn?O=i.DEPTH32F_STENCIL8:v===Cr&&(O=i.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ti||v===Ir?O=i.DEPTH_COMPONENT24:v===Fn?O=i.DEPTH_COMPONENT32F:v===Cr&&(O=i.DEPTH_COMPONENT16),O}function E(R,v){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Xt&&R.minFilter!==Bt?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function T(R){let v=R.target;v.removeEventListener("dispose",T),b(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&u.delete(v)}function _(R){let v=R.target;v.removeEventListener("dispose",_),I(v)}function b(R){let v=n.get(R);if(v.__webglInit===void 0)return;let O=R.source,k=d.get(O);if(k){let Z=k[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(R),Object.keys(k).length===0&&d.delete(O)}n.remove(R)}function C(R){let v=n.get(R);i.deleteTexture(v.__webglTexture);let O=R.source,k=d.get(O);delete k[v.__cacheKey],o.memory.textures--}function I(R){let v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(v.__webglFramebuffer[k]))for(let Z=0;Z<v.__webglFramebuffer[k].length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[k][Z]);else i.deleteFramebuffer(v.__webglFramebuffer[k]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[k])}else{if(Array.isArray(v.__webglFramebuffer))for(let k=0;k<v.__webglFramebuffer.length;k++)i.deleteFramebuffer(v.__webglFramebuffer[k]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let k=0;k<v.__webglColorRenderbuffer.length;k++)v.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[k]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=R.textures;for(let k=0,Z=O.length;k<Z;k++){let he=n.get(O[k]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),o.memory.textures--),n.remove(O[k])}n.remove(R)}let N=0;function W(){N=0}function X(){return N}function D(R){N=R}function H(){let R=N;return R>=s.maxTextures&&Oe("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),N+=1,R}function P(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function B(R,v){let O=n.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&O.__version!==R.version){let k=R.image;if(k===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(O,R,v);return}}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function G(R,v){let O=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){Se(O,R,v);return}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function Q(R,v){let O=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){Se(O,R,v);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function te(R,v){let O=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&O.__version!==R.version){Ee(O,R,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}let ce={[Vn]:i.REPEAT,[kn]:i.CLAMP_TO_EDGE,[dr]:i.MIRRORED_REPEAT},ye={[Xt]:i.NEAREST,[wc]:i.NEAREST_MIPMAP_NEAREST,[Ns]:i.NEAREST_MIPMAP_LINEAR,[Bt]:i.LINEAR,[Rr]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},Te={[Ud]:i.NEVER,[Hd]:i.ALWAYS,[Fd]:i.LESS,[ul]:i.LEQUAL,[Od]:i.EQUAL,[fl]:i.GEQUAL,[Bd]:i.GREATER,[zd]:i.NOTEQUAL};function Me(R,v){if(v.type===Fn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Bt||v.magFilter===Rr||v.magFilter===Ns||v.magFilter===ei||v.minFilter===Bt||v.minFilter===Rr||v.minFilter===Ns||v.minFilter===ei)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ce[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ce[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ce[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ye[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ye[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Te[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Xt||v.minFilter!==Ns&&v.minFilter!==ei||v.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function V(R,v){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",T));let k=v.source,Z=d.get(k);Z===void 0&&(Z={},d.set(k,Z));let he=P(v);if(he!==R.__cacheKey){Z[he]===void 0&&(Z[he]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Z[he].usedTimes++;let de=Z[R.__cacheKey];de!==void 0&&(Z[R.__cacheKey].usedTimes--,de.usedTimes===0&&C(v)),R.__cacheKey=he,R.__webglTexture=Z[he].texture}return O}function ne(R,v,O){return Math.floor(Math.floor(R/O)/v)}function ee(R,v,O,k){let he=R.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,O,k,v.data);else{he.sort((Ne,j)=>Ne.start-j.start);let de=0;for(let Ne=1;Ne<he.length;Ne++){let j=he[de],ue=he[Ne],Ae=j.start+j.count,Be=ne(ue.start,v.width,4),qe=ne(j.start,v.width,4);ue.start<=Ae+1&&Be===qe&&ne(ue.start+ue.count-1,v.width,4)===Be?j.count=Math.max(j.count,ue.start+ue.count-j.start):(++de,he[de]=ue)}he.length=de+1;let J=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),xe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Ne=0,j=he.length;Ne<j;Ne++){let ue=he[Ne],Ae=Math.floor(ue.start/4),Be=Math.ceil(ue.count/4),qe=Ae%v.width,F=Math.floor(Ae/v.width),le=Be,$=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,qe,F,le,$,O,k,v.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,xe)}}function Se(R,v,O){let k=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(k=i.TEXTURE_3D);let Z=V(R,v),he=v.source;t.bindTexture(k,R.__webglTexture,i.TEXTURE0+O);let de=n.get(he);if(he.version!==de.__version||Z===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let $=lt.getPrimaries(lt.workingColorSpace),ge=v.colorSpace===Fi?null:lt.getPrimaries(v.colorSpace),me=v.colorSpace===Fi||$===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let ie=g(v.image,!1,s.maxTextureSize);ie=Qe(v,ie);let xe=r.convert(v.format,v.colorSpace),Ne=r.convert(v.type),j=y(v.internalFormat,xe,Ne,v.normalized,v.colorSpace,v.isVideoTexture);Me(k,v);let ue,Ae=v.mipmaps,Be=v.isVideoTexture!==!0,qe=de.__version===void 0||Z===!0,F=he.dataReady,le=E(v,ie);if(v.isDepthTexture)j=w(v.format===ts,v.type),qe&&(Be?t.texStorage2D(i.TEXTURE_2D,1,j,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,j,ie.width,ie.height,0,xe,Ne,null));else if(v.isDataTexture)if(Ae.length>0){Be&&qe&&t.texStorage2D(i.TEXTURE_2D,le,j,Ae[0].width,Ae[0].height);for(let $=0,ge=Ae.length;$<ge;$++)ue=Ae[$],Be?F&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ue.width,ue.height,xe,Ne,ue.data):t.texImage2D(i.TEXTURE_2D,$,j,ue.width,ue.height,0,xe,Ne,ue.data);v.generateMipmaps=!1}else Be?(qe&&t.texStorage2D(i.TEXTURE_2D,le,j,ie.width,ie.height),F&&ee(v,ie,xe,Ne)):t.texImage2D(i.TEXTURE_2D,0,j,ie.width,ie.height,0,xe,Ne,ie.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Be&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,j,Ae[0].width,Ae[0].height,ie.depth);for(let $=0,ge=Ae.length;$<ge;$++)if(ue=Ae[$],v.format!==On)if(xe!==null)if(Be){if(F)if(v.layerUpdates.size>0){let me=ru(ue.width,ue.height,v.format,v.type);for(let re of v.layerUpdates){let De=ue.data.subarray(re*me/ue.data.BYTES_PER_ELEMENT,(re+1)*me/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,re,ue.width,ue.height,1,xe,De)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ue.width,ue.height,ie.depth,xe,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,j,ue.width,ue.height,ie.depth,0,ue.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ue.width,ue.height,ie.depth,xe,Ne,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,j,ue.width,ue.height,ie.depth,0,xe,Ne,ue.data)}else{Be&&qe&&t.texStorage2D(i.TEXTURE_2D,le,j,Ae[0].width,Ae[0].height);for(let $=0,ge=Ae.length;$<ge;$++)ue=Ae[$],v.format!==On?xe!==null?Be?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,ue.width,ue.height,xe,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,$,j,ue.width,ue.height,0,ue.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?F&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ue.width,ue.height,xe,Ne,ue.data):t.texImage2D(i.TEXTURE_2D,$,j,ue.width,ue.height,0,xe,Ne,ue.data)}else if(v.isDataArrayTexture)if(Be){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,j,ie.width,ie.height,ie.depth),F)if(v.layerUpdates.size>0){let $=ru(ie.width,ie.height,v.format,v.type);for(let ge of v.layerUpdates){let me=ie.data.subarray(ge*$/ie.data.BYTES_PER_ELEMENT,(ge+1)*$/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ge,ie.width,ie.height,1,xe,Ne,me)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,xe,Ne,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,j,ie.width,ie.height,ie.depth,0,xe,Ne,ie.data);else if(v.isData3DTexture)Be?(qe&&t.texStorage3D(i.TEXTURE_3D,le,j,ie.width,ie.height,ie.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,xe,Ne,ie.data)):t.texImage3D(i.TEXTURE_3D,0,j,ie.width,ie.height,ie.depth,0,xe,Ne,ie.data);else if(v.isFramebufferTexture){if(qe)if(Be)t.texStorage2D(i.TEXTURE_2D,le,j,ie.width,ie.height);else{let $=ie.width,ge=ie.height;for(let me=0;me<le;me++)t.texImage2D(i.TEXTURE_2D,me,j,$,ge,0,xe,Ne,null),$>>=1,ge>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),ie.parentNode!==$){$.appendChild(ie),u.add(v),$.onpaint=ge=>{let me=ge.changedElements;for(let re of u)me.includes(re.image)&&(re.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{let me=i.RGBA,re=i.RGBA,De=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,me,re,De,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Be&&qe){let $=Ce(Ae[0]);t.texStorage2D(i.TEXTURE_2D,le,j,$.width,$.height)}for(let $=0,ge=Ae.length;$<ge;$++)ue=Ae[$],Be?F&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,xe,Ne,ue):t.texImage2D(i.TEXTURE_2D,$,j,xe,Ne,ue);v.generateMipmaps=!1}else if(Be){if(qe){let $=Ce(ie);t.texStorage2D(i.TEXTURE_2D,le,j,$.width,$.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,Ne,ie)}else t.texImage2D(i.TEXTURE_2D,0,j,xe,Ne,ie);p(v)&&S(k),de.__version=he.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Ee(R,v,O){if(v.image.length!==6)return;let k=V(R,v),Z=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+O);let he=n.get(Z);if(Z.version!==he.__version||k===!0){t.activeTexture(i.TEXTURE0+O);let de=lt.getPrimaries(lt.workingColorSpace),J=v.colorSpace===Fi?null:lt.getPrimaries(v.colorSpace),ie=v.colorSpace===Fi||de===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let xe=v.isCompressedTexture||v.image[0].isCompressedTexture,Ne=v.image[0]&&v.image[0].isDataTexture,j=[];for(let re=0;re<6;re++)!xe&&!Ne?j[re]=g(v.image[re],!0,s.maxCubemapSize):j[re]=Ne?v.image[re].image:v.image[re],j[re]=Qe(v,j[re]);let ue=j[0],Ae=r.convert(v.format,v.colorSpace),Be=r.convert(v.type),qe=y(v.internalFormat,Ae,Be,v.normalized,v.colorSpace),F=v.isVideoTexture!==!0,le=he.__version===void 0||k===!0,$=Z.dataReady,ge=E(v,ue);Me(i.TEXTURE_CUBE_MAP,v);let me;if(xe){F&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,qe,ue.width,ue.height);for(let re=0;re<6;re++){me=j[re].mipmaps;for(let De=0;De<me.length;De++){let Ue=me[De];v.format!==On?Ae!==null?F?$&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,De,0,0,Ue.width,Ue.height,Ae,Ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,De,qe,Ue.width,Ue.height,0,Ue.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,De,0,0,Ue.width,Ue.height,Ae,Be,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,De,qe,Ue.width,Ue.height,0,Ae,Be,Ue.data)}}}else{if(me=v.mipmaps,F&&le){me.length>0&&ge++;let re=Ce(j[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,qe,re.width,re.height)}for(let re=0;re<6;re++)if(Ne){F?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,j[re].width,j[re].height,Ae,Be,j[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,qe,j[re].width,j[re].height,0,Ae,Be,j[re].data);for(let De=0;De<me.length;De++){let gt=me[De].image[re].image;F?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,De+1,0,0,gt.width,gt.height,Ae,Be,gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,De+1,qe,gt.width,gt.height,0,Ae,Be,gt.data)}}else{F?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ae,Be,j[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,qe,Ae,Be,j[re]);for(let De=0;De<me.length;De++){let Ue=me[De];F?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,De+1,0,0,Ae,Be,Ue.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,De+1,qe,Ae,Be,Ue.image[re])}}}p(v)&&S(i.TEXTURE_CUBE_MAP),he.__version=Z.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function He(R,v,O,k,Z,he){let de=r.convert(O.format,O.colorSpace),J=r.convert(O.type),ie=y(O.internalFormat,de,J,O.normalized,O.colorSpace),xe=n.get(v),Ne=n.get(O);if(Ne.__renderTarget=v,!xe.__hasExternalTextures){let j=Math.max(1,v.width>>he),ue=Math.max(1,v.height>>he);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,he,ie,j,ue,v.depth,0,de,J,null):t.texImage2D(Z,he,ie,j,ue,0,de,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Le(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,Z,Ne.__webglTexture,0,Fe(v)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,Z,Ne.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(R,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){let k=v.depthTexture,Z=k&&k.isDepthTexture?k.type:null,he=w(v.stencilBuffer,Z),de=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Le(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Fe(v),he,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe(v),he,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,he,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,R)}else{let k=v.textures;for(let Z=0;Z<k.length;Z++){let he=k[Z],de=r.convert(he.format,he.colorSpace),J=r.convert(he.type),ie=y(he.internalFormat,de,J,he.normalized,he.colorSpace);Le(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Fe(v),ie,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe(v),ie,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ie,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function We(R,v,O){let k=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(v.depthTexture);if(Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),k){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,v.depthTexture.addEventListener("dispose",T)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Me(i.TEXTURE_CUBE_MAP,v.depthTexture);let xe=r.convert(v.depthTexture.format),Ne=r.convert(v.depthTexture.type),j;v.depthTexture.format===li?j=i.DEPTH_COMPONENT24:v.depthTexture.format===ts&&(j=i.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,j,v.width,v.height,0,xe,Ne,null)}}else B(v.depthTexture,0);let he=Z.__webglTexture,de=Fe(v),J=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,ie=v.depthTexture.format===ts?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===li)Le(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,J,he,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,ie,J,he,0);else if(v.depthTexture.format===ts)Le(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,J,he,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,ie,J,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(R){let v=n.get(R),O=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let k=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),k){let Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,k.removeEventListener("dispose",Z)};k.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=k}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(O)for(let k=0;k<6;k++)We(v.__webglFramebuffer[k],R,k);else{let k=R.texture.mipmaps;k&&k.length>0?We(v.__webglFramebuffer[0],R,0):We(v.__webglFramebuffer,R,0)}else if(O){v.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[k]),v.__webglDepthbuffer[k]===void 0)v.__webglDepthbuffer[k]=i.createRenderbuffer(),je(v.__webglDepthbuffer[k],R,!1);else{let Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=v.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,he)}}else{let k=R.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),je(v.__webglDepthbuffer,R,!1);else{let Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,he)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(R,v,O){let k=n.get(R);v!==void 0&&He(k.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&se(R)}function ae(R){let v=R.texture,O=n.get(R),k=n.get(v);R.addEventListener("dispose",_);let Z=R.textures,he=R.isWebGLCubeRenderTarget===!0,de=Z.length>1;if(de||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=v.version,o.memory.textures++),he){O.__webglFramebuffer=[];for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[J]=[];for(let ie=0;ie<v.mipmaps.length;ie++)O.__webglFramebuffer[J][ie]=i.createFramebuffer()}else O.__webglFramebuffer[J]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let J=0;J<v.mipmaps.length;J++)O.__webglFramebuffer[J]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(de)for(let J=0,ie=Z.length;J<ie;J++){let xe=n.get(Z[J]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Le(R)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){let ie=Z[J];O.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[J]);let xe=r.convert(ie.format,ie.colorSpace),Ne=r.convert(ie.type),j=y(ie.internalFormat,xe,Ne,ie.normalized,ie.colorSpace,R.isXRRenderTarget===!0),ue=Fe(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,j,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,O.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),je(O.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),Me(i.TEXTURE_CUBE_MAP,v);for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)He(O.__webglFramebuffer[J][ie],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ie);else He(O.__webglFramebuffer[J],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(v)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let J=0,ie=Z.length;J<ie;J++){let xe=Z[J],Ne=n.get(xe),j=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,Ne.__webglTexture),Me(j,xe),He(O.__webglFramebuffer,R,xe,i.COLOR_ATTACHMENT0+J,j,0),p(xe)&&S(j)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(J=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,k.__webglTexture),Me(J,v),v.mipmaps&&v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)He(O.__webglFramebuffer[ie],R,v,i.COLOR_ATTACHMENT0,J,ie);else He(O.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,J,0);p(v)&&S(J),t.unbindTexture()}R.depthBuffer&&se(R)}function ve(R){let v=R.textures;for(let O=0,k=v.length;O<k;O++){let Z=v[O];if(p(Z)){let he=M(R),de=n.get(Z).__webglTexture;t.bindTexture(he,de),S(he),t.unbindTexture()}}}let pe=[],be=[];function fe(R){if(R.samples>0){if(Le(R)===!1){let v=R.textures,O=R.width,k=R.height,Z=i.COLOR_BUFFER_BIT,he=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(R),J=v.length>1;if(J)for(let xe=0;xe<v.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);let ie=R.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let xe=0;xe<v.length;xe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[xe]);let Ne=n.get(v[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ne,0)}i.blitFramebuffer(0,0,O,k,0,0,O,k,Z,i.NEAREST),c===!0&&(pe.length=0,be.length=0,pe.push(i.COLOR_ATTACHMENT0+xe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(pe.push(he),be.push(he),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,be)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let xe=0;xe<v.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,de.__webglColorRenderbuffer[xe]);let Ne=n.get(v[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Fe(R){return Math.min(s.maxSamples,R.samples)}function Le(R){let v=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function U(R){let v=o.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function Qe(R,v){let O=R.colorSpace,k=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==vn&&O!==Fi&&(lt.getTransfer(O)===_t?(k!==On||Z!==wn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",O)),v}function Ce(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.getTextureUnits=X,this.setTextureUnits=D,this.setTexture2D=B,this.setTexture2DArray=G,this.setTexture3D=Q,this.setTextureCube=te,this.rebindTextures=oe,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=He,this.useMultisampledRTT=Le,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function wM(i,e){function t(n,s=Fi){let r,o=lt.getTransfer(s);if(n===wn)return i.UNSIGNED_BYTE;if(n===Cc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ic)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Zh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===qh)return i.BYTE;if(n===Yh)return i.SHORT;if(n===Cr)return i.UNSIGNED_SHORT;if(n===Rc)return i.INT;if(n===ti)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===pi)return i.HALF_FLOAT;if(n===Jh)return i.ALPHA;if(n===$h)return i.RGB;if(n===On)return i.RGBA;if(n===li)return i.DEPTH_COMPONENT;if(n===ts)return i.DEPTH_STENCIL;if(n===Pc)return i.RED;if(n===Lc)return i.RED_INTEGER;if(n===ns)return i.RG;if(n===Nc)return i.RG_INTEGER;if(n===Dc)return i.RGBA_INTEGER;if(n===zo||n===Ho||n===ko||n===Go)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Go)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Uc||n===Fc||n===Oc||n===Bc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Uc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zc||n===Hc||n===kc||n===Gc||n===Vc||n===Vo||n===Wc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zc||n===Hc)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===kc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Gc)return r.COMPRESSED_R11_EAC;if(n===Vc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Vo)return r.COMPRESSED_RG11_EAC;if(n===Wc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xc||n===qc||n===Yc||n===Zc||n===Kc||n===Jc||n===$c||n===jc||n===Qc||n===el||n===tl||n===nl||n===il||n===sl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$c)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===el)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===il)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rl||n===ol||n===al)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===rl)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cl||n===ll||n===Wo||n===hl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===cl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ir?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var RM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CM=`
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

}`,yu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new fo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Sn({vertexShader:RM,fragmentShader:CM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ge(new Yt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vu=class extends hi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,m=null,x=typeof XRWebGLBinding<"u",g=new yu,p={},S=t.getContextAttributes(),M=null,y=null,w=[],E=[],T=new _e,_=null,b=new $t;b.viewport=new St;let C=new $t;C.viewport=new St;let I=[b,C],N=new Mc,W=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ne=w[V];return ne===void 0&&(ne=new _r,w[V]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(V){let ne=w[V];return ne===void 0&&(ne=new _r,w[V]=ne),ne.getGripSpace()},this.getHand=function(V){let ne=w[V];return ne===void 0&&(ne=new _r,w[V]=ne),ne.getHandSpace()};function D(V){let ne=E.indexOf(V.inputSource);if(ne===-1)return;let ee=w[ne];ee!==void 0&&(ee.update(V.inputSource,V.frame,l||o),ee.dispatchEvent({type:V.type,data:V.inputSource}))}function H(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",P);for(let V=0;V<w.length;V++){let ne=E[V];ne!==null&&(E[V]=null,w[V].disconnect(ne))}W=null,X=null,g.reset();for(let V in p)delete p[V];e.setRenderTarget(M),d=null,f=null,u=null,s=null,y=null,Me.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",H),s.addEventListener("inputsourceschange",P),S.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,Se=null,Ee=null;S.depth&&(Ee=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=S.stencil?ts:li,Se=S.stencil?Ir:ti);let He={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(He),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Dn(f.textureWidth,f.textureHeight,{format:On,type:wn,depthTexture:new Ri(f.textureWidth,f.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ee={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Dn(d.framebufferWidth,d.framebufferHeight,{format:On,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Me.setContext(s),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function P(V){for(let ne=0;ne<V.removed.length;ne++){let ee=V.removed[ne],Se=E.indexOf(ee);Se>=0&&(E[Se]=null,w[Se].disconnect(ee))}for(let ne=0;ne<V.added.length;ne++){let ee=V.added[ne],Se=E.indexOf(ee);if(Se===-1){for(let He=0;He<w.length;He++)if(He>=E.length){E.push(ee),Se=He;break}else if(E[He]===null){E[He]=ee,Se=He;break}if(Se===-1)break}let Ee=w[Se];Ee&&Ee.connect(ee)}}let B=new L,G=new L;function Q(V,ne,ee){B.setFromMatrixPosition(ne.matrixWorld),G.setFromMatrixPosition(ee.matrixWorld);let Se=B.distanceTo(G),Ee=ne.projectionMatrix.elements,He=ee.projectionMatrix.elements,je=Ee[14]/(Ee[10]-1),We=Ee[14]/(Ee[10]+1),se=(Ee[9]+1)/Ee[5],oe=(Ee[9]-1)/Ee[5],ae=(Ee[8]-1)/Ee[0],ve=(He[8]+1)/He[0],pe=je*ae,be=je*ve,fe=Se/(-ae+ve),Fe=fe*-ae;if(ne.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Fe),V.translateZ(fe),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Ee[10]===-1)V.projectionMatrix.copy(ne.projectionMatrix),V.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let Le=je+fe,U=We+fe,Qe=pe-Fe,Ce=be+(Se-Fe),R=se*We/U*Le,v=oe*We/U*Le;V.projectionMatrix.makePerspective(Qe,Ce,R,v,Le,U),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function te(V,ne){ne===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ne.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let ne=V.near,ee=V.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(ee=g.depthFar)),N.near=C.near=b.near=ne,N.far=C.far=b.far=ee,(W!==N.near||X!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),W=N.near,X=N.far),N.layers.mask=V.layers.mask|6,b.layers.mask=N.layers.mask&-5,C.layers.mask=N.layers.mask&-3;let Se=V.parent,Ee=N.cameras;te(N,Se);for(let He=0;He<Ee.length;He++)te(Ee[He],Se);Ee.length===2?Q(N,b,C):N.projectionMatrix.copy(b.projectionMatrix),ce(V,N,Se)};function ce(V,ne,ee){ee===null?V.matrix.copy(ne.matrixWorld):(V.matrix.copy(ee.matrixWorld),V.matrix.invert(),V.matrix.multiply(ne.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ne.projectionMatrix),V.projectionMatrixInverse.copy(ne.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=bs*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(V){c=V,f!==null&&(f.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(V){return p[V]};let ye=null;function Te(V,ne){if(h=ne.getViewerPose(l||o),m=ne,h!==null){let ee=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Se=!1;ee.length!==N.cameras.length&&(N.cameras.length=0,Se=!0);for(let We=0;We<ee.length;We++){let se=ee[We],oe=null;if(d!==null)oe=d.getViewport(se);else{let ve=u.getViewSubImage(f,se);oe=ve.viewport,We===0&&(e.setRenderTargetTextures(y,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(y))}let ae=I[We];ae===void 0&&(ae=new $t,ae.layers.enable(We),ae.viewport=new St,I[We]=ae),ae.matrix.fromArray(se.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(se.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(oe.x,oe.y,oe.width,oe.height),We===0&&(N.matrix.copy(ae.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Se===!0&&N.cameras.push(ae)}let Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let We=u.getDepthInformation(ee[0]);We&&We.isValid&&We.texture&&g.init(We,s.renderState)}if(Ee&&Ee.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let We=0;We<ee.length;We++){let se=ee[We].camera;if(se){let oe=p[se];oe||(oe=new fo,p[se]=oe);let ae=u.getCameraImage(se);oe.sourceTexture=ae}}}}for(let ee=0;ee<w.length;ee++){let Se=E[ee],Ee=w[ee];Se!==null&&Ee!==void 0&&Ee.update(Se,ne,l||o)}ye&&ye(V,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),m=null}let Me=new Mp;Me.setAnimationLoop(Te),this.setAnimationLoop=function(V){ye=V},this.dispose=function(){}}},IM=new Ze,wp=new et;wp.set(-1,0,0,0,1,0,0,0,1);function PM(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,nu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,S,M,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,S,M):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===cn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===cn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let S=e.get(p),M=S.envMap,y=S.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(IM.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(wp),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,S,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let S=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function LM(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,w){let E=w.program;n.uniformBlockBinding(y,E)}function l(y,w){let E=s[y.id];E===void 0&&(g(y),E=h(y),s[y.id]=E,y.addEventListener("dispose",S));let T=w.program;n.updateUBOMapping(y,T);let _=e.render.frame;r[y.id]!==_&&(f(y),r[y.id]=_)}function h(y){let w=u();y.__bindingPointIndex=w;let E=i.createBuffer(),T=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,T,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,E),E}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let w=s[y.id],E=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let _=0,b=E.length;_<b;_++){let C=E[_];if(Array.isArray(C))for(let I=0,N=C.length;I<N;I++)d(C[I],_,I,T);else d(C,_,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,w,E,T){if(x(y,w,E,T)===!0){let _=y.__offset,b=y.value;if(Array.isArray(b)){let C=0;for(let I=0;I<b.length;I++){let N=b[I],W=p(N);m(N,y.__data,C),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(C+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(b,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function m(y,w,E){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,E)}function x(y,w,E,T){let _=y.value,b=w+"_"+E;if(T[b]===void 0)return typeof _=="number"||typeof _=="boolean"?T[b]=_:ArrayBuffer.isView(_)?T[b]=_.slice():T[b]=_.clone(),!0;{let C=T[b];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return T[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function g(y){let w=y.uniforms,E=0,T=16;for(let b=0,C=w.length;b<C;b++){let I=Array.isArray(w[b])?w[b]:[w[b]];for(let N=0,W=I.length;N<W;N++){let X=I[N],D=Array.isArray(X.value)?X.value:[X.value];for(let H=0,P=D.length;H<P;H++){let B=D[H],G=p(B),Q=E%T,te=Q%G.boundary,ce=Q+te;E+=te,ce!==0&&T-ce<G.storage&&(E+=T-ce),X.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=E,E+=G.storage}}}let _=E%T;return _>0&&(E+=T-_),y.__size=E,y.__cache={},this}function p(y){let w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",y),w}function S(y){let w=y.target;w.removeEventListener("dispose",S);let E=o.indexOf(w.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function M(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:M}}var NM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),mi=null;function DM(){return mi===null&&(mi=new vr(NM,16,16,ns,pi),mi.name="DFG_LUT",mi.minFilter=Bt,mi.magFilter=Bt,mi.wrapS=kn,mi.wrapT=kn,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}var xl=class{constructor(e={}){let{canvas:t=kd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=wn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=d,g=new Set([Dc,Nc,Lc]),p=new Set([wn,ti,Cr,Ir,Cc,Ic]),S=new Uint32Array(4),M=new Int32Array(4),y=new L,w=null,E=null,T=[],_=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,N=null,W=null,X=null,D=null;this._outputColorSpace=nt;let H=0,P=0,B=null,G=-1,Q=null,te=new St,ce=new St,ye=null,Te=new we(0),Me=0,V=t.width,ne=t.height,ee=1,Se=null,Ee=null,He=new St(0,0,V,ne),je=new St(0,0,V,ne),We=!1,se=new Mr,oe=!1,ae=!1,ve=new Ze,pe=new L,be=new St,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fe=!1;function Le(){return B===null?ee:1}let U=n;function Qe(A,z){return t.getContext(A,z)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",gt,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",At,!1),U===null){let z="webgl2";if(U=Qe(z,A),U===null)throw Qe(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Ke("WebGLRenderer: "+A.message),A}let Ce,R,v,O,k,Z,he,de,J,ie,xe,Ne,j,ue,Ae,Be,qe,F,le,$,ge,me,re;function De(){Ce=new ky(U),Ce.init(),ge=new wM(U,Ce),R=new Ny(U,Ce,e,ge),v=new TM(U,Ce),R.reversedDepthBuffer&&f&&v.buffers.depth.setReversed(!0),W=U.createFramebuffer(),X=U.createFramebuffer(),D=U.createFramebuffer(),O=new Wy(U),k=new uM,Z=new AM(U,Ce,v,k,R,ge,O),he=new Hy(C),de=new Z0(U),me=new Py(U,de),J=new Gy(U,de,O,me),ie=new qy(U,J,de,me,O),F=new Xy(U,R,Z),Ae=new Dy(k),xe=new hM(C,he,Ce,R,me,Ae),Ne=new PM(C,k),j=new dM,ue=new yM(Ce),qe=new Iy(C,he,v,ie,m,c),Be=new EM(C,ie,R),re=new LM(U,O,R,v),le=new Ly(U,Ce,O),$=new Vy(U,Ce,O),O.programs=xe.programs,C.capabilities=R,C.extensions=Ce,C.properties=k,C.renderLists=j,C.shadowMap=Be,C.state=v,C.info=O}De(),x!==wn&&(b=new Zy(x,t.width,t.height,a,s,r));let Ue=new vu(C,U);this.xr=Ue,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let A=Ce.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ce.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(A){A!==void 0&&(ee=A,this.setSize(V,ne,!1))},this.getSize=function(A){return A.set(V,ne)},this.setSize=function(A,z,K=!0){if(Ue.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,ne=z,t.width=Math.floor(A*ee),t.height=Math.floor(z*ee),K===!0&&(t.style.width=A+"px",t.style.height=z+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(V*ee,ne*ee).floor()},this.setDrawingBufferSize=function(A,z,K){V=A,ne=z,ee=K,t.width=Math.floor(A*K),t.height=Math.floor(z*K),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(x===wn){Ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(te)},this.getViewport=function(A){return A.copy(He)},this.setViewport=function(A,z,K,q){A.isVector4?He.set(A.x,A.y,A.z,A.w):He.set(A,z,K,q),v.viewport(te.copy(He).multiplyScalar(ee).round())},this.getScissor=function(A){return A.copy(je)},this.setScissor=function(A,z,K,q){A.isVector4?je.set(A.x,A.y,A.z,A.w):je.set(A,z,K,q),v.scissor(ce.copy(je).multiplyScalar(ee).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(A){v.setScissorTest(We=A)},this.setOpaqueSort=function(A){Se=A},this.setTransparentSort=function(A){Ee=A},this.getClearColor=function(A){return A.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,K=!0){let q=0;if(A){let Y=!1;if(B!==null){let Pe=B.texture.format;Y=g.has(Pe)}if(Y){let Pe=B.texture.type,ke=p.has(Pe),Ie=qe.getClearColor(),Ve=qe.getClearAlpha(),Xe=Ie.r,st=Ie.g,ct=Ie.b;ke?(S[0]=Xe,S[1]=st,S[2]=ct,S[3]=Ve,U.clearBufferuiv(U.COLOR,0,S)):(M[0]=Xe,M[1]=st,M[2]=ct,M[3]=Ve,U.clearBufferiv(U.COLOR,0,M))}else q|=U.COLOR_BUFFER_BIT}z&&(q|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&U.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),N=A},this.dispose=function(){t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",At,!1),qe.dispose(),j.dispose(),ue.dispose(),k.dispose(),he.dispose(),ie.dispose(),me.dispose(),re.dispose(),xe.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",Ft),Ue.removeEventListener("sessionend",nn),kt.stop()};function gt(A){A.preventDefault(),eo("WebGLRenderer: Context Lost."),I=!0}function dt(){eo("WebGLRenderer: Context Restored."),I=!1;let A=O.autoReset,z=Be.enabled,K=Be.autoUpdate,q=Be.needsUpdate,Y=Be.type;De(),O.autoReset=A,Be.enabled=z,Be.autoUpdate=K,Be.needsUpdate=q,Be.type=Y}function At(A){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ht(A){let z=A.target;z.removeEventListener("dispose",Ht),In(z)}function In(A){it(A),k.remove(A)}function it(A){let z=k.get(A).programs;z!==void 0&&(z.forEach(function(K){xe.releaseProgram(K)}),A.isShaderMaterial&&xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,K,q,Y,Pe){z===null&&(z=fe);let ke=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Ie=Hl(A,z,K,q,Y);v.setMaterial(q,ke);let Ve=K.index,Xe=1;if(q.wireframe===!0){if(Ve=J.getWireframeAttribute(K),Ve===void 0)return;Xe=2}let st=K.drawRange,ct=K.attributes.position,Ye=st.start*Xe,Tt=(st.start+st.count)*Xe;Pe!==null&&(Ye=Math.max(Ye,Pe.start*Xe),Tt=Math.min(Tt,(Pe.start+Pe.count)*Xe)),Ve!==null?(Ye=Math.max(Ye,0),Tt=Math.min(Tt,Ve.count)):ct!=null&&(Ye=Math.max(Ye,0),Tt=Math.min(Tt,ct.count));let Gt=Tt-Ye;if(Gt<0||Gt===1/0)return;me.setup(Y,q,Ie,K,Ve);let zt,wt=le;if(Ve!==null&&(zt=de.get(Ve),wt=$,wt.setIndex(zt)),Y.isMesh)q.wireframe===!0?(v.setLineWidth(q.wireframeLinewidth*Le()),wt.setMode(U.LINES)):wt.setMode(U.TRIANGLES);else if(Y.isLine){let un=q.linewidth;un===void 0&&(un=1),v.setLineWidth(un*Le()),Y.isLineSegments?wt.setMode(U.LINES):Y.isLineLoop?wt.setMode(U.LINE_LOOP):wt.setMode(U.LINE_STRIP)}else Y.isPoints?wt.setMode(U.POINTS):Y.isSprite&&wt.setMode(U.TRIANGLES);if(Y.isBatchedMesh)if(Ce.get("WEBGL_multi_draw"))wt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let un=Y._multiDrawStarts,ze=Y._multiDrawCounts,Pn=Y._multiDrawCount,pt=Ve?de.get(Ve).bytesPerElement:1,zn=k.get(q).currentProgram.getUniforms();for(let ri=0;ri<Pn;ri++)zn.setValue(U,"_gl_DrawID",ri),wt.render(un[ri]/pt,ze[ri])}else if(Y.isInstancedMesh)wt.renderInstances(Ye,Gt,Y.count);else if(K.isInstancedBufferGeometry){let un=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ze=Math.min(K.instanceCount,un);wt.renderInstances(Ye,Gt,ze)}else wt.render(Ye,Gt)};function vt(A,z,K){A.transparent===!0&&A.side===Lt&&A.forceSinglePass===!1?(A.side=cn,A.needsUpdate=!0,Oi(A,z,K),A.side=bn,A.needsUpdate=!0,Oi(A,z,K),A.side=Lt):Oi(A,z,K)}this.compile=function(A,z,K=null){K===null&&(K=A),E=ue.get(K),E.init(z),_.push(E),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),A!==K&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),E.setupLights();let q=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Pe=Y.material;if(Pe)if(Array.isArray(Pe))for(let ke=0;ke<Pe.length;ke++){let Ie=Pe[ke];vt(Ie,K,Y),q.add(Ie)}else vt(Pe,K,Y),q.add(Pe)}),E=_.pop(),q},this.compileAsync=function(A,z,K=null){let q=this.compile(A,z,K);return new Promise(Y=>{function Pe(){if(q.forEach(function(ke){k.get(ke).currentProgram.isReady()&&q.delete(ke)}),q.size===0){Y(A);return}setTimeout(Pe,10)}Ce.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Ut=null;function Et(A){Ut&&Ut(A)}function Ft(){kt.stop()}function nn(){kt.start()}let kt=new Mp;kt.setAnimationLoop(Et),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(A){Ut=A,Ue.setAnimationLoop(A),A===null?kt.stop():kt.start()},Ue.addEventListener("sessionstart",Ft),Ue.addEventListener("sessionend",nn),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(A,z);let K=Ue.enabled===!0&&Ue.isPresenting===!0,q=b!==null&&(B===null||K)&&b.begin(C,B);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(z),z=Ue.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,z,B),E=ue.get(A,_.length),E.init(z),E.state.textureUnits=Z.getTextureUnits(),_.push(E),ve.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),se.setFromProjectionMatrix(ve,Jn,z.reversedDepth),ae=this.localClippingEnabled,oe=Ae.init(this.clippingPlanes,ae),w=j.get(A,T.length),w.init(),T.push(w),Ue.enabled===!0&&Ue.isPresenting===!0){let ke=C.xr.getDepthSensingMesh();ke!==null&&Xn(ke,z,-1/0,C.sortObjects)}Xn(A,z,0,C.sortObjects),w.finish(),C.sortObjects===!0&&w.sort(Se,Ee,z.reversedDepth),Fe=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,Fe&&qe.addToRenderList(w,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),oe===!0&&Ae.beginShadows();let Y=E.state.shadowsArray;if(Be.render(Y,A,z),oe===!0&&Ae.endShadows(),(q&&b.hasRenderPass())===!1){let ke=w.opaque,Ie=w.transmissive;if(E.setupLights(),z.isArrayCamera){let Ve=z.cameras;if(Ie.length>0)for(let Xe=0,st=Ve.length;Xe<st;Xe++){let ct=Ve[Xe];an(ke,Ie,A,ct)}Fe&&qe.render(A);for(let Xe=0,st=Ve.length;Xe<st;Xe++){let ct=Ve[Xe];_n(w,A,ct,ct.viewport)}}else Ie.length>0&&an(ke,Ie,A,z),Fe&&qe.render(A),_n(w,A,z)}B!==null&&P===0&&(Z.updateMultisampleRenderTarget(B),Z.updateRenderTargetMipmap(B)),q&&b.end(C),A.isScene===!0&&A.onAfterRender(C,A,z),me.resetDefaultState(),G=-1,Q=null,_.pop(),_.length>0?(E=_[_.length-1],Z.setTextureUnits(E.state.textureUnits),oe===!0&&Ae.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,T.pop(),T.length>0?w=T[T.length-1]:w=null,N!==null&&N.renderEnd()};function Xn(A,z,K,q){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLightProbeGrid)E.pushLightProbeGrid(A);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||se.intersectsSprite(A)){q&&be.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ve);let ke=ie.update(A),Ie=A.material;Ie.visible&&w.push(A,ke,Ie,K,be.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||se.intersectsObject(A))){let ke=ie.update(A),Ie=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),be.copy(A.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),be.copy(ke.boundingSphere.center)),be.applyMatrix4(A.matrixWorld).applyMatrix4(ve)),Array.isArray(Ie)){let Ve=ke.groups;for(let Xe=0,st=Ve.length;Xe<st;Xe++){let ct=Ve[Xe],Ye=Ie[ct.materialIndex];Ye&&Ye.visible&&w.push(A,ke,Ye,K,be.z,ct)}}else Ie.visible&&w.push(A,ke,Ie,K,be.z,null)}}let Pe=A.children;for(let ke=0,Ie=Pe.length;ke<Ie;ke++)Xn(Pe[ke],z,K,q)}function _n(A,z,K,q){let{opaque:Y,transmissive:Pe,transparent:ke}=A;E.setupLightsView(K),oe===!0&&Ae.setGlobalState(C.clippingPlanes,K),q&&v.viewport(te.copy(q)),Y.length>0&&Kt(Y,z,K),Pe.length>0&&Kt(Pe,z,K),ke.length>0&&Kt(ke,z,K),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function an(A,z,K,q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[q.id]===void 0){let Ye=Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[q.id]=new Dn(1,1,{generateMipmaps:!0,type:Ye?pi:wn,minFilter:ei,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let Pe=E.state.transmissionRenderTarget[q.id],ke=q.viewport||te;Pe.setSize(ke.z*C.transmissionResolutionScale,ke.w*C.transmissionResolutionScale);let Ie=C.getRenderTarget(),Ve=C.getActiveCubeFace(),Xe=C.getActiveMipmapLevel();C.setRenderTarget(Pe),C.getClearColor(Te),Me=C.getClearAlpha(),Me<1&&C.setClearColor(16777215,.5),C.clear(),Fe&&qe.render(K);let st=C.toneMapping;C.toneMapping=Qn;let ct=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),E.setupLightsView(q),oe===!0&&Ae.setGlobalState(C.clippingPlanes,q),Kt(A,K,q),Z.updateMultisampleRenderTarget(Pe),Z.updateRenderTargetMipmap(Pe),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Tt=0,Gt=z.length;Tt<Gt;Tt++){let zt=z[Tt],{object:wt,geometry:un,material:ze,group:Pn}=zt;if(ze.side===Lt&&wt.layers.test(q.layers)){let pt=ze.side;ze.side=cn,ze.needsUpdate=!0,si(wt,K,q,un,ze,Pn),ze.side=pt,ze.needsUpdate=!0,Ye=!0}}Ye===!0&&(Z.updateMultisampleRenderTarget(Pe),Z.updateRenderTargetMipmap(Pe))}C.setRenderTarget(Ie,Ve,Xe),C.setClearColor(Te,Me),ct!==void 0&&(q.viewport=ct),C.toneMapping=st}function Kt(A,z,K){let q=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,Pe=A.length;Y<Pe;Y++){let ke=A[Y],{object:Ie,geometry:Ve,group:Xe}=ke,st=ke.material;st.allowOverride===!0&&q!==null&&(st=q),Ie.layers.test(K.layers)&&si(Ie,z,K,Ve,st,Xe)}}function si(A,z,K,q,Y,Pe){A.onBeforeRender(C,z,K,q,Y,Pe),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(C,z,K,q,A,Pe),Y.transparent===!0&&Y.side===Lt&&Y.forceSinglePass===!1?(Y.side=cn,Y.needsUpdate=!0,C.renderBufferDirect(K,z,q,Y,A,Pe),Y.side=bn,Y.needsUpdate=!0,C.renderBufferDirect(K,z,q,Y,A,Pe),Y.side=Lt):C.renderBufferDirect(K,z,q,Y,A,Pe),A.onAfterRender(C,z,K,q,Y,Pe)}function Oi(A,z,K){z.isScene!==!0&&(z=fe);let q=k.get(A),Y=E.state.lights,Pe=E.state.shadowsArray,ke=Y.state.version,Ie=xe.getParameters(A,Y.state,Pe,z,K,E.state.lightProbeGridArray),Ve=xe.getProgramCacheKey(Ie),Xe=q.programs;q.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,q.fog=z.fog;let st=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;q.envMap=he.get(A.envMap||q.environment,st),q.envMapRotation=q.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Xe===void 0&&(A.addEventListener("dispose",Ht),Xe=new Map,q.programs=Xe);let ct=Xe.get(Ve);if(ct!==void 0){if(q.currentProgram===ct&&q.lightsStateVersion===ke)return oa(A,Ie),ct}else Ie.uniforms=xe.getUniforms(A),N!==null&&A.isNodeMaterial&&N.build(A,K,Ie),A.onBeforeCompile(Ie,C),ct=xe.acquireProgram(Ie,Ve),Xe.set(Ve,ct),q.uniforms=Ie.uniforms;let Ye=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=Ae.uniform),oa(A,Ie),q.needsLights=ca(A),q.lightsStateVersion=ke,q.needsLights&&(Ye.ambientLightColor.value=Y.state.ambient,Ye.lightProbe.value=Y.state.probe,Ye.directionalLights.value=Y.state.directional,Ye.directionalLightShadows.value=Y.state.directionalShadow,Ye.spotLights.value=Y.state.spot,Ye.spotLightShadows.value=Y.state.spotShadow,Ye.rectAreaLights.value=Y.state.rectArea,Ye.ltc_1.value=Y.state.rectAreaLTC1,Ye.ltc_2.value=Y.state.rectAreaLTC2,Ye.pointLights.value=Y.state.point,Ye.pointLightShadows.value=Y.state.pointShadow,Ye.hemisphereLights.value=Y.state.hemi,Ye.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ye.spotLightMatrix.value=Y.state.spotLightMatrix,Ye.spotLightMap.value=Y.state.spotLightMap,Ye.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=E.state.lightProbeGridArray.length>0,q.currentProgram=ct,q.uniformsList=null,ct}function Xs(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=Nr.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function oa(A,z){let K=k.get(A);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.batchingColor=z.batchingColor,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.instancingMorph=z.instancingMorph,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function aa(A,z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;y.setFromMatrixPosition(z.matrixWorld);for(let K=0,q=A.length;K<q;K++){let Y=A[K];if(Y.texture!==null&&Y.boundingBox.containsPoint(y))return Y}return null}function Hl(A,z,K,q,Y){z.isScene!==!0&&(z=fe),Z.resetTextureUnits();let Pe=z.fog,ke=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?z.environment:null,Ie=B===null?C.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:lt.workingColorSpace,Ve=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Xe=he.get(q.envMap||ke,Ve),st=q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ct=!!K.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ye=!!K.morphAttributes.position,Tt=!!K.morphAttributes.normal,Gt=!!K.morphAttributes.color,zt=Qn;q.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(zt=C.toneMapping);let wt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,un=wt!==void 0?wt.length:0,ze=k.get(q),Pn=E.state.lights;if(oe===!0&&(ae===!0||A!==Q)){let Pt=A===Q&&q.id===G;Ae.setState(q,A,Pt)}let pt=!1;q.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Pn.state.version||ze.outputColorSpace!==Ie||Y.isBatchedMesh&&ze.batching===!1||!Y.isBatchedMesh&&ze.batching===!0||Y.isBatchedMesh&&ze.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&ze.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&ze.instancing===!1||!Y.isInstancedMesh&&ze.instancing===!0||Y.isSkinnedMesh&&ze.skinning===!1||!Y.isSkinnedMesh&&ze.skinning===!0||Y.isInstancedMesh&&ze.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ze.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&ze.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&ze.instancingMorph===!1&&Y.morphTexture!==null||ze.envMap!==Xe||q.fog===!0&&ze.fog!==Pe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ae.numPlanes||ze.numIntersection!==Ae.numIntersection)||ze.vertexAlphas!==st||ze.vertexTangents!==ct||ze.morphTargets!==Ye||ze.morphNormals!==Tt||ze.morphColors!==Gt||ze.toneMapping!==zt||ze.morphTargetsCount!==un||!!ze.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,ze.__version=q.version);let zn=ze.currentProgram;pt===!0&&(zn=Oi(q,z,Y),N&&q.isNodeMaterial&&N.onUpdateProgram(q,zn,ze));let ri=!1,Bi=!1,qs=!1,Rt=zn.getUniforms(),Vt=ze.uniforms;if(v.useProgram(zn.program)&&(ri=!0,Bi=!0,qs=!0),q.id!==G&&(G=q.id,Bi=!0),ze.needsLights){let Pt=aa(E.state.lightProbeGridArray,Y);ze.lightProbeGrid!==Pt&&(ze.lightProbeGrid=Pt,Bi=!0)}if(ri||Q!==A){v.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Rt.setValue(U,"projectionMatrix",A.projectionMatrix),Rt.setValue(U,"viewMatrix",A.matrixWorldInverse);let Hi=Rt.map.cameraPosition;Hi!==void 0&&Hi.setValue(U,pe.setFromMatrixPosition(A.matrixWorld)),R.logarithmicDepthBuffer&&Rt.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Rt.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),Q!==A&&(Q=A,Bi=!0,qs=!0)}if(ze.needsLights&&(Pn.state.directionalShadowMap.length>0&&Rt.setValue(U,"directionalShadowMap",Pn.state.directionalShadowMap,Z),Pn.state.spotShadowMap.length>0&&Rt.setValue(U,"spotShadowMap",Pn.state.spotShadowMap,Z),Pn.state.pointShadowMap.length>0&&Rt.setValue(U,"pointShadowMap",Pn.state.pointShadowMap,Z)),Y.isSkinnedMesh){Rt.setOptional(U,Y,"bindMatrix"),Rt.setOptional(U,Y,"bindMatrixInverse");let Pt=Y.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),Rt.setValue(U,"boneTexture",Pt.boneTexture,Z))}Y.isBatchedMesh&&(Rt.setOptional(U,Y,"batchingTexture"),Rt.setValue(U,"batchingTexture",Y._matricesTexture,Z),Rt.setOptional(U,Y,"batchingIdTexture"),Rt.setValue(U,"batchingIdTexture",Y._indirectTexture,Z),Rt.setOptional(U,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Rt.setValue(U,"batchingColorTexture",Y._colorsTexture,Z));let zi=K.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&F.update(Y,K,zn),(Bi||ze.receiveShadow!==Y.receiveShadow)&&(ze.receiveShadow=Y.receiveShadow,Rt.setValue(U,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&z.environment!==null&&(Vt.envMapIntensity.value=z.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=DM()),Bi){if(Rt.setValue(U,"toneMappingExposure",C.toneMappingExposure),ze.needsLights&&kl(Vt,qs),Pe&&q.fog===!0&&Ne.refreshFogUniforms(Vt,Pe),Ne.refreshMaterialUniforms(Vt,q,ee,ne,E.state.transmissionRenderTarget[A.id]),ze.needsLights&&ze.lightProbeGrid){let Pt=ze.lightProbeGrid;Vt.probesSH.value=Pt.texture,Vt.probesMin.value.copy(Pt.boundingBox.min),Vt.probesMax.value.copy(Pt.boundingBox.max),Vt.probesResolution.value.copy(Pt.resolution)}Nr.upload(U,Xs(ze),Vt,Z)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Nr.upload(U,Xs(ze),Vt,Z),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Rt.setValue(U,"center",Y.center),Rt.setValue(U,"modelViewMatrix",Y.modelViewMatrix),Rt.setValue(U,"normalMatrix",Y.normalMatrix),Rt.setValue(U,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let Pt=q.uniformsGroups;for(let Hi=0,Ys=Pt.length;Hi<Ys;Hi++){let gf=Pt[Hi];re.update(gf,zn),re.bind(gf,zn)}}return zn}function kl(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function ca(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(A,z,K){let q=k.get(A);q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),k.get(A.texture).__webglTexture=z,k.get(A.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:K,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){let K=k.get(A);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,K=0){B=A,H=z,P=K;let q=null,Y=!1,Pe=!1;if(A){let Ie=k.get(A);if(Ie.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(U.FRAMEBUFFER,Ie.__webglFramebuffer),te.copy(A.viewport),ce.copy(A.scissor),ye=A.scissorTest,v.viewport(te),v.scissor(ce),v.setScissorTest(ye),G=-1;return}else if(Ie.__webglFramebuffer===void 0)Z.setupRenderTarget(A);else if(Ie.__hasExternalTextures)Z.rebindTextures(A,k.get(A.texture).__webglTexture,k.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let st=A.depthTexture;if(Ie.__boundDepthTexture!==st){if(st!==null&&k.has(st)&&(A.width!==st.image.width||A.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(A)}}let Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Pe=!0);let Xe=k.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xe[z])?q=Xe[z][K]:q=Xe[z],Y=!0):A.samples>0&&Z.useMultisampledRTT(A)===!1?q=k.get(A).__webglMultisampledFramebuffer:Array.isArray(Xe)?q=Xe[K]:q=Xe,te.copy(A.viewport),ce.copy(A.scissor),ye=A.scissorTest}else te.copy(He).multiplyScalar(ee).floor(),ce.copy(je).multiplyScalar(ee).floor(),ye=We;if(K!==0&&(q=W),v.bindFramebuffer(U.FRAMEBUFFER,q)&&v.drawBuffers(A,q),v.viewport(te),v.scissor(ce),v.setScissorTest(ye),Y){let Ie=k.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ie.__webglTexture,K)}else if(Pe){let Ie=z;for(let Ve=0;Ve<A.textures.length;Ve++){let Xe=k.get(A.textures[Ve]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ve,Xe.__webglTexture,K,Ie)}}else if(A!==null&&K!==0){let Ie=k.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ie.__webglTexture,K)}G=-1},this.readRenderTargetPixels=function(A,z,K,q,Y,Pe,ke,Ie=0){if(!(A&&A.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=k.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(Ve=Ve[ke]),Ve){v.bindFramebuffer(U.FRAMEBUFFER,Ve);try{let Xe=A.textures[Ie],st=Xe.format,ct=Xe.type;if(A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ie),!R.textureFormatReadable(st)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(ct)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-q&&K>=0&&K<=A.height-Y&&U.readPixels(z,K,q,Y,ge.convert(st),ge.convert(ct),Pe)}finally{let Xe=B!==null?k.get(B).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(A,z,K,q,Y,Pe,ke,Ie=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=k.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(Ve=Ve[ke]),Ve)if(z>=0&&z<=A.width-q&&K>=0&&K<=A.height-Y){v.bindFramebuffer(U.FRAMEBUFFER,Ve);let Xe=A.textures[Ie],st=Xe.format,ct=Xe.type;if(A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ie),!R.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ye=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ye),U.bufferData(U.PIXEL_PACK_BUFFER,Pe.byteLength,U.STREAM_READ),U.readPixels(z,K,q,Y,ge.convert(st),ge.convert(ct),0);let Tt=B!==null?k.get(B).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,Tt);let Gt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Vd(U,Gt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ye),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Pe),U.deleteBuffer(Ye),U.deleteSync(Gt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,K=0){let q=Math.pow(2,-K),Y=Math.floor(A.image.width*q),Pe=Math.floor(A.image.height*q),ke=z!==null?z.x:0,Ie=z!==null?z.y:0;Z.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,K,0,0,ke,Ie,Y,Pe),v.unbindTexture()},this.copyTextureToTexture=function(A,z,K=null,q=null,Y=0,Pe=0){let ke,Ie,Ve,Xe,st,ct,Ye,Tt,Gt,zt=A.isCompressedTexture?A.mipmaps[Pe]:A.image;if(K!==null)ke=K.max.x-K.min.x,Ie=K.max.y-K.min.y,Ve=K.isBox3?K.max.z-K.min.z:1,Xe=K.min.x,st=K.min.y,ct=K.isBox3?K.min.z:0;else{let Vt=Math.pow(2,-Y);ke=Math.floor(zt.width*Vt),Ie=Math.floor(zt.height*Vt),A.isDataArrayTexture?Ve=zt.depth:A.isData3DTexture?Ve=Math.floor(zt.depth*Vt):Ve=1,Xe=0,st=0,ct=0}q!==null?(Ye=q.x,Tt=q.y,Gt=q.z):(Ye=0,Tt=0,Gt=0);let wt=ge.convert(z.format),un=ge.convert(z.type),ze;z.isData3DTexture?(Z.setTexture3D(z,0),ze=U.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Z.setTexture2DArray(z,0),ze=U.TEXTURE_2D_ARRAY):(Z.setTexture2D(z,0),ze=U.TEXTURE_2D),v.activeTexture(U.TEXTURE0),v.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),v.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),v.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);let Pn=v.getParameter(U.UNPACK_ROW_LENGTH),pt=v.getParameter(U.UNPACK_IMAGE_HEIGHT),zn=v.getParameter(U.UNPACK_SKIP_PIXELS),ri=v.getParameter(U.UNPACK_SKIP_ROWS),Bi=v.getParameter(U.UNPACK_SKIP_IMAGES);v.pixelStorei(U.UNPACK_ROW_LENGTH,zt.width),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,zt.height),v.pixelStorei(U.UNPACK_SKIP_PIXELS,Xe),v.pixelStorei(U.UNPACK_SKIP_ROWS,st),v.pixelStorei(U.UNPACK_SKIP_IMAGES,ct);let qs=A.isDataArrayTexture||A.isData3DTexture,Rt=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){let Vt=k.get(A),zi=k.get(z),Pt=k.get(Vt.__renderTarget),Hi=k.get(zi.__renderTarget);v.bindFramebuffer(U.READ_FRAMEBUFFER,Pt.__webglFramebuffer),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Ys=0;Ys<Ve;Ys++)qs&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,k.get(A).__webglTexture,Y,ct+Ys),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,k.get(z).__webglTexture,Pe,Gt+Ys)),U.blitFramebuffer(Xe,st,ke,Ie,Ye,Tt,ke,Ie,U.DEPTH_BUFFER_BIT,U.NEAREST);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||k.has(A)){let Vt=k.get(A),zi=k.get(z);v.bindFramebuffer(U.READ_FRAMEBUFFER,X),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,D);for(let Pt=0;Pt<Ve;Pt++)qs?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Vt.__webglTexture,Y,ct+Pt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Vt.__webglTexture,Y),Rt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,zi.__webglTexture,Pe,Gt+Pt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,zi.__webglTexture,Pe),Y!==0?U.blitFramebuffer(Xe,st,ke,Ie,Ye,Tt,ke,Ie,U.COLOR_BUFFER_BIT,U.NEAREST):Rt?U.copyTexSubImage3D(ze,Pe,Ye,Tt,Gt+Pt,Xe,st,ke,Ie):U.copyTexSubImage2D(ze,Pe,Ye,Tt,Xe,st,ke,Ie);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Rt?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(ze,Pe,Ye,Tt,Gt,ke,Ie,Ve,wt,un,zt.data):z.isCompressedArrayTexture?U.compressedTexSubImage3D(ze,Pe,Ye,Tt,Gt,ke,Ie,Ve,wt,zt.data):U.texSubImage3D(ze,Pe,Ye,Tt,Gt,ke,Ie,Ve,wt,un,zt):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Pe,Ye,Tt,ke,Ie,wt,un,zt.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Pe,Ye,Tt,zt.width,zt.height,wt,zt.data):U.texSubImage2D(U.TEXTURE_2D,Pe,Ye,Tt,ke,Ie,wt,un,zt);v.pixelStorei(U.UNPACK_ROW_LENGTH,Pn),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pt),v.pixelStorei(U.UNPACK_SKIP_PIXELS,zn),v.pixelStorei(U.UNPACK_SKIP_ROWS,ri),v.pixelStorei(U.UNPACK_SKIP_IMAGES,Bi),Pe===0&&z.generateMipmaps&&U.generateMipmap(ze),v.unbindTexture()},this.initRenderTarget=function(A){k.get(A).__webglFramebuffer===void 0&&Z.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Z.setTextureCube(A,0):A.isData3DTexture?Z.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Z.setTexture2DArray(A,0):Z.setTexture2D(A,0),v.unbindTexture()},this.resetState=function(){H=0,P=0,B=null,v.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};async function Rp(){if(typeof window<"u"&&window.MCGROT_ASSETS)return window.MCGROT_ASSETS;let[i,e,t,n,s]=await Promise.all([fetch("assets/manifest.json").then(o=>o.json()),fetch("assets/leith.json").then(o=>o.json()),fetch("assets/catalog.json").then(o=>o.ok?o.json():null).catch(()=>null),fetch("assets/shopfronts/manifest.json").then(o=>o.ok?o.json():null).catch(()=>null),fetch("assets/shopfronts/atlas-pages.json").then(o=>o.ok?o.json():null).catch(()=>null)]),r=await fetch("assets/comic-lines.json").then(o=>o.ok?o.json():null).catch(()=>null);return{manifest:i,leith:e,catalog:t,facadeManifest:n,facadeAtlas:s,comicLines:r,images:null,audio:null}}function Rn(i,e){if(i){if(i.images&&i.images[e])return i.images[e];if(i.audio&&i.audio[e])return i.audio[e]}return`assets/${e}`}function ot(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new mt,l=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Cp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let m=Cp(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function Cp(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Wt(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<t;m++){let x=h.getComponent(f,m);a.setComponent(f+u,m,x)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function Mu(i,e){if(e===jh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Pr||e===Xo){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Pr)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Jo=(()=>{let i=6221086;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),Lp=8,bu=2.4,Ip=1.435,vl=.075,Pp=.09,UM=620,FM=90,OM=34,BM=.04;function xi(i,e,t){let n=Math.imul(i,374761393)^Math.imul(e,668265263)^Math.imul(t,2246822519);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function zM(i,e,t,n){let s=Math.floor(i),r=Math.floor(e),o=i-s,a=e-r,c=o*o*(3-2*o),l=a*a*(3-2*a),h=(x,g)=>xi((x%t+t)%t,(g%t+t)%t,n),u=h(s,r),f=h(s+1,r),d=h(s,r+1),m=h(s+1,r+1);return u+(f-u)*c+(d+(m-d)*c-(u+(f-u)*c))*l}function on(i,e,t,n,s){let r=0,o=.5,a=1;for(let c=0;c<n;c++)r+=o*zM(i*a,e*a,t*a,s+c*17),a*=2,o*=.5;return r}function jo(i,e){let t=new Dt(i);return t.wrapS=t.wrapT=Vn,t.colorSpace=nt,t.anisotropy=16,e&&t.repeat.set(e[0],e[1]),t}function Np(){let t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d"),s=n.createImageData(512,512),r=s.data;for(let o=0;o<512;o++)for(let a=0;a<512;a++){let c=a/512*8,l=o/512*8,h=44,u=45,f=41,d=on(c,l,8,4,1)-.5;h+=d*26,u+=d*26,f+=d*22;let m=on(c*.5,l*.5,Math.max(1,4),2,7);if(m>.6){let w=Math.min(1,(m-.6)*6);h+=(26-h)*.55*w,u+=(26-u)*.55*w,f+=(25-f)*.55*w}let x=xi(a,o,99),g=x>.86?(x-.86)*300:x<.1?-x*90:0;h+=g,u+=g,f+=g*.9;let p=c*1.6+on(c*3,l*3,32,2,55)*1.4,S=l*1.6+on(c*3+9,l*3+9,32,2,71)*1.4,M=Math.abs(on(p,S,16,3,21)-.5);if(M<.012){let w=1-M/.012;h-=15*w,u-=15*w,f-=14*w}let y=(o*512+a)*4;r[y]=Math.max(0,Math.min(255,h)),r[y+1]=Math.max(0,Math.min(255,u)),r[y+2]=Math.max(0,Math.min(255,f)),r[y+3]=255}return n.putImageData(s,0,0),jo(t)}function Dp(){let n=document.createElement("canvas");n.width=n.height=512;let s=n.getContext("2d"),r=s.createImageData(512,512),o=r.data,a=512/4,c=3;for(let l=0;l<512;l++)for(let h=0;h<512;h++){let u=Math.floor(h/a),f=Math.floor(l/a),d=h-u*a,m=l-f*a,x=d<c||m<c||d>a-c||m>a-c,g=(xi(u,f,5)-.5)*18,p=78+g,S=77+g,M=71+g,y=h/512*8,w=l/512*8,E=on(y,w,8,4,3)-.5;p+=E*34,S+=E*34,M+=E*30,x&&(p*=.52,S*=.56,M*=.48);let T=xi(h,l,41),_=T>.9?(T-.9)*160:0;p+=_,S+=_,M+=_;let b=(l*512+h)*4;o[b]=Math.max(0,Math.min(255,p)),o[b+1]=Math.max(0,Math.min(255,S)),o[b+2]=Math.max(0,Math.min(255,M)),o[b+3]=255}return s.putImageData(r,0,0),jo(n)}function Up(i,e){let n=document.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d"),r=s.createImageData(256,256),o=r.data,a=256/2;for(let l=0;l<256;l++)for(let h=0;h<256;h++){let u=(h-a)/a,f=(l-a)/a,d=Math.atan2(f,u),m=Math.hypot(u,f),x=.7+.26*on(Math.cos(d)*2+4,Math.sin(d)*2+4,8,3,i),[g,p,S,M]=e(m/x,h,l),y=(l*256+h)*4;o[y]=Math.max(0,Math.min(255,g)),o[y+1]=Math.max(0,Math.min(255,p)),o[y+2]=Math.max(0,Math.min(255,S)),o[y+3]=Math.max(0,Math.min(255,M))}s.putImageData(r,0,0);let c=new Dt(n);return c.colorSpace=nt,c.anisotropy=16,c}function Su(i,e,t){return[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t]}function HM(){let i=[10,10,9],e=[40,39,35],t=[104,100,88];return Up(11,(n,s,r)=>{let o=xi(s,r,63),a;n<.72?a=Su(i,e,$o(0,.72,n)):(a=Su(e,t,$o(.72,.97,n)),a=a.map(l=>l+(o-.5)*26));let c=(1-$o(.9,1,n))*255;return[a[0],a[1],a[2],c]})}function kM(){let i=[104,110,96],e=[52,54,48];return Up(23,t=>{let n=Su(i,e,$o(.35,1,t)),s=(1-$o(.86,1,t))*255;return[n[0],n[1],n[2],s]})}function $o(i,e,t){let n=Math.max(0,Math.min(1,(t-i)/(e-i||1e-6)));return n*n*(3-2*n)}var Eu=26;function Fp(){let t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d"),s=n.createImageData(512,512),r=s.data;for(let o=0;o<512;o++)for(let a=0;a<512;a++){let c=a/512*8,l=o/512*8,h=62,u=52,f=36,d=on(c,l,8,4,131)-.5;h+=d*30,u+=d*26,f+=d*20;let m=on(c*.9+3,l*.9+3,8,3,137);if(m>.56){let M=Math.min(1,(m-.56)*5);h+=(52-h)*.6*M,u+=(60-u)*.6*M,f+=(34-f)*.6*M}let x=on(c*.6+11,l*.6+11,8,3,149);if(x<.42){let M=Math.min(1,(.42-x)*4);h*=1-.28*M,u*=1-.26*M,f*=1-.22*M}let g=xi(a,o,151),p=g>.9?(g-.9)*220:g<.07?-g*120:0;h+=p,u+=p*.95,f+=p*.8;let S=(o*512+a)*4;r[S]=Math.max(0,Math.min(255,h)),r[S+1]=Math.max(0,Math.min(255,u)),r[S+2]=Math.max(0,Math.min(255,f)),r[S+3]=255}return n.putImageData(s,0,0),jo(t)}function Op(){let t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d"),s=n.createImageData(512,512),r=s.data;for(let a=0;a<512;a++)for(let c=0;c<512;c++){let l=c/512*22,h=a/512*22,u=40,f=47,d=26,m=on(l,h,22,4,211)-.5;u+=m*30,f+=m*36,d+=m*20;let x=on(l*.55+5,h*.55+5,22,3,223);if(x>.5){let C=Math.min(1,(x-.5)*5);u+=(24-u)*.8*C,f+=(33-f)*.8*C,d+=(17-d)*.8*C}let g=on(l*.7+17,h*.7+2,22,3,239);if(g>.62){let C=Math.min(1,(g-.62)*6);u+=(66-u)*.55*C,f+=(58-f)*.55*C,d+=(36-d)*.55*C}let p=Math.abs(on(l*.5+9,h*2.2,22,2,227)-.5);if(p<.035){let C=1-p/.035;u+=(74-u)*.5*C,f+=(64-f)*.5*C,d+=(44-d)*.5*C}let S=xi(c,a,229),M=S>.88?(S-.88)*160:0;u+=M*.7,f+=M,d+=M*.5;let y=Math.min(c,511-c)/512,w=Math.min(a,511-a)/512,E=Math.min(y,w)/.14,T=on(l*2,h*2,44,2,233)*.5,_=Math.max(0,Math.min(1,E-T)),b=(a*512+c)*4;r[b]=Math.max(0,Math.min(255,u)),r[b+1]=Math.max(0,Math.min(255,f)),r[b+2]=Math.max(0,Math.min(255,d)),r[b+3]=Math.round(_*255)}n.putImageData(s,0,0);let o=new Dt(t);return o.colorSpace=nt,o.anisotropy=16,o}function Bp(i,e){let t=i.streetLine||[];if(t.length<2)return{group:new rt};let n=new rt;return e.add(n),GM(t,n),VM(t,n),{group:n}}function Qo(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,h=Math.hypot(c,l);if(t+h>=e){let u=h>0?(e-t)/h:0;return{point:[s+c*u,r+l*u],tangent:[c/(h||1),l/(h||1)]}}t+=h}return null}function zp(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function GM(i,e){let t=Math.min(UM,zp(i)),n=3,s=[],r=[[-vl/2,0],[-vl/2,Pp],[vl/2,Pp],[vl/2,0]];for(let c of[-1,1]){let l=[],h=[],u=0;for(let m=0;m<=t;m+=n){let x=Qo(i,m);if(!x)break;let[g,p]=x.tangent,S=-p,M=g,y=x.point[0]+S*c*(Ip/2),w=x.point[1]+M*c*(Ip/2);for(let[E,T]of r)l.push(y+S*E,T,w+M*E);u++}if(u<2)continue;let f=r.length;for(let m=0;m<u-1;m++)for(let x=0;x<f-1;x++){let g=m*f+x,p=m*f+x+1,S=(m+1)*f+x,M=(m+1)*f+x+1;h.push(g,S,p,p,S,M)}let d=new mt;d.setAttribute("position",new Je(l,3)),d.setIndex(h),d.computeVertexNormals(),s.push(d)}if(!s.length)return;let o=ot(s,!1),a=new $e({color:4142124,side:Lt});e.add(new Ge(o,a))}function VM(i,e){let t=zp(i),n=HM(),s=kM(),r=(o,a,c,l,h,u)=>{let f=[];for(let m=0;m<a;m++){let x=20+Jo()*Math.max(1,t-40),g=Qo(i,x);if(!g)continue;let[p,S]=g.tangent,M=-S,y=p,w=(Jo()*2-1)*c,E=g.point[0]+M*w,T=g.point[1]+y*w,_=l+Jo()*(h-l),b=new Yt(_,_*(.6+Jo()*.7));b.rotateX(-Math.PI/2),b.rotateY(Jo()*Math.PI*2),b.translate(E,BM,T),f.push(b)}if(!f.length)return;let d=new $e({map:o,transparent:!0,opacity:u,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});e.add(new Ge(ot(f,!1),d))};r(n,FM,6.2,.7,2.4,.92),r(s,OM,6.2,1.2,3.6,.5)}var WM=2;function Hp(i){let e=[],t=[],n=[];function s(u){for(let f=0;f<e.length;f++){let d=e[f].x-u[0],m=e[f].z-u[1];if(Math.hypot(d,m)<WM)return f}return e.push({x:u[0],z:u[1]}),e.length-1}i.forEach((u,f)=>{if(u.length<2)return;let d=s(u[0]),m=s(u[u.length-1]);t[f]=[d,m],(n[d]??=[]).push({segIdx:f,otherNode:m}),(n[m]??=[]).push({segIdx:f,otherNode:d})});let r=new Set;function o(u){let f=[[e[u].x,e[u].z]],d=u;for(;;){let m=(n[d]||[]).filter(y=>!r.has(y.segIdx));if(m.length===0)break;let{segIdx:x,otherNode:g}=m[0];r.add(x);let p=i[x],[S]=t[x],M=S===d?p:[...p].reverse();for(let y=1;y<M.length;y++)f.push(M[y]);d=g}return f}function a(u){let f=0;for(let d=1;d<u.length;d++)f+=Math.hypot(u[d][0]-u[d-1][0],u[d][1]-u[d-1][1]);return f}let c=[],l=e.map((u,f)=>f).filter(u=>(n[u]||[]).length!==2);for(let u of l){let f=r.size,d=o(u);r.size>f&&c.push(d)}for(let u=0;u<e.length;u++)(n[u]||[]).some(d=>!r.has(d.segIdx))&&c.push(o(u));c.sort((u,f)=>a(f)-a(u));let h=c[0]||[];return h.length>1&&h[0][1]>h[h.length-1][1]&&h.reverse(),h}function kp(i){return function(t,n){let s=null,r=1/0,o=null;for(let a=0;a<i.length-1;a++){let[c,l]=i[a],[h,u]=i[a+1],f=h-c,d=u-l,m=f*f+d*d,x=m>0?((t-c)*f+(n-l)*d)/m:0;x=Math.max(0,Math.min(1,x));let g=c+x*f,p=l+x*d,S=Math.hypot(t-g,n-p);if(S<r){r=S,s=[g,p];let M=Math.sqrt(m);o=M>0?[f/M,d/M]:[0,1]}}return{point:s,distance:r,tangent:o}}}function Gp(i,e,t){let n=1/0,s=0,r=0;for(let o=0;o<t.length-1;o++){let[a,c]=t[o],[l,h]=t[o+1],u=l-a,f=h-c,d=u*u+f*f,m=Math.sqrt(d),x=d>0?((i-a)*u+(e-c)*f)/d:0;x=Math.max(0,Math.min(1,x));let g=Math.hypot(i-(a+x*u),e-(c+x*f));g<n&&(n=g,s=r+x*m),r+=m}return s}function Ml(i,e){let t=i.footprint,n=[];if(!t||t.length<3||!e)return n;let s=0,r=0;for(let a of t)s+=a[0],r+=a[1];s/=t.length,r/=t.length;let o=[];for(let a=0;a<t.length;a++){let c=t[a],l=t[(a+1)%t.length],h=l[0]-c[0],u=l[1]-c[1],f=Math.hypot(h,u);if(f<.25)continue;let d=(c[0]+l[0])/2,m=(c[1]+l[1])/2,x=e(d,m);if(!x||!x.point)continue;let g=e(c[0],c[1]),p=e(l[0],l[1]);if(Math.min(x.distance,g?g.distance:1/0,p?p.distance:1/0)>30)continue;let M=1/f,y=-u*M,w=h*M;y*(d-s)+w*(m-r)<0&&(y=-y,w=-w);let E=x.point[0]-d,T=x.point[1]-m,_=Math.hypot(E,T)||1,b=(y*E+w*T)/_;if(b<-.3||!(b>=.35))continue;let I=!1;x.tangent&&f<=9&&(I=Math.abs(h*M*x.tangent[0]+u*M*x.tangent[1])<.88),o.push({i:a,ax:c[0],az:c[1],bx:l[0],bz:l[1],dirx:h*M,dirz:u*M,len:f,isChamfer:I})}for(let a of o){let c=n[n.length-1];c&&a.i===c.endEdge+1&&c.dirx*a.dirx+c.dirz*a.dirz>.985?(c.bx=a.bx,c.bz=a.bz,c.len+=a.len,c.endEdge=a.i,c.isChamfer=c.isChamfer||a.isChamfer):n.push({ax:a.ax,az:a.az,bx:a.bx,bz:a.bz,dirx:a.dirx,dirz:a.dirz,len:a.len,isChamfer:a.isChamfer,startEdge:a.i,endEdge:a.i})}if(n.length>1){let a=n[0],c=n[n.length-1];c.endEdge===t.length-1&&a.startEdge===0&&Math.hypot(c.bx-a.ax,c.bz-a.az)<.5&&c.dirx*a.dirx+c.dirz*a.dirz>.985&&(a.ax=c.ax,a.az=c.az,a.len+=c.len,a.isChamfer=a.isChamfer||c.isChamfer,n.pop())}return n}var ea=7,XM=3,Vp=ea+XM,qM=.03,YM=3.2,ZM=-.06,KM=4870466,Wp=[9078112,7039843,8016448,5592655,7630666,7232847,6249034,8153690],Xp=4;function JM(){let t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d"),s=n.createImageData(256,256),r=s.data,a=256/13;for(let c=0;c<256;c++){let l=Math.floor(c/a),u=c-l*a<2;for(let f=0;f<256;f++){let d=f/256*16,m=c/256*16,x=150,g=146,p=134,S=on(d,m,16,4,61)-.5;x+=S*34,g+=S*32,p+=S*28;let M=Math.floor((f+l*37)/(256/5)),y=(xi(M,l,17)-.5)*22;x+=y,g+=y,p+=y,u&&(x*=.62,g*=.62,p*=.6);let w=on(d*.35,m*.9+4,16,3,83);if(w>.56){let b=Math.min(1,(w-.56)*4.5);x*=1-.35*b,g*=1-.33*b,p*=1-.28*b}let E=xi(f,c,97),T=E>.92?(E-.92)*200:0;x+=T,g+=T,p+=T*.9;let _=(c*256+f)*4;r[_]=Math.max(0,Math.min(255,x)),r[_+1]=Math.max(0,Math.min(255,g)),r[_+2]=Math.max(0,Math.min(255,p)),r[_+3]=255}}return n.putImageData(s,0,0),jo(t,[1/Xp,1/Xp])}function Yp(i){let e=new rt,t=$M(i.streetPaths);t&&e.add(t);let n=QM(i.buildings);n&&e.add(n),e.add(nS(i)),e.add(iS()),sS(e);let s=Hp(i.streetPaths),r=new io(KM,.0095);return{group:e,streetLine:s,nearestStreetPoint:kp(s),fog:r}}function $M(i){let e=[],t=[];for(let s of i){if(s.length<2)continue;let r=jM(s);r&&(e.push(r.road),t.push(r.paving))}if(e.length===0)return null;let n=new rt;return n.position.y=qM,n.add(new Ge(ot(e,!1),new $e({map:Np()}))),n.add(new Ge(ot(t,!1),new $e({map:Dp()}))),n}function jM(i){let e=i.length,t=[],n=[],s=0;for(let o=0;o<e;o++){let a=i[Math.max(0,o-1)],c=i[Math.min(e-1,o+1)],l=c[0]-a[0],h=c[1]-a[1],u=Math.hypot(l,h)||1;t.push([-h/u,l/u]),o>0&&(s+=Math.hypot(i[o][0]-i[o-1][0],i[o][1]-i[o-1][1])),n.push(s)}let r=(o,a,c)=>{let l=[],h=[],u=[],f=Math.abs(a-o);for(let m=0;m<e;m++){let[x,g]=i[m],[p,S]=t[m],M=n[m]/c;l.push(x+p*o,0,g+S*o),l.push(x+p*a,0,g+S*a),h.push(0,M,f/c,M)}for(let m=0;m<e-1;m++){let x=m*2,g=m*2+1,p=(m+1)*2,S=(m+1)*2+1;u.push(x,g,S,x,S,p)}let d=new mt;return d.setAttribute("position",new Je(l,3)),d.setAttribute("uv",new Je(h,2)),d.setIndex(u),d.computeVertexNormals(),d};return{road:r(-ea,ea,Lp),paving:ot([r(-Vp,-ea,bu),r(ea,Vp,bu)],!1)}}function QM(i){let e=[],t=0;if(i.forEach((r,o)=>{let a=eS(r,o);a?e.push(a):t++}),e.length===0)return null;t>0&&console.warn(`[world] skipped ${t}/${i.length} buildings with bad footprints`);let n=ot(e,!1),s=new $e({vertexColors:!0,flatShading:!0,map:JM()});return new Ge(n,s)}function eS(i,e){let{footprint:t,levels:n}=i;if(!t||t.length<3)return null;let s=Math.max(1,n||1)*YM;try{let r=new Tr;r.moveTo(t[0][0],-t[0][1]);for(let h=1;h<t.length;h++)r.lineTo(t[h][0],-t[h][1]);r.closePath();let o=new So(r,{depth:s,bevelEnabled:!1,curveSegments:1});o.rotateX(-Math.PI/2);let a=Tu(e,i),c=o.attributes.position.count,l=new Float32Array(c*3);for(let h=0;h<c;h++)l[h*3]=a.r,l[h*3+1]=a.g,l[h*3+2]=a.b;return o.setAttribute("color",new Je(l,3)),o}catch{return null}}function Tu(i,e){let t=Math.abs(tS(`${i}:${e.footprint[0][0]}:${e.footprint[0][1]}`)),n=new we(Wp[t%Wp.length]),s={h:0,s:0,l:0};n.getHSL(s);let r=(t%17/17-.5)*.12,o=new we;return o.setHSL(s.h,s.s,Math.min(.85,Math.max(.08,s.l+r))),o}function tS(i){let e=0;for(let t=0;t<i.length;t++)e=(e<<5)-e+i.charCodeAt(t),e|=0;return e}function nS(i){let e=1/0,t=-1/0,n=1/0,s=-1/0;for(let m of i.buildings)for(let[x,g]of m.footprint)x<e&&(e=x),x>t&&(t=x),g<n&&(n=g),g>s&&(s=g);let r=400,o=t-e+r*2,a=s-n+r*2,c=(e+t)/2,l=(n+s)/2,h=new Yt(o,a);h.rotateX(-Math.PI/2);let u=Fp();u.repeat.set(o/Eu,a/Eu);let f=new $e({map:u}),d=new Ge(h,f);return d.position.set(c,ZM,l),d}function iS(){let i=new Yt(80,14);i.rotateX(-Math.PI/2);let e=-.483,t=.876;i.rotateY(Math.atan2(-t,e));let n=new Ge(i,new $e({map:Op(),transparent:!0,depthWrite:!1}));n.position.set(-719,.02,1303),n.name="elm-row-gardens";let s=924192,r=()=>{s|=0,s=s+1831565813|0;let l=Math.imul(s^s>>>15,1|s);return l=l+Math.imul(l^l>>>7,61|l)^l,((l^l>>>14)>>>0)/4294967296},o=[];for(let l=0;l<26;l++){let h=(r()-.5)*74,u=(r()-.5)*10,f=new Ci(1,6,4),d=.5+r()*1.3;f.scale(.9+r()*1.6,d,.9+r()*1.6),f.rotateY(r()*Math.PI),f.translate(-719+e*h-t*u,d*.55,1303+t*h+e*u),o.push(f)}let a=new Ge(ot(o),new $e({color:3029024}));a.name="elm-row-bushes";let c=new rt;return c.add(n,a),c}function sS(i){let e=new To(9147296,3814180,3.9);i.add(e);let t=new Ps(13621480,1.15);t.position.set(-200,300,150),t.castShadow=!1,i.add(t);let n=new Co(4999224,1.4);i.add(n)}var rS=16747082,qp=18,oS=5,aS=6.5;function Zp(i){let e=new Di(rS,qp,aS,2);e.position.set(.15,-.15,.1),i.add(e);function t(n){let s=Math.sin(n*11.3)*.5+Math.sin(n*27.1)*.3+Math.sin(n*4.7)*.2;e.intensity=qp+s*oS*.3333}return{light:e,update:t}}var Sl=Math.PI/2-.05,bl={KeyW:"forward",ArrowUp:"forward",KeyS:"backward",ArrowDown:"backward",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right"};function Jp(i,e,{nearestStreetPoint:t,spawn:n}){let s=n.yaw||0,r=0;i.position.set(n.x,1.7,n.z),i.rotation.order="YXZ",f();let o=new Set,a=!1,c=0,l=0,h=!1,u=!0;function f(){i.rotation.set(r,s,0)}function d(T){u&&bl[T.code]&&(o.add(bl[T.code]),T.preventDefault())}function m(T){bl[T.code]&&o.delete(bl[T.code])}function x(T){if(u&&(a=!0,c=T.clientX,l=T.clientY,e.setPointerCapture?.(T.pointerId),!h&&e.requestPointerLock))try{let _=e.requestPointerLock();_&&typeof _.catch=="function"&&_.catch(()=>{})}catch{}}function g(T){if(h){s-=(T.movementX||0)*.0025,r-=(T.movementY||0)*.0025,r=Kp(r,-Sl,Sl),f();return}if(!a)return;let _=T.clientX-c,b=T.clientY-l;c=T.clientX,l=T.clientY,s-=_*.0035,r-=b*.0035,r=Kp(r,-Sl,Sl),f()}function p(T){a=!1,e.releasePointerCapture?.(T.pointerId)}function S(){h=document.pointerLockElement===e}window.addEventListener("keydown",d),window.addEventListener("keyup",m),e.addEventListener("pointerdown",x),window.addEventListener("pointermove",g),window.addEventListener("pointerup",p),document.addEventListener("pointerlockchange",S);function M(T){u=!!T,u||(o.clear(),a=!1)}function y(T){u&&(T?o.add("forward"):o.delete("forward"))}function w(T){if(!u)return;let _=0,b=0;if(o.has("forward")&&(b-=1),o.has("backward")&&(b+=1),o.has("left")&&(_-=1),o.has("right")&&(_+=1),_!==0||b!==0){let C=Math.hypot(_,b);_/=C,b/=C;let I=Math.sin(s),N=Math.cos(s),W=-I,X=-N,D=N,H=-I,P=(W*-b+D*_)*14*T,B=(X*-b+H*_)*14*T,G=i.position.x+P,Q=i.position.z+B,{point:te,distance:ce}=t(G,Q);if(te&&ce>16){let ye=16/ce;G=te[0]+(G-te[0])*ye,Q=te[1]+(Q-te[1])*ye}i.position.x=G,i.position.z=Q}}function E(){window.removeEventListener("keydown",d),window.removeEventListener("keyup",m),e.removeEventListener("pointerdown",x),window.removeEventListener("pointermove",g),window.removeEventListener("pointerup",p),document.removeEventListener("pointerlockchange",S)}return{update:w,dispose:E,setEnabled:M,setForward:y}}function Kp(i,e,t){return Math.max(e,Math.min(t,i))}var $p=6,jp=40,cS=60,lS=85,Qp=[4867638,4276026,5525567,3882292,5195578,3749420,4737602,5919040],em=[7025448,7363619,3032640,5849646,4011091,6703646],hS=new jn;function tm(i,e){return hS.load(i,t=>{t.colorSpace=nt,e&&e(t)})}function Fs(i,e,t){let n=Math.imul(i,374761393)^Math.imul(e,668265263)^Math.imul(t,2246822519);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function uS(i,e,t){let s=document.createElement("canvas");s.width=s.height=64;let r=s.getContext("2d"),o=r.createImageData(64,64),a=o.data,c={r:(i>>16&255)/255,g:(i>>8&255)/255,b:(i&255)/255};for(let h=0;h<64;h++)for(let u=0;u<64;u++){let f=t?1+.14*Math.sin(h*1.9)+(Fs(u,h,e)-.5)*.1:1.05+.1*Math.sin(u*2.3)+(Fs(u,h,e)-.5)*.16,d=1-.18*Fs(u>>3,h>>3,e+7)*Fs(u>>4,h>>4,e+13),m=1-.2*Math.pow(h/64,3),x=f*d*m,g=(h*64+u)*4;a[g]=Math.min(255,c.r*255*x),a[g+1]=Math.min(255,c.g*255*x),a[g+2]=Math.min(255,c.b*255*x),a[g+3]=255}r.putImageData(o,0,0);let l=new Dt(s);return l.colorSpace=nt,l}var Au=new Map;function ta(i,e){let t=i*2+(e?1:0);return Au.has(t)||Au.set(t,new $e({map:uS(i,i&65535^(e?40503:0),e),flatShading:!0})),Au.get(t)}function fS(){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createImageData(64,64),s=n.data,r={r:.4,g:.38,b:.32};for(let a=0;a<64;a++)for(let c=0;c<64;c++){let l=1+(Fs(c,a,2465)-.5)*.12,h=Math.floor(a/5),u=Fs(h,0,707),d=u>.45&&u<.85?1-.28*Fs(c>>1,h,1915):1,m=Math.min(c,63-c)/(64*.5),x=Math.min(a,63-a)/(64*.5),g=1-.22*(1-Math.min(m,x)),p=l*d*g,S=(a*64+c)*4;s[S]=Math.min(255,r.r*255*p),s[S+1]=Math.min(255,r.g*255*p),s[S+2]=Math.min(255,r.b*255*p),s[S+3]=255}t.putImageData(n,0,0);let o=new Dt(e);return o.colorSpace=nt,o}var wu=null;function Ru(){return wu||(wu=fS()),wu}function nm(i,e,t,n){let s=i.catalog&&Array.isArray(i.catalog.comics)?i.catalog.comics.filter(m=>m.npc):i.manifest.comics||[],r=e.streetLine||[],o=[],a=new Map,c=(m,x)=>{m&&(a.has(m)||a.set(m,[]),a.get(m).push(x))},l=gS(r),h=Math.max(1,l-jp-cS),u=s.length>1?h/(s.length-1):0;s.forEach((m,x)=>{let g=jp+x*u,p=x%2===0?1:-1,S=xS(r,g);if(!S)return;let[M,y]=S.tangent,w=-y,E=M,T=S.point[0]+w*$p*p,_=S.point[1]+E*$p*p,b=S.point[0]-T,C=S.point[1]-_,I=Math.atan2(b,C),N=dS(i,m,Qp[x%Qp.length],c);N.group.position.set(T,0,_),N.group.rotation.y=I,N.baseY=I,N.phase=x*2.1,t.add(N.group),o.push(N)});for(let[m,x]of a)tm(Rn(i,m),g=>{for(let p of x)p.map=g,p.color.set(16777215),p.needsUpdate=!0});let f=new L;function d(m,x){let g=n?n.position:null;for(let p=0;p<o.length;p++){let S=o[p];if(S.tick(x),g&&!S.comicLoaded){let M=S.group.position;Math.hypot(g.x-M.x,g.z-M.z)<lS&&S.loadComic()}}}return{npcs:o,update:d}}function dS(i,e,t,n){let s=e.npc.build||{height:1.9,girth:1,headScale:1.5},r=s.height,o=s.girth,a=s.headScale,c=new rt,l=ta(t,!1),h=new $e({color:1381391,flatShading:!0}),u=.12,f=r*.3,d=.52*o,m=.34*o,x=r*.48,g=.34*a,p=u+f,S=p+x,M=S+g*.5+.02,y=M+g*.5,w=d*.24,E=[],T=[];for(let Te of[-1,1]){let Me=new tt(d*.4,u,m*1.5);Me.translate(Te*w,u*.5,m*.2),T.push(Me)}for(let Te of[-1,1]){let Me=new tt(d*.36,f,m*.75);Me.translate(Te*w,u+f*.5,0),E.push(Me)}{let Te=new tt(d,x,m);Te.translate(0,p+x*.5,0),E.push(Te)}let _=S-x*.14,b=x*.62;for(let Te of[-1,1]){let Me=new tt(.13,b,.13);Me.rotateX(-1.15),Me.rotateZ(Te*.25),Me.translate(Te*(d*.5+.02),_-b*.28,m*.5+.06),E.push(Me)}let C=new Ge(ot(E),l),I=new Ge(ot(T),h);c.add(C,I);let N=ta(new we(t).multiplyScalar(.62).getHex(),!0),W=new qt({color:9077874});n(e.npc.face,W);let X=[N,N,N,N,W,N],D=new Ge(new tt(g,g,g*.85),X);D.position.set(0,M,0),c.add(D);let H=0;for(let Te of e.npc.name||"")H=H*31+Te.charCodeAt(0)|0;let P=new Ge(new tt(g*.95,.09,g*.85),new $e({color:em[Math.abs(H)%em.length],flatShading:!0}));P.position.set(0,S+.02,0),c.add(P);let B=x*.55,G=new qt({map:Ru(),side:Lt}),Q=new Ge(new Yt(1,1),G);Q.position.set(0,p+x*.55,m*.5+.17),Q.scale.set(B*.7,B,1),c.add(Q);let te=new $e({color:8680542,flatShading:!0});for(let Te of[-1,1]){let Me=new Ge(new tt(.09,.07,.06),te);Me.position.set(Te*B*.28,p+x*.55-B*.48,m*.5+.18),c.add(Me)}let ce=pS(e.npc.name,e.npc.blurb);ce.position.set(0,y+.42,0),c.add(ce);let ye={group:c,head:D,comicMesh:Q,comic:e,name:e.npc.name,blurb:e.npc.blurb,voice:null,baseY:0,phase:0,speaking:!1,comicLoaded:!1,loadComic(){ye.comicLoaded||(ye.comicLoaded=!0,tm(Rn(i,e.image),Te=>{G.map=Te,G.color.set(16777215),G.needsUpdate=!0;let Me=Te.image;Me&&Me.width&&Me.height&&Q.scale.set(B*(Me.width/Me.height),B,1)}))},setSpeaking(Te){ye.speaking=!!Te,ye.speaking||D.rotation.set(0,0,0)},tick(Te){if(c.rotation.z=Math.sin(Te*.6+ye.phase)*.01,c.rotation.y=ye.baseY+Math.sin(Te*.4+ye.phase)*.008,ye.speaking){let Me=Te*25+ye.phase;D.rotation.y=Math.sin(Me)*.09,D.rotation.x=(Math.sin(Me*.5)+1)*.05}}};return ye}function pS(i,e){let t=document.createElement("canvas");t.width=512,t.height=160;let n=t.getContext("2d");n.fillStyle="rgba(20, 22, 16, 0.82)",mS(n,6,6,t.width-12,t.height-12,14),n.fill(),n.lineWidth=2,n.strokeStyle="rgba(120, 116, 92, 0.6)",n.stroke(),n.textAlign="center",n.fillStyle="#d8d4c0",n.font='bold 44px "Courier New", monospace',n.fillText(i,t.width/2,68,t.width-40),n.fillStyle="#a9a48c",n.font='italic 30px "Courier New", monospace',n.fillText(e,t.width/2,116,t.width-36);let s=new Dt(t);s.colorSpace=nt;let r=new ui({map:s,transparent:!0,depthTest:!0}),o=new wi(r);return o.scale.set(2.4,.75,1),o}function mS(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function gS(i){let e=0;for(let t=0;t<i.length-1;t++)e+=Math.hypot(i[t+1][0]-i[t][0],i[t+1][1]-i[t][1]);return e}function xS(i,e){if(!i||i.length<2)return null;let t=0;for(let c=0;c<i.length-1;c++){let[l,h]=i[c],[u,f]=i[c+1],d=u-l,m=f-h,x=Math.hypot(d,m);if(t+x>=e){let g=x>0?(e-t)/x:0,p=x||1;return{point:[l+d*g,h+m*g],tangent:[d/p,m/p]}}t+=x}let n=i[i.length-1],s=i[i.length-2],r=n[0]-s[0],o=n[1]-s[1],a=Math.hypot(r,o)||1;return{point:[n[0],n[1]],tangent:[r/a,o/a]}}var El=256,Tl=128,Al=16,im=["#0e0c0b","#120f1a","#101512","#12100a","#0a1210","#150d0d","#0c1015"],sm=['"Arial Narrow", "Helvetica Neue", Arial, sans-serif','"Futura", "Century Gothic", "Helvetica Neue", sans-serif','Georgia, "Times New Roman", serif'];function _S(i,e,t,n,s,r,o){let a=MS(o);i.save(),i.beginPath(),i.rect(e,t,n,s),i.clip(),i.fillStyle="#171410",i.fillRect(e,t,n,s);let c=Math.round(n*(.04+a()*.024));for(let T of[e,e+n-c]){i.fillStyle="#332e28",i.fillRect(T,t,c,s);for(let _=0;_<40;_++)i.fillStyle=`rgba(0,0,0,${.05+a()*.12})`,i.fillRect(T+a()*c,t+a()*s,1+a()*2,1+a()*2)}let l=e+c,h=n-c*2,u=a(),f=u<.3,d=t+s*(f?.2:.08);if(f){let T=t+s*.06,_=d-T,b=["#3a2420","#243a2e","#2a2438"][Math.floor(a()*3)],C="#d8d0c0",I=Math.max(3,Math.round(n*.045));for(let N=l;N<l+h;N+=I)i.fillStyle=(N-l)/I%2<1?b:C,i.beginPath(),i.moveTo(N,d),i.lineTo(Math.min(N+I,l+h),d),i.lineTo(Math.min(N+I-_*.35,l+h),T),i.lineTo(Math.max(N-_*.35,l),T),i.closePath(),i.fill();i.fillStyle="rgba(0,0,0,0.25)",i.fillRect(l,d-2,h,2)}let m=t+s*.4;if(u<.55)for(let T=m;T<t+s;T+=Math.max(2,s*.03))i.fillStyle=Math.round((T-m)/Math.max(2,s*.03))%2===0?"#211d18":"#15110d",i.fillRect(l,T,h,Math.max(2,s*.03));else{let T=t+s;i.fillStyle="#14181a",i.fillRect(l,m,h,T-m);let _=3+Math.floor(a()*2);i.strokeStyle="rgba(0,0,0,0.65)",i.lineWidth=2;for(let I=1;I<_;I++){let N=l+h/_*I;i.beginPath(),i.moveTo(N,m),i.lineTo(N,T),i.stroke()}i.strokeStyle="rgba(0,0,0,0.5)",i.lineWidth=1;let b=m+(T-m)*.55;i.beginPath(),i.moveTo(l,b),i.lineTo(l+h,b),i.stroke(),i.fillStyle="rgba(150,158,160,0.12)",i.beginPath(),i.moveTo(l,m),i.lineTo(l+h*.42,m),i.lineTo(l+h*.14,T),i.lineTo(l,T),i.closePath(),i.fill();let C=(T-m)*.16;i.fillStyle=["#2b2016","#1c231e","#241c26"][Math.floor(a()*3)],i.fillRect(l,T-C,h,C)}let x=d,g=m-d,p=im[Math.floor(a()*im.length)];i.fillStyle=p,i.fillRect(l,x,h,g),i.strokeStyle="rgba(0,0,0,0.6)",i.lineWidth=1,i.strokeRect(l+.5,x+.5,h-1,g-1);let S=sm[Math.floor(a()*sm.length)],M=a()<.75?"bold":"900",w=a()<.3?r.replace(/\w\S*/g,T=>T.charAt(0).toUpperCase()+T.slice(1).toLowerCase()):r.toUpperCase(),E=200+Math.floor(a()*30);i.fillStyle=`rgb(${E},${E-15},${E-45})`,i.textAlign="center",i.textBaseline="middle";try{i.letterSpacing="0.5px"}catch{}yS(i,w,l+h/2,x+g/2,h-12,g-6,S,M);for(let T=0;T<6;T++){i.fillStyle=`rgba(0,0,0,${.05+a()*.08})`;let _=e+a()*n;i.fillRect(_,t,1+a()*3,s)}i.restore()}function yS(i,e,t,n,s,r,o,a){o=o||'"Arial Narrow", "Helvetica Neue", Arial, sans-serif',a=a||"bold";let c=4;for(let h=22;h>=c;h--){if(i.font=`${a} ${h}px ${o}`,i.measureText(e).width<=s){i.fillText(e,t,n);return}let u=vS(i,e,s);if(u&&h<=18&&u.length===2){let f=h*1.05;if(f*2<=r){i.fillText(u[0],t,n-f/2),i.fillText(u[1],t,n+f/2);return}}}i.font=`bold ${c}px ${o}`;let l=e;for(;l.length>3&&i.measureText(l+"\u2026").width>s;)l=l.slice(0,-1);i.fillText(l+(l.length<e.length?"\u2026":""),t,n)}function vS(i,e,t){let n=e.split(" ");if(n.length<2)return null;for(let s=1;s<n.length;s++){let r=n.slice(0,s).join(" "),o=n.slice(s).join(" ");if(i.measureText(r).width<=t&&i.measureText(o).width<=t)return[r,o]}return null}function MS(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function SS(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function rm(i){let e=[...new Set(i)],t=Math.max(1,Math.ceil(e.length/Al)),n=document.createElement("canvas");n.width=Al*El,n.height=t*Tl;let s=n.getContext("2d");s.fillStyle="#171410",s.fillRect(0,0,n.width,n.height);let r=new Map;e.forEach((a,c)=>{let l=c%Al,h=Math.floor(c/Al),u=l*El,f=h*Tl;_S(s,u,f,El,Tl,a,SS(a)),r.set(a,{u0:u/n.width,u1:(u+El)/n.width,vTop:1-f/n.height,vBot:1-(f+Tl)/n.height})});let o=new Dt(n);return o.colorSpace=nt,o.anisotropy=4,{texture:o,uvFor:r,count:e.length}}var ni=.05,om=.25,Cu=.3,bS=3,Iu=1.2,am=250,xt=3.2,cm=.3,Os=.4,lm=.08,hm=.16,um=1.5,fm=6.4,ES=2.5,TS=15,na=.06,AS=2.2;function dm(i,e,t){let n=i&&i.facadeManifest,s=i&&i.facadeAtlas,r=i&&i.leith&&i.leith.buildings||[],o=e&&e.streetLine||[],a=e&&e.nearestStreetPoint;if(!n||!s||!r.length||!a||o.length<2)return{group:null,count:0,update(){}};let c=s.buildings||{},l=.5,h=.5,u=[];for(let P of n.buildings)for(let B of P.businesses||[])u.push(B.name);let f=u.length?rm(u):null,d=[],m=[],x=[],g=0,p=s.pages.map(()=>({positions:[],uvs:[],colors:[],indices:[],quadCount:0})),S=new Map;for(let P of n.buildings){let B=c[P.buildingIndex];if(!B)continue;let G=B.regions.find(Te=>Te.kind!=="corner")||B.regions[0];if(!G)continue;let Q=s.pages[B.page],te=1/Q.width,ce=1/Q.height,ye=S.get(B.page)||[];ye.push({bi:P.buildingIndex,chainage:P.chainage,region:G,u0Full:(G.x+l)*te,u1Full:(G.x+G.w-l)*te,vTop:1-(G.y+h)*ce,vBot:1-(G.y+G.h-h)*ce}),S.set(B.page,ye)}function M(P,B,G,Q,te,ce,ye,Te,Me,V,ne){let ee=P.quadCount*4;P.positions.push(ce,V,ye,Te,V,Me,Te,ne,Me,ce,ne,ye),P.uvs.push(B,G,Q,G,Q,te,B,te),P.colors.push(1,1,1,1,1,1,1,1,1,1,1,1),P.indices.push(ee,ee+1,ee+2,ee,ee+2,ee+3),P.quadCount++}function y(P,B,G,Q,te,ce,ye,Te,Me,V,ne,ee,Se,Ee,He){let je=P.quadCount*4;P.positions.push(ce,V,ye,Te,V,Me,Te,ne,Me,ce,ne,ye),P.uvs.push(B,G,Q,G,Q,te,B,te),P.colors.push(...ee,...Se,...Ee,...He),P.indices.push(je,je+1,je+2,je,je+2,je+3),P.quadCount++}let w=.1,E=1.1;function T(P,B,G,Q,te,ce,ye,Te,Me,V){let ne=Q-te,ee=te+ne*Math.min(1,xt/(ce||xt)),Se=Me-ye,Ee=V-Te,He=Math.hypot(Se,Ee)||1,je=pe=>[ye+Se*pe,Te+Ee*pe],We=pe=>B+(G-B)*pe,se=[1,1,1],oe=[0,0,0],ae=Math.min(.4,Math.max(w,E/He));if(1-2*ae<=.001)return M(P,B,te,G,ee,ye,Te,Me,V,ni,xt),1;let ve=[[0,ae,oe,se],[ae,1-ae,se,se],[1-ae,1,se,oe]];for(let[pe,be,fe,Fe]of ve){let[Le,U]=je(pe),[Qe,Ce]=je(be);y(P,We(pe),te,We(be),ee,Le,U,Qe,Ce,ni,xt,fe,Fe,Fe,fe)}return ve.length}function _(P,B){let G=P*73856093^B*19349663;return G=Math.imul(G^G>>>13,2246822507),G^=G>>>16,G>>>0}let b=0,C=(P,B,G,Q,te,ce,ye,Te,Me,V,ne,ee,Se,Ee=0)=>{let He=na*(G-B),je=B+He,We=G-He,se=Q-te,oe=se>0?te+ce*se:te,ae=Q-lm*se,ve=Math.max(.1,(ae-oe)/(se||1)*ye),pe=ee,be=0;for(;pe<Se-1e-6&&ve>1e-4;){let fe=Math.min(ve,Se-pe),Fe=fe/ve,Le=(_(Ee,be)&1)===0,U=Le?ae:oe,Ce=U+((Le?oe:ae)-U)*Fe;M(P,je,U,We,Ce,Te,Me,V,ne,pe,pe+fe),b++,pe+=fe,be++}};function I(P){let B=-1,G=1/0;return s.pages.forEach((Q,te)=>{if(P>=Q.chainageMin&&P<=Q.chainageMax)B=te,G=0;else if(B===-1||G>0){let ce=P<Q.chainageMin?Q.chainageMin-P:P-Q.chainageMax;ce<G&&(G=ce,B=te)}}),B}for(let P of n.buildings){let B=P.buildingIndex,G=r[B];if(!G||!G.footprint||G.footprint.length<3)continue;let Q=Ml(G,a);if(!Q.length)continue;let te=0,ce=0;for(let V of G.footprint)te+=V[0],ce+=V[1];te/=G.footprint.length,ce/=G.footprint.length;let ye=c[B],Te=new Map,Me=0;if(ye)for(let V of Q){let ne=Math.hypot(V.bx-V.ax,V.bz-V.az);if(ne<Cu)continue;let ee=ye.regions.find(Ee=>V.isChamfer?Ee.kind==="corner":Ee.kind!=="corner")||ye.regions[0];if(!ee||ne/ee.widthM>Iu)continue;let Se=Te.get(ee)||{totalSpan:0,count:0,cursor:0};Se.totalSpan+=ne,Se.count+=1,Te.set(ee,Se)}Q.forEach((V,ne)=>{let ee=V.bx-V.ax,Se=V.bz-V.az,Ee=Math.hypot(ee,Se);if(Ee<Cu)return;let He=V.ax,je=V.az,We=ee,se=Se,oe=-Se/Ee,ae=ee/Ee,ve=(V.ax+V.bx)/2,pe=(V.az+V.bz)/2;oe*(ve-te)+ae*(pe-ce)<0&&(oe=-oe,ae=-ae,He=V.bx,je=V.bz,We=-ee,se=-Se);let be=Fe=>({x:He+We*Fe+oe*om,z:je+se*Fe+ae*om}),fe=ye?ye.regions.find(Fe=>V.isChamfer?Fe.kind==="corner":Fe.kind!=="corner")||ye.regions[0]:null;if(fe){let Fe=s.pages[ye.page],Le=p[ye.page],U=1/Fe.width,Qe=1/Fe.height,Ce=(fe.x+l)*U,R=(fe.x+fe.w-l)*U,v=1-(fe.y+h)*Qe,O=1-(fe.y+fe.h-h)*Qe,k=Ee/fe.widthM,Z=Math.max(2,P.levels||2)*xt,he=Math.min(.75,Math.max(Os,xt/fe.heightM)),de=v-O,J=(S.get(ye.page)||[]).filter(j=>j.bi!==B),ie=J.filter(j=>Math.abs(j.chainage-P.chainage)>=TS),xe=ie.length>=3?ie:J,Ne=[];if(k>ES){let j=Math.min(1,fe.widthM/Ee),ue=Math.max(0,.5-j/2),Ae=Math.min(1,.5+j/2),Be=be(ue),qe=be(Ae);Ne.push({u0:Ce,u1:R,ax:Be.x,az:Be.z,bx:qe.x,bz:qe.z});let F=[{side:0,innerT:ue,dirSign:-1},{side:1,innerT:Ae,dirSign:1}];for(let{side:le,innerT:$,dirSign:ge}of F){let me=le===0?ue:1-Ae,re=me*Ee;if(re<Cu)continue;let De=Math.max(1,Math.round(re/fm)),Ue=me/De,gt=P.businesses?P.businesses.length-Me:0,dt=f?Math.max(0,Math.min(gt,De)):0;for(let At=0;At<De;At++){let Ht=$+ge*At*Ue,In=$+ge*(At+1)*Ue,it=be(Math.min(Ht,In)),vt=be(Math.max(Ht,In));if(At<dt){let Ut=P.businesses[Me];Me++;let Et=f.uvFor.get(Ut.name);if(Et){let Ft=g*4;d.push(it.x,ni,it.z,vt.x,ni,vt.z,vt.x,xt,vt.z,it.x,xt,it.z),m.push(Et.u0,Et.vBot,Et.u1,Et.vBot,Et.u1,Et.vTop,Et.u0,Et.vTop),x.push(Ft,Ft+1,Ft+2,Ft,Ft+2,Ft+3),g++,b++}continue}if(xe.length>=3){let Ut=_(B,ne*6151+le*331+At)%xe.length,Et=xe[Ut],Ft=Math.min(.75,Math.max(Os,xt/Et.region.heightM));C(Le,Et.u0Full,Et.u1Full,Et.vTop,Et.vBot,Ft,Et.region.heightM,it.x,it.z,vt.x,vt.z,ni,xt,_(B,ne*6151+le*331+At+1))}else de>0&&C(Le,Ce,R,v,O,he,fe.heightM,it.x,it.z,vt.x,vt.z,ni,xt,_(B,ne*6151+le*331+At+1))}if(Z>xt+1e-6){let At=le===0?0:1,Ht=be(Math.min($,At)),In=be(Math.max($,At));if(xe.length<3)de>0&&C(Le,Ce,R,v,O,he,fe.heightM,Ht.x,Ht.z,In.x,In.z,xt,Z,_(B,ne*4111+le*211+2));else{let it=$,vt=0,Ut=-1,Et=0;for(;Math.abs(it-$)<me-1e-6&&Et++<64;){let Ft=_(B,ne*4111+le*211+vt)%xe.length;Ft===Ut&&(Ft=(Ft+1)%xe.length);let nn=xe[Ft];Ut=Ft;let kt=me-Math.abs(it-$),Xn=Math.min(kt,Math.max(nn.region.widthM/Ee,1e-4)),_n=it+ge*Xn,an=be(Math.min(it,_n)),Kt=be(Math.max(it,_n)),si=Math.min(.75,Math.max(Os,xt/nn.region.heightM));C(Le,nn.u0Full,nn.u1Full,nn.vTop,nn.vBot,si,nn.region.heightM,an.x,an.z,Kt.x,Kt.z,xt,Z,_(B,ne*4111+le*211+vt)),it=_n,vt++}}}}}else if(k>Iu){let j=Math.min(1,fe.widthM/Ee),ue=Math.max(0,.5-j/2),Ae=Math.min(1,.5+j/2),Be=be(ue),qe=be(Ae);Ne.push({u0:Ce,u1:R,ax:Be.x,az:Be.z,bx:qe.x,bz:qe.z});let F=Math.min(.75,Math.max(Os,xt/fe.heightM)),le=v-O,$=O+F*le,me=(1-F)*fe.heightM,re=R-Ce,De=cm*re,gt=cm*fe.widthM/Ee,dt=Math.max(0,re-De),At=na*re,Ht=Math.max(0,dt-2*At),In=(Ut,Et,Ft,nn,kt,Xn,_n,an)=>{let Kt=_n===0?1:-1,si=ni,Oi=0;for(;si<fe.heightM-1e-6&&me>1e-4;){let Xs=Math.min(me,fe.heightM-si),oa=Xs/me,aa=dt>0&&an>0?Math.min(At+_(B,ne*977+_n*97+Oi)%1e3/1e3*Ht,dt):0,Hl=Ut+Kt*aa,kl=Et+Kt*aa,ca=Oi%2===0,A=ca?$:v,K=A+((ca?v:$)-A)*oa;M(Le,Hl,A,kl,K,Ft,nn,kt,Xn,si,si+Xs),b++,si+=Xs,Oi++}},it=ue,vt=0;for(;it>1e-6;){let Ut=Math.min(gt,it),Et=it-Ut,Ft=gt>0?Ut/gt:1,nn=vt%2===0,kt=nn?Ce:Ce+De,Xn=nn?Ce+De:Ce,_n=kt+(Xn-kt)*Ft,an=be(Et),Kt=be(it);In(_n,kt,an.x,an.z,Kt.x,Kt.z,0,vt),Ne.push({u0:_n,u1:kt,ax:an.x,az:an.z,bx:Kt.x,bz:Kt.z,skipBase:!0,side:0}),it=Et,vt++}for(it=Ae,vt=0;it<1-1e-6;){let Ut=Math.min(gt,1-it),Et=it+Ut,Ft=gt>0?Ut/gt:1,nn=vt%2===0,kt=nn?R:R-De,Xn=nn?R-De:R,_n=kt+(Xn-kt)*Ft,an=be(it),Kt=be(Et);In(kt,_n,an.x,an.z,Kt.x,Kt.z,1,vt),Ne.push({u0:kt,u1:_n,ax:an.x,az:an.z,bx:Kt.x,bz:Kt.z,skipBase:!0,side:1}),it=Et,vt++}}else{let j=Te.get(fe),ue,Ae;if(j&&j.count>1&&j.totalSpan>0){let F=na*(R-Ce),le=Ce+F,$=R-F,ge=Math.max(0,$-le),me=le+ge*(j.cursor/j.totalSpan);j.cursor+=Ee;let re=le+ge*(j.cursor/j.totalSpan);ue=me,Ae=re}else if(k<1/Iu){let F=Math.max(.08,k),le=(R-Ce)*F/2,$=(_(B,ne)%1e3/1e3-.5)*.3,ge=Ce+le+.5*(R-Ce)+$*(R-le-(Ce+le));ue=Math.max(Ce,ge-le),Ae=Math.min(R,ge+le)}else{let F=na*(R-Ce);ue=Ce+F,Ae=R-F}let Be=be(0),qe=be(1);if(j&&j.count>1&&Ee<AS){let F=Math.min(.9,xt/fe.heightM);Ne.push({u0:ue,u1:Ae,ax:Be.x,az:Be.z,bx:qe.x,bz:qe.z,y0:xt,v0:O+(v-O)*F})}else Ne.push({u0:ue,u1:Ae,ax:Be.x,az:Be.z,bx:qe.x,bz:qe.z,groundFade:!0})}for(let j of Ne)if(!j.skipBase){if(j.groundFade){if(b+=T(Le,j.u0,j.u1,v,O,fe.heightM,j.ax,j.az,j.bx,j.bz),fe.heightM>xt+1e-6){let ue=O+(v-O)*Math.min(1,xt/(fe.heightM||xt));M(Le,j.u0,ue,j.u1,v,j.ax,j.az,j.bx,j.bz,xt,fe.heightM),b++}continue}M(Le,j.u0,j.v0??O,j.u1,j.v1??v,j.ax,j.az,j.bx,j.bz,j.y0??ni,fe.heightM),b++}if(Z-fe.heightM>um){for(let j of Ne)if(j.side===void 0)if(xe.length>=3){let ue=_(B,ne*8231+17)%xe.length,Ae=xe[ue],Be=Math.min(.75,Math.max(Os,xt/Ae.region.heightM));C(Le,Ae.u0Full,Ae.u1Full,Ae.vTop,Ae.vBot,Be,Ae.region.heightM,j.ax,j.az,j.bx,j.bz,fe.heightM,Z,_(B,ne*8231+18))}else de>0&&C(Le,j.u0,j.u1,v,O,he,fe.heightM,j.ax,j.az,j.bx,j.bz,fe.heightM,Z,_(B,ne*8231+18))}if(Z-fe.heightM>um&&Ne.some(j=>j.side!==void 0)){let j=v-O,ue=v-lm*j,Ae=Math.max(O,ue-hm*j),Be=hm*fe.heightM,qe=R-Ce,F=na*qe,le={};for(let me of Ne){if(me.side===void 0)continue;let re=Math.max(0,qe-Math.abs(me.u1-me.u0));(le[me.side]===void 0||re<le[me.side])&&(le[me.side]=re)}let $=fe.heightM,ge=0;for(;$<Z-1e-6&&Be>1e-4;){let me=Math.min(Be,Z-$),re=me/Be,De=ge%2===0,Ue=De?ue:Ae,dt=Ue+((De?Ae:ue)-Ue)*re,At=$,Ht=$+me,In={};for(let it of[0,1]){let vt=le[it];if(vt===void 0)continue;let Ut=Math.max(0,vt-2*F);In[it]=vt>0?Math.min(F+_(B,ne*613+ge*31+it)%1e3/1e3*Ut,vt):0}for(let it of Ne){if(it.side===void 0)continue;let Ut=(it.side===0?1:-1)*(In[it.side]||0);M(Le,it.u0+Ut,Ue,it.u1+Ut,dt,it.ax,it.az,it.bx,it.bz,At,Ht),b++}$=Ht,ge++}}}else if(f&&P.businesses&&P.businesses.length&&Ee>=bS){let Fe=P.businesses.length-Me,Le=Fe>0?Math.min(Fe,Math.max(1,Math.round(Ee/fm))):0;for(let Qe=0;Qe<Le;Qe++){let Ce=P.businesses[Me+Qe],R=f.uvFor.get(Ce.name);if(!R)continue;let v=be(Qe/Le),O=be((Qe+1)/Le),k=g*4;d.push(v.x,ni,v.z,O.x,ni,O.z,O.x,xt,O.z,v.x,xt,v.z),m.push(R.u0,R.vBot,R.u1,R.vBot,R.u1,R.vTop,R.u0,R.vTop),x.push(k,k+1,k+2,k,k+2,k+3),g++}Me+=Le,b+=Le;let U=Math.max(2,P.levels||2)*xt;if(U>xt+1e-6){let Qe=I(P.chainage),Ce=Qe>=0?(S.get(Qe)||[]).filter(R=>R.bi!==B):[];if(Ce.length){let R=p[Qe],v=0,O=0,k=-1,Z=0;for(;v<1-1e-6&&Z++<64;){let he=_(B,ne*5813+O)%Ce.length;he===k&&(he=(he+1)%Ce.length);let de=Ce[he];k=he;let J=Math.min(1-v,Math.max(de.region.widthM/Ee,1e-4)),ie=be(v),xe=be(v+J),Ne=Math.min(.75,Math.max(Os,xt/de.region.heightM));C(R,de.u0Full,de.u1Full,de.vTop,de.vBot,Ne,de.region.heightM,ie.x,ie.z,xe.x,xe.z,xt,U,_(B,ne*5813+O+1)),v+=J,O++}}}}else if(!P.businesses||!P.businesses.length){let Fe=I(P.chainage),Le=Fe>=0?(S.get(Fe)||[]).filter(U=>U.bi!==B):[];if(Le.length){let U=p[Fe],Qe=Math.max(2,P.levels||2)*xt,Ce=0,R=0,v=-1,O=0;for(;Ce<1-1e-6&&O++<64;){let k=_(B,ne*3457+R)%Le.length;k===v&&(k=(k+1)%Le.length);let Z=Le[k];v=k;let he=Math.min(1-Ce,Math.max(Z.region.widthM/Ee,1e-4)),de=be(Ce),J=be(Ce+he),ie=Math.min(.75,Math.max(Os,xt/Z.region.heightM));C(U,Z.u0Full,Z.u1Full,Z.vTop,Z.vBot,ie,Z.region.heightM,de.x,de.z,J.x,J.z,ni,Qe,_(B,ne*3457+R+1)),Ce+=he,R++}}}})}if(b===0&&g===0)return{group:null,count:0,update(){}};let N=null;if(g&&f){let P=new mt;P.setAttribute("position",new Je(d,3)),P.setAttribute("uv",new Je(m,2)),P.setIndex(x),P.computeBoundingSphere(),N=new Ge(P,new qt({map:f.texture,side:bn,fog:!0})),N.name="shopfront-placeholders",t.add(N)}let W=s.pages.map((P,B)=>{let G=p[B];if(!G.quadCount)return null;let Q=new mt;Q.setAttribute("position",new Je(G.positions,3)),Q.setAttribute("uv",new Je(G.uvs,2)),Q.setAttribute("color",new Je(G.colors,3)),Q.setIndex(G.indices),Q.computeBoundingSphere();let te=Rn(i,P.file);return te.startsWith("assets/")&&P.etag&&(te+=`?v=${P.etag}`),{geo:Q,url:te,chainageMin:P.chainageMin,chainageMax:P.chainageMax,loaded:!1,mesh:null}});function X(P){if(P.loaded)return;P.loaded=!0;let B=new jn().load(P.url);B.colorSpace=nt,B.generateMipmaps=!1,B.minFilter=Bt,B.anisotropy=1,P.mesh=new Ge(P.geo,new qt({map:B,vertexColors:!0,side:bn,fog:!0})),P.mesh.name="shopfronts-page",t.add(P.mesh)}function D(P){P.loaded&&(P.loaded=!1,t.remove(P.mesh),P.mesh.material.map.dispose(),P.mesh.material.dispose(),P.mesh=null)}function H(P){if(!P)return;let B=Gp(P.x,P.z,o);for(let G of W){if(!G)continue;B>=G.chainageMin-am&&B<=G.chainageMax+am?X(G):D(G)}}return H({x:o[0][0],z:o[0][1]}),{group:null,placeholders:N,count:b,placeholderCount:g,update:H}}var wS=18,pm=23,RS=6,CS=2.5,IS=22,PS=1.4;function mm({camera:i,npcs:e,assets:t,onActiveChange:n}){let s=new No;i.add(s);let r=new Lo,o=new Map,a=!1,c=!1,l=0;function h(g,p){let S=o.get(g);if(!(S==="missing"||S==="loading")){if(S){p(S);return}o.set(g,"loading"),r.load(Rn(t,g),M=>{o.set(g,M),p(M)},void 0,()=>{o.set(g,"missing")})}}function u(g){if(g.voice)return g.voice;let p=new Do(s);return p.setRefDistance(CS),p.setMaxDistance(IS),p.setDistanceModel("inverse"),p.setRolloffFactor(PS),p.setLoop(!0),g.group.add(p),g.voice=p,p}function f(g,p){let S=g.comic.audio;S&&h(S,M=>{let y=u(g);if(y.buffer!==M&&y.setBuffer(M),y.isPlaying){if(!p)return;y.stop()}y.offset=p?0:Math.random()*Math.max(0,M.duration-3),y.play(),g.setSpeaking(!0)})}function d(g){g.voice&&g.voice.isPlaying&&(g.voice.stop(),g.setSpeaking(!1))}function m(){let g=0;for(let p of e)p.voice&&p.voice.isPlaying&&g++;g!==l&&(l=g,n&&n(g))}function x(){if(!a||c)return;let g=i.position,p=[];for(let M of e){if(!M.comic.audio)continue;let y=M.group.position,w=Math.hypot(g.x-y.x,g.z-y.z);w<pm&&p.push({npc:M,d:w})}p.sort((M,y)=>M.d-y.d);let S=new Set;for(let{npc:M,d:y}of p){if(S.size>=RS)break;let w=M.voice&&M.voice.isPlaying;(y<wS||w&&y<pm)&&S.add(M)}for(let M of e)M.voice&&M.voice.isPlaying&&!S.has(M)&&d(M);for(let M of S)M.voice&&M.voice.isPlaying||f(M,!1);m()}return{listener:s,update:x,restart(g){f(g,!0),m()},togglePause(g){let p=g.voice;return!p||!p.buffer?(f(g,!0),!0):p.isPlaying?(p.pause(),g.setSpeaking(!1),m(),!1):(p.play(),g.setSpeaking(!0),m(),!0)},setOverlayOpen(g){c=!!g},isEnabled(){return a},setEnabled(g){a=!!g},resume(){a=!0;let g=s.context;g&&g.state==="suspended"&&g.resume()}}}var LS=8;function gm({assets:i,npcs:e,camera:t,controls:n,proximityAudio:s,onReadingChange:r,litter:o,leithers:a}){let c=document.getElementById("npc-prompt"),l=document.getElementById("npc-prompt-label"),h=document.getElementById("comic-overlay"),u=document.getElementById("comic-title"),f=document.getElementById("comic-image"),d=document.getElementById("comic-meta"),m=document.getElementById("comic-close"),x=document.getElementById("comic-playpause"),g=null,p=null,S=null,M=null;function y(P){x&&(x.textContent=P?"\u23F8":"\u25B6")}function w(P){r&&r(!!P)}function E(P){c&&(l&&(l.textContent=`[E] Hear ${P.name} read`),c.style.display="block")}function T(){c&&(c.style.display="none")}function _(P){!P||p||(p=P,T(),u&&(u.textContent=P.comic.title),d&&(d.textContent=`${P.name} \u2014 ${P.blurb}`),f&&(f.src=Rn(i,P.comic.image),f.alt=P.comic.title,f.parentElement.scrollTop=0),h&&(h.style.display="flex"),n.setEnabled(!1),s.setOverlayOpen(!0),s.restart(P),y(!0),w(!0))}function b(){!p&&!M||(y(!1),w(!1),h&&(h.style.display="none"),n.setEnabled(!0),s.setOverlayOpen(!1),p=null,M=null)}function C(P){p||M||(M=P,T(),u&&(u.textContent=P.comic.title||"McGrot"),d&&(d.textContent="found lying on the street"),f&&(f.src=Rn(i,P.comic.image),f.alt=P.comic.title||"McGrot comic",f.parentElement.scrollTop=0),h&&(h.style.display="flex"),n.setEnabled(!1),s.setOverlayOpen(!0),a&&Math.random()<.7&&a.summonReader(P))}function I(){if(!p)return;let P=s.togglePause(p);y(P),w(P)}function N(P){if(P.code==="Escape"){(p||M)&&b();return}P.code==="KeyE"&&!p&&!M&&(g?_(g):S&&C(S))}function W(){p||M||(g?_(g):S&&C(S))}function X(P){P.target===h&&b()}window.addEventListener("keydown",N),c&&c.addEventListener("click",W),h&&h.addEventListener("click",X),m&&m.addEventListener("click",b),x&&x.addEventListener("click",I);function D(){if(p||M)return;let P=t.position.x,B=t.position.z,G=null,Q=LS;for(let ce=0;ce<e.length;ce++){let ye=e[ce].group.position,Te=Math.hypot(P-ye.x,B-ye.z);Te<Q&&(Q=Te,G=e[ce])}let te=!G&&o?o.nearestItem(P,B,3.2):null;(G!==g||te!==S)&&(g=G,S=te,g?E(g):S?(l&&(l.textContent="[E] Read the comic on the ground"),c&&(c.style.display="block")):T())}function H(){window.removeEventListener("keydown",N),c&&c.removeEventListener("click",W),h&&h.removeEventListener("click",X),m&&m.removeEventListener("click",b),x&&x.removeEventListener("click",I)}return{update:D,dispose:H}}var yt=(()=>{let i=12648430;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),NS=35,wl=11,DS=.9,US=90,xm=[7027238,8013360,6042916,9065014,5189153],FS=22,OS=8,BS=3,_m=.06,zS=.16,Cl=4,Mm=14,ym=55;function Sm(i,e){let t=i.streetLine||[],n=new rt;e.add(n);let s=HS(t,n);XS(t,n),qS(t,n);let r=YS(t,n),o=GS(s,n),a={group:n,onArcFlash:null};return a.update=function(l,h){ZS(r,l,h),WS(o,h,()=>{a.onArcFlash&&a.onArcFlash()})},a}function Il(i,e){if(!i||i.length<2||e<0)return null;let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,h=Math.hypot(c,l);if(t+h>=e){let u=h>0?(e-t)/h:0,f=h||1;return{point:[s+c*u,r+l*u],tangent:[c/f,l/f]}}t+=h}return null}function Pu(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function Rl(i,e){let t=new we(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;i.setAttribute("color",new Je(s,3))}function HS(i,e){let t=Pu(i),n=[],s=[],r=[];for(let o=12;o<t-5;o+=NS){let a=Il(i,o);if(!a)break;let[c,l]=a.tangent,h=-l,u=c,f=new L(a.point[0]+h*wl,0,a.point[1]+u*wl),d=new L(a.point[0]-h*wl,0,a.point[1]-u*wl),m=7.5+yt()*.6,x=m-.4;n.push(vm(f,m)),n.push(vm(d,m)),s.push(kS(f,d,x)),r.push({position:f.clone().setY(x)},{position:d.clone().setY(x)})}if(n.length){let o=ot(n,!1),a=new $e({color:3814700,flatShading:!0});e.add(new Ge(o,a))}if(s.length){let o=ot(s,!1),a=new Ji({color:1841685});e.add(new ws(o,a))}return r}function vm(i,e){let t=new Mn(.09,.13,e,6);return t.translate(i.x,e/2,i.z),t}function kS(i,e,t){let s=[];for(let a=0;a<=8;a++){let c=a/8,l=is.lerp(i.x,e.x,c),h=is.lerp(i.z,e.z,c),u=4*c*(1-c)*DS;s.push(l,t-u,h)}let r=[];for(let a=0;a<8;a++)r.push(s[a*3],s[a*3+1],s[a*3+2]),r.push(s[(a+1)*3],s[(a+1)*3+1],s[(a+1)*3+2]);let o=new mt;return o.setAttribute("position",new Je(r,3)),o}function GS(i,e){if(!i.length)return[];let t=Math.min(BS,i.length),n=VS(i.length,t),s=[];for(let r of n){let o=i[r],a=new Di(10473727,0,14,2);a.position.copy(o.position),e.add(a);let c=new qt({color:14676735,transparent:!0,opacity:0,depthWrite:!1,blending:Fo}),l=new Ge(new Ci(.12,6,6),c);l.position.copy(o.position),e.add(l),s.push({light:a,spark:l,active:!1,nextTime:Cl+yt()*(Mm-Cl),flashEnd:0})}return s}function VS(i,e){let t=[];for(let n=0;n<e;n++)t.push(Math.floor((n+.5)/e*i));return t}function WS(i,e,t){for(let n of i)if(!n.active&&e>=n.nextTime){n.active=!0;let s=_m+yt()*(zS-_m);n.flashEnd=e+s,n.light.intensity=ym,n.spark.material.opacity=1,n.spark.scale.setScalar(.8+yt()*.6),t()}else n.active&&e>=n.flashEnd?(n.active=!1,n.light.intensity=0,n.spark.material.opacity=0,n.nextTime=e+Cl+yt()*(Mm-Cl)):n.active&&(n.light.intensity=ym*(.7+yt()*.3))}function XS(i,e){let t=Il(i,US);if(!t)return;let[n,s]=t.tangent,r=-s,o=n,a=5.5,c=t.point[0]+r*a,l=t.point[1]+o*a,h=Math.atan2(n,s),u=[],f=new tt(2.6,3.1,11);Rl(f,7030064),u.push(f);let d=new tt(2.3,.3,10.6);d.translate(0,1.7,0),Rl(d,4864556),u.push(d);for(let p=-1;p<=1;p++)for(let S of[-1,1]){let M=(yt()-.5)*.3,y=new tt(.08,.9+yt()*.3,1.6);y.translate(S*1.32,.5+M,p*3.2+(yt()-.5)*.6),Rl(y,789770),u.push(y)}let m=ot(u,!1),x=new $e({vertexColors:!0,flatShading:!0}),g=new Ge(m,x);g.position.set(c,1.85,l),g.rotation.y=h,g.rotation.z=.09,e.add(g)}function qS(i,e){let t=Pu(i);if(t<4)return;let n=[];for(let o=0;o<FS;o++){let a=25+yt()*Math.max(10,t-33),c=Il(i,a);if(!c)continue;let[l,h]=c.tangent,u=-h,f=l,d=yt()<.5?1:-1,m=(7.5+yt()*3)*d,x=c.point[0]+u*m,g=c.point[1]+f*m,p=yt()<.4,S=p?new Mn(.32,.34,.7,8):new tt(.5+yt()*.3,.4+yt()*.3,.5+yt()*.3),M=p?.35:.2;S.translate(0,M,0),S.rotateY(yt()*Math.PI),yt()<.3&&S.rotateZ((yt()-.5)*.5),S.translate(x,0,g),Rl(S,xm[o%xm.length]),n.push(S)}if(!n.length)return;let s=ot(n,!1),r=new $e({vertexColors:!0,flatShading:!0});e.add(new Ge(s,r))}function YS(i,e){let t=Pu(i);if(t<4)return[];let n=KS(),s=[];for(let r=0;r<OS;r++){let o=35+yt()*Math.max(20,t-55),a=Il(i,o);if(!a)continue;let c=new ui({map:n,transparent:!0,opacity:.18,depthWrite:!1,color:3815468}),l=new wi(c),h=8+yt()*4;l.scale.set(h,h,1),e.add(l),s.push({sprite:l,baseX:a.point[0]+(yt()-.5)*14,baseZ:a.point[1]+(yt()-.5)*14,baseY:6+yt()*3,phase:yt()*Math.PI*2,riseSpeed:.25+yt()*.15,riseRange:9+yt()*3,driftAmp:2+yt()*2,driftFreq:.05+yt()*.05,baseOpacity:.14+yt()*.1})}return s}function ZS(i,e,t){for(let n of i){let s=(t*n.riseSpeed+n.phase)%n.riseRange;n.sprite.position.set(n.baseX+Math.sin(t*n.driftFreq+n.phase)*n.driftAmp,n.baseY+s,n.baseZ+Math.cos(t*n.driftFreq*.8+n.phase)*n.driftAmp);let r=s/n.riseRange;n.sprite.material.opacity=n.baseOpacity*(1-Math.abs(r-.5)*1.4)}}function KS(){let e=document.createElement("canvas");e.width=128,e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,"rgba(60,58,48,0.55)"),n.addColorStop(.5,"rgba(50,48,40,0.25)"),n.addColorStop(1,"rgba(40,38,32,0)"),t.fillStyle=n,t.fillRect(0,0,128,128);let s=new Dt(e);return s.colorSpace=nt,s}var JS=3.2,Pl=.1,$S=2.5,jS=60,QS=40,eb=.15,Bn=512,bm=4,Am=4,tb=1/3;function Ll(i,e){let t=i*73856093^e*19349663;return t=Math.imul(t^t>>>13,2246822507),t^=t>>>16,t>>>0}function wm(i){let e=i|0;return function(){e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Em(i,e,t,n,s,r){let o=wm(r*7919+13);i.save(),i.beginPath(),i.rect(e,t,n,s),i.clip(),i.fillStyle="rgb(150,146,134)",i.fillRect(e,t,n,s);let a=20,c=s/a;for(let h=0;h<a;h++){let u=t+h*c,f=5+Math.floor(o()*3);for(let d=0;d<f;d++){let m=e+d/f*n,x=n/f,g=(o()-.5)*26;i.fillStyle=`rgba(${150+g},${146+g},${134+g},0.6)`,i.fillRect(m,u+2,x,c-2)}i.fillStyle="rgba(0,0,0,0.22)",i.fillRect(e,u,n,2)}for(let h=0;h<20;h++){let u=e+o()*n,f=4+o()*12,d=t+o()*s*.35,m=s*(.3+o()*.45),x=i.createLinearGradient(0,d,0,d+m);x.addColorStop(0,"rgba(20,18,15,0.22)"),x.addColorStop(1,"rgba(20,18,15,0)"),i.fillStyle=x,i.fillRect(u,d,f,m)}let l=2+Math.floor(o()*3);for(let h=0;h<l;h++){let u=n*(.12+o()*.08),f=s*(.15+o()*.09),d=e+n*.08+o()*(n*.84-u),m=t+s*.14+o()*(s*.62-f);i.fillStyle="rgba(64,58,48,0.7)",i.fillRect(d,m,u,f),i.strokeStyle="rgba(112,106,90,0.5)",i.lineWidth=3,i.strokeRect(d+1.5,m+1.5,u-3,f-3)}i.restore()}function nb(i,e,t,n,s,r,o){let a=wm(o*104729+5);i.save(),i.translate(e+n/2,t+s*.4),i.rotate((a()-.5)*.05);let c=r.toUpperCase(),l=72;for(i.font=`bold ${l}px Georgia, "Times New Roman", serif`;i.measureText(c).width>n*.8&&l>16;)l-=2,i.font=`bold ${l}px Georgia, "Times New Roman", serif`;i.textAlign="center",i.textBaseline="middle",i.globalAlpha=.2+a()*.12,i.fillStyle="rgb(150,58,42)",i.fillText(c,0,0),i.restore()}function ib(i){let e=bm,t=2,n=document.createElement("canvas");n.width=Bn*e,n.height=Bn*t;let s=n.getContext("2d"),r=[];for(let c=0;c<bm;c++){let l=c*Bn,h=0;Em(s,l,h,Bn,Bn,c),r.push(Tm(l,h,n.width,n.height))}let o=[];for(let c=0;c<Am;c++){let l=c*Bn,h=Bn;Em(s,l,h,Bn,Bn,c+97),i[c]&&nb(s,l,h,Bn,Bn,i[c],c),o.push(Tm(l,h,n.width,n.height))}let a=new Dt(n);return a.colorSpace=nt,a.anisotropy=4,{texture:a,baseUv:r,ghostUv:o}}function Tm(i,e,t,n){return{u0:i/t,u1:(i+Bn)/t,v0:1-(e+Bn)/n,v1:1-e/n}}function Rm(i,e,t){let n=i&&i.leith&&i.leith.buildings||[],s=i&&i.facadeManifest,r=e&&e.nearestStreetPoint;if(!n.length||!r)return{mesh:null,count:0};let o=[];if(s)for(let p of s.buildings)for(let S of p.businesses||[])o.push(S.name);let a=[];if(o.length)for(let p=0;p<Am;p++)a.push(o[Ll(p,o.length)%o.length]);let c=ib(a),l=[],h=[],u=[],f=[],d=0,m=(p,S,M,y,w,E,T,_,b,C,I)=>{let N=d*4;l.push(w,b,E,T,b,_,T,C,_,w,C,E),h.push(p,S,M,S,M,y,p,y);for(let W=0;W<4;W++)u.push(I.r,I.g,I.b);f.push(N,N+1,N+2,N,N+2,N+3),d++};if(n.forEach((p,S)=>{let M=p&&p.footprint;if(!M||M.length<3)return;let y=Math.max(1,p.levels||1)*JS,w=0,E=0;for(let b of M)w+=b[0],E+=b[1];w/=M.length,E/=M.length;let T=rb(p,r),_=Tu(S,p);for(let b=0;b<M.length;b++){let C=M[b],I=M[(b+1)%M.length],N=I[0]-C[0],W=I[1]-C[1],X=Math.hypot(N,W);if(X<$S||sb(C[0],C[1],I[0],I[1],T))continue;let D=(C[0]+I[0])/2,H=(C[1]+I[1])/2,P=r(D,H),B=r(C[0],C[1]),G=r(I[0],I[1]);if(Math.min(P?P.distance:1/0,B?B.distance:1/0,G?G.distance:1/0)>jS||X*y<QS)continue;let ce=C[0],ye=C[1],Te=N,Me=W,V=-W/X,ne=N/X;V*(D-w)+ne*(H-E)<0&&(V=-V,ne=-ne,ce=I[0],ye=I[1],Te=-N,Me=-W);let ee=ce+V*Pl,Se=ye+ne*Pl,Ee=ce+Te+V*Pl,He=ye+Me+ne*Pl,We=a.length&&Ll(S,b*31+7)%1e3/1e3<tb?c.ghostUv:c.baseUv,se=Ll(S,b*131+41)%We.length,oe=We[se],ae=Ll(S,b*991+3)%2===0,ve=ae?oe.u1:oe.u0,pe=ae?oe.u0:oe.u1;m(ve,oe.v0,pe,oe.v1,ee,Se,Ee,He,0,y,_)}}),!d)return{mesh:null,count:0};let x=new mt;x.setAttribute("position",new Je(l,3)),x.setAttribute("uv",new Je(h,2)),x.setAttribute("color",new Je(u,3)),x.setIndex(f),x.computeVertexNormals();let g=new Ge(x,new $e({map:c.texture,vertexColors:!0,flatShading:!0}));return g.name="gable-dressing",t.add(g),{mesh:g,count:d}}function sb(i,e,t,n,s){let r=(i+t)/2,o=(e+n)/2;for(let a of s){let c=a.bx-a.ax,l=a.bz-a.az,h=c*c+l*l||1,u=((r-a.ax)*c+(o-a.az)*l)/h;if(u<-.01||u>1.01)continue;let f=a.ax+u*c,d=a.az+u*l;if(Math.hypot(r-f,o-d)<eb)return!0}return!1}function rb(i,e){try{return Ml(i,e)}catch{return[]}}var Cm=3.2,Im=80,ob=10,Pm=.5,Lu=2500,ab=1/5;function Lm(i,e){let t=i*73856093^e*19349663;return t=Math.imul(t^t>>>13,2246822507),t^=t>>>16,t>>>0}function Bs(i,e){return Lm(i,e)%1e5/1e5}function cb(){let i=[],e=new tt(.9,1.8,.55).toNonIndexed();e.deleteAttribute("uv"),e.translate(0,.9,0),i.push(e);let t=[[-.28,0],[.05,.15],[.3,-.12]];for(let[n,s]of t){let r=new Mn(.12,.13,.4,5,1,!0).toNonIndexed();r.deleteAttribute("uv"),r.translate(n,1.8+.2,s),i.push(r)}return ot(i,!1)}function lb(){let i=[],e=new Mn(.02,.03,1.4,5,1,!0).toNonIndexed();e.deleteAttribute("uv"),e.translate(0,.7,0),i.push(e);for(let t=0;t<2;t++){let n=new tt(.5-t*.14,.02,.02).toNonIndexed();n.deleteAttribute("uv"),n.translate(0,1+t*.22,0),i.push(n)}return ot(i,!1)}function Nm(i,e,t){let n=i&&i.leith&&i.leith.buildings||[],s=e&&e.nearestStreetPoint;if(!n.length||!s)return{chimneys:null,aerials:null,count:0};let r=(E,T)=>`${Math.round(E/Pm)}:${Math.round(T/Pm)}`,o=new Map;n.forEach(E=>{let T=E&&E.footprint;if(T)for(let[_,b]of T){let C=r(_,b);o.set(C,(o.get(C)||0)+1)}});let a=[];n.forEach((E,T)=>{let _=E&&E.footprint;if(!_||_.length<3)return;let b=0,C=0;for(let X of _)b+=X[0],C+=X[1];b/=_.length,C/=_.length;let I=s(b,C);if(!I||I.distance>Im)return;let N=Math.max(1,E.levels||1)*Cm,W=new Set;for(let X=0;X<_.length;X++){let D=_[X],H=_[(X+1)%_.length],P=r(D[0],D[1]);if(o.get(P)>1&&!W.has(P)){W.add(P);let V=s(D[0],D[1]);a.push({x:D[0],z:D[1],y:N,dist:V?V.distance:I.distance,bi:T,edgeSeed:X})}let B=H[0]-D[0],G=H[1]-D[1],Q=Math.hypot(B,G);if(Q<3)continue;let te=(D[0]+H[0])/2,ce=(D[1]+H[1])/2,ye=s(te,ce),Te=!0;if(ye&&ye.point){let V=1/Q,ne=-G*V,ee=B*V;ne*(te-b)+ee*(ce-C)<0&&(ne=-ne,ee=-ee);let Se=ye.point[0]-te,Ee=ye.point[1]-ce,He=Math.hypot(Se,Ee)||1;Te=(ne*Se+ee*Ee)/He>=0}if(!Te)continue;let Me=Math.max(1,Math.round(Q/ob));for(let V=0;V<Me;V++){let ne=(V+.5)/Me,ee=D[0]+B*ne,Se=D[1]+G*ne;a.push({x:ee,z:Se,y:N,dist:(s(ee,Se)||I).distance,bi:T,edgeSeed:X*97+V})}}}),a.sort((E,T)=>E.dist-T.dist);let c=Math.max(0,a.length-Lu),l=c>0?a.slice(0,Lu):a;c>0&&console.warn(`[chimneys] ${c} candidate chimney placements beyond ${Lu} dropped (furthest-from-street first, not a silent mid-street gap)`);let h=cb(),u=new $e({color:3025444}),f=l.length?new gn(h,u,l.length):null,d=new Ze,m=new L,x=new Nt,g=new L,p=new jt;f&&(l.forEach((E,T)=>{let _=.75+Bs(E.bi,E.edgeSeed*3+1)*.65,b=(Bs(E.bi,E.edgeSeed*3+2)-.5)*.12,C=(Bs(E.bi,E.edgeSeed*3+3)-.5)*.12,I=Bs(E.bi,E.edgeSeed*3+4)*Math.PI*2;m.set(E.x,E.y,E.z),p.set(b,I,C),x.setFromEuler(p),g.set(1,_,1),d.compose(m,x,g),f.setMatrixAt(T,d)}),f.instanceMatrix.needsUpdate=!0,f.name="chimneys",t.add(f));let S=[];n.forEach((E,T)=>{let _=E&&E.footprint;if(!_||_.length<3||Lm(T,5153)%1e3/1e3>=ab)return;let b=0,C=0;for(let D of _)b+=D[0],C+=D[1];b/=_.length,C/=_.length;let I=s(b,C);if(!I||I.distance>Im)return;let N=Math.max(1,E.levels||1)*Cm,W=_[0],X=1/0;for(let D of _){let H=I.point?Math.hypot(D[0]-I.point[0],D[1]-I.point[1]):0;H<X&&(X=H,W=D)}S.push({x:W[0],z:W[1],y:N,bi:T})});let M=lb(),y=new $e({color:1842204}),w=S.length?new gn(M,y,S.length):null;return w&&(S.forEach((E,T)=>{let _=(Bs(E.bi,71)-.5)*.3,b=(Bs(E.bi,73)-.5)*.3,C=Bs(E.bi,79)*Math.PI*2;m.set(E.x,E.y,E.z),p.set(_,C,b),x.setFromEuler(p),g.set(1,1,1),d.compose(m,x,g),w.setMatrixAt(T,d)}),w.instanceMatrix.needsUpdate=!0,w.name="aerials",t.add(w)),{chimneys:f,aerials:w,count:l.length,aerialCount:S.length,dropped:c}}var hb=3028026,ub=9278327,fb=2304048,db=6051656,pb=11557412,mb=3.2,gb=1/700,xb=`
  varying vec3 vDir;
  void main() {
    // World-space view ray. Correct whether the dome is parented to the camera
    // or to the scene, because modelMatrix carries whichever transform applies.
    vDir = (modelMatrix * vec4(position, 1.0)).xyz - cameraPosition;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,_b=`
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
    vec2 p = d.xz / max(h, 0.05) * ${mb.toFixed(2)}
           + cameraPosition.xz * ${gb.toFixed(6)};
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
`;function Dm(i,e){let t=new _e(0,-1);if(e&&e.length>1){let o=e[0],a=e[e.length-1];t.set(o[0]-a[0],o[1]-a[1]).normalize()}let n={uFog:{value:i},uBand:{value:new we(ub)},uZenith:{value:new we(hb)},uCloudDark:{value:new we(fb)},uCloudLit:{value:new we(db)},uGlow:{value:new we(pb)},uDock:{value:t},uTime:{value:0}},s=new Sn({uniforms:n,vertexShader:xb,fragmentShader:_b,side:cn,depthWrite:!1,depthTest:!1,fog:!1}),r=new Ge(new Ci(1,32,20),s);return r.renderOrder=-1e3,r.frustumCulled=!1,{mesh:r,update(o){n.uTime.value=o}}}var bt=(()=>{let i=13723136;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),Du=596,Hs=690,Nu=620,yb=593,vb=-3.2,Mb=115,ii=3.5,zs=2,Gs=.03,Sb=.042;function Fm(i,e){let t=i.streetLine||[];if(t.length<2)return{group:new rt};let n=new rt;e.add(n);let s=[],r=[],o=[],a=[];return Tb(t,n,a,s,r,o),Rb(t,s),Pb(t,n),Ib(s,n),wb(r,o,n),a.length&&n.add(new Ge(ot(a,!1),new $e({vertexColors:!0,flatShading:!0}))),{group:n}}function bb(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,h=Math.hypot(c,l);if(t+h>=e){let u=h>0?(e-t)/h:0;return{point:[s+c*u,r+l*u],tangent:[c/(h||1),l/(h||1)]}}t+=h}return null}function Eb(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function ks(i,e,t){let n=bb(i,e);if(!n)return null;let[s,r]=n.tangent,o=-r,a=s;return{x:n.point[0]+o*t,z:n.point[1]+a*t,yaw:Math.atan2(s,r),tangent:n.tangent}}function Tb(i,e,t,n,s,r){let o=Db(),a=[],c=1.5;for(let l=Nu-6;l<Hs;l+=5){let h=ks(i,l+2.5,(bt()-.5)*.8);if(!h)break;let u=new Yt(c*2,5.4);u.rotateX(-Math.PI/2),u.rotateY(h.yaw),u.translate(h.x,Sb,h.z),a.push(u)}a.length&&e.add(new Ge(ot(a,!1),new $e({map:o,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3})));for(let l=Nu-8;l<Hs+4;l+=3.2)for(let h of[-1,1]){let u=ks(i,l+bt()*2,h*(c+.7+bt()*.9));if(!u)continue;let f=.75+bt()*.65,d=.26+bt()*.26,m=new br(f,d,9);if(m.translate(0,d/2,0),m.scale(1,1,.7+bt()*.5),m.rotateY(bt()*Math.PI),m.translate(u.x,Gs,u.z),ia(m,[6048825,6969411,4865326][Math.floor(bt()*3)]),t.push(m),bt()<.55){let x=new tt(.4+bt()*.5,.09,.35+bt()*.4);x.rotateZ((bt()-.5)*.9),x.rotateY(bt()*Math.PI),x.translate(u.x+(bt()-.5)*1.4,Gs+.12,u.z+(bt()-.5)*1.4),ia(x,2829352),t.push(x)}}for(let l=Nu-10;l<Hs+6;l+=2.3)for(let h of[-1,1]){let u=ks(i,l,h*(c+1.9+bt()*.4));u&&n.push({...u,tipped:bt()<.16})}Um(i,Du,Hs,4.4,s,r),Um(i,Du,Hs,-4.4,s,r),Ab(i,Hs+2,s,r)}function Um(i,e,t,n,s,r){for(let o=e;o<t;o+=ii+.1){let a=ks(i,o+ii/2,n);if(!a)break;bt()<.12||Om(a.x,a.z,a.yaw,s,r,bt()<.18)}}function Ab(i,e,t,n){for(let s=-6;s<=6;s+=ii+.1){let r=ks(i,e,s+ii/2);r&&Om(r.x,r.z,r.yaw+Math.PI/2,t,n,bt()<.25)}}function Om(i,e,t,n,s,r){let o=r?(bt()-.5)*.5:(bt()-.5)*.06,a=[],c=(d,m,x,g,p)=>{let S=new tt(d,m,x);S.translate(g,p,0),a.push(S)};c(.05,zs,.05,-ii/2,zs/2),c(.05,zs,.05,ii/2,zs/2),c(ii,.05,.05,0,zs-.03),c(ii,.05,.05,0,.03);let l=new tt(.5,.11,.26);l.translate(-ii/2,.055,0);let h=new tt(.5,.11,.26);h.translate(ii/2,.055,0),a.push(l,h);let u=ot(a,!1);u.rotateZ(o),u.rotateY(t),u.translate(i,Gs,e),n.push(u);let f=new Yt(ii-.1,zs-.1);f.translate(0,zs/2,0),f.rotateZ(o),f.rotateY(t),f.translate(i,Gs,e),s.push(f)}function wb(i,e,t){i.length&&t.add(new Ge(ot(i,!1),new $e({color:5592911,flatShading:!0}))),e.length&&t.add(new Ge(ot(e,!1),new $e({map:Nb(),transparent:!0,alphaTest:.35,side:Lt,depthWrite:!0})))}function Rb(i,e){let t=Eb(i);for(let n=40;n<t-20;n+=Mb){if(n>Du-40&&n<Hs+40)continue;let s=3+Math.floor(bt()*6);for(let r=0;r<s;r++){let o=ks(i,n+(bt()-.5)*14,(bt()-.5)*12);o&&e.push({...o,tipped:bt()<.35})}}}function Cb(){let i=[],e=new br(.24,.62,10);e.translate(0,.31,0),ia(e,11025678),i.push(e);let t=new Mn(.125,.15,.13,10);t.translate(0,.33,0),ia(t,13223092),i.push(t);let n=new tt(.34,.05,.34);return n.translate(0,.025,0),ia(n,8006666),i.push(n),ot(i,!1)}function Ib(i,e){if(!i.length)return;let t=Cb(),n=new $e({vertexColors:!0,flatShading:!0}),s=new gn(t,n,i.length),r=new Ze,o=new Nt,a=new jt,c=new L,l=new L(1,1,1);i.forEach((h,u)=>{a.set(h.tipped?Math.PI/2*(.75+bt()*.3):(bt()-.5)*.08,bt()*Math.PI*2,0,"YXZ"),o.setFromEuler(a),c.set(h.x,Gs+(h.tipped?.2:0),h.z),r.compose(c,o,l),s.setMatrixAt(u,r)}),s.instanceMatrix.needsUpdate=!0,e.add(s)}function Pb(i,e){let t=ks(i,yb,vb);if(!t)return;let n=4.2,s=2.5,r=.45,o=new Yt(n,s);o.translate(0,r+s/2,0);let[a,c]=t.tangent,l=Math.atan2(-a,-c);o.rotateY(l),o.translate(t.x,Gs,t.z),e.add(new Ge(o,new $e({map:Lb(),side:Lt})));let h=[];for(let f of[-1,1]){let d=new tt(.12,r+.3,.12);d.translate(f*(n/2-.3),(r+.3)/2,0),h.push(d)}let u=ot(h,!1);u.rotateY(l),u.translate(t.x,Gs,t.z),e.add(new Ge(u,new $e({color:4867128})))}function Lb(){let t=document.createElement("canvas");t.width=1024,t.height=610;let n=t.getContext("2d");n.fillStyle="#26506e",n.fillRect(0,0,1024,610);for(let r=0;r<2600;r++){let o=Math.random()*1024,a=Math.random()*610;n.fillStyle=`rgba(${20+Math.random()*60},${30+Math.random()*50},${40+Math.random()*50},0.06)`,n.fillRect(o,a,Math.random()*90,Math.random()*5)}n.fillStyle="#e8e6dc",n.textAlign="center",n.font="bold 62px Helvetica, Arial, sans-serif",n.fillText("LEITH WALK",1024/2,110),n.fillText("IMPROVEMENT PROJECT",1024/2,180),n.fillStyle="#f0c02a",n.fillRect(120,232,784,6),n.fillStyle="#e8e6dc",n.font="bold 50px Helvetica, Arial, sans-serif",n.fillText("COMPLETION: SPRING 2023",1024/2,310),n.font="30px Helvetica, Arial, sans-serif",n.fillStyle="#b8c6d2",n.fillText("WE APOLOGISE FOR ANY INCONVENIENCE",1024/2,380),n.font="24px Helvetica, Arial, sans-serif",n.fillText("City of Edinburgh Council",1024/2,430),n.strokeStyle="rgba(210,60,40,0.85)",n.lineWidth=9,n.lineCap="round",n.beginPath(),n.moveTo(190,340),n.lineTo(835,285),n.stroke(),n.save(),n.translate(1024/2,520),n.rotate(-.05),n.fillStyle="rgba(214,66,44,0.9)",n.font="bold 58px Helvetica, Arial, sans-serif",n.fillText("STILL WAITING",0,0),n.restore(),n.globalCompositeOperation="destination-out";for(let r=0;r<26;r++){let o=Math.random()*1024,a=Math.random()<.5?Math.random()*40:610-Math.random()*40;n.beginPath(),n.ellipse(o,a,10+Math.random()*50,6+Math.random()*22,Math.random()*3,0,Math.PI*2),n.fill()}n.globalCompositeOperation="source-over";let s=new Dt(t);return s.colorSpace=nt,s.anisotropy=16,s}function Nb(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.clearRect(0,0,128,128),t.strokeStyle="#50524b",t.lineWidth=2;let n=128/8;for(let r=0;r<=8;r++)t.beginPath(),t.moveTo(r*n,0),t.lineTo(r*n,128),t.stroke(),t.beginPath(),t.moveTo(0,r*n),t.lineTo(128,r*n),t.stroke();let s=new Dt(e);return s.wrapS=s.wrapT=Vn,s.repeat.set(6,4),s.colorSpace=nt,s.anisotropy=16,s}function Db(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.fillStyle="#241d16",t.fillRect(0,0,256,256);for(let s=0;s<2200;s++){let r=Math.random();t.fillStyle=`rgba(${30+r*55},${25+r*45},${18+r*35},0.5)`,t.beginPath(),t.arc(Math.random()*256,Math.random()*256,Math.random()*5,0,Math.PI*2),t.fill()}t.fillStyle="rgba(78,84,74,0.45)",t.beginPath(),t.ellipse(256*.55,256*.62,256*.3,256*.13,.3,0,Math.PI*2),t.fill(),t.fillStyle="#4a4235",t.fillRect(0,256*.4,256,16),t.fillStyle="rgba(255,255,255,0.07)",t.fillRect(0,256*.4,256,5);let n=new Dt(e);return n.colorSpace=nt,n.anisotropy=16,n}function ia(i,e){let t=new we(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;i.setAttribute("color",new Je(s,3))}var ln=(()=>{let i=39441;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),Ub=115,Fb=90,Ob=40,Bm=10,Bb=27,zb=8,zm=22,Hb=55,Nl=1.35;function Hm(i,e,t){let n=i.streetLine||[];if(n.length<2)return{group:new rt,update(){}};let s=new rt;t.add(s);let r=kb(n,s);return Vb(i,e,s),Wb(n,s),{group:s,update(o,a){Gb(r,a)}}}function Uu(i,e){let t=i/2,n=[],s=h=>{let u=new Float32Array([h*.04,0,e*.18,h*.04,0,-e*.16,h*t*.55,.03*t,-e*.3,h*.04,0,e*.18,h*t*.55,.03*t,-e*.3,h*t*.58,.03*t,e*.06,h*t*.58,.03*t,e*.06,h*t*.55,.03*t,-e*.3,h*t,.1*t,-e*.38,h*t*.58,.03*t,e*.06,h*t,.1*t,-e*.38,h*t*.97,.1*t,-e*.1]),f=new mt;return f.setAttribute("position",new Je(u,3)),f.computeVertexNormals(),f},r=s(-1);sa(r,4869188);let o=s(1);sa(o,4869188),n.push(r,o);let a=(h,u,f)=>{let d=new tt(h,u,f).toNonIndexed();return d.deleteAttribute("uv"),d},c=a(e*.17,e*.15,e);sa(c,7237734),n.push(c);let l=a(e*.34,.012,e*.3);return l.translate(0,0,-e*.6),sa(l,2895400),n.push(l),ot(n,!1)}function Fu(){return new $e({vertexColors:!0,flatShading:!0,side:Lt})}function kb(i,e){let t=Gm(i),n=[];for(let r=0;r<Ub;r++){let o=km(i,30+ln()*Math.max(1,t-60));if(!o)continue;let[a,c]=o.tangent;n.push({ox:o.point[0],oz:o.point[1],ax:a,az:c,px:-c,pz:a,rAlong:zm+ln()*(Hb-zm),rAcross:2.5+ln()*(zb-2.5),y:Bm+ln()*(Bb-Bm),speed:(ln()<.5?-1:1)*(.1+ln()*.14),phase:ln()*Math.PI*2,bobAmp:.5+ln()*1.4,bobFreq:.25+ln()*.45,scale:.85+ln()*.5})}let s=new gn(Uu(Nl,Nl*.42),Fu(),n.length);return s.frustumCulled=!1,e.add(s),{mesh:s,birds:n}}function Gb({mesh:i,birds:e},t){let n=new Ze,s=new Nt,r=new jt,o=new L,a=new L;e.forEach((c,l)=>{let h=t*c.speed+c.phase,u=Math.cos(h),f=Math.sin(h),d=u*c.rAlong,m=f*c.rAcross,x=c.ox+c.ax*d+c.px*m,g=c.oz+c.az*d+c.pz*m,p=c.y+Math.sin(t*c.bobFreq+c.phase)*c.bobAmp,S=(-f*c.rAlong*c.ax+u*c.rAcross*c.px)*c.speed,M=(-f*c.rAlong*c.az+u*c.rAcross*c.pz)*c.speed,y=Math.atan2(S,M),w=(-u*c.rAlong*c.ax-f*c.rAcross*c.px)*c.speed*c.speed,E=(-u*c.rAlong*c.az-f*c.rAcross*c.pz)*c.speed*c.speed,T=Math.hypot(S,M)||1e-4,_=(w*M-E*S)/T,b=is.clamp(_*90,-1,1);r.set(Math.sin(t*c.bobFreq+c.phase)*.06,y,b,"YXZ"),s.setFromEuler(r),o.set(x,p,g),a.setScalar(c.scale),n.compose(o,s,a),i.setMatrixAt(l,n)}),i.instanceMatrix.needsUpdate=!0}function Vb(i,e,t){let n=e&&e.buildings||[],s=i.nearestStreetPoint,r=[],o=n.filter(f=>{let d=f.footprint;if(!d||d.length<3)return!1;let m=s?s(d[0][0],d[0][1]):null;return!m||m.distance<=30}),a=o.length?Fb/o.length:0;for(let f of o){let d=f.footprint,m=Math.max(1,f.levels||1)*3.2,x=Math.floor(a)+(ln()<a%1?1:0);for(let g=0;g<x;g++){let p=Math.floor(ln()*d.length),S=(p+1)%d.length,M=.15+ln()*.7;r.push({x:d[p][0]+(d[S][0]-d[p][0])*M,z:d[p][1]+(d[S][1]-d[p][1])*M,y:m+.12,yaw:ln()*Math.PI*2})}}if(!r.length)return;let c=new gn(Uu(Nl*.42,Nl*.46),Fu(),r.length),l=new Ze,h=new Nt,u=new jt;r.forEach((f,d)=>{u.set(0,f.yaw,0,"YXZ"),h.setFromEuler(u),l.compose(new L(f.x,f.y,f.z),h,new L(1,1,1)),c.setMatrixAt(d,l)}),c.instanceMatrix.needsUpdate=!0,t.add(c)}function Wb(i,e){let t=Gm(i),n=[];for(let l=0;l<Ob;l++){let h=km(i,25+ln()*Math.max(1,t-50));if(!h)continue;let[u,f]=h.tangent,d=-f,m=u,x=(ln()*2-1)*5.5;n.push({x:h.point[0]+d*x,z:h.point[1]+m*x,yaw:ln()*Math.PI*2})}if(!n.length)return;let s=Uu(.3,.3);sa(s,5263948);let r=new gn(s,Fu(),n.length),o=new Ze,a=new Nt,c=new jt;n.forEach((l,h)=>{c.set(0,l.yaw,0,"YXZ"),a.setFromEuler(c),o.compose(new L(l.x,.1,l.z),a,new L(1,1,1)),r.setMatrixAt(h,o)}),r.instanceMatrix.needsUpdate=!0,e.add(r)}function km(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,h=Math.hypot(c,l);if(t+h>=e){let u=h>0?(e-t)/h:0;return{point:[s+c*u,r+l*u],tangent:[c/(h||1),l/(h||1)]}}t+=h}return null}function Gm(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function sa(i,e){let t=new we(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;i.setAttribute("color",new Je(s,3))}var Vs=(()=>{let i=10775;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),Xb=90,qb=6.6,Vm=2.5,Yb=9,Zb=.06;function Ym(i,e){let t=i.streetLine||[];if(t.length<2)return{group:new rt,update(){}};let n=new rt;e.add(n);let s=jb(t),r=[];for(let a=0;a<Xb;a++){let c=20+Vs()*Math.max(1,s-45),l=Vm+Vs()*(Yb-Vm),h=qm(t,c),u=qm(t,Math.min(c+l,s-1));if(!h||!u)continue;let d=(Vs()<.5?1:-1)*(qb+(Vs()-.5)*.8),m=Xm(h,d),x=Xm(u,d);r.push({ax:m[0],az:m[1],bx:x[0],bz:x[1],rate:.07+Vs()*.16,phase:Vs(),scale:.8+Vs()*.5})}let o=new gn($b(),new $e({vertexColors:!0,flatShading:!0}),r.length);return n.add(o),{group:n,update(a,c){Jb(o,r,c)}}}function Kb(i){return i<.18?Wm(0,.18,i):i<.5?1:i<.68?1-Wm(.5,.68,i):0}function Wm(i,e,t){let n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)}function Jb(i,e,t){let n=new Ze,s=new Nt,r=new jt,o=new L,a=new L;e.forEach((c,l)=>{let h=(t*c.rate+c.phase)%1,u=Kb(h),f=c.ax+(c.bx-c.ax)*u,d=c.az+(c.bz-c.az)*u,m=h>=.5,x=m?c.ax-c.bx:c.bx-c.ax,g=m?c.az-c.bz:c.bz-c.az,p=Math.atan2(x,g),M=h<.18||h>=.5&&h<.68?Math.abs(Math.sin(t*26+l))*.025:0;r.set(0,p,0,"YXZ"),s.setFromEuler(r),o.set(f,Zb+M,d),a.setScalar(c.scale),n.compose(o,s,a),i.setMatrixAt(l,n)}),i.instanceMatrix.needsUpdate=!0}function $b(){let i=[],e=(r,o,a)=>{let c=new tt(r,o,a).toNonIndexed();return c.deleteAttribute("uv"),c},t=e(.11,.1,.23);t.translate(0,.05,0),Ou(t,4537909),i.push(t);let n=e(.075,.07,.1);n.translate(0,.045,.15),Ou(n,5129787),i.push(n);let s=e(.016,.016,.21);return s.translate(0,.035,-.21),Ou(s,4866617),i.push(s),ot(i,!1)}function Xm(i,e){let[t,n]=i.tangent;return[i.point[0]+-n*e,i.point[1]+t*e]}function qm(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,h=Math.hypot(c,l);if(t+h>=e){let u=h>0?(e-t)/h:0;return{point:[s+c*u,r+l*u],tangent:[c/(h||1),l/(h||1)]}}t+=h}return null}function jb(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function Ou(i,e){let t=new we(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;i.setAttribute("color",new Je(s,3))}var ft=(()=>{let i=11590938;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),Qb=210,eE=130,tE=260,nE=22;function Zm(i,e,t){let n=i.streetLine||[];if(n.length<2)return{group:new rt};let s=new rt;return t.add(s),iE(i,e,n,s),rE(n,s),oE(n,s),aE(n,s),{group:s}}function iE(i,e,t,n){let s=sE(),r=[],o=(f,d,m,x,g)=>{for(let p=0;p<3;p++){let S=new Yt(x,x);S.translate(0,x/2,0),S.rotateZ(g),S.rotateY(p/3*Math.PI+ft()*.4),S.translate(f,d,m),r.push(S)}},a=e&&e.buildings||[],c=i.nearestStreetPoint,l=a.filter(f=>{let d=f.footprint;if(!d||d.length<3)return!1;let m=c?c(d[0][0],d[0][1]):null;return!m||m.distance<=28}),h=l.length?Qb/l.length:0;for(let f of l){let d=f.footprint,m=Math.floor(h)+(ft()<h%1?1:0),x=Math.max(1,f.levels||1)*3.2;for(let g=0;g<m;g++){let p=Math.floor(ft()*d.length),S=(p+1)%d.length,M=.1+ft()*.8;o(d[p][0]+(d[S][0]-d[p][0])*M,x-.25,d[p][1]+(d[S][1]-d[p][1])*M,1.1+ft()*1.5,(ft()-.5)*.5)}}let u=Bu(t);for(let f=0;f<eE;f++){let d=Fl(t,20+ft()*Math.max(1,u-40));if(!d)continue;let x=(ft()<.5?1:-1)*(7.2+ft()*2.6),g=Ul(d,x);o(g[0],.03,g[1],.8+ft()*1.1,(ft()-.5)*.3)}r.length&&n.add(new Ge(ot(r,!1),new $e({map:s,transparent:!0,alphaTest:.45,side:Lt,depthWrite:!0})))}function sE(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.clearRect(0,0,256,256);for(let s=0;s<170;s++){let r=-Math.PI/2+(Math.random()-.5)*2.5,o=30+Math.random()*78,a=256/2+(Math.random()-.5)*58,c=256-Math.random()*44,l=46+Math.random()*52;t.strokeStyle=`rgba(${28+Math.random()*26},${l},${30+Math.random()*22},0.95)`,t.lineWidth=2+Math.random()*5,t.lineCap="round",t.beginPath(),t.moveTo(a,c),t.quadraticCurveTo(a+Math.cos(r)*o*.5+(Math.random()-.5)*24,c+Math.sin(r)*o*.5,a+Math.cos(r)*o,c+Math.sin(r)*o),t.stroke()}for(let s=0;s<13;s++){let r=34+Math.random()*188,o=26+Math.random()*96,a=26+Math.random()*40;for(let c=0;c<26;c++){let l=c/26,h=(1-l)*8+1.5;t.fillStyle=`rgba(${74+Math.random()*30},${44+Math.random()*22},${88+Math.random()*32},0.88)`,t.beginPath(),t.ellipse(r+(Math.random()-.5)*4,o+l*a,h,3.5,0,0,Math.PI*2),t.fill()}}let n=new Dt(e);return n.colorSpace=nt,n.anisotropy=16,n}function rE(i,e){let t=Bu(i),n=[];for(let s=0;s<tE;s++){let r=Fl(i,15+ft()*Math.max(1,t-30));if(!r)continue;let a=(ft()<.5?1:-1)*(ft()<.65?6.3+ft()*.7:7.5+ft()*2.2),c=Ul(r,a),l=ft(),h,u;l<.3?(h=new Mn(.037,.042,.27,6),h.rotateZ(Math.PI/2),h.rotateY(ft()*Math.PI*2),h.translate(0,.04,0),u=2899230):l<.55?(h=new Mn(.032,.032,.1,6),h.rotateZ(Math.PI/2+(ft()-.5)*.7),h.scale(1,1,.6),h.translate(0,.032,0),u=ft()<.5?10115614:3100522):l<.8?(h=new tt(.16+ft()*.08,.05,.12+ft()*.06),h.rotateY(ft()*Math.PI),h.rotateZ((ft()-.5)*.5),h.translate(0,.026,0),u=11051924):(h=new Yt(.24+ft()*.2,.18+ft()*.14),h.rotateX(-Math.PI/2),h.rotateY(ft()*Math.PI),h.translate(0,.036,0),u=7170652),h.translate(c[0],.03,c[1]),Dl(h,u),n.push(h)}n.length&&e.add(new Ge(ot(n,!1),new $e({vertexColors:!0,flatShading:!0,side:Lt})))}function oE(i,e){let t=Bu(i),n=[];for(let s=0;s<nE;s++){let r=Fl(i,25+ft()*Math.max(1,t-50));if(!r)continue;let o=ft()<.5?1:-1,a=Ul(r,o*(7.6+ft()*1.8)),c=ft()<.6,l=[],h=new tt(.62,1.05,.72).toNonIndexed();h.deleteAttribute("uv"),h.translate(0,.525,0),Dl(h,[3095084,3813160,2634298][Math.floor(ft()*3)]),l.push(h);let u=new tt(.66,.07,.76).toNonIndexed();u.deleteAttribute("uv"),u.translate(0,1.07,c?.1:-.3),u.rotateX(c?.2:-.7),Dl(u,1975840),l.push(u);let f=ot(l,!1);f.rotateY(ft()*Math.PI*2),c&&f.rotateZ(Math.PI/2+(ft()-.5)*.3),f.translate(a[0],c?.34:.03,a[1]),n.push(f)}n.length&&e.add(new Ge(ot(n,!1),new $e({vertexColors:!0,flatShading:!0})))}function aE(i,e){let t=Fl(i,415);if(!t)return;let n=Ul(t,-3.4),s=[],r=(h,u,f,d,m,x)=>{let g=new tt(h,u,f).toNonIndexed();g.deleteAttribute("uv"),g.translate(d,m,x),s.push(g)},o=.56,a=.44,c=.86;for(let h=0;h<=6;h++){let u=-c/2+h/6*c;r(o,.018,.018,0,a,u),r(.018,a,.018,-o/2,a/2,u),r(.018,a,.018,o/2,a/2,u)}for(let h=0;h<=4;h++){let u=-o/2+h/4*o;r(.018,.018,c,u,.02,0),r(.018,.018,c,u,a,0)}r(o,a,.018,0,a/2,-c/2),r(.03,.3,.03,0,a+.15,-c/2);let l=ot(s,!1);Dl(l,6974822),l.rotateZ(Math.PI/2*.92),l.rotateY(ft()*Math.PI*2),l.translate(n[0],.3,n[1]),e.add(new Ge(l,new $e({vertexColors:!0,flatShading:!0})))}function Ul(i,e){let[t,n]=i.tangent;return[i.point[0]+-n*e,i.point[1]+t*e]}function Fl(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,h=Math.hypot(c,l);if(t+h>=e){let u=h>0?(e-t)/h:0;return{point:[s+c*u,r+l*u],tangent:[c/(h||1),l/(h||1)]}}t+=h}return null}function Bu(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function Dl(i,e){let t=new we(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;i.setAttribute("color",new Je(s,3))}function Km(i){let e=new Map,t=new Map,n=i.clone();return Jm(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Jm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Jm(i.children[n],e.children[n],t)}var Ol=class extends $n{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Xu(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new tf(t)}),this.register(function(t){return new nf(t)}),this.register(function(t){return new sf(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new Ku(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new $u(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new ju(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new ef(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new Bl(t,ut.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Bl(t,ut.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new rf(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Ui.extractUrlBase(e);o=Ui.resolveURL(l,this.path)}else o=Ui.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Is(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===tg){try{o[ut.KHR_BINARY_GLTF]=new of(e)}catch(u){s&&s(u);return}r=JSON.parse(o[ut.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new df(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case ut.KHR_MATERIALS_UNLIT:o[u]=new Vu;break;case ut.KHR_DRACO_MESH_COMPRESSION:o[u]=new af(r,this.dracoLoader);break;case ut.KHR_TEXTURE_TRANSFORM:o[u]=new cf;break;case ut.KHR_MESH_QUANTIZATION:o[u]=new lf;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function cE(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Zt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ut={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Gu=class{constructor(e){this.parser=e,this.name=ut.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new we(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],vn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ps(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Di(h),l.distance=u;break;case"spot":l=new Ro(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),_i(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Vu=class{constructor(){this.name=ut.KHR_MATERIALS_UNLIT}getMaterialType(){return qt}extendParams(e,t,n){let s=[];e.color=new we(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],vn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,nt))}return Promise.all(s)}},Wu=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Xu=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Tn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new _e(r,r)}return Promise.all(s)}},qu=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Tn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Yu=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Tn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Zu=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SHEEN}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Tn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],vn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,nt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Ku=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Tn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Ju=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_VOLUME}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Tn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(r[0],r[1],r[2],vn),Promise.all(s)}},$u=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IOR}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Tn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},ju=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Tn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(r[0],r[1],r[2],vn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,nt)),Promise.all(s)}},Qu=class{constructor(e){this.parser=e,this.name=ut.EXT_MATERIALS_BUMP}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Tn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},ef=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Tn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},tf=class{constructor(e){this.parser=e,this.name=ut.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},nf=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},sf=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},Bl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}},rf=class{constructor(e){this.name=ut.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Wn.TRIANGLES&&l.mode!==Wn.TRIANGLE_STRIP&&l.mode!==Wn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let m of u){let x=new Ze,g=new L,p=new Nt,S=new L(1,1,1),M=new gn(m.geometry,m.material,f);for(let y=0;y<f;y++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&S.fromBufferAttribute(c.SCALE,y),M.setMatrixAt(y,x.compose(g,p,S));for(let y in c)if(y==="_COLOR_0"){let w=c[y];M.instanceColor=new Ki(w.array,w.itemSize,w.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&m.geometry.setAttribute(y,c[y]);It.prototype.copy.call(M,m),this.parser.assignFinalMaterial(M),d.push(M)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},tg="glTF",ra=12,$m={JSON:1313821514,BIN:5130562},of=class{constructor(e){this.name=ut.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ra),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==tg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ra,r=new DataView(e,ra),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===$m.JSON){let l=new Uint8Array(e,ra+o,a);this.content=n.decode(l)}else if(c===$m.BIN){let l=ra+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},af=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ut.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=uf[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=uf[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=Ur[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(let m in d.attributes){let x=d.attributes[m],g=c[m];g!==void 0&&(x.normalized=g)}u(d)},a,l,vn,f)})})}},cf=class{constructor(){this.name=ut.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},lf=class{constructor(){this.name=ut.KHR_MESH_QUANTIZATION}},zl=class extends fi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,m=e*l,x=m-l,g=-2*d+3*f,p=d-f,S=1-g,M=p-f+u;for(let y=0;y!==a;y++){let w=o[x+y+a],E=o[x+y+c]*h,T=o[m+y+a],_=o[m+y]*h;r[y]=S*w+M*E+g*T+p*_}return r}},lE=new Nt,hf=class extends zl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return lE.fromArray(r).normalize().toArray(r),r}},Wn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ur={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},jm={9728:Xt,9729:Bt,9984:wc,9985:Rr,9986:Ns,9987:ei},Qm={33071:kn,33648:dr,10497:Vn},zu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},uf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},rs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},hE={CUBICSPLINE:void 0,LINEAR:Ss,STEP:Ms},Hu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function uE(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Cs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:bn})),i.DefaultMaterial}function Ws(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function _i(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function fE(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function dE(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function pE(i){let e,t=i.extensions&&i.extensions[ut.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ku(t.attributes):e=i.indices+":"+ku(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+ku(i.targets[n]);return e}function ku(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ff(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function mE(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var gE=new Ze,df=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new cE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new jn(this.options.manager):this.textureLoader=new Io(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Is(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ws(r,a,s),_i(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ut.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Ui.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=zu[s.type],a=Ur[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Wt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=zu[s.type],l=Ur[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,x,g;if(d&&d!==u){let p=Math.floor(f/d),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,M=t.cache.get(S);M||(x=new l(a,p*d,s.count*d/h),M=new Es(x,d/h),t.cache.add(S,M)),g=new Zi(M,c,f%d/h,m)}else a===null?x=new l(s.count*c):x=new l(a,f,s.count*c),g=new Wt(x,c,m);if(s.sparse!==void 0){let p=zu.SCALAR,S=Ur[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,w=new S(o[1],M,s.sparse.count*p),E=new l(o[2],y,s.sparse.count*c);a!==null&&(g=new Wt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let T=0,_=w.length;T<_;T++){let b=w[T];if(g.setX(b,E[T*c]),c>=2&&g.setY(b,E[T*c+1]),c>=3&&g.setZ(b,E[T*c+2]),c>=4&&g.setW(b,E[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=jm[f.magFilter]||Bt,h.minFilter=jm[f.minFilter]||ei,h.wrapS=Qm[f.wrapS]||Vn,h.wrapT=Qm[f.wrapT]||Vn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Xt&&h.minFilter!==Bt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(x){let g=new Qt(x);g.needsUpdate=!0,f(g)}),t.load(Ui.resolveURL(u,r.path),m,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),_i(u,o),u.userData.mimeType=o.mimeType||mE(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ut.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ut.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[ut.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Sr,mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Ji,mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Cs}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[ut.KHR_MATERIALS_UNLIT]){let u=s[ut.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new we(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],vn),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,nt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Lt);let h=r.alphaMode||Hu.OPAQUE;if(h===Hu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Hu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==qt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new _e(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==qt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==qt){let u=r.emissiveFactor;a.emissive=new we().setRGB(u[0],u[1],u[2],vn)}return r.emissiveTexture!==void 0&&o!==qt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,nt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),_i(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ws(s,u,r),u})}createUniqueName(e){let t=Ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ut.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return eg(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=pE(l),u=s[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[ut.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=eg(new mt,l,t),s[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?uE(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,m=h.length;d<m;d++){let x=h[d],g=o[d],p,S=l[d];if(g.mode===Wn.TRIANGLES||g.mode===Wn.TRIANGLE_STRIP||g.mode===Wn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new ao(x,S):new Ge(x,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Wn.TRIANGLE_STRIP?p.geometry=Mu(p.geometry,Xo):g.mode===Wn.TRIANGLE_FAN&&(p.geometry=Mu(p.geometry,Pr));else if(g.mode===Wn.LINES)p=new ws(x,S);else if(g.mode===Wn.LINE_STRIP)p=new As(x,S);else if(g.mode===Wn.LINE_LOOP)p=new lo(x,S);else if(g.mode===Wn.POINTS)p=new ho(x,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&dE(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),_i(p,r),g.extensions&&Ws(s,p,g),t.assignFinalMaterial(p),u.push(p)}for(let d=0,m=u.length;d<m;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Ws(s,u[0],r),u[0];let f=new rt;r.extensions&&Ws(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,m=u.length;d<m;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new $t(is.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Qi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),_i(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new Ze;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new co(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],m=s.samplers[d.sampler],x=d.target,g=x.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,S=s.parameters!==void 0?s.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",S)),l.push(m),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],m=u[2],x=u[3],g=u[4],p=[];for(let M=0,y=f.length;M<y;M++){let w=f[M],E=d[M],T=m[M],_=x[M],b=g[M];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let C=n._createAnimationTracks(w,E,T,_,b);if(C)for(let I=0;I<C.length;I++)p.push(C[I])}let S=new Eo(r,void 0,p);return _i(S,s),S})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,gE)});for(let d=0,m=u.length;d<m;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,m=u[0];h.pivot=new L().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new yr:l.length>1?h=new rt:l.length===1?h=l[0]:h=new It,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),_i(h,r),r.extensions&&Ws(n,h,r),r.matrix!==void 0){let u=new Ze;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new rt;n.name&&(r.name=s.createUniqueName(n.name)),_i(r,n),n.extensions&&Ws(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++){let f=c[h];f.parent!==null?r.add(Km(f)):r.add(f)}let l=h=>{let u=new Map;for(let[f,d]of s.associations)(f instanceof mn||f instanceof Qt)&&u.set(f,d);return h.traverse(f=>{let d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];function l(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}rs[r.path]===rs.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let h;switch(rs[r.path]){case rs.weights:h=Pi;break;case rs.rotation:h=Li;break;case rs.translation:case rs.scale:h=$i;break;default:n.itemSize===1?h=Pi:h=$i;break}let u=s.interpolation!==void 0?hE[s.interpolation]:Ss,f=this._getArrayFromAccessor(n);for(let d=0,m=c.length;d<m;d++){let x=new h(c[d]+"."+rs[r.path],t.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=ff(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Li?hf:zl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function xE(i,e,t){let n=e.attributes,s=new pn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),a.normalized){let h=ff(Ur[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new L,c=new L;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){let x=ff(Ur[f.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new En;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function eg(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=uf[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return lt.workingColorSpace!==vn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),_i(i,e),xE(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?fE(i,e.targets,t):i})}var pf=[{file:"cars/sedan.glb",kind:"car",targetLen:4.3},{file:"cars/hatchback-sports.glb",kind:"car",targetLen:3.9},{file:"cars/van.glb",kind:"van",targetLen:5.4},{file:"cars/bus.glb",kind:"bus",targetLen:11}],_E=16,ng=6.1,yE=405,ig=[560,700],Cn=(()=>{let i=3394627454;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})();function rg(i,e,t){let n=e&&e.streetLine;if(!n||n.length<2)return{group:null};let s=new rt;s.name="cars",t.add(s);let r=new Ol,o=a=>r.loadAsync(Rn(i,a.file)).then(c=>vE(c.scene,a)).catch(()=>null);return Promise.all(pf.map(o)).then(a=>{let c={};for(let l=0;l<pf.length;l++)a[l]&&(c[pf[l].kind]??=[]).push(a[l]);!c.car&&!c.van&&!c.bus||ME(c,n,s)}),{group:s}}function vE(i,e){let n=new pn().setFromObject(i).getSize(new L),s=Math.max(n.x,n.z)||1,r=e.targetLen/s;i.scale.setScalar(r),i.updateMatrixWorld(!0);let o=new pn().setFromObject(i);i.position.y=-o.min.y;let a=new rt;return a.add(i),a}function sg(i,e){let t=e?.05+Cn()*.04:.18+Cn()*.2,n=Cn()<.5&&!e;i.traverse(s=>{if(!s.isMesh||!s.material)return;let r=s.material,o=new $e({map:r.map||null,color:(r.color?r.color.clone():new we(8947848)).multiplyScalar(t)});n&&(o.color.r=Math.min(1,o.color.r*1.35+.03),o.color.b*=.75),s.material=o})}function ME(i,e,t){let n=[...i.car||[],...i.van||[]];if(n.length)for(let r=0;r<_E;r++){let o=40+Cn()*1160;if(o>ig[0]&&o<ig[1])continue;let a=Qo(e,o);if(!a)continue;let c=Cn()<.5?1:-1,[l,h]=a.tangent,u=n[Math.floor(Cn()*n.length)].clone(!0);sg(u,Cn()<.12),u.position.set(a.point[0]+-h*c*(ng+Cn()*.7),0,a.point[1]+l*c*(ng+Cn()*.7));let f=Math.atan2(l,h)+(Cn()<.5?Math.PI:0);Cn()<.15&&(f+=(Cn()-.5)*1.2),u.rotation.y=f+(Cn()-.5)*.12,u.rotation.z=(Cn()-.5)*.05,t.add(u)}let s=(i.bus||[])[0];if(s){let r=Qo(e,yE);if(r){let o=s.clone(!0);sg(o,!0),o.position.set(r.point[0],0,r.point[1]),o.rotation.y=Math.atan2(r.tangent[0],r.tangent[1])+.06,o.rotation.z=.07,t.add(o)}}}var SE=30,bE=7.6,Fr=30,EE=50,TE=9,mf=25,AE=3,og=[4999740,4145720,5655614,4472891,5263946,3816500],ag=[7027246,3033690,7826250,4864602,5921354],cg=['"%Q" \u2014 whit?','did ye hear that? "%Q"','"%Q", says he','"%Q" \u2014 aye, right','"%Q"... ma nerves',`he's away wi it \u2014 "%Q"`],hn=(()=>{let i=1972196;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})();function hg(i,e,t,n){let s=e.streetLine||[];if(s.length<2)return{update(){}};let r=i.comicLines||{},a=CE(s)-Fr-EE;if(a<50)return{update(){}};let c=new rt;c.name="leithers",t.add(c);let l=[];for(let m=0;m<SE;m++){let x=wE();x.s=Fr+hn()*a,x.side=hn()<.5?1:-1,x.dir=hn()<.5?1:-1,x.speed=.55+hn()*.5,x.offset=bE+hn()*1.6,x.state="walk",x.listenT=0,x.cooldown=hn()*mf,x.phase=hn()*10,x.bubble=null,x.bubbleT=0,c.add(x.group),l.push(x)}let h=0,u=0;function f(m,x){for(let g=0;g<l.length;g++){let p=l[g];if(p.cooldown>0&&(p.cooldown-=m),p.state==="fetch"){let y=p.fetchItem.chainage-p.s;if(Math.abs(y)>2)p.dir=Math.sign(y),p.s+=p.dir*p.speed*1.5*m;else{p.state="approach",p.approachT=0;let w=p.group.position;p.approachFrom={x:w.x,z:w.z}}}else if(p.state==="approach"){p.approachT=Math.min(1,p.approachT+m/1.6);let M=p.fetchItem,y=p.approachT,w=M.x+.75,E=M.z;p.group.position.set(p.approachFrom.x+(w-p.approachFrom.x)*y,Math.abs(Math.sin((p.s+y*8)*2))*.03,p.approachFrom.z+(E-p.approachFrom.z)*y),p.group.rotation.y=Math.atan2(M.x-p.group.position.x,M.z-p.group.position.z),y>=1&&(p.state="readaloud",p.readQueue=(p.fetchItem.lines||[]).slice(0,8),p.readT=.5);continue}else if(p.state==="readaloud"){if(p.readT-=m,p.readT<=0&&!p.bubble){let M=p.readQueue.shift();M==null?(p.state="walk",p.fetchItem.adopted=!1,p.fetchItem=null,p.cooldown=mf):(p.bubble=lg('"'+M+'"'),p.bubble.position.set(0,p.headTopY+.5,0),p.group.add(p.bubble),p.bubbleT=4.2,h++,p.readT=.6)}p.bubble&&(p.bubbleT-=m,p.bubbleT<=0&&(p.group.remove(p.bubble),p.bubble.material.map.dispose(),p.bubble.material.dispose(),p.bubble=null,h--));continue}else p.state==="listen"?(p.listenT-=m,(p.listenT<=0||!(p.target&&p.target.speaking))&&(p.state="walk",p.target=null,p.cooldown=mf)):(p.s+=p.dir*p.speed*m,(p.s<Fr||p.s>Fr+a)&&(p.dir*=-1,p.s=Math.max(Fr,Math.min(Fr+a,p.s))));let S=IE(s,p.s);if(S){let[M,y]=S.tangent,w=S.point[0]+-y*p.side*p.offset,E=S.point[1]+M*p.side*p.offset;if(p.group.position.set(w,0,E),p.state==="listen"&&p.target){let T=p.target.group.position;p.group.rotation.y=Math.atan2(T.x-w,T.z-E)}else{p.group.rotation.y=Math.atan2(M*p.dir,y*p.dir);let T=x*(4.6*p.speed)+p.phase;p.group.position.y=Math.abs(Math.sin(T))*.045,p.group.rotation.z=Math.sin(T)*.03}}p.bubble&&(p.bubbleT-=m,p.bubbleT<=0&&(p.group.remove(p.bubble),p.bubble.material.map.dispose(),p.bubble.material.dispose(),p.bubble=null,h--))}for(let g=0;g<4;g++){let p=l[u++%l.length];if(p.state!=="walk"||p.cooldown>0)continue;let S=p.group.position;for(let M of n){if(!M.speaking)continue;let y=M.group.position;if(Math.hypot(y.x-S.x,y.z-S.z)>TE)continue;p.state="listen",p.target=M,p.listenT=6+hn()*9;let w=r[M.comic.id];if(w&&w.length&&h<AE&&hn()<.6){let E=w[Math.floor(hn()*w.length)],T=cg[Math.floor(hn()*cg.length)];p.bubble=lg(T.replace("%Q",E)),p.bubble.position.set(0,p.headTopY+.5,0),p.group.add(p.bubble),p.bubbleT=7,h++}break}}}function d(m){if(!m||m.adopted||!(m.lines&&m.lines.length))return!1;let x=null,g=70;for(let p of l){if(p.state!=="walk")continue;let S=p.group.position,M=Math.hypot(S.x-m.x,S.z-m.z);M<g&&(g=M,x=p)}return x?(m.adopted=!0,x.state="fetch",x.fetchItem=m,!0):!1}return{walkers:l,update:f,summonReader:d}}function wE(){let i=1.5+hn()*.35,e=.8+hn()*.45,t=og[Math.floor(hn()*og.length)],n=new rt,s=ta(t,!1),r=ta(RE(t,.62),!0),o=new $e({color:1578512,flatShading:!0}),a=.1,c=i*.32,l=.44*e,h=.3*e,u=i*.44,f=.26,d=a+c,m=d+u,x=m+f+.02,g=[];for(let _ of[-1,1]){let b=new tt(l*.34,c,h*.7);b.translate(_*l*.24,a+c*.5,0),g.push(b);let C=new tt(.11,u*.7,.11);C.translate(_*(l*.5+.05),m-u*.62,0),g.push(C)}let p=new tt(l,u,h);p.translate(0,d+u*.5,0),g.push(p),n.add(new Ge(ot(g),s));let S=[];for(let _ of[-1,1]){let b=new tt(l*.36,a,h*1.3);b.translate(_*l*.24,a*.5,h*.15),S.push(b)}n.add(new Ge(ot(S),o));let M=new $e({color:2235928,flatShading:!0}),y=[r,r,r,r,M,r],w=new Ge(new tt(f,f,f*.9),y);w.position.set(0,m+f*.5+.02,0),n.add(w);let E=new $e({color:ag[Math.floor(hn()*ag.length)],flatShading:!0}),T=hn()<.3?[-1,1]:[hn()<.5?-1:1];for(let _ of T){let b=new Ge(new tt(.2,.24,.11),E);b.position.set(_*(l*.5+.1),d+u*.12,.02),n.add(b)}return{group:n,headTopY:x}}function RE(i,e){let t=Math.round((i>>16&255)*e),n=Math.round((i>>8&255)*e),s=Math.round((i&255)*e);return t<<16|n<<8|s}function lg(i){let e=document.createElement("canvas");e.width=512,e.height=160;let t=e.getContext("2d"),n=i.split(" "),s=[""];for(let c of n)(s[s.length-1]+" "+c).trim().length>30&&s.length<3&&s.push(""),s[s.length-1]=(s[s.length-1]+" "+c).trim();t.fillStyle="rgba(20, 22, 16, 0.82)",t.strokeStyle="rgba(200, 200, 180, 0.5)",t.lineWidth=3;let r=34+s.length*34;t.beginPath(),t.roundRect(8,80-r/2,496,r,14),t.fill(),t.stroke(),t.fillStyle="#d8d4c0",t.font="italic 26px Georgia, serif",t.textAlign="center",s.forEach((c,l)=>t.fillText(c,256,80-r/2+44+l*32));let o=new Dt(e),a=new wi(new ui({map:o,transparent:!0,depthTest:!0}));return a.scale.set(1.9,.59,1),a}function CE(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function IE(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,h=Math.hypot(c,l);if(t+h>=e){let u=h>0?(e-t)/h:0;return{point:[s+c*u,r+l*u],tangent:[c/(h||1),l/(h||1)]}}t+=h}return null}var ug=24,PE=70,fg=60,LE=70,os=(()=>{let i=1146442;return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}})(),NE=new jn;function dg(i,e,t){let n=i.catalog&&i.catalog.comics||[],s=e.streetLine||[];if(!n.length||s.length<2)return{items:[],update(){},nearestItem:()=>null};let r=i.comicLines||{},o=n.filter(m=>r[m.id]&&r[m.id].length>=3),a=o.length>=ug?[...o]:[...o,...n.filter(m=>!r[m.id])],c=[];for(;c.length<Math.min(ug,a.length);)c.push(a.splice(Math.floor(os()*a.length),1)[0]);let l=DE(s),h=new rt;h.name="litter-comics",t.add(h);let u=c.map((m,x)=>{let g=fg+os()*(l-fg-LE),p=UE(s,g);if(!p)return null;let[S,M]=p.tangent,y=os()<.5?1:-1,w=3.5+os()*6,E=p.point[0]+-M*y*w,T=p.point[1]+S*y*w,_=new qt({map:Ru(),side:Lt}),b=new Ge(new Yt(.42,.58),_);return b.rotation.x=-Math.PI/2,b.rotation.z=os()*Math.PI*2,os()<.3&&(b.rotation.y=(os()-.5)*.5),b.position.set(E,.055+os()*.01,T),h.add(b),{comic:m,lines:r[m.id]||[],mesh:b,x:E,z:T,chainage:g,loaded:!1,adopted:!1,load(){this.loaded||(this.loaded=!0,NE.load(Rn(i,m.image),C=>{C.colorSpace=nt,_.map=C,_.color.set(16777215),_.needsUpdate=!0}))}}}).filter(Boolean);function f(m){if(m)for(let x of u)!x.loaded&&Math.hypot(m.x-x.x,m.z-x.z)<PE&&x.load()}function d(m,x,g){let p=null,S=g;for(let M of u){let y=Math.hypot(m-M.x,x-M.z);y<S&&(S=y,p=M)}return p}return{items:u,update:f,nearestItem:d}}function DE(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}function UE(i,e){let t=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,h=Math.hypot(c,l);if(t+h>=e){let u=h>0?(e-t)/h:0;return{point:[s+c*u,r+l*u],tangent:[c/(h||1),l/(h||1)]}}t+=h}return null}function pg(){let i=null,e=null,t=!1,n=!1;function s(){if(t){i&&i.state==="suspended"&&i.resume();return}t=!0;let a=window.AudioContext||window.webkitAudioContext;a&&(i=new a,e=i.createGain(),e.gain.value=.16,e.connect(i.destination),FE(i,e),OE(i,e))}function r(a){if(n=!!a,!i||!e)return;let c=(n?.5:1)*.16,l=i.currentTime;e.gain.cancelScheduledValues(l),e.gain.setValueAtTime(e.gain.value,l),e.gain.linearRampToValueAtTime(c,l+.6)}function o(){!i||!e||BE(i,e)}return{start:s,setDucked:r,triggerCrackle:o}}function FE(i,e){let t=i.createGain();t.gain.value=.55;let n=i.createBiquadFilter();n.type="lowpass",n.frequency.value=220,n.Q.value=.7,t.connect(n).connect(e);let s=[55,55.6];for(let r of s){let o=i.createOscillator();o.type="sawtooth",o.frequency.value=r,o.connect(t),o.start()}}function OE(i,e){let t=i.createBufferSource();t.buffer=mg(i,4),t.loop=!0;let n=i.createBiquadFilter();n.type="bandpass",n.frequency.value=500,n.Q.value=.6;let s=i.createGain();s.gain.value=.18,t.connect(n).connect(s).connect(e),t.start();let r=i.createOscillator();r.type="sine",r.frequency.value=.07;let o=i.createGain();o.gain.value=.12,r.connect(o).connect(s.gain),r.start()}function BE(i,e){let n=i.createBufferSource();n.buffer=mg(i,.18);let s=i.createBiquadFilter();s.type="highpass",s.frequency.value=1800;let r=i.createGain(),o=i.currentTime;r.gain.setValueAtTime(.9,o),r.gain.exponentialRampToValueAtTime(.001,o+.18),n.connect(s).connect(r).connect(e),n.start(o),n.stop(o+.18+.02)}function mg(i,e){let t=Math.max(1,Math.floor(i.sampleRate*e)),n=i.createBuffer(1,t,i.sampleRate),s=n.getChannelData(0);for(let r=0;r<t;r++)s[r]=Math.random()*2-1;return n}function gg({controls:i,onEnter:e}){let t=document.getElementById("title-card"),n=document.getElementById("touch-forward");function s(){!t||t.classList.contains("hidden")||(t.classList.add("hidden"),i.setEnabled(!0),e&&e())}if(t&&(t.addEventListener("click",s),t.addEventListener("touchend",r=>{r.preventDefault(),s()},{passive:!1})),n){let r=a=>{n.classList.toggle("active",a),i.setForward(a)};n.addEventListener("pointerdown",a=>{a.preventDefault(),n.setPointerCapture?.(a.pointerId),r(!0)});let o=()=>r(!1);n.addEventListener("pointerup",o),n.addEventListener("pointercancel",o),n.addEventListener("pointerleave",o)}return{enter:s}}async function zE(){let i=document.getElementById("scene"),e=["localhost","127.0.0.1"].includes(location.hostname),t=new xl({canvas:i,antialias:!0,preserveDrawingBuffer:e});t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.setSize(window.innerWidth,window.innerHeight),t.toneMapping=Oo,t.toneMappingExposure=1.46;let n=new so,s=new $t(70,window.innerWidth/window.innerHeight,.1,1e3);n.add(s);let r=await Rp(),o=Yp(r.leith);n.add(o.group),n.fog=o.fog;let a=Dm(o.fog.color,o.streetLine);s.add(a.mesh);let c=Zp(s),l=o.streetLine[0]||[0,0],h=o.streetLine[1]||[l[0],l[1]+1],u={x:l[0],z:l[1],yaw:Math.atan2(-(h[0]-l[0]),-(h[1]-l[1]))},f=Jp(s,i,{nearestStreetPoint:o.nearestStreetPoint,spawn:u});f.setEnabled(!1);let d=nm(r,o,n,s),m=hg(r,o,n,d.npcs),x=dg(r,o,n),g=dm(r,o,n);Bp(o,n),Fm(o,n);let p=Hm(o,r.leith,n),S=Ym(o,n);Zm(o,r.leith,n),Rm(r,o,n),Nm(r,o,n),rg(r,o,n);let M=Sm(o,n),y=pg();M.onArcFlash=()=>y.triggerCrackle();let w=!1,E=!1,T=()=>y.setDucked(w||E),_=mm({camera:s,npcs:d.npcs,assets:r,onActiveChange:D=>{E=D>0,T()}}),b=gm({assets:r,npcs:d.npcs,camera:s,controls:f,proximityAudio:_,onReadingChange:D=>{w=D,T()},litter:x,leithers:m});gg({controls:f,onEnter:()=>{y.start(),_.resume()}}),window.addEventListener("resize",C);function C(){s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.setSize(window.innerWidth,window.innerHeight)}let I=[{name:"controls",update:D=>f.update(D)},{name:"npcs",update:(D,H)=>d.update(D,H)},{name:"leithers",update:(D,H)=>m.update(D,H)},{name:"litter",update:()=>x.update(s.position)},{name:"shopfronts",update:()=>g.update(s.position)},{name:"sky",update:(D,H)=>a.update(H)},{name:"birds",update:(D,H)=>p.update(D,H)},{name:"vermin",update:(D,H)=>S.update(D,H)},{name:"scenery",update:(D,H)=>M.update(D,H)},{name:"interact",update:D=>b.update(D)},{name:"proximityAudio",update:()=>_.update()},{name:"torch",update:(D,H)=>c.update(H)}];function N(D,H){for(let P of I)P.update(D,H);t.render(n,s)}["localhost","127.0.0.1"].includes(location.hostname)&&(window.__mcgrotDebug={camera:s,world:o,npcs:d,leithers:m,litter:x,shopfronts:g,controls:f,proximityAudio:_,renderer:t,stepFrame:N});let W=performance.now();function X(){requestAnimationFrame(X);let D=performance.now(),H=Math.min((D-W)/1e3,.1);W=D,N(H,D/1e3)}X()}zE().catch(i=>{console.error("McGrot Walk failed to start:",i)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
