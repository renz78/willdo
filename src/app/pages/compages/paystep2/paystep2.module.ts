import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Paystep2PageRoutingModule } from './paystep2-routing.module';
import { Paystep2Page } from './paystep2.page';
import { ExploreContainerComponentModule } from '../../../explore-container/explore-container.module';
import { ComponentsModule } from '../../../comp/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paystep2PageRoutingModule,
    ComponentsModule,
    ExploreContainerComponentModule
  ],
  declarations: [Paystep2Page]
})
export class Paystep2PageModule {}
