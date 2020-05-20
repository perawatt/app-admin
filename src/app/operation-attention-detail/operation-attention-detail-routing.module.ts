import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperationAttentionDetailPage } from './operation-attention-detail.page';

const routes: Routes = [
  {
    path: '',
    component: OperationAttentionDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperationAttentionDetailPageRoutingModule {}
