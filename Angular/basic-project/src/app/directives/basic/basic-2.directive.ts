
import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[basic_2]'
})
export class Basic2Directive implements OnInit {
  @Input() defaultColor: string = 'transparent';                                          // O Input nos permite criar propriedades dinâmicas.
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;    // HostBinding, seleciona um estilo e o transforma em propriedade.

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void { 
    //this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red');        // Deste modo a atribuição é fixa.
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {                               // @HostListener realiza a atribuição através de eventos específicos.
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'green');
    this.backgroundColor = this.highlightColor;
  } 

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  } // Uma maneira mais simples de realizar modificações no estilo, com @HostBinding;
}

// Renderer e Hoslistener → Maneira recomendada de criar atributos.
// <p basic_2 [defaultColor]="'pink'"> Teste !</p>

