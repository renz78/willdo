import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {

  @Input() rating: string;

  

  constructor(private navCtrl: NavController) {  }

  ngOnInit() {
    console.log(this.rating);
  }
  gotoSharePage(): void{
    this.navCtrl.navigateForward('tabs/tab2');
  }
  rate(){
    console.log('rate');
  }
}
