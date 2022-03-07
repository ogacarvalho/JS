

// Type Assertion: é quando queremos afirmar para o TS que o tipo que estamos usando, existe pois temos certeza disso.
// → Isso é util pois transferimos a responsabilidade para nós mesmos, e não precisamos "provar" para o TS através de uma validação.


// Recomendado

// Condicional, vai checar se o elementoHTML existe primeiro.                 
const body_1 = document.querySelector('body');                                // Recomendado quando não temos certeza, se de fato o elemento será true.
if (body_1) body_1.style.background = 'blue';

// Type Assertion:                            as tipo...
const body_3 = document.querySelector('body') as HTMLBodyElement;             // Estamos inserindo manualmente o tipo exato, que o elemento receberá.
body_3.style.background = 'blue';



// Não recomendado ↓↓↓

// Non-null assertion:                      →!
const body_2 = document.querySelector('body')!;                               // !: garantindo que o objeto existe, e não pode ser nulo.
body_2.style.background = 'blue';  

// Para usar Type Assertion com qualquer tipo (sub-tipos):
const body_4 = (document.querySelector('body') as unknown) as number;         // Extremamente raro, e é uma gambiarra mas funciona.
