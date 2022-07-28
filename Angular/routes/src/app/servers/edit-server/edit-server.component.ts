import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { Servers } from 'src/app/intefaces/servers.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: Servers;
  
  // two-way-databinding
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log({
      fixo_1: this.route.snapshot.queryParams,
      fixo_2: this.route.snapshot.fragment,
      ass_1: this.route.queryParams.subscribe(),
      ass_2: this.route.fragment
    })
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
