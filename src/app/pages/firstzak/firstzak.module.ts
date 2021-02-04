import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstzakPageRoutingModule } from './firstzak-routing.module';

import { FirstzakPage } from './firstzak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstzakPageRoutingModule
  ],
  declarations: [FirstzakPage]
})
export class FirstzakPageModule {}
