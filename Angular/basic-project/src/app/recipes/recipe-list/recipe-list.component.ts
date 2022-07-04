import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] = [chocolate, white_chocolate ];

  constructor() { }

  ngOnInit(): void {
  }

}

const chocolate = new Recipe('Chocolate', 'Made with Cocoa', 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Sugar-free_Homemade_Chocolate.jpg')
const white_chocolate = new Recipe('White Chocolate', 'Made with Cocoa', 'https://upload.wikimedia.org/wikipedia/commons/4/47/Chopped_white_chocolate_chunks.jpg')