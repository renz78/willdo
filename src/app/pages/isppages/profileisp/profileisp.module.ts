import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfileispPageRoutingModule } from './profileisp-routing.module';
import { ProfileispPage } from './profileisp.page';
import { BarRatingModule } from 'ngx-bar-rating';
import { ExploreContainerComponentModule } from '../../../explore-container/explore-container.module';
import { ComponentsModule } from '../../../comp/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    BarRatingModule,
    ComponentsModule,
    ProfileispPageRoutingModule
  ],
  declarations: [ProfileispPage]
})
export class ProfileispPageModule {}
