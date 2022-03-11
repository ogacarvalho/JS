// Type: Tuple → Array com tamanho fixo e valores bem específicos.
// → Geralmente, a usamos quando queremos dados com tamanho fixo e valores específicos, normalmente por questões de performance ou segurança.
// ! A tupla por padrão é mutável desde que se respeite o type.

const tupla: [number, string, string?] = [1, 'Gabriel'];

tupla[0] = 10;                                                   // Mutável
tupla[2] = 'Felipe';                                             // Opcional

const array_fixo: readonly string[] = ['a', 'b', 'c'];           // Se intenção for um array fixo, deste modo previne a falha do push na tupla.
