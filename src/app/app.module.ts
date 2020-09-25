import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { HeaderComponent } from './header/header.component';
import { SummaryMenuComponent } from './summary/summary-menu/summary-menu.component';
import { SummaryTotalComponent } from './summary/summary-total/summary-total.component';
import { SummaryCasesComponent } from './summary/summary-cases/summary-cases.component';
import { ViewByCountryComponent } from './view-by-country/view-by-country.component';
import { GraphsComponent } from './summary/graphs/graphs.component';
import { DeathRateComponent } from './summary/death-rate/death-rate.component';
import { SymptomsComponent } from './summary/symptoms/symptoms.component';
import { IncubationComponent } from './summary/incubation/incubation.component';
import { TransmissionComponent } from './summary/transmission/transmission.component';
import { NewsComponent } from './summary/news/news.component';
import { SummaryTotalService } from './Services/summary-total.service';
import { SummaryCasesService } from './Services/summary-cases.service';
import { CountryViewService } from './Services/country-view.service';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    HeaderComponent,
    SummaryMenuComponent,
    SummaryTotalComponent,
    SummaryCasesComponent,
    ViewByCountryComponent,
    GraphsComponent,
    DeathRateComponent,
    SymptomsComponent,
    IncubationComponent,
    TransmissionComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SummaryTotalService, SummaryCasesService, CountryViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
