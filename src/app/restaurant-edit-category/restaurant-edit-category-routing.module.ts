import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantEditCategoryPage } from './restaurant-edit-category.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantEditCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantEditCategoryPageRoutingModule {}
