
// O Generic assim como o read-only pode ser usado em diversas ocasiões.
// > Inicia-se com <T> (por convenção usamos um T = type), que irá inferir automaticamente os valores.
// > O "generic" indica que tal lugar irá receber um tipo, e que este tipo irá estar em tais outros lugares. (Inferência automática);
// > Cuidado com o escopo, pois é variável de acordo com o local da função.
// ! Quando usamos "Generic" nosso código fica mais aberto, porém mais agradável de usar.
// ! O ideal é obter o máximo de segurança definindo claramente os valores que deverão ser enviados, mas nem sempre isso é possível.

// O <B> é uma representação de um valor genêrico, que poderá ser recebido, e este valor genêrico deve ser retornado determinadas vezes.
// Este tipo de função é extremamente eficiênte pois remove a necessidade de diversas validações, é "tipo" um parâmetro.
type FilterCallback<B> = ( value: B, index?: number, array?: B[] ) => boolean; //Essa base estrutural, vai ser usada, e deve receber o valor genérico <B>

    function myFilter<A>(array: A[], callbackfn: FilterCallback<A>): A[] {
        const _array = [];

        for (let i = 0; i < array.length; i++) {
            if(callbackfn(array[i])) _array.push(array[i]);
        }

        return _array;
    };
 

    const array = [1,2,3,4,5,6,7,8,9];

    const arrayFiltered = myFilter(array, (value) => value < 5);
    const arrayTeste = array.filter((value) => value < 5);
    console.log(arrayFiltered);
