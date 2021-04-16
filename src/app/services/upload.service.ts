import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable, from, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  image;
  filepath: any = '';
  postData: any;
  base64: any;
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

  upload(image){
    let  url = 'https://willdo.com.ua/p/api/model/k2users/event/upload';
    const date = new Date().valueOf();
    this.image = image;
    // Replace extension according to your media type
    const imageName = date+ '.jpeg';
    // call method that creates a blob from dataUri
    const imageFile = this.dataURItoBlob(this.image.changingThisBreaksApplicationSecurity, imageName);
    //const imageFile = new File([imageBlob], imageName, { type: 'image/jpeg' })
    console.log(imageFile);
    let postData = new FormData();
    postData.append('file', imageFile);
    if(this.plt.is('capacitor') || this.plt.is('cordova')){
      let postData = {
        "base64_string": this.image.changingThisBreaksApplicationSecurity,
      }
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
    
    
  }

  uploadVideo(bs64){
    console.log(bs64)

    let  url = 'https://willdo.com.ua/p/api/model/k2users/event/upload';
   
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
  

  dataURItoBlob(dataURI, filename) {
    let arr = dataURI.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type: mime});
  }
}