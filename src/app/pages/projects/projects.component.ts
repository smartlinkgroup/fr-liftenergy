import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule], 
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  private router = inject(Router);

  currentFilter: string = 'all';

  // Función para cambiar el filtro
  setFilter(filter: string) {
    this.currentFilter = filter;
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}