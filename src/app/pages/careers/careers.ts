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
      titulo: 'Software Engineer',
      ubicacion: 'Remoto / Híbrido',
      descripcion: 'Buscamos ingenieros con visión disruptiva para escalar nuestra plataforma de monitoreo inteligente. Tu misión será optimizar el flujo de datos desde el campo petrolero hasta la interfaz de usuario.',
      buscamos: [
        'Dominio sólido de frameworks modernos (Angular/TypeScript).',
        'Experiencia en visualización de datos en tiempo real.',
        'Compromiso con la escritura de código limpio y escalable.',
        'Capacidad de autogestión en entornos de alta tecnología.'
      ]
    },
    {
      titulo: 'Ingeniero Electrónico',
      ubicacion: 'Campo / Oficina Maracaibo',
      descripcion: 'Responsable del ciclo de vida del hardware de telemetría. Buscamos a alguien capaz de integrar sistemas de comunicación industrial en condiciones exigentes.',
      buscamos: [
        'Experiencia en diseño y mantenimiento de hardware industrial.',
        'Manejo de protocolos Modbus, MQTT y redes de sensores.',
        'Habilidad para diagnóstico de fallas en sitio y remoto.',
        'Conocimiento en sistemas de alimentación solar y baterías.'
      ]
    },
    {
      titulo: 'Técnico Instrumentista',
      ubicacion: 'Operaciones de Campo',
      descripcion: 'Perfil clave para asegurar que los sensores en pozo transmitan información precisa. Serás el guardián de la precisión de los datos de producción.',
      buscamos: [
        'Calibración y montaje de instrumentos de presión y nivel.',
        'Cumplimiento estricto de normativas de seguridad industrial.',
        'Experiencia previa en servicios a pozos petroleros.',
        'Actitud proactiva para el trabajo en equipos multidisciplinarios.'
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