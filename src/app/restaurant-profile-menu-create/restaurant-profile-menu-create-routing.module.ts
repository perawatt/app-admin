import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantProfileMenuCreatePage } from './restaurant-profile-menu-create.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantProfileMenuCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantProfileMenuCreatePageRoutingModule {}
