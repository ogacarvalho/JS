
// Função que retorna números aleatórios.
const random = (min, max) => { 
    const random = Math.random() * (max - min) + min; 
    return Number(Math.ceil(random))
};

// Configurações
const min = 1;
const max = 50;
const sorteado = 10;
let aleatorio = random(min, max);

// Sistema
while (aleatorio !== sorteado) {
    aleatorio = random(min, max);
    console.log(aleatorio);
}


