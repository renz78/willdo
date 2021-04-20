import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paystep2Page } from './paystep2.page';

const routes: Routes = [
  {
    path: '',
    component: Paystep2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paystep2PageRoutingModule {}
