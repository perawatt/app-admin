import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperationConfirmCancelOrderPageRoutingModule } from './operation-confirm-cancel-order-routing.module';

import { OperationConfirmCancelOrderPage } from './operation-confirm-cancel-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperationConfirmCancelOrderPageRoutingModule
  ],
  declarations: [OperationConfirmCancelOrderPage]
})
export class OperationConfirmCancelOrderPageModule {}
