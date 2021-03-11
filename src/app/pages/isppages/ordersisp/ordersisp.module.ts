import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrdersispPageRoutingModule } from './ordersisp-routing.module';
import { OrdersispPage } from './ordersisp.page';
import { ComponentsModule } from '../../../comp/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    OrdersispPageRoutingModule
  ],
  declarations: [OrdersispPage]
})
export class OrdersispPageModule {}
