import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollGuide } from './scroll-guide';

describe('ScrollGuide', () => {
  let component: ScrollGuide;
  let fixture: ComponentFixture<ScrollGuide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollGuide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollGuide);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
