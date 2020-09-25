import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathRateComponent } from './death-rate.component';

describe('DeathRateComponent', () => {
  let component: DeathRateComponent;
  let fixture: ComponentFixture<DeathRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeathRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
