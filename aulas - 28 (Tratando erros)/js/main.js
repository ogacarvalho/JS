
const soma = ( x, y ) => {
    if ( typeof x !== 'number' || typeof y !== 'number'){
        throw new Error ('SEILA')
    }
    return console.log(x + y);
};

let a = 10;
let b = 10;

try {
    
    // Executando a função....
    soma(a, b);

}catch( error ){
    console.log('Se der erro na função, eu serei executado.')
}finally{
    console.log('Sou sempre executado, e posso ser usado para corrigir problemas.')
    // É muito util para tentar corrigir crash pois esse bloco sempre será executado.
}


