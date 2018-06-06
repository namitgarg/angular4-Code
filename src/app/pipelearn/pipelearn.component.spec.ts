import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelearnComponent } from './pipelearn.component';

describe('PipelearnComponent', () => {
  let component: PipelearnComponent;
  let fixture: ComponentFixture<PipelearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipelearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
