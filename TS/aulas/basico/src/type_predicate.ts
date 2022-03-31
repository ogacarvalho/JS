
// Predicate: normalmente utilizado, para tornar o código mais "limpo" com métodos de bons hábitos.
// ---------------------------------------------↓ Predicate: sempre que retorno for true, "value is number", false não é number.
export function isNumber(value: unknown): value is number { 
    return typeof value === 'number'; // Type Gard
}

export function soma<T>(...args: T[]): number {
    const retorno = args.reduce((sum, value) => {
        if(isNumber(sum) && isNumber(value)) {
            return sum + value;
        }
        return sum;
    }, 0 );

    return retorno;
}

console.log(soma(1,2,3));                     // 6
console.log(soma(...[1,2,3,'a','b','c', 7])); // 13