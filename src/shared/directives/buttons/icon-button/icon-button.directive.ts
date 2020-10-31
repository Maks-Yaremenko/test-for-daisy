import { Directive, ElementRef } from '@angular/core';
import { AbstractButton } from '../abstract-button';
import { IconButtonStyleConfig } from './icon-button.types';

// I know that styling of a button could be done much much easier, I just wanted to play
// with styling via a directive. My goal was to create a directive that will behave like
// common angular-material one.

@Directive({
  selector: '[appIconButton]',
})
export class IconButtonDirective extends AbstractButton {
  constructor(element: ElementRef) {
    super(element, IconButtonStyleConfig);
  }
}
