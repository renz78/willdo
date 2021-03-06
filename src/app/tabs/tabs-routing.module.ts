import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'first',
        loadChildren: () => import('../pages/compages/first/first.module').then( m => m.FirstPageModule)
      },
      {
        path: 'second',
        loadChildren: () => import('../pages/compages/second/second.module').then( m => m.SecondPageModule)
      },
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule),
        //canActivate: [AuthGuard]
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule),
        //canActivate: [AuthGuard]
      },
      {
        path: 'settings',
        loadChildren: () => import('../pages/compages/settings/settings.module').then(m => m.SettingsPageModule),
      },
      {
        path: 'map',
        loadChildren: () => import('../test/map/map.module').then(m => m.MapPageModule),
        //canActivate: [AuthGuard]
      },
      {
        path: 'chat',
        loadChildren: () => import('../pages/compages/chat/chat.module').then(m => m.ChatPageModule),
        //canActivate: [AuthGuard]
      },
      {
        path: 'chat-detail/:anotheruser',
        loadChildren: () => import('../pages/compages/chat-detail/chat-detail.module').then( m => m.ChatDetailPageModule)
      },
      {
        path: 'location',
        loadChildren: () => import('../pages/compages/location/location.module').then( m => m.LocationPageModule),
        //canActivate: [AuthGuard]
      },
      {
        path: 'regzak',
        loadChildren: () => import('../pages/zakpages/regzak/regzak.module').then( m => m.RegzakPageModule),
        //canActivate: [AuthGuard]
      },
      {
        path: 'regisp',
        loadChildren: () => import('../pages/isppages/regisp/regisp.module').then( m => m.RegispPageModule),
        //canActivate: [AuthGuard]
      },
      {
        path: 'firstzak',
        loadChildren: () => import('../pages/zakpages/firstzak/firstzak.module').then( m => m.FirstzakPageModule),
        //canActivate: [AuthGuard]
      },
      {
        path: 'firstisp',
        loadChildren: () => import('../pages/isppages/firstisp/firstisp.module').then( m => m.FirstispPageModule),
        //canActivate: [AuthGuard]
      },
      {
        path: 'share',
        loadChildren: () => import('../pages/compages/share/share.module').then( m => m.SharePageModule),
        //canActivate: [AuthGuard]
      },
      {
        path: 'profileisp',
        loadChildren: () => import('../pages/isppages/profileisp/profileisp.module').then( m => m.ProfileispPageModule),
        //canActivate: [AuthGuard]
      },
      {
        path: 'profilezak',
        loadChildren: () => import('../pages/zakpages/profilezak/profilezak.module').then( m => m.ProfilezakPageModule),
        //canActivate: [AuthGuard]
      },
      {
        path: 'langs',
        loadChildren: () => import('../pages/compages/langs/langs.module').then( m => m.LangsPageModule),
        //canActivate: [AuthGuard]
      },
      {
        path: 'walletisp',
        loadChildren: () => import('../pages/isppages/walletisp/walletisp.module').then( m => m.WalletispPageModule),
        //canActivate: [AuthGuard]
      },
      {
        path: 'walletzak',
        loadChildren: () => import('../pages/zakpages/walletzak/walletzak.module').then( m => m.WalletzakPageModule),
        //canActivate: [AuthGuard]
      },
      {
        path: 'chooseworker',
        loadChildren: () => import('../pages/compages/chooseworker/chooseworker.module').then( m => m.ChooseworkerPageModule),
        //canActivate: [AuthGuard]
      },
      {
        path: 'chooseworker-detail/:workerid',
        loadChildren: () => import('../pages/compages/chooseworker-detail/chooseworker-detail.module').then( m => m.ChooseworkerDetailPageModule),
        //canActivate: [AuthGuard]
      },
      {
        path: 'searchorder-detail/:taskid',
        loadChildren: () => import('../pages/isppages/searchorder-detail/searchorder-detail.module').then( m => m.SearchorderDetailPageModule)
      },
    
      {
        path: 'myrating',
        loadChildren: () => import('../pages/isppages/myrating/myrating.module').then( m => m.MyratingPageModule),
        //canActivate: [AuthGuard]
      },
      {
        path: 'categoryzak',
        loadChildren: () => import('../pages/zakpages/categoryzak/categoryzak.module').then( m => m.CategoryzakPageModule),
        //canActivate: [AuthGuard]
      },
      {
        path: 'login',
        loadChildren: () => import('../pages/compages/login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'neworder',
        loadChildren: () => import('../pages/zakpages/neworder/neworder.module').then( m => m.NeworderPageModule)
      },
      {
        path: 'searchbyname',
        loadChildren: () => import('../pages/zakpages/searchbyname/searchbyname.module').then( m => m.SearchbynamePageModule)
      },
      {
        path: 'choosebyusl/:category_id',
        loadChildren: () => import('../pages/zakpages/choosebyusl/choosebyusl.module').then( m => m.ChoosebyuslPageModule)
      },
      {
        path: 'myorders',
        loadChildren: () => import('../pages/zakpages/myorders/myorders.module').then( m => m.MyordersPageModule)
      },  
      {
        path: 'searchorder',
        loadChildren: () => import('../pages/isppages/searchorder/searchorder.module').then( m => m.SearchorderPageModule)
      },
      {
        path: 'success-reg',
        loadChildren: () => import('../pages/compages/success-reg/success-reg.module').then( m => m.SuccessRegPageModule)
      },
      {
        path: 'linkisp',
        loadChildren: () => import('../pages/zakpages/linkisp/linkisp.module').then( m => m.LinkispPageModule)
      },
      {
        path: 'payusl',
        loadChildren: () => import('../pages/isppages/payusl/payusl.module').then( m => m.PayuslPageModule)
      },
      {
        path: 'ordersisp',
        loadChildren: () => import('../pages/isppages/ordersisp/ordersisp.module').then( m => m.OrdersispPageModule)
      },
    
      {
        path: 'paystep1',
        loadChildren: () => import('../pages/compages/paystep1/paystep1.module').then( m => m.Paystep1PageModule)
      },
      {
        path: 'paystep2',
        loadChildren: () => import('../pages/compages/paystep2/paystep2.module').then( m => m.Paystep2PageModule)
      },
      {
        path: 'paystep3',
        loadChildren: () => import('../pages/compages/paystep3/paystep3.module').then( m => m.Paystep3PageModule)
      },
      {
        path: 'paystep0',
        loadChildren: () => import('../pages/compages/paystep0/paystep0.module').then( m => m.Paystep0PageModule)
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
