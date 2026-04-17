import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-scroll-guide',
  standalone: true,
  templateUrl: './scroll-guide.html',
  styleUrl: './scroll-guide.css'
})
export class ScrollGuideComponent {
  @ViewChild('guidePath') path!: ElementRef<SVGPathElement>;
  

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollElement = document.documentElement;
    const scrollTotal = scrollElement.scrollHeight - scrollElement.clientHeight;
    
    if (scrollTotal <= 0) return;

    const scrollPercent = scrollElement.scrollTop / scrollTotal;

    // AHORA SOLO VERIFICAMOS EL PATH
    if (this.path) {
      const pathEl = this.path.nativeElement;

      // Dibujamos el trazo del "gusanito"
      pathEl.style.strokeDashoffset = (1 - scrollPercent).toString();

  }
  }
}
