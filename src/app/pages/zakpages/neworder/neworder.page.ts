import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, from, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { UploadService } from '../../../services/upload.service';
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
    private upload: UploadService,
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
  filepath: any = '';

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
      let d = new Date(this.reg.datetask);
      let dt: any = d.getDate();
      if (dt < 10) {
        dt = '0' + dt;
      } 
      let mn: any = d.getMonth()+1;
      if (mn < 10) {
        mn = '0' + mn;
      } 
      let yer = d.getFullYear();
      this.reg.datetask = yer+'-'+mn+'-'+dt;
      
      let t = new Date(this.reg.timetask);
      let hr: any = t.getHours();
      if (hr < 10) {
        hr = '0' + hr;
      } 

      let mi: any = t.getMinutes();
      if (mi < 10) {
        mi = '0' + mi;
      } 

      this.reg.timetask = hr + ':' + mi;
      console.log(this.reg.datetask);
      console.log(this.reg.timetask);

      
      if (!this.reg.task_comment) {
        return this.check = {res: 0, text: 'Вы не описали задание'}
      }
      if (!this.reg.datetask) {
       return this.check = {res: 0, text: 'Вы не ввели дату задания'}
      }
      if (!this.reg.timetask) {
        return this.check = {res: 0, text: 'Вы не ввели время задания'}
      }
      if (!this.reg.typelink) {
        return this.check = {res: 0, text: 'Укажите способ связи с Вами'}
      }
      if (!this.reg.begin_price) {
        return this.check = {res: 0, text: 'Укажите бюджет'}
      }
      if (!this.reg.task_address) {
        return this.check = {res: 0, text: 'Укажите адрес'}
      }
    return this.check = {res: 1, text: 'ОК'}
  }

  async orderForm() {
    let regdata = this.reg;
    let check = this.checkForm();
    console.log(check);
    
    if (check.res === 1) {
      if(this.plt.is('capacitor') || this.plt.is('cordova')){
        let nativeCall = this.auth.orderFormNative(this.reg);
        from(nativeCall).pipe(

          ).subscribe(data => {
            let res = JSON.parse(data.data)
            if (res.reg === 1) {
              this.showAlert('Поздравляем', 'Заявка создана');
              this.router.navigateByUrl('/tabs/myorders');
            } else {
              this.showAlert('ошибка', res.text);
            }
          }, err => {
            console.log('js call error', err)
          }
        )
      } else {
        this.auth.orderForm(regdata).subscribe(async res => {
          if (res.reg === 1) {
            this.showAlert('Поздравляем', 'Заявка создана');
            this.router.navigateByUrl('/tabs/myorders');
          } else {
            this.showAlert('ошибка', res.text);
          }
        });
      }
    } else {
      this.showAlert('Ошибка', check.text)
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
  };
  //captureImage().then(alert);
}
