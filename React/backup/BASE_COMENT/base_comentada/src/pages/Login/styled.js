
// Arquivo CSS da paǵina de Login
import styled from 'styled-components';                     // Carrega Style-Components [CSS com turbo]

export const Title = styled.h1`                             // A tag "Title" vai receber um CSS cujos elementos serão "h1"
  color: ${(atrib) => (atrib.isRed ? 'red' : 'grey')};      // A cor será uma condicional do JS: Se o atributo do H1 "isRed" for true então retorna: "red" se não "grey".

  small {                                                   // Tag "small" dentro do "Title" recebe css.
    font-size: 10px;
  }
`;
