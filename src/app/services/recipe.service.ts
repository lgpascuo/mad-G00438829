import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private baseUrl = 'https://api.spoonacular.com/recipes';

  constructor(private http: HttpClient) {}

  searchByIngredients(ingredients: string) {
    return this.http.get<any[]>(
      `${this.baseUrl}/findByIngredients`,
      {
        params: {
          ingredients,
          number: '10',
          apiKey: environment.spoonacularApiKey
        }
      }
    );
  }

  getRecipeDetails(id: number) {
    return this.http.get<any>(
      `${this.baseUrl}/${id}/information`,
      {
        params: {
          apiKey: environment.spoonacularApiKey
        }
      }
    );
  }
}