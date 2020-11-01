import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

export interface AppCard {
  title?: string;
  subtitle?: string;
  headerUnderline?: boolean;
  actionsUnderline?: boolean;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements AppCard {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() headerUnderline: boolean;
  @Input() actionsUnderline: boolean;

  @Input() set config(config: AppCard) {
    Object.entries(config).forEach((i) => (this[i[0]] = i[1]));
  }
}
