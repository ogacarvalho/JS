
import React from 'react';                                                                   // Carrega a biblioteca
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';                             // Carrega o pacote de ícones do react
import { Link } from 'react-router-dom';                                                     // Carrega tag "Link" equivalente ao "a" do gerenciador de rotas.
import { useSelector } from 'react-redux';                                                   // Carrega objeto que da acesso aos elementos da árvore de estados.

import { Nav } from './styled';                                                              // Importa tag personalizada com css.

export default function Header() {                                                           // Componente Header
  const botaoClicado = useSelector((state) => state.example.botaoClicado);                   // Acessando estado de elemento específico. [True? False?]

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/abc">
        <FaSignInAlt size={24} />
      </Link>
      <h2>{botaoClicado ? 'Clicado' : 'Não Clicado'}</h2>
    </Nav>
  );
}

// A barra de navegação possui três ícones com links para endereços específicos e um H2 que muda seu texto conforme o estado do elemento se altera.

/* Toda vez que o botão "enviar" é clicado, uma action é disparada com o type request, que gera uma interceptação pelo saga que fará a checagem assíncrona deste request, se o retorno for positivo vai acionar uma action de sucesso que será escutada pelo reducer e então fará a atualização de estado do elemento para um novo estado por exemplo "true". E esse novo estado pode ser verificado através do useSelector, como vemos no exemplo acima.

Esse componente é importado diretamente pelo App.js e então acionado lá mesmo. */
