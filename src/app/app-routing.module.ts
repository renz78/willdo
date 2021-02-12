import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'first',
    loadChildren: () => import('./pages/compages/first/first.module').then( m => m.FirstPageModule)
  },
  {
    path: 'second',
    loadChildren: () => import('./pages/compages/second/second.module').then( m => m.SecondPageModule)
  },
  {
    path: 'firstzak',
    loadChildren: () => import('./pages/zakpages/firstzak/firstzak.module').then( m => m.FirstzakPageModule)
  },
  {
    path: 'firstisp',
    loadChildren: () => import('./pages/isppages/firstisp/firstisp.module').then( m => m.FirstispPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'regzak',
    loadChildren: () => import('./pages/zakpages/regzak/regzak.module').then( m => m.RegzakPageModule)
  },
  {
    path: 'regisp',
    loadChildren: () => import('./pages/isppages/regisp/regisp.module').then( m => m.RegispPageModule)
  },
  {
    path: 'share',
    loadChildren: () => import('./pages/compages/share/share.module').then( m => m.SharePageModule)
  }





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
