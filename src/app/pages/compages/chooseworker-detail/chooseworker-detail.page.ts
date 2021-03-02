import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { LoadingController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, from, of, Subject } from 'rxjs';

@Component({
  selector: 'app-chooseworker-detail',
  templateUrl: './chooseworker-detail.page.html',
  styleUrls: ['./chooseworker-detail.page.scss'],
})
export class ChooseworkerDetailPage implements OnInit {
  workerid = null;
  worker: any = [];
  constructor(
    private navCtrl: NavController, 
    private activatedRoute: ActivatedRoute,
    private  userService: UserService,
    private plt: Platform,
    private router: Router
    ) { }
  pagename: any = ' Выбор специалиста';
  ngOnInit() {
    this.workerid = this.activatedRoute.snapshot.paramMap.get('workerid');
    if(this.plt.is('capacitor') || this.plt.is('cordova')){
      let nativeCall = this.userService.getOneWorkerNative(this.workerid);
      from(nativeCall).pipe(
        //finalize(() => loading.dismiss())
      ).subscribe(data => {
        console.log('native data:', data)
        this.worker = JSON.parse(data.data[0])
      }, err => {
        console.log('js call error', err)
      })  
    } else {
      this.userService.getOneWorker(this.workerid).subscribe(data => {
        this.worker = data[0];
        console.log(data);
      })
    }
  }
  
}
