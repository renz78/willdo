import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Paystep1PageRoutingModule } from './paystep1-routing.module';
import { Paystep1Page } from './paystep1.page';
import { ExploreContainerComponentModule } from '../../../explore-container/explore-container.module';
import { ComponentsModule } from '../../../comp/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paystep1PageRoutingModule,
    ComponentsModule,
    ExploreContainerComponentModule
  ],
  declarations: [Paystep1Page]
})
export class Paystep1PageModule {}
