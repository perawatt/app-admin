import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikerPageRoutingModule } from './biker-routing.module';

import { BikerPage } from './biker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikerPageRoutingModule
  ],
  declarations: [BikerPage]
})
export class BikerPageModule {}
