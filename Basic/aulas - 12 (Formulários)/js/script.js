
function form(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('#resultado');
    const pessoas = [];

    const prevenir = (evento) => {
        
        evento.preventDefault();
        const nome = form.querySelector('#nome').value;
        const sobrenome = form.querySelector('#sobrenome').value;
        const peso = form.querySelector('#peso').value;
        const altura = form.querySelector('#altura').value;
        resultado.innerHTML += `<p>${nome} ${sobrenome} está pesando ${peso}Kgs e possui ${altura} de altura.</p>`;

        pessoas.push({
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        });

        console.log(pessoas);
    };
    form.addEventListener('submit', prevenir);

}
form();



