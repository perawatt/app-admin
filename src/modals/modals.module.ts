import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OperationOrderCancelPage } from 'src/modals/operation-order-cancel/operation-order-cancel.page';
import { OperationConfirmCancelOrderPage } from 'src/modals/operation-confirm-cancel-order/operation-confirm-cancel-order.page';
import { FinanceConfirmPage } from './finance-confirm/finance-confirm.page';

const modals = [
  OperationOrderCancelPage,
  OperationConfirmCancelOrderPage,
  FinanceConfirmPage,
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
