import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeworderPage } from './neworder.page';

const routes: Routes = [
  {
    path: '',
    component: NeworderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeworderPageRoutingModule {}
