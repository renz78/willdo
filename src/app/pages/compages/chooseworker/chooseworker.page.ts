import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../../../services/user.service';
import { BehaviorSubject, Observable, from, of, Subject } from 'rxjs';
//import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';
import { LoadingController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chooseworker',
  templateUrl: './chooseworker.page.html',
  styleUrls: ['./chooseworker.page.scss'],
})
export class ChooseworkerPage implements OnInit {
  pagename: any = ' Выбор специалиста';
  workers: any = [];

  
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
        this.workers = JSON.parse(data.data)
      }, err => {
        console.log('js call error', err)
      })  
    } else {
      this.userService.getWorkers().subscribe(data => {
        this.workers = data;
        console.log(data);
      })
    }
  }
  gotoSharePage(): void{
    this.navCtrl.navigateForward('tabs/share');
  }

  openDetails(workerid) {
    this.navCtrl.navigateForward('/tabs/chooseworker-detail/'+workerid);
  }
  goToProductDetails(id) {
    this.router.navigate(['/tabs/chooseworker-detail', id]);
  }
}
