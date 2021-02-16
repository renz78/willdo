import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-walletisp',
  templateUrl: './walletisp.page.html',
  styleUrls: ['./walletisp.page.scss'],
})
export class WalletispPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  gotoSharePage(): void{
    this.navCtrl.navigateForward('tabs/share');
  }
}
