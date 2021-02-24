import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chooseworker-detail',
  templateUrl: './chooseworker-detail.page.html',
  styleUrls: ['./chooseworker-detail.page.scss'],
})
export class ChooseworkerDetailPage implements OnInit {

  constructor(private navCtrl: NavController) { }
  pagename: any = ' Выбор специалиста';
  ngOnInit() {
  }
  gotoSharePage(): void{
    this.navCtrl.navigateForward('tabs/share');
  }
}
