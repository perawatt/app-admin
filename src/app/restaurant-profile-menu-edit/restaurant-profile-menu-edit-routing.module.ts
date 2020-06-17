import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantProfileMenuEditPage } from './restaurant-profile-menu-edit.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantProfileMenuEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantProfileMenuEditPageRoutingModule {}
