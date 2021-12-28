
/* Abstração:
  Geradores baseados na Tabelas ASCI serão escolhidos aleatóriamente.
  Um função receberá os parametros que vão indicar quais geradores serão adicionados a senha.
  A senha será um array, que rebecerá seu dados através de push.
  O push vai ser realizado com avaliação de curto circuito, se o parâmetro for verdadeiro, faça isso!
  No final, formataremos o array usando Join e Slice.
  Join("") remove as vírgulas.
  Slice("0", qtd) fatia do zero até o local desejado.
*/

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));            //Tabela ASCI -> Letras M (65-91)
const geraMinuscula = () => String.fromCharCode(rand(97, 123));           //Tabela ASCI -> Letras m (97,123)
const geraNumero = () => String.fromCharCode(rand(48, 58));               //Tabela ASCI -> Números  (45,58)
const simbolos = ',.;~^[]{}!@#$%*()_+=-';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];             //Retorna simbolo[?]

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
  const senhaArray = [];                                                            
  qtd = Number(qtd);              //Garante que o dado será um Number para o sistema funcionar.

  //Aqui temos uma avaliação de curto-circuíto: Se maiúsculas for verdadeiro então faça isso!  
  for(let i = 0; i < qtd; i++) {                                   //A QTD será de acordo com o que o usuário escolher.
      maiusculas && senhaArray.push(geraMaiuscula());              //Todo parâmetro que for selecionar, entrará no loop e será subido.
      minusculas && senhaArray.push(geraMinuscula());
      numeros && senhaArray.push(geraNumero());
      simbolos && senhaArray.push(geraSimbolo());
    //simb true? então senhaArray recebe (% simbolo aleatório)
    //simb false? pula..
  }

  //Importante: A cada loop vai gerar quatro valores, então precisamos "cortar" o array para deixar na quantidade desejada

  return senhaArray.join('').slice(0, qtd);
}
