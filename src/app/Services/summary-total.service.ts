import { Injectable } from '@angular/core';
import { SummmaryTotal } from '../Models/summary-total.model';

@Injectable()
export class SummaryTotalService{
    private summaryTotal : SummmaryTotal[] = [
        new SummmaryTotal(28333862, 913988, 20347150)
    ];

    getSummaryTotal(){
        return this.summaryTotal.slice();
    }
}