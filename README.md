# angular2-swing

# Build package

`npm run build`

dont forget `typings install`

# Install
npm install angular2-swing --save

# Usage
```JavaScript
import {Component, ViewChild, ViewChildren, QueryList} from '@angular/core';

import {
  StackConfig,
  Stack,
  Card,
  ThrowEvent,
  DragEvent,
  SwingStackComponent,
  SwingCardComponent} from 'angular2-swing';

@Component({
  selector: 'app',
  template: `
    <div id="viewport">
      <ul class="stack" swing-stack  [stackConfig]="stackConfig"  #myswing1 (throwout)="onThrowOut($event)">
        <li swing-card #mycards1 [ngClass]="c.name" *ngFor="let c of cards">{{ c.symbol }}</li>
      </ul>
    </div>
    <div id="source">
        <p>Drag the playing cards out of the stack and let go. Dragging them
          beyond the desk will throw them out of the stack. If you drag too
          little and let go, the cards will spring back into place. You can
          throw cards back into the stack after you have thrown them out.</p>
        <p>Open the <a href="https://developer.chrome.com/devtools/docs/console">
          Console</a> to view the associated events.<p>
        <p>Demonstration of <a href="https://github.com/ksachdeva/angular2-swing">
          https://github.com/ksachdeva/angular2-swing</a> implementation.</p>
    </div>

  `
})
export class AppComponent {

  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

  cards: Array<any>;
  stackConfig: StackConfig;

  constructor() {

    this.stackConfig = {
      // Default setting only allows UP, LEFT and RIGHT so you can override this as below
      allowedDirections: [Direction.UP, Direction.DOWN, Direction.LEFT, Direction.RIGHT],
      // Now need to send offsetX and offsetY with element instead of just offset
      throwOutConfidence: (offsetX, offsetY, element) => {
        return Math.min(Math.max(Math.abs(offsetX) / (element.offsetWidth / 1.7), Math.abs(offsetY) / (element.offsetHeight / 2)), 1);
      },
      throwOutDistance: (d) => {
        return 800;
      }
    }

    this.cards = [
      { name: 'clubs', symbol: '♣' },
      { name: 'diamonds', symbol: '♦' },
      { name: 'spades', symbol: '♠' }
    ];
  }

  ngAfterViewInit() {
    // ViewChild & ViewChildren are only available
    // in this function

    console.log(this.swingStack); // this is the stack
    console.log(this.swingCards); // this is a list of cards

    // we can get the underlying stack
    // which has methods - createCard, destroyCard, getCard etc
    console.log(this.swingStack.stack);

    // and the cards
    // every card has methods - destroy, throwIn, throwOut etc
    this.swingCards.forEach((c) => console.log(c.getCard()));

    // this is how you can manually hook up to the
    // events instead of providing the event method in the template
    this.swingStack.throwoutleft.subscribe(
      (event: ThrowEvent) => console.log('Manual hook: ', event));

    this.swingStack.dragstart.subscribe((event: DragEvent) => console.log(event));

    this.swingStack.dragmove.subscribe((event: DragEvent) => console.log(event));
  }

  // This method is called by hooking up the event
  // on the HTML element - see the template above
  onThrowOut(event: ThrowEvent) {
    console.log('Hook from the template', event.throwDirection);
  }
}

```

See [angular2-swing-example](https://github.com/ksachdeva/angular2-swing-example) repository for the full example
