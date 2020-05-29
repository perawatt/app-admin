import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperatorCreatePage } from './operator-create.page';

const routes: Routes = [
  {
    path: '',
    component: OperatorCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperatorCreatePageRoutingModule {}
