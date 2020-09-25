export class CountryView{
    public country : string;
    public totalCases : number;
    public newCases : number;
    public totalDeaths : number;
    public newDeaths : number;
    public totalRecovered : number;
    public activeCases : number;
    

    constructor(country: string, totalCases: number, newCases: number,
        totalDeaths: number, newDeaths: number, totalRecovered: number, activeCases: number){
        this.country = country;
        this.totalCases = totalCases;
        this.newCases = newCases;
        this.totalDeaths = totalDeaths;
        this.newDeaths = newDeaths;
        this.totalRecovered = totalRecovered;
        this.activeCases = activeCases;
    }
}

