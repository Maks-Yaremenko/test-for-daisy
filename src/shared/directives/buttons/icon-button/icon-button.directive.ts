import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { AbstractButton } from '@shared/directives/buttons/abstract-button';

@Directive({
  selector: '[appIconButton]',
})
export class IconButtonDirective extends AbstractButton {
  constructor(renderer2: Renderer2, element: ElementRef) {
    super('app-icon-button', renderer2, element);
  }
}
