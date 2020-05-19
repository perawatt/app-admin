import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantCreateCategoryPage } from './restaurant-create-category.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantCreateCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantCreateCategoryPageRoutingModule {}
