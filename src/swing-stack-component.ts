declare var require: any;

import {Component, View, ContentChildren, QueryList, AfterContentInit } from 'angular2/core';
import {SwingCardComponent} from './swing-card-component';

const Swing = require('swing');

@Component({
  selector: '[swing-stack]'
})
@View({
  template: `
    <ng-content></ng-content>
  `
})
export class SwingStackComponent implements AfterContentInit {

  cards: SwingCardComponent[];
  stack: any;

  constructor() {
    this.cards = [];
  }

  addCard(card: SwingCardComponent) {
    this.cards.push(card);
    if (this.stack) {
      this.stack.createCard(card.getNativeElement());
    }
  }

  ngAfterContentInit() {
    this.stack = Swing.Stack({});
    this.cards.forEach((c) => this.stack.createCard(c.getNativeElement()));
  }
}
