//                                                                  Carregando:
import storage from 'redux-persist/lib/storage';                    // Arquivo de armazenamento
import { persistReducer } from 'redux-persist';                     // Gerenciador de reducers, responsável por decidir qual estado será armazenado no localstorage.

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'CONSUMO-API',
      storage,
      whitelist: ['auth'],                                          // Apenas os módulos na whitelist poderão ser salvos na navegador do usuário [local-storage].
    },
    reducers,                                                       // Referência: [reducers === rootReducers]
  );

  return persistedReducers;
};
/*
  Esse recurso será acionado pelo arquivo de gerenciamento dos módulos [modules/index.js].
  O propósito do persist neste caso é salvar o estado atual do reducer de login [auth], no navegador, ou seja manter o estado de usuário logado ou deslogado salvo no localstorage.

  O persist é configurado neste arquivo, instalado no gerenciador de módulos e acionado na aplicação.
*/
