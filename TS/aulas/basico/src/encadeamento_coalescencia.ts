
// Encadeamento Opcional
// É o uso do operador ? durante um encadeamento, tornando "opcional".

// Coalescência Nula
// É uma checagem tipo "short circuit", porém para valores nulos ou undefined.
// Ou seja, se for undefined | nulo, executa o lado direito, else executa o lado esquerdo.

type Documento = {
    titulo: string;
    texto: string;
    data?: Date;
};

const documento: Documento = {
    titulo: 'The Titulo',
    texto: 'Era uma vez',
};

// Encadeamento Opcional ↓ Coalescência    ↓
console.log(documento.data?.toDateString() ?? 'Ixi, não existe');