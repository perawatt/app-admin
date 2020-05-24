import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperationOrderCancelPageRoutingModule } from './operation-order-cancel-routing.module';

import { OperationOrderCancelPage } from './operation-order-cancel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    OperationOrderCancelPageRoutingModule
  ],
  declarations: [OperationOrderCancelPage]
})
export class OperationOrderCancelPageModule {}
