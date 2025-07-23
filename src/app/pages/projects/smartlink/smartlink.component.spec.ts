import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartlinkComponent } from './smartlink.component';

describe('SmartlinkComponent', () => {
  let component: SmartlinkComponent;
  let fixture: ComponentFixture<SmartlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartlinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
