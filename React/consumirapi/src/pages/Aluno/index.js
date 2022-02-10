import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { isEmail, isInt, isFloat } from 'validator'; // Validador só valida Strings
import { useDispatch } from 'react-redux';

import axios from '../../services/axios';
import history from '../../services/history';
import { Container } from '../../styles/Global';
import { Form } from './styled';

import Loading from '../../components/Loading'; // Carregamos componente que gera efeito visual de "loading" de acordo com o param. recebido, no jsx.
import * as actions from '../../store/modules/auth/actions';

export default function Aluno({ match }) {
  const dispatch = useDispatch();
  const id = get(match, 'params.id', 0);
  const [nome, setNome] = useState(''); // nome receberá os dados do input através do setNome que será acionado durante o evento de mudança.
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [isLoading, setIsLoading] = useState(false); // parâmetro de referência, sendo capturado pelo component [Loading] no jsx.

  // A única função deste useEffect será para preencher os dados do aluno, caso ele já exista.
  useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true); // Setando isLoading.
        const { data } = await axios.get(`/alunos/${id}`); // Muito melhor desta maneira [ ao invés ] de response e depois response.data

        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setIdade(data.idade);
        setPeso(data.peso);
        setAltura(data.altura);

        return setIsLoading(false);
      } catch (err) {
        const status = get(err, 'response.status', 0); // Se não existir será zero.
        const errors = get(err, 'response.data.errors', []);

        if (status === 400) {
          errors.map((error) => toast.errors(error));
          history.push('/login'); // redireciona para o login.
        }
      }

      return console.log(';D');
    }

    getData();
  }, [id]); // Array de dependências, são os dados externos que estamos usando.

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome precisa ter entre 3 e 255 caracteres.');
    }

    if (sobrenome.length < 3 || sobrenome.length > 255) {
      formErrors = true;
      toast.error('Sobrenome precisa ter entre 3 e 40 caracteres.');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido.');
    }

    if (!isInt(String(idade))) {
      formErrors = true;
      toast.error('Idade inválida.');
    }

    if (!isFloat(String(altura))) {
      formErrors = true;
      toast.error('Altura inválida.');
    }

    if (formErrors);

    setIsLoading(true);
    try {
      // Se existir o ID vamos fazer um 'put' com axios no url do aluno, e no segundo parâmetro envia o objeto com os dados a serem alterados.
      if (id) {
        await axios.put(`/alunos/${id}`, {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Aluno(a) editado com sucesso');
      } else {
        const { data } = await axios.post('/alunos/', {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Aluno(a) registrado com sucesso');
        setIsLoading(false);
        history.push(`/aluno/${data.id}/edit`);
      }
    } catch (err) {
      const status = get(err, 'response.status', 0);
      const data = get(err, 'response.data', {});
      const errors = get(data, 'errors', []);

      if (errors.length > 0) {
        errors.map((error) => toast.errors(error));
      } else {
        toast.error('Erro desconhecido');
      }

      if (status === 401) {
        dispatch(actions.loginFailure());
        history.push('/login');
      }
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? 'Editar aluno' : 'Novo aluno'}</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome} // O que estará escrito no input é justamente o que o usuário está escrevendo. [porém, passará primeiro pelo evento]. [Circular]
          onChange={(e) => setNome(e.target.value)} // Vai capturar o evento, e o retorno será a execução da função "setNome" com o valor do input nos parâmetros.
          placeholder="Nome"
        />
        <input
          type="text"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
          placeholder="Sobrenome"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          placeholder="Idade"
        />
        <input
          type="text"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Peso"
        />
        <input
          type="text"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Altura"
        />
        <button type="submit">{id ? 'Editar Aluno' : 'Criar Aluno'} </button>
      </Form>
    </Container>
  );
}

Aluno.propTypes = {
  match: PropTypes.shape({}).isRequired, // Validação é: Match é um objeto, e é requerido.
};

// Esse componente esta sendo importado em rotas, e é carregado quando o usuário tenta entrar no caminho: "/aluno/:id/edit"
// match é um objeto do react que captura o momento em que o "path" se torna um "url" e então nos entrega os dados.
