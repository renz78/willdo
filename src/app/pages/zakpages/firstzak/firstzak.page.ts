import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-firstzak',
  templateUrl: './firstzak.page.html',
  styleUrls: ['./firstzak.page.scss'],
})
export class FirstzakPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  gotoRegZakPage(): void{
    this.navCtrl.navigateForward('tabs/regisp');
  }
}
