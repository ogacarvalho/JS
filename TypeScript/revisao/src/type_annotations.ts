
// Type Annotation é o ato de "tipar" no entanto, ao tiparmos podemos controlar ainda mais o escopo daquilo que recebemos usando "<Generics>" que é quando usamos tipos genéricos
// já da própria linguagem para controlar ainda mais o escopo de dados que aquela variável receberá;

// Exemplo:
let array_number: Array<number> = [1,2,3];
let array_number_1: Array<number> = array_number;
// → Sabemos que a variável receberá um array, no entanto delimitar o escopo ainda mais, dizendo que a variável receberá um array de números → Generic


// Isso é quando tipamos sem o uso de interface ou types.
let pessoa: {a: string, b:string, c:string, d?:boolean} = {
    a: 'Gabriel',
    b: 'Gabriel',
    c: 'Gabriel'
};

// Const divide será uma função que receberá um parâmetro x e y do tipo number e retornará number.
const divide: (x:number, y:number) => number = (x,y) => x/y;

// ANY : não use esse tipo.
// VOID: use quando sua função não conter retorno.