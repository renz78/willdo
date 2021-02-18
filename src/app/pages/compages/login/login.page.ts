import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  credentials = {
    email: 'saimon@devdactic.com',
    pw: '123'
  };
  user = {
    name: 'admin',
    pw: 'admin'
  };
  pagename: any = 'Авторизация';

  constructor(
    private auth: AuthService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    //this.logout();
  }

  login() {
    this.auth.login(this.credentials).subscribe(async res => {
      if (res) {
          
        this.router.navigateByUrl('/tabs/categoryzak');
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