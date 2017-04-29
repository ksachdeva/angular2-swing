// here the ambient definitions for the swing
// module are specified. Normally they should be at DefinitelyTyped
// or better with the repository
declare var require: any;
const Swing = require('swing');

export interface ThrowEvent {
  /**
   * The element being dragged.
   */
  target: HTMLElement;

  /**
   * The direction in which the element is being dragged: Card.DIRECTION_LEFT
   * or Card.DIRECTION_RIGHT
   */
  throwDirection: Direction;
}

export interface DragEvent {
  /**
   * The element being dragged.
   */
  target: HTMLElement;

  /**
   * Only available when the event is dragmove
   */
  throwOutConfidence?: number;
  /**
   * Only available when the event is dragmove
   */
  throwDirection?: Direction;
  /**
   * Only available when the event is dragmove
   */
  offset?: number;

}

export type ThrowEventName = 'throwin' | 'throwinend' |
  'throwout' | 'throwoutend' | 'throwoutleft' | 'throwoutup' | 'throwoutdown' | 'throwoutright';

export type DragEventName = 'dragstart' | 'dragmove' | 'dragend';

export interface Card {
  /**
   * Unbinds all Hammer.Manager events.
   * Removes the listeners from the physics simulation.
   *
   * @return {undefined}
   */
  destroy(): void;

  /**
   * Throws a card into the stack from an arbitrary position.
   *
   * @param {Number} fromX
   * @param {Number} fromY
   * @return {undefined}
   */
  throwIn(x: number, y: number): void;

  /**
   * Throws a card out of the stack in the direction away from the original offset.
   *
   * @param {Number} fromX
   * @param {Number} fromY
   * @return {undefined}
   */
  throwOut(x: number, y: number): void;

  on(eventName: ThrowEventName, callabck: (event: ThrowEvent) => void): void;
  on(eventName: DragEventName, callabck: (event: DragEvent) => void): void;
}

export interface Stack {

  /**
   * Creates an instance of Card and associates it with an element.
   *
   * @param {HTMLElement} element
   * @param {boolean} prepend
   * @return {Card}
   */
  createCard(elment: HTMLElement, prepend?: boolean): void;

  /**
   * Returns an instance of Card associated with an element.
   *
   * @param {HTMLElement} element
   * @return {Card|null}
   */
  getCard(element: HTMLElement): Card;

  on(eventName: ThrowEventName, callabck: (event: ThrowEvent) => void): void;
  on(eventName: DragEventName, callabck: (event: DragEvent) => void): void;
}

export interface StackConfig {

  minThrowOutDistance?: number;
  maxThrowOutDistance?: number;
  maxRotation?: number;
  allowedDirections?: Array<any>;

  /**
   * Determines if element is being thrown out of the stack.
   *
   * Element is considered to be thrown out when throwOutConfidence is equal to 1.
   *
   * @param {Number} offset Distance from the dragStart.
   * @param {HTMLElement} element Element.
   * @param {Number} throwOutConfidence config.throwOutConfidence
   * @return {Boolean}
   */
  isThrowOut?: (offset: number, element: HTMLElement, throwOutConfidence: number) => boolean;

  /**
   * Returns a value between 0 and 1 indicating the completeness of the throw out condition.
   *
   * Ration of the absolute distance from the original card position and element width.
   *
   * @param {Number} offsetX Distance from the dragStart.
   * @param {Number} offsetY Distance from the dragStart.
   * @param {HTMLElement} element Element.
   * @return {Number}
   */
  throwOutConfidence?: (offsetX: number, offsetY: number, element: HTMLElement) => number;

  /**
   * Calculates a distances at which the card is thrown out of the stack.
   *
   * @param {Number} min
   * @param {Number} max
   * @return {Number}
   */
  throwOutDistance?: (min: number, max: number) => number;

  /**
   * Calculates rotation based on the element x and y offset, element width and
   * maxRotation variables.
   *
   * @param {Number} x Horizontal offset from the startDrag.
   * @param {Number} y Vertical offset from the startDrag.
   * @param {HTMLElement} element Element.
   * @param {Number} maxRotation
   * @return {Number} Rotation angle expressed in degrees.
   */
  rotation?: (x: number, y: number, element: HTMLElement, maxRotation: number) => number;

  /**
   * Uses CSS transform to translate element position and rotation.
   *
   * Invoked in the event of `dragmove` and every time the physics solver is triggered.
   *
   * @param {HTMLElement} element
   * @param {Number} x Horizontal offset from the startDrag.
   * @param {Number} y Vertical offset from the startDrag.
   * @param {Number} r
   * @return {undefined}
   */
  transform?: (element: HTMLElement, x: number, y: number, r: number) => void;
}

export enum Direction {
  DOWN = Swing.Direction.DOWN,
  INVALID = Swing.Direction.INVALID,
  LEFT = Swing.Direction.LEFT,
  RIGHT = Swing.Direction.RIGHT,
  UP = Swing.Direction.UP
}
