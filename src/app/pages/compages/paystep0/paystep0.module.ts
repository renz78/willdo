import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Paystep0PageRoutingModule } from './paystep0-routing.module';
import { Paystep0Page } from './paystep0.page';
import { ExploreContainerComponentModule } from '../../../explore-container/explore-container.module';
import { ComponentsModule } from '../../../comp/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paystep0PageRoutingModule,
    ComponentsModule,
    ExploreContainerComponentModule
  ],
  declarations: [Paystep0Page]
})
export class Paystep0PageModule {}
