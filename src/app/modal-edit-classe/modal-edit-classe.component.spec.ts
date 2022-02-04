import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditClasseComponent } from './modal-edit-classe.component';

describe('ModalEditClasseComponent', () => {
  let component: ModalEditClasseComponent;
  let fixture: ComponentFixture<ModalEditClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditClasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
