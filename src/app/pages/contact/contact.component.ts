import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { EnergyGridComponent } from '../../components/energy-grid/energy-grid';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    EnergyGridComponent,
    TranslateModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  private readonly translate = inject(TranslateService);
  private readonly destroyRef = inject(DestroyRef);

  private readonly vacanciesBaseUrl = environment.vacanciesUrl;
  public vacanciesHref = this.buildVacanciesUrl(this.vacanciesBaseUrl, this.getActiveLang());

  ngOnInit(): void {
    this.translate.onLangChange
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(({ lang }) => {
        this.vacanciesHref = this.buildVacanciesUrl(this.vacanciesBaseUrl, this.normalizeLang(lang));
      });
  }

  private getActiveLang(): 'en' | 'es' {
    return this.normalizeLang(
      this.translate.getCurrentLang() ?? this.translate.getFallbackLang() ?? 'en'
    );
  }

  private normalizeLang(lang: string | null | undefined): 'en' | 'es' {
    return lang === 'es' ? 'es' : 'en';
  }

  private buildVacanciesUrl(baseUrl: string, lang: 'en' | 'es'): string {
    try {
      const url = new URL(baseUrl, window.location.origin);
      url.searchParams.set('lang', lang);
      return url.toString();
    } catch {
      return `${environment.vacanciesUrl}?lang=${lang}`;
    }
  }
}