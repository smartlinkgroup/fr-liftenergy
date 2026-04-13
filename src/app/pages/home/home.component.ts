import { Component, inject, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

// IMPORTAMOS LAS SECCIONES
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactComponent } from '../contact/contact.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutUsComponent, 
    ContactComponent, 
    ProjectsComponent, 
    ServicesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  private router = inject(Router);
  
  // Variable para mostrar/ocultar el botón de "Back to Top"
  showScrollButton = false;

  // Seleccionamos el video del HTML usando la referencia #bgVideo
  @ViewChild('bgVideo') videoElement!: ElementRef<HTMLVideoElement>;

  // Escuchamos el evento de scroll en la ventana del navegador
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const yOffset = window.pageYOffset || document.documentElement.scrollTop;
    // El botón aparecerá cuando el usuario baje más de 500 píxeles
    this.showScrollButton = yOffset > 500;
  }

  // Función para volver al inicio suavemente
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Esta función se ejecuta justo cuando el diseño termina de cargar
  ngAfterViewInit() {
    if (this.videoElement) {
      const video = this.videoElement.nativeElement;
      
      // Aseguramos silencio total y autoplay
      video.muted = true;
      video.volume = 0;
      
      video.play().catch(error => {
        console.log("El navegador bloqueó el inicio, reintentando...", error);
        setTimeout(() => video.play(), 100);
      });
    }
  }

  // Función para navegar entre páginas o secciones
  navigateTo(ruta: string) {
    this.router.navigate([ruta]);
  }
}