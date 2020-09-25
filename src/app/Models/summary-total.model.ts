export class SummmaryTotal{
    public totalCases : number;
    public deathCases : number;
    public recoveredCases : number;

    constructor(totalCases: number, deathCases: number, recoveredCases: number){
        this.totalCases = totalCases;
        this.deathCases = deathCases;
        this.recoveredCases = recoveredCases;
    }
}