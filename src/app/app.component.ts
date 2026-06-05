import { Component, inject } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { slideInAnimation } from './slideInRoute';
import { Engine } from '@tsparticles/engine';
import { NgxParticlesModule } from '@tsparticles/angular';
import { loadSlim } from '@tsparticles/slim';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NgxParticlesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [slideInAnimation]
})
export class AppComponent {
  context = inject(ChildrenOutletContexts);
  title = 'frLiftEnergy';

  public readonly snowConfig: any = {
    fullScreen: {
      enable: false,
    },
    particles: {
      number: {
        value: 250, // Baje un poco el número para probar rendimiento
        density: {
          enable: true,
          area: 700,
        }
      },
      color: { value: '#FFFFFF' }, // ROJO para probar
      shape: { type: 'circle' },
      opacity: { value: 0.8, random: true },
      size: { value: 5, random: true },
      move: {
        enable: true,
        speed: 3,
        direction: 'bottom',
        random: true,
        outModes: "out",
      },
      zIndex: { value: 1 },
    },
    detectRetina: true,
  };

  particlesInit = async (engine: Engine): Promise<void> => {
    console.log("Motor de partículas cargando..."); // Esto debe salir en consola
    await loadSlim(engine);
  };

  getRouteAnimationData(){
    return this.context.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
