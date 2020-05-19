import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantCreateQrPageRoutingModule } from './restaurant-create-qr-routing.module';

import { RestaurantCreateQrPage } from './restaurant-create-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantCreateQrPageRoutingModule
  ],
  declarations: [RestaurantCreateQrPage]
})
export class RestaurantCreateQrPageModule {}
