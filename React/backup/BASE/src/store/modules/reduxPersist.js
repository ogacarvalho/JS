/* eslint-disable prettier/prettier */

import storage from 'redux-persist/lib/storage';                                      // Carregamos o pacote de armazenamento do rp.
import { persistReducer } from 'redux-persist';                                       // Carregamos o redux persist.

// Essa é a configuração cujo retorno será um objeto com os módulos que poderão ser salvos no LocalStorage.
export default (reducers) => {                                                        // Nos parâmetros receberemos os reducers [recebidos no index store pelo RootReducer]
  const persistedReducers = persistReducer(                                           // Constante recebe função cujo retorno é um objeto de configuração.
    {
      key: 'REACT_BASE',                                                              // Nome da aplicação [Será visto no DOM]
      storage,                                                                        // Local de armazenamento [carregado a cima]
      whitelist: ['example'],                                                         // Lista dos reducers que poderão ter seus estados salvos.
    },
    reducers,                                                                         // No segundo parâmetro recebemos os reducers
  );

  return persistedReducers;                                                           // Retorna constante.
};

// Em seguida, iremos ao arquivo index (store) onde finalizaremos parcialmente a configuração.
