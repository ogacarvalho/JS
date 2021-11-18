
const random = (max) => {
    const random = Math.random() * (max) //By Default o random retorna  valores entre 0 e 1, por isso multiplicamos e arredondamos.
    return Number(Math.round(random))
};

const max = 100;
const min = 0;

let aleatorio = random(max);
let n1 = 0

while (aleatorio !== min){
    aleatorio = random(max);
    n1++
    console.log(`${aleatorio} || Tentativa numero: ${n1}`);
    if (aleatorio == 100){ return}
}



