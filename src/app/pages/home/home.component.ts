import { Component, inject, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 

import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactComponent } from '../contact/contact.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ServicesComponent } from '../services/services.component';

import { ScrollGuideComponent } from '../../components/scroll-guide/scroll-guide';
import { InnovationWellComponent } from '../../components/innovation-well/innovation-well';
import { EnergyGridComponent } from '../../components/energy-grid/energy-grid';

import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule, 
    AboutUsComponent, 
    ContactComponent, 
    ProjectsComponent, 
    ServicesComponent,
    ScrollGuideComponent,
    InnovationWellComponent,
    EnergyGridComponent 
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  private router = inject(Router);
  
  showScrollButton = false;
  showCopiedMessage = false; // 🌟 Controla el mensaje de "Copiado"

  @ViewChild('bgVideo') videoElement!: ElementRef<HTMLVideoElement>;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const yOffset = window.pageYOffset || document.documentElement.scrollTop;
    this.showScrollButton = yOffset > 500;
  }

scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

  ngAfterViewInit() {
    if (this.videoElement) {
      const video = this.videoElement.nativeElement;
      video.muted = true;
      video.play().catch(() => setTimeout(() => video.play(), 100));
    }
  }

  navigateTo(ruta: string) {
    this.router.navigate([ruta]);
  }

  // 🌟 NUEVO MÉTODO PARA EMPLEO
  contactWork() {
    const email = 'info@lift.energy';
    
    // Intenta abrir el cliente de correo
    window.location.href = `mailto:${email}?subject=Career%20Inquiry%20-%20Lift%20Energy%20Group`;

    // Copia al portapapeles como respaldo
    navigator.clipboard.writeText(email).then(() => {
      this.showCopiedMessage = true;
      // Oculta el mensaje después de 2 segundos
      setTimeout(() => this.showCopiedMessage = false, 2000);
    });
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}