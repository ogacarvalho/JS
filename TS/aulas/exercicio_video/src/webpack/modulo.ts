

// Elementos que a tela possui:
interface VideoElements {
    video: HTMLVideoElement;
    button_play: HTMLButtonElement;
    button_stop: HTMLButtonElement;
}

// Elementos de ação:
interface VideoProtocols {
    toggle_play(): void;
    stop(): void;
    iniciar_eventos(): void;
}

export default class VideoPlayer implements VideoProtocols {
    private video: HTMLVideoElement;
    private button_play: HTMLButtonElement;
    private button_stop: HTMLButtonElement;
    
    // Objeto com todos os elementos ...{...}
    constructor(videoElements: VideoElements) {
        this.video = videoElements.video;
        this.button_play = videoElements.button_play;
        this.button_stop = videoElements.button_stop;
    }
    

    iniciar_eventos(): void {
        this.button_play.addEventListener('click', () => {
            this.toggle_play();
        });

        this.button_stop.addEventListener('click', () => {
            this.stop();
        })
    }

    toggle_play(): void {

        if (this.video.paused){
            this.video.play();
            this.button_play.innerText = 'Pause';
        } else {
            this.video.pause();
            this.button_play.innerHTML = 'Play';
        }
    }

    stop(): void {
        this.video.pause();
        this.video.currentTime = 0;
        this.button_play.innerText = 'Play';
    }


}

const video_player = new VideoPlayer({
    video: document.querySelector('.video') as HTMLVideoElement,
    button_play: document.querySelector('.play') as HTMLButtonElement,
    button_stop: document.querySelector('.stop') as HTMLButtonElement,
});

video_player.iniciar_eventos();