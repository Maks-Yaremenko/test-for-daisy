import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRuleFormComponent } from './page-rule-form.component';

describe('PageRuleFormComponent', () => {
  let component: PageRuleFormComponent;
  let fixture: ComponentFixture<PageRuleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRuleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRuleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
