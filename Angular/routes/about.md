[Routing] O angular através do JS simula a criação de novas páginas mas na verdade atrás das cortinas ainda tudo ocorre em uma única página. [Single-page-application].

Configurações Iniciais:
Em _app.module.ts_ criamos uma constante do tipo Routes que recebe as rotas e os componentes a serem carregados.
!É importante lembrar de conectar a constante no módulo de importação.

const app_routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UserComponent },
  { path: 'servers', component: ServersComponent },
];


Para iniciar as rotas, no [app.component.html] escolha um local para inserir o nosso "inicializador" de rotas.
Você poderá substituir os outros componentes que estão no HTML pois ele é responsável por ativar as rotas.
Os componentes desejados serão acessados via links ou escrevendo diretamente no URL.
→ Inicializador das rotas:
→ <router-outlet></router-outlet>\

Navegação:
[routerLink] → Diretiva especial que nos permite manter o estado da aplicação, diferentemente do "href=''" que faz o reload toda vez que clicado.
Funcionamento: 
Comum: <a routerLink="users">Componente Usuários</a>
Property Bindind: <a [routerLink]="['/users', 'id', 'editar']"> Desse momento você pode passar os segmentos do URL dinâmicamente.

[Caminhos]
[Absoluto] → É quando iniciamos um "caminho" _com a "/"_ → routerLink = "/caminho", isso significa que ele vai considerar o URL inteiro.
[Relativo] → É quando iniciamos um "caminho" _sem a "/"_ desse modo ele só adiciona o segmento no final do endereço que ele já está.


[Rotas Ativas] O angular tem duas diretivas especiais para tratar rotas ativas:
→ routerLinkActive="classeCSS" → É um sensor, que ao ser disparado, ativa a classe css. 
→ [routerLinkActiveOptions] = "{exact: true}" → Um configurador de rotas ativas, neste caso só "considera" a rota, se ela for "inteiramente acessada."


Navegação Programática
→ Para navegar usando código você precisa injetar o módulo "router" que permitirá usar métodos de navegação em sua classe.
! Diferente do [routerLink] o navigate não sabe aonde está, por essa razão para endereços relativos, precisamos adicionar um segundo parâmetro, através da injeção do componente
[ActivatedRoute] que permite acessar componentes correntes.

Exemplo:
export class HomeComponent {

  constructor(private router: Router, private route: ActivatedRoute) { }

  onLoadServers(){
    this.router.navigate(['/servers'], {relativeTo: this.route });
  }
}

