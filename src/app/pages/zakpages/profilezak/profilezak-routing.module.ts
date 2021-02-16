import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilezakPage } from './profilezak.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilezakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilezakPageRoutingModule {}
