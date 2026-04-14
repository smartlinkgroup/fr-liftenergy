import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-energy-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './energy-grid.html', // Verifica si tu archivo es energy-grid.html o energy-grid.component.html
  styleUrl: './energy-grid.css'      // Verifica si es .css o .component.css
})
export class EnergyGridComponent {} // ESTA LÍNEA ES LA QUE IMPORTA