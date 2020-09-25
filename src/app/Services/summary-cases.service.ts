import { Injectable } from '@angular/core';
import { SummmaryCases } from '../Models/summary-cases.model';

@Injectable()
export class SummaryCasesService{
    private summaryCases : SummmaryCases[] = [
        new SummmaryCases(7072724, 7011982, 60742, 21261138,20347150, 913988)
    ];

    getSummaryCases(){
        return this.summaryCases.slice();
    }
}