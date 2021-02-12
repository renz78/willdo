import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegispPageRoutingModule } from './regisp-routing.module';

import { RegispPage } from './regisp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegispPageRoutingModule
  ],
  declarations: [RegispPage]
})
export class RegispPageModule {}
