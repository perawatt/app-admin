import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantCreateCategoryPageRoutingModule } from './restaurant-create-category-routing.module';

import { RestaurantCreateCategoryPage } from './restaurant-create-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantCreateCategoryPageRoutingModule
  ],
  declarations: [RestaurantCreateCategoryPage]
})
export class RestaurantCreateCategoryPageModule {}
