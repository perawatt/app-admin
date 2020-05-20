import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractCreatePage } from './contract-create.page';

const routes: Routes = [
  {
    path: '',
    component: ContractCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractCreatePageRoutingModule {}
