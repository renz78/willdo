import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinkispPage } from './linkisp.page';

const routes: Routes = [
  {
    path: '',
    component: LinkispPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinkispPageRoutingModule {}
