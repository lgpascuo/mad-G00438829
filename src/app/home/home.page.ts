import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonIcon,
  IonList,
  IonLabel,
  IonThumbnail,
  IonImg
} from '@ionic/angular/standalone';
import { RecipeService } from '../services/recipe.service';
import { addIcons } from 'ionicons';
import { heartOutline, settingsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonIcon,
    IonList,
    IonLabel,
    IonThumbnail,
    IonImg
  ]
})
export class HomePage {

  studentNumber = 'G00438829';
  ingredients = '';
  recipes: any[] = [];

  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) {
    addIcons({ heartOutline, settingsOutline });
  }

  searchRecipes() {
    if (!this.ingredients.trim()) {
      this.recipes = [];
      return;
    }

    this.recipeService
      .searchByIngredients(this.ingredients)
      .subscribe(results => {
        this.recipes = results;
      });
  }

  openRecipe(id: number) {
    this.router.navigate(['/recipe', id]);
  }
}