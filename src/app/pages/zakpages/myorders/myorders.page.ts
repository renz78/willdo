import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../../../services/user.service';
import { BehaviorSubject, Observable, from, of, Subject } from 'rxjs';
//import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';
import { LoadingController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.page.html',
  styleUrls: ['./myorders.page.scss'],
})
export class MyordersPage implements OnInit {
  pagename: any = ' Мои заказы';
  orders: any = [];

  constructor(
    private navCtrl: NavController,
    private  userService: UserService,
    private plt: Platform,
    private router: Router
  ) { }

  ngOnInit() {
    if(this.plt.is('capacitor') || this.plt.is('cordova')){
      let nativeCall = this.userService.getWorkersNative();
      from(nativeCall).pipe(
        //finalize(() => loading.dismiss())
      ).subscribe(data => {
        console.log('native data:', data)
        this.orders = JSON.parse(data.data)
      }, err => {
        console.log('js call error', err)
      })  
    } else {
      this.userService.getWorkers().subscribe(data => {
        this.orders = data;
        console.log(data);
      })
    }
  }

  

}
