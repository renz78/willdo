import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChoosebyuslPageRoutingModule } from './choosebyusl-routing.module';
import { ChoosebyuslPage } from './choosebyusl.page';
import { ExploreContainerComponentModule } from '../../../explore-container/explore-container.module';
import { ComponentsModule } from '../../../comp/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ExploreContainerComponentModule,
    ChoosebyuslPageRoutingModule
  ],
  declarations: [ChoosebyuslPage]
})
export class ChoosebyuslPageModule {}
