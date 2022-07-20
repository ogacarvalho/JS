import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingService } from './shopping.service';

@Component({
    selector: 'shopping-list',
    templateUrl:'./shopping.component.html',
    styleUrls: ['./shopping.component.css']
})

export class ShoppingListComponent implements OnInit {
    public ingredients: Ingredients[] = [];    

    constructor(private shoppingService: ShoppingService){}

    ngOnInit(): void {
        this.ingredients = this.shoppingService.getIngredients();
    }
};
