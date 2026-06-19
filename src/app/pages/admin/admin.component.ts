import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  isModalOpen = false;
  isEditing = false;
  
  currentProduct: any = { name: '', price: 0, description: '', image: 'variador.png' };

  products = [
    { id: 1, name: 'Variador de Frecuencia 15HP', price: 450.00, description: 'Controlador industrial de alta precisión', image: 'variador.png' },
    { id: 2, name: 'Cable de Potencia Subacuático', price: 1200.00, description: 'Rollo de 100m alta presión', image: 'cable.png' }
  ];

  openAddModal() {
    this.isEditing = false;
    this.currentProduct = { name: '', price: 0, description: '', image: 'variador.png' };
    this.isModalOpen = true;
  }

  editProduct(product: any) {
    this.isEditing = true;
    this.currentProduct = { ...product };
    this.isModalOpen = true;
  }

  deleteProduct(id: number) {
    if(confirm('¿Eliminar este equipo definitivamente?')) {
      this.products = this.products.filter(p => p.id !== id);
    }
  }

  saveProduct() {
    if (this.isEditing) {
      const index = this.products.findIndex(p => p.id === this.currentProduct.id);
      this.products[index] = this.currentProduct;
    } else {
      this.currentProduct.id = Date.now();
      this.products.push(this.currentProduct);
    }
    this.isModalOpen = false;
  }
}