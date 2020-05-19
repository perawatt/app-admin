import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikerBalancePage } from './biker-balance.page';

const routes: Routes = [
  {
    path: '',
    component: BikerBalancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikerBalancePageRoutingModule {}
