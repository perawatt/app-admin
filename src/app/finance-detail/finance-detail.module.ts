import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinanceDetailPageRoutingModule } from './finance-detail-routing.module';

import { FinanceDetailPage } from './finance-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinanceDetailPageRoutingModule
  ],
  declarations: [FinanceDetailPage]
})
export class FinanceDetailPageModule {}
