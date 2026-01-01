import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'https://api.spoonacular.com/recipes/findByIngredients';

  constructor(private http: HttpClient) {}

  searchByIngredients(ingredients: string) {
    const params = new HttpParams()
      .set('ingredients', ingredients) // comma-separated list
      .set('number', '10')
      .set('apiKey', environment.spoonacularApiKey);

    return this.http.get<any[]>(this.apiUrl, { params });
  }
}