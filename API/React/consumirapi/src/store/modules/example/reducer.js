//                                                                        Carregando:
import * as types from '../types';                                        // Todos os types

const initialState = {                                                    // O estado só diz se o botão está clicado ou não.
  botaoClicado: false,
};

export default function (state = initialState, action) {                  // Função Default(reducer): Atualiza o estado, e recebe as actions com o payload.
  switch (action.type) {                                                  // Switch está aguardando o types.
    case types.BOTAO_CLICADO_SUCCESS: {                                   // Clicaram no botão:
      console.log('Sucesso!');                                            // Sucesso..
      const newState = { ...state };                                      // Prepara estado...
      newState.botaoClicado = !newState.botaoClicado;                     // Atualiza botãoclicado
      return newState;                                                    // Atualiza o estado.
    }
    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Deu erro...');
      return state;
    }
    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Estou fazendo sua requisição..');
      return state;
    }

    default: {
      return state;
    }
  }
}


// Este é um módulo de "Exemplo" com intuíto apenas de mostrar o template de como deve ser utilizado.
