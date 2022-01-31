
// /* Funções Geradoras*
//    - São funções especiais e são caracterizadas pelo uso do asterístico ( function* ).
//    - Elas executam o código em partes, o código fica dividido pela palavra ( yield ).
//    - A sua execução será sequenciada, e para executa-lo, utilizamos o método ( next() ).
// */

// function* geradora (){                            //Caracterizadas pelo uso do asterísco -> function*
//     let codigo1 = 'Algum código...(1)';     
//     yield  codigo1;                               //A palavra yield, executa a função em partes.
//     let codigo2 = 'Outro código...(2)';
//     yield codigo2;                                //Que se executada mais vezes, respeitará a sequência.
//     let codigo3 = 'Mais algum código.. (3)';
//     yield codigo3;
// }
// const funcao = geradora();                        //Use esta função como objeto, e então poderá itera-la e usar seus (métodos).
  
// console.log(funcao.next().value);                 //Exc. pt (1)
// console.log(funcao.next().value);                 //Exc. pt (2)
// console.log(funcao.next().value);                 //Exc. pt (3)

// for(let valor of funcao){                         //Também é possível executar todas as partes através da iteração.
//     console.log(valor);
// }





// //Func. Geradora (Yield Infinito).
// function* infinito(){                      

//     let i = 0;                          //i recebe 0;
//     while(true){                        //Enquanto a call for verdadeira...
//         i++                             //Incremente o valor de i...
//         yield i;                        //Produza o i.
//     }

// }
// const teste = infinito();               //Para ter acesso aos seus métodos, a usamos como objeto de primeira classe.


// for(i = 0; i < 10; i++){                //O for clássico, vai manter a call verdadeira, durante 10 loops.        
//     console.log(teste.next().value);
// }


/*Func. Geradora (Compartilhando Yields)
A função geradora, contém a possibilidade de compartilhar a sequência de códigos, 
utilizando-se de outra função, no qual continuará a sequência anterior.
*/

let dois = () => { return 'dois'};
let quatro = () => { return 'quatro'}
let tres = () => { return 'tres'};
let um = () => { return 'um'};
let cinco = () => {return 'cinco'};



function* share(){
    yield um();
    yield dois();
    yield tres();
}

function* sharing(){
    yield* share();         //yield* função( ); para executar a sequência compartilhada.
    yield quatro();
    yield cinco();
}

let result = sharing();

for(let valor of result){ // No exemplo abaixo, mostramos o funcionamento do for of nesta situação.
    console.log(valor);
}

/* 
For of: Ele está iterando em busca do value, enquanto ele existir.
console.log(result.next().value); um
console.log(result.next().value); dois
console.log(result.next().value); três
console.log(result.next().value); quatro
console.log(result.next().value); cinco
*/