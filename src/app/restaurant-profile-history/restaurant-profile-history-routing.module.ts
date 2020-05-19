import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantProfileHistoryPage } from './restaurant-profile-history.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantProfileHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantProfileHistoryPageRoutingModule {}
