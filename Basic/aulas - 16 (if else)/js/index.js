const hora = 21;
// Short-Circuit
const bomDia = hora >= 0 && hora < 12 && console.log('Bom dia');
const boaTarde = hora >= 12 && hora < 18 && console.log('Boa tarde'); 
const boaNoite = hora >= 18 && hora < 24 && console.log('Boa noite');

// If Padrão
if (hora >= 0 && hora < 12) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora < 18){
    console.log('Boa tarde');
} else if (hora >= 18 && hora < 24){
    console.log('Boa noite!');
} else {
    console.log('Tem algo errado aí..');
}
