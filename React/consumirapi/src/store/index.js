import { persistStore } from 'redux-persist'; // carrega o persistor [que salvará o estado do reducer desejado no navegador do usuário]
import { createStore, applyMiddleware } from 'redux'; // carrega á arvore de estados e o aplicador de middlewares que será usado com o sagas.
import createSagaMiddleware from 'redux-saga'; // carrega o sagas.

import persistedReducers from './modules/reduxPersist'; // acionando arquivo de configuração do persitor que pode conter ou receber reducers do rootReducer.

import rootSaga from './modules/rootSaga'; // carrega agrupador de intermediadores [sagas].
import rootReducer from './modules/rootReducer'; // carrega agrupador de reducers.

const sagaMiddleware = createSagaMiddleware(); // aciona método que conecta á arvore de estados com os middlewares [sagas].

// Criação da árvore de estados: árvore receberá apenas estados salvos dos reducers com persistor e aplicará o conector de sagas [middlewares de validação]
const store = createStore(
  persistedReducers(rootReducer),
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga); // conecta o Saga com os middlewares existentes.

export const persistor = persistStore(store); // persistor armazena estado atual da árvore de estados. [pode ser importado].
export default store; // export padrão: árvore de estados, que carrega os middlewares e os reducers salvos.
