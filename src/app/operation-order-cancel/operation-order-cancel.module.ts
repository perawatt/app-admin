import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperationOrderCancelPageRoutingModule } from './operation-order-cancel-routing.module';

import { OperationOrderCancelPage } from './operation-order-cancel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperationOrderCancelPageRoutingModule
  ],
  declarations: [OperationOrderCancelPage]
})
export class OperationOrderCancelPageModule {}
