import { trigger, transition, query, style, animate } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* => *', [
    query(':enter',
      [
        style({
          position: 'relative',
          opacity: 0,
          transform: 'translateX(50px)' // Empieza 50px a la derecha
        }),
        animate('400ms ease-out', style({
          opacity: 1,
          transform: 'translateX(0)' // Termina en su posición original
        }))
      ],
      { optional: true }
    )
  ])
]);
