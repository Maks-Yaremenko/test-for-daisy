import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRuleComponent } from './page-rule.component';

describe('PageRuleComponent', () => {
  let component: PageRuleComponent;
  let fixture: ComponentFixture<PageRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
