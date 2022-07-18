
import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({ selector: '[appDropdown]' })

export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }

}

// Lembre-se de declarar em AppModules o DropDownDirective!
// Aplicação: <li class="dropdown" appDropdown> [Basta adicionar a diretiva sem nenhuma formatação, na frente de um dropdown.]
