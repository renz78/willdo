import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordersisp',
  templateUrl: './ordersisp.page.html',
  styleUrls: ['./ordersisp.page.scss'],
})
export class OrdersispPage implements OnInit {
  pagename: any = ' Мои заказы';
  tasks: any = {};
  public items: any = [];
  constructor() {
    this.items = [
      { name: 'Новые заказы', icon: 'newtask', expanded: false },
      { name: 'Заказ взят', icon: 'takentask', expanded: false },
      { name: 'Заказ в работе', icon: 'worktask', expanded: false },
      { name: 'Заказ выполнен', icon: 'didtask', expanded: false },
      { name: 'Архив заказов', icon: 'archtask', expanded: false }
    ];
  }

  ngOnInit() {
  }
  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
}
