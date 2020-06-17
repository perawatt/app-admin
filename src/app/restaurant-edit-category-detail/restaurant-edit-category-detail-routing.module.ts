import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantEditCategoryDetailPage } from './restaurant-edit-category-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantEditCategoryDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantEditCategoryDetailPageRoutingModule {}
