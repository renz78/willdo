import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any;
  constructor() { }



  func(){
    this.user = 'test';
  }
}
