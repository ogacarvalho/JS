import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import './Tarefas.css';


export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
  return (
    <ul className='tarefas'>
      {tarefas.map((tarefa, index) => (                                                            // A lista é um map da propriedade tarefas do objeto state.
        <li key={tarefa}>                                                                          {/* O nome da list vai ser o seu próprio valor */}
          {tarefa}                                                                                 {/* Cada valor mapeado representará um [li]    */}
          <span>
            <FaEdit  className='edit' onClick={(e) => handleEdit(e, index)} />                     {/* Botão editar: envia o index do elemento clicado.*/}
            <FaWindowClose className='delete' onClick={(e) => handleDelete(e, index)} />            {/* Botão deletar: envia o index do elemento clicado. */}
          </span>
        </li>
      ))}
    </ul>
  );
}

// Validação do componente
Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};




