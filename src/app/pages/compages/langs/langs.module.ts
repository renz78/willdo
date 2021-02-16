import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LangsPageRoutingModule } from './langs-routing.module';
import { LangsPage } from './langs.page';
import { ComponentsModule } from '../../../comp/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    LangsPageRoutingModule
  ],
  declarations: [LangsPage]
})
export class LangsPageModule {}
