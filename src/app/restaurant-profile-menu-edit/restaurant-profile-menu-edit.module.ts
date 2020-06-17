import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantProfileMenuEditPageRoutingModule } from './restaurant-profile-menu-edit-routing.module';

import { RestaurantProfileMenuEditPage } from './restaurant-profile-menu-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RestaurantProfileMenuEditPageRoutingModule
  ],
  declarations: [RestaurantProfileMenuEditPage]
})
export class RestaurantProfileMenuEditPageModule {}
