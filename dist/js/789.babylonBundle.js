(self.webpackChunkbabylonjs_ocean_demo=self.webpackChunkbabylonjs_ocean_demo||[]).push([[789],{1789:(t,o,n)=>{"use strict";n.r(o),n.d(o,{Vector3Float32:()=>u});var i,r=n(7976),e=n(2281),s=(i=function(t,o){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])})(t,o)},function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=t}i(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}),h=e.w1.FloatRound,u=function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return s(o,t),o.prototype.getClassName=function(){return"Vector3Float32"},o.prototype.addInPlaceFromFloats=function(t,o,n){return this.x=h(this.x+t),this.y=h(this.y+o),this.z=h(this.z+n),this},o.prototype.add=function(t){return this.addToRef(t,new o(this._x,this._y,this._z))},o.prototype.addScalar=function(t){var n=new o(t,t,t);return this.addToRef(n,n)},o.prototype.addToRef=function(t,o){return o.copyFromFloats(h(this._x+t._x),h(this._y+t._y),h(this._z+t._z))},o.prototype.subtractInPlace=function(t){return this.x=h(this.x-t._x),this.y=h(this.y-t._y),this.z=h(this.z-t._z),this},o.prototype.subtract=function(t){return new o(this._x,this._y,this._z).subtractInPlace(t)},o.prototype.subtractToRef=function(t,o){return this.subtractFromFloatsToRef(t._x,t._y,t._z,o)},o.prototype.subtractFromFloats=function(t,n,i){return this.subtractFromFloatsToRef(t,n,i,new o(this._x,this._y,this._z))},o.prototype.subtractFromFloatsToRef=function(t,o,n,i){return i.copyFromFloats(h(this._x-t),h(this._y-o),h(this._z-n))},o.prototype.scaleInPlace=function(t){return this.x=h(this.x*t),this.y=h(this.y*t),this.z=h(this.z*t),this},o.prototype.scale=function(t){return new o(this._x,this._y,this._z).scaleInPlace(t)},o.prototype.scaleToRef=function(t,o){return o.copyFromFloats(h(this._x*t),h(this._y*t),h(this._z*t))},o.prototype.scaleAndAddToRef=function(t,o){return o.addInPlaceFromFloats(h(this._x*t),h(this._y*t),h(this._z*t))},o.prototype.multiplyInPlace=function(t){return this.x=h(this.x*t._x),this.y=h(this.y*t._y),this.z=h(this.z*t._z),this},o.prototype.multiply=function(t){return this.multiplyByFloats(t._x,t._y,t._z)},o.prototype.multiplyToRef=function(t,o){return o.copyFromFloats(h(this._x*t._x),h(this._y*t._y),h(this._z*t._z))},o.prototype.multiplyByFloats=function(t,n,i){var r=new o(t,n,i);return this.multiplyToRef(r,r)},o.prototype.divide=function(t){return this.divideToRef(t,new o)},o.prototype.divideToRef=function(t,o){return o.copyFromFloats(h(this._x/t._x),h(this._y/t._y),h(this._z/t._z))},o.prototype.divideInPlace=function(t){return this.divideToRef(t,this)},o.prototype.pow=function(t){var n=new o;return n.x=h(Math.pow(this._x,t._x)),n.y=h(Math.pow(this._y,t._y)),n.z=h(Math.pow(this._z,t._z)),n},o.prototype.length=function(){return h(Math.sqrt(h(h(h(this._x*this._x)+h(this._y*this._y))+h(this._z*this._z))))},o.prototype.lengthSquared=function(){return h(h(h(this._x*this._x)+h(this._y*this._y))+h(this._z*this._z))},o.prototype.normalize=function(){return this.normalizeFromLength(this.length())},o.prototype.normalizeFromLength=function(t){return 0===t||1===t?this:this.scaleInPlace(h(1/t))},o.prototype.normalizeToNew=function(){var t=new o(0,0,0);return this.normalizeToRef(t),t},o.prototype.normalizeToRef=function(t){var o=this.length();return 0===o||1===o?t.copyFromFloats(this._x,this._y,this._z):this.scaleToRef(h(1/o),t)},o.prototype.copyFromFloats=function(t,o,n){return this.x=t,this.y=o,this.z=n,this},o.Lerp=function(t,n,i){var r=new o(0,0,0);return o.LerpToRef(t,n,i,r),r},o.LerpToRef=function(t,o,n,i){i.x=h(t._x+h(h(o._x-t._x)*n)),i.y=h(t._y+h(h(o._y-t._y)*n)),i.z=h(t._z+h(h(o._z-t._z)*n))},o.Dot=function(t,o){return h(h(h(t._x*o._x)+h(t._y*o._y))+h(t._z*o._z))},o.ToFloat32=function(t,o){o.set(h(t.x),h(t.y),h(t.z))},o}(r.Vector3)}}]);
//# sourceMappingURL=789.babylonBundle.js.map