/* Componente Statefull: Reagindo a mudanças de estado

-> Primeiro devemos importar o React e a Classe Component para usarmos seus métodos, logo após podemos criar nossa classe com herança para Component o que possibilitará o uso de seus métodos. Usando Class Fields um novo recurso do JS criamos um objeto literal para representar o estado, com as chaves que representarão mudanças, o render() é necessário para representações virtuais com mudança de estado ou seja, Componentes Statefull ele se responsabilizará por renderizar e sincronizar as mudanças, dentro dele aplicamos o nosso JSX que se trata de um html que escuta mudanças e aciona nosso método que fará a mudança estado, atualizando o valor desejado na chave do State.

Resumo:
 > Importe o React e o Component
 > Crie a Classe [Export Default] [Com Herança para Components]
 > Crie o State com Class Fields [Objeto literal] [setState para poder modificá-lo]
 > Render() para aplicar seu JSX.
*/

import React, { Component } from 'react';



import './Main.css';

import Form from './Form';
import Tarefas from './Tarefas';

export default class Main extends Component {

  state = {                                                                             // "Class Fields" recurso novo.
    novaTarefa: '',
    tarefas: [],
  };

  componentDidMount(){                                                                  // Recurso do React! [Ao abrir a aplicação, ele executa uma vez.]
    const memoria = JSON.parse(localStorage.getItem('memoria'));                        // Constante recebe dados convertidos do armazenamento local.

    if(!memoria) return;                                                                // Se não há memória armazenada, apenas return.

    this.setState({                                                                     // Há? Configurações State
      tarefas: [...memoria],                                                            // tarefas recebe dados convertidos da memória.
    })
  }

  componentDidUpdate(prevProps, prevState){                                             // Recurso do React! [Capturando atualizações]
    const { tarefas } = this.state;                                                     // Extração das tarefas com destructuring.
    if( tarefas === prevState.tarefas) return;                                          // Se o estado atual de tarefas for igual ao estado anterior, retorne.

    localStorage.setItem('memoria', JSON.stringify(tarefas));                           // Se for diferente, armazene os dados localmente. [!nome, dados convertidos em JSON]
  };

  handleSubmit = (e) => {                                                               // On submit, atualize o tarefas com tarefas anteriores e as novas.
    e.preventDefault();                                                                 // Previna comportamento padrão [reload]
    const { tarefas } = this.state;                                                     // Extração da prop. tarefas do obj. state.
    let { novaTarefa } = this.state;                                                    // Extração da prop. novaTarefa do obj. state.
    novaTarefa = novaTarefa.trim();                                                     // Remove espaços laterais

    if(tarefas.indexOf(novaTarefa) !== -1) return;                                      // Se houver ocorrência do mesmo texto, apenas retorne.

    const _tarefas = [...tarefas];                                                      // Constante recebe tarefas  [!Não editar diretamente o state]

    this.setState({                                                                     // Configurando State
      tarefas: [..._tarefas, novaTarefa],                                               // tarefas: [recebe tarefas anteriores, e novas tarefas]
      novaTarefa: '',
    })
  }

  handleChange = (e) => {                                                               // Se houver alteração no [input] faça:
    this.setState({                                                                     // Configurações State
      novaTarefa: e.target.value,                                                       // Propriedade 'novaTarefa' recebe os dados do [input].
    });
  }

  handleEdit = (e, index) => {
    const { tarefas, novaTarefa } = this.state;                                         // Extraindo prop. do obj. state.
    let _tarefas = [...tarefas];                                                        // variavel recebe constante.

    _tarefas[index] = novaTarefa                                                        // Com splice, delete o índex solicitado.
    if(!novaTarefa) return;                                                             // Se não houver valor, apenas retorne.

    this.setState({                                                                     // Configurações do State
      tarefas: [..._tarefas],                                                           // Constante recebe variável atualizada.
      novaTarefa: '',                                                                   // Editado!
    })
  }

  handleDelete = (e, index) => {
    const { tarefas } = this.state;                                                     // Extraindo prop. do obj. state.
    let _tarefas = [...tarefas];                                                        // variavel recebe constante.

    _tarefas.splice(index, 1);                                                          // Com splice, delete o índex solicitado.

    this.setState({                                                                     // Configurações do State
      tarefas: [..._tarefas],                                                           // Constante recebe variável atualizada.
    })
  }

  render() {

    const { novaTarefa, tarefas } = this.state;                                         // Extração das propriedades do state.

    return (

      <div className='main'>
        <h1>Lista de tarefas</h1>

        <Form                                                                                       // Importando Formulário e conectando os parâmetros.
        handleSubmit={this.handleSubmit}                                                            // parâmetro=método
        handleChange={this.handleChange}                                                            // parâmetro=método
        novaTarefa={novaTarefa}                                                                     // parâmetro=propriedade linha [93]
        />

        <Tarefas
        tarefas={tarefas}
        handleEdit={this.handleEdit}
        handleDelete={this.handleDelete}
        />

      </div>

    );
  }
}
