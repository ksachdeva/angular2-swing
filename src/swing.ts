// here the ambient definitions for the swing
// module are specified. Normally they should be at DefinitelyTyped
// or better with the repository

export enum ThrowDirection {
  LEFT = -1,
  RIGHT = 1
}

export interface ThrowEvent {
  target: HTMLElement;
  throwDirection: ThrowDirection;
}

export interface DragEvent {
  target: HTMLElement;
}

export type ThrowEventName = 'throwin' | 'throwinend' |
  'throwout' | 'throwoutend' | 'throwoutleft' | 'throwoutright';

export type DragEventName = 'dragstart' | 'dragmove' | 'dragend';

export interface Card {
  destroy(): void;
  throwIn(x: number, y: number): void;
  throwOut(x: number, y: number): void;

  on(eventName: ThrowEventName, callabck: (event: ThrowEvent) => void): void;
  on(eventName: DragEventName, callabck: (event: DragEvent) => void): void;
}

export interface Stack {
  createCard(elment: HTMLElement): void;
  getCard(element: HTMLElement): Card;

  on(eventName: ThrowEventName, callabck: (event: ThrowEvent) => void): void;
  on(eventName: DragEventName, callabck: (event: DragEvent) => void): void;
}
