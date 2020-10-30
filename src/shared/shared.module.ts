import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CardComponent } from './components/card/card.component';

// Directives
import { StrokedButtonDirective } from '@shared/directives/buttons/stroked-button/stroked-button.directive';

@NgModule({
  declarations: [CardComponent, StrokedButtonDirective],
  imports: [CommonModule],
  exports: [CardComponent, StrokedButtonDirective],
})
export class SharedModule {}
