import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilezakPageRoutingModule } from './profilezak-routing.module';

import { ProfilezakPage } from './profilezak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilezakPageRoutingModule
  ],
  declarations: [ProfilezakPage]
})
export class ProfilezakPageModule {}
