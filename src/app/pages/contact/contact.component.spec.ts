import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

import { ContactComponent } from './contact.component';
import { environment } from '../../../environments/environment';

class MockTranslateService {
  readonly onLangChange = new Subject<{ lang: string; translations: object }>();

  getCurrentLang() {
    return 'en';
  }

  getFallbackLang() {
    return 'en';
  }
}

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [{ provide: TranslateService, useClass: MockTranslateService }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should build vacancies link from environment config', () => {
    expect(component.vacanciesHref).toBe(`${environment.vacanciesUrl}?lang=en`);
  });
});
