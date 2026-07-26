(()=>{var Td=0,Gh=1,Ad=2;var Yo=1,wd=2,Ur=3,xn=0,un=1,De=2,yi=0,Ts=1,Bs=2,Vh=3,Wh=4,Rd=5;var ts=100,Cd=101,Id=102,Pd=103,Ld=104,Nd=200,Dd=201,Ud=202,Fd=203,Ka=204,$a=205,Od=206,Bd=207,zd=208,Hd=209,kd=210,Gd=211,Vd=212,Wd=213,Xd=214,Ja=0,ja=1,Qa=2,As=3,tc=4,ec=5,nc=6,ic=7,Pc=0,qd=1,Yd=2,oi=0,Xh=1,qh=2,Yh=3,Zo=4,Zh=5,Kh=6,$h=7,Th="attached",Zd="detached",Jh=300,as=301,zs=302,Lc=303,Nc=304,Ko=306,Yn=1e3,Xn=1001,Mr=1002,Ye=1003,Dc=1004;var Hs=1005;var ke=1006,Fr=1007;var ai=1008;var Pn=1009,jh=1010,Qh=1011,Or=1012,Uc=1013,ci=1014,Hn=1015,vi=1016,Fc=1017,Oc=1018,Br=1020,tu=35902,eu=35899,nu=1021,iu=1022,kn=1023,mi=1026,cs=1027,Bc=1028,zc=1029,ls=1030,Hc=1031;var kc=1033,$o=33776,Jo=33777,jo=33778,Qo=33779,Gc=35840,Vc=35841,Wc=35842,Xc=35843,qc=36196,Yc=37492,Zc=37496,Kc=37488,$c=37489,ta=37490,Jc=37491,jc=37808,Qc=37809,tl=37810,el=37811,nl=37812,il=37813,sl=37814,rl=37815,ol=37816,al=37817,cl=37818,ll=37819,hl=37820,ul=37821,fl=36492,dl=36494,pl=36495,ml=36283,gl=36284,ea=36285,xl=36286;var ws=2300,Rs=2301,Za=2302,Ah=2303,wh=2400,Rh=2401,Ch=2402,Kd=2500;var su=0,na=1,zr=2,$d=3200;var ia=0,Jd=1,Vi="",ne="srgb",bn="srgb-linear",uo="linear",ve="srgb";var Ss=7680;var Ih=519,jd=512,Qd=513,tp=514,_l=515,ep=516,np=517,yl=518,ip=519,sc=35044;var ru="300 es",ii=2e3,Sr=2001;function $0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function J0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sp(){let i=br("canvas");return i.style.display="block",i}var Df={},Er=null;function fo(...i){let t="THREE."+i.shift();Er?Er("log",t,...i):console.log(t,...i)}function rp(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function zt(...i){i=rp(i);let t="THREE."+i.shift();if(Er)Er("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Qt(...i){i=rp(i);let t="THREE."+i.shift();if(Er)Er("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Es(...i){let t=i.join(" ");t in Df||(Df[t]=!0,zt(...i))}function op(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var ap={[Ja]:ja,[Qa]:nc,[tc]:ic,[As]:ec,[ja]:Ja,[nc]:Qa,[ic]:tc,[ec]:As},gi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uf=1234567,ao=Math.PI/180,Cs=180/Math.PI;function qn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function fe(i,t,e){return Math.max(t,Math.min(e,i))}function ou(i,t){return(i%t+t)%t}function j0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Q0(i,t,e){return i!==t?(e-i)/(t-i):0}function co(i,t,e){return(1-e)*i+e*t}function tg(i,t,e,n){return co(i,t,1-Math.exp(-e*n))}function eg(i,t=1){return t-Math.abs(ou(i,t*2)-t)}function ng(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ig(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function sg(i,t){return i+Math.floor(Math.random()*(t-i+1))}function rg(i,t){return i+Math.random()*(t-i)}function og(i){return i*(.5-Math.random())}function ag(i){i!==void 0&&(Uf=i);let t=Uf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function cg(i){return i*ao}function lg(i){return i*Cs}function hg(i){return(i&i-1)===0&&i!==0}function ug(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dg(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*d,a*h,a*l);break;default:zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ni(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Zn={DEG2RAD:ao,RAD2DEG:Cs,generateUUID:qn,clamp:fe,euclideanModulo:ou,mapLinear:j0,inverseLerp:Q0,lerp:co,damp:tg,pingpong:eg,smoothstep:ng,smootherstep:ig,randInt:sg,randFloat:rg,randFloatSpread:og,seededRandom:ag,degToRad:cg,radToDeg:lg,isPowerOfTwo:hg,ceilPowerOfTwo:ug,floorPowerOfTwo:fg,setQuaternionFromProperEuler:dg,normalize:Se,denormalize:ni},Et=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ie=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(u!==x||c!==f||l!==d||h!==m){let p=c*f+l*d+h*m+u*x;p<0&&(f=-f,d=-d,m=-m,x=-x,p=-p);let g=1-a;if(p<.9995){let _=Math.acos(p),M=Math.sin(_);g=Math.sin(g*_)/M,a=Math.sin(a*_)/M,c=c*g+f*a,l=l*g+d*a,h=h*g+m*a,u=u*g+x*a}else{c=c*g+f*a,l=l*g+d*a,h=h*g+m*a,u=u*g+x*a;let _=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=_,l*=_,h*=_,u*=_}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*d-l*f,t[e+1]=c*m+h*f+l*u-a*d,t[e+2]=l*m+h*d+a*f-c*u,t[e+3]=h*m-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"YZX":this._x=f*h*u+l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u-f*d*m;break;case"XZY":this._x=f*h*u-l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u+f*d*m;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ff.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ff.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zl.copy(this).projectOnVector(t),this.sub(Zl)}reflect(t){return this.sub(Zl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zl=new L,Ff=new Ie,ie=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],x=s[0],p=s[3],g=s[6],_=s[1],M=s[4],y=s[7],T=s[2],E=s[5],A=s[8];return r[0]=o*x+a*_+c*T,r[3]=o*p+a*M+c*E,r[6]=o*g+a*y+c*A,r[1]=l*x+h*_+u*T,r[4]=l*p+h*M+u*E,r[7]=l*g+h*y+u*A,r[2]=f*x+d*_+m*T,r[5]=f*p+d*M+m*E,r[8]=f*g+d*y+m*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,m=e*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kl.makeScale(t,e)),this}rotate(t){return Es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kl.makeRotation(-t)),this}translate(t,e){return Es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Kl=new ie,Of=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bf=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pg(){let i={enabled:!0,workingColorSpace:bn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ve&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ve&&(s.r=vr(s.r),s.g=vr(s.g),s.b=vr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vi?uo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[bn]:{primaries:t,whitePoint:n,transfer:uo,toXYZ:Of,fromXYZ:Bf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ne},outputColorSpaceConfig:{drawingBufferColorSpace:ne}},[ne]:{primaries:t,whitePoint:n,transfer:ve,toXYZ:Of,fromXYZ:Bf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ne}}}),i}var ue=pg();function Ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var nr,rc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{nr===void 0&&(nr=br("canvas")),nr.width=t.width,nr.height=t.height;let s=nr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=nr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=br("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ni(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ni(e[n]/255)*255):e[n]=Ni(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},mg=0,Tr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=qn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($l(s[o].image)):r.push($l(s[o]))}else r=$l(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function $l(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var gg=0,Jl=new L,en=class i extends gi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Xn,s=Xn,r=ke,o=ai,a=kn,c=Pn,l=i.DEFAULT_ANISOTROPY,h=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=qn(),this.name="",this.source=new Tr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jl).x}get height(){return this.source.getSize(Jl).y}get depth(){return this.source.getSize(Jl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yn:t.x=t.x-Math.floor(t.x);break;case Xn:t.x=t.x<0?0:1;break;case Mr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yn:t.y=t.y-Math.floor(t.y);break;case Xn:t.y=t.y<0?0:1;break;case Mr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Jh;en.DEFAULT_ANISOTROPY=1;var be=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],m=c[9],x=c[2],p=c[6],g=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+p)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,y=(d+1)/2,T=(g+1)/2,E=(h+f)/4,A=(u+x)/4,v=(m+p)/4;return M>y&&M>T?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=E/n,r=A/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=v/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=A/r,s=v/r),this.set(n,s,r,e),this}let _=Math.sqrt((p-m)*(p-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(p-m)/_,this.y=(u-x)/_,this.z=(f-h)/_,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this.w=fe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this.w=fe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},oc=class extends gi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new en(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Tr(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bn=class extends oc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},po=class extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ac=class extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jt=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,c,l,h,u,f,d,m,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,d,m,x,p)}set(t,e,n,s,r,o,a,c,l,h,u,f,d,m,x,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ir.setFromMatrixColumn(t,0).length(),r=1/ir.setFromMatrixColumn(t,1).length(),o=1/ir.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+m*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=m+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,m=l*h,x=l*u;e[0]=f+x*a,e[4]=m*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,m=l*h,x=l*u;e[0]=f-x*a,e[4]=-o*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,d=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=m*l-d,e[8]=f*l+x,e[1]=c*u,e[5]=x*l+f,e[9]=d*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=x-f*u,e[8]=m*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+m,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*c,d=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xg,t,_g)}lookAt(t,e,n){let s=this.elements;return Fn.subVectors(t,e),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Zi.crossVectors(n,Fn),Zi.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Zi.crossVectors(n,Fn)),Zi.normalize(),ga.crossVectors(Fn,Zi),s[0]=Zi.x,s[4]=ga.x,s[8]=Fn.x,s[1]=Zi.y,s[5]=ga.y,s[9]=Fn.y,s[2]=Zi.z,s[6]=ga.z,s[10]=Fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],x=n[6],p=n[10],g=n[14],_=n[3],M=n[7],y=n[11],T=n[15],E=s[0],A=s[4],v=s[8],b=s[12],R=s[1],I=s[5],P=s[9],B=s[13],V=s[2],D=s[6],O=s[10],U=s[14],W=s[3],J=s[7],ut=s[11],z=s[15];return r[0]=o*E+a*R+c*V+l*W,r[4]=o*A+a*I+c*D+l*J,r[8]=o*v+a*P+c*O+l*ut,r[12]=o*b+a*B+c*U+l*z,r[1]=h*E+u*R+f*V+d*W,r[5]=h*A+u*I+f*D+d*J,r[9]=h*v+u*P+f*O+d*ut,r[13]=h*b+u*B+f*U+d*z,r[2]=m*E+x*R+p*V+g*W,r[6]=m*A+x*I+p*D+g*J,r[10]=m*v+x*P+p*O+g*ut,r[14]=m*b+x*B+p*U+g*z,r[3]=_*E+M*R+y*V+T*W,r[7]=_*A+M*I+y*D+T*J,r[11]=_*v+M*P+y*O+T*ut,r[15]=_*b+M*B+y*U+T*z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],x=t[7],p=t[11],g=t[15],_=c*d-l*f,M=a*d-l*u,y=a*f-c*u,T=o*d-l*h,E=o*f-c*h,A=o*u-a*h;return e*(x*_-p*M+g*y)-n*(m*_-p*T+g*E)+s*(m*M-x*T+g*A)-r*(m*y-x*E+p*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],x=t[13],p=t[14],g=t[15],_=e*a-n*o,M=e*c-s*o,y=e*l-r*o,T=n*c-s*a,E=n*l-r*a,A=s*l-r*c,v=h*x-u*m,b=h*p-f*m,R=h*g-d*m,I=u*p-f*x,P=u*g-d*x,B=f*g-d*p,V=_*B-M*P+y*I+T*R-E*b+A*v;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/V;return t[0]=(a*B-c*P+l*I)*D,t[1]=(s*P-n*B-r*I)*D,t[2]=(x*A-p*E+g*T)*D,t[3]=(f*E-u*A-d*T)*D,t[4]=(c*R-o*B-l*b)*D,t[5]=(e*B-s*R+r*b)*D,t[6]=(p*y-m*A-g*M)*D,t[7]=(h*A-f*y+d*M)*D,t[8]=(o*P-a*R+l*v)*D,t[9]=(n*R-e*P-r*v)*D,t[10]=(m*E-x*y+g*_)*D,t[11]=(u*y-h*E-d*_)*D,t[12]=(a*b-o*I-c*v)*D,t[13]=(e*I-n*b+s*v)*D,t[14]=(x*M-m*T-p*_)*D,t[15]=(h*T-u*M+f*_)*D,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,m=r*u,x=o*h,p=o*u,g=a*u,_=c*l,M=c*h,y=c*u,T=n.x,E=n.y,A=n.z;return s[0]=(1-(x+g))*T,s[1]=(d+y)*T,s[2]=(m-M)*T,s[3]=0,s[4]=(d-y)*E,s[5]=(1-(f+g))*E,s[6]=(p+_)*E,s[7]=0,s[8]=(m+M)*A,s[9]=(p-_)*A,s[10]=(1-(f+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ir.set(s[0],s[1],s[2]).length(),a=ir.set(s[4],s[5],s[6]).length(),c=ir.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Qn.copy(this);let l=1/o,h=1/a,u=1/c;return Qn.elements[0]*=l,Qn.elements[1]*=l,Qn.elements[2]*=l,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=u,Qn.elements[9]*=u,Qn.elements[10]*=u,e.setFromRotationMatrix(Qn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=ii,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),m,x;if(c)m=r/(o-r),x=o*r/(o-r);else if(a===ii)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Sr)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ii,c=!1){let l=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),m,x;if(c)m=1/(o-r),x=o/(o-r);else if(a===ii)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===Sr)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ir=new L,Qn=new Jt,xg=new L(0,0,0),_g=new L(1,1,1),Zi=new L,ga=new L,Fn=new L,zf=new Jt,Hf=new Ie,Ve=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(fe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hf.setFromEuler(this),this.setFromQuaternion(Hf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ve.DEFAULT_ORDER="XYZ";var mo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},yg=0,kf=new L,sr=new Ie,Ai=new Jt,xa=new L,Kr=new L,vg=new L,Mg=new Ie,Gf=new L(1,0,0),Vf=new L(0,1,0),Wf=new L(0,0,1),Xf={type:"added"},Sg={type:"removed"},rr={type:"childadded",child:null},jl={type:"childremoved",child:null},Pe=class i extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new Ve,n=new Ie,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new ie}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return sr.setFromAxisAngle(t,e),this.quaternion.multiply(sr),this}rotateOnWorldAxis(t,e){return sr.setFromAxisAngle(t,e),this.quaternion.premultiply(sr),this}rotateX(t){return this.rotateOnAxis(Gf,t)}rotateY(t){return this.rotateOnAxis(Vf,t)}rotateZ(t){return this.rotateOnAxis(Wf,t)}translateOnAxis(t,e){return kf.copy(t).applyQuaternion(this.quaternion),this.position.add(kf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gf,t)}translateY(t){return this.translateOnAxis(Vf,t)}translateZ(t){return this.translateOnAxis(Wf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xa.copy(t):xa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Kr,xa,this.up):Ai.lookAt(xa,Kr,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),sr.setFromRotationMatrix(Ai),this.quaternion.premultiply(sr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xf),rr.child=t,this.dispatchEvent(rr),rr.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sg),jl.child=t,this.dispatchEvent(jl),jl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xf),rr.child=t,this.dispatchEvent(rr),rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,t,vg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,Mg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Pe.DEFAULT_UP=new L(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var se=class extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},bg={type:"move"},Ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),g=this._getHandJoint(l,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},cp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},_a={h:0,s:0,l:0};function Ql(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ht=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ue.workingColorSpace){if(t=ou(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ql(o,r,t+1/3),this.g=Ql(o,r,t),this.b=Ql(o,r,t-1/3)}return ue.colorSpaceToWorking(this,s),this}setStyle(t,e=ne){function n(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ne){let n=cp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=vr(t.r),this.g=vr(t.g),this.b=vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ne){return ue.workingToColorSpace(gn.copy(this),t),Math.round(fe(gn.r*255,0,255))*65536+Math.round(fe(gn.g*255,0,255))*256+Math.round(fe(gn.b*255,0,255))}getHexString(t=ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(gn.copy(this),e);let n=gn.r,s=gn.g,r=gn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=ne){ue.workingToColorSpace(gn.copy(this),t);let e=gn.r,n=gn.g,s=gn.b;return t!==ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ki),this.setHSL(Ki.h+t,Ki.s+e,Ki.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ki),t.getHSL(_a);let n=co(Ki.h,_a.h,e),s=co(Ki.s,_a.s,e),r=co(Ki.l,_a.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new ht;ht.NAMES=cp;var go=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ht(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var xo=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ve,this.environmentIntensity=1,this.environmentRotation=new Ve,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ti=new L,wi=new L,th=new L,Ri=new L,or=new L,ar=new L,qf=new L,eh=new L,nh=new L,ih=new L,sh=new be,rh=new be,oh=new be,Li=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ti.subVectors(t,e),s.cross(ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ti.subVectors(s,e),wi.subVectors(n,e),th.subVectors(t,e);let o=ti.dot(ti),a=ti.dot(wi),c=ti.dot(th),l=wi.dot(wi),h=wi.dot(th),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,m=(o*h-a*c)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ri.x),c.addScaledVector(o,Ri.y),c.addScaledVector(a,Ri.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return sh.setScalar(0),rh.setScalar(0),oh.setScalar(0),sh.fromBufferAttribute(t,e),rh.fromBufferAttribute(t,n),oh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(sh,r.x),o.addScaledVector(rh,r.y),o.addScaledVector(oh,r.z),o}static isFrontFacing(t,e,n,s){return ti.subVectors(n,e),wi.subVectors(t,e),ti.cross(wi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ti.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),ti.cross(wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;or.subVectors(s,n),ar.subVectors(r,n),eh.subVectors(t,n);let c=or.dot(eh),l=ar.dot(eh);if(c<=0&&l<=0)return e.copy(n);nh.subVectors(t,s);let h=or.dot(nh),u=ar.dot(nh);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(or,o);ih.subVectors(t,r);let d=or.dot(ih),m=ar.dot(ih);if(m>=0&&d<=m)return e.copy(r);let x=d*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(ar,a);let p=h*m-d*u;if(p<=0&&u-h>=0&&d-m>=0)return qf.subVectors(r,s),a=(u-h)/(u-h+(d-m)),e.copy(s).addScaledVector(qf,a);let g=1/(p+x+f);return o=x*g,a=f*g,e.copy(n).addScaledVector(or,o).addScaledVector(ar,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},_n=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ei.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ei.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ei.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ei):ei.fromBufferAttribute(r,o),ei.applyMatrix4(t.matrixWorld),this.expandByPoint(ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ya.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ya.copy(n.boundingBox)),ya.applyMatrix4(t.matrixWorld),this.union(ya)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ei),ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($r),va.subVectors(this.max,$r),cr.subVectors(t.a,$r),lr.subVectors(t.b,$r),hr.subVectors(t.c,$r),$i.subVectors(lr,cr),Ji.subVectors(hr,lr),ds.subVectors(cr,hr);let e=[0,-$i.z,$i.y,0,-Ji.z,Ji.y,0,-ds.z,ds.y,$i.z,0,-$i.x,Ji.z,0,-Ji.x,ds.z,0,-ds.x,-$i.y,$i.x,0,-Ji.y,Ji.x,0,-ds.y,ds.x,0];return!ah(e,cr,lr,hr,va)||(e=[1,0,0,0,1,0,0,0,1],!ah(e,cr,lr,hr,va))?!1:(Ma.crossVectors($i,Ji),e=[Ma.x,Ma.y,Ma.z],ah(e,cr,lr,hr,va))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ci=[new L,new L,new L,new L,new L,new L,new L,new L],ei=new L,ya=new _n,cr=new L,lr=new L,hr=new L,$i=new L,Ji=new L,ds=new L,$r=new L,va=new L,Ma=new L,ps=new L;function ah(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ps.fromArray(i,r);let a=s.x*Math.abs(ps.x)+s.y*Math.abs(ps.y)+s.z*Math.abs(ps.z),c=t.dot(ps),l=e.dot(ps),h=n.dot(ps);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var $e=new L,Sa=new Et,Eg=0,qe=class extends gi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Eg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=sc,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Sa.fromBufferAttribute(this,e),Sa.applyMatrix3(t),this.setXY(e,Sa.x,Sa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sc&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var _o=class extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var yo=class extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var jt=class extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Tg=new _n,Jr=new L,ch=new L,Rn=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Tg.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Jr.subVectors(t,this.center);let e=Jr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Jr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ch.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Jr.copy(t.center).add(ch)),this.expandByPoint(Jr.copy(t.center).sub(ch))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ag=0,Wn=new Jt,lh=new Pe,ur=new L,On=new _n,jr=new _n,an=new L,ge=class i extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($0(t)?yo:_o)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ie().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Wn.makeRotationFromQuaternion(t),this.applyMatrix4(Wn),this}rotateX(t){return Wn.makeRotationX(t),this.applyMatrix4(Wn),this}rotateY(t){return Wn.makeRotationY(t),this.applyMatrix4(Wn),this}rotateZ(t){return Wn.makeRotationZ(t),this.applyMatrix4(Wn),this}translate(t,e,n){return Wn.makeTranslation(t,e,n),this.applyMatrix4(Wn),this}scale(t,e,n){return Wn.makeScale(t,e,n),this.applyMatrix4(Wn),this}lookAt(t){return lh.lookAt(t),lh.updateMatrix(),this.applyMatrix4(lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new jt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];On.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];jr.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(On.min,jr.min),On.expandByPoint(an),an.addVectors(On.max,jr.max),On.expandByPoint(an)):(On.expandByPoint(jr.min),On.expandByPoint(jr.max))}On.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)an.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(an));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)an.fromBufferAttribute(a,l),c&&(ur.fromBufferAttribute(t,l),an.add(ur)),s=Math.max(s,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new qe(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let v=0;v<n.count;v++)a[v]=new L,c[v]=new L;let l=new L,h=new L,u=new L,f=new Et,d=new Et,m=new Et,x=new L,p=new L;function g(v,b,R){l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,R),f.fromBufferAttribute(r,v),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,R),h.sub(l),u.sub(l),d.sub(f),m.sub(f);let I=1/(d.x*m.y-m.x*d.y);isFinite(I)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(I),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(I),a[v].add(x),a[b].add(x),a[R].add(x),c[v].add(p),c[b].add(p),c[R].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let v=0,b=_.length;v<b;++v){let R=_[v],I=R.start,P=R.count;for(let B=I,V=I+P;B<V;B+=3)g(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let M=new L,y=new L,T=new L,E=new L;function A(v){T.fromBufferAttribute(s,v),E.copy(T);let b=a[v];M.copy(b),M.sub(T.multiplyScalar(T.dot(b))).normalize(),y.crossVectors(E,b);let I=y.dot(c[v])<0?-1:1;o.setXYZW(v,M.x,M.y,M.z,I)}for(let v=0,b=_.length;v<b;++v){let R=_[v],I=R.start,P=R.count;for(let B=I,V=I+P;B<V;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)an.fromBufferAttribute(t,e),an.normalize(),t.setXYZ(e,an.x,an.y,an.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,m=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let g=0;g<h;g++)f[m++]=l[d++]}return new qe(f,h,u)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Is=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=sc,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Sn=new L,es=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.applyMatrix4(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.applyNormalMatrix(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.transformDirection(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ni(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ni(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ni(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ni(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){fo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){fo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},wg=0,yn=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=Ts,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ka,this.blendDst=$a,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(n.blending=this.blending),this.side!==xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ka&&(n.blendSrc=this.blendSrc),this.blendDst!==$a&&(n.blendDst=this.blendDst),this.blendEquation!==ts&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ih&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Et().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Et().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},xi=class extends yn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},fr,Qr=new L,dr=new L,pr=new L,mr=new Et,to=new Et,lp=new Jt,ba=new L,eo=new L,Ea=new L,Yf=new Et,hh=new Et,Zf=new Et,Di=class extends Pe{constructor(t=new xi){if(super(),this.isSprite=!0,this.type="Sprite",fr===void 0){fr=new ge;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Is(e,5);fr.setIndex([0,1,2,0,2,3]),fr.setAttribute("position",new es(n,3,0,!1)),fr.setAttribute("uv",new es(n,2,3,!1))}this.geometry=fr,this.material=t,this.center=new Et(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),dr.setFromMatrixScale(this.matrixWorld),lp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),pr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&dr.multiplyScalar(-pr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ta(ba.set(-.5,-.5,0),pr,o,dr,s,r),Ta(eo.set(.5,-.5,0),pr,o,dr,s,r),Ta(Ea.set(.5,.5,0),pr,o,dr,s,r),Yf.set(0,0),hh.set(1,0),Zf.set(1,1);let a=t.ray.intersectTriangle(ba,eo,Ea,!1,Qr);if(a===null&&(Ta(eo.set(-.5,.5,0),pr,o,dr,s,r),hh.set(0,1),a=t.ray.intersectTriangle(ba,Ea,eo,!1,Qr),a===null))return;let c=t.ray.origin.distanceTo(Qr);c<t.near||c>t.far||e.push({distance:c,point:Qr.clone(),uv:Li.getInterpolation(Qr,ba,eo,Ea,Yf,hh,Zf,new Et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ta(i,t,e,n,s,r){mr.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(to.x=r*mr.x-s*mr.y,to.y=s*mr.x+r*mr.y):to.copy(mr),i.copy(t),i.x+=to.x,i.y+=to.y,i.applyMatrix4(lp)}var Ii=new L,uh=new L,Aa=new L,ji=new L,fh=new L,wa=new L,dh=new L,Ps=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ii.copy(this.origin).addScaledVector(this.direction,e),Ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){uh.copy(t).add(e).multiplyScalar(.5),Aa.copy(e).sub(t).normalize(),ji.copy(this.origin).sub(uh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Aa),a=ji.dot(this.direction),c=-ji.dot(Aa),l=ji.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*c-a,f=o*a-c,m=r*h,u>=0)if(f>=-m)if(f<=m){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(uh).addScaledVector(Aa,f),d}intersectSphere(t,e){Ii.subVectors(t.center,this.origin);let n=Ii.dot(this.direction),s=Ii.dot(Ii)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ii)!==null}intersectTriangle(t,e,n,s,r){fh.subVectors(e,t),wa.subVectors(n,t),dh.crossVectors(fh,wa);let o=this.direction.dot(dh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ji.subVectors(this.origin,t);let c=a*this.direction.dot(wa.crossVectors(ji,wa));if(c<0)return null;let l=a*this.direction.dot(fh.cross(ji));if(l<0||c+l>o)return null;let h=-a*ji.dot(dh);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},En=class extends yn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ve,this.combine=Pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Kf=new Jt,ms=new Ps,Ra=new Rn,$f=new L,Ca=new L,Ia=new L,Pa=new L,ph=new L,La=new L,Jf=new L,Na=new L,Ht=class extends Pe{constructor(t=new ge,e=new En){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){La.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(ph.fromBufferAttribute(u,t),o?La.addScaledVector(ph,h):La.addScaledVector(ph.sub(e),h))}e.add(La)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(r),ms.copy(t.ray).recast(t.near),!(Ra.containsPoint(ms.origin)===!1&&(ms.intersectSphere(Ra,$f)===null||ms.origin.distanceToSquared($f)>(t.far-t.near)**2))&&(Kf.copy(r).invert(),ms.copy(t.ray).applyMatrix4(Kf),!(n.boundingBox!==null&&ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ms)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let p=f[m],g=o[p.materialIndex],_=Math.max(p.start,d.start),M=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let y=_,T=M;y<T;y+=3){let E=a.getX(y),A=a.getX(y+1),v=a.getX(y+2);s=Da(this,g,t,n,l,h,u,E,A,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){let _=a.getX(p),M=a.getX(p+1),y=a.getX(p+2);s=Da(this,o,t,n,l,h,u,_,M,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let p=f[m],g=o[p.materialIndex],_=Math.max(p.start,d.start),M=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let y=_,T=M;y<T;y+=3){let E=y,A=y+1,v=y+2;s=Da(this,g,t,n,l,h,u,E,A,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){let _=p,M=p+1,y=p+2;s=Da(this,o,t,n,l,h,u,_,M,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Rg(i,t,e,n,s,r,o,a){let c;if(t.side===un?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===xn,a),c===null)return null;Na.copy(a),Na.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Na);return l<e.near||l>e.far?null:{distance:l,point:Na.clone(),object:i}}function Da(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Ca),i.getVertexPosition(c,Ia),i.getVertexPosition(l,Pa);let h=Rg(i,t,e,n,Ca,Ia,Pa,Jf);if(h){let u=new L;Li.getBarycoord(Jf,Ca,Ia,Pa,u),s&&(h.uv=Li.getInterpolatedAttribute(s,a,c,l,u,new Et)),r&&(h.uv1=Li.getInterpolatedAttribute(r,a,c,l,u,new Et)),o&&(h.normal=Li.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new L,materialIndex:0};Li.getNormal(Ca,Ia,Pa,f.normal),h.face=f,h.barycoord=u}return h}var no=new be,jf=new be,Qf=new be,Cg=new be,td=new Jt,Ua=new L,mh=new Rn,ed=new Jt,gh=new Ps,vo=class extends Ht{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Th,this.bindMatrix=new Jt,this.bindMatrixInverse=new Jt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new _n),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ua),this.boundingBox.expandByPoint(Ua)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ua),this.boundingSphere.expandByPoint(Ua)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mh.copy(this.boundingSphere),mh.applyMatrix4(s),t.ray.intersectsSphere(mh)!==!1&&(ed.copy(s).invert(),gh.copy(t.ray).applyMatrix4(ed),!(this.boundingBox!==null&&gh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,gh)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new be,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Th?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Zd?this.bindMatrixInverse.copy(this.bindMatrix).invert():zt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,s=this.geometry;jf.fromBufferAttribute(s.attributes.skinIndex,t),Qf.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(no.copy(e),e.set(0,0,0,0)):(no.set(...e,1),e.set(0,0,0)),no.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Qf.getComponent(r);if(o!==0){let a=jf.getComponent(r);td.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Cg.copy(no).applyMatrix4(td),o)}}return e.isVector4&&(e.w=no.w),e.applyMatrix4(this.bindMatrixInverse)}},wr=class extends Pe{constructor(){super(),this.isBone=!0,this.type="Bone"}},Rr=class extends en{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Ye,h=Ye,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},nd=new Jt,Ig=new Jt,Mo=class i{constructor(t=[],e=[]){this.uuid=qn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){zt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Jt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Jt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:Ig;nd.multiplyMatrices(a,e[r]),nd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Rr(e,t,t,kn,Hn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){let r=t.bones[n],o=e[r];o===void 0&&(zt("Skeleton: No bone found with UUID:",r),o=new wr),this.bones.push(o),this.boneInverses.push(new Jt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let o=e[s];t.bones.push(o.uuid);let a=n[s];t.boneInverses.push(a.toArray())}return t}},ns=class extends qe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},gr=new Jt,id=new Jt,Fa=[],sd=new _n,Pg=new Jt,io=new Ht,so=new Rn,cn=class extends Ht{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ns(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Pg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new _n),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gr),sd.copy(t.boundingBox).applyMatrix4(gr),this.boundingBox.union(sd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gr),so.copy(t.boundingSphere).applyMatrix4(gr),this.boundingSphere.union(so)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(io.geometry=this.geometry,io.material=this.material,io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),so.copy(this.boundingSphere),so.applyMatrix4(n),t.ray.intersectsSphere(so)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gr),id.multiplyMatrices(n,gr),io.matrixWorld=id,io.raycast(t,Fa);for(let o=0,a=Fa.length;o<a;o++){let c=Fa[o];c.instanceId=r,c.object=this,e.push(c)}Fa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ns(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rr(new Float32Array(s*this.count),s,this.count,Bc,Hn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xh=new L,Lg=new L,Ng=new ie,di=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=xh.subVectors(n,e).cross(Lg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(xh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ng.getNormalMatrix(t),s=this.coplanarPoint(xh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},gs=new Rn,Dg=new Et(.5,.5),Oa=new L,Cr=class{constructor(t=new di,e=new di,n=new di,s=new di,r=new di,o=new di){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ii,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],x=r[9],p=r[10],g=r[11],_=r[12],M=r[13],y=r[14],T=r[15];if(s[0].setComponents(l-o,d-h,g-m,T-_).normalize(),s[1].setComponents(l+o,d+h,g+m,T+_).normalize(),s[2].setComponents(l+a,d+u,g+x,T+M).normalize(),s[3].setComponents(l-a,d-u,g-x,T-M).normalize(),n)s[4].setComponents(c,f,p,y).normalize(),s[5].setComponents(l-c,d-f,g-p,T-y).normalize();else if(s[4].setComponents(l-c,d-f,g-p,T-y).normalize(),e===ii)s[5].setComponents(l+c,d+f,g+p,T+y).normalize();else if(e===Sr)s[5].setComponents(c,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(t){gs.center.set(0,0,0);let e=Dg.distanceTo(t.center);return gs.radius=.7071067811865476+e,gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Oa.x=s.normal.x>0?t.max.x:t.min.x,Oa.y=s.normal.y>0?t.max.y:t.min.y,Oa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Oa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var is=class extends yn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},cc=new L,lc=new L,rd=new Jt,ro=new Ps,Ba=new Rn,_h=new L,od=new L,Ls=class extends Pe{constructor(t=new ge,e=new is){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)cc.fromBufferAttribute(e,s-1),lc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=cc.distanceTo(lc);t.setAttribute("lineDistance",new jt(n,1))}else zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ba.copy(n.boundingSphere),Ba.applyMatrix4(s),Ba.radius+=r,t.ray.intersectsSphere(Ba)===!1)return;rd.copy(s).invert(),ro.copy(t.ray).applyMatrix4(rd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=d,p=m-1;x<p;x+=l){let g=h.getX(x),_=h.getX(x+1),M=za(this,t,ro,c,g,_,x);M&&e.push(M)}if(this.isLineLoop){let x=h.getX(m-1),p=h.getX(d),g=za(this,t,ro,c,x,p,m-1);g&&e.push(g)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=d,p=m-1;x<p;x+=l){let g=za(this,t,ro,c,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){let x=za(this,t,ro,c,m-1,d,m-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function za(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(cc.fromBufferAttribute(a,s),lc.fromBufferAttribute(a,r),e.distanceSqToSegment(cc,lc,_h,od)>n)return;_h.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(_h);if(!(l<t.near||l>t.far))return{distance:l,point:od.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var ad=new L,cd=new L,Ns=class extends Ls{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ad.fromBufferAttribute(e,s),cd.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ad.distanceTo(cd);t.setAttribute("lineDistance",new jt(n,1))}else zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},So=class extends Ls{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Ir=class extends yn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ld=new Jt,Ph=new Ps,Ha=new Rn,ka=new L,bo=class extends Pe{constructor(t=new ge,e=new Ir){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(s),Ha.radius+=r,t.ray.intersectsSphere(Ha)===!1)return;ld.copy(s).invert(),Ph.copy(t.ray).applyMatrix4(ld);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let m=f,x=d;m<x;m++){let p=l.getX(m);ka.fromBufferAttribute(u,p),hd(ka,p,c,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,x=d;m<x;m++)ka.fromBufferAttribute(u,m),hd(ka,m,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function hd(i,t,e,n,s,r,o){let a=Ph.distanceSqToPoint(i);if(a<e){let c=new L;Ph.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Eo=class extends en{constructor(t=[],e=as,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Le=class extends en{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ui=class extends en{constructor(t,e,n=ci,s,r,o,a=Ye,c=Ye,l,h=mi,u=1){if(h!==mi&&h!==cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Tr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},hc=class extends Ui{constructor(t,e=ci,n=as,s,r,o=Ye,a=Ye,c,l=mi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},To=class extends en{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},te=class i extends ge{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(u,2));function m(x,p,g,_,M,y,T,E,A,v,b){let R=y/A,I=T/v,P=y/2,B=T/2,V=E/2,D=A+1,O=v+1,U=0,W=0,J=new L;for(let ut=0;ut<O;ut++){let z=ut*I-B;for(let Y=0;Y<D;Y++){let rt=Y*R-P;J[x]=rt*_,J[p]=z*M,J[g]=V,l.push(J.x,J.y,J.z),J[x]=0,J[p]=0,J[g]=E>0?1:-1,h.push(J.x,J.y,J.z),u.push(Y/A),u.push(1-ut/v),U+=1}}for(let ut=0;ut<v;ut++)for(let z=0;z<A;z++){let Y=f+z+D*ut,rt=f+z+D*(ut+1),pt=f+(z+1)+D*(ut+1),mt=f+(z+1)+D*ut;c.push(Y,rt,mt),c.push(rt,pt,mt),W+=6}a.addGroup(d,W,b),d+=W,f+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Tn=class i extends ge{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,x=[],p=n/2,g=0;_(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(f,3)),this.setAttribute("uv",new jt(d,2));function _(){let y=new L,T=new L,E=0,A=(e-t)/n;for(let v=0;v<=r;v++){let b=[],R=v/r,I=R*(e-t)+t;for(let P=0;P<=s;P++){let B=P/s,V=B*c+a,D=Math.sin(V),O=Math.cos(V);T.x=I*D,T.y=-R*n+p,T.z=I*O,u.push(T.x,T.y,T.z),y.set(D,A,O).normalize(),f.push(y.x,y.y,y.z),d.push(B,1-R),b.push(m++)}x.push(b)}for(let v=0;v<s;v++)for(let b=0;b<r;b++){let R=x[b][v],I=x[b+1][v],P=x[b+1][v+1],B=x[b][v+1];(t>0||b!==0)&&(h.push(R,I,B),E+=3),(e>0||b!==r-1)&&(h.push(I,P,B),E+=3)}l.addGroup(g,E,0),g+=E}function M(y){let T=m,E=new Et,A=new L,v=0,b=y===!0?t:e,R=y===!0?1:-1;for(let P=1;P<=s;P++)u.push(0,p*R,0),f.push(0,R,0),d.push(.5,.5),m++;let I=m;for(let P=0;P<=s;P++){let V=P/s*c+a,D=Math.cos(V),O=Math.sin(V);A.x=b*O,A.y=p*R,A.z=b*D,u.push(A.x,A.y,A.z),f.push(0,R,0),E.x=D*.5+.5,E.y=O*.5*R+.5,d.push(E.x,E.y),m++}for(let P=0;P<s;P++){let B=T+P,V=I+P;y===!0?h.push(V,V+1,B):h.push(V+1,V,B),v+=3}l.addGroup(g,v,y===!0?1:2),g+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Pr=class i extends Tn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Et:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new L,s=[],r=[],o=[],a=new L,c=new Jt;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(fe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(fe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Lr=class extends zn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Et){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},uc=class extends Lr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function au(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var ud=new L,fd=new L,yh=new au,vh=new au,Mh=new au,fc=class extends zn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(fd.subVectors(s[0],s[1]).add(s[0]),l=fd);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ud.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ud),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),yh.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,m,x,p),vh.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,m,x,p),Mh.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,m,x,p)}else this.curveType==="catmullrom"&&(yh.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),vh.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Mh.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(yh.calc(c),vh.calc(c),Mh.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function dd(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Ug(i,t){let e=1-i;return e*e*t}function Fg(i,t){return 2*(1-i)*i*t}function Og(i,t){return i*i*t}function lo(i,t,e,n){return Ug(i,t)+Fg(i,e)+Og(i,n)}function Bg(i,t){let e=1-i;return e*e*e*t}function zg(i,t){let e=1-i;return 3*e*e*i*t}function Hg(i,t){return 3*(1-i)*i*i*t}function kg(i,t){return i*i*i*t}function ho(i,t,e,n,s){return Bg(i,t)+zg(i,e)+Hg(i,n)+kg(i,s)}var Ao=class extends zn{constructor(t=new Et,e=new Et,n=new Et,s=new Et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Et){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ho(t,s.x,r.x,o.x,a.x),ho(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},dc=class extends zn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ho(t,s.x,r.x,o.x,a.x),ho(t,s.y,r.y,o.y,a.y),ho(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},wo=class extends zn{constructor(t=new Et,e=new Et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Et){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pc=class extends zn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ro=class extends zn{constructor(t=new Et,e=new Et,n=new Et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Et){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(lo(t,s.x,r.x,o.x),lo(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mc=class extends zn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(lo(t,s.x,r.x,o.x),lo(t,s.y,r.y,o.y),lo(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Co=class extends zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Et){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(dd(a,c.x,l.x,h.x,u.x),dd(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Et().fromArray(s))}return this}},Lh=Object.freeze({__proto__:null,ArcCurve:uc,CatmullRomCurve3:fc,CubicBezierCurve:Ao,CubicBezierCurve3:dc,EllipseCurve:Lr,LineCurve:wo,LineCurve3:pc,QuadraticBezierCurve:Ro,QuadraticBezierCurve3:mc,SplineCurve:Co}),gc=class extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Lh[s.type]().fromJSON(s))}return this}},Io=class extends gc{constructor(t){super(),this.type="Path",this.currentPoint=new Et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new wo(this.currentPoint.clone(),new Et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ro(this.currentPoint.clone(),new Et(t,e),new Et(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Ao(this.currentPoint.clone(),new Et(t,e),new Et(n,s),new Et(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Co(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Lr(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Nr=class extends Io{constructor(t){super(t),this.uuid=qn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Io().fromJSON(s))}return this}};function Gg(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=hp(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Yg(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let h=a,u=c;for(let f=e;f<s;f+=e){let d=i[f],m=i[f+1];d<a&&(a=d),m<c&&(c=m),d>h&&(h=d),m>u&&(u=m)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return Po(r,o,e,a,c,l,0),o}function hp(i,t,e,n,s){let r;if(s===sx(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=pd(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=pd(o/n|0,i[o],i[o+1],r);return r&&Dr(r,r.next)&&(No(r),r=r.next),r}function Ds(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Dr(e,e.next)||He(e.prev,e,e.next)===0)){if(No(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Po(i,t,e,n,s,r,o){if(!i)return;!o&&r&&jg(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Wg(i,n,s,r):Vg(i)){t.push(c.i,i.i,l.i),No(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Xg(Ds(i),t),Po(i,t,e,n,s,r,2)):o===2&&qg(i,t,e,n,s,r):Po(Ds(i),t,e,n,s,r,1);break}}}function Vg(i){let t=i.prev,e=i,n=i.next;if(He(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),f=Math.max(s,r,o),d=Math.max(a,c,l),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&oo(s,a,r,c,o,l,m.x,m.y)&&He(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Wg(i,t,e,n){let s=i.prev,r=i,o=i.next;if(He(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,c,l),m=Math.min(h,u,f),x=Math.max(a,c,l),p=Math.max(h,u,f),g=Nh(d,m,t,e,n),_=Nh(x,p,t,e,n),M=i.prevZ,y=i.nextZ;for(;M&&M.z>=g&&y&&y.z<=_;){if(M.x>=d&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&oo(a,h,c,u,l,f,M.x,M.y)&&He(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=d&&y.x<=x&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&oo(a,h,c,u,l,f,y.x,y.y)&&He(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=g;){if(M.x>=d&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&oo(a,h,c,u,l,f,M.x,M.y)&&He(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=_;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&oo(a,h,c,u,l,f,y.x,y.y)&&He(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Xg(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Dr(n,s)&&fp(n,e,e.next,s)&&Lo(n,s)&&Lo(s,n)&&(t.push(n.i,e.i,s.i),No(e),No(e.next),e=i=s),e=e.next}while(e!==i);return Ds(e)}function qg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ex(o,a)){let c=dp(o,a);o=Ds(o,o.next),c=Ds(c,c.next),Po(o,t,e,n,s,r,0),Po(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Yg(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=hp(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(tx(l))}s.sort(Zg);for(let r=0;r<s.length;r++)e=Kg(s[r],e);return e}function Zg(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Kg(i,t){let e=$g(i,t);if(!e)return t;let n=dp(e,i);return Ds(n,n.next),Ds(e,e.next)}function $g(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Dr(i,e))return e;do{if(Dr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&up(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);Lo(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Jg(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Jg(i,t){return He(i.prev,i,t.prev)<0&&He(t.next,i,i.next)<0}function jg(i,t,e,n){let s=i;do s.z===0&&(s.z=Nh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Qg(s)}function Qg(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Nh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function tx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function up(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function oo(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&up(i,t,e,n,s,r,o,a)}function ex(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!nx(i,t)&&(Lo(i,t)&&Lo(t,i)&&ix(i,t)&&(He(i.prev,i,t.prev)||He(i,t.prev,t))||Dr(i,t)&&He(i.prev,i,i.next)>0&&He(t.prev,t,t.next)>0)}function He(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Dr(i,t){return i.x===t.x&&i.y===t.y}function fp(i,t,e,n){let s=Va(He(i,t,e)),r=Va(He(i,t,n)),o=Va(He(e,n,i)),a=Va(He(e,n,t));return!!(s!==r&&o!==a||s===0&&Ga(i,e,t)||r===0&&Ga(i,n,t)||o===0&&Ga(e,i,n)||a===0&&Ga(e,t,n))}function Ga(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Va(i){return i>0?1:i<0?-1:0}function nx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&fp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Lo(i,t){return He(i.prev,i,i.next)<0?He(i,t,i.next)>=0&&He(i,i.prev,t)>=0:He(i,t,i.prev)<0||He(i,i.next,t)<0}function ix(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function dp(i,t){let e=Dh(i.i,i.x,i.y),n=Dh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function pd(i,t,e,n){let s=Dh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function No(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Dh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function sx(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Uh=class{static triangulate(t,e,n=2){return Gg(t,e,n)}},bs=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];md(t),gd(n,t);let o=t.length;e.forEach(md);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,gd(n,e[c]);let a=Uh.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function md(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function gd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Do=class i extends ge{constructor(t=new Nr([new Et(.5,.5),new Et(-.5,.5),new Et(-.5,-.5),new Et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new jt(s,3)),this.setAttribute("uv",new jt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:rx,M,y=!1,T,E,A,v;if(g){M=g.getSpacedPoints(h),y=!0,f=!1;let tt=g.isCatmullRomCurve3?g.closed:!1;T=g.computeFrenetFrames(h,tt),E=new L,A=new L,v=new L}f||(p=0,d=0,m=0,x=0);let b=a.extractPoints(l),R=b.shape,I=b.holes;if(!bs.isClockWise(R)){R=R.reverse();for(let tt=0,lt=I.length;tt<lt;tt++){let et=I[tt];bs.isClockWise(et)&&(I[tt]=et.reverse())}}function B(tt){let et=10000000000000001e-36,ft=tt[0];for(let at=1;at<=tt.length;at++){let yt=at%tt.length,xt=tt[yt],Gt=xt.x-ft.x,Xt=xt.y-ft.y,N=Gt*Gt+Xt*Xt,Ft=Math.max(Math.abs(xt.x),Math.abs(xt.y),Math.abs(ft.x),Math.abs(ft.y)),Zt=et*Ft*Ft;if(N<=Zt){tt.splice(yt,1),at--;continue}ft=xt}}B(R),I.forEach(B);let V=I.length,D=R;for(let tt=0;tt<V;tt++){let lt=I[tt];R=R.concat(lt)}function O(tt,lt,et){return lt||Qt("ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(lt,et)}let U=R.length;function W(tt,lt,et){let ft,at,yt,xt=tt.x-lt.x,Gt=tt.y-lt.y,Xt=et.x-tt.x,N=et.y-tt.y,Ft=xt*xt+Gt*Gt,Zt=xt*N-Gt*Xt;if(Math.abs(Zt)>Number.EPSILON){let C=Math.sqrt(Ft),S=Math.sqrt(Xt*Xt+N*N),H=lt.x-Gt/C,k=lt.y+xt/C,X=et.x-N/S,ct=et.y+Xt/S,dt=((X-H)*N-(ct-k)*Xt)/(xt*N-Gt*Xt);ft=H+xt*dt-tt.x,at=k+Gt*dt-tt.y;let $=ft*ft+at*at;if($<=2)return new Et(ft,at);yt=Math.sqrt($/2)}else{let C=!1;xt>Number.EPSILON?Xt>Number.EPSILON&&(C=!0):xt<-Number.EPSILON?Xt<-Number.EPSILON&&(C=!0):Math.sign(Gt)===Math.sign(N)&&(C=!0),C?(ft=-Gt,at=xt,yt=Math.sqrt(Ft)):(ft=xt,at=Gt,yt=Math.sqrt(Ft/2))}return new Et(ft/yt,at/yt)}let J=[];for(let tt=0,lt=D.length,et=lt-1,ft=tt+1;tt<lt;tt++,et++,ft++)et===lt&&(et=0),ft===lt&&(ft=0),J[tt]=W(D[tt],D[et],D[ft]);let ut=[],z,Y=J.concat();for(let tt=0,lt=V;tt<lt;tt++){let et=I[tt];z=[];for(let ft=0,at=et.length,yt=at-1,xt=ft+1;ft<at;ft++,yt++,xt++)yt===at&&(yt=0),xt===at&&(xt=0),z[ft]=W(et[ft],et[yt],et[xt]);ut.push(z),Y=Y.concat(z)}let rt;if(p===0)rt=bs.triangulateShape(D,I);else{let tt=[],lt=[];for(let et=0;et<p;et++){let ft=et/p,at=d*Math.cos(ft*Math.PI/2),yt=m*Math.sin(ft*Math.PI/2)+x;for(let xt=0,Gt=D.length;xt<Gt;xt++){let Xt=O(D[xt],J[xt],yt);Mt(Xt.x,Xt.y,-at),ft===0&&tt.push(Xt)}for(let xt=0,Gt=V;xt<Gt;xt++){let Xt=I[xt];z=ut[xt];let N=[];for(let Ft=0,Zt=Xt.length;Ft<Zt;Ft++){let C=O(Xt[Ft],z[Ft],yt);Mt(C.x,C.y,-at),ft===0&&N.push(C)}ft===0&&lt.push(N)}}rt=bs.triangulateShape(tt,lt)}let pt=rt.length,mt=m+x;for(let tt=0;tt<U;tt++){let lt=f?O(R[tt],Y[tt],mt):R[tt];y?(A.copy(T.normals[0]).multiplyScalar(lt.x),E.copy(T.binormals[0]).multiplyScalar(lt.y),v.copy(M[0]).add(A).add(E),Mt(v.x,v.y,v.z)):Mt(lt.x,lt.y,0)}for(let tt=1;tt<=h;tt++)for(let lt=0;lt<U;lt++){let et=f?O(R[lt],Y[lt],mt):R[lt];y?(A.copy(T.normals[tt]).multiplyScalar(et.x),E.copy(T.binormals[tt]).multiplyScalar(et.y),v.copy(M[tt]).add(A).add(E),Mt(v.x,v.y,v.z)):Mt(et.x,et.y,u/h*tt)}for(let tt=p-1;tt>=0;tt--){let lt=tt/p,et=d*Math.cos(lt*Math.PI/2),ft=m*Math.sin(lt*Math.PI/2)+x;for(let at=0,yt=D.length;at<yt;at++){let xt=O(D[at],J[at],ft);Mt(xt.x,xt.y,u+et)}for(let at=0,yt=I.length;at<yt;at++){let xt=I[at];z=ut[at];for(let Gt=0,Xt=xt.length;Gt<Xt;Gt++){let N=O(xt[Gt],z[Gt],ft);y?Mt(N.x,N.y+M[h-1].y,M[h-1].x+et):Mt(N.x,N.y,u+et)}}}q(),ot();function q(){let tt=s.length/3;if(f){let lt=0,et=U*lt;for(let ft=0;ft<pt;ft++){let at=rt[ft];Tt(at[2]+et,at[1]+et,at[0]+et)}lt=h+p*2,et=U*lt;for(let ft=0;ft<pt;ft++){let at=rt[ft];Tt(at[0]+et,at[1]+et,at[2]+et)}}else{for(let lt=0;lt<pt;lt++){let et=rt[lt];Tt(et[2],et[1],et[0])}for(let lt=0;lt<pt;lt++){let et=rt[lt];Tt(et[0]+U*h,et[1]+U*h,et[2]+U*h)}}n.addGroup(tt,s.length/3-tt,0)}function ot(){let tt=s.length/3,lt=0;it(D,lt),lt+=D.length;for(let et=0,ft=I.length;et<ft;et++){let at=I[et];it(at,lt),lt+=at.length}n.addGroup(tt,s.length/3-tt,1)}function it(tt,lt){let et=tt.length;for(;--et>=0;){let ft=et,at=et-1;at<0&&(at=tt.length-1);for(let yt=0,xt=h+p*2;yt<xt;yt++){let Gt=U*yt,Xt=U*(yt+1),N=lt+ft+Gt,Ft=lt+at+Gt,Zt=lt+at+Xt,C=lt+ft+Xt;St(N,Ft,Zt,C)}}}function Mt(tt,lt,et){c.push(tt),c.push(lt),c.push(et)}function Tt(tt,lt,et){Wt(tt),Wt(lt),Wt(et);let ft=s.length/3,at=_.generateTopUV(n,s,ft-3,ft-2,ft-1);Ut(at[0]),Ut(at[1]),Ut(at[2])}function St(tt,lt,et,ft){Wt(tt),Wt(lt),Wt(ft),Wt(lt),Wt(et),Wt(ft);let at=s.length/3,yt=_.generateSideWallUV(n,s,at-6,at-3,at-2,at-1);Ut(yt[0]),Ut(yt[1]),Ut(yt[3]),Ut(yt[1]),Ut(yt[2]),Ut(yt[3])}function Wt(tt){s.push(c[tt*3+0]),s.push(c[tt*3+1]),s.push(c[tt*3+2])}function Ut(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ox(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Lh[s.type]().fromJSON(s)),new i(n,t.options)}},rx={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new Et(r,o),new Et(a,c),new Et(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],m=t[s*3+2],x=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Et(o,1-c),new Et(l,1-u),new Et(f,1-m),new Et(x,1-g)]:[new Et(a,1-c),new Et(h,1-u),new Et(d,1-m),new Et(p,1-g)]}};function ox(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ue=class i extends ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],m=[],x=[],p=[];for(let g=0;g<h;g++){let _=g*f-o;for(let M=0;M<l;M++){let y=M*u-r;m.push(y,-_,0),x.push(0,0,1),p.push(M/a),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let _=0;_<a;_++){let M=_+l*g,y=_+l*(g+1),T=_+1+l*(g+1),E=_+1+l*g;d.push(M,y,E),d.push(y,T,E)}this.setIndex(d),this.setAttribute("position",new jt(m,3)),this.setAttribute("normal",new jt(x,3)),this.setAttribute("uv",new jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Fi=class i extends ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new L,f=new L,d=[],m=[],x=[],p=[];for(let g=0;g<=n;g++){let _=[],M=g/n,y=o+M*a,T=t*Math.cos(y),E=Math.sqrt(t*t-T*T),A=0;g===0&&o===0?A=.5/e:g===n&&c===Math.PI&&(A=-.5/e);for(let v=0;v<=e;v++){let b=v/e,R=s+b*r;u.x=-E*Math.cos(R),u.y=T,u.z=E*Math.sin(R),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),p.push(b+A,1-M),_.push(l++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<e;_++){let M=h[g][_+1],y=h[g][_],T=h[g+1][_],E=h[g+1][_+1];(g!==0||o>0)&&d.push(M,y,E),(g!==n-1||c<Math.PI)&&d.push(y,T,E)}this.setIndex(d),this.setAttribute("position",new jt(m,3)),this.setAttribute("normal",new jt(x,3)),this.setAttribute("uv",new jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function ks(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(xd(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(xd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function vn(i){let t={};for(let e=0;e<i.length;e++){let n=ks(i[e]);for(let s in n)t[s]=n[s]}return t}function xd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ax(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function cu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}var pp={clone:ks,merge:vn},cx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,An=class extends yn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cx,this.fragmentShader=lx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ks(t.uniforms),this.uniformsGroups=ax(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ht().setHex(s.value);break;case"v2":this.uniforms[n].value=new Et().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new be().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ie().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Jt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},xc=class extends An{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Us=class extends yn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ia,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ve,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Cn=class extends Us{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Yt=class extends yn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ia,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ve,this.combine=Pc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},_c=class extends yn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},yc=class extends yn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Wa(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function hx(i){function t(s,r){return i[s]-i[r]}let e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function _d(i,t,e){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=e[r]*t;for(let c=0;c!==t;++c)s[o++]=i[a+c]}return s}function ux(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}var _i=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},vc=class extends _i{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wh,endingEnd:wh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rh:r=t,a=2*e-n;break;case Ch:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Rh:o=t,c=2*n-e;break;case Ch:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(s-e),x=m*m,p=x*m,g=-f*p+2*f*x-f*m,_=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*m+1,M=(-1-d)*p+(1.5+d)*x+.5*m,y=d*p-d*x;for(let T=0;T!==a;++T)r[T]=g*o[h+T]+_*o[l+T]+M*o[c+T]+y*o[u+T];return r}},Mc=class extends _i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Sc=class extends _i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},bc=class extends _i{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-e)/(s-e),x=1-m;for(let p=0;p!==a;++p)r[p]=o[l+p]*x+o[c+p]*m;return r}let f=a*2,d=t-1;for(let m=0;m!==a;++m){let x=o[l+m],p=o[c+m],g=d*f+m*2,_=u[g],M=u[g+1],y=t*f+m*2,T=h[y],E=h[y+1],A=(n-e)/(s-e),v,b,R,I,P;for(let B=0;B<8;B++){v=A*A,b=v*A,R=1-A,I=R*R,P=I*R;let D=P*e+3*I*A*_+3*R*v*T+b*s-n;if(Math.abs(D)<1e-10)break;let O=3*I*(_-e)+6*R*A*(T-_)+3*v*(s-T);if(Math.abs(O)<1e-10)break;A=A-D/O,A=Math.max(0,Math.min(1,A))}r[m]=P*x+3*I*A*M+3*R*v*E+b*p}return r}},In=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Wa(e,this.TimeBufferType),this.values=Wa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Wa(t.times,Array),values:Wa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Sc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new vc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new bc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ws:e=this.InterpolantFactoryMethodDiscrete;break;case Rs:e=this.InterpolantFactoryMethodLinear;break;case Za:e=this.InterpolantFactoryMethodSmooth;break;case Ah:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ws;case this.InterpolantFactoryMethodLinear:return Rs;case this.InterpolantFactoryMethodSmooth:return Za;case this.InterpolantFactoryMethodBezier:return Ah}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Qt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Qt("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){Qt("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&J0(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Qt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Za,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[f+m]||x!==e[d+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};In.prototype.ValueTypeName="";In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=Rs;var Oi=class extends In{constructor(t,e,n){super(t,e,n)}};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=ws;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Uo=class extends In{constructor(t,e,n,s){super(t,e,n,s)}};Uo.prototype.ValueTypeName="color";var Bi=class extends In{constructor(t,e,n,s){super(t,e,n,s)}};Bi.prototype.ValueTypeName="number";var Ec=class extends _i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)Ie.slerpFlat(r,0,o,l-a,o,l,c);return r}},zi=class extends In{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ec(this.times,this.values,this.getValueSize(),t)}};zi.prototype.ValueTypeName="quaternion";zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends In{constructor(t,e,n){super(t,e,n)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=ws;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends In{constructor(t,e,n,s){super(t,e,n,s)}};ss.prototype.ValueTypeName="vector";var Fo=class{constructor(t="",e=-1,n=[],s=Kd){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=qn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(dx(n[o]).scale(s));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){let e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,o=n.length;r!==o;++r)e.push(In.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){let r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=hx(c);c=_d(c,1,h),l=_d(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Bi(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){let l=t[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}resetDuration(){let t=this.tracks,e=0;for(let n=0,s=t.length;n!==s;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};function fx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Bi;case"vector":case"vector2":case"vector3":case"vector4":return ss;case"color":return Uo;case"quaternion":return zi;case"bool":case"boolean":return Oi;case"string":return Hi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function dx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=fx(i.type);if(i.times===void 0){let e=[],n=[];ux(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}var pi={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(yd(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!yd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function yd(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Tc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],m=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},mp=new Tc,si=class{constructor(t){this.manager=t!==void 0?t:mp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};si.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pi={},Fh=class extends Error{constructor(t,e){super(t),this.response=e}},Fs=class extends si{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=pi.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(Pi[t]!==void 0){Pi[t].push({onLoad:e,onProgress:n,onError:s});return}Pi[t]=[],Pi[t].push({onLoad:e,onProgress:n,onError:s});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&zt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Pi[t],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0,x=0,p=new ReadableStream({start(g){_();function _(){u.read().then(({done:M,value:y})=>{if(M)g.close();else{x+=y.byteLength;let T=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:d});for(let E=0,A=h.length;E<A;E++){let v=h[E];v.onProgress&&v.onProgress(T)}g.enqueue(y),_()}},M=>{g.error(M)})}}});return new Response(p)}else throw new Fh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{pi.add(`file:${t}`,l);let h=Pi[t];delete Pi[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=Pi[t];if(h===void 0)throw this.manager.itemError(t),l;delete Pi[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var xr=new WeakMap,Ac=class extends si{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=pi.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=xr.get(o);u===void 0&&(u=[],xr.set(o,u)),u.push({onLoad:e,onError:s})}return o}let a=br("img");function c(){h(),e&&e(this);let u=xr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}xr.delete(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),pi.remove(`image:${t}`);let f=xr.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(u)}xr.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),pi.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}};var ri=class extends si{constructor(t){super(t)}load(t,e,n,s){let r=new en,o=new Ac(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},rs=class extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Oo=class extends rs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Sh=new Jt,vd=new L,Md=new L,Bo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cr,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;vd.setFromMatrixPosition(t.matrixWorld),e.position.copy(vd),Md.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Md),e.updateMatrixWorld(),Sh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sh,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Sr||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Xa=new L,qa=new Ie,fi=new L,zo=class extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Xa,qa,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,qa,fi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Xa,qa,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,qa,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qi=new L,Sd=new Et,bd=new Et,Je=class extends zo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z)}getViewSize(t,e){return this.getViewBounds(t,Sd,bd),e.subVectors(bd,Sd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ao*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Oh=class extends Bo{constructor(){super(new Je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Cs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Ho=class extends rs{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Oh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},Bh=class extends Bo{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0}},ki=class extends rs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Bh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},os=class extends zo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},zh=class extends Bo{constructor(){super(new os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Os=class extends rs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new zh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},ko=class extends rs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Gi=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var bh=new WeakMap,Go=class extends si{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&zt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&zt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=pi.get(`image-bitmap:${t}`);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{bh.has(o)===!0?(s&&s(bh.get(o)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(l),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){pi.add(`image-bitmap:${t}`,l),e&&e(l),r.manager.itemEnd(t)}).catch(function(l){s&&s(l),bh.set(c,l),pi.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});pi.add(`image-bitmap:${t}`,c),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Ya,Vo=class{static getContext(){return Ya===void 0&&(Ya=new(window.AudioContext||window.webkitAudioContext)),Ya}static setContext(t){Ya=t}},Wo=class extends si{constructor(t){super(t)}load(t,e,n,s){let r=this,o=new Fs(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(c){try{let l=c.slice(0),h=Vo.getContext(),u=t+"#decode";r.manager.itemStart(u),h.decodeAudioData(l,function(f){e(f),r.manager.itemEnd(u)}).catch(function(f){a(f),r.manager.itemEnd(u)})}catch(l){a(l)}},n,s);function a(c){s?s(c):Qt(c),r.manager.itemError(t)}}};var _r=-90,yr=1,wc=class extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(_r,yr,t,e);s.layers=this.layers,this.add(s);let r=new Je(_r,yr,t,e);r.layers=this.layers,this.add(r);let o=new Je(_r,yr,t,e);o.layers=this.layers,this.add(o);let a=new Je(_r,yr,t,e);a.layers=this.layers,this.add(a);let c=new Je(_r,yr,t,e);c.layers=this.layers,this.add(c);let l=new Je(_r,yr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Rc=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Cc=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=px.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function px(){this._document.hidden===!1&&this.reset()}var xs=new L,Eh=new Ie,mx=new L,_s=new L,ys=new L,Xo=class extends Pe{constructor(){super(),this.type="AudioListener",this.context=Vo.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new Cc}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();let e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(xs,Eh,mx),_s.set(0,0,-1).applyQuaternion(Eh),ys.set(0,1,0).applyQuaternion(Eh),e.positionX){let n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(xs.x,n),e.positionY.linearRampToValueAtTime(xs.y,n),e.positionZ.linearRampToValueAtTime(xs.z,n),e.forwardX.linearRampToValueAtTime(_s.x,n),e.forwardY.linearRampToValueAtTime(_s.y,n),e.forwardZ.linearRampToValueAtTime(_s.z,n),e.upX.linearRampToValueAtTime(ys.x,n),e.upY.linearRampToValueAtTime(ys.y,n),e.upZ.linearRampToValueAtTime(ys.z,n)}else e.setPosition(xs.x,xs.y,xs.z),e.setOrientation(_s.x,_s.y,_s.z,ys.x,ys.y,ys.z)}},Ic=class extends Pe{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){zt("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){zt("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;let e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){zt("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){zt("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){zt("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(zt("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){zt("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(zt("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}},vs=new L,Ed=new Ie,gx=new L,Ms=new L,qo=class extends Ic{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(vs,Ed,gx),Ms.set(0,0,1).applyQuaternion(Ed);let e=this.panner;if(e.positionX){let n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(vs.x,n),e.positionY.linearRampToValueAtTime(vs.y,n),e.positionZ.linearRampToValueAtTime(vs.z,n),e.orientationX.linearRampToValueAtTime(Ms.x,n),e.orientationY.linearRampToValueAtTime(Ms.y,n),e.orientationZ.linearRampToValueAtTime(Ms.z,n)}else e.setPosition(vs.x,vs.y,vs.z),e.setOrientation(Ms.x,Ms.y,Ms.z)}};var lu="\\[\\]\\.:\\/",xx=new RegExp("["+lu+"]","g"),hu="[^"+lu+"]",_x="[^"+lu.replace("\\.","")+"]",yx=/((?:WC+[\/:])*)/.source.replace("WC",hu),vx=/(WCOD+)?/.source.replace("WCOD",_x),Mx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hu),Sx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hu),bx=new RegExp("^"+yx+vx+Mx+Sx+"$"),Ex=["material","materials","bones","map"],Hh=class{constructor(t,e,n){let s=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(xx,"")}static parseTrackName(t){let e=bx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ex.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;Qt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=Hh;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var k1=new Float32Array(1);var kh=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function uu(i,t,e,n){let s=Tx(n);switch(e){case nu:return i*t;case Bc:return i*t/s.components*s.byteLength;case zc:return i*t/s.components*s.byteLength;case ls:return i*t*2/s.components*s.byteLength;case Hc:return i*t*2/s.components*s.byteLength;case iu:return i*t*3/s.components*s.byteLength;case kn:return i*t*4/s.components*s.byteLength;case kc:return i*t*4/s.components*s.byteLength;case $o:case Jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jo:case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vc:case Xc:return Math.max(i,16)*Math.max(t,8)/4;case Gc:case Wc:return Math.max(i,8)*Math.max(t,8)/2;case qc:case Yc:case Kc:case $c:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zc:case ta:case Jc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case tl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case el:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case nl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case il:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case rl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ol:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case al:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case hl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ul:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fl:case dl:case pl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ml:case gl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ea:case xl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tx(i){switch(i){case Pn:case jh:return{byteLength:1,components:1};case Or:case Qh:case vi:return{byteLength:2,components:1};case Fc:case Oc:return{byteLength:2,components:4};case ci:case Uc:case Hn:return{byteLength:4,components:1};case tu:case eu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Bp(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function wx(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let x=u[d];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Rx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cx=`#ifdef USE_ALPHAHASH
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
#endif`,Ix=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Px=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dx=`#ifdef USE_AOMAP
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
#endif`,Ux=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fx=`#ifdef USE_BATCHING
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
#endif`,Ox=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kx=`#ifdef USE_IRIDESCENCE
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
#endif`,Gx=`#ifdef USE_BUMPMAP
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
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Kx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$x=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Jx=`#define PI 3.141592653589793
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
} // validated`,jx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qx=`vec3 transformedNormal = objectNormal;
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
#endif`,t_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,e_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,s_="gl_FragColor = linearToOutputTexel( gl_FragColor );",r_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,o_=`#ifdef USE_ENVMAP
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
#endif`,a_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,c_=`#ifdef USE_ENVMAP
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
#endif`,l_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h_=`#ifdef USE_ENVMAP
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
#endif`,u_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m_=`#ifdef USE_GRADIENTMAP
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
}`,g_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,__=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,v_=`#ifdef USE_ENVMAP
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
#endif`,M_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,b_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,T_=`PhysicalMaterial material;
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
#endif`,A_=`uniform sampler2D dfgLUT;
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
}`,w_=`
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
#endif`,R_=`#if defined( RE_IndirectDiffuse )
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
#endif`,C_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,P_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,U_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,B_=`#if defined( USE_POINTS_UV )
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
#endif`,z_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,V_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W_=`#ifdef USE_MORPHTARGETS
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
#endif`,X_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Y_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,J_=`#ifdef USE_NORMALMAP
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
#endif`,j_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Q_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ty=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ey=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ny=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ry=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ay=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ly=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dy=`float getShadowMask() {
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
}`,py=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,my=`#ifdef USE_SKINNING
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
#endif`,gy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xy=`#ifdef USE_SKINNING
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
#endif`,_y=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,My=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sy=`#ifdef USE_TRANSMISSION
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
#endif`,by=`#ifdef USE_TRANSMISSION
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
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ry=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cy=`uniform sampler2D t2D;
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
}`,Iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Py=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ny=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dy=`#include <common>
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
}`,Uy=`#if DEPTH_PACKING == 3200
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
}`,Fy=`#define DISTANCE
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
}`,Oy=`#define DISTANCE
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
}`,By=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hy=`uniform float scale;
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
}`,ky=`uniform vec3 diffuse;
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
}`,Gy=`#include <common>
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
}`,Vy=`uniform vec3 diffuse;
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
}`,Wy=`#define LAMBERT
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
}`,Xy=`#define LAMBERT
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
}`,qy=`#define MATCAP
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
}`,Yy=`#define MATCAP
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
}`,Zy=`#define NORMAL
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
}`,Ky=`#define NORMAL
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
}`,$y=`#define PHONG
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
}`,Jy=`#define PHONG
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
}`,jy=`#define STANDARD
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
}`,Qy=`#define STANDARD
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
}`,tv=`#define TOON
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
}`,ev=`#define TOON
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
}`,nv=`uniform float size;
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
}`,iv=`uniform vec3 diffuse;
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
}`,sv=`#include <common>
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
}`,rv=`uniform vec3 color;
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
}`,ov=`uniform float rotation;
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
}`,av=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:Rx,alphahash_pars_fragment:Cx,alphamap_fragment:Ix,alphamap_pars_fragment:Px,alphatest_fragment:Lx,alphatest_pars_fragment:Nx,aomap_fragment:Dx,aomap_pars_fragment:Ux,batching_pars_vertex:Fx,batching_vertex:Ox,begin_vertex:Bx,beginnormal_vertex:zx,bsdfs:Hx,iridescence_fragment:kx,bumpmap_pars_fragment:Gx,clipping_planes_fragment:Vx,clipping_planes_pars_fragment:Wx,clipping_planes_pars_vertex:Xx,clipping_planes_vertex:qx,color_fragment:Yx,color_pars_fragment:Zx,color_pars_vertex:Kx,color_vertex:$x,common:Jx,cube_uv_reflection_fragment:jx,defaultnormal_vertex:Qx,displacementmap_pars_vertex:t_,displacementmap_vertex:e_,emissivemap_fragment:n_,emissivemap_pars_fragment:i_,colorspace_fragment:s_,colorspace_pars_fragment:r_,envmap_fragment:o_,envmap_common_pars_fragment:a_,envmap_pars_fragment:c_,envmap_pars_vertex:l_,envmap_physical_pars_fragment:v_,envmap_vertex:h_,fog_vertex:u_,fog_pars_vertex:f_,fog_fragment:d_,fog_pars_fragment:p_,gradientmap_pars_fragment:m_,lightmap_pars_fragment:g_,lights_lambert_fragment:x_,lights_lambert_pars_fragment:__,lights_pars_begin:y_,lights_toon_fragment:M_,lights_toon_pars_fragment:S_,lights_phong_fragment:b_,lights_phong_pars_fragment:E_,lights_physical_fragment:T_,lights_physical_pars_fragment:A_,lights_fragment_begin:w_,lights_fragment_maps:R_,lights_fragment_end:C_,lightprobes_pars_fragment:I_,logdepthbuf_fragment:P_,logdepthbuf_pars_fragment:L_,logdepthbuf_pars_vertex:N_,logdepthbuf_vertex:D_,map_fragment:U_,map_pars_fragment:F_,map_particle_fragment:O_,map_particle_pars_fragment:B_,metalnessmap_fragment:z_,metalnessmap_pars_fragment:H_,morphinstance_vertex:k_,morphcolor_vertex:G_,morphnormal_vertex:V_,morphtarget_pars_vertex:W_,morphtarget_vertex:X_,normal_fragment_begin:q_,normal_fragment_maps:Y_,normal_pars_fragment:Z_,normal_pars_vertex:K_,normal_vertex:$_,normalmap_pars_fragment:J_,clearcoat_normal_fragment_begin:j_,clearcoat_normal_fragment_maps:Q_,clearcoat_pars_fragment:ty,iridescence_pars_fragment:ey,opaque_fragment:ny,packing:iy,premultiplied_alpha_fragment:sy,project_vertex:ry,dithering_fragment:oy,dithering_pars_fragment:ay,roughnessmap_fragment:cy,roughnessmap_pars_fragment:ly,shadowmap_pars_fragment:hy,shadowmap_pars_vertex:uy,shadowmap_vertex:fy,shadowmask_pars_fragment:dy,skinbase_vertex:py,skinning_pars_vertex:my,skinning_vertex:gy,skinnormal_vertex:xy,specularmap_fragment:_y,specularmap_pars_fragment:yy,tonemapping_fragment:vy,tonemapping_pars_fragment:My,transmission_fragment:Sy,transmission_pars_fragment:by,uv_pars_fragment:Ey,uv_pars_vertex:Ty,uv_vertex:Ay,worldpos_vertex:wy,background_vert:Ry,background_frag:Cy,backgroundCube_vert:Iy,backgroundCube_frag:Py,cube_vert:Ly,cube_frag:Ny,depth_vert:Dy,depth_frag:Uy,distance_vert:Fy,distance_frag:Oy,equirect_vert:By,equirect_frag:zy,linedashed_vert:Hy,linedashed_frag:ky,meshbasic_vert:Gy,meshbasic_frag:Vy,meshlambert_vert:Wy,meshlambert_frag:Xy,meshmatcap_vert:qy,meshmatcap_frag:Yy,meshnormal_vert:Zy,meshnormal_frag:Ky,meshphong_vert:$y,meshphong_frag:Jy,meshphysical_vert:jy,meshphysical_frag:Qy,meshtoon_vert:tv,meshtoon_frag:ev,points_vert:nv,points_frag:iv,shadow_vert:sv,shadow_frag:rv,sprite_vert:ov,sprite_frag:av},Lt={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},Si={basic:{uniforms:vn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:vn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ht(0)},envMapIntensity:{value:1}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:vn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:vn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:vn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new ht(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:vn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:vn([Lt.points,Lt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:vn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:vn([Lt.common,Lt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:vn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:vn([Lt.sprite,Lt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distance:{uniforms:vn([Lt.common,Lt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distance_vert,fragmentShader:le.distance_frag},shadow:{uniforms:vn([Lt.lights,Lt.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Si.physical={uniforms:vn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};var vl={r:0,b:0,g:0},cv=new Jt,zp=new ie;zp.set(-1,0,0,0,1,0,0,0,1);function lv(i,t,e,n,s,r){let o=new ht(0),a=s===!0?0:1,c,l,h=null,u=0,f=null;function d(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let y=_.backgroundBlurriness>0;M=t.get(M,y)}return M}function m(_){let M=!1,y=d(_);y===null?p(o,a):y&&y.isColor&&(p(y,1),M=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,M){let y=d(M);y&&(y.isCubeTexture||y.mapping===Ko)?(l===void 0&&(l=new Ht(new te(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:ks(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(cv.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(zp),l.material.toneMapped=ue.getTransfer(y.colorSpace)!==ve,(h!==y||u!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ht(new Ue(2,2),new An({name:"BackgroundMaterial",uniforms:ks(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ue.getTransfer(y.colorSpace)!==ve,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,M){_.getRGB(vl,cu(i)),e.buffers.color.setClear(vl.r,vl.g,vl.b,M,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),a=M,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,p(o,a)},render:m,addToRenderList:x,dispose:g}}function hv(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(I,P,B,V,D){let O=!1,U=u(I,V,B,P);r!==U&&(r=U,l(r.object)),O=d(I,V,B,D),O&&m(I,V,B,D),D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,y(I,P,B,V),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function u(I,P,B,V){let D=V.wireframe===!0,O=n[P.id];O===void 0&&(O={},n[P.id]=O);let U=I.isInstancedMesh===!0?I.id:0,W=O[U];W===void 0&&(W={},O[U]=W);let J=W[B.id];J===void 0&&(J={},W[B.id]=J);let ut=J[D];return ut===void 0&&(ut=f(c()),J[D]=ut),ut}function f(I){let P=[],B=[],V=[];for(let D=0;D<e;D++)P[D]=0,B[D]=0,V[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:V,object:I,attributes:{},index:null}}function d(I,P,B,V){let D=r.attributes,O=P.attributes,U=0,W=B.getAttributes();for(let J in W)if(W[J].location>=0){let z=D[J],Y=O[J];if(Y===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor)),z===void 0||z.attribute!==Y||Y&&z.data!==Y.data)return!0;U++}return r.attributesNum!==U||r.index!==V}function m(I,P,B,V){let D={},O=P.attributes,U=0,W=B.getAttributes();for(let J in W)if(W[J].location>=0){let z=O[J];z===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(z=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(z=I.instanceColor));let Y={};Y.attribute=z,z&&z.data&&(Y.data=z.data),D[J]=Y,U++}r.attributes=D,r.attributesNum=U,r.index=V}function x(){let I=r.newAttributes;for(let P=0,B=I.length;P<B;P++)I[P]=0}function p(I){g(I,0)}function g(I,P){let B=r.newAttributes,V=r.enabledAttributes,D=r.attributeDivisors;B[I]=1,V[I]===0&&(i.enableVertexAttribArray(I),V[I]=1),D[I]!==P&&(i.vertexAttribDivisor(I,P),D[I]=P)}function _(){let I=r.newAttributes,P=r.enabledAttributes;for(let B=0,V=P.length;B<V;B++)P[B]!==I[B]&&(i.disableVertexAttribArray(B),P[B]=0)}function M(I,P,B,V,D,O,U){U===!0?i.vertexAttribIPointer(I,P,B,D,O):i.vertexAttribPointer(I,P,B,V,D,O)}function y(I,P,B,V){x();let D=V.attributes,O=B.getAttributes(),U=P.defaultAttributeValues;for(let W in O){let J=O[W];if(J.location>=0){let ut=D[W];if(ut===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(ut=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(ut=I.instanceColor)),ut!==void 0){let z=ut.normalized,Y=ut.itemSize,rt=t.get(ut);if(rt===void 0)continue;let pt=rt.buffer,mt=rt.type,q=rt.bytesPerElement,ot=mt===i.INT||mt===i.UNSIGNED_INT||ut.gpuType===Uc;if(ut.isInterleavedBufferAttribute){let it=ut.data,Mt=it.stride,Tt=ut.offset;if(it.isInstancedInterleavedBuffer){for(let St=0;St<J.locationSize;St++)g(J.location+St,it.meshPerAttribute);I.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let St=0;St<J.locationSize;St++)p(J.location+St);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let St=0;St<J.locationSize;St++)M(J.location+St,Y/J.locationSize,mt,z,Mt*q,(Tt+Y/J.locationSize*St)*q,ot)}else{if(ut.isInstancedBufferAttribute){for(let it=0;it<J.locationSize;it++)g(J.location+it,ut.meshPerAttribute);I.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let it=0;it<J.locationSize;it++)p(J.location+it);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let it=0;it<J.locationSize;it++)M(J.location+it,Y/J.locationSize,mt,z,Y*q,Y/J.locationSize*it*q,ot)}}else if(U!==void 0){let z=U[W];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(J.location,z);break;case 3:i.vertexAttrib3fv(J.location,z);break;case 4:i.vertexAttrib4fv(J.location,z);break;default:i.vertexAttrib1fv(J.location,z)}}}}_()}function T(){b();for(let I in n){let P=n[I];for(let B in P){let V=P[B];for(let D in V){let O=V[D];for(let U in O)h(O[U].object),delete O[U];delete V[D]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;let P=n[I.id];for(let B in P){let V=P[B];for(let D in V){let O=V[D];for(let U in O)h(O[U].object),delete O[U];delete V[D]}}delete n[I.id]}function A(I){for(let P in n){let B=n[P];for(let V in B){let D=B[V];if(D[I.id]===void 0)continue;let O=D[I.id];for(let U in O)h(O[U].object),delete O[U];delete D[I.id]}}}function v(I){for(let P in n){let B=n[P],V=I.isInstancedMesh===!0?I.id:0,D=B[V];if(D!==void 0){for(let O in D){let U=D[O];for(let W in U)h(U[W].object),delete U[W];delete D[O]}delete B[V],Object.keys(B).length===0&&delete n[P]}}}function b(){R(),o=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:p,disableUnusedAttributes:_}}function uv(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let d=0;d<h;d++)f+=l[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function fv(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==kn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let v=A===vi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Pn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Hn&&!v)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(zt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:y,maxSamples:T,samples:E}}function dv(i){let t=this,e=null,n=0,s=!1,r=!1,o=new di,a=new ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,g=i.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):l();else{let _=r?0:n,M=_*4,y=g.clippingState||null;c.value=y,y=h(m,f,M,d);for(let T=0;T!==M;++T)y[T]=e[T];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=c.value,m!==!0||p===null){let g=d+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let M=0,y=d;M!==x;++M,y+=4)o.copy(u[M]).applyMatrix4(_,a),o.normal.toArray(p,y),p[y+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}var hs=4,gp=[.125,.215,.35,.446,.526,.582],Gs=20,pv=256,sa=new os,xp=new ht,fu=null,du=0,pu=0,mu=!1,mv=new L,Sl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=mv}=r;fu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(fu,du,pu),this._renderer.xr.enabled=mu,t.scissorTest=!1,Hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===as||t.mapping===zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:vi,format:kn,colorSpace:bn,depthBuffer:!1},s=_p(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_p(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=gv(r)),this._blurMaterial=_v(r,t,e),this._ggxMaterial=xv(r,t,e)}return s}_compileMaterial(t){let e=new Ht(new ge,t);this._renderer.compile(e,sa)}_sceneToCubeUV(t,e,n,s,r){let c=new Je(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(xp),u.toneMapping=oi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ht(new te,new En({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,p=x.material,g=!1,_=t.background;_?_.isColor&&(p.color.copy(_),t.background=null,g=!0):(p.color.copy(xp),g=!0);for(let M=0;M<6;M++){let y=M%3;y===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[M],r.y,r.z)):y===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[M]));let T=this._cubeSize;Hr(s,y*T,M>2?T:0,T,T),u.setRenderTarget(s),g&&u.render(x,c),u.render(t,c)}u.toneMapping=d,u.autoClear=f,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===as||t.mapping===zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Hr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,sa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),f=0+l*1.25,d=u*f,{_lodMax:m}=this,x=this._sizeLods[n],p=3*x*(n>m-hs?n-m+hs:0),g=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=m-e,Hr(r,p,g,3*x,2*x),s.setRenderTarget(r),s.render(a,sa),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,Hr(t,p,g,3*x,2*x),s.setRenderTarget(t),s.render(a,sa)}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Qt("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[s];u.material=l;let f=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Gs-1),x=r/m,p=isFinite(r)?1+Math.floor(h*x):Gs;p>Gs&&zt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Gs}`);let g=[],_=0;for(let A=0;A<Gs;++A){let v=A/x,b=Math.exp(-v*v/2);g.push(b),A===0?_+=b:A<p&&(_+=2*b)}for(let A=0;A<g.length;A++)g[A]=g[A]/_;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=m,f.mipInt.value=M-n;let y=this._sizeLods[s],T=3*y*(s>M-hs?s-M+hs:0),E=4*(this._cubeSize-y);Hr(e,T,E,3*y,2*y),c.setRenderTarget(e),c.render(u,sa)}};function gv(i){let t=[],e=[],n=[],s=i,r=i-hs+1+gp.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-hs?c=gp[o-i+hs-1]:o===0&&(c=0),e.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,x=3,p=2,g=1,_=new Float32Array(x*m*d),M=new Float32Array(p*m*d),y=new Float32Array(g*m*d);for(let E=0;E<d;E++){let A=E%3*2/3-1,v=E>2?0:-1,b=[A,v,0,A+2/3,v,0,A+2/3,v+1,0,A,v,0,A+2/3,v+1,0,A,v+1,0];_.set(b,x*m*E),M.set(f,p*m*E);let R=[E,E,E,E,E,E];y.set(R,g*m*E)}let T=new ge;T.setAttribute("position",new qe(_,x)),T.setAttribute("uv",new qe(M,p)),T.setAttribute("faceIndex",new qe(y,g)),n.push(new Ht(T,null)),s>hs&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function _p(i,t,e){let n=new Bn(i,t,e);return n.texture.mapping=Ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function xv(i,t,e){return new An({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function _v(i,t,e){let n=new Float32Array(Gs),s=new L(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function yp(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function vp(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Tl(){return`

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
	`}var bl=class extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Eo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new te(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:yi});r.uniforms.tEquirect.value=e;let o=new Ht(s,r),a=e.minFilter;return e.minFilter===ai&&(e.minFilter=ke),new wc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function yv(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Lc||d===Nc)if(t.has(f)){let m=t.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let x=new bl(m.height);return x.fromEquirectangularTexture(i,f),t.set(f,x),f.addEventListener("dispose",l),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,m=d===Lc||d===Nc,x=d===as||d===zs;if(m||x){let p=e.get(f),g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Sl(i)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let _=f.image;return m&&_&&_.height>0||x&&_&&c(_)?(n===null&&(n=new Sl(i)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function a(f,d){return d===Lc?f.mapping=as:d===Nc&&(f.mapping=zs),f}function c(f){let d=0,m=6;for(let x=0;x<m;x++)f[x]!==void 0&&d++;return d===m}function l(f){let d=f.target;d.removeEventListener("dispose",l);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function vv(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Es("WebGLRenderer: "+n+" extension not supported."),s}}}function Mv(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function l(u){let f=[],d=u.index,m=u.attributes.position,x=0;if(m===void 0)return;if(d!==null){let _=d.array;x=d.version;for(let M=0,y=_.length;M<y;M+=3){let T=_[M+0],E=_[M+1],A=_[M+2];f.push(T,E,E,A,A,T)}}else{let _=m.array;x=m.version;for(let M=0,y=_.length/3-1;M<y;M+=3){let T=M+0,E=M+1,A=M+2;f.push(T,E,E,A,A,T)}}let p=new(m.count>=65535?yo:_o)(f,1);p.version=x;let g=r.get(u);g&&t.remove(g),r.set(u,p)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Sv(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function l(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let x=0;for(let p=0;p<d;p++)x+=f[p];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function bv(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Qt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ev(i,t,e){let n=new WeakMap,s=new be;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let b=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],M=0;d===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let y=a.attributes.position.count*M,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*T*4*u),A=new po(E,y,T,u);A.type=Hn,A.needsUpdate=!0;let v=M*4;for(let R=0;R<u;R++){let I=p[R],P=g[R],B=_[R],V=y*T*4*R;for(let D=0;D<I.count;D++){let O=D*v;d===!0&&(s.fromBufferAttribute(I,D),E[V+O+0]=s.x,E[V+O+1]=s.y,E[V+O+2]=s.z,E[V+O+3]=0),m===!0&&(s.fromBufferAttribute(P,D),E[V+O+4]=s.x,E[V+O+5]=s.y,E[V+O+6]=s.z,E[V+O+7]=0),x===!0&&(s.fromBufferAttribute(B,D),E[V+O+8]=s.x,E[V+O+9]=s.y,E[V+O+10]=s.z,E[V+O+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new Et(y,T)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let m=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Tv(i,t,e,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Av={[Xh]:"LINEAR_TONE_MAPPING",[qh]:"REINHARD_TONE_MAPPING",[Yh]:"CINEON_TONE_MAPPING",[Zo]:"ACES_FILMIC_TONE_MAPPING",[Kh]:"AGX_TONE_MAPPING",[$h]:"NEUTRAL_TONE_MAPPING",[Zh]:"CUSTOM_TONE_MAPPING"};function wv(i,t,e,n,s,r){let o=new Bn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Ui(t,e):void 0}),a=new Bn(t,e,{type:vi,depthBuffer:!1,stencilBuffer:!1}),c=new ge;c.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new jt([0,2,0,0,2,0],2));let l=new xc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ht(c,l),u=new os(-1,1,1,-1,0,1),f=null,d=null,m=!1,x,p=null,g=[],_=!1;this.setSize=function(M,y){o.setSize(M,y),a.setSize(M,y);for(let T=0;T<g.length;T++){let E=g[T];E.setSize&&E.setSize(M,y)}},this.setEffects=function(M){g=M,_=g.length>0&&g[0].isRenderPass===!0;let y=o.width,T=o.height;for(let E=0;E<g.length;E++){let A=g[E];A.setSize&&A.setSize(y,T)}},this.begin=function(M,y){if(m||M.toneMapping===oi&&g.length===0)return!1;if(p=y,y!==null){let T=y.width,E=y.height;(o.width!==T||o.height!==E)&&this.setSize(T,E)}return _===!1&&M.setRenderTarget(o),x=M.toneMapping,M.toneMapping=oi,!0},this.hasRenderPass=function(){return _},this.end=function(M,y){M.toneMapping=x,m=!0;let T=o,E=a;for(let A=0;A<g.length;A++){let v=g[A];if(v.enabled!==!1&&(v.render(M,E,T,y),v.needsSwap!==!1)){let b=T;T=E,E=b}}if(f!==M.outputColorSpace||d!==M.toneMapping){f=M.outputColorSpace,d=M.toneMapping,l.defines={},ue.getTransfer(f)===ve&&(l.defines.SRGB_TRANSFER="");let A=Av[d];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,M.setRenderTarget(p),M.render(h,u),p=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}var Hp=new en,_u=new Ui(1,1),kp=new po,Gp=new ac,Vp=new Eo,Mp=[],Sp=[],bp=new Float32Array(16),Ep=new Float32Array(9),Tp=new Float32Array(4);function Gr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Mp[s];if(r===void 0&&(r=new Float32Array(s),Mp[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function nn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function sn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Al(i,t){let e=Sp[t];e===void 0&&(e=new Int32Array(t),Sp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Rv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Cv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2fv(this.addr,t),sn(e,t)}}function Iv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;i.uniform3fv(this.addr,t),sn(e,t)}}function Pv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4fv(this.addr,t),sn(e,t)}}function Lv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;Tp.set(n),i.uniformMatrix2fv(this.addr,!1,Tp),sn(e,n)}}function Nv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;Ep.set(n),i.uniformMatrix3fv(this.addr,!1,Ep),sn(e,n)}}function Dv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;bp.set(n),i.uniformMatrix4fv(this.addr,!1,bp),sn(e,n)}}function Uv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Fv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2iv(this.addr,t),sn(e,t)}}function Ov(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3iv(this.addr,t),sn(e,t)}}function Bv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4iv(this.addr,t),sn(e,t)}}function zv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Hv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2uiv(this.addr,t),sn(e,t)}}function kv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3uiv(this.addr,t),sn(e,t)}}function Gv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4uiv(this.addr,t),sn(e,t)}}function Vv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_u.compareFunction=e.isReversedDepthBuffer()?yl:_l,r=_u):r=Hp,e.setTexture2D(t||r,s)}function Wv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Gp,s)}function Xv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Vp,s)}function qv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||kp,s)}function Yv(i){switch(i){case 5126:return Rv;case 35664:return Cv;case 35665:return Iv;case 35666:return Pv;case 35674:return Lv;case 35675:return Nv;case 35676:return Dv;case 5124:case 35670:return Uv;case 35667:case 35671:return Fv;case 35668:case 35672:return Ov;case 35669:case 35673:return Bv;case 5125:return zv;case 36294:return Hv;case 36295:return kv;case 36296:return Gv;case 35678:case 36198:case 36298:case 36306:case 35682:return Vv;case 35679:case 36299:case 36307:return Wv;case 35680:case 36300:case 36308:case 36293:return Xv;case 36289:case 36303:case 36311:case 36292:return qv}}function Zv(i,t){i.uniform1fv(this.addr,t)}function Kv(i,t){let e=Gr(t,this.size,2);i.uniform2fv(this.addr,e)}function $v(i,t){let e=Gr(t,this.size,3);i.uniform3fv(this.addr,e)}function Jv(i,t){let e=Gr(t,this.size,4);i.uniform4fv(this.addr,e)}function jv(i,t){let e=Gr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Qv(i,t){let e=Gr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function tM(i,t){let e=Gr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function eM(i,t){i.uniform1iv(this.addr,t)}function nM(i,t){i.uniform2iv(this.addr,t)}function iM(i,t){i.uniform3iv(this.addr,t)}function sM(i,t){i.uniform4iv(this.addr,t)}function rM(i,t){i.uniform1uiv(this.addr,t)}function oM(i,t){i.uniform2uiv(this.addr,t)}function aM(i,t){i.uniform3uiv(this.addr,t)}function cM(i,t){i.uniform4uiv(this.addr,t)}function lM(i,t,e){let n=this.cache,s=t.length,r=Al(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=_u:o=Hp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function hM(i,t,e){let n=this.cache,s=t.length,r=Al(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Gp,r[o])}function uM(i,t,e){let n=this.cache,s=t.length,r=Al(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Vp,r[o])}function fM(i,t,e){let n=this.cache,s=t.length,r=Al(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||kp,r[o])}function dM(i){switch(i){case 5126:return Zv;case 35664:return Kv;case 35665:return $v;case 35666:return Jv;case 35674:return jv;case 35675:return Qv;case 35676:return tM;case 5124:case 35670:return eM;case 35667:case 35671:return nM;case 35668:case 35672:return iM;case 35669:case 35673:return sM;case 5125:return rM;case 36294:return oM;case 36295:return aM;case 36296:return cM;case 35678:case 36198:case 36298:case 36306:case 35682:return lM;case 35679:case 36299:case 36307:return hM;case 35680:case 36300:case 36308:case 36293:return uM;case 36289:case 36303:case 36311:case 36292:return fM}}var yu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Yv(e.type)}},vu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dM(e.type)}},Mu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},gu=/(\w+)(\])?(\[|\.)?/g;function Ap(i,t){i.seq.push(t),i.map[t.id]=t}function pM(i,t,e){let n=i.name,s=n.length;for(gu.lastIndex=0;;){let r=gu.exec(n),o=gu.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ap(e,l===void 0?new yu(a,i,t):new vu(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Mu(a),Ap(e,u)),e=u}}}var kr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);pM(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function wp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var mM=37297,gM=0;function xM(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Rp=new ie;function _M(i){ue._getMatrix(Rp,ue.workingColorSpace,i);let t=`mat3( ${Rp.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(i)){case uo:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Cp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+xM(i.getShaderSource(t),a)}else return r}function yM(i,t){let e=_M(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var vM={[Xh]:"Linear",[qh]:"Reinhard",[Yh]:"Cineon",[Zo]:"ACESFilmic",[Kh]:"AgX",[$h]:"Neutral",[Zh]:"Custom"};function MM(i,t){let e=vM[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ml=new L;function SM(){ue.getLuminanceCoefficients(Ml);let i=Ml.x.toFixed(4),t=Ml.y.toFixed(4),e=Ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function EM(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function TM(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function oa(i){return i!==""}function Ip(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var AM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Su(i){return i.replace(AM,RM)}var wM=new Map;function RM(i,t){let e=le[t];if(e===void 0){let n=wM.get(t);if(n!==void 0)e=le[n],zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Su(e)}var CM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lp(i){return i.replace(CM,IM)}function IM(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Np(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var PM={[Yo]:"SHADOWMAP_TYPE_PCF",[Ur]:"SHADOWMAP_TYPE_VSM"};function LM(i){return PM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var NM={[as]:"ENVMAP_TYPE_CUBE",[zs]:"ENVMAP_TYPE_CUBE",[Ko]:"ENVMAP_TYPE_CUBE_UV"};function DM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":NM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var UM={[zs]:"ENVMAP_MODE_REFRACTION"};function FM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":UM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var OM={[Pc]:"ENVMAP_BLENDING_MULTIPLY",[qd]:"ENVMAP_BLENDING_MIX",[Yd]:"ENVMAP_BLENDING_ADD"};function BM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":OM[i.combine]||"ENVMAP_BLENDING_NONE"}function zM(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function HM(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=LM(e),l=DM(e),h=FM(e),u=BM(e),f=zM(e),d=bM(e),m=EM(r),x=s.createProgram(),p,g,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(oa).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(oa).join(`
`),g.length>0&&(g+=`
`)):(p=[Np(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),g=[Np(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?le.tonemapping_pars_fragment:"",e.toneMapping!==oi?MM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,yM("linearToOutputTexel",e.outputColorSpace),SM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(oa).join(`
`)),o=Su(o),o=Ip(o,e),o=Pp(o,e),a=Su(a),a=Ip(a,e),a=Pp(a,e),o=Lp(o),a=Lp(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let M=_+p+o,y=_+g+a,T=wp(s,s.VERTEX_SHADER,M),E=wp(s,s.FRAGMENT_SHADER,y);s.attachShader(x,T),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(I){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(x)||"",B=s.getShaderInfoLog(T)||"",V=s.getShaderInfoLog(E)||"",D=P.trim(),O=B.trim(),U=V.trim(),W=!0,J=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,T,E);else{let ut=Cp(s,T,"vertex"),z=Cp(s,E,"fragment");Qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+D+`
`+ut+`
`+z)}else D!==""?zt("WebGLProgram: Program Info Log:",D):(O===""||U==="")&&(J=!1);J&&(I.diagnostics={runnable:W,programLog:D,vertexShader:{log:O,prefix:p},fragmentShader:{log:U,prefix:g}})}s.deleteShader(T),s.deleteShader(E),v=new kr(s,x),b=TM(s,x)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,mM)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gM++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=E,this}var kM=0,bu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Eu(t),e.set(t,n)),n}},Eu=class{constructor(t){this.id=kM++,this.code=t,this.usedTimes=0}};function GM(i){return i===ls||i===ta||i===ea}function VM(i,t,e,n,s,r){let o=new mo,a=new bu,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,b,R,I,P,B){let V=I.fog,D=P.geometry,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,U=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,W=t.get(v.envMap||O,U),J=W&&W.mapping===Ko?W.image.height:null,ut=d[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&zt("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let z=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Y=z!==void 0?z.length:0,rt=0;D.morphAttributes.position!==void 0&&(rt=1),D.morphAttributes.normal!==void 0&&(rt=2),D.morphAttributes.color!==void 0&&(rt=3);let pt,mt,q,ot;if(ut){let Pt=Si[ut];pt=Pt.vertexShader,mt=Pt.fragmentShader}else{pt=v.vertexShader,mt=v.fragmentShader;let Pt=a.getVertexShaderStage(v),re=a.getFragmentShaderStage(v);a.update(v,Pt,re),q=Pt.id,ot=re.id}let it=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),Tt=P.isInstancedMesh===!0,St=P.isBatchedMesh===!0,Wt=!!v.map,Ut=!!v.matcap,tt=!!W,lt=!!v.aoMap,et=!!v.lightMap,ft=!!v.bumpMap&&v.wireframe===!1,at=!!v.normalMap,yt=!!v.displacementMap,xt=!!v.emissiveMap,Gt=!!v.metalnessMap,Xt=!!v.roughnessMap,N=v.anisotropy>0,Ft=v.clearcoat>0,Zt=v.dispersion>0,C=v.iridescence>0,S=v.sheen>0,H=v.transmission>0,k=N&&!!v.anisotropyMap,X=Ft&&!!v.clearcoatMap,ct=Ft&&!!v.clearcoatNormalMap,dt=Ft&&!!v.clearcoatRoughnessMap,$=C&&!!v.iridescenceMap,Q=C&&!!v.iridescenceThicknessMap,vt=S&&!!v.sheenColorMap,It=S&&!!v.sheenRoughnessMap,Rt=!!v.specularMap,wt=!!v.specularColorMap,Ot=!!v.specularIntensityMap,Vt=H&&!!v.transmissionMap,gt=H&&!!v.thicknessMap,F=!!v.gradientMap,_t=!!v.alphaMap,nt=v.alphaTest>0,bt=!!v.alphaHash,At=!!v.extensions,st=oi;v.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(st=i.toneMapping);let Ct={shaderID:ut,shaderType:v.type,shaderName:v.name,vertexShader:pt,fragmentShader:mt,defines:v.defines,customVertexShaderID:q,customFragmentShaderID:ot,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:St,batchingColor:St&&P._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&P.instanceColor!==null,instancingMorph:Tt&&P.morphTexture!==null,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ue.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Wt,matcap:Ut,envMap:tt,envMapMode:tt&&W.mapping,envMapCubeUVHeight:J,aoMap:lt,lightMap:et,bumpMap:ft,normalMap:at,displacementMap:yt,emissiveMap:xt,normalMapObjectSpace:at&&v.normalMapType===Jd,normalMapTangentSpace:at&&v.normalMapType===ia,packedNormalMap:at&&v.normalMapType===ia&&GM(v.normalMap.format),metalnessMap:Gt,roughnessMap:Xt,anisotropy:N,anisotropyMap:k,clearcoat:Ft,clearcoatMap:X,clearcoatNormalMap:ct,clearcoatRoughnessMap:dt,dispersion:Zt,iridescence:C,iridescenceMap:$,iridescenceThicknessMap:Q,sheen:S,sheenColorMap:vt,sheenRoughnessMap:It,specularMap:Rt,specularColorMap:wt,specularIntensityMap:Ot,transmission:H,transmissionMap:Vt,thicknessMap:gt,gradientMap:F,opaque:v.transparent===!1&&v.blending===Ts&&v.alphaToCoverage===!1,alphaMap:_t,alphaTest:nt,alphaHash:bt,combine:v.combine,mapUv:Wt&&m(v.map.channel),aoMapUv:lt&&m(v.aoMap.channel),lightMapUv:et&&m(v.lightMap.channel),bumpMapUv:ft&&m(v.bumpMap.channel),normalMapUv:at&&m(v.normalMap.channel),displacementMapUv:yt&&m(v.displacementMap.channel),emissiveMapUv:xt&&m(v.emissiveMap.channel),metalnessMapUv:Gt&&m(v.metalnessMap.channel),roughnessMapUv:Xt&&m(v.roughnessMap.channel),anisotropyMapUv:k&&m(v.anisotropyMap.channel),clearcoatMapUv:X&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ct&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:It&&m(v.sheenRoughnessMap.channel),specularMapUv:Rt&&m(v.specularMap.channel),specularColorMapUv:wt&&m(v.specularColorMap.channel),specularIntensityMapUv:Ot&&m(v.specularIntensityMap.channel),transmissionMapUv:Vt&&m(v.transmissionMap.channel),thicknessMapUv:gt&&m(v.thicknessMap.channel),alphaMapUv:_t&&m(v.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(at||N),vertexNormals:!!D.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!D.attributes.uv&&(Wt||_t),fog:!!V,useFog:v.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||D.attributes.normal===void 0&&at===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Mt,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:rt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:Wt&&v.map.isVideoTexture===!0&&ue.getTransfer(v.map.colorSpace)===ve,decodeVideoTextureEmissive:xt&&v.emissiveMap.isVideoTexture===!0&&ue.getTransfer(v.emissiveMap.colorSpace)===ve,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===De,flipSided:v.side===un,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:At&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&v.extensions.multiDraw===!0||St)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function p(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)b.push(R),b.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(g(b,v),_(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function g(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function _(v,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function M(v){let b=d[v.type],R;if(b){let I=Si[b];R=pp.clone(I.uniforms)}else R=v.uniforms;return R}function y(v,b){let R=h.get(b);return R!==void 0?++R.usedTimes:(R=new HM(i,b,v,s),l.push(R),h.set(b,R)),R}function T(v){if(--v.usedTimes===0){let b=l.indexOf(v);l[b]=l[l.length-1],l.pop(),h.delete(v.cacheKey),v.destroy()}}function E(v){a.remove(v)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:M,acquireProgram:y,releaseProgram:T,releaseShaderCache:E,programs:l,dispose:A}}function WM(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function XM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Dp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Up(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,x,p,g){let _=i[t];return _===void 0?(_={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:p,group:g},i[t]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=m,_.materialVariant=o(f),_.groupOrder=x,_.renderOrder=f.renderOrder,_.z=p,_.group=g),t++,_}function c(f,d,m,x,p,g){let _=a(f,d,m,x,p,g);m.transmission>0?n.push(_):m.transparent===!0?s.push(_):e.push(_)}function l(f,d,m,x,p,g){let _=a(f,d,m,x,p,g);m.transmission>0?n.unshift(_):m.transparent===!0?s.unshift(_):e.unshift(_)}function h(f,d,m){e.length>1&&e.sort(f||XM),n.length>1&&n.sort(d||Dp),s.length>1&&s.sort(d||Dp),m&&(e.reverse(),n.reverse(),s.reverse())}function u(){for(let f=t,d=i.length;f<d;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function qM(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Up,i.set(n,[o])):s>=r.length?(o=new Up,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function YM(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new ht};break;case"SpotLight":e={position:new L,direction:new L,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":e={color:new ht,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function ZM(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var KM=0;function $M(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function JM(i){let t=new YM,e=ZM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new Jt,o=new Jt;function a(l){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,m=0,x=0,p=0,g=0,_=0,M=0,y=0,T=0,E=0,A=0;l.sort($M);for(let b=0,R=l.length;b<R;b++){let I=l[b],P=I.color,B=I.intensity,V=I.distance,D=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ls?D=I.shadow.map.texture:D=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=P.r*B,u+=P.g*B,f+=P.b*B;else if(I.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(I.sh.coefficients[O],B);A++}else if(I.isDirectionalLight){let O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let U=I.shadow,W=e.get(I);W.shadowIntensity=U.intensity,W.shadowBias=U.bias,W.shadowNormalBias=U.normalBias,W.shadowRadius=U.radius,W.shadowMapSize=U.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=D,n.directionalShadowMatrix[d]=I.shadow.matrix,_++}n.directional[d]=O,d++}else if(I.isSpotLight){let O=t.get(I);O.position.setFromMatrixPosition(I.matrixWorld),O.color.copy(P).multiplyScalar(B),O.distance=V,O.coneCos=Math.cos(I.angle),O.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),O.decay=I.decay,n.spot[x]=O;let U=I.shadow;if(I.map&&(n.spotLightMap[T]=I.map,T++,U.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[x]=U.matrix,I.castShadow){let W=e.get(I);W.shadowIntensity=U.intensity,W.shadowBias=U.bias,W.shadowNormalBias=U.normalBias,W.shadowRadius=U.radius,W.shadowMapSize=U.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=D,y++}x++}else if(I.isRectAreaLight){let O=t.get(I);O.color.copy(P).multiplyScalar(B),O.halfWidth.set(I.width*.5,0,0),O.halfHeight.set(0,I.height*.5,0),n.rectArea[p]=O,p++}else if(I.isPointLight){let O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),O.distance=I.distance,O.decay=I.decay,I.castShadow){let U=I.shadow,W=e.get(I);W.shadowIntensity=U.intensity,W.shadowBias=U.bias,W.shadowNormalBias=U.normalBias,W.shadowRadius=U.radius,W.shadowMapSize=U.mapSize,W.shadowCameraNear=U.camera.near,W.shadowCameraFar=U.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=D,n.pointShadowMatrix[m]=I.shadow.matrix,M++}n.point[m]=O,m++}else if(I.isHemisphereLight){let O=t.get(I);O.skyColor.copy(I.color).multiplyScalar(B),O.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[g]=O,g++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let v=n.hash;(v.directionalLength!==d||v.pointLength!==m||v.spotLength!==x||v.rectAreaLength!==p||v.hemiLength!==g||v.numDirectionalShadows!==_||v.numPointShadows!==M||v.numSpotShadows!==y||v.numSpotMaps!==T||v.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,v.directionalLength=d,v.pointLength=m,v.spotLength=x,v.rectAreaLength=p,v.hemiLength=g,v.numDirectionalShadows=_,v.numPointShadows=M,v.numSpotShadows=y,v.numSpotMaps=T,v.numLightProbes=A,n.version=KM++)}function c(l,h){let u=0,f=0,d=0,m=0,x=0,p=h.matrixWorldInverse;for(let g=0,_=l.length;g<_;g++){let M=l[g];if(M.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),u++}else if(M.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(M.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),x++}}}return{setup:a,setupView:c,state:n}}function Fp(i){let t=new JM(i),e=[],n=[],s=[];function r(f){u.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function c(f){s.push(f)}function l(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function jM(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Fp(i),t.set(s,[a])):r>=o.length?(a=new Fp(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var QM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tS=`uniform sampler2D shadow_pass;
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
}`,eS=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],nS=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Op=new Jt,ra=new L,xu=new L;function iS(i,t,e){let n=new Cr,s=new Et,r=new Et,o=new be,a=new _c,c=new yc,l={},h=e.maxTextureSize,u={[xn]:un,[un]:xn,[De]:De},f=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:QM,fragmentShader:tS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new ge;m.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ht(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yo;let g=this.type;this.render=function(E,A,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===wd&&(zt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Yo);let b=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),P=i.state;P.setBlending(yi),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let B=g!==this.type;B&&A.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(D=>D.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,D=E.length;V<D;V++){let O=E[V],U=O.shadow;if(U===void 0){zt("WebGLShadowMap:",O,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let W=U.getFrameExtents();s.multiply(W),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,U.mapSize.y=r.y));let J=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=J,U.map===null||B===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Ur){if(O.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Bn(s.x,s.y,{format:ls,type:vi,minFilter:ke,magFilter:ke,generateMipmaps:!1}),U.map.texture.name=O.name+".shadowMap",U.map.depthTexture=new Ui(s.x,s.y,Hn),U.map.depthTexture.name=O.name+".shadowMapDepth",U.map.depthTexture.format=mi,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ye,U.map.depthTexture.magFilter=Ye}else O.isPointLight?(U.map=new bl(s.x),U.map.depthTexture=new hc(s.x,ci)):(U.map=new Bn(s.x,s.y),U.map.depthTexture=new Ui(s.x,s.y,ci)),U.map.depthTexture.name=O.name+".shadowMap",U.map.depthTexture.format=mi,this.type===Yo?(U.map.depthTexture.compareFunction=J?yl:_l,U.map.depthTexture.minFilter=ke,U.map.depthTexture.magFilter=ke):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ye,U.map.depthTexture.magFilter=Ye);U.camera.updateProjectionMatrix()}let ut=U.map.isWebGLCubeRenderTarget?6:1;for(let z=0;z<ut;z++){if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,z),i.clear();else{z===0&&(i.setRenderTarget(U.map),i.clear());let Y=U.getViewport(z);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),P.viewport(o)}if(O.isPointLight){let Y=U.camera,rt=U.matrix,pt=O.distance||Y.far;pt!==Y.far&&(Y.far=pt,Y.updateProjectionMatrix()),ra.setFromMatrixPosition(O.matrixWorld),Y.position.copy(ra),xu.copy(Y.position),xu.add(eS[z]),Y.up.copy(nS[z]),Y.lookAt(xu),Y.updateMatrixWorld(),rt.makeTranslation(-ra.x,-ra.y,-ra.z),Op.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Op,Y.coordinateSystem,Y.reversedDepth)}else U.updateMatrices(O);n=U.getFrustum(),y(A,v,U.camera,O,this.type)}U.isPointLightShadow!==!0&&this.type===Ur&&_(U,v),U.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(b,R,I)};function _(E,A){let v=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Bn(s.x,s.y,{format:ls,type:vi})),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,v,f,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,v,d,x,null)}function M(E,A,v,b){let R=null,I=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)R=I;else if(R=v.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let P=R.uuid,B=A.uuid,V=l[P];V===void 0&&(V={},l[P]=V);let D=V[B];D===void 0&&(D=R.clone(),V[B]=D,A.addEventListener("dispose",T)),R=D}if(R.visible=A.visible,R.wireframe=A.wireframe,b===Ur?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:u[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let P=i.properties.get(R);P.light=v}return R}function y(E,A,v,b,R){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===Ur)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);let B=t.update(E),V=E.material;if(Array.isArray(V)){let D=B.groups;for(let O=0,U=D.length;O<U;O++){let W=D[O],J=V[W.materialIndex];if(J&&J.visible){let ut=M(E,J,b,R);E.onBeforeShadow(i,E,A,v,B,ut,W),i.renderBufferDirect(v,null,B,ut,E,W),E.onAfterShadow(i,E,A,v,B,ut,W)}}}else if(V.visible){let D=M(E,V,b,R);E.onBeforeShadow(i,E,A,v,B,D,null),i.renderBufferDirect(v,null,B,D,E,null),E.onAfterShadow(i,E,A,v,B,D,null)}}let P=E.children;for(let B=0,V=P.length;B<V;B++)y(P[B],A,v,b,R)}function T(E){E.target.removeEventListener("dispose",T);for(let v in l){let b=l[v],R=E.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}function sS(i,t){function e(){let F=!1,_t=new be,nt=null,bt=new be(0,0,0,0);return{setMask:function(At){nt!==At&&!F&&(i.colorMask(At,At,At,At),nt=At)},setLocked:function(At){F=At},setClear:function(At,st,Ct,Pt,re){re===!0&&(At*=Pt,st*=Pt,Ct*=Pt),_t.set(At,st,Ct,Pt),bt.equals(_t)===!1&&(i.clearColor(At,st,Ct,Pt),bt.copy(_t))},reset:function(){F=!1,nt=null,bt.set(-1,0,0,0)}}}function n(){let F=!1,_t=!1,nt=null,bt=null,At=null;return{setReversed:function(st){if(_t!==st){let Ct=t.get("EXT_clip_control");st?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),_t=st;let Pt=At;At=null,this.setClear(Pt)}},getReversed:function(){return _t},setTest:function(st){st?it(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(st){nt!==st&&!F&&(i.depthMask(st),nt=st)},setFunc:function(st){if(_t&&(st=ap[st]),bt!==st){switch(st){case Ja:i.depthFunc(i.NEVER);break;case ja:i.depthFunc(i.ALWAYS);break;case Qa:i.depthFunc(i.LESS);break;case As:i.depthFunc(i.LEQUAL);break;case tc:i.depthFunc(i.EQUAL);break;case ec:i.depthFunc(i.GEQUAL);break;case nc:i.depthFunc(i.GREATER);break;case ic:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}bt=st}},setLocked:function(st){F=st},setClear:function(st){At!==st&&(At=st,_t&&(st=1-st),i.clearDepth(st))},reset:function(){F=!1,nt=null,bt=null,At=null,_t=!1}}}function s(){let F=!1,_t=null,nt=null,bt=null,At=null,st=null,Ct=null,Pt=null,re=null;return{setTest:function(ce){F||(ce?it(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(ce){_t!==ce&&!F&&(i.stencilMask(ce),_t=ce)},setFunc:function(ce,Fe,rn){(nt!==ce||bt!==Fe||At!==rn)&&(i.stencilFunc(ce,Fe,rn),nt=ce,bt=Fe,At=rn)},setOp:function(ce,Fe,rn){(st!==ce||Ct!==Fe||Pt!==rn)&&(i.stencilOp(ce,Fe,rn),st=ce,Ct=Fe,Pt=rn)},setLocked:function(ce){F=ce},setClear:function(ce){re!==ce&&(i.clearStencil(ce),re=ce)},reset:function(){F=!1,_t=null,nt=null,bt=null,At=null,st=null,Ct=null,Pt=null,re=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f={},d=new WeakMap,m=[],x=null,p=!1,g=null,_=null,M=null,y=null,T=null,E=null,A=null,v=new ht(0,0,0),b=0,R=!1,I=null,P=null,B=null,V=null,D=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,W=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),U=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),U=W>=2);let ut=null,z={},Y=i.getParameter(i.SCISSOR_BOX),rt=i.getParameter(i.VIEWPORT),pt=new be().fromArray(Y),mt=new be().fromArray(rt);function q(F,_t,nt,bt){let At=new Uint8Array(4),st=i.createTexture();i.bindTexture(F,st),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<nt;Ct++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,bt,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(_t+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return st}let ot={};ot[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(i.DEPTH_TEST),o.setFunc(As),ft(!1),at(Gh),it(i.CULL_FACE),lt(yi);function it(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Mt(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Tt(F,_t){return f[F]!==_t?(i.bindFramebuffer(F,_t),f[F]=_t,F===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=_t),F===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function St(F,_t){let nt=m,bt=!1;if(F){nt=d.get(_t),nt===void 0&&(nt=[],d.set(_t,nt));let At=F.textures;if(nt.length!==At.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let st=0,Ct=At.length;st<Ct;st++)nt[st]=i.COLOR_ATTACHMENT0+st;nt.length=At.length,bt=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,bt=!0);bt&&i.drawBuffers(nt)}function Wt(F){return x!==F?(i.useProgram(F),x=F,!0):!1}let Ut={[ts]:i.FUNC_ADD,[Cd]:i.FUNC_SUBTRACT,[Id]:i.FUNC_REVERSE_SUBTRACT};Ut[Pd]=i.MIN,Ut[Ld]=i.MAX;let tt={[Nd]:i.ZERO,[Dd]:i.ONE,[Ud]:i.SRC_COLOR,[Ka]:i.SRC_ALPHA,[kd]:i.SRC_ALPHA_SATURATE,[zd]:i.DST_COLOR,[Od]:i.DST_ALPHA,[Fd]:i.ONE_MINUS_SRC_COLOR,[$a]:i.ONE_MINUS_SRC_ALPHA,[Hd]:i.ONE_MINUS_DST_COLOR,[Bd]:i.ONE_MINUS_DST_ALPHA,[Gd]:i.CONSTANT_COLOR,[Vd]:i.ONE_MINUS_CONSTANT_COLOR,[Wd]:i.CONSTANT_ALPHA,[Xd]:i.ONE_MINUS_CONSTANT_ALPHA};function lt(F,_t,nt,bt,At,st,Ct,Pt,re,ce){if(F===yi){p===!0&&(Mt(i.BLEND),p=!1);return}if(p===!1&&(it(i.BLEND),p=!0),F!==Rd){if(F!==g||ce!==R){if((_!==ts||T!==ts)&&(i.blendEquation(i.FUNC_ADD),_=ts,T=ts),ce)switch(F){case Ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bs:i.blendFunc(i.ONE,i.ONE);break;case Vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qt("WebGLState: Invalid blending: ",F);break}else switch(F){case Ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vh:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wh:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",F);break}M=null,y=null,E=null,A=null,v.set(0,0,0),b=0,g=F,R=ce}return}At=At||_t,st=st||nt,Ct=Ct||bt,(_t!==_||At!==T)&&(i.blendEquationSeparate(Ut[_t],Ut[At]),_=_t,T=At),(nt!==M||bt!==y||st!==E||Ct!==A)&&(i.blendFuncSeparate(tt[nt],tt[bt],tt[st],tt[Ct]),M=nt,y=bt,E=st,A=Ct),(Pt.equals(v)===!1||re!==b)&&(i.blendColor(Pt.r,Pt.g,Pt.b,re),v.copy(Pt),b=re),g=F,R=!1}function et(F,_t){F.side===De?Mt(i.CULL_FACE):it(i.CULL_FACE);let nt=F.side===un;_t&&(nt=!nt),ft(nt),F.blending===Ts&&F.transparent===!1?lt(yi):lt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let bt=F.stencilWrite;a.setTest(bt),bt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),xt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(F){I!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),I=F)}function at(F){F!==Td?(it(i.CULL_FACE),F!==P&&(F===Gh?i.cullFace(i.BACK):F===Ad?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),P=F}function yt(F){F!==B&&(U&&i.lineWidth(F),B=F)}function xt(F,_t,nt){F?(it(i.POLYGON_OFFSET_FILL),(V!==_t||D!==nt)&&(V=_t,D=nt,o.getReversed()&&(_t=-_t),i.polygonOffset(_t,nt))):Mt(i.POLYGON_OFFSET_FILL)}function Gt(F){F?it(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function Xt(F){F===void 0&&(F=i.TEXTURE0+O-1),ut!==F&&(i.activeTexture(F),ut=F)}function N(F,_t,nt){nt===void 0&&(ut===null?nt=i.TEXTURE0+O-1:nt=ut);let bt=z[nt];bt===void 0&&(bt={type:void 0,texture:void 0},z[nt]=bt),(bt.type!==F||bt.texture!==_t)&&(ut!==nt&&(i.activeTexture(nt),ut=nt),i.bindTexture(F,_t||ot[F]),bt.type=F,bt.texture=_t)}function Ft(){let F=z[ut];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Zt(){try{i.compressedTexImage2D(...arguments)}catch(F){Qt("WebGLState:",F)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(F){Qt("WebGLState:",F)}}function S(){try{i.texSubImage2D(...arguments)}catch(F){Qt("WebGLState:",F)}}function H(){try{i.texSubImage3D(...arguments)}catch(F){Qt("WebGLState:",F)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Qt("WebGLState:",F)}}function X(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Qt("WebGLState:",F)}}function ct(){try{i.texStorage2D(...arguments)}catch(F){Qt("WebGLState:",F)}}function dt(){try{i.texStorage3D(...arguments)}catch(F){Qt("WebGLState:",F)}}function $(){try{i.texImage2D(...arguments)}catch(F){Qt("WebGLState:",F)}}function Q(){try{i.texImage3D(...arguments)}catch(F){Qt("WebGLState:",F)}}function vt(F){return u[F]!==void 0?u[F]:i.getParameter(F)}function It(F,_t){u[F]!==_t&&(i.pixelStorei(F,_t),u[F]=_t)}function Rt(F){pt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),pt.copy(F))}function wt(F){mt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),mt.copy(F))}function Ot(F,_t){let nt=l.get(_t);nt===void 0&&(nt=new WeakMap,l.set(_t,nt));let bt=nt.get(F);bt===void 0&&(bt=i.getUniformBlockIndex(_t,F.name),nt.set(F,bt))}function Vt(F,_t){let bt=l.get(_t).get(F);c.get(_t)!==bt&&(i.uniformBlockBinding(_t,bt,F.__bindingPointIndex),c.set(_t,bt))}function gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},ut=null,z={},f={},d=new WeakMap,m=[],x=null,p=!1,g=null,_=null,M=null,y=null,T=null,E=null,A=null,v=new ht(0,0,0),b=0,R=!1,I=null,P=null,B=null,V=null,D=null,pt.set(0,0,i.canvas.width,i.canvas.height),mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:Mt,bindFramebuffer:Tt,drawBuffers:St,useProgram:Wt,setBlending:lt,setMaterial:et,setFlipSided:ft,setCullFace:at,setLineWidth:yt,setPolygonOffset:xt,setScissorTest:Gt,activeTexture:Xt,bindTexture:N,unbindTexture:Ft,compressedTexImage2D:Zt,compressedTexImage3D:C,texImage2D:$,texImage3D:Q,pixelStorei:It,getParameter:vt,updateUBOMapping:Ot,uniformBlockBinding:Vt,texStorage2D:ct,texStorage3D:dt,texSubImage2D:S,texSubImage3D:H,compressedTexSubImage2D:k,compressedTexSubImage3D:X,scissor:Rt,viewport:wt,reset:gt}}function rS(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Et,h=new WeakMap,u=new Set,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,S){return m?new OffscreenCanvas(C,S):br("canvas")}function p(C,S,H){let k=1,X=Zt(C);if((X.width>H||X.height>H)&&(k=H/Math.max(X.width,X.height)),k<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ct=Math.floor(k*X.width),dt=Math.floor(k*X.height);f===void 0&&(f=x(ct,dt));let $=S?x(ct,dt):f;return $.width=ct,$.height=dt,$.getContext("2d").drawImage(C,0,0,ct,dt),zt("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+ct+"x"+dt+")."),$}else return"data"in C&&zt("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),C;return C}function g(C){return C.generateMipmaps}function _(C){i.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(C,S,H,k,X,ct=!1){if(C!==null){if(i[C]!==void 0)return i[C];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let dt;k&&(dt=t.get("EXT_texture_norm16"),dt||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=S;if(S===i.RED&&(H===i.FLOAT&&($=i.R32F),H===i.HALF_FLOAT&&($=i.R16F),H===i.UNSIGNED_BYTE&&($=i.R8),H===i.UNSIGNED_SHORT&&dt&&($=dt.R16_EXT),H===i.SHORT&&dt&&($=dt.R16_SNORM_EXT)),S===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.R8UI),H===i.UNSIGNED_SHORT&&($=i.R16UI),H===i.UNSIGNED_INT&&($=i.R32UI),H===i.BYTE&&($=i.R8I),H===i.SHORT&&($=i.R16I),H===i.INT&&($=i.R32I)),S===i.RG&&(H===i.FLOAT&&($=i.RG32F),H===i.HALF_FLOAT&&($=i.RG16F),H===i.UNSIGNED_BYTE&&($=i.RG8),H===i.UNSIGNED_SHORT&&dt&&($=dt.RG16_EXT),H===i.SHORT&&dt&&($=dt.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RG8UI),H===i.UNSIGNED_SHORT&&($=i.RG16UI),H===i.UNSIGNED_INT&&($=i.RG32UI),H===i.BYTE&&($=i.RG8I),H===i.SHORT&&($=i.RG16I),H===i.INT&&($=i.RG32I)),S===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RGB8UI),H===i.UNSIGNED_SHORT&&($=i.RGB16UI),H===i.UNSIGNED_INT&&($=i.RGB32UI),H===i.BYTE&&($=i.RGB8I),H===i.SHORT&&($=i.RGB16I),H===i.INT&&($=i.RGB32I)),S===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RGBA8UI),H===i.UNSIGNED_SHORT&&($=i.RGBA16UI),H===i.UNSIGNED_INT&&($=i.RGBA32UI),H===i.BYTE&&($=i.RGBA8I),H===i.SHORT&&($=i.RGBA16I),H===i.INT&&($=i.RGBA32I)),S===i.RGB&&(H===i.UNSIGNED_SHORT&&dt&&($=dt.RGB16_EXT),H===i.SHORT&&dt&&($=dt.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),S===i.RGBA){let Q=ct?uo:ue.getTransfer(X);H===i.FLOAT&&($=i.RGBA32F),H===i.HALF_FLOAT&&($=i.RGBA16F),H===i.UNSIGNED_BYTE&&($=Q===ve?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&dt&&($=dt.RGBA16_EXT),H===i.SHORT&&dt&&($=dt.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function T(C,S){let H;return C?S===null||S===ci||S===Br?H=i.DEPTH24_STENCIL8:S===Hn?H=i.DEPTH32F_STENCIL8:S===Or&&(H=i.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ci||S===Br?H=i.DEPTH_COMPONENT24:S===Hn?H=i.DEPTH_COMPONENT32F:S===Or&&(H=i.DEPTH_COMPONENT16),H}function E(C,S){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ye&&C.minFilter!==ke?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){let S=C.target;S.removeEventListener("dispose",A),b(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&u.delete(S)}function v(C){let S=C.target;S.removeEventListener("dispose",v),I(S)}function b(C){let S=n.get(C);if(S.__webglInit===void 0)return;let H=C.source,k=d.get(H);if(k){let X=k[S.__cacheKey];X.usedTimes--,X.usedTimes===0&&R(C),Object.keys(k).length===0&&d.delete(H)}n.remove(C)}function R(C){let S=n.get(C);i.deleteTexture(S.__webglTexture);let H=C.source,k=d.get(H);delete k[S.__cacheKey],o.memory.textures--}function I(C){let S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(S.__webglFramebuffer[k]))for(let X=0;X<S.__webglFramebuffer[k].length;X++)i.deleteFramebuffer(S.__webglFramebuffer[k][X]);else i.deleteFramebuffer(S.__webglFramebuffer[k]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[k])}else{if(Array.isArray(S.__webglFramebuffer))for(let k=0;k<S.__webglFramebuffer.length;k++)i.deleteFramebuffer(S.__webglFramebuffer[k]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let k=0;k<S.__webglColorRenderbuffer.length;k++)S.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[k]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let H=C.textures;for(let k=0,X=H.length;k<X;k++){let ct=n.get(H[k]);ct.__webglTexture&&(i.deleteTexture(ct.__webglTexture),o.memory.textures--),n.remove(H[k])}n.remove(C)}let P=0;function B(){P=0}function V(){return P}function D(C){P=C}function O(){let C=P;return C>=s.maxTextures&&zt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),P+=1,C}function U(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function W(C,S){let H=n.get(C);if(C.isVideoTexture&&N(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){let k=C.image;if(k===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(H,C,S);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+S)}function J(C,S){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Mt(H,C,S);return}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+S)}function ut(C,S){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Mt(H,C,S);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+S)}function z(C,S){let H=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&H.__version!==C.version){Tt(H,C,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+S)}let Y={[Yn]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[Mr]:i.MIRRORED_REPEAT},rt={[Ye]:i.NEAREST,[Dc]:i.NEAREST_MIPMAP_NEAREST,[Hs]:i.NEAREST_MIPMAP_LINEAR,[ke]:i.LINEAR,[Fr]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},pt={[jd]:i.NEVER,[ip]:i.ALWAYS,[Qd]:i.LESS,[_l]:i.LEQUAL,[tp]:i.EQUAL,[yl]:i.GEQUAL,[ep]:i.GREATER,[np]:i.NOTEQUAL};function mt(C,S){if(S.type===Hn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ke||S.magFilter===Fr||S.magFilter===Hs||S.magFilter===ai||S.minFilter===ke||S.minFilter===Fr||S.minFilter===Hs||S.minFilter===ai)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Y[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Y[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Y[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,rt[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,rt[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,pt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ye||S.minFilter!==Hs&&S.minFilter!==ai||S.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function q(C,S){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",A));let k=S.source,X=d.get(k);X===void 0&&(X={},d.set(k,X));let ct=U(S);if(ct!==C.__cacheKey){X[ct]===void 0&&(X[ct]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),X[ct].usedTimes++;let dt=X[C.__cacheKey];dt!==void 0&&(X[C.__cacheKey].usedTimes--,dt.usedTimes===0&&R(S)),C.__cacheKey=ct,C.__webglTexture=X[ct].texture}return H}function ot(C,S,H){return Math.floor(Math.floor(C/H)/S)}function it(C,S,H,k){let ct=C.updateRanges;if(ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,H,k,S.data);else{ct.sort((It,Rt)=>It.start-Rt.start);let dt=0;for(let It=1;It<ct.length;It++){let Rt=ct[dt],wt=ct[It],Ot=Rt.start+Rt.count,Vt=ot(wt.start,S.width,4),gt=ot(Rt.start,S.width,4);wt.start<=Ot+1&&Vt===gt&&ot(wt.start+wt.count-1,S.width,4)===Vt?Rt.count=Math.max(Rt.count,wt.start+wt.count-Rt.start):(++dt,ct[dt]=wt)}ct.length=dt+1;let $=e.getParameter(i.UNPACK_ROW_LENGTH),Q=e.getParameter(i.UNPACK_SKIP_PIXELS),vt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let It=0,Rt=ct.length;It<Rt;It++){let wt=ct[It],Ot=Math.floor(wt.start/4),Vt=Math.ceil(wt.count/4),gt=Ot%S.width,F=Math.floor(Ot/S.width),_t=Vt,nt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,gt),e.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,gt,F,_t,nt,H,k,S.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(i.UNPACK_SKIP_ROWS,vt)}}function Mt(C,S,H){let k=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(k=i.TEXTURE_3D);let X=q(C,S),ct=S.source;e.bindTexture(k,C.__webglTexture,i.TEXTURE0+H);let dt=n.get(ct);if(ct.version!==dt.__version||X===!0){if(e.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let nt=ue.getPrimaries(ue.workingColorSpace),bt=S.colorSpace===Vi?null:ue.getPrimaries(S.colorSpace),At=S.colorSpace===Vi||nt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let Q=p(S.image,!1,s.maxTextureSize);Q=Ft(S,Q);let vt=r.convert(S.format,S.colorSpace),It=r.convert(S.type),Rt=y(S.internalFormat,vt,It,S.normalized,S.colorSpace,S.isVideoTexture);mt(k,S);let wt,Ot=S.mipmaps,Vt=S.isVideoTexture!==!0,gt=dt.__version===void 0||X===!0,F=ct.dataReady,_t=E(S,Q);if(S.isDepthTexture)Rt=T(S.format===cs,S.type),gt&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,Rt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,Rt,Q.width,Q.height,0,vt,It,null));else if(S.isDataTexture)if(Ot.length>0){Vt&&gt&&e.texStorage2D(i.TEXTURE_2D,_t,Rt,Ot[0].width,Ot[0].height);for(let nt=0,bt=Ot.length;nt<bt;nt++)wt=Ot[nt],Vt?F&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,wt.width,wt.height,vt,It,wt.data):e.texImage2D(i.TEXTURE_2D,nt,Rt,wt.width,wt.height,0,vt,It,wt.data);S.generateMipmaps=!1}else Vt?(gt&&e.texStorage2D(i.TEXTURE_2D,_t,Rt,Q.width,Q.height),F&&it(S,Q,vt,It)):e.texImage2D(i.TEXTURE_2D,0,Rt,Q.width,Q.height,0,vt,It,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Vt&&gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Rt,Ot[0].width,Ot[0].height,Q.depth);for(let nt=0,bt=Ot.length;nt<bt;nt++)if(wt=Ot[nt],S.format!==kn)if(vt!==null)if(Vt){if(F)if(S.layerUpdates.size>0){let At=uu(wt.width,wt.height,S.format,S.type);for(let st of S.layerUpdates){let Ct=wt.data.subarray(st*At/wt.data.BYTES_PER_ELEMENT,(st+1)*At/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,st,wt.width,wt.height,1,vt,Ct)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,wt.width,wt.height,Q.depth,vt,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,Rt,wt.width,wt.height,Q.depth,0,wt.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,wt.width,wt.height,Q.depth,vt,It,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,Rt,wt.width,wt.height,Q.depth,0,vt,It,wt.data)}else{Vt&&gt&&e.texStorage2D(i.TEXTURE_2D,_t,Rt,Ot[0].width,Ot[0].height);for(let nt=0,bt=Ot.length;nt<bt;nt++)wt=Ot[nt],S.format!==kn?vt!==null?Vt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,wt.width,wt.height,vt,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,Rt,wt.width,wt.height,0,wt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?F&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,wt.width,wt.height,vt,It,wt.data):e.texImage2D(i.TEXTURE_2D,nt,Rt,wt.width,wt.height,0,vt,It,wt.data)}else if(S.isDataArrayTexture)if(Vt){if(gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Rt,Q.width,Q.height,Q.depth),F)if(S.layerUpdates.size>0){let nt=uu(Q.width,Q.height,S.format,S.type);for(let bt of S.layerUpdates){let At=Q.data.subarray(bt*nt/Q.data.BYTES_PER_ELEMENT,(bt+1)*nt/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,bt,Q.width,Q.height,1,vt,It,At)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,vt,It,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,Q.width,Q.height,Q.depth,0,vt,It,Q.data);else if(S.isData3DTexture)Vt?(gt&&e.texStorage3D(i.TEXTURE_3D,_t,Rt,Q.width,Q.height,Q.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,vt,It,Q.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,Q.width,Q.height,Q.depth,0,vt,It,Q.data);else if(S.isFramebufferTexture){if(gt)if(Vt)e.texStorage2D(i.TEXTURE_2D,_t,Rt,Q.width,Q.height);else{let nt=Q.width,bt=Q.height;for(let At=0;At<_t;At++)e.texImage2D(i.TEXTURE_2D,At,Rt,nt,bt,0,vt,It,null),nt>>=1,bt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let nt=i.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),Q.parentNode!==nt){nt.appendChild(Q),u.add(S),nt.onpaint=bt=>{let At=bt.changedElements;for(let st of u)At.includes(st.image)&&(st.needsUpdate=!0)},nt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let At=i.RGBA,st=i.RGBA,Ct=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,At,st,Ct,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(Vt&&gt){let nt=Zt(Ot[0]);e.texStorage2D(i.TEXTURE_2D,_t,Rt,nt.width,nt.height)}for(let nt=0,bt=Ot.length;nt<bt;nt++)wt=Ot[nt],Vt?F&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,vt,It,wt):e.texImage2D(i.TEXTURE_2D,nt,Rt,vt,It,wt);S.generateMipmaps=!1}else if(Vt){if(gt){let nt=Zt(Q);e.texStorage2D(i.TEXTURE_2D,_t,Rt,nt.width,nt.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,It,Q)}else e.texImage2D(i.TEXTURE_2D,0,Rt,vt,It,Q);g(S)&&_(k),dt.__version=ct.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Tt(C,S,H){if(S.image.length!==6)return;let k=q(C,S),X=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);let ct=n.get(X);if(X.version!==ct.__version||k===!0){e.activeTexture(i.TEXTURE0+H);let dt=ue.getPrimaries(ue.workingColorSpace),$=S.colorSpace===Vi?null:ue.getPrimaries(S.colorSpace),Q=S.colorSpace===Vi||dt===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let vt=S.isCompressedTexture||S.image[0].isCompressedTexture,It=S.image[0]&&S.image[0].isDataTexture,Rt=[];for(let st=0;st<6;st++)!vt&&!It?Rt[st]=p(S.image[st],!0,s.maxCubemapSize):Rt[st]=It?S.image[st].image:S.image[st],Rt[st]=Ft(S,Rt[st]);let wt=Rt[0],Ot=r.convert(S.format,S.colorSpace),Vt=r.convert(S.type),gt=y(S.internalFormat,Ot,Vt,S.normalized,S.colorSpace),F=S.isVideoTexture!==!0,_t=ct.__version===void 0||k===!0,nt=X.dataReady,bt=E(S,wt);mt(i.TEXTURE_CUBE_MAP,S);let At;if(vt){F&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,gt,wt.width,wt.height);for(let st=0;st<6;st++){At=Rt[st].mipmaps;for(let Ct=0;Ct<At.length;Ct++){let Pt=At[Ct];S.format!==kn?Ot!==null?F?nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct,0,0,Pt.width,Pt.height,Ot,Pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct,gt,Pt.width,Pt.height,0,Pt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct,0,0,Pt.width,Pt.height,Ot,Vt,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct,gt,Pt.width,Pt.height,0,Ot,Vt,Pt.data)}}}else{if(At=S.mipmaps,F&&_t){At.length>0&&bt++;let st=Zt(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,gt,st.width,st.height)}for(let st=0;st<6;st++)if(It){F?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Rt[st].width,Rt[st].height,Ot,Vt,Rt[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,gt,Rt[st].width,Rt[st].height,0,Ot,Vt,Rt[st].data);for(let Ct=0;Ct<At.length;Ct++){let re=At[Ct].image[st].image;F?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct+1,0,0,re.width,re.height,Ot,Vt,re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct+1,gt,re.width,re.height,0,Ot,Vt,re.data)}}else{F?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ot,Vt,Rt[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,gt,Ot,Vt,Rt[st]);for(let Ct=0;Ct<At.length;Ct++){let Pt=At[Ct];F?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct+1,0,0,Ot,Vt,Pt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct+1,gt,Ot,Vt,Pt.image[st])}}}g(S)&&_(i.TEXTURE_CUBE_MAP),ct.__version=X.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function St(C,S,H,k,X,ct){let dt=r.convert(H.format,H.colorSpace),$=r.convert(H.type),Q=y(H.internalFormat,dt,$,H.normalized,H.colorSpace),vt=n.get(S),It=n.get(H);if(It.__renderTarget=S,!vt.__hasExternalTextures){let Rt=Math.max(1,S.width>>ct),wt=Math.max(1,S.height>>ct);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?e.texImage3D(X,ct,Q,Rt,wt,S.depth,0,dt,$,null):e.texImage2D(X,ct,Q,Rt,wt,0,dt,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Xt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,X,It.__webglTexture,0,Gt(S)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,X,It.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(C,S,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){let k=S.depthTexture,X=k&&k.isDepthTexture?k.type:null,ct=T(S.stencilBuffer,X),dt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Xt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt(S),ct,S.width,S.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt(S),ct,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ct,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,C)}else{let k=S.textures;for(let X=0;X<k.length;X++){let ct=k[X],dt=r.convert(ct.format,ct.colorSpace),$=r.convert(ct.type),Q=y(ct.internalFormat,dt,$,ct.normalized,ct.colorSpace);Xt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt(S),Q,S.width,S.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt(S),Q,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Q,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(C,S,H){let k=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let X=n.get(S.depthTexture);if(X.__renderTarget=S,(!X.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),k){if(X.__webglInit===void 0&&(X.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),X.__webglTexture===void 0){X.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),mt(i.TEXTURE_CUBE_MAP,S.depthTexture);let vt=r.convert(S.depthTexture.format),It=r.convert(S.depthTexture.type),Rt;S.depthTexture.format===mi?Rt=i.DEPTH_COMPONENT24:S.depthTexture.format===cs&&(Rt=i.DEPTH24_STENCIL8);for(let wt=0;wt<6;wt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Rt,S.width,S.height,0,vt,It,null)}}else W(S.depthTexture,0);let ct=X.__webglTexture,dt=Gt(S),$=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,Q=S.depthTexture.format===cs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===mi)Xt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,$,ct,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,Q,$,ct,0);else if(S.depthTexture.format===cs)Xt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,$,ct,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,Q,$,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(C){let S=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let k=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),k){let X=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,k.removeEventListener("dispose",X)};k.addEventListener("dispose",X),S.__depthDisposeCallback=X}S.__boundDepthTexture=k}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(H)for(let k=0;k<6;k++)Ut(S.__webglFramebuffer[k],C,k);else{let k=C.texture.mipmaps;k&&k.length>0?Ut(S.__webglFramebuffer[0],C,0):Ut(S.__webglFramebuffer,C,0)}else if(H){S.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[k]),S.__webglDepthbuffer[k]===void 0)S.__webglDepthbuffer[k]=i.createRenderbuffer(),Wt(S.__webglDepthbuffer[k],C,!1);else{let X=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=S.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,ct)}}else{let k=C.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Wt(S.__webglDepthbuffer,C,!1);else{let X=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,ct)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(C,S,H){let k=n.get(C);S!==void 0&&St(k.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&tt(C)}function et(C){let S=C.texture,H=n.get(C),k=n.get(S);C.addEventListener("dispose",v);let X=C.textures,ct=C.isWebGLCubeRenderTarget===!0,dt=X.length>1;if(dt||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=S.version,o.memory.textures++),ct){H.__webglFramebuffer=[];for(let $=0;$<6;$++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[$]=[];for(let Q=0;Q<S.mipmaps.length;Q++)H.__webglFramebuffer[$][Q]=i.createFramebuffer()}else H.__webglFramebuffer[$]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let $=0;$<S.mipmaps.length;$++)H.__webglFramebuffer[$]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(dt)for(let $=0,Q=X.length;$<Q;$++){let vt=n.get(X[$]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Xt(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let $=0;$<X.length;$++){let Q=X[$];H.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[$]);let vt=r.convert(Q.format,Q.colorSpace),It=r.convert(Q.type),Rt=y(Q.internalFormat,vt,It,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),wt=Gt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,Rt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,H.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Wt(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),mt(i.TEXTURE_CUBE_MAP,S);for(let $=0;$<6;$++)if(S.mipmaps&&S.mipmaps.length>0)for(let Q=0;Q<S.mipmaps.length;Q++)St(H.__webglFramebuffer[$][Q],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q);else St(H.__webglFramebuffer[$],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);g(S)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let $=0,Q=X.length;$<Q;$++){let vt=X[$],It=n.get(vt),Rt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Rt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Rt,It.__webglTexture),mt(Rt,vt),St(H.__webglFramebuffer,C,vt,i.COLOR_ATTACHMENT0+$,Rt,0),g(vt)&&_(Rt)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&($=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,k.__webglTexture),mt($,S),S.mipmaps&&S.mipmaps.length>0)for(let Q=0;Q<S.mipmaps.length;Q++)St(H.__webglFramebuffer[Q],C,S,i.COLOR_ATTACHMENT0,$,Q);else St(H.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,$,0);g(S)&&_($),e.unbindTexture()}C.depthBuffer&&tt(C)}function ft(C){let S=C.textures;for(let H=0,k=S.length;H<k;H++){let X=S[H];if(g(X)){let ct=M(C),dt=n.get(X).__webglTexture;e.bindTexture(ct,dt),_(ct),e.unbindTexture()}}}let at=[],yt=[];function xt(C){if(C.samples>0){if(Xt(C)===!1){let S=C.textures,H=C.width,k=C.height,X=i.COLOR_BUFFER_BIT,ct=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=n.get(C),$=S.length>1;if($)for(let vt=0;vt<S.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer);let Q=C.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let vt=0;vt<S.length;vt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,dt.__webglColorRenderbuffer[vt]);let It=n.get(S[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,It,0)}i.blitFramebuffer(0,0,H,k,0,0,H,k,X,i.NEAREST),c===!0&&(at.length=0,yt.length=0,at.push(i.COLOR_ATTACHMENT0+vt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(at.push(ct),yt.push(ct),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,yt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let vt=0;vt<S.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,dt.__webglColorRenderbuffer[vt]);let It=n.get(S[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,It,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Gt(C){return Math.min(s.maxSamples,C.samples)}function Xt(C){let S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function N(C){let S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Ft(C,S){let H=C.colorSpace,k=C.format,X=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==bn&&H!==Vi&&(ue.getTransfer(H)===ve?(k!==kn||X!==Pn)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",H)),S}function Zt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.getTextureUnits=V,this.setTextureUnits=D,this.setTexture2D=W,this.setTexture2DArray=J,this.setTexture3D=ut,this.setTextureCube=z,this.rebindTextures=lt,this.setupRenderTarget=et,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function oS(i,t){function e(n,s=Vi){let r,o=ue.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===Fc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===eu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===jh)return i.BYTE;if(n===Qh)return i.SHORT;if(n===Or)return i.UNSIGNED_SHORT;if(n===Uc)return i.INT;if(n===ci)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===vi)return i.HALF_FLOAT;if(n===nu)return i.ALPHA;if(n===iu)return i.RGB;if(n===kn)return i.RGBA;if(n===mi)return i.DEPTH_COMPONENT;if(n===cs)return i.DEPTH_STENCIL;if(n===Bc)return i.RED;if(n===zc)return i.RED_INTEGER;if(n===ls)return i.RG;if(n===Hc)return i.RG_INTEGER;if(n===kc)return i.RGBA_INTEGER;if(n===$o||n===Jo||n===jo||n===Qo)if(o===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gc||n===Vc||n===Wc||n===Xc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Gc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qc||n===Yc||n===Zc||n===Kc||n===$c||n===ta||n===Jc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qc||n===Yc)return o===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Kc)return r.COMPRESSED_R11_EAC;if(n===$c)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ta)return r.COMPRESSED_RG11_EAC;if(n===Jc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===jc||n===Qc||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===cl||n===ll||n===hl||n===ul)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===jc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===el)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===il)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ol)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===al)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ll)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ul)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fl||n===dl||n===pl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fl)return o===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ml||n===gl||n===ea||n===xl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ml)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var aS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cS=`
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

}`,Tu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new To(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new An({vertexShader:aS,fragmentShader:cS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ht(new Ue(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Au=class extends gi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,m=null,x=typeof XRWebGLBinding<"u",p=new Tu,g={},_=e.getContextAttributes(),M=null,y=null,T=[],E=[],A=new Et,v=null,b=new Je;b.viewport=new be;let R=new Je;R.viewport=new be;let I=[b,R],P=new Rc,B=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ot=T[q];return ot===void 0&&(ot=new Ar,T[q]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(q){let ot=T[q];return ot===void 0&&(ot=new Ar,T[q]=ot),ot.getGripSpace()},this.getHand=function(q){let ot=T[q];return ot===void 0&&(ot=new Ar,T[q]=ot),ot.getHandSpace()};function D(q){let ot=E.indexOf(q.inputSource);if(ot===-1)return;let it=T[ot];it!==void 0&&(it.update(q.inputSource,q.frame,l||o),it.dispatchEvent({type:q.type,data:q.inputSource}))}function O(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",U);for(let q=0;q<T.length;q++){let ot=E[q];ot!==null&&(E[q]=null,T[q].disconnect(ot))}B=null,V=null,p.reset();for(let q in g)delete g[q];t.setRenderTarget(M),d=null,f=null,u=null,s=null,y=null,mt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",O),s.addEventListener("inputsourceschange",U),_.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,Mt=null,Tt=null;_.depth&&(Tt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=_.stencil?cs:mi,Mt=_.stencil?Br:ci);let St={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(St),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Bn(f.textureWidth,f.textureHeight,{format:kn,type:Pn,depthTexture:new Ui(f.textureWidth,f.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let it={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Bn(d.framebufferWidth,d.framebufferHeight,{format:kn,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),mt.setContext(s),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function U(q){for(let ot=0;ot<q.removed.length;ot++){let it=q.removed[ot],Mt=E.indexOf(it);Mt>=0&&(E[Mt]=null,T[Mt].disconnect(it))}for(let ot=0;ot<q.added.length;ot++){let it=q.added[ot],Mt=E.indexOf(it);if(Mt===-1){for(let St=0;St<T.length;St++)if(St>=E.length){E.push(it),Mt=St;break}else if(E[St]===null){E[St]=it,Mt=St;break}if(Mt===-1)break}let Tt=T[Mt];Tt&&Tt.connect(it)}}let W=new L,J=new L;function ut(q,ot,it){W.setFromMatrixPosition(ot.matrixWorld),J.setFromMatrixPosition(it.matrixWorld);let Mt=W.distanceTo(J),Tt=ot.projectionMatrix.elements,St=it.projectionMatrix.elements,Wt=Tt[14]/(Tt[10]-1),Ut=Tt[14]/(Tt[10]+1),tt=(Tt[9]+1)/Tt[5],lt=(Tt[9]-1)/Tt[5],et=(Tt[8]-1)/Tt[0],ft=(St[8]+1)/St[0],at=Wt*et,yt=Wt*ft,xt=Mt/(-et+ft),Gt=xt*-et;if(ot.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Gt),q.translateZ(xt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Tt[10]===-1)q.projectionMatrix.copy(ot.projectionMatrix),q.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let Xt=Wt+xt,N=Ut+xt,Ft=at-Gt,Zt=yt+(Mt-Gt),C=tt*Ut/N*Xt,S=lt*Ut/N*Xt;q.projectionMatrix.makePerspective(Ft,Zt,C,S,Xt,N),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function z(q,ot){ot===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ot.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ot=q.near,it=q.far;p.texture!==null&&(p.depthNear>0&&(ot=p.depthNear),p.depthFar>0&&(it=p.depthFar)),P.near=R.near=b.near=ot,P.far=R.far=b.far=it,(B!==P.near||V!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),B=P.near,V=P.far),P.layers.mask=q.layers.mask|6,b.layers.mask=P.layers.mask&-5,R.layers.mask=P.layers.mask&-3;let Mt=q.parent,Tt=P.cameras;z(P,Mt);for(let St=0;St<Tt.length;St++)z(Tt[St],Mt);Tt.length===2?ut(P,b,R):P.projectionMatrix.copy(b.projectionMatrix),Y(q,P,Mt)};function Y(q,ot,it){it===null?q.matrix.copy(ot.matrixWorld):(q.matrix.copy(it.matrixWorld),q.matrix.invert(),q.matrix.multiply(ot.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ot.projectionMatrix),q.projectionMatrixInverse.copy(ot.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Cs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(P)},this.getCameraTexture=function(q){return g[q]};let rt=null;function pt(q,ot){if(h=ot.getViewerPose(l||o),m=ot,h!==null){let it=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Mt=!1;it.length!==P.cameras.length&&(P.cameras.length=0,Mt=!0);for(let Ut=0;Ut<it.length;Ut++){let tt=it[Ut],lt=null;if(d!==null)lt=d.getViewport(tt);else{let ft=u.getViewSubImage(f,tt);lt=ft.viewport,Ut===0&&(t.setRenderTargetTextures(y,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(y))}let et=I[Ut];et===void 0&&(et=new Je,et.layers.enable(Ut),et.viewport=new be,I[Ut]=et),et.matrix.fromArray(tt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(tt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(lt.x,lt.y,lt.width,lt.height),Ut===0&&(P.matrix.copy(et.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Mt===!0&&P.cameras.push(et)}let Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let Ut=u.getDepthInformation(it[0]);Ut&&Ut.isValid&&Ut.texture&&p.init(Ut,s.renderState)}if(Tt&&Tt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let Ut=0;Ut<it.length;Ut++){let tt=it[Ut].camera;if(tt){let lt=g[tt];lt||(lt=new To,g[tt]=lt);let et=u.getCameraImage(tt);lt.sourceTexture=et}}}}for(let it=0;it<T.length;it++){let Mt=E[it],Tt=T[it];Mt!==null&&Tt!==void 0&&Tt.update(Mt,ot,l||o)}rt&&rt(q,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),m=null}let mt=new Bp;mt.setAnimationLoop(pt),this.setAnimationLoop=function(q){rt=q},this.dispose=function(){}}},lS=new Jt,Wp=new ie;Wp.set(-1,0,0,0,1,0,0,0,1);function hS(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,cu(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,_,M,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?c(p,g,_,M):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===un&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===un&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let _=t.get(g),M=_.envMap,y=_.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(lS.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Wp),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,_,M){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*_,p.scale.value=M*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,_){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===un&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let _=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function uS(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,T){let E=T.program;n.uniformBlockBinding(y,E)}function l(y,T){let E=s[y.id];E===void 0&&(p(y),E=h(y),s[y.id]=E,y.addEventListener("dispose",_));let A=T.program;n.updateUBOMapping(y,A);let v=t.render.frame;r[y.id]!==v&&(f(y),r[y.id]=v)}function h(y){let T=u();y.__bindingPointIndex=T;let E=i.createBuffer(),A=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,A,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let T=s[y.id],E=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let v=0,b=E.length;v<b;v++){let R=E[v];if(Array.isArray(R))for(let I=0,P=R.length;I<P;I++)d(R[I],v,I,A);else d(R,v,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,T,E,A){if(x(y,T,E,A)===!0){let v=y.__offset,b=y.value;if(Array.isArray(b)){let R=0;for(let I=0;I<b.length;I++){let P=b[I],B=g(P);m(P,y.__data,R),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(b,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function m(y,T,E){typeof y=="number"||typeof y=="boolean"?T[0]=y:y.isMatrix3?(T[0]=y.elements[0],T[1]=y.elements[1],T[2]=y.elements[2],T[3]=0,T[4]=y.elements[3],T[5]=y.elements[4],T[6]=y.elements[5],T[7]=0,T[8]=y.elements[6],T[9]=y.elements[7],T[10]=y.elements[8],T[11]=0):ArrayBuffer.isView(y)?T.set(new y.constructor(y.buffer,y.byteOffset,T.length)):y.toArray(T,E)}function x(y,T,E,A){let v=y.value,b=T+"_"+E;if(A[b]===void 0)return typeof v=="number"||typeof v=="boolean"?A[b]=v:ArrayBuffer.isView(v)?A[b]=v.slice():A[b]=v.clone(),!0;{let R=A[b];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return A[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function p(y){let T=y.uniforms,E=0,A=16;for(let b=0,R=T.length;b<R;b++){let I=Array.isArray(T[b])?T[b]:[T[b]];for(let P=0,B=I.length;P<B;P++){let V=I[P],D=Array.isArray(V.value)?V.value:[V.value];for(let O=0,U=D.length;O<U;O++){let W=D[O],J=g(W),ut=E%A,z=ut%J.boundary,Y=ut+z;E+=z,Y!==0&&A-Y<J.storage&&(E+=A-Y),V.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=E,E+=J.storage}}}let v=E%A;return v>0&&(E+=A-v),y.__size=E,y.__cache={},this}function g(y){let T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",y),T}function _(y){let T=y.target;T.removeEventListener("dispose",_);let E=o.indexOf(T.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function M(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:M}}var fS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Mi=null;function dS(){return Mi===null&&(Mi=new Rr(fS,16,16,ls,vi),Mi.name="DFG_LUT",Mi.minFilter=ke,Mi.magFilter=ke,Mi.wrapS=Xn,Mi.wrapT=Xn,Mi.generateMipmaps=!1,Mi.needsUpdate=!0),Mi}var El=class{constructor(t={}){let{canvas:e=sp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Pn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=d,p=new Set([kc,Hc,zc]),g=new Set([Pn,ci,Or,Br,Fc,Oc]),_=new Uint32Array(4),M=new Int32Array(4),y=new L,T=null,E=null,A=[],v=[],b=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,P=null,B=null,V=null,D=null;this._outputColorSpace=ne;let O=0,U=0,W=null,J=-1,ut=null,z=new be,Y=new be,rt=null,pt=new ht(0),mt=0,q=e.width,ot=e.height,it=1,Mt=null,Tt=null,St=new be(0,0,q,ot),Wt=new be(0,0,q,ot),Ut=!1,tt=new Cr,lt=!1,et=!1,ft=new Jt,at=new L,yt=new be,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function Xt(){return W===null?it:1}let N=n;function Ft(w,G){return e.getContext(w,G)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"185"}`),e.addEventListener("webglcontextlost",re,!1),e.addEventListener("webglcontextrestored",ce,!1),e.addEventListener("webglcontextcreationerror",Fe,!1),N===null){let G="webgl2";if(N=Ft(G,w),N===null)throw Ft(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw Qt("WebGLRenderer: "+w.message),w}let Zt,C,S,H,k,X,ct,dt,$,Q,vt,It,Rt,wt,Ot,Vt,gt,F,_t,nt,bt,At,st;function Ct(){Zt=new vv(N),Zt.init(),bt=new oS(N,Zt),C=new fv(N,Zt,t,bt),S=new sS(N,Zt),C.reversedDepthBuffer&&f&&S.buffers.depth.setReversed(!0),B=N.createFramebuffer(),V=N.createFramebuffer(),D=N.createFramebuffer(),H=new bv(N),k=new WM,X=new rS(N,Zt,S,k,C,bt,H),ct=new yv(R),dt=new wx(N),At=new hv(N,dt),$=new Mv(N,dt,H,At),Q=new Tv(N,$,dt,At,H),F=new Ev(N,C,X),Ot=new dv(k),vt=new VM(R,ct,Zt,C,At,Ot),It=new hS(R,k),Rt=new qM,wt=new jM(Zt),gt=new lv(R,ct,S,Q,m,c),Vt=new iS(R,Q,C),st=new uS(N,H,C,S),_t=new uv(N,Zt,H),nt=new Sv(N,Zt,H),H.programs=vt.programs,R.capabilities=C,R.extensions=Zt,R.properties=k,R.renderLists=Rt,R.shadowMap=Vt,R.state=S,R.info=H}Ct(),x!==Pn&&(b=new wv(x,e.width,e.height,a,s,r));let Pt=new Au(R,N);this.xr=Pt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let w=Zt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Zt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(w){w!==void 0&&(it=w,this.setSize(q,ot,!1))},this.getSize=function(w){return w.set(q,ot)},this.setSize=function(w,G,j=!0){if(Pt.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,ot=G,e.width=Math.floor(w*it),e.height=Math.floor(G*it),j===!0&&(e.style.width=w+"px",e.style.height=G+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(q*it,ot*it).floor()},this.setDrawingBufferSize=function(w,G,j){q=w,ot=G,it=j,e.width=Math.floor(w*j),e.height=Math.floor(G*j),this.setViewport(0,0,w,G)},this.setEffects=function(w){if(x===Pn){Qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let G=0;G<w.length;G++)if(w[G].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(St)},this.setViewport=function(w,G,j,Z){w.isVector4?St.set(w.x,w.y,w.z,w.w):St.set(w,G,j,Z),S.viewport(z.copy(St).multiplyScalar(it).round())},this.getScissor=function(w){return w.copy(Wt)},this.setScissor=function(w,G,j,Z){w.isVector4?Wt.set(w.x,w.y,w.z,w.w):Wt.set(w,G,j,Z),S.scissor(Y.copy(Wt).multiplyScalar(it).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(w){S.setScissorTest(Ut=w)},this.setOpaqueSort=function(w){Mt=w},this.setTransparentSort=function(w){Tt=w},this.getClearColor=function(w){return w.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor(...arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,j=!0){let Z=0;if(w){let K=!1;if(W!==null){let Nt=W.texture.format;K=p.has(Nt)}if(K){let Nt=W.texture.type,Bt=g.has(Nt),Dt=gt.getClearColor(),qt=gt.getClearAlpha(),Kt=Dt.r,oe=Dt.g,he=Dt.b;Bt?(_[0]=Kt,_[1]=oe,_[2]=he,_[3]=qt,N.clearBufferuiv(N.COLOR,0,_)):(M[0]=Kt,M[1]=oe,M[2]=he,M[3]=qt,N.clearBufferiv(N.COLOR,0,M))}else Z|=N.COLOR_BUFFER_BIT}G&&(Z|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(Z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&N.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),P=w},this.dispose=function(){e.removeEventListener("webglcontextlost",re,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",Fe,!1),gt.dispose(),Rt.dispose(),wt.dispose(),k.dispose(),ct.dispose(),Q.dispose(),At.dispose(),st.dispose(),vt.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",ee),Pt.removeEventListener("sessionend",xe),Ae.stop()};function re(w){w.preventDefault(),fo("WebGLRenderer: Context Lost."),I=!0}function ce(){fo("WebGLRenderer: Context Restored."),I=!1;let w=H.autoReset,G=Vt.enabled,j=Vt.autoUpdate,Z=Vt.needsUpdate,K=Vt.type;Ct(),H.autoReset=w,Vt.enabled=G,Vt.autoUpdate=j,Vt.needsUpdate=Z,Vt.type=K}function Fe(w){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function rn(w){let G=w.target;G.removeEventListener("dispose",rn),jn(G)}function jn(w){Ei(w),k.remove(w)}function Ei(w){let G=k.get(w).programs;G!==void 0&&(G.forEach(function(j){vt.releaseProgram(j)}),w.isShaderMaterial&&vt.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,j,Z,K,Nt){G===null&&(G=xt);let Bt=K.isMesh&&K.matrixWorld.determinantAffine()<0,Dt=Yr(w,G,j,Z,K);S.setMaterial(Z,Bt);let qt=j.index,Kt=1;if(Z.wireframe===!0){if(qt=$.getWireframeAttribute(j),qt===void 0)return;Kt=2}let oe=j.drawRange,he=j.attributes.position,$t=oe.start*Kt,Te=(oe.start+oe.count)*Kt;Nt!==null&&($t=Math.max($t,Nt.start*Kt),Te=Math.min(Te,(Nt.start+Nt.count)*Kt)),qt!==null?($t=Math.max($t,0),Te=Math.min(Te,qt.count)):he!=null&&($t=Math.max($t,0),Te=Math.min(Te,he.count));let We=Te-$t;if(We<0||We===1/0)return;At.setup(K,Z,Dt,j,qt);let Ge,we=_t;if(qt!==null&&(Ge=dt.get(qt),we=nt,we.setIndex(Ge)),K.isMesh)Z.wireframe===!0?(S.setLineWidth(Z.wireframeLinewidth*Xt()),we.setMode(N.LINES)):we.setMode(N.TRIANGLES);else if(K.isLine){let pn=Z.linewidth;pn===void 0&&(pn=1),S.setLineWidth(pn*Xt()),K.isLineSegments?we.setMode(N.LINES):K.isLineLoop?we.setMode(N.LINE_LOOP):we.setMode(N.LINE_STRIP)}else K.isPoints?we.setMode(N.POINTS):K.isSprite&&we.setMode(N.TRIANGLES);if(K.isBatchedMesh)if(Zt.get("WEBGL_multi_draw"))we.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let pn=K._multiDrawStarts,kt=K._multiDrawCounts,Un=K._multiDrawCount,me=qt?dt.get(qt).bytesPerElement:1,Vn=k.get(Z).currentProgram.getUniforms();for(let ui=0;ui<Un;ui++)Vn.setValue(N,"_gl_DrawID",ui),we.render(pn[ui]/me,kt[ui])}else if(K.isInstancedMesh)we.renderInstances($t,We,K.count);else if(j.isInstancedBufferGeometry){let pn=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,kt=Math.min(j.instanceCount,pn);we.renderInstances($t,We,kt)}else we.render($t,We)};function tn(w,G,j){w.transparent===!0&&w.side===De&&w.forceSinglePass===!1?(w.side=un,w.needsUpdate=!0,ln(w,G,j),w.side=xn,w.needsUpdate=!0,ln(w,G,j),w.side=De):ln(w,G,j)}this.compile=function(w,G,j=null){j===null&&(j=w),E=wt.get(j),E.init(G),v.push(E),j.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(E.pushLight(K),K.castShadow&&E.pushShadow(K))}),w!==j&&w.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(E.pushLight(K),K.castShadow&&E.pushShadow(K))}),E.setupLights();let Z=new Set;return w.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Nt=K.material;if(Nt)if(Array.isArray(Nt))for(let Bt=0;Bt<Nt.length;Bt++){let Dt=Nt[Bt];tn(Dt,j,K),Z.add(Dt)}else tn(Nt,j,K),Z.add(Nt)}),E=v.pop(),Z},this.compileAsync=function(w,G,j=null){let Z=this.compile(w,G,j);return new Promise(K=>{function Nt(){if(Z.forEach(function(Bt){k.get(Bt).currentProgram.isReady()&&Z.delete(Bt)}),Z.size===0){K(w);return}setTimeout(Nt,10)}Zt.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let wn=null;function Dn(w){wn&&wn(w)}function ee(){Ae.stop()}function xe(){Ae.start()}let Ae=new Bp;Ae.setAnimationLoop(Dn),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(w){wn=w,Pt.setAnimationLoop(w),w===null?Ae.stop():Ae.start()},Pt.addEventListener("sessionstart",ee),Pt.addEventListener("sessionend",xe),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;P!==null&&P.renderStart(w,G);let j=Pt.enabled===!0&&Pt.isPresenting===!0,Z=b!==null&&(W===null||j)&&b.begin(R,W);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(G),G=Pt.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,G,W),E=wt.get(w,v.length),E.init(G),E.state.textureUnits=X.getTextureUnits(),v.push(E),ft.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),tt.setFromProjectionMatrix(ft,ii,G.reversedDepth),et=this.localClippingEnabled,lt=Ot.init(this.clippingPlanes,et),T=Rt.get(w,A.length),T.init(),A.push(T),Pt.enabled===!0&&Pt.isPresenting===!0){let Bt=R.xr.getDepthSensingMesh();Bt!==null&&ye(Bt,G,-1/0,R.sortObjects)}ye(w,G,0,R.sortObjects),T.finish(),R.sortObjects===!0&&T.sort(Mt,Tt,G.reversedDepth),Gt=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,Gt&&gt.addToRenderList(T,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),lt===!0&&Ot.beginShadows();let K=E.state.shadowsArray;if(Vt.render(K,w,G),lt===!0&&Ot.endShadows(),(Z&&b.hasRenderPass())===!1){let Bt=T.opaque,Dt=T.transmissive;if(E.setupLights(),G.isArrayCamera){let qt=G.cameras;if(Dt.length>0)for(let Kt=0,oe=qt.length;Kt<oe;Kt++){let he=qt[Kt];Be(Bt,Dt,w,he)}Gt&&gt.render(w);for(let Kt=0,oe=qt.length;Kt<oe;Kt++){let he=qt[Kt];Oe(T,w,he,he.viewport)}}else Dt.length>0&&Be(Bt,Dt,w,G),Gt&&gt.render(w),Oe(T,w,G)}W!==null&&U===0&&(X.updateMultisampleRenderTarget(W),X.updateRenderTargetMipmap(W)),Z&&b.end(R),w.isScene===!0&&w.onAfterRender(R,w,G),At.resetDefaultState(),J=-1,ut=null,v.pop(),v.length>0?(E=v[v.length-1],X.setTextureUnits(E.state.textureUnits),lt===!0&&Ot.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?T=A[A.length-1]:T=null,P!==null&&P.renderEnd()};function ye(w,G,j,Z){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLightProbeGrid)E.pushLightProbeGrid(w);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||tt.intersectsSprite(w)){Z&&yt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ft);let Bt=Q.update(w),Dt=w.material;Dt.visible&&T.push(w,Bt,Dt,j,yt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||tt.intersectsObject(w))){let Bt=Q.update(w),Dt=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),yt.copy(w.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),yt.copy(Bt.boundingSphere.center)),yt.applyMatrix4(w.matrixWorld).applyMatrix4(ft)),Array.isArray(Dt)){let qt=Bt.groups;for(let Kt=0,oe=qt.length;Kt<oe;Kt++){let he=qt[Kt],$t=Dt[he.materialIndex];$t&&$t.visible&&T.push(w,Bt,$t,j,yt.z,he)}}else Dt.visible&&T.push(w,Bt,Dt,j,yt.z,null)}}let Nt=w.children;for(let Bt=0,Dt=Nt.length;Bt<Dt;Bt++)ye(Nt[Bt],G,j,Z)}function Oe(w,G,j,Z){let{opaque:K,transmissive:Nt,transparent:Bt}=w;E.setupLightsView(j),lt===!0&&Ot.setGlobalState(R.clippingPlanes,j),Z&&S.viewport(z.copy(Z)),K.length>0&&ze(K,G,j),Nt.length>0&&ze(Nt,G,j),Bt.length>0&&ze(Bt,G,j),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Be(w,G,j,Z){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Z.id]===void 0){let $t=Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Z.id]=new Bn(1,1,{generateMipmaps:!0,type:$t?vi:Pn,minFilter:ai,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace})}let Nt=E.state.transmissionRenderTarget[Z.id],Bt=Z.viewport||z;Nt.setSize(Bt.z*R.transmissionResolutionScale,Bt.w*R.transmissionResolutionScale);let Dt=R.getRenderTarget(),qt=R.getActiveCubeFace(),Kt=R.getActiveMipmapLevel();R.setRenderTarget(Nt),R.getClearColor(pt),mt=R.getClearAlpha(),mt<1&&R.setClearColor(16777215,.5),R.clear(),Gt&&gt.render(j);let oe=R.toneMapping;R.toneMapping=oi;let he=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),E.setupLightsView(Z),lt===!0&&Ot.setGlobalState(R.clippingPlanes,Z),ze(w,j,Z),X.updateMultisampleRenderTarget(Nt),X.updateRenderTargetMipmap(Nt),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Te=0,We=G.length;Te<We;Te++){let Ge=G[Te],{object:we,geometry:pn,material:kt,group:Un}=Ge;if(kt.side===De&&we.layers.test(Z.layers)){let me=kt.side;kt.side=un,kt.needsUpdate=!0,Mn(we,j,Z,pn,kt,Un),kt.side=me,kt.needsUpdate=!0,$t=!0}}$t===!0&&(X.updateMultisampleRenderTarget(Nt),X.updateRenderTargetMipmap(Nt))}R.setRenderTarget(Dt,qt,Kt),R.setClearColor(pt,mt),he!==void 0&&(Z.viewport=he),R.toneMapping=oe}function ze(w,G,j){let Z=G.isScene===!0?G.overrideMaterial:null;for(let K=0,Nt=w.length;K<Nt;K++){let Bt=w[K],{object:Dt,geometry:qt,group:Kt}=Bt,oe=Bt.material;oe.allowOverride===!0&&Z!==null&&(oe=Z),Dt.layers.test(j.layers)&&Mn(Dt,G,j,qt,oe,Kt)}}function Mn(w,G,j,Z,K,Nt){w.onBeforeRender(R,G,j,Z,K,Nt),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(R,G,j,Z,w,Nt),K.transparent===!0&&K.side===De&&K.forceSinglePass===!1?(K.side=un,K.needsUpdate=!0,R.renderBufferDirect(j,G,Z,K,w,Nt),K.side=xn,K.needsUpdate=!0,R.renderBufferDirect(j,G,Z,K,w,Nt),K.side=De):R.renderBufferDirect(j,G,Z,K,w,Nt),w.onAfterRender(R,G,j,Z,K,Nt)}function ln(w,G,j){G.isScene!==!0&&(G=xt);let Z=k.get(w),K=E.state.lights,Nt=E.state.shadowsArray,Bt=K.state.version,Dt=vt.getParameters(w,K.state,Nt,G,j,E.state.lightProbeGridArray),qt=vt.getProgramCacheKey(Dt),Kt=Z.programs;Z.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?G.environment:null,Z.fog=G.fog;let oe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Z.envMap=ct.get(w.envMap||Z.environment,oe),Z.envMapRotation=Z.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,Kt===void 0&&(w.addEventListener("dispose",rn),Kt=new Map,Z.programs=Kt);let he=Kt.get(qt);if(he!==void 0){if(Z.currentProgram===he&&Z.lightsStateVersion===Bt)return on(w,Dt),he}else Dt.uniforms=vt.getUniforms(w),P!==null&&w.isNodeMaterial&&P.build(w,j,Dt),w.onBeforeCompile(Dt,R),he=vt.acquireProgram(Dt,qt),Kt.set(qt,he),Z.uniforms=Dt.uniforms;let $t=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&($t.clippingPlanes=Ot.uniform),on(w,Dt),Z.needsLights=Yl(w),Z.lightsStateVersion=Bt,Z.needsLights&&($t.ambientLightColor.value=K.state.ambient,$t.lightProbe.value=K.state.probe,$t.directionalLights.value=K.state.directional,$t.directionalLightShadows.value=K.state.directionalShadow,$t.spotLights.value=K.state.spot,$t.spotLightShadows.value=K.state.spotShadow,$t.rectAreaLights.value=K.state.rectArea,$t.ltc_1.value=K.state.rectAreaLTC1,$t.ltc_2.value=K.state.rectAreaLTC2,$t.pointLights.value=K.state.point,$t.pointLightShadows.value=K.state.pointShadow,$t.hemisphereLights.value=K.state.hemi,$t.directionalShadowMatrix.value=K.state.directionalShadowMatrix,$t.spotLightMatrix.value=K.state.spotLightMatrix,$t.spotLightMap.value=K.state.spotLightMap,$t.pointShadowMatrix.value=K.state.pointShadowMatrix),Z.lightProbeGrid=E.state.lightProbeGridArray.length>0,Z.currentProgram=he,Z.uniformsList=null,he}function hn(w){if(w.uniformsList===null){let G=w.currentProgram.getUniforms();w.uniformsList=kr.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function on(w,G){let j=k.get(w);j.outputColorSpace=G.outputColorSpace,j.batching=G.batching,j.batchingColor=G.batchingColor,j.instancing=G.instancing,j.instancingColor=G.instancingColor,j.instancingMorph=G.instancingMorph,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}function Ti(w,G){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;y.setFromMatrixPosition(G.matrixWorld);for(let j=0,Z=w.length;j<Z;j++){let K=w[j];if(K.texture!==null&&K.boundingBox.containsPoint(y))return K}return null}function Yr(w,G,j,Z,K){G.isScene!==!0&&(G=xt),X.resetTextureUnits();let Nt=G.fog,Bt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?G.environment:null,Dt=W===null?R.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:ue.workingColorSpace,qt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Kt=ct.get(Z.envMap||Bt,qt),oe=Z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,he=!!j.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),$t=!!j.morphAttributes.position,Te=!!j.morphAttributes.normal,We=!!j.morphAttributes.color,Ge=oi;Z.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ge=R.toneMapping);let we=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,pn=we!==void 0?we.length:0,kt=k.get(Z),Un=E.state.lights;if(lt===!0&&(et===!0||w!==ut)){let Ne=w===ut&&Z.id===J;Ot.setState(Z,w,Ne)}let me=!1;Z.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Un.state.version||kt.outputColorSpace!==Dt||K.isBatchedMesh&&kt.batching===!1||!K.isBatchedMesh&&kt.batching===!0||K.isBatchedMesh&&kt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&kt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&kt.instancing===!1||!K.isInstancedMesh&&kt.instancing===!0||K.isSkinnedMesh&&kt.skinning===!1||!K.isSkinnedMesh&&kt.skinning===!0||K.isInstancedMesh&&kt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&kt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&kt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&kt.instancingMorph===!1&&K.morphTexture!==null||kt.envMap!==Kt||Z.fog===!0&&kt.fog!==Nt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Ot.numPlanes||kt.numIntersection!==Ot.numIntersection)||kt.vertexAlphas!==oe||kt.vertexTangents!==he||kt.morphTargets!==$t||kt.morphNormals!==Te||kt.morphColors!==We||kt.toneMapping!==Ge||kt.morphTargetsCount!==pn||!!kt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(me=!0):(me=!0,kt.__version=Z.version);let Vn=kt.currentProgram;me===!0&&(Vn=ln(Z,G,K),P&&Z.isNodeMaterial&&P.onUpdateProgram(Z,Vn,kt));let ui=!1,Xi=!1,tr=!1,Re=Vn.getUniforms(),Xe=kt.uniforms;if(S.useProgram(Vn.program)&&(ui=!0,Xi=!0,tr=!0),Z.id!==J&&(J=Z.id,Xi=!0),kt.needsLights){let Ne=Ti(E.state.lightProbeGridArray,K);kt.lightProbeGrid!==Ne&&(kt.lightProbeGrid=Ne,Xi=!0)}if(ui||ut!==w){S.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Re.setValue(N,"projectionMatrix",w.projectionMatrix),Re.setValue(N,"viewMatrix",w.matrixWorldInverse);let Yi=Re.map.cameraPosition;Yi!==void 0&&Yi.setValue(N,at.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&Re.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Re.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),ut!==w&&(ut=w,Xi=!0,tr=!0)}if(kt.needsLights&&(Un.state.directionalShadowMap.length>0&&Re.setValue(N,"directionalShadowMap",Un.state.directionalShadowMap,X),Un.state.spotShadowMap.length>0&&Re.setValue(N,"spotShadowMap",Un.state.spotShadowMap,X),Un.state.pointShadowMap.length>0&&Re.setValue(N,"pointShadowMap",Un.state.pointShadowMap,X)),K.isSkinnedMesh){Re.setOptional(N,K,"bindMatrix"),Re.setOptional(N,K,"bindMatrixInverse");let Ne=K.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),Re.setValue(N,"boneTexture",Ne.boneTexture,X))}K.isBatchedMesh&&(Re.setOptional(N,K,"batchingTexture"),Re.setValue(N,"batchingTexture",K._matricesTexture,X),Re.setOptional(N,K,"batchingIdTexture"),Re.setValue(N,"batchingIdTexture",K._indirectTexture,X),Re.setOptional(N,K,"batchingColorTexture"),K._colorsTexture!==null&&Re.setValue(N,"batchingColorTexture",K._colorsTexture,X));let qi=j.morphAttributes;if((qi.position!==void 0||qi.normal!==void 0||qi.color!==void 0)&&F.update(K,j,Vn),(Xi||kt.receiveShadow!==K.receiveShadow)&&(kt.receiveShadow=K.receiveShadow,Re.setValue(N,"receiveShadow",K.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&G.environment!==null&&(Xe.envMapIntensity.value=G.environmentIntensity),Xe.dfgLUT!==void 0&&(Xe.dfgLUT.value=dS()),Xi){if(Re.setValue(N,"toneMappingExposure",R.toneMappingExposure),kt.needsLights&&Zr(Xe,tr),Nt&&Z.fog===!0&&It.refreshFogUniforms(Xe,Nt),It.refreshMaterialUniforms(Xe,Z,it,ot,E.state.transmissionRenderTarget[w.id]),kt.needsLights&&kt.lightProbeGrid){let Ne=kt.lightProbeGrid;Xe.probesSH.value=Ne.texture,Xe.probesMin.value.copy(Ne.boundingBox.min),Xe.probesMax.value.copy(Ne.boundingBox.max),Xe.probesResolution.value.copy(Ne.resolution)}kr.upload(N,hn(kt),Xe,X)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(kr.upload(N,hn(kt),Xe,X),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Re.setValue(N,"center",K.center),Re.setValue(N,"modelViewMatrix",K.modelViewMatrix),Re.setValue(N,"normalMatrix",K.normalMatrix),Re.setValue(N,"modelMatrix",K.matrixWorld),Z.uniformsGroups!==void 0){let Ne=Z.uniformsGroups;for(let Yi=0,er=Ne.length;Yi<er;Yi++){let Nf=Ne[Yi];st.update(Nf,Vn),st.bind(Nf,Vn)}}return Vn}function Zr(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function Yl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(w,G,j){let Z=k.get(w);Z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),k.get(w.texture).__webglTexture=G,k.get(w.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:j,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){let j=k.get(w);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(w,G=0,j=0){W=w,O=G,U=j;let Z=null,K=!1,Nt=!1;if(w){let Dt=k.get(w);if(Dt.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(N.FRAMEBUFFER,Dt.__webglFramebuffer),z.copy(w.viewport),Y.copy(w.scissor),rt=w.scissorTest,S.viewport(z),S.scissor(Y),S.setScissorTest(rt),J=-1;return}else if(Dt.__webglFramebuffer===void 0)X.setupRenderTarget(w);else if(Dt.__hasExternalTextures)X.rebindTextures(w,k.get(w.texture).__webglTexture,k.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let oe=w.depthTexture;if(Dt.__boundDepthTexture!==oe){if(oe!==null&&k.has(oe)&&(w.width!==oe.image.width||w.height!==oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(w)}}let qt=w.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Nt=!0);let Kt=k.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Kt[G])?Z=Kt[G][j]:Z=Kt[G],K=!0):w.samples>0&&X.useMultisampledRTT(w)===!1?Z=k.get(w).__webglMultisampledFramebuffer:Array.isArray(Kt)?Z=Kt[j]:Z=Kt,z.copy(w.viewport),Y.copy(w.scissor),rt=w.scissorTest}else z.copy(St).multiplyScalar(it).floor(),Y.copy(Wt).multiplyScalar(it).floor(),rt=Ut;if(j!==0&&(Z=B),S.bindFramebuffer(N.FRAMEBUFFER,Z)&&S.drawBuffers(w,Z),S.viewport(z),S.scissor(Y),S.setScissorTest(rt),K){let Dt=k.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+G,Dt.__webglTexture,j)}else if(Nt){let Dt=G;for(let qt=0;qt<w.textures.length;qt++){let Kt=k.get(w.textures[qt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+qt,Kt.__webglTexture,j,Dt)}}else if(w!==null&&j!==0){let Dt=k.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Dt.__webglTexture,j)}J=-1},this.readRenderTargetPixels=function(w,G,j,Z,K,Nt,Bt,Dt=0){if(!(w&&w.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=k.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Bt!==void 0&&(qt=qt[Bt]),qt){S.bindFramebuffer(N.FRAMEBUFFER,qt);try{let Kt=w.textures[Dt],oe=Kt.format,he=Kt.type;if(w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Dt),!C.textureFormatReadable(oe)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(he)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-Z&&j>=0&&j<=w.height-K&&N.readPixels(G,j,Z,K,bt.convert(oe),bt.convert(he),Nt)}finally{let Kt=W!==null?k.get(W).__webglFramebuffer:null;S.bindFramebuffer(N.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(w,G,j,Z,K,Nt,Bt,Dt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=k.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Bt!==void 0&&(qt=qt[Bt]),qt)if(G>=0&&G<=w.width-Z&&j>=0&&j<=w.height-K){S.bindFramebuffer(N.FRAMEBUFFER,qt);let Kt=w.textures[Dt],oe=Kt.format,he=Kt.type;if(w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Dt),!C.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $t=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,$t),N.bufferData(N.PIXEL_PACK_BUFFER,Nt.byteLength,N.STREAM_READ),N.readPixels(G,j,Z,K,bt.convert(oe),bt.convert(he),0);let Te=W!==null?k.get(W).__webglFramebuffer:null;S.bindFramebuffer(N.FRAMEBUFFER,Te);let We=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await op(N,We,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,$t),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Nt),N.deleteBuffer($t),N.deleteSync(We),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,G=null,j=0){let Z=Math.pow(2,-j),K=Math.floor(w.image.width*Z),Nt=Math.floor(w.image.height*Z),Bt=G!==null?G.x:0,Dt=G!==null?G.y:0;X.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,j,0,0,Bt,Dt,K,Nt),S.unbindTexture()},this.copyTextureToTexture=function(w,G,j=null,Z=null,K=0,Nt=0){let Bt,Dt,qt,Kt,oe,he,$t,Te,We,Ge=w.isCompressedTexture?w.mipmaps[Nt]:w.image;if(j!==null)Bt=j.max.x-j.min.x,Dt=j.max.y-j.min.y,qt=j.isBox3?j.max.z-j.min.z:1,Kt=j.min.x,oe=j.min.y,he=j.isBox3?j.min.z:0;else{let Xe=Math.pow(2,-K);Bt=Math.floor(Ge.width*Xe),Dt=Math.floor(Ge.height*Xe),w.isDataArrayTexture?qt=Ge.depth:w.isData3DTexture?qt=Math.floor(Ge.depth*Xe):qt=1,Kt=0,oe=0,he=0}Z!==null?($t=Z.x,Te=Z.y,We=Z.z):($t=0,Te=0,We=0);let we=bt.convert(G.format),pn=bt.convert(G.type),kt;G.isData3DTexture?(X.setTexture3D(G,0),kt=N.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(X.setTexture2DArray(G,0),kt=N.TEXTURE_2D_ARRAY):(X.setTexture2D(G,0),kt=N.TEXTURE_2D),S.activeTexture(N.TEXTURE0),S.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,G.flipY),S.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),S.pixelStorei(N.UNPACK_ALIGNMENT,G.unpackAlignment);let Un=S.getParameter(N.UNPACK_ROW_LENGTH),me=S.getParameter(N.UNPACK_IMAGE_HEIGHT),Vn=S.getParameter(N.UNPACK_SKIP_PIXELS),ui=S.getParameter(N.UNPACK_SKIP_ROWS),Xi=S.getParameter(N.UNPACK_SKIP_IMAGES);S.pixelStorei(N.UNPACK_ROW_LENGTH,Ge.width),S.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ge.height),S.pixelStorei(N.UNPACK_SKIP_PIXELS,Kt),S.pixelStorei(N.UNPACK_SKIP_ROWS,oe),S.pixelStorei(N.UNPACK_SKIP_IMAGES,he);let tr=w.isDataArrayTexture||w.isData3DTexture,Re=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){let Xe=k.get(w),qi=k.get(G),Ne=k.get(Xe.__renderTarget),Yi=k.get(qi.__renderTarget);S.bindFramebuffer(N.READ_FRAMEBUFFER,Ne.__webglFramebuffer),S.bindFramebuffer(N.DRAW_FRAMEBUFFER,Yi.__webglFramebuffer);for(let er=0;er<qt;er++)tr&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,k.get(w).__webglTexture,K,he+er),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,k.get(G).__webglTexture,Nt,We+er)),N.blitFramebuffer(Kt,oe,Bt,Dt,$t,Te,Bt,Dt,N.DEPTH_BUFFER_BIT,N.NEAREST);S.bindFramebuffer(N.READ_FRAMEBUFFER,null),S.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(K!==0||w.isRenderTargetTexture||k.has(w)){let Xe=k.get(w),qi=k.get(G);S.bindFramebuffer(N.READ_FRAMEBUFFER,V),S.bindFramebuffer(N.DRAW_FRAMEBUFFER,D);for(let Ne=0;Ne<qt;Ne++)tr?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Xe.__webglTexture,K,he+Ne):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Xe.__webglTexture,K),Re?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,qi.__webglTexture,Nt,We+Ne):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,qi.__webglTexture,Nt),K!==0?N.blitFramebuffer(Kt,oe,Bt,Dt,$t,Te,Bt,Dt,N.COLOR_BUFFER_BIT,N.NEAREST):Re?N.copyTexSubImage3D(kt,Nt,$t,Te,We+Ne,Kt,oe,Bt,Dt):N.copyTexSubImage2D(kt,Nt,$t,Te,Kt,oe,Bt,Dt);S.bindFramebuffer(N.READ_FRAMEBUFFER,null),S.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Re?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(kt,Nt,$t,Te,We,Bt,Dt,qt,we,pn,Ge.data):G.isCompressedArrayTexture?N.compressedTexSubImage3D(kt,Nt,$t,Te,We,Bt,Dt,qt,we,Ge.data):N.texSubImage3D(kt,Nt,$t,Te,We,Bt,Dt,qt,we,pn,Ge):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Nt,$t,Te,Bt,Dt,we,pn,Ge.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Nt,$t,Te,Ge.width,Ge.height,we,Ge.data):N.texSubImage2D(N.TEXTURE_2D,Nt,$t,Te,Bt,Dt,we,pn,Ge);S.pixelStorei(N.UNPACK_ROW_LENGTH,Un),S.pixelStorei(N.UNPACK_IMAGE_HEIGHT,me),S.pixelStorei(N.UNPACK_SKIP_PIXELS,Vn),S.pixelStorei(N.UNPACK_SKIP_ROWS,ui),S.pixelStorei(N.UNPACK_SKIP_IMAGES,Xi),Nt===0&&G.generateMipmaps&&N.generateMipmap(kt),S.unbindTexture()},this.initRenderTarget=function(w){k.get(w).__webglFramebuffer===void 0&&X.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?X.setTextureCube(w,0):w.isData3DTexture?X.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?X.setTexture2DArray(w,0):X.setTexture2D(w,0),S.unbindTexture()},this.resetState=function(){O=0,U=0,W=null,S.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}};async function Xp(){if(typeof window<"u"&&window.MCGROT_ASSETS)return window.MCGROT_ASSETS;let[i,t,e,n,s]=await Promise.all([fetch("assets/manifest.json").then(o=>o.json()),fetch("assets/leith.json").then(o=>o.json()),fetch("assets/catalog.json").then(o=>o.ok?o.json():null).catch(()=>null),fetch("assets/shopfronts/manifest.json").then(o=>o.ok?o.json():null).catch(()=>null),fetch("assets/shopfronts/atlas-pages.json").then(o=>o.ok?o.json():null).catch(()=>null)]),r=await fetch("assets/comic-lines.json").then(o=>o.ok?o.json():null).catch(()=>null);return{manifest:i,leith:t,catalog:e,facadeManifest:n,facadeAtlas:s,comicLines:r,images:null,audio:null}}function Ln(i,t){if(i){if(i.images&&i.images[t])return i.images[t];if(i.audio&&i.audio[t])return i.audio[t]}return`assets/${t}`}function ae(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new ge,l=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=qp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let m=qp(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function qp(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new qe(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<e;m++){let x=h.getComponent(f,m);a.setComponent(f+u,m,x)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function wu(i,t){if(t===su)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===zr||t===na){let e=i.getIndex();if(e===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=e.count-2,s=[];if(t===zr)for(let o=1;o<=n;o++)s.push(e.getX(0)),s.push(e.getX(o)),s.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(e.getX(o)),s.push(e.getX(o+1)),s.push(e.getX(o+2))):(s.push(e.getX(o+2)),s.push(e.getX(o+1)),s.push(e.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}var aa=(()=>{let i=6221086;return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}})(),Kp=8,Cu=2.4,Yp=1.435,wl=.075,Zp=.09,pS=620,mS=90,gS=34,xS=.04;function Kn(i,t,e){let n=Math.imul(i,374761393)^Math.imul(t,668265263)^Math.imul(e,2246822519);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function _S(i,t,e,n){let s=Math.floor(i),r=Math.floor(t),o=i-s,a=t-r,c=o*o*(3-2*o),l=a*a*(3-2*a),h=(x,p)=>Kn((x%e+e)%e,(p%e+e)%e,n),u=h(s,r),f=h(s+1,r),d=h(s,r+1),m=h(s+1,r+1);return u+(f-u)*c+(d+(m-d)*c-(u+(f-u)*c))*l}function je(i,t,e,n,s){let r=0,o=.5,a=1;for(let c=0;c<n;c++)r+=o*_S(i*a,t*a,e*a,s+c*17),a*=2,o*=.5;return r}function Vs(i,t){let e=new Le(i);return e.wrapS=e.wrapT=Yn,e.colorSpace=ne,e.anisotropy=16,t&&e.repeat.set(t[0],t[1]),e}function $p(){let e=document.createElement("canvas");e.width=e.height=512;let n=e.getContext("2d"),s=n.createImageData(512,512),r=s.data;for(let o=0;o<512;o++)for(let a=0;a<512;a++){let c=a/512*8,l=o/512*8,h=44,u=45,f=41,d=je(c,l,8,4,1)-.5;h+=d*26,u+=d*26,f+=d*22;let m=je(c*.5,l*.5,Math.max(1,4),2,7);if(m>.6){let T=Math.min(1,(m-.6)*6);h+=(26-h)*.55*T,u+=(26-u)*.55*T,f+=(25-f)*.55*T}let x=Kn(a,o,99),p=x>.86?(x-.86)*300:x<.1?-x*90:0;h+=p,u+=p,f+=p*.9;let g=c*1.6+je(c*3,l*3,32,2,55)*1.4,_=l*1.6+je(c*3+9,l*3+9,32,2,71)*1.4,M=Math.abs(je(g,_,16,3,21)-.5);if(M<.012){let T=1-M/.012;h-=15*T,u-=15*T,f-=14*T}let y=(o*512+a)*4;r[y]=Math.max(0,Math.min(255,h)),r[y+1]=Math.max(0,Math.min(255,u)),r[y+2]=Math.max(0,Math.min(255,f)),r[y+3]=255}return n.putImageData(s,0,0),Vs(e)}function Jp(){let n=document.createElement("canvas");n.width=n.height=512;let s=n.getContext("2d"),r=s.createImageData(512,512),o=r.data,a=512/4,c=3;for(let l=0;l<512;l++)for(let h=0;h<512;h++){let u=Math.floor(h/a),f=Math.floor(l/a),d=h-u*a,m=l-f*a,x=d<c||m<c||d>a-c||m>a-c,p=(Kn(u,f,5)-.5)*18,g=78+p,_=77+p,M=71+p,y=h/512*8,T=l/512*8,E=je(y,T,8,4,3)-.5;g+=E*34,_+=E*34,M+=E*30,x&&(g*=.52,_*=.56,M*=.48);let A=Kn(h,l,41),v=A>.9?(A-.9)*160:0;g+=v,_+=v,M+=v;let b=(l*512+h)*4;o[b]=Math.max(0,Math.min(255,g)),o[b+1]=Math.max(0,Math.min(255,_)),o[b+2]=Math.max(0,Math.min(255,M)),o[b+3]=255}return s.putImageData(r,0,0),Vs(n)}function jp(i,t){let n=document.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d"),r=s.createImageData(256,256),o=r.data,a=256/2;for(let l=0;l<256;l++)for(let h=0;h<256;h++){let u=(h-a)/a,f=(l-a)/a,d=Math.atan2(f,u),m=Math.hypot(u,f),x=.7+.26*je(Math.cos(d)*2+4,Math.sin(d)*2+4,8,3,i),[p,g,_,M]=t(m/x,h,l),y=(l*256+h)*4;o[y]=Math.max(0,Math.min(255,p)),o[y+1]=Math.max(0,Math.min(255,g)),o[y+2]=Math.max(0,Math.min(255,_)),o[y+3]=Math.max(0,Math.min(255,M))}s.putImageData(r,0,0);let c=new Le(n);return c.colorSpace=ne,c.anisotropy=16,c}function Ru(i,t,e){return[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e]}function yS(){let i=[10,10,9],t=[40,39,35],e=[104,100,88];return jp(11,(n,s,r)=>{let o=Kn(s,r,63),a;n<.72?a=Ru(i,t,ca(0,.72,n)):(a=Ru(t,e,ca(.72,.97,n)),a=a.map(l=>l+(o-.5)*26));let c=(1-ca(.9,1,n))*255;return[a[0],a[1],a[2],c]})}function vS(){let i=[104,110,96],t=[52,54,48];return jp(23,e=>{let n=Ru(i,t,ca(.35,1,e)),s=(1-ca(.86,1,e))*255;return[n[0],n[1],n[2],s]})}function ca(i,t,e){let n=Math.max(0,Math.min(1,(e-i)/(t-i||1e-6)));return n*n*(3-2*n)}var Iu=26;function Qp(){let e=document.createElement("canvas");e.width=e.height=512;let n=e.getContext("2d"),s=n.createImageData(512,512),r=s.data;for(let o=0;o<512;o++)for(let a=0;a<512;a++){let c=a/512*8,l=o/512*8,h=62,u=52,f=36,d=je(c,l,8,4,131)-.5;h+=d*30,u+=d*26,f+=d*20;let m=je(c*.9+3,l*.9+3,8,3,137);if(m>.56){let M=Math.min(1,(m-.56)*5);h+=(52-h)*.6*M,u+=(60-u)*.6*M,f+=(34-f)*.6*M}let x=je(c*.6+11,l*.6+11,8,3,149);if(x<.42){let M=Math.min(1,(.42-x)*4);h*=1-.28*M,u*=1-.26*M,f*=1-.22*M}let p=Kn(a,o,151),g=p>.9?(p-.9)*220:p<.07?-p*120:0;h+=g,u+=g*.95,f+=g*.8;let _=(o*512+a)*4;r[_]=Math.max(0,Math.min(255,h)),r[_+1]=Math.max(0,Math.min(255,u)),r[_+2]=Math.max(0,Math.min(255,f)),r[_+3]=255}return n.putImageData(s,0,0),Vs(e)}function tm(){let e=document.createElement("canvas");e.width=e.height=512;let n=e.getContext("2d"),s=n.createImageData(512,512),r=s.data;for(let a=0;a<512;a++)for(let c=0;c<512;c++){let l=c/512*22,h=a/512*22,u=40,f=47,d=26,m=je(l,h,22,4,211)-.5;u+=m*30,f+=m*36,d+=m*20;let x=je(l*.55+5,h*.55+5,22,3,223);if(x>.5){let R=Math.min(1,(x-.5)*5);u+=(24-u)*.8*R,f+=(33-f)*.8*R,d+=(17-d)*.8*R}let p=je(l*.7+17,h*.7+2,22,3,239);if(p>.62){let R=Math.min(1,(p-.62)*6);u+=(66-u)*.55*R,f+=(58-f)*.55*R,d+=(36-d)*.55*R}let g=Math.abs(je(l*.5+9,h*2.2,22,2,227)-.5);if(g<.035){let R=1-g/.035;u+=(74-u)*.5*R,f+=(64-f)*.5*R,d+=(44-d)*.5*R}let _=Kn(c,a,229),M=_>.88?(_-.88)*160:0;u+=M*.7,f+=M,d+=M*.5;let y=Math.min(c,511-c)/512,T=Math.min(a,511-a)/512,E=Math.min(y,T)/.14,A=je(l*2,h*2,44,2,233)*.5,v=Math.max(0,Math.min(1,E-A)),b=(a*512+c)*4;r[b]=Math.max(0,Math.min(255,u)),r[b+1]=Math.max(0,Math.min(255,f)),r[b+2]=Math.max(0,Math.min(255,d)),r[b+3]=Math.round(v*255)}n.putImageData(s,0,0);let o=new Le(e);return o.colorSpace=ne,o.anisotropy=16,o}function em(i,t){let e=i.streetLine||[];if(e.length<2)return{group:new se};let n=i.groundHeight||(()=>0),s=new se;return t.add(s),MS(e,s,n),SS(e,s,n),{group:s}}function la(i,t){let e=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,h=Math.hypot(c,l);if(e+h>=t){let u=h>0?(t-e)/h:0;return{point:[s+c*u,r+l*u],tangent:[c/(h||1),l/(h||1)]}}e+=h}return null}function nm(i){let t=0;for(let e=1;e<i.length;e++)t+=Math.hypot(i[e][0]-i[e-1][0],i[e][1]-i[e-1][1]);return t}function MS(i,t,e){let n=Math.min(pS,nm(i)),s=3,r=[],o=[[-wl/2,0],[-wl/2,Zp],[wl/2,Zp],[wl/2,0]];for(let l of[-1,1]){let h=[],u=[],f=0;for(let x=0;x<=n;x+=s){let p=la(i,x);if(!p)break;let[g,_]=p.tangent,M=-_,y=g,T=p.point[0]+M*l*(Yp/2),E=p.point[1]+y*l*(Yp/2),A=e(T,E);for(let[v,b]of o)h.push(T+M*v,A+b,E+y*v);f++}if(f<2)continue;let d=o.length;for(let x=0;x<f-1;x++)for(let p=0;p<d-1;p++){let g=x*d+p,_=x*d+p+1,M=(x+1)*d+p,y=(x+1)*d+p+1;u.push(g,M,_,_,M,y)}let m=new ge;m.setAttribute("position",new jt(h,3)),m.setIndex(u),m.computeVertexNormals(),r.push(m)}if(!r.length)return;let a=ae(r,!1),c=new Yt({color:4142124,side:De});t.add(new Ht(a,c))}function SS(i,t,e){let n=nm(i),s=yS(),r=vS(),o=(a,c,l,h,u,f)=>{let d=[];for(let x=0;x<c;x++){let p=20+aa()*Math.max(1,n-40),g=la(i,p);if(!g)continue;let[_,M]=g.tangent,y=-M,T=_,E=(aa()*2-1)*l,A=g.point[0]+y*E,v=g.point[1]+T*E,b=h+aa()*(u-h),R=new Ue(b,b*(.6+aa()*.7));R.rotateX(-Math.PI/2),R.rotateY(aa()*Math.PI*2),R.translate(A,e(A,v)+xS,v),d.push(R)}if(!d.length)return;let m=new Yt({map:a,transparent:!0,opacity:f,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});t.add(new Ht(ae(d,!1),m))};o(s,mS,6.2,.7,2.4,.92),o(r,gS,6.2,1.2,3.6,.5)}var bS=2;function im(i){let t=[],e=[],n=[];function s(u){for(let f=0;f<t.length;f++){let d=t[f].x-u[0],m=t[f].z-u[1];if(Math.hypot(d,m)<bS)return f}return t.push({x:u[0],z:u[1]}),t.length-1}i.forEach((u,f)=>{if(u.length<2)return;let d=s(u[0]),m=s(u[u.length-1]);e[f]=[d,m],(n[d]??=[]).push({segIdx:f,otherNode:m}),(n[m]??=[]).push({segIdx:f,otherNode:d})});let r=new Set;function o(u){let f=[[t[u].x,t[u].z]],d=u;for(;;){let m=(n[d]||[]).filter(y=>!r.has(y.segIdx));if(m.length===0)break;let{segIdx:x,otherNode:p}=m[0];r.add(x);let g=i[x],[_]=e[x],M=_===d?g:[...g].reverse();for(let y=1;y<M.length;y++)f.push(M[y]);d=p}return f}function a(u){let f=0;for(let d=1;d<u.length;d++)f+=Math.hypot(u[d][0]-u[d-1][0],u[d][1]-u[d-1][1]);return f}let c=[],l=t.map((u,f)=>f).filter(u=>(n[u]||[]).length!==2);for(let u of l){let f=r.size,d=o(u);r.size>f&&c.push(d)}for(let u=0;u<t.length;u++)(n[u]||[]).some(d=>!r.has(d.segIdx))&&c.push(o(u));c.sort((u,f)=>a(f)-a(u));let h=c[0]||[];return h.length>1&&h[0][1]>h[h.length-1][1]&&h.reverse(),h}function sm(i){return function(e,n){let s=null,r=1/0,o=null;for(let a=0;a<i.length-1;a++){let[c,l]=i[a],[h,u]=i[a+1],f=h-c,d=u-l,m=f*f+d*d,x=m>0?((e-c)*f+(n-l)*d)/m:0;x=Math.max(0,Math.min(1,x));let p=c+x*f,g=l+x*d,_=Math.hypot(e-p,n-g);if(_<r){r=_,s=[p,g];let M=Math.sqrt(m);o=M>0?[f/M,d/M]:[0,1]}}return{point:s,distance:r,tangent:o}}}function Rl(i,t,e){let n=1/0,s=0,r=0;for(let o=0;o<e.length-1;o++){let[a,c]=e[o],[l,h]=e[o+1],u=l-a,f=h-c,d=u*u+f*f,m=Math.sqrt(d),x=d>0?((i-a)*u+(t-c)*f)/d:0;x=Math.max(0,Math.min(1,x));let p=Math.hypot(i-(a+x*u),t-(c+x*f));p<n&&(n=p,s=r+x*m),r+=m}return s}function rm(i,t){let e=0,n=0;for(let o=0;o<i.length-1;o++){let[a,c]=i[o],[l,h]=i[o+1],u=Math.hypot(l-a,h-c);if(n=e,e+=u,t<=e||o===i.length-2){let f=u>0?Math.max(0,Math.min(1,(t-n)/u)):0,d=a+(l-a)*f,m=c+(h-c)*f,x=u>0?[(l-a)/u,(h-c)/u]:[0,1];return{point:[d,m],tangent:x}}}let[s,r]=i[0]||[0,0];return{point:[s,r],tangent:[0,1]}}function Vr(i,t){let e=i.footprint,n=[];if(!e||e.length<3||!t)return n;let s=0,r=0;for(let a of e)s+=a[0],r+=a[1];s/=e.length,r/=e.length;let o=[];for(let a=0;a<e.length;a++){let c=e[a],l=e[(a+1)%e.length],h=l[0]-c[0],u=l[1]-c[1],f=Math.hypot(h,u);if(f<.25)continue;let d=(c[0]+l[0])/2,m=(c[1]+l[1])/2,x=t(d,m);if(!x||!x.point)continue;let p=t(c[0],c[1]),g=t(l[0],l[1]);if(Math.min(x.distance,p?p.distance:1/0,g?g.distance:1/0)>30)continue;let M=1/f,y=-u*M,T=h*M;y*(d-s)+T*(m-r)<0&&(y=-y,T=-T);let E=x.point[0]-d,A=x.point[1]-m,v=Math.hypot(E,A)||1,b=(y*E+T*A)/v;if(b<-.3||!(b>=.35))continue;let I=!1;x.tangent&&f<=9&&(I=Math.abs(h*M*x.tangent[0]+u*M*x.tangent[1])<.88),o.push({i:a,ax:c[0],az:c[1],bx:l[0],bz:l[1],dirx:h*M,dirz:u*M,len:f,isChamfer:I})}for(let a of o){let c=n[n.length-1];c&&a.i===c.endEdge+1&&c.dirx*a.dirx+c.dirz*a.dirz>.985?(c.bx=a.bx,c.bz=a.bz,c.len+=a.len,c.endEdge=a.i,c.isChamfer=c.isChamfer||a.isChamfer):n.push({ax:a.ax,az:a.az,bx:a.bx,bz:a.bz,dirx:a.dirx,dirz:a.dirz,len:a.len,isChamfer:a.isChamfer,startEdge:a.i,endEdge:a.i})}if(n.length>1){let a=n[0],c=n[n.length-1];c.endEdge===e.length-1&&a.startEdge===0&&Math.hypot(c.bx-a.ax,c.bz-a.az)<.5&&c.dirx*a.dirx+c.dirz*a.dirz>.985&&(a.ax=c.ax,a.az=c.az,a.len+=c.len,a.isChamfer=a.isChamfer||c.isChamfer,n.pop())}return n}var Wi=[[0,0],[150,.6],[300,1.8],[450,3.6],[600,6.2],[750,9.4],[900,13],[1050,16.6],[1200,19.9],[1350,22.8],[1500,25.4],[1617,27]],Nu=1;function ES(i){Nu=Number.isFinite(i)&&i>0?i:1}function TS(){return Nu}var Lu=Wi.length,om=Wi.map((i,t)=>{if(t===0||t===Lu-1)return 0;let e=Wi[t-1],n=Wi[t+1];return(n[1]-e[1])/(n[0]-e[0])});function AS(i,t,e,n,s,r){let o=i*i,a=o*i,c=2*a-3*o+1,l=a-2*o+i,h=-2*a+3*o,u=a-o;return c*t+l*r*n+h*e+u*r*s}function wS(i){if(i<=Wi[0][0])return Wi[0][1];let t=Wi[Lu-1];if(i>=t[0])return t[1];for(let e=0;e<Lu-1;e++){let[n,s]=Wi[e],[r,o]=Wi[e+1];if(i>=n&&i<=r){let a=r-n,c=a>0?(i-n)/a:0;return AS(c,s,o,om[e],om[e+1],a)}}return t[1]}function Pu(i){return wS(i)*Nu}function am(i){function t(e,n){if(!i||i.length<2)return Pu(0);let s=Rl(e,n,i);return Pu(s)}return{groundHeight:t,heightAtChainage:Pu,setExaggeration:ES,getExaggeration:TS}}var ha=7,RS=3,cm=ha+RS,CS=.03,IS=3.2,lm=-.06,PS=4870466,hm=[9078112,7039843,8016448,5592655,7630666,7232847,6249034,8153690],um=4;function LS(){let e=document.createElement("canvas");e.width=e.height=256;let n=e.getContext("2d"),s=n.createImageData(256,256),r=s.data,a=256/13;for(let c=0;c<256;c++){let l=Math.floor(c/a),u=c-l*a<2;for(let f=0;f<256;f++){let d=f/256*16,m=c/256*16,x=150,p=146,g=134,_=je(d,m,16,4,61)-.5;x+=_*34,p+=_*32,g+=_*28;let M=Math.floor((f+l*37)/(256/5)),y=(Kn(M,l,17)-.5)*22;x+=y,p+=y,g+=y,u&&(x*=.62,p*=.62,g*=.6);let T=je(d*.35,m*.9+4,16,3,83);if(T>.56){let b=Math.min(1,(T-.56)*4.5);x*=1-.35*b,p*=1-.33*b,g*=1-.28*b}let E=Kn(f,c,97),A=E>.92?(E-.92)*200:0;x+=A,p+=A,g+=A*.9;let v=(c*256+f)*4;r[v]=Math.max(0,Math.min(255,x)),r[v+1]=Math.max(0,Math.min(255,p)),r[v+2]=Math.max(0,Math.min(255,g)),r[v+3]=255}}return n.putImageData(s,0,0),Vs(e,[1/um,1/um])}function pm(i){let t=new se,e=im(i.streetPaths),n=am(e),s=n.groundHeight,r=NS(i.streetPaths,s);r&&t.add(r);let o=US(i.buildings,s);o&&t.add(o),t.add(zS(i,s)),t.add(HS(s));let a=kS(t),c=new go(PS,.0095);return{group:t,streetLine:e,nearestStreetPoint:sm(e),fog:c,groundHeight:s,setExaggeration:n.setExaggeration,getExaggeration:n.getExaggeration,lights:a}}function NS(i,t){let e=[],n=[];for(let r of i){if(r.length<2)continue;let o=DS(r,t);o&&(e.push(o.road),n.push(o.paving))}if(e.length===0)return null;let s=new se;return s.position.y=CS,s.add(new Ht(ae(e,!1),new Yt({map:$p()}))),s.add(new Ht(ae(n,!1),new Yt({map:Jp()}))),s}function DS(i,t){let e=i.length,n=[],s=[],r=0;for(let a=0;a<e;a++){let c=i[Math.max(0,a-1)],l=i[Math.min(e-1,a+1)],h=l[0]-c[0],u=l[1]-c[1],f=Math.hypot(h,u)||1;n.push([-u/f,h/f]),a>0&&(r+=Math.hypot(i[a][0]-i[a-1][0],i[a][1]-i[a-1][1])),s.push(r)}let o=(a,c,l)=>{let h=[],u=[],f=[],d=Math.abs(c-a);for(let x=0;x<e;x++){let[p,g]=i[x],[_,M]=n[x],y=s[x]/l,T=p+_*a,E=g+M*a,A=p+_*c,v=g+M*c;h.push(T,t?t(T,E):0,E),h.push(A,t?t(A,v):0,v),u.push(0,y,d/l,y)}for(let x=0;x<e-1;x++){let p=x*2,g=x*2+1,_=(x+1)*2,M=(x+1)*2+1;f.push(p,g,M,p,M,_)}let m=new ge;return m.setAttribute("position",new jt(h,3)),m.setAttribute("uv",new jt(u,2)),m.setIndex(f),m.computeVertexNormals(),m};return{road:o(-ha,ha,Kp),paving:ae([o(-cm,-ha,Cu),o(ha,cm,Cu)],!1)}}function US(i,t){let e=[],n=0;if(i.forEach((a,c)=>{let l=OS(a,c,t);l?e.push(l):n++}),e.length===0)return null;n>0&&console.warn(`[world] skipped ${n}/${i.length} buildings with bad footprints`);let s=ae(e,!1),r=new Yt({vertexColors:!0,flatShading:!0,map:LS()}),o=new Ht(s,r);return o.name="buildings",o}var FS=3;function OS(i,t,e){let{footprint:n,levels:s}=i;if(!n||n.length<3)return null;let r=Math.max(1,s||1)*IS;try{let o=new Nr;o.moveTo(n[0][0],-n[0][1]);for(let f=1;f<n.length;f++)o.lineTo(n[f][0],-n[f][1]);o.closePath();let a=e?FS:0,c=new Do(o,{depth:r+a,bevelEnabled:!1,curveSegments:1});if(c.rotateX(-Math.PI/2),e){let f=0,d=0;for(let[x,p]of n)f+=x,d+=p;f/=n.length,d/=n.length;let m=e(f,d);c.translate(0,m-a,0)}let l=Fu(t,i),h=c.attributes.position.count,u=new Float32Array(h*3);for(let f=0;f<h;f++)u[f*3]=l.r,u[f*3+1]=l.g,u[f*3+2]=l.b;return c.setAttribute("color",new jt(u,3)),c}catch{return null}}function Fu(i,t){let e=Math.abs(BS(`${i}:${t.footprint[0][0]}:${t.footprint[0][1]}`)),n=new ht(hm[e%hm.length]),s={h:0,s:0,l:0};n.getHSL(s);let r=(e%17/17-.5)*.12,o=new ht;return o.setHSL(s.h,s.s,Math.min(.85,Math.max(.08,s.l+r))),o}function BS(i){let t=0;for(let e=0;e<i.length;e++)t=(t<<5)-t+i.charCodeAt(e),t|=0;return t}function zS(i,t){let e=1/0,n=-1/0,s=1/0,r=-1/0;for(let g of i.buildings)for(let[_,M]of g.footprint)_<e&&(e=_),_>n&&(n=_),M<s&&(s=M),M>r&&(r=M);let o=400,a=n-e+o*2,c=r-s+o*2,l=(e+n)/2,h=(s+r)/2,u=Math.max(1,Math.round(a/10)),f=Math.max(1,Math.round(c/10)),d=new Ue(a,c,u,f);if(d.rotateX(-Math.PI/2),t){let g=d.attributes.position;for(let _=0;_<g.count;_++){let M=g.getX(_)+l,y=g.getZ(_)+h;g.setY(_,t(M,y)+lm)}g.needsUpdate=!0,d.computeVertexNormals()}let m=Qp();m.repeat.set(a/Iu,c/Iu);let x=new Yt({map:m}),p=new Ht(d,x);return p.position.set(l,t?0:lm,h),p}var Du=-719,Uu=1303;function HS(i){let t=new Ue(80,14,20,2);t.rotateX(-Math.PI/2);let e=-.483,n=.876;if(t.rotateY(Math.atan2(-n,e)),i){let h=t.attributes.position;for(let u=0;u<h.count;u++){let f=h.getX(u)+Du,d=h.getZ(u)+Uu;h.setY(u,i(f,d)+.02)}h.needsUpdate=!0,t.computeVertexNormals()}let s=new Ht(t,new Yt({map:tm(),transparent:!0,depthWrite:!1}));s.position.set(Du,i?0:.02,Uu),s.name="elm-row-gardens";let r=924192,o=()=>{r|=0,r=r+1831565813|0;let h=Math.imul(r^r>>>15,1|r);return h=h+Math.imul(h^h>>>7,61|h)^h,((h^h>>>14)>>>0)/4294967296},a=[];for(let h=0;h<26;h++){let u=(o()-.5)*74,f=(o()-.5)*10,d=new Fi(1,6,4),m=.5+o()*1.3;d.scale(.9+o()*1.6,m,.9+o()*1.6),d.rotateY(o()*Math.PI);let x=Du+e*u-n*f,p=Uu+n*u+e*f,g=i?i(x,p):0;d.translate(x,g+m*.55,p),a.push(d)}let c=new Ht(ae(a),new Yt({color:3029024}));c.name="elm-row-bushes";let l=new se;return l.add(s,c),l}function kS(i){let t=new Oo(9147296,3814180,3.9);i.add(t);let e=new Os(13621480,1.15);e.position.set(-200,300,150),e.castShadow=!1,i.add(e);let n=new ko(4999224,1.4);return i.add(n),{hemi:t,sun:e,ambient:n}}var GS=16747082,fm=18,VS=5,dm=6.5;function mm(i){let t=new ki(GS,fm,dm,2);t.position.set(.15,-.15,.1),i.add(t);let e=1;function n(r){e=r,t.distance=Math.max(.05,dm*e)}function s(r){let o=Math.sin(r*11.3)*.5+Math.sin(r*27.1)*.3+Math.sin(r*4.7)*.2;t.intensity=(fm+o*VS*.3333)*e}return{light:t,update:s,setDarkness:n}}var Cl=Math.PI/2-.05,Il={KeyW:"forward",ArrowUp:"forward",KeyS:"backward",ArrowDown:"backward",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right"};function xm(i,t,{nearestStreetPoint:e,spawn:n,groundHeight:s}){let r=n.yaw||0,o=0,a=s?s(n.x,n.z):0;i.position.set(n.x,a+1.7,n.z),i.rotation.order="YXZ",x();let c=new Set,l=!1,h=0,u=0,f=!1,d=!0,m=!0;function x(){i.rotation.set(o,r,0)}function p(R){d&&Il[R.code]&&(c.add(Il[R.code]),R.preventDefault())}function g(R){Il[R.code]&&c.delete(Il[R.code])}function _(R){if(d&&(l=!0,h=R.clientX,u=R.clientY,t.setPointerCapture?.(R.pointerId),!f&&t.requestPointerLock))try{let I=t.requestPointerLock();I&&typeof I.catch=="function"&&I.catch(()=>{})}catch{}}function M(R){if(f){r-=(R.movementX||0)*.0025,o-=(R.movementY||0)*.0025,o=gm(o,-Cl,Cl),x();return}if(!l)return;let I=R.clientX-h,P=R.clientY-u;h=R.clientX,u=R.clientY,r-=I*.0035,o-=P*.0035,o=gm(o,-Cl,Cl),x()}function y(R){l=!1,t.releasePointerCapture?.(R.pointerId)}function T(){f=document.pointerLockElement===t}window.addEventListener("keydown",p),window.addEventListener("keyup",g),t.addEventListener("pointerdown",_),window.addEventListener("pointermove",M),window.addEventListener("pointerup",y),document.addEventListener("pointerlockchange",T);function E(R){d=!!R,d||(c.clear(),l=!1)}function A(R){d&&(R?c.add("forward"):c.delete("forward"))}function v(R){if(!d)return;let I=0,P=0;if(c.has("forward")&&(P-=1),c.has("backward")&&(P+=1),c.has("left")&&(I-=1),c.has("right")&&(I+=1),I!==0||P!==0){let B=Math.hypot(I,P);I/=B,P/=B;let V=Math.sin(r),D=Math.cos(r),O=-V,U=-D,W=D,J=-V,ut=(O*-P+W*I)*14*R,z=(U*-P+J*I)*14*R,Y=i.position.x+ut,rt=i.position.z+z,{point:pt,distance:mt}=e(Y,rt);if(pt&&mt>16){let q=16/mt;Y=pt[0]+(Y-pt[0])*q,rt=pt[1]+(rt-pt[1])*q}i.position.x=Y,i.position.z=rt}s&&m&&(i.position.y=s(i.position.x,i.position.z)+1.7)}function b(){window.removeEventListener("keydown",p),window.removeEventListener("keyup",g),t.removeEventListener("pointerdown",_),window.removeEventListener("pointermove",M),window.removeEventListener("pointerup",y),document.removeEventListener("pointerlockchange",T)}return{update:v,dispose:b,setEnabled:E,setForward:A,setYFollow:R=>{m=!!R}}}function gm(i,t,e){return Math.max(t,Math.min(e,i))}var _m=6,ym=40,WS=60,XS=85,vm=[4867638,4276026,5525567,3882292,5195578,3749420,4737602,5919040],Mm=[7025448,7363619,3032640,5849646,4011091,6703646],qS=new ri;function Sm(i,t){return qS.load(i,e=>{e.colorSpace=ne,t&&t(e)})}function Ws(i,t,e){let n=Math.imul(i,374761393)^Math.imul(t,668265263)^Math.imul(e,2246822519);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function YS(i,t,e){let s=document.createElement("canvas");s.width=s.height=64;let r=s.getContext("2d"),o=r.createImageData(64,64),a=o.data,c={r:(i>>16&255)/255,g:(i>>8&255)/255,b:(i&255)/255};for(let h=0;h<64;h++)for(let u=0;u<64;u++){let f=e?1+.14*Math.sin(h*1.9)+(Ws(u,h,t)-.5)*.1:1.05+.1*Math.sin(u*2.3)+(Ws(u,h,t)-.5)*.16,d=1-.18*Ws(u>>3,h>>3,t+7)*Ws(u>>4,h>>4,t+13),m=1-.2*Math.pow(h/64,3),x=f*d*m,p=(h*64+u)*4;a[p]=Math.min(255,c.r*255*x),a[p+1]=Math.min(255,c.g*255*x),a[p+2]=Math.min(255,c.b*255*x),a[p+3]=255}r.putImageData(o,0,0);let l=new Le(s);return l.colorSpace=ne,l}var Ou=new Map;function ua(i,t){let e=i*2+(t?1:0);return Ou.has(e)||Ou.set(e,new Yt({map:YS(i,i&65535^(t?40503:0),t),flatShading:!0})),Ou.get(e)}function ZS(){let t=document.createElement("canvas");t.width=t.height=64;let e=t.getContext("2d"),n=e.createImageData(64,64),s=n.data,r={r:.4,g:.38,b:.32};for(let a=0;a<64;a++)for(let c=0;c<64;c++){let l=1+(Ws(c,a,2465)-.5)*.12,h=Math.floor(a/5),u=Ws(h,0,707),d=u>.45&&u<.85?1-.28*Ws(c>>1,h,1915):1,m=Math.min(c,63-c)/(64*.5),x=Math.min(a,63-a)/(64*.5),p=1-.22*(1-Math.min(m,x)),g=l*d*p,_=(a*64+c)*4;s[_]=Math.min(255,r.r*255*g),s[_+1]=Math.min(255,r.g*255*g),s[_+2]=Math.min(255,r.b*255*g),s[_+3]=255}e.putImageData(n,0,0);let o=new Le(t);return o.colorSpace=ne,o}var Bu=null;function zu(){return Bu||(Bu=ZS()),Bu}function bm(i,t,e,n){let s=i.catalog&&Array.isArray(i.catalog.comics)?i.catalog.comics.filter(m=>m.npc):i.manifest.comics||[],r=t.streetLine||[],o=[],a=new Map,c=(m,x)=>{m&&(a.has(m)||a.set(m,[]),a.get(m).push(x))},l=jS(r),h=Math.max(1,l-ym-WS),u=s.length>1?h/(s.length-1):0;s.forEach((m,x)=>{let p=ym+x*u,g=x%2===0?1:-1,_=QS(r,p);if(!_)return;let[M,y]=_.tangent,T=-y,E=M,A=_.point[0]+T*_m*g,v=_.point[1]+E*_m*g,b=_.point[0]-A,R=_.point[1]-v,I=Math.atan2(b,R),P=KS(i,m,vm[x%vm.length],c),B=t.groundHeight?t.groundHeight(A,v):0;P.group.position.set(A,B,v),P.group.rotation.y=I,P.baseY=I,P.phase=x*2.1,e.add(P.group),o.push(P)});for(let[m,x]of a)Sm(Ln(i,m),p=>{for(let g of x)g.map=p,g.color.setScalar(4.7),g.needsUpdate=!0});let f=new L;function d(m,x){let p=n?n.position:null;for(let g=0;g<o.length;g++){let _=o[g];if(_.tick(x),p&&!_.comicLoaded){let M=_.group.position;Math.hypot(p.x-M.x,p.z-M.z)<XS&&_.loadComic()}}}return{npcs:o,update:d}}function KS(i,t,e,n){let s=t.npc.build||{height:1.9,girth:1,headScale:1.5},r=s.height,o=s.girth,a=s.headScale,c=new se,l=ua(e,!1),h=new Yt({color:1381391,flatShading:!0}),u=.12,f=r*.3,d=.52*o,m=.34*o,x=r*.48,p=.34*a,g=u+f,_=g+x,M=_+p*.5+.02,y=M+p*.5,T=d*.24,E=[],A=[];for(let pt of[-1,1]){let mt=new te(d*.4,u,m*1.5);mt.translate(pt*T,u*.5,m*.2),A.push(mt)}for(let pt of[-1,1]){let mt=new te(d*.36,f,m*.75);mt.translate(pt*T,u+f*.5,0),E.push(mt)}{let pt=new te(d,x,m);pt.translate(0,g+x*.5,0),E.push(pt)}let v=_-x*.14,b=x*.62;for(let pt of[-1,1]){let mt=new te(.13,b,.13);mt.rotateX(-1.15),mt.rotateZ(pt*.25),mt.translate(pt*(d*.5+.02),v-b*.28,m*.5+.06),E.push(mt)}let R=new Ht(ae(E),l),I=new Ht(ae(A),h);c.add(R,I);let P=ua(new ht(e).multiplyScalar(.62).getHex(),!0),B=new Yt({color:new ht(9077874).multiplyScalar(4.7)});n(t.npc.face,B);let V=[P,P,P,P,B,P],D=new Ht(new te(p,p,p*.85),V);D.position.set(0,M,0),c.add(D);let O=0;for(let pt of t.npc.name||"")O=O*31+pt.charCodeAt(0)|0;let U=new Ht(new te(p*.95,.09,p*.85),new Yt({color:Mm[Math.abs(O)%Mm.length],flatShading:!0}));U.position.set(0,_+.02,0),c.add(U);let W=x*.55,J=new Yt({map:zu(),color:new ht(4.7,4.7,4.7),side:De}),ut=new Ht(new Ue(1,1),J);ut.position.set(0,g+x*.55,m*.5+.17),ut.scale.set(W*.7,W,1),c.add(ut);let z=new Yt({color:8680542,flatShading:!0});for(let pt of[-1,1]){let mt=new Ht(new te(.09,.07,.06),z);mt.position.set(pt*W*.28,g+x*.55-W*.48,m*.5+.18),c.add(mt)}let Y=$S(t.npc.name,t.npc.blurb);Y.position.set(0,y+.42,0),c.add(Y);let rt={group:c,head:D,comicMesh:ut,comic:t,name:t.npc.name,blurb:t.npc.blurb,voice:null,baseY:0,phase:0,speaking:!1,comicLoaded:!1,loadComic(){rt.comicLoaded||(rt.comicLoaded=!0,Sm(Ln(i,t.image),pt=>{J.map=pt,J.color.setScalar(4.7),J.needsUpdate=!0;let mt=pt.image;mt&&mt.width&&mt.height&&ut.scale.set(W*(mt.width/mt.height),W,1)}))},setSpeaking(pt){rt.speaking=!!pt,rt.speaking||D.rotation.set(0,0,0)},tick(pt){if(c.rotation.z=Math.sin(pt*.6+rt.phase)*.01,c.rotation.y=rt.baseY+Math.sin(pt*.4+rt.phase)*.008,rt.speaking){let mt=pt*25+rt.phase;D.rotation.y=Math.sin(mt)*.09,D.rotation.x=(Math.sin(mt*.5)+1)*.05}}};return rt}function $S(i,t){let e=document.createElement("canvas");e.width=512,e.height=160;let n=e.getContext("2d");n.fillStyle="rgba(20, 22, 16, 0.82)",JS(n,6,6,e.width-12,e.height-12,14),n.fill(),n.lineWidth=2,n.strokeStyle="rgba(120, 116, 92, 0.6)",n.stroke(),n.textAlign="center",n.fillStyle="#d8d4c0",n.font='bold 44px "Courier New", monospace',n.fillText(i,e.width/2,68,e.width-40),n.fillStyle="#a9a48c",n.font='italic 30px "Courier New", monospace',n.fillText(t,e.width/2,116,e.width-36);let s=new Le(e);s.colorSpace=ne;let r=new xi({map:s,transparent:!0,depthTest:!0}),o=new Di(r);return o.scale.set(2.4,.75,1),o}function JS(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function jS(i){let t=0;for(let e=0;e<i.length-1;e++)t+=Math.hypot(i[e+1][0]-i[e][0],i[e+1][1]-i[e][1]);return t}function QS(i,t){if(!i||i.length<2)return null;let e=0;for(let c=0;c<i.length-1;c++){let[l,h]=i[c],[u,f]=i[c+1],d=u-l,m=f-h,x=Math.hypot(d,m);if(e+x>=t){let p=x>0?(t-e)/x:0,g=x||1;return{point:[l+d*p,h+m*p],tangent:[d/g,m/g]}}e+=x}let n=i[i.length-1],s=i[i.length-2],r=n[0]-s[0],o=n[1]-s[1],a=Math.hypot(r,o)||1;return{point:[n[0],n[1]],tangent:[r/a,o/a]}}var Pl=256,Ll=128,Nl=16,Em=["#0e0c0b","#120f1a","#101512","#12100a","#0a1210","#150d0d","#0c1015"],Tm=['"Arial Narrow", "Helvetica Neue", Arial, sans-serif','"Futura", "Century Gothic", "Helvetica Neue", sans-serif','Georgia, "Times New Roman", serif'];function tb(i,t,e,n,s,r,o){let a=ib(o);i.save(),i.beginPath(),i.rect(t,e,n,s),i.clip(),i.fillStyle="#171410",i.fillRect(t,e,n,s);let c=Math.round(n*(.04+a()*.024));for(let A of[t,t+n-c]){i.fillStyle="#332e28",i.fillRect(A,e,c,s);for(let v=0;v<40;v++)i.fillStyle=`rgba(0,0,0,${.05+a()*.12})`,i.fillRect(A+a()*c,e+a()*s,1+a()*2,1+a()*2)}let l=t+c,h=n-c*2,u=a(),f=u<.3,d=e+s*(f?.2:.08);if(f){let A=e+s*.06,v=d-A,b=["#3a2420","#243a2e","#2a2438"][Math.floor(a()*3)],R="#d8d0c0",I=Math.max(3,Math.round(n*.045));for(let P=l;P<l+h;P+=I)i.fillStyle=(P-l)/I%2<1?b:R,i.beginPath(),i.moveTo(P,d),i.lineTo(Math.min(P+I,l+h),d),i.lineTo(Math.min(P+I-v*.35,l+h),A),i.lineTo(Math.max(P-v*.35,l),A),i.closePath(),i.fill();i.fillStyle="rgba(0,0,0,0.25)",i.fillRect(l,d-2,h,2)}let m=e+s*.4;if(u<.55)for(let A=m;A<e+s;A+=Math.max(2,s*.03))i.fillStyle=Math.round((A-m)/Math.max(2,s*.03))%2===0?"#211d18":"#15110d",i.fillRect(l,A,h,Math.max(2,s*.03));else{let A=e+s;i.fillStyle="#14181a",i.fillRect(l,m,h,A-m);let v=3+Math.floor(a()*2);i.strokeStyle="rgba(0,0,0,0.65)",i.lineWidth=2;for(let I=1;I<v;I++){let P=l+h/v*I;i.beginPath(),i.moveTo(P,m),i.lineTo(P,A),i.stroke()}i.strokeStyle="rgba(0,0,0,0.5)",i.lineWidth=1;let b=m+(A-m)*.55;i.beginPath(),i.moveTo(l,b),i.lineTo(l+h,b),i.stroke(),i.fillStyle="rgba(150,158,160,0.12)",i.beginPath(),i.moveTo(l,m),i.lineTo(l+h*.42,m),i.lineTo(l+h*.14,A),i.lineTo(l,A),i.closePath(),i.fill();let R=(A-m)*.16;i.fillStyle=["#2b2016","#1c231e","#241c26"][Math.floor(a()*3)],i.fillRect(l,A-R,h,R)}let x=d,p=m-d,g=Em[Math.floor(a()*Em.length)];i.fillStyle=g,i.fillRect(l,x,h,p),i.strokeStyle="rgba(0,0,0,0.6)",i.lineWidth=1,i.strokeRect(l+.5,x+.5,h-1,p-1);let _=Tm[Math.floor(a()*Tm.length)],M=a()<.75?"bold":"900",T=a()<.3?r.replace(/\w\S*/g,A=>A.charAt(0).toUpperCase()+A.slice(1).toLowerCase()):r.toUpperCase(),E=200+Math.floor(a()*30);i.fillStyle=`rgb(${E},${E-15},${E-45})`,i.textAlign="center",i.textBaseline="middle";try{i.letterSpacing="0.5px"}catch{}eb(i,T,l+h/2,x+p/2,h-12,p-6,_,M);for(let A=0;A<6;A++){i.fillStyle=`rgba(0,0,0,${.05+a()*.08})`;let v=t+a()*n;i.fillRect(v,e,1+a()*3,s)}i.restore()}function eb(i,t,e,n,s,r,o,a){o=o||'"Arial Narrow", "Helvetica Neue", Arial, sans-serif',a=a||"bold";let c=4;for(let h=22;h>=c;h--){if(i.font=`${a} ${h}px ${o}`,i.measureText(t).width<=s){i.fillText(t,e,n);return}let u=nb(i,t,s);if(u&&h<=18&&u.length===2){let f=h*1.05;if(f*2<=r){i.fillText(u[0],e,n-f/2),i.fillText(u[1],e,n+f/2);return}}}i.font=`bold ${c}px ${o}`;let l=t;for(;l.length>3&&i.measureText(l+"\u2026").width>s;)l=l.slice(0,-1);i.fillText(l+(l.length<t.length?"\u2026":""),e,n)}function nb(i,t,e){let n=t.split(" ");if(n.length<2)return null;for(let s=1;s<n.length;s++){let r=n.slice(0,s).join(" "),o=n.slice(s).join(" ");if(i.measureText(r).width<=e&&i.measureText(o).width<=e)return[r,o]}return null}function ib(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function sb(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function Am(i){let t=[...new Set(i)],e=Math.max(1,Math.ceil(t.length/Nl)),n=document.createElement("canvas");n.width=Nl*Pl,n.height=e*Ll;let s=n.getContext("2d");s.fillStyle="#171410",s.fillRect(0,0,n.width,n.height);let r=new Map;t.forEach((a,c)=>{let l=c%Nl,h=Math.floor(c/Nl),u=l*Pl,f=h*Ll;tb(s,u,f,Pl,Ll,a,sb(a)),r.set(a,{u0:u/n.width,u1:(u+Pl)/n.width,vTop:1-f/n.height,vBot:1-(f+Ll)/n.height})});let o=new Le(n);return o.colorSpace=ne,o.anisotropy=4,{texture:o,uvFor:r,count:t.length}}var li=.05,wm=.25,Hu=.3,rb=3,ku=1.2,Rm=250,_e=3.2,Cm=.3,Xs=.4,Im=.08,Pm=.16,Lm=1.5,Nm=6.4,ob=2.5,ab=15,fa=.06,cb=2.2;function Dm(i,t,e){let n=i&&i.facadeManifest,s=i&&i.facadeAtlas,r=i&&i.leith&&i.leith.buildings||[],o=t&&t.streetLine||[],a=t&&t.nearestStreetPoint,c=t&&t.groundHeight;if(!n||!s||!r.length||!a||o.length<2)return{group:null,count:0,update(){}};let l=0,h=s.buildings||{},u=.5,f=.5,d=[];for(let z of n.buildings)for(let Y of z.businesses||[])d.push(Y.name);let m=d.length?Am(d):null,x=[],p=[],g=[],_=[],M=0;function y(z,Y,rt,pt){let mt=rt-z,q=pt-Y,ot=Math.hypot(mt,q)||1;return[-q/ot,0,mt/ot]}let T=s.pages.map(()=>({positions:[],uvs:[],colors:[],normals:[],indices:[],quadCount:0})),E=new Map;for(let z of n.buildings){let Y=h[z.buildingIndex];if(!Y)continue;let rt=Y.regions.find(it=>it.kind!=="corner")||Y.regions[0];if(!rt)continue;let pt=s.pages[Y.page],mt=1/pt.width,q=1/pt.height,ot=E.get(Y.page)||[];ot.push({bi:z.buildingIndex,chainage:z.chainage,region:rt,u0Full:(rt.x+u)*mt,u1Full:(rt.x+rt.w-u)*mt,vTop:1-(rt.y+f)*q,vBot:1-(rt.y+rt.h-f)*q}),E.set(Y.page,ot)}function A(z,Y,rt,pt,mt,q,ot,it,Mt,Tt,St){let Wt=z.quadCount*4,Ut=Tt+l,tt=St+l;z.positions.push(q,Ut,ot,it,Ut,Mt,it,tt,Mt,q,tt,ot),z.uvs.push(Y,rt,pt,rt,pt,mt,Y,mt),z.colors.push(1,1,1,1,1,1,1,1,1,1,1,1);let[lt,et,ft]=y(q,ot,it,Mt);z.normals.push(lt,et,ft,lt,et,ft,lt,et,ft,lt,et,ft),z.indices.push(Wt,Wt+1,Wt+2,Wt,Wt+2,Wt+3),z.quadCount++}function v(z,Y,rt,pt,mt,q,ot,it,Mt,Tt,St,Wt,Ut,tt,lt){let et=z.quadCount*4,ft=Tt+l,at=St+l;z.positions.push(q,ft,ot,it,ft,Mt,it,at,Mt,q,at,ot),z.uvs.push(Y,rt,pt,rt,pt,mt,Y,mt),z.colors.push(...Wt,...Ut,...tt,...lt);let[yt,xt,Gt]=y(q,ot,it,Mt);z.normals.push(yt,xt,Gt,yt,xt,Gt,yt,xt,Gt,yt,xt,Gt),z.indices.push(et,et+1,et+2,et,et+2,et+3),z.quadCount++}let b=.1,R=1.1;function I(z,Y,rt,pt,mt,q,ot,it,Mt,Tt){let St=pt-mt,Wt=mt+St*Math.min(1,_e/(q||_e)),Ut=Mt-ot,tt=Tt-it,lt=Math.hypot(Ut,tt)||1,et=Xt=>[ot+Ut*Xt,it+tt*Xt],ft=Xt=>Y+(rt-Y)*Xt,at=[1,1,1],yt=[0,0,0],xt=Math.min(.4,Math.max(b,R/lt));if(1-2*xt<=.001)return A(z,Y,mt,rt,Wt,ot,it,Mt,Tt,li,_e),1;let Gt=[[0,xt,yt,at],[xt,1-xt,at,at],[1-xt,1,at,yt]];for(let[Xt,N,Ft,Zt]of Gt){let[C,S]=et(Xt),[H,k]=et(N);v(z,ft(Xt),mt,ft(N),Wt,C,S,H,k,li,_e,Ft,Zt,Zt,Ft)}return Gt.length}function P(z,Y){let rt=z*73856093^Y*19349663;return rt=Math.imul(rt^rt>>>13,2246822507),rt^=rt>>>16,rt>>>0}let B=0,V=(z,Y,rt,pt,mt,q,ot,it,Mt,Tt,St,Wt,Ut,tt=0)=>{let lt=fa*(rt-Y),et=Y+lt,ft=rt-lt,at=pt-mt,yt=at>0?mt+q*at:mt,xt=pt-Im*at,Gt=Math.max(.1,(xt-yt)/(at||1)*ot),Xt=Wt,N=0;for(;Xt<Ut-1e-6&&Gt>1e-4;){let Ft=Math.min(Gt,Ut-Xt),Zt=Ft/Gt,C=(P(tt,N)&1)===0,S=C?xt:yt,k=S+((C?yt:xt)-S)*Zt;A(z,et,S,ft,k,it,Mt,Tt,St,Xt,Xt+Ft),B++,Xt+=Ft,N++}};function D(z){let Y=-1,rt=1/0;return s.pages.forEach((pt,mt)=>{if(z>=pt.chainageMin&&z<=pt.chainageMax)Y=mt,rt=0;else if(Y===-1||rt>0){let q=z<pt.chainageMin?pt.chainageMin-z:z-pt.chainageMax;q<rt&&(rt=q,Y=mt)}}),Y}for(let z of n.buildings){let Y=z.buildingIndex,rt=r[Y];if(!rt||!rt.footprint||rt.footprint.length<3)continue;let pt=Vr(rt,a);if(!pt.length)continue;let mt=0,q=0;for(let Tt of rt.footprint)mt+=Tt[0],q+=Tt[1];mt/=rt.footprint.length,q/=rt.footprint.length;let ot=h[Y],it=new Map,Mt=0;if(ot)for(let Tt of pt){let St=Math.hypot(Tt.bx-Tt.ax,Tt.bz-Tt.az);if(St<Hu)continue;let Wt=ot.regions.find(tt=>Tt.isChamfer?tt.kind==="corner":tt.kind!=="corner")||ot.regions[0];if(!Wt||St/Wt.widthM>ku)continue;let Ut=it.get(Wt)||{totalSpan:0,count:0,cursor:0};Ut.totalSpan+=St,Ut.count+=1,it.set(Wt,Ut)}pt.forEach((Tt,St)=>{let Wt=Tt.bx-Tt.ax,Ut=Tt.bz-Tt.az,tt=Math.hypot(Wt,Ut);if(tt<Hu)return;let lt=Tt.ax,et=Tt.az,ft=Wt,at=Ut,yt=-Ut/tt,xt=Wt/tt,Gt=(Tt.ax+Tt.bx)/2,Xt=(Tt.az+Tt.bz)/2;yt*(Gt-mt)+xt*(Xt-q)<0&&(yt=-yt,xt=-xt,lt=Tt.bx,et=Tt.bz,ft=-Wt,at=-Ut);let N=Zt=>({x:lt+ft*Zt+yt*wm,z:et+at*Zt+xt*wm});l=c?c(Gt,Xt):0;let Ft=ot?ot.regions.find(Zt=>Tt.isChamfer?Zt.kind==="corner":Zt.kind!=="corner")||ot.regions[0]:null;if(Ft){let Zt=s.pages[ot.page],C=T[ot.page],S=1/Zt.width,H=1/Zt.height,k=(Ft.x+u)*S,X=(Ft.x+Ft.w-u)*S,ct=1-(Ft.y+f)*H,dt=1-(Ft.y+Ft.h-f)*H,$=tt/Ft.widthM,Q=Math.max(2,z.levels||2)*_e,vt=Math.min(.75,Math.max(Xs,_e/Ft.heightM)),It=ct-dt,Rt=(E.get(ot.page)||[]).filter(gt=>gt.bi!==Y),wt=Rt.filter(gt=>Math.abs(gt.chainage-z.chainage)>=ab),Ot=wt.length>=3?wt:Rt,Vt=[];if($>ob){let gt=Math.min(1,Ft.widthM/tt),F=Math.max(0,.5-gt/2),_t=Math.min(1,.5+gt/2),nt=N(F),bt=N(_t);Vt.push({u0:k,u1:X,ax:nt.x,az:nt.z,bx:bt.x,bz:bt.z});let At=[{side:0,innerT:F,dirSign:-1},{side:1,innerT:_t,dirSign:1}];for(let{side:st,innerT:Ct,dirSign:Pt}of At){let re=st===0?F:1-_t,ce=re*tt;if(ce<Hu)continue;let Fe=Math.max(1,Math.round(ce/Nm)),rn=re/Fe,jn=z.businesses?z.businesses.length-Mt:0,Ei=m?Math.max(0,Math.min(jn,Fe)):0;for(let tn=0;tn<Fe;tn++){let wn=Ct+Pt*tn*rn,Dn=Ct+Pt*(tn+1)*rn,ee=N(Math.min(wn,Dn)),xe=N(Math.max(wn,Dn));if(tn<Ei){let Ae=z.businesses[Mt];Mt++;let ye=m.uvFor.get(Ae.name);if(ye){let Oe=M*4;x.push(ee.x,li+l,ee.z,xe.x,li+l,xe.z,xe.x,_e+l,xe.z,ee.x,_e+l,ee.z),p.push(ye.u0,ye.vBot,ye.u1,ye.vBot,ye.u1,ye.vTop,ye.u0,ye.vTop);{let[Be,ze,Mn]=y(ee.x,ee.z,xe.x,xe.z);_.push(Be,ze,Mn,Be,ze,Mn,Be,ze,Mn,Be,ze,Mn)}g.push(Oe,Oe+1,Oe+2,Oe,Oe+2,Oe+3),M++,B++}continue}if(Ot.length>=3){let Ae=P(Y,St*6151+st*331+tn)%Ot.length,ye=Ot[Ae],Oe=Math.min(.75,Math.max(Xs,_e/ye.region.heightM));V(C,ye.u0Full,ye.u1Full,ye.vTop,ye.vBot,Oe,ye.region.heightM,ee.x,ee.z,xe.x,xe.z,li,_e,P(Y,St*6151+st*331+tn+1))}else It>0&&V(C,k,X,ct,dt,vt,Ft.heightM,ee.x,ee.z,xe.x,xe.z,li,_e,P(Y,St*6151+st*331+tn+1))}if(Q>_e+1e-6){let tn=st===0?0:1,wn=N(Math.min(Ct,tn)),Dn=N(Math.max(Ct,tn));if(Ot.length<3)It>0&&V(C,k,X,ct,dt,vt,Ft.heightM,wn.x,wn.z,Dn.x,Dn.z,_e,Q,P(Y,St*4111+st*211+2));else{let ee=Ct,xe=0,Ae=-1,ye=0;for(;Math.abs(ee-Ct)<re-1e-6&&ye++<64;){let Oe=P(Y,St*4111+st*211+xe)%Ot.length;Oe===Ae&&(Oe=(Oe+1)%Ot.length);let Be=Ot[Oe];Ae=Oe;let ze=re-Math.abs(ee-Ct),Mn=Math.min(ze,Math.max(Be.region.widthM/tt,1e-4)),ln=ee+Pt*Mn,hn=N(Math.min(ee,ln)),on=N(Math.max(ee,ln)),Ti=Math.min(.75,Math.max(Xs,_e/Be.region.heightM));V(C,Be.u0Full,Be.u1Full,Be.vTop,Be.vBot,Ti,Be.region.heightM,hn.x,hn.z,on.x,on.z,_e,Q,P(Y,St*4111+st*211+xe)),ee=ln,xe++}}}}}else if($>ku){let gt=Math.min(1,Ft.widthM/tt),F=Math.max(0,.5-gt/2),_t=Math.min(1,.5+gt/2),nt=N(F),bt=N(_t);Vt.push({u0:k,u1:X,ax:nt.x,az:nt.z,bx:bt.x,bz:bt.z});let At=Math.min(.75,Math.max(Xs,_e/Ft.heightM)),st=ct-dt,Ct=dt+At*st,re=(1-At)*Ft.heightM,ce=X-k,Fe=Cm*ce,jn=Cm*Ft.widthM/tt,Ei=Math.max(0,ce-Fe),tn=fa*ce,wn=Math.max(0,Ei-2*tn),Dn=(Ae,ye,Oe,Be,ze,Mn,ln,hn)=>{let on=ln===0?1:-1,Ti=li,Yr=0;for(;Ti<Ft.heightM-1e-6&&re>1e-4;){let Zr=Math.min(re,Ft.heightM-Ti),Yl=Zr/re,w=Ei>0&&hn>0?Math.min(tn+P(Y,St*977+ln*97+Yr)%1e3/1e3*wn,Ei):0,G=Ae+on*w,j=ye+on*w,Z=Yr%2===0,K=Z?Ct:ct,Bt=K+((Z?ct:Ct)-K)*Yl;A(C,G,K,j,Bt,Oe,Be,ze,Mn,Ti,Ti+Zr),B++,Ti+=Zr,Yr++}},ee=F,xe=0;for(;ee>1e-6;){let Ae=Math.min(jn,ee),ye=ee-Ae,Oe=jn>0?Ae/jn:1,Be=xe%2===0,ze=Be?k:k+Fe,Mn=Be?k+Fe:k,ln=ze+(Mn-ze)*Oe,hn=N(ye),on=N(ee);Dn(ln,ze,hn.x,hn.z,on.x,on.z,0,xe),Vt.push({u0:ln,u1:ze,ax:hn.x,az:hn.z,bx:on.x,bz:on.z,skipBase:!0,side:0}),ee=ye,xe++}for(ee=_t,xe=0;ee<1-1e-6;){let Ae=Math.min(jn,1-ee),ye=ee+Ae,Oe=jn>0?Ae/jn:1,Be=xe%2===0,ze=Be?X:X-Fe,Mn=Be?X-Fe:X,ln=ze+(Mn-ze)*Oe,hn=N(ee),on=N(ye);Dn(ze,ln,hn.x,hn.z,on.x,on.z,1,xe),Vt.push({u0:ze,u1:ln,ax:hn.x,az:hn.z,bx:on.x,bz:on.z,skipBase:!0,side:1}),ee=ye,xe++}}else{let gt=it.get(Ft),F,_t;if(gt&&gt.count>1&&gt.totalSpan>0){let At=fa*(X-k),st=k+At,Ct=X-At,Pt=Math.max(0,Ct-st),re=st+Pt*(gt.cursor/gt.totalSpan);gt.cursor+=tt;let ce=st+Pt*(gt.cursor/gt.totalSpan);F=re,_t=ce}else if($<1/ku){let At=Math.max(.08,$),st=(X-k)*At/2,Ct=(P(Y,St)%1e3/1e3-.5)*.3,Pt=k+st+.5*(X-k)+Ct*(X-st-(k+st));F=Math.max(k,Pt-st),_t=Math.min(X,Pt+st)}else{let At=fa*(X-k);F=k+At,_t=X-At}let nt=N(0),bt=N(1);if(gt&&gt.count>1&&tt<cb){let At=Math.min(.9,_e/Ft.heightM);Vt.push({u0:F,u1:_t,ax:nt.x,az:nt.z,bx:bt.x,bz:bt.z,y0:_e,v0:dt+(ct-dt)*At})}else Vt.push({u0:F,u1:_t,ax:nt.x,az:nt.z,bx:bt.x,bz:bt.z,groundFade:!0})}for(let gt of Vt)if(!gt.skipBase){if(gt.groundFade){if(B+=I(C,gt.u0,gt.u1,ct,dt,Ft.heightM,gt.ax,gt.az,gt.bx,gt.bz),Ft.heightM>_e+1e-6){let F=dt+(ct-dt)*Math.min(1,_e/(Ft.heightM||_e));A(C,gt.u0,F,gt.u1,ct,gt.ax,gt.az,gt.bx,gt.bz,_e,Ft.heightM),B++}continue}A(C,gt.u0,gt.v0??dt,gt.u1,gt.v1??ct,gt.ax,gt.az,gt.bx,gt.bz,gt.y0??li,Ft.heightM),B++}if(Q-Ft.heightM>Lm){for(let gt of Vt)if(gt.side===void 0)if(Ot.length>=3){let F=P(Y,St*8231+17)%Ot.length,_t=Ot[F],nt=Math.min(.75,Math.max(Xs,_e/_t.region.heightM));V(C,_t.u0Full,_t.u1Full,_t.vTop,_t.vBot,nt,_t.region.heightM,gt.ax,gt.az,gt.bx,gt.bz,Ft.heightM,Q,P(Y,St*8231+18))}else It>0&&V(C,gt.u0,gt.u1,ct,dt,vt,Ft.heightM,gt.ax,gt.az,gt.bx,gt.bz,Ft.heightM,Q,P(Y,St*8231+18))}if(Q-Ft.heightM>Lm&&Vt.some(gt=>gt.side!==void 0)){let gt=ct-dt,F=ct-Im*gt,_t=Math.max(dt,F-Pm*gt),nt=Pm*Ft.heightM,bt=X-k,At=fa*bt,st={};for(let re of Vt){if(re.side===void 0)continue;let ce=Math.max(0,bt-Math.abs(re.u1-re.u0));(st[re.side]===void 0||ce<st[re.side])&&(st[re.side]=ce)}let Ct=Ft.heightM,Pt=0;for(;Ct<Q-1e-6&&nt>1e-4;){let re=Math.min(nt,Q-Ct),ce=re/nt,Fe=Pt%2===0,rn=Fe?F:_t,Ei=rn+((Fe?_t:F)-rn)*ce,tn=Ct,wn=Ct+re,Dn={};for(let ee of[0,1]){let xe=st[ee];if(xe===void 0)continue;let Ae=Math.max(0,xe-2*At);Dn[ee]=xe>0?Math.min(At+P(Y,St*613+Pt*31+ee)%1e3/1e3*Ae,xe):0}for(let ee of Vt){if(ee.side===void 0)continue;let Ae=(ee.side===0?1:-1)*(Dn[ee.side]||0);A(C,ee.u0+Ae,rn,ee.u1+Ae,Ei,ee.ax,ee.az,ee.bx,ee.bz,tn,wn),B++}Ct=wn,Pt++}}}else if(m&&z.businesses&&z.businesses.length&&tt>=rb){let Zt=z.businesses.length-Mt,C=Zt>0?Math.min(Zt,Math.max(1,Math.round(tt/Nm))):0;for(let H=0;H<C;H++){let k=z.businesses[Mt+H],X=m.uvFor.get(k.name);if(!X)continue;let ct=N(H/C),dt=N((H+1)/C),$=M*4;x.push(ct.x,li+l,ct.z,dt.x,li+l,dt.z,dt.x,_e+l,dt.z,ct.x,_e+l,ct.z),p.push(X.u0,X.vBot,X.u1,X.vBot,X.u1,X.vTop,X.u0,X.vTop);{let[Q,vt,It]=y(ct.x,ct.z,dt.x,dt.z);_.push(Q,vt,It,Q,vt,It,Q,vt,It,Q,vt,It)}g.push($,$+1,$+2,$,$+2,$+3),M++}Mt+=C,B+=C;let S=Math.max(2,z.levels||2)*_e;if(S>_e+1e-6){let H=D(z.chainage),k=H>=0?(E.get(H)||[]).filter(X=>X.bi!==Y):[];if(k.length){let X=T[H],ct=0,dt=0,$=-1,Q=0;for(;ct<1-1e-6&&Q++<64;){let vt=P(Y,St*5813+dt)%k.length;vt===$&&(vt=(vt+1)%k.length);let It=k[vt];$=vt;let Rt=Math.min(1-ct,Math.max(It.region.widthM/tt,1e-4)),wt=N(ct),Ot=N(ct+Rt),Vt=Math.min(.75,Math.max(Xs,_e/It.region.heightM));V(X,It.u0Full,It.u1Full,It.vTop,It.vBot,Vt,It.region.heightM,wt.x,wt.z,Ot.x,Ot.z,_e,S,P(Y,St*5813+dt+1)),ct+=Rt,dt++}}}}else if(!z.businesses||!z.businesses.length){let Zt=D(z.chainage),C=Zt>=0?(E.get(Zt)||[]).filter(S=>S.bi!==Y):[];if(C.length){let S=T[Zt],H=Math.max(2,z.levels||2)*_e,k=0,X=0,ct=-1,dt=0;for(;k<1-1e-6&&dt++<64;){let $=P(Y,St*3457+X)%C.length;$===ct&&($=($+1)%C.length);let Q=C[$];ct=$;let vt=Math.min(1-k,Math.max(Q.region.widthM/tt,1e-4)),It=N(k),Rt=N(k+vt),wt=Math.min(.75,Math.max(Xs,_e/Q.region.heightM));V(S,Q.u0Full,Q.u1Full,Q.vTop,Q.vBot,wt,Q.region.heightM,It.x,It.z,Rt.x,Rt.z,li,H,P(Y,St*3457+X+1)),k+=vt,X++}}}})}if(B===0&&M===0)return{group:null,count:0,update(){}};let O=null;if(M&&m){let z=new ge;z.setAttribute("position",new jt(x,3)),z.setAttribute("uv",new jt(p,2)),z.setAttribute("normal",new jt(_,3)),z.setIndex(g),z.computeBoundingSphere(),O=new Ht(z,new Yt({map:m.texture,color:new ht(4.7,4.7,4.7),side:xn,fog:!0})),O.name="shopfront-placeholders",e.add(O)}let U=s.pages.map((z,Y)=>{let rt=T[Y];if(!rt.quadCount)return null;let pt=new ge;pt.setAttribute("position",new jt(rt.positions,3)),pt.setAttribute("uv",new jt(rt.uvs,2)),pt.setAttribute("color",new jt(rt.colors,3)),pt.setAttribute("normal",new jt(rt.normals,3)),pt.setIndex(rt.indices),pt.computeBoundingSphere();let mt=Ln(i,z.file);return mt.startsWith("assets/")&&z.etag&&(mt+=`?v=${z.etag}`),{geo:pt,url:mt,chainageMin:z.chainageMin,chainageMax:z.chainageMax,loaded:!1,mesh:null}});function W(z){if(z.loaded)return;z.loaded=!0;let Y=new ri().load(z.url);Y.colorSpace=ne,Y.generateMipmaps=!1,Y.minFilter=ke,Y.anisotropy=1,z.material||(z.material=new Yt({vertexColors:!0,color:new ht(4.7,4.7,4.7),side:xn,fog:!0}),z.mesh=new Ht(z.geo,z.material),z.mesh.name="shopfronts-page"),z.material.map=Y,e.add(z.mesh)}function J(z){z.loaded&&(z.loaded=!1,e.remove(z.mesh),z.material.map.dispose(),z.material.map=null)}function ut(z){if(!z)return;let Y=Rl(z.x,z.z,o);for(let rt of U){if(!rt)continue;Y>=rt.chainageMin-Rm&&Y<=rt.chainageMax+Rm?W(rt):J(rt)}}return ut({x:o[0][0],z:o[0][1]}),{group:null,placeholders:O,count:B,placeholderCount:M,update:ut,pages:U}}var lb=18,Um=23,hb=6,ub=2.5,fb=22,db=1.4;function Fm({camera:i,npcs:t,assets:e,onActiveChange:n}){let s=new Xo;i.add(s);let r=new Wo,o=new Map,a=!1,c=!1,l=0;function h(p,g){let _=o.get(p);if(!(_==="missing"||_==="loading")){if(_){g(_);return}o.set(p,"loading"),r.load(Ln(e,p),M=>{o.set(p,M),g(M)},void 0,()=>{o.set(p,"missing")})}}function u(p){if(p.voice)return p.voice;let g=new qo(s);return g.setRefDistance(ub),g.setMaxDistance(fb),g.setDistanceModel("inverse"),g.setRolloffFactor(db),g.setLoop(!0),p.group.add(g),p.voice=g,g}function f(p,g){let _=p.comic.audio;_&&h(_,M=>{let y=u(p);if(y.buffer!==M&&y.setBuffer(M),y.isPlaying){if(!g)return;y.stop()}y.offset=g?0:Math.random()*Math.max(0,M.duration-3),y.play(),p.setSpeaking(!0)})}function d(p){p.voice&&p.voice.isPlaying&&(p.voice.stop(),p.setSpeaking(!1))}function m(){let p=0;for(let g of t)g.voice&&g.voice.isPlaying&&p++;p!==l&&(l=p,n&&n(p))}function x(){if(!a||c)return;let p=i.position,g=[];for(let M of t){if(!M.comic.audio)continue;let y=M.group.position,T=Math.hypot(p.x-y.x,p.z-y.z);T<Um&&g.push({npc:M,d:T})}g.sort((M,y)=>M.d-y.d);let _=new Set;for(let{npc:M,d:y}of g){if(_.size>=hb)break;let T=M.voice&&M.voice.isPlaying;(y<lb||T&&y<Um)&&_.add(M)}for(let M of t)M.voice&&M.voice.isPlaying&&!_.has(M)&&d(M);for(let M of _)M.voice&&M.voice.isPlaying||f(M,!1);m()}return{listener:s,update:x,restart(p){f(p,!0),m()},togglePause(p){let g=p.voice;return!g||!g.buffer?(f(p,!0),!0):g.isPlaying?(g.pause(),p.setSpeaking(!1),m(),!1):(g.play(),p.setSpeaking(!0),m(),!0)},setOverlayOpen(p){c=!!p},isEnabled(){return a},setEnabled(p){a=!!p},resume(){a=!0;let p=s.context;p&&p.state==="suspended"&&p.resume()}}}var pb=8;function Om({assets:i,npcs:t,camera:e,controls:n,proximityAudio:s,onReadingChange:r,litter:o,leithers:a}){let c=document.getElementById("npc-prompt"),l=document.getElementById("npc-prompt-label"),h=document.getElementById("comic-overlay"),u=document.getElementById("comic-title"),f=document.getElementById("comic-image"),d=document.getElementById("comic-meta"),m=document.getElementById("comic-close"),x=document.getElementById("comic-playpause"),p=null,g=null,_=null,M=null;function y(U){x&&(x.textContent=U?"\u23F8":"\u25B6")}function T(U){r&&r(!!U)}function E(U){c&&(l&&(l.textContent=`[E] Hear ${U.name} read`),c.style.display="block")}function A(){c&&(c.style.display="none")}function v(U){!U||g||(g=U,A(),u&&(u.textContent=U.comic.title),d&&(d.textContent=`${U.name} \u2014 ${U.blurb}`),f&&(f.src=Ln(i,U.comic.image),f.alt=U.comic.title,f.parentElement.scrollTop=0),h&&(h.style.display="flex"),n.setEnabled(!1),s.setOverlayOpen(!0),s.restart(U),y(!0),T(!0))}function b(){!g&&!M||(y(!1),T(!1),h&&(h.style.display="none"),n.setEnabled(!0),s.setOverlayOpen(!1),g=null,M=null)}function R(U){g||M||(M=U,A(),u&&(u.textContent=U.comic.title||"McGrot"),d&&(d.textContent="found lying on the street"),f&&(f.src=Ln(i,U.comic.image),f.alt=U.comic.title||"McGrot comic",f.parentElement.scrollTop=0),h&&(h.style.display="flex"),n.setEnabled(!1),s.setOverlayOpen(!0),a&&Math.random()<.7&&a.summonReader(U))}function I(){if(!g)return;let U=s.togglePause(g);y(U),T(U)}function P(U){if(U.code==="Escape"){(g||M)&&b();return}U.code==="KeyE"&&!g&&!M&&(p?v(p):_&&R(_))}function B(){g||M||(p?v(p):_&&R(_))}function V(U){U.target===h&&b()}window.addEventListener("keydown",P),c&&c.addEventListener("click",B),h&&h.addEventListener("click",V),m&&m.addEventListener("click",b),x&&x.addEventListener("click",I);function D(){if(g||M)return;let U=e.position.x,W=e.position.z,J=null,ut=pb;for(let Y=0;Y<t.length;Y++){let rt=t[Y].group.position,pt=Math.hypot(U-rt.x,W-rt.z);pt<ut&&(ut=pt,J=t[Y])}let z=!J&&o?o.nearestItem(U,W,3.2):null;(J!==p||z!==_)&&(p=J,_=z,p?E(p):_?(l&&(l.textContent="[E] Read the comic on the ground"),c&&(c.style.display="block")):A())}function O(){window.removeEventListener("keydown",P),c&&c.removeEventListener("click",B),h&&h.removeEventListener("click",V),m&&m.removeEventListener("click",b),x&&x.removeEventListener("click",I)}return{update:D,dispose:O}}var Me=(()=>{let i=12648430;return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}})(),mb=35,Dl=11,gb=.9,xb=90,Bm=[7027238,8013360,6042916,9065014,5189153],_b=22,yb=8,vb=3,zm=.06,Mb=.16,Fl=4,Gm=14,Hm=55;function Vm(i,t){let e=i.streetLine||[],n=i.groundHeight||(()=>0),s=new se;t.add(s);let r=Sb(e,s,n);wb(e,s,n),Rb(e,s,n);let o=Cb(e,s,n),a=Eb(r,s),c={group:s,onArcFlash:null};return c.update=function(h,u){Ib(o,h,u),Ab(a,u,()=>{c.onArcFlash&&c.onArcFlash()})},c}function Ol(i,t){if(!i||i.length<2||t<0)return null;let e=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,h=Math.hypot(c,l);if(e+h>=t){let u=h>0?(t-e)/h:0,f=h||1;return{point:[s+c*u,r+l*u],tangent:[c/f,l/f]}}e+=h}return null}function Gu(i){let t=0;for(let e=1;e<i.length;e++)t+=Math.hypot(i[e][0]-i[e-1][0],i[e][1]-i[e-1][1]);return t}function Ul(i,t){let e=new ht(t),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;i.setAttribute("color",new jt(s,3))}function Sb(i,t,e){let n=Gu(i),s=[],r=[],o=[];for(let a=12;a<n-5;a+=mb){let c=Ol(i,a);if(!c)break;let[l,h]=c.tangent,u=-h,f=l,d=c.point[0]+u*Dl,m=c.point[1]+f*Dl,x=c.point[0]-u*Dl,p=c.point[1]-f*Dl,g=e(d,m),_=e(x,p),M=new L(d,g,m),y=new L(x,_,p),T=7.5+Me()*.6;s.push(km(M,T)),s.push(km(y,T)),r.push(bb(M.clone().setY(g+T-.4),y.clone().setY(_+T-.4))),o.push({position:M.clone().setY(g+T-.4)},{position:y.clone().setY(_+T-.4)})}if(s.length){let a=ae(s,!1),c=new Yt({color:3814700,flatShading:!0});t.add(new Ht(a,c))}if(r.length){let a=ae(r,!1),c=new is({color:1841685});t.add(new Ns(a,c))}return o}function km(i,t){let e=new Tn(.09,.13,t,6);return e.translate(i.x,i.y+t/2,i.z),e}function bb(i,t){let n=[];for(let o=0;o<=8;o++){let a=o/8,c=Zn.lerp(i.x,t.x,a),l=Zn.lerp(i.z,t.z,a),h=Zn.lerp(i.y,t.y,a),u=4*a*(1-a)*gb;n.push(c,h-u,l)}let s=[];for(let o=0;o<8;o++)s.push(n[o*3],n[o*3+1],n[o*3+2]),s.push(n[(o+1)*3],n[(o+1)*3+1],n[(o+1)*3+2]);let r=new ge;return r.setAttribute("position",new jt(s,3)),r}function Eb(i,t){if(!i.length)return[];let e=Math.min(vb,i.length),n=Tb(i.length,e),s=[];for(let r of n){let o=i[r],a=new ki(10473727,0,14,2);a.position.copy(o.position),t.add(a);let c=new En({color:14676735,transparent:!0,opacity:0,depthWrite:!1,blending:Bs});c.userData.unlit=!1;let l=new Ht(new Fi(.12,6,6),c);l.position.copy(o.position),t.add(l),s.push({light:a,spark:l,active:!1,nextTime:Fl+Me()*(Gm-Fl),flashEnd:0})}return s}function Tb(i,t){let e=[];for(let n=0;n<t;n++)e.push(Math.floor((n+.5)/t*i));return e}function Ab(i,t,e){for(let n of i)if(!n.active&&t>=n.nextTime){n.active=!0;let s=zm+Me()*(Mb-zm);n.flashEnd=t+s,n.light.intensity=Hm,n.spark.material.opacity=1,n.spark.scale.setScalar(.8+Me()*.6),e()}else n.active&&t>=n.flashEnd?(n.active=!1,n.light.intensity=0,n.spark.material.opacity=0,n.nextTime=t+Fl+Me()*(Gm-Fl)):n.active&&(n.light.intensity=Hm*(.7+Me()*.3))}function wb(i,t,e){let n=Ol(i,xb);if(!n)return;let[s,r]=n.tangent,o=-r,a=s,c=5.5,l=n.point[0]+o*c,h=n.point[1]+a*c,u=e(l,h),f=Math.atan2(s,r),d=[],m=new te(2.6,3.1,11);Ul(m,7030064),d.push(m);let x=new te(2.3,.3,10.6);x.translate(0,1.7,0),Ul(x,4864556),d.push(x);for(let M=-1;M<=1;M++)for(let y of[-1,1]){let T=(Me()-.5)*.3,E=new te(.08,.9+Me()*.3,1.6);E.translate(y*1.32,.5+T,M*3.2+(Me()-.5)*.6),Ul(E,789770),d.push(E)}let p=ae(d,!1),g=new Yt({vertexColors:!0,flatShading:!0}),_=new Ht(p,g);_.position.set(l,u+1.85,h),_.rotation.y=f,_.rotation.z=.09,t.add(_)}function Rb(i,t,e){let n=Gu(i);if(n<4)return;let s=[];for(let a=0;a<_b;a++){let c=25+Me()*Math.max(10,n-33),l=Ol(i,c);if(!l)continue;let[h,u]=l.tangent,f=-u,d=h,m=Me()<.5?1:-1,x=(7.5+Me()*3)*m,p=l.point[0]+f*x,g=l.point[1]+d*x,_=Me()<.4,M=_?new Tn(.32,.34,.7,8):new te(.5+Me()*.3,.4+Me()*.3,.5+Me()*.3),y=_?.35:.2;M.translate(0,y,0),M.rotateY(Me()*Math.PI),Me()<.3&&M.rotateZ((Me()-.5)*.5),M.translate(p,e(p,g),g),Ul(M,Bm[a%Bm.length]),s.push(M)}if(!s.length)return;let r=ae(s,!1),o=new Yt({vertexColors:!0,flatShading:!0});t.add(new Ht(r,o))}function Cb(i,t,e){let n=Gu(i);if(n<4)return[];let s=Pb(),r=[];for(let o=0;o<yb;o++){let a=35+Me()*Math.max(20,n-55),c=Ol(i,a);if(!c)continue;let l=new xi({map:s,transparent:!0,opacity:.18,depthWrite:!1,color:3815468}),h=new Di(l),u=8+Me()*4;h.scale.set(u,u,1),t.add(h);let f=c.point[0]+(Me()-.5)*14,d=c.point[1]+(Me()-.5)*14;r.push({sprite:h,baseX:f,baseZ:d,baseY:e(f,d)+6+Me()*3,phase:Me()*Math.PI*2,riseSpeed:.25+Me()*.15,riseRange:9+Me()*3,driftAmp:2+Me()*2,driftFreq:.05+Me()*.05,baseOpacity:.14+Me()*.1})}return r}function Ib(i,t,e){for(let n of i){let s=(e*n.riseSpeed+n.phase)%n.riseRange;n.sprite.position.set(n.baseX+Math.sin(e*n.driftFreq+n.phase)*n.driftAmp,n.baseY+s,n.baseZ+Math.cos(e*n.driftFreq*.8+n.phase)*n.driftAmp);let r=s/n.riseRange;n.sprite.material.opacity=n.baseOpacity*(1-Math.abs(r-.5)*1.4)}}function Pb(){let t=document.createElement("canvas");t.width=128,t.height=128;let e=t.getContext("2d"),n=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,"rgba(60,58,48,0.55)"),n.addColorStop(.5,"rgba(50,48,40,0.25)"),n.addColorStop(1,"rgba(40,38,32,0)"),e.fillStyle=n,e.fillRect(0,0,128,128);let s=new Le(t);return s.colorSpace=ne,s}var Lb=3.2,Bl=.1,Nb=2.5,Db=60,Ub=40,Fb=.15,Gn=512,Wm=4,Ym=4,Ob=1/3;function zl(i,t){let e=i*73856093^t*19349663;return e=Math.imul(e^e>>>13,2246822507),e^=e>>>16,e>>>0}function Zm(i){let t=i|0;return function(){t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Xm(i,t,e,n,s,r){let o=Zm(r*7919+13);i.save(),i.beginPath(),i.rect(t,e,n,s),i.clip(),i.fillStyle="rgb(150,146,134)",i.fillRect(t,e,n,s);let a=20,c=s/a;for(let h=0;h<a;h++){let u=e+h*c,f=5+Math.floor(o()*3);for(let d=0;d<f;d++){let m=t+d/f*n,x=n/f,p=(o()-.5)*26;i.fillStyle=`rgba(${150+p},${146+p},${134+p},0.6)`,i.fillRect(m,u+2,x,c-2)}i.fillStyle="rgba(0,0,0,0.22)",i.fillRect(t,u,n,2)}for(let h=0;h<20;h++){let u=t+o()*n,f=4+o()*12,d=e+o()*s*.35,m=s*(.3+o()*.45),x=i.createLinearGradient(0,d,0,d+m);x.addColorStop(0,"rgba(20,18,15,0.22)"),x.addColorStop(1,"rgba(20,18,15,0)"),i.fillStyle=x,i.fillRect(u,d,f,m)}let l=2+Math.floor(o()*3);for(let h=0;h<l;h++){let u=n*(.12+o()*.08),f=s*(.15+o()*.09),d=t+n*.08+o()*(n*.84-u),m=e+s*.14+o()*(s*.62-f);i.fillStyle="rgba(64,58,48,0.7)",i.fillRect(d,m,u,f),i.strokeStyle="rgba(112,106,90,0.5)",i.lineWidth=3,i.strokeRect(d+1.5,m+1.5,u-3,f-3)}i.restore()}function Bb(i,t,e,n,s,r,o){let a=Zm(o*104729+5);i.save(),i.translate(t+n/2,e+s*.4),i.rotate((a()-.5)*.05);let c=r.toUpperCase(),l=72;for(i.font=`bold ${l}px Georgia, "Times New Roman", serif`;i.measureText(c).width>n*.8&&l>16;)l-=2,i.font=`bold ${l}px Georgia, "Times New Roman", serif`;i.textAlign="center",i.textBaseline="middle",i.globalAlpha=.2+a()*.12,i.fillStyle="rgb(150,58,42)",i.fillText(c,0,0),i.restore()}function zb(i){let t=Wm,e=2,n=document.createElement("canvas");n.width=Gn*t,n.height=Gn*e;let s=n.getContext("2d"),r=[];for(let c=0;c<Wm;c++){let l=c*Gn,h=0;Xm(s,l,h,Gn,Gn,c),r.push(qm(l,h,n.width,n.height))}let o=[];for(let c=0;c<Ym;c++){let l=c*Gn,h=Gn;Xm(s,l,h,Gn,Gn,c+97),i[c]&&Bb(s,l,h,Gn,Gn,i[c],c),o.push(qm(l,h,n.width,n.height))}let a=new Le(n);return a.colorSpace=ne,a.anisotropy=4,{texture:a,baseUv:r,ghostUv:o}}function qm(i,t,e,n){return{u0:i/e,u1:(i+Gn)/e,v0:1-(t+Gn)/n,v1:1-t/n}}function Km(i,t,e){let n=i&&i.leith&&i.leith.buildings||[],s=i&&i.facadeManifest,r=t&&t.nearestStreetPoint,o=t&&t.groundHeight;if(!n.length||!r)return{mesh:null,count:0};let a=[];if(s)for(let _ of s.buildings)for(let M of _.businesses||[])a.push(M.name);let c=[];if(a.length)for(let _=0;_<Ym;_++)c.push(a[zl(_,a.length)%a.length]);let l=zb(c),h=[],u=[],f=[],d=[],m=0,x=(_,M,y,T,E,A,v,b,R,I,P)=>{let B=m*4;h.push(E,R,A,v,R,b,v,I,b,E,I,A),u.push(_,M,y,M,y,T,_,T);for(let V=0;V<4;V++)f.push(P.r,P.g,P.b);d.push(B,B+1,B+2,B,B+2,B+3),m++};if(n.forEach((_,M)=>{let y=_&&_.footprint;if(!y||y.length<3)return;let T=Math.max(1,_.levels||1)*Lb,E=0,A=0;for(let I of y)E+=I[0],A+=I[1];E/=y.length,A/=y.length;let v=o?o(E,A):0,b=kb(_,r),R=Fu(M,_);for(let I=0;I<y.length;I++){let P=y[I],B=y[(I+1)%y.length],V=B[0]-P[0],D=B[1]-P[1],O=Math.hypot(V,D);if(O<Nb||Hb(P[0],P[1],B[0],B[1],b))continue;let U=(P[0]+B[0])/2,W=(P[1]+B[1])/2,J=r(U,W),ut=r(P[0],P[1]),z=r(B[0],B[1]);if(Math.min(J?J.distance:1/0,ut?ut.distance:1/0,z?z.distance:1/0)>Db||O*T<Ub)continue;let pt=P[0],mt=P[1],q=V,ot=D,it=-D/O,Mt=V/O;it*(U-E)+Mt*(W-A)<0&&(it=-it,Mt=-Mt,pt=B[0],mt=B[1],q=-V,ot=-D);let Tt=pt+it*Bl,St=mt+Mt*Bl,Wt=pt+q+it*Bl,Ut=mt+ot+Mt*Bl,lt=c.length&&zl(M,I*31+7)%1e3/1e3<Ob?l.ghostUv:l.baseUv,et=zl(M,I*131+41)%lt.length,ft=lt[et],at=zl(M,I*991+3)%2===0,yt=at?ft.u1:ft.u0,xt=at?ft.u0:ft.u1;x(yt,ft.v0,xt,ft.v1,Tt,St,Wt,Ut,v,v+T,R)}}),!m)return{mesh:null,count:0};let p=new ge;p.setAttribute("position",new jt(h,3)),p.setAttribute("uv",new jt(u,2)),p.setAttribute("color",new jt(f,3)),p.setIndex(d),p.computeVertexNormals();let g=new Ht(p,new Yt({map:l.texture,vertexColors:!0,flatShading:!0}));return g.name="gable-dressing",e.add(g),{mesh:g,count:m}}function Hb(i,t,e,n,s){let r=(i+e)/2,o=(t+n)/2;for(let a of s){let c=a.bx-a.ax,l=a.bz-a.az,h=c*c+l*l||1,u=((r-a.ax)*c+(o-a.az)*l)/h;if(u<-.01||u>1.01)continue;let f=a.ax+u*c,d=a.az+u*l;if(Math.hypot(r-f,o-d)<Fb)return!0}return!1}function kb(i,t){try{return Vr(i,t)}catch{return[]}}var $m=3.2,Jm=80,Gb=10,jm=.5,Vu=2500,Vb=1/5;function Qm(i,t){let e=i*73856093^t*19349663;return e=Math.imul(e^e>>>13,2246822507),e^=e>>>16,e>>>0}function qs(i,t){return Qm(i,t)%1e5/1e5}function Wb(){let i=[],t=new te(.9,1.8,.55).toNonIndexed();t.deleteAttribute("uv"),t.translate(0,.9,0),i.push(t);let e=[[-.28,0],[.05,.15],[.3,-.12]];for(let[n,s]of e){let r=new Tn(.12,.13,.4,5,1,!0).toNonIndexed();r.deleteAttribute("uv"),r.translate(n,1.8+.2,s),i.push(r)}return ae(i,!1)}function Xb(){let i=[],t=new Tn(.02,.03,1.4,5,1,!0).toNonIndexed();t.deleteAttribute("uv"),t.translate(0,.7,0),i.push(t);for(let e=0;e<2;e++){let n=new te(.5-e*.14,.02,.02).toNonIndexed();n.deleteAttribute("uv"),n.translate(0,1+e*.22,0),i.push(n)}return ae(i,!1)}function t0(i,t,e){let n=i&&i.leith&&i.leith.buildings||[],s=t&&t.nearestStreetPoint,r=t&&t.groundHeight;if(!n.length||!s)return{chimneys:null,aerials:null,count:0};let o=(A,v)=>`${Math.round(A/jm)}:${Math.round(v/jm)}`,a=new Map;n.forEach(A=>{let v=A&&A.footprint;if(v)for(let[b,R]of v){let I=o(b,R);a.set(I,(a.get(I)||0)+1)}});let c=[];n.forEach((A,v)=>{let b=A&&A.footprint;if(!b||b.length<3)return;let R=0,I=0;for(let D of b)R+=D[0],I+=D[1];R/=b.length,I/=b.length;let P=s(R,I);if(!P||P.distance>Jm)return;let B=Math.max(1,A.levels||1)*$m,V=new Set;for(let D=0;D<b.length;D++){let O=b[D],U=b[(D+1)%b.length],W=o(O[0],O[1]);if(a.get(W)>1&&!V.has(W)){V.add(W);let ot=s(O[0],O[1]),it=B+(r?r(O[0],O[1]):0);c.push({x:O[0],z:O[1],y:it,dist:ot?ot.distance:P.distance,bi:v,edgeSeed:D})}let J=U[0]-O[0],ut=U[1]-O[1],z=Math.hypot(J,ut);if(z<3)continue;let Y=(O[0]+U[0])/2,rt=(O[1]+U[1])/2,pt=s(Y,rt),mt=!0;if(pt&&pt.point){let ot=1/z,it=-ut*ot,Mt=J*ot;it*(Y-R)+Mt*(rt-I)<0&&(it=-it,Mt=-Mt);let Tt=pt.point[0]-Y,St=pt.point[1]-rt,Wt=Math.hypot(Tt,St)||1;mt=(it*Tt+Mt*St)/Wt>=0}if(!mt)continue;let q=Math.max(1,Math.round(z/Gb));for(let ot=0;ot<q;ot++){let it=(ot+.5)/q,Mt=O[0]+J*it,Tt=O[1]+ut*it,St=B+(r?r(Mt,Tt):0);c.push({x:Mt,z:Tt,y:St,dist:(s(Mt,Tt)||P).distance,bi:v,edgeSeed:D*97+ot})}}}),c.sort((A,v)=>A.dist-v.dist);let l=Math.max(0,c.length-Vu),h=l>0?c.slice(0,Vu):c;l>0&&console.warn(`[chimneys] ${l} candidate chimney placements beyond ${Vu} dropped (furthest-from-street first, not a silent mid-street gap)`);let u=Wb(),f=new Yt({color:3025444}),d=h.length?new cn(u,f,h.length):null,m=new Jt,x=new L,p=new Ie,g=new L,_=new Ve;d&&(h.forEach((A,v)=>{let b=.75+qs(A.bi,A.edgeSeed*3+1)*.65,R=(qs(A.bi,A.edgeSeed*3+2)-.5)*.12,I=(qs(A.bi,A.edgeSeed*3+3)-.5)*.12,P=qs(A.bi,A.edgeSeed*3+4)*Math.PI*2;x.set(A.x,A.y,A.z),_.set(R,P,I),p.setFromEuler(_),g.set(1,b,1),m.compose(x,p,g),d.setMatrixAt(v,m)}),d.instanceMatrix.needsUpdate=!0,d.name="chimneys",e.add(d));let M=[];n.forEach((A,v)=>{let b=A&&A.footprint;if(!b||b.length<3||Qm(v,5153)%1e3/1e3>=Vb)return;let R=0,I=0;for(let U of b)R+=U[0],I+=U[1];R/=b.length,I/=b.length;let P=s(R,I);if(!P||P.distance>Jm)return;let B=Math.max(1,A.levels||1)*$m,V=b[0],D=1/0;for(let U of b){let W=P.point?Math.hypot(U[0]-P.point[0],U[1]-P.point[1]):0;W<D&&(D=W,V=U)}let O=B+(r?r(V[0],V[1]):0);M.push({x:V[0],z:V[1],y:O,bi:v})});let y=Xb(),T=new Yt({color:1842204}),E=M.length?new cn(y,T,M.length):null;return E&&(M.forEach((A,v)=>{let b=(qs(A.bi,71)-.5)*.3,R=(qs(A.bi,73)-.5)*.3,I=qs(A.bi,79)*Math.PI*2;x.set(A.x,A.y,A.z),_.set(b,I,R),p.setFromEuler(_),g.set(1,1,1),m.compose(x,p,g),E.setMatrixAt(v,m)}),E.instanceMatrix.needsUpdate=!0,E.name="aerials",e.add(E)),{chimneys:d,aerials:E,count:h.length,aerialCount:M.length,dropped:l}}var qb=3028026,Yb=9278327,Zb=2304048,Kb=6051656,$b=11557412,Jb=3.2,jb=1/700,Qb=`
  varying vec3 vDir;
  void main() {
    // World-space view ray. Correct whether the dome is parented to the camera
    // or to the scene, because modelMatrix carries whichever transform applies.
    vDir = (modelMatrix * vec4(position, 1.0)).xyz - cameraPosition;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,tE=`
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
    vec2 p = d.xz / max(h, 0.05) * ${Jb.toFixed(2)}
           + cameraPosition.xz * ${jb.toFixed(6)};
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
`;function e0(i,t){let e=new Et(0,-1);if(t&&t.length>1){let o=t[0],a=t[t.length-1];e.set(o[0]-a[0],o[1]-a[1]).normalize()}let n={uFog:{value:i},uBand:{value:new ht(Yb)},uZenith:{value:new ht(qb)},uCloudDark:{value:new ht(Zb)},uCloudLit:{value:new ht(Kb)},uGlow:{value:new ht($b)},uDock:{value:e},uTime:{value:0}},s=new An({uniforms:n,vertexShader:Qb,fragmentShader:tE,side:un,depthWrite:!1,depthTest:!1,fog:!1}),r=new Ht(new Fi(1,32,20),s);return r.renderOrder=-1e3,r.frustumCulled=!1,{mesh:r,uniforms:n,update(o){n.uTime.value=o},setPalette({band:o,zenith:a,cloudDark:c,cloudLit:l,glow:h}){o&&n.uBand.value.copy(o),a&&n.uZenith.value.copy(a),c&&n.uCloudDark.value.copy(c),l&&n.uCloudLit.value.copy(l),h&&n.uGlow.value.copy(h)}}}var eE=1,nE=30,iE=[{hour:0,sun:{color:3359834,intensity:.05,pos:{x:-100,y:-50,z:80}},hemi:{sky:1844272,ground:855048,intensity:.6},ambient:{color:1315855,intensity:.25},fog:1316111,exposure:.55,tint:{r:.12,g:.12,b:.15},sky:{band:1711126,zenith:855826,cloudDark:658447,cloudLit:2237468,glow:6040594},torch:1,windowGlow:1},{hour:5,sun:{color:3820126,intensity:.08,pos:{x:250,y:20,z:-150}},hemi:{sky:2239544,ground:1052426,intensity:.7},ambient:{color:1513231,intensity:.3},fog:1579539,exposure:.6,tint:{r:.14,g:.14,b:.17},sky:{band:2105882,zenith:1053464,cloudDark:855826,cloudLit:2500640,glow:6500367},torch:.95,windowGlow:.9},{hour:8,sun:{color:10465480,intensity:.5,pos:{x:200,y:180,z:-100}},hemi:{sky:6055282,ground:2367770,intensity:2},ambient:{color:3158047,intensity:.8},fog:3817528,exposure:1,tint:{r:.55,g:.55,b:.6},sky:{band:6384210,zenith:2304048,cloudDark:1843240,cloudLit:4802102,glow:9062942},torch:.3,windowGlow:.15},{hour:12,sun:{color:13621480,intensity:1.15,pos:{x:-200,y:300,z:150}},hemi:{sky:9147296,ground:3814180,intensity:3.9},ambient:{color:4999224,intensity:1.4},fog:4870466,exposure:1.46,tint:{r:1,g:1,b:1},sky:{band:9278327,zenith:3028026,cloudDark:2304048,cloudLit:6051656,glow:11557412},torch:.03,windowGlow:0},{hour:17,sun:{color:12101768,intensity:.6,pos:{x:-250,y:150,z:200}},hemi:{sky:6972504,ground:3025438,intensity:2.3},ambient:{color:3551264,intensity:.9},fog:3948336,exposure:1.05,tint:{r:.6,g:.58,b:.55},sky:{band:7629650,zenith:2632756,cloudDark:1974826,cloudLit:5130812,glow:11031582},torch:.15,windowGlow:.1},{hour:20,sun:{color:6050920,intensity:.15,pos:{x:-300,y:40,z:220}},hemi:{sky:3027518,ground:1578256,intensity:1},ambient:{color:1841682,intensity:.4},fog:2434847,exposure:.75,tint:{r:.3,g:.28,b:.3},sky:{band:3421226,zenith:1579808,cloudDark:1185050,cloudLit:3683626,glow:9190936},torch:.55,windowGlow:.6},{hour:22,sun:{color:3818070,intensity:.06,pos:{x:-150,y:-30,z:100}},hemi:{sky:1975600,ground:920841,intensity:.7},ambient:{color:1381646,intensity:.3},fog:1579540,exposure:.6,tint:{r:.16,g:.16,b:.19},sky:{band:1842711,zenith:921620,cloudDark:724240,cloudLit:2369054,glow:6696722},torch:.9,windowGlow:.95}],n0={overcast:iE};function sE(i){return n0[i]||n0.overcast}function rE(i,t){let e=sE(t),n=e.length-1;for(let c=0;c<e.length&&e[c].hour<=i;c++)n=c;let s=e[n],r=e[(n+1)%e.length],o=r.hour-s.hour;o<=0&&(o+=24);let a=i-s.hour;return a<0&&(a+=24),a=o>0?Math.max(0,Math.min(1,a/o)):0,{a:s,b:r,t:a}}function $n(i,t,e){return i+(t-i)*e}function oE(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function aE(i){let t=i.getFullYear(),e=String(i.getMonth()+1).padStart(2,"0"),n=String(i.getDate()).padStart(2,"0");return oE(`${t}-${e}-${n}`)%1e4/1e4*24}function i0({scene:i,renderer:t,world:e,sky:n,torch:s,windows:r}){let o=e.lights&&e.lights.hemi,a=e.lights&&e.lights.sun,c=e.lights&&e.lights.ambient,l=e.fog,h=aE(new Date),u=eE,f="overcast",d=new ht,m=new ht,x=new ht,p=new ht,g=new ht,_=new ht,M=new ht,y=new ht,T=new ht,E=new ht,A=new ht,v=new ht,b=new ht,R=new ht,I=new ht,P=new ht,B=new ht,V=new ht,D=new ht,O=new ht,U=new ht,W=new ht,J=new ht,ut=new ht,z=new ht,Y=new L,rt=new ht(1,1,1),pt=0,mt=t.toneMappingExposure,q=new Map,ot=0;function it(et){q.has(et)||et.userData&&et.userData.unlit===!1||q.set(et,et.color.clone())}function Mt(){let et=new Set;i.traverse(ft=>{if(!ft.isMesh||!ft.material)return;let at=Array.isArray(ft.material)?ft.material:[ft.material];for(let yt of at)yt&&(et.add(yt),yt.isMeshBasicMaterial&&it(yt))});for(let ft of q.keys())et.has(ft)||q.delete(ft)}function Tt(){for(let[et,ft]of q)et.color.copy(ft).multiply(rt)}function St(et,ft){u!==0&&(h=(h+u*(et/60))%24,h<0&&(h+=24));let{a:at,b:yt,t:xt}=rE(h,f);if(a){a.color.lerpColors(d.set(at.sun.color),m.set(yt.sun.color),xt),a.intensity=$n(at.sun.intensity,yt.sun.intensity,xt),Y.set($n(at.sun.pos.x,yt.sun.pos.x,xt),$n(at.sun.pos.y,yt.sun.pos.y,xt),$n(at.sun.pos.z,yt.sun.pos.z,xt)),a.position.copy(Y);let Gt=Y.length()||1;pt=Math.asin(Zn.clamp(Y.y/Gt,-1,1))*Zn.RAD2DEG}o&&(o.color.lerpColors(x.set(at.hemi.sky),p.set(yt.hemi.sky),xt),o.groundColor.lerpColors(g.set(at.hemi.ground),_.set(yt.hemi.ground),xt),o.intensity=$n(at.hemi.intensity,yt.hemi.intensity,xt)),c&&(c.color.lerpColors(M.set(at.ambient.color),y.set(yt.ambient.color),xt),c.intensity=$n(at.ambient.intensity,yt.ambient.intensity,xt)),l&&l.color.lerpColors(T.set(at.fog),E.set(yt.fog),xt),mt=$n(at.exposure,yt.exposure,xt),t.toneMappingExposure=mt,rt.setRGB($n(at.tint.r,yt.tint.r,xt),$n(at.tint.g,yt.tint.g,xt),$n(at.tint.b,yt.tint.b,xt)),n&&(b.lerpColors(A.set(at.sky.band),v.set(yt.sky.band),xt),P.lerpColors(R.set(at.sky.zenith),I.set(yt.sky.zenith),xt),D.lerpColors(B.set(at.sky.cloudDark),V.set(yt.sky.cloudDark),xt),W.lerpColors(O.set(at.sky.cloudLit),U.set(yt.sky.cloudLit),xt),z.lerpColors(J.set(at.sky.glow),ut.set(yt.sky.glow),xt),n.setPalette({band:b,zenith:P,cloudDark:D,cloudLit:W,glow:z})),s&&s.setDarkness($n(at.torch,yt.torch,xt)),r&&r.setGlow($n(at.windowGlow,yt.windowGlow,xt)),ot++,ot%nE===0&&Mt(),Tt()}Mt(),St(0,0);function Wt(et){h=(et%24+24)%24,u=0,St(0,0)}function Ut(et){u=et}function tt(){return h}function lt(){return{hours:h,rate:u,weather:f,sunAltitude:pt,exposure:mt,tint:{r:rt.r,g:rt.g,b:rt.b}}}return{update:St,setTime:Wt,getTime:tt,setRate:Ut,state:lt}}var s0=3.2,cE=2.4,lE=.85,hE=1.15,r0=.34,uE=1/11,Wu=4e3;function fE(i,t){let e=i*73856093^t*19349663;return e=Math.imul(e^e>>>13,2246822507),e^=e>>>16,e>>>0}function Xu(i,t){return fE(i,t)%1e5/1e5}function dE(){let t=document.createElement("canvas");t.width=t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255, 214, 150, 0.95)"),n.addColorStop(.5,"rgba(255, 190, 110, 0.55)"),n.addColorStop(1,"rgba(255, 170, 90, 0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let s=new Le(t);return s.colorSpace=ne,s}function o0(i,t,e){let n=i&&i.leith&&i.leith.buildings||[],s=t&&t.nearestStreetPoint,r=t&&t.groundHeight;if(!n.length||!s)return{mesh:null,count:0,setGlow(){}};let o=[];n.forEach((_,M)=>{let y=Math.max(1,_.levels||1);if(y<2)return;Vr(_,s).forEach((E,A)=>{if(E.len<1)return;let v=(E.ax+E.bx)/2,b=(E.az+E.bz)/2,R=s(v,b);if(!R||!R.point)return;let I=-E.dirz,P=E.dirx,B=R.point[0]-v,V=R.point[1]-b;I*B+P*V<0&&(I=-I,P=-P);let D=Math.atan2(I,P),O=Math.max(1,Math.round(E.len/cE));for(let U=0;U<O;U++){let W=A*4099+U;if(Xu(M,W)>=uE)continue;let J=(U+.5)/O,ut=E.ax+E.dirx*E.len*J+I*r0,z=E.az+E.dirz*E.len*J+P*r0,Y=1+Math.floor(Xu(M,W+1)*(y-1)),rt=.3+Xu(M,W+2)*.4,mt=(r?r(ut,z):0)+Y*s0+rt*s0,q=s(ut,z);o.push({x:ut,y:mt,z,yaw:D,dist:q?q.distance:0})}})}),o.sort((_,M)=>_.dist-M.dist);let a=Math.max(0,o.length-Wu),c=a>0?o.slice(0,Wu):o;if(a>0&&console.warn(`[windows] ${a} candidate lit windows beyond ${Wu} dropped (furthest-from-street first)`),!c.length)return{mesh:null,count:0,setGlow(){}};let l=new Ue(lE,hE),h=new En({map:dE(),transparent:!0,opacity:0,depthWrite:!1,blending:Bs,side:xn});h.userData.unlit=!1;let u=new cn(l,h,c.length);u.name="lit-windows";let f=new Jt,d=new L,m=new Ie,x=new Ve,p=new L(1,1,1);c.forEach((_,M)=>{d.set(_.x,_.y,_.z),x.set(0,_.yaw,0),m.setFromEuler(x),f.compose(d,m,p),u.setMatrixAt(M,f)}),u.instanceMatrix.needsUpdate=!0,e.add(u);function g(_){h.opacity=Math.max(0,Math.min(1,_))}return{mesh:u,count:c.length,dropped:a,setGlow:g}}var qu={r:44,g:50,b:45},pE=2501416,a0=60;function mE(){let e=document.createElement("canvas");e.width=e.height=256;let n=e.getContext("2d"),s=n.createImageData(256,256),r=s.data;for(let o=0;o<256;o++)for(let a=0;a<256;a++){let c=a/256*6,l=o/256*6,h=qu.r,u=qu.g,f=qu.b,d=je(c,l,6,3,401)-.5;h+=d*10,u+=d*12,f+=d*10,Kn(a,o,419)>.986&&(h+=26,u+=26,f+=22);let x=(o*256+a)*4;r[x]=Math.max(0,Math.min(255,h)),r[x+1]=Math.max(0,Math.min(255,u)),r[x+2]=Math.max(0,Math.min(255,f)),r[x+3]=255}return n.putImageData(s,0,0),Vs(e)}function c0(i,t){let e=i.streetLine||[];if(e.length<2)return{group:null};let n=e[0],s=e[e.length-1],r=n[0]-s[0],o=n[1]-s[1],a=Math.hypot(r,o)||1;r/=a,o/=a;let c=-o,l=r,u=(i.groundHeight?i.groundHeight(n[0],n[1]):0)-2.5,f=new se;f.name="forth";let d=1400,m=15,x=new Ue(d,d);x.rotateX(-Math.PI/2);let p=mE();p.repeat.set(d/a0,d/a0);let g=new Ht(x,new Yt({map:p}));g.position.set(n[0]+r*(m+d/2),u,n[1]+o*(m+d/2)),g.name="forth-water",f.add(g);let _=m+340,M=12,y=new te(26,M,900);y.translate(0,M/2,0),y.rotateY(Math.atan2(c,l)),y.translate(n[0]+r*_,u,n[1]+o*_);let T=new Ht(y,new Yt({color:new ht(pE).multiplyScalar(4.7)}));return T.name="forth-shore",f.add(T),t.add(f),{group:f,water:g,shore:T}}var Ee=(()=>{let i=13723136;return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}})(),Zu=596,Zs=690,Yu=620,gE=593,xE=-3.2,_E=115,hi=3.5,Ys=2,$s=.03,yE=.042;function h0(i,t){let e=i.streetLine||[];if(e.length<2)return{group:new se};let n=i.groundHeight,s=new se;t.add(s);let r=[],o=[],a=[],c=[];return SE(e,s,c,r,o,a,n),TE(e,r,n),RE(e,s,n),wE(r,s),EE(o,a,s),c.length&&s.add(new Ht(ae(c,!1),new Yt({vertexColors:!0,flatShading:!0}))),{group:s}}function vE(i,t){let e=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,h=Math.hypot(c,l);if(e+h>=t){let u=h>0?(t-e)/h:0;return{point:[s+c*u,r+l*u],tangent:[c/(h||1),l/(h||1)]}}e+=h}return null}function ME(i){let t=0;for(let e=1;e<i.length;e++)t+=Math.hypot(i[e][0]-i[e-1][0],i[e][1]-i[e-1][1]);return t}function Ks(i,t,e,n){let s=vE(i,t);if(!s)return null;let[r,o]=s.tangent,a=-o,c=r,l=s.point[0]+a*e,h=s.point[1]+c*e;return{x:l,z:h,y:n?n(l,h):0,yaw:Math.atan2(r,o),tangent:s.tangent}}function SE(i,t,e,n,s,r,o){let a=PE(),c=[],l=1.5;for(let h=Yu-6;h<Zs;h+=5){let u=Ks(i,h+2.5,(Ee()-.5)*.8,o);if(!u)break;let f=new Ue(l*2,5.4);f.rotateX(-Math.PI/2),f.rotateY(u.yaw),f.translate(u.x,u.y+yE,u.z),c.push(f)}c.length&&t.add(new Ht(ae(c,!1),new Yt({map:a,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3})));for(let h=Yu-8;h<Zs+4;h+=3.2)for(let u of[-1,1]){let f=Ks(i,h+Ee()*2,u*(l+.7+Ee()*.9),o);if(!f)continue;let d=.75+Ee()*.65,m=.26+Ee()*.26,x=new Pr(d,m,9);if(x.translate(0,m/2,0),x.scale(1,1,.7+Ee()*.5),x.rotateY(Ee()*Math.PI),x.translate(f.x,f.y+$s,f.z),da(x,[6048825,6969411,4865326][Math.floor(Ee()*3)]),e.push(x),Ee()<.55){let p=new te(.4+Ee()*.5,.09,.35+Ee()*.4);p.rotateZ((Ee()-.5)*.9),p.rotateY(Ee()*Math.PI),p.translate(f.x+(Ee()-.5)*1.4,f.y+$s+.12,f.z+(Ee()-.5)*1.4),da(p,2829352),e.push(p)}}for(let h=Yu-10;h<Zs+6;h+=2.3)for(let u of[-1,1]){let f=Ks(i,h,u*(l+1.9+Ee()*.4),o);f&&n.push({...f,tipped:Ee()<.16})}l0(i,Zu,Zs,4.4,s,r,o),l0(i,Zu,Zs,-4.4,s,r,o),bE(i,Zs+2,s,r,o)}function l0(i,t,e,n,s,r,o){for(let a=t;a<e;a+=hi+.1){let c=Ks(i,a+hi/2,n,o);if(!c)break;Ee()<.12||u0(c.x,c.z,c.y,c.yaw,s,r,Ee()<.18)}}function bE(i,t,e,n,s){for(let r=-6;r<=6;r+=hi+.1){let o=Ks(i,t,r+hi/2,s);o&&u0(o.x,o.z,o.y,o.yaw+Math.PI/2,e,n,Ee()<.25)}}function u0(i,t,e,n,s,r,o){let a=o?(Ee()-.5)*.5:(Ee()-.5)*.06,c=[],l=(m,x,p,g,_)=>{let M=new te(m,x,p);M.translate(g,_,0),c.push(M)};l(.05,Ys,.05,-hi/2,Ys/2),l(.05,Ys,.05,hi/2,Ys/2),l(hi,.05,.05,0,Ys-.03),l(hi,.05,.05,0,.03);let h=new te(.5,.11,.26);h.translate(-hi/2,.055,0);let u=new te(.5,.11,.26);u.translate(hi/2,.055,0),c.push(h,u);let f=ae(c,!1);f.rotateZ(a),f.rotateY(n),f.translate(i,e+$s,t),s.push(f);let d=new Ue(hi-.1,Ys-.1);d.translate(0,Ys/2,0),d.rotateZ(a),d.rotateY(n),d.translate(i,e+$s,t),r.push(d)}function EE(i,t,e){i.length&&e.add(new Ht(ae(i,!1),new Yt({color:5592911,flatShading:!0}))),t.length&&e.add(new Ht(ae(t,!1),new Yt({map:IE(),transparent:!0,alphaTest:.35,side:De,depthWrite:!0})))}function TE(i,t,e){let n=ME(i);for(let s=40;s<n-20;s+=_E){if(s>Zu-40&&s<Zs+40)continue;let r=3+Math.floor(Ee()*6);for(let o=0;o<r;o++){let a=Ks(i,s+(Ee()-.5)*14,(Ee()-.5)*12,e);a&&t.push({...a,tipped:Ee()<.35})}}}function AE(){let i=[],t=new Pr(.24,.62,10);t.translate(0,.31,0),da(t,11025678),i.push(t);let e=new Tn(.125,.15,.13,10);e.translate(0,.33,0),da(e,13223092),i.push(e);let n=new te(.34,.05,.34);return n.translate(0,.025,0),da(n,8006666),i.push(n),ae(i,!1)}function wE(i,t){if(!i.length)return;let e=AE(),n=new Yt({vertexColors:!0,flatShading:!0}),s=new cn(e,n,i.length),r=new Jt,o=new Ie,a=new Ve,c=new L,l=new L(1,1,1);i.forEach((h,u)=>{a.set(h.tipped?Math.PI/2*(.75+Ee()*.3):(Ee()-.5)*.08,Ee()*Math.PI*2,0,"YXZ"),o.setFromEuler(a),c.set(h.x,(h.y||0)+$s+(h.tipped?.2:0),h.z),r.compose(c,o,l),s.setMatrixAt(u,r)}),s.instanceMatrix.needsUpdate=!0,t.add(s)}function RE(i,t,e){let n=Ks(i,gE,xE,e);if(!n)return;let s=4.2,r=2.5,o=.45,a=new Ue(s,r);a.translate(0,o+r/2,0);let[c,l]=n.tangent,h=Math.atan2(-c,-l);a.rotateY(h),a.translate(n.x,n.y+$s,n.z),t.add(new Ht(a,new Yt({map:CE(),side:De})));let u=[];for(let d of[-1,1]){let m=new te(.12,o+.3,.12);m.translate(d*(s/2-.3),(o+.3)/2,0),u.push(m)}let f=ae(u,!1);f.rotateY(h),f.translate(n.x,n.y+$s,n.z),t.add(new Ht(f,new Yt({color:4867128})))}function CE(){let e=document.createElement("canvas");e.width=1024,e.height=610;let n=e.getContext("2d");n.fillStyle="#26506e",n.fillRect(0,0,1024,610);for(let r=0;r<2600;r++){let o=Math.random()*1024,a=Math.random()*610;n.fillStyle=`rgba(${20+Math.random()*60},${30+Math.random()*50},${40+Math.random()*50},0.06)`,n.fillRect(o,a,Math.random()*90,Math.random()*5)}n.fillStyle="#e8e6dc",n.textAlign="center",n.font="bold 62px Helvetica, Arial, sans-serif",n.fillText("LEITH WALK",1024/2,110),n.fillText("IMPROVEMENT PROJECT",1024/2,180),n.fillStyle="#f0c02a",n.fillRect(120,232,784,6),n.fillStyle="#e8e6dc",n.font="bold 50px Helvetica, Arial, sans-serif",n.fillText("COMPLETION: SPRING 2023",1024/2,310),n.font="30px Helvetica, Arial, sans-serif",n.fillStyle="#b8c6d2",n.fillText("WE APOLOGISE FOR ANY INCONVENIENCE",1024/2,380),n.font="24px Helvetica, Arial, sans-serif",n.fillText("City of Edinburgh Council",1024/2,430),n.strokeStyle="rgba(210,60,40,0.85)",n.lineWidth=9,n.lineCap="round",n.beginPath(),n.moveTo(190,340),n.lineTo(835,285),n.stroke(),n.save(),n.translate(1024/2,520),n.rotate(-.05),n.fillStyle="rgba(214,66,44,0.9)",n.font="bold 58px Helvetica, Arial, sans-serif",n.fillText("STILL WAITING",0,0),n.restore(),n.globalCompositeOperation="destination-out";for(let r=0;r<26;r++){let o=Math.random()*1024,a=Math.random()<.5?Math.random()*40:610-Math.random()*40;n.beginPath(),n.ellipse(o,a,10+Math.random()*50,6+Math.random()*22,Math.random()*3,0,Math.PI*2),n.fill()}n.globalCompositeOperation="source-over";let s=new Le(e);return s.colorSpace=ne,s.anisotropy=16,s}function IE(){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d");e.clearRect(0,0,128,128),e.strokeStyle="#50524b",e.lineWidth=2;let n=128/8;for(let r=0;r<=8;r++)e.beginPath(),e.moveTo(r*n,0),e.lineTo(r*n,128),e.stroke(),e.beginPath(),e.moveTo(0,r*n),e.lineTo(128,r*n),e.stroke();let s=new Le(t);return s.wrapS=s.wrapT=Yn,s.repeat.set(6,4),s.colorSpace=ne,s.anisotropy=16,s}function PE(){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d");e.fillStyle="#241d16",e.fillRect(0,0,256,256);for(let s=0;s<2200;s++){let r=Math.random();e.fillStyle=`rgba(${30+r*55},${25+r*45},${18+r*35},0.5)`,e.beginPath(),e.arc(Math.random()*256,Math.random()*256,Math.random()*5,0,Math.PI*2),e.fill()}e.fillStyle="rgba(78,84,74,0.45)",e.beginPath(),e.ellipse(256*.55,256*.62,256*.3,256*.13,.3,0,Math.PI*2),e.fill(),e.fillStyle="#4a4235",e.fillRect(0,256*.4,256,16),e.fillStyle="rgba(255,255,255,0.07)",e.fillRect(0,256*.4,256,5);let n=new Le(t);return n.colorSpace=ne,n.anisotropy=16,n}function da(i,t){let e=new ht(t),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;i.setAttribute("color",new jt(s,3))}var fn=(()=>{let i=39441;return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}})(),LE=115,NE=90,DE=40,f0=10,UE=27,FE=8,d0=22,OE=55,Hl=1.35;function p0(i,t,e){let n=i.streetLine||[];if(n.length<2)return{group:new se,update(){}};let s=i.groundHeight||(()=>0),r=new se;e.add(r);let o=BE(n,r);return HE(i,t,r),kE(n,r,s),{group:r,update(a,c){zE(o,c,s)}}}function Ku(i,t){let e=i/2,n=[],s=h=>{let u=new Float32Array([h*.04,0,t*.18,h*.04,0,-t*.16,h*e*.55,.03*e,-t*.3,h*.04,0,t*.18,h*e*.55,.03*e,-t*.3,h*e*.58,.03*e,t*.06,h*e*.58,.03*e,t*.06,h*e*.55,.03*e,-t*.3,h*e,.1*e,-t*.38,h*e*.58,.03*e,t*.06,h*e,.1*e,-t*.38,h*e*.97,.1*e,-t*.1]),f=new ge;return f.setAttribute("position",new jt(u,3)),f.computeVertexNormals(),f},r=s(-1);pa(r,4869188);let o=s(1);pa(o,4869188),n.push(r,o);let a=(h,u,f)=>{let d=new te(h,u,f).toNonIndexed();return d.deleteAttribute("uv"),d},c=a(t*.17,t*.15,t);pa(c,7237734),n.push(c);let l=a(t*.34,.012,t*.3);return l.translate(0,0,-t*.6),pa(l,2895400),n.push(l),ae(n,!1)}function $u(){return new Yt({vertexColors:!0,flatShading:!0,side:De})}function BE(i,t){let e=g0(i),n=[];for(let r=0;r<LE;r++){let o=m0(i,30+fn()*Math.max(1,e-60));if(!o)continue;let[a,c]=o.tangent;n.push({ox:o.point[0],oz:o.point[1],ax:a,az:c,px:-c,pz:a,rAlong:d0+fn()*(OE-d0),rAcross:2.5+fn()*(FE-2.5),y:f0+fn()*(UE-f0),speed:(fn()<.5?-1:1)*(.1+fn()*.14),phase:fn()*Math.PI*2,bobAmp:.5+fn()*1.4,bobFreq:.25+fn()*.45,scale:.85+fn()*.5})}let s=new cn(Ku(Hl,Hl*.42),$u(),n.length);return s.frustumCulled=!1,t.add(s),{mesh:s,birds:n}}function zE({mesh:i,birds:t},e,n){let s=new Jt,r=new Ie,o=new Ve,a=new L,c=new L;t.forEach((l,h)=>{let u=e*l.speed+l.phase,f=Math.cos(u),d=Math.sin(u),m=f*l.rAlong,x=d*l.rAcross,p=l.ox+l.ax*m+l.px*x,g=l.oz+l.az*m+l.pz*x,_=n(p,g)+l.y+Math.sin(e*l.bobFreq+l.phase)*l.bobAmp,M=(-d*l.rAlong*l.ax+f*l.rAcross*l.px)*l.speed,y=(-d*l.rAlong*l.az+f*l.rAcross*l.pz)*l.speed,T=Math.atan2(M,y),E=(-f*l.rAlong*l.ax-d*l.rAcross*l.px)*l.speed*l.speed,A=(-f*l.rAlong*l.az-d*l.rAcross*l.pz)*l.speed*l.speed,v=Math.hypot(M,y)||1e-4,b=(E*y-A*M)/v,R=Zn.clamp(b*90,-1,1);o.set(Math.sin(e*l.bobFreq+l.phase)*.06,T,R,"YXZ"),r.setFromEuler(o),a.set(p,_,g),c.setScalar(l.scale),s.compose(a,r,c),i.setMatrixAt(h,s)}),i.instanceMatrix.needsUpdate=!0}function HE(i,t,e){let n=t&&t.buildings||[],s=i.nearestStreetPoint,r=i.groundHeight||(()=>0),o=[],a=n.filter(d=>{let m=d.footprint;if(!m||m.length<3)return!1;let x=s?s(m[0][0],m[0][1]):null;return!x||x.distance<=30}),c=a.length?NE/a.length:0;for(let d of a){let m=d.footprint,x=Math.max(1,d.levels||1)*3.2,p=Math.floor(c)+(fn()<c%1?1:0);for(let g=0;g<p;g++){let _=Math.floor(fn()*m.length),M=(_+1)%m.length,y=.15+fn()*.7,T=m[_][0]+(m[M][0]-m[_][0])*y,E=m[_][1]+(m[M][1]-m[_][1])*y;o.push({x:T,z:E,y:r(T,E)+x+.12,yaw:fn()*Math.PI*2})}}if(!o.length)return;let l=new cn(Ku(Hl*.42,Hl*.46),$u(),o.length),h=new Jt,u=new Ie,f=new Ve;o.forEach((d,m)=>{f.set(0,d.yaw,0,"YXZ"),u.setFromEuler(f),h.compose(new L(d.x,d.y,d.z),u,new L(1,1,1)),l.setMatrixAt(m,h)}),l.instanceMatrix.needsUpdate=!0,e.add(l)}function kE(i,t,e){let n=g0(i),s=[];for(let h=0;h<DE;h++){let u=m0(i,25+fn()*Math.max(1,n-50));if(!u)continue;let[f,d]=u.tangent,m=-d,x=f,p=(fn()*2-1)*5.5,g=u.point[0]+m*p,_=u.point[1]+x*p;s.push({x:g,z:_,yaw:fn()*Math.PI*2})}if(!s.length)return;let r=Ku(.3,.3);pa(r,5263948);let o=new cn(r,$u(),s.length),a=new Jt,c=new Ie,l=new Ve;s.forEach((h,u)=>{l.set(0,h.yaw,0,"YXZ"),c.setFromEuler(l),a.compose(new L(h.x,e(h.x,h.z)+.1,h.z),c,new L(1,1,1)),o.setMatrixAt(u,a)}),o.instanceMatrix.needsUpdate=!0,t.add(o)}function m0(i,t){let e=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,h=Math.hypot(c,l);if(e+h>=t){let u=h>0?(t-e)/h:0;return{point:[s+c*u,r+l*u],tangent:[c/(h||1),l/(h||1)]}}e+=h}return null}function g0(i){let t=0;for(let e=1;e<i.length;e++)t+=Math.hypot(i[e][0]-i[e-1][0],i[e][1]-i[e-1][1]);return t}function pa(i,t){let e=new ht(t),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;i.setAttribute("color",new jt(s,3))}var Js=(()=>{let i=10775;return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}})(),GE=90,VE=6.6,x0=2.5,WE=9,XE=.06;function M0(i,t){let e=i.streetLine||[];if(e.length<2)return{group:new se,update(){}};let n=new se;t.add(n);let s=KE(e),r=[];for(let c=0;c<GE;c++){let l=20+Js()*Math.max(1,s-45),h=x0+Js()*(WE-x0),u=v0(e,l),f=v0(e,Math.min(l+h,s-1));if(!u||!f)continue;let m=(Js()<.5?1:-1)*(VE+(Js()-.5)*.8),x=y0(u,m),p=y0(f,m);r.push({ax:x[0],az:x[1],bx:p[0],bz:p[1],rate:.07+Js()*.16,phase:Js(),scale:.8+Js()*.5})}let o=new cn(ZE(),new Yt({vertexColors:!0,flatShading:!0}),r.length);n.add(o);let a=i.groundHeight||(()=>0);return{group:n,update(c,l){YE(o,r,l,a)}}}function qE(i){return i<.18?_0(0,.18,i):i<.5?1:i<.68?1-_0(.5,.68,i):0}function _0(i,t,e){let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function YE(i,t,e,n){let s=new Jt,r=new Ie,o=new Ve,a=new L,c=new L;t.forEach((l,h)=>{let u=(e*l.rate+l.phase)%1,f=qE(u),d=l.ax+(l.bx-l.ax)*f,m=l.az+(l.bz-l.az)*f,x=u>=.5,p=x?l.ax-l.bx:l.bx-l.ax,g=x?l.az-l.bz:l.bz-l.az,_=Math.atan2(p,g),y=u<.18||u>=.5&&u<.68?Math.abs(Math.sin(e*26+h))*.025:0;o.set(0,_,0,"YXZ"),r.setFromEuler(o),a.set(d,n(d,m)+XE+y,m),c.setScalar(l.scale),s.compose(a,r,c),i.setMatrixAt(h,s)}),i.instanceMatrix.needsUpdate=!0}function ZE(){let i=[],t=(r,o,a)=>{let c=new te(r,o,a).toNonIndexed();return c.deleteAttribute("uv"),c},e=t(.11,.1,.23);e.translate(0,.05,0),Ju(e,4537909),i.push(e);let n=t(.075,.07,.1);n.translate(0,.045,.15),Ju(n,5129787),i.push(n);let s=t(.016,.016,.21);return s.translate(0,.035,-.21),Ju(s,4866617),i.push(s),ae(i,!1)}function y0(i,t){let[e,n]=i.tangent;return[i.point[0]+-n*t,i.point[1]+e*t]}function v0(i,t){let e=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,h=Math.hypot(c,l);if(e+h>=t){let u=h>0?(t-e)/h:0;return{point:[s+c*u,r+l*u],tangent:[c/(h||1),l/(h||1)]}}e+=h}return null}function KE(i){let t=0;for(let e=1;e<i.length;e++)t+=Math.hypot(i[e][0]-i[e-1][0],i[e][1]-i[e-1][1]);return t}function Ju(i,t){let e=new ht(t),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;i.setAttribute("color",new jt(s,3))}var pe=(()=>{let i=11590938;return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}})(),$E=210,JE=130,jE=260,QE=22;function S0(i,t,e){let n=i.streetLine||[];if(n.length<2)return{group:new se};let s=i.groundHeight||(()=>0),r=new se;return e.add(r),t1(i,t,n,r),n1(n,r,s),i1(n,r,s),s1(n,r,s),{group:r}}function t1(i,t,e,n){let s=e1(),r=[],o=(d,m,x,p,g)=>{for(let _=0;_<3;_++){let M=new Ue(p,p);M.translate(0,p/2,0),M.rotateZ(g),M.rotateY(_/3*Math.PI+pe()*.4),M.translate(d,m,x),r.push(M)}},a=t&&t.buildings||[],c=i.nearestStreetPoint,l=a.filter(d=>{let m=d.footprint;if(!m||m.length<3)return!1;let x=c?c(m[0][0],m[0][1]):null;return!x||x.distance<=28}),h=i.groundHeight||(()=>0),u=l.length?$E/l.length:0;for(let d of l){let m=d.footprint,x=Math.floor(u)+(pe()<u%1?1:0),p=Math.max(1,d.levels||1)*3.2;for(let g=0;g<x;g++){let _=Math.floor(pe()*m.length),M=(_+1)%m.length,y=.1+pe()*.8,T=m[_][0]+(m[M][0]-m[_][0])*y,E=m[_][1]+(m[M][1]-m[_][1])*y;o(T,h(T,E)+p-.25,E,1.1+pe()*1.5,(pe()-.5)*.5)}}let f=ju(e);for(let d=0;d<JE;d++){let m=Vl(e,20+pe()*Math.max(1,f-40));if(!m)continue;let p=(pe()<.5?1:-1)*(7.2+pe()*2.6),g=Gl(m,p);o(g[0],h(g[0],g[1])+.03,g[1],.8+pe()*1.1,(pe()-.5)*.3)}r.length&&n.add(new Ht(ae(r,!1),new Yt({map:s,transparent:!0,alphaTest:.45,side:De,depthWrite:!0})))}function e1(){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d");e.clearRect(0,0,256,256);for(let s=0;s<170;s++){let r=-Math.PI/2+(Math.random()-.5)*2.5,o=30+Math.random()*78,a=256/2+(Math.random()-.5)*58,c=256-Math.random()*44,l=46+Math.random()*52;e.strokeStyle=`rgba(${28+Math.random()*26},${l},${30+Math.random()*22},0.95)`,e.lineWidth=2+Math.random()*5,e.lineCap="round",e.beginPath(),e.moveTo(a,c),e.quadraticCurveTo(a+Math.cos(r)*o*.5+(Math.random()-.5)*24,c+Math.sin(r)*o*.5,a+Math.cos(r)*o,c+Math.sin(r)*o),e.stroke()}for(let s=0;s<13;s++){let r=34+Math.random()*188,o=26+Math.random()*96,a=26+Math.random()*40;for(let c=0;c<26;c++){let l=c/26,h=(1-l)*8+1.5;e.fillStyle=`rgba(${74+Math.random()*30},${44+Math.random()*22},${88+Math.random()*32},0.88)`,e.beginPath(),e.ellipse(r+(Math.random()-.5)*4,o+l*a,h,3.5,0,0,Math.PI*2),e.fill()}}let n=new Le(t);return n.colorSpace=ne,n.anisotropy=16,n}function n1(i,t,e){let n=ju(i),s=[];for(let r=0;r<jE;r++){let o=Vl(i,15+pe()*Math.max(1,n-30));if(!o)continue;let c=(pe()<.5?1:-1)*(pe()<.65?6.3+pe()*.7:7.5+pe()*2.2),l=Gl(o,c),h=e(l[0],l[1]),u=pe(),f,d;u<.3?(f=new Tn(.037,.042,.27,6),f.rotateZ(Math.PI/2),f.rotateY(pe()*Math.PI*2),f.translate(0,.04,0),d=2899230):u<.55?(f=new Tn(.032,.032,.1,6),f.rotateZ(Math.PI/2+(pe()-.5)*.7),f.scale(1,1,.6),f.translate(0,.032,0),d=pe()<.5?10115614:3100522):u<.8?(f=new te(.16+pe()*.08,.05,.12+pe()*.06),f.rotateY(pe()*Math.PI),f.rotateZ((pe()-.5)*.5),f.translate(0,.026,0),d=11051924):(f=new Ue(.24+pe()*.2,.18+pe()*.14),f.rotateX(-Math.PI/2),f.rotateY(pe()*Math.PI),f.translate(0,.036,0),d=7170652),f.translate(l[0],h+.03,l[1]),kl(f,d),s.push(f)}s.length&&t.add(new Ht(ae(s,!1),new Yt({vertexColors:!0,flatShading:!0,side:De})))}function i1(i,t,e){let n=ju(i),s=[];for(let r=0;r<QE;r++){let o=Vl(i,25+pe()*Math.max(1,n-50));if(!o)continue;let a=pe()<.5?1:-1,c=Gl(o,a*(7.6+pe()*1.8)),l=e(c[0],c[1]),h=pe()<.6,u=[],f=new te(.62,1.05,.72).toNonIndexed();f.deleteAttribute("uv"),f.translate(0,.525,0),kl(f,[3095084,3813160,2634298][Math.floor(pe()*3)]),u.push(f);let d=new te(.66,.07,.76).toNonIndexed();d.deleteAttribute("uv"),d.translate(0,1.07,h?.1:-.3),d.rotateX(h?.2:-.7),kl(d,1975840),u.push(d);let m=ae(u,!1);m.rotateY(pe()*Math.PI*2),h&&m.rotateZ(Math.PI/2+(pe()-.5)*.3),m.translate(c[0],l+(h?.34:.03),c[1]),s.push(m)}s.length&&t.add(new Ht(ae(s,!1),new Yt({vertexColors:!0,flatShading:!0})))}function s1(i,t,e){let n=Vl(i,415);if(!n)return;let s=Gl(n,-3.4),r=e(s[0],s[1]),o=[],a=(f,d,m,x,p,g)=>{let _=new te(f,d,m).toNonIndexed();_.deleteAttribute("uv"),_.translate(x,p,g),o.push(_)},c=.56,l=.44,h=.86;for(let f=0;f<=6;f++){let d=-h/2+f/6*h;a(c,.018,.018,0,l,d),a(.018,l,.018,-c/2,l/2,d),a(.018,l,.018,c/2,l/2,d)}for(let f=0;f<=4;f++){let d=-c/2+f/4*c;a(.018,.018,h,d,.02,0),a(.018,.018,h,d,l,0)}a(c,l,.018,0,l/2,-h/2),a(.03,.3,.03,0,l+.15,-h/2);let u=ae(o,!1);kl(u,6974822),u.rotateZ(Math.PI/2*.92),u.rotateY(pe()*Math.PI*2),u.translate(s[0],r+.3,s[1]),t.add(new Ht(u,new Yt({vertexColors:!0,flatShading:!0})))}function Gl(i,t){let[e,n]=i.tangent;return[i.point[0]+-n*t,i.point[1]+e*t]}function Vl(i,t){let e=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,h=Math.hypot(c,l);if(e+h>=t){let u=h>0?(t-e)/h:0;return{point:[s+c*u,r+l*u],tangent:[c/(h||1),l/(h||1)]}}e+=h}return null}function ju(i){let t=0;for(let e=1;e<i.length;e++)t+=Math.hypot(i[e][0]-i[e-1][0],i[e][1]-i[e-1][1]);return t}function kl(i,t){let e=new ht(t),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;i.setAttribute("color",new jt(s,3))}function b0(i){let t=new Map,e=new Map,n=i.clone();return E0(i,n,function(s,r){t.set(r,s),e.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=t.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return e.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function E0(i,t,e){e(i,t);for(let n=0;n<i.children.length;n++)E0(i.children[n],t.children[n],e)}var Wl=class extends si{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new of(e)}),this.register(function(e){return new af(e)}),this.register(function(e){return new gf(e)}),this.register(function(e){return new xf(e)}),this.register(function(e){return new _f(e)}),this.register(function(e){return new lf(e)}),this.register(function(e){return new hf(e)}),this.register(function(e){return new uf(e)}),this.register(function(e){return new ff(e)}),this.register(function(e){return new rf(e)}),this.register(function(e){return new df(e)}),this.register(function(e){return new cf(e)}),this.register(function(e){return new mf(e)}),this.register(function(e){return new pf(e)}),this.register(function(e){return new nf(e)}),this.register(function(e){return new Xl(e,de.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new Xl(e,de.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new yf(e)})}load(t,e,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Gi.extractUrlBase(t);o=Gi.resolveURL(l,this.path)}else o=Gi.extractUrlBase(t);this.manager.itemStart(t);let a=function(l){s?s(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new Fs(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r,o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===C0){try{o[de.KHR_BINARY_GLTF]=new vf(t)}catch(u){s&&s(u);return}r=JSON.parse(o[de.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new wf(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case de.KHR_MATERIALS_UNLIT:o[u]=new sf;break;case de.KHR_DRACO_MESH_COMPRESSION:o[u]=new Mf(r,this.dracoLoader);break;case de.KHR_TEXTURE_TRANSFORM:o[u]=new Sf;break;case de.KHR_MESH_QUANTIZATION:o[u]=new bf;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(t,e){let n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}};function r1(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}function Ke(i,t,e){let n=i.json.materials[t];return n.extensions&&n.extensions[e]?n.extensions[e]:null}var de={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},nf=class{constructor(t){this.parser=t,this.name=de.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){let r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,s=e.cache.get(n);if(s)return s;let r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t],l,h=new ht(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],bn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Os(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ki(h),l.distance=u;break;case"spot":l=new Ho(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),bi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),s=Promise.resolve(l),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}},sf=class{constructor(){this.name=de.KHR_MATERIALS_UNLIT}getMaterialType(){return En}extendParams(t,e,n){let s=[];t.color=new ht(1,1,1),t.opacity=1;let r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],bn),t.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,ne))}return Promise.all(s)}},rf=class{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let n=Ke(this.parser,t,this.name);return n===null||n.emissiveStrength!==void 0&&(e.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},of=class{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return Ke(this.parser,t,this.name)!==null?Cn:null}extendMaterialParams(t,e){let n=Ke(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(e.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(e,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(e,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(e,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Et(r,r)}return Promise.all(s)}},af=class{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_DISPERSION}getMaterialType(t){return Ke(this.parser,t,this.name)!==null?Cn:null}extendMaterialParams(t,e){let n=Ke(this.parser,t,this.name);return n===null||(e.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},cf=class{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return Ke(this.parser,t,this.name)!==null?Cn:null}extendMaterialParams(t,e){let n=Ke(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(e.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(e,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(e.iridescenceIOR=n.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(e,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},lf=class{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_SHEEN}getMaterialType(t){return Ke(this.parser,t,this.name)!==null?Cn:null}extendMaterialParams(t,e){let n=Ke(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];if(e.sheenColor=new ht(0,0,0),e.sheenRoughness=0,e.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;e.sheenColor.setRGB(r[0],r[1],r[2],bn)}return n.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(e,"sheenColorMap",n.sheenColorTexture,ne)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(e,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},hf=class{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return Ke(this.parser,t,this.name)!==null?Cn:null}extendMaterialParams(t,e){let n=Ke(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(e.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(e,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},uf=class{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_VOLUME}getMaterialType(t){return Ke(this.parser,t,this.name)!==null?Cn:null}extendMaterialParams(t,e){let n=Ke(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];e.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(e,"thicknessMap",n.thicknessTexture)),e.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return e.attenuationColor=new ht().setRGB(r[0],r[1],r[2],bn),Promise.all(s)}},ff=class{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_IOR}getMaterialType(t){return Ke(this.parser,t,this.name)!==null?Cn:null}extendMaterialParams(t,e){let n=Ke(this.parser,t,this.name);return n===null||(e.ior=n.ior!==void 0?n.ior:1.5,e.ior===0&&(e.ior=1e3)),Promise.resolve()}},df=class{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_SPECULAR}getMaterialType(t){return Ke(this.parser,t,this.name)!==null?Cn:null}extendMaterialParams(t,e){let n=Ke(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];e.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(e,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return e.specularColor=new ht().setRGB(r[0],r[1],r[2],bn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(e,"specularColorMap",n.specularColorTexture,ne)),Promise.all(s)}},pf=class{constructor(t){this.parser=t,this.name=de.EXT_MATERIALS_BUMP}getMaterialType(t){return Ke(this.parser,t,this.name)!==null?Cn:null}extendMaterialParams(t,e){let n=Ke(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];return e.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(e,"bumpMap",n.bumpTexture)),Promise.all(s)}},mf=class{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return Ke(this.parser,t,this.name)!==null?Cn:null}extendMaterialParams(t,e){let n=Ke(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(e.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(e.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(e,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},gf=class{constructor(t){this.parser=t,this.name=de.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}},xf=class{constructor(t){this.parser=t,this.name=de.EXT_TEXTURE_WEBP}loadTexture(t){let e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(t,o.source,c)}},_f=class{constructor(t){this.parser=t,this.name=de.EXT_TEXTURE_AVIF}loadTexture(t){let e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(t,o.source,c)}},Xl=class{constructor(t,e){this.name=e,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}},yf=class{constructor(t){this.name=de.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=e.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Jn.TRIANGLES&&l.mode!==Jn.TRIANGLE_STRIP&&l.mode!==Jn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let m of u){let x=new Jt,p=new L,g=new Ie,_=new L(1,1,1),M=new cn(m.geometry,m.material,f);for(let y=0;y<f;y++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,y),c.SCALE&&_.fromBufferAttribute(c.SCALE,y),M.setMatrixAt(y,x.compose(p,g,_));for(let y in c)if(y==="_COLOR_0"){let T=c[y];M.instanceColor=new ns(T.array,T.itemSize,T.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&m.geometry.setAttribute(y,c[y]);Pe.prototype.copy.call(M,m),this.parser.assignFinalMaterial(M),d.push(M)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},C0="glTF",ma=12,T0={JSON:1313821514,BIN:5130562},vf=class{constructor(t){this.name=de.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,ma),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==C0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ma,r=new DataView(t,ma),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===T0.JSON){let l=new Uint8Array(t,ma+o,a);this.content=n.decode(l)}else if(c===T0.BIN){let l=ma+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Mf=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=de.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Tf[h]||h.toLowerCase();a[u]=o[h]}for(let h in t.attributes){let u=Tf[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[t.attributes[h]],d=Wr[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(let m in d.attributes){let x=d.attributes[m],p=c[m];p!==void 0&&(x.normalized=p)}u(d)},a,l,bn,f)})})}},Sf=class{constructor(){this.name=de.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},bf=class{constructor(){this.name=de.KHR_MESH_QUANTIZATION}},ql=class extends _i{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let o=0;o!==s;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-e,u=(n-e)/h,f=u*u,d=f*u,m=t*l,x=m-l,p=-2*d+3*f,g=d-f,_=1-p,M=g-f+u;for(let y=0;y!==a;y++){let T=o[x+y+a],E=o[x+y+c]*h,A=o[m+y+a],v=o[m+y]*h;r[y]=_*T+M*E+p*A+g*v}return r}},o1=new Ie,Ef=class extends ql{interpolate_(t,e,n,s){let r=super.interpolate_(t,e,n,s);return o1.fromArray(r).normalize().toArray(r),r}},Jn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Wr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},A0={9728:Ye,9729:ke,9984:Dc,9985:Fr,9986:Hs,9987:ai},w0={33071:Xn,33648:Mr,10497:Yn},Qu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Tf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},us={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},a1={CUBICSPLINE:void 0,LINEAR:Rs,STEP:ws},tf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function c1(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Us({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xn})),i.DefaultMaterial}function js(i,t,e){for(let n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function bi(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function l1(i,t,e){let n=!1,s=!1,r=!1;for(let l=0,h=t.length;l<h;l++){let u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=t.length;l<h;l++){let u=t[l];if(n){let f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function h1(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function u1(i){let t,e=i.extensions&&i.extensions[de.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+ef(e.attributes):t=i.indices+":"+ef(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+ef(i.targets[n]);return t}function ef(i){let t="",e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function Af(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function f1(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var d1=new Jt,wf=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new r1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new ri(this.options.manager):this.textureLoader=new Go(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Fs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return js(r,a,s),bi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){let o=e[s].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let s=0,r=t.length;s<r;s++){let o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let s=t(e[n]);if(s)return s}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let s=0;s<e.length;s++){let r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){let n=t+":"+e,s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[de.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Gi.resolveURL(e.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){let e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){let o=Qu[s.type],a=Wr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new qe(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Qu[s.type],l=Wr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,x,p;if(d&&d!==u){let g=Math.floor(f/d),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,M=e.cache.get(_);M||(x=new l(a,g*d,s.count*d/h),M=new Is(x,d/h),e.cache.add(_,M)),p=new es(M,c,f%d/h,m)}else a===null?x=new l(s.count*c):x=new l(a,f,s.count*c),p=new qe(x,c,m);if(s.sparse!==void 0){let g=Qu.SCALAR,_=Wr[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,T=new _(o[1],M,s.sparse.count*g),E=new l(o[2],y,s.sparse.count*c);a!==null&&(p=new qe(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let A=0,v=T.length;A<v;A++){let b=T[A];if(p.setX(b,E[A*c]),c>=2&&p.setY(b,E[A*c+1]),c>=3&&p.setZ(b,E[A*c+2]),c>=4&&p.setW(b,E[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(t){let e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){let s=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=A0[f.magFilter]||ke,h.minFilter=A0[f.minFilter]||ai,h.wrapS=w0[f.wrapS]||Yn,h.wrapT=w0[f.wrapT]||Yn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ye&&h.minFilter!==ke,s.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){let n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());let o=s.images[t],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let m=f;e.isImageBitmapLoader===!0&&(m=function(x){let p=new en(x);p.needsUpdate=!0,f(p)}),e.load(Gi.resolveURL(u,r.path),m,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),bi(u,o),u.userData.mimeType=o.mimeType||f1(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[de.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[de.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[de.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),t[e]=o,o})}assignFinalMaterial(t){let e=t.geometry,n=t.material,s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Ir,yn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new is,yn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return Us}loadMaterial(t){let e=this,n=this.json,s=this.extensions,r=n.materials[t],o,a={},c=r.extensions||{},l=[];if(c[de.KHR_MATERIALS_UNLIT]){let u=s[de.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,e))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new ht(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],bn),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",u.baseColorTexture,ne)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=De);let h=r.alphaMode||tf.OPAQUE;if(h===tf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===tf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==En&&(l.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Et(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==En&&(l.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==En){let u=r.emissiveFactor;a.emissive=new ht().setRGB(u[0],u[1],u[2],bn)}return r.emissiveTexture!==void 0&&o!==En&&l.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,ne)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),bi(u,r),e.associations.set(u,{materials:t}),r.extensions&&js(s,u,r),u})}createUniqueName(t){let e=Ce.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[de.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return R0(c,a,e)})}let o=[];for(let a=0,c=t.length;a<c;a++){let l=t[a],h=u1(l),u=s[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[de.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=R0(new ge,l,e),s[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){let e=this,n=this.json,s=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?c1(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,m=h.length;d<m;d++){let x=h[d],p=o[d],g,_=l[d];if(p.mode===Jn.TRIANGLES||p.mode===Jn.TRIANGLE_STRIP||p.mode===Jn.TRIANGLE_FAN||p.mode===void 0)g=r.isSkinnedMesh===!0?new vo(x,_):new Ht(x,_),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),p.mode===Jn.TRIANGLE_STRIP?g.geometry=wu(g.geometry,na):p.mode===Jn.TRIANGLE_FAN&&(g.geometry=wu(g.geometry,zr));else if(p.mode===Jn.LINES)g=new Ns(x,_);else if(p.mode===Jn.LINE_STRIP)g=new Ls(x,_);else if(p.mode===Jn.LINE_LOOP)g=new So(x,_);else if(p.mode===Jn.POINTS)g=new bo(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&h1(g,r),g.name=e.createUniqueName(r.name||"mesh_"+t),bi(g,r),p.extensions&&js(s,g,p),e.assignFinalMaterial(g),u.push(g)}for(let d=0,m=u.length;d<m;d++)e.associations.set(u[d],{meshes:t,primitives:d});if(u.length===1)return r.extensions&&js(s,u[0],r),u[0];let f=new se;r.extensions&&js(s,f,r),e.associations.set(f,{meshes:t});for(let d=0,m=u.length;d<m;d++)f.add(u[d]);return f})}loadCamera(t){let e,n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Je(Zn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new os(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),bi(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new Jt;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Mo(a,c)})}loadAnimation(t){let e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],m=s.samplers[d.sampler],x=d.target,p=x.node,g=s.parameters!==void 0?s.parameters[m.input]:m.input,_=s.parameters!==void 0?s.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",_)),l.push(m),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],m=u[2],x=u[3],p=u[4],g=[];for(let M=0,y=f.length;M<y;M++){let T=f[M],E=d[M],A=m[M],v=x[M],b=p[M];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let R=n._createAnimationTracks(T,E,A,v,b);if(R)for(let I=0;I<R.length;I++)g.push(R[I])}let _=new Fo(r,void 0,g);return bi(_,s),_})}createNodeMesh(t){let e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(t){let e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,d1)});for(let d=0,m=u.length;d<m;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,m=u[0];h.pivot=new L().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(t){let e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let r=e.nodes[t],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new wr:l.length>1?h=new se:l.length===1?h=l[0]:h=new Pe,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),bi(h,r),r.extensions&&js(n,h,r),r.matrix!==void 0){let u=new Jt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],s=this,r=new se;n.name&&(r.name=s.createUniqueName(n.name)),bi(r,n),n.extensions&&js(e,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++){let f=c[h];f.parent!==null?r.add(b0(f)):r.add(f)}let l=h=>{let u=new Map;for(let[f,d]of s.associations)(f instanceof yn||f instanceof en)&&u.set(f,d);return h.traverse(f=>{let d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=l(r),r})}_createAnimationTracks(t,e,n,s,r){let o=[],a=t.name?t.name:t.uuid,c=[];function l(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}us[r.path]===us.weights?(l(t),t.isGroup&&t.children.forEach(l)):c.push(a);let h;switch(us[r.path]){case us.weights:h=Bi;break;case us.rotation:h=zi;break;case us.translation:case us.scale:h=ss;break;default:n.itemSize===1?h=Bi:h=ss;break}let u=s.interpolation!==void 0?a1[s.interpolation]:Rs,f=this._getArrayFromAccessor(n);for(let d=0,m=c.length;d<m;d++){let x=new h(c[d]+"."+us[r.path],e.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=Af(e.constructor),s=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let s=this instanceof zi?Ef:ql;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function p1(i,t,e){let n=t.attributes,s=new _n;if(n.POSITION!==void 0){let a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),a.normalized){let h=Af(Wr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=t.targets;if(r!==void 0){let a=new L,c=new L;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=e.json.accessors[u.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){let x=Af(Wr[f.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Rn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function R0(i,t,e){let n=t.attributes,s=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=Tf[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(t.indices!==void 0&&!i.index){let o=e.getDependency("accessor",t.indices).then(function(a){i.setIndex(a)});s.push(o)}return ue.workingColorSpace!==bn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ue.workingColorSpace}" not supported.`),bi(i,t),p1(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?l1(i,t.targets,e):i})}var Rf=[{file:"cars/sedan.glb",kind:"car",targetLen:4.3},{file:"cars/hatchback-sports.glb",kind:"car",targetLen:3.9},{file:"cars/van.glb",kind:"van",targetLen:5.4},{file:"cars/bus.glb",kind:"bus",targetLen:11}],m1=16,I0=6.1,g1=405,P0=[560,700],Nn=(()=>{let i=3394627454;return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}})();function N0(i,t,e){let n=t&&t.streetLine;if(!n||n.length<2)return{group:null};let s=new se;s.name="cars",e.add(s);let r=new Wl,o=a=>r.loadAsync(Ln(i,a.file)).then(c=>x1(c.scene,a)).catch(()=>null);return Promise.all(Rf.map(o)).then(a=>{let c={};for(let l=0;l<Rf.length;l++)a[l]&&(c[Rf[l].kind]??=[]).push(a[l]);!c.car&&!c.van&&!c.bus||_1(c,n,s,t.groundHeight)}),{group:s}}function x1(i,t){let n=new _n().setFromObject(i).getSize(new L),s=Math.max(n.x,n.z)||1,r=t.targetLen/s;i.scale.setScalar(r),i.updateMatrixWorld(!0);let o=new _n().setFromObject(i);i.position.y=-o.min.y;let a=new se;return a.add(i),a}function L0(i,t){let e=t?.05+Nn()*.04:.18+Nn()*.2,n=Nn()<.5&&!t;i.traverse(s=>{if(!s.isMesh||!s.material)return;let r=s.material,o=new Yt({map:r.map||null,color:(r.color?r.color.clone():new ht(8947848)).multiplyScalar(e)});n&&(o.color.r=Math.min(1,o.color.r*1.35+.03),o.color.b*=.75),s.material=o})}function _1(i,t,e,n){let s=[...i.car||[],...i.van||[]];if(s.length)for(let o=0;o<m1;o++){let a=40+Nn()*1160;if(a>P0[0]&&a<P0[1])continue;let c=la(t,a);if(!c)continue;let l=Nn()<.5?1:-1,[h,u]=c.tangent,f=s[Math.floor(Nn()*s.length)].clone(!0);L0(f,Nn()<.12);let d=c.point[0]+-u*l*(I0+Nn()*.7),m=c.point[1]+h*l*(I0+Nn()*.7);f.position.set(d,n?n(d,m):0,m);let x=Math.atan2(h,u)+(Nn()<.5?Math.PI:0);Nn()<.15&&(x+=(Nn()-.5)*1.2),f.rotation.y=x+(Nn()-.5)*.12,f.rotation.z=(Nn()-.5)*.05,e.add(f)}let r=(i.bus||[])[0];if(r){let o=la(t,g1);if(o){let a=r.clone(!0);L0(a,!0);let c=n?n(o.point[0],o.point[1]):0;a.position.set(o.point[0],c,o.point[1]),a.rotation.y=Math.atan2(o.tangent[0],o.tangent[1])+.06,a.rotation.z=.07,e.add(a)}}}var y1=30,v1=7.6,Xr=30,M1=50,S1=9,Cf=25,b1=3,D0=[4999740,4145720,5655614,4472891,5263946,3816500],U0=[7027246,3033690,7826250,4864602,5921354],F0=['"%Q" \u2014 whit?','did ye hear that? "%Q"','"%Q", says he','"%Q" \u2014 aye, right','"%Q"... ma nerves',`he's away wi it \u2014 "%Q"`],dn=(()=>{let i=1972196;return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}})();function B0(i,t,e,n){let s=t.streetLine||[],r=t.groundHeight||(()=>0);if(s.length<2)return{update(){}};let o=i.comicLines||{},c=A1(s)-Xr-M1;if(c<50)return{update(){}};let l=new se;l.name="leithers",e.add(l);let h=[];for(let x=0;x<y1;x++){let p=E1();p.s=Xr+dn()*c,p.side=dn()<.5?1:-1,p.dir=dn()<.5?1:-1,p.speed=.55+dn()*.5,p.offset=v1+dn()*1.6,p.state="walk",p.listenT=0,p.cooldown=dn()*Cf,p.phase=dn()*10,p.bubble=null,p.bubbleT=0,l.add(p.group),h.push(p)}let u=0,f=0;function d(x,p){for(let g=0;g<h.length;g++){let _=h[g];if(_.cooldown>0&&(_.cooldown-=x),_.state==="fetch"){let T=_.fetchItem.chainage-_.s;if(Math.abs(T)>2)_.dir=Math.sign(T),_.s+=_.dir*_.speed*1.5*x;else{_.state="approach",_.approachT=0;let E=_.group.position;_.approachFrom={x:E.x,z:E.z}}}else if(_.state==="approach"){_.approachT=Math.min(1,_.approachT+x/1.6);let y=_.fetchItem,T=_.approachT,E=y.x+.75,A=y.z,v=_.approachFrom.x+(E-_.approachFrom.x)*T,b=_.approachFrom.z+(A-_.approachFrom.z)*T;_.group.position.set(v,r(v,b)+Math.abs(Math.sin((_.s+T*8)*2))*.03,b),_.group.rotation.y=Math.atan2(y.x-_.group.position.x,y.z-_.group.position.z),T>=1&&(_.state="readaloud",_.readQueue=(_.fetchItem.lines||[]).slice(0,8),_.readT=.5);continue}else if(_.state==="readaloud"){if(_.readT-=x,_.readT<=0&&!_.bubble){let y=_.readQueue.shift();y==null?(_.state="walk",_.fetchItem.adopted=!1,_.fetchItem=null,_.cooldown=Cf):(_.bubble=O0('"'+y+'"'),_.bubble.position.set(0,_.headTopY+.5,0),_.group.add(_.bubble),_.bubbleT=4.2,u++,_.readT=.6)}_.bubble&&(_.bubbleT-=x,_.bubbleT<=0&&(_.group.remove(_.bubble),_.bubble.material.map.dispose(),_.bubble.material.dispose(),_.bubble=null,u--));continue}else _.state==="listen"?(_.listenT-=x,(_.listenT<=0||!(_.target&&_.target.speaking))&&(_.state="walk",_.target=null,_.cooldown=Cf)):(_.s+=_.dir*_.speed*x,(_.s<Xr||_.s>Xr+c)&&(_.dir*=-1,_.s=Math.max(Xr,Math.min(Xr+c,_.s))));let M=w1(s,_.s);if(M){let[y,T]=M.tangent,E=M.point[0]+-T*_.side*_.offset,A=M.point[1]+y*_.side*_.offset,v=r(E,A);if(_.group.position.set(E,v,A),_.state==="listen"&&_.target){let b=_.target.group.position;_.group.rotation.y=Math.atan2(b.x-E,b.z-A)}else{_.group.rotation.y=Math.atan2(y*_.dir,T*_.dir);let b=p*(4.6*_.speed)+_.phase;_.group.position.y=v+Math.abs(Math.sin(b))*.045,_.group.rotation.z=Math.sin(b)*.03}}_.bubble&&(_.bubbleT-=x,_.bubbleT<=0&&(_.group.remove(_.bubble),_.bubble.material.map.dispose(),_.bubble.material.dispose(),_.bubble=null,u--))}for(let g=0;g<4;g++){let _=h[f++%h.length];if(_.state!=="walk"||_.cooldown>0)continue;let M=_.group.position;for(let y of n){if(!y.speaking)continue;let T=y.group.position;if(Math.hypot(T.x-M.x,T.z-M.z)>S1)continue;_.state="listen",_.target=y,_.listenT=6+dn()*9;let E=o[y.comic.id];if(E&&E.length&&u<b1&&dn()<.6){let A=E[Math.floor(dn()*E.length)],v=F0[Math.floor(dn()*F0.length)];_.bubble=O0(v.replace("%Q",A)),_.bubble.position.set(0,_.headTopY+.5,0),_.group.add(_.bubble),_.bubbleT=7,u++}break}}}function m(x){if(!x||x.adopted||!(x.lines&&x.lines.length))return!1;let p=null,g=70;for(let _ of h){if(_.state!=="walk")continue;let M=_.group.position,y=Math.hypot(M.x-x.x,M.z-x.z);y<g&&(g=y,p=_)}return p?(x.adopted=!0,p.state="fetch",p.fetchItem=x,!0):!1}return{walkers:h,update:d,summonReader:m}}function E1(){let i=1.5+dn()*.35,t=.8+dn()*.45,e=D0[Math.floor(dn()*D0.length)],n=new se,s=ua(e,!1),r=ua(T1(e,.62),!0),o=new Yt({color:1578512,flatShading:!0}),a=.1,c=i*.32,l=.44*t,h=.3*t,u=i*.44,f=.26,d=a+c,m=d+u,x=m+f+.02,p=[];for(let v of[-1,1]){let b=new te(l*.34,c,h*.7);b.translate(v*l*.24,a+c*.5,0),p.push(b);let R=new te(.11,u*.7,.11);R.translate(v*(l*.5+.05),m-u*.62,0),p.push(R)}let g=new te(l,u,h);g.translate(0,d+u*.5,0),p.push(g),n.add(new Ht(ae(p),s));let _=[];for(let v of[-1,1]){let b=new te(l*.36,a,h*1.3);b.translate(v*l*.24,a*.5,h*.15),_.push(b)}n.add(new Ht(ae(_),o));let M=new Yt({color:2235928,flatShading:!0}),y=[r,r,r,r,M,r],T=new Ht(new te(f,f,f*.9),y);T.position.set(0,m+f*.5+.02,0),n.add(T);let E=new Yt({color:U0[Math.floor(dn()*U0.length)],flatShading:!0}),A=dn()<.3?[-1,1]:[dn()<.5?-1:1];for(let v of A){let b=new Ht(new te(.2,.24,.11),E);b.position.set(v*(l*.5+.1),d+u*.12,.02),n.add(b)}return{group:n,headTopY:x}}function T1(i,t){let e=Math.round((i>>16&255)*t),n=Math.round((i>>8&255)*t),s=Math.round((i&255)*t);return e<<16|n<<8|s}function O0(i){let t=document.createElement("canvas");t.width=512,t.height=160;let e=t.getContext("2d"),n=i.split(" "),s=[""];for(let c of n)(s[s.length-1]+" "+c).trim().length>30&&s.length<3&&s.push(""),s[s.length-1]=(s[s.length-1]+" "+c).trim();e.fillStyle="rgba(20, 22, 16, 0.82)",e.strokeStyle="rgba(200, 200, 180, 0.5)",e.lineWidth=3;let r=34+s.length*34;e.beginPath(),e.roundRect(8,80-r/2,496,r,14),e.fill(),e.stroke(),e.fillStyle="#d8d4c0",e.font="italic 26px Georgia, serif",e.textAlign="center",s.forEach((c,l)=>e.fillText(c,256,80-r/2+44+l*32));let o=new Le(t),a=new Di(new xi({map:o,transparent:!0,depthTest:!0}));return a.scale.set(1.9,.59,1),a}function A1(i){let t=0;for(let e=1;e<i.length;e++)t+=Math.hypot(i[e][0]-i[e-1][0],i[e][1]-i[e-1][1]);return t}function w1(i,t){let e=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,h=Math.hypot(c,l);if(e+h>=t){let u=h>0?(t-e)/h:0;return{point:[s+c*u,r+l*u],tangent:[c/(h||1),l/(h||1)]}}e+=h}return null}var z0=24,R1=70,H0=60,C1=70,fs=(()=>{let i=1146442;return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}})(),I1=new ri;function k0(i,t,e){let n=i.catalog&&i.catalog.comics||[],s=t.streetLine||[];if(!n.length||s.length<2)return{items:[],update(){},nearestItem:()=>null};let r=i.comicLines||{},o=n.filter(m=>r[m.id]&&r[m.id].length>=3),a=o.length>=z0?[...o]:[...o,...n.filter(m=>!r[m.id])],c=[];for(;c.length<Math.min(z0,a.length);)c.push(a.splice(Math.floor(fs()*a.length),1)[0]);let l=P1(s),h=new se;h.name="litter-comics",e.add(h);let u=c.map((m,x)=>{let p=H0+fs()*(l-H0-C1),g=L1(s,p);if(!g)return null;let[_,M]=g.tangent,y=fs()<.5?1:-1,T=3.5+fs()*6,E=g.point[0]+-M*y*T,A=g.point[1]+_*y*T,v=new Yt({map:zu(),color:new ht(4.7,4.7,4.7),side:De}),b=new Ht(new Ue(.42,.58),v);b.rotation.x=-Math.PI/2,b.rotation.z=fs()*Math.PI*2,fs()<.3&&(b.rotation.y=(fs()-.5)*.5);let R=t.groundHeight?t.groundHeight(E,A):0;return b.position.set(E,R+.055+fs()*.01,A),h.add(b),{comic:m,lines:r[m.id]||[],mesh:b,x:E,z:A,chainage:p,loaded:!1,adopted:!1,load(){this.loaded||(this.loaded=!0,I1.load(Ln(i,m.image),I=>{I.colorSpace=ne,v.map=I,v.color.setScalar(4.7),v.needsUpdate=!0}))}}}).filter(Boolean);function f(m){if(m)for(let x of u)!x.loaded&&Math.hypot(m.x-x.x,m.z-x.z)<R1&&x.load()}function d(m,x,p){let g=null,_=p;for(let M of u){let y=Math.hypot(m-M.x,x-M.z);y<_&&(_=y,g=M)}return g}return{items:u,update:f,nearestItem:d}}function P1(i){let t=0;for(let e=1;e<i.length;e++)t+=Math.hypot(i[e][0]-i[e-1][0],i[e][1]-i[e-1][1]);return t}function L1(i,t){let e=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,h=Math.hypot(c,l);if(e+h>=t){let u=h>0?(t-e)/h:0;return{point:[s+c*u,r+l*u],tangent:[c/(h||1),l/(h||1)]}}e+=h}return null}function G0(){let i=null,t=null,e=!1,n=!1;function s(){if(e){i&&i.state==="suspended"&&i.resume();return}e=!0;let a=window.AudioContext||window.webkitAudioContext;a&&(i=new a,t=i.createGain(),t.gain.value=.16,t.connect(i.destination),N1(i,t),D1(i,t))}function r(a){if(n=!!a,!i||!t)return;let c=(n?.5:1)*.16,l=i.currentTime;t.gain.cancelScheduledValues(l),t.gain.setValueAtTime(t.gain.value,l),t.gain.linearRampToValueAtTime(c,l+.6)}function o(){!i||!t||U1(i,t)}return{start:s,setDucked:r,triggerCrackle:o}}function N1(i,t){let e=i.createGain();e.gain.value=.55;let n=i.createBiquadFilter();n.type="lowpass",n.frequency.value=220,n.Q.value=.7,e.connect(n).connect(t);let s=[55,55.6];for(let r of s){let o=i.createOscillator();o.type="sawtooth",o.frequency.value=r,o.connect(e),o.start()}}function D1(i,t){let e=i.createBufferSource();e.buffer=V0(i,4),e.loop=!0;let n=i.createBiquadFilter();n.type="bandpass",n.frequency.value=500,n.Q.value=.6;let s=i.createGain();s.gain.value=.18,e.connect(n).connect(s).connect(t),e.start();let r=i.createOscillator();r.type="sine",r.frequency.value=.07;let o=i.createGain();o.gain.value=.12,r.connect(o).connect(s.gain),r.start()}function U1(i,t){let n=i.createBufferSource();n.buffer=V0(i,.18);let s=i.createBiquadFilter();s.type="highpass",s.frequency.value=1800;let r=i.createGain(),o=i.currentTime;r.gain.setValueAtTime(.9,o),r.gain.exponentialRampToValueAtTime(.001,o+.18),n.connect(s).connect(r).connect(t),n.start(o),n.stop(o+.18+.02)}function V0(i,t){let e=Math.max(1,Math.floor(i.sampleRate*t)),n=i.createBuffer(1,e,i.sampleRate),s=n.getChannelData(0);for(let r=0;r<e;r++)s[r]=Math.random()*2-1;return n}function W0({controls:i,onEnter:t}){let e=document.getElementById("title-card"),n=document.getElementById("touch-forward");function s(){!e||e.classList.contains("hidden")||(e.classList.add("hidden"),i.setEnabled(!0),t&&t())}if(e&&(e.addEventListener("click",s),e.addEventListener("touchend",r=>{r.preventDefault(),s()},{passive:!1})),n){let r=a=>{n.classList.toggle("active",a),i.setForward(a)};n.addEventListener("pointerdown",a=>{a.preventDefault(),n.setPointerCapture?.(a.pointerId),r(!0)});let o=()=>r(!1);n.addEventListener("pointerup",o),n.addEventListener("pointercancel",o),n.addEventListener("pointerleave",o)}return{enter:s}}var qr=1.7,If=150,Qs=1/60,F1=5,X0=12,q0=40,O1=4e3,Y0=[{id:"north-150-close",chainage:150,side:"east",distance:"close"},{id:"north-250-far",chainage:250,side:"west",distance:"far"},{id:"elm-row-hero",chainage:1300,side:"west",distance:"far"},{id:"mid-550-close",chainage:550,side:"east",distance:"close"},{id:"mid-805-far",chainage:805,side:"west",distance:"far"},{id:"fascia-close",chainage:300,side:"east",distance:"close"},{id:"foot-1500-far",chainage:1500,side:"west",distance:"far"},{id:"skyline",custom:!0,camera:{x:-293.81,y:15,z:633.95},lookAt:{x:-317.4,y:6,z:683.62}}];function Z0(i,t){for(let e=0;e<i.length;e++)t^=i[e],t=Math.imul(t,16777619)>>>0;return t}function Pf(i,t){let e=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);return Z0(e,t)}function Lf(i,t){for(let e=0;e<i.length;e++)t=Z0([i.charCodeAt(e)&255],t);return t}function B1({scene:i,world:t,npcs:e}){let n=2166136261,s=t.group.getObjectByName("buildings");s&&s.geometry&&(n=Lf("buildings",n),n=Pf(s.geometry.attributes.position.array,n));let r=[];i.traverse(o=>{o.isInstancedMesh&&r.push(o)}),r.sort((o,a)=>(o.name||"").localeCompare(a.name||""));for(let o of r)n=Lf(`inst:${o.name||"unnamed"}`,n),n=Pf(o.instanceMatrix.array,n);if(e&&Array.isArray(e.npcs)&&e.npcs.length){let o=new Float32Array(e.npcs.length*3);e.npcs.forEach((a,c)=>{let l=a.group.position;o[c*3]=l.x,o[c*3+1]=l.y,o[c*3+2]=l.z}),n=Lf("npcs",n),n=Pf(o,n)}return(n>>>0).toString(16).padStart(8,"0")}function z1(i,t){return new Promise(e=>{let s=(Date.now?Date.now():0)+t;function r(){if(!(i&&i.pages||[]).some(c=>c&&c.loaded&&c.mesh&&!(c.mesh.material.map&&c.mesh.material.map.image&&c.mesh.material.map.image.complete))||Date.now()>s){e();return}setTimeout(r,20)}r()})}function K0(i){let{camera:t,world:e,npcs:n,leithers:s,litter:r,shopfronts:o,controls:a,proximityAudio:c,renderer:l,scene:h,sky:u,atmosphere:f,stepFrame:d,updaters:m,setAutoAnimate:x}=i,p=[],g=console.error.bind(console);console.error=(...b)=>{p.push(b.map(R=>R&&R.message||String(R)).join(" ")),g(...b)},window.addEventListener("error",b=>{p.push(b.message||String(b.error||b))}),window.addEventListener("unhandledrejection",b=>{p.push("unhandledrejection: "+(b.reason&&b.reason.message||b.reason))});async function _(b,R,I,P,B={}){let V=B.eyeY!=null?B.eyeY:e.groundHeight?e.groundHeight(b,R)+qr:qr,D=B.lookY!=null?B.lookY:e.groundHeight?e.groundHeight(I,P)+qr:qr;t.position.set(b,V,R),t.lookAt(I,D,P);for(let O=0;O<If;O++)try{d(Qs,O*Qs)}catch{}t.position.set(b,V,R),t.lookAt(I,D,P),d(Qs,If*Qs),await z1(o,O1);for(let O=0;O<F1;O++)await new Promise(U=>setTimeout(U,0)),t.position.set(b,V,R),t.lookAt(I,D,P),d(Qs,(If+1+O)*Qs)}async function M(b,R,I){let{point:P,tangent:B}=rm(e.streetLine,b),V=-B[1],D=B[0],O=R==="east"?1:-1,U=I==="close"?O:-O,W=P[0]+V*X0*U,J=P[1]+D*X0*U,ut=W+V*O*q0,z=J+D*O*q0;await _(W,J,ut,z);let Y=e.groundHeight?e.groundHeight(W,J)+qr:qr;return{chainage:b,side:R,distance:I,position:{x:W,y:Y,z:J}}}async function y(b){let R=Y0.find(I=>I.id===b);if(!R)throw new Error(`[debug] unknown bookmark: ${b}`);return R.custom?(await _(R.camera.x,R.camera.z,R.lookAt.x,R.lookAt.z,{eyeY:R.camera.y,lookY:R.lookAt.y}),R):(await M(R.chainage,R.side,R.distance),R)}function T(b,R){t.lookAt(b,t.position.y,R)}function E(b){f.setTime(b)}function A(b){console.info("[debug] setWeather not implemented until E2b")}function v(){d(Qs,0);let b=l.info.render,R=f.state();return{drawCalls:b.calls,triangles:b.triangles,geomHash:B1({scene:h,world:e,npcs:n}),updaterCount:m.length,updaterNames:m.map(I=>I.name),consoleErrors:p.slice(),time:R.hours,rate:R.rate,skyFogLinked:!!(u&&e.fog&&u.uniforms.uFog.value===e.fog.color)}}return{camera:t,world:e,npcs:n,leithers:s,litter:r,shopfronts:o,controls:a,proximityAudio:c,renderer:l,stepFrame:d,goto:M,gotoBookmark:y,face:T,setTime:E,setWeather:A,invariants:v,bookmarks:Y0,pauseAuto:()=>x(!1),resumeAuto:()=>x(!0)}}async function H1(){let i=document.getElementById("scene"),t=["localhost","127.0.0.1"].includes(location.hostname),e=new El({canvas:i,antialias:!0,preserveDrawingBuffer:t});e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.setSize(window.innerWidth,window.innerHeight),e.toneMapping=Zo,e.toneMappingExposure=1.46;let n=new xo,s=new Je(70,window.innerWidth/window.innerHeight,.1,1e3);n.add(s);let r=await Xp(),o=pm(r.leith);n.add(o.group),n.fog=o.fog;let a=e0(o.fog.color,o.streetLine);s.add(a.mesh),c0(o,n);let c=mm(s),l=o0(r,o,n),h=i0({scene:n,renderer:e,world:o,sky:a,torch:c,windows:l}),u=o.streetLine[0]||[0,0],f=o.streetLine[1]||[u[0],u[1]+1],d={x:u[0],z:u[1],yaw:Math.atan2(-(f[0]-u[0]),-(f[1]-u[1]))},m=xm(s,i,{nearestStreetPoint:o.nearestStreetPoint,spawn:d,groundHeight:o.groundHeight});m.setEnabled(!1);let x=bm(r,o,n,s),p=B0(r,o,n,x.npcs),g=k0(r,o,n),_=Dm(r,o,n);em(o,n),h0(o,n);let M=p0(o,r.leith,n),y=M0(o,n);S0(o,r.leith,n),Km(r,o,n),t0(r,o,n),N0(r,o,n);let T=Vm(o,n),E=G0();T.onArcFlash=()=>E.triggerCrackle();let A=!1,v=!1,b=()=>E.setDucked(A||v),R=Fm({camera:s,npcs:x.npcs,assets:r,onActiveChange:W=>{v=W>0,b()}}),I=Om({assets:r,npcs:x.npcs,camera:s,controls:m,proximityAudio:R,onReadingChange:W=>{A=W,b()},litter:g,leithers:p});W0({controls:m,onEnter:()=>{E.start(),R.resume()}}),window.addEventListener("resize",P);function P(){s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.setSize(window.innerWidth,window.innerHeight)}let B=[{name:"controls",update:W=>m.update(W)},{name:"npcs",update:(W,J)=>x.update(W,J)},{name:"leithers",update:(W,J)=>p.update(W,J)},{name:"litter",update:()=>g.update(s.position)},{name:"shopfronts",update:()=>_.update(s.position)},{name:"sky",update:(W,J)=>a.update(J)},{name:"atmosphere",update:(W,J)=>h.update(W,J)},{name:"birds",update:(W,J)=>M.update(W,J)},{name:"vermin",update:(W,J)=>y.update(W,J)},{name:"scenery",update:(W,J)=>T.update(W,J)},{name:"interact",update:W=>I.update(W)},{name:"proximityAudio",update:()=>R.update()},{name:"torch",update:(W,J)=>c.update(J)}];function V(W,J){for(let ut of B)ut.update(W,J);e.render(n,s)}let D=performance.now(),O=!0;function U(){if(!O)return;requestAnimationFrame(U);let W=performance.now(),J=Math.min((W-D)/1e3,.1);D=W,V(J,W/1e3)}U(),["localhost","127.0.0.1"].includes(location.hostname)&&(window.__mcgrotDebug=K0({camera:s,world:o,npcs:x,leithers:p,litter:g,shopfronts:_,controls:m,proximityAudio:R,renderer:e,scene:n,sky:a,atmosphere:h,stepFrame:V,updaters:B,setAutoAnimate(W){O=W,m.setYFollow(W),W&&(D=performance.now(),requestAnimationFrame(U))}}))}H1().catch(i=>{console.error("McGrot Walk failed to start:",i)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
