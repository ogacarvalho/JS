
import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[basicDirective]' // O nome ao qual seu atributo será instanciado: → <p basicDirective> abc </p>
})

export class BasicDirective implements OnInit {
    constructor(private elementRef: ElementRef){}

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}

// Não é uma boa prática acessar um elemento deste modo.

// É necessário declarar a existência do arquivo no AppModule.

// Para criar uma diretiva automaticamente: ng g d nome-diretiva



