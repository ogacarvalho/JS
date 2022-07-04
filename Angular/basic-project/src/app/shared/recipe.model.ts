// O model de um component é um "blueprint" de como os elementos de um componente devem ser. Ou seja uma estrutura básica que deve ser respeitada.

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    // O constructor é o que permite que uma classe seja instanciada, e se torne dinâmica além disso o seu bloco de execução é iniciado ao instanciar a classe.
    constructor(name:string, description:string, imagePath:string){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }
}