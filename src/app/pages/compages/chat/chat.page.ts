import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  pagename: any = ' Ваши сообщения';
  messtext: string = '';
  constructor() { }

  ngOnInit() {
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
}
