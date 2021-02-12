import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegzakPage } from './regzak.page';

const routes: Routes = [
  {
    path: '',
    component: RegzakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegzakPageRoutingModule {}
