import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  // Inyectamos el router de forma sencilla
  constructor(private router: Router) {}

  // Esta función es la que tus botones del HTML van a llamar
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}