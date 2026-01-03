import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
import { heartOutline, settingsOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
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
  isLoading = false;

  constructor(private recipeService: RecipeService) {
    addIcons({ heartOutline, settingsOutline });
  }

  searchRecipes() {
    if (!this.ingredients.trim()) {
      this.recipes = [];
      return;
    }

    this.isLoading = true;

    this.recipeService
      .searchByIngredients(this.ingredients)
      .subscribe({
        next: results => {
          this.recipes = results;
          this.isLoading = false;
        },
        error: err => {
          console.error(err);
          this.isLoading = false;
        }
      });
  }
}