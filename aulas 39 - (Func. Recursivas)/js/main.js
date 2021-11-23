
/* Funções Recursivas 
   São funções que com o uso da lógica, se auto-chamam.
   Apenas cautela ao utilizar, pois em determinado momento pode atingir o limite de recursividade,
   ou seja, se por exemplo setar o parâmetro para 10.000x ele pode dar erro.
*/


//Função recursiva
const loop = (max) => {           //Parâmetro
    if(max > 10) return;          //Se o parâmetro for maior que 10, retorne.
    max++;                        //Se não, incremente-o.
    console.log(max);             //Mostre aonde estamos...
    loop(max);                    //Execute a função novamente.
}
loop(0);

//Loop convencional.
let i = 0;
while(i < 2){ i++; console.log(i); }

