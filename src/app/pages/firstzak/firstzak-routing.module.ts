import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstzakPage } from './firstzak.page';

const routes: Routes = [
  {
    path: '',
    component: FirstzakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstzakPageRoutingModule {}
