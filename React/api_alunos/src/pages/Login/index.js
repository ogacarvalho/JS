import React from 'react';

import { Title } from './styled';
import { Container } from '../../styles/Global';

export default function Login() {
  return (
    <Container>
      <Title isRed={false}>
        Login<small>Oie</small>
      </Title>
      <button type="button">Enviar</button>
    </Container>
  );
}
