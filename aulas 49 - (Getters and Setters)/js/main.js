
/* Define Property and Define Properties - Configurando objetos!
    Par não criar loop's indesejados, use let ao invés de this.
*/

function Product(name, price, inventory){                  //Parâmetro Estoque recebe Argumento.
    let setInventory = inventory;                          //Argumento vai para o estoque do SET.

    Object.defineProperty(this, 'inventory', {             //Objeto escolhido: O valor argumentado que está no parâmetro (inventory)
        enumerable: true,                                  //Mostra chave?
        configurable: true,                                //Valor pode ser posteriormente re-configurado?
        get: () => {return setInventory},                  //Get recebe o argumento e retorna o setInventory como saída final.
        set: (valor) => {                                  //Como a saída é o setInventory eu posso criar limitações e condições.
            if(typeof valor !== 'number'){                 //Se o tipo do valor for diferente de número não passará!
                throw new TypeError('Erro')
            }
            setInventory = valor;                          //Se for number, ele permite a modificação.
        }
    });

}
const product = new Product('Camiseta', 70, 3);

//Mesma coisa, com Factory Function ( Sem Object.defineProperty(..) )
function _produto(exemplo) {               // Produto recebe parâmetro 'exemplo' > (argumento: nome do produto)
    return {                               // Retorna objeto com get e set.
        get nome() {                       // Get é uma função que finge ser atributo, logo a func. nome retorna o argumento.
            return exemplo;
        },                                 // Set configura o get. 
        set nome(retornodoget) {           // Neste caso o SET pega a função do GET > nome( ) e "rouba" o retorno dela.
            retornodoget = retornodoget + '  <- Fui interceptado.' //Agora o valor do get é o que o set dizer.
            exemplo = retornodoget;        // Argumento original é o conteúdo interceptado.
        }
    };
}
const oproduto = _produto('Chocolate');
oproduto.nome = 'Outra coisa';
console.log(oproduto.nome)


