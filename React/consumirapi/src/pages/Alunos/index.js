import React, { useEffect, useState } from 'react';

import { Container } from '../../styles/Global';
import axios from '../../services/axios';
import { AlunoContainer } from './styled';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      setAlunos(response.data);
    }
    getData();
  }, []);

  return (
    <Container>
      <h1>Alunos</h1>

      <AlunoContainer>
        {alunos.map((aluno) => (
          <div key={String(aluno.id)}>
            <img src={aluno.Fotos[0].url} alt="<- Foto" />
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
