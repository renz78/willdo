import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoosebyuslPage } from './choosebyusl.page';

const routes: Routes = [
  {
    path: '',
    component: ChoosebyuslPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoosebyuslPageRoutingModule {}
