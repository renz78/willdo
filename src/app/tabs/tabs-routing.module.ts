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
        loadChildren: () => import('../pages/compages/settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: 'map',
        loadChildren: () => import('../test/map/map.module').then(m => m.MapPageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('../pages/compages/chat/chat.module').then(m => m.ChatPageModule)
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
        path: 'location',
        loadChildren: () => import('../pages/compages/location/location.module').then( m => m.LocationPageModule)
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
        path: 'profileisp',
        loadChildren: () => import('../pages/isppages/profileisp/profileisp.module').then( m => m.ProfileispPageModule)
      },
      {
        path: 'profilezak',
        loadChildren: () => import('../pages/zakpages/profilezak/profilezak.module').then( m => m.ProfilezakPageModule)
      },
      {
        path: 'langs',
        loadChildren: () => import('../pages/compages/langs/langs.module').then( m => m.LangsPageModule)
      },
      {
        path: 'walletisp',
        loadChildren: () => import('../pages/isppages/walletisp/walletisp.module').then( m => m.WalletispPageModule)
      },
      {
        path: 'walletzak',
        loadChildren: () => import('../pages/zakpages/walletzak/walletzak.module').then( m => m.WalletzakPageModule)
      },
      {
        path: 'chooseworker',
        loadChildren: () => import('../pages/compages/chooseworker/chooseworker.module').then( m => m.ChooseworkerPageModule)
      },
      {
        path: 'chooseworker-detail',
        loadChildren: () => import('../pages/compages/chooseworker-detail/chooseworker-detail.module').then( m => m.ChooseworkerDetailPageModule)
      },
      {
        path: 'myrating',
        loadChildren: () => import('../pages/isppages/myrating/myrating.module').then( m => m.MyratingPageModule)
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
