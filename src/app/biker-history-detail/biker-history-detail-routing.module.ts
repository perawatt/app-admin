import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikerHistoryDetailPage } from './biker-history-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BikerHistoryDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikerHistoryDetailPageRoutingModule {}
