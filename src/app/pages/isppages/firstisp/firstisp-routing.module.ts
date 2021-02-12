import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstispPage } from './firstisp.page';

const routes: Routes = [
  {
    path: '',
    component: FirstispPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstispPageRoutingModule {}
