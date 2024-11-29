import * as BABYLON from "@babylonjs/core";
import { Tools } from "@babylonjs/core/Misc/tools";
import GUI from 'lil-gui'; 

/*
async function LoadDAT(): Promise<void> {
    var _ = await import("@babylonjs/core/Misc/tools")
    return _.Tools.LoadScriptAsync("https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.6.2/dat.gui.min.js");
}
*/

export class OceanGUI {
    private _gui: any;
    private _visible: boolean;
    private _scene: BABYLON.Scene;
    private _paramRead: (name: string) => any;
    private _paramChanged: (name: string, value: any) => void;
    private _onKeyObserver: BABYLON.Nullable<BABYLON.Observer<BABYLON.KeyboardInfo>>;

    public static LoadDAT(): Promise<void> {
        return Tools.LoadScriptAsync("https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.6.2/dat.gui.min.js");
    }

    public set visible(v: boolean) {
        if (v === this._visible) {
            return;
        }
        this._visible = v;
        this._gui.domElement.style.display = v ? "" : "none";
    }

    constructor(hasProceduralSky: boolean, scene: BABYLON.Scene, engine: BABYLON.Engine, paramRead: (name: string) => any, paramChanged: (name: string, value: any) => void) {
        this._scene = scene;
        this._visible = true;
        this._onKeyObserver = null;
        this._paramRead = paramRead;
        this._paramChanged = paramChanged;

        const oldgui = document.getElementById("datGUI");
        if (oldgui !== null) {
            oldgui.remove();
        }
    
        this._gui = new GUI();
        this._gui.domElement.style.marginTop = "60px";
        this._gui.domElement.id = "datGUI";

        this._setupKeyboard();
        this._initialize();
    }

    public dispose() {
        const oldgui = document.getElementById("datGUI");
        if (oldgui !== null) {
            oldgui.remove();
        }
        this._scene.onKeyboardObservable.remove(this._onKeyObserver);
    }

    public updateParameter(name: string, value: any): void {
        console.log('OceanGUI.updateParameter called:', name, value);
        
        this._paramChanged(name, value);
        
        const control = this._gui.controllers.find((c: any) => c.property === name);
        if (control) {
            console.log('Found GUI control for:', name);
            control.setValue(value);
        } else {
            console.warn('No GUI control found for:', name);
        }
    }

    private _setupKeyboard(): void {
        this._onKeyObserver = this._scene.onKeyboardObservable.add((kbInfo) => {
            switch (kbInfo.type) {
                case BABYLON.KeyboardEventTypes.KEYDOWN:
                    //console.log("KEY DOWN: ", kbInfo.event.key);
                    break;
                case BABYLON.KeyboardEventTypes.KEYUP:
                    switch (kbInfo.event.key) {
                        case "F8": {
                            this.visible = !this._visible;
                            break;
                        }
                    }
                    //console.log("KEY UP: ", kbInfo.event.key, kbInfo.event.keyCode);
                    break;
            }
        });
    }

    private _initialize(): void {
        this._makeMenuWavesGenerator();
    }

    private _addList(menu: any, params: any, name: string, friendlyName: string, list: any[]): void {
        menu.add(params, name, list)
            .name(friendlyName)
            .onChange((value: any) => {
                this._paramChanged(name, value);
            });
    }

    private _addCheckbox(menu: any, params: any, name: string, friendlyName: string): void {
        menu.add(params, name)
            .name(friendlyName)
            .onChange((value: any) => {
                this._paramChanged(name, value);
            });
    }

    private _addSlider(menu: any, params: any, name: string, friendlyName: string, min: number, max: number, step: number): void {
        menu.add(params, name, min, max, step)
            .name(friendlyName)
            .onChange((value: any) => {
                this._paramChanged(name, value);
            });
    }

    private _addColor(menu: any, params: any, name: string, friendlyName: string): void {
        menu.addColor(params, name)
            .name(friendlyName)
            .onChange((value: any) => {
                this._paramChanged(name, value);
            });
    }

    private _makeMenuWavesGenerator(): void {
        const params = {
            waves_g: this._paramRead("waves_g"),
            waves_depth: this._paramRead("waves_depth"),
            waves_lambda: this._paramRead("waves_lambda"),

            waves_local_scale: this._paramRead("waves_local_scale"),
            waves_local_windSpeed: this._paramRead("waves_local_windSpeed"),
            waves_local_windDirection: this._paramRead("waves_local_windDirection"),
            waves_local_fetch: this._paramRead("waves_local_fetch"),
            waves_local_spreadBlend: this._paramRead("waves_local_spreadBlend"),
            waves_local_swell: this._paramRead("waves_local_swell"),
            waves_local_peakEnhancement: this._paramRead("waves_local_peakEnhancement"),
            waves_local_shortWavesFade: this._paramRead("waves_local_shortWavesFade"),

            waves_swell_scale: this._paramRead("waves_swell_scale"),
            waves_swell_windSpeed: this._paramRead("waves_swell_windSpeed"),
            waves_swell_windDirection: this._paramRead("waves_swell_windDirection"),
            waves_swell_fetch: this._paramRead("waves_swell_fetch"),
            waves_swell_spreadBlend: this._paramRead("waves_swell_spreadBlend"),
            waves_swell_swell: this._paramRead("waves_swell_swell"),
            waves_swell_peakEnhancement: this._paramRead("waves_swell_peakEnhancement"),
            waves_swell_shortWavesFade: this._paramRead("waves_swell_shortWavesFade"),
        };
        
        const wavesGenerator = this._gui.addFolder("Waves Generator");

        this._addSlider(wavesGenerator, params, "waves_g", "Gravity", 0.01, 30, 0.01);
        this._addSlider(wavesGenerator, params, "waves_depth", "Ocean depth", 0.001, 3, 0.001);
        this._addSlider(wavesGenerator, params, "waves_lambda", "Lambda", 0.0, 1, 0.001);

        const local = wavesGenerator.addFolder("Local");

        this._addSlider(local, params, "waves_local_scale", "Scale", 0.0, 1, 0.001);
        this._addSlider(local, params, "waves_local_windSpeed", "Wind speed", 0.001, 100, 0.001);
        this._addSlider(local, params, "waves_local_windDirection", "Wind direction", -100.0, 100, 0.1);
        this._addSlider(local, params, "waves_local_fetch", "Fetch", 100, 1000000, 100);
        this._addSlider(local, params, "waves_local_spreadBlend", "Spread blend", 0, 1, 0.01);
        this._addSlider(local, params, "waves_local_swell", "Swell", 0, 1, 0.01);
        this._addSlider(local, params, "waves_local_peakEnhancement", "Peak enhanc.", 0.01, 100, 0.01);
        this._addSlider(local, params, "waves_local_shortWavesFade", "Short waves fade", 0.001, 1, 0.001);

        local.open();

        const swell = wavesGenerator.addFolder("Swell");

        this._addSlider(swell, params, "waves_swell_scale", "Scale", 0.0, 1, 0.001);
        this._addSlider(swell, params, "waves_swell_windSpeed", "Wind speed", 0.001, 100, 0.001);
        this._addSlider(swell, params, "waves_swell_windDirection", "Wind direction", -100.0, 100, 0.1);
        this._addSlider(swell, params, "waves_swell_fetch", "Fetch", 100, 1000000, 100);
        this._addSlider(swell, params, "waves_swell_spreadBlend", "Spread blend", 0, 1, 0.01);
        this._addSlider(swell, params, "waves_swell_swell", "Swell", 0, 1, 0.01);
        this._addSlider(swell, params, "waves_swell_peakEnhancement", "Peak enhanc.", 0.01, 100, 0.01);
        this._addSlider(swell, params, "waves_swell_shortWavesFade", "Short waves fade", 0.001, 1, 0.001);

        swell.open();

        wavesGenerator.open();
    }
}
