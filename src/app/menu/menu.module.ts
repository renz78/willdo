import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../tabs/tabs.module').then(m => m.TabsPageModule)
      },
      {
        path: 'splash',
        loadChildren: () => import('../splash/splash.module').then( m => m.SplashPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../pages/compages/login/login.module').then( m => m.LoginPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/menu'
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})

export class MenuPageModule { }