import axios from 'axios';  // Caso você não tenha feito o deploy da api pode usar o http://localhost:300X

export default axios.create({
  baseURL: 'http://34.151.249.192/',
});

