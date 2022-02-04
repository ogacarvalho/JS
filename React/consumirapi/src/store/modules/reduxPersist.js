import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'CONSUMO-API',
      storage,
      whitelist: ['auth'], // Neste objeto, temos todos os módulos, porém apenas os na wl serão salvos no ls.
    },
    reducers,
  );

  return persistedReducers;
};
