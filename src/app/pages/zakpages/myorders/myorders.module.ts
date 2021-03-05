import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyordersPageRoutingModule } from './myorders-routing.module';
import { MyordersPage } from './myorders.page';
import { ComponentsModule } from '../../../comp/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    MyordersPageRoutingModule
  ],
  declarations: [MyordersPage]
})
export class MyordersPageModule {}
