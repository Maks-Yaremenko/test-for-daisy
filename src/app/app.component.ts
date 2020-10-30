import { Component } from '@angular/core';
import { IAppCard } from '@shared/components/card/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public config: { [key: string]: IAppCard } = {
    wrapper: {
      title: 'Display Rules',
      headerUnderline: true,
    },
    exclusionRules: {
      title: 'Exclusion Rules',
      subtitle: 'Where would you like to display your campaign?',
    },
    inclusionRules: {
      title: 'Inclustion Rules',
      subtitle: 'Where would you like to display your campaign?',
    },
  };

  public addRule(type: 'exclusionRule' | 'inclusionRule') {
    console.log('hello => ', type);
  }
}
