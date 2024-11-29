interface Song {
    title: string;
    url: string;
    thumbnail: string;
}

export class RadioPlayer {
    private audio: HTMLAudioElement;
    private playPauseBtn: HTMLButtonElement;
    private skipBtn: HTMLButtonElement;
    private songTitleElement: HTMLHeadingElement;
    private seekSlider: HTMLInputElement;
    private currentTimeElement: HTMLSpanElement;
    private durationElement: HTMLSpanElement;
    private currentSongIndex: number = 0;
    private isPlaying: boolean = false;
    private thumbnailElement: HTMLImageElement;
    private isDragging: boolean = false;

    private playlist: Song[] = [
        {
            title: "Ocean Waves",
            url: "/assets/audio/TallyInTheSand.mp3",
            thumbnail: "/assets/images/tallyHallT.jpeg"
        },
        {
            title: "Scizzie",
            url: "/assets/audio/scizzie.mp3",
            thumbnail: "/assets/images/scizzie-thumbnail.png"
        }
    ];

    constructor() {
        this.audio = new Audio();
        this.playPauseBtn = document.getElementById('playPauseBtn') as HTMLButtonElement;
        this.skipBtn = document.getElementById('skipBtn') as HTMLButtonElement;
        this.songTitleElement = document.getElementById('songTitle') as HTMLHeadingElement;
        this.thumbnailElement = document.getElementById('songThumbnail') as HTMLImageElement;
        this.seekSlider = document.getElementById('seekSlider') as HTMLInputElement;
        this.currentTimeElement = document.getElementById('currentTime') as HTMLSpanElement;
        this.durationElement = document.getElementById('duration') as HTMLSpanElement;

        this.audio.addEventListener('error', (e) => {
            console.error('Error loading audio:', e);
            this.songTitleElement.textContent = 'Error loading audio';
        });

        this.initializeEventListeners();
        this.loadCurrentSong();

        // Welcome message controls
        const welcomeText = document.getElementById('welcomeText') as HTMLDivElement;
        const minimizeBtn = document.getElementById('minimizeWelcome') as HTMLButtonElement;
        const closeBtn = document.getElementById('closeWelcome') as HTMLButtonElement;

        minimizeBtn.addEventListener('click', () => {
            welcomeText.classList.toggle('minimized');
        });

        closeBtn.addEventListener('click', () => {
            welcomeText.style.display = 'none';
        });
    }

    private initializeEventListeners(): void {
        this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());
        this.skipBtn.addEventListener('click', () => this.skipSong());
        this.audio.addEventListener('ended', () => this.skipSong());
        
        this.audio.addEventListener('loadstart', () => {
            this.songTitleElement.textContent = `Loading ${this.playlist[this.currentSongIndex].title}...`;
        });
        
        this.audio.addEventListener('canplay', () => {
            this.songTitleElement.textContent = this.playlist[this.currentSongIndex].title;
        });

        this.audio.addEventListener('timeupdate', () => {
            if (!this.isDragging) {
                this.seekSlider.value = this.audio.currentTime.toString();
                this.currentTimeElement.textContent = this.formatTime(this.audio.currentTime);
            }
        });

        this.audio.addEventListener('loadedmetadata', () => {
            this.seekSlider.max = this.audio.duration.toString();
            this.durationElement.textContent = this.formatTime(this.audio.duration);
        });

        this.seekSlider.addEventListener('mousedown', () => {
            this.isDragging = true;
        });

        this.seekSlider.addEventListener('mouseup', () => {
            this.isDragging = false;
            this.audio.currentTime = parseFloat(this.seekSlider.value);
        });

        this.seekSlider.addEventListener('input', () => {
            this.currentTimeElement.textContent = this.formatTime(parseFloat(this.seekSlider.value));
        });
    }

    private togglePlayPause(): void {
        if (this.isPlaying) {
            this.audio.pause();
            this.playPauseBtn.textContent = 'Play';
        } else {
            const playPromise = this.audio.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.error('Playback failed:', error);
                });
            }
            this.playPauseBtn.textContent = 'Pause';
        }
        this.isPlaying = !this.isPlaying;
    }

    private skipSong(): void {
        this.currentSongIndex = (this.currentSongIndex + 1) % this.playlist.length;
        this.loadCurrentSong();
        if (this.isPlaying) {
            const playPromise = this.audio.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.error('Playback failed:', error);
                });
            }
        }
    }

    private loadCurrentSong(): void {
        const song = this.playlist[this.currentSongIndex];
        this.songTitleElement.textContent = song.title;
        this.audio.src = song.url;
        this.thumbnailElement.src = song.thumbnail;
        this.thumbnailElement.alt = `${song.title} thumbnail`;
    }

    private formatTime(seconds: number): string {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
} 