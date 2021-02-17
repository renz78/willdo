import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any;
  //category: any;
  constructor(public http: HttpClient) { }

  getCategory() {
    return this.http.get('https://willdo.com.ua/p/api/model/k2shop_category');
  }

  func(){
    this.user = 'test';
  }
}
