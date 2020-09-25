import { Component, OnInit } from '@angular/core';
import { CountryView } from '../Models/country-view.model';
import { CountryViewService } from '../Services/country-view.service';

@Component({
  selector: 'app-view-by-country',
  templateUrl: './view-by-country.component.html',
  styleUrls: ['./view-by-country.component.css']
})
export class ViewByCountryComponent implements OnInit {

  countryViews : CountryView[];
  constructor(private countryViewService : CountryViewService) { }

  ngOnInit(){
    this.countryViews = this.countryViewService.getCountryViews();
  }

}
