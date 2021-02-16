import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profileisp',
  templateUrl: './profileisp.page.html',
  styleUrls: ['./profileisp.page.scss'],
})
export class ProfileispPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  gotoSharePage(): void{
    this.navCtrl.navigateForward('tabs/share');
  }
}
