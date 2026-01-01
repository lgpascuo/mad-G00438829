import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ingredients = '';
  recipes: any[] = [];
  isLoading = false;

  constructor(private recipeService: RecipeService) {}

  searchRecipes() {
    if (!this.ingredients.trim()) return;

    this.isLoading = true;
    this.recipeService.searchRecipes(this.ingredients).subscribe({
      next: (response) => {
        this.recipes = response.results;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
}
