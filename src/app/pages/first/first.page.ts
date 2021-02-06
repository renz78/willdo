import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

  constructor(private navCtrl: NavController) {
    
   }

  ngOnInit() {
  }

  gotoSecondPage(): void{
    this.navCtrl.navigateForward('second');
  }

  gotoSharePage(): void{
    this.navCtrl.navigateForward('second');
  }

}
