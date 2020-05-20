import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantProfileHistoryDetailPageRoutingModule } from './restaurant-profile-history-detail-routing.module';

import { RestaurantProfileHistoryDetailPage } from './restaurant-profile-history-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantProfileHistoryDetailPageRoutingModule
  ],
  declarations: [RestaurantProfileHistoryDetailPage]
})
export class RestaurantProfileHistoryDetailPageModule {}
