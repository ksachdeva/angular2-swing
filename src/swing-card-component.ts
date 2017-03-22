import {Component, ElementRef, Host, Input} from '@angular/core';
import {SwingStackComponent} from './swing-stack-component';
import {Card} from './swing';

@Component({
  selector: '[swing-card]',
  template: `
    <ng-content></ng-content>
  `
})
export class SwingCardComponent {
  @Input() prepend: boolean = false;

  constructor(
    private elmentRef: ElementRef,
    private swingStack: SwingStackComponent) {
  }

  ngOnInit() {
    this.swingStack.addCard(this, this.prepend);
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
