"use strict";(self.webpackChunkbabylonjs_ocean_demo=self.webpackChunkbabylonjs_ocean_demo||[]).push([[389,14],{389:(e,t,r)=>{r.r(t),r.d(t,{FFT:()=>a});var n=r(6925),i=r(7014);class a{constructor(e,t,r,a,u){this._engine=e,this._rttDebug=r,this._debugFirstIndex=a,this._size=u,this._horizontalStepIFFT=[],this._verticalStepIFFT=[],this._permute=null;const o=new n.ComputeShader("computeTwiddleFactors",this._engine,{computeSource:"const PI: f32 = 3.1415926;\r\n\r\n@group(0) @binding(0) var PrecomputeBuffer : texture_storage_2d<rgba32float, write>;\r\n\r\nstruct Params {\r\n    Step : i32,\r\n    Size : i32,\r\n};\r\n\r\n@group(0) @binding(1) var<uniform> params : Params;\r\n\r\nfn complexMult(a: vec2<f32>, b: vec2<f32>) -> vec2<f32>\r\n{\r\n\treturn vec2<f32>(a.r * b.r - a.g * b.g, a.r * b.g + a.g * b.r);\r\n}\r\n\r\nfn complexExp(a: vec2<f32>) -> vec2<f32>\r\n{\r\n\treturn vec2<f32>(cos(a.y), sin(a.y)) * exp(a.x);\r\n}\r\n\r\n@compute @workgroup_size(1,8,1)\r\nfn precomputeTwiddleFactorsAndInputIndices(@builtin(global_invocation_id) id : vec3<u32>)\r\n{\r\n    let iid = vec3<i32>(id);\r\n\tlet b = params.Size >> (id.x + 1u);\r\n\tlet mult = 2.0 * PI * vec2<f32>(0.0, -1.0) / f32(params.Size);\r\n\tlet i = (2 * b * (iid.y / b) + (iid.y % b)) % params.Size;\r\n\tlet twiddle = complexExp(mult * vec2<f32>(f32((iid.y / b) * b)));\r\n\t\r\n    textureStore(PrecomputeBuffer, iid.xy, vec4<f32>(twiddle.x, twiddle.y, f32(i), f32(i + b)));\r\n\ttextureStore(PrecomputeBuffer, vec2<i32>(iid.x, iid.y + params.Size / 2), vec4<f32>(-twiddle.x, -twiddle.y, f32(i), f32(i + b)));\r\n}\r\n"},{bindingsMapping:{PrecomputeBuffer:{group:0,binding:0},params:{group:0,binding:1}},entryPoint:"precomputeTwiddleFactorsAndInputIndices"}),p=0|Math.log2(u);this._precomputedData=i.ComputeHelper.CreateStorageTexture("precomputeTwiddle",this._engine,p,this._size,n.Constants.TEXTUREFORMAT_RGBA),this._rttDebug.setTexture(this._debugFirstIndex,"precomputeTwiddle",this._precomputedData),this._params=new n.UniformBuffer(this._engine),this._params.addUniform("Step",1),this._params.addUniform("Size",1),o.setStorageTexture("PrecomputeBuffer",this._precomputedData),o.setUniformBuffer("params",this._params),this._params.updateInt("Size",this._size),this._params.update(),i.ComputeHelper.Dispatch(o,p,u/2,1),this._createComputeShaders()}IFFT2D(e,t){const r=0|Math.log2(this._size);let n=!1;for(let a=0;a<r;++a)n=!n,this._params.updateInt("Step",a),this._params.update(),this._horizontalStepIFFT[0].setTexture("InputBuffer",n?e:t,!1),this._horizontalStepIFFT[0].setStorageTexture("OutputBuffer",n?t:e),i.ComputeHelper.Dispatch(this._horizontalStepIFFT[0],this._size,this._size,1);for(let a=0;a<r;++a)n=!n,this._params.updateInt("Step",a),this._params.update(),this._verticalStepIFFT[0].setTexture("InputBuffer",n?e:t,!1),this._verticalStepIFFT[0].setStorageTexture("OutputBuffer",n?t:e),i.ComputeHelper.Dispatch(this._verticalStepIFFT[0],this._size,this._size,1);n&&i.ComputeHelper.CopyTexture(t,e,this._engine),this._permute.setTexture("InputBuffer",e,!1),this._permute.setStorageTexture("OutputBuffer",t),i.ComputeHelper.Dispatch(this._permute,this._size,this._size,1),i.ComputeHelper.CopyTexture(t,e,this._engine)}dispose(){this._precomputedData.dispose(),this._params.dispose()}_createComputeShaders(){for(let e=0;e<2;++e)this._horizontalStepIFFT[e]=new n.ComputeShader("horizontalStepIFFT",this._engine,{computeSource:"struct Params {\r\n    Step : i32,\r\n    Size : i32,\r\n};\r\n\r\n@group(0) @binding(1) var<uniform> params : Params;\r\n\r\n@group(0) @binding(3) var PrecomputedData : texture_2d<f32>;\r\n\r\n@group(0) @binding(5) var InputBuffer : texture_2d<f32>;\r\n@group(0) @binding(6) var OutputBuffer : texture_storage_2d<rg32float, write>;\r\n\r\nfn complexMult(a: vec2<f32>, b: vec2<f32>) -> vec2<f32>\r\n{\r\n\treturn vec2<f32>(a.r * b.r - a.g * b.g, a.r * b.g + a.g * b.r);\r\n}\r\n\r\n@compute @workgroup_size(8,8,1)\r\nfn horizontalStepInverseFFT(@builtin(global_invocation_id) id : vec3<u32>)\r\n{\r\n    let iid = vec3<i32>(id);\r\n    let data = textureLoad(PrecomputedData, vec2<i32>(params.Step, iid.x), 0);\r\n\tlet inputsIndices = vec2<i32>(data.ba);\r\n\r\n    let input0 = textureLoad(InputBuffer, vec2<i32>(inputsIndices.x, iid.y), 0);\r\n    let input1 = textureLoad(InputBuffer, vec2<i32>(inputsIndices.y, iid.y), 0);\r\n\r\n    textureStore(OutputBuffer, iid.xy, vec4<f32>(\r\n        input0.xy + complexMult(vec2<f32>(data.r, -data.g), input1.xy), 0., 0.\r\n    ));\r\n}\r\n"},{bindingsMapping:{params:{group:0,binding:1},PrecomputedData:{group:0,binding:3},InputBuffer:{group:0,binding:5},OutputBuffer:{group:0,binding:6}},entryPoint:"horizontalStepInverseFFT"}),this._horizontalStepIFFT[e].setUniformBuffer("params",this._params),this._horizontalStepIFFT[e].setTexture("PrecomputedData",this._precomputedData,!1),this._verticalStepIFFT[e]=new n.ComputeShader("verticalStepIFFT",this._engine,{computeSource:"struct Params {\r\n    Step : i32,\r\n    Size : i32,\r\n};\r\n\r\n@group(0) @binding(1) var<uniform> params : Params;\r\n\r\n@group(0) @binding(3) var PrecomputedData : texture_2d<f32>;\r\n\r\n@group(0) @binding(5) var InputBuffer : texture_2d<f32>;\r\n@group(0) @binding(6) var OutputBuffer : texture_storage_2d<rg32float, write>;\r\n\r\nfn complexMult(a: vec2<f32>, b: vec2<f32>) -> vec2<f32>\r\n{\r\n\treturn vec2<f32>(a.r * b.r - a.g * b.g, a.r * b.g + a.g * b.r);\r\n}\r\n\r\n@compute @workgroup_size(8,8,1)\r\nfn verticalStepInverseFFT(@builtin(global_invocation_id) id : vec3<u32>)\r\n{\r\n    let iid = vec3<i32>(id);\r\n    let data = textureLoad(PrecomputedData, vec2<i32>(params.Step, iid.y), 0);\r\n\tlet inputsIndices = vec2<i32>(data.ba);\r\n\r\n    let input0 = textureLoad(InputBuffer, vec2<i32>(iid.x, inputsIndices.x), 0);\r\n    let input1 = textureLoad(InputBuffer, vec2<i32>(iid.x, inputsIndices.y), 0);\r\n\r\n    textureStore(OutputBuffer, iid.xy, vec4<f32>(\r\n        input0.xy + complexMult(vec2<f32>(data.r, -data.g), input1.xy), 0., 0.\r\n    ));\r\n}\r\n"},{bindingsMapping:{params:{group:0,binding:1},PrecomputedData:{group:0,binding:3},InputBuffer:{group:0,binding:5},OutputBuffer:{group:0,binding:6}},entryPoint:"verticalStepInverseFFT"}),this._verticalStepIFFT[e].setUniformBuffer("params",this._params),this._verticalStepIFFT[e].setTexture("PrecomputedData",this._precomputedData,!1);this._permute=new n.ComputeShader("permute",this._engine,{computeSource:"@group(0) @binding(5) var InputBuffer : texture_2d<f32>;\r\n@group(0) @binding(6) var OutputBuffer : texture_storage_2d<rg32float, write>;\r\n\r\n@compute @workgroup_size(8,8,1)\r\nfn permute(@builtin(global_invocation_id) id : vec3<u32>)\r\n{\r\n    let iid = vec3<i32>(id);\r\n    let input = textureLoad(InputBuffer, iid.xy, 0);\r\n\r\n    textureStore(OutputBuffer, iid.xy, input * (1.0 - 2.0 * f32((iid.x + iid.y) % 2)));\r\n}\r\n"},{bindingsMapping:{InputBuffer:{group:0,binding:5},OutputBuffer:{group:0,binding:6}},entryPoint:"permute"})}}},7014:(e,t,r)=>{r.r(t),r.d(t,{ComputeHelper:()=>i});var n=r(6925);class i{static GetThreadGroupSizes(e,t){const r=new RegExp(`workgroup_size\\s*\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*\\)\\s*fn\\s+${t}\\s*\\(`,"g").exec(e);return r?new n.Vector3(parseInt(r[1]),parseInt(r[2]),parseInt(r[3])):new n.Vector3(1,1,1)}static CreateStorageTexture(e,t,r,i,a=n.Constants.TEXTUREFORMAT_RGBA,u=n.Constants.TEXTURETYPE_FLOAT,o=n.Constants.TEXTURE_NEAREST_SAMPLINGMODE,p=!1,s=n.Constants.TEXTURE_WRAP_ADDRESSMODE,d=null){var c,f;const{width:g,height:m}=d?d.getSize():{width:0,height:0};let l=d?null!==(c=d.getInternalTexture().type)&&void 0!==c?c:-1:-2,_=d?null!==(f=d.getInternalTexture().format)&&void 0!==f?f:-1:-2;return-1===l&&(l=n.Constants.TEXTURETYPE_UNSIGNED_BYTE),-1===_&&(_=n.Constants.TEXTUREFORMAT_RGBA),d&&g===r&&m===i&&u===l&&a===_||((d=new n.RawTexture(null,r,i,a,t,p,!1,o,u,n.Constants.TEXTURE_CREATIONFLAG_STORAGE)).name=e),d.wrapU=s,d.wrapV=s,d.updateSamplingMode(o),d}static CopyTexture(e,t,r){var a,u;const o=e.getInternalTexture().format===n.Constants.TEXTUREFORMAT_RG?2:4;if(!i._copyTexture4CS&&4===o||!i._copyTexture2CS&&2===o){const t=null!==(u=null===(a=e.getScene())||void 0===a?void 0:a.getEngine())&&void 0!==u?u:r,p=new n.ComputeShader(`copyTexture${o}Compute`,t,{computeSource:4===o?i._copyTexture4ComputeShader:i._copyTexture2ComputeShader},{bindingsMapping:{dest:{group:0,binding:0},src:{group:0,binding:1},params:{group:0,binding:2}}}),s=new n.UniformBuffer(t);s.addUniform("width",1),s.addUniform("height",1),p.setUniformBuffer("params",s),4===o?(i._copyTexture4CS=p,i._copyTexture4Params=s):(i._copyTexture2CS=p,i._copyTexture2Params=s)}const p=4===o?i._copyTexture4CS:i._copyTexture2CS,s=4===o?i._copyTexture4Params:i._copyTexture2Params;p.setTexture("src",e,!1),p.setStorageTexture("dest",t);const{width:d,height:c}=e.getSize();s.updateInt("width",d),s.updateInt("height",c),s.update(),i.Dispatch(p,d,c,1)}static CopyBufferToTexture(e,t){if(!i._copyBufferTextureCS){const e=t.getScene().getEngine(),r=new n.ComputeShader("copyBufferTextureCompute",e,{computeSource:i._copyBufferTextureComputeShader},{bindingsMapping:{dest:{group:0,binding:0},src:{group:0,binding:1},params:{group:0,binding:2}}}),a=new n.UniformBuffer(e);a.addUniform("width",1),a.addUniform("height",1),r.setUniformBuffer("params",a),i._copyBufferTextureCS=r,i._copyBufferTextureParams=a}i._copyBufferTextureCS.setStorageBuffer("src",e),i._copyBufferTextureCS.setStorageTexture("dest",t);const{width:r,height:a}=t.getSize();i._copyBufferTextureParams.updateInt("width",r),i._copyBufferTextureParams.updateInt("height",a),i._copyBufferTextureParams.update(),i.Dispatch(i._copyBufferTextureCS,r,a,1)}static CopyTextureToBuffer(e,t){if(!i._copyTextureBufferCS){const t=e.getScene().getEngine(),r=new n.ComputeShader("copyTextureBufferCompute",t,{computeSource:i._copyTextureBufferComputeShader},{bindingsMapping:{src:{group:0,binding:0},dest:{group:0,binding:1},params:{group:0,binding:2}}}),a=new n.UniformBuffer(t);a.addUniform("width",1),a.addUniform("height",1),r.setUniformBuffer("params",a),i._copyTextureBufferCS=r,i._copyTextureBufferParams=a}i._copyTextureBufferCS.setTexture("src",e,!1),i._copyTextureBufferCS.setStorageBuffer("dest",t);const{width:r,height:a}=e.getSize();i._copyTextureBufferParams.updateInt("width",r),i._copyTextureBufferParams.updateInt("height",a),i._copyTextureBufferParams.update(),i.Dispatch(i._copyTextureBufferCS,r,a,1)}static ClearTexture(e,t){if(!i._clearTextureCS){const t=e.getScene().getEngine(),r=new n.ComputeShader("clearTextureCompute",t,{computeSource:i._clearTextureComputeShader},{bindingsMapping:{tbuf:{group:0,binding:0},params:{group:0,binding:1}}}),a=new n.UniformBuffer(t);a.addUniform("color",4),a.addUniform("width",1),a.addUniform("height",1),r.setUniformBuffer("params",a),i._clearTextureCS=r,i._clearTextureParams=a}i._clearTextureCS.setStorageTexture("tbuf",e);const{width:r,height:a}=e.getSize();i._clearTextureParams.updateDirectColor4("color",t),i._clearTextureParams.updateInt("width",r),i._clearTextureParams.updateInt("height",a),i._clearTextureParams.update(),i.Dispatch(i._clearTextureCS,r,a,1)}static Dispatch(e,t,r=1,n=1){var a;e.threadGroupSizes||(e.threadGroupSizes=i.GetThreadGroupSizes(e.shaderPath.computeSource,null!==(a=e.options.entryPoint)&&void 0!==a?a:"main"));const u=e.threadGroupSizes,o=Math.ceil(t/u.x),p=Math.ceil(r/u.y),s=Math.ceil(n/u.z);e.dispatch(o,p,s)}}i._clearTextureComputeShader="\n        @group(0) @binding(0) var tbuf : texture_storage_2d<rgba32float, write>;\n\n        struct Params {\n            color : vec4<f32>,\n            width : u32,\n            height : u32,\n        };\n        @group(0) @binding(1) var<uniform> params : Params;\n\n        @compute @workgroup_size(8, 8, 1)\n        fn main(@builtin(global_invocation_id) global_id : vec3<u32>) {\n            if (global_id.x >= params.width || global_id.y >= params.height) {\n                return;\n            }\n            textureStore(tbuf, vec2<i32>(global_id.xy), params.color);\n        }\n    ",i._copyTexture4ComputeShader="\n        @group(0) @binding(0) var dest : texture_storage_2d<rgba32float, write>;\n        @group(0) @binding(1) var src : texture_2d<f32>;\n\n        struct Params {\n            width : u32,\n            height : u32,\n        };\n        @group(0) @binding(2) var<uniform> params : Params;\n\n        @compute @workgroup_size(8, 8, 1)\n        fn main(@builtin(global_invocation_id) global_id : vec3<u32>) {\n            if (global_id.x >= params.width || global_id.y >= params.height) {\n                return;\n            }\n            let pix : vec4<f32> = textureLoad(src, vec2<i32>(global_id.xy), 0);\n            textureStore(dest, vec2<i32>(global_id.xy), pix);\n        }\n    ",i._copyTexture2ComputeShader="\n        @group(0) @binding(0) var dest : texture_storage_2d<rg32float, write>;\n        @group(0) @binding(1) var src : texture_2d<f32>;\n\n        struct Params {\n            width : u32,\n            height : u32,\n        };\n        @group(0) @binding(2) var<uniform> params : Params;\n\n        @compute @workgroup_size(8, 8, 1)\n        fn main(@builtin(global_invocation_id) global_id : vec3<u32>) {\n            if (global_id.x >= params.width || global_id.y >= params.height) {\n                return;\n            }\n            let pix : vec4<f32> = textureLoad(src, vec2<i32>(global_id.xy), 0);\n            textureStore(dest, vec2<i32>(global_id.xy), pix);\n        }\n    ",i._copyBufferTextureComputeShader="\n        struct FloatArray {\n            elements : array<f32>,\n        };\n\n        @group(0) @binding(0) var dest : texture_storage_2d<rgba32float, write>;\n        @group(0) @binding(1) var<storage, read> src : FloatArray;\n\n        struct Params {\n            width : u32,\n            height : u32,\n        };\n        @group(0) @binding(2) var<uniform> params : Params;\n\n        @compute @workgroup_size(8, 8, 1)\n        fn main(@builtin(global_invocation_id) global_id : vec3<u32>) {\n            if (global_id.x >= params.width || global_id.y >= params.height) {\n                return;\n            }\n            let offset : u32 = global_id.y * params.width * 4u + global_id.x * 4u;\n            let pix : vec4<f32> = vec4<f32>(src.elements[offset], src.elements[offset + 1u], src.elements[offset + 2u], src.elements[offset + 3u]);\n            textureStore(dest, vec2<i32>(global_id.xy), pix);\n        }\n    ",i._copyTextureBufferComputeShader="\n        struct FloatArray {\n            elements : array<f32>,\n        };\n\n        @group(0) @binding(0) var src : texture_2d<f32>;\n        @group(0) @binding(1) var<storage, write> dest : FloatArray;\n\n        struct Params {\n            width : u32,\n            height : u32,\n        };\n        @group(0) @binding(2) var<uniform> params : Params;\n\n        @compute, workgroup_size(8, 8, 1)\n        fn main(@builtin(global_invocation_id) global_id : vec3<u32>) {\n            if (global_id.x >= params.width || global_id.y >= params.height) {\n                return;\n            }\n            let offset : u32 = global_id.y * params.width * 4u + global_id.x * 4u;\n            let pix : vec4<f32> = textureLoad(src, vec2<i32>(global_id.xy), 0);\n            dest.elements[offset] = pix.r;\n            dest.elements[offset + 1u] = pix.g;\n            dest.elements[offset + 2u] = pix.b;\n            dest.elements[offset + 3u] = pix.a;\n        }\n    "}}]);
//# sourceMappingURL=389.5ba9948b9eea06d77eaa.js.map