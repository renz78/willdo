import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyratingPageRoutingModule } from './myrating-routing.module';
import { ExploreContainerComponentModule } from '../../../explore-container/explore-container.module';
import { MyratingPage } from './myrating.page';
import { ComponentsModule } from '../../../comp/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ExploreContainerComponentModule,
    MyratingPageRoutingModule
  ],
  declarations: [MyratingPage]
})
export class MyratingPageModule {}
