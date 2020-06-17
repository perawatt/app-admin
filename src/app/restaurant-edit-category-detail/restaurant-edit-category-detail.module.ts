import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantEditCategoryDetailPageRoutingModule } from './restaurant-edit-category-detail-routing.module';

import { RestaurantEditCategoryDetailPage } from './restaurant-edit-category-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RestaurantEditCategoryDetailPageRoutingModule
  ],
  declarations: [RestaurantEditCategoryDetailPage]
})
export class RestaurantEditCategoryDetailPageModule {}
