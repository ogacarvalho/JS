import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] = [new Recipe('Chocolate', 'Made with Cocoa', 'https://commons.wikimedia.org/wiki/File:Sugar-free_Homemade_Chocolate.jpg'),];

  constructor(recipes: Recipe) { 
    this.recipes.push(recipes)
  }

  ngOnInit(): void {
  }

}
