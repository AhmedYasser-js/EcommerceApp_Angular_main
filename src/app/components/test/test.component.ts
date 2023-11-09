import { BooleanInput } from '@angular/cdk/coercion';
import { Component, EventEmitter, Output } from '@angular/core';
import { toggleFade } from 'src/app/animations/toggle-fade';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  animations: [toggleFade]
})
export class TestComponent {
  toggleBadgeVisibility() {
    throw new Error('Method not implemented.');
  }
  display = false;
  toggleGroup: any;
  hidden: BooleanInput;


  onclick() {
    this.display = true;
  }


  // *ANCHOR - =================_
  isLogin: boolean;

  constructor() {
    this.isLogin = true;
  }







}
