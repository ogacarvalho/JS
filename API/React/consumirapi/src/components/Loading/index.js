import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled';

// Se a propriedade esperada for true, então carregará o container abaixo, se não carregará o container vázio.
export default function Loading({ isLoading }) {
  if (!isLoading) return <></>;
  return (
    <Container>
      <div />
      <span>Carregando...</span>
    </Container>
  );
}

// Configuração da propriedade esperada: "isLoading"
Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
