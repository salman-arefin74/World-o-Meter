import { Component, OnInit } from '@angular/core';
import { SummmaryCases } from 'src/app/Models/summary-cases.model';
import { SummaryCasesService } from 'src/app/Services/summary-cases.service';

@Component({
  selector: 'app-summary-cases',
  templateUrl: './summary-cases.component.html',
  styleUrls: ['./summary-cases.component.css']
})
export class SummaryCasesComponent implements OnInit {

  summaryCases : SummmaryCases[];
  constructor(private summaryCaseService : SummaryCasesService) { }

  ngOnInit(){
    this.summaryCases = this.summaryCaseService.getSummaryCases();
  }

}
