import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // templateUrl: './server.component.html',                  // Podemos separar o arquivo, ou digitar o html diretamente [inline] como abaixo:
  template: `
  <app-server></app-server>
  <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
