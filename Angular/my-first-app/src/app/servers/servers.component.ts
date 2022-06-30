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
  public serverCreated:boolean = false;
  public servers: string[] = ['Server_0', 'Server_1'];

  constructor() { 
    setTimeout(() => { this.addNewServer = true },2000);
  }

  onCreateServer():void {
      this.servers.push(this.serverName);
      this.serverCreated = true;
      this.serverCreationStatus = `A server was Created!`;
  };

  ngOnInit(): void {
  }

}
