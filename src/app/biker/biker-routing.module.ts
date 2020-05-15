import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikerPage } from './biker.page';

const routes: Routes = [
  {
    path: '',
    component: BikerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikerPageRoutingModule {}
