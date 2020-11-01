import { ElementRef, Input, Renderer2 } from '@angular/core';
import { ButtonColors } from './button.types';

export class AbstractButton {
  public baseClass: string;

  @Input() set color(color: ButtonColors) {
    const extraClass = `${this.baseClass}_${color}`;
    if (!this.element.nativeElement.classList.contains(extraClass)) {
      this.renderer.addClass(this.element.nativeElement, extraClass);
    }
  }

  constructor(
    baseClass: string,
    private renderer: Renderer2,
    private element: ElementRef
  ) {
    this.baseClass = baseClass;
    this.renderer.addClass(this.element.nativeElement, this.baseClass);
  }
}
