import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwingStackComponent } from './swing-stack-component';
import { SwingCardComponent } from './swing-card-component';

@NgModule({
  imports: [CommonModule],
  declarations: [SwingStackComponent, SwingCardComponent],
  exports: [SwingCardComponent, SwingStackComponent]
})
export class SwingModule { }
