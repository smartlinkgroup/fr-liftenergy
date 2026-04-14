import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationWell } from './innovation-well';

describe('InnovationWell', () => {
  let component: InnovationWell;
  let fixture: ComponentFixture<InnovationWell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnovationWell]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnovationWell);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
