import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Element } from '../interfaces/interfaces';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('servidor-criado') serverCreated = new EventEmitter<Element>();         // A propriedade virou o trigger de um evento. @Output() permite que ela seja ouvida.
  @Output('blueprint-criado') blueprintCreated = new EventEmitter<Element>();      // A propriedade virou o trigger de um evento. @Output() permite que ela seja ouvida.
  public newServerName: string;
  public newServerContent: string;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {                                                // Quando o método for acionado o evento ocorrerá emitindo, os dados desejados.
    this.serverCreated.emit({
      type: 'server', 
      name: this.newServerName, 
      content: this.newServerContent 
    });
  }

  onAddBlueprint() {                                            // Quando o método for acionado o evento ocorrerá emitindo, os dados desejados.
    this.blueprintCreated.emit({
      type: 'blueprint', 
      name: this.newServerContent, 
      content: this.newServerContent 
    });
  }

}
