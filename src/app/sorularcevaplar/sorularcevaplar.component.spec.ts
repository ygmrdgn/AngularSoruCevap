import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SorularcevaplarComponent } from './sorularcevaplar.component';

describe('SorularcevaplarComponent', () => {
  let component: SorularcevaplarComponent;
  let fixture: ComponentFixture<SorularcevaplarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorularcevaplarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorularcevaplarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
