import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CevapekleComponent } from './cevapekle.component';

describe('CevapekleComponent', () => {
  let component: CevapekleComponent;
  let fixture: ComponentFixture<CevapekleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CevapekleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CevapekleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
