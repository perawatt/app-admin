import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinanceCreatePage } from './finance-create.page';

const routes: Routes = [
  {
    path: '',
    component: FinanceCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinanceCreatePageRoutingModule {}
