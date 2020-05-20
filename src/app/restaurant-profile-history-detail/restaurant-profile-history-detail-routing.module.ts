import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantProfileHistoryDetailPage } from './restaurant-profile-history-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantProfileHistoryDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantProfileHistoryDetailPageRoutingModule {}
