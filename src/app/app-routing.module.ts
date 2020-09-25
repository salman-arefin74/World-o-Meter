import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeathRateComponent } from './summary/death-rate/death-rate.component';
import { GraphsComponent } from './summary/graphs/graphs.component';
import { IncubationComponent } from './summary/incubation/incubation.component';
import { NewsComponent } from './summary/news/news.component';
import { SummaryComponent } from './summary/summary.component';
import { SymptomsComponent } from './summary/symptoms/symptoms.component';
import { TransmissionComponent } from './summary/transmission/transmission.component';
import { ViewByCountryComponent } from './view-by-country/view-by-country.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/summary', pathMatch: 'full'},
  {path: 'summary', component: SummaryComponent, children:[
    {path: 'graphs', component: GraphsComponent},
    {path: 'death-rate', component: DeathRateComponent},
    {path: 'symptoms', component: SymptomsComponent},
    {path: 'incubation', component: IncubationComponent},
    {path: 'transmission', component: TransmissionComponent},
    {path: 'news', component: NewsComponent}
  ]},
  {path: 'view-by-country', component: ViewByCountryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
