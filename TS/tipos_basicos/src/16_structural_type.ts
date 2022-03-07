
// Tipagem estruturada: A identidade do tipo não importa apenas as restrições.
// → Em resumo, structural type, não liga para a identidade da formatação, apenas para a estrutura, podendo usar o tipo uma ou mais vezes na mesma função, desde que o parâmetro respeite a estrutura definida.

type VerifyUserFn = (user: User, payload: User) => boolean;                                    // Definindo a estrutura da função.
type User = {username: string, password: string };                                             // Definindo a estrutura dos parâmetros que vão na função.

const verifyUser: VerifyUserFn = (user, sentValue) => {                                        // Função vai comparar os dois parâmetros (iguais).
  return ( user.username === sentValue.username && user.password === sentValue.password
  );
  }
  const input_usuario = { username: 'Gabriel', password: '123456' };
  const banco_de_dados = { username: 'Gabriel', password: '123456' };
  
  const loggedIn = verifyUser(input_usuario, banco_de_dados);                                   // True
