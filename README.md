# angular2-swing

# Install
npm install angular2-swing --save

# Usage
```javascript
import {Component} from '@angular/core';

import {SwingStackComponent, SwingCardComponent} from 'angular2-swing';

@Component({
  selector: 'app',
  directives: [SwingStackComponent, SwingCardComponent],
  template: `
    <div id="viewport">
      <ul class="stack" swing-stack>
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

  cards: Array<any>;

  constructor() {

    console.log('in the ctor');

    this.cards = [
      { name: 'clubs', symbol: '♣' },
      { name: 'diamonds', symbol: '♦' },
      { name: 'spades', symbol: '♠' }
    ];
  }
}
```

See [angular2-swing-example](https://github.com/ksachdeva/angular2-swing-example) repository for the full example
