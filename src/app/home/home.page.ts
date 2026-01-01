import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../services/recipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage {
  ingredients: string = '';
  recipes: Recipe[] = [];
  loading: boolean = false;
  error: string = '';

  constructor(private recipeService: RecipeService) {}

  searchRecipes() {
    const query = this.ingredients.trim();

    if (!query) {
      this.error = 'Please enter at least one ingredient.';
      return;
    }

    this.loading = true;
    this.error = '';
    this.recipes = [];

    this.recipeService.searchByIngredients(query)
      .subscribe({
        next: (res: { results: Recipe[] }) => {
          this.recipes = res.results;
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.error = 'Failed to fetch recipes. Try again.';
          this.loading = false;
        }
      });
  }
}