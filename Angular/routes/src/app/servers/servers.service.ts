// Central dos servidores, aqui temos os métodos principais.

import { Servers } from '../intefaces/servers.interface';

export class ServersService {
  private servers: Servers[] = [
    {
      id: 1,
      name: 'production',
      status: 'online'
    },
    {
      id: 2,
      name: 'test',
      status: 'offline'
    },
    {
      id: 3,
      name: 'development',
      status: 'offline'
    }
  ];

  getServers() {
    return this.servers;                                                                                // retorna nossa lista de servidores.
  }

  getServer(id: number) {
    const server = this.servers.find( server => server.id === id ); return server;                      // retorna o primeiro servidor onde a condição seja verdadeira.
  }

  updateServer(id: number, serverInfo: {name: string, status: string}) {
    const server = this.servers.find( s => s.id === id );                                               // Se existir o servidor em questão, o atualiza.
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    };
  }
}
