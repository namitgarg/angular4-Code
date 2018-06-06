import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutelearnComponent } from './routelearn.component';

describe('RoutelearnComponent', () => {
  let component: RoutelearnComponent;
  let fixture: ComponentFixture<RoutelearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutelearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutelearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
