import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chooseworker',
  templateUrl: './chooseworker.page.html',
  styleUrls: ['./chooseworker.page.scss'],
})
export class ChooseworkerPage implements OnInit {
  pagename: any = ' Выбор специалиста';
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  gotoSharePage(): void{
    this.navCtrl.navigateForward('tabs/share');
  }

}
