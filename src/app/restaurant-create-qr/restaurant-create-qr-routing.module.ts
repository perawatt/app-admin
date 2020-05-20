import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantCreateQrPage } from './restaurant-create-qr.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantCreateQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantCreateQrPageRoutingModule {}
