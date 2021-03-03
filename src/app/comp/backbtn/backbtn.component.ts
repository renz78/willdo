import { Component, OnInit, Input } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-backbtn',
  templateUrl: './backbtn.component.html',
  styleUrls: ['./backbtn.component.scss'],
})
export class BackbtnComponent implements OnInit {
  @Input() userName: string;
  @Input() pagename: string;
  @Input() userAge: number;
  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {}
  myBackButton(){
    this.location.back();
  }
  goToShare() {
    this.router.navigateByUrl('/tabs/share');
  }
}
