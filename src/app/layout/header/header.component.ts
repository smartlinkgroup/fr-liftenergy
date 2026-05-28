import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  // 🌟 AGREGADO: TranslateModule en los imports
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public menu: boolean = false;
  private router = inject(Router);

  // 🌟 AGREGADO: Inyectamos el servicio y definimos el idioma actual
  public translate = inject(TranslateService);
  public currentLang: string = 'en';

  // Nueva variable para controlar el efecto de vidrio
  public isScrolled: boolean = false;

  // 🌟 AGREGADO: Variable para controlar el modo oscuro (inicia en true)
  public isDarkMode: boolean = true;

  // 🌟 AGREGADO: Constructor para inicializar el idioma por defecto
  constructor() {
    this.translate.use(this.currentLang);
  }

  // 🌟 AGREGADO: Función para cambiar el idioma al hacer clic
  switchLanguage(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
  }

  // 🌟 AGREGADO: Función para alternar el modo claro/oscuro
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  // Escuchamos el scroll para activar el efecto visual
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Si el usuario baja más de 50px, activamos el estado 'scrolled'
    this.isScrolled = window.pageYOffset > 50;
  }

  showMenu() {
    this.menu = !this.menu;
  }

  // Mantenemos lógica de scroll a secciones
  scrollToSection(sectionId: string) {
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        this.executeScroll(sectionId);
      });
    } else {
      this.executeScroll(sectionId);
    }
    this.menu = false; 
  }

  private executeScroll(id: string) {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
      
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  }
}