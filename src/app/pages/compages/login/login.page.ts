import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  credentials = {
    email: 'tus2006@ukr.net',
    pw: '123456'
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
    private storage: Storage
  ) {}

  ngOnInit() {
    
  }
  ionViewWillEnter() {
    this.logout();
  }
  public set(settingName,value){
    return this.auth.set('setting:${ settingName }',value);
  }
  public get(settingName){
    return this.auth.get('setting:${ settingName }');
  }
  public remove(settingName){
    return this.auth.remove('setting:${ settingName }');
  }
  
  login() {
    this.auth.login(this.credentials).subscribe(async res => {
      if (res) {
        this.authinfo = {
          auth: res.auth,
          role: res.role
        }
        this.auth.publishSomeData({
          auth: this.authinfo.auth,
          role: this.authinfo.role
        });
        
          console.log(res);
        this.router.navigateByUrl('/tabs/profileisp');
      } else {
        const alert = await this.alertCtrl.create({
          header: 'Login Failed',
          message: 'Wrong credentials.',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
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

  loginUser() {
    this.auth.login3(this.user.name, this.user.pw).then(success => {
      if (success) {
        this.router.navigateByUrl('/tabs/settings');
      }
    }).catch(err => {
      console.log(err);
    });
  }
}