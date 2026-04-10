import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
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
export class HomeComponent {
  private router = inject(Router);

  navigateTo(ruta: string) {
    this.router.navigate([ruta]);
  }
}