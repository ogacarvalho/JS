/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* Infos
TakeLastest: Se o usuário gerar mil ações ou clicar mil vezes, o redux irá executar apenas a última vez, [Improvement bizarro de performance.]
All: É semelhante ao promise, ele permite que diversas ações sejam executadas em paralelo, aguardando a execução de cada uma.
All: Através do array, ele ficará "escutando" diversas possibilidades de acionamento, em paralelo.
*/

import { call, put, all, takeLatest } from 'redux-saga/effects'; // O call vai chamar uma função que quisermos, geralmente assíncrona.
import { toast } from 'react-toastify';
import * as types from '../types';
import * as actions from './actions';

const requisicao = () =>
  // eslint-disable-next-line no-new
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });

function* exampleRequest() {
  try {
    yield call(requisicao); // Pedimos ao nosso saga que execute a requisição [no caso estamos usando uma fictícia] e dependendo do seu retorno...
    toast.success('Success');
    yield put(actions.clicaBotaoSuccess()); // Put permite que disparemos um type. Retorno esperado: algum case para o reducer. exemplo: [BOTÃO_CLICADO_SUCESS]
  } catch {
    toast.error('Error');
    yield put(actions.clicaBotaoFailure());
  }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]); // Se houver a requisições, pegue a ultima, e acione a seguinte func.
