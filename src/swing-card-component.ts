import {Component, ElementRef, Host} from '@angular/core';
import {SwingStackComponent} from './swing-stack-component';
import {Card} from './swing';

@Component({
  selector: '[swing-card]',
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

  getCard(): Card {
    return this.swingStack.stack.getCard(this.getNativeElement());
  }
}
