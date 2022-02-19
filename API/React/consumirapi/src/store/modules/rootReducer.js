import { combineReducers } from 'redux';

import auth from './auth/reducer';

export default combineReducers({
  auth,
});

// Esse arquivo recebe os reducers separados, os combina e então se torna o representante deles.
