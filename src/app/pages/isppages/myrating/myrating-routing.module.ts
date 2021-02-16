import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyratingPage } from './myrating.page';

const routes: Routes = [
  {
    path: '',
    component: MyratingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyratingPageRoutingModule {}
