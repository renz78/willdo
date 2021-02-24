import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myrating',
  templateUrl: './myrating.page.html',
  styleUrls: ['./myrating.page.scss'],
})
export class MyratingPage implements OnInit {
  pagename: any = ' Мой рейтинг';
  constructor() { }

  ngOnInit() {
  }

}
