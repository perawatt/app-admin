import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikerHistoryPageRoutingModule } from './biker-history-routing.module';

import { BikerHistoryPage } from './biker-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikerHistoryPageRoutingModule
  ],
  declarations: [BikerHistoryPage]
})
export class BikerHistoryPageModule {}
