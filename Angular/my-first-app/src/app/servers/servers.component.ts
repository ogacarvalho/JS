import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',                  // Podemos separar o arquivo, ou digitar o html diretamente [inline] como abaixo:
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public addNewServer:boolean = false;
  public serverCreationStatus:string = 'No server was created!';
  public serverName:string = 'Type the name of your server.';

  constructor() { 
    setTimeout(() => { this.addNewServer = true },2000);
  }

  onCreateServer():void {
    this.serverCreationStatus = `Server ${this.serverName} was Created!`;
  };

  ngOnInit(): void {
  }

}
