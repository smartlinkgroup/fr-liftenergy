import { Component, AfterViewInit, ElementRef, inject } from '@angular/core';
import { StaffCardComponent } from '../../components/staff-card/staff-card.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [StaffCardComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements AfterViewInit {
  private el = inject(ElementRef);

 ngAfterViewInit() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Cuando entra en pantalla: añadimos la clase
        entry.target.classList.add('visible');
      } else {
        // Opcional: Cuando sale de pantalla: quitamos la clase 
        // Esto permite que la animación se repita al volver a pasar
        entry.target.classList.remove('visible');
      }
    });
  }, { 
    threshold: 0.15 // Gatilla cuando se ve el 15% del elemento
  });

  const elements = this.el.nativeElement.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  elements.forEach((el: HTMLElement) => observer.observe(el));
}
}