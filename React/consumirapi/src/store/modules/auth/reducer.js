import * as types from '../types';

const initialState = {
  isLoggedIn: false, // Através da rota, saberemos se o usuário está ou não logado.
  token: false,
  user: {},
  isLoading: false, // Verifica se a requisição ainda está em andamento, se sim:... loading.
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      console.log('REDUCER', action.payload);
      return state;
    }

    default: {
      return state;
    }
  }
}
