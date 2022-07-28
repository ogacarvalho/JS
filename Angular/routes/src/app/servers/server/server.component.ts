import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { Servers } from 'src/app/intefaces/servers.interface';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: Servers;

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    
    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params.id)
      }
    );
  }

}
