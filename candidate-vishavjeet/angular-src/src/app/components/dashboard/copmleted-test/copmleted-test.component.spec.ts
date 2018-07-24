import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopmletedTestComponent } from './copmleted-test.component';

describe('CopmletedTestComponent', () => {
  let component: CopmletedTestComponent;
  let fixture: ComponentFixture<CopmletedTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopmletedTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopmletedTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
