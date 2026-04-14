import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// 1. IMPORTA EL COMPONENTE DE ENERGÍA
// Verifica que la ruta sea la correcta (subiendo dos niveles a components)
import { EnergyGridComponent } from '../../components/energy-grid/energy-grid';

@Component({
  selector: 'app-contact',
  standalone: true,
  // 2. AGREGALOS AL ARRAY DE IMPORTS
  imports: [
    CommonModule,
    EnergyGridComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  
  onSubmit() {
    console.log('Formulario enviado');
  }
}