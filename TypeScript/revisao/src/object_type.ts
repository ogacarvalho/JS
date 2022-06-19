// É o controle total dos inputs e outputs de um objeto.
// É importante ressaltar que esta não é a melhor maneira de implementar o type objects, pois aqui estamos "chumbando" o tipo do objeto nele mesmo,
// impossibilitando o compartilhamento deste "tipo" de objeto para outros.

const objeto: {
    readonly chave_a:string;
    chave_b: string;
    chave_c?: string;
    [key:string]: unknown;
} = {
    chave_a: 'Atributo de apenas leitura',
    chave_b: 'Atributo comum',
};

objeto.chave_c = 'Atributo opcional'
objeto.chave_d = 'Index Signature [key:string]:unknown → Isso possibilita a criação de uma chave extra, caso necessário';


// Quando tipamos desta maneira, não existe a possibilidade de incluir + chaves, pois quebra o tipo previamente inferido.
// + Seguro embora não seja a implementação mais adequada.
let composicao_basica_objeto: { readonly chave: string;} = { chave: 'valor em string' };
