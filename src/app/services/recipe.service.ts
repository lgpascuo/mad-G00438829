import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Recipe } from './recipe'; 

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'https://api.spoonacular.com/recipes/complexSearch';

  constructor(private http: HttpClient) {}

  searchByIngredients(ingredients: string) {
    const params = new HttpParams()
      .set('includeIngredients', ingredients)
      .set('number', '10')
      .set('apiKey', environment.spoonacularApiKey);

    return this.http.get<{ results: Recipe[] }>(this.apiUrl, { params });
  }
}