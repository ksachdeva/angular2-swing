# angular2-swing

# Install
npm install angular2-swing --save

# Usage
```
import {Component, ViewChild} from '@angular/core';

import {SwingStackComponent, SwingCardComponent} from 'angular2-swing';

@Component({
  selector: 'app',
  directives: [SwingStackComponent, SwingCardComponent],
  template: `
    <div id="viewport">
      <ul class="stack" swing-stack #myswing1 (throwout)="onThrowOut($event)">
        <li swing-card [ngClass]="c.name" *ngFor="let c of cards">{{ c.symbol }}</li>
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

  cards: Array<any>;

  constructor() {

    this.cards = [
      { name: 'clubs', symbol: '♣' },
      { name: 'diamonds', symbol: '♦' },
      { name: 'spades', symbol: '♠' }
    ];
  }

  ngOnInit() {
    // the swingStack will be set in ngOnInit and
    // is not available in the ctor so we will hook up
    // the events from here

    // this is how you can manually hook up to the
    // events instead of providing the event method in the template
    this.swingStack.throwoutleft.subscribe((event: any) => console.log('Manual hook: ', event));
  }

  // This method is called by hooking up the event
  // on the HTML element - see the template above
  onThrowOut($event: any) {
    console.log('Hook from the template', $event);
  }
}
```

See [angular2-swing-example](https://github.com/ksachdeva/angular2-swing-example) repository for the full example
