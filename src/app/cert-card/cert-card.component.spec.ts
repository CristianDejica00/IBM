import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertCardComponent } from './cert-card.component';

describe('CertCardComponent', () => {
  let component: CertCardComponent;
  let fixture: ComponentFixture<CertCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
