// Este arquivo é idêntico ao [sagas] porém a diferença é que ele é um "agrupador de sagas" ou seja, sua função é retornar todos os sagas de todos os módulos.

import { all } from 'redux-saga/effects';

import auth from './auth/sagas'; // Importando módulo com saga em uso: auth

export default function* rootSaga() {
  return yield all([auth]); // O uso desta função em específico é porque o saga é baseado nela, então aut. este arquivo tbm. [se tivesse mais, basta adicionar após a ,]
}
