"use strict";(self.webpackChunkbabylonjs_ocean_demo=self.webpackChunkbabylonjs_ocean_demo||[]).push([[699,789],{1789:(t,e,s)=>{s.r(e),s.d(e,{Vector3Float32:()=>i});var o=s(153);const a=s(4651).w1.FloatRound;class i extends o.Vector3{getClassName(){return"Vector3Float32"}addInPlaceFromFloats(t,e,s){return this.x=a(this.x+t),this.y=a(this.y+e),this.z=a(this.z+s),this}add(t){return this.addToRef(t,new i(this._x,this._y,this._z))}addScalar(t){const e=new i(t,t,t);return this.addToRef(e,e)}addToRef(t,e){return e.copyFromFloats(a(this._x+t._x),a(this._y+t._y),a(this._z+t._z))}subtractInPlace(t){return this.x=a(this.x-t._x),this.y=a(this.y-t._y),this.z=a(this.z-t._z),this}subtract(t){return new i(this._x,this._y,this._z).subtractInPlace(t)}subtractToRef(t,e){return this.subtractFromFloatsToRef(t._x,t._y,t._z,e)}subtractFromFloats(t,e,s){return this.subtractFromFloatsToRef(t,e,s,new i(this._x,this._y,this._z))}subtractFromFloatsToRef(t,e,s,o){return o.copyFromFloats(a(this._x-t),a(this._y-e),a(this._z-s))}scaleInPlace(t){return this.x=a(this.x*t),this.y=a(this.y*t),this.z=a(this.z*t),this}scale(t){return new i(this._x,this._y,this._z).scaleInPlace(t)}scaleToRef(t,e){return e.copyFromFloats(a(this._x*t),a(this._y*t),a(this._z*t))}scaleAndAddToRef(t,e){return e.addInPlaceFromFloats(a(this._x*t),a(this._y*t),a(this._z*t))}multiplyInPlace(t){return this.x=a(this.x*t._x),this.y=a(this.y*t._y),this.z=a(this.z*t._z),this}multiply(t){return this.multiplyByFloats(t._x,t._y,t._z)}multiplyToRef(t,e){return e.copyFromFloats(a(this._x*t._x),a(this._y*t._y),a(this._z*t._z))}multiplyByFloats(t,e,s){const o=new i(t,e,s);return this.multiplyToRef(o,o)}divide(t){return this.divideToRef(t,new i)}divideToRef(t,e){return e.copyFromFloats(a(this._x/t._x),a(this._y/t._y),a(this._z/t._z))}divideInPlace(t){return this.divideToRef(t,this)}pow(t){const e=new i;return e.x=a(Math.pow(this._x,t._x)),e.y=a(Math.pow(this._y,t._y)),e.z=a(Math.pow(this._z,t._z)),e}length(){return a(Math.sqrt(a(a(a(this._x*this._x)+a(this._y*this._y))+a(this._z*this._z))))}lengthSquared(){return a(a(a(this._x*this._x)+a(this._y*this._y))+a(this._z*this._z))}normalize(){return this.normalizeFromLength(this.length())}normalizeFromLength(t){return 0===t||1===t?this:this.scaleInPlace(a(1/t))}normalizeToNew(){const t=new i(0,0,0);return this.normalizeToRef(t),t}normalizeToRef(t){const e=this.length();return 0===e||1===e?t.copyFromFloats(this._x,this._y,this._z):this.scaleToRef(a(1/e),t)}copyFromFloats(t,e,s){return this.x=t,this.y=e,this.z=s,this}static Lerp(t,e,s){const o=new i(0,0,0);return i.LerpToRef(t,e,s,o),o}static LerpToRef(t,e,s,o){o.x=a(t._x+a(a(e._x-t._x)*s)),o.y=a(t._y+a(a(e._y-t._y)*s)),o.z=a(t._z+a(a(e._z-t._z)*s))}static Dot(t,e){return a(a(a(t._x*e._x)+a(t._y*e._y))+a(t._z*e._z))}static ToFloat32(t,e){e.set(a(t.x),a(t.y),a(t.z))}}},6699:(t,e,s)=>{s.r(e);var o=s(153),a=s(4952),i=s(1789);const r=s(4651).w1.FloatRound,h=r(Math.PI),l=new i.Vector3Float32,n=new i.Vector3Float32,c=new i.Vector3Float32,_=new i.Vector3Float32,y=new i.Vector3Float32,u=new i.Vector3Float32,d=r(1e3),F=r(h/r(1.95)),p=r(1.5),x=r(4),z=r(2*h),w=new i.Vector3Float32(r(68e-8),r(55e-8),r(45e-8)),m=new i.Vector3Float32(r(.686),r(.678),r(.666)),M=r(8400),f=r(1250),T=new i.Vector3Float32(r(1),r(1),r(1)),R=new i.Vector3Float32(r(1.5),r(1.5),r(1.5)),V=new i.Vector3Float32(r(.5),r(.5),r(.5)),b=new i.Vector3Float32(r(.1),r(.1),r(.1)),v=new i.Vector3Float32(r(r(0)*r(.3)),r(r(.001)*r(.3)),r(r(.0025)*r(.3)));a.fE.prototype.getSunColor=function(){const t=r(.15),e=r(.5),s=r(.1),a=r(.2),P=r(.02),I=r(.3),g=new i.Vector3Float32(r(1e3),r(1e3),r(1e3)),S=o=>{const i=o.scale(t).addScalar(r(s*e)),h=o.scale(t).addScalar(e),l=o.multiply(i).addScalar(r(a*P)),n=o.multiply(h).addScalar(r(a*I));return l.divide(n).addScalar(-r(P/I))};i.Vector3Float32.ToFloat32(this.sunPosition,l),i.Vector3Float32.ToFloat32(this.up,c);const C=r(1-o.Scalar.Clamp(r(1-r(Math.exp(r(l.y/45e4)))),0,1)),L=r(r(this.rayleigh)-1*r(1-C));l.normalizeToRef(n);const k=(D=i.Vector3Float32.Dot(n,c),r(d*Math.max(0,r(1-r(Math.exp(-r(F-r(Math.acos(D)))/r(p)))))));var D;const j=(()=>{const t=r(5e-4);return _.set(r(t/94),r(t/40),r(t/18)),_})().scale(L),q=((t,e,s)=>{const o=r(r(r(.2)*s)*r(1e-17)),a=r(x-2),i=r(r(r(.434)*o)*h);return y.set(r(r(i*r(Math.pow(r(z/t.x),a)))*r(e.x)),r(r(i*r(Math.pow(r(z/t.y),a)))*r(e.y)),r(r(i*r(Math.pow(r(z/t.z),a)))*r(e.z))),y})(w,m,r(this.turbidity)).scale(r(this.mieCoefficient)),A=r(Math.acos(Math.max(0,n.y))),B=r(M/r(r(Math.cos(A))+r(r(.15)*r(Math.pow(r(r(93.885)-r(r(180*A)/h)),r(-1.253)))))),N=r(f/(r(Math.cos(A))+r(r(.15)*r(Math.pow(r(r(93.885)-r(r(180*A)/h)),r(-1.253)))))),E=j.scale(B).add(q.scale(N));E.set(r(Math.exp(-E.x)),r(Math.exp(-E.y)),r(Math.exp(-E.z)));const G=r(r(3/r(16*h))*r(1+r(Math.pow(1,2)))),H=(Q=r(this.mieDirectionalG),r(r(1/r(4*h))*r(r(1-r(Math.pow(Q,2)))/r(Math.pow(1-r(1*r(2*Q))+r(Math.pow(Q,2)),1.5))))),J=j.scale(G),K=q.scale(H),O=J.add(K).divide(j.add(q)).scale(k);var Q;let U=O.multiply(T.subtract(E)).pow(R);const W=O.multiply(E).pow(V),X=o.Scalar.Clamp(r(Math.pow(r(1-i.Vector3Float32.Dot(c,n)),5)),0,1);U=U.multiply(i.Vector3Float32.Lerp(T,W,X));const Y=b.multiply(E);Y.addInPlace(E.scale(r(19e3*k)));const Z=T.divide(S(g)),$=S(U.add(Y).scale(r(.04)).add(v).scale(r(Math.log2(r(2/r(Math.pow(this.luminance,4)))))));return i.Vector3Float32.ClampToRef($.multiply(Z),V,T,u),new o.Color3(u.x,u.y,u.z)}}}]);
//# sourceMappingURL=699.6647b7a854f57b841fee.js.map