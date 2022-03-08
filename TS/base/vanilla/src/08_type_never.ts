
// Never - A função, nunca vai retornar nada.
// → Normalmente usado com laços infinitos ou lançamento de erros.
// ! Se o erro não for tratato (type anotation) possívelmente quebrará a aplicação.
// ! Poderiamos usar 'void' mas neste caso é mais semântico utilizar never, pois sabemos que nunca retornará nada.

export function criaErro(): never {
    throw new Error('Erro qualquer');
}
