import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-smartlink',
  imports: [],
  templateUrl: './smartlink.component.html',
  styleUrl: './smartlink.component.css'
})
export class SmartlinkComponent {
 private router = inject(Router)

  navigateTo(ruta:string){
    this.router.navigate([ruta]);
  }
}
