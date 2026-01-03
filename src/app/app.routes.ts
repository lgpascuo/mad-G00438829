import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.page').then(m => m.HomePage)
  },
  {
    path: 'recipe/:id',
    loadComponent: () =>
      import('./recipe-details/recipe-details.page')
        .then(m => m.RecipeDetailsPage)
  }
];