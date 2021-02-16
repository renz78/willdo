import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharePageRoutingModule } from './share-routing.module';
import { SharePage } from './share.page';
import { ComponentsModule } from '../../../comp/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    SharePageRoutingModule
  ],
  declarations: [SharePage]
})
export class SharePageModule {}
