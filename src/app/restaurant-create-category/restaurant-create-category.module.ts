import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantCreateCategoryPageRoutingModule } from './restaurant-create-category-routing.module';

import { RestaurantCreateCategoryPage } from './restaurant-create-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RestaurantCreateCategoryPageRoutingModule
  ],
  declarations: [RestaurantCreateCategoryPage]
})
export class RestaurantCreateCategoryPageModule { }
