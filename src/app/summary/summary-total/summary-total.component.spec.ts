import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTotalComponent } from './summary-total.component';

describe('SummaryTotalComponent', () => {
  let component: SummaryTotalComponent;
  let fixture: ComponentFixture<SummaryTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
