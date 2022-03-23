
// Overload
// É quando uma função, prevê a possibilidade de receber mais parâmetros.
// → Não é possível fazer overload em JS, por essa razão é obrigatório o uso de TypeGard.
// → Validações excessivas.

type Adder = {
    (x: number): number;
    (x: number, y:number): number;
    (...arg: number[]): number;
};

const adder: Adder = (x:number, y?:number, ...args: number[]) => {
    if(args.length > 0) return args.reduce((s, v) => s + v, 0) + x + (y || 0);   // TypeGard
    return x + (y || 0); // validação pois existe a possibilidade do y não existir conforme o type acima.
};

console.log(adder(1));