import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChooseworkerDetailPageRoutingModule } from './chooseworker-detail-routing.module';
import { ChooseworkerDetailPage } from './chooseworker-detail.page';
import { ComponentsModule } from '../../../comp/components.module';
import { ExploreContainerComponentModule } from '../../../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ExploreContainerComponentModule,
    ChooseworkerDetailPageRoutingModule
  ],
  declarations: [ChooseworkerDetailPage]
})
export class ChooseworkerDetailPageModule {}
