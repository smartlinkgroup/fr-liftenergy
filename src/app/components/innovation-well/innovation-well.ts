import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de tener esto

@Component({
  selector: 'app-innovation-well',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './innovation-well.html'
})
export class InnovationWellComponent {
  mouseX = 0;
  mouseY = 0;
  rotateX = 0;
  rotateY = 0;
  
  // NUEVA VARIABLE
  isExplored = false;

  onMouseMove(event: MouseEvent) {
    this.mouseX = (event.clientX - window.innerWidth / 2) / 40;
    this.mouseY = (event.clientY - window.innerHeight / 2) / 40;

    const cardX = event.clientX - window.innerWidth / 2;
    const cardY = event.clientY - window.innerHeight / 2;
    
    this.rotateY = cardX / 25;
    this.rotateX = (cardY / 25) * -1;
  }

  // FUNCIÓN PARA EL BOTÓN
  exploreFuture() {
    this.isExplored = true;
  }
}