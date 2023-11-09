// import { style, trigger, state, transition, animate } from "@angular/animations";

// export const toggleFade = trigger('fade', [
//   state('login', style({ opacity: 1, backgroundColor:'#f11' })),
//   transition('login <=> logout', animate(500)),
//   state('logout', style({ opacity: 0 }))
// ]);


import { style, trigger, state, transition, animate } from "@angular/animations";

export const toggleFade = trigger('fade', [
  // state('void', style({ opacity: 0, transform: 'translateX(30px)' })),
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(50px)' }),
    animate('500ms', style({ opacity: 1, transform: 'translateX(0px)' })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('500ms', style({ opacity: 0, transform: 'translateY(50px)' })),
  ]),
]);
