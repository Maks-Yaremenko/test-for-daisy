import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Directives
import { StrokedButtonDirective } from '@shared/directives/buttons/stroked-button/stroked-button.directive';
import { IconButtonDirective } from './directives/buttons/icon-button/icon-button.directive';

// Components
import { CardComponent } from './components/card/card.component';
import { InputSelectComponent } from '@shared/components/input-select/input-select.component';
import { InputTextComponent } from '@shared/components/input-text/input-text.component';

const components = [
  CardComponent,
  StrokedButtonDirective,
  IconButtonDirective,
  InputSelectComponent,
  InputTextComponent,
];

@NgModule({
  declarations: components,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: components,
})
export class SharedModule {}
