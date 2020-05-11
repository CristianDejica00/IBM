import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCertModalComponent } from './edit-cert-modal.component';

describe('EditCertModalComponent', () => {
  let component: EditCertModalComponent;
  let fixture: ComponentFixture<EditCertModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCertModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCertModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
