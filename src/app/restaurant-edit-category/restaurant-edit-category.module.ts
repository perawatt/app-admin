import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantEditCategoryPageRoutingModule } from './restaurant-edit-category-routing.module';

import { RestaurantEditCategoryPage } from './restaurant-edit-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantEditCategoryPageRoutingModule
  ],
  declarations: [RestaurantEditCategoryPage]
})
export class RestaurantEditCategoryPageModule {}
