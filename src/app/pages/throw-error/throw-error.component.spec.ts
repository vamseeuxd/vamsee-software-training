import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrowErrorComponent } from './throw-error.component';

describe('ThrowErrorComponent', () => {
  let component: ThrowErrorComponent;
  let fixture: ComponentFixture<ThrowErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThrowErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrowErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
