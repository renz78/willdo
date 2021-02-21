import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable, from, of, Subject } from 'rxjs';
import { take, map, switchMap, tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { AuthResponse } from '../interfaces/auth-response';

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

  public user: Observable<any>;
  private userData = new BehaviorSubject(null);
  private fooSubject = new Subject<any>();
  public curentUser: User;
  //AUTH_SERVER_ADDRESS: string = 'http://localhost:3000';

  constructor(private storage: Storage, private http: HttpClient, private http2: HTTP, private plt: Platform, private router: Router) {
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


  login3(name: string, pw: string) : Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (name === 'admin' && pw === 'admin'){
        this.curentUser = {
          name: name,
          id: '12',
          email: '',
          password: '',
          role: 0
        };
        
        resolve (true);
      } else if (name === 'user' && pw === 'user') {
        this.curentUser = {
          name: name,
          id: '12',
          email: '',
          password: '',
          role: 1
        };
        resolve (true);
      } else {
        console.log(444);
        reject (false);
      }
    })
  }

  isLoggedIn(){
    return this.curentUser != null;
  }

  isAdmin(){
    return this.curentUser.role;
  }

  // register(user: User): Observable<AuthResponse> {
  //   return this.http.post<AuthResponse>(`${this.AUTH_SERVER_ADDRESS}/register`, user).pipe(
  //     tap(async (res: AuthResponse ) => {

  //       if (res.user) {
  //         await this.storage.set("ACCESS_TOKEN", res.user.access_token);
  //         await this.storage.set("EXPIRES_IN", res.user.expires_in);
  //         this.userData.next(true);
  //       }
  //     })

  //   );
  // }

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
  // login2(user: User): Observable<AuthResponse> {
  //   //return this.http.get('https://willdo.com.ua/p/api/model/k2users');
  //   return this.http.post('https://willdo.com.ua/p/api/model/k2users', user).pipe(
  //     tap(async (res: AuthResponse) => {

  //       if (res.user) {
  //         await this.storage.set("ACCESS_TOKEN", res.user.access_token);
  //         await this.storage.set("EXPIRES_IN", res.user.expires_in);
  //         this.userData.next(true);
  //       }
  //     })
  //   );
  // }

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

  

  login(credentials: {email: string, pw: string }) {
    // Normally make a POST request to your APi with your login credentials e10adc3949ba59abbe56e057f20f883e
    // if (credentials.email !== 'saimon@devdactic.com' || credentials.pw !== '123') {
    //   return of(null);
    // }

    

    return this.http.post('https://willdo.com.ua/p/api/model/k2users/event/getauth/', credentials).pipe(
      tap(res => {
        console.log(res);
        this.regToken();
        this.storage.set('authinfo', res);
        return res;
      }),
    );
  //   this.http2.sendRequest('https://google.com/',
  //   {
  //     method: 'post',
  //     data: { id: 12, message: 'test' },
  //     headers: { Authorization: 'OAuth2: token' },
  //     timeout: 5000
  //   }
  // )
  //   .then(response => {
  //     // prints 200
  //     console.log(response.status);
  //   })
  //   .catch(response => {
  //     // prints 403
  //     console.log(response.status);

  //     // prints Permission denied
  //     console.log(response.error);
  //   });
  //   this.http2.post('https://willdo.com.ua/p/api/model/k2users/event/getauth/', {credentials}, {})
  // .then(data => {

  //   console.log(data.status);
  //   console.log(data.data); // data received by server
  //   console.log(data.headers);

  // })
  // .catch(error => {

  //   console.log(error.status);
  //   console.log(error.error); // error message as string
  //   console.log(error.headers);

  // });
    //получаем данные пользователя 
    
    // return this.http.post('https://willdo.com.ua/p/api/model/k2users', credentials).pipe(
    //   tap(res => {
    //     console.log(res)
    //     return `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1Njc2NjU3MDYsImV4cCI6MTU5OTIwMTcwNiwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoiMTIzNDUiLCJmaXJzdF9uYW1lIjoiU2ltb24iLCJsYXN0X25hbWUiOiJHcmltbSIsImVtYWlsIjoic2FpbW9uQGRldmRhY3RpYy5jb20ifQ.4LZTaUxsX2oXpWN6nrSScFXeBNZVEyuPxcOkbbDVZ5U`;
    //   }),
    // );
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
        console.log(res);
        
        return res;
      }),
    );
  }
 
}
