
//Tipos literais: são valores fixos ou constantes ou seja, que não podem ser alterados.
//→ Como podemos ver no exemplo abaixo é possível porém [não indicado] fazer com let, mas é [recomendado] que se faça com const.
//→ São considerados (sub-tipos).
//→ [as const (asserção)] → util em determinadas situações, torna a chave de um objeto por exemplo ou atributo de uma classe inalterável.



// Não-literal    literal          literal                  literal [recomendado]
let    x = 10;    let y: 10 = 10;  let w = 100 as const;    const z = 10;


// [name] agora é do tipo "Gabriel" e não "string", logo não poderá ser alterado.
const person = {
  name: 'Gabriel' as const,
  sobrenome: 'Carvalho',
};

// Cor só poderá ter o tipos específicados. [melhor que enum ;D]
function escolhaCor(cor: 'Azul'|'Branco'|'Amarelo'):string {
  return cor;
};

console.log(escolhaCor('Branco'));

// Module-mode [Ao adicionar "export" o Typescript considera que este arquivo é um modulo e o remove do escopo-global].
export default 0;
