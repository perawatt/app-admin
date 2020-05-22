import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinanceCreatePageRoutingModule } from './finance-create-routing.module';

import { FinanceCreatePage } from './finance-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FinanceCreatePageRoutingModule
  ],
  declarations: [FinanceCreatePage]
})
export class FinanceCreatePageModule {}
