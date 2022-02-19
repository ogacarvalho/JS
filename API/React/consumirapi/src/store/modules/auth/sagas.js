//                                                                                   Carregando:
import { call, put, all, takeLatest } from 'redux-saga/effects';                     // Métodos de comunicação com servidor do SAGA.
import { toast } from 'react-toastify';                                              // Recurso de notificação.
import { get } from 'lodash';                                                        // Método que realiza operações ternárias com dados assíncronos.

import * as types from '../types';                                                   // Arquivo de types.
import * as actions from './actions';                                                // Arquivo de actions.
import axios from '../../../services/axios';                                         // Este import carrega o url base. [IP]
import history from '../../../services/history';                                     // Método que salva o histórico de requisição do usuário.


// Essa função é acionada assim que o usuário tentar fazer login.
function* loginRequest({ payload }) {                                                // O Destructuring evita que o objeto seja tratado como referência.

  try {

    const response = yield call(axios.post, '/tokens', payload);                     // Back-end recebe requisição + payload, e retorna (status + dados) para a constante.

    yield put(actions.loginSuccess({ ...response.data }));                           // [200] Dispara ação de sucesso + payload com dados do usuário.

    toast.success('Login efetuado com sucesso!');                                    // Notifica o usuário.

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;          // Adicionando token de autorização no cabeçalho do navegador [url].
    history.push(payload.prevPath);                                                  // Redirecionando o usuário para o local solicitado.

  } catch (e) {
    toast.error('Usuário ou senha inválidos.');                                      // [Erro] - Notifica o usuário.
    yield put(actions.loginFailure());                                               // Disparando ação de erro.
  }

}

// Essa função verifica a existência de token no navegador do usuário.
function persistRehydrate({ payload }) {                                             // O payload recebido irá conter o estado completo da aplicação.
  const token = get(payload, 'auth.token', '');                                      // Se existir token, a constante o armazenará.

  if (!token);                                                                       // [False] - Não foi encontrado: return(automático).
  axios.defaults.headers.Authorization = `Bearer ${token}`;                          // [True ] - Encontrado: Update do url no navegador do usuário com o token de autorização.
}


// Solicitando criação de conta de usuário:

// eslint-disable-next-line consistent-return
function* registerRequest({ payload }) {
  const { id, nome, email, password } = payload;                                     // Extraindo informações do parâmetro de carga.

  try {
    if (id) {                                                                        // Se existir [ID], logo é uma tentativa de atualização:
      yield call(axios.put, '/users', {
        email,
        nome,
        password: password || undefined,                                             // O usuário pode ou não alterar a senha.
      });
      toast.success('Conta alterada com sucesso');                                   // Notifica o usuário.
      yield put(actions.registerUpdatedSuccess({ nome, email, password }));          // Dispara action de atualização realizada com sucesso + payload.
    } else {
      yield call(axios.post, '/users', {                                             // Não existe [ID], logo é uma tentativa de criação de conta:
        email,
        nome,
        password,
      });

      toast.success('Conta criada com sucesso');                                     // [200]
      yield put(actions.registerCreatedSuccess({ nome, email, password }));          // Dispara action de conta criada com sucesso + payload.
      history.push('/login');                                                        // Redireciona o usuário para endereço de login.
    }
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);

    if (status === 401) {
      toast.error('Por gentileza, faça login novamente.');
      yield put(actions.loginFailure());
      return history.push('/login');
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Erro desconhecido.');
    }

    yield put(actions.registerFailure());
  }
}

// Gerenciador de requisições do módulo de autorização [AUTH-SAGA].
export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
