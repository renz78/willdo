import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable, from, of, Subject } from 'rxjs';
import { take, map, switchMap, tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
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

  constructor(private storage: Storage, private http: HttpClient, private plt: Platform, private router: Router) {
    this.loadStoredToken();
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
  login(credentials: {email: string, pw: string }) {
    // Normally make a POST request to your APi with your login credentials
    if (credentials.email !== 'saimon@devdactic.com' || credentials.pw !== '123') {
      return of(null);
    }
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
        console.log(token);
        //this.curentUser = 1;
        let storageObs = from(this.storage.set(TOKEN_KEY, token));
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
  }
 
}
