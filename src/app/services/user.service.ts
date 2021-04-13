import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { BehaviorSubject, Observable, from, of, Subject } from 'rxjs';
import { LoadingController, Platform } from '@ionic/angular';
import { take, map, switchMap, tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any;
  data = [];
  nativeCall: any;
  //category: any;
  constructor(
    public http: HttpClient,
    private http2: HTTP,
    private plt: Platform, 
    private storage: Storage,
    private loadingCtrl: LoadingController
    ) { }

  getCategory() {
      return this.http.get('https://willdo.com.ua/p/api/model/k2shop_category');
  }

  async getCategoryNative() {
    return this.nativeCall = this.http2.get('https://willdo.com.ua/p/api/model/k2shop_category', {}, {
      'Content-Type': 'aplication/json'
    })
  }

  getChats(userid: string) {
    return this.http.get('https://willdo.com.ua/p/api/model/chats/id/' + userid);
  }

  async getChatsNative(userid: string) {
      return this.nativeCall = this.http2.get('https://willdo.com.ua/p/api/model/chats/id/' + userid, {}, {
        'Content-Type': 'aplication/json'
      });
  }

  getOneChat(from_userid: string, to_userid: string) {
      return this.http.get('https://willdo.com.ua/p/api/model/chats/from_userid/' + from_userid + '/to_userid/' + to_userid);
  }

  async getOneChatNative(from_userid: string, to_userid: string) {
      return this.nativeCall = this.http2.get('https://willdo.com.ua/p/api/model/chats/from_userid/' + from_userid + '/to_userid/' + to_userid, {}, {
        'Content-Type': 'aplication/json'
      });
  }

  getWorkers() {
    return this.http.get('https://willdo.com.ua/p/api/model/workers');
  }

  async getWorkersNative() {
      return this.nativeCall = this.http2.get('https://willdo.com.ua/p/api/model/workers', {}, {
        'Content-Type': 'aplication/json'
      });
  }

  getOneWorker(workerid: string) {
      return this.http.get('https://willdo.com.ua/p/api/model/workers/id/' + workerid);
  }

  async getOneWorkerNative(workerid: string) {
      return this.nativeCall = this.http2.get('https://willdo.com.ua/p/api/model/workers/id/' + workerid, {}, {
        'Content-Type': 'aplication/json'
      });
  }

  getOneCategory(category_id: string) {
      return this.http.get('https://willdo.com.ua/p/api/model/k2shop_category/id/' + category_id);
  }

  async getOneCategoryNative(category_id: string) {
    return this.nativeCall = this.http2.get('https://willdo.com.ua/p/api/model/k2shop_category/id/' + category_id, {}, {
      'Content-Type': 'aplication/json'
    })
  }

  getOrders(search: object) {
    let addurl = '';
    for (const [key, value] of Object.entries(search)) {
      if (`${value}`) {
        addurl = addurl + `/${key}/${value}`;
        console.log(`${key}: ${value}`);
      }
      
    }
    return this.http.get('https://willdo.com.ua/p/api/model/wdo_tasks' + addurl);
  }

  async getOrdersNative(search: object) {
    let addurl = '';
    for (const [key, value] of Object.entries(search)) {
      if (`${value}`) {
        addurl = addurl + `/${key}/${value}`;
        console.log(`${key}: ${value}`);
      }
    }
    return this.nativeCall = this.http2.get('https://willdo.com.ua/p/api/model/wdo_tasks' + addurl, {}, {
      'Content-Type': 'aplication/json'
    })
  }

  getOneTask(taskid: string) {
    return this.http.get('https://willdo.com.ua/p/api/model/wdo_tasks/id/' + taskid);
  }

  async getOneTaskNative(taskid: string) {
      return this.nativeCall = this.http2.get('https://willdo.com.ua/p/api/model/wdo_tasks/id/' + taskid, {}, {
        'Content-Type': 'aplication/json'
      });
  }
  newSendMess(messdata) {
    return this.http.post('https://willdo.com.ua/p/api/model/chats', messdata).pipe(
      tap(res => {
        return res;
      }),
    );
  }

  async newSendMessNative(messdata){
    return this.http2.post('https://willdo.com.ua/p/api/model/chats', messdata, {
      'Content-Type': 'aplication/json'
    })
  }
  func(){
    this.user = 'test';
  }
}
