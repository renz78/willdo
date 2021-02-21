import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goAnOtherPage(arg: number){
    if (arg === 1) {
      this.navCtrl.navigateForward('tabs/firstzak');
    } else {
      this.navCtrl.navigateForward('tabs/firstisp');
    }
  }

  gotoSharePage(): void{
    this.navCtrl.navigateForward('tabs/share');
  }
}
