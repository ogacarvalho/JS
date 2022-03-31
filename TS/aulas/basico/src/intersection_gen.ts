
// Intersection:
// → É quando queremos fazer o "merge" de objetos por exemplo, a tipagem deste tipo de procedimento é com (&), desta maneira definindo uma "intersection".

//------------     ↓    quando o generics está nesta posição, a inferência ocorre ao chamar a função.
function Merge<o_1, o_2>(obj_1: o_1, obj_2: o_2): o_1 & o_2 { // → "o_1 & o_2" é uma intersection, pois o retorno é a "soma" dos objetos.
    return {...obj_1, ...obj_2};
}

const objeto_1 =  {
    chave_1: 'valor_1',
};

const objeto_2 = {
    chave_2: 'valor_2',
};

const merge = Merge(objeto_1, objeto_2);
console.log(merge);
