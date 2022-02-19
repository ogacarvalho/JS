//                                                                    Carregando:
import { persistStore } from 'redux-persist';                         // Persistor salva o estado do reducer no navegador do usuário
import { createStore, applyMiddleware } from 'redux';                 // Arvore de estados e Aplicador de Middlewares [Usado com o saga]
import createSagaMiddleware from 'redux-saga';                        // Saga componente [Middleware(intermediário)] acionado via "request" que valida as requisições

//                                                                    Acionando:
import persistedReducers from './modules/reduxPersist';               // Arquivo de configuração do persitor que pode conter ou receber reducers do rootReducer
import rootSaga from './modules/rootSaga';                            // Responsável por agrupar e representar os [Sagas]
import rootReducer from './modules/rootReducer';                      // Responsável por agrupar e representar os [Reducers]


const sagaMiddleware = createSagaMiddleware();                        // Executando a ferramenta: [SagaMiddleware]
sagaMiddleware.run(rootSaga);                                         // Conectando a ferramenta com o arquivo raíz [sagas].


// Árvore de Estados, fará a conexão entre o persistor e o arquivos raíz [reducer] e depois entre o aplicador de middlewares e o arquivo raíz [sagas].
const store = createStore( persistedReducers(rootReducer), applyMiddleware(sagaMiddleware) );

export const persistor = persistStore(store);                         // Arquivo de exportação [persistor] que armazena estado atual da árvore de estados.
export default store;                                                 // Árvore de estados: [Export Padrão]

// Este é o arquivo padrão representante dos estados dos componentes da aplicação, divididos entre estados salvos [persisted] e estados livres para acesso [store].
