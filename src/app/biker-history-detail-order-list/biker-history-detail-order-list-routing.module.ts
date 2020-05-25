import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikerHistoryDetailOrderListPage } from './biker-history-detail-order-list.page';

const routes: Routes = [
  {
    path: '',
    component: BikerHistoryDetailOrderListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikerHistoryDetailOrderListPageRoutingModule {}
