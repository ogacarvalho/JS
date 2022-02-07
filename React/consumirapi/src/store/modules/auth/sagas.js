import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import * as types from '../types';
import * as actions from './actions';
import axios from '../../../services/axios'; // O import desse jeito é opcional, apenas para economizar linhas de coódigo, pois nele já temos o "url base".
import history from '../../../services/history';

// Sem destructuring o "payload" seria tratado como um parâmetro/referência e vai retornar o objeto inteiro.
function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload); // Estamos enviando o payload junto da requisição.

    yield put(actions.loginSuccess({ ...response.data })); // Put "faça". Reducer receberá a action com o payload de retorno da requisição. [token, usuário, etc..,]

    toast.success('Login efetuado com sucesso!');

    axios.defaults.headers.Authorization = `Beader = ${response.data.token}`; // As requisições futuras, terão no cabeçalho por padrão o "token" ;D
    history.push(payload.prevPath); // Redireciona para a home ou para o caminho anterior.
  } catch (e) {
    toast.error('Usuário ou senha inválidos.');

    yield put(actions.loginFailure());
  }
}

// No payload neste caso, teremos o estado completo da aplicação.
function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', ''); // Ele puxa o payload pois nesta situação já está salvo, então pega o token do módulo em questão.
  if (!token);
  axios.defaults.headers.Authorization = `Beader = ${token}`; // Então aplica o token no cabeçalho, toda vez que o type rehydrate for acionado.
}

export default all(
  [takeLatest(types.LOGIN_REQUEST, loginRequest)],
  [takeLatest(types.PERSIST_REHYDRATE, persistRehydrate)], // Se o saga ouvir esse type, é para ele acionar a função.
); // <- O Segredo do saga está aqui, ele ouve todas as req. e busca pelo type desejado, então aciona a func.

// Aqui vamos pegar a senha, o password, e usar o "prevPath" para redirecionar caso [a validação da senha e do password usando axios] seja confirmada.
// Provavelmente vamos pegar um token e jogar dentro das propriedades da rota.
// No saga a maneira de realizar a comunicação com o servidor é utilizando o "call, put etc.,"
