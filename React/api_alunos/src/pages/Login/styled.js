import styled from 'styled-components';

export const Title = styled.h1`
  color: ${(atrib) => (atrib.isRed ? 'red' : 'grey')};

  small {
    font-size: 10px;
  }
`;
