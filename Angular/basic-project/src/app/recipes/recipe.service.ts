import { EventEmitter } from "@angular/core";
import { Recipe } from "../shared/recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>()
    private recipes: Recipe[] = [chocolate, white_chocolate ];

    getRecipes(): Recipe[] {
        return this.recipes.slice(); // "Macete" para retornar uma cópia idêntica do recipe, ao invés de retornar ele propriamente dito. [Isso torna a propriedade + privada]
    }
}

const chocolate = new Recipe('Chocolate', 'Made with Cocoa', 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Sugar-free_Homemade_Chocolate.jpg')
const white_chocolate = new Recipe('White Chocolate', 'Made with Cocoa', 'https://upload.wikimedia.org/wikipedia/commons/4/47/Chopped_white_chocolate_chunks.jpg')
