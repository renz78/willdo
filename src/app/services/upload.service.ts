import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController, Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor(
    private http: HttpClient,
    private http2: HTTP,
    private plt: Platform,
    ) { }
  uploadFile(formData) {

    if(this.plt.is('capacitor') || this.plt.is('cordova')){
      return this.http2.post('https://willdo.com.ua/p/api/model/k2users/event/upload', formData, {});
    } else {
      return this.http.post('https://willdo.com.ua/p/api/model/k2users/event/upload', formData);
    }
  }
}