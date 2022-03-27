

// Criando base estrutural que será seguido pelos componentes via interfaces:
 // É importante destacar que esta base estrutural serve para compor a segurança do projeto. É o "Parâmetro de referência", ao qual deve ser seguido.
interface VideoElements {
    video: HTMLVideoElement;
    button_play: HTMLButtonElement;
    button_stop: HTMLButtonElement;
}

// Criando base estrutural que será seguido pelos componentes via interfaces:
interface VideoProtocols {
    toggle_play(): void;          // Método sem retorno para dar play/pause.
    stop(): void;                 // Método sem retorno para parar o vídeo.
    iniciar_eventos(): void;      // Método sem retorno que "ativará" os eventos.
}

// Essa classe vai representar o componente video player e vai implementar os protocolos exigidos pela base estrutural "VideoProtocols":
// A classe terá três propriedades privadas, que receberão elementos HTML via base estrutural "VideoElements"
// (Privado) Acessível somente pelo próprio componente.
export default class VideoPlayer implements VideoProtocols {
    private video: HTMLVideoElement;            // propriedade vídeo, espera receber: Elemento HTML com o URL do vídeo.
    private button_play: HTMLButtonElement;     // propriedade botão_play espera receber: Elemento HTML que representa o botão de play/pause.
    private button_stop: HTMLButtonElement;     // propriedade botão_stop espera receber: Elemento HTML que representa o botão de "stop".
    
    // Este parâmetro espera receber como argumento, um elemento cuja base estrutural seja: VideoElements.
    constructor(videoElements: VideoElements) {            // "Quando o parâmetro for satisfeito, então faremos as seguintes conexões:
        this.video = videoElements.video;                  // Esta propriedade (instância) deverá receber um HTML que represente o vídeo.
        this.button_play = videoElements.button_play;      // Esta propriedade (instância) deverá receber um HTML que represente o botão_play.
        this.button_stop = videoElements.button_stop;      // Esta propriedade (instância) deverá receber um HTML que represente o botão_stop.
    }
    
    // Agora vamos seguir a base estrutural, exigida pela interface "VideoProtocol"
    // Método que inicie os eventos, ou seja: "Ligará" os demais métodos.
    // Ao ser inicializado, automaticamente as propriedades com os HTMLS começarão a ser monitorados, e no evento de click acionaram sub-métodos.
    iniciar_eventos(): void {
        this.button_play.addEventListener('click', () => {
            this.toggle_play();
        });

        this.button_stop.addEventListener('click', () => {
            this.stop();
        })
    }
  // Após ser inicializado, pelo método acima, este botão estará escutando um click, e ao ser executado irá dar play no vídeo e mexer no seu HTML.
    toggle_play(): void {

        if (this.video.paused){
            this.video.play();
            this.button_play.innerText = 'Pause';
        } else {
            this.video.pause();
            this.button_play.innerHTML = 'Play';
        }
    }
  // Esta função, no evento de "click" irá para o v´deo e começá-lo do zero.
    stop(): void {
        this.video.pause();
        this.video.currentTime = 0;
        this.button_play.innerText = 'Play';
    }


}
// Criando instância do componente de vídeo, e enviando como argumento um objeto que preencha os requisitos da base estrutural pré-definida.
const video_player = new VideoPlayer({
    video: document.querySelector('.video') as HTMLVideoElement,
    button_play: document.querySelector('.play') as HTMLButtonElement,
    button_stop: document.querySelector('.stop') as HTMLButtonElement,
});
// Acionando método da instância, que realiza a monitoração dos elementos HTMLs.
video_player.iniciar_eventos();
