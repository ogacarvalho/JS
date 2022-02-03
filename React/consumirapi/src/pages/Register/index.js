/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';

import { Container } from '../../styles/Global';
import { Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Register() {
  const [nome, setName] = useState(['']);
  const [email, setEmail] = useState(['']);
  const [password, setPassword] = useState(['']);

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome deve ter entre 3 e 255 caracteres.');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido.');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Senha deve ter entre 6 e 50 caracteres.');
    }

    if (formErrors) return;

    try {
      await axios.post('/users/', { nome, password, email });
      toast.success('Você foi cadastrado.');
      history.push('/login'); // Se der tudo certo, através do history seremos redirecionados junto com os dados do parâmetro.
    } catch (erro) {
      const status = get(erro, 'response.status', 0);
      const errors = get(erro, 'response.data.errors', []); // Essa response [errors] foi criada por nós mesmos.
      errors.map((err) => toast.error(`Erro ${status}: ${err}`));
    }
  }

  return (
    <Container>
      <h1>Crie sua conta!</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome"
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu e-mail"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Sua senha"
          />
        </label>
        <button type="submit">Criar minha conta</button>
      </Form>
    </Container>
  );
}
