import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletzakPageRoutingModule } from './walletzak-routing.module';

import { WalletzakPage } from './walletzak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletzakPageRoutingModule
  ],
  declarations: [WalletzakPage]
})
export class WalletzakPageModule {}
