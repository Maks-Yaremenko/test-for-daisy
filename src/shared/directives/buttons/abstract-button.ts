import { ElementRef, HostListener, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

import {
  ButtonStyle,
  ButtonStyleConfig,
  ButtonColors,
} from '@shared/directives/buttons/button.types';

// I know that styling of a button could be done much much easier, I just wanted to play
// with styling via a directive. My goal was to create a directive that will behave like
// common angular-material one.

export class AbstractButton {
  private style: ButtonStyle;
  private readonly config: ButtonStyleConfig;
  private readonly element: ElementRef;

  @Input() set color(color: ButtonColors) {
    if (this.config[color]) {
      this.setStyle(this.element, this.config[color]);
    }
  }
  @Output() clicked = new Subject();

  @HostListener('click')
  click() {
    this.clicked.next();
  }

  @HostListener('mouseenter')
  mouseenter() {
    this.setBackground(this.style.hover.backgroundColor);
  }

  @HostListener('mouseout')
  mouseout() {
    this.setBackground(this.style.main.backgroundColor);
  }

  @HostListener('mousedown')
  mousedown() {
    this.setBackground(this.style.active.backgroundColor);
  }

  @HostListener('mouseup', ['$event'])
  mouseup(event) {
    if (event.currentTarget === this.element.nativeElement) {
      return this.setBackground(this.style.hover.backgroundColor);
    }
  }

  constructor(element: ElementRef, config: ButtonStyleConfig) {
    this.element = element;
    this.config = config;
    this.setStyle(element, this.config[ButtonColors.basic]);
  }

  private setBackground(background: string): void {
    this.element.nativeElement.style.backgroundColor = background;
  }

  private setStyle(element: ElementRef, style: ButtonStyle): void {
    this.style = style;
    this.applyStyles(element, this.style);
  }

  private applyStyles(element: ElementRef, styles: ButtonStyle): void {
    Object.entries(styles.main).forEach(
      (i) => (element.nativeElement.style[i[0]] = i[1])
    );
  }
}
