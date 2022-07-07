import { Component, OnInit, Input } from '@angular/core';
import { Element } from '../interfaces/interfaces';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})

export class ServerElementComponent implements OnInit {
  @Input('server-property-element') public element: Element; // A propriedade recebe os dados {objeto<Element>} escutados pelo App e os usa em seu HTML.

  constructor() { }

  ngOnInit(): void {
  }

}

// @Input() na frente da propriedade do componente desejado. 
// !Qualquer componente que esteja hospedando o componente com este Decorator terá acesso à propriedade.