import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType, CameraSource} from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { isPlatform } from '@ionic/angular';
import { UploadService } from '../../../services/upload.service';
import { AuthService } from '../../../services/auth.service';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable, from, of, Subject } from 'rxjs';
import { Router } from '@angular/router';
import {File, IWriteOptions, FileEntry} from '@ionic-native/file/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

const { Camera2 } = Plugins;

@Component({
  selector: 'app-regzak',
  templateUrl: './regzak.page.html',
  styleUrls: ['./regzak.page.scss'],
})
export class RegzakPage implements OnInit {
  pagename: any = ' Регистрация заказчика';
  image: SafeResourceUrl;
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };
  constructor(
    private auth: AuthService,
    private alertCtrl: AlertController,
    private router: Router,
    private uploadService: UploadService,
    private sanitizer: DomSanitizer,
    private loadingCtrl: LoadingController,
    private plt: Platform,
    private file: File,
    private camera: Camera,
  ) {}

  ngOnInit() {
  }
  readFile(file: any) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const imgBlob = new Blob([reader.result], {
        type: file.type
      });
      const formData = new FormData();
      formData.append('name', 'Hello');
      formData.append('file', imgBlob, file.name);
      this.uploadService.uploadFile(formData);
      // this.uploadService.uploadFile(formData).subscribe(dataRes => {
      //   console.log(dataRes);
      // });
    };
    reader.readAsArrayBuffer(file);
  }

  async captureImage() {
    const image = await Camera2.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    })
    console.log(image);
    //this.image = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg; base64,${image.base64String}');
    this.image = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    
  }

  takePicture() {
    this.camera.getPicture(this.options).then((imageData) => {
      this.file.resolveLocalFilesystemUrl(imageData).then((entry: FileEntry) => {
        entry.file(file => {
          console.log(file);
          this.readFile(file);
        });
      });
    }, (err) => {
      // Handle error
    });
  }

  reg: any = {};
  check: any = {};
  res: any = {};

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

  async regForm() {
    let regdata = this.reg;
    let check = this.checkForm();
    console.log(check);
    
    if (check.res === 1) {
      if(this.plt.is('capacitor') || this.plt.is('cordova')){
        let nativeCall = this.auth.getDataNativeHttp(this.reg);
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
          // if (res.reg === 1) {
          //   this.showAlert('Поздравляем', 'Вы успешно зарегистрировались');
          //   this.router.navigateByUrl('/tabs/login');
          // } else {
          //   this.showAlert('ошибка регистрации', res.text);
          // }
        });
      }
    } else {
      this.showAlert('Ошибка регистрациии', check.text)
    }
  }
}
