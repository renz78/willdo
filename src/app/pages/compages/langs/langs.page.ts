import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-langs',
  templateUrl: './langs.page.html',
  styleUrls: ['./langs.page.scss'],
})
export class LangsPage implements OnInit {
  pagename: any = ' Выбор языка';
  langid: any = '';
  isActive = 0;
  constructor(
    private navCtrl: NavController,
    private storage: Storage,
    ) { }

  ngOnInit() {
    
    
  }

  ionViewWillEnter() {
    this.removeLangClass();
    this.storage.get('langid').then( (val) => {
      this.langid = val;
      console.log(this.langid)
      let langs = document.getElementsByClassName(this.langid);
      for (var i = 0; i < langs.length; i++) {
        langs.item(i).classList.add("active");
      }
    });
  }
  gotoSharePage(): void{
    this.navCtrl.navigateForward('tabs/share');
  }

  chooseLang() {
    this.storage.set('langid', this.langid);
  }
  removeLangClass() {
    let langs = document.getElementsByClassName('lang');
    for (var i = 0; i < langs.length; i++) {
      langs.item(i).classList.remove("active");
    }
  }
  doActive(lang) {
    this.removeLangClass();
    const el = document.querySelector('.'+lang);
    el.className += ' active';
    this.langid = lang;
    //this.storage.set('langid', lang);
  }
}
