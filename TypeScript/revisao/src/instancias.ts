import { Empresa } from "./class";
import { Colaborador } from "./class";
import { Aluno, Pessoa } from "./heranca";
import { SomaArray } from "./somadorArray";
import { SubClasse } from "./sub-classes";

// Classes
const empresa_1 = new Empresa('Company LTDA', '456260598/0001-0');
const colaborador_1 = new Colaborador('Gabriel', 'Carvalho');
const colaborador_2 = new Colaborador('Pedro', 'Pinto');
const colaborador_3 = new Colaborador('José', 'Paiva');
empresa_1.addColaborador(colaborador_1);
empresa_1.addColaborador(colaborador_2);
empresa_1.addColaborador(colaborador_3);
// empresa_1.showColaborador();

// SomadorArray
const lista = [10,213, 12, 32, 65, 32, 564, 100, 10, 90, 42, 132, 76, 98];
const teste = new SomaArray(lista);
//console.log(`A soma dos números pares é = ${teste.somaPares()}!`);

// Heranças - Extendendo ou modificando as possibilidades de uma classe mãe.
const herancas_classe_pessoa = new Pessoa('Gabriel', 'Felipe', 26, '456.260.598-73');
const herancas_pessoa = new Aluno('Gabriel', 'Felipe', 26, '456.260.598-73');
// herancas_classe_pessoa.get_nome_completo();
// herancas_pessoa.get_nome_completo();

// Sub-classes - Uma herança turbinada.
const sub_classe = new SubClasse('A', 'B', 'C');
sub_classe.getABC();