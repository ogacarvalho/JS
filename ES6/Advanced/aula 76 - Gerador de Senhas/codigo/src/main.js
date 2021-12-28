import './assets/css/style.css';

(() => {


  let button = document.querySelector("#gerar");
  let qdl = document.querySelector("#letras");
  let numbers = document.querySelector("#num");
  let maiusc = document.querySelector("#maiusc");
  let simb = document.querySelector("#simb");
  let result = document.querySelector("#senha");
  

  let letras =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];
  let numeros =["1","2","3","4","5","6","7","8","9","0"];
  let simbolos = [",", "#", "$","@", "*", "&"];

  button.addEventListener("click", e => {
    let senha = [];

    if(qdl.value < 4) {
      alert('Cadastro incompleto ou incorreto!')
      return
    }

    sistema(senha);

    if (numbers.checked) addNumber(senha);
    if (maiusc.checked) addMaiusc(senha);
    if (simb.checked) addSimb(senha);

    console.log(converte(senha));
    return result.innerHTML = `SENHA: <br><br>${converte(senha)}`;
  });

    //Criador de Senhas
    function sistema(senha){
    
      while(senha.length < qdl.value){
        let abc = aleatorio(letras.length);
        senha.push(letras[abc]); 
      }
  
      return senha;
    }
  
    //aleatório (0 ao Valor)
    let aleatorio = (valor) => {
      return Math.floor(Math.random() * valor);
    }
  
    //Adiciona Números;
    function addNumber(senha){
      let local = aleatorio(senha.length);
      let substituto = numeros[aleatorio(numeros.length)];
      return senha[local] = substituto;
    }
  
   //Adiciona Maiúscula:
   function addMaiusc(senha){
    let random = aleatorio(senha.length);
  
    while(!isNaN(senha[random])){          //Enquanto for número, re-faça o random.
      random = aleatorio(senha.length);
    }
  
    let letraM = senha[random].toUpperCase();
    let atribui = senha[random] = letraM;
  
    return senha = atribui;
    }
  
  //Adiciona Símbolos:
    function addSimb(senha){
      let random = aleatorio(senha.length);
      let substituto = simbolos[aleatorio(simbolos.length)];
  
      while(senha[random] === senha[random].toUpperCase() || !isNaN(senha[random])){    
        random = aleatorio(senha.length);
      }
      senha[random] = substituto;
  
      return senha;
    }
  
    //Array iterado
    function converte(senha){
      let resultado = "";
      for(let i of senha){
        resultado += i;
      }
  
      return resultado;
    }

  
})();
