import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryMenuComponent } from './summary-menu.component';

describe('SummaryMenuComponent', () => {
  let component: SummaryMenuComponent;
  let fixture: ComponentFixture<SummaryMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
