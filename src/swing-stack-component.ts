declare var require: any;

import {Component, Input, ContentChildren, QueryList,
  AfterContentInit, EventEmitter } from '@angular/core';

import { Direction, ThrowEvent, DragEvent, Stack, Card, StackConfig } from './swing';
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
    'throwoutup',
    'throwoutdown',
    'throwin',
    'throwinend',
    'dragstart',
    'dragmove',
    'dragend',
  ]
})
export class SwingStackComponent implements AfterContentInit {

  @Input() stackConfig: StackConfig;

  throwout: EventEmitter<ThrowEvent> = new EventEmitter<ThrowEvent>();
  throwoutend: EventEmitter<ThrowEvent> = new EventEmitter<ThrowEvent>();
  throwoutleft: EventEmitter<ThrowEvent> = new EventEmitter<ThrowEvent>();
  throwoutright: EventEmitter<ThrowEvent> = new EventEmitter<ThrowEvent>();
  throwoutup: EventEmitter<ThrowEvent> = new EventEmitter<ThrowEvent>();
  throwoutdown: EventEmitter<ThrowEvent> = new EventEmitter<ThrowEvent>();
  throwin: EventEmitter<ThrowEvent> = new EventEmitter<ThrowEvent>();
  throwinend: EventEmitter<ThrowEvent> = new EventEmitter<ThrowEvent>();

  dragstart: EventEmitter<DragEvent> = new EventEmitter<DragEvent>();
  dragmove: EventEmitter<DragEvent> = new EventEmitter<DragEvent>();
  dragend: EventEmitter<DragEvent> = new EventEmitter<DragEvent>();

  cards: SwingCardComponent[];
  stack: Stack;

  constructor() {
    this.cards = [];
  }

  addCard(card: SwingCardComponent, prepend: boolean = false) {
    this.cards.push(card);
    if (this.stack) {
      this.stack.createCard(card.getNativeElement(), prepend);
    }
  }

  ngAfterContentInit() {
    this.stack = Swing.Stack(this.stackConfig || {});
    this.cards.forEach((c) => this.stack.createCard(c.getNativeElement(), c.prepend));

    // Hook various events
    this.stack.on('throwout', $event => this.throwout.emit($event));
    this.stack.on('throwoutend', $event => this.throwoutend.emit($event));
    this.stack.on('throwoutleft', $event => 
				  {this.throwoutleft.emit($event); 
				  	console.log($event);
				  }
				 );
    this.stack.on('throwoutright', $event => this.throwoutright.emit($event));
    this.stack.on('throwin', $event => this.throwin.emit($event));
    this.stack.on('throwinend', $event => this.throwinend.emit($event));
    this.stack.on('dragstart', $event => this.dragstart.emit($event));
    this.stack.on('dragmove', $event => this.dragmove.emit($event));
    this.stack.on('dragend', $event => this.dragend.emit($event));
    this.stack.on('throwoutup', $event => this.throwoutup.emit($event));
    this.stack.on('throwoutdown', $event => this.throwoutdown.emit($event));
  }
}
