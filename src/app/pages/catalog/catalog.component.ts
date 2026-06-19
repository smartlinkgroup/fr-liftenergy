import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'] 
})
export class CatalogComponent {
  
  
  products = [
    {
      id: 1,
      name: 'Variador de Frecuencia 15HP',
      description: 'Controlador de velocidad trifásico ideal para sistemas de bombeo industrial.',
      price: 450.00,
      image: 'assets/img/variador.webp' 
    },
    {
      id: 2,
      name: 'Cable de Potencia Subacuático',
      description: 'Rollo de 100m. Resistente a altas presiones y entornos corrosivos.',
      price: 1200.00,
      image: 'assets/img/cable.webp'
    },
    {
      id: 3,
      name: 'Controlador Lógico Programable (PLC)',
      description: 'Módulo de automatización avanzada con múltiples entradas y salidas analógicas.',
      price: 850.50,
      image: 'assets/img/plc.webp'
    },
    {
      id: 4,
      name: 'Sensor de Presión de Fondo',
      description: 'Transmisor de presión de alta precisión para telemetría en tiempo real.',
      price: 320.00,
      image: 'assets/img/sensor.webp'
    }
  ];

  addToCart(product: any) {
    console.log('Agregado al carrito:', product.name);
  }
}