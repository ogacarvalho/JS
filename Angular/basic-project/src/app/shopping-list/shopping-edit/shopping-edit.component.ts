import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name_input', {static: false}) nameInputRef: ElementRef
  @ViewChild('amount_input', {static: false}) amountInputRef: ElementRef
  @Output() ingredientAdded = new EventEmitter<Ingredients>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingrediente_name = this.nameInputRef.nativeElement.value;
    const ingrediente_amount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredients(ingrediente_name, ingrediente_amount);
    this.ingredientAdded.emit(newIngredient);
  }

}
