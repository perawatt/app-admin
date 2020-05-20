import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperationOrderDetailPageRoutingModule } from './operation-order-detail-routing.module';

import { OperationOrderDetailPage } from './operation-order-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperationOrderDetailPageRoutingModule
  ],
  declarations: [OperationOrderDetailPage]
})
export class OperationOrderDetailPageModule {}
