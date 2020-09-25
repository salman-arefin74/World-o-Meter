import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncubationComponent } from './incubation.component';

describe('IncubationComponent', () => {
  let component: IncubationComponent;
  let fixture: ComponentFixture<IncubationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncubationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncubationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
