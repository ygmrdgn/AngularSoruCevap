import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SorularigorComponent } from './sorularigor.component';

describe('SorularigorComponent', () => {
  let component: SorularigorComponent;
  let fixture: ComponentFixture<SorularigorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorularigorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorularigorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
