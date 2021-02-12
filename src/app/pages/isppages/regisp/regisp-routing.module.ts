import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegispPage } from './regisp.page';

const routes: Routes = [
  {
    path: '',
    component: RegispPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegispPageRoutingModule {}
