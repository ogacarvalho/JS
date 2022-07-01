// Este arquivo foi inicializado pelo Main, e aqui teremos a responsabilidade de integrar os demais componentes, como pode visualizar na linha 16.
// O bootstrap irá reconhecer o componente raíz [AppComponent] bem como os outros que forem adicionados, e então fará a inserção dos mesmos no index.
// Aonde cada componente será representado por um seletor, geralmente no "xxx.component.ts";

import { NgModule } from '@angular/core';                           //Importação dos módulos [são features que serão carregadas/utilizadas junto dos componentes].
import { FormsModule } from '@angular/forms';                       // Required for Two-Way-Binding
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';            // Substitui o HttpModule

import { AppComponent } from './app.component';                     //Importação do componente
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

// Decorador responsável por configurar o módulo, dizendo quais componentes serão inicializados.
@NgModule({      
  // Em declarations nós fazemos o registro do componente que desejamos que o angular renderize.                                                   
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,                                                    // Its a "package of resources"
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
