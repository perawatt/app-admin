import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperatorCreatePageRoutingModule } from './operator-create-routing.module';

import { OperatorCreatePage } from './operator-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    OperatorCreatePageRoutingModule
  ],
  declarations: [OperatorCreatePage]
})
export class OperatorCreatePageModule {}
