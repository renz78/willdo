import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chaticon',
  templateUrl: './chaticon.component.html',
  styleUrls: ['./chaticon.component.scss'],
})
export class ChaticonComponent implements OnInit {
  colmess: any = '3';
  condition: boolean=true;
  constructor() { }

  ngOnInit() {}

}
