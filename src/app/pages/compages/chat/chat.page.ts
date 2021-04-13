import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../../../services/user.service';
import { BehaviorSubject, Observable, from, of, Subject } from 'rxjs';
//import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';
import { LoadingController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  pagename: any = ' Ваши сообщения';
  messtext: string = '';
  chats: any = [];
  constructor(
    private navCtrl: NavController,
    private userService: UserService,
    private plt: Platform,
    private router: Router,
    private storage: Storage
    ) { }

  ngOnInit() {
    this.storage.get('authinfo').then( (val) => {
      console.log(val.userid);
      if(this.plt.is('capacitor') || this.plt.is('cordova')){
        let nativeCall = this.userService.getChatsNative(val.userid);
        from(nativeCall).pipe(
          //finalize(() => loading.dismiss())
        ).subscribe(data => {
          console.log('native data:', data)
          this.chats = JSON.parse(data.data)
        }, err => {
          console.log('js call error', err)
        })  
      } else {
        this.userService.getChats(val.userid).subscribe(data => {
          this.chats = data;
          console.log(data);
        })
      }
    })  
  }
  sendMess() {
    let d = new Date();
    let day = d.getDate();
    let month = d.getMonth()+1;
    let year = d.getFullYear();
    let hour = d.getHours();
    let min = d.getMinutes();

    let messdate = day+'.'+month+'.'+year;
    let messtime = hour+':'+min;
    //let messtime
    document.querySelector('#maingrid').insertAdjacentHTML(
      'afterend',
      `<ion-row class=" ion-margin-top">
      <ion-col size="9" offset="3" class="tomess">       
          <span class="wdotext smalltext"> `+messdate+` </span> <span class="wdotext smalltext">  `+messtime+`</span><br>
          <span class="smalltext">`+this.messtext+`</span>
      </ion-col>
      <ion-col size="1">
      </ion-col>
  </ion-row>`      
    );
    this.messtext = '';
  }

  openDetails(chatid) {
    this.navCtrl.navigateForward('/tabs/chat-detail/'+chatid);
  }
}
