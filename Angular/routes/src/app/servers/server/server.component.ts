import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { Servers } from 'src/app/intefaces/servers.interface';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: Servers;

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
  }

}
