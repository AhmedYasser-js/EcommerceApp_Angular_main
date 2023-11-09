import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import { routingAnimation } from './animations/routing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routingAnimation]
})
export class AppComponent {
  title = 'ecommerce';

  // Define animation triggers for your routes, for example:
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}


export const routerTransition = trigger('routerTransition', [
  state('void', style({ position: 'fixed', width: '100%', height: '100%' })),
  state('*', style({ position: 'fixed', width: '100%', height: '100%' })),
  transition(':enter', [
    style({ transform: 'translateY(100%)' }),
    animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' })),
  ]),
  transition(':leave', [
    style({ transform: 'translateY(0%)' }),
    animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' })),
  ]),
]);

