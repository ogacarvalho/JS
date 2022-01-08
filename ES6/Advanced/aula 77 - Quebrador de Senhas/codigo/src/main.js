import './assets/css/style.css';

// Aparentemente a melhor forma de encontrar senhas é com base na criação de senhas aleatórias configuradas a uma grande possibilidade.

  let button = document.querySelector("#gerar");
  let qdl = document.querySelector("#letras");
  let numbers = document.querySelector("#num");
  let maiusc = document.querySelector("#maiusc");
  let simb = document.querySelector("#simb");
  let result = document.querySelector("#senha");
  

  let letras =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","w","z"];
  let numeros =["1","2","3","4","5","6","7","8","9","0"];
  let simbolos = [",", "#", "$","@", "*", "&"];

  button.addEventListener("click", e => {
    let senha = [];
    let nova = [];
    let xnum = 0;
    let log = [];

    if(qdl.value < 4) {
      alert('Cadastro incompleto ou incorreto!')
      return
    }

    sistema(senha);

    if (numbers.checked) addNumber(senha);
    if (maiusc.checked) addMaiusc(senha);
    if (simb.checked) addSimb(senha);

    senha = converte(senha);

    sistema(nova);
    if (numbers.checked) addNumber(nova);
    if (maiusc.checked) addMaiusc(nova);
    if (simb.checked) addSimb(nova);
    nova = converte(nova);
    
    while(senha != nova){
      
      if(xnum > 100000) return;
      nova = [];
      sistema(nova);
      if (numbers.checked) addNumber(nova);
      if (maiusc.checked) addMaiusc(nova);
      if (simb.checked) addSimb(nova);
      nova = converte(nova);
      xnum++
      if(log.includes(nova)) continue;
      log.push(nova);
      console.log("->", nova, "senha:", senha, xnum)

      if(xnum > 99999)return result.innerHTML = `
      Senha não encontrada!<br><br>
      Senha Quebrada: ${senha}<br><br>
      Tentativas: ${xnum}<br><br>
      Palavras Únicas: ${log.length}<br><br>
      Palavras Repetidas: ${xnum - log.length}<br><br>
      Possibilidades: ${qdl.value ** letras.length}`
    }
    return result.innerHTML = `Senha encontrada!<br><br>
    Senha a ser quebrada: ${senha}<br><br>
    Tentativas: ${xnum}<br><br>
    Senhas Únicas: ${log.length}<br><br>
    Senhas Repetidas: ${xnum - log.length}<br><br>
    Possibilidades: ${qdl.value ** letras.length}`
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

