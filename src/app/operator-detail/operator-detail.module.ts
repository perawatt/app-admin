import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperatorDetailPageRoutingModule } from './operator-detail-routing.module';

import { OperatorDetailPage } from './operator-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperatorDetailPageRoutingModule
  ],
  declarations: [OperatorDetailPage]
})
export class OperatorDetailPageModule {}
