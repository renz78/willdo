import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Platform } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

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
      // this.splashScreen.hide();
      this.auth.getObservable().subscribe((data) => {
        this.qweer = 'ddd';
        console.log('Data received', data);
    });
    });
  }


}
