import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdersispPageRoutingModule } from './ordersisp-routing.module';

import { OrdersispPage } from './ordersisp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdersispPageRoutingModule
  ],
  declarations: [OrdersispPage]
})
export class OrdersispPageModule {}
