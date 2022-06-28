import { Component } from '@angular/core';  // Carregando funcionaliadades core para o funcionamento do @Component


// O @Component [decorator] otimiza a classe, através dos metadados que irão dizer ao angular o que fazer com ela.
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
})

//TypeScript Code [Effectively];

export class ServerComponent {
    public serverID: number = 10 + 12;
    public serverStatus: string = 'offline';

    getServerStatus(){
        return this.serverStatus;
    }
};