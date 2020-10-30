import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRuleFieldComponent } from './page-rule-field.component';

describe('PageRuleFieldComponent', () => {
  let component: PageRuleFieldComponent;
  let fixture: ComponentFixture<PageRuleFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRuleFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRuleFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
