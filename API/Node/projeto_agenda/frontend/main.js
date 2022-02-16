import 'core-js/stable'; //Compatibiliza o uso de recursos avançados no IE 9+
import 'regenerator-runtime/runtime'; //Compatibiliza o uso de recursos avançados do JS.(ASYNC)
// import './assets/css/style.css'; ESTAMOS USANDO BOOTSTRAP. (Poderia até remover do webpack.)
import Login from './modules/Login';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
login.init();
cadastro.init();