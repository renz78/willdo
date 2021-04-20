import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paystep3Page } from './paystep3.page';

const routes: Routes = [
  {
    path: '',
    component: Paystep3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paystep3PageRoutingModule {}
