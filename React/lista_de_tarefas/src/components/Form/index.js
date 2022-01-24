
import React from 'react';                                                              // Carrega o React
import PropTypes from 'prop-types';                                                     // Carrega o Validador de parâmetros.
import { FaPlus } from 'react-icons/fa';                                                // Carrega Ícones React do formulário.
import './Form.css';                                                                    // Carrega o CSS do formulário.


export default function Form({handleSubmit, handleChange, novaTarefa}) {                // Export do componente stateless + parâmetros de referência.
  return (
    <form onSubmit={handleSubmit} action='#' className='form'>
    <input onChange={handleChange} type='text' value={novaTarefa} />
    <button type='submit'> <FaPlus/> </button>
  </form>
  );
}



// Form.defaultProps = {                                                                 // Se o uso da prop. não for obrigatória [!isRequired]
//   novaTarefa: 'Valor padrão'                                                          // Set um valor padrão.
// }

// Validação do componente
Form.propTypes = {                                                                       //Propriedade? | Tipo? | Obrigatória?
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
}

// !Para que os parâmetros de referência possam ser utilizados precisamos primeiro validar: [Requer: npm i prop-types + import]

