import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantProfileDetailPage } from './restaurant-profile-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantProfileDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantProfileDetailPageRoutingModule {}
