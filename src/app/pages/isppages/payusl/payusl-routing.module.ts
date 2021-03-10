import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayuslPage } from './payusl.page';

const routes: Routes = [
  {
    path: '',
    component: PayuslPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayuslPageRoutingModule {}
