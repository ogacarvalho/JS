import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Servers } from '../intefaces/servers.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: Servers[] = [];

  constructor(private serversService: ServersService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();       // Ao iniciar, a propriedade recebe a nossa lista de servidores da central.
  }

  onReload(){
    // this.router.navigate(['/servers'], {relativeTo: this.route});
  }

}
