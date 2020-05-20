import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperationAttentionListPage } from './operation-attention-list.page';

const routes: Routes = [
  {
    path: '',
    component: OperationAttentionListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperationAttentionListPageRoutingModule {}
