let body = document.querySelector('body');
let h1 = document.createElement('h1');
body.appendChild(h1);
let date = new Date;
h1.innerHTML = `Hoje, é o primeiro dia em que usamos um código profissional. <br>${date.getUTCDate()} - ${date.getUTCMonth() + 1} - ${date.getFullYear()}`;
