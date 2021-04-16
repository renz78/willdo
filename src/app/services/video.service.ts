import { Injectable } from '@angular/core';
import { Plugins, FilesystemDirectory } from '@capacitor/core';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
const { Filesystem, Storage } = Plugins;
 
@Injectable({
  providedIn: 'root'
})
export class VideoService {
  public videos = [];
  private VIDEOS_KEY: string = 'videos';
  public curentvideo: any = '';
 
  constructor(private alertCtrl: AlertController,) {}
 
  // async loadVideos() {
  //   const videoList = await Storage.get({ key: this.VIDEOS_KEY });
  //   this.videos = JSON.parse(videoList.value) || [];
  //   return this.videos;
  // }
  async showAlert(header: string, message: string){
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
  async storeVideo(blob) {
    const fileName = new Date().getTime() + '.mp4';
    //this.showAlert('Ошибка сохраненияsave', blob);
    const base64Data = await this.convertBlobToBase64(blob) as string;
    this.showAlert('Ошибка сохраненияsave2', base64Data);
    this.curentvideo = base64Data;
    // const savedFile = await Filesystem.writeFile({
    //   path: fileName,
    //   data: base64Data,
    //   directory: FilesystemDirectory.Data
    // });
 
    // // Add file to local array
    // this.videos.unshift(savedFile.uri);
 
    // // Write information to storage
    // return Storage.set({
    //   key: this.VIDEOS_KEY,
    //   value: JSON.stringify(this.videos)
    // });
  }
 
  // Helper function
  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    this.showAlert('Ошибка сохраненияconvert', 'test');
    reader.readAsDataURL(blob);
  });
 
  // Load video as base64 from url
  // async getVideoUrl(fullPath) {
  //   const path = fullPath.substr(fullPath.lastIndexOf('/') + 1);
  //   const file = await Filesystem.readFile({
  //     path: path,
  //     directory: FilesystemDirectory.Data
  //   });
  //   return `data:video/mp4;base64,${file.data}`;
  // }
}