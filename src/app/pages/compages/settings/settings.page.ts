import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  name:string="Tom";
  age:number = 24;
  pagename: any = ' Инструкция по оплате';
  constructor(private location: Location) { }
  
  ngOnInit() {
  }
}
