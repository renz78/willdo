import { LoadingController, Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable, from, of, Subject } from 'rxjs';
import { take, map, switchMap, tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { AlertController } from '@ionic/angular';
import { AuthResponse } from '../interfaces/auth-response';
import { finalize } from 'rxjs/operators';


const helper = new JwtHelperService();
const TOKEN_KEY = 'jwt-token';

// export interface User {
//   id: string;
//   name: string;
//   email: string;
//   password: string;
//   role: number;
// }

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  data = [];
  public user: Observable<any>;
  private userData = new BehaviorSubject(null);
  private fooSubject = new Subject<any>();
  public curentUser: User;
  public nativeCall: any;
  //AUTH_SERVER_ADDRESS: string = 'http://localhost:3000';

  constructor(
    private storage: Storage,
    private http: HttpClient,
    private http2: HTTP,
    private plt: Platform,
    private router: Router,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
    ) {
    this.loadStoredToken();
  }

  setValue(){
    this.storage.set('name', 'ironman');
  }

  getValue(){
    this.storage.get('name').then( (val) => {
      console.log(val);
    })
  }
  public set(settingName,value){
    console.log(123);
    return this.storage.set(`setting:${ settingName }`,value);
  }
  public async get(settingName){
    console.log(123);

    return await this.storage.get(`setting:${ settingName }`).then( (val) => {
      console.log(val);
    })
  }
  public async remove(settingName){
    return await this.storage.remove(`setting:${ settingName }`);
  }
  public clear() {
    this.storage.clear().then(() => {
      console.log('all keys cleared');
    });
  }
  publishSomeData(data: any) {
    this.fooSubject.next(data);
  }

  getObservable(): Subject<any> {
      return this.fooSubject;
  }


  isLoggedIn(){
    return this.curentUser != null;
  }

  isAdmin(){
    return this.curentUser.role;
  }

  loadStoredToken() {
    let platformObs = from(this.plt.ready());

    this.user = platformObs.pipe(
      switchMap(() => {
        return from(this.storage.get(TOKEN_KEY));
      }),
      map(token => {
        if (token) {
          let decoded = helper.decodeToken(token);
          this.userData.next(decoded);
          console.log(this.userData);
          return true;
        } else {
          return null;
        }
      })
    );
  }
  
  regToken(){
    
    return this.http.get('https://randomuser.me/api/').pipe(
      
      take(1),
      map(res => {
        // Extract the JWT, here we just fake it
        return `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1Njc2NjU3MDYsImV4cCI6MTU5OTIwMTcwNiwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoiMTIzNDUiLCJmaXJzdF9uYW1lIjoiU2ltb24iLCJsYXN0X25hbWUiOiJHcmltbSIsImVtYWlsIjoic2FpbW9uQGRldmRhY3RpYy5jb20ifQ.4LZTaUxsX2oXpWN6nrSScFXeBNZVEyuPxcOkbbDVZ5U`;
      }),
      switchMap(token => {
        
        let decoded = helper.decodeToken(token);
        this.userData.next(decoded);
        console.log(token);
        //this.curentUser = 1;
        let storageObs = from(this.storage.set(TOKEN_KEY, token));
        console.log(this.storage);
        return storageObs;
      })
      
    );
  }
  getDataEveryWhere(credentials: {email: string, pw: string }){
    if(this.plt.is('capacitor') || this.plt.is('cordova')){
      this.getDataNativeHttp(credentials);
    } else {
      this.login(credentials);
    }

  }

  async showAlert(message: string){
    const alert = await this.alertCtrl.create({
      header: 'Инфо',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async getDataNativeHttp(credentials: {email: string, pw: string }){
    return this.http2.post('https://willdo.com.ua/p/api/model/k2users/event/getauth', credentials, {
      'Content-Type': 'aplication/json'
    })
  }

  login(credentials: {email: string, pw: string }) {
    return this.http.post('https://willdo.com.ua/p/api/model/k2users/event/getauth', credentials).pipe(
      tap(res => {
        console.log(res);
        this.regToken();
        this.storage.set('authinfo', res);
        return res;
      }),
    );
    
    return this.http.get('https://randomuser.me/api/').pipe(
      take(1),
      map(res => {
        // Extract the JWT, here we just fake it
        return `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1Njc2NjU3MDYsImV4cCI6MTU5OTIwMTcwNiwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoiMTIzNDUiLCJmaXJzdF9uYW1lIjoiU2ltb24iLCJsYXN0X25hbWUiOiJHcmltbSIsImVtYWlsIjoic2FpbW9uQGRldmRhY3RpYy5jb20ifQ.4LZTaUxsX2oXpWN6nrSScFXeBNZVEyuPxcOkbbDVZ5U`;
      }),
      switchMap(token => {
        let decoded = helper.decodeToken(token);
        this.userData.next(decoded);
        //console.log(token);
        //this.curentUser = 1;
        let storageObs = from(this.storage.set(TOKEN_KEY, token));
        console.log(this.storage);
        return storageObs;
      })
      
    );
    
  }

  getUser() {
    console.log(this.userData.getValue());
    return this.userData.getValue();
  }

  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
      //this.router.navigateByUrl('/first');
      this.userData.next(null);
    });
    this.storage.remove('authinfo').then(() => {
      //this.router.navigateByUrl('/first');
      //this.userData.next(null);
    });
  }


  regForm(regdata) {
    return this.http.post('https://willdo.com.ua/p/api/model/k2users/event/reg/', regdata).pipe(
      tap(res => {
        return res;
      }),
    );
  }

  async regFormNative(regdata){
    return this.http2.post('https://willdo.com.ua/p/api/model/k2users/event/reg', regdata, {
      'Content-Type': 'aplication/json'
    })
  }
}
