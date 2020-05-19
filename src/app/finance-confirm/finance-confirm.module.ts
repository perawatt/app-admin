import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinanceConfirmPageRoutingModule } from './finance-confirm-routing.module';

import { FinanceConfirmPage } from './finance-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinanceConfirmPageRoutingModule
  ],
  declarations: [FinanceConfirmPage]
})
export class FinanceConfirmPageModule {}
