import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { BehaviorSubject, Observable, from, of, Subject } from 'rxjs';
//import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';
import { LoadingController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoryzak',
  templateUrl: './categoryzak.page.html',
  styleUrls: ['./categoryzak.page.scss'],
})
export class CategoryzakPage implements OnInit {
  pagename: any = ' Меню заказчика';
  //category: Observable<any>;
  category: any = [];

  constructor(
    private  userService: UserService,
    private loadingCtrl: LoadingController,
    private router: Router,
    private plt: Platform
    ) {}

  ngOnInit() {
    //this.userService.getCategory();
    //this.userService.getCategory().subscribe(data => {
      //this.category = data;
      //console.log(data);
    //})
    //let loading = this.loadingCtrl.create();
    //loading.present();
    if(this.plt.is('capacitor') || this.plt.is('cordova')){
      let nativeCall = this.userService.getCategoryNative();
      from(nativeCall).pipe(
        //finalize(() => loading.dismiss())
      ).subscribe(data => {
        console.log('native data:', data)
        this.category = JSON.parse(data.data)
      }, err => {
        console.log('js call error', err)
      })  
    } else {
      this.userService.getCategory().subscribe(data => {
        this.category = data;
        console.log(data);
      })
    }
    
  }

  gotoChoseByUsl(id) {
    console.log(id);
    //this.router.navigateByUrl('/tabs/choosebyusl');
  }


}
