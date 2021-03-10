import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessRegPageRoutingModule } from './success-reg-routing.module';

import { SuccessRegPage } from './success-reg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccessRegPageRoutingModule
  ],
  declarations: [SuccessRegPage]
})
export class SuccessRegPageModule {}
