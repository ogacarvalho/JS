/*
Métodos React Hooks
-> react.useEffect(() => {}, []);
O array ali após a arrow function, armazenará uma lista de "dependências" no qual a cada mudança de estado de algum item da lista acionará a arrow function, e essa função só será executada uma vez quando o component for montado. [Usaremos ela pra fazer teste com axios]

*/

import React from 'react';
import { useDispatch } from 'react-redux'; // Disparador!

import { Title } from './styled';
import { Container } from '../../styles/Global';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch({
      type: 'BOTAO_CLICADO',
    });

    dispatch({
      type: 'BOTAO_CLICADO_2',
    });
  }

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
