import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarbleDiagramsComponent } from './marble-diagrams.component';

describe('MarbleDiagramsComponent', () => {
  let component: MarbleDiagramsComponent;
  let fixture: ComponentFixture<MarbleDiagramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarbleDiagramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarbleDiagramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
