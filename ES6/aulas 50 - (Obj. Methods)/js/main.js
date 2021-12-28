/* Métodos para Objetos
Object.values -> Array apenas com os valores dos objetos.
Object.entries -> Devolve chave/valor em forma de array. 
Object.assign(des, any) -> Uma alternativa de copiar objetos.
Object.getOwnPropertyDescriptor(o, "prop") -> Descrição das propriedades do objeto.
( ...spread ) -> Serve para *copiar* objetos completos (arrays e objetos)

Já vimos...
Object.keys ( Array com as chaves dos objetos )
Object.freeze ( Quando quiser congelar um objeto ou bloquea-lo para não aceitar mudanças )
Object.defineProperties (define várias propriedades )
Object.defineProperty (define uma propriedade )
***Importante lembrar que quando você relaciona uma variável à um objeto você está apenas 'referenciando'. ( criando um link ).
*/

const produto = {nome: 'Caneca', preco: 1.8};

let exemplo = { item: produto.nome }                            //Copia especificamente um elemento do objeto.
exemplo = Object.assign({}, produto, {material: 'Porcelana'});  //Copiando objeto inteiro e adicionando mais chaves.
exemplo = {...produto};                                         //Copia o objeto inteiro.

//Modificando e Analisando Propriedades
Object.defineProperty(produto, 'nome', { writable: true });     //Modifique as propriedades do objeto.
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));  //Veja as propriedades do objeto.

//Retorna um array dos inputs do objeto
let array = Object.entries(produto);            // Array recebe [ ['chave', 'valor'], ['chave1', 'valor1'], ...]

//Simplificado
for(let conteudo of array){                    // O For retorna o conteúdo do array a cada loop. [chave, valor] ... [chave1, valor1]
    console.log(conteudo[0] + conteudo[1])     // A cada loop eu quero o conteúdo[0] e [1] do objeto iterado. chave+valor ... chave1+valor1
};                                             // retorno: chavevalor ... chave1valor1

//Modo sofisticado: 'Desestruturação por atribuição'
for (let [chave, valor] of array){
    console.log(chave,valor)
};
