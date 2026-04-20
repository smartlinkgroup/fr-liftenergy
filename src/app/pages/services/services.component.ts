import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core'; 

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, TranslateModule], 
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  private router = inject(Router);

  goToRoutes(ruta: string) {
    this.router.navigate([ruta]);
  }
}