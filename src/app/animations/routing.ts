
import { style, trigger, state, transition, animate } from "@angular/animations";

export const routingAnimation = trigger('routing', [
  // state('void', style({ opacity: 0, transform: 'translateX(30px)' })),
  transition('*<=>*', [
    style({ opacity: 0, transform: 'translateY(100px)' }),
    animate('1s', style({ opacity: 1, transform: 'translateY(0px)' })),
  ])
]);
