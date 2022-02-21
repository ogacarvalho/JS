import axios from 'axios';

export default axios.create({
  baseURL: 'http://34.151.249.192/',
});

// Este componente mantém o URL BASE ou seja, o endereço no qual trabalhamos, e serve para exportamos sem ter que ficar "re-escrevendo" o IP.
