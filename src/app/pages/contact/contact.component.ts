import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnergyGridComponent } from '../../components/energy-grid/energy-grid';
import { TranslateModule } from '@ngx-translate/core'; // 🌟 Importante

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule, 
    EnergyGridComponent, 
    TranslateModule 
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {}