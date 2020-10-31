import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
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
    'Produc Page',
    'Password Page',
    'Custom',
  ];

  private form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      rules: this.fb.array([
        this.fb.group({
          page: this.fb.control(this.pages[0]),
          condition: new FormControl(this.conditions[0]),
          url: this.fb.control('', Validators.required),
        }),
      ]),
    });
  }

  get rules(): FormArray {
    return this.form.get('rules') as FormArray;
  }

  public addRule(): void {
    this.rules.push(
      this.fb.group({
        page: this.fb.control(this.pages[0]),
        condition: this.fb.control(this.conditions[0]),
        url: this.fb.control('', Validators.required),
      })
    );
  }

  public removeRule(index: number): void {
    this.rules.removeAt(index);
  }
}
