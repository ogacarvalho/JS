
// This em arrow function em TypeScript: 
// → Neste caso o escopo será global por padrão, independentemente da função e sua posição.              ! O seu uso é altamente não-recomendado !
// ! A única maneira de usar o this, com () => {} é definindo o escopo manualmente: "e.target"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// This em funções tradicionais em TypeScript:
// → Neste caso, usamos métodos específicos para referenciar o this:  .call(this, argumentos) || .apply(this,[argumentos])
function exemplo(this: Date, nome: string, idade: number):void {
    console.log(this, nome, idade);
};

exemplo.call(new Date, 'Gabriel', 25);