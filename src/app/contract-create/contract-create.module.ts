import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContractCreatePageRoutingModule } from './contract-create-routing.module';

import { ContractCreatePage } from './contract-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ContractCreatePageRoutingModule
  ],
  declarations: [ContractCreatePage]
})
export class ContractCreatePageModule {}
