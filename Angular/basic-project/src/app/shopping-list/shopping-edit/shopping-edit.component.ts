import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name_input', { static: false }) nameInputRef: ElementRef
  @ViewChild('amount_input', { static: false }) amountInputRef: ElementRef

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void { }

  onAddItem() {
    const ingrediente_name = this.nameInputRef.nativeElement.value;
    const ingrediente_amount = this.amountInputRef.nativeElement.value;
    const ingredient = new Ingredients(ingrediente_name, ingrediente_amount);
    this.shoppingService.addIngredients(ingredient);
  }

}
