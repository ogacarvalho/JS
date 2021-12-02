
/* Define Property and Define Properties - Configurando objetos!
    Object é um recurso nativo que fornece a opção de configurar as propriedades de qualquer objeto.
    Dentro de Object temos por exemplo outras funções pré-definidas. (Key/Value/Properties/Property...)
*/

function Product(name, price, inventory){

    //Unitário
    Object.defineProperty(this, 'inventory', {     //Here we can change de object properties.
        enumerable: true,                          //Mostra chave?
        value: inventory + '-FACTORY',             //Valor da chave
        writable: false,                           //Valor alterável?
        configurable: false                        //Valor pode ser posteriormente re-configurado?
    });


    //Diversos
    Object.defineProperties(this,{
        name: { enumerable: true,
                value: name + ' ID-190',
                writable: false,
                configurable: false},

        price: { enumerable: true,
            value: 'R$ ' + price + ',00 ',
            writable: false,
            configurable: false}
    });

}

const product = new Product('Camiseta', 70, 3);
