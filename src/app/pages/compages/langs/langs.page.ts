import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-langs',
  templateUrl: './langs.page.html',
  styleUrls: ['./langs.page.scss'],
})
export class LangsPage implements OnInit {
  pagename: any = ' Выбор языка';
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  gotoSharePage(): void{
    this.navCtrl.navigateForward('tabs/share');
  }
}
