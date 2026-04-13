import { Component, inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
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

  // Seleccionamos el video del HTML usando la referencia #bgVideo
  @ViewChild('bgVideo') videoElement!: ElementRef<HTMLVideoElement>;

  // Esta función se ejecuta justo cuando el diseño termina de cargar
  ngAfterViewInit() {
    const video = this.videoElement.nativeElement;
    
    // Aseguramos que esté silenciado y tratamos de darle Play
    video.muted = true;
    video.play().catch(error => {
      console.log("El navegador bloqueó el inicio, reintentando...", error);
      // Si el navegador se puso terco, esperamos un milisegundo y volvemos a intentar
      setTimeout(() => video.play(), 100);
    });
  }

  // Función para navegar
  navigateTo(ruta: string) {
    this.router.navigate([ruta]);
  }
}