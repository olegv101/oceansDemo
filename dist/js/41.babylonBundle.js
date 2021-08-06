(self.webpackChunkbabylonjs_typescript_webpack_simple_scene=self.webpackChunkbabylonjs_typescript_webpack_simple_scene||[]).push([[41,292,955,124,59],{4292:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Buoyancy:()=>a});var i=n(1465),a=function(){function e(e,t,n){void 0===t&&(t=5),void 0===n&&(n=1),this._size=e,this._displacementMap=null,this._lengthScale=0,this._numSteps=t,this._attenuation=n,this._meshes=[]}return e.prototype.setWaterHeightMap=function(e,t){this._displacementMap=e,this._lengthScale=t},e.prototype.addMesh=function(e,t,n,a){void 0===n&&(n=0),void 0===a&&(a=0),this._meshes.push({mesh:e,frame:t,yOffset:n,spaceCoordinates:a,initQuaternion:e.rotationQuaternion.clone(),curStep:0,curQuaternion:new i._fP,stepQuaternion:new i._fP})},Object.defineProperty(e.prototype,"attenuation",{get:function(){return this._attenuation},set:function(e){this._attenuation=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"numSteps",{get:function(){return this._numSteps},set:function(e){this._numSteps=e},enumerable:!1,configurable:!0}),e.prototype.update=function(){for(var e=0;e<this._meshes.length;++e)this._updateMesh(this._meshes[e])},e.prototype.getWaterHeight=function(e){var t=i.jp9.Vector3[0];return this._getWaterDisplacement(e,t),e.subtractToRef(t,t),this._getWaterDisplacement(e,t),e.subtractToRef(t,t),this._getWaterDisplacement(e,t),e.subtractToRef(t,t),this._getWaterDisplacement(e,t),t.y},e.prototype._updateMesh=function(e){var t=i.jp9.Vector3[5],n=i.jp9.Vector3[6],a=i.jp9.Vector3[7],r=i.jp9.Vector3[8],o=i.jp9.Vector3[9],s=i.jp9.Vector3[10],c=i.jp9.Vector3[11],l=i.jp9.Vector3[12],h=e.mesh,u=e.frame,p=e.yOffset,_=e.spaceCoordinates,d=e.initQuaternion,f=e.curQuaternion,m=e.stepQuaternion,v=e.curStep;i.Pa4.TransformCoordinatesToRef(u.v1,h.getWorldMatrix(),t);var g=this.getWaterHeight(t);if(h.position.y=g+p,u.v2&&u.v3){if(v<this._numSteps)return e.curStep++,f.multiplyToRef(m,f),void d.multiplyToRef(f,h.rotationQuaternion);i.Pa4.TransformCoordinatesToRef(u.v2,h.getWorldMatrix(),n),n.subtractToRef(t,c),c.normalize(),i.Pa4.TransformCoordinatesToRef(u.v3,h.getWorldMatrix(),a),a.subtractToRef(t,l),l.normalize(),t.y=g,r.copyFrom(n),r.y=this.getWaterHeight(n),r.subtractToRef(t,r),r.normalize(),o.copyFrom(a),o.y=this.getWaterHeight(a),o.subtractToRef(t,o),o.normalize(),i.Pa4.CrossToRef(o,r,s),i.Pa4.CrossToRef(r,s,o),o.normalize();var y=Math.acos(i.Rus.Clamp(i.Pa4.Dot(c,r),0,1))*this._attenuation,b=Math.acos(i.Rus.Clamp(i.Pa4.Dot(l,o),0,1))*this._attenuation;switch(_){case 0:r.y>c.y&&(y=-y),o.y>l.y&&(b=-b),i._fP.FromEulerAnglesToRef(y/this._numSteps,b/this._numSteps,0,e.stepQuaternion);break;case 1:r.y>c.y&&(y=-y),o.y<l.y&&(b=-b),i._fP.FromEulerAnglesToRef(y/this._numSteps,0,b/this._numSteps,e.stepQuaternion);break;case 2:r.y>c.y&&(y=-y),o.y>l.y&&(b=-b),i._fP.FromEulerAnglesToRef(y/this._numSteps,0,b/this._numSteps,e.stepQuaternion)}e.curStep=0}},e.prototype._getWaterDisplacement=function(e,t){if(this._displacementMap){var n=this._size-1,a=e.x/this._lengthScale*this._size,r=e.z/this._lengthScale*this._size,o=i.jp9.Vector3[1],s=i.jp9.Vector3[2],c=i.jp9.Vector3[3],l=i.jp9.Vector3[4],h=Math.floor(a),u=Math.floor(r),p=a-h,_=r-u;h&=n,u&=n,this._getDisplacement(h,u,o),this._getDisplacement(h+1&n,u,s),s.subtractToRef(o,c).scaleToRef(p,c).addToRef(o,c),this._getDisplacement(h,u+1&n,o),this._getDisplacement(h+1&n,u+1&n,s),s.subtractToRef(o,l).scaleToRef(p,l).addToRef(o,l),l.subtractToRef(c,t).scaleToRef(_,t).addToRef(c,t)}else t.set(e.x,e.y,e.z)},e.prototype._getDisplacement=function(e,t,n){this._displacementMap&&(n.x=i.OiL.FromHalfFloat(this._displacementMap[t*this._size*4+4*e+0]),n.y=i.OiL.FromHalfFloat(this._displacementMap[t*this._size*4+4*e+1]),n.z=i.OiL.FromHalfFloat(this._displacementMap[t*this._size*4+4*e+2]))},e}()},4041:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Ocean:()=>d,default:()=>f});var i=n(1465),a=n(5811),r=n(6853),o=n(4059),s=n(6124),c=n(4292),l=n(3955);n(5026);const h=n.p+"cb69d722ba0e1aed94b8f0e32058b799.exr",u=n.p+"e388a5748796486181fbb8cb94bd0a66.glb",p=n.p+"1f306a6325b8c6d21b8125e742b24167.glb",_=n.p+"5b0b186220463f71ca8c72af6f8a9434.glb";var d=function(){function e(){this._engine=null,this._scene=null,this._camera=null,this._rttDebug=null,this._light=null,this._depthRenderer=null}return e.prototype.createScene=function(e,t){return n=this,d=void 0,m=function(){var n,d,f,m,v,g,y,b,w,x,S,M,C=this;return function(e,t){var n,i,a,r,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,i&&(a=2&r[0]?i.return:r[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,r[1])).done)return a;switch(i=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,i=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){o.label=r[1];break}if(6===r[0]&&o.label<a[1]){o.label=a[1],a=r;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(r);break}a[2]&&o.ops.pop(),o.trys.pop();continue}r=t.call(e,o)}catch(e){r=[6,e],i=0}finally{n=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}}(this,(function(D){switch(D.label){case 0:return window.convf=function(e){var t=new Uint8Array([255&e,(65280&e)>>8,(16711680&e)>>16,(4278190080&e)>>24]);return new Float32Array(t.buffer)[0]},window.numbg=function(){console.log("NumBindGroupsCreatedTotal=",i.C49.NumBindGroupsCreatedTotal," - NumBindGroupsCreatedLastFrame=",i.C49.NumBindGroupsCreatedLastFrame)},n=new i.xsS(e),this._engine=e,this._scene=n,this._rttDebug=new a.RTTDebug(n,e,32),this._rttDebug.show(!1),n.environmentIntensity=1,this._camera=new i.cEJ("mainCamera",new i.Pa4(-17.3,5,-9),n),this._camera.rotation.set(.21402315044176745,1.5974857677541419,0),this._camera.minZ=1,this._camera.maxZ=1e5,n.activeCameras=[this._camera,this._rttDebug.camera],this._camera.attachControl(t,!0),this._depthRenderer=this._scene.enableDepthRenderer(this._camera,!1),this._depthRenderer.getDepthMap().renderList=[],this._light=new i.Ox3("light",new i.Pa4(0,-1,-.25),n),this._light.intensity=1,this._light.diffuse=new i.Wot(1,.95686275,.8392157),d=256,f=new c.Buoyancy(d,4,.2),m=new o.SkyBox(!0,n),[4,i.n0n.AppendAsync("",u,n,void 0,".glb")];case 1:return D.sent(),(v=n.getMeshByName("pTorus5_lambert1_0")).scaling.setAll(.1),v.position.y=-.3,v.position.z=-15,this._depthRenderer.getDepthMap().renderList.push(v),f.addMesh(v,{v1:new i.Pa4(0,5,-6),v2:new i.Pa4(0,5,6),v3:new i.Pa4(5,5,-6)},-.3,1),[4,i.n0n.AppendAsync("",p,n,void 0,".glb")];case 2:return D.sent(),(g=n.getTransformNodeByName("Cube.022")).scaling.setAll(3),g.position.x=-5,g.position.y=1.5,g.position.z=-10,(M=this._depthRenderer.getDepthMap().renderList).push.apply(M,g.getChildMeshes(!1)),f.addMesh(g,{v1:new i.Pa4(0,2,0),v2:new i.Pa4(0,-1.2,0),v3:new i.Pa4(.4,2,0)},1.5,0),[4,i.n0n.AppendAsync("",_,n,void 0,".glb")];case 3:return D.sent(),(y=n.getMeshByName("tsunami_buoy_tsunami_buoy_0")).scaling.setAll(.0175),y.bakeCurrentTransformIntoVertices(),y.parent=null,y.alwaysSelectAsActiveMesh=!0,this._depthRenderer.getDepthMap().renderList.push(y),f.addMesh(y,{v1:new i.Pa4(.7,1,-1.5),v2:new i.Pa4(.7,1,1.5),v3:new i.Pa4(-1.5,1,-1.5)},-.5,2),n.stopAllAnimations(),[4,fetch(h)];case 4:return[4,D.sent().arrayBuffer()];case 5:return b=D.sent(),w=new r.WavesGenerator(d,n,this._rttDebug,b),x=new s.OceanMaterial(w,this._depthRenderer,n),[4,(S=new l.OceanGeometry(x,this._camera,n)).initialize()];case 6:return D.sent(),new i.PTh("fxaa",1,this._camera).samples=e.getCaps().maxMSAASamples,n.onBeforeRenderObservable.add((function(){m.update(C._light),S.update(),w.update(),f.setWaterHeightMap(w.waterHeightMap,w.waterHeightMapScale),f.update()})),[2,n]}}))},new((f=void 0)||(f=Promise))((function(e,t){function i(e){try{r(m.next(e))}catch(e){t(e)}}function a(e){try{r(m.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof f?n:new f((function(e){e(n)}))).then(i,a)}r((m=m.apply(n,d||[])).next())}));var n,d,f,m},e}();const f=new d},3955:(e,t,n)=>{"use strict";n.r(t),n.d(t,{OceanGeometry:()=>r});var i,a=n(1465);!function(e){e[e.None=0]="None",e[e.Left=1]="Left",e[e.Right=2]="Right",e[e.Top=4]="Top",e[e.Bottom=8]="Bottom",e[e.All=15]="All"}(i||(i={}));var r=function(){function e(e,t,n){this.lengthScale=15,this.vertexDensity=30,this.clipLevels=8,this.skirtSize=55.4,this.noMaterialLod=!0,this.useSkirt=!0,this._oceanMaterial=e,this._camera=t,this._scene=n,this._materials=[],this._root=new a.YOI("Ocean",n),this._center=null,this._skirt=null,this._rings=[],this._trims=[],this._trimRotations=[a._fP.RotationAxis(a.Pa4.UpReadOnly,a.RZi.FromDegrees(180).radians()),a._fP.RotationAxis(a.Pa4.UpReadOnly,a.RZi.FromDegrees(90).radians()),a._fP.RotationAxis(a.Pa4.UpReadOnly,a.RZi.FromDegrees(270).radians()),a._fP.Identity()]}return e.prototype.initialize=function(){return e=this,t=void 0,i=function(){var e,t;return function(e,t){var n,i,a,r,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,i&&(a=2&r[0]?i.return:r[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,r[1])).done)return a;switch(i=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,i=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){o.label=r[1];break}if(6===r[0]&&o.label<a[1]){o.label=a[1],a=r;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(r);break}a[2]&&o.ops.pop(),o.trys.pop();continue}r=t.call(e,o)}catch(e){r=[6,e],i=0}finally{n=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}}(this,(function(n){switch(n.label){case 0:return e=this,[4,this._oceanMaterial.getMaterial(!0,!0)];case 1:return t=[n.sent()],[4,this._oceanMaterial.getMaterial(!0,!1)];case 2:return t=t.concat([n.sent()]),[4,this._oceanMaterial.getMaterial(!1,!1)];case 3:return e._materials=t.concat([n.sent()]),this._instantiateMeshes(),[2]}}))},new((n=void 0)||(n=Promise))((function(a,r){function o(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}c((i=i.apply(e,t||[])).next())}));var e,t,n,i},e.prototype.update=function(){this._updatePositions(),this._updateMaterials()},e.prototype._updateMaterials=function(){var e=this._activeLodLevels;this._center.material=this._getMaterial(this.noMaterialLod?0:this.clipLevels-e-1);for(var t=0;t<this._rings.length;t++)this._rings[t].material=this._getMaterial(this.noMaterialLod?0:this.clipLevels-e-t),this._trims[t].material=this._getMaterial(this.noMaterialLod?0:this.clipLevels-e-t);this.useSkirt&&(this._skirt.material=this.noMaterialLod?this._materials[0]:this._materials[2])},e.prototype._updatePositions=function(){var e=this._gridSize,t=this._activeLodLevels,n=a.jp9.Vector3[0],i=a.jp9.Vector3[1],r=a.jp9.Vector3[2],o=a.jp9.Vector3[3],s=this._clipLevelScale(-1,t);n.copyFrom(this._camera.position),this._snap(n,2*s),this._offsetFromCenter(-1,t,i),this._center.position.copyFrom(n).addInPlace(i),this._center.scaling.set(s,1,s);for(var c=0;c<this.clipLevels;c++)if(this._rings[c].setEnabled(c<t),this._trims[c].setEnabled(c<t),!(c>=t)){s=this._clipLevelScale(c,t),r.copyFrom(this._camera.position),this._snap(r,2*s),this._offsetFromCenter(c,t,i),o.copyFrom(r).addInPlace(i).addInPlaceFromFloats(s*(e-1)/2,0,s*(e-1)/2);var l=n.x-r.x<=0?1:0,h=n.z-r.z<=0?1:0;o.x+=l*(e+1)*s,o.z+=h*(e+1)*s,this._trims[c].position.copyFrom(o),this._trims[c].rotationQuaternion.copyFrom(this._trimRotations[l+2*h]),this._trims[c].scaling.set(s,1,s),this._rings[c].position.copyFrom(r).addInPlace(i),this._rings[c].scaling.set(s,1,s),n.copyFrom(r)}this.useSkirt&&(s=2*this.lengthScale*Math.pow(2,this.clipLevels),this._skirt.position.copyFrom(n).addInPlaceFromFloats(-s*(this.skirtSize+.5-.5/e),0,-s*(this.skirtSize+.5-.5/e)),this._skirt.scaling.set(s,1,s))},Object.defineProperty(e.prototype,"_activeLodLevels",{get:function(){return this.clipLevels-a.Rus.Clamp(Math.floor(Math.log2((1.7*Math.abs(this._camera.position.y)+1)/this.lengthScale)),0,this.clipLevels)},enumerable:!1,configurable:!0}),e.prototype._clipLevelScale=function(e,t){return this.lengthScale/this._gridSize*Math.pow(2,this.clipLevels-t+e+1)},e.prototype._offsetFromCenter=function(t,n,i){var a=this._gridSize,r=((1<<this.clipLevels)+e._GeometricProgressionSum(2,2,this.clipLevels-n+t+1,this.clipLevels-1))*this.lengthScale/a*(a-1)/2;i.copyFromFloats(-r,0,-r)},e._GeometricProgressionSum=function(e,t,n,i){return e/(1-t)*(Math.pow(t,i)-Math.pow(t,n))},e.prototype._snap=function(e,t){e.x>=0?e.x=Math.floor(e.x/t)*t:e.x=Math.ceil((e.x-t+1)/t)*t,e.z<0?e.z=Math.floor(e.z/t)*t:e.z=Math.ceil((e.z-t+1)/t)*t,e.y=0},e.prototype._getMaterial=function(e){return e-2<=0?this._materials[0]:e-2<=2?this._materials[1]:this._materials[2]},Object.defineProperty(e.prototype,"_gridSize",{get:function(){return 4*this.vertexDensity+1},enumerable:!1,configurable:!0}),e.prototype._instantiateMeshes=function(){var e=this._gridSize;this._center=this._instantiateElement("Center",this._createPlaneMesh(2*e,2*e,1,i.All),this._materials[this._materials.length-1]);for(var t=this._createRingMesh(e,1),n=this._createTrimMesh(e,1),a=0;a<this.clipLevels;++a)this._rings.push(this._instantiateElement("Ring "+a,t,this._materials[this._materials.length-1],a>0)),this._trims.push(this._instantiateElement("Trim "+a,n,this._materials[this._materials.length-1],a>0));this.useSkirt&&(this._skirt=this._instantiateElement("Skirt",this._createSkirtMesh(e,this.skirtSize),this._materials[this._materials.length-1]))},e.prototype._instantiateElement=function(e,t,n,i){return void 0===i&&(i=!1),i&&(t=t.clone("")),t.name=e,t.material=n,t.parent=this._root,t},e.prototype._createSkirtMesh=function(e,t){var n=this._createPlaneMesh(1,1,1),i=this._createPlaneMesh(e,1,1),r=this._createPlaneMesh(1,e,1),o=new a.Pa4(t,1,t),s=new a.Pa4(1/e,1,t),c=new a.Pa4(t,1,1/e),l=n.clone();l.scaling.copyFrom(o);var h=i.clone();h.scaling.copyFrom(s),h.position.x=t;var u=n.clone();u.scaling.copyFrom(o),u.position.x=t+1;var p=r.clone();p.scaling.copyFrom(c),p.position.z=t;var _=r.clone();_.scaling.copyFrom(c),_.position.x=t+1,_.position.z=t;var d=n.clone();d.scaling.copyFrom(o),d.position.z=t+1;var f=i.clone();f.scaling.copyFrom(s),f.position.x=t,f.position.z=t+1;var m=n.clone();return m.scaling.copyFrom(o),m.position.x=t+1,m.position.z=t+1,n.dispose(!0,!1),i.dispose(!0,!1),r.dispose(!0,!1),a.Kj0.MergeMeshes([l,h,u,p,_,d,f,m],!0,!0)},e.prototype._createTrimMesh=function(e,t){var n=this._createPlaneMesh(e+1,1,t,i.None,1);n.position.set((-e-1)*t,0,-1*t);var r=this._createPlaneMesh(1,e,t,i.None,1);r.position.set(-1*t,0,(-e-1)*t);var o=a.Kj0.MergeMeshes([n,r],!0,!0);return o.rotationQuaternion=new a._fP,o},e.prototype._createRingMesh=function(e,t){var n=this._createPlaneMesh(2*e,e-1>>1,t,i.Bottom|i.Right|i.Left),r=this._createPlaneMesh(2*e,e-1>>1,t,i.Top|i.Right|i.Left);r.position.set(0,0,(e+1+(e-1>>1))*t);var o=this._createPlaneMesh(e-1>>1,e+1,t,i.Left);o.position.set(0,0,(e-1>>1)*t);var s=this._createPlaneMesh(e-1>>1,e+1,t,i.Right);return s.position.set((e+1+(e-1>>1))*t,0,(e-1>>1)*t),a.Kj0.MergeMeshes([n,r,o,s],!0,!0)},e.prototype._createPlaneMesh=function(e,t,n,r,o){void 0===r&&(r=i.None),void 0===o&&(o=0);var s=[],c=[],l=[],h=new a.xx8;h.positions=s,h.indices=c,h.normals=l;for(var u=0;u<t+1;++u)for(var p=0;p<e+1;++p){var _=p,d=u;(0===u&&r&i.Bottom||u===t&&r&i.Top)&&(_&=-2),(0===p&&r&i.Left||p===e&&r&i.Right)&&(d&=-2),s[0+3*p+u*(e+1)*3]=_*n,s[1+3*p+u*(e+1)*3]=0*n,s[2+3*p+u*(e+1)*3]=d*n,l[0+3*p+u*(e+1)*3]=0,l[1+3*p+u*(e+1)*3]=1,l[2+3*p+u*(e+1)*3]=0}var f=0;for(u=0;u<t;++u)for(p=0;p<e;++p){var m=p+u*(e+1);(u+p+o)%2==0?(c[f++]=m,c[f++]=m+e+2,c[f++]=m+e+1,c[f++]=m,c[f++]=m+1,c[f++]=m+e+2):(c[f++]=m,c[f++]=m+1,c[f++]=m+e+1,c[f++]=m+1,c[f++]=m+e+2,c[f++]=m+e+1)}var v=new a.Kj0("Clipmap plane",this._scene);return h.applyToMesh(v,!0),v},e}()},6124:(e,t,n)=>{"use strict";n.r(t),n.d(t,{OceanMaterial:()=>o});var i=n(1465),a=n(5454);const r=n.p+"9c85eca814352b70dd5242dd178d6d9c.jpg";var o=function(){function e(e,t,n){var a,o;this._wavesGenerator=e,this._depthRenderer=t,this._scene=n,this._camera=null!==(o=null===(a=n.activeCameras)||void 0===a?void 0:a[0])&&void 0!==o?o:n.activeCamera,this._foamTexture=new i.xEZ(r,this._scene),this._startTime=(new Date).getTime()/1e3}return e.prototype.getMaterial=function(e,t,n){return void 0===n&&(n=!1),r=this,o=void 0,c=function(){var r,o,s,c=this;return function(e,t){var n,i,a,r,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,i&&(a=2&r[0]?i.return:r[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,r[1])).done)return a;switch(i=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,i=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){o.label=r[1];break}if(6===r[0]&&o.label<a[1]){o.label=a[1],a=r;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(r);break}a[2]&&o.ops.pop(),o.trys.pop();continue}r=t.call(e,o)}catch(e){r=[6,e],i=0}finally{n=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}}(this,(function(l){switch(l.label){case 0:return n?[3,1]:((r=new a.B_("oceanMat"+(e?"1":"0")+(t?"1":"0"),this._scene)).metallic=0,r.roughness=.311,r.forceIrradianceInFragment=!0,o=new i.Pa4(.03457636,.12297464,.1981132),r.AddUniform("_LOD_scale","float",7.13),r.AddUniform("_FoamColor","vec3",new i.Pa4(1,1,1)),r.AddUniform("_SSSStrength","float",.133),r.AddUniform("_Color","vec3",o),r.AddUniform("_SSSColor","vec3",new i.Pa4(.1541919,.8857628,.990566)),r.AddUniform("_SSSBase","float",-.1),r.AddUniform("_SSSScale","float",4.8),r.AddUniform("_MaxGloss","float",.91),r.AddUniform("_RoughnessScale","float",.0044),r.AddUniform("_FoamBiasLOD0","float",.84),r.AddUniform("_FoamBiasLOD1","float",1.83),r.AddUniform("_FoamBiasLOD2","float",2.72),r.AddUniform("_FoamScale","float",2.4),r.AddUniform("_ContactFoam","float",1),r.AddUniform("lightDirection","vec3",""),r.AddUniform("_WorldSpaceCameraPos","vec3",""),r.AddUniform("LengthScale0","float",this._wavesGenerator.lengthScale[0]),r.AddUniform("LengthScale1","float",this._wavesGenerator.lengthScale[1]),r.AddUniform("LengthScale2","float",this._wavesGenerator.lengthScale[2]),r.AddUniform("_Displacement_c0","sampler2D",this._wavesGenerator.getCascade(0).displacement),r.AddUniform("_Derivatives_c0","sampler2D",this._wavesGenerator.getCascade(0).derivatives),r.AddUniform("_Turbulence_c0","sampler2D",this._wavesGenerator.getCascade(0).turbulence),r.AddUniform("_Displacement_c1","sampler2D",this._wavesGenerator.getCascade(1).displacement),r.AddUniform("_Derivatives_c1","sampler2D",this._wavesGenerator.getCascade(1).derivatives),r.AddUniform("_Turbulence_c1","sampler2D",this._wavesGenerator.getCascade(1).turbulence),r.AddUniform("_Displacement_c2","sampler2D",this._wavesGenerator.getCascade(2).displacement),r.AddUniform("_Derivatives_c2","sampler2D",this._wavesGenerator.getCascade(2).derivatives),r.AddUniform("_Turbulence_c2","sampler2D",this._wavesGenerator.getCascade(2).turbulence),r.AddUniform("_Time","float",0),r.AddUniform("_CameraDepthTexture","sampler2D",this._depthRenderer.getDepthMap()),r.AddUniform("_CameraData","vec4",new i.Ltg(this._camera.minZ,this._camera.maxZ,this._camera.maxZ-this._camera.minZ,0)),r.AddUniform("_FoamTexture","sampler2D",this._foamTexture),s=[],e&&s.push("#define MID"),t&&s.push("#define CLOSE"),r.Vertex_Definitions("\n                "+s.join("\n")+"\n\n                varying vec2 vWorldUV;\n                varying vec2 vUVCoords_c0;\n                varying vec2 vUVCoords_c1;\n                varying vec2 vUVCoords_c2;\n                varying vec3 vViewVector;\n                varying vec4 vLodScales;\n                varying vec4 vClipCoords;\n                varying float vMetric;\n            "),r.Fragment_Definitions("\n                "+s.join("\n")+"\n\n                varying vec2 vWorldUV;\n                varying vec2 vUVCoords_c0;\n                varying vec2 vUVCoords_c1;\n                varying vec2 vUVCoords_c2;\n                varying vec3 vViewVector;\n                varying vec4 vLodScales;\n                varying vec4 vClipCoords;\n                varying float vMetric;\n            "),r.Vertex_After_WorldPosComputed("\n                vWorldUV = worldPos.xz;\n            \n                vViewVector = _WorldSpaceCameraPos - worldPos.xyz;\n                float viewDist = length(vViewVector);\n            \n                float lod_c0 = min(_LOD_scale * LengthScale0 / viewDist, 1.0);\n                float lod_c1 = min(_LOD_scale * LengthScale1 / viewDist, 1.0);\n                float lod_c2 = min(_LOD_scale * LengthScale2 / viewDist, 1.0);\n                    \n                vec3 displacement = vec3(0.);\n                float largeWavesBias = 0.;\n            \n                vUVCoords_c0 = vWorldUV / LengthScale0;\n                vUVCoords_c1 = vWorldUV / LengthScale1;\n                vUVCoords_c2 = vWorldUV / LengthScale2;\n            \n                displacement += texture2D(_Displacement_c0, vUVCoords_c0).xyz * lod_c0;\n                largeWavesBias = displacement.y;\n            \n                #if defined(MID) || defined(CLOSE)\n                    displacement += texture2D(_Displacement_c1, vUVCoords_c1).xyz * lod_c1;\n                #endif\n                #if defined(CLOSE)\n                    displacement += texture2D(_Displacement_c2, vUVCoords_c2).xyz * lod_c2;\n                #endif\n    \n                worldPos.xyz += displacement;\n\n                vLodScales = vec4(lod_c0, lod_c1, lod_c2, max(displacement.y - largeWavesBias * 0.8 - _SSSBase, 0) / _SSSScale);\n            "),r.Vertex_MainEnd("\n                vClipCoords = gl_Position;\n                vMetric = gl_Position.z;\n            "),r.Fragment_Before_Lights("\n                vec4 derivatives = texture2D(_Derivatives_c0, vUVCoords_c0);\n                #if defined(MID) || defined(CLOSE)\n                    derivatives += texture2D(_Derivatives_c1, vUVCoords_c1) * vLodScales.y;\n                #endif\n                #if defined(CLOSE)\n                    derivatives += texture2D(_Derivatives_c2, vUVCoords_c2) * vLodScales.z;\n                #endif\n\n                vec2 slope = vec2(derivatives.x / (1.0 + derivatives.z), derivatives.y / (1.0 + derivatives.w));\n                normalW = normalize(vec3(-slope.x, 1.0, -slope.y));\n\n                #if defined(CLOSE)\n                    float jacobian = texture2D(_Turbulence_c0, vUVCoords_c0).x + texture2D(_Turbulence_c1, vUVCoords_c1).x + texture2D(_Turbulence_c2, vUVCoords_c2).x;\n                    jacobian = min(1.0, max(0.0, (-jacobian + _FoamBiasLOD2) * _FoamScale));\n                #elif defined(MID)\n                    float jacobian = texture2D(_Turbulence_c0, vUVCoords_c0).x + texture2D(_Turbulence_c1, vUVCoords_c1).x;\n                    jacobian = min(1.0, max(0.0, (-jacobian + _FoamBiasLOD1) * _FoamScale));\n                #else\n                    float jacobian = texture2D(_Turbulence_c0, vUVCoords_c0).x;\n                    jacobian = min(1.0, max(0.0, (-jacobian + _FoamBiasLOD0) * _FoamScale));\n                #endif\n\n                vec2 screenUV = vClipCoords.xy / vClipCoords.w;\n                screenUV = screenUV * 0.5 + 0.5;\n                float backgroundDepth = texture2D(_CameraDepthTexture, screenUV).r * _CameraData.y;\n                float surfaceDepth = vMetric;\n                float depthDifference = max(0.0, (backgroundDepth - surfaceDepth) - 0.1);\n                float foam = texture2D(_FoamTexture, vWorldUV * 0.5 + _Time).r;\n                jacobian += _ContactFoam * saturate(max(0.0, foam - depthDifference) * 5.0) * 0.9;\n    \n                surfaceAlbedo = mix(vec3(0.0), _FoamColor, jacobian);\n\n                vec3 viewDir = normalize(vViewVector);\n                vec3 H = normalize(-normalW + lightDirection);\n                float ViewDotH = pow5(saturate(dot(viewDir, -H))) * 30.0 * _SSSStrength;\n                vec3 color = mix(_Color, saturate(_Color + _SSSColor.rgb * ViewDotH * vLodScales.w), vLodScales.z);\n    \n                float fresnel = dot(normalW, viewDir);\n                fresnel = saturate(1.0 - fresnel);\n                fresnel = pow5(fresnel);\n            "),r.Fragment_Custom_MetallicRoughness("\n                float distanceGloss = mix(1.0 - metallicRoughness.g, _MaxGloss, 1.0 / (1.0 + length(vViewVector) * _RoughnessScale));\n                metallicRoughness.g = 1.0 - mix(distanceGloss, 0.0, jacobian);\n            "),r.Fragment_Before_FinalColorComposition("\n                finalEmissive = mix(color * (1.0 - fresnel), vec3(0.0), jacobian);\n            "),r.Fragment_Before_FragColor("\n                //finalColor = vec4(toGammaSpace((normalW + vec3(1.)) / vec3(2.)), 1.);\n                //finalColor = vec4(vec3(surfaceDepth), 1.);\n            "),r.onBindObservable.add((function(){var e,t,n,i,a,o,s=((new Date).getTime()/1e3-c._startTime)/10;null===(e=r.getEffect())||void 0===e||e.setVector3("_WorldSpaceCameraPos",c._camera.position),null===(t=r.getEffect())||void 0===t||t.setTexture("_Turbulence_c0",c._wavesGenerator.getCascade(0).turbulence),null===(n=r.getEffect())||void 0===n||n.setTexture("_Turbulence_c1",c._wavesGenerator.getCascade(1).turbulence),null===(i=r.getEffect())||void 0===i||i.setTexture("_Turbulence_c2",c._wavesGenerator.getCascade(2).turbulence),null===(a=r.getEffect())||void 0===a||a.setFloat("_Time",s),null===(o=r.getEffect())||void 0===o||o.setVector3("lightDirection",c._scene.lights[0].direction)})),[2,new Promise((function(e){c._foamTexture.isReady()?e(r):c._foamTexture.onLoadObservable.addOnce((function(){e(r)}))}))]);case 1:return[4,i.Oie.ParseFromSnippetAsync("R4152I#24",this._scene)];case 2:(r=l.sent()).getInputBlockByPredicate((function(e){return"LOD_scale"===e.name})).value=7.13,r.getInputBlockByPredicate((function(e){return"LengthScale0"===e.name})).value=this._wavesGenerator.lengthScale[0],r.getInputBlockByPredicate((function(e){return"Roughness"===e.name})).value=.311,r.getInputBlockByPredicate((function(e){return"metallic"===e.name})).value=0,r.getBlockByName("Displacement_c0").texture=this._wavesGenerator.getCascade(0).displacement,r.getBlockByName("Derivatives_c0").texture=this._wavesGenerator.getCascade(0).derivatives,r.build(),l.label=3;case 3:return[2,r]}}))},new((s=void 0)||(s=Promise))((function(e,t){function n(e){try{a(c.next(e))}catch(e){t(e)}}function i(e){try{a(c.throw(e))}catch(e){t(e)}}function a(t){var a;t.done?e(t.value):(a=t.value,a instanceof s?a:new s((function(e){e(a)}))).then(n,i)}a((c=c.apply(r,o||[])).next())}));var r,o,s,c},e}()},4059:(e,t,n)=>{"use strict";n.r(t),n.d(t,{SkyBox:()=>o});var i=n(1465),a=n(5454);n(6699);const r=n.p+"0c03bd6e3c9d04da0cf428bbf487bf68.hdr";var o=function(){function e(e,t){var n=this;this._procedural=e,this._scene=t,this._oldSunPosition=new i.Pa4,this._skyMaterial=null,this._probe=null,this._skybox=i.VO7.CreateBox("skyBox",{size:1e3,sideOrientation:i.Kj0.BACKSIDE},this._scene),t.onBeforeRenderObservable.add((function(){var e,i;n._skybox.position=null!==(i=null===(e=t.activeCameras)||void 0===e?void 0:e[0].position)&&void 0!==i?i:t.activeCamera.position})),e?this._initProceduralSkybox():this._initSkybox()}return Object.defineProperty(e.prototype,"probe",{get:function(){return this._probe},enumerable:!1,configurable:!0}),e.prototype.update=function(e){this._procedural&&(this._oldSunPosition.equals(this._skyMaterial.sunPosition)||(this._probe.cubeTexture.refreshRate=0,this._oldSunPosition.copyFrom(this._skyMaterial.sunPosition)),e.position=this._skyMaterial.sunPosition,e.direction=this._skyMaterial.sunPosition.negate().normalize(),e.diffuse=this._skyMaterial.getSunColor())},e.prototype._initProceduralSkybox=function(){var e=this;this._skyMaterial=new a.fE("sky",this._scene),this._skybox.material=this._skyMaterial,this._skybox.material.disableDepthWrite=!0,this._skyMaterial.azimuth=.307,this._skyMaterial.inclination=0,window.ss=this._skyMaterial,this._probe=new i.xNJ("skyProbe",128,this._scene,!0,!0,!0),this._probe.renderList.push(this._skybox),this._probe.cubeTexture.refreshRate=0,this._probe.cubeTexture.onAfterUnbindObservable.add((function(){var t;(t=e._probe.cubeTexture.getInternalTexture())._sphericalPolynomial=null,t._sphericalPolynomialPromise=null,t._sphericalPolynomialComputed=!1})),this._scene.environmentTexture=this._probe.cubeTexture,this._scene.customRenderTargets.push(this._probe.cubeTexture)},e.prototype._initSkybox=function(){var e=new i.ev7(r,this._scene,512,!1,!0,!1,!0),t=new i.KuD("skyBox",this._scene);t.backFaceCulling=!1,t.reflectionTexture=e,t.reflectionTexture.coordinatesMode=i.xEZ.SKYBOX_MODE,t.diffuseColor=new i.Wot(0,0,0),t.specularColor=new i.Wot(0,0,0),this._skybox.material=t},e}()}}]);
//# sourceMappingURL=41.babylonBundle.js.map