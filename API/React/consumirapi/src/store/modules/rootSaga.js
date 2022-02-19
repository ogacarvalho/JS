import { all } from 'redux-saga/effects';                               // Permite que todos os módulos sejam acessados simultaneamente.

import auth from './auth/sagas';                                        // Módulo de login [Sagas]

export default function* rootSaga() {
  return yield all([auth]);
}

// Este é o arquivo raíz [sagas] ou seja, representa a combinação de todos eles. [ Utilizado pelo gerenciador de módulos (index.js) ]
