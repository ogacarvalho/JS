
// Array | Promises: Generics
// São elementos Generics, e seu uso é fortemente indicado, pois torna o código mais inteligente.


const array_0: number[] = [1,2,3,4];                               // Padrão: Convencional
const array_1: Array<number> = [1,2,3,4];                          // Padrão: Generics

async function promiseAsync(): Promise<number> {                   // Async
    return 1;
}

function myPromise(): Promise<number> {                            // Promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000)
    });
}

promiseAsync().then(resultado => console.log(resultado + 1));
myPromise().then(resultado => console.log(resultado + 1));
