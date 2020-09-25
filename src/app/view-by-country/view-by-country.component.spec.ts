import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewByCountryComponent } from './view-by-country.component';

describe('ViewByCountryComponent', () => {
  let component: ViewByCountryComponent;
  let fixture: ComponentFixture<ViewByCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewByCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
