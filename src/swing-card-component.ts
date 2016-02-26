import {Component, View, ElementRef, Host} from 'angular2/core';
import {SwingStackComponent} from './swing-stack-component';

@Component({
  selector: '[swing-card]'
})
@View({
  template: `
    <ng-content></ng-content>
  `
})
export class SwingCardComponent {
  constructor(
    private elmentRef: ElementRef,
    private swingStack: SwingStackComponent) {
  }

  ngOnInit() {
    this.swingStack.addCard(this);
  }

  getElementRef() {
    return this.elmentRef;
  }

  getNativeElement() {
    return this.elmentRef.nativeElement;
  }
}
