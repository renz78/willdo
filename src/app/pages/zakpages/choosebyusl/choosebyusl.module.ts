import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChoosebyuslPageRoutingModule } from './choosebyusl-routing.module';
import { ChoosebyuslPage } from './choosebyusl.page';
import { ComponentsModule } from '../../../comp/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ChoosebyuslPageRoutingModule
  ],
  declarations: [ChoosebyuslPage]
})
export class ChoosebyuslPageModule {}
