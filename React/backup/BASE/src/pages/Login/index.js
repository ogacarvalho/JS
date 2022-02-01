import React from 'react';
import { useDispatch } from 'react-redux';

import { Title } from './styled';
import { Container } from '../../styles/Global';
import * as example from '../../store/modules/example/actions'; // Importamos as ações possíveis.

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(example.clicaBotaoRequest());
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
