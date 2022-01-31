/*
applyMiddleware: Amplia as ações do "store" permitindo a aplicação de middlewares no método de disparo. [dispatch] do redux store.
createSagaMiddleware: Cria um redux Middleware e faz a conexão com o agrupador de sagas.
*/

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer'; // Carregando o agrupador de reducers do redux.
import rootSaga from './modules/rootSaga'; // Carregando o agrupador de middlewares do redux-saga.

const sagaMiddleware = createSagaMiddleware(); // Middleware principal que fará a conexão entre o store e o agrupador saga.

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware)); // Através do applyMiddleware inserimos o nosso middleware principal no store.
sagaMiddleware.run(rootSaga); // Aqui fazemos a conexão do nosso middleware principal com o agrupador saga.

export default store;
