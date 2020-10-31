import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CardComponent } from './components/card/card.component';

// Directives
import { StrokedButtonDirective } from '@shared/directives/buttons/stroked-button/stroked-button.directive';
import { IconButtonDirective } from './directives/buttons/icon-button/icon-button.directive';

@NgModule({
  declarations: [CardComponent, StrokedButtonDirective, IconButtonDirective],
  imports: [CommonModule],
  exports: [CardComponent, StrokedButtonDirective, IconButtonDirective],
})
export class SharedModule {}
