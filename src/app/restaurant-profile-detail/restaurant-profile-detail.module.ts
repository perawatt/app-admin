import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantProfileDetailPageRoutingModule } from './restaurant-profile-detail-routing.module';

import { RestaurantProfileDetailPage } from './restaurant-profile-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantProfileDetailPageRoutingModule
  ],
  declarations: [RestaurantProfileDetailPage]
})
export class RestaurantProfileDetailPageModule {}
