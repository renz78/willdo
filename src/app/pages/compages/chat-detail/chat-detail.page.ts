import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { LoadingController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, from, of, Subject } from 'rxjs';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.page.html',
  styleUrls: ['./chat-detail.page.scss'],
})
export class ChatDetailPage implements OnInit {
  pagename: any = ' Ваши сообщения';
  messtext: string = '';
  userid: string = '';
  anotheruser: string = '';
  messdata: any = [];
  chats: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private  userService: UserService,
    private plt: Platform,
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.getTalk();
  }

  async getTalk() {
    this.anotheruser = this.activatedRoute.snapshot.paramMap.get('anotheruser');
    console.log(this.anotheruser);
    
    this.storage.get('authinfo').then( (val) => {
      this.userid = val.userid;
      if(this.plt.is('capacitor') || this.plt.is('cordova')){
        let nativeCall = this.userService.getOneChatNative(val.userid, this.anotheruser);
        from(nativeCall).pipe(
          //finalize(() => loading.dismiss())
        ).subscribe(data => {
          console.log('native data:', data)
          this.chats = JSON.parse(data.data)
          
          setTimeout(() => {
            this.scrollChatdiv();
          }, 500);
        }, err => {
          console.log('js call error', err)
        })  
      } else {
        this.userService.getOneChat(val.userid, this.anotheruser).subscribe(data => {
          this.chats = data;
          console.log(data);
          setTimeout(() => {
            this.scrollChatdiv();
          }, 500);
        })
      }
    })  
     
  }

  scrollChatdiv(){
    console.log(11);
    var objDiv = document.getElementById("scrldiv");
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  sendMess() {
  //   let d = new Date();
  //   let day = d.getDate();
  //   let month = d.getMonth()+1;
  //   let year = d.getFullYear();
  //   let hour = d.getHours();
  //   let min = d.getMinutes();

  //   let messdate = day+'.'+month+'.'+year;
  //   let messtime = hour+':'+min;
  //   //let messtime
  //   document.querySelector('#maingrid').insertAdjacentHTML(
  //     'afterend',
  //     `<ion-row class="tomess ion-margin-top">
  //     <ion-col size="9" offset="3" class="">       
  //         <span class="wdotext smalltext"> `+messdate+` </span> <span class="wdotext smalltext">  `+messtime+`</span><br>
  //         <span class="smalltext">`+this.messtext+`</span>
  //     </ion-col>
  //     <ion-col size="1">
  //     </ion-col>
  // </ion-row>`      
  //   );
    this.messdata = {
      'from_userid': this.userid,
      'to_userid': this.anotheruser,
      'chat_text': this.messtext
    };
    this.sendNewMess();
    this.messtext = '';
    
    
  }

  async sendNewMess() {
    console.log(this.messdata);
    if(this.plt.is('capacitor') || this.plt.is('cordova')){
      let nativeCall = this.userService.newSendMessNative(this.messdata);
      from(nativeCall).pipe(
        //finalize(() => loading.dismiss())
      ).subscribe(data => {
        console.log('native data:', data)
        this.getTalk();
        //this.chats = JSON.parse(data.data)
      }, err => {
        console.log('js call error', err)
      })  
    } else {
      this.userService.newSendMess(this.messdata).subscribe(data => {
        //this.chats = data;
        this.getTalk();
        console.log(data);
      })
    }
  }

}
