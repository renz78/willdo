import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SearchorderPageRoutingModule } from './searchorder-routing.module';
import { SearchorderPage } from './searchorder.page';
import { ComponentsModule } from '../../../comp/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    SearchorderPageRoutingModule
  ],
  declarations: [SearchorderPage]
})
export class SearchorderPageModule {}
