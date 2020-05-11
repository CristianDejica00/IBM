import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReqModalComponent } from './edit-req-modal.component';

describe('EditReqModalComponent', () => {
  let component: EditReqModalComponent;
  let fixture: ComponentFixture<EditReqModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditReqModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReqModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
