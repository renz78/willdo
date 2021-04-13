import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  private mainpage: any = 'login';
  colmess: any = 4;
  condition: boolean = true;
  constructor(
    private storage: Storage,
    private auth: AuthService
  ) {}

  ngOnInit() {
    
  }

  ionViewWillEnter() {

    this.auth.getObservable().subscribe((data) => {
      if (data.role === 'cb0548d236e28b0c5e656df100613507') {
        this.mainpage = 'myorders';
      } else if (data.role === '3152a0b2e5dde07001780e616909d468') {
        this.mainpage = 'searchorder';
      } else {
        this.mainpage = 'login';
      }
    });

    this.storage.get('authinfo').then( (val) => {
      if(val){
        if (val.role === 'cb0548d236e28b0c5e656df100613507') {
          this.mainpage = 'myorders';
        } else if (val.role === '3152a0b2e5dde07001780e616909d468') {
          this.mainpage = 'searchorder';
        } else {
          this.mainpage = 'login';
        }
      }
    })
  }
}
