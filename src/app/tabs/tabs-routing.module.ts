import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: 'map',
        loadChildren: () => import('../map/map.module').then(m => m.MapPageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('../chat/chat.module').then(m => m.ChatPageModule)
      },
      {
        path: 'first',
        loadChildren: () => import('../pages/compages/first/first.module').then( m => m.FirstPageModule)
      },
      {
        path: 'second',
        loadChildren: () => import('../pages/compages/second/second.module').then( m => m.SecondPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'regzak',
        loadChildren: () => import('../pages/zakpages/regzak/regzak.module').then( m => m.RegzakPageModule)
      },
      {
        path: 'regisp',
        loadChildren: () => import('../pages/isppages/regisp/regisp.module').then( m => m.RegispPageModule)
      },
      {
        path: 'firstzak',
        loadChildren: () => import('../pages/zakpages/firstzak/firstzak.module').then( m => m.FirstzakPageModule)
      },
      {
        path: 'firstisp',
        loadChildren: () => import('../pages/isppages/firstisp/firstisp.module').then( m => m.FirstispPageModule)
      },
      {
        path: 'share',
        loadChildren: () => import('../pages/compages/share/share.module').then( m => m.SharePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
