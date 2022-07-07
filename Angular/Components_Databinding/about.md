Component Communication
[CustomEventBinding] - Compartilhando dados entre componentes através da criação de eventos.

→ 1. O *componente(input)* recebe os dados em seu HTML e os atribui à uma *propriedade_qualquer*.
→ 2. Adiciona um botão que ao ser clicado irá disparar um método().
→ 3. No código do componente(input) *você criará um evento* → propriedade: new EventEmitter<DataType>() ← e torne-o executavel.
→ 4. Este evento[propriedade] deverá ser compartilhável com outros componentes, então adicione *@Output* no inicio do evento [propriedade].
→ 5. O método que será acionado ao clicar no botão, é responsável por atribuir e emitir os dados do input em nosso evento.
        → método(){ this.evento[propriedade].emit({
            evento: this.*propriedade_qualquer* → O evento recebe os dados de input enviados a propriedade qualquer.
            }) 
        };
     
→ 6. Neste momento os dados foram atribuídos e emitidos pelo componente do evento, e qualquer componente que estiver escutando este evento irá recebe-los

→ 7. O componente(listener) irá atribuir os dados emitidos pelo evento à um método próprio e de lá fará a tratativa que quiser.
    
    componente_X {
        <componente_do_evento (evento)="metodo_do_componente_x($event)"> </componente_do_evento>
    }