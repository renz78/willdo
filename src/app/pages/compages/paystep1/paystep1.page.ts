import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paystep1',
  templateUrl: './paystep1.page.html',
  styleUrls: ['./paystep1.page.scss'],
})
export class Paystep1Page implements OnInit {
  pagename: string = ' Оплата услуг WillDo';
  sum: any = '';
  constructor() { }

  ngOnInit() {
  }

}
