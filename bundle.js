(()=>{var cu=0,Ml=1,lu=2;var Lr=1,hu=2,Is=3,Xn=0,Ge=1,Ee=2,Dn=0,Ii=1,Dr=2,Sl=3,bl=4,uu=5;var ri=100,du=101,fu=102,pu=103,mu=104,gu=200,_u=201,xu=202,vu=203,Po=204,Lo=205,yu=206,Mu=207,Su=208,bu=209,Eu=210,Tu=211,Au=212,wu=213,Ru=214,Do=0,No=1,Uo=2,Pi=3,Fo=4,Oo=5,Bo=6,zo=7,Ma=0,Cu=1,Iu=2,vn=0,El=1,Tl=2,Al=3,Nr=4,wl=5,Rl=6,Cl=7;var Il=300,di=301,Bi=302,Sa=303,ba=304,Ur=306,oi=1e3,wn=1001,Ho=1002,Fe=1003,Pu=1004;var Fr=1005;var He=1006,Ea=1007;var fi=1008;var Qe=1009,Pl=1010,Ll=1011,Ps=1012,Ta=1013,yn=1014,hn=1015,Nn=1016,Aa=1017,wa=1018,Ls=1020,Dl=35902,Nl=35899,Ul=1021,Fl=1022,un=1023,Cn=1026,pi=1027,Ra=1028,Ca=1029,mi=1030,Ia=1031;var Pa=1033,Or=33776,Br=33777,zr=33778,Hr=33779,La=35840,Da=35841,Na=35842,Ua=35843,Fa=36196,Oa=37492,Ba=37496,za=37488,Ha=37489,kr=37490,ka=37491,Ga=37808,Va=37809,Wa=37810,Xa=37811,qa=37812,Ya=37813,Za=37814,Ja=37815,$a=37816,Ka=37817,Qa=37818,ja=37819,tc=37820,ec=37821,nc=36492,ic=36494,sc=36495,rc=36283,oc=36284,Gr=36285,ac=36286;var Qs=2300,ko=2301,Io=2302,al=2303,cl=2400,ll=2401,hl=2402;var Lu=3200;var cc=0,Du=1,Zn="",fe="srgb",js="srgb-linear",tr="linear",he="srgb";var wi=7680;var ul=519,Nu=512,Uu=513,Fu=514,lc=515,Ou=516,Bu=517,hc=518,zu=519,Go=35044;var Ol="300 es",_n=2e3,ms=2001;function Df(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Nf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hu(){let i=gs("canvas");return i.style.display="block",i}var Th={},_s=null;function er(...i){let t="THREE."+i.shift();_s?_s("log",t,...i):console.log(t,...i)}function ku(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Et(...i){i=ku(i);let t="THREE."+i.shift();if(_s)_s("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function zt(...i){i=ku(i);let t="THREE."+i.shift();if(_s)_s("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ci(...i){let t=i.join(" ");t in Th||(Th[t]=!0,Et(...i))}function Gu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Vu={[Do]:No,[Uo]:Bo,[Fo]:zo,[Pi]:Oo,[No]:Do,[Bo]:Uo,[zo]:Fo,[Oo]:Pi},In=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ah=1234567,Zs=Math.PI/180,xs=180/Math.PI;function Rn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function jt(i,t,e){return Math.max(t,Math.min(e,i))}function Bl(i,t){return(i%t+t)%t}function Uf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ff(i,t,e){return i!==t?(e-i)/(t-i):0}function Js(i,t,e){return(1-e)*i+e*t}function Of(i,t,e,n){return Js(i,t,1-Math.exp(-e*n))}function Bf(i,t=1){return t-Math.abs(Bl(i,t*2)-t)}function zf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Hf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function kf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Gf(i,t){return i+Math.random()*(t-i)}function Vf(i){return i*(.5-Math.random())}function Wf(i){i!==void 0&&(Ah=i);let t=Ah+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Xf(i){return i*Zs}function qf(i){return i*xs}function Yf(i){return(i&i-1)===0&&i!==0}function Zf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Jf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $f(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*d,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*f,a*h,a*l);break;default:Et("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function de(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ds={DEG2RAD:Zs,RAD2DEG:xs,generateUUID:Rn,clamp:jt,euclideanModulo:Bl,mapLinear:Uf,inverseLerp:Ff,lerp:Js,damp:Of,pingpong:Bf,smoothstep:zf,smootherstep:Hf,randInt:kf,randFloat:Gf,randFloatSpread:Vf,seededRandom:Wf,degToRad:Xf,radToDeg:qf,isPowerOfTwo:Yf,ceilPowerOfTwo:Zf,floorPowerOfTwo:Jf,setQuaternionFromProperEuler:$f,normalize:de,denormalize:gn},ct=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(d!==_||c!==u||l!==f||h!==m){let g=c*u+l*f+h*m+d*_;g<0&&(u=-u,f=-f,m=-m,_=-_,g=-g);let p=1-a;if(g<.9995){let b=Math.acos(g),S=Math.sin(b);p=Math.sin(p*b)/S,a=Math.sin(a*b)/S,c=c*p+u*a,l=l*p+f*a,h=h*p+m*a,d=d*p+_*a}else{c=c*p+u*a,l=l*p+f*a,h=h*p+m*a,d=d*p+_*a;let b=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=b,l*=b,h*=b,d*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*d+c*f-l*u,t[e+1]=c*m+h*u+l*d-a*f,t[e+2]=l*m+h*f+a*u-c*d,t[e+3]=h*m-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),u=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"YZX":this._x=u*h*d+l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d-u*f*m;break;case"XZY":this._x=u*h*d-l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d+u*f*m;break;default:Et("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Dc.copy(this).projectOnVector(t),this.sub(Dc)}reflect(t){return this.sub(Dc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Dc=new L,wh=new Pe,qt=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],_=s[0],g=s[3],p=s[6],b=s[1],S=s[4],y=s[7],A=s[2],T=s[5],R=s[8];return r[0]=o*_+a*b+c*A,r[3]=o*g+a*S+c*T,r[6]=o*p+a*y+c*R,r[1]=l*_+h*b+d*A,r[4]=l*g+h*S+d*T,r[7]=l*p+h*y+d*R,r[2]=u*_+f*b+m*A,r[5]=u*g+f*S+m*T,r[8]=u*p+f*y+m*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,m=e*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=d*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=u*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Ci("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nc.makeScale(t,e)),this}rotate(t){return Ci("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nc.makeRotation(-t)),this}translate(t,e){return Ci("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Nc=new qt,Rh=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ch=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kf(){let i={enabled:!0,workingColorSpace:js,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===he&&(s.r=Wn(s.r),s.g=Wn(s.g),s.b=Wn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===he&&(s.r=fs(s.r),s.g=fs(s.g),s.b=fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zn?tr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ci("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ci("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[js]:{primaries:t,whitePoint:n,transfer:tr,toXYZ:Rh,fromXYZ:Ch,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:fe},outputColorSpaceConfig:{drawingBufferColorSpace:fe}},[fe]:{primaries:t,whitePoint:n,transfer:he,toXYZ:Rh,fromXYZ:Ch,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:fe}}}),i}var ne=Kf();function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ji,Vo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ji===void 0&&(Ji=gs("canvas")),Ji.width=t.width,Ji.height=t.height;let s=Ji.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ji}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=gs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Wn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wn(e[n]/255)*255):e[n]=Wn(e[n]);return{data:e,width:t.width,height:t.height}}else return Et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Qf=0,vs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Rn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Uc(s[o].image)):r.push(Uc(s[o]))}else r=Uc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Uc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Et("Texture: Unable to serialize Texture."),{})}var jf=0,Fc=new L,Ye=class i extends In{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=wn,s=wn,r=He,o=fi,a=un,c=Qe,l=i.DEFAULT_ANISOTROPY,h=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Rn(),this.name="",this.source=new vs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fc).x}get height(){return this.source.getSize(Fc).y}get depth(){return this.source.getSize(Fc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Et(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Et(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Il)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oi:t.x=t.x-Math.floor(t.x);break;case wn:t.x=t.x<0?0:1;break;case Ho:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oi:t.y=t.y-Math.floor(t.y);break;case wn:t.y=t.y<0?0:1;break;case Ho:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Il;Ye.DEFAULT_ANISOTROPY=1;var be=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(l+1)/2,y=(f+1)/2,A=(p+1)/2,T=(h+u)/4,R=(d+_)/4,v=(m+g)/4;return S>y&&S>A?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=T/n,r=R/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=v/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=R/r,s=v/r),this.set(n,s,r,e),this}let b=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(d-_)/b,this.z=(u-h)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wo=class extends In{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ye(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:He,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new vs(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends Wo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},nr=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xo=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var te=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,c,l,h,d,u,f,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,d,u,f,m,_,g)}set(t,e,n,s,r,o,a,c,l,h,d,u,f,m,_,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/$i.setFromMatrixColumn(t,0).length(),r=1/$i.setFromMatrixColumn(t,1).length(),o=1/$i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,m=a*h,_=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+m*l,e[5]=u-_*l,e[9]=-a*c,e[2]=_-u*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,m=l*h,_=l*d;e[0]=u+_*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+u*a,e[10]=o*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,m=l*h,_=l*d;e[0]=u-_*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let u=o*h,f=o*d,m=a*h,_=a*d;e[0]=c*h,e[4]=m*l-f,e[8]=u*l+_,e[1]=c*d,e[5]=_*l+u,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,f=o*l,m=a*c,_=a*l;e[0]=c*h,e[4]=_-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+m,e[10]=u-_*d}else if(t.order==="XZY"){let u=o*c,f=o*l,m=a*c,_=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tp,t,ep)}lookAt(t,e,n){let s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),jn.crossVectors(n,tn),jn.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),jn.crossVectors(n,tn)),jn.normalize(),to.crossVectors(tn,jn),s[0]=jn.x,s[4]=to.x,s[8]=tn.x,s[1]=jn.y,s[5]=to.y,s[9]=tn.y,s[2]=jn.z,s[6]=to.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],b=n[3],S=n[7],y=n[11],A=n[15],T=s[0],R=s[4],v=s[8],E=s[12],I=s[1],C=s[5],P=s[9],X=s[13],V=s[2],U=s[6],B=s[10],H=s[14],Z=s[3],et=s[7],rt=s[11],tt=s[15];return r[0]=o*T+a*I+c*V+l*Z,r[4]=o*R+a*C+c*U+l*et,r[8]=o*v+a*P+c*B+l*rt,r[12]=o*E+a*X+c*H+l*tt,r[1]=h*T+d*I+u*V+f*Z,r[5]=h*R+d*C+u*U+f*et,r[9]=h*v+d*P+u*B+f*rt,r[13]=h*E+d*X+u*H+f*tt,r[2]=m*T+_*I+g*V+p*Z,r[6]=m*R+_*C+g*U+p*et,r[10]=m*v+_*P+g*B+p*rt,r[14]=m*E+_*X+g*H+p*tt,r[3]=b*T+S*I+y*V+A*Z,r[7]=b*R+S*C+y*U+A*et,r[11]=b*v+S*P+y*B+A*rt,r[15]=b*E+S*X+y*H+A*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15],b=c*f-l*u,S=a*f-l*d,y=a*u-c*d,A=o*f-l*h,T=o*u-c*h,R=o*d-a*h;return e*(_*b-g*S+p*y)-n*(m*b-g*A+p*T)+s*(m*S-_*A+p*R)-r*(m*y-_*T+g*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],b=e*a-n*o,S=e*c-s*o,y=e*l-r*o,A=n*c-s*a,T=n*l-r*a,R=s*l-r*c,v=h*_-d*m,E=h*g-u*m,I=h*p-f*m,C=d*g-u*_,P=d*p-f*_,X=u*p-f*g,V=b*X-S*P+y*C+A*I-T*E+R*v;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/V;return t[0]=(a*X-c*P+l*C)*U,t[1]=(s*P-n*X-r*C)*U,t[2]=(_*R-g*T+p*A)*U,t[3]=(u*T-d*R-f*A)*U,t[4]=(c*I-o*X-l*E)*U,t[5]=(e*X-s*I+r*E)*U,t[6]=(g*y-m*R-p*S)*U,t[7]=(h*R-u*y+f*S)*U,t[8]=(o*P-a*I+l*v)*U,t[9]=(n*I-e*P-r*v)*U,t[10]=(m*T-_*y+p*b)*U,t[11]=(d*y-h*T-f*b)*U,t[12]=(a*E-o*C-c*v)*U,t[13]=(e*C-n*E+s*v)*U,t[14]=(_*S-m*A-g*b)*U,t[15]=(h*A-d*S+u*b)*U,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,m=r*d,_=o*h,g=o*d,p=a*d,b=c*l,S=c*h,y=c*d,A=n.x,T=n.y,R=n.z;return s[0]=(1-(_+p))*A,s[1]=(f+y)*A,s[2]=(m-S)*A,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(u+p))*T,s[6]=(g+b)*T,s[7]=0,s[8]=(m+S)*R,s[9]=(g-b)*R,s[10]=(1-(u+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=$i.set(s[0],s[1],s[2]).length(),a=$i.set(s[4],s[5],s[6]).length(),c=$i.set(s[8],s[9],s[10]).length();r<0&&(o=-o),fn.copy(this);let l=1/o,h=1/a,d=1/c;return fn.elements[0]*=l,fn.elements[1]*=l,fn.elements[2]*=l,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=d,fn.elements[9]*=d,fn.elements[10]*=d,e.setFromRotationMatrix(fn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=_n,c=!1){let l=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),m,_;if(c)m=r/(o-r),_=o*r/(o-r);else if(a===_n)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ms)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=_n,c=!1){let l=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),m,_;if(c)m=1/(o-r),_=o/(o-r);else if(a===_n)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===ms)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},$i=new L,fn=new te,tp=new L(0,0,0),ep=new L(1,1,1),jn=new L,to=new L,tn=new L,Ih=new te,Ph=new Pe,ke=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Et("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ih,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ph.setFromEuler(this),this.setFromQuaternion(Ph,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ke.DEFAULT_ORDER="XYZ";var ir=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},np=0,Lh=new L,Ki=new Pe,On=new te,eo=new L,Os=new L,ip=new L,sp=new Pe,Dh=new L(1,0,0),Nh=new L(0,1,0),Uh=new L(0,0,1),Fh={type:"added"},rp={type:"removed"},Qi={type:"childadded",child:null},Oc={type:"childremoved",child:null},Le=class i extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new ke,n=new Pe,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new qt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(Dh,t)}rotateY(t){return this.rotateOnAxis(Nh,t)}rotateZ(t){return this.rotateOnAxis(Uh,t)}translateOnAxis(t,e){return Lh.copy(t).applyQuaternion(this.quaternion),this.position.add(Lh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dh,t)}translateY(t){return this.translateOnAxis(Nh,t)}translateZ(t){return this.translateOnAxis(Uh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?eo.copy(t):eo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Os,eo,this.up):On.lookAt(eo,Os,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(On),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fh),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rp),Oc.child=t,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fh),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,t,ip),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,sp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Le.DEFAULT_UP=new L(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pe=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},op={type:"move"},ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;l.inputState.pinching&&u>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(op)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Wu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},no={h:0,s:0,l:0};function Bc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var It=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=Bl(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Bc(o,r,t+1/3),this.g=Bc(o,r,t),this.b=Bc(o,r,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,e=fe){function n(r){r!==void 0&&parseFloat(r)<1&&Et("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Et("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Et("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fe){let n=Wu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Et("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fe){return ne.workingToColorSpace(qe.copy(this),t),Math.round(jt(qe.r*255,0,255))*65536+Math.round(jt(qe.g*255,0,255))*256+Math.round(jt(qe.b*255,0,255))}getHexString(t=fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(qe.copy(this),e);let n=qe.r,s=qe.g,r=qe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=fe){ne.workingToColorSpace(qe.copy(this),t);let e=qe.r,n=qe.g,s=qe.b;return t!==fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(no);let n=Js(ti.h,no.h,e),s=Js(ti.s,no.s,e),r=Js(ti.l,no.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new It;It.NAMES=Wu;var sr=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new It(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var rr=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ke,this.environmentIntensity=1,this.environmentRotation=new ke,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},pn=new L,Bn=new L,zc=new L,zn=new L,ji=new L,ts=new L,Oh=new L,Hc=new L,kc=new L,Gc=new L,Vc=new be,Wc=new be,Xc=new be,Vn=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),pn.subVectors(t,e),s.cross(pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){pn.subVectors(s,e),Bn.subVectors(n,e),zc.subVectors(t,e);let o=pn.dot(pn),a=pn.dot(Bn),c=pn.dot(zc),l=Bn.dot(Bn),h=Bn.dot(zc),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-a*h)*u,m=(o*h-a*c)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,zn.x),c.addScaledVector(o,zn.y),c.addScaledVector(a,zn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Vc.setScalar(0),Wc.setScalar(0),Xc.setScalar(0),Vc.fromBufferAttribute(t,e),Wc.fromBufferAttribute(t,n),Xc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Vc,r.x),o.addScaledVector(Wc,r.y),o.addScaledVector(Xc,r.z),o}static isFrontFacing(t,e,n,s){return pn.subVectors(n,e),Bn.subVectors(t,e),pn.cross(Bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),pn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ji.subVectors(s,n),ts.subVectors(r,n),Hc.subVectors(t,n);let c=ji.dot(Hc),l=ts.dot(Hc);if(c<=0&&l<=0)return e.copy(n);kc.subVectors(t,s);let h=ji.dot(kc),d=ts.dot(kc);if(h>=0&&d<=h)return e.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ji,o);Gc.subVectors(t,r);let f=ji.dot(Gc),m=ts.dot(Gc);if(m>=0&&f<=m)return e.copy(r);let _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(ts,a);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return Oh.subVectors(r,s),a=(d-h)/(d-h+(f-m)),e.copy(s).addScaledVector(Oh,a);let p=1/(g+_+u);return o=_*p,a=u*p,e.copy(n).addScaledVector(ji,o).addScaledVector(ts,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Pn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,mn):mn.fromBufferAttribute(r,o),mn.applyMatrix4(t.matrixWorld),this.expandByPoint(mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),io.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),io.copy(n.boundingBox)),io.applyMatrix4(t.matrixWorld),this.union(io)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mn),mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bs),so.subVectors(this.max,Bs),es.subVectors(t.a,Bs),ns.subVectors(t.b,Bs),is.subVectors(t.c,Bs),ei.subVectors(ns,es),ni.subVectors(is,ns),xi.subVectors(es,is);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-xi.z,xi.y,ei.z,0,-ei.x,ni.z,0,-ni.x,xi.z,0,-xi.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-xi.y,xi.x,0];return!qc(e,es,ns,is,so)||(e=[1,0,0,0,1,0,0,0,1],!qc(e,es,ns,is,so))?!1:(ro.crossVectors(ei,ni),e=[ro.x,ro.y,ro.z],qc(e,es,ns,is,so))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Hn=[new L,new L,new L,new L,new L,new L,new L,new L],mn=new L,io=new Pn,es=new L,ns=new L,is=new L,ei=new L,ni=new L,xi=new L,Bs=new L,so=new L,ro=new L,vi=new L;function qc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){vi.fromArray(i,r);let a=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),c=t.dot(vi),l=e.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Ie=new L,oo=new ct,ap=0,ze=class extends In{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ap++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Go,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)oo.fromBufferAttribute(this,e),oo.applyMatrix3(t),this.setXY(e,oo.x,oo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),r=de(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Go&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var or=class extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ar=class extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Yt=class extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}},cp=new Pn,zs=new L,Yc=new L,qn=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):cp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zs.subVectors(t,this.center);let e=zs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(zs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zs.copy(t.center).add(Yc)),this.expandByPoint(zs.copy(t.center).sub(Yc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},lp=0,an=new te,Zc=new Le,ss=new L,en=new Pn,Hs=new Pn,Ue=new L,ve=class i extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Df(t)?ar:or)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return Zc.lookAt(t),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(en.min,Hs.min),en.expandByPoint(Ue),Ue.addVectors(en.max,Hs.max),en.expandByPoint(Ue)):(en.expandByPoint(Hs.min),en.expandByPoint(Hs.max))}en.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ue.fromBufferAttribute(a,l),c&&(ss.fromBufferAttribute(t,l),Ue.add(ss)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new ze(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let v=0;v<n.count;v++)a[v]=new L,c[v]=new L;let l=new L,h=new L,d=new L,u=new ct,f=new ct,m=new ct,_=new L,g=new L;function p(v,E,I){l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,I),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,I),h.sub(l),d.sub(l),f.sub(u),m.sub(u);let C=1/(f.x*m.y-m.x*f.y);isFinite(C)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(C),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(C),a[v].add(_),a[E].add(_),a[I].add(_),c[v].add(g),c[E].add(g),c[I].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let v=0,E=b.length;v<E;++v){let I=b[v],C=I.start,P=I.count;for(let X=C,V=C+P;X<V;X+=3)p(t.getX(X+0),t.getX(X+1),t.getX(X+2))}let S=new L,y=new L,A=new L,T=new L;function R(v){A.fromBufferAttribute(s,v),T.copy(A);let E=a[v];S.copy(E),S.sub(A.multiplyScalar(A.dot(E))).normalize(),y.crossVectors(T,E);let C=y.dot(c[v])<0?-1:1;o.setXYZW(v,S.x,S.y,S.z,C)}for(let v=0,E=b.length;v<E;++v){let I=b[v],C=I.start,P=I.count;for(let X=C,V=C+P;X<V;X+=3)R(t.getX(X+0)),R(t.getX(X+1)),R(t.getX(X+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,d=new L;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)u[m++]=l[f++]}return new ze(u,h,d)}if(this.index===null)return Et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},cr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Go,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},$e=new L,Ms=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=gn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),r=de(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){er("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){er("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},hp=0,Ln=class extends In{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=Ii,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Po,this.blendDst=Lo,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ul,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Et(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Et(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Po&&(n.blendSrc=this.blendSrc),this.blendDst!==Lo&&(n.blendDst=this.blendDst),this.blendEquation!==ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ul&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new It().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ct().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ai=class extends Ln{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},rs,ks=new L,os=new L,as=new L,cs=new ct,Gs=new ct,Xu=new te,ao=new L,Vs=new L,co=new L,Bh=new ct,Jc=new ct,zh=new ct,Li=class extends Le{constructor(t=new ai){if(super(),this.isSprite=!0,this.type="Sprite",rs===void 0){rs=new ve;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new cr(e,5);rs.setIndex([0,1,2,0,2,3]),rs.setAttribute("position",new Ms(n,3,0,!1)),rs.setAttribute("uv",new Ms(n,2,3,!1))}this.geometry=rs,this.material=t,this.center=new ct(.5,.5),this.count=1}raycast(t,e){t.camera===null&&zt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),os.setFromMatrixScale(this.matrixWorld),Xu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),as.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&os.multiplyScalar(-as.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;lo(ao.set(-.5,-.5,0),as,o,os,s,r),lo(Vs.set(.5,-.5,0),as,o,os,s,r),lo(co.set(.5,.5,0),as,o,os,s,r),Bh.set(0,0),Jc.set(1,0),zh.set(1,1);let a=t.ray.intersectTriangle(ao,Vs,co,!1,ks);if(a===null&&(lo(Vs.set(-.5,.5,0),as,o,os,s,r),Jc.set(0,1),a=t.ray.intersectTriangle(ao,co,Vs,!1,ks),a===null))return;let c=t.ray.origin.distanceTo(ks);c<t.near||c>t.far||e.push({distance:c,point:ks.clone(),uv:Vn.getInterpolation(ks,ao,Vs,co,Bh,Jc,zh,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function lo(i,t,e,n,s,r){cs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Gs.x=r*cs.x-s*cs.y,Gs.y=s*cs.x+r*cs.y):Gs.copy(cs),i.copy(t),i.x+=Gs.x,i.y+=Gs.y,i.applyMatrix4(Xu)}var kn=new L,$c=new L,ho=new L,ii=new L,Kc=new L,uo=new L,Qc=new L,lr=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){$c.copy(t).add(e).multiplyScalar(.5),ho.copy(e).sub(t).normalize(),ii.copy(this.origin).sub($c);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ho),a=ii.dot(this.direction),c=-ii.dot(ho),l=ii.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*c-a,u=o*a-c,m=r*h,d>=0)if(u>=-m)if(u<=m){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=m?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy($c).addScaledVector(ho,u),f}intersectSphere(t,e){kn.subVectors(t.center,this.origin);let n=kn.dot(this.direction),s=kn.dot(kn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,s,r){Kc.subVectors(e,t),uo.subVectors(n,t),Qc.crossVectors(Kc,uo);let o=this.direction.dot(Qc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,t);let c=a*this.direction.dot(uo.crossVectors(ii,uo));if(c<0)return null;let l=a*this.direction.dot(Kc.cross(ii));if(l<0||c+l>o)return null;let h=-a*ii.dot(Qc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},cn=class extends Ln{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ke,this.combine=Ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Hh=new te,yi=new lr,fo=new qn,kh=new L,po=new L,mo=new L,go=new L,jc=new L,_o=new L,Gh=new L,xo=new L,Gt=class extends Le{constructor(t=new ve,e=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){_o.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(jc.fromBufferAttribute(d,t),o?_o.addScaledVector(jc,h):_o.addScaledVector(jc.sub(e),h))}e.add(_o)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(r),yi.copy(t.ray).recast(t.near),!(fo.containsPoint(yi.origin)===!1&&(yi.intersectSphere(fo,kh)===null||yi.origin.distanceToSquared(kh)>(t.far-t.near)**2))&&(Hh.copy(r).invert(),yi.copy(t.ray).applyMatrix4(Hh),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let g=u[m],p=o[g.materialIndex],b=Math.max(g.start,f.start),S=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=b,A=S;y<A;y+=3){let T=a.getX(y),R=a.getX(y+1),v=a.getX(y+2);s=vo(this,p,t,n,l,h,d,T,R,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let b=a.getX(g),S=a.getX(g+1),y=a.getX(g+2);s=vo(this,o,t,n,l,h,d,b,S,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let g=u[m],p=o[g.materialIndex],b=Math.max(g.start,f.start),S=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let y=b,A=S;y<A;y+=3){let T=y,R=y+1,v=y+2;s=vo(this,p,t,n,l,h,d,T,R,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let b=g,S=g+1,y=g+2;s=vo(this,o,t,n,l,h,d,b,S,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function up(i,t,e,n,s,r,o,a){let c;if(t.side===Ge?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Xn,a),c===null)return null;xo.copy(a),xo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(xo);return l<e.near||l>e.far?null:{distance:l,point:xo.clone(),object:i}}function vo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,po),i.getVertexPosition(c,mo),i.getVertexPosition(l,go);let h=up(i,t,e,n,po,mo,go,Gh);if(h){let d=new L;Vn.getBarycoord(Gh,po,mo,go,d),s&&(h.uv=Vn.getInterpolatedAttribute(s,a,c,l,d,new ct)),r&&(h.uv1=Vn.getInterpolatedAttribute(r,a,c,l,d,new ct)),o&&(h.normal=Vn.getInterpolatedAttribute(o,a,c,l,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new L,materialIndex:0};Vn.getNormal(po,mo,go,u.normal),h.face=u,h.barycoord=d}return h}var hr=class extends Ye{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Fe,h=Fe,d,u){super(null,o,a,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ss=class extends ze{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ls=new te,Vh=new te,yo=[],Wh=new Pn,dp=new te,Ws=new Gt,Xs=new qn,xn=class extends Gt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ss(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,dp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ls),Wh.copy(t.boundingBox).applyMatrix4(ls),this.boundingBox.union(Wh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ls),Xs.copy(t.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(Xs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ws.geometry=this.geometry,Ws.material=this.material,Ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xs.copy(this.boundingSphere),Xs.applyMatrix4(n),t.ray.intersectsSphere(Xs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ls),Vh.multiplyMatrices(n,ls),Ws.matrixWorld=Vh,Ws.raycast(t,yo);for(let o=0,a=yo.length;o<a;o++){let c=yo[o];c.instanceId=r,c.object=this,e.push(c)}yo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ss(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new hr(new Float32Array(s*this.count),s,this.count,Ra,hn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},tl=new L,fp=new L,pp=new qt,An=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=tl.subVectors(n,e).cross(fp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(tl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||pp.getNormalMatrix(t),s=this.coplanarPoint(tl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Mi=new qn,mp=new ct(.5,.5),Mo=new L,bs=class{constructor(t=new An,e=new An,n=new An,s=new An,r=new An,o=new An){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_n,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],b=r[12],S=r[13],y=r[14],A=r[15];if(s[0].setComponents(l-o,f-h,p-m,A-b).normalize(),s[1].setComponents(l+o,f+h,p+m,A+b).normalize(),s[2].setComponents(l+a,f+d,p+_,A+S).normalize(),s[3].setComponents(l-a,f-d,p-_,A-S).normalize(),n)s[4].setComponents(c,u,g,y).normalize(),s[5].setComponents(l-c,f-u,p-g,A-y).normalize();else if(s[4].setComponents(l-c,f-u,p-g,A-y).normalize(),e===_n)s[5].setComponents(l+c,f+u,p+g,A+y).normalize();else if(e===ms)s[5].setComponents(c,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(t){Mi.center.set(0,0,0);let e=mp.distanceTo(t.center);return Mi.radius=.7071067811865476+e,Mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Mo.x=s.normal.x>0?t.max.x:t.min.x,Mo.y=s.normal.y>0?t.max.y:t.min.y,Mo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Mo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Es=class extends Ln{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},qo=new L,Yo=new L,Xh=new te,qs=new lr,So=new qn,el=new L,qh=new L,Zo=class extends Le{constructor(t=new ve,e=new Es){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)qo.fromBufferAttribute(e,s-1),Yo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=qo.distanceTo(Yo);t.setAttribute("lineDistance",new Yt(n,1))}else Et("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(s),So.radius+=r,t.ray.intersectsSphere(So)===!1)return;Xh.copy(s).invert(),qs.copy(t.ray).applyMatrix4(Xh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){let p=h.getX(_),b=h.getX(_+1),S=bo(this,t,qs,c,p,b,_);S&&e.push(S)}if(this.isLineLoop){let _=h.getX(m-1),g=h.getX(f),p=bo(this,t,qs,c,_,g,m-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){let p=bo(this,t,qs,c,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){let _=bo(this,t,qs,c,m-1,f,m-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function bo(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(qo.fromBufferAttribute(a,s),Yo.fromBufferAttribute(a,r),e.distanceSqToSegment(qo,Yo,el,qh)>n)return;el.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(el);if(!(l<t.near||l>t.far))return{distance:l,point:qh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Yh=new L,Zh=new L,ur=class extends Zo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Yh.fromBufferAttribute(e,s),Zh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Yh.distanceTo(Zh);t.setAttribute("lineDistance",new Yt(n,1))}else Et("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var dr=class extends Ye{constructor(t=[],e=di,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ze=class extends Ye{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Yn=class extends Ye{constructor(t,e,n=yn,s,r,o,a=Fe,c=Fe,l,h=Cn,d=1){if(h!==Cn&&h!==pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Jo=class extends Yn{constructor(t,e=yn,n=di,s,r,o=Fe,a=Fe,c,l=Cn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},fr=class extends Ye{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ce=class i extends ve{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(d,2));function m(_,g,p,b,S,y,A,T,R,v,E){let I=y/R,C=A/v,P=y/2,X=A/2,V=T/2,U=R+1,B=v+1,H=0,Z=0,et=new L;for(let rt=0;rt<B;rt++){let tt=rt*C-X;for(let st=0;st<U;st++){let Ht=st*I-P;et[_]=Ht*b,et[g]=tt*S,et[p]=V,l.push(et.x,et.y,et.z),et[_]=0,et[g]=0,et[p]=T>0?1:-1,h.push(et.x,et.y,et.z),d.push(st/R),d.push(1-rt/v),H+=1}}for(let rt=0;rt<v;rt++)for(let tt=0;tt<R;tt++){let st=u+tt+U*rt,Ht=u+tt+U*(rt+1),ee=u+(tt+1)+U*(rt+1),$t=u+(tt+1)+U*rt;c.push(st,Ht,$t),c.push(Ht,ee,$t),Z+=6}a.addGroup(f,Z,E),f+=Z,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ln=class i extends ve{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,_=[],g=n/2,p=0;b(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Yt(d,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(f,2));function b(){let y=new L,A=new L,T=0,R=(e-t)/n;for(let v=0;v<=r;v++){let E=[],I=v/r,C=I*(e-t)+t;for(let P=0;P<=s;P++){let X=P/s,V=X*c+a,U=Math.sin(V),B=Math.cos(V);A.x=C*U,A.y=-I*n+g,A.z=C*B,d.push(A.x,A.y,A.z),y.set(U,R,B).normalize(),u.push(y.x,y.y,y.z),f.push(X,1-I),E.push(m++)}_.push(E)}for(let v=0;v<s;v++)for(let E=0;E<r;E++){let I=_[E][v],C=_[E+1][v],P=_[E+1][v+1],X=_[E][v+1];(t>0||E!==0)&&(h.push(I,C,X),T+=3),(e>0||E!==r-1)&&(h.push(C,P,X),T+=3)}l.addGroup(p,T,0),p+=T}function S(y){let A=m,T=new ct,R=new L,v=0,E=y===!0?t:e,I=y===!0?1:-1;for(let P=1;P<=s;P++)d.push(0,g*I,0),u.push(0,I,0),f.push(.5,.5),m++;let C=m;for(let P=0;P<=s;P++){let V=P/s*c+a,U=Math.cos(V),B=Math.sin(V);R.x=E*B,R.y=g*I,R.z=E*U,d.push(R.x,R.y,R.z),u.push(0,I,0),T.x=U*.5+.5,T.y=B*.5*I+.5,f.push(T.x,T.y),m++}for(let P=0;P<s;P++){let X=A+P,V=C+P;y===!0?h.push(V,V+1,X):h.push(V+1,V,X),v+=3}l.addGroup(p,v,y===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ts=class i extends ln{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Et("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ct:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new L,s=[],r=[],o=[],a=new L,c=new te;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(jt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(jt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},As=class extends sn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ct){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},$o=class extends As{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function zl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Jh=new L,$h=new L,nl=new zl,il=new zl,sl=new zl,Ko=class extends sn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:($h.subVectors(s[0],s[1]).add(s[0]),l=$h);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Jh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Jh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),nl.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,m,_,g),il.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,m,_,g),sl.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(nl.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),il.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),sl.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(nl.calc(c),il.calc(c),sl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Kh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function gp(i,t){let e=1-i;return e*e*t}function _p(i,t){return 2*(1-i)*i*t}function xp(i,t){return i*i*t}function $s(i,t,e,n){return gp(i,t)+_p(i,e)+xp(i,n)}function vp(i,t){let e=1-i;return e*e*e*t}function yp(i,t){let e=1-i;return 3*e*e*i*t}function Mp(i,t){return 3*(1-i)*i*i*t}function Sp(i,t){return i*i*i*t}function Ks(i,t,e,n,s){return vp(i,t)+yp(i,e)+Mp(i,n)+Sp(i,s)}var pr=class extends sn{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ks(t,s.x,r.x,o.x,a.x),Ks(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Qo=class extends sn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ks(t,s.x,r.x,o.x,a.x),Ks(t,s.y,r.y,o.y,a.y),Ks(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},mr=class extends sn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jo=class extends sn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gr=class extends sn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set($s(t,s.x,r.x,o.x),$s(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ta=class extends sn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set($s(t,s.x,r.x,o.x),$s(t,s.y,r.y,o.y),$s(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_r=class extends sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Kh(a,c.x,l.x,h.x,d.x),Kh(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ct().fromArray(s))}return this}},dl=Object.freeze({__proto__:null,ArcCurve:$o,CatmullRomCurve3:Ko,CubicBezierCurve:pr,CubicBezierCurve3:Qo,EllipseCurve:As,LineCurve:mr,LineCurve3:jo,QuadraticBezierCurve:gr,QuadraticBezierCurve3:ta,SplineCurve:_r}),ea=class extends sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new dl[s.type]().fromJSON(s))}return this}},xr=class extends ea{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new mr(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new gr(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new pr(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new _r(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new As(t,e,n,s,r,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ws=class extends xr{constructor(t){super(t),this.uuid=Rn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new xr().fromJSON(s))}return this}};function bp(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=qu(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Rp(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let h=a,d=c;for(let u=e;u<s;u+=e){let f=i[u],m=i[u+1];f<a&&(a=f),m<c&&(c=m),f>h&&(h=f),m>d&&(d=m)}l=Math.max(h-a,d-c),l=l!==0?32767/l:0}return vr(r,o,e,a,c,l,0),o}function qu(i,t,e,n,s){let r;if(s===zp(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Qh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Qh(o/n|0,i[o],i[o+1],r);return r&&Rs(r,r.next)&&(Mr(r),r=r.next),r}function Di(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Rs(e,e.next)||Te(e.prev,e,e.next)===0)){if(Mr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function vr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Dp(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Tp(i,n,s,r):Ep(i)){t.push(c.i,i.i,l.i),Mr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Ap(Di(i),t),vr(i,t,e,n,s,r,2)):o===2&&wp(i,t,e,n,s,r):vr(Di(i),t,e,n,s,r,1);break}}}function Ep(i){let t=i.prev,e=i,n=i.next;if(Te(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),d=Math.min(a,c,l),u=Math.max(s,r,o),f=Math.max(a,c,l),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&Ys(s,a,r,c,o,l,m.x,m.y)&&Te(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Tp(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Te(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,c,l),m=Math.min(h,d,u),_=Math.max(a,c,l),g=Math.max(h,d,u),p=fl(f,m,t,e,n),b=fl(_,g,t,e,n),S=i.prevZ,y=i.nextZ;for(;S&&S.z>=p&&y&&y.z<=b;){if(S.x>=f&&S.x<=_&&S.y>=m&&S.y<=g&&S!==s&&S!==o&&Ys(a,h,c,d,l,u,S.x,S.y)&&Te(S.prev,S,S.next)>=0||(S=S.prevZ,y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&Ys(a,h,c,d,l,u,y.x,y.y)&&Te(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=_&&S.y>=m&&S.y<=g&&S!==s&&S!==o&&Ys(a,h,c,d,l,u,S.x,S.y)&&Te(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;y&&y.z<=b;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&Ys(a,h,c,d,l,u,y.x,y.y)&&Te(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Ap(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Rs(n,s)&&Zu(n,e,e.next,s)&&yr(n,s)&&yr(s,n)&&(t.push(n.i,e.i,s.i),Mr(e),Mr(e.next),e=i=s),e=e.next}while(e!==i);return Di(e)}function wp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Fp(o,a)){let c=Ju(o,a);o=Di(o,o.next),c=Di(c,c.next),vr(o,t,e,n,s,r,0),vr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Rp(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=qu(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Up(l))}s.sort(Cp);for(let r=0;r<s.length;r++)e=Ip(s[r],e);return e}function Cp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Ip(i,t){let e=Pp(i,t);if(!e)return t;let n=Ju(e,i);return Di(n,n.next),Di(e,e.next)}function Pp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Rs(i,e))return e;do{if(Rs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Yu(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);yr(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Lp(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function Lp(i,t){return Te(i.prev,i,t.prev)<0&&Te(t.next,i,i.next)<0}function Dp(i,t,e,n){let s=i;do s.z===0&&(s.z=fl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Np(s)}function Np(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function fl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Up(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Yu(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Ys(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Yu(i,t,e,n,s,r,o,a)}function Fp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Op(i,t)&&(yr(i,t)&&yr(t,i)&&Bp(i,t)&&(Te(i.prev,i,t.prev)||Te(i,t.prev,t))||Rs(i,t)&&Te(i.prev,i,i.next)>0&&Te(t.prev,t,t.next)>0)}function Te(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Rs(i,t){return i.x===t.x&&i.y===t.y}function Zu(i,t,e,n){let s=To(Te(i,t,e)),r=To(Te(i,t,n)),o=To(Te(e,n,i)),a=To(Te(e,n,t));return!!(s!==r&&o!==a||s===0&&Eo(i,e,t)||r===0&&Eo(i,n,t)||o===0&&Eo(e,i,n)||a===0&&Eo(e,t,n))}function Eo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function To(i){return i>0?1:i<0?-1:0}function Op(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Zu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function yr(i,t){return Te(i.prev,i,i.next)<0?Te(i,t,i.next)>=0&&Te(i,i.prev,t)>=0:Te(i,t,i.prev)<0||Te(i,i.next,t)<0}function Bp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ju(i,t){let e=pl(i.i,i.x,i.y),n=pl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Qh(i,t,e,n){let s=pl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Mr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function pl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function zp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var ml=class{static triangulate(t,e,n=2){return bp(t,e,n)}},Ri=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];jh(t),tu(n,t);let o=t.length;e.forEach(jh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,tu(n,e[c]);let a=ml.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function jh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function tu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Sr=class i extends ve{constructor(t=new ws([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Yt(s,3)),this.setAttribute("uv",new Yt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Hp,S,y=!1,A,T,R,v;if(p){S=p.getSpacedPoints(h),y=!0,u=!1;let j=p.isCatmullRomCurve3?p.closed:!1;A=p.computeFrenetFrames(h,j),T=new L,R=new L,v=new L}u||(g=0,f=0,m=0,_=0);let E=a.extractPoints(l),I=E.shape,C=E.holes;if(!Ri.isClockWise(I)){I=I.reverse();for(let j=0,it=C.length;j<it;j++){let nt=C[j];Ri.isClockWise(nt)&&(C[j]=nt.reverse())}}function X(j){let nt=10000000000000001e-36,gt=j[0];for(let mt=1;mt<=j.length;mt++){let Ut=mt%j.length,Tt=j[Ut],kt=Tt.x-gt.x,Wt=Tt.y-gt.y,D=kt*kt+Wt*Wt,le=Math.max(Math.abs(Tt.x),Math.abs(Tt.y),Math.abs(gt.x),Math.abs(gt.y)),Kt=nt*le*le;if(D<=Kt){j.splice(Ut,1),mt--;continue}gt=Tt}}X(I),C.forEach(X);let V=C.length,U=I;for(let j=0;j<V;j++){let it=C[j];I=I.concat(it)}function B(j,it,nt){return it||zt("ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(it,nt)}let H=I.length;function Z(j,it,nt){let gt,mt,Ut,Tt=j.x-it.x,kt=j.y-it.y,Wt=nt.x-j.x,D=nt.y-j.y,le=Tt*Tt+kt*kt,Kt=Tt*D-kt*Wt;if(Math.abs(Kt)>Number.EPSILON){let w=Math.sqrt(le),x=Math.sqrt(Wt*Wt+D*D),O=it.x-kt/w,z=it.y+Tt/w,q=nt.x-D/x,at=nt.y+Wt/x,ut=((q-O)*D-(at-z)*Wt)/(Tt*D-kt*Wt);gt=O+Tt*ut-j.x,mt=z+kt*ut-j.y;let Y=gt*gt+mt*mt;if(Y<=2)return new ct(gt,mt);Ut=Math.sqrt(Y/2)}else{let w=!1;Tt>Number.EPSILON?Wt>Number.EPSILON&&(w=!0):Tt<-Number.EPSILON?Wt<-Number.EPSILON&&(w=!0):Math.sign(kt)===Math.sign(D)&&(w=!0),w?(gt=-kt,mt=Tt,Ut=Math.sqrt(le)):(gt=Tt,mt=kt,Ut=Math.sqrt(le/2))}return new ct(gt/Ut,mt/Ut)}let et=[];for(let j=0,it=U.length,nt=it-1,gt=j+1;j<it;j++,nt++,gt++)nt===it&&(nt=0),gt===it&&(gt=0),et[j]=Z(U[j],U[nt],U[gt]);let rt=[],tt,st=et.concat();for(let j=0,it=V;j<it;j++){let nt=C[j];tt=[];for(let gt=0,mt=nt.length,Ut=mt-1,Tt=gt+1;gt<mt;gt++,Ut++,Tt++)Ut===mt&&(Ut=0),Tt===mt&&(Tt=0),tt[gt]=Z(nt[gt],nt[Ut],nt[Tt]);rt.push(tt),st=st.concat(tt)}let Ht;if(g===0)Ht=Ri.triangulateShape(U,C);else{let j=[],it=[];for(let nt=0;nt<g;nt++){let gt=nt/g,mt=f*Math.cos(gt*Math.PI/2),Ut=m*Math.sin(gt*Math.PI/2)+_;for(let Tt=0,kt=U.length;Tt<kt;Tt++){let Wt=B(U[Tt],et[Tt],Ut);wt(Wt.x,Wt.y,-mt),gt===0&&j.push(Wt)}for(let Tt=0,kt=V;Tt<kt;Tt++){let Wt=C[Tt];tt=rt[Tt];let D=[];for(let le=0,Kt=Wt.length;le<Kt;le++){let w=B(Wt[le],tt[le],Ut);wt(w.x,w.y,-mt),gt===0&&D.push(w)}gt===0&&it.push(D)}}Ht=Ri.triangulateShape(j,it)}let ee=Ht.length,$t=m+_;for(let j=0;j<H;j++){let it=u?B(I[j],st[j],$t):I[j];y?(R.copy(A.normals[0]).multiplyScalar(it.x),T.copy(A.binormals[0]).multiplyScalar(it.y),v.copy(S[0]).add(R).add(T),wt(v.x,v.y,v.z)):wt(it.x,it.y,0)}for(let j=1;j<=h;j++)for(let it=0;it<H;it++){let nt=u?B(I[it],st[it],$t):I[it];y?(R.copy(A.normals[j]).multiplyScalar(nt.x),T.copy(A.binormals[j]).multiplyScalar(nt.y),v.copy(S[j]).add(R).add(T),wt(v.x,v.y,v.z)):wt(nt.x,nt.y,d/h*j)}for(let j=g-1;j>=0;j--){let it=j/g,nt=f*Math.cos(it*Math.PI/2),gt=m*Math.sin(it*Math.PI/2)+_;for(let mt=0,Ut=U.length;mt<Ut;mt++){let Tt=B(U[mt],et[mt],gt);wt(Tt.x,Tt.y,d+nt)}for(let mt=0,Ut=C.length;mt<Ut;mt++){let Tt=C[mt];tt=rt[mt];for(let kt=0,Wt=Tt.length;kt<Wt;kt++){let D=B(Tt[kt],tt[kt],gt);y?wt(D.x,D.y+S[h-1].y,S[h-1].x+nt):wt(D.x,D.y,d+nt)}}}J(),lt();function J(){let j=s.length/3;if(u){let it=0,nt=H*it;for(let gt=0;gt<ee;gt++){let mt=Ht[gt];Nt(mt[2]+nt,mt[1]+nt,mt[0]+nt)}it=h+g*2,nt=H*it;for(let gt=0;gt<ee;gt++){let mt=Ht[gt];Nt(mt[0]+nt,mt[1]+nt,mt[2]+nt)}}else{for(let it=0;it<ee;it++){let nt=Ht[it];Nt(nt[2],nt[1],nt[0])}for(let it=0;it<ee;it++){let nt=Ht[it];Nt(nt[0]+H*h,nt[1]+H*h,nt[2]+H*h)}}n.addGroup(j,s.length/3-j,0)}function lt(){let j=s.length/3,it=0;ot(U,it),it+=U.length;for(let nt=0,gt=C.length;nt<gt;nt++){let mt=C[nt];ot(mt,it),it+=mt.length}n.addGroup(j,s.length/3-j,1)}function ot(j,it){let nt=j.length;for(;--nt>=0;){let gt=nt,mt=nt-1;mt<0&&(mt=j.length-1);for(let Ut=0,Tt=h+g*2;Ut<Tt;Ut++){let kt=H*Ut,Wt=H*(Ut+1),D=it+gt+kt,le=it+mt+kt,Kt=it+mt+Wt,w=it+gt+Wt;Ot(D,le,Kt,w)}}}function wt(j,it,nt){c.push(j),c.push(it),c.push(nt)}function Nt(j,it,nt){re(j),re(it),re(nt);let gt=s.length/3,mt=b.generateTopUV(n,s,gt-3,gt-2,gt-1);Vt(mt[0]),Vt(mt[1]),Vt(mt[2])}function Ot(j,it,nt,gt){re(j),re(it),re(gt),re(it),re(nt),re(gt);let mt=s.length/3,Ut=b.generateSideWallUV(n,s,mt-6,mt-3,mt-2,mt-1);Vt(Ut[0]),Vt(Ut[1]),Vt(Ut[3]),Vt(Ut[1]),Vt(Ut[2]),Vt(Ut[3])}function re(j){s.push(c[j*3+0]),s.push(c[j*3+1]),s.push(c[j*3+2])}function Vt(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return kp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new dl[s.type]().fromJSON(s)),new i(n,t.options)}},Hp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new ct(r,o),new ct(a,c),new ct(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],m=t[s*3+2],_=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ct(o,1-c),new ct(l,1-d),new ct(u,1-m),new ct(_,1-p)]:[new ct(a,1-c),new ct(h,1-d),new ct(f,1-m),new ct(g,1-p)]}};function kp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Oe=class i extends ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,u=e/c,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){let b=p*u-o;for(let S=0;S<l;S++){let y=S*d-r;m.push(y,-b,0),_.push(0,0,1),g.push(S/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){let S=b+l*p,y=b+l*(p+1),A=b+1+l*(p+1),T=b+1+l*p;f.push(S,y,T),f.push(y,A,T)}this.setIndex(f),this.setAttribute("position",new Yt(m,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ni=class i extends ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new L,u=new L,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){let b=[],S=p/n,y=o+S*a,A=t*Math.cos(y),T=Math.sqrt(t*t-A*A),R=0;p===0&&o===0?R=.5/e:p===n&&c===Math.PI&&(R=-.5/e);for(let v=0;v<=e;v++){let E=v/e,I=s+E*r;d.x=-T*Math.cos(I),d.y=A,d.z=T*Math.sin(I),m.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),g.push(E+R,1-S),b.push(l++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){let S=h[p][b+1],y=h[p][b],A=h[p+1][b],T=h[p+1][b+1];(p!==0||o>0)&&f.push(S,y,T),(p!==n-1||c<Math.PI)&&f.push(y,A,T)}this.setIndex(f),this.setAttribute("position",new Yt(m,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function zi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(eu(s))s.isRenderTargetTexture?(Et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(eu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Je(i){let t={};for(let e=0;e<i.length;e++){let n=zi(i[e]);for(let s in n)t[s]=n[s]}return t}function eu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Gp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Hl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var $u={clone:zi,merge:Je},Vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ke=class extends Ln{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vp,this.fragmentShader=Wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zi(t.uniforms),this.uniformsGroups=Gp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new It().setHex(s.value);break;case"v2":this.uniforms[n].value=new ct().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new be().fromArray(s.value);break;case"m3":this.uniforms[n].value=new qt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new te().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},na=class extends Ke{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ie=class extends Ln{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cc,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ke,this.combine=Ma,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ia=class extends Ln{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},sa=class extends Ln{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ao(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}var ci=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ra=class extends ci{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cl,endingEnd:cl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ll:r=t,a=2*e-n;break;case hl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ll:o=t,c=2*n-e;break;case hl:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),_=m*m,g=_*m,p=-u*g+2*u*_-u*m,b=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*m+1,S=(-1-f)*g+(1.5+f)*_+.5*m,y=f*g-f*_;for(let A=0;A!==a;++A)r[A]=p*o[h+A]+b*o[l+A]+S*o[c+A]+y*o[d+A];return r}},oa=class extends ci{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},aa=class extends ci{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ca=class extends ci{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(s-e),_=1-m;for(let g=0;g!==a;++g)r[g]=o[l+g]*_+o[c+g]*m;return r}let u=a*2,f=t-1;for(let m=0;m!==a;++m){let _=o[l+m],g=o[c+m],p=f*u+m*2,b=d[p],S=d[p+1],y=t*u+m*2,A=h[y],T=h[y+1],R=(n-e)/(s-e),v,E,I,C,P;for(let X=0;X<8;X++){v=R*R,E=v*R,I=1-R,C=I*I,P=C*I;let U=P*e+3*C*R*b+3*I*v*A+E*s-n;if(Math.abs(U)<1e-10)break;let B=3*C*(b-e)+6*I*R*(A-b)+3*v*(s-A);if(Math.abs(B)<1e-10)break;R=R-U/B,R=Math.max(0,Math.min(1,R))}r[m]=P*_+3*C*R*S+3*I*v*T+E*g}return r}},rn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ao(e,this.TimeBufferType),this.values=Ao(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ao(t.times,Array),values:Ao(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new aa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new oa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ra(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ca(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Qs:e=this.InterpolantFactoryMethodDiscrete;break;case ko:e=this.InterpolantFactoryMethodLinear;break;case Io:e=this.InterpolantFactoryMethodSmooth;break;case al:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Et("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return ko;case this.InterpolantFactoryMethodSmooth:return Io;case this.InterpolantFactoryMethodBezier:return al}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(zt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){zt("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){zt("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Nf(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){zt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Io,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let _=e[d+m];if(_!==e[u+m]||_!==e[f+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};rn.prototype.ValueTypeName="";rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=ko;var li=class extends rn{constructor(t,e,n){super(t,e,n)}};li.prototype.ValueTypeName="bool";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=Qs;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var la=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}};la.prototype.ValueTypeName="color";var ha=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}};ha.prototype.ValueTypeName="number";var ua=class extends ci{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)Pe.slerpFlat(r,0,o,l-a,o,l,c);return r}},br=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ua(this.times,this.values,this.getValueSize(),t)}};br.prototype.ValueTypeName="quaternion";br.prototype.InterpolantFactoryMethodSmooth=void 0;var hi=class extends rn{constructor(t,e,n){super(t,e,n)}};hi.prototype.ValueTypeName="string";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=Qs;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var da=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}};da.prototype.ValueTypeName="vector";var ps={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(nu(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!nu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function nu(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var fa=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],m=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ku=new fa,ui=class{constructor(t){this.manager=t!==void 0?t:Ku,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ui.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gn={},gl=class extends Error{constructor(t,e){super(t),this.response=e}},pa=class extends ui{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=ps.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(Gn[t]!==void 0){Gn[t].push({onLoad:e,onProgress:n,onError:s});return}Gn[t]=[],Gn[t].push({onLoad:e,onProgress:n,onError:s});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Et("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Gn[t],d=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,m=f!==0,_=0,g=new ReadableStream({start(p){b();function b(){d.read().then(({done:S,value:y})=>{if(S)p.close();else{_+=y.byteLength;let A=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let T=0,R=h.length;T<R;T++){let v=h[T];v.onProgress&&v.onProgress(A)}p.enqueue(y),b()}},S=>{p.error(S)})}}});return new Response(g)}else throw new gl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{ps.add(`file:${t}`,l);let h=Gn[t];delete Gn[t];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Gn[t];if(h===void 0)throw this.manager.itemError(t),l;delete Gn[t];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var hs=new WeakMap,ma=class extends ui{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=ps.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let d=hs.get(o);d===void 0&&(d=[],hs.set(o,d)),d.push({onLoad:e,onError:s})}return o}let a=gs("img");function c(){h(),e&&e(this);let d=hs.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}hs.delete(this),r.manager.itemEnd(t)}function l(d){h(),s&&s(d),ps.remove(`image:${t}`);let u=hs.get(this)||[];for(let f=0;f<u.length;f++){let m=u[f];m.onError&&m.onError(d)}hs.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ps.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}};var Ui=class extends ui{constructor(t){super(t)}load(t,e,n,s){let r=new Ye,o=new ma(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Fi=class extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Er=class extends Fi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},rl=new te,iu=new L,su=new L,ga=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=Qe,this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bs,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;iu.setFromMatrixPosition(t.matrixWorld),e.position.copy(iu),su.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(su),e.updateMatrixWorld(),rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rl,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===ms||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},wo=new L,Ro=new Pe,Tn=new L,Tr=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=_n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(wo,Ro,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wo,Ro,Tn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(wo,Ro,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wo,Ro,Tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},si=new L,ru=new ct,ou=new ct,Be=class extends Tr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xs*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,ru,ou),e.subVectors(ou,ru)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var _l=class extends ga{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0}},Oi=class extends Fi{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new _l}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Cs=class extends Tr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},xl=class extends ga{constructor(){super(new Cs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ar=class extends Fi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new xl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},wr=class extends Fi{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Co,Rr=class{static getContext(){return Co===void 0&&(Co=new(window.AudioContext||window.webkitAudioContext)),Co}static setContext(t){Co=t}},Cr=class extends ui{constructor(t){super(t)}load(t,e,n,s){let r=this,o=new pa(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(c){try{let l=c.slice(0),h=Rr.getContext(),d=t+"#decode";r.manager.itemStart(d),h.decodeAudioData(l,function(u){e(u),r.manager.itemEnd(d)}).catch(function(u){a(u),r.manager.itemEnd(d)})}catch(l){a(l)}},n,s);function a(c){s?s(c):zt(c),r.manager.itemError(t)}}};var us=-90,ds=1,_a=class extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Be(us,ds,t,e);s.layers=this.layers,this.add(s);let r=new Be(us,ds,t,e);r.layers=this.layers,this.add(r);let o=new Be(us,ds,t,e);o.layers=this.layers,this.add(o);let a=new Be(us,ds,t,e);a.layers=this.layers,this.add(a);let c=new Be(us,ds,t,e);c.layers=this.layers,this.add(c);let l=new Be(us,ds,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===_n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},xa=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},va=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Xp.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Xp(){this._document.hidden===!1&&this.reset()}var Si=new L,ol=new Pe,qp=new L,bi=new L,Ei=new L,Ir=class extends Le{constructor(){super(),this.type="AudioListener",this.context=Rr.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new va}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();let e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Si,ol,qp),bi.set(0,0,-1).applyQuaternion(ol),Ei.set(0,1,0).applyQuaternion(ol),e.positionX){let n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Si.x,n),e.positionY.linearRampToValueAtTime(Si.y,n),e.positionZ.linearRampToValueAtTime(Si.z,n),e.forwardX.linearRampToValueAtTime(bi.x,n),e.forwardY.linearRampToValueAtTime(bi.y,n),e.forwardZ.linearRampToValueAtTime(bi.z,n),e.upX.linearRampToValueAtTime(Ei.x,n),e.upY.linearRampToValueAtTime(Ei.y,n),e.upZ.linearRampToValueAtTime(Ei.z,n)}else e.setPosition(Si.x,Si.y,Si.z),e.setOrientation(bi.x,bi.y,bi.z,Ei.x,Ei.y,Ei.z)}},ya=class extends Le{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){Et("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Et("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;let e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Et("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){Et("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){Et("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Et("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){Et("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(Et("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}},Ti=new L,au=new Pe,Yp=new L,Ai=new L,Pr=class extends ya{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Ti,au,Yp),Ai.set(0,0,1).applyQuaternion(au);let e=this.panner;if(e.positionX){let n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(Ti.x,n),e.positionY.linearRampToValueAtTime(Ti.y,n),e.positionZ.linearRampToValueAtTime(Ti.z,n),e.orientationX.linearRampToValueAtTime(Ai.x,n),e.orientationY.linearRampToValueAtTime(Ai.y,n),e.orientationZ.linearRampToValueAtTime(Ai.z,n)}else e.setPosition(Ti.x,Ti.y,Ti.z),e.setOrientation(Ai.x,Ai.y,Ai.z)}};var kl="\\[\\]\\.:\\/",Zp=new RegExp("["+kl+"]","g"),Gl="[^"+kl+"]",Jp="[^"+kl.replace("\\.","")+"]",$p=/((?:WC+[\/:])*)/.source.replace("WC",Gl),Kp=/(WCOD+)?/.source.replace("WCOD",Jp),Qp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gl),jp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gl),tm=new RegExp("^"+$p+Kp+Qp+jp+"$"),em=["material","materials","bones","map"],vl=class{constructor(t,e,n){let s=n||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Zp,"")}static parseTrackName(t){let e=tm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);em.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Et("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;zt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=vl;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hM=new Float32Array(1);var yl=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Vl(i,t,e,n){let s=nm(n);switch(e){case Ul:return i*t;case Ra:return i*t/s.components*s.byteLength;case Ca:return i*t/s.components*s.byteLength;case mi:return i*t*2/s.components*s.byteLength;case Ia:return i*t*2/s.components*s.byteLength;case Fl:return i*t*3/s.components*s.byteLength;case un:return i*t*4/s.components*s.byteLength;case Pa:return i*t*4/s.components*s.byteLength;case Or:case Br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zr:case Hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Da:case Ua:return Math.max(i,16)*Math.max(t,8)/4;case La:case Na:return Math.max(i,8)*Math.max(t,8)/2;case Fa:case Oa:case za:case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ba:case kr:case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case tc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ec:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case nc:case ic:case sc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case rc:case oc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Gr:case ac:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function nm(i){switch(i){case Qe:case Pl:return{byteLength:1,components:1};case Ps:case Ll:case Nn:return{byteLength:2,components:1};case Aa:case wa:return{byteLength:2,components:4};case yn:case Ta:case hn:return{byteLength:4,components:1};case Dl:case Nl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function yd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function am(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let _=d[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var cm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lm=`#ifdef USE_ALPHAHASH
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
#endif`,hm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,um=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pm=`#ifdef USE_AOMAP
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
#endif`,mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gm=`#ifdef USE_BATCHING
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
#endif`,_m=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ym=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mm=`#ifdef USE_IRIDESCENCE
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
#endif`,Sm=`#ifdef USE_BUMPMAP
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
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Pm=`#define PI 3.141592653589793
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
} // validated`,Lm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dm=`vec3 transformedNormal = objectNormal;
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
#endif`,Nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Um=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Om=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",zm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hm=`#ifdef USE_ENVMAP
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
#endif`,km=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Vm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
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
#endif`,Xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jm=`#ifdef USE_GRADIENTMAP
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
}`,$m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,tg=`#ifdef USE_ENVMAP
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
#endif`,eg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ig=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rg=`PhysicalMaterial material;
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
#endif`,og=`uniform sampler2D dfgLUT;
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
}`,ag=`
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
#endif`,cg=`#if defined( RE_IndirectDiffuse )
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
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_g=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xg=`#if defined( USE_POINTS_UV )
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
#endif`,vg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eg=`#ifdef USE_MORPHTARGETS
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
#endif`,Tg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ig=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Pg=`#ifdef USE_NORMALMAP
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
#endif`,Lg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Og=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yg=`float getShadowMask() {
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
}`,Zg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jg=`#ifdef USE_SKINNING
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
#endif`,$g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kg=`#ifdef USE_SKINNING
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
#endif`,Qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,n0=`#ifdef USE_TRANSMISSION
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
#endif`,i0=`#ifdef USE_TRANSMISSION
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,c0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l0=`uniform sampler2D t2D;
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
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`#include <common>
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
}`,m0=`#if DEPTH_PACKING == 3200
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
}`,g0=`#define DISTANCE
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
}`,_0=`#define DISTANCE
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
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`uniform float scale;
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
}`,M0=`uniform vec3 diffuse;
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
}`,S0=`#include <common>
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
}`,b0=`uniform vec3 diffuse;
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
}`,E0=`#define LAMBERT
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
}`,T0=`#define LAMBERT
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
}`,A0=`#define MATCAP
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
}`,w0=`#define MATCAP
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
}`,R0=`#define NORMAL
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
}`,C0=`#define NORMAL
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
}`,I0=`#define PHONG
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
}`,P0=`#define PHONG
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
}`,L0=`#define STANDARD
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
}`,D0=`#define STANDARD
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
}`,N0=`#define TOON
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
}`,U0=`#define TOON
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
}`,F0=`uniform float size;
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
}`,O0=`uniform vec3 diffuse;
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
}`,B0=`#include <common>
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
}`,z0=`uniform vec3 color;
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
}`,H0=`uniform float rotation;
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
}`,k0=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:cm,alphahash_pars_fragment:lm,alphamap_fragment:hm,alphamap_pars_fragment:um,alphatest_fragment:dm,alphatest_pars_fragment:fm,aomap_fragment:pm,aomap_pars_fragment:mm,batching_pars_vertex:gm,batching_vertex:_m,begin_vertex:xm,beginnormal_vertex:vm,bsdfs:ym,iridescence_fragment:Mm,bumpmap_pars_fragment:Sm,clipping_planes_fragment:bm,clipping_planes_pars_fragment:Em,clipping_planes_pars_vertex:Tm,clipping_planes_vertex:Am,color_fragment:wm,color_pars_fragment:Rm,color_pars_vertex:Cm,color_vertex:Im,common:Pm,cube_uv_reflection_fragment:Lm,defaultnormal_vertex:Dm,displacementmap_pars_vertex:Nm,displacementmap_vertex:Um,emissivemap_fragment:Fm,emissivemap_pars_fragment:Om,colorspace_fragment:Bm,colorspace_pars_fragment:zm,envmap_fragment:Hm,envmap_common_pars_fragment:km,envmap_pars_fragment:Gm,envmap_pars_vertex:Vm,envmap_physical_pars_fragment:tg,envmap_vertex:Wm,fog_vertex:Xm,fog_pars_vertex:qm,fog_fragment:Ym,fog_pars_fragment:Zm,gradientmap_pars_fragment:Jm,lightmap_pars_fragment:$m,lights_lambert_fragment:Km,lights_lambert_pars_fragment:Qm,lights_pars_begin:jm,lights_toon_fragment:eg,lights_toon_pars_fragment:ng,lights_phong_fragment:ig,lights_phong_pars_fragment:sg,lights_physical_fragment:rg,lights_physical_pars_fragment:og,lights_fragment_begin:ag,lights_fragment_maps:cg,lights_fragment_end:lg,lightprobes_pars_fragment:hg,logdepthbuf_fragment:ug,logdepthbuf_pars_fragment:dg,logdepthbuf_pars_vertex:fg,logdepthbuf_vertex:pg,map_fragment:mg,map_pars_fragment:gg,map_particle_fragment:_g,map_particle_pars_fragment:xg,metalnessmap_fragment:vg,metalnessmap_pars_fragment:yg,morphinstance_vertex:Mg,morphcolor_vertex:Sg,morphnormal_vertex:bg,morphtarget_pars_vertex:Eg,morphtarget_vertex:Tg,normal_fragment_begin:Ag,normal_fragment_maps:wg,normal_pars_fragment:Rg,normal_pars_vertex:Cg,normal_vertex:Ig,normalmap_pars_fragment:Pg,clearcoat_normal_fragment_begin:Lg,clearcoat_normal_fragment_maps:Dg,clearcoat_pars_fragment:Ng,iridescence_pars_fragment:Ug,opaque_fragment:Fg,packing:Og,premultiplied_alpha_fragment:Bg,project_vertex:zg,dithering_fragment:Hg,dithering_pars_fragment:kg,roughnessmap_fragment:Gg,roughnessmap_pars_fragment:Vg,shadowmap_pars_fragment:Wg,shadowmap_pars_vertex:Xg,shadowmap_vertex:qg,shadowmask_pars_fragment:Yg,skinbase_vertex:Zg,skinning_pars_vertex:Jg,skinning_vertex:$g,skinnormal_vertex:Kg,specularmap_fragment:Qg,specularmap_pars_fragment:jg,tonemapping_fragment:t0,tonemapping_pars_fragment:e0,transmission_fragment:n0,transmission_pars_fragment:i0,uv_pars_fragment:s0,uv_pars_vertex:r0,uv_vertex:o0,worldpos_vertex:a0,background_vert:c0,background_frag:l0,backgroundCube_vert:h0,backgroundCube_frag:u0,cube_vert:d0,cube_frag:f0,depth_vert:p0,depth_frag:m0,distance_vert:g0,distance_frag:_0,equirect_vert:x0,equirect_frag:v0,linedashed_vert:y0,linedashed_frag:M0,meshbasic_vert:S0,meshbasic_frag:b0,meshlambert_vert:E0,meshlambert_frag:T0,meshmatcap_vert:A0,meshmatcap_frag:w0,meshnormal_vert:R0,meshnormal_frag:C0,meshphong_vert:I0,meshphong_frag:P0,meshphysical_vert:L0,meshphysical_frag:D0,meshtoon_vert:N0,meshtoon_frag:U0,points_vert:F0,points_frag:O0,shadow_vert:B0,shadow_frag:z0,sprite_vert:H0,sprite_frag:k0},vt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Fn={basic:{uniforms:Je([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Je([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new It(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Je([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Je([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Je([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new It(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Je([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Je([vt.points,vt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Je([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Je([vt.common,vt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Je([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Je([vt.sprite,vt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:Je([vt.common,vt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:Je([vt.lights,vt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Fn.physical={uniforms:Je([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var uc={r:0,b:0,g:0},G0=new te,Md=new qt;Md.set(-1,0,0,0,1,0,0,0,1);function V0(i,t,e,n,s,r){let o=new It(0),a=s===!0?0:1,c,l,h=null,d=0,u=null;function f(b){let S=b.isScene===!0?b.background:null;if(S&&S.isTexture){let y=b.backgroundBlurriness>0;S=t.get(S,y)}return S}function m(b){let S=!1,y=f(b);y===null?g(o,a):y&&y.isColor&&(g(y,1),S=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(b,S){let y=f(S);y&&(y.isCubeTexture||y.mapping===Ur)?(l===void 0&&(l=new Gt(new ce(1,1,1),new Ke({name:"BackgroundCubeMaterial",uniforms:zi(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(G0.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Md),l.material.toneMapped=ne.getTransfer(y.colorSpace)!==he,(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Gt(new Oe(2,2),new Ke({name:"BackgroundMaterial",uniforms:zi(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ne.getTransfer(y.colorSpace)!==he,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function g(b,S){b.getRGB(uc,Hl(i)),e.buffers.color.setClear(uc.r,uc.g,uc.b,S,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),a=S,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,g(o,a)},render:m,addToRenderList:_,dispose:p}}function W0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(C,P,X,V,U){let B=!1,H=d(C,V,X,P);r!==H&&(r=H,l(r.object)),B=f(C,V,X,U),B&&m(C,V,X,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,y(C,P,X,V),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return i.createVertexArray()}function l(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function d(C,P,X,V){let U=V.wireframe===!0,B=n[P.id];B===void 0&&(B={},n[P.id]=B);let H=C.isInstancedMesh===!0?C.id:0,Z=B[H];Z===void 0&&(Z={},B[H]=Z);let et=Z[X.id];et===void 0&&(et={},Z[X.id]=et);let rt=et[U];return rt===void 0&&(rt=u(c()),et[U]=rt),rt}function u(C){let P=[],X=[],V=[];for(let U=0;U<e;U++)P[U]=0,X[U]=0,V[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:X,attributeDivisors:V,object:C,attributes:{},index:null}}function f(C,P,X,V){let U=r.attributes,B=P.attributes,H=0,Z=X.getAttributes();for(let et in Z)if(Z[et].location>=0){let tt=U[et],st=B[et];if(st===void 0&&(et==="instanceMatrix"&&C.instanceMatrix&&(st=C.instanceMatrix),et==="instanceColor"&&C.instanceColor&&(st=C.instanceColor)),tt===void 0||tt.attribute!==st||st&&tt.data!==st.data)return!0;H++}return r.attributesNum!==H||r.index!==V}function m(C,P,X,V){let U={},B=P.attributes,H=0,Z=X.getAttributes();for(let et in Z)if(Z[et].location>=0){let tt=B[et];tt===void 0&&(et==="instanceMatrix"&&C.instanceMatrix&&(tt=C.instanceMatrix),et==="instanceColor"&&C.instanceColor&&(tt=C.instanceColor));let st={};st.attribute=tt,tt&&tt.data&&(st.data=tt.data),U[et]=st,H++}r.attributes=U,r.attributesNum=H,r.index=V}function _(){let C=r.newAttributes;for(let P=0,X=C.length;P<X;P++)C[P]=0}function g(C){p(C,0)}function p(C,P){let X=r.newAttributes,V=r.enabledAttributes,U=r.attributeDivisors;X[C]=1,V[C]===0&&(i.enableVertexAttribArray(C),V[C]=1),U[C]!==P&&(i.vertexAttribDivisor(C,P),U[C]=P)}function b(){let C=r.newAttributes,P=r.enabledAttributes;for(let X=0,V=P.length;X<V;X++)P[X]!==C[X]&&(i.disableVertexAttribArray(X),P[X]=0)}function S(C,P,X,V,U,B,H){H===!0?i.vertexAttribIPointer(C,P,X,U,B):i.vertexAttribPointer(C,P,X,V,U,B)}function y(C,P,X,V){_();let U=V.attributes,B=X.getAttributes(),H=P.defaultAttributeValues;for(let Z in B){let et=B[Z];if(et.location>=0){let rt=U[Z];if(rt===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(rt=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(rt=C.instanceColor)),rt!==void 0){let tt=rt.normalized,st=rt.itemSize,Ht=t.get(rt);if(Ht===void 0)continue;let ee=Ht.buffer,$t=Ht.type,J=Ht.bytesPerElement,lt=$t===i.INT||$t===i.UNSIGNED_INT||rt.gpuType===Ta;if(rt.isInterleavedBufferAttribute){let ot=rt.data,wt=ot.stride,Nt=rt.offset;if(ot.isInstancedInterleavedBuffer){for(let Ot=0;Ot<et.locationSize;Ot++)p(et.location+Ot,ot.meshPerAttribute);C.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Ot=0;Ot<et.locationSize;Ot++)g(et.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let Ot=0;Ot<et.locationSize;Ot++)S(et.location+Ot,st/et.locationSize,$t,tt,wt*J,(Nt+st/et.locationSize*Ot)*J,lt)}else{if(rt.isInstancedBufferAttribute){for(let ot=0;ot<et.locationSize;ot++)p(et.location+ot,rt.meshPerAttribute);C.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ot=0;ot<et.locationSize;ot++)g(et.location+ot);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let ot=0;ot<et.locationSize;ot++)S(et.location+ot,st/et.locationSize,$t,tt,st*J,st/et.locationSize*ot*J,lt)}}else if(H!==void 0){let tt=H[Z];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(et.location,tt);break;case 3:i.vertexAttrib3fv(et.location,tt);break;case 4:i.vertexAttrib4fv(et.location,tt);break;default:i.vertexAttrib1fv(et.location,tt)}}}}b()}function A(){E();for(let C in n){let P=n[C];for(let X in P){let V=P[X];for(let U in V){let B=V[U];for(let H in B)h(B[H].object),delete B[H];delete V[U]}}delete n[C]}}function T(C){if(n[C.id]===void 0)return;let P=n[C.id];for(let X in P){let V=P[X];for(let U in V){let B=V[U];for(let H in B)h(B[H].object),delete B[H];delete V[U]}}delete n[C.id]}function R(C){for(let P in n){let X=n[P];for(let V in X){let U=X[V];if(U[C.id]===void 0)continue;let B=U[C.id];for(let H in B)h(B[H].object),delete B[H];delete U[C.id]}}}function v(C){for(let P in n){let X=n[P],V=C.isInstancedMesh===!0?C.id:0,U=X[V];if(U!==void 0){for(let B in U){let H=U[B];for(let Z in H)h(H[Z].object),delete H[Z];delete U[B]}delete X[V],Object.keys(X).length===0&&delete n[P]}}}function E(){I(),o=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:b}}function X0(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function q0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==un&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let v=R===Nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Qe&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==hn&&!v)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Et("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Et("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:y,maxSamples:A,samples:T}}function Y0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new An,a=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let b=r?0:n,S=b*4,y=p.clippingState||null;c.value=y,y=h(m,u,S,f);for(let A=0;A!==S;++A)y[A]=e[A];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let _=d!==null?d.length:0,g=null;if(_!==0){if(g=c.value,m!==!0||g===null){let p=f+_*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,y=f;S!==_;++S,y+=4)o.copy(d[S]).applyMatrix4(b,a),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}var gi=4,Qu=[.125,.215,.35,.446,.526,.582],Hi=20,Z0=256,Vr=new Cs,ju=new It,Wl=null,Xl=0,ql=0,Yl=!1,J0=new L,fc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=J0}=r;Wl=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Wl,Xl,ql),this._renderer.xr.enabled=Yl,t.scissorTest=!1,Ns(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===di||t.mapping===Bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wl=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:He,minFilter:He,generateMipmaps:!1,type:Nn,format:un,colorSpace:js,depthBuffer:!1},s=td(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=td(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$0(r)),this._blurMaterial=Q0(r,t,e),this._ggxMaterial=K0(r,t,e)}return s}_compileMaterial(t){let e=new Gt(new ve,t);this._renderer.compile(e,Vr)}_sceneToCubeUV(t,e,n,s,r){let c=new Be(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(ju),d.toneMapping=vn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Gt(new ce,new cn({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,p=!1,b=t.background;b?b.isColor&&(g.color.copy(b),t.background=null,p=!0):(g.color.copy(ju),p=!0);for(let S=0;S<6;S++){let y=S%3;y===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[S],r.y,r.z)):y===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[S]));let A=this._cubeSize;Ns(s,y*A,S>2?A:0,A,A),d.setRenderTarget(s),p&&d.render(_,c),d.render(t,c)}d.toneMapping=f,d.autoClear=u,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===di||t.mapping===Bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ed());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Ns(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Vr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=0+l*1.25,f=d*u,{_lodMax:m}=this,_=this._sizeLods[n],g=3*_*(n>m-gi?n-m+gi:0),p=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=m-e,Ns(r,g,p,3*_,2*_),s.setRenderTarget(r),s.render(a,Vr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,Ns(t,g,p,3*_,2*_),s.setRenderTarget(t),s.render(a,Vr)}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&zt("blur direction must be either latitudinal or longitudinal!");let h=3,d=this._lodMeshes[s];d.material=l;let u=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Hi-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):Hi;g>Hi&&Et(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Hi}`);let p=[],b=0;for(let R=0;R<Hi;++R){let v=R/_,E=Math.exp(-v*v/2);p.push(E),R===0?b+=E:R<g&&(b+=2*E)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:S}=this;u.dTheta.value=m,u.mipInt.value=S-n;let y=this._sizeLods[s],A=3*y*(s>S-gi?s-S+gi:0),T=4*(this._cubeSize-y);Ns(e,A,T,3*y,2*y),c.setRenderTarget(e),c.render(d,Vr)}};function $0(i){let t=[],e=[],n=[],s=i,r=i-gi+1+Qu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-gi?c=Qu[o-i+gi-1]:o===0&&(c=0),e.push(c);let l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,m=6,_=3,g=2,p=1,b=new Float32Array(_*m*f),S=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let T=0;T<f;T++){let R=T%3*2/3-1,v=T>2?0:-1,E=[R,v,0,R+2/3,v,0,R+2/3,v+1,0,R,v,0,R+2/3,v+1,0,R,v+1,0];b.set(E,_*m*T),S.set(u,g*m*T);let I=[T,T,T,T,T,T];y.set(I,p*m*T)}let A=new ve;A.setAttribute("position",new ze(b,_)),A.setAttribute("uv",new ze(S,g)),A.setAttribute("faceIndex",new ze(y,p)),n.push(new Gt(A,null)),s>gi&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function td(i,t,e){let n=new nn(i,t,e);return n.texture.mapping=Ur,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ns(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function K0(i,t,e){return new Ke({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Z0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Q0(i,t,e){let n=new Float32Array(Hi),s=new L(0,1,0);return new Ke({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function ed(){return new Ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function nd(){return new Ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function gc(){return`

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
	`}var pc=class extends nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new dr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ce(5,5,5),r=new Ke({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:Dn});r.uniforms.tEquirect.value=e;let o=new Gt(s,r),a=e.minFilter;return e.minFilter===fi&&(e.minFilter=He),new _a(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function j0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Sa||f===ba)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let _=new pc(m.height);return _.fromEquirectangularTexture(i,u),t.set(u,_),u.addEventListener("dispose",l),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,m=f===Sa||f===ba,_=f===di||f===Bi;if(m||_){let g=e.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new fc(i)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let b=u.image;return m&&b&&b.height>0||_&&b&&c(b)?(n===null&&(n=new fc(i)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===Sa?u.mapping=di:f===ba&&(u.mapping=Bi),u}function c(u){let f=0,m=6;for(let _=0;_<m;_++)u[_]!==void 0&&f++;return f===m}function l(u){let f=u.target;f.removeEventListener("dispose",l);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function t_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ci("WebGLRenderer: "+n+" extension not supported."),s}}}function e_(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function l(d){let u=[],f=d.index,m=d.attributes.position,_=0;if(m===void 0)return;if(f!==null){let b=f.array;_=f.version;for(let S=0,y=b.length;S<y;S+=3){let A=b[S+0],T=b[S+1],R=b[S+2];u.push(A,T,T,R,R,A)}}else{let b=m.array;_=m.version;for(let S=0,y=b.length/3-1;S<y;S+=3){let A=S+0,T=S+1,R=S+2;u.push(A,T,T,R,R,A)}}let g=new(m.count>=65535?ar:or)(u,1);g.version=_;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function n_(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function l(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];e.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function i_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:zt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function s_(i,t,e){let n=new WeakMap,s=new be;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let E=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],S=0;f===!0&&(S=1),m===!0&&(S=2),_===!0&&(S=3);let y=a.attributes.position.count*S,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*A*4*d),R=new nr(T,y,A,d);R.type=hn,R.needsUpdate=!0;let v=S*4;for(let I=0;I<d;I++){let C=g[I],P=p[I],X=b[I],V=y*A*4*I;for(let U=0;U<C.count;U++){let B=U*v;f===!0&&(s.fromBufferAttribute(C,U),T[V+B+0]=s.x,T[V+B+1]=s.y,T[V+B+2]=s.z,T[V+B+3]=0),m===!0&&(s.fromBufferAttribute(P,U),T[V+B+4]=s.x,T[V+B+5]=s.y,T[V+B+6]=s.z,T[V+B+7]=0),_===!0&&(s.fromBufferAttribute(X,U),T[V+B+8]=s.x,T[V+B+9]=s.y,T[V+B+10]=s.z,T[V+B+11]=X.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new ct(y,A)},n.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function r_(i,t,e,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var o_={[El]:"LINEAR_TONE_MAPPING",[Tl]:"REINHARD_TONE_MAPPING",[Al]:"CINEON_TONE_MAPPING",[Nr]:"ACES_FILMIC_TONE_MAPPING",[Rl]:"AGX_TONE_MAPPING",[Cl]:"NEUTRAL_TONE_MAPPING",[wl]:"CUSTOM_TONE_MAPPING"};function a_(i,t,e,n,s,r){let o=new nn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Yn(t,e):void 0}),a=new nn(t,e,{type:Nn,depthBuffer:!1,stencilBuffer:!1}),c=new ve;c.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Yt([0,2,0,0,2,0],2));let l=new na({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Gt(c,l),d=new Cs(-1,1,1,-1,0,1),u=null,f=null,m=!1,_,g=null,p=[],b=!1;this.setSize=function(S,y){o.setSize(S,y),a.setSize(S,y);for(let A=0;A<p.length;A++){let T=p[A];T.setSize&&T.setSize(S,y)}},this.setEffects=function(S){p=S,b=p.length>0&&p[0].isRenderPass===!0;let y=o.width,A=o.height;for(let T=0;T<p.length;T++){let R=p[T];R.setSize&&R.setSize(y,A)}},this.begin=function(S,y){if(m||S.toneMapping===vn&&p.length===0)return!1;if(g=y,y!==null){let A=y.width,T=y.height;(o.width!==A||o.height!==T)&&this.setSize(A,T)}return b===!1&&S.setRenderTarget(o),_=S.toneMapping,S.toneMapping=vn,!0},this.hasRenderPass=function(){return b},this.end=function(S,y){S.toneMapping=_,m=!0;let A=o,T=a;for(let R=0;R<p.length;R++){let v=p[R];if(v.enabled!==!1&&(v.render(S,T,A,y),v.needsSwap!==!1)){let E=A;A=T,T=E}}if(u!==S.outputColorSpace||f!==S.toneMapping){u=S.outputColorSpace,f=S.toneMapping,l.defines={},ne.getTransfer(u)===he&&(l.defines.SRGB_TRANSFER="");let R=o_[f];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=A.texture,S.setRenderTarget(g),S.render(h,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}var Sd=new Ye,$l=new Yn(1,1),bd=new nr,Ed=new Xo,Td=new dr,id=[],sd=[],rd=new Float32Array(16),od=new Float32Array(9),ad=new Float32Array(4);function Fs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=id[s];if(r===void 0&&(r=new Float32Array(s),id[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _c(i,t){let e=sd[t];e===void 0&&(e=new Int32Array(t),sd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function c_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function l_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function h_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function u_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function d_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;ad.set(n),i.uniformMatrix2fv(this.addr,!1,ad),Ne(e,n)}}function f_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;od.set(n),i.uniformMatrix3fv(this.addr,!1,od),Ne(e,n)}}function p_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;rd.set(n),i.uniformMatrix4fv(this.addr,!1,rd),Ne(e,n)}}function m_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function g_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function __(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function x_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function v_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function y_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function M_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function S_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function b_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?($l.compareFunction=e.isReversedDepthBuffer()?hc:lc,r=$l):r=Sd,e.setTexture2D(t||r,s)}function E_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ed,s)}function T_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Td,s)}function A_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||bd,s)}function w_(i){switch(i){case 5126:return c_;case 35664:return l_;case 35665:return h_;case 35666:return u_;case 35674:return d_;case 35675:return f_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return g_;case 35668:case 35672:return __;case 35669:case 35673:return x_;case 5125:return v_;case 36294:return y_;case 36295:return M_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return b_;case 35679:case 36299:case 36307:return E_;case 35680:case 36300:case 36308:case 36293:return T_;case 36289:case 36303:case 36311:case 36292:return A_}}function R_(i,t){i.uniform1fv(this.addr,t)}function C_(i,t){let e=Fs(t,this.size,2);i.uniform2fv(this.addr,e)}function I_(i,t){let e=Fs(t,this.size,3);i.uniform3fv(this.addr,e)}function P_(i,t){let e=Fs(t,this.size,4);i.uniform4fv(this.addr,e)}function L_(i,t){let e=Fs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function D_(i,t){let e=Fs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function N_(i,t){let e=Fs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function U_(i,t){i.uniform1iv(this.addr,t)}function F_(i,t){i.uniform2iv(this.addr,t)}function O_(i,t){i.uniform3iv(this.addr,t)}function B_(i,t){i.uniform4iv(this.addr,t)}function z_(i,t){i.uniform1uiv(this.addr,t)}function H_(i,t){i.uniform2uiv(this.addr,t)}function k_(i,t){i.uniform3uiv(this.addr,t)}function G_(i,t){i.uniform4uiv(this.addr,t)}function V_(i,t,e){let n=this.cache,s=t.length,r=_c(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=$l:o=Sd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function W_(i,t,e){let n=this.cache,s=t.length,r=_c(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ed,r[o])}function X_(i,t,e){let n=this.cache,s=t.length,r=_c(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Td,r[o])}function q_(i,t,e){let n=this.cache,s=t.length,r=_c(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||bd,r[o])}function Y_(i){switch(i){case 5126:return R_;case 35664:return C_;case 35665:return I_;case 35666:return P_;case 35674:return L_;case 35675:return D_;case 35676:return N_;case 5124:case 35670:return U_;case 35667:case 35671:return F_;case 35668:case 35672:return O_;case 35669:case 35673:return B_;case 5125:return z_;case 36294:return H_;case 36295:return k_;case 36296:return G_;case 35678:case 36198:case 36298:case 36306:case 35682:return V_;case 35679:case 36299:case 36307:return W_;case 35680:case 36300:case 36308:case 36293:return X_;case 36289:case 36303:case 36311:case 36292:return q_}}var Kl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=w_(e.type)}},Ql=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Y_(e.type)}},jl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Zl=/(\w+)(\])?(\[|\.)?/g;function cd(i,t){i.seq.push(t),i.map[t.id]=t}function Z_(i,t,e){let n=i.name,s=n.length;for(Zl.lastIndex=0;;){let r=Zl.exec(n),o=Zl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){cd(e,l===void 0?new Kl(a,i,t):new Ql(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new jl(a),cd(e,d)),e=d}}}var Us=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);Z_(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function ld(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var J_=37297,$_=0;function K_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var hd=new qt;function Q_(i){ne._getMatrix(hd,ne.workingColorSpace,i);let t=`mat3( ${hd.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case tr:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return Et("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ud(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+K_(i.getShaderSource(t),a)}else return r}function j_(i,t){let e=Q_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var tx={[El]:"Linear",[Tl]:"Reinhard",[Al]:"Cineon",[Nr]:"ACESFilmic",[Rl]:"AgX",[Cl]:"Neutral",[wl]:"Custom"};function ex(i,t){let e=tx[t];return e===void 0?(Et("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var dc=new L;function nx(){ne.getLuminanceCoefficients(dc);let i=dc.x.toFixed(4),t=dc.y.toFixed(4),e=dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ix(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xr).join(`
`)}function sx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function rx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Xr(i){return i!==""}function dd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(i){return i.replace(ox,cx)}var ax=new Map;function cx(i,t){let e=Jt[t];if(e===void 0){let n=ax.get(t);if(n!==void 0)e=Jt[n],Et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return th(e)}var lx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pd(i){return i.replace(lx,hx)}function hx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function md(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var ux={[Lr]:"SHADOWMAP_TYPE_PCF",[Is]:"SHADOWMAP_TYPE_VSM"};function dx(i){return ux[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var fx={[di]:"ENVMAP_TYPE_CUBE",[Bi]:"ENVMAP_TYPE_CUBE",[Ur]:"ENVMAP_TYPE_CUBE_UV"};function px(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":fx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var mx={[Bi]:"ENVMAP_MODE_REFRACTION"};function gx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":mx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var _x={[Ma]:"ENVMAP_BLENDING_MULTIPLY",[Cu]:"ENVMAP_BLENDING_MIX",[Iu]:"ENVMAP_BLENDING_ADD"};function xx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":_x[i.combine]||"ENVMAP_BLENDING_NONE"}function vx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function yx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=dx(e),l=px(e),h=gx(e),d=xx(e),u=vx(e),f=ix(e),m=sx(r),_=s.createProgram(),g,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Xr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Xr).join(`
`),p.length>0&&(p+=`
`)):(g=[md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),p=[md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vn?"#define TONE_MAPPING":"",e.toneMapping!==vn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==vn?ex("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,j_("linearToOutputTexel",e.outputColorSpace),nx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xr).join(`
`)),o=th(o),o=dd(o,e),o=fd(o,e),a=th(a),a=dd(a,e),a=fd(a,e),o=pd(o),a=pd(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=b+g+o,y=b+p+a,A=ld(s,s.VERTEX_SHADER,S),T=ld(s,s.FRAGMENT_SHADER,y);s.attachShader(_,A),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(C){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(_)||"",X=s.getShaderInfoLog(A)||"",V=s.getShaderInfoLog(T)||"",U=P.trim(),B=X.trim(),H=V.trim(),Z=!0,et=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,T);else{let rt=ud(s,A,"vertex"),tt=ud(s,T,"fragment");zt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+rt+`
`+tt)}else U!==""?Et("WebGLProgram: Program Info Log:",U):(B===""||H==="")&&(et=!1);et&&(C.diagnostics={runnable:Z,programLog:U,vertexShader:{log:B,prefix:g},fragmentShader:{log:H,prefix:p}})}s.deleteShader(A),s.deleteShader(T),v=new Us(s,_),E=rx(s,_)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(_,J_)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}var Mx=0,eh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new nh(t),e.set(t,n)),n}},nh=class{constructor(t){this.id=Mx++,this.code=t,this.usedTimes=0}};function Sx(i){return i===mi||i===kr||i===Gr}function bx(i,t,e,n,s,r){let o=new ir,a=new eh,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function _(v,E,I,C,P,X){let V=C.fog,U=P.geometry,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Z=t.get(v.envMap||B,H),et=Z&&Z.mapping===Ur?Z.image.height:null,rt=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Et("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let tt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,st=tt!==void 0?tt.length:0,Ht=0;U.morphAttributes.position!==void 0&&(Ht=1),U.morphAttributes.normal!==void 0&&(Ht=2),U.morphAttributes.color!==void 0&&(Ht=3);let ee,$t,J,lt;if(rt){let At=Fn[rt];ee=At.vertexShader,$t=At.fragmentShader}else{ee=v.vertexShader,$t=v.fragmentShader;let At=a.getVertexShaderStage(v),Ae=a.getFragmentShaderStage(v);a.update(v,At,Ae),J=At.id,lt=Ae.id}let ot=i.getRenderTarget(),wt=i.state.buffers.depth.getReversed(),Nt=P.isInstancedMesh===!0,Ot=P.isBatchedMesh===!0,re=!!v.map,Vt=!!v.matcap,j=!!Z,it=!!v.aoMap,nt=!!v.lightMap,gt=!!v.bumpMap&&v.wireframe===!1,mt=!!v.normalMap,Ut=!!v.displacementMap,Tt=!!v.emissiveMap,kt=!!v.metalnessMap,Wt=!!v.roughnessMap,D=v.anisotropy>0,le=v.clearcoat>0,Kt=v.dispersion>0,w=v.iridescence>0,x=v.sheen>0,O=v.transmission>0,z=D&&!!v.anisotropyMap,q=le&&!!v.clearcoatMap,at=le&&!!v.clearcoatNormalMap,ut=le&&!!v.clearcoatRoughnessMap,Y=w&&!!v.iridescenceMap,K=w&&!!v.iridescenceThicknessMap,ht=x&&!!v.sheenColorMap,Ct=x&&!!v.sheenRoughnessMap,_t=!!v.specularMap,ft=!!v.specularColorMap,Lt=!!v.specularIntensityMap,Bt=O&&!!v.transmissionMap,Xt=O&&!!v.thicknessMap,N=!!v.gradientMap,dt=!!v.alphaMap,$=v.alphaTest>0,pt=!!v.alphaHash,xt=!!v.extensions,Q=vn;v.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Q=i.toneMapping);let Pt={shaderID:rt,shaderType:v.type,shaderName:v.name,vertexShader:ee,fragmentShader:$t,defines:v.defines,customVertexShaderID:J,customFragmentShaderID:lt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Ot,batchingColor:Ot&&P._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&P.instanceColor!==null,instancingMorph:Nt&&P.morphTexture!==null,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:re,matcap:Vt,envMap:j,envMapMode:j&&Z.mapping,envMapCubeUVHeight:et,aoMap:it,lightMap:nt,bumpMap:gt,normalMap:mt,displacementMap:Ut,emissiveMap:Tt,normalMapObjectSpace:mt&&v.normalMapType===Du,normalMapTangentSpace:mt&&v.normalMapType===cc,packedNormalMap:mt&&v.normalMapType===cc&&Sx(v.normalMap.format),metalnessMap:kt,roughnessMap:Wt,anisotropy:D,anisotropyMap:z,clearcoat:le,clearcoatMap:q,clearcoatNormalMap:at,clearcoatRoughnessMap:ut,dispersion:Kt,iridescence:w,iridescenceMap:Y,iridescenceThicknessMap:K,sheen:x,sheenColorMap:ht,sheenRoughnessMap:Ct,specularMap:_t,specularColorMap:ft,specularIntensityMap:Lt,transmission:O,transmissionMap:Bt,thicknessMap:Xt,gradientMap:N,opaque:v.transparent===!1&&v.blending===Ii&&v.alphaToCoverage===!1,alphaMap:dt,alphaTest:$,alphaHash:pt,combine:v.combine,mapUv:re&&m(v.map.channel),aoMapUv:it&&m(v.aoMap.channel),lightMapUv:nt&&m(v.lightMap.channel),bumpMapUv:gt&&m(v.bumpMap.channel),normalMapUv:mt&&m(v.normalMap.channel),displacementMapUv:Ut&&m(v.displacementMap.channel),emissiveMapUv:Tt&&m(v.emissiveMap.channel),metalnessMapUv:kt&&m(v.metalnessMap.channel),roughnessMapUv:Wt&&m(v.roughnessMap.channel),anisotropyMapUv:z&&m(v.anisotropyMap.channel),clearcoatMapUv:q&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:at&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:K&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&m(v.sheenRoughnessMap.channel),specularMapUv:_t&&m(v.specularMap.channel),specularColorMapUv:ft&&m(v.specularColorMap.channel),specularIntensityMapUv:Lt&&m(v.specularIntensityMap.channel),transmissionMapUv:Bt&&m(v.transmissionMap.channel),thicknessMapUv:Xt&&m(v.thicknessMap.channel),alphaMapUv:dt&&m(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(mt||D),vertexNormals:!!U.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!U.attributes.uv&&(re||dt),fog:!!V,useFog:v.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||U.attributes.normal===void 0&&mt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:wt,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:Ht,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Q,decodeVideoTexture:re&&v.map.isVideoTexture===!0&&ne.getTransfer(v.map.colorSpace)===he,decodeVideoTextureEmissive:Tt&&v.emissiveMap.isVideoTexture===!0&&ne.getTransfer(v.emissiveMap.colorSpace)===he,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ee,flipSided:v.side===Ge,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:xt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&v.extensions.multiDraw===!0||Ot)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function g(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)E.push(I),E.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(p(E,v),b(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function p(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function b(v,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function S(v){let E=f[v.type],I;if(E){let C=Fn[E];I=$u.clone(C.uniforms)}else I=v.uniforms;return I}function y(v,E){let I=h.get(E);return I!==void 0?++I.usedTimes:(I=new yx(i,E,v,s),l.push(I),h.set(E,I)),I}function A(v){if(--v.usedTimes===0){let E=l.indexOf(v);l[E]=l[l.length-1],l.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){a.remove(v)}function R(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:S,acquireProgram:y,releaseProgram:A,releaseShaderCache:T,programs:l,dispose:R}}function Ex(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Tx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function gd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _d(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,_,g,p){let b=i[t];return b===void 0?(b={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},i[t]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=m,b.materialVariant=o(u),b.groupOrder=_,b.renderOrder=u.renderOrder,b.z=g,b.group=p),t++,b}function c(u,f,m,_,g,p){let b=a(u,f,m,_,g,p);m.transmission>0?n.push(b):m.transparent===!0?s.push(b):e.push(b)}function l(u,f,m,_,g,p){let b=a(u,f,m,_,g,p);m.transmission>0?n.unshift(b):m.transparent===!0?s.unshift(b):e.unshift(b)}function h(u,f,m){e.length>1&&e.sort(u||Tx),n.length>1&&n.sort(f||gd),s.length>1&&s.sort(f||gd),m&&(e.reverse(),n.reverse(),s.reverse())}function d(){for(let u=t,f=i.length;u<f;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function Ax(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new _d,i.set(n,[o])):s>=r.length?(o=new _d,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function wx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new It};break;case"SpotLight":e={position:new L,direction:new L,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function Rx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Cx=0;function Ix(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Px(i){let t=new wx,e=Rx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new te,o=new te;function a(l){let h=0,d=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,b=0,S=0,y=0,A=0,T=0,R=0;l.sort(Ix);for(let E=0,I=l.length;E<I;E++){let C=l[E],P=C.color,X=C.intensity,V=C.distance,U=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===mi?U=C.shadow.map.texture:U=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=P.r*X,d+=P.g*X,u+=P.b*X;else if(C.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(C.sh.coefficients[B],X);R++}else if(C.isDirectionalLight){let B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let H=C.shadow,Z=e.get(C);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,n.directionalShadow[f]=Z,n.directionalShadowMap[f]=U,n.directionalShadowMatrix[f]=C.shadow.matrix,b++}n.directional[f]=B,f++}else if(C.isSpotLight){let B=t.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(P).multiplyScalar(X),B.distance=V,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,n.spot[_]=B;let H=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,H.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[_]=H.matrix,C.castShadow){let Z=e.get(C);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,n.spotShadow[_]=Z,n.spotShadowMap[_]=U,y++}_++}else if(C.isRectAreaLight){let B=t.get(C);B.color.copy(P).multiplyScalar(X),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=B,g++}else if(C.isPointLight){let B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){let H=C.shadow,Z=e.get(C);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,Z.shadowCameraNear=H.camera.near,Z.shadowCameraFar=H.camera.far,n.pointShadow[m]=Z,n.pointShadowMap[m]=U,n.pointShadowMatrix[m]=C.shadow.matrix,S++}n.point[m]=B,m++}else if(C.isHemisphereLight){let B=t.get(C);B.skyColor.copy(C.color).multiplyScalar(X),B.groundColor.copy(C.groundColor).multiplyScalar(X),n.hemi[p]=B,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let v=n.hash;(v.directionalLength!==f||v.pointLength!==m||v.spotLength!==_||v.rectAreaLength!==g||v.hemiLength!==p||v.numDirectionalShadows!==b||v.numPointShadows!==S||v.numSpotShadows!==y||v.numSpotMaps!==A||v.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,v.directionalLength=f,v.pointLength=m,v.spotLength=_,v.rectAreaLength=g,v.hemiLength=p,v.numDirectionalShadows=b,v.numPointShadows=S,v.numSpotShadows=y,v.numSpotMaps=A,v.numLightProbes=R,n.version=Cx++)}function c(l,h){let d=0,u=0,f=0,m=0,_=0,g=h.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){let S=l[p];if(S.isDirectionalLight){let y=n.directional[d];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),d++}else if(S.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(S.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){let y=n.point[u];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),u++}else if(S.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function xd(i){let t=new Px(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function c(u){s.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Lx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new xd(i),t.set(s,[a])):r>=o.length?(a=new xd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nx=`uniform sampler2D shadow_pass;
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
}`,Ux=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Fx=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],vd=new te,Wr=new L,Jl=new L;function Ox(i,t,e){let n=new bs,s=new ct,r=new ct,o=new be,a=new ia,c=new sa,l={},h=e.maxTextureSize,d={[Xn]:Ge,[Ge]:Xn,[Ee]:Ee},u=new Ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Dx,fragmentShader:Nx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new ve;m.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Gt(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lr;let p=this.type;this.render=function(T,R,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===hu&&(Et("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Lr);let E=i.getRenderTarget(),I=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Dn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let X=p!==this.type;X&&R.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(U=>U.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,U=T.length;V<U;V++){let B=T[V],H=B.shadow;if(H===void 0){Et("WebGLShadowMap:",B,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let Z=H.getFrameExtents();s.multiply(Z),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,H.mapSize.y=r.y));let et=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=et,H.map===null||X===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Is){if(B.isPointLight){Et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new nn(s.x,s.y,{format:mi,type:Nn,minFilter:He,magFilter:He,generateMipmaps:!1}),H.map.texture.name=B.name+".shadowMap",H.map.depthTexture=new Yn(s.x,s.y,hn),H.map.depthTexture.name=B.name+".shadowMapDepth",H.map.depthTexture.format=Cn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Fe,H.map.depthTexture.magFilter=Fe}else B.isPointLight?(H.map=new pc(s.x),H.map.depthTexture=new Jo(s.x,yn)):(H.map=new nn(s.x,s.y),H.map.depthTexture=new Yn(s.x,s.y,yn)),H.map.depthTexture.name=B.name+".shadowMap",H.map.depthTexture.format=Cn,this.type===Lr?(H.map.depthTexture.compareFunction=et?hc:lc,H.map.depthTexture.minFilter=He,H.map.depthTexture.magFilter=He):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Fe,H.map.depthTexture.magFilter=Fe);H.camera.updateProjectionMatrix()}let rt=H.map.isWebGLCubeRenderTarget?6:1;for(let tt=0;tt<rt;tt++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,tt),i.clear();else{tt===0&&(i.setRenderTarget(H.map),i.clear());let st=H.getViewport(tt);o.set(r.x*st.x,r.y*st.y,r.x*st.z,r.y*st.w),P.viewport(o)}if(B.isPointLight){let st=H.camera,Ht=H.matrix,ee=B.distance||st.far;ee!==st.far&&(st.far=ee,st.updateProjectionMatrix()),Wr.setFromMatrixPosition(B.matrixWorld),st.position.copy(Wr),Jl.copy(st.position),Jl.add(Ux[tt]),st.up.copy(Fx[tt]),st.lookAt(Jl),st.updateMatrixWorld(),Ht.makeTranslation(-Wr.x,-Wr.y,-Wr.z),vd.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),H._frustum.setFromProjectionMatrix(vd,st.coordinateSystem,st.reversedDepth)}else H.updateMatrices(B);n=H.getFrustum(),y(R,v,H.camera,B,this.type)}H.isPointLightShadow!==!0&&this.type===Is&&b(H,v),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(E,I,C)};function b(T,R){let v=t.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new nn(s.x,s.y,{format:mi,type:Nn})),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,v,u,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,v,f,_,null)}function S(T,R,v,E){let I=null,C=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)I=C;else if(I=v.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let P=I.uuid,X=R.uuid,V=l[P];V===void 0&&(V={},l[P]=V);let U=V[X];U===void 0&&(U=I.clone(),V[X]=U,R.addEventListener("dispose",A)),I=U}if(I.visible=R.visible,I.wireframe=R.wireframe,E===Is?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:d[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let P=i.properties.get(I);P.light=v}return I}function y(T,R,v,E,I){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===Is)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let X=t.update(T),V=T.material;if(Array.isArray(V)){let U=X.groups;for(let B=0,H=U.length;B<H;B++){let Z=U[B],et=V[Z.materialIndex];if(et&&et.visible){let rt=S(T,et,E,I);T.onBeforeShadow(i,T,R,v,X,rt,Z),i.renderBufferDirect(v,null,X,rt,T,Z),T.onAfterShadow(i,T,R,v,X,rt,Z)}}}else if(V.visible){let U=S(T,V,E,I);T.onBeforeShadow(i,T,R,v,X,U,null),i.renderBufferDirect(v,null,X,U,T,null),T.onAfterShadow(i,T,R,v,X,U,null)}}let P=T.children;for(let X=0,V=P.length;X<V;X++)y(P[X],R,v,E,I)}function A(T){T.target.removeEventListener("dispose",A);for(let v in l){let E=l[v],I=T.target.uuid;I in E&&(E[I].dispose(),delete E[I])}}}function Bx(i,t){function e(){let N=!1,dt=new be,$=null,pt=new be(0,0,0,0);return{setMask:function(xt){$!==xt&&!N&&(i.colorMask(xt,xt,xt,xt),$=xt)},setLocked:function(xt){N=xt},setClear:function(xt,Q,Pt,At,Ae){Ae===!0&&(xt*=At,Q*=At,Pt*=At),dt.set(xt,Q,Pt,At),pt.equals(dt)===!1&&(i.clearColor(xt,Q,Pt,At),pt.copy(dt))},reset:function(){N=!1,$=null,pt.set(-1,0,0,0)}}}function n(){let N=!1,dt=!1,$=null,pt=null,xt=null;return{setReversed:function(Q){if(dt!==Q){let Pt=t.get("EXT_clip_control");Q?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),dt=Q;let At=xt;xt=null,this.setClear(At)}},getReversed:function(){return dt},setTest:function(Q){Q?ot(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(Q){$!==Q&&!N&&(i.depthMask(Q),$=Q)},setFunc:function(Q){if(dt&&(Q=Vu[Q]),pt!==Q){switch(Q){case Do:i.depthFunc(i.NEVER);break;case No:i.depthFunc(i.ALWAYS);break;case Uo:i.depthFunc(i.LESS);break;case Pi:i.depthFunc(i.LEQUAL);break;case Fo:i.depthFunc(i.EQUAL);break;case Oo:i.depthFunc(i.GEQUAL);break;case Bo:i.depthFunc(i.GREATER);break;case zo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=Q}},setLocked:function(Q){N=Q},setClear:function(Q){xt!==Q&&(xt=Q,dt&&(Q=1-Q),i.clearDepth(Q))},reset:function(){N=!1,$=null,pt=null,xt=null,dt=!1}}}function s(){let N=!1,dt=null,$=null,pt=null,xt=null,Q=null,Pt=null,At=null,Ae=null;return{setTest:function(ye){N||(ye?ot(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(ye){dt!==ye&&!N&&(i.stencilMask(ye),dt=ye)},setFunc:function(ye,Sn,bn){($!==ye||pt!==Sn||xt!==bn)&&(i.stencilFunc(ye,Sn,bn),$=ye,pt=Sn,xt=bn)},setOp:function(ye,Sn,bn){(Q!==ye||Pt!==Sn||At!==bn)&&(i.stencilOp(ye,Sn,bn),Q=ye,Pt=Sn,At=bn)},setLocked:function(ye){N=ye},setClear:function(ye){Ae!==ye&&(i.clearStencil(ye),Ae=ye)},reset:function(){N=!1,dt=null,$=null,pt=null,xt=null,Q=null,Pt=null,At=null,Ae=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],_=null,g=!1,p=null,b=null,S=null,y=null,A=null,T=null,R=null,v=new It(0,0,0),E=0,I=!1,C=null,P=null,X=null,V=null,U=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Z=0,et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(et)[1]),H=Z>=1):et.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),H=Z>=2);let rt=null,tt={},st=i.getParameter(i.SCISSOR_BOX),Ht=i.getParameter(i.VIEWPORT),ee=new be().fromArray(st),$t=new be().fromArray(Ht);function J(N,dt,$,pt){let xt=new Uint8Array(4),Q=i.createTexture();i.bindTexture(N,Q),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<$;Pt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(dt+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return Q}let lt={};lt[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),lt[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),lt[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(i.DEPTH_TEST),o.setFunc(Pi),gt(!1),mt(Ml),ot(i.CULL_FACE),it(Dn);function ot(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function wt(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Nt(N,dt){return u[N]!==dt?(i.bindFramebuffer(N,dt),u[N]=dt,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=dt),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function Ot(N,dt){let $=m,pt=!1;if(N){$=f.get(dt),$===void 0&&($=[],f.set(dt,$));let xt=N.textures;if($.length!==xt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Pt=xt.length;Q<Pt;Q++)$[Q]=i.COLOR_ATTACHMENT0+Q;$.length=xt.length,pt=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,pt=!0);pt&&i.drawBuffers($)}function re(N){return _!==N?(i.useProgram(N),_=N,!0):!1}let Vt={[ri]:i.FUNC_ADD,[du]:i.FUNC_SUBTRACT,[fu]:i.FUNC_REVERSE_SUBTRACT};Vt[pu]=i.MIN,Vt[mu]=i.MAX;let j={[gu]:i.ZERO,[_u]:i.ONE,[xu]:i.SRC_COLOR,[Po]:i.SRC_ALPHA,[Eu]:i.SRC_ALPHA_SATURATE,[Su]:i.DST_COLOR,[yu]:i.DST_ALPHA,[vu]:i.ONE_MINUS_SRC_COLOR,[Lo]:i.ONE_MINUS_SRC_ALPHA,[bu]:i.ONE_MINUS_DST_COLOR,[Mu]:i.ONE_MINUS_DST_ALPHA,[Tu]:i.CONSTANT_COLOR,[Au]:i.ONE_MINUS_CONSTANT_COLOR,[wu]:i.CONSTANT_ALPHA,[Ru]:i.ONE_MINUS_CONSTANT_ALPHA};function it(N,dt,$,pt,xt,Q,Pt,At,Ae,ye){if(N===Dn){g===!0&&(wt(i.BLEND),g=!1);return}if(g===!1&&(ot(i.BLEND),g=!0),N!==uu){if(N!==p||ye!==I){if((b!==ri||A!==ri)&&(i.blendEquation(i.FUNC_ADD),b=ri,A=ri),ye)switch(N){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dr:i.blendFunc(i.ONE,i.ONE);break;case Sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:zt("WebGLState: Invalid blending: ",N);break}else switch(N){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Sl:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bl:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",N);break}S=null,y=null,T=null,R=null,v.set(0,0,0),E=0,p=N,I=ye}return}xt=xt||dt,Q=Q||$,Pt=Pt||pt,(dt!==b||xt!==A)&&(i.blendEquationSeparate(Vt[dt],Vt[xt]),b=dt,A=xt),($!==S||pt!==y||Q!==T||Pt!==R)&&(i.blendFuncSeparate(j[$],j[pt],j[Q],j[Pt]),S=$,y=pt,T=Q,R=Pt),(At.equals(v)===!1||Ae!==E)&&(i.blendColor(At.r,At.g,At.b,Ae),v.copy(At),E=Ae),p=N,I=!1}function nt(N,dt){N.side===Ee?wt(i.CULL_FACE):ot(i.CULL_FACE);let $=N.side===Ge;dt&&($=!$),gt($),N.blending===Ii&&N.transparent===!1?it(Dn):it(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let pt=N.stencilWrite;a.setTest(pt),pt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Tt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function gt(N){C!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),C=N)}function mt(N){N!==cu?(ot(i.CULL_FACE),N!==P&&(N===Ml?i.cullFace(i.BACK):N===lu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),P=N}function Ut(N){N!==X&&(H&&i.lineWidth(N),X=N)}function Tt(N,dt,$){N?(ot(i.POLYGON_OFFSET_FILL),(V!==dt||U!==$)&&(V=dt,U=$,o.getReversed()&&(dt=-dt),i.polygonOffset(dt,$))):wt(i.POLYGON_OFFSET_FILL)}function kt(N){N?ot(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function Wt(N){N===void 0&&(N=i.TEXTURE0+B-1),rt!==N&&(i.activeTexture(N),rt=N)}function D(N,dt,$){$===void 0&&(rt===null?$=i.TEXTURE0+B-1:$=rt);let pt=tt[$];pt===void 0&&(pt={type:void 0,texture:void 0},tt[$]=pt),(pt.type!==N||pt.texture!==dt)&&(rt!==$&&(i.activeTexture($),rt=$),i.bindTexture(N,dt||lt[N]),pt.type=N,pt.texture=dt)}function le(){let N=tt[rt];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Kt(){try{i.compressedTexImage2D(...arguments)}catch(N){zt("WebGLState:",N)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(N){zt("WebGLState:",N)}}function x(){try{i.texSubImage2D(...arguments)}catch(N){zt("WebGLState:",N)}}function O(){try{i.texSubImage3D(...arguments)}catch(N){zt("WebGLState:",N)}}function z(){try{i.compressedTexSubImage2D(...arguments)}catch(N){zt("WebGLState:",N)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(N){zt("WebGLState:",N)}}function at(){try{i.texStorage2D(...arguments)}catch(N){zt("WebGLState:",N)}}function ut(){try{i.texStorage3D(...arguments)}catch(N){zt("WebGLState:",N)}}function Y(){try{i.texImage2D(...arguments)}catch(N){zt("WebGLState:",N)}}function K(){try{i.texImage3D(...arguments)}catch(N){zt("WebGLState:",N)}}function ht(N){return d[N]!==void 0?d[N]:i.getParameter(N)}function Ct(N,dt){d[N]!==dt&&(i.pixelStorei(N,dt),d[N]=dt)}function _t(N){ee.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ee.copy(N))}function ft(N){$t.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),$t.copy(N))}function Lt(N,dt){let $=l.get(dt);$===void 0&&($=new WeakMap,l.set(dt,$));let pt=$.get(N);pt===void 0&&(pt=i.getUniformBlockIndex(dt,N.name),$.set(N,pt))}function Bt(N,dt){let pt=l.get(dt).get(N);c.get(dt)!==pt&&(i.uniformBlockBinding(dt,pt,N.__bindingPointIndex),c.set(dt,pt))}function Xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},rt=null,tt={},u={},f=new WeakMap,m=[],_=null,g=!1,p=null,b=null,S=null,y=null,A=null,T=null,R=null,v=new It(0,0,0),E=0,I=!1,C=null,P=null,X=null,V=null,U=null,ee.set(0,0,i.canvas.width,i.canvas.height),$t.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:wt,bindFramebuffer:Nt,drawBuffers:Ot,useProgram:re,setBlending:it,setMaterial:nt,setFlipSided:gt,setCullFace:mt,setLineWidth:Ut,setPolygonOffset:Tt,setScissorTest:kt,activeTexture:Wt,bindTexture:D,unbindTexture:le,compressedTexImage2D:Kt,compressedTexImage3D:w,texImage2D:Y,texImage3D:K,pixelStorei:Ct,getParameter:ht,updateUBOMapping:Lt,uniformBlockBinding:Bt,texStorage2D:at,texStorage3D:ut,texSubImage2D:x,texSubImage3D:O,compressedTexSubImage2D:z,compressedTexSubImage3D:q,scissor:_t,viewport:ft,reset:Xt}}function zx(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ct,h=new WeakMap,d=new Set,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,x){return m?new OffscreenCanvas(w,x):gs("canvas")}function g(w,x,O){let z=1,q=Kt(w);if((q.width>O||q.height>O)&&(z=O/Math.max(q.width,q.height)),z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let at=Math.floor(z*q.width),ut=Math.floor(z*q.height);u===void 0&&(u=_(at,ut));let Y=x?_(at,ut):u;return Y.width=at,Y.height=ut,Y.getContext("2d").drawImage(w,0,0,at,ut),Et("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+at+"x"+ut+")."),Y}else return"data"in w&&Et("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),w;return w}function p(w){return w.generateMipmaps}function b(w){i.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,x,O,z,q,at=!1){if(w!==null){if(i[w]!==void 0)return i[w];Et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ut;z&&(ut=t.get("EXT_texture_norm16"),ut||Et("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8),O===i.UNSIGNED_SHORT&&ut&&(Y=ut.R16_EXT),O===i.SHORT&&ut&&(Y=ut.R16_SNORM_EXT)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),x===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8),O===i.UNSIGNED_SHORT&&ut&&(Y=ut.RG16_EXT),O===i.SHORT&&ut&&(Y=ut.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&(O===i.UNSIGNED_SHORT&&ut&&(Y=ut.RGB16_EXT),O===i.SHORT&&ut&&(Y=ut.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),x===i.RGBA){let K=at?tr:ne.getTransfer(q);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=K===he?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&ut&&(Y=ut.RGBA16_EXT),O===i.SHORT&&ut&&(Y=ut.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function A(w,x){let O;return w?x===null||x===yn||x===Ls?O=i.DEPTH24_STENCIL8:x===hn?O=i.DEPTH32F_STENCIL8:x===Ps&&(O=i.DEPTH24_STENCIL8,Et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===yn||x===Ls?O=i.DEPTH_COMPONENT24:x===hn?O=i.DEPTH_COMPONENT32F:x===Ps&&(O=i.DEPTH_COMPONENT16),O}function T(w,x){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Fe&&w.minFilter!==He?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function R(w){let x=w.target;x.removeEventListener("dispose",R),E(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function v(w){let x=w.target;x.removeEventListener("dispose",v),C(x)}function E(w){let x=n.get(w);if(x.__webglInit===void 0)return;let O=w.source,z=f.get(O);if(z){let q=z[x.__cacheKey];q.usedTimes--,q.usedTimes===0&&I(w),Object.keys(z).length===0&&f.delete(O)}n.remove(w)}function I(w){let x=n.get(w);i.deleteTexture(x.__webglTexture);let O=w.source,z=f.get(O);delete z[x.__cacheKey],o.memory.textures--}function C(w){let x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(x.__webglFramebuffer[z]))for(let q=0;q<x.__webglFramebuffer[z].length;q++)i.deleteFramebuffer(x.__webglFramebuffer[z][q]);else i.deleteFramebuffer(x.__webglFramebuffer[z]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[z])}else{if(Array.isArray(x.__webglFramebuffer))for(let z=0;z<x.__webglFramebuffer.length;z++)i.deleteFramebuffer(x.__webglFramebuffer[z]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let z=0;z<x.__webglColorRenderbuffer.length;z++)x.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[z]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let O=w.textures;for(let z=0,q=O.length;z<q;z++){let at=n.get(O[z]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),o.memory.textures--),n.remove(O[z])}n.remove(w)}let P=0;function X(){P=0}function V(){return P}function U(w){P=w}function B(){let w=P;return w>=s.maxTextures&&Et("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),P+=1,w}function H(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function Z(w,x){let O=n.get(w);if(w.isVideoTexture&&D(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){let z=w.image;if(z===null)Et("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Et("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(O,w,x);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function et(w,x){let O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){wt(O,w,x);return}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function rt(w,x){let O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){wt(O,w,x);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function tt(w,x){let O=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&O.__version!==w.version){Nt(O,w,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}let st={[oi]:i.REPEAT,[wn]:i.CLAMP_TO_EDGE,[Ho]:i.MIRRORED_REPEAT},Ht={[Fe]:i.NEAREST,[Pu]:i.NEAREST_MIPMAP_NEAREST,[Fr]:i.NEAREST_MIPMAP_LINEAR,[He]:i.LINEAR,[Ea]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},ee={[Nu]:i.NEVER,[zu]:i.ALWAYS,[Uu]:i.LESS,[lc]:i.LEQUAL,[Fu]:i.EQUAL,[hc]:i.GEQUAL,[Ou]:i.GREATER,[Bu]:i.NOTEQUAL};function $t(w,x){if(x.type===hn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===He||x.magFilter===Ea||x.magFilter===Fr||x.magFilter===fi||x.minFilter===He||x.minFilter===Ea||x.minFilter===Fr||x.minFilter===fi)&&Et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,st[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,st[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,st[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Ht[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Ht[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ee[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Fe||x.minFilter!==Fr&&x.minFilter!==fi||x.type===hn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function J(w,x){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",R));let z=x.source,q=f.get(z);q===void 0&&(q={},f.set(z,q));let at=H(x);if(at!==w.__cacheKey){q[at]===void 0&&(q[at]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),q[at].usedTimes++;let ut=q[w.__cacheKey];ut!==void 0&&(q[w.__cacheKey].usedTimes--,ut.usedTimes===0&&I(x)),w.__cacheKey=at,w.__webglTexture=q[at].texture}return O}function lt(w,x,O){return Math.floor(Math.floor(w/O)/x)}function ot(w,x,O,z){let at=w.updateRanges;if(at.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,O,z,x.data);else{at.sort((Ct,_t)=>Ct.start-_t.start);let ut=0;for(let Ct=1;Ct<at.length;Ct++){let _t=at[ut],ft=at[Ct],Lt=_t.start+_t.count,Bt=lt(ft.start,x.width,4),Xt=lt(_t.start,x.width,4);ft.start<=Lt+1&&Bt===Xt&&lt(ft.start+ft.count-1,x.width,4)===Bt?_t.count=Math.max(_t.count,ft.start+ft.count-_t.start):(++ut,at[ut]=ft)}at.length=ut+1;let Y=e.getParameter(i.UNPACK_ROW_LENGTH),K=e.getParameter(i.UNPACK_SKIP_PIXELS),ht=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Ct=0,_t=at.length;Ct<_t;Ct++){let ft=at[Ct],Lt=Math.floor(ft.start/4),Bt=Math.ceil(ft.count/4),Xt=Lt%x.width,N=Math.floor(Lt/x.width),dt=Bt,$=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Xt),e.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,Xt,N,dt,$,O,z,x.data)}w.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Y),e.pixelStorei(i.UNPACK_SKIP_PIXELS,K),e.pixelStorei(i.UNPACK_SKIP_ROWS,ht)}}function wt(w,x,O){let z=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(z=i.TEXTURE_3D);let q=J(w,x),at=x.source;e.bindTexture(z,w.__webglTexture,i.TEXTURE0+O);let ut=n.get(at);if(at.version!==ut.__version||q===!0){if(e.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let $=ne.getPrimaries(ne.workingColorSpace),pt=x.colorSpace===Zn?null:ne.getPrimaries(x.colorSpace),xt=x.colorSpace===Zn||$===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let K=g(x.image,!1,s.maxTextureSize);K=le(x,K);let ht=r.convert(x.format,x.colorSpace),Ct=r.convert(x.type),_t=y(x.internalFormat,ht,Ct,x.normalized,x.colorSpace,x.isVideoTexture);$t(z,x);let ft,Lt=x.mipmaps,Bt=x.isVideoTexture!==!0,Xt=ut.__version===void 0||q===!0,N=at.dataReady,dt=T(x,K);if(x.isDepthTexture)_t=A(x.format===pi,x.type),Xt&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,_t,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,_t,K.width,K.height,0,ht,Ct,null));else if(x.isDataTexture)if(Lt.length>0){Bt&&Xt&&e.texStorage2D(i.TEXTURE_2D,dt,_t,Lt[0].width,Lt[0].height);for(let $=0,pt=Lt.length;$<pt;$++)ft=Lt[$],Bt?N&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,ft.width,ft.height,ht,Ct,ft.data):e.texImage2D(i.TEXTURE_2D,$,_t,ft.width,ft.height,0,ht,Ct,ft.data);x.generateMipmaps=!1}else Bt?(Xt&&e.texStorage2D(i.TEXTURE_2D,dt,_t,K.width,K.height),N&&ot(x,K,ht,Ct)):e.texImage2D(i.TEXTURE_2D,0,_t,K.width,K.height,0,ht,Ct,K.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Bt&&Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,_t,Lt[0].width,Lt[0].height,K.depth);for(let $=0,pt=Lt.length;$<pt;$++)if(ft=Lt[$],x.format!==un)if(ht!==null)if(Bt){if(N)if(x.layerUpdates.size>0){let xt=Vl(ft.width,ft.height,x.format,x.type);for(let Q of x.layerUpdates){let Pt=ft.data.subarray(Q*xt/ft.data.BYTES_PER_ELEMENT,(Q+1)*xt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,Q,ft.width,ft.height,1,ht,Pt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ft.width,ft.height,K.depth,ht,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,_t,ft.width,ft.height,K.depth,0,ft.data,0,0);else Et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ft.width,ft.height,K.depth,ht,Ct,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,_t,ft.width,ft.height,K.depth,0,ht,Ct,ft.data)}else{Bt&&Xt&&e.texStorage2D(i.TEXTURE_2D,dt,_t,Lt[0].width,Lt[0].height);for(let $=0,pt=Lt.length;$<pt;$++)ft=Lt[$],x.format!==un?ht!==null?Bt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,ft.width,ft.height,ht,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,$,_t,ft.width,ft.height,0,ft.data):Et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?N&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,ft.width,ft.height,ht,Ct,ft.data):e.texImage2D(i.TEXTURE_2D,$,_t,ft.width,ft.height,0,ht,Ct,ft.data)}else if(x.isDataArrayTexture)if(Bt){if(Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,_t,K.width,K.height,K.depth),N)if(x.layerUpdates.size>0){let $=Vl(K.width,K.height,x.format,x.type);for(let pt of x.layerUpdates){let xt=K.data.subarray(pt*$/K.data.BYTES_PER_ELEMENT,(pt+1)*$/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pt,K.width,K.height,1,ht,Ct,xt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ht,Ct,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,K.width,K.height,K.depth,0,ht,Ct,K.data);else if(x.isData3DTexture)Bt?(Xt&&e.texStorage3D(i.TEXTURE_3D,dt,_t,K.width,K.height,K.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ht,Ct,K.data)):e.texImage3D(i.TEXTURE_3D,0,_t,K.width,K.height,K.depth,0,ht,Ct,K.data);else if(x.isFramebufferTexture){if(Xt)if(Bt)e.texStorage2D(i.TEXTURE_2D,dt,_t,K.width,K.height);else{let $=K.width,pt=K.height;for(let xt=0;xt<dt;xt++)e.texImage2D(i.TEXTURE_2D,xt,_t,$,pt,0,ht,Ct,null),$>>=1,pt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),K.parentNode!==$){$.appendChild(K),d.add(x),$.onpaint=pt=>{let xt=pt.changedElements;for(let Q of d)xt.includes(Q.image)&&(Q.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let xt=i.RGBA,Q=i.RGBA,Pt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xt,Q,Pt,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Lt.length>0){if(Bt&&Xt){let $=Kt(Lt[0]);e.texStorage2D(i.TEXTURE_2D,dt,_t,$.width,$.height)}for(let $=0,pt=Lt.length;$<pt;$++)ft=Lt[$],Bt?N&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,ht,Ct,ft):e.texImage2D(i.TEXTURE_2D,$,_t,ht,Ct,ft);x.generateMipmaps=!1}else if(Bt){if(Xt){let $=Kt(K);e.texStorage2D(i.TEXTURE_2D,dt,_t,$.width,$.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,Ct,K)}else e.texImage2D(i.TEXTURE_2D,0,_t,ht,Ct,K);p(x)&&b(z),ut.__version=at.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Nt(w,x,O){if(x.image.length!==6)return;let z=J(w,x),q=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);let at=n.get(q);if(q.version!==at.__version||z===!0){e.activeTexture(i.TEXTURE0+O);let ut=ne.getPrimaries(ne.workingColorSpace),Y=x.colorSpace===Zn?null:ne.getPrimaries(x.colorSpace),K=x.colorSpace===Zn||ut===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ht=x.isCompressedTexture||x.image[0].isCompressedTexture,Ct=x.image[0]&&x.image[0].isDataTexture,_t=[];for(let Q=0;Q<6;Q++)!ht&&!Ct?_t[Q]=g(x.image[Q],!0,s.maxCubemapSize):_t[Q]=Ct?x.image[Q].image:x.image[Q],_t[Q]=le(x,_t[Q]);let ft=_t[0],Lt=r.convert(x.format,x.colorSpace),Bt=r.convert(x.type),Xt=y(x.internalFormat,Lt,Bt,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,dt=at.__version===void 0||z===!0,$=q.dataReady,pt=T(x,ft);$t(i.TEXTURE_CUBE_MAP,x);let xt;if(ht){N&&dt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Xt,ft.width,ft.height);for(let Q=0;Q<6;Q++){xt=_t[Q].mipmaps;for(let Pt=0;Pt<xt.length;Pt++){let At=xt[Pt];x.format!==un?Lt!==null?N?$&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Pt,0,0,At.width,At.height,Lt,At.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Pt,Xt,At.width,At.height,0,At.data):Et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Pt,0,0,At.width,At.height,Lt,Bt,At.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Pt,Xt,At.width,At.height,0,Lt,Bt,At.data)}}}else{if(xt=x.mipmaps,N&&dt){xt.length>0&&pt++;let Q=Kt(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Xt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(Ct){N?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,_t[Q].width,_t[Q].height,Lt,Bt,_t[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xt,_t[Q].width,_t[Q].height,0,Lt,Bt,_t[Q].data);for(let Pt=0;Pt<xt.length;Pt++){let Ae=xt[Pt].image[Q].image;N?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Pt+1,0,0,Ae.width,Ae.height,Lt,Bt,Ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Pt+1,Xt,Ae.width,Ae.height,0,Lt,Bt,Ae.data)}}else{N?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Lt,Bt,_t[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xt,Lt,Bt,_t[Q]);for(let Pt=0;Pt<xt.length;Pt++){let At=xt[Pt];N?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Pt+1,0,0,Lt,Bt,At.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Pt+1,Xt,Lt,Bt,At.image[Q])}}}p(x)&&b(i.TEXTURE_CUBE_MAP),at.__version=q.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Ot(w,x,O,z,q,at){let ut=r.convert(O.format,O.colorSpace),Y=r.convert(O.type),K=y(O.internalFormat,ut,Y,O.normalized,O.colorSpace),ht=n.get(x),Ct=n.get(O);if(Ct.__renderTarget=x,!ht.__hasExternalTextures){let _t=Math.max(1,x.width>>at),ft=Math.max(1,x.height>>at);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?e.texImage3D(q,at,K,_t,ft,x.depth,0,ut,Y,null):e.texImage2D(q,at,K,_t,ft,0,ut,Y,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),Wt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,q,Ct.__webglTexture,0,kt(x)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,q,Ct.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function re(w,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){let z=x.depthTexture,q=z&&z.isDepthTexture?z.type:null,at=A(x.stencilBuffer,q),ut=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Wt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt(x),at,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt(x),at,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,at,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,w)}else{let z=x.textures;for(let q=0;q<z.length;q++){let at=z[q],ut=r.convert(at.format,at.colorSpace),Y=r.convert(at.type),K=y(at.internalFormat,ut,Y,at.normalized,at.colorSpace);Wt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt(x),K,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt(x),K,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,K,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Vt(w,x,O){let z=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=n.get(x.depthTexture);if(q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),z){if(q.__webglInit===void 0&&(q.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),$t(i.TEXTURE_CUBE_MAP,x.depthTexture);let ht=r.convert(x.depthTexture.format),Ct=r.convert(x.depthTexture.type),_t;x.depthTexture.format===Cn?_t=i.DEPTH_COMPONENT24:x.depthTexture.format===pi&&(_t=i.DEPTH24_STENCIL8);for(let ft=0;ft<6;ft++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,_t,x.width,x.height,0,ht,Ct,null)}}else Z(x.depthTexture,0);let at=q.__webglTexture,ut=kt(x),Y=z?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,K=x.depthTexture.format===pi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Cn)Wt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Y,at,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,K,Y,at,0);else if(x.depthTexture.format===pi)Wt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Y,at,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,K,Y,at,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function j(w){let x=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let z=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),z){let q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,z.removeEventListener("dispose",q)};z.addEventListener("dispose",q),x.__depthDisposeCallback=q}x.__boundDepthTexture=z}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let z=0;z<6;z++)Vt(x.__webglFramebuffer[z],w,z);else{let z=w.texture.mipmaps;z&&z.length>0?Vt(x.__webglFramebuffer[0],w,0):Vt(x.__webglFramebuffer,w,0)}else if(O){x.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[z]),x.__webglDepthbuffer[z]===void 0)x.__webglDepthbuffer[z]=i.createRenderbuffer(),re(x.__webglDepthbuffer[z],w,!1);else{let q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=x.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,at)}}else{let z=w.texture.mipmaps;if(z&&z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),re(x.__webglDepthbuffer,w,!1);else{let q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,at)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(w,x,O){let z=n.get(w);x!==void 0&&Ot(z.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&j(w)}function nt(w){let x=w.texture,O=n.get(w),z=n.get(x);w.addEventListener("dispose",v);let q=w.textures,at=w.isWebGLCubeRenderTarget===!0,ut=q.length>1;if(ut||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=x.version,o.memory.textures++),at){O.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[Y]=[];for(let K=0;K<x.mipmaps.length;K++)O.__webglFramebuffer[Y][K]=i.createFramebuffer()}else O.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)O.__webglFramebuffer[Y]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ut)for(let Y=0,K=q.length;Y<K;Y++){let ht=n.get(q[Y]);ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&Wt(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Y=0;Y<q.length;Y++){let K=q[Y];O.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[Y]);let ht=r.convert(K.format,K.colorSpace),Ct=r.convert(K.type),_t=y(K.internalFormat,ht,Ct,K.normalized,K.colorSpace,w.isXRRenderTarget===!0),ft=kt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,_t,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,O.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),re(O.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),$t(i.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)Ot(O.__webglFramebuffer[Y][K],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,K);else Ot(O.__webglFramebuffer[Y],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(x)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let Y=0,K=q.length;Y<K;Y++){let ht=q[Y],Ct=n.get(ht),_t=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(_t=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,Ct.__webglTexture),$t(_t,ht),Ot(O.__webglFramebuffer,w,ht,i.COLOR_ATTACHMENT0+Y,_t,0),p(ht)&&b(_t)}e.unbindTexture()}else{let Y=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Y=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Y,z.__webglTexture),$t(Y,x),x.mipmaps&&x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)Ot(O.__webglFramebuffer[K],w,x,i.COLOR_ATTACHMENT0,Y,K);else Ot(O.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,Y,0);p(x)&&b(Y),e.unbindTexture()}w.depthBuffer&&j(w)}function gt(w){let x=w.textures;for(let O=0,z=x.length;O<z;O++){let q=x[O];if(p(q)){let at=S(w),ut=n.get(q).__webglTexture;e.bindTexture(at,ut),b(at),e.unbindTexture()}}}let mt=[],Ut=[];function Tt(w){if(w.samples>0){if(Wt(w)===!1){let x=w.textures,O=w.width,z=w.height,q=i.COLOR_BUFFER_BIT,at=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(w),Y=x.length>1;if(Y)for(let ht=0;ht<x.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let K=w.texture.mipmaps;K&&K.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let ht=0;ht<x.length;ht++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[ht]);let Ct=n.get(x[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ct,0)}i.blitFramebuffer(0,0,O,z,0,0,O,z,q,i.NEAREST),c===!0&&(mt.length=0,Ut.length=0,mt.push(i.COLOR_ATTACHMENT0+ht),w.depthBuffer&&w.resolveDepthBuffer===!1&&(mt.push(at),Ut.push(at),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ut)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let ht=0;ht<x.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,ut.__webglColorRenderbuffer[ht]);let Ct=n.get(x[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,Ct,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function kt(w){return Math.min(s.maxSamples,w.samples)}function Wt(w){let x=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function D(w){let x=o.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function le(w,x){let O=w.colorSpace,z=w.format,q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==js&&O!==Zn&&(ne.getTransfer(O)===he?(z!==un||q!==Qe)&&Et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",O)),x}function Kt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=X,this.getTextureUnits=V,this.setTextureUnits=U,this.setTexture2D=Z,this.setTexture2DArray=et,this.setTexture3D=rt,this.setTextureCube=tt,this.rebindTextures=it,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=Ot,this.useMultisampledRTT=Wt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Hx(i,t){function e(n,s=Zn){let r,o=ne.getTransfer(s);if(n===Qe)return i.UNSIGNED_BYTE;if(n===Aa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Pl)return i.BYTE;if(n===Ll)return i.SHORT;if(n===Ps)return i.UNSIGNED_SHORT;if(n===Ta)return i.INT;if(n===yn)return i.UNSIGNED_INT;if(n===hn)return i.FLOAT;if(n===Nn)return i.HALF_FLOAT;if(n===Ul)return i.ALPHA;if(n===Fl)return i.RGB;if(n===un)return i.RGBA;if(n===Cn)return i.DEPTH_COMPONENT;if(n===pi)return i.DEPTH_STENCIL;if(n===Ra)return i.RED;if(n===Ca)return i.RED_INTEGER;if(n===mi)return i.RG;if(n===Ia)return i.RG_INTEGER;if(n===Pa)return i.RGBA_INTEGER;if(n===Or||n===Br||n===zr||n===Hr)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===La||n===Da||n===Na||n===Ua)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===La)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fa||n===Oa||n===Ba||n===za||n===Ha||n===kr||n===ka)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fa||n===Oa)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ba)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===za)return r.COMPRESSED_R11_EAC;if(n===Ha)return r.COMPRESSED_SIGNED_R11_EAC;if(n===kr)return r.COMPRESSED_RG11_EAC;if(n===ka)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ga||n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===Ja||n===$a||n===Ka||n===Qa||n===ja||n===tc||n===ec)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ga)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Va)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ya)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Za)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ja)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$a)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ka)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ja)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ec)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nc||n===ic||n===sc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===nc)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ic)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rc||n===oc||n===Gr||n===ac)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===rc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var kx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gx=`
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

}`,ih=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new fr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ke({vertexShader:kx,fragmentShader:Gx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Gt(new Oe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sh=class extends In{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,m=null,_=typeof XRWebGLBinding<"u",g=new ih,p={},b=e.getContextAttributes(),S=null,y=null,A=[],T=[],R=new ct,v=null,E=new Be;E.viewport=new be;let I=new Be;I.viewport=new be;let C=[E,I],P=new xa,X=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let lt=A[J];return lt===void 0&&(lt=new ys,A[J]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(J){let lt=A[J];return lt===void 0&&(lt=new ys,A[J]=lt),lt.getGripSpace()},this.getHand=function(J){let lt=A[J];return lt===void 0&&(lt=new ys,A[J]=lt),lt.getHandSpace()};function U(J){let lt=T.indexOf(J.inputSource);if(lt===-1)return;let ot=A[lt];ot!==void 0&&(ot.update(J.inputSource,J.frame,l||o),ot.dispatchEvent({type:J.type,data:J.inputSource}))}function B(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",H);for(let J=0;J<A.length;J++){let lt=T[J];lt!==null&&(T[J]=null,A[J].disconnect(lt))}X=null,V=null,g.reset();for(let J in p)delete p[J];t.setRenderTarget(S),f=null,u=null,d=null,s=null,y=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&Et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",B),s.addEventListener("inputsourceschange",H),b.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,wt=null,Nt=null;b.depth&&(Nt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=b.stencil?pi:Cn,wt=b.stencil?Ls:yn);let Ot={colorFormat:e.RGBA8,depthFormat:Nt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ot),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new nn(u.textureWidth,u.textureHeight,{format:un,type:Qe,depthTexture:new Yn(u.textureWidth,u.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let ot={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new nn(f.framebufferWidth,f.framebufferHeight,{format:un,type:Qe,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(J){for(let lt=0;lt<J.removed.length;lt++){let ot=J.removed[lt],wt=T.indexOf(ot);wt>=0&&(T[wt]=null,A[wt].disconnect(ot))}for(let lt=0;lt<J.added.length;lt++){let ot=J.added[lt],wt=T.indexOf(ot);if(wt===-1){for(let Ot=0;Ot<A.length;Ot++)if(Ot>=T.length){T.push(ot),wt=Ot;break}else if(T[Ot]===null){T[Ot]=ot,wt=Ot;break}if(wt===-1)break}let Nt=A[wt];Nt&&Nt.connect(ot)}}let Z=new L,et=new L;function rt(J,lt,ot){Z.setFromMatrixPosition(lt.matrixWorld),et.setFromMatrixPosition(ot.matrixWorld);let wt=Z.distanceTo(et),Nt=lt.projectionMatrix.elements,Ot=ot.projectionMatrix.elements,re=Nt[14]/(Nt[10]-1),Vt=Nt[14]/(Nt[10]+1),j=(Nt[9]+1)/Nt[5],it=(Nt[9]-1)/Nt[5],nt=(Nt[8]-1)/Nt[0],gt=(Ot[8]+1)/Ot[0],mt=re*nt,Ut=re*gt,Tt=wt/(-nt+gt),kt=Tt*-nt;if(lt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(kt),J.translateZ(Tt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Nt[10]===-1)J.projectionMatrix.copy(lt.projectionMatrix),J.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{let Wt=re+Tt,D=Vt+Tt,le=mt-kt,Kt=Ut+(wt-kt),w=j*Vt/D*Wt,x=it*Vt/D*Wt;J.projectionMatrix.makePerspective(le,Kt,w,x,Wt,D),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function tt(J,lt){lt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(lt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let lt=J.near,ot=J.far;g.texture!==null&&(g.depthNear>0&&(lt=g.depthNear),g.depthFar>0&&(ot=g.depthFar)),P.near=I.near=E.near=lt,P.far=I.far=E.far=ot,(X!==P.near||V!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),X=P.near,V=P.far),P.layers.mask=J.layers.mask|6,E.layers.mask=P.layers.mask&-5,I.layers.mask=P.layers.mask&-3;let wt=J.parent,Nt=P.cameras;tt(P,wt);for(let Ot=0;Ot<Nt.length;Ot++)tt(Nt[Ot],wt);Nt.length===2?rt(P,E,I):P.projectionMatrix.copy(E.projectionMatrix),st(J,P,wt)};function st(J,lt,ot){ot===null?J.matrix.copy(lt.matrixWorld):(J.matrix.copy(ot.matrixWorld),J.matrix.invert(),J.matrix.multiply(lt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(lt.projectionMatrix),J.projectionMatrixInverse.copy(lt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=xs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(J){c=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(J){return p[J]};let Ht=null;function ee(J,lt){if(h=lt.getViewerPose(l||o),m=lt,h!==null){let ot=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let wt=!1;ot.length!==P.cameras.length&&(P.cameras.length=0,wt=!0);for(let Vt=0;Vt<ot.length;Vt++){let j=ot[Vt],it=null;if(f!==null)it=f.getViewport(j);else{let gt=d.getViewSubImage(u,j);it=gt.viewport,Vt===0&&(t.setRenderTargetTextures(y,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(y))}let nt=C[Vt];nt===void 0&&(nt=new Be,nt.layers.enable(Vt),nt.viewport=new be,C[Vt]=nt),nt.matrix.fromArray(j.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(j.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(it.x,it.y,it.width,it.height),Vt===0&&(P.matrix.copy(nt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),wt===!0&&P.cameras.push(nt)}let Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let Vt=d.getDepthInformation(ot[0]);Vt&&Vt.isValid&&Vt.texture&&g.init(Vt,s.renderState)}if(Nt&&Nt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let Vt=0;Vt<ot.length;Vt++){let j=ot[Vt].camera;if(j){let it=p[j];it||(it=new fr,p[j]=it);let nt=d.getCameraImage(j);it.sourceTexture=nt}}}}for(let ot=0;ot<A.length;ot++){let wt=T[ot],Nt=A[ot];wt!==null&&Nt!==void 0&&Nt.update(wt,lt,l||o)}Ht&&Ht(J,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),m=null}let $t=new yd;$t.setAnimationLoop(ee),this.setAnimationLoop=function(J){Ht=J},this.dispose=function(){}}},Vx=new te,Ad=new qt;Ad.set(-1,0,0,0,1,0,0,0,1);function Wx(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Hl(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,b,S,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,b,S):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ge&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ge&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let b=t.get(p),S=b.envMap,y=b.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(Vx.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Ad),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,b,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=S*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ge&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let b=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Xx(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,A){let T=A.program;n.uniformBlockBinding(y,T)}function l(y,A){let T=s[y.id];T===void 0&&(g(y),T=h(y),s[y.id]=T,y.addEventListener("dispose",b));let R=A.program;n.updateUBOMapping(y,R);let v=t.render.frame;r[y.id]!==v&&(u(y),r[y.id]=v)}function h(y){let A=d();y.__bindingPointIndex=A;let T=i.createBuffer(),R=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,R,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,T),T}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let A=s[y.id],T=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let v=0,E=T.length;v<E;v++){let I=T[v];if(Array.isArray(I))for(let C=0,P=I.length;C<P;C++)f(I[C],v,C,R);else f(I,v,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,A,T,R){if(_(y,A,T,R)===!0){let v=y.__offset,E=y.value;if(Array.isArray(E)){let I=0;for(let C=0;C<E.length;C++){let P=E[C],X=p(P);m(P,y.__data,I),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(I+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function m(y,A,T){typeof y=="number"||typeof y=="boolean"?A[0]=y:y.isMatrix3?(A[0]=y.elements[0],A[1]=y.elements[1],A[2]=y.elements[2],A[3]=0,A[4]=y.elements[3],A[5]=y.elements[4],A[6]=y.elements[5],A[7]=0,A[8]=y.elements[6],A[9]=y.elements[7],A[10]=y.elements[8],A[11]=0):ArrayBuffer.isView(y)?A.set(new y.constructor(y.buffer,y.byteOffset,A.length)):y.toArray(A,T)}function _(y,A,T,R){let v=y.value,E=A+"_"+T;if(R[E]===void 0)return typeof v=="number"||typeof v=="boolean"?R[E]=v:ArrayBuffer.isView(v)?R[E]=v.slice():R[E]=v.clone(),!0;{let I=R[E];if(typeof v=="number"||typeof v=="boolean"){if(I!==v)return R[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(I.equals(v)===!1)return I.copy(v),!0}}return!1}function g(y){let A=y.uniforms,T=0,R=16;for(let E=0,I=A.length;E<I;E++){let C=Array.isArray(A[E])?A[E]:[A[E]];for(let P=0,X=C.length;P<X;P++){let V=C[P],U=Array.isArray(V.value)?V.value:[V.value];for(let B=0,H=U.length;B<H;B++){let Z=U[B],et=p(Z),rt=T%R,tt=rt%et.boundary,st=rt+tt;T+=tt,st!==0&&R-st<et.storage&&(T+=R-st),V.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=T,T+=et.storage}}}let v=T%R;return v>0&&(T+=R-v),y.__size=T,y.__cache={},this}function p(y){let A={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(A.boundary=4,A.storage=4):y.isVector2?(A.boundary=8,A.storage=8):y.isVector3||y.isColor?(A.boundary=16,A.storage=12):y.isVector4?(A.boundary=16,A.storage=16):y.isMatrix3?(A.boundary=48,A.storage=48):y.isMatrix4?(A.boundary=64,A.storage=64):y.isTexture?Et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(A.boundary=16,A.storage=y.byteLength):Et("WebGLRenderer: Unsupported uniform value type.",y),A}function b(y){let A=y.target;A.removeEventListener("dispose",b);let T=o.indexOf(A.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function S(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:S}}var qx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Un=null;function Yx(){return Un===null&&(Un=new hr(qx,16,16,mi,Nn),Un.name="DFG_LUT",Un.minFilter=He,Un.magFilter=He,Un.wrapS=wn,Un.wrapT=wn,Un.generateMipmaps=!1,Un.needsUpdate=!0),Un}var mc=class{constructor(t={}){let{canvas:e=Hu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Qe}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=f,g=new Set([Pa,Ia,Ca]),p=new Set([Qe,yn,Ps,Ls,Aa,wa]),b=new Uint32Array(4),S=new Int32Array(4),y=new L,A=null,T=null,R=[],v=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,C=!1,P=null,X=null,V=null,U=null;this._outputColorSpace=fe;let B=0,H=0,Z=null,et=-1,rt=null,tt=new be,st=new be,Ht=null,ee=new It(0),$t=0,J=e.width,lt=e.height,ot=1,wt=null,Nt=null,Ot=new be(0,0,J,lt),re=new be(0,0,J,lt),Vt=!1,j=new bs,it=!1,nt=!1,gt=new te,mt=new L,Ut=new be,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function Wt(){return Z===null?ot:1}let D=n;function le(M,F){return e.getContext(M,F)}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"185"}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",ye,!1),e.addEventListener("webglcontextcreationerror",Sn,!1),D===null){let F="webgl2";if(D=le(F,M),D===null)throw le(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(M){throw zt("WebGLRenderer: "+M.message),M}let Kt,w,x,O,z,q,at,ut,Y,K,ht,Ct,_t,ft,Lt,Bt,Xt,N,dt,$,pt,xt,Q;function Pt(){Kt=new t_(D),Kt.init(),pt=new Hx(D,Kt),w=new q0(D,Kt,t,pt),x=new Bx(D,Kt),w.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),X=D.createFramebuffer(),V=D.createFramebuffer(),U=D.createFramebuffer(),O=new i_(D),z=new Ex,q=new zx(D,Kt,x,z,w,pt,O),at=new j0(I),ut=new am(D),xt=new W0(D,ut),Y=new e_(D,ut,O,xt),K=new r_(D,Y,ut,xt,O),N=new s_(D,w,q),Lt=new Y0(z),ht=new bx(I,at,Kt,w,xt,Lt),Ct=new Wx(I,z),_t=new Ax,ft=new Lx(Kt),Xt=new V0(I,at,x,K,m,c),Bt=new Ox(I,K,w),Q=new Xx(D,O,w,x),dt=new X0(D,Kt,O),$=new n_(D,Kt,O),O.programs=ht.programs,I.capabilities=w,I.extensions=Kt,I.properties=z,I.renderLists=_t,I.shadowMap=Bt,I.state=x,I.info=O}Pt(),_!==Qe&&(E=new a_(_,e.width,e.height,a,s,r));let At=new sh(I,D);this.xr=At,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let M=Kt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Kt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(M){M!==void 0&&(ot=M,this.setSize(J,lt,!1))},this.getSize=function(M){return M.set(J,lt)},this.setSize=function(M,F,W=!0){if(At.isPresenting){Et("WebGLRenderer: Can't change size while VR device is presenting.");return}J=M,lt=F,e.width=Math.floor(M*ot),e.height=Math.floor(F*ot),W===!0&&(e.style.width=M+"px",e.style.height=F+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(J*ot,lt*ot).floor()},this.setDrawingBufferSize=function(M,F,W){J=M,lt=F,ot=W,e.width=Math.floor(M*W),e.height=Math.floor(F*W),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(_===Qe){zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){Et("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(tt)},this.getViewport=function(M){return M.copy(Ot)},this.setViewport=function(M,F,W,k){M.isVector4?Ot.set(M.x,M.y,M.z,M.w):Ot.set(M,F,W,k),x.viewport(tt.copy(Ot).multiplyScalar(ot).round())},this.getScissor=function(M){return M.copy(re)},this.setScissor=function(M,F,W,k){M.isVector4?re.set(M.x,M.y,M.z,M.w):re.set(M,F,W,k),x.scissor(st.copy(re).multiplyScalar(ot).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(M){x.setScissorTest(Vt=M)},this.setOpaqueSort=function(M){wt=M},this.setTransparentSort=function(M){Nt=M},this.getClearColor=function(M){return M.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor(...arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,W=!0){let k=0;if(M){let G=!1;if(Z!==null){let Mt=Z.texture.format;G=g.has(Mt)}if(G){let Mt=Z.texture.type,bt=p.has(Mt),yt=Xt.getClearColor(),Rt=Xt.getClearAlpha(),Dt=yt.r,Zt=yt.g,Qt=yt.b;bt?(b[0]=Dt,b[1]=Zt,b[2]=Qt,b[3]=Rt,D.clearBufferuiv(D.COLOR,0,b)):(S[0]=Dt,S[1]=Zt,S[2]=Qt,S[3]=Rt,D.clearBufferiv(D.COLOR,0,S))}else k|=D.COLOR_BUFFER_BIT}F&&(k|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),P=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",Sn,!1),Xt.dispose(),_t.dispose(),ft.dispose(),z.dispose(),at.dispose(),K.dispose(),xt.dispose(),Q.dispose(),ht.dispose(),At.dispose(),At.removeEventListener("sessionstart",_h),At.removeEventListener("sessionend",xh),_i.stop()};function Ae(M){M.preventDefault(),er("WebGLRenderer: Context Lost."),C=!0}function ye(){er("WebGLRenderer: Context Restored."),C=!1;let M=O.autoReset,F=Bt.enabled,W=Bt.autoUpdate,k=Bt.needsUpdate,G=Bt.type;Pt(),O.autoReset=M,Bt.enabled=F,Bt.autoUpdate=W,Bt.needsUpdate=k,Bt.type=G}function Sn(M){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function bn(M){let F=M.target;F.removeEventListener("dispose",bn),Af(F)}function Af(M){wf(M),z.remove(M)}function wf(M){let F=z.get(M).programs;F!==void 0&&(F.forEach(function(W){ht.releaseProgram(W)}),M.isShaderMaterial&&ht.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,W,k,G,Mt){F===null&&(F=Tt);let bt=G.isMesh&&G.matrixWorld.determinantAffine()<0,yt=If(M,F,W,k,G);x.setMaterial(k,bt);let Rt=W.index,Dt=1;if(k.wireframe===!0){if(Rt=Y.getWireframeAttribute(W),Rt===void 0)return;Dt=2}let Zt=W.drawRange,Qt=W.attributes.position,Ft=Zt.start*Dt,ge=(Zt.start+Zt.count)*Dt;Mt!==null&&(Ft=Math.max(Ft,Mt.start*Dt),ge=Math.min(ge,(Mt.start+Mt.count)*Dt)),Rt!==null?(Ft=Math.max(Ft,0),ge=Math.min(ge,Rt.count)):Qt!=null&&(Ft=Math.max(Ft,0),ge=Math.min(ge,Qt.count));let Re=ge-Ft;if(Re<0||Re===1/0)return;xt.setup(G,k,yt,W,Rt);let we,_e=dt;if(Rt!==null&&(we=ut.get(Rt),_e=$,_e.setIndex(we)),G.isMesh)k.wireframe===!0?(x.setLineWidth(k.wireframeLinewidth*Wt()),_e.setMode(D.LINES)):_e.setMode(D.TRIANGLES);else if(G.isLine){let We=k.linewidth;We===void 0&&(We=1),x.setLineWidth(We*Wt()),G.isLineSegments?_e.setMode(D.LINES):G.isLineLoop?_e.setMode(D.LINE_LOOP):_e.setMode(D.LINE_STRIP)}else G.isPoints?_e.setMode(D.POINTS):G.isSprite&&_e.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(Kt.get("WEBGL_multi_draw"))_e.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let We=G._multiDrawStarts,St=G._multiDrawCounts,je=G._multiDrawCount,ae=Rt?ut.get(Rt).bytesPerElement:1,on=z.get(k).currentProgram.getUniforms();for(let En=0;En<je;En++)on.setValue(D,"_gl_DrawID",En),_e.render(We[En]/ae,St[En])}else if(G.isInstancedMesh)_e.renderInstances(Ft,Re,G.count);else if(W.isInstancedBufferGeometry){let We=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,St=Math.min(W.instanceCount,We);_e.renderInstances(Ft,Re,St)}else _e.render(Ft,Re)};function gh(M,F,W){M.transparent===!0&&M.side===Ee&&M.forceSinglePass===!1?(M.side=Ge,M.needsUpdate=!0,jr(M,F,W),M.side=Xn,M.needsUpdate=!0,jr(M,F,W),M.side=Ee):jr(M,F,W)}this.compile=function(M,F,W=null){W===null&&(W=M),T=ft.get(W),T.init(F),v.push(T),W.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),M!==W&&M.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights();let k=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let Mt=G.material;if(Mt)if(Array.isArray(Mt))for(let bt=0;bt<Mt.length;bt++){let yt=Mt[bt];gh(yt,W,G),k.add(yt)}else gh(Mt,W,G),k.add(Mt)}),T=v.pop(),k},this.compileAsync=function(M,F,W=null){let k=this.compile(M,F,W);return new Promise(G=>{function Mt(){if(k.forEach(function(bt){z.get(bt).currentProgram.isReady()&&k.delete(bt)}),k.size===0){G(M);return}setTimeout(Mt,10)}Kt.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Pc=null;function Rf(M){Pc&&Pc(M)}function _h(){_i.stop()}function xh(){_i.start()}let _i=new yd;_i.setAnimationLoop(Rf),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(M){Pc=M,At.setAnimationLoop(M),M===null?_i.stop():_i.start()},At.addEventListener("sessionstart",_h),At.addEventListener("sessionend",xh),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;P!==null&&P.renderStart(M,F);let W=At.enabled===!0&&At.isPresenting===!0,k=E!==null&&(Z===null||W)&&E.begin(I,Z);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(F),F=At.getCamera()),M.isScene===!0&&M.onBeforeRender(I,M,F,Z),T=ft.get(M,v.length),T.init(F),T.state.textureUnits=q.getTextureUnits(),v.push(T),gt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),j.setFromProjectionMatrix(gt,_n,F.reversedDepth),nt=this.localClippingEnabled,it=Lt.init(this.clippingPlanes,nt),A=_t.get(M,R.length),A.init(),R.push(A),At.enabled===!0&&At.isPresenting===!0){let bt=I.xr.getDepthSensingMesh();bt!==null&&Lc(bt,F,-1/0,I.sortObjects)}Lc(M,F,0,I.sortObjects),A.finish(),I.sortObjects===!0&&A.sort(wt,Nt,F.reversedDepth),kt=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,kt&&Xt.addToRenderList(A,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),it===!0&&Lt.beginShadows();let G=T.state.shadowsArray;if(Bt.render(G,M,F),it===!0&&Lt.endShadows(),(k&&E.hasRenderPass())===!1){let bt=A.opaque,yt=A.transmissive;if(T.setupLights(),F.isArrayCamera){let Rt=F.cameras;if(yt.length>0)for(let Dt=0,Zt=Rt.length;Dt<Zt;Dt++){let Qt=Rt[Dt];yh(bt,yt,M,Qt)}kt&&Xt.render(M);for(let Dt=0,Zt=Rt.length;Dt<Zt;Dt++){let Qt=Rt[Dt];vh(A,M,Qt,Qt.viewport)}}else yt.length>0&&yh(bt,yt,M,F),kt&&Xt.render(M),vh(A,M,F)}Z!==null&&H===0&&(q.updateMultisampleRenderTarget(Z),q.updateRenderTargetMipmap(Z)),k&&E.end(I),M.isScene===!0&&M.onAfterRender(I,M,F),xt.resetDefaultState(),et=-1,rt=null,v.pop(),v.length>0?(T=v[v.length-1],q.setTextureUnits(T.state.textureUnits),it===!0&&Lt.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?A=R[R.length-1]:A=null,P!==null&&P.renderEnd()};function Lc(M,F,W,k){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLightProbeGrid)T.pushLightProbeGrid(M);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||j.intersectsSprite(M)){k&&Ut.setFromMatrixPosition(M.matrixWorld).applyMatrix4(gt);let bt=K.update(M),yt=M.material;yt.visible&&A.push(M,bt,yt,W,Ut.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||j.intersectsObject(M))){let bt=K.update(M),yt=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ut.copy(M.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Ut.copy(bt.boundingSphere.center)),Ut.applyMatrix4(M.matrixWorld).applyMatrix4(gt)),Array.isArray(yt)){let Rt=bt.groups;for(let Dt=0,Zt=Rt.length;Dt<Zt;Dt++){let Qt=Rt[Dt],Ft=yt[Qt.materialIndex];Ft&&Ft.visible&&A.push(M,bt,Ft,W,Ut.z,Qt)}}else yt.visible&&A.push(M,bt,yt,W,Ut.z,null)}}let Mt=M.children;for(let bt=0,yt=Mt.length;bt<yt;bt++)Lc(Mt[bt],F,W,k)}function vh(M,F,W,k){let{opaque:G,transmissive:Mt,transparent:bt}=M;T.setupLightsView(W),it===!0&&Lt.setGlobalState(I.clippingPlanes,W),k&&x.viewport(tt.copy(k)),G.length>0&&Qr(G,F,W),Mt.length>0&&Qr(Mt,F,W),bt.length>0&&Qr(bt,F,W),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function yh(M,F,W,k){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){let Ft=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new nn(1,1,{generateMipmaps:!0,type:Ft?Nn:Qe,minFilter:fi,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let Mt=T.state.transmissionRenderTarget[k.id],bt=k.viewport||tt;Mt.setSize(bt.z*I.transmissionResolutionScale,bt.w*I.transmissionResolutionScale);let yt=I.getRenderTarget(),Rt=I.getActiveCubeFace(),Dt=I.getActiveMipmapLevel();I.setRenderTarget(Mt),I.getClearColor(ee),$t=I.getClearAlpha(),$t<1&&I.setClearColor(16777215,.5),I.clear(),kt&&Xt.render(W);let Zt=I.toneMapping;I.toneMapping=vn;let Qt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),it===!0&&Lt.setGlobalState(I.clippingPlanes,k),Qr(M,W,k),q.updateMultisampleRenderTarget(Mt),q.updateRenderTargetMipmap(Mt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let ge=0,Re=F.length;ge<Re;ge++){let we=F[ge],{object:_e,geometry:We,material:St,group:je}=we;if(St.side===Ee&&_e.layers.test(k.layers)){let ae=St.side;St.side=Ge,St.needsUpdate=!0,Mh(_e,W,k,We,St,je),St.side=ae,St.needsUpdate=!0,Ft=!0}}Ft===!0&&(q.updateMultisampleRenderTarget(Mt),q.updateRenderTargetMipmap(Mt))}I.setRenderTarget(yt,Rt,Dt),I.setClearColor(ee,$t),Qt!==void 0&&(k.viewport=Qt),I.toneMapping=Zt}function Qr(M,F,W){let k=F.isScene===!0?F.overrideMaterial:null;for(let G=0,Mt=M.length;G<Mt;G++){let bt=M[G],{object:yt,geometry:Rt,group:Dt}=bt,Zt=bt.material;Zt.allowOverride===!0&&k!==null&&(Zt=k),yt.layers.test(W.layers)&&Mh(yt,F,W,Rt,Zt,Dt)}}function Mh(M,F,W,k,G,Mt){M.onBeforeRender(I,F,W,k,G,Mt),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(I,F,W,k,M,Mt),G.transparent===!0&&G.side===Ee&&G.forceSinglePass===!1?(G.side=Ge,G.needsUpdate=!0,I.renderBufferDirect(W,F,k,G,M,Mt),G.side=Xn,G.needsUpdate=!0,I.renderBufferDirect(W,F,k,G,M,Mt),G.side=Ee):I.renderBufferDirect(W,F,k,G,M,Mt),M.onAfterRender(I,F,W,k,G,Mt)}function jr(M,F,W){F.isScene!==!0&&(F=Tt);let k=z.get(M),G=T.state.lights,Mt=T.state.shadowsArray,bt=G.state.version,yt=ht.getParameters(M,G.state,Mt,F,W,T.state.lightProbeGridArray),Rt=ht.getProgramCacheKey(yt),Dt=k.programs;k.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,k.fog=F.fog;let Zt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;k.envMap=at.get(M.envMap||k.environment,Zt),k.envMapRotation=k.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Dt===void 0&&(M.addEventListener("dispose",bn),Dt=new Map,k.programs=Dt);let Qt=Dt.get(Rt);if(Qt!==void 0){if(k.currentProgram===Qt&&k.lightsStateVersion===bt)return bh(M,yt),Qt}else yt.uniforms=ht.getUniforms(M),P!==null&&M.isNodeMaterial&&P.build(M,W,yt),M.onBeforeCompile(yt,I),Qt=ht.acquireProgram(yt,Rt),Dt.set(Rt,Qt),k.uniforms=yt.uniforms;let Ft=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ft.clippingPlanes=Lt.uniform),bh(M,yt),k.needsLights=Lf(M),k.lightsStateVersion=bt,k.needsLights&&(Ft.ambientLightColor.value=G.state.ambient,Ft.lightProbe.value=G.state.probe,Ft.directionalLights.value=G.state.directional,Ft.directionalLightShadows.value=G.state.directionalShadow,Ft.spotLights.value=G.state.spot,Ft.spotLightShadows.value=G.state.spotShadow,Ft.rectAreaLights.value=G.state.rectArea,Ft.ltc_1.value=G.state.rectAreaLTC1,Ft.ltc_2.value=G.state.rectAreaLTC2,Ft.pointLights.value=G.state.point,Ft.pointLightShadows.value=G.state.pointShadow,Ft.hemisphereLights.value=G.state.hemi,Ft.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ft.spotLightMatrix.value=G.state.spotLightMatrix,Ft.spotLightMap.value=G.state.spotLightMap,Ft.pointShadowMatrix.value=G.state.pointShadowMatrix),k.lightProbeGrid=T.state.lightProbeGridArray.length>0,k.currentProgram=Qt,k.uniformsList=null,Qt}function Sh(M){if(M.uniformsList===null){let F=M.currentProgram.getUniforms();M.uniformsList=Us.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function bh(M,F){let W=z.get(M);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Cf(M,F){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(F.matrixWorld);for(let W=0,k=M.length;W<k;W++){let G=M[W];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function If(M,F,W,k,G){F.isScene!==!0&&(F=Tt),q.resetTextureUnits();let Mt=F.fog,bt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?F.environment:null,yt=Z===null?I.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ne.workingColorSpace,Rt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Dt=at.get(k.envMap||bt,Rt),Zt=k.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Qt=!!W.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ft=!!W.morphAttributes.position,ge=!!W.morphAttributes.normal,Re=!!W.morphAttributes.color,we=vn;k.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(we=I.toneMapping);let _e=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,We=_e!==void 0?_e.length:0,St=z.get(k),je=T.state.lights;if(it===!0&&(nt===!0||M!==rt)){let Me=M===rt&&k.id===et;Lt.setState(k,M,Me)}let ae=!1;k.version===St.__version?(St.needsLights&&St.lightsStateVersion!==je.state.version||St.outputColorSpace!==yt||G.isBatchedMesh&&St.batching===!1||!G.isBatchedMesh&&St.batching===!0||G.isBatchedMesh&&St.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&St.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&St.instancing===!1||!G.isInstancedMesh&&St.instancing===!0||G.isSkinnedMesh&&St.skinning===!1||!G.isSkinnedMesh&&St.skinning===!0||G.isInstancedMesh&&St.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&St.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&St.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&St.instancingMorph===!1&&G.morphTexture!==null||St.envMap!==Dt||k.fog===!0&&St.fog!==Mt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==Lt.numPlanes||St.numIntersection!==Lt.numIntersection)||St.vertexAlphas!==Zt||St.vertexTangents!==Qt||St.morphTargets!==Ft||St.morphNormals!==ge||St.morphColors!==Re||St.toneMapping!==we||St.morphTargetsCount!==We||!!St.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ae=!0):(ae=!0,St.__version=k.version);let on=St.currentProgram;ae===!0&&(on=jr(k,F,G),P&&k.isNodeMaterial&&P.onUpdateProgram(k,on,St));let En=!1,$n=!1,Yi=!1,xe=on.getUniforms(),Ce=St.uniforms;if(x.useProgram(on.program)&&(En=!0,$n=!0,Yi=!0),k.id!==et&&(et=k.id,$n=!0),St.needsLights){let Me=Cf(T.state.lightProbeGridArray,G);St.lightProbeGrid!==Me&&(St.lightProbeGrid=Me,$n=!0)}if(En||rt!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),xe.setValue(D,"projectionMatrix",M.projectionMatrix),xe.setValue(D,"viewMatrix",M.matrixWorldInverse);let Qn=xe.map.cameraPosition;Qn!==void 0&&Qn.setValue(D,mt.setFromMatrixPosition(M.matrixWorld)),w.logarithmicDepthBuffer&&xe.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&xe.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),rt!==M&&(rt=M,$n=!0,Yi=!0)}if(St.needsLights&&(je.state.directionalShadowMap.length>0&&xe.setValue(D,"directionalShadowMap",je.state.directionalShadowMap,q),je.state.spotShadowMap.length>0&&xe.setValue(D,"spotShadowMap",je.state.spotShadowMap,q),je.state.pointShadowMap.length>0&&xe.setValue(D,"pointShadowMap",je.state.pointShadowMap,q)),G.isSkinnedMesh){xe.setOptional(D,G,"bindMatrix"),xe.setOptional(D,G,"bindMatrixInverse");let Me=G.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),xe.setValue(D,"boneTexture",Me.boneTexture,q))}G.isBatchedMesh&&(xe.setOptional(D,G,"batchingTexture"),xe.setValue(D,"batchingTexture",G._matricesTexture,q),xe.setOptional(D,G,"batchingIdTexture"),xe.setValue(D,"batchingIdTexture",G._indirectTexture,q),xe.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&xe.setValue(D,"batchingColorTexture",G._colorsTexture,q));let Kn=W.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&N.update(G,W,on),($n||St.receiveShadow!==G.receiveShadow)&&(St.receiveShadow=G.receiveShadow,xe.setValue(D,"receiveShadow",G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&F.environment!==null&&(Ce.envMapIntensity.value=F.environmentIntensity),Ce.dfgLUT!==void 0&&(Ce.dfgLUT.value=Yx()),$n){if(xe.setValue(D,"toneMappingExposure",I.toneMappingExposure),St.needsLights&&Pf(Ce,Yi),Mt&&k.fog===!0&&Ct.refreshFogUniforms(Ce,Mt),Ct.refreshMaterialUniforms(Ce,k,ot,lt,T.state.transmissionRenderTarget[M.id]),St.needsLights&&St.lightProbeGrid){let Me=St.lightProbeGrid;Ce.probesSH.value=Me.texture,Ce.probesMin.value.copy(Me.boundingBox.min),Ce.probesMax.value.copy(Me.boundingBox.max),Ce.probesResolution.value.copy(Me.resolution)}Us.upload(D,Sh(St),Ce,q)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Us.upload(D,Sh(St),Ce,q),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&xe.setValue(D,"center",G.center),xe.setValue(D,"modelViewMatrix",G.modelViewMatrix),xe.setValue(D,"normalMatrix",G.normalMatrix),xe.setValue(D,"modelMatrix",G.matrixWorld),k.uniformsGroups!==void 0){let Me=k.uniformsGroups;for(let Qn=0,Zi=Me.length;Qn<Zi;Qn++){let Eh=Me[Qn];Q.update(Eh,on),Q.bind(Eh,on)}}return on}function Pf(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Lf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(M,F,W){let k=z.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),z.get(M.texture).__webglTexture=F,z.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:W,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){let W=z.get(M);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,W=0){Z=M,B=F,H=W;let k=null,G=!1,Mt=!1;if(M){let yt=z.get(M);if(yt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(D.FRAMEBUFFER,yt.__webglFramebuffer),tt.copy(M.viewport),st.copy(M.scissor),Ht=M.scissorTest,x.viewport(tt),x.scissor(st),x.setScissorTest(Ht),et=-1;return}else if(yt.__webglFramebuffer===void 0)q.setupRenderTarget(M);else if(yt.__hasExternalTextures)q.rebindTextures(M,z.get(M.texture).__webglTexture,z.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Zt=M.depthTexture;if(yt.__boundDepthTexture!==Zt){if(Zt!==null&&z.has(Zt)&&(M.width!==Zt.image.width||M.height!==Zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(M)}}let Rt=M.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(Mt=!0);let Dt=z.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Dt[F])?k=Dt[F][W]:k=Dt[F],G=!0):M.samples>0&&q.useMultisampledRTT(M)===!1?k=z.get(M).__webglMultisampledFramebuffer:Array.isArray(Dt)?k=Dt[W]:k=Dt,tt.copy(M.viewport),st.copy(M.scissor),Ht=M.scissorTest}else tt.copy(Ot).multiplyScalar(ot).floor(),st.copy(re).multiplyScalar(ot).floor(),Ht=Vt;if(W!==0&&(k=X),x.bindFramebuffer(D.FRAMEBUFFER,k)&&x.drawBuffers(M,k),x.viewport(tt),x.scissor(st),x.setScissorTest(Ht),G){let yt=z.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,yt.__webglTexture,W)}else if(Mt){let yt=F;for(let Rt=0;Rt<M.textures.length;Rt++){let Dt=z.get(M.textures[Rt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Rt,Dt.__webglTexture,W,yt)}}else if(M!==null&&W!==0){let yt=z.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,yt.__webglTexture,W)}et=-1},this.readRenderTargetPixels=function(M,F,W,k,G,Mt,bt,yt=0){if(!(M&&M.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=z.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&bt!==void 0&&(Rt=Rt[bt]),Rt){x.bindFramebuffer(D.FRAMEBUFFER,Rt);try{let Dt=M.textures[yt],Zt=Dt.format,Qt=Dt.type;if(M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+yt),!w.textureFormatReadable(Zt)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(Qt)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-k&&W>=0&&W<=M.height-G&&D.readPixels(F,W,k,G,pt.convert(Zt),pt.convert(Qt),Mt)}finally{let Dt=Z!==null?z.get(Z).__webglFramebuffer:null;x.bindFramebuffer(D.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(M,F,W,k,G,Mt,bt,yt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=z.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&bt!==void 0&&(Rt=Rt[bt]),Rt)if(F>=0&&F<=M.width-k&&W>=0&&W<=M.height-G){x.bindFramebuffer(D.FRAMEBUFFER,Rt);let Dt=M.textures[yt],Zt=Dt.format,Qt=Dt.type;if(M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+yt),!w.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ft=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ft),D.bufferData(D.PIXEL_PACK_BUFFER,Mt.byteLength,D.STREAM_READ),D.readPixels(F,W,k,G,pt.convert(Zt),pt.convert(Qt),0);let ge=Z!==null?z.get(Z).__webglFramebuffer:null;x.bindFramebuffer(D.FRAMEBUFFER,ge);let Re=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Gu(D,Re,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ft),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Mt),D.deleteBuffer(Ft),D.deleteSync(Re),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,W=0){let k=Math.pow(2,-W),G=Math.floor(M.image.width*k),Mt=Math.floor(M.image.height*k),bt=F!==null?F.x:0,yt=F!==null?F.y:0;q.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,bt,yt,G,Mt),x.unbindTexture()},this.copyTextureToTexture=function(M,F,W=null,k=null,G=0,Mt=0){let bt,yt,Rt,Dt,Zt,Qt,Ft,ge,Re,we=M.isCompressedTexture?M.mipmaps[Mt]:M.image;if(W!==null)bt=W.max.x-W.min.x,yt=W.max.y-W.min.y,Rt=W.isBox3?W.max.z-W.min.z:1,Dt=W.min.x,Zt=W.min.y,Qt=W.isBox3?W.min.z:0;else{let Ce=Math.pow(2,-G);bt=Math.floor(we.width*Ce),yt=Math.floor(we.height*Ce),M.isDataArrayTexture?Rt=we.depth:M.isData3DTexture?Rt=Math.floor(we.depth*Ce):Rt=1,Dt=0,Zt=0,Qt=0}k!==null?(Ft=k.x,ge=k.y,Re=k.z):(Ft=0,ge=0,Re=0);let _e=pt.convert(F.format),We=pt.convert(F.type),St;F.isData3DTexture?(q.setTexture3D(F,0),St=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(q.setTexture2DArray(F,0),St=D.TEXTURE_2D_ARRAY):(q.setTexture2D(F,0),St=D.TEXTURE_2D),x.activeTexture(D.TEXTURE0),x.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),x.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),x.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);let je=x.getParameter(D.UNPACK_ROW_LENGTH),ae=x.getParameter(D.UNPACK_IMAGE_HEIGHT),on=x.getParameter(D.UNPACK_SKIP_PIXELS),En=x.getParameter(D.UNPACK_SKIP_ROWS),$n=x.getParameter(D.UNPACK_SKIP_IMAGES);x.pixelStorei(D.UNPACK_ROW_LENGTH,we.width),x.pixelStorei(D.UNPACK_IMAGE_HEIGHT,we.height),x.pixelStorei(D.UNPACK_SKIP_PIXELS,Dt),x.pixelStorei(D.UNPACK_SKIP_ROWS,Zt),x.pixelStorei(D.UNPACK_SKIP_IMAGES,Qt);let Yi=M.isDataArrayTexture||M.isData3DTexture,xe=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){let Ce=z.get(M),Kn=z.get(F),Me=z.get(Ce.__renderTarget),Qn=z.get(Kn.__renderTarget);x.bindFramebuffer(D.READ_FRAMEBUFFER,Me.__webglFramebuffer),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let Zi=0;Zi<Rt;Zi++)Yi&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,z.get(M).__webglTexture,G,Qt+Zi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,z.get(F).__webglTexture,Mt,Re+Zi)),D.blitFramebuffer(Dt,Zt,bt,yt,Ft,ge,bt,yt,D.DEPTH_BUFFER_BIT,D.NEAREST);x.bindFramebuffer(D.READ_FRAMEBUFFER,null),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||z.has(M)){let Ce=z.get(M),Kn=z.get(F);x.bindFramebuffer(D.READ_FRAMEBUFFER,V),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,U);for(let Me=0;Me<Rt;Me++)Yi?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ce.__webglTexture,G,Qt+Me):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ce.__webglTexture,G),xe?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Kn.__webglTexture,Mt,Re+Me):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Kn.__webglTexture,Mt),G!==0?D.blitFramebuffer(Dt,Zt,bt,yt,Ft,ge,bt,yt,D.COLOR_BUFFER_BIT,D.NEAREST):xe?D.copyTexSubImage3D(St,Mt,Ft,ge,Re+Me,Dt,Zt,bt,yt):D.copyTexSubImage2D(St,Mt,Ft,ge,Dt,Zt,bt,yt);x.bindFramebuffer(D.READ_FRAMEBUFFER,null),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else xe?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(St,Mt,Ft,ge,Re,bt,yt,Rt,_e,We,we.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(St,Mt,Ft,ge,Re,bt,yt,Rt,_e,we.data):D.texSubImage3D(St,Mt,Ft,ge,Re,bt,yt,Rt,_e,We,we):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Mt,Ft,ge,bt,yt,_e,We,we.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Mt,Ft,ge,we.width,we.height,_e,we.data):D.texSubImage2D(D.TEXTURE_2D,Mt,Ft,ge,bt,yt,_e,We,we);x.pixelStorei(D.UNPACK_ROW_LENGTH,je),x.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ae),x.pixelStorei(D.UNPACK_SKIP_PIXELS,on),x.pixelStorei(D.UNPACK_SKIP_ROWS,En),x.pixelStorei(D.UNPACK_SKIP_IMAGES,$n),Mt===0&&F.generateMipmaps&&D.generateMipmap(St),x.unbindTexture()},this.initRenderTarget=function(M){z.get(M).__webglFramebuffer===void 0&&q.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?q.setTextureCube(M,0):M.isData3DTexture?q.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?q.setTexture2DArray(M,0):q.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){B=0,H=0,Z=null,x.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};async function wd(){if(typeof window<"u"&&window.MCGROT_ASSETS)return window.MCGROT_ASSETS;let[i,t,e,n]=await Promise.all([fetch("assets/manifest.json").then(s=>s.json()),fetch("assets/leith.json").then(s=>s.json()),fetch("assets/catalog.json").then(s=>s.ok?s.json():null).catch(()=>null),fetch("assets/shopfronts/atlas.json").then(s=>s.ok?s.json():null).catch(()=>null)]);return{manifest:i,leith:t,catalog:e,shopfronts:n,images:null,audio:null}}function Jn(i,t){if(i){if(i.images&&i.images[t])return i.images[t];if(i.audio&&i.audio[t])return i.audio[t]}return`assets/${t}`}function oe(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new ve,l=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=i[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=Rd(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][u]);let m=Rd(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function Rd(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ze(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/e;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<e;m++){let _=h.getComponent(u,m);a.setComponent(u+d,m,_)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var qr=(()=>{let i=6221086;return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}})(),Pd=8,oh=2.4,Cd=1.435,xc=.075,Id=.09,Zx=620,Jx=90,$x=34,Kx=.04;function Zr(i,t,e){let n=Math.imul(i,374761393)^Math.imul(t,668265263)^Math.imul(e,2246822519);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function Qx(i,t,e,n){let s=Math.floor(i),r=Math.floor(t),o=i-s,a=t-r,c=o*o*(3-2*o),l=a*a*(3-2*a),h=(_,g)=>Zr((_%e+e)%e,(g%e+e)%e,n),d=h(s,r),u=h(s+1,r),f=h(s,r+1),m=h(s+1,r+1);return d+(u-d)*c+(f+(m-f)*c-(d+(u-d)*c))*l}function ki(i,t,e,n,s){let r=0,o=.5,a=1;for(let c=0;c<n;c++)r+=o*Qx(i*a,t*a,e*a,s+c*17),a*=2,o*=.5;return r}function Ld(i,t){let e=new Ze(i);return e.wrapS=e.wrapT=oi,e.colorSpace=fe,e.anisotropy=16,t&&e.repeat.set(t[0],t[1]),e}function Dd(){let e=document.createElement("canvas");e.width=e.height=512;let n=e.getContext("2d"),s=n.createImageData(512,512),r=s.data;for(let o=0;o<512;o++)for(let a=0;a<512;a++){let c=a/512*8,l=o/512*8,h=44,d=45,u=41,f=ki(c,l,8,4,1)-.5;h+=f*26,d+=f*26,u+=f*22;let m=ki(c*.5,l*.5,Math.max(1,4),2,7);if(m>.6){let A=Math.min(1,(m-.6)*6);h+=(26-h)*.55*A,d+=(26-d)*.55*A,u+=(25-u)*.55*A}let _=Zr(a,o,99),g=_>.86?(_-.86)*300:_<.1?-_*90:0;h+=g,d+=g,u+=g*.9;let p=c*1.6+ki(c*3,l*3,32,2,55)*1.4,b=l*1.6+ki(c*3+9,l*3+9,32,2,71)*1.4,S=Math.abs(ki(p,b,16,3,21)-.5);if(S<.012){let A=1-S/.012;h-=15*A,d-=15*A,u-=14*A}let y=(o*512+a)*4;r[y]=Math.max(0,Math.min(255,h)),r[y+1]=Math.max(0,Math.min(255,d)),r[y+2]=Math.max(0,Math.min(255,u)),r[y+3]=255}return n.putImageData(s,0,0),Ld(e)}function Nd(){let n=document.createElement("canvas");n.width=n.height=512;let s=n.getContext("2d"),r=s.createImageData(512,512),o=r.data,a=512/4,c=3;for(let l=0;l<512;l++)for(let h=0;h<512;h++){let d=Math.floor(h/a),u=Math.floor(l/a),f=h-d*a,m=l-u*a,_=f<c||m<c||f>a-c||m>a-c,g=(Zr(d,u,5)-.5)*18,p=78+g,b=77+g,S=71+g,y=h/512*8,A=l/512*8,T=ki(y,A,8,4,3)-.5;p+=T*34,b+=T*34,S+=T*30,_&&(p*=.52,b*=.56,S*=.48);let R=Zr(h,l,41),v=R>.9?(R-.9)*160:0;p+=v,b+=v,S+=v;let E=(l*512+h)*4;o[E]=Math.max(0,Math.min(255,p)),o[E+1]=Math.max(0,Math.min(255,b)),o[E+2]=Math.max(0,Math.min(255,S)),o[E+3]=255}return s.putImageData(r,0,0),Ld(n)}function Ud(i,t){let n=document.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d"),r=s.createImageData(256,256),o=r.data,a=256/2;for(let l=0;l<256;l++)for(let h=0;h<256;h++){let d=(h-a)/a,u=(l-a)/a,f=Math.atan2(u,d),m=Math.hypot(d,u),_=.7+.26*ki(Math.cos(f)*2+4,Math.sin(f)*2+4,8,3,i),[g,p,b,S]=t(m/_,h,l),y=(l*256+h)*4;o[y]=Math.max(0,Math.min(255,g)),o[y+1]=Math.max(0,Math.min(255,p)),o[y+2]=Math.max(0,Math.min(255,b)),o[y+3]=Math.max(0,Math.min(255,S))}s.putImageData(r,0,0);let c=new Ze(n);return c.colorSpace=fe,c.anisotropy=16,c}function rh(i,t,e){return[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e]}function jx(){let i=[10,10,9],t=[40,39,35],e=[104,100,88];return Ud(11,(n,s,r)=>{let o=Zr(s,r,63),a;n<.72?a=rh(i,t,Yr(0,.72,n)):(a=rh(t,e,Yr(.72,.97,n)),a=a.map(l=>l+(o-.5)*26));let c=(1-Yr(.9,1,n))*255;return[a[0],a[1],a[2],c]})}function tv(){let i=[104,110,96],t=[52,54,48];return Ud(23,e=>{let n=rh(i,t,Yr(.35,1,e)),s=(1-Yr(.86,1,e))*255;return[n[0],n[1],n[2],s]})}function Yr(i,t,e){let n=Math.max(0,Math.min(1,(e-i)/(t-i||1e-6)));return n*n*(3-2*n)}function Fd(i,t){let e=i.streetLine||[];if(e.length<2)return{group:new pe};let n=new pe;return t.add(n),ev(e,n),nv(e,n),{group:n}}function Od(i,t){let e=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,h=Math.hypot(c,l);if(e+h>=t){let d=h>0?(t-e)/h:0;return{point:[s+c*d,r+l*d],tangent:[c/(h||1),l/(h||1)]}}e+=h}return null}function Bd(i){let t=0;for(let e=1;e<i.length;e++)t+=Math.hypot(i[e][0]-i[e-1][0],i[e][1]-i[e-1][1]);return t}function ev(i,t){let e=Math.min(Zx,Bd(i)),n=3,s=[],r=[[-xc/2,0],[-xc/2,Id],[xc/2,Id],[xc/2,0]];for(let c of[-1,1]){let l=[],h=[],d=0;for(let m=0;m<=e;m+=n){let _=Od(i,m);if(!_)break;let[g,p]=_.tangent,b=-p,S=g,y=_.point[0]+b*c*(Cd/2),A=_.point[1]+S*c*(Cd/2);for(let[T,R]of r)l.push(y+b*T,R,A+S*T);d++}if(d<2)continue;let u=r.length;for(let m=0;m<d-1;m++)for(let _=0;_<u-1;_++){let g=m*u+_,p=m*u+_+1,b=(m+1)*u+_,S=(m+1)*u+_+1;h.push(g,b,p,p,b,S)}let f=new ve;f.setAttribute("position",new Yt(l,3)),f.setIndex(h),f.computeVertexNormals(),s.push(f)}if(!s.length)return;let o=oe(s,!1),a=new ie({color:4142124,side:Ee});t.add(new Gt(o,a))}function nv(i,t){let e=Bd(i),n=jx(),s=tv(),r=(o,a,c,l,h,d)=>{let u=[];for(let m=0;m<a;m++){let _=20+qr()*Math.max(1,e-40),g=Od(i,_);if(!g)continue;let[p,b]=g.tangent,S=-b,y=p,A=(qr()*2-1)*c,T=g.point[0]+S*A,R=g.point[1]+y*A,v=l+qr()*(h-l),E=new Oe(v,v*(.6+qr()*.7));E.rotateX(-Math.PI/2),E.rotateY(qr()*Math.PI*2),E.translate(T,Kx,R),u.push(E)}if(!u.length)return;let f=new ie({map:o,transparent:!0,opacity:d,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});t.add(new Gt(oe(u,!1),f))};r(n,Jx,6.2,.7,2.4,.92),r(s,$x,6.2,1.2,3.6,.5)}var Jr=7,iv=3,zd=Jr+iv,sv=.03,rv=3.2,ov=2,av=4536872,cv=-.06,lv=4870466,Hd=[9078112,7039843,8016448,5592655,7630666,7232847,6249034,8153690];function Gd(i){let t=new pe,e=hv(i.streetPaths);e&&t.add(e);let n=pv(i.buildings);n&&t.add(n),t.add(xv(i)),vv(t);let s=dv(i.streetPaths),r=new sr(lv,.0095);return{group:t,streetLine:s,nearestStreetPoint:fv(s),fog:r}}function hv(i){let t=[],e=[];for(let s of i){if(s.length<2)continue;let r=uv(s);r&&(t.push(r.road),e.push(r.paving))}if(t.length===0)return null;let n=new pe;return n.position.y=sv,n.add(new Gt(oe(t,!1),new ie({map:Dd()}))),n.add(new Gt(oe(e,!1),new ie({map:Nd()}))),n}function uv(i){let t=i.length,e=[],n=[],s=0;for(let o=0;o<t;o++){let a=i[Math.max(0,o-1)],c=i[Math.min(t-1,o+1)],l=c[0]-a[0],h=c[1]-a[1],d=Math.hypot(l,h)||1;e.push([-h/d,l/d]),o>0&&(s+=Math.hypot(i[o][0]-i[o-1][0],i[o][1]-i[o-1][1])),n.push(s)}let r=(o,a,c)=>{let l=[],h=[],d=[],u=Math.abs(a-o);for(let m=0;m<t;m++){let[_,g]=i[m],[p,b]=e[m],S=n[m]/c;l.push(_+p*o,0,g+b*o),l.push(_+p*a,0,g+b*a),h.push(0,S,u/c,S)}for(let m=0;m<t-1;m++){let _=m*2,g=m*2+1,p=(m+1)*2,b=(m+1)*2+1;d.push(_,g,b,_,b,p)}let f=new ve;return f.setAttribute("position",new Yt(l,3)),f.setAttribute("uv",new Yt(h,2)),f.setIndex(d),f.computeVertexNormals(),f};return{road:r(-Jr,Jr,Pd),paving:oe([r(-zd,-Jr,oh),r(Jr,zd,oh)],!1)}}function dv(i){let t=[],e=[],n=[];function s(d){for(let u=0;u<t.length;u++){let f=t[u].x-d[0],m=t[u].z-d[1];if(Math.hypot(f,m)<ov)return u}return t.push({x:d[0],z:d[1]}),t.length-1}i.forEach((d,u)=>{if(d.length<2)return;let f=s(d[0]),m=s(d[d.length-1]);e[u]=[f,m],(n[f]??=[]).push({segIdx:u,otherNode:m}),(n[m]??=[]).push({segIdx:u,otherNode:f})});let r=new Set;function o(d){let u=[[t[d].x,t[d].z]],f=d;for(;;){let m=(n[f]||[]).filter(y=>!r.has(y.segIdx));if(m.length===0)break;let{segIdx:_,otherNode:g}=m[0];r.add(_);let p=i[_],[b]=e[_],S=b===f?p:[...p].reverse();for(let y=1;y<S.length;y++)u.push(S[y]);f=g}return u}function a(d){let u=0;for(let f=1;f<d.length;f++)u+=Math.hypot(d[f][0]-d[f-1][0],d[f][1]-d[f-1][1]);return u}let c=[],l=t.map((d,u)=>u).filter(d=>(n[d]||[]).length!==2);for(let d of l){let u=r.size,f=o(d);r.size>u&&c.push(f)}for(let d=0;d<t.length;d++)(n[d]||[]).some(f=>!r.has(f.segIdx))&&c.push(o(d));c.sort((d,u)=>a(u)-a(d));let h=c[0]||[];return h.length>1&&h[0][1]>h[h.length-1][1]&&h.reverse(),h}function fv(i){return function(e,n){let s=null,r=1/0,o=null;for(let a=0;a<i.length-1;a++){let[c,l]=i[a],[h,d]=i[a+1],u=h-c,f=d-l,m=u*u+f*f,_=m>0?((e-c)*u+(n-l)*f)/m:0;_=Math.max(0,Math.min(1,_));let g=c+_*u,p=l+_*f,b=Math.hypot(e-g,n-p);if(b<r){r=b,s=[g,p];let S=Math.sqrt(m);o=S>0?[u/S,f/S]:[0,1]}}return{point:s,distance:r,tangent:o}}}function pv(i){let t=[],e=0;if(i.forEach((r,o)=>{let a=mv(r,o);a?t.push(a):e++}),t.length===0)return null;e>0&&console.warn(`[world] skipped ${e}/${i.length} buildings with bad footprints`);let n=oe(t,!1),s=new ie({vertexColors:!0,flatShading:!0});return new Gt(n,s)}function mv(i,t){let{footprint:e,levels:n}=i;if(!e||e.length<3)return null;let s=Math.max(1,n||1)*rv;try{let r=new ws;r.moveTo(e[0][0],-e[0][1]);for(let h=1;h<e.length;h++)r.lineTo(e[h][0],-e[h][1]);r.closePath();let o=new Sr(r,{depth:s,bevelEnabled:!1,curveSegments:1});o.rotateX(-Math.PI/2);let a=gv(t,i),c=o.attributes.position.count,l=new Float32Array(c*3);for(let h=0;h<c;h++)l[h*3]=a.r,l[h*3+1]=a.g,l[h*3+2]=a.b;return o.setAttribute("color",new Yt(l,3)),o.deleteAttribute("uv"),o}catch{return null}}function gv(i,t){let e=Math.abs(_v(`${i}:${t.footprint[0][0]}:${t.footprint[0][1]}`)),n=new It(Hd[e%Hd.length]),s={h:0,s:0,l:0};n.getHSL(s);let r=(e%17/17-.5)*.12,o=new It;return o.setHSL(s.h,s.s,Math.min(.85,Math.max(.08,s.l+r))),o}function _v(i){let t=0;for(let e=0;e<i.length;e++)t=(t<<5)-t+i.charCodeAt(e),t|=0;return t}function xv(i){let t=1/0,e=-1/0,n=1/0,s=-1/0;for(let f of i.buildings)for(let[m,_]of f.footprint)m<t&&(t=m),m>e&&(e=m),_<n&&(n=_),_>s&&(s=_);let r=400,o=e-t+r*2,a=s-n+r*2,c=(t+e)/2,l=(n+s)/2,h=new Oe(o,a);h.rotateX(-Math.PI/2);let d=new ie({color:av}),u=new Gt(h,d);return u.position.set(c,cv,l),u}function vv(i){let t=new Er(9147296,3814180,3.9);i.add(t);let e=new Ar(13621480,1.15);e.position.set(-200,300,150),e.castShadow=!1,i.add(e);let n=new wr(4999224,1.4);i.add(n)}var yv=16747082,kd=18,Mv=5,Sv=6.5;function Vd(i){let t=new Oi(yv,kd,Sv,2);t.position.set(.15,-.15,.1),i.add(t);function e(n){let s=Math.sin(n*11.3)*.5+Math.sin(n*27.1)*.3+Math.sin(n*4.7)*.2;t.intensity=kd+s*Mv*.3333}return{light:t,update:e}}var vc=Math.PI/2-.05,yc={KeyW:"forward",ArrowUp:"forward",KeyS:"backward",ArrowDown:"backward",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right"};function Xd(i,t,{nearestStreetPoint:e,spawn:n}){let s=n.yaw||0,r=0;i.position.set(n.x,1.7,n.z),i.rotation.order="YXZ",u();let o=new Set,a=!1,c=0,l=0,h=!1,d=!0;function u(){i.rotation.set(r,s,0)}function f(R){d&&yc[R.code]&&(o.add(yc[R.code]),R.preventDefault())}function m(R){yc[R.code]&&o.delete(yc[R.code])}function _(R){if(d&&(a=!0,c=R.clientX,l=R.clientY,t.setPointerCapture?.(R.pointerId),!h&&t.requestPointerLock))try{let v=t.requestPointerLock();v&&typeof v.catch=="function"&&v.catch(()=>{})}catch{}}function g(R){if(h){s-=(R.movementX||0)*.0025,r-=(R.movementY||0)*.0025,r=Wd(r,-vc,vc),u();return}if(!a)return;let v=R.clientX-c,E=R.clientY-l;c=R.clientX,l=R.clientY,s-=v*.0035,r-=E*.0035,r=Wd(r,-vc,vc),u()}function p(R){a=!1,t.releasePointerCapture?.(R.pointerId)}function b(){h=document.pointerLockElement===t}window.addEventListener("keydown",f),window.addEventListener("keyup",m),t.addEventListener("pointerdown",_),window.addEventListener("pointermove",g),window.addEventListener("pointerup",p),document.addEventListener("pointerlockchange",b);function S(R){d=!!R,d||(o.clear(),a=!1)}function y(R){d&&(R?o.add("forward"):o.delete("forward"))}function A(R){if(!d)return;let v=0,E=0;if(o.has("forward")&&(E-=1),o.has("backward")&&(E+=1),o.has("left")&&(v-=1),o.has("right")&&(v+=1),v!==0||E!==0){let I=Math.hypot(v,E);v/=I,E/=I;let C=Math.sin(s),P=Math.cos(s),X=-C,V=-P,U=P,B=-C,H=(X*-E+U*v)*14*R,Z=(V*-E+B*v)*14*R,et=i.position.x+H,rt=i.position.z+Z,{point:tt,distance:st}=e(et,rt);if(tt&&st>16){let Ht=16/st;et=tt[0]+(et-tt[0])*Ht,rt=tt[1]+(rt-tt[1])*Ht}i.position.x=et,i.position.z=rt}}function T(){window.removeEventListener("keydown",f),window.removeEventListener("keyup",m),t.removeEventListener("pointerdown",_),window.removeEventListener("pointermove",g),window.removeEventListener("pointerup",p),document.removeEventListener("pointerlockchange",b)}return{update:A,dispose:T,setEnabled:S,setForward:y}}function Wd(i,t,e){return Math.max(t,Math.min(e,i))}var qd=6,Yd=40,bv=60,Ev=34,Zd=[4867638,4276026,5525567,3882292,5195578,3749420,4737602,5919040],Tv=new Ui;function Jd(i,t){return Tv.load(i,e=>{e.colorSpace=fe,t&&t(e)})}function $d(i,t,e,n){let s=i.catalog&&Array.isArray(i.catalog.comics)?i.catalog.comics.filter(m=>m.npc):i.manifest.comics||[],r=t.streetLine||[],o=[],a=new Map,c=(m,_)=>{m&&(a.has(m)||a.set(m,[]),a.get(m).push(_))},l=Cv(r),h=Math.max(1,l-Yd-bv),d=s.length>1?h/(s.length-1):0;s.forEach((m,_)=>{let g=Yd+_*d,p=_%2===0?1:-1,b=Iv(r,g);if(!b)return;let[S,y]=b.tangent,A=-y,T=S,R=b.point[0]+A*qd*p,v=b.point[1]+T*qd*p,E=b.point[0]-R,I=b.point[1]-v,C=Math.atan2(E,I),P=Av(i,m,Zd[_%Zd.length],c);P.group.position.set(R,0,v),P.group.rotation.y=C,P.baseY=C,P.phase=_*2.1,e.add(P.group),o.push(P)});for(let[m,_]of a)Jd(Jn(i,m),g=>{for(let p of _)p.map=g,p.color.set(16777215),p.needsUpdate=!0});let u=new L;function f(m,_){let g=n?n.position:null;for(let p=0;p<o.length;p++){let b=o[p];if(b.tick(_),g&&!b.comicLoaded){let S=b.group.position;Math.hypot(g.x-S.x,g.z-S.z)<Ev&&b.loadComic()}}}return{npcs:o,update:f}}function Av(i,t,e,n){let s=t.npc.build||{height:1.9,girth:1,headScale:1.5},r=s.height,o=s.girth,a=s.headScale,c=new pe,l=new ie({color:e,flatShading:!0}),h=new ie({color:1381391,flatShading:!0}),d=.12,u=r*.3,f=.52*o,m=.34*o,_=r*.48,g=.34*a,p=d+u,b=p+_,S=b+g*.5+.02,y=S+g*.5,A=f*.24,T=[],R=[];for(let tt of[-1,1]){let st=new ce(f*.4,d,m*1.5);st.translate(tt*A,d*.5,m*.2),R.push(st)}for(let tt of[-1,1]){let st=new ce(f*.36,u,m*.75);st.translate(tt*A,d+u*.5,0),T.push(st)}{let tt=new ce(f,_,m);tt.translate(0,p+_*.5,0),T.push(tt)}let v=b-_*.14,E=_*.62;for(let tt of[-1,1]){let st=new ce(.13,E,.13);st.rotateX(-1.15),st.rotateZ(tt*.25),st.translate(tt*(f*.5+.02),v-E*.28,m*.5+.06),T.push(st)}let I=new Gt(oe(T),l),C=new Gt(oe(R),h);c.add(I,C);let P=new ie({color:e,flatShading:!0}),X=new cn({color:9077874});n(t.npc.face,X);let V=[P,P,P,P,X,P],U=new Gt(new ce(g,g,g*.85),V);U.position.set(0,S,0),c.add(U);let B=_*.55,H=new cn({color:2762786,side:Ee}),Z=new Gt(new Oe(1,1),H);Z.position.set(0,p+_*.55,m*.5+.17),Z.scale.set(B*.7,B,1),c.add(Z);let et=wv(t.npc.name,t.npc.blurb);et.position.set(0,y+.42,0),c.add(et);let rt={group:c,head:U,comicMesh:Z,comic:t,name:t.npc.name,blurb:t.npc.blurb,voice:null,baseY:0,phase:0,speaking:!1,comicLoaded:!1,loadComic(){rt.comicLoaded||(rt.comicLoaded=!0,Jd(Jn(i,t.image),tt=>{H.map=tt,H.color.set(16777215),H.needsUpdate=!0;let st=tt.image;st&&st.width&&st.height&&Z.scale.set(B*(st.width/st.height),B,1)}))},setSpeaking(tt){rt.speaking=!!tt,rt.speaking||U.rotation.set(0,0,0)},tick(tt){if(c.rotation.z=Math.sin(tt*.6+rt.phase)*.01,c.rotation.y=rt.baseY+Math.sin(tt*.4+rt.phase)*.008,rt.speaking){let st=tt*25+rt.phase;U.rotation.y=Math.sin(st)*.09,U.rotation.x=(Math.sin(st*.5)+1)*.05}}};return rt}function wv(i,t){let e=document.createElement("canvas");e.width=512,e.height=160;let n=e.getContext("2d");n.fillStyle="rgba(20, 22, 16, 0.82)",Rv(n,6,6,e.width-12,e.height-12,14),n.fill(),n.lineWidth=2,n.strokeStyle="rgba(120, 116, 92, 0.6)",n.stroke(),n.textAlign="center",n.fillStyle="#d8d4c0",n.font='bold 44px "Courier New", monospace',n.fillText(i,e.width/2,68,e.width-40),n.fillStyle="#a9a48c",n.font='italic 30px "Courier New", monospace',n.fillText(t,e.width/2,116,e.width-36);let s=new Ze(e);s.colorSpace=fe;let r=new ai({map:s,transparent:!0,depthTest:!0}),o=new Li(r);return o.scale.set(2.4,.75,1),o}function Rv(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function Cv(i){let t=0;for(let e=0;e<i.length-1;e++)t+=Math.hypot(i[e+1][0]-i[e][0],i[e+1][1]-i[e][1]);return t}function Iv(i,t){if(!i||i.length<2)return null;let e=0;for(let c=0;c<i.length-1;c++){let[l,h]=i[c],[d,u]=i[c+1],f=d-l,m=u-h,_=Math.hypot(f,m);if(e+_>=t){let g=_>0?(t-e)/_:0,p=_||1;return{point:[l+f*g,h+m*g],tangent:[f/p,m/p]}}e+=_}let n=i[i.length-1],s=i[i.length-2],r=n[0]-s[0],o=n[1]-s[1],a=Math.hypot(r,o)||1;return{point:[n[0],n[1]],tangent:[r/a,o/a]}}var Pv=25,Lv=2,Dv=.35,Nv=-.3,ah=3.2,Uv=6,Fv=.05,Mc=.12,Sc=2e4,Ov=9,Bv=.88;function Kd(i,t,e){let n=i&&i.shopfronts,s=i&&i.leith&&i.leith.buildings||[],r=t&&t.nearestStreetPoint;if(!n||!n.count||!s.length||!r)return{group:null,count:0};let{cols:o,rows:a,tileW:c=512,tileH:l=256,count:h}=n,d=Array.from({length:h},(V,U)=>U),u=n.ground&&n.ground.length?n.ground:d,f=n.upper&&n.upper.length?n.upper:u,m=n.corner&&n.corner.length?n.corner:u,_=new Map;for(let V of f){let U=n.tiles&&n.tiles[V]&&n.tiles[V].slug||String(V);_.has(U)||_.set(U,[]),_.get(U).push(V)}let g=[..._.keys()],p=o*c,b=a*l,S=.5/p,y=.5/b,A=ah*(c/l),T=[],R=[],v=[],E=0;for(let V=0;V<s.length&&E<Sc;V++){let U=s[V],B=U&&U.footprint;if(!B||B.length<3)continue;let H=Math.max(1,U.levels||1),Z=Math.min(Uv,H),et=g.length?_.get(g[ch(V,0,7,g.length)]):f,rt=0,tt=0;for(let st of B)rt+=st[0],tt+=st[1];rt/=B.length,tt/=B.length;for(let st=0;st<B.length&&E<Sc;st++){let Ht=B[st],ee=B[(st+1)%B.length],$t=ee[0]-Ht[0],J=ee[1]-Ht[1],lt=Math.hypot($t,J);if(lt<Lv)continue;let ot=(Ht[0]+ee[0])/2,wt=(Ht[1]+ee[1])/2,Nt=r(ot,wt);if(!Nt||!Nt.point)continue;let Ot=r(Ht[0],Ht[1]),re=r(ee[0],ee[1]);if(Math.min(Nt.distance,Ot?Ot.distance:1/0,re?re.distance:1/0)>Pv)continue;let j=1/lt,it=-J*j,nt=$t*j,gt=Ht[0],mt=Ht[1],Ut=$t,Tt=J;it*(ot-rt)+nt*(wt-tt)<0&&(it=-it,nt=-nt,gt=ee[0],mt=ee[1],Ut=-$t,Tt=-J);let kt=Nt.point[0]-ot,Wt=Nt.point[1]-wt,D=Math.hypot(kt,Wt)||1,le=(it*kt+nt*Wt)/D;if(le<Nv)continue;let Kt=le>=Dv,w=!1;Nt.tangent&&lt<=Ov&&(w=Math.abs(Ut*j*Nt.tangent[0]+Tt*j*Nt.tangent[1])<Bv);let x=Math.max(1,Math.round(lt/A));for(let O=0;O<x&&E<Sc;O++){let z=O/x,q=(O+1)/x,at=gt+Ut*z+it*Mc,ut=mt+Tt*z+nt*Mc,Y=gt+Ut*q+it*Mc,K=mt+Tt*q+nt*Mc;for(let ht=0;ht<Z&&E<Sc;ht++){let Ct=ht===0&&Kt,_t=w?m:u,ft=Ct?_t[ch(V,st*31+O,0,_t.length)]:et[ch(V,0,ht,et.length)],Lt=ft%o,Bt=Math.floor(ft/o),Xt=Lt/o+S,N=(Lt+1)/o-S,dt=1-(Bt+1)/a+y,$=1-Bt/a-y,pt=ht===0?Fv:ht*ah,xt=(ht+1)*ah,Q=E*4;T.push(at,pt,ut,Y,pt,K,Y,xt,K,at,xt,ut),R.push(Xt,dt,N,dt,N,$,Xt,$),v.push(Q,Q+1,Q+2,Q,Q+2,Q+3),E++}}}}if(E===0)return{group:null,count:0};let I=new ve;I.setAttribute("position",new Yt(T,3)),I.setAttribute("uv",new Yt(R,2)),I.setIndex(v),I.computeBoundingSphere();let C=new Ui().load(Jn(i,"shopfronts/atlas.jpg"));C.colorSpace=fe,C.anisotropy=4;let P=new cn({map:C,side:Ee,fog:!0}),X=new Gt(I,P);return X.name="shopfronts",e.add(X),{group:X,count:E}}function ch(i,t,e,n){let s=i*73856093^t*19349663^(e+1)*83492791;return s=Math.imul(s^s>>>13,2246822507),s^=s>>>16,(s>>>0)%n}var zv=18,Qd=23,Hv=6,kv=2.5,Gv=22,Vv=1.4;function jd({camera:i,npcs:t,assets:e,onActiveChange:n}){let s=new Ir;i.add(s);let r=new Cr,o=new Map,a=!1,c=!1,l=0;function h(g,p){let b=o.get(g);if(!(b==="missing"||b==="loading")){if(b){p(b);return}o.set(g,"loading"),r.load(Jn(e,g),S=>{o.set(g,S),p(S)},void 0,()=>{o.set(g,"missing")})}}function d(g){if(g.voice)return g.voice;let p=new Pr(s);return p.setRefDistance(kv),p.setMaxDistance(Gv),p.setDistanceModel("inverse"),p.setRolloffFactor(Vv),p.setLoop(!0),g.group.add(p),g.voice=p,p}function u(g,p){let b=g.comic.audio;b&&h(b,S=>{let y=d(g);if(y.buffer!==S&&y.setBuffer(S),y.isPlaying){if(!p)return;y.stop()}y.offset=p?0:Math.random()*Math.max(0,S.duration-3),y.play(),g.setSpeaking(!0)})}function f(g){g.voice&&g.voice.isPlaying&&(g.voice.stop(),g.setSpeaking(!1))}function m(){let g=0;for(let p of t)p.voice&&p.voice.isPlaying&&g++;g!==l&&(l=g,n&&n(g))}function _(){if(!a||c)return;let g=i.position,p=[];for(let S of t){if(!S.comic.audio)continue;let y=S.group.position,A=Math.hypot(g.x-y.x,g.z-y.z);A<Qd&&p.push({npc:S,d:A})}p.sort((S,y)=>S.d-y.d);let b=new Set;for(let{npc:S,d:y}of p){if(b.size>=Hv)break;let A=S.voice&&S.voice.isPlaying;(y<zv||A&&y<Qd)&&b.add(S)}for(let S of t)S.voice&&S.voice.isPlaying&&!b.has(S)&&f(S);for(let S of b)S.voice&&S.voice.isPlaying||u(S,!1);m()}return{listener:s,update:_,restart(g){u(g,!0),m()},togglePause(g){let p=g.voice;return!p||!p.buffer?(u(g,!0),!0):p.isPlaying?(p.pause(),g.setSpeaking(!1),m(),!1):(p.play(),g.setSpeaking(!0),m(),!0)},setOverlayOpen(g){c=!!g},isEnabled(){return a},setEnabled(g){a=!!g},resume(){a=!0;let g=s.context;g&&g.state==="suspended"&&g.resume()}}}var Wv=8;function tf({assets:i,npcs:t,camera:e,controls:n,proximityAudio:s,onReadingChange:r}){let o=document.getElementById("npc-prompt"),a=document.getElementById("npc-prompt-label"),c=document.getElementById("comic-overlay"),l=document.getElementById("comic-title"),h=document.getElementById("comic-image"),d=document.getElementById("comic-meta"),u=document.getElementById("comic-close"),f=document.getElementById("comic-playpause"),m=null,_=null;function g(P){f&&(f.textContent=P?"\u23F8":"\u25B6")}function p(P){r&&r(!!P)}function b(P){o&&(a&&(a.textContent=`[E] Hear ${P.name} read`),o.style.display="block")}function S(){o&&(o.style.display="none")}function y(P){!P||_||(_=P,S(),l&&(l.textContent=P.comic.title),d&&(d.textContent=`${P.name} \u2014 ${P.blurb}`),h&&(h.src=Jn(i,P.comic.image),h.alt=P.comic.title,h.parentElement.scrollTop=0),c&&(c.style.display="flex"),n.setEnabled(!1),s.setOverlayOpen(!0),s.restart(P),g(!0),p(!0))}function A(){_&&(g(!1),p(!1),c&&(c.style.display="none"),n.setEnabled(!0),s.setOverlayOpen(!1),_=null)}function T(){if(!_)return;let P=s.togglePause(_);g(P),p(P)}function R(P){if(P.code==="Escape"){_&&A();return}P.code==="KeyE"&&!_&&m&&y(m)}function v(){!_&&m&&y(m)}function E(P){P.target===c&&A()}window.addEventListener("keydown",R),o&&o.addEventListener("click",v),c&&c.addEventListener("click",E),u&&u.addEventListener("click",A),f&&f.addEventListener("click",T);function I(){if(_)return;let P=e.position.x,X=e.position.z,V=null,U=Wv;for(let B=0;B<t.length;B++){let H=t[B].group.position,Z=Math.hypot(P-H.x,X-H.z);Z<U&&(U=Z,V=t[B])}V!==m&&(m=V,m?b(m):S())}function C(){window.removeEventListener("keydown",R),o&&o.removeEventListener("click",v),c&&c.removeEventListener("click",E),u&&u.removeEventListener("click",A),f&&f.removeEventListener("click",T)}return{update:I,dispose:C}}var ue=(()=>{let i=12648430;return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}})(),Xv=35,bc=11,qv=.9,Yv=90,ef=[7027238,8013360,6042916,9065014,5189153],Zv=22,Jv=8,$v=3,nf=.06,Kv=.16,Tc=4,of=14,sf=55;function af(i,t){let e=i.streetLine||[],n=new pe;t.add(n);let s=Qv(e,n);iy(e,n),sy(e,n);let r=ry(e,n),o=ty(s,n),a={group:n,onArcFlash:null};return a.update=function(l,h){oy(r,l,h),ny(o,h,()=>{a.onArcFlash&&a.onArcFlash()})},a}function Ac(i,t){if(!i||i.length<2||t<0)return null;let e=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,h=Math.hypot(c,l);if(e+h>=t){let d=h>0?(t-e)/h:0,u=h||1;return{point:[s+c*d,r+l*d],tangent:[c/u,l/u]}}e+=h}return null}function lh(i){let t=0;for(let e=1;e<i.length;e++)t+=Math.hypot(i[e][0]-i[e-1][0],i[e][1]-i[e-1][1]);return t}function Ec(i,t){let e=new It(t),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;i.setAttribute("color",new Yt(s,3))}function Qv(i,t){let e=lh(i),n=[],s=[],r=[];for(let o=12;o<e-5;o+=Xv){let a=Ac(i,o);if(!a)break;let[c,l]=a.tangent,h=-l,d=c,u=new L(a.point[0]+h*bc,0,a.point[1]+d*bc),f=new L(a.point[0]-h*bc,0,a.point[1]-d*bc),m=7.5+ue()*.6,_=m-.4;n.push(rf(u,m)),n.push(rf(f,m)),s.push(jv(u,f,_)),r.push({position:u.clone().setY(_)},{position:f.clone().setY(_)})}if(n.length){let o=oe(n,!1),a=new ie({color:3814700,flatShading:!0});t.add(new Gt(o,a))}if(s.length){let o=oe(s,!1),a=new Es({color:1841685});t.add(new ur(o,a))}return r}function rf(i,t){let e=new ln(.09,.13,t,6);return e.translate(i.x,t/2,i.z),e}function jv(i,t,e){let s=[];for(let a=0;a<=8;a++){let c=a/8,l=Ds.lerp(i.x,t.x,c),h=Ds.lerp(i.z,t.z,c),d=4*c*(1-c)*qv;s.push(l,e-d,h)}let r=[];for(let a=0;a<8;a++)r.push(s[a*3],s[a*3+1],s[a*3+2]),r.push(s[(a+1)*3],s[(a+1)*3+1],s[(a+1)*3+2]);let o=new ve;return o.setAttribute("position",new Yt(r,3)),o}function ty(i,t){if(!i.length)return[];let e=Math.min($v,i.length),n=ey(i.length,e),s=[];for(let r of n){let o=i[r],a=new Oi(10473727,0,14,2);a.position.copy(o.position),t.add(a);let c=new cn({color:14676735,transparent:!0,opacity:0,depthWrite:!1,blending:Dr}),l=new Gt(new Ni(.12,6,6),c);l.position.copy(o.position),t.add(l),s.push({light:a,spark:l,active:!1,nextTime:Tc+ue()*(of-Tc),flashEnd:0})}return s}function ey(i,t){let e=[];for(let n=0;n<t;n++)e.push(Math.floor((n+.5)/t*i));return e}function ny(i,t,e){for(let n of i)if(!n.active&&t>=n.nextTime){n.active=!0;let s=nf+ue()*(Kv-nf);n.flashEnd=t+s,n.light.intensity=sf,n.spark.material.opacity=1,n.spark.scale.setScalar(.8+ue()*.6),e()}else n.active&&t>=n.flashEnd?(n.active=!1,n.light.intensity=0,n.spark.material.opacity=0,n.nextTime=t+Tc+ue()*(of-Tc)):n.active&&(n.light.intensity=sf*(.7+ue()*.3))}function iy(i,t){let e=Ac(i,Yv);if(!e)return;let[n,s]=e.tangent,r=-s,o=n,a=5.5,c=e.point[0]+r*a,l=e.point[1]+o*a,h=Math.atan2(n,s),d=[],u=new ce(2.6,3.1,11);Ec(u,7030064),d.push(u);let f=new ce(2.3,.3,10.6);f.translate(0,1.7,0),Ec(f,4864556),d.push(f);for(let p=-1;p<=1;p++)for(let b of[-1,1]){let S=(ue()-.5)*.3,y=new ce(.08,.9+ue()*.3,1.6);y.translate(b*1.32,.5+S,p*3.2+(ue()-.5)*.6),Ec(y,789770),d.push(y)}let m=oe(d,!1),_=new ie({vertexColors:!0,flatShading:!0}),g=new Gt(m,_);g.position.set(c,1.85,l),g.rotation.y=h,g.rotation.z=.09,t.add(g)}function sy(i,t){let e=lh(i);if(e<4)return;let n=[];for(let o=0;o<Zv;o++){let a=25+ue()*Math.max(10,e-33),c=Ac(i,a);if(!c)continue;let[l,h]=c.tangent,d=-h,u=l,f=ue()<.5?1:-1,m=(7.5+ue()*3)*f,_=c.point[0]+d*m,g=c.point[1]+u*m,p=ue()<.4,b=p?new ln(.32,.34,.7,8):new ce(.5+ue()*.3,.4+ue()*.3,.5+ue()*.3),S=p?.35:.2;b.translate(0,S,0),b.rotateY(ue()*Math.PI),ue()<.3&&b.rotateZ((ue()-.5)*.5),b.translate(_,0,g),Ec(b,ef[o%ef.length]),n.push(b)}if(!n.length)return;let s=oe(n,!1),r=new ie({vertexColors:!0,flatShading:!0});t.add(new Gt(s,r))}function ry(i,t){let e=lh(i);if(e<4)return[];let n=ay(),s=[];for(let r=0;r<Jv;r++){let o=35+ue()*Math.max(20,e-55),a=Ac(i,o);if(!a)continue;let c=new ai({map:n,transparent:!0,opacity:.18,depthWrite:!1,color:3815468}),l=new Li(c),h=8+ue()*4;l.scale.set(h,h,1),t.add(l),s.push({sprite:l,baseX:a.point[0]+(ue()-.5)*14,baseZ:a.point[1]+(ue()-.5)*14,baseY:6+ue()*3,phase:ue()*Math.PI*2,riseSpeed:.25+ue()*.15,riseRange:9+ue()*3,driftAmp:2+ue()*2,driftFreq:.05+ue()*.05,baseOpacity:.14+ue()*.1})}return s}function oy(i,t,e){for(let n of i){let s=(e*n.riseSpeed+n.phase)%n.riseRange;n.sprite.position.set(n.baseX+Math.sin(e*n.driftFreq+n.phase)*n.driftAmp,n.baseY+s,n.baseZ+Math.cos(e*n.driftFreq*.8+n.phase)*n.driftAmp);let r=s/n.riseRange;n.sprite.material.opacity=n.baseOpacity*(1-Math.abs(r-.5)*1.4)}}function ay(){let t=document.createElement("canvas");t.width=128,t.height=128;let e=t.getContext("2d"),n=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,"rgba(60,58,48,0.55)"),n.addColorStop(.5,"rgba(50,48,40,0.25)"),n.addColorStop(1,"rgba(40,38,32,0)"),e.fillStyle=n,e.fillRect(0,0,128,128);let s=new Ze(t);return s.colorSpace=fe,s}var cy=3028026,ly=9278327,hy=2304048,uy=6051656,dy=11557412,fy=3.2,py=1/700,my=`
  varying vec3 vDir;
  void main() {
    // World-space view ray. Correct whether the dome is parented to the camera
    // or to the scene, because modelMatrix carries whichever transform applies.
    vDir = (modelMatrix * vec4(position, 1.0)).xyz - cameraPosition;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,gy=`
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
    vec2 p = d.xz / max(h, 0.05) * ${fy.toFixed(2)}
           + cameraPosition.xz * ${py.toFixed(6)};
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
`;function cf(i,t){let e=new ct(0,-1);if(t&&t.length>1){let o=t[0],a=t[t.length-1];e.set(o[0]-a[0],o[1]-a[1]).normalize()}let n={uFog:{value:i},uBand:{value:new It(ly)},uZenith:{value:new It(cy)},uCloudDark:{value:new It(hy)},uCloudLit:{value:new It(uy)},uGlow:{value:new It(dy)},uDock:{value:e},uTime:{value:0}},s=new Ke({uniforms:n,vertexShader:my,fragmentShader:gy,side:Ge,depthWrite:!1,depthTest:!1,fog:!1}),r=new Gt(new Ni(1,32,20),s);return r.renderOrder=-1e3,r.frustumCulled=!1,{mesh:r,update(o){n.uTime.value=o}}}var me=(()=>{let i=13723136;return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}})(),uh=596,Vi=690,hh=620,_y=593,xy=-3.2,vy=115,Mn=3.5,Gi=2,Xi=.03,yy=.042;function hf(i,t){let e=i.streetLine||[];if(e.length<2)return{group:new pe};let n=new pe;t.add(n);let s=[],r=[],o=[],a=[];return by(e,n,a,s,r,o),Ay(e,s),Cy(e,n),Ry(s,n),Ty(r,o,n),a.length&&n.add(new Gt(oe(a,!1),new ie({vertexColors:!0,flatShading:!0}))),{group:n}}function My(i,t){let e=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,h=Math.hypot(c,l);if(e+h>=t){let d=h>0?(t-e)/h:0;return{point:[s+c*d,r+l*d],tangent:[c/(h||1),l/(h||1)]}}e+=h}return null}function Sy(i){let t=0;for(let e=1;e<i.length;e++)t+=Math.hypot(i[e][0]-i[e-1][0],i[e][1]-i[e-1][1]);return t}function Wi(i,t,e){let n=My(i,t);if(!n)return null;let[s,r]=n.tangent,o=-r,a=s;return{x:n.point[0]+o*e,z:n.point[1]+a*e,yaw:Math.atan2(s,r),tangent:n.tangent}}function by(i,t,e,n,s,r){let o=Ly(),a=[],c=1.5;for(let l=hh-6;l<Vi;l+=5){let h=Wi(i,l+2.5,(me()-.5)*.8);if(!h)break;let d=new Oe(c*2,5.4);d.rotateX(-Math.PI/2),d.rotateY(h.yaw),d.translate(h.x,yy,h.z),a.push(d)}a.length&&t.add(new Gt(oe(a,!1),new ie({map:o,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3})));for(let l=hh-8;l<Vi+4;l+=3.2)for(let h of[-1,1]){let d=Wi(i,l+me()*2,h*(c+.7+me()*.9));if(!d)continue;let u=.75+me()*.65,f=.26+me()*.26,m=new Ts(u,f,9);if(m.translate(0,f/2,0),m.scale(1,1,.7+me()*.5),m.rotateY(me()*Math.PI),m.translate(d.x,Xi,d.z),$r(m,[6048825,6969411,4865326][Math.floor(me()*3)]),e.push(m),me()<.55){let _=new ce(.4+me()*.5,.09,.35+me()*.4);_.rotateZ((me()-.5)*.9),_.rotateY(me()*Math.PI),_.translate(d.x+(me()-.5)*1.4,Xi+.12,d.z+(me()-.5)*1.4),$r(_,2829352),e.push(_)}}for(let l=hh-10;l<Vi+6;l+=2.3)for(let h of[-1,1]){let d=Wi(i,l,h*(c+1.9+me()*.4));d&&n.push({...d,tipped:me()<.16})}lf(i,uh,Vi,4.4,s,r),lf(i,uh,Vi,-4.4,s,r),Ey(i,Vi+2,s,r)}function lf(i,t,e,n,s,r){for(let o=t;o<e;o+=Mn+.1){let a=Wi(i,o+Mn/2,n);if(!a)break;me()<.12||uf(a.x,a.z,a.yaw,s,r,me()<.18)}}function Ey(i,t,e,n){for(let s=-6;s<=6;s+=Mn+.1){let r=Wi(i,t,s+Mn/2);r&&uf(r.x,r.z,r.yaw+Math.PI/2,e,n,me()<.25)}}function uf(i,t,e,n,s,r){let o=r?(me()-.5)*.5:(me()-.5)*.06,a=[],c=(f,m,_,g,p)=>{let b=new ce(f,m,_);b.translate(g,p,0),a.push(b)};c(.05,Gi,.05,-Mn/2,Gi/2),c(.05,Gi,.05,Mn/2,Gi/2),c(Mn,.05,.05,0,Gi-.03),c(Mn,.05,.05,0,.03);let l=new ce(.5,.11,.26);l.translate(-Mn/2,.055,0);let h=new ce(.5,.11,.26);h.translate(Mn/2,.055,0),a.push(l,h);let d=oe(a,!1);d.rotateZ(o),d.rotateY(e),d.translate(i,Xi,t),n.push(d);let u=new Oe(Mn-.1,Gi-.1);u.translate(0,Gi/2,0),u.rotateZ(o),u.rotateY(e),u.translate(i,Xi,t),s.push(u)}function Ty(i,t,e){i.length&&e.add(new Gt(oe(i,!1),new ie({color:5592911,flatShading:!0}))),t.length&&e.add(new Gt(oe(t,!1),new ie({map:Py(),transparent:!0,alphaTest:.35,side:Ee,depthWrite:!0})))}function Ay(i,t){let e=Sy(i);for(let n=40;n<e-20;n+=vy){if(n>uh-40&&n<Vi+40)continue;let s=3+Math.floor(me()*6);for(let r=0;r<s;r++){let o=Wi(i,n+(me()-.5)*14,(me()-.5)*12);o&&t.push({...o,tipped:me()<.35})}}}function wy(){let i=[],t=new Ts(.24,.62,10);t.translate(0,.31,0),$r(t,11025678),i.push(t);let e=new ln(.125,.15,.13,10);e.translate(0,.33,0),$r(e,13223092),i.push(e);let n=new ce(.34,.05,.34);return n.translate(0,.025,0),$r(n,8006666),i.push(n),oe(i,!1)}function Ry(i,t){if(!i.length)return;let e=wy(),n=new ie({vertexColors:!0,flatShading:!0}),s=new xn(e,n,i.length),r=new te,o=new Pe,a=new ke,c=new L,l=new L(1,1,1);i.forEach((h,d)=>{a.set(h.tipped?Math.PI/2*(.75+me()*.3):(me()-.5)*.08,me()*Math.PI*2,0,"YXZ"),o.setFromEuler(a),c.set(h.x,Xi+(h.tipped?.2:0),h.z),r.compose(c,o,l),s.setMatrixAt(d,r)}),s.instanceMatrix.needsUpdate=!0,t.add(s)}function Cy(i,t){let e=Wi(i,_y,xy);if(!e)return;let n=4.2,s=2.5,r=.45,o=new Oe(n,s);o.translate(0,r+s/2,0);let[a,c]=e.tangent,l=Math.atan2(-a,-c);o.rotateY(l),o.translate(e.x,Xi,e.z),t.add(new Gt(o,new ie({map:Iy(),side:Ee})));let h=[];for(let u of[-1,1]){let f=new ce(.12,r+.3,.12);f.translate(u*(n/2-.3),(r+.3)/2,0),h.push(f)}let d=oe(h,!1);d.rotateY(l),d.translate(e.x,Xi,e.z),t.add(new Gt(d,new ie({color:4867128})))}function Iy(){let e=document.createElement("canvas");e.width=1024,e.height=610;let n=e.getContext("2d");n.fillStyle="#26506e",n.fillRect(0,0,1024,610);for(let r=0;r<2600;r++){let o=Math.random()*1024,a=Math.random()*610;n.fillStyle=`rgba(${20+Math.random()*60},${30+Math.random()*50},${40+Math.random()*50},0.06)`,n.fillRect(o,a,Math.random()*90,Math.random()*5)}n.fillStyle="#e8e6dc",n.textAlign="center",n.font="bold 62px Helvetica, Arial, sans-serif",n.fillText("LEITH WALK",1024/2,110),n.fillText("IMPROVEMENT PROJECT",1024/2,180),n.fillStyle="#f0c02a",n.fillRect(120,232,784,6),n.fillStyle="#e8e6dc",n.font="bold 50px Helvetica, Arial, sans-serif",n.fillText("COMPLETION: SPRING 2023",1024/2,310),n.font="30px Helvetica, Arial, sans-serif",n.fillStyle="#b8c6d2",n.fillText("WE APOLOGISE FOR ANY INCONVENIENCE",1024/2,380),n.font="24px Helvetica, Arial, sans-serif",n.fillText("City of Edinburgh Council",1024/2,430),n.strokeStyle="rgba(210,60,40,0.85)",n.lineWidth=9,n.lineCap="round",n.beginPath(),n.moveTo(190,340),n.lineTo(835,285),n.stroke(),n.save(),n.translate(1024/2,520),n.rotate(-.05),n.fillStyle="rgba(214,66,44,0.9)",n.font="bold 58px Helvetica, Arial, sans-serif",n.fillText("STILL WAITING",0,0),n.restore(),n.globalCompositeOperation="destination-out";for(let r=0;r<26;r++){let o=Math.random()*1024,a=Math.random()<.5?Math.random()*40:610-Math.random()*40;n.beginPath(),n.ellipse(o,a,10+Math.random()*50,6+Math.random()*22,Math.random()*3,0,Math.PI*2),n.fill()}n.globalCompositeOperation="source-over";let s=new Ze(e);return s.colorSpace=fe,s.anisotropy=16,s}function Py(){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d");e.clearRect(0,0,128,128),e.strokeStyle="#50524b",e.lineWidth=2;let n=128/8;for(let r=0;r<=8;r++)e.beginPath(),e.moveTo(r*n,0),e.lineTo(r*n,128),e.stroke(),e.beginPath(),e.moveTo(0,r*n),e.lineTo(128,r*n),e.stroke();let s=new Ze(t);return s.wrapS=s.wrapT=oi,s.repeat.set(6,4),s.colorSpace=fe,s.anisotropy=16,s}function Ly(){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d");e.fillStyle="#241d16",e.fillRect(0,0,256,256);for(let s=0;s<2200;s++){let r=Math.random();e.fillStyle=`rgba(${30+r*55},${25+r*45},${18+r*35},0.5)`,e.beginPath(),e.arc(Math.random()*256,Math.random()*256,Math.random()*5,0,Math.PI*2),e.fill()}e.fillStyle="rgba(78,84,74,0.45)",e.beginPath(),e.ellipse(256*.55,256*.62,256*.3,256*.13,.3,0,Math.PI*2),e.fill(),e.fillStyle="#4a4235",e.fillRect(0,256*.4,256,16),e.fillStyle="rgba(255,255,255,0.07)",e.fillRect(0,256*.4,256,5);let n=new Ze(t);return n.colorSpace=fe,n.anisotropy=16,n}function $r(i,t){let e=new It(t),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;i.setAttribute("color",new Yt(s,3))}var Ve=(()=>{let i=39441;return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}})(),Dy=115,Ny=90,Uy=40,df=10,Fy=27,Oy=8,ff=22,By=55,wc=1.35;function pf(i,t,e){let n=i.streetLine||[];if(n.length<2)return{group:new pe,update(){}};let s=new pe;e.add(s);let r=zy(n,s);return ky(i,t,s),Gy(n,s),{group:s,update(o,a){Hy(r,a)}}}function dh(i,t){let e=i/2,n=[],s=h=>{let d=new Float32Array([h*.04,0,t*.18,h*.04,0,-t*.16,h*e*.55,.03*e,-t*.3,h*.04,0,t*.18,h*e*.55,.03*e,-t*.3,h*e*.58,.03*e,t*.06,h*e*.58,.03*e,t*.06,h*e*.55,.03*e,-t*.3,h*e,.1*e,-t*.38,h*e*.58,.03*e,t*.06,h*e,.1*e,-t*.38,h*e*.97,.1*e,-t*.1]),u=new ve;return u.setAttribute("position",new Yt(d,3)),u.computeVertexNormals(),u},r=s(-1);Kr(r,4869188);let o=s(1);Kr(o,4869188),n.push(r,o);let a=(h,d,u)=>{let f=new ce(h,d,u).toNonIndexed();return f.deleteAttribute("uv"),f},c=a(t*.17,t*.15,t);Kr(c,7237734),n.push(c);let l=a(t*.34,.012,t*.3);return l.translate(0,0,-t*.6),Kr(l,2895400),n.push(l),oe(n,!1)}function fh(){return new ie({vertexColors:!0,flatShading:!0,side:Ee})}function zy(i,t){let e=gf(i),n=[];for(let r=0;r<Dy;r++){let o=mf(i,30+Ve()*Math.max(1,e-60));if(!o)continue;let[a,c]=o.tangent;n.push({ox:o.point[0],oz:o.point[1],ax:a,az:c,px:-c,pz:a,rAlong:ff+Ve()*(By-ff),rAcross:2.5+Ve()*(Oy-2.5),y:df+Ve()*(Fy-df),speed:(Ve()<.5?-1:1)*(.1+Ve()*.14),phase:Ve()*Math.PI*2,bobAmp:.5+Ve()*1.4,bobFreq:.25+Ve()*.45,scale:.85+Ve()*.5})}let s=new xn(dh(wc,wc*.42),fh(),n.length);return s.frustumCulled=!1,t.add(s),{mesh:s,birds:n}}function Hy({mesh:i,birds:t},e){let n=new te,s=new Pe,r=new ke,o=new L,a=new L;t.forEach((c,l)=>{let h=e*c.speed+c.phase,d=Math.cos(h),u=Math.sin(h),f=d*c.rAlong,m=u*c.rAcross,_=c.ox+c.ax*f+c.px*m,g=c.oz+c.az*f+c.pz*m,p=c.y+Math.sin(e*c.bobFreq+c.phase)*c.bobAmp,b=(-u*c.rAlong*c.ax+d*c.rAcross*c.px)*c.speed,S=(-u*c.rAlong*c.az+d*c.rAcross*c.pz)*c.speed,y=Math.atan2(b,S),A=(-d*c.rAlong*c.ax-u*c.rAcross*c.px)*c.speed*c.speed,T=(-d*c.rAlong*c.az-u*c.rAcross*c.pz)*c.speed*c.speed,R=Math.hypot(b,S)||1e-4,v=(A*S-T*b)/R,E=Ds.clamp(v*90,-1,1);r.set(Math.sin(e*c.bobFreq+c.phase)*.06,y,E,"YXZ"),s.setFromEuler(r),o.set(_,p,g),a.setScalar(c.scale),n.compose(o,s,a),i.setMatrixAt(l,n)}),i.instanceMatrix.needsUpdate=!0}function ky(i,t,e){let n=t&&t.buildings||[],s=i.nearestStreetPoint,r=[],o=n.filter(u=>{let f=u.footprint;if(!f||f.length<3)return!1;let m=s?s(f[0][0],f[0][1]):null;return!m||m.distance<=30}),a=o.length?Ny/o.length:0;for(let u of o){let f=u.footprint,m=Math.max(1,u.levels||1)*3.2,_=Math.floor(a)+(Ve()<a%1?1:0);for(let g=0;g<_;g++){let p=Math.floor(Ve()*f.length),b=(p+1)%f.length,S=.15+Ve()*.7;r.push({x:f[p][0]+(f[b][0]-f[p][0])*S,z:f[p][1]+(f[b][1]-f[p][1])*S,y:m+.12,yaw:Ve()*Math.PI*2})}}if(!r.length)return;let c=new xn(dh(wc*.42,wc*.46),fh(),r.length),l=new te,h=new Pe,d=new ke;r.forEach((u,f)=>{d.set(0,u.yaw,0,"YXZ"),h.setFromEuler(d),l.compose(new L(u.x,u.y,u.z),h,new L(1,1,1)),c.setMatrixAt(f,l)}),c.instanceMatrix.needsUpdate=!0,e.add(c)}function Gy(i,t){let e=gf(i),n=[];for(let l=0;l<Uy;l++){let h=mf(i,25+Ve()*Math.max(1,e-50));if(!h)continue;let[d,u]=h.tangent,f=-u,m=d,_=(Ve()*2-1)*5.5;n.push({x:h.point[0]+f*_,z:h.point[1]+m*_,yaw:Ve()*Math.PI*2})}if(!n.length)return;let s=dh(.3,.3);Kr(s,5263948);let r=new xn(s,fh(),n.length),o=new te,a=new Pe,c=new ke;n.forEach((l,h)=>{c.set(0,l.yaw,0,"YXZ"),a.setFromEuler(c),o.compose(new L(l.x,.1,l.z),a,new L(1,1,1)),r.setMatrixAt(h,o)}),r.instanceMatrix.needsUpdate=!0,t.add(r)}function mf(i,t){let e=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,h=Math.hypot(c,l);if(e+h>=t){let d=h>0?(t-e)/h:0;return{point:[s+c*d,r+l*d],tangent:[c/(h||1),l/(h||1)]}}e+=h}return null}function gf(i){let t=0;for(let e=1;e<i.length;e++)t+=Math.hypot(i[e][0]-i[e-1][0],i[e][1]-i[e-1][1]);return t}function Kr(i,t){let e=new It(t),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;i.setAttribute("color",new Yt(s,3))}var qi=(()=>{let i=10775;return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}})(),Vy=90,Wy=6.6,_f=2.5,Xy=9,qy=.06;function Mf(i,t){let e=i.streetLine||[];if(e.length<2)return{group:new pe,update(){}};let n=new pe;t.add(n);let s=$y(e),r=[];for(let a=0;a<Vy;a++){let c=20+qi()*Math.max(1,s-45),l=_f+qi()*(Xy-_f),h=yf(e,c),d=yf(e,Math.min(c+l,s-1));if(!h||!d)continue;let f=(qi()<.5?1:-1)*(Wy+(qi()-.5)*.8),m=vf(h,f),_=vf(d,f);r.push({ax:m[0],az:m[1],bx:_[0],bz:_[1],rate:.07+qi()*.16,phase:qi(),scale:.8+qi()*.5})}let o=new xn(Jy(),new ie({vertexColors:!0,flatShading:!0}),r.length);return n.add(o),{group:n,update(a,c){Zy(o,r,c)}}}function Yy(i){return i<.18?xf(0,.18,i):i<.5?1:i<.68?1-xf(.5,.68,i):0}function xf(i,t,e){let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function Zy(i,t,e){let n=new te,s=new Pe,r=new ke,o=new L,a=new L;t.forEach((c,l)=>{let h=(e*c.rate+c.phase)%1,d=Yy(h),u=c.ax+(c.bx-c.ax)*d,f=c.az+(c.bz-c.az)*d,m=h>=.5,_=m?c.ax-c.bx:c.bx-c.ax,g=m?c.az-c.bz:c.bz-c.az,p=Math.atan2(_,g),S=h<.18||h>=.5&&h<.68?Math.abs(Math.sin(e*26+l))*.025:0;r.set(0,p,0,"YXZ"),s.setFromEuler(r),o.set(u,qy+S,f),a.setScalar(c.scale),n.compose(o,s,a),i.setMatrixAt(l,n)}),i.instanceMatrix.needsUpdate=!0}function Jy(){let i=[],t=(r,o,a)=>{let c=new ce(r,o,a).toNonIndexed();return c.deleteAttribute("uv"),c},e=t(.11,.1,.23);e.translate(0,.05,0),ph(e,4537909),i.push(e);let n=t(.075,.07,.1);n.translate(0,.045,.15),ph(n,5129787),i.push(n);let s=t(.016,.016,.21);return s.translate(0,.035,-.21),ph(s,4866617),i.push(s),oe(i,!1)}function vf(i,t){let[e,n]=i.tangent;return[i.point[0]+-n*t,i.point[1]+e*t]}function yf(i,t){let e=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,h=Math.hypot(c,l);if(e+h>=t){let d=h>0?(t-e)/h:0;return{point:[s+c*d,r+l*d],tangent:[c/(h||1),l/(h||1)]}}e+=h}return null}function $y(i){let t=0;for(let e=1;e<i.length;e++)t+=Math.hypot(i[e][0]-i[e-1][0],i[e][1]-i[e-1][1]);return t}function ph(i,t){let e=new It(t),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;i.setAttribute("color",new Yt(s,3))}var se=(()=>{let i=11590938;return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}})(),Ky=210,Qy=130,jy=260,tM=22;function Sf(i,t,e){let n=i.streetLine||[];if(n.length<2)return{group:new pe};let s=new pe;return e.add(s),eM(i,t,n,s),iM(n,s),sM(n,s),rM(n,s),{group:s}}function eM(i,t,e,n){let s=nM(),r=[],o=(u,f,m,_,g)=>{for(let p=0;p<3;p++){let b=new Oe(_,_);b.translate(0,_/2,0),b.rotateZ(g),b.rotateY(p/3*Math.PI+se()*.4),b.translate(u,f,m),r.push(b)}},a=t&&t.buildings||[],c=i.nearestStreetPoint,l=a.filter(u=>{let f=u.footprint;if(!f||f.length<3)return!1;let m=c?c(f[0][0],f[0][1]):null;return!m||m.distance<=28}),h=l.length?Ky/l.length:0;for(let u of l){let f=u.footprint,m=Math.floor(h)+(se()<h%1?1:0),_=Math.max(1,u.levels||1)*3.2;for(let g=0;g<m;g++){let p=Math.floor(se()*f.length),b=(p+1)%f.length,S=.1+se()*.8;o(f[p][0]+(f[b][0]-f[p][0])*S,_-.25,f[p][1]+(f[b][1]-f[p][1])*S,1.1+se()*1.5,(se()-.5)*.5)}}let d=mh(e);for(let u=0;u<Qy;u++){let f=Ic(e,20+se()*Math.max(1,d-40));if(!f)continue;let _=(se()<.5?1:-1)*(7.2+se()*2.6),g=Cc(f,_);o(g[0],.03,g[1],.8+se()*1.1,(se()-.5)*.3)}r.length&&n.add(new Gt(oe(r,!1),new ie({map:s,transparent:!0,alphaTest:.45,side:Ee,depthWrite:!0})))}function nM(){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d");e.clearRect(0,0,256,256);for(let s=0;s<170;s++){let r=-Math.PI/2+(Math.random()-.5)*2.5,o=30+Math.random()*78,a=256/2+(Math.random()-.5)*58,c=256-Math.random()*44,l=46+Math.random()*52;e.strokeStyle=`rgba(${28+Math.random()*26},${l},${30+Math.random()*22},0.95)`,e.lineWidth=2+Math.random()*5,e.lineCap="round",e.beginPath(),e.moveTo(a,c),e.quadraticCurveTo(a+Math.cos(r)*o*.5+(Math.random()-.5)*24,c+Math.sin(r)*o*.5,a+Math.cos(r)*o,c+Math.sin(r)*o),e.stroke()}for(let s=0;s<13;s++){let r=34+Math.random()*188,o=26+Math.random()*96,a=26+Math.random()*40;for(let c=0;c<26;c++){let l=c/26,h=(1-l)*8+1.5;e.fillStyle=`rgba(${74+Math.random()*30},${44+Math.random()*22},${88+Math.random()*32},0.88)`,e.beginPath(),e.ellipse(r+(Math.random()-.5)*4,o+l*a,h,3.5,0,0,Math.PI*2),e.fill()}}let n=new Ze(t);return n.colorSpace=fe,n.anisotropy=16,n}function iM(i,t){let e=mh(i),n=[];for(let s=0;s<jy;s++){let r=Ic(i,15+se()*Math.max(1,e-30));if(!r)continue;let a=(se()<.5?1:-1)*(se()<.65?6.3+se()*.7:7.5+se()*2.2),c=Cc(r,a),l=se(),h,d;l<.3?(h=new ln(.037,.042,.27,6),h.rotateZ(Math.PI/2),h.rotateY(se()*Math.PI*2),h.translate(0,.04,0),d=2899230):l<.55?(h=new ln(.032,.032,.1,6),h.rotateZ(Math.PI/2+(se()-.5)*.7),h.scale(1,1,.6),h.translate(0,.032,0),d=se()<.5?10115614:3100522):l<.8?(h=new ce(.16+se()*.08,.05,.12+se()*.06),h.rotateY(se()*Math.PI),h.rotateZ((se()-.5)*.5),h.translate(0,.026,0),d=11051924):(h=new Oe(.24+se()*.2,.18+se()*.14),h.rotateX(-Math.PI/2),h.rotateY(se()*Math.PI),h.translate(0,.036,0),d=7170652),h.translate(c[0],.03,c[1]),Rc(h,d),n.push(h)}n.length&&t.add(new Gt(oe(n,!1),new ie({vertexColors:!0,flatShading:!0,side:Ee})))}function sM(i,t){let e=mh(i),n=[];for(let s=0;s<tM;s++){let r=Ic(i,25+se()*Math.max(1,e-50));if(!r)continue;let o=se()<.5?1:-1,a=Cc(r,o*(7.6+se()*1.8)),c=se()<.6,l=[],h=new ce(.62,1.05,.72).toNonIndexed();h.deleteAttribute("uv"),h.translate(0,.525,0),Rc(h,[3095084,3813160,2634298][Math.floor(se()*3)]),l.push(h);let d=new ce(.66,.07,.76).toNonIndexed();d.deleteAttribute("uv"),d.translate(0,1.07,c?.1:-.3),d.rotateX(c?.2:-.7),Rc(d,1975840),l.push(d);let u=oe(l,!1);u.rotateY(se()*Math.PI*2),c&&u.rotateZ(Math.PI/2+(se()-.5)*.3),u.translate(a[0],c?.34:.03,a[1]),n.push(u)}n.length&&t.add(new Gt(oe(n,!1),new ie({vertexColors:!0,flatShading:!0})))}function rM(i,t){let e=Ic(i,415);if(!e)return;let n=Cc(e,-3.4),s=[],r=(h,d,u,f,m,_)=>{let g=new ce(h,d,u).toNonIndexed();g.deleteAttribute("uv"),g.translate(f,m,_),s.push(g)},o=.56,a=.44,c=.86;for(let h=0;h<=6;h++){let d=-c/2+h/6*c;r(o,.018,.018,0,a,d),r(.018,a,.018,-o/2,a/2,d),r(.018,a,.018,o/2,a/2,d)}for(let h=0;h<=4;h++){let d=-o/2+h/4*o;r(.018,.018,c,d,.02,0),r(.018,.018,c,d,a,0)}r(o,a,.018,0,a/2,-c/2),r(.03,.3,.03,0,a+.15,-c/2);let l=oe(s,!1);Rc(l,6974822),l.rotateZ(Math.PI/2*.92),l.rotateY(se()*Math.PI*2),l.translate(n[0],.3,n[1]),t.add(new Gt(l,new ie({vertexColors:!0,flatShading:!0})))}function Cc(i,t){let[e,n]=i.tangent;return[i.point[0]+-n*t,i.point[1]+e*t]}function Ic(i,t){let e=0;for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1],c=o-s,l=a-r,h=Math.hypot(c,l);if(e+h>=t){let d=h>0?(t-e)/h:0;return{point:[s+c*d,r+l*d],tangent:[c/(h||1),l/(h||1)]}}e+=h}return null}function mh(i){let t=0;for(let e=1;e<i.length;e++)t+=Math.hypot(i[e][0]-i[e-1][0],i[e][1]-i[e-1][1]);return t}function Rc(i,t){let e=new It(t),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;i.setAttribute("color",new Yt(s,3))}function bf(){let i=null,t=null,e=!1,n=!1;function s(){if(e){i&&i.state==="suspended"&&i.resume();return}e=!0;let a=window.AudioContext||window.webkitAudioContext;a&&(i=new a,t=i.createGain(),t.gain.value=.16,t.connect(i.destination),oM(i,t),aM(i,t))}function r(a){if(n=!!a,!i||!t)return;let c=(n?.5:1)*.16,l=i.currentTime;t.gain.cancelScheduledValues(l),t.gain.setValueAtTime(t.gain.value,l),t.gain.linearRampToValueAtTime(c,l+.6)}function o(){!i||!t||cM(i,t)}return{start:s,setDucked:r,triggerCrackle:o}}function oM(i,t){let e=i.createGain();e.gain.value=.55;let n=i.createBiquadFilter();n.type="lowpass",n.frequency.value=220,n.Q.value=.7,e.connect(n).connect(t);let s=[55,55.6];for(let r of s){let o=i.createOscillator();o.type="sawtooth",o.frequency.value=r,o.connect(e),o.start()}}function aM(i,t){let e=i.createBufferSource();e.buffer=Ef(i,4),e.loop=!0;let n=i.createBiquadFilter();n.type="bandpass",n.frequency.value=500,n.Q.value=.6;let s=i.createGain();s.gain.value=.18,e.connect(n).connect(s).connect(t),e.start();let r=i.createOscillator();r.type="sine",r.frequency.value=.07;let o=i.createGain();o.gain.value=.12,r.connect(o).connect(s.gain),r.start()}function cM(i,t){let n=i.createBufferSource();n.buffer=Ef(i,.18);let s=i.createBiquadFilter();s.type="highpass",s.frequency.value=1800;let r=i.createGain(),o=i.currentTime;r.gain.setValueAtTime(.9,o),r.gain.exponentialRampToValueAtTime(.001,o+.18),n.connect(s).connect(r).connect(t),n.start(o),n.stop(o+.18+.02)}function Ef(i,t){let e=Math.max(1,Math.floor(i.sampleRate*t)),n=i.createBuffer(1,e,i.sampleRate),s=n.getChannelData(0);for(let r=0;r<e;r++)s[r]=Math.random()*2-1;return n}function Tf({controls:i,onEnter:t}){let e=document.getElementById("title-card"),n=document.getElementById("touch-forward");function s(){!e||e.classList.contains("hidden")||(e.classList.add("hidden"),i.setEnabled(!0),t&&t())}if(e&&(e.addEventListener("click",s),e.addEventListener("touchend",r=>{r.preventDefault(),s()},{passive:!1})),n){let r=a=>{n.classList.toggle("active",a),i.setForward(a)};n.addEventListener("pointerdown",a=>{a.preventDefault(),n.setPointerCapture?.(a.pointerId),r(!0)});let o=()=>r(!1);n.addEventListener("pointerup",o),n.addEventListener("pointercancel",o),n.addEventListener("pointerleave",o)}return{enter:s}}async function lM(){let i=document.getElementById("scene"),t=["localhost","127.0.0.1"].includes(location.hostname),e=new mc({canvas:i,antialias:!0,preserveDrawingBuffer:t});e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.setSize(window.innerWidth,window.innerHeight),e.toneMapping=Nr,e.toneMappingExposure=1.46;let n=new rr,s=new Be(70,window.innerWidth/window.innerHeight,.1,1e3);n.add(s);let r=await wd(),o=Gd(r.leith);n.add(o.group),n.fog=o.fog;let a=cf(o.fog.color,o.streetLine);s.add(a.mesh);let c=Vd(s),l=o.streetLine[0]||[0,0],h=o.streetLine[1]||[l[0],l[1]+1],d={x:l[0],z:l[1],yaw:Math.atan2(-(h[0]-l[0]),-(h[1]-l[1]))},u=Xd(s,i,{nearestStreetPoint:o.nearestStreetPoint,spawn:d});u.setEnabled(!1);let f=$d(r,o,n,s);Kd(r,o,n),Fd(o,n),hf(o,n);let m=pf(o,r.leith,n),_=Mf(o,n);Sf(o,r.leith,n);let g=af(o,n),p=bf();g.onArcFlash=()=>p.triggerCrackle();let b=!1,S=!1,y=()=>p.setDucked(b||S),A=jd({camera:s,npcs:f.npcs,assets:r,onActiveChange:I=>{S=I>0,y()}}),T=tf({assets:r,npcs:f.npcs,camera:s,controls:u,proximityAudio:A,onReadingChange:I=>{b=I,y()}});Tf({controls:u,onEnter:()=>{p.start(),A.resume()}}),window.addEventListener("resize",R);function R(){s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.setSize(window.innerWidth,window.innerHeight)}["localhost","127.0.0.1"].includes(location.hostname)&&(window.__mcgrotDebug={camera:s,world:o,npcs:f,controls:u,proximityAudio:A,renderer:e,stepFrame:(I,C)=>{u.update(I),f.update(I,C),a.update(C),m.update(I,C),_.update(I,C),g.update(I,C),T.update(I),A.update(),c.update(C),e.render(n,s)}});let v=performance.now();function E(){requestAnimationFrame(E);let I=performance.now(),C=Math.min((I-v)/1e3,.1);v=I;let P=I/1e3;u.update(C),f.update(C,P),a.update(P),m.update(C,P),_.update(C,P),g.update(C,P),T.update(C),A.update(),c.update(P),e.render(n,s)}E()}lM().catch(i=>{console.error("McGrot Walk failed to start:",i)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
