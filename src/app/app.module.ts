import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// geolocation and native-geocoder
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

//import { StarRatingModule } from 'ionic5-star-rating';
//import { BarRatingModule } from 'ngx-bar-rating';
//import { IonicRatingModule } from 'ionic-rating-component/public-api';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { ComponentsModule } from './comp/components.module';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule,
    //BarRatingModule,
    IonicStorageModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    //StarRatingModule,
    //IonicRatingModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    Geolocation,
    NativeGeocoder,
    UserService,
    AuthService,
    //BarRatingModule,
    // StarRatingModule,
    // SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
