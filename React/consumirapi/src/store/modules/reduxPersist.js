import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'CONSUMO-API',
      storage,
      whitelist: ['auth'], // Neste objeto, temos todos os módulos, porém apenas os na wl serão salvos no ls.
    },
    reducers, // reducers = rootReducers [parâmetro enviado pelo modules/index.js]
  );

  return persistedReducers;
};
// Esse recurso será acionado pelo arquivo de gerenciamento dos módulos o -> modules/index.js
// O propósito do persist neste caso é salvar o estado atual do reducer de login [auth], no navegador.
// Ou seja manter o estado de usuário logado ou deslogado salvo no localstorage.
// O persist é configurado neste arquivo, instalado no gerenciador de módulos e acionado na aplicação.
