import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperationAttentionDetailPageRoutingModule } from './operation-attention-detail-routing.module';

import { OperationAttentionDetailPage } from './operation-attention-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperationAttentionDetailPageRoutingModule
  ],
  declarations: [OperationAttentionDetailPage]
})
export class OperationAttentionDetailPageModule {}
