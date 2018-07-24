/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavstartComponent } from './navstart.component';

describe('NavstartComponent', () => {
  let component: NavstartComponent;
  let fixture: ComponentFixture<NavstartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavstartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
