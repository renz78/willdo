import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChooseworkerPageRoutingModule } from './chooseworker-routing.module';
import { ChooseworkerPage } from './chooseworker.page';
import { ComponentsModule } from '../../../comp/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ChooseworkerPageRoutingModule
  ],
  declarations: [ChooseworkerPage]
})
export class ChooseworkerPageModule {}
