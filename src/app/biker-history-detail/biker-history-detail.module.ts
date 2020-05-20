import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikerHistoryDetailPageRoutingModule } from './biker-history-detail-routing.module';

import { BikerHistoryDetailPage } from './biker-history-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikerHistoryDetailPageRoutingModule
  ],
  declarations: [BikerHistoryDetailPage]
})
export class BikerHistoryDetailPageModule {}
