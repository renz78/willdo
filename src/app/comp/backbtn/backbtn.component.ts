import { Component, OnInit, Input } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-backbtn',
  templateUrl: './backbtn.component.html',
  styleUrls: ['./backbtn.component.scss'],
})
export class BackbtnComponent implements OnInit {
  @Input() userName: string;
  @Input() pagename: string;
  @Input() userAge: number;
  constructor(private location: Location) { }

  ngOnInit() {}
  myBackButton(){
    this.location.back();
  }
}
