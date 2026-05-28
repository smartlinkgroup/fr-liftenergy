import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { EnergyGridComponent } from '../../components/energy-grid/energy-grid';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

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
  private readonly http = inject(HttpClient);
  private readonly translate = inject(TranslateService);
  private readonly destroyRef = inject(DestroyRef);

  private vacanciesBaseUrl = 'http://localhost:3000/';
  public vacanciesHref = this.buildVacanciesUrl(this.vacanciesBaseUrl, this.getActiveLang());

  ngOnInit(): void {
    this.loadVacanciesUrl();

    this.translate.onLangChange
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(({ lang }) => {
        this.vacanciesHref = this.buildVacanciesUrl(this.vacanciesBaseUrl, this.normalizeLang(lang));
      });
  }

  private loadVacanciesUrl(): void {
    this.http
      .get('/.env', { responseType: 'text' })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (content) => {
          const envUrl = this.readEnvValue(content, 'VACANCIES_URL');

          if (envUrl) {
            this.vacanciesBaseUrl = envUrl;
          }

          this.vacanciesHref = this.buildVacanciesUrl(this.vacanciesBaseUrl, this.getActiveLang());
        },
        error: () => {
          this.vacanciesHref = this.buildVacanciesUrl(this.vacanciesBaseUrl, this.getActiveLang());
        }
      });
  }

  private readEnvValue(content: string, key: string): string | null {
    const envLine = content
      .split(/\r?\n/)
      .map((line) => line.trim())
      .find((line) => line.startsWith(`${key}=`));

    if (!envLine) {
      return null;
    }

    return envLine.slice(key.length + 1).trim().replace(/^['"]|['"]$/g, '');
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
      return `http://localhost:3000/?lang=${lang}`;
    }
  }
}