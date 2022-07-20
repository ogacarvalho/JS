import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

export class ShoppingService {
    private ingredients: Ingredients[] = [cocoa, sugar];

    getIngredients(): Ingredients[] {
        return this.ingredients;
    }

    addIngredients(ingredients: Ingredients) {
        this.ingredients.push(ingredients);
    }

    addIngredient(ingredients: Ingredients[]){
        // for (let ingredient of ingredients) {  {É uma boa, mas não é escalável pois consome muito processamento}
        //     this.addIngredients(ingredient);
        // }

        this.ingredients.push(...ingredients);
    }
}

const cocoa = new Ingredients('Cocoa', 10);
const sugar = new Ingredients('Sugar', 1);