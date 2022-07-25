import { Component } from '@angular/core';
import { Element } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public serverElements: Element[] = [dados_0, dados_1]; // Armazena os dados emitidos durante a escuta dos eventos.

  onServerAdded(serverData: Element) { // A propriedade "serverElements" receberá os dados emitidos durante o evento, que está sendo escutado no component App.
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }

  onBlueprintAdded(blueprintData: Element) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.name,
      content: blueprintData.content
    });
  }

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