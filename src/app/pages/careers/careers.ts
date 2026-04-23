import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { EnergyGridComponent } from '../../components/energy-grid/energy-grid';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule, EnergyGridComponent],
  templateUrl: './careers.html',
  styleUrl: './careers.css'
})
export class CareersComponent {
  isModalOpen = false;
  selectedJob = '';
  formSubmitted = false;
  
  formData = {
    name: '',
    email: '',
    phone: ''
  };

  openModal(jobTitle: string) {
    this.selectedJob = jobTitle;
    this.isModalOpen = true;
    if (typeof document !== 'undefined') document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    this.formSubmitted = false; // Resetear errores al cerrar
    if (typeof document !== 'undefined') document.body.style.overflow = 'auto';
  }

  submitForm(isValid: boolean | null) {
    this.formSubmitted = true;
    
    if (isValid) {
      console.log('Datos enviados:', this.formData);
      alert('¡Postulación enviada con éxito!');
      this.closeModal();
      // Aquí iría tu lógica de backend después
    }
  }
}