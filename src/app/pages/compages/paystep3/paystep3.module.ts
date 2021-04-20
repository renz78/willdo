import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paystep3PageRoutingModule } from './paystep3-routing.module';

import { Paystep3Page } from './paystep3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paystep3PageRoutingModule
  ],
  declarations: [Paystep3Page]
})
export class Paystep3PageModule {}
