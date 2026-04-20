import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core'; 
import { EnergyGridComponent } from '../../../components/energy-grid/energy-grid'; // 🌟 Ruta corregida

@Component({
  selector: 'app-smartlink',
  standalone: true,
  imports: [CommonModule, TranslateModule, EnergyGridComponent],
  templateUrl: './smartlink.component.html',
  styleUrl: './smartlink.component.css'
})
export class SmartlinkComponent { }