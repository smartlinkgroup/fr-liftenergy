import { Component, inject, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 

// IMPORTAMOS LAS SECCIONES EXISTENTES
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactComponent } from '../contact/contact.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ServicesComponent } from '../services/services.component';

// IMPORTAMOS LOS COMPONENTES
import { ScrollGuideComponent } from '../../components/scroll-guide/scroll-guide';
import { InnovationWellComponent } from '../../components/innovation-well/innovation-well';
import { EnergyGridComponent } from '../../components/energy-grid/energy-grid';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
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

  @ViewChild('bgVideo') videoElement!: ElementRef<HTMLVideoElement>;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Detectamos el scroll para mostrar/ocultar el botón "To Top"
    const yOffset = window.pageYOffset || document.documentElement.scrollTop;
    this.showScrollButton = yOffset > 500;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  ngAfterViewInit() {
    // Forzamos la reproducción del video hero
    if (this.videoElement) {
      const video = this.videoElement.nativeElement;
      video.muted = true;
      video.volume = 0;
      
      video.play().catch(error => {
        console.log("El navegador bloqueó el inicio, reintentando...", error);
        setTimeout(() => video.play(), 100);
      });
    }
  }

  navigateTo(ruta: string) {
    this.router.navigate([ruta]);
  }

  // Método para el scroll suave a IDs específicos (Welcome, Services, etc)
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}