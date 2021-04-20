import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paystep1Page } from './paystep1.page';

const routes: Routes = [
  {
    path: '',
    component: Paystep1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paystep1PageRoutingModule {}
