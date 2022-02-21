import * as types from '../types';                                  // Carregando arquivo de Types
import axios from '../../../services/axios';                        // Carrega o URLBASE[IP]

const initialState = {                                              // Estado: Módulo de Autorização [auth]
  isLoggedIn: false,                                                // Usuário logado: False por padrão.
  token: false,                                                     // Usuário possui token de autorização: Falso por padrão.
  user: {},                                                         // Usuário: ?
  isLoading: false,                                                 // Toda requisição mudará essa flag e automaticamente irá carregar o componente de login.
};

export default function (state = initialState, action) {            // Função responsável por escutar requisições e definir novos estados.

  switch (action.type) {
    case types.LOGIN_REQUEST: {                                     // "Requisição de login"
      const newState = { ...state };                                // Sempre temos que retornar um novo estado, mesmo que seja o mesmo.
      newState.isLoading = true;                                    // Porém, aciona o componente de loading enquanto aguardamos um retorno.
      return newState;                                              // Atualiza o estado.
    }

    case types.LOGIN_SUCCESS: {                                     // "Login bem-sucedido!"
      const newState = { ...state };                                // Prepara o novo estado.
      newState.isLoggedIn = true;                                   // Usuário: logado.
      newState.token = action.payload.token;                        // Armazenando token.
      newState.user = { ...action.payload.user };                   // User: [recebe dados do usuário] provenientes do payload enviado durante o disparo da action.
      newState.isLoading = false;                                   // Finaliza Loading.
      return newState;                                              // Atualiza o estado.
    }

    case types.LOGIN_FAILURE: {                                     // "Erro ao efetuar login..."
      delete axios.defaults.headers.Authorization;                  // Remoção do token de autorização do cabeçalho.
      const newState = { ...initialState };                         // Prepara o novo estado.
      return newState;                                              // Atualiza o estado.
    }

    case types.REGISTER_REQUEST: {                                  // Solitação de registro de usuário.
      const newState = { ...state };                                // Prepara o novo estado.
      newState.isLoading = true;                                    // Inicia "loading".
      return newState;                                              // Atualiza o estado.
    }

    case types.REGISTER_UPDATED_SUCCESS: {                          // Registro efetuado com sucesso.
      const newState = { ...state };                                // Prepara o estado.
      newState.user.nome = action.payload.nome;                     // Adiciona o nome do usuário.
      newState.user.email = action.payload.email;                   // Adiciona o email do usuário.
      newState.isLoading = false;                                   // Finaliza "Loading".
      return newState;                                              // Atualiza o estado.
    }

    case types.REGISTER_CREATED_SUCCESS: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }

    case types.REGISTER_FAILURE: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }

    default: {
      return state;
    }
  }
}

// [Login Failure] Mesmo que o usuário esteja deslogado, garantiremos que ele continuará deslogado.
// A Função do reducer recebe dois parâmetros, o estado atual e a action que ele capturar, que pode conter só o type ou o type e o payload.
// O switch vai ler o type da action recebida, se for "types.XYZ" daí abrimos o bloco de execução para o reducer manipular o estado.
