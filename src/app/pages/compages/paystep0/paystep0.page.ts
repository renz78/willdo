import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-paystep0',
  templateUrl: './paystep0.page.html',
  styleUrls: ['./paystep0.page.scss'],
})
export class Paystep0Page implements OnInit {
  pagename: string = ' Оплата услуг WillDo';
  reg: any;
  fio: string = '';
  email: string = '';
  address: string = '';
  phone: string = '';
  rate: string = '';
  birth_date: string = '';
  photo: string = '';
  constructor(
    private storage: Storage,
  ) { }

  ngOnInit() {
    this.storage.get('authinfo').then( (val) => {
      if(val){
        console.log(val);
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
