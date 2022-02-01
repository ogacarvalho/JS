// Este é o arquivo de configuração que facilita o uso do axios, pois quando for solicitado, vamos apenas falar o "/alguma coisa" ao invés do arquivo inteiro.

// Ou seja, essa configuração aqui, servirá para que não escrevamos a URL inteira, na req. desejada.

import axios from 'axios';

export default axios.create({
  baseURL: 'http://34.151.249.192/',
})
