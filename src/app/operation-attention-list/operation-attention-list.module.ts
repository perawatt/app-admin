import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperationAttentionListPageRoutingModule } from './operation-attention-list-routing.module';

import { OperationAttentionListPage } from './operation-attention-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperationAttentionListPageRoutingModule
  ],
  declarations: [OperationAttentionListPage]
})
export class OperationAttentionListPageModule {}
