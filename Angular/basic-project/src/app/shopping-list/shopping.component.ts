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

};

const cocoa = new Ingredients('Cocoa', 10);
const sugar = new Ingredients('Sugar', 1);