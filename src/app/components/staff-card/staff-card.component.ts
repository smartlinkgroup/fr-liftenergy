import { Component, Input } from '@angular/core'; // 🌟 Asegúrate de que diga 'Input' aquí
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-staff-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './staff-card.component.html',
  styleUrl: './staff-card.component.css'
})
export class StaffCardComponent {
  @Input() nombre: string = '';
  @Input() cargo: string = '';     
  @Input() profesion: string = '';  
  @Input() imagen: string = '';
}