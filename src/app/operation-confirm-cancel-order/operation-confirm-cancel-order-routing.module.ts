import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperationConfirmCancelOrderPage } from './operation-confirm-cancel-order.page';

const routes: Routes = [
  {
    path: '',
    component: OperationConfirmCancelOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperationConfirmCancelOrderPageRoutingModule {}
