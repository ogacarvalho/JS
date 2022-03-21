/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/webpack/modulo.ts":
/*!*******************************!*\
  !*** ./src/webpack/modulo.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class VideoPlayer {
    // Objeto com todos os elementos ...{...}
    constructor(videoElements) {
        this.video = videoElements.video;
        this.button_play = videoElements.button_play;
        this.button_stop = videoElements.button_stop;
    }
    iniciar_eventos() {
        this.button_play.addEventListener('click', () => {
            this.toggle_play();
        });
        this.button_stop.addEventListener('click', () => {
            this.stop();
        });
    }
    toggle_play() {
        if (this.video.paused) {
            this.video.play();
            this.button_play.innerText = 'Pause';
        }
        else {
            this.video.pause();
            this.button_play.innerHTML = 'Play';
        }
    }
    stop() {
        this.video.pause();
        this.video.currentTime = 0;
        this.button_play.innerText = 'Play';
    }
}
exports["default"] = VideoPlayer;
const video_player = new VideoPlayer({
    video: document.querySelector('.video'),
    button_play: document.querySelector('.play'),
    button_stop: document.querySelector('.stop'),
});
video_player.iniciar_eventos();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!******************************!*\
  !*** ./src/webpack/index.ts ***!
  \******************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./modulo */ "./src/webpack/modulo.ts");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map