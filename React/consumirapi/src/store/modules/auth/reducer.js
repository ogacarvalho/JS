import * as types from '../types'; // Poderiamos simplesmente escrever o "value" da action no switch mas isso quebraria o estilo "modularizado" da arquitetura.

const initialState = {
  isLoggedIn: false, // Através da rota, saberemos se o usuário está ou não logado.
  token: false,
  user: {},
  isLoading: false, // Verifica se a requisição ainda está em andamento, se sim:... loading.
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = { ...action.payload.user };
      return newState;
    }

    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };
      return newState; // Sempre temos que retornar um novo estado, mesmo que seja o mesmo.
    }

    default: {
      return state;
    }
  }
}

// [Login Failure] Mesmo que o usuário esteja deslogado, garantiremos que ele continuará deslogado.
// A Função do reducer recebe dois parâmetros, o estado atual e a action que ele capturar, que pode conter só o type ou o type e o payload.
// O switch vai ler o type da action recebida, se for "types.XYZ" daí abrimos o bloco de execução para o reducer manipular o estado.
