// O angular executa este arquivo primeiro, que inicializa o módulo raíz e o módulo raíz (App.module) faz a integração dos demais componentes.

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';                                        // Módulo Raíz
import { environment } from './environments/environment';                            // Configurações de ambiente.

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
