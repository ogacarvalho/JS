import { Component } from '@angular/core';
import { Element } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public serverElements: Element[] = [dados_0, dados_1];
}

const dados_0: Element = {
  type: 'server',
  name: 'Servidor',
  content: 'Data'
}

const dados_1: Element = {
  type: 'blueprint',
  name: 'Servidor',
  content: 'Data'
}