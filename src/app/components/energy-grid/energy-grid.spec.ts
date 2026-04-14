import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyGrid } from './energy-grid';

describe('EnergyGrid', () => {
  let component: EnergyGrid;
  let fixture: ComponentFixture<EnergyGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnergyGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergyGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
