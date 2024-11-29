import { OceanGUI } from '../scenes/oceanGui';

interface WavePreset {
    name: string;
    description: string;
    settings: Record<string, number>;
}

export class OceanAI {
    private _gui: OceanGUI;
    private _apiKey: string;
    private _presets: WavePreset[];

    constructor(gui: OceanGUI, apiKey: string) {
        this._gui = gui;
        this._apiKey = apiKey;
        this._presets = this._initializePresets();
        this._setupChatUI();
    }

    private _initializePresets(): WavePreset[] {
        return [
            {
                name: "Antarctic Storm",
                description: "Massive waves typical of the Southern Ocean",
                settings: {
                    "waves_swell_windSpeed": 80,
                    "waves_swell_fetch": 900000,
                    "waves_swell_scale": 0.8,
                    "waves_local_windSpeed": 90,
                    "waves_local_fetch": 1000000
                }
            },
            {
                name: "Calm Mediterranean",
                description: "Gentle waves typical of a calm Mediterranean day",
                settings: {
                    "waves_swell_windSpeed": 1.5,
                    "waves_swell_fetch": 100000,
                    "waves_swell_scale": 0.3,
                    "waves_local_windSpeed": 2,
                    "waves_local_fetch": 50000
                }
            }
            // Add more presets
        ];
    }

    private async _sendToOpenAI(message: string): Promise<string> {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this._apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-4",
                messages: [{
                    role: "system",
                    content: `You are an ocean wave simulation assistant. You can explain wave phenomena and control a wave simulator.
                    Available wave parameters include:
                    - waves_g: Gravity (0.01-30)
                    - waves_depth: Ocean depth (0.001-3)
                    - waves_lambda: Lambda (0-1)
                    
                    Local wave parameters:
                    - waves_local_scale: Scale (0-1)
                    - waves_local_windSpeed: Wind speed (0.001-100)
                    - waves_local_windDirection: Wind direction (-100 to 100)
                    - waves_local_fetch: Fetch (100-1000000)
                    - waves_local_spreadBlend: Spread blend (0-1)
                    - waves_local_swell: Swell (0-1)
                    - waves_local_peakEnhancement: Peak enhancement (0.01-100)
                    - waves_local_shortWavesFade: Short waves fade (0.001-1)

                    Swell parameters:
                    - waves_swell_scale: Scale (0-1)
                    - waves_swell_windSpeed: Wind speed (0.001-100)
                    - waves_swell_windDirection: Wind direction (-100 to 100)
                    - waves_swell_fetch: Fetch (100-1000000)
                    - waves_swell_spreadBlend: Spread blend (0-1)
                    - waves_swell_swell: Swell (0-1)
                    - waves_swell_peakEnhancement: Peak enhancement (0.01-100)
                    - waves_swell_shortWavesFade: Short waves fade (0.001-1)

                    When responding to wave condition requests, use SET_PARAM commands to adjust parameters. For example:
                    SET_PARAM[waves_swell_windSpeed]=80
                    SET_PARAM[waves_local_fetch]=500000

                    Always explain the changes you're making and why they create the requested wave conditions.
                    
                    IMPORTANT: Make sure you are responding concisely IF AND ONLY IF it doesnt containt a command to change the parameters in any way`
                }, {
                    role: "user",
                    content: message
                }],
                temperature: 0.7
            })
        });

        const data = await response.json();
        return this._processAIResponse(data.choices[0].message.content);
    }

    private _processAIResponse(response: string): string {
        console.log('Processing AI response:', response);
        
        const paramRegex = /SET_PARAM\[(.*?)\]=(\d+\.?\d*)/g;
        let match;
        const parameterRanges: Record<string, [number, number]> = {
            'waves_g': [0.01, 30],
            'waves_depth': [0.001, 3],
            'waves_lambda': [0, 1],
            'waves_local_scale': [0, 1],
            'waves_local_windSpeed': [0.001, 100],
            'waves_local_windDirection': [-100, 100],
            'waves_local_fetch': [100, 1000000],
            'waves_local_spreadBlend': [0, 1],
            'waves_local_swell': [0, 1],
            'waves_local_peakEnhancement': [0.01, 100],
            'waves_local_shortWavesFade': [0.001, 1],
            'waves_swell_scale': [0, 1],
            'waves_swell_windSpeed': [0.001, 100],
            'waves_swell_windDirection': [-100, 100],
            'waves_swell_fetch': [100, 1000000],
            'waves_swell_spreadBlend': [0, 1],
            'waves_swell_swell': [0, 1],
            'waves_swell_peakEnhancement': [0.01, 100],
            'waves_swell_shortWavesFade': [0.001, 1]
        };

        const changes: Array<[string, number]> = [];
        while ((match = paramRegex.exec(response)) !== null) {
            const [_, param, valueStr] = match;
            const value = parseFloat(valueStr);
            console.log('Found parameter change:', param, value);
            
            if (parameterRanges[param]) {
                const [min, max] = parameterRanges[param];
                const clampedValue = Math.max(min, Math.min(max, value));
                console.log('Clamped value:', param, clampedValue, `(original: ${value})`);
                changes.push([param, clampedValue]);
            } else {
                console.warn('Unknown parameter:', param);
            }
        }
        // Apply all changes at once to avoid multiple updates
        console.log('Applying changes:', changes);
        changes.forEach(([param, value]) => {
            console.log('Updating parameter:', param, value);
            this._gui.updateParameter(param, value);
        });

        // Remove the parameter commands from the response
        return response.replace(paramRegex, '');
    }

    private _setupChatUI(): void {
        const input = document.getElementById('chatInput') as HTMLInputElement;
        const sendBtn = document.getElementById('sendChat');
        const messages = document.getElementById('chatMessages');
        const toggleBtn = document.getElementById('toggleChat');

        const addMessage = (text: string, isUser: boolean) => {
            const messageDiv = document.createElement('div');
            messageDiv.className = `chat-message ${isUser ? 'user-message' : 'bot-message'}`;
            messageDiv.textContent = text;
            messages?.appendChild(messageDiv);
            messages?.scrollTo(0, messages.scrollHeight);
        };

        const handleMessage = async (text: string) => {
            addMessage(text, true);
            const response = await this._sendToOpenAI(text);
            addMessage(response, false);
        };

        sendBtn?.addEventListener('click', () => {
            if (input.value.trim()) {
                handleMessage(input.value);
                input.value = '';
            }
        });

        input?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && input.value.trim()) {
                handleMessage(input.value);
                input.value = '';
            }
        });

        toggleBtn?.addEventListener('click', () => {
            const container = document.querySelector('.chat-container');
            if (container) {
                container.classList.toggle('hidden');
                toggleBtn.querySelector('i')?.classList.toggle('fa-chevron-up');
                toggleBtn.querySelector('i')?.classList.toggle('fa-chevron-down');
            }
        });
    }

    private _applyPreset(presetName: string): boolean {
        const preset = this._presets.find(p => 
            p.name.toLowerCase() === presetName.toLowerCase()
        );

        if (preset) {
            Object.entries(preset.settings).forEach(([param, value]) => {
                this._gui.updateParameter(param, value);
            });
            return true;
        }
        return false;
    }
}