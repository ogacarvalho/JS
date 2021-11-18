
// Recurso Arguments, capaz de acessar os argumentos da função. (Only Function)
function argumentos () { 
    let total = 0;

    for (let i of arguments){
        total += i;
    }

    console.log(total); 
}    

argumentos(00, 10, 20, 30, 40, 50, 'teste');

// Recurso rest(...) permitir passar os números sem a necessidade de coloca-los em uma array.
const calculadora = (operador, acumulador, ...numeros) => {
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '%') acumulador %= numero;
    }
    console.log(acumulador);

}
calculadora('*', 1, 1, 2, 3, 4, 5, 6, 7, 8) 

