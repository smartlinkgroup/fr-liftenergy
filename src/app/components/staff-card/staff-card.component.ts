import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-staff-card',
  standalone: true,
  imports: [],
  templateUrl: './staff-card.component.html',
  styleUrl: './staff-card.component.css'
})
export class StaffCardComponent {
  @Input() nombre: string = '';
  @Input() cargo: string = '';
  @Input() profesion: string = '';
  @Input() imagen: string = '';
}