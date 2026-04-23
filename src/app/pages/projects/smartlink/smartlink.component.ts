import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router'; 
import { EnergyGridComponent } from '../../../components/energy-grid/energy-grid'; 

@Component({
  selector: 'app-smartlink',
  standalone: true,
  imports: [
    CommonModule, 
    TranslateModule, 
    RouterLink, 
    EnergyGridComponent
  ], 
  templateUrl: './smartlink.component.html',
  styleUrl: './smartlink.component.css'
})
export class SmartlinkComponent {
  // Tu lógica actual...
}