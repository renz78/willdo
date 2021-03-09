import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchorderDetailPage } from './searchorder-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SearchorderDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchorderDetailPageRoutingModule {}
