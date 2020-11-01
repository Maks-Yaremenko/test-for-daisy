import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core';
import { merge, Observable } from 'rxjs';
import { map, scan, startWith } from 'rxjs/operators';

import { AppCard } from '@shared/components/card/card.component';
import { PageRuleFormComponent } from './components/page-rule-form/page-rule-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('inclusionRules', { static: false })
  inclusionRulesComponent: PageRuleFormComponent;
  @ViewChild('exclusionRules', { static: false })
  exclusionRulesComponent: PageRuleFormComponent;

  public result: Observable<any>;
  public config: { [key: string]: AppCard } = {
    wrapper: {
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
  private init: boolean;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.formSubscriber();
  }

  private formSubscriber() {
    if (!this.init) {
      this.init = true;
      const inclusionForm = this.inclusionRulesComponent.form;
      const exclusionForm = this.exclusionRulesComponent.form;

      this.result = merge(
        inclusionForm.valueChanges.pipe(
          map((v: any) => ({ inclusionRules: v.rules }))
        ),
        exclusionForm.valueChanges.pipe(
          map((v: any) => ({ exclusionRules: v.rules }))
        )
      ).pipe(
        startWith({
          inclusionRules: inclusionForm.value.rules,
          exclusionRules: exclusionForm.value.rules,
        }),
        scan((acc, curr) => ({ ...acc, ...curr })),
        map(this.filterEmptyRules)
      );

      this.cd.detectChanges();
    }
  }

  private filterEmptyRules(result): any {
    return Object.entries(result).reduce((acc, curr: any) => {
      const [key, value] = curr;
      return value.length ? { ...acc, [key]: value } : acc;
    }, {});
  }
}
