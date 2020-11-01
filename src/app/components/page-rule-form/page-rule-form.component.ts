import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { slideInOut } from '@shared/animations/slide-in-out';

@Component({
  animations: [slideInOut],
  selector: 'app-page-rule-form',
  templateUrl: './page-rule-form.component.html',
  styleUrls: ['./page-rule-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageRuleFormComponent implements OnInit {
  public conditions = ['Contains', 'Exact match'];
  public pages: string[] = [
    'All Pages',
    'Home Page',
    'Product Page',
    'Password Page',
    'Custom',
  ];
  public form: FormGroup = this.fb.group({ rules: this.fb.array([]) });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Initial rule (based on design)
    this.addRule();
  }

  get rules(): FormArray {
    return this.form.get('rules') as FormArray;
  }

  public addRule(): void {
    this.rules.push(
      this.fb.group({
        page: this.fb.control(
          this.getLastSelectedPageCustomOrNull(this.rules.value) ||
            this.pages[0]
        ),
        condition: this.fb.control(this.conditions[0]),
        url: this.fb.control('', Validators.required),
      })
    );
  }

  public removeRule(index: number): void {
    this.rules.removeAt(index);
  }

  private getLastSelectedPage(rules: any[]): string | null {
    return rules.length ? rules.pop().page : null;
  }

  private getLastSelectedPageCustomOrNull(rules: any[]): string | null {
    const page = this.getLastSelectedPage(rules);
    return page === 'Custom' ? page : null;
  }
}
