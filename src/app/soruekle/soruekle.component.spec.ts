import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoruekleComponent } from './soruekle.component';

describe('SoruekleComponent', () => {
  let component: SoruekleComponent;
  let fixture: ComponentFixture<SoruekleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoruekleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoruekleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
