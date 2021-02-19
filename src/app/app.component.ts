import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Platform } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  curentmenu: [] = [];

  noauthmenu: any = [
    {
      name: 'Вход',
      icon: 'enter-outline',
      link: '/tabs/login'
    },
    {
      name: 'Регистрация',
      icon: 'create-outline',
      link: '/tabs/second'
    },
    {
      name: 'Языки',
      icon: 'globe-outline',
      link: '/tabs/langs'
    },
  ];

  zakhmenu: any = [
    {
      name: 'Языки',
      icon: 'globe-outline',
      link: '/tabs/langs'
    },
    {
      name: 'Языки',
      icon: 'globe-outline',
      link: '/tabs/langs'
    },
    {
      name: 'Выход',
      icon: 'enter-outline',
      link: '/tabs/login'
    },
  ];

  isphmenu: any = [
    {
      name: 'Языки',
      icon: 'globe-outline',
      link: '/tabs/langs'
    },
    {
      name: 'Выход',
      icon: 'enter-outline',
      link: '/tabs/login'
    },
  ];


  constructor(
    private platform: Platform,
    // private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router,
    private auth: AuthService,
    private storage: Storage
  ) {
    this.initializeApp();
  }
  qweer: any = 'tets';

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.router.navigateByUrl('splash');
      // this.splashScreen.hide();

      this.curentmenu = this.noauthmenu;
      this.auth.getObservable().subscribe((data) => {
        // if (data.role === 0) {
        //   this.curentmenu = this.zakhmenu;  
        // } else if (data.role === 1) {
        //   this.curentmenu = this.isphmenu;
        // } else {
        //   this.curentmenu = this.noauthmenu;
        // }
        
        console.log('Data received', data.role);
      });

      this.storage.get('role').then( (val) => {
        console.log(val);
        if (val === 0) {
          this.curentmenu = this.zakhmenu;  
        } else if (val === 1) {
          this.curentmenu = this.isphmenu;
        } else {
          this.curentmenu = this.noauthmenu;
        }
      })
    });
  }


}
