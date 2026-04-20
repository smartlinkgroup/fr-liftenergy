import { Component, AfterViewInit, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // 🌟 Importante
import { StaffCardComponent } from '../../components/staff-card/staff-card.component';
import { EnergyGridComponent } from '../../components/energy-grid/energy-grid';
import { ScrollGuideComponent } from '../../components/scroll-guide/scroll-guide';
import { TranslateModule } from '@ngx-translate/core'; // 🌟 Importante

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    CommonModule, 
    StaffCardComponent, 
    EnergyGridComponent, 
    ScrollGuideComponent, 
    TranslateModule 
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements AfterViewInit {
  private el = inject(ElementRef);

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { 
      threshold: 0.15 
    });

    const elements = this.el.nativeElement.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements.forEach((el: HTMLElement) => observer.observe(el));
  }
}