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
import { StarRatingModule } from 'ionic5-star-rating';

import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { PhotoService } from './services/photo.service';
import { UploadService } from './services/upload.service';

import { ComponentsModule } from './comp/components.module';
import { HTTP } from '@ionic-native/http/ngx';

import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { VideoCapturePlus } from '@ionic-native/video-capture-plus/ngx';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule,
    IonicStorageModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    StarRatingModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    StatusBar,
    Geolocation,
    NativeGeocoder,
    UserService,
    AuthService,
    UploadService,
    HTTP,
    WebView,
    PhotoService,
    StarRatingModule,
    // SplashScreen,
    VideoCapturePlus,
    FileTransfer,
    File,
    Camera,
    MediaCapture, 
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
