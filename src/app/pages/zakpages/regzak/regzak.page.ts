import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, from, of, Subject } from 'rxjs';
import { AuthService } from '../../../services/auth.service';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Plugins, CameraResultType, CameraSource} from '@capacitor/core';
import { UploadService } from '../../../services/upload.service';
import { Storage } from '@ionic/storage';


const { Camera } = Plugins;
@Component({
  selector: 'app-regzak',
  templateUrl: './regzak.page.html',
  styleUrls: ['./regzak.page.scss'],
})
export class RegzakPage implements OnInit {
  //image to be displayed in template
  image;
  imageData;
  btntext: any = 'Зарегистрироваться';
  pagename: string = ' Регистрация заказчика';
  reg: any = {};
  check: any = {};
  res: any = {};
  isreg: any = false;

constructor(
    private auth: AuthService,
    private upload: UploadService,
    private router: Router,
    private plt: Platform,
    private alertCtrl: AlertController,
    private sanitizer: DomSanitizer,
    private storage: Storage,
    ) { }
  ngOnInit() {
    this.storage.get('authinfo').then( (val) => {
      if(val){
        this.isreg = true;
        this.btntext = 'Сохранить';
        this.pagename = ' Редактирование данных';
        this.reg.userid = val.userid;
        this.reg.fio = val.fio;
        this.reg.email = val.email;
        this.reg.address = val.address;
        this.reg.phone = val.phone;
        this.reg.rate = val.rate;
        this.reg.photo = val.photo;
        this.reg.birth_date = val.birth_date;
      }
    })
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


  async showAlert(header: string, message: string){
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  submitForm(){
    if (this.isreg) {
      this.updForm();
    } else {
      this.regForm();
    }
  }
  
  async regForm() {
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


  async updForm() {
    let regdata = this.reg;
    let check = this.checkForm();
    console.log(check);
    
    if (check.res === 1) {
      if(this.plt.is('capacitor') || this.plt.is('cordova')){
        let nativeCall = this.auth.updFormNative(this.reg);
        from(nativeCall).pipe(

          ).subscribe(data => {
            let res = JSON.parse(data.data)
            if (res.reg === 1) {
              this.showAlert('Поздравляем', 'Вы успешно изменили данные');
              this.router.navigateByUrl('/tabs/profilezak');
            } else {
              this.showAlert('ошибка сохранения', res.text);
            }
          }, err => {
            console.log('js call error', err)
          }
        )
      } else {
        this.auth.updForm(regdata).subscribe(async res => {
          if (res.reg === 1) {
            this.showAlert('Поздравляем', 'Вы успешно изменили данные');
            this.router.navigateByUrl('/tabs/profilezak');
          } else {
            this.showAlert('ошибка сохранения', res.text);
          }
        });
      }
    } else {
      this.showAlert('Ошибка сохранения', check.text)
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
    let filepath = this.upload.upload(this.image);
    setTimeout(() => {
      this.reg.photo = this.upload.filepath;
    }, 500);
  }
}
