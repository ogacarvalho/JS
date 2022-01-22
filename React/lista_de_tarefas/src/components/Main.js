/* Componente Statefull: Reagindo a mudanças de estado

-> Primeiro devemos importar o React e a Classe Component para usarmos seus métodos, logo após podemos criar nossa classe com herança para Component o que possibilitará o uso de seus métodos. Usando Class Fields um novo recurso do JS criamos um objeto literal para representar o estado, com a chave "novaTarefa", o render() é necessário para representações virtuais com mudança de estado ou seja, Componentes Statefull ele se responsabilizará por renderizar e sincronizar as mudanças, dentro dele aplicamos o nosso JSX que se trata de um html que escuta mudanças no input e aciona nosso método que na mudança de estado, adiciona o valor do input na chave novaTarefa.

Resumo:
 > Importe o React e o Component
 > Crie a Classe [Export Default] [Com Herança para Components]
 > Crie o State com Class Fields [Objeto literal] [setState para poder modificá-lo]
 > Render() para aplicar seu JSX.
*/

import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';                // Pacote de estilo [Para o formulário]

import { FaEdit, FaWindowClose } from 'react-icons/fa';              // Tarefas
import './Main.css';

export default class Main extends Component {

  state = {                                             // "Class Fields" recurso novo.
    novaTarefa: '',
    tarefas: ['Fazer café', 'Beber agua', 'Estudar'],
  };

  handleChange = (e) => {                               // 'handleChange' para esse tipo função. É uma convenção.
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  render() {

    const { novaTarefa, tarefas } = this.state;
    return (


      <div className='main'>
        <h1>Lista de tarefas</h1>

        <form action='#' className='form'>
          <input onChange={this.handleChange} type='text' value={novaTarefa} />
          <button type='submit'> <FaPlus/> </button>
        </form>

        <ul className='tarefas'>
          {tarefas.map((tarefa) => (
            <li key={tarefa}>
              {tarefa}
              <div>
              <FaEdit className='edit'/>
              <FaWindowClose className='delete'/>
              </div>
            </li>
            ))}
        </ul>
      </div>
    );
  }
}
