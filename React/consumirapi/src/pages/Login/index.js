/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react'; // useState é a criação de estados para uso exclusivo do componente, redux é para uso da API.
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch } from 'react-redux'; // O reducer vai pegar a action e o type.

import { Container } from '../../styles/Global';
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions';
// import axios from '../../services/axios';

export default function Login() {
  const dispatch = useDispatch();

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

    dispatch(actions.loginRequest({ email, password })); // Se tudo correr bem, será disparado o tipo de ação com os dados e então capturada pelo reducer.
  }

  return (
    <Container>
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
