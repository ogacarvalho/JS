import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as types from '../types';
import * as actions from './actions';

// Sem destructuring o "payload" seria tratado como um parâmetro/referência e vai retornar o objeto inteiro.
function* loginRequest({ payload }) {
  yield console.log('SAGA', payload);
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]); // <- O Segredo do saga está aqui, ele ouve todas as req. e busca pelo type desejado, então aciona a func.
