import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletzakPage } from './walletzak.page';

const routes: Routes = [
  {
    path: '',
    component: WalletzakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletzakPageRoutingModule {}
