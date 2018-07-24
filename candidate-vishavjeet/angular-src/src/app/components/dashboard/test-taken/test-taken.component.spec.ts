import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTakenComponent } from './test-taken.component';

describe('TestTakenComponent', () => {
  let component: TestTakenComponent;
  let fixture: ComponentFixture<TestTakenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTakenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
