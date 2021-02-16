import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseworkerPage } from './chooseworker.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseworkerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseworkerPageRoutingModule {}
