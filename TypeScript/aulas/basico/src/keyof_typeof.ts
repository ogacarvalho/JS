
// Typeof e Keyof [TS].
// → Uma maneira elegante de atribuir a base estrutura de um objeto ou sua chaves à um determinado tipo.

// A função está recebendo o tipo estrutural "color" e os valores das chaves deste mesmo tipo estrutural, assim o objeto pode ser modificado livremente.
const color = {
    verde: 'green',
    azul: 'blue',
    preto: 'black',
};

type _colors = typeof color;  // o tipo [_colors] recebe a base estrutural do objeto [color].
type _color  = keyof _colors; // o tipo  [_color] recebe as possíveis chaves associadas à base estrutural [_colors].  


const translate = (cor: _color, cores: _colors ) => console.log(cores[cor]);       translate("preto", color);