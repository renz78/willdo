import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryzakPage } from './categoryzak.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryzakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryzakPageRoutingModule {}
