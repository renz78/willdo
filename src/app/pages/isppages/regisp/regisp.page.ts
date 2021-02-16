import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regisp',
  templateUrl: './regisp.page.html',
  styleUrls: ['./regisp.page.scss'],
})
export class RegispPage implements OnInit {
  pagename: any = ' Регистрация специалиста';
  constructor() { }

  ngOnInit() {
  }
  logForm(){
    console.log(123);
  }
}
