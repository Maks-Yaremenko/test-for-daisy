import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';
import {
  StrokedButtonStyle,
  StrokedButtonStyles,
  StrokedButtonTypes,
} from './stroked-button.types';

// I know that styling of a button could be done much much easier, I just wanted to play
// with styling via a directive. My goal was to create a directive that will behave like
// common angular-material one.

@Directive({
  selector: '[appStrokedButton]',
})
export class StrokedButtonDirective {
  private style: StrokedButtonStyle;
  private readonly element: ElementRef;

  @Input() set color(type: StrokedButtonTypes) {
    if (StrokedButtonStyles[type]) {
      this.setStyle(this.element, StrokedButtonStyles[type]);
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
    if (event.target === this.element.nativeElement) {
      return this.setBackground(this.style.hover.backgroundColor);
    }
  }

  constructor(element: ElementRef) {
    this.element = element;
    this.setStyle(element, StrokedButtonStyles[StrokedButtonTypes.basic]);
  }

  private setBackground(background: string): void {
    this.element.nativeElement.style.backgroundColor = background;
  }

  private setStyle(element: ElementRef, style: StrokedButtonStyle): void {
    this.style = style;
    this.applyStyles(element, this.style);
  }

  private applyStyles(element: ElementRef, styles: StrokedButtonStyle): void {
    Object.entries(styles.main).forEach(
      (i) => (element.nativeElement.style[i[0]] = i[1])
    );
  }
}
