
// Chaves com tipos!
// → É possível criar tipos com chaves dinâmicas, que por exemplo espelham outros tipos.

// No exemplo abaixo, o veículo é a base estrutural de um objeto que está espelhando a base estrutural de outro objeto.

type Car = {
    brand: string;
    year: number;
    color: string;
    model: string;
};

type Veiculo = {
    marca: Car['brand'];
    ano: Car['year'];
    cor: Car['color'];
    modelo: Car['model'];
};

export const carro: Veiculo = {
    marca: 'Audi',
    ano: 2014,
    cor: 'branco',
    modelo: 'Avant',
};
