import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantProfileHistoryPageRoutingModule } from './restaurant-profile-history-routing.module';

import { RestaurantProfileHistoryPage } from './restaurant-profile-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantProfileHistoryPageRoutingModule
  ],
  declarations: [RestaurantProfileHistoryPage]
})
export class RestaurantProfileHistoryPageModule {}
