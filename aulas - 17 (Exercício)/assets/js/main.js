(function sistema(){
    const form = document.querySelector('#form');

    const resultado = (evento) => {
        
        evento.preventDefault();
        const retorno = document.querySelector('#resultado');
        const peso = document.querySelector('#peso').value;
        const altura = document.querySelector('#altura').value;
        const resultado = (mensagem) => { retorno.innerHTML = mensagem };

        
        const calculo = (peso, altura) => { 
            const imc = peso / altura **2
            return Number(imc.toFixed(1));
        }
        const imc = calculo(peso, altura);

        if(imc < 10 || !peso || !altura || altura > 2.3){
            retorno.style.background = 'rgba(255, 133, 133, 0.829)';
            resultado('Dados Inválidos');
            alert('Dados Inválidos');
            return
        }else{
            retorno.style.background = 'rgba(134, 255, 134, 0.829)'
            const abaixo = imc > 10 && imc <= 18.5 && resultado(`Seu IMC é <strong>${imc}</strong> <br> Você está abaixo do peso!`);
            const normal = imc > 18.5 && imc <= 24.9 && resultado(`Seu IMC é <strong>${imc}</strong> <br> Você está com peso normal.`);
            const acima = imc > 24.9 && imc <= 29.9 && resultado(`Seu IMC é <strong>${imc}</strong> <br> Você está com sobrepeso.`);
            const grau1 = imc > 29.9 && imc <= 34.9 && resultado(`Seu IMC é <strong>${imc}</strong> <br> Você está com obesidade Grau 1`);
            const grau2 = imc > 34.9 && imc <= 39.9 && resultado(`Seu IMC é <strong>${imc}</strong> <br> Você está com obesidade Grau 2`);
            const grau4 = imc > 40 && resultado(`Seu IMC é <strong>${imc}</strong> <br> Você está com obesidade Grau 3`);
        }
    
        };

    form.addEventListener('submit', resultado);
})();