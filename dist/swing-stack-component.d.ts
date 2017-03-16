import { AfterContentInit, EventEmitter } from '@angular/core';
import { ThrowEvent, DragEvent, Stack, StackConfig } from './swing';
import { SwingCardComponent } from './swing-card-component';
export declare class SwingStackComponent implements AfterContentInit {
    stackConfig: StackConfig;
    throwout: EventEmitter<ThrowEvent>;
    throwoutend: EventEmitter<ThrowEvent>;
    throwoutleft: EventEmitter<ThrowEvent>;
    throwoutright: EventEmitter<ThrowEvent>;
    throwoutup: EventEmitter<ThrowEvent>;
    throwoutdown: EventEmitter<ThrowEvent>;
    throwin: EventEmitter<ThrowEvent>;
    throwinend: EventEmitter<ThrowEvent>;
    dragstart: EventEmitter<DragEvent>;
    dragmove: EventEmitter<DragEvent>;
    dragend: EventEmitter<DragEvent>;
    cards: SwingCardComponent[];
    stack: Stack;
    constructor();
    addCard(card: SwingCardComponent): void;
    ngAfterContentInit(): void;
}
