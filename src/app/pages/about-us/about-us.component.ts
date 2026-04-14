import { Component, AfterViewInit, ElementRef, inject } from '@angular/core';
import { StaffCardComponent } from '../../components/staff-card/staff-card.component';
import { EnergyGridComponent } from '../../components/energy-grid/energy-grid';

@Component({
  selector: 'app-about-us',
  standalone: true,
  // 2. LO AGREGAMOS A LA LISTA DE IMPORTS
  imports: [StaffCardComponent, EnergyGridComponent],
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