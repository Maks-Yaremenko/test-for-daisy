import { Component } from '@angular/core';
import { IAppCard } from '@shared/components/card/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public pageCardConfig: IAppCard = {
    title: 'Inclustion Rules',
    subtitle: 'Where would you like to display your campaign?',
    headerUnderline: true,
    actionsUnderline: true,
  };
}
