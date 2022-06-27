// Este arquivo é o representante de cada componente para o módulo, e sua função é criar o seletor responsável integrar o HTML e CSS e nome-alos
// à um selector que será utilizado no index.

import { Component } from '@angular/core';  // Ferramenta de componentização do Angular.

@Component({
  selector: 'app-root',                     // Aqui é onde a mágica acontece, este seletor representará este componente inteiro no index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Aqui ficam os dados dinâmicos, que serão capturados automaticamente pelo componente.
export class AppComponent {                 // Data binding [É a renderização de dados dinâmicos.]
}
