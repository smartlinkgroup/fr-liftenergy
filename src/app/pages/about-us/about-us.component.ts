import { Component } from '@angular/core';
import { StaffCardComponent } from '../../components/staff-card/staff-card.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [StaffCardComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}