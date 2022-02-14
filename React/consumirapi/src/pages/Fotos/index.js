import React from 'react';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import history from '../../services/history';

import axios from '../../services/axios';

import { Container } from '../../styles/Global';
import Loading from '../../components/Loading';
import { Title, Form } from './styled';
import * as actions from '../../store/modules/auth/actions';

export default function Fotos({ match }) {
  const id = get(match, 'params.id', ''); // Do match eu quero o [id] ou uma string vazia.
  const [isLoading, setIsLoading] = React.useState(false); // Variável isLoading receberá função que capturará um valor assíncrono booleano, que por padrão será falso.
  const [foto, setFoto] = React.useState('');
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!id) return;

    // O try catch deve estar dentro de uma função para ser assíncrono.
    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`); // Puxando dados do aluno{id}.
        setFoto(get(data, 'Fotos[0].url', '')); // o estado "foto" receberá de "data" a última foto do usuário, ou string vazia. [Lembrando: estados quando é assíncrono.]
        return setIsLoading(false);
      } catch {
        toast.errors('Erro ao obter imagem');
        setIsLoading(false);
        history.push('/');
      }

      return console.log(';D');
    }

    getData();
  }, [id]); // Array de dependências, são os dados externos que estamos usando.

  const handleChange = async (e) => {
    const FOTO = e.target.files[0];
    const fotoURL = URL.createObjectURL(FOTO); // cria um URL da foto selecionada em arquivos.

    setFoto(fotoURL);

    const formData = new FormData(); // estamos invocando um formulário padrão do js, para conseguir enviar a foto para o servidor.
    formData.append('aluno.id', id); // adicionando ao objeto "aluno.id" o id de acordo com a rota necessária no rest.
    formData.append('foto', FOTO); // agora só precisamos tentar enviar ao servidor com o axios através do post.

    try {
      setIsLoading(true);

      await axios.post('/fotos/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }); // É desta maneira que enviamos arquivos, se não ele não vai.

      toast.success('Foto enviada com sucesso');
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      const { status } = get(err, 'response', '');
      toast.error('Erro ao enviar foto!');

      if (status === 401) {
        dispatch(actions.loginFailure());
      }
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Fotos</Title>

      <Form>
        <label htmlFor="foto">
          {foto ? <img src={foto} alt="Foto" /> : 'Selecionar'}
          <input type="file" id="foto" onChange={handleChange} />
        </label>
      </Form>
    </Container>
  );
}

Fotos.propTypes = {
  match: PropTypes.shape({}).isRequired, // Validação é: Match é um objeto, e é requerido.
};
// "id=foto" quando o label for clicado, ele vai redirecionar para o input. [htmlfor..."input"]
// JSON não envia formulário, então neste caso vamos simular o envio de formulário para "enviar a foto" selecionada no computador do usuário.
// A foto será enviada para a url rest que atribui imagens ao id do usuário.
