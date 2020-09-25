export class SummmaryCases{
    public activeInfected : number;
    public activeMild : number;
    public activeSerious : number;

    public outcomeClosed : number;
    public recovered : number;
    public deaths : number;

    constructor(activeInfected: number, activeMild: number, activeSerious: number,
        outcomeClosed: number, recovered: number, deaths: number){
        this.activeInfected = activeInfected;
        this.activeMild = activeMild;
        this.activeSerious = activeSerious;
        this.outcomeClosed = outcomeClosed;
        this.recovered = recovered;
        this.deaths = deaths;
    }
}