import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OperationOrderCancelPage } from 'src/app/operation-order-cancel/operation-order-cancel.page';
import { OperationConfirmCancelOrderPage } from 'src/app/operation-confirm-cancel-order/operation-confirm-cancel-order.page';

const modals = [
  OperationOrderCancelPage,
  OperationConfirmCancelOrderPage,
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
  ],
  entryComponents: modals,
  declarations: modals,
})
export class ModalsModule { }
