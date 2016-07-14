# angular2-swing

# Install
npm install angular2-swing --save

# Usage
```
import {Component, ViewChild, ViewChildren, QueryList} from '@angular/core';

import {
  Stack,
  Card,
  SwingEvent,
  StackConfig,
  SwingStackComponent,
  SwingCardComponent} from 'angular2-swing';

@Component({
  selector: 'app',
  directives: [SwingStackComponent, SwingCardComponent],
  template: `
    <div id="viewport">
      <ul class="stack" swing-stack [config]="stackConfig" #myswing1 (throwout)="onThrowOut($event)">
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
export class App {

  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

  cards: Array<any>;
  stackConfig: StackConfig;

  constructor() {
    this.stackConfig = {
        throwOutConfidence: (offset, element) => {
            //override default throwout detection with one twice as sensitive
            return Math.min(Math.abs( offset ) / (element.offsetWidth / 2), 1);
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
      (event: SwingEvent) => console.log('Manual hook: ', event));

    this.swingStack.dragstart.subscribe((event: SwingEvent) => console.log(event));
  }

  // This method is called by hooking up the event
  // on the HTML element - see the template above
  onThrowOut(event: ThrowEvent) {
    console.log('Hook from the template', event.throwDirection);
  }
}

```

See [angular2-swing-example](https://github.com/ksachdeva/angular2-swing-example) repository for the full example
