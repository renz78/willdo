import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LinkispPageRoutingModule } from './linkisp-routing.module';

import { LinkispPage } from './linkisp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LinkispPageRoutingModule
  ],
  declarations: [LinkispPage]
})
export class LinkispPageModule {}
