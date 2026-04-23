import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { EnergyGridComponent } from '../../components/energy-grid/energy-grid';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, TranslateModule, EnergyGridComponent],
  templateUrl: './careers.html',
  styleUrl: './careers.css'
})
export class CareersComponent {
  isModalOpen = false;
  selectedJob: any = null;

  vacantes = [
    {
      titulo: 'CAREERS.JOBS.SOFT.TITLE',
      ubicacion: 'CAREERS.JOBS.SOFT.LOC',
      descripcion: 'CAREERS.JOBS.SOFT.DESC',
      buscamos: [
        'CAREERS.JOBS.SOFT.REQ1',
        'CAREERS.JOBS.SOFT.REQ2',
        'CAREERS.JOBS.SOFT.REQ3',
        'CAREERS.JOBS.SOFT.REQ4'
      ]
    },
    {
      titulo: 'CAREERS.JOBS.ELEC.TITLE',
      ubicacion: 'CAREERS.JOBS.ELEC.LOC',
      descripcion: 'CAREERS.JOBS.ELEC.DESC',
      buscamos: [
        'CAREERS.JOBS.ELEC.REQ1',
        'CAREERS.JOBS.ELEC.REQ2',
        'CAREERS.JOBS.ELEC.REQ3',
        'CAREERS.JOBS.ELEC.REQ4'
      ]
    },
    {
      titulo: 'CAREERS.JOBS.INST.TITLE',
      ubicacion: 'CAREERS.JOBS.INST.LOC',
      descripcion: 'CAREERS.JOBS.INST.DESC',
      buscamos: [
        'CAREERS.JOBS.INST.REQ1',
        'CAREERS.JOBS.INST.REQ2',
        'CAREERS.JOBS.INST.REQ3',
        'CAREERS.JOBS.INST.REQ4'
      ]
    }
  ];

  openModal(job: any) {
    this.selectedJob = job;
    this.isModalOpen = true;
    if (typeof document !== 'undefined') document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    if (typeof document !== 'undefined') document.body.style.overflow = 'auto';
  }
}