import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  
  // Ahora usamos las llaves de traducción en lugar del texto fijo
  products = [
    {
      id: 1,
      name: 'PRODUCTS.VARIADOR_NAME',
      description: 'PRODUCTS.VARIADOR_DESC',
      longDescription: 'PRODUCTS.VARIADOR_LONG',
      price: 450.00,
      image: 'variador.png' 
    },
    {
      id: 2,
      name: 'PRODUCTS.CABLE_NAME',
      description: 'PRODUCTS.CABLE_DESC',
      longDescription: 'PRODUCTS.CABLE_LONG',
      price: 1200.00,
      image: 'cable.png'
    }
  ];

  selectedProduct: any = null;

  openDetails(product: any) {
    this.selectedProduct = product;
  }

  closeDetails() {
    this.selectedProduct = null;
  }

  // --- LÓGICA DEL CARRITO ---
  cart: any[] = [];
  isCartOpen = false;

  get cartTotal() {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  get cartCount() {
    return this.cart.reduce((count, item) => count + item.quantity, 0);
  }

  addToCart(product: any) {
    const existingItem = this.cart.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    this.isCartOpen = true; 
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter(item => item.id !== productId);
  }

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }

  checkoutWhatsapp() {
    let message = '¡Hola! Vengo de la web y quiero generar una orden de compra para estos equipos:%0A%0A';

    this.cart.forEach(item => {
      // Usamos el ID del equipo para no mandar la llave de traducción técnica por WhatsApp
      message += `- ${item.quantity}x Equipo ID: ${item.id} ($${item.price})%0A`;
    });

    message += `%0A*Total estimado:* $${this.cartTotal}`;

    // Usando tu link directo
    const whatsappUrl = `https://w.app/liftenergygroup?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }
}