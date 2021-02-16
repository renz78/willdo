import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileispPage } from './profileisp.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileispPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileispPageRoutingModule {}
