import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeOnComponent } from './subscribe-on.component';

describe('SubscribeOnComponent', () => {
  let component: SubscribeOnComponent;
  let fixture: ComponentFixture<SubscribeOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeOnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
