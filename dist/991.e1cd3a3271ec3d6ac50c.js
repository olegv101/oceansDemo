"use strict";(self.webpackChunkbabylonjs_ocean_demo=self.webpackChunkbabylonjs_ocean_demo||[]).push([[991],{7991:(e,t,r)=>{r.r(t),r.d(t,{ComputeHelper:()=>a});var n=r(4684);class a{static GetThreadGroupSizes(e,t){const r=new RegExp(`workgroup_size\\s*\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*\\)\\s*fn\\s+${t}\\s*\\(`,"g").exec(e);return r?new n.Vector3(parseInt(r[1]),parseInt(r[2]),parseInt(r[3])):new n.Vector3(1,1,1)}static CreateStorageTexture(e,t,r,a,o=n.Constants.TEXTUREFORMAT_RGBA,i=n.Constants.TEXTURETYPE_FLOAT,u=n.Constants.TEXTURE_NEAREST_SAMPLINGMODE,s=!1,p=n.Constants.TEXTURE_WRAP_ADDRESSMODE,d=null){var c,g;const{width:f,height:l}=d?d.getSize():{width:0,height:0};let m=d?null!==(c=d.getInternalTexture().type)&&void 0!==c?c:-1:-2,_=d?null!==(g=d.getInternalTexture().format)&&void 0!==g?g:-1:-2;return-1===m&&(m=n.Constants.TEXTURETYPE_UNSIGNED_BYTE),-1===_&&(_=n.Constants.TEXTUREFORMAT_RGBA),d&&f===r&&l===a&&i===m&&o===_||((d=new n.RawTexture(null,r,a,o,t,s,!1,u,i,n.Constants.TEXTURE_CREATIONFLAG_STORAGE)).name=e),d.wrapU=p,d.wrapV=p,d.updateSamplingMode(u),d}static CopyTexture(e,t,r){var o,i;const u=e.getInternalTexture().format===n.Constants.TEXTUREFORMAT_RG?2:4;if(!a._copyTexture4CS&&4===u||!a._copyTexture2CS&&2===u){const t=null!==(i=null===(o=e.getScene())||void 0===o?void 0:o.getEngine())&&void 0!==i?i:r,s=new n.ComputeShader(`copyTexture${u}Compute`,t,{computeSource:4===u?a._copyTexture4ComputeShader:a._copyTexture2ComputeShader},{bindingsMapping:{dest:{group:0,binding:0},src:{group:0,binding:1},params:{group:0,binding:2}}}),p=new n.UniformBuffer(t);p.addUniform("width",1),p.addUniform("height",1),s.setUniformBuffer("params",p),4===u?(a._copyTexture4CS=s,a._copyTexture4Params=p):(a._copyTexture2CS=s,a._copyTexture2Params=p)}const s=4===u?a._copyTexture4CS:a._copyTexture2CS,p=4===u?a._copyTexture4Params:a._copyTexture2Params;s.setTexture("src",e,!1),s.setStorageTexture("dest",t);const{width:d,height:c}=e.getSize();p.updateInt("width",d),p.updateInt("height",c),p.update(),a.Dispatch(s,d,c,1)}static CopyBufferToTexture(e,t){if(!a._copyBufferTextureCS){const e=t.getScene().getEngine(),r=new n.ComputeShader("copyBufferTextureCompute",e,{computeSource:a._copyBufferTextureComputeShader},{bindingsMapping:{dest:{group:0,binding:0},src:{group:0,binding:1},params:{group:0,binding:2}}}),o=new n.UniformBuffer(e);o.addUniform("width",1),o.addUniform("height",1),r.setUniformBuffer("params",o),a._copyBufferTextureCS=r,a._copyBufferTextureParams=o}a._copyBufferTextureCS.setStorageBuffer("src",e),a._copyBufferTextureCS.setStorageTexture("dest",t);const{width:r,height:o}=t.getSize();a._copyBufferTextureParams.updateInt("width",r),a._copyBufferTextureParams.updateInt("height",o),a._copyBufferTextureParams.update(),a.Dispatch(a._copyBufferTextureCS,r,o,1)}static CopyTextureToBuffer(e,t){if(!a._copyTextureBufferCS){const t=e.getScene().getEngine(),r=new n.ComputeShader("copyTextureBufferCompute",t,{computeSource:a._copyTextureBufferComputeShader},{bindingsMapping:{src:{group:0,binding:0},dest:{group:0,binding:1},params:{group:0,binding:2}}}),o=new n.UniformBuffer(t);o.addUniform("width",1),o.addUniform("height",1),r.setUniformBuffer("params",o),a._copyTextureBufferCS=r,a._copyTextureBufferParams=o}a._copyTextureBufferCS.setTexture("src",e,!1),a._copyTextureBufferCS.setStorageBuffer("dest",t);const{width:r,height:o}=e.getSize();a._copyTextureBufferParams.updateInt("width",r),a._copyTextureBufferParams.updateInt("height",o),a._copyTextureBufferParams.update(),a.Dispatch(a._copyTextureBufferCS,r,o,1)}static ClearTexture(e,t){if(!a._clearTextureCS){const t=e.getScene().getEngine(),r=new n.ComputeShader("clearTextureCompute",t,{computeSource:a._clearTextureComputeShader},{bindingsMapping:{tbuf:{group:0,binding:0},params:{group:0,binding:1}}}),o=new n.UniformBuffer(t);o.addUniform("color",4),o.addUniform("width",1),o.addUniform("height",1),r.setUniformBuffer("params",o),a._clearTextureCS=r,a._clearTextureParams=o}a._clearTextureCS.setStorageTexture("tbuf",e);const{width:r,height:o}=e.getSize();a._clearTextureParams.updateDirectColor4("color",t),a._clearTextureParams.updateInt("width",r),a._clearTextureParams.updateInt("height",o),a._clearTextureParams.update(),a.Dispatch(a._clearTextureCS,r,o,1)}static Dispatch(e,t,r=1,n=1){var o;e.threadGroupSizes||(e.threadGroupSizes=a.GetThreadGroupSizes(e.shaderPath.computeSource,null!==(o=e.options.entryPoint)&&void 0!==o?o:"main"));const i=e.threadGroupSizes,u=Math.ceil(t/i.x),s=Math.ceil(r/i.y),p=Math.ceil(n/i.z);e.dispatch(u,s,p)}}a._clearTextureComputeShader="\n        @group(0) @binding(0) var tbuf : texture_storage_2d<rgba32float, write>;\n\n        struct Params {\n            color : vec4<f32>,\n            width : u32,\n            height : u32,\n        };\n        @group(0) @binding(1) var<uniform> params : Params;\n\n        @compute @workgroup_size(8, 8, 1)\n        fn main(@builtin(global_invocation_id) global_id : vec3<u32>) {\n            if (global_id.x >= params.width || global_id.y >= params.height) {\n                return;\n            }\n            textureStore(tbuf, vec2<i32>(global_id.xy), params.color);\n        }\n    ",a._copyTexture4ComputeShader="\n        @group(0) @binding(0) var dest : texture_storage_2d<rgba32float, write>;\n        @group(0) @binding(1) var src : texture_2d<f32>;\n\n        struct Params {\n            width : u32,\n            height : u32,\n        };\n        @group(0) @binding(2) var<uniform> params : Params;\n\n        @compute @workgroup_size(8, 8, 1)\n        fn main(@builtin(global_invocation_id) global_id : vec3<u32>) {\n            if (global_id.x >= params.width || global_id.y >= params.height) {\n                return;\n            }\n            let pix : vec4<f32> = textureLoad(src, vec2<i32>(global_id.xy), 0);\n            textureStore(dest, vec2<i32>(global_id.xy), pix);\n        }\n    ",a._copyTexture2ComputeShader="\n        @group(0) @binding(0) var dest : texture_storage_2d<rg32float, write>;\n        @group(0) @binding(1) var src : texture_2d<f32>;\n\n        struct Params {\n            width : u32,\n            height : u32,\n        };\n        @group(0) @binding(2) var<uniform> params : Params;\n\n        @compute @workgroup_size(8, 8, 1)\n        fn main(@builtin(global_invocation_id) global_id : vec3<u32>) {\n            if (global_id.x >= params.width || global_id.y >= params.height) {\n                return;\n            }\n            let pix : vec4<f32> = textureLoad(src, vec2<i32>(global_id.xy), 0);\n            textureStore(dest, vec2<i32>(global_id.xy), pix);\n        }\n    ",a._copyBufferTextureComputeShader="\n        struct FloatArray {\n            elements : array<f32>,\n        };\n\n        @group(0) @binding(0) var dest : texture_storage_2d<rgba32float, write>;\n        @group(0) @binding(1) var<storage, read> src : FloatArray;\n\n        struct Params {\n            width : u32,\n            height : u32,\n        };\n        @group(0) @binding(2) var<uniform> params : Params;\n\n        @compute @workgroup_size(8, 8, 1)\n        fn main(@builtin(global_invocation_id) global_id : vec3<u32>) {\n            if (global_id.x >= params.width || global_id.y >= params.height) {\n                return;\n            }\n            let offset : u32 = global_id.y * params.width * 4u + global_id.x * 4u;\n            let pix : vec4<f32> = vec4<f32>(src.elements[offset], src.elements[offset + 1u], src.elements[offset + 2u], src.elements[offset + 3u]);\n            textureStore(dest, vec2<i32>(global_id.xy), pix);\n        }\n    ",a._copyTextureBufferComputeShader="\n        struct FloatArray {\n            elements : array<f32>,\n        };\n\n        @group(0) @binding(0) var src : texture_2d<f32>;\n        @group(0) @binding(1) var<storage, write> dest : FloatArray;\n\n        struct Params {\n            width : u32,\n            height : u32,\n        };\n        @group(0) @binding(2) var<uniform> params : Params;\n\n        @compute, workgroup_size(8, 8, 1)\n        fn main(@builtin(global_invocation_id) global_id : vec3<u32>) {\n            if (global_id.x >= params.width || global_id.y >= params.height) {\n                return;\n            }\n            let offset : u32 = global_id.y * params.width * 4u + global_id.x * 4u;\n            let pix : vec4<f32> = textureLoad(src, vec2<i32>(global_id.xy), 0);\n            dest.elements[offset] = pix.r;\n            dest.elements[offset + 1u] = pix.g;\n            dest.elements[offset + 2u] = pix.b;\n            dest.elements[offset + 3u] = pix.a;\n        }\n    "}}]);
//# sourceMappingURL=991.e1cd3a3271ec3d6ac50c.js.map