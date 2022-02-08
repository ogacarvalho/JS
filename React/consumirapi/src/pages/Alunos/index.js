import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';

import { Container } from '../../styles/Global';
import axios from '../../services/axios';
import { AlunoContainer, ProfilePicture } from './styled';

import Loading from '../../components/Loading';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Valor padrão "false";

  useEffect(() => {
    setIsLoading(true); // Inicio da requisição
    async function getData() {
      const response = await axios.get('/alunos');
      setAlunos(response.data);
      setIsLoading(false); // Fim da requisição
    }
    getData();
  }, []);

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Alunos</h1>

      <AlunoContainer>
        {alunos.map((aluno) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, 'Fotos[0].url', false) ? (
                <img src={aluno.Fotos[0].url} alt="<- Foto" />
              ) : (
                <FaUserCircle size={33} />
              )}
            </ProfilePicture>
            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>
            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit size={16} />
            </Link>
            <Link to={`/aluno/${aluno.id}/delete`}>
              <FaWindowClose size={16} />
            </Link>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
/* Informações
1. Na arrow function quando o retorno é grande, utilizamos os ( ).
2. Em aluno container: vamos retornar um div com os dados dos alunos [cada div com um aluno]
*/
