import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikerHistoryDetailOrderListPageRoutingModule } from './biker-history-detail-order-list-routing.module';

import { BikerHistoryDetailOrderListPage } from './biker-history-detail-order-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikerHistoryDetailOrderListPageRoutingModule
  ],
  declarations: [BikerHistoryDetailOrderListPage]
})
export class BikerHistoryDetailOrderListPageModule {}
