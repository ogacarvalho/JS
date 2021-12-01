
// Unificação do Filter, Map e Reduce

const array = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


let filtro = array.filter(valorArray => valorArray % 2 === 0);

let mapa = filtro.map(valorFiltro => valorFiltro * 2);

let reduzir = mapa.reduce((acumulador, valorMapa) => { return acumulador += valorMapa },0);

// Cada função recebe como parâmetro o retorno da iteração de cada elemento do array.
// log: filtro[ 50, 80, 2, 8, 22 ] |  mapa[ 100, 160, 4, 16, 44 ] | reduzir 324