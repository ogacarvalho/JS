import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Element } from '../interfaces/interfaces';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('servidor-criado') serverCreated = new EventEmitter<Element>();         // A propriedade virou o trigger de um evento. @Output() permite que ela seja ouvida.
  @Output('blueprint-criado') blueprintCreated = new EventEmitter<Element>();      // A propriedade virou o trigger de um evento. @Output() permite que ela seja ouvida.
  @ViewChild('input_server_content', {static: true}) input_server_content: ElementRef; 

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(input_server_name: HTMLInputElement, input_server_content: HTMLInputElement) {                                                // Quando o método for acionado o evento ocorrerá emitindo, os dados desejados.
    this.serverCreated.emit({
      type: 'server', 
      name: input_server_name.value, 
      content: this.input_server_content.nativeElement.value, // Maneira diferente de passar dados.
    });
  }

  onAddBlueprint(input_server_name: HTMLInputElement, input_server_content: HTMLInputElement) {                                            // Quando o método for acionado o evento ocorrerá emitindo, os dados desejados.
    this.blueprintCreated.emit({
      type: 'blueprint', 
      name: input_server_name.value, 
      content: input_server_content.value, 
    });
  }

}
