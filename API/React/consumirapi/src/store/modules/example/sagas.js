//                                                                                    Carregando:
import { call, put, all, takeLatest } from 'redux-saga/effects';                      // Métodos de comunicação com servidor do SAGA.
import { toast } from 'react-toastify';                                               // Recurso de notificação.
import * as types from '../types';                                                    // Arquivo de types.
import * as actions from './actions';                                                 // Arquivo de actions.

const requisicao = () =>                                                              // Função com Delay
  new Promise((resolve) => {                                                          // Uma nova promise, com parâmetro de resolve enviado no callback.
    setTimeout(() => {                                                                // Adicionando delay:
      resolve();                                                                      // Executa o parâmetro...
    }, 600);                                                                          // ...Depois de 600ms
  });

function* exampleRequest() {                                                          // Saga do módulo(Example)
  try {
    yield call(requisicao);                                                           // Chama a requisição...
    toast.success('Success');                                                         // OK!
    yield put(actions.clicaBotaoSuccess());                                           // Dispara action que será capturada no reducer.
  } catch {
    toast.error('Error');
    yield put(actions.clicaBotaoFailure());
  }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);        // Monitorando requests...

// Este componente realiza um delay para efetuar o registro e re-encaminha, não faz nada além disso.
