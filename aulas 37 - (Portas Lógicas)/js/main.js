/* Portas Lógicas
Todas as portas abaixo, são possíveis graças a re-organização das portas lógicas. 

- NOT (0!1)  === Toda saída será o inverso da entrada. Input true output False. 
- AND (1&&1) === Para o output ser verdadeiro, todas os inputs devem ser verdadeiros.
- OR  (1||0) === Para o output ser verdadeiro, basta um ou mais inputs serem verdadeiros.
- XOR (1^0)  === Para o output ser verdadeiro, precisa ter um número ímpar de inputs verdadeiros.
*/


const gates = (calc) => {
    let teste = eval(calc);
    if(teste == 1) {
        return 'TRUE'
}else{ return 'FALSE'}
};
console.log(gates(1^1^0^1))