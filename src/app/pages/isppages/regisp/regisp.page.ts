import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, from, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AuthService } from '../../../services/auth.service';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Plugins, CameraResultType, CameraSource} from '@capacitor/core';


const { Camera } = Plugins;
@Component({
  selector: 'app-regisp',
  templateUrl: './regisp.page.html',
  styleUrls: ['./regisp.page.scss'],
})
export class RegispPage implements OnInit {
  //image to be displayed in template
 image;
 imageData;
 pagename: string = ' Регистрация исполнителя';
constructor(
    //private camera: Camera,
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

  // async regForm2() {
  //   let regdata = this.reg;
  //   let check = this.checkForm();
  //   console.log(check);
    
  //   if (check.res === 1) {
  //     this.auth.regForm(regdata).subscribe(async res => {
  //       if (res) {
  //         console.log(res.reg);
  //       }
  //     });
  //   } else {
  //     const alert = await this.alertCtrl.create({
  //       header: 'Ошибка регистрации',
  //       message: check.text,
  //       buttons: ['OK']
  //     });
  //     await alert.present();
  //   }
  // }
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
    
  }

//   openCamera(){
//     const options: CameraOptions = {
//     quality: 100,
//     destinationType: this.camera.DestinationType.DATA_URL,
//     encodingType: this.camera.EncodingType.JPEG,
//     mediaType: this.camera.MediaType.PICTURE,
//    }

//     this.camera.getPicture(options).then((imageData) => {
//     this.imageData = imageData;
//     this.image=(<any>window).Ionic.WebView.convertFileSrc(imageData);
//     }, (err) => {
//        // Handle error
//        alert("error "+JSON.stringify(err))
//   });
// }
  upload(){
    let  url = 'https://willdo.com.ua/p/api/model/k2users/event/upload';
    const date = new Date().valueOf();

    // Replace extension according to your media type
    const imageName = date+ '.jpeg';
    // call method that creates a blob from dataUri
    const imageBlob = this.dataURItoBlob(this.imageData);
    const imageFile = new File([imageBlob], imageName, { type: 'image/jpeg' })

    let  postData = new FormData();
    postData.append('file', imageFile);

    let data:Observable<any> = this.http.post(url,postData);
    data.subscribe((result) => {
      console.log(result);
    });
  }

  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
   const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
     }
    const blob = new Blob([int8Array], { type: 'image/jpeg' });    
   return blob;
  }
}

