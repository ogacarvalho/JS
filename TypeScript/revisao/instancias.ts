import { Empresa } from "./src/class";
import { Colaborador } from "./src/class";
import { Aluno, Pessoa } from "./src/heranca";
import { SomaArray } from "./src/somadorArray";
import { SubClasse } from "./src/sub-classes";
import { Pessoa as GetterSetter } from "./src/getters_setters";
import { Exemplo as Static} from "./src/static";
import { Database } from "./src/singleton";


// Classes - Criando objetos completos.
const empresa_1 = new Empresa('Company LTDA', '456260598/0001-0');
const colaborador_1 = new Colaborador('Gabriel', 'Carvalho');
const colaborador_2 = new Colaborador('Pedro', 'Pinto');
const colaborador_3 = new Colaborador('José', 'Paiva');
empresa_1.addColaborador(colaborador_1);
empresa_1.addColaborador(colaborador_2);
empresa_1.addColaborador(colaborador_3);
// empresa_1.showColaborador();


// SomadorArray - Um teste
const lista = [10,213, 12, 32, 65, 32, 564, 100, 10, 90, 42, 132, 76, 98];
const teste = new SomaArray(lista);
//console.log(`A soma dos números pares é = ${teste.somaPares()}!`);


// Heranças - Extendendo ou modificando as possibilidades de uma classe mãe.
const herancas_classe_pessoa = new Pessoa('Gabriel', 'Felipe', 26, '456.260.598-73');
const herancas_pessoa = new Aluno('Gabriel', 'Felipe', 26, '456.260.598-73');
// herancas_classe_pessoa.get_nome_completo();
// herancas_pessoa.get_nome_completo();


// Sub-classes - Uma herança turbinada.
const sub_classe = new SubClasse('A', 'B', 'C', 'D', 'E');
// console.log(sub_classe.getABCDE());

// Modificadores de Acesso: Definindo quem pode acessar o atributo!
// → Public    [Qualquer instância incluindo heranças e sub-classes terá acesso ao atributo];
// → Protected [Apenas Super e Subclasses terão acesso ao atributo, ou seja instâncias não terão, só via getter e setter.]
// → Private   [Apenas a classe Mãe(super) terá acesso, o restante só via métodos da própria classe mãe como getters e setters].

// Getters e Setters - Tratando atributos privados de maneira segura!
// const getter_setter = new GetterSetter('Gabriel Felipe Carvalho de Paula', '456-260-598-73');
// console.log(getter_setter.getCPF());
// console.log(getter_setter.setCPF('456.260.598-73'));


// Static - Informações Estáticas e exclusívas da classe.
// const dados_estaticos = new Static();
// console.log(Static.atrb_estatico, Static.metodo_estatico());

// Singleton - GOF [Objeto que só podem ser chamados 1 vez];
const BD = Database.getDB('Server', 'Trust', 'ZZZ-ZZZ');
BD.connect();