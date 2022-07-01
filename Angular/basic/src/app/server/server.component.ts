import { Component } from '@angular/core';  // Carregando funcionaliadades core para o funcionamento do @Component

// O @Component [decorator] otimiza a classe, através dos metadados que irão dizer ao angular o que fazer com ela.
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [` .online {
        color: white;
    }`]
})

//TypeScript Code [Effectively];

export class ServerComponent {
    public serverID: string;
    public serverStatus: string = 'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5? 'online':'offline';
        this.serverID = Math.round((Math.random() * 100)).toString();
    }

    getColor():string {
        return this.serverStatus == 'online'? 'green':'red';
    }

    getServerStatus(){
        return this.serverStatus;
    }
};