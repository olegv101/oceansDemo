"use strict";(self.webpackChunkbabylonjs_ocean_demo=self.webpackChunkbabylonjs_ocean_demo||[]).push([[565],{6565:(e,s,t)=>{t.r(s),t.d(s,{SkyBox:()=>n});var i=t(4432),o=t(4952);const r=t.p+"0c03bd6e3c9d04da0cf428bbf487bf68.hdr";t(6699);class n{constructor(e,s){this._procedural=e,this._scene=s,this._oldSunPosition=new i.Vector3,this._skyMaterial=null,this._probe=null,this._dirty=!1,this._dirtyCount=0,this._needPolynomialsRegen=!1,this._skybox=i.MeshBuilder.CreateBox("skyBox",{size:1e3,sideOrientation:i.Mesh.BACKSIDE},this._scene),s.meshes.splice(s.meshes.indexOf(this._skybox),1),s.meshes.splice(0,0,this._skybox),this._skyboxObserver=s.onBeforeRenderObservable.add((()=>{var e,t;this._skybox.position=null!==(t=null===(e=s.activeCameras)||void 0===e?void 0:e[0].position)&&void 0!==t?t:s.activeCamera.position})),e?this._initProceduralSkybox():this._initSkybox(),this.setAsDirty()}get probe(){return this._probe}get skyMaterial(){return this._skyMaterial}setAsDirty(){this._dirty=!0,this._dirtyCount=2,this._probe.cubeTexture.refreshRate=1,this._needPolynomialsRegen=!0}update(e){if(!this._procedural)return!1;let s=!1;const t=this._probe.cubeTexture.getInternalTexture();return this._oldSunPosition.equals(this._skyMaterial.sunPosition)&&!this._dirty||(this._oldSunPosition.copyFrom(this._skyMaterial.sunPosition),e.position=this._skyMaterial.sunPosition.clone(),e.direction=this._skyMaterial.sunPosition.negate().normalize(),e.diffuse=this._skyMaterial.getSunColor().toLinearSpace(),0==this._dirtyCount--&&(this._dirty=!1,this._probe.cubeTexture.refreshRate=0),s=!0),!this._dirty&&this._needPolynomialsRegen&&t._sphericalPolynomialComputed&&(this._probe.cubeTexture.forceSphericalPolynomialsRecompute(),this._needPolynomialsRegen=!1),s}dispose(){var e,s;this._scene.onBeforeRenderObservable.remove(this._skyboxObserver),this._scene.customRenderTargets=[],this._procedural?this._probe.dispose():(null===(e=this._scene.environmentTexture)||void 0===e||e.dispose(),null===(s=this._skybox.material.reflectionTexture)||void 0===s||s.dispose()),this._skybox.material.dispose(),this._skybox.dispose(),this._scene.environmentTexture=null}_initProceduralSkybox(){var e,s;this._skyMaterial=new o.fE("sky",this._scene),this._skybox.material=this._skyMaterial,this._skybox.material.disableDepthWrite=!0,this._skyMaterial.azimuth=.307,this._skyMaterial.inclination=0,this._probe=new i.ReflectionProbe("skyProbe",128,this._scene,!0,!0,!0),this._probe.renderList.push(this._skybox),this._probe.attachToMesh(this._skybox),this._probe.cubeTexture.activeCamera=null!==(s=null===(e=this._scene.activeCameras)||void 0===e?void 0:e[0])&&void 0!==s?s:this._scene.activeCamera,this._probe.cubeTexture.refreshRate=0,this._probe.cubeTexture.onAfterUnbindObservable.add((()=>{this._probe.cubeTexture.getInternalTexture()._sphericalPolynomialComputed?(this._probe.cubeTexture.forceSphericalPolynomialsRecompute(),this._needPolynomialsRegen=!1):this._needPolynomialsRegen=!0})),this._scene.environmentTexture=this._probe.cubeTexture,this._scene.customRenderTargets.push(this._probe.cubeTexture)}_initSkybox(){const e=new i.HDRCubeTexture(r,this._scene,256,!1,!0,!1,!0),s=new i.StandardMaterial("skyBox",this._scene);s.disableDepthWrite=!0,s.reflectionTexture=e.clone(),s.reflectionTexture.coordinatesMode=i.Texture.SKYBOX_MODE,s.diffuseColor=new i.Color3(0,0,0),s.specularColor=new i.Color3(0,0,0),this._skybox.material=s,this._scene.environmentTexture=e}}}}]);
//# sourceMappingURL=565.16e383e510c5349dc07f.js.map