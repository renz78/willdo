import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeworderPageRoutingModule } from './neworder-routing.module';

import { NeworderPage } from './neworder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeworderPageRoutingModule
  ],
  declarations: [NeworderPage]
})
export class NeworderPageModule {}
