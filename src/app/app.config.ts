import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { loadSlim } from 'tsparticles-slim';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes, withViewTransitions()),
  provideAnimationsAsync(),
    {
      provide: 'tsParticlesOptions',
      useValue: {
        init: loadSlim
      }
    }
]
};
