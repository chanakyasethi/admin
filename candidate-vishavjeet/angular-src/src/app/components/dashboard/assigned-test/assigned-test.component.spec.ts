import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedTestComponent } from './assigned-test.component';

describe('AssignedTestComponent', () => {
  let component: AssignedTestComponent;
  let fixture: ComponentFixture<AssignedTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
