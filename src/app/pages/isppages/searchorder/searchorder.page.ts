import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../../../services/user.service';
import { BehaviorSubject, Observable, from, of, Subject } from 'rxjs';
//import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';
import { LoadingController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchorder',
  templateUrl: './searchorder.page.html',
  styleUrls: ['./searchorder.page.scss'],
})
export class SearchorderPage implements OnInit {
  pagename: any = ' Поиск заказа';
  reg: any = [];
  orders: any = [];

  constructor(
    private navCtrl: NavController,
    private userService: UserService,
    private plt: Platform,
    private router: Router
  ) { }

  ngOnInit() {
    // if(this.plt.is('capacitor') || this.plt.is('cordova')){
    //   let nativeCall = this.userService.getOrdersNative();
    //   from(nativeCall).pipe(
    //     //finalize(() => loading.dismiss())
    //   ).subscribe(data => {
    //     console.log('native data:', data)
    //     this.orders = JSON.parse(data.data)
    //   }, err => {
    //     console.log('js call error', err)
    //   })
    // } else {
    //   this.userService.getOrders().subscribe(data => {
    //     this.orders = data;
    //     console.log(data);
    //   })
    // }
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
  cleanDistance() {
    this.reg.distance = '';
  }
  cleanDate() {
    this.reg.datecreate = '';
  }

  searchOrders() {
    if(this.plt.is('capacitor') || this.plt.is('cordova')){
      let nativeCall = this.userService.getOrdersNative(this.reg);
      from(nativeCall).pipe(
        //finalize(() => loading.dismiss())
      ).subscribe(data => {
        this.orders = JSON.parse(data.data)
      }, err => {
        console.log('js call error', err)
      })
    } else {
      this.userService.getOrders(this.reg).subscribe(data => {
        if (data[0]) {
          this.orders = data;
        } else {
          this.orders = [];
        }
        
        console.log(data);
      })
    }
  }

}
