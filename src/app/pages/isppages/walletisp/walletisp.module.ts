import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WalletispPageRoutingModule } from './walletisp-routing.module';
import { WalletispPage } from './walletisp.page';
import { ExploreContainerComponentModule } from '../../../explore-container/explore-container.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    WalletispPageRoutingModule
  ],
  declarations: [WalletispPage]
})
export class WalletispPageModule {}
