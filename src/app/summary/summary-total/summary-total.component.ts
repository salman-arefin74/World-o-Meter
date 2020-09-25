import { Component, OnInit } from '@angular/core';
import { SummmaryTotal } from 'src/app/Models/summary-total.model';
import { SummaryTotalService } from 'src/app/Services/summary-total.service';

@Component({
  selector: 'app-summary-total',
  templateUrl: './summary-total.component.html',
  styleUrls: ['./summary-total.component.css']
})
export class SummaryTotalComponent implements OnInit {

  summaryTotal : SummmaryTotal[];
  constructor(private summaryTotalService : SummaryTotalService) { }

  ngOnInit(){
    this.summaryTotal = this.summaryTotalService.getSummaryTotal();
  }

}
