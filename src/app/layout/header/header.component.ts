import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public menu: boolean = false;
  private router = inject(Router);

  // Nueva variable para controlar el efecto de vidrio
  public isScrolled: boolean = false;

  // Escuchamos el scroll para activar el efecto visual
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Si el usuario baja más de 50px, activamos el estado 'scrolled'
    this.isScrolled = window.pageYOffset > 50;
  }

  showMenu() {
    this.menu = !this.menu;
  }

  // Mantenemos tu lógica de scroll a secciones
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
        // Ajustamos un poco el scroll para que no tape el título si el header es fijo
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