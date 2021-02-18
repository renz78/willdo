import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Platform } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    // private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router,
    private auth: AuthService,
  ) {
    this.initializeApp();
  }
  qweer: any = 'tets';

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.router.navigateByUrl('splash');
      if (this.auth.user) {
        console.log(this.auth.user);
      } else {
        console.log(0);
      }
      // this.splashScreen.hide();
    });
  }


}
