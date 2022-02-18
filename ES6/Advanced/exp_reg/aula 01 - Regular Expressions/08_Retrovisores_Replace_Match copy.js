
/* Expressões Regulares - Retrovisores com Replace e Match

$1, $2, $3 -> Retrovisores são utilizados pelo Replace. 
...porém no Match para referenciar usamos "\1" === "$1"

! Importante: (.*) não captura espaços ou quebras de linha, para fazer isso adicione: [\s\S].
*/

let { html } = require('./base');

const FOUND = /<(\w+?)>.+?<\/\1>/g;