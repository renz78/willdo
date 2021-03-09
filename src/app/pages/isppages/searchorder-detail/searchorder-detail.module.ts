import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SearchorderDetailPageRoutingModule } from './searchorder-detail-routing.module';
import { SearchorderDetailPage } from './searchorder-detail.page';
import { ComponentsModule } from '../../../comp/components.module';
import { ExploreContainerComponentModule } from '../../../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ExploreContainerComponentModule,
    SearchorderDetailPageRoutingModule
  ],
  declarations: [SearchorderDetailPage]
})
export class SearchorderDetailPageModule {}
