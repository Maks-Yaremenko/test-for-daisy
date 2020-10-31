import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { SharedModule } from '@shared/shared.module';

// Components
import { AppComponent } from './app.component';
import { PageRuleFormComponent } from './components/page-rule-form/page-rule-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, PageRuleFormComponent],
  imports: [BrowserModule, SharedModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
