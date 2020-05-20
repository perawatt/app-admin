import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperationOrderCancelPage } from './operation-order-cancel.page';

const routes: Routes = [
  {
    path: '',
    component: OperationOrderCancelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperationOrderCancelPageRoutingModule {}
