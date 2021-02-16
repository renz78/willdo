import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletispPage } from './walletisp.page';

const routes: Routes = [
  {
    path: '',
    component: WalletispPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletispPageRoutingModule {}
