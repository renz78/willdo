import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  isshow: any = 0;
  constructor(public router: Router) {
  }

  ngOnInit() {
    this.isshow++;
    if (this.isshow == 1) {
      setTimeout(() => {
        this.router.navigateByUrl('tabs/first');
      }, 7000);
    } else {
      this.router.navigateByUrl('tabs/second');
    }
  }
}
