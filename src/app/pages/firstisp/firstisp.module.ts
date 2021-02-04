import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstispPageRoutingModule } from './firstisp-routing.module';

import { FirstispPage } from './firstisp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstispPageRoutingModule
  ],
  declarations: [FirstispPage]
})
export class FirstispPageModule {}
