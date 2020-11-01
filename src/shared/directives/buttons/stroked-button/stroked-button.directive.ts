import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { AbstractButton } from '../abstract-button';

@Directive({
  selector: '[appStrokedButton]',
})
export class StrokedButtonDirective extends AbstractButton {
  constructor(renderer2: Renderer2, element: ElementRef) {
    super('app-stroked-button', renderer2, element);
  }
}
