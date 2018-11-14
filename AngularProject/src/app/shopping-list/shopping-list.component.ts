import * as ingredientModel from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: ingredientModel.Ingredient[] = [
    new ingredientModel.Ingredient('Apples', 5),
    new ingredientModel.Ingredient('Tomatoes', 10)
  ];
  constructor() {}

  ngOnInit() {}

  onIngredientAdded(ingredient: ingredientModel.Ingredient) {
    this.ingredients.push(ingredient);
  }
}
