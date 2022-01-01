import 'core-js/stable'; //Compatibiliza o uso de recursos avançados no IE 9+
import 'regenerator-runtime/runtime'; //Compatibiliza o uso de recursos avançados do JS.(ASYNC)
import './assets/css/style.css';
import padrao, { outro, outros } from './modules/modulo';

console.log(padrao(), outro, outros);