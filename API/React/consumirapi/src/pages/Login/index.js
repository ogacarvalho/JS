/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react'; // useState é a criação de estados para uso exclusivo do componente, redux é para uso da API.
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux'; // O reducer vai pegar a action e o type.
import { get } from 'lodash'; // Recurso de condicionais, [se x for falso, use y].

import { Container } from '../../styles/Global';
import { Form } from './styled';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';

export default function Login(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/'); // a constante [prevPath] representará se existir o caminho anterior, ou home.

  const isLoading = useSelector((state) => state.auth.isLoading); // Estado global.

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(e) {
    e.preventDefault();
    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido.');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Senha inválida.');
    }

    if (formErrors) return;

    dispatch(actions.loginRequest({ email, password, prevPath })); // Se tudo correr bem, será disparado o tipo de ação com os dados e então capturada pela rota privada.
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Login</h1>
      <Form onSubmit={handleLogin}>
        <label htmlFor="email">
          E-mail:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
          />
        </label>
        <button type="submit">Fazer Login</button>
      </Form>
    </Container>
  );
}
