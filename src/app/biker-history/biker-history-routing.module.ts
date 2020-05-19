import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikerHistoryPage } from './biker-history.page';

const routes: Routes = [
  {
    path: '',
    component: BikerHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikerHistoryPageRoutingModule {}
