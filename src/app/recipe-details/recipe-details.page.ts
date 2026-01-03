import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonImg
} from '@ionic/angular/standalone';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonImg
  ]
})
export class RecipeDetailsPage implements OnInit {

  recipe: any;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.recipeService.getRecipeDetails(id)
      .subscribe(data => this.recipe = data);
  }
}