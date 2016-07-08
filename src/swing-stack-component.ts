declare var require: any;

import {Component, ContentChildren, QueryList,
  AfterContentInit, EventEmitter } from '@angular/core';

import {SwingCardComponent} from './swing-card-component';

const Swing = require('swing');

export enum ThrowDirection {
  DIRECTION_LEFT = -1,
  DIRECTION_RIGHT = 1
}

export interface ThrowEvent {
  target: Element;
  throwDirection: ThrowDirection;
}

export interface DragEvent {
  target: Element;
}

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
