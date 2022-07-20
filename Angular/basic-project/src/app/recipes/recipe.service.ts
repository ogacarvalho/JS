import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../shared/recipe.model";
import { Ingredients } from "../shared/ingredients.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>()
    private recipes: Recipe[] = [chocolate, white_chocolate];

    getRecipes(): Recipe[] {
        return this.recipes;
    }
}

const chocolate_ingredients: Ingredients[] = [new Ingredients('cocoa', 70)];
const chocolate = new Recipe( 
    'Chocolate', 
    'Made with Cocoa', 
    'https://upload.wikimedia.org/wikipedia/commons/a/a8/Sugar-free_Homemade_Chocolate.jpg', chocolate_ingredients
    );

const white_chocolate_ingredients: Ingredients[] = [new Ingredients('cocoa', 70), new Ingredients('Milk', 1)];
const white_chocolate = new Recipe(
    'White Chocolate', 
    'Made with Cocoa', 
    'https://upload.wikimedia.org/wikipedia/commons/4/47/Chopped_white_chocolate_chunks.jpg',
    white_chocolate_ingredients
    );
