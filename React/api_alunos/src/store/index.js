/* Configurações Redux

-> (Função) Reducer: Escutará a ação e com base nela terá uma reação que poderá gerar um novo estado global.
!! Dentro do reducer, você sempre deve retornar um estado.

*/

import { createStore } from 'redux';

// Será enviado como parâmetro default para o state [state = initialState]
const initialState = {
  botaoClicado: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      const newState = { ...state };
      return newState;
    }

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
