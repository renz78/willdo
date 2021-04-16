import { AfterViewInit, Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject, Observable, from, of, Subject } from 'rxjs';
import { AuthService } from '../../../services/auth.service';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Plugins, CameraResultType, CameraSource} from '@capacitor/core';
import { UploadService } from '../../../services/upload.service';
import { Storage } from '@ionic/storage';
import { VideoService } from '../../../services/video.service';
import { Capacitor } from '@capacitor/core';
import * as WebVPPlugin from 'capacitor-video-player';
//import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture/ngx';
import { VideoCapturePlus, VideoCapturePlusOptions, MediaFile } from '@ionic-native/video-capture-plus/ngx';
import {HttpClient} from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';

const { Camera, CapacitorVideoPlayer } = Plugins;

@Component({
  selector: 'app-regisp',
  templateUrl: './regisp.page.html',
  styleUrls: ['./regisp.page.scss'],
})
export class RegispPage implements OnInit {
  @ViewChild('video') captureElement: ElementRef;
  mediaRecorder: any;
  videoPlayer: any;
  isRecording = false;
  videos = [];
  //image to be displayed in template
  image;
  imageData;
  btntext: any = 'Зарегистрироваться';
  pagename: string = ' Регистрация специалиста';
  reg: any = {};
  check: any = {};
  res: any = {};
  isreg: any = false;
  filepath: any = '';
  bs64: any = '';
  selectedVideo: any = '';
  fileTransfer: any = '';
constructor(
  private auth: AuthService,
  private upload: UploadService,
  private router: Router,
  private plt: Platform,
  private alertCtrl: AlertController,
  private sanitizer: DomSanitizer,
  private storage: Storage,
  public videoService: VideoService, 
  private changeDetector: ChangeDetectorRef,
  //private mediaCapture: MediaCapture,
  private videoCapturePlus: VideoCapturePlus,
  private http: HttpClient,
  private http2: HTTP,
  private transfer: FileTransfer, 
  private file: File
    ) { }

  ngOnInit() {
    this.storage.get('authinfo').then( (val) => {
      if(val){
        this.isreg = true;
        this.btntext = 'Сохранить';
        this.pagename = ' Редактирование данных';
        this.reg.userid = val.userid;
        this.reg.fio = val.fio;
        this.reg.email = val.email;
        this.reg.address = val.address;
        this.reg.phone = val.phone;
        this.reg.rate = val.rate;
        this.reg.photo = val.photo;
        this.reg.birth_date = val.birth_date;
      }
    })
  }

  checkForm () {
    if (this.reg.password !== this.reg.password2) {
      return this.check = {res: 0, text: 'Пароли не совпадают'}
    }
    if (!this.reg.fio) {
      return this.check = {res: 0, text: 'Вы не ввели ФИО'}
    }
    if (!this.reg.email) {
      return this.check = {res: 0, text: 'Вы не ввели Email'}
    }
    if (!this.reg.money) {
      return this.check = {res: 0, text: 'Вы не выбрали способ оплаты'}
    }
    if (!this.reg.langid) {
      return this.check = {res: 0, text: 'Вы не выбрали язык'}
    }
    return this.check = {res: 1, text: 'ОК'}
  }


  async showAlert(header: string, message: string){
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  submitForm(){
    if (this.isreg) {
      this.updForm();
    } else {
      this.regForm();
    }
  }
  
  async regForm() {
    let regdata = this.reg;
    let check = this.checkForm();
    console.log(check);
    
    if (check.res === 1) {
      if(this.plt.is('capacitor') || this.plt.is('cordova')){
        let nativeCall = this.auth.regFormNative(this.reg);
        from(nativeCall).pipe(

          ).subscribe(data => {
            let res = JSON.parse(data.data)
            if (res.reg === 1) {
              this.showAlert('Поздравляем', 'Вы успешно зарегистрировались');
              this.router.navigateByUrl('/tabs/success-reg');
            } else {
              this.showAlert('ошибка регистрации', res.text);
            }
          }, err => {
            console.log('js call error', err)
          }
        )
      } else {
        this.auth.regForm(regdata).subscribe(async res => {
          if (res.reg === 1) {
            this.showAlert('Поздравляем', 'Вы успешно зарегистрировались');
            this.router.navigateByUrl('/tabs/success-reg');
          } else {
            this.showAlert('ошибка регистрации', res.text);
          }
        });
      }
    } else {
      this.showAlert('Ошибка регистрациии', check.text)
    }
  }

  async updForm() {
    let regdata = this.reg;
    let check = this.checkForm();
    console.log(check);
    
    if (check.res === 1) {
      if(this.plt.is('capacitor') || this.plt.is('cordova')){
        let nativeCall = this.auth.updFormNative(this.reg);
        from(nativeCall).pipe(

          ).subscribe(data => {
            let res = JSON.parse(data.data)
            if (res.reg === 1) {
              this.showAlert('Поздравляем', 'Вы успешно изменили данные');
              this.router.navigateByUrl('/tabs/profilezak');
            } else {
              this.showAlert('ошибка сохранения', res.text);
            }
          }, err => {
            console.log('js call error', err)
          }
        )
      } else {
        this.auth.updForm(regdata).subscribe(async res => {
          if (res.reg === 1) {
            this.showAlert('Поздравляем', 'Вы успешно изменили данные');
            this.router.navigateByUrl('/tabs/profilezak');
          } else {
            this.showAlert('ошибка сохранения', res.text);
          }
        });
      }
    } else {
      this.showAlert('Ошибка сохранения', check.text)
    }
  }

  async captureImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    })
    //console.log(image);
    //this.image = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg; base64,${image.base64String}');
    this.image = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    let filepath = this.upload.upload(this.image);
    setTimeout(() => {
      this.reg.photo = this.upload.filepath;
    }, 500);
  }

  async ngAfterViewInit() {
    //this.videos = await this.videoService.loadVideos();

    // Initialise the video player plugin
    if (Capacitor.isNative) {
      this.videoPlayer = CapacitorVideoPlayer;
    } else {
      this.videoPlayer = WebVPPlugin.CapacitorVideoPlayer
    }
  }

  async recordVideo() {
    // Create a stream of video capturing
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: 'user'
      },
      audio: true
    });
    
    // Show the stream inside our video object
    this.captureElement.nativeElement.srcObject = stream;
    
    var options = {mimeType: 'video/webm'};
    this.mediaRecorder = new MediaRecorder(stream, options);
    let chunks = [];
    
    // Store the video on stop
    this.mediaRecorder.onstop = async (event) => {
      //console.log(event);
      const videoBuffer = new Blob(chunks, { type: 'video/mp4' });
      //this.showAlert('Ошибка сохранения', 'test41'+stream.id + '|' + videoBuffer+'wwq');
      //await this.videoService.storeVideo(videoBuffer);
      //console.log(videoBuffer);
      this.showAlert('Ошибка сохранения', 'test5'+videoBuffer);
      // Reload our list
      //this.showAlert('Ошибка сохранения', stream.id + '|' + videoBuffer.size);
      //this.videos = this.videoService.videos;
      //console.log(this.videoService.curentvideo);
      //this.showAlert('Ошибка сохранения', this.videoService.curentvideo);
      //let bs64 = this.videoService.curentvideo;
      this.uploadVideo(videoBuffer);
      this.changeDetector.detectChanges();
    }

    
    // Store chunks of recorded video
    this.mediaRecorder.ondataavailable = (event) => {
      if (event.data && event.data.size > 0) {
        chunks.push(event.data)
      }
    }

    // Start recording wth chunks of data
    this.mediaRecorder.start(100);
    this.isRecording = true;
  }

  uploadVideo(bs64){
    console.log(bs64)

    let  url = 'https://willdo.com.ua/p/api/model/k2users/event/upload';
    this.showAlert('Grebanyi bs64', 'sdfsdfsdfsdhfksdhfkjsdf');
    const blobToBase64 = blob => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      return new Promise(resolve => {
        reader.onloadend = () => {
          resolve(reader.result);
        };
      });
    };
    blobToBase64(bs64).then(res => {
      // do what you wanna do
      let base64 = res;
      let postData = {
        "base64_string": base64,
        "video":1
      }
      this.bs64 = res
     
      console.log(base64);
      
      //let postData = new FormData();
      //postData.append('file', bs64);
      if(this.plt.is('capacitor') || this.plt.is('cordova')){
        
        let sendImage = this.http2.post(url,postData,{
          'Content-Type': 'aplication/json'
        });
        from(sendImage).pipe(
          ).subscribe(data => {
            let res = JSON.parse(data.data)
           
          }, err => {
            console.log('js call error', err)
          }
        )
      } else {
        let data:Observable<any> = this.http.post(url,postData);
        data.subscribe((result) => {
          this.filepath = result.filepath;
        });
      }
    });
  }

  getVideo(){
    /**mediacapture */
  //   let options: CaptureImageOptions = { limit: 3 }
  //   this.mediaCapture.captureImage(options)
  //   .then(
  //   (data: MediaFile[]) => this.showAlert('Ошибка сохранения', 'test2'+data),
  //   (err: CaptureError) => console.error(err)
  // );

  /*videocapture*/ 
  const options: VideoCapturePlusOptions = {
    limit: 1,
    highquality: true,
    portraitOverlay: 'assets/img/camera/overlay/portrait.png',
    landscapeOverlay: 'assets/img/camera/overlay/landscape.png'
 }
 
  this.videoCapturePlus.captureVideo(options)
  .then(
    async (mediafile: MediaFile[]) => {
      const fileTransfer: FileTransferObject = this.transfer.create();
      let media = mediafile[0];
      if (Capacitor.getPlatform() === "ios") {
        var resolvedPath = "file://" + media.fullPath;
      } else {
        var resolvedPath = media.fullPath;
      }
      this.selectedVideo = resolvedPath;
      this.uploadHandler();
      //let media = mediafile[0];
      this.showAlert('Ошибка сохранения', '555');
      console.log(mediafile);
    },
    (error) => {
      console.log('Error', error);
    }
    // mediafile: MediaFile[] => console.log(mediafile),
    // error => console.log('Something went wrong')
    );
  }

  async uploadVideo2() {
    
    var filename = 'tytwyetywqugjabjmzsB';
    var url = 'https://example.com.au/auth/api/videos/upload'
    var options: FileUploadOptions = {
     fileName: filename,
     fileKey: "video",
     mimeType: "video/mp4",
      headers: {
        'Authorization' : 'Bearer'
      }
    }
  //  this.videoFileUpload = this.transfer.create();
  //  this.isUploading = true;
  //  this.videoFileUpload.upload(this.selectedVideo, url, options)
  //    .then((data)=>{
  //      this.isUploading = false;
  //      this.uploadPercent = 0;
  //      return JSON.parse(data.response);
  //    })
  //    .then((data) => {
  //      this.uploadedVideo = data.url;
  //      console.log('Successful upload')
  //    })
  //    .catch((err)=>{
  //      this.isUploading = false;
  //      this.uploadPercent = 0;
  //      console.log('Unsuccessful upload')
  //    });
  //  this.videoFileUpload.onProgress((data) => {
  //    this.uploadPercent = Math.round((data.loaded/data.total) * 100);
  //  });
 }

  uploadHandler() {
    this.fileTransfer = this.transfer.create();
    var filename = 'tytwyetywqugjabjmzsB';
      var url = 'https://willdo.com.ua/p/api/model/k2users/event/upload'
    var options: FileUploadOptions = {
      fileName: filename,
      fileKey: "video",
      mimeType: "video/mp4",
      headers: {}
    }

    this.fileTransfer.upload(this.selectedVideo, url, options).then((res) => {
        console.log("file uploaded successfully.", res)
        //this.uploaded = true;
        this.showAlert('Загрузка завершена:', '');
      }).catch((error) => {
        //here logging an error. 
        //this.showAlert('upload failed:', JSON.stringify(error));
        console.log('upload failed: ' + JSON.stringify(error));
    })
  }
 

  stopRecord() {
    this.mediaRecorder.stop();
    this.mediaRecorder = null;
    this.captureElement.nativeElement.srcObject = null;
    this.isRecording = false;
  }

  // async play(video) {
  //   // Get the video as base64 data
  //   const realUrl = await this.videoService.getVideoUrl(video);
  //   //console.log(realUrl);
  //   // Show the player fullscreen
  //   await this.videoPlayer.initPlayer({
  //     mode: 'fullscreen',
  //     url: realUrl,
  //     playerId: 'fullscreen',
  //     componentTag: 'app-home'
  //   });    
  // }
}

