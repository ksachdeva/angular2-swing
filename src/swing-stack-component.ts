declare var require: any;

import {Component, ContentChildren, QueryList,
  AfterContentInit, EventEmitter } from '@angular/core';
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
  throwout: EventEmitter<any> = new EventEmitter();
  throwoutend: EventEmitter<any> = new EventEmitter();
  throwoutleft: EventEmitter<any> = new EventEmitter();
  throwoutright: EventEmitter<any> = new EventEmitter();
  throwin: EventEmitter<any> = new EventEmitter();
  throwinend: EventEmitter<any> = new EventEmitter();
  dragstart: EventEmitter<any> = new EventEmitter();
  dragmove: EventEmitter<any> = new EventEmitter();
  dragend: EventEmitter<any> = new EventEmitter();

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

    this.stack.on('throwout', ($event) => {
      this.throwout.emit($event);
    });

    this.stack.on('throwoutend', ($event) => {
      this.throwoutend.emit($event);
    });

    this.stack.on('throwoutleft', ($event) => {
      this.throwoutleft.emit($event);
    });

    this.stack.on('throwoutright', ($event) => {
      this.throwoutright.emit($event);
    });

    this.stack.on('throwin', ($event) => {
      this.throwin.emit($event);
    });

    this.stack.on('throwinend', ($event) => {
      this.throwinend.emit($event);
    });

    this.stack.on('dragstart', ($event) => {
      this.dragstart.emit($event);
    });

    this.stack.on('dragmove', ($event) => {
      this.dragmove.emit($event);
    });

    this.stack.on('dragend', ($event) => {
      this.dragend.emit($event);
    });
  }
}
