import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperationOrderDetailPage } from './operation-order-detail.page';

const routes: Routes = [
  {
    path: '',
    component: OperationOrderDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperationOrderDetailPageRoutingModule {}
