import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
 selector: 'app-details',
 templateUrl: './details.page.html',
 styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

 myId = null;
  constructor(private activatedRoute: ActivatedRoute) { }

 ngOnInit() {
   this.myId = this.activatedRoute.snapshot.paramMap.get('myid');
 }

}