import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-profilezak',
  templateUrl: './profilezak.page.html',
  styleUrls: ['./profilezak.page.scss'],
})
export class ProfilezakPage implements OnInit {

  pagename = ' Мой профиль';
  fio: string = '';
  email: string = '';
  address: string = '';
  phone: string = '';
  rate: string = '';
  birth_date: string = '';
  photo: string = '';

  constructor(
    private navCtrl: NavController,
    private storage: Storage,
    ) { }

  ngOnInit() {
    this.storage.get('authinfo').then( (val) => {
      if(val){
        this.fio = val.fio;
        this.email = val.email;
        this.address = val.address;
        this.phone = val.phone;
        this.rate = val.rate;
        this.photo = val.photo;
        this.birth_date = val.birth_date;
      }
    })
  }

}
