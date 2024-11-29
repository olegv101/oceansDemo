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
                    Available wave parameters include: wind speed (0-100), fetch (100-1000000), wave scale (0-1), wind direction (-100 to 100).
                    When users request specific wave conditions, analyze their request and respond with both an explanation and the appropriate parameter changes.`
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
        // Look for parameter change commands in the response
        const paramRegex = /SET_PARAM\[(.*?)\]=(\d+\.?\d*)/g;
        let match;

        while ((match = paramRegex.exec(response)) !== null) {
            const [_, param, value] = match;
            this._gui.updateParameter(param, parseFloat(value));
        }

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
}