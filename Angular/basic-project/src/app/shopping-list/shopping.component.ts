import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
    selector: 'shopping-list',
    templateUrl:'./shopping.component.html',
    styleUrls: ['./shopping.component.css']
})

export class ShoppingListComponent {
    public ingredients: Ingredients[] = [cocoa, sugar];

    constructor(){}

    onIngredientsAdded(_ingredients: Ingredients){
        this.ingredients.push(_ingredients);
    }
};

const cocoa = new Ingredients('Cocoa', 10);
const sugar = new Ingredients('Sugar', 1);