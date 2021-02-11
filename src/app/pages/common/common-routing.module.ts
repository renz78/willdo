import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonPage } from './common.page';

const routes: Routes = [
  {
    path: '',
    component: CommonPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: '',
        redirectTo: '/common/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/common/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonPageRoutingModule {}
