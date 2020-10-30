import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageRuleComponent } from './components/page-rule/page-rule.component';
import { PageRuleFieldComponent } from './components/page-rule-field/page-rule-field.component';
import { PageRuleFormComponent } from './components/page-rule-form/page-rule-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PageRuleComponent,
    PageRuleFieldComponent,
    PageRuleFormComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
