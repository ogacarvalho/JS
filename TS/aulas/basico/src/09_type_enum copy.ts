
// Enum: Estrutura de dados não ordenada, geralmente quando queremos "enumerar" alguma coisa ;
// → Exemplo: Fornecimento de uma cartela de cores disponíveis para escolha ;
// → Uma vez definidos, os valores poderão ser acessados tanto pelo nome quanto pelo index ;
// ! Os índices são completamente mutáveis, portanto o valor para acessá-los poderá ser qualquer coisa.
// ! Merge: Ao criar outro (ENUM) com o mesmo nome, eles se unem em um só.

enum Cores {
  VERMELHO,            // 0
  VERDE,               // 1
  LARANJA,             // 2
  AZUL = 'OPÇÃO 1',    // !
  AMARELO = 100,       // !
}

enum Cores {
  ROSA = 'PINK',
  ROXO = 'PURPLE',
  CINZA = 'GREY',
}

enum Teste {
  A = 1,
  B = 2,
  C = 3,
}

function escolhaTeste(teste: Teste): void {
  return console.log(Teste[teste]);
}

escolhaTeste(Teste.A);  // 1
escolhaTeste(1);        // A
