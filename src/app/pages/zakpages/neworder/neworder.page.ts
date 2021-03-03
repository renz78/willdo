import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, from, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Plugins, CameraResultType, CameraSource} from '@capacitor/core';

const { Camera } = Plugins;
@Component({
  selector: 'app-neworder',
  templateUrl: './neworder.page.html',
  styleUrls: ['./neworder.page.scss'],
})
export class NeworderPage implements OnInit {
  image;
  imageData;
  pagename: string = ' Создать заявку';
  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private router: Router,
    private plt: Platform,
    private alertCtrl: AlertController,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    
  }
  reg: any = {};
  
  check: any = {};
  res: any = {};
  async showAlert(header: string, message: string){
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  cleanTaskaddress() {
    this.reg.task_address = '';
  }
  cleanBeginprice() {
    this.reg.begin_price = '';
  }
  cleanTypelink() {
    this.reg.typelink = '';
  }

  checkForm () {
    if (this.reg.password !== this.reg.password2) {
      return this.check = {res: 0, text: 'Пароли не совпадают'}
    }
    if (!this.reg.fio) {
      return this.check = {res: 0, text: 'Вы не ввели ФИО'}
    }
    if (!this.reg.email) {
      return this.check = {res: 0, text: 'Вы не ввели Email'}
    }
    if (!this.reg.money) {
      return this.check = {res: 0, text: 'Вы не выбрали способ оплаты'}
    }
    if (!this.reg.langid) {
      return this.check = {res: 0, text: 'Вы не выбрали язык'}
    }
    return this.check = {res: 1, text: 'ОК'}
  }

  async orderForm() {
    let regdata = this.reg;
    let check = this.checkForm();
    console.log(check);
    
    if (check.res === 1) {
      if(this.plt.is('capacitor') || this.plt.is('cordova')){
        let nativeCall = this.auth.regFormNative(this.reg);
        from(nativeCall).pipe(

          ).subscribe(data => {
            let res = JSON.parse(data.data)
            if (res.reg === 1) {
              this.showAlert('Поздравляем', 'Вы успешно зарегистрировались');
              this.router.navigateByUrl('/tabs/login');
            } else {
              this.showAlert('ошибка регистрации', res.text);
            }
          }, err => {
            console.log('js call error', err)
          }
        )
      } else {
        this.auth.regForm(regdata).subscribe(async res => {
          if (res.reg === 1) {
            this.showAlert('Поздравляем', 'Вы успешно зарегистрировались');
            this.router.navigateByUrl('/tabs/login');
          } else {
            this.showAlert('ошибка регистрации', res.text);
          }
        });
      }
    } else {
      this.showAlert('Ошибка регистрациии', check.text)
    }
  }

  async captureImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    })
    console.log(image);
    //this.image = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg; base64,${image.base64String}');
    this.image = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  };

}
