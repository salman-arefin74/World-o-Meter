import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-menu',
  templateUrl: './summary-menu.component.html',
  styleUrls: ['./summary-menu.component.css']
})
export class SummaryMenuComponent implements OnInit {

  constructor() { }
  currentDate = new Date();

  ngOnInit(): void {
  }

}
