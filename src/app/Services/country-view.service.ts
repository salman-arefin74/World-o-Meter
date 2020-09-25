import { Injectable } from '@angular/core';
import { CountryView } from '../Models/country-view.model';

@Injectable()
export class CountryViewService{
    private countryViews : CountryView[] = [
        new CountryView('USA', 7185471, 45355, 207538, 942, 4437575, 2540358),
        new CountryView('India', 5183616, 2156, 646848, 858, 464684, 361435),
        new CountryView('Brazil', 7252471, 52355, 134684, 585, 364168, 64644),
        new CountryView('Russia', 7451471, 41255, 225648, 612, 446275, 22558),
        new CountryView('Colombia', 7185471, 45355, 207538, 942, 4437575, 2540358),
        new CountryView('Peru', 4525471, 12455, 205893, 42, 131252575, 1452358),
        new CountryView('Mexico', 415471, 45355, 207538, 942, 4437575, 2540358),
        new CountryView('Spain', 9315471, 135155, 413538, 618, 123575, 1540358),
        new CountryView('Argentina', 7187942, 45143, 207678, 241, 7136575, 145258),
        new CountryView('South Africa', 7174231, 74355, 145238, 625, 464675, 263468),
        new CountryView('France', 6314671, 899764, 12456, 2, 2585575, 64684),
        new CountryView('Chile', 7526871, 6516, 231468, 412, 166475, 34164658),
        new CountryView('Iran', 7185471, 45355, 207538, 942, 4437575, 2540358),
        new CountryView('UK', 2341684, 43131, 6416841, 475, 646846, 6168168),
        new CountryView('Bangladesh', 68466, 21616, 55513, 842, 6416646, 6341658),
    ];

    getCountryViews(){
        return this.countryViews.slice();
    }
}