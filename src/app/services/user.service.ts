import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { BehaviorSubject, Observable, from, of, Subject } from 'rxjs';
import { LoadingController, Platform } from '@ionic/angular';
import { finalize } from 'rxjs/operators';

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

getOrders() {
  return this.http.get('https://willdo.com.ua/p/api/model/wdo_tasks');
}

async getOrdersNative() {
return this.nativeCall = this.http2.get('https://willdo.com.ua/p/api/model/wdo_tasks', {}, {
  'Content-Type': 'aplication/json'
})
}

  func(){
    this.user = 'test';
  }
}
