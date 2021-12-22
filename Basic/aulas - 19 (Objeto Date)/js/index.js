/* new Date();
O elemento acima, é conhecido com função construtora, toda função construtora, possui o elemento *new* e inicia-se com letra maiúscula. 'new Date();'
A função construtora, recebe este nome, pois toda vez que for acionada, ela criará um novo valor e irá atualiza-lo dentro da variável. Ou seja, "building information" criando/construindo informação. Além disso, uma função construtora, possui diversos métodos que podem ser acessados.
*/

// const data = new Date('2022-03-19 00:00:00');
// console.log(data.getDate());

//Importante ressaltar, que o valor do objeto construtor pode ser um dia específico basta utilizar os padrões de inserção de datas. Exemplificados acima ou no MDN.

function leftZero(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = leftZero(data.getDate());
    const mes = leftZero(data.getMonth() + 1);
    const ano = leftZero(data.getFullYear()+ 1);
    return `${dia}/${mes}/${ano}`;
}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
