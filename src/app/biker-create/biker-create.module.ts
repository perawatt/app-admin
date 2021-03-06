import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikerCreatePageRoutingModule } from './biker-create-routing.module';

import { BikerCreatePage } from './biker-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BikerCreatePageRoutingModule
  ],
  declarations: [BikerCreatePage]
})
export class BikerCreatePageModule {}
