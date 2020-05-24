import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantProfileMenuCreatePageRoutingModule } from './restaurant-profile-menu-create-routing.module';

import { RestaurantProfileMenuCreatePage } from './restaurant-profile-menu-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RestaurantProfileMenuCreatePageRoutingModule
  ],
  declarations: [RestaurantProfileMenuCreatePage]
})
export class RestaurantProfileMenuCreatePageModule {}
