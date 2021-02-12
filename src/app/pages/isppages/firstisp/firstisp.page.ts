import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-firstisp',
  templateUrl: './firstisp.page.html',
  styleUrls: ['./firstisp.page.scss'],
})
export class FirstispPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  gotoRegZakPage(): void{
    this.navCtrl.navigateForward('tabs/regisp');
  }
  gotoSharePage(): void{
    this.navCtrl.navigateForward('tabs/share');
  }
}
