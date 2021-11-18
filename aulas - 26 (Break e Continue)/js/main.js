
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let iteration of numeros){ 
    

    if (iteration === 2){
        console.log('Pulando o 2.')                    // Atenção! Ao utilizar continue em while, não esquecer do i++ (variável de controle.)
        continue                                       // Continue é responsável por pular o laço.
    }else if(iteration === 7){           
        console.log(iteration)
        console.log('Finalizando a operação');
        break                                          // Break é o mesmo que return, ele finaliza a operação.
    }
    console.log(iteration)

}

