import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikerBalancePageRoutingModule } from './biker-balance-routing.module';

import { BikerBalancePage } from './biker-balance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikerBalancePageRoutingModule
  ],
  declarations: [BikerBalancePage]
})
export class BikerBalancePageModule {}
