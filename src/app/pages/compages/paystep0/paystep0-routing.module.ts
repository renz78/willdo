import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paystep0Page } from './paystep0.page';

const routes: Routes = [
  {
    path: '',
    component: Paystep0Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paystep0PageRoutingModule {}
