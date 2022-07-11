import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe_item: Recipe;
@Output() recipe_selected = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {
  }

  onSelected(){
    this.recipe_selected.emit();
  }

}
