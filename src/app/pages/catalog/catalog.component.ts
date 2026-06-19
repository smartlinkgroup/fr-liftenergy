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
      longDescription: 'Este variador de frecuencia de 15HP ofrece un control de torque excepcional y eficiencia energética para motores trifásicos. Incluye panel de control intuitivo, protección contra sobrecargas y cortocircuitos, y es fácilmente integrable mediante protocolos de comunicación industrial como Modbus. Su carcasa robusta lo hace ideal para entornos de campo exigentes en la industria petrolera.',
      price: 450.00,
      image: 'variador.png' 
    },
    {
      id: 2,
      name: 'Cable de Potencia Subacuático',
      description: 'Rollo de 100m. Resistente a altas presiones y entornos corrosivos.',
      longDescription: 'Rollo de 100 metros de cable de potencia diseñado específicamente para inmersión profunda. Su recubrimiento especial de polímeros reforzados garantiza cero filtraciones y resistencia extrema a elementos corrosivos comunes en pozos. Soporta altas tensiones sin degradación de la señal o potencia transferida.',
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
    const phoneNumber = '17867251004'; 
    let message = '¡Hola! Vengo de la web y quiero generar una orden de compra para estos equipos:%0A%0A';

    this.cart.forEach(item => {
      message += `- ${item.quantity}x ${item.name} ($${item.price})%0A`;
    });

    message += `%0A*Total estimado:* $${this.cartTotal}`;

    const whatsappUrl = `https://w.app/liftenergygroup?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }
}