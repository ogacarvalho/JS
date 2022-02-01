// Neste caso em específico, estamos utilizando yield [função geradora] pois aqui é a continuação de diversos módulos sagas que por padrão são feitos com yield.
// Ou seja: começou com yield, termina com yield.

import { all } from 'redux-saga/effects'; // Carregamos o recurso do reduc/effects que executa multiplas ações em paralelo de modo async.

import example from './example/sagas'; // Carregamos o arquivo sagas com o nome do módulo que ele se refere.

// A função geradora vai executar qualquer action do arquivo sagas que agora está sendo representado pelo modulo example, e qualquer outro módulo.
export default function* rootSaga() {
  return yield all([example]);
}
