
/*
Operadores de comparação!

> Maior que...
< Menor que...
>= Maior ou igual que...
<= Menor ou igual que...

== Igual à... (Valor) ***Não usar***
!= Diferente de... (Valor) **Não usar***

=== Idêntico à... (Valor e Tipo)
!== Totalmente diferente de... (Valor e Tipo)

*/

(function testes(){

    const comparar = (x, y) => {
        if (x !== y){
            console.log(`Verdadeiro! ${x} é diferente de "${y}"`);
        }else{
            console.log(`Falso, ${x} é estritamente igual à ${y}`);
        }
    };
    
    comparar(10, "10");
})();


