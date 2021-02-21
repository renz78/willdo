import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegzakPageRoutingModule } from './regzak-routing.module';
import { RegzakPage } from './regzak.page';
import { ComponentsModule } from '../../../comp/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RegzakPageRoutingModule
  ],
  declarations: [RegzakPage]
})
export class RegzakPageModule {}
