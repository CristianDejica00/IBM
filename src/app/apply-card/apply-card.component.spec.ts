import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyCardComponent } from './apply-card.component';

describe('ApplyCardComponent', () => {
  let component: ApplyCardComponent;
  let fixture: ComponentFixture<ApplyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
