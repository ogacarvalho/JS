// Este arquivo foi inicializado pelo Main, e aqui teremos a responsabilidade de integrar os demais componentes, como pode visualizar na linha 16.
// O bootstrap irá reconhecer o componente raíz [AppComponent] bem como os outros que forem adicionados, e então fará a inserção dos mesmos no index.
// Aonde cada componente será representado por um seletor, geralmente no "xxx.compenent.ts";

import { NgModule } from '@angular/core';                           //Importação do pacote.
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';                     //Importação do componente [Módulo]

@NgModule({                                                         //Inicializadores
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
