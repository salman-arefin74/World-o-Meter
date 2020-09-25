import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryCasesComponent } from './summary-cases.component';

describe('SummaryCasesComponent', () => {
  let component: SummaryCasesComponent;
  let fixture: ComponentFixture<SummaryCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
