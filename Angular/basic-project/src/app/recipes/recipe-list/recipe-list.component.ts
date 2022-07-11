import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [chocolate, white_chocolate ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
   }

}

const chocolate = new Recipe('Chocolate', 'Made with Cocoa', 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Sugar-free_Homemade_Chocolate.jpg')
const white_chocolate = new Recipe('White Chocolate', 'Made with Cocoa', 'https://upload.wikimedia.org/wikipedia/commons/4/47/Chopped_white_chocolate_chunks.jpg')