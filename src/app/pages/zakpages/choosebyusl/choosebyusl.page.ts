import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { LoadingController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, from, of, Subject } from 'rxjs';

@Component({
  selector: 'app-choosebyusl',
  templateUrl: './choosebyusl.page.html',
  styleUrls: ['./choosebyusl.page.scss'],
})
export class ChoosebyuslPage implements OnInit {
  category_id = null;
  category: any = [];
  pagename: any = ' Выбрать исполнителя';

  constructor(
    private activatedRoute: ActivatedRoute,
    private  userService: UserService,
    private plt: Platform,
    private router: Router
  ) { }

  ngOnInit() {
    this.category_id = this.activatedRoute.snapshot.paramMap.get('category_id');
    if(this.plt.is('capacitor') || this.plt.is('cordova')){
      let nativeCall = this.userService.getOneCategoryNative(this.category_id);
      from(nativeCall).pipe(
        //finalize(() => loading.dismiss())
      ).subscribe(data => {
        console.log('native data:', data)
        this.category = JSON.parse(data.data[0])
      }, err => {
        console.log('js call error', err)
      })  
    } else {
      this.userService.getOneCategory(this.category_id).subscribe(data => {
        this.category = data[0];
        console.log(this.category);
      })
    }
  }

}
