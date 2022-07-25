import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Servers } from '../intefaces/servers.interface';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: Servers[] = [];

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();       // Ao iniciar, a propriedade recebe a nossa lista de servidores da central.
  }

}
