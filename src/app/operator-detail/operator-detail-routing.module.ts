import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperatorDetailPage } from './operator-detail.page';

const routes: Routes = [
  {
    path: '',
    component: OperatorDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperatorDetailPageRoutingModule {}
