import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordersisp',
  templateUrl: './ordersisp.page.html',
  styleUrls: ['./ordersisp.page.scss'],
})
export class OrdersispPage implements OnInit {
  pagename: any = ' Мои заказы';
  tasks: any = {};
  constructor() { }

  ngOnInit() {
  }

}
