import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { LoadingController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, from, of, Subject } from 'rxjs';

@Component({
  selector: 'app-searchorder-detail',
  templateUrl: './searchorder-detail.page.html',
  styleUrls: ['./searchorder-detail.page.scss'],
})
export class SearchorderDetailPage implements OnInit {
  task: any = [];
  taskid = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private  userService: UserService,
    private plt: Platform,
    private router: Router
    ) { }
  
  pagename: any = ' Поиск заказа';
  ngOnInit() {
    this.taskid = this.activatedRoute.snapshot.paramMap.get('taskid');
    if(this.plt.is('capacitor') || this.plt.is('cordova')){
      let nativeCall = this.userService.getOneTaskNative(this.taskid);
      from(nativeCall).pipe(
        //finalize(() => loading.dismiss())
      ).subscribe(data => {
        console.log('native data:', data)
        this.task = JSON.parse(data.data[0])
      }, err => {
        console.log('js call error', err)
      })  
    } else {
      this.userService.getOneTask(this.taskid).subscribe(data => {
        this.task = data[0];
        console.log(data);
      })
    }
  }

  takeTask() {
    
  }

}
