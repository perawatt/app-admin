import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantProfileMenuPageRoutingModule } from './restaurant-profile-menu-routing.module';

import { RestaurantProfileMenuPage } from './restaurant-profile-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantProfileMenuPageRoutingModule
  ],
  declarations: [RestaurantProfileMenuPage]
})
export class RestaurantProfileMenuPageModule {}
