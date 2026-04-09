import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private router = inject(Router);

  // Esta función hace que tus botones funcionen
  navigateTo(ruta: string) {
    this.router.navigate([ruta]);
  }
}