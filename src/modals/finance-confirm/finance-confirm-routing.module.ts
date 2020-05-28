import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinanceConfirmPage } from './finance-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: FinanceConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinanceConfirmPageRoutingModule {}
