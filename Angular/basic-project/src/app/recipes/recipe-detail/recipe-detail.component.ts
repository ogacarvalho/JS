import { Component, Input, OnInit } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { Recipe } from 'src/app/shared/recipe.model';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shopping_service: ShoppingService) { }

  ngOnInit(): void {
  }

  addToShoppingList(){
    this.shopping_service.addIngredient(this.recipe.ingredients);
  }
}
