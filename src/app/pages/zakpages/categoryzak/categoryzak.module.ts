import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CategoryzakPageRoutingModule } from './categoryzak-routing.module';
import { CategoryzakPage } from './categoryzak.page';
import { ComponentsModule } from '../../../comp/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CategoryzakPageRoutingModule
  ],
  declarations: [CategoryzakPage]
})
export class CategoryzakPageModule {}
