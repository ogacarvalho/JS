/* Operadores Lógicos

&& - e.
console.log(true && true && true); //Todas as expressões precisam estar satisfeitas para ativarem o bloco de execução.

|| - ou.
console.log(true || false || false); //Apenas uma expressão precisa estar satisfeita para ativar o bloco de execução.

!  - Inverte os valores, é conhecido como 'Operador de Negação'.

*/

//Teste Formulário Fictício
(function teste(){
    
    const login = (usuario, senha) => {
        const userServer = 'Gabriel';
        const passwordServer = 123456;

        if(usuario === userServer && senha === passwordServer){
            console.log('Login Efetuado com sucesso!')
        }else{
            console.log('Usuário ou Senha incorretos')
        }
    };
    login('Gabriel', 123456);

})();








