import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable, from, of, Subject } from 'rxjs';
//import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  credentials = {
    email: 'customer',
    pw: 'customer'
  };
  user = {
    name: 'admin',
    pw: 'admin'
  };
  
  authinfo = {
    auth: '0',
    role: '0'
  };

  pagename: any = 'Авторизация';

  constructor(
    private auth: AuthService,
    private router: Router,
    private alertCtrl: AlertController,
    private storage: Storage,
    private loadingCtrl: LoadingController,
    private plt: Platform
  ) {}

  ngOnInit() {
    
  }
  ionViewWillEnter() {
    this.logout();
  }
  async showAlert(header: string, message: string){
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
  login() {
    if(this.plt.is('capacitor') || this.plt.is('cordova')){
      let nativeCall = this.auth.getDataNativeHttp(this.credentials);
      from(nativeCall).pipe(

        ).subscribe(data => {
          console.log('native data:', data)
          let res = JSON.parse(data.data)
          if (res.auth == '1') {
            this.authinfo = {
              auth: res.auth,
              role: res.role
            }
            this.auth.publishSomeData({
              auth: this.authinfo.auth,
              role: this.authinfo.role
            });
            this.storage.set('authinfo', res);
            this.routeByRole(this.authinfo.role);
          } else {
            this.showAlert('Ошибка авторизации', 'Вы внесли неверные данные')
          }
        }, err => {
          console.log('js call error', err)
        })
    } else {
      this.auth.login(this.credentials).subscribe(async res => {
        if (res.auth) {
          this.authinfo = {
            auth: res.auth,
            role: res.role
          }
          this.auth.publishSomeData({
            auth: this.authinfo.auth,
            role: this.authinfo.role
          });
          this.storage.set('authinfo', res);
          this.routeByRole(this.authinfo.role);
        } else {
          this.showAlert('Ошибка авторизации', 'Вы внесли неверные данные')
        }
      });
    }
   
    
    //let res = this.auth.getDataNativeHttp(this.credentials);
    //console.log(res);
    
  }

  routeByRole(role) {
        if (role === 'cb0548d236e28b0c5e656df100613507') {
          this.router.navigateByUrl('/tabs/categoryzak');
        } else if (role === '3152a0b2e5dde07001780e616909d468') {
          this.router.navigateByUrl('/tabs/profileisp');
        } else {
          this.router.navigateByUrl('/tabs/profileisp');
        }
  }

  
  logout() {
    this.authinfo = {
      auth: null,
      role: null
    }
    this.auth.publishSomeData({
      auth: this.authinfo.auth,
      role: this.authinfo.role
    });
    this.auth.logout();
  }

  
}