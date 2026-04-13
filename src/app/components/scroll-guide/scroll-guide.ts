import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-scroll-guide',
  standalone: true,
  templateUrl: './scroll-guide.html',
  styleUrl: './scroll-guide.css'
})
export class ScrollGuideComponent {
  @ViewChild('guidePath') path!: ElementRef<SVGPathElement>;
  @ViewChild('guidePoint') point!: ElementRef<SVGCircleElement>;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollElement = document.documentElement;
    const scrollTotal = scrollElement.scrollHeight - scrollElement.clientHeight;
    
    if (scrollTotal <= 0) return;

    const scrollPercent = scrollElement.scrollTop / scrollTotal;

    if (this.path && this.point) {
      const pathEl = this.path.nativeElement;
      const pointEl = this.point.nativeElement;

      // Dibujamos el trazo
      pathEl.style.strokeDashoffset = (1 - scrollPercent).toString();

      // Calculamos la posición exacta en la curva para el punto
      const pathLength = pathEl.getTotalLength();
      const currentPos = pathEl.getPointAtLength(pathLength * scrollPercent);

      // Movemos el punto de luz
      pointEl.setAttribute('cx', currentPos.x.toString());
      pointEl.setAttribute('cy', currentPos.y.toString());
    }
  }
}