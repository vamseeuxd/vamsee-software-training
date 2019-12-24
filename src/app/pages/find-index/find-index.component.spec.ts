import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindIndexComponent } from './find-index.component';

describe('FindIndexComponent', () => {
  let component: FindIndexComponent;
  let fixture: ComponentFixture<FindIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
