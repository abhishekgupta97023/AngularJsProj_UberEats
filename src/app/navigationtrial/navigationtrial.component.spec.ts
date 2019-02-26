import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationtrialComponent } from './navigationtrial.component';

describe('NavigationtrialComponent', () => {
  let component: NavigationtrialComponent;
  let fixture: ComponentFixture<NavigationtrialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationtrialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationtrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
