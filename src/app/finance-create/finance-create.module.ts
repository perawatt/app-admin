import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinanceCreatePageRoutingModule } from './finance-create-routing.module';

import { FinanceCreatePage } from './finance-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinanceCreatePageRoutingModule
  ],
  declarations: [FinanceCreatePage]
})
export class FinanceCreatePageModule {}
