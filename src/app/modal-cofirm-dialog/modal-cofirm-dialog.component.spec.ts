import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCofirmDialogComponent } from './modal-cofirm-dialog.component';

describe('ModalCofirmDialogComponent', () => {
  let component: ModalCofirmDialogComponent;
  let fixture: ComponentFixture<ModalCofirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCofirmDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCofirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
