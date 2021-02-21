import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private storage: Storage, private router: Router, private auth: AuthService, private alertCtrl: AlertController) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.auth.user.pipe(
      take(1),
      map(user => {
        this.storage.get('authinfo').then( (val) => {
          //console.log(val.role);
          if (val) {
            return true;
          } else {
            this.router.navigateByUrl('/tabs/login');
              return false;
          }
        })
        if (!user) {
          // this.alertCtrl.create({
          //   header: 'Unauthorized',
          //   message: 'You are not allowed to access that page.',
          //   buttons: ['OK']
          // }).then(alert => alert.present());

          this.router.navigateByUrl('/tabs/login');
          return false;
        } else {
          return true;
        }
      })
    )

    
   }
}
