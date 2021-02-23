import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType, CameraSource} from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { isPlatform } from '@ionic/angular';
import { AuthService } from '../../../services/auth.service';
import { AlertController } from '@ionic/angular';

const { Camera } = Plugins;

@Component({
  selector: 'app-regzak',
  templateUrl: './regzak.page.html',
  styleUrls: ['./regzak.page.scss'],
})
export class RegzakPage implements OnInit {
  pagename: any = ' Регистрация заказчика';
  image: SafeResourceUrl;
  constructor(
    private auth: AuthService,
    private alertCtrl: AlertController,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
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

  reg: any = {};
  check: any = {};

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
    return this.check = {res: 1, text: 'ОК'}
  }

  async regForm() {
    let regdata = this.reg;
    let check = this.checkForm();
    console.log(check);
    
    if (check.res === 1) {
      this.auth.regForm(regdata).subscribe(async res => {
        if (res) {
          console.log(res);
        }
      });
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Ошибка регистрации',
        message: check.text,
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
