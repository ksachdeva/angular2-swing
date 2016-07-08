declare var require: any;

import {Component, ContentChildren, QueryList,
  AfterContentInit, EventEmitter } from '@angular/core';

import { ThrowDirection, ThrowEvent, DragEvent, Stack, Card} from './swing';
import {SwingCardComponent} from './swing-card-component';

const Swing = require('swing');

@Component({
  selector: '[swing-stack]',
  template: `
    <ng-content></ng-content>
  `,
  outputs: [
    'throwout',
    'throwoutend',
    'throwoutleft',
    'throwoutright',
    'throwin',
    'throwinend',
    'dragstart',
    'dragmove',
    'dragend',
  ]
})
export class SwingStackComponent implements AfterContentInit {

  throwout: EventEmitter<ThrowEvent> = new EventEmitter();
  throwoutend: EventEmitter<ThrowEvent> = new EventEmitter();
  throwoutleft: EventEmitter<ThrowEvent> = new EventEmitter();
  throwoutright: EventEmitter<ThrowEvent> = new EventEmitter();
  throwin: EventEmitter<ThrowEvent> = new EventEmitter();
  throwinend: EventEmitter<ThrowEvent> = new EventEmitter();

  dragstart: EventEmitter<DragEvent> = new EventEmitter();
  dragmove: EventEmitter<DragEvent> = new EventEmitter();
  dragend: EventEmitter<DragEvent> = new EventEmitter();

  cards: SwingCardComponent[];
  stack: Stack;

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

    // Hook various events
    this.stack.on('throwout', $event => this.throwout.emit($event));
    this.stack.on('throwoutend', $event => this.throwoutend.emit($event));
    this.stack.on('throwoutleft', $event => this.throwoutleft.emit($event));
    this.stack.on('throwoutright', $event => this.throwoutright.emit($event));
    this.stack.on('throwin', $event => this.throwin.emit($event));
    this.stack.on('throwinend', $event => this.throwinend.emit($event));
    this.stack.on('dragstart', $event => this.dragstart.emit($event));
    this.stack.on('dragmove', $event => this.dragmove.emit($event));
    this.stack.on('dragend', $event => this.dragend.emit($event));
  }
}
