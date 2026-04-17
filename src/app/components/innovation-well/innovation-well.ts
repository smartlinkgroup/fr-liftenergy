import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-innovation-well',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './innovation-well.html',
  styleUrl: './innovation-well.css' 
})
export class InnovationWellComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  slideInterval: any;

  // Tus 3 imágenes confirmadas
   slides = [

    { image: '/img/pozo.webp' },
    { image: '/img/pozito.webp' },
    { image: '/img/pozote.webp' }

  ];



  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  startAutoplay() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 6000); // Cambia suavemente cada 6 segundos
  }

  stopAutoplay() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}