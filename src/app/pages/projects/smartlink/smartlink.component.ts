import { Component, inject } from '@angular/core'; // Asegúrate de tener inject si usas el router
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// 1. IMPORTA EL COMPONENTE DE ENERGÍA
// Revisa que la ruta sea correcta según tu carpetas
import { EnergyGridComponent } from '../../../components/energy-grid/energy-grid'; 

@Component({
  selector: 'app-smartlink',
  standalone: true,
  // 2. AÑÁDELO AQUÍ EN EL ARRAY DE IMPORTS
  imports: [
    CommonModule, 
    EnergyGridComponent
  ],
  templateUrl: './smartlink.component.html',
  styleUrl: './smartlink.component.css'
})
export class SmartlinkComponent {
  private router = inject(Router);

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}