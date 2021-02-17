import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
//import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-categoryzak',
  templateUrl: './categoryzak.page.html',
  styleUrls: ['./categoryzak.page.scss'],
})
export class CategoryzakPage implements OnInit {
  pagename: any = ' Меню заказчика';
  //category: Observable<any>;
  category: any = [];
  constructor(private  userService: UserService) {}

  ngOnInit() {
    this.userService.getCategory().subscribe(data => {
      this.category = data;
      console.log(data);
    })
    // this.category = this.userService.getCategory();
    // console.log(this.category);
  }

}
