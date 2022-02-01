
import React from 'react';                                                 // Carrega a biblioteca
import { useDispatch } from 'react-redux';                                 // Disparador de Actions [Redux]

import { Title } from './styled';                                          // Importa tag personalizada com css via styled components.
import { Container } from '../../styles/Global';                           // Importa tag container com css global.
import * as example from '../../store/modules/example/actions';            // Carrega Actions disponíveis [Redux]

export default function Login() {                                          // Componente de Login [export default]
  const dispara = useDispatch();                                           // Constante recebe acionamento do Dispatch

  function handleClick(e) {                                                // Método acionado ao clicar no botão "Enviar"
    e.preventDefault();                                                    // Previne comportamento padrão [reload]

    dispara(example.clicaBotaoRequest());                                  // Ao clicar, o usuário vai gerar uma action [mod. example], que vai retornar um objeto com o type.
  }                                                                        // O type representa o "tipo da ação" que então será capturado pelo reducer via dispatch [disparo].

  return (
    <Container>
      <Title isRed={false}>
        Login<small>Oie</small>
      </Title>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
