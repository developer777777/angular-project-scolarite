import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateClasseComponent } from './modal-create-classe.component';

describe('ModalCreateClasseComponent', () => {
  let component: ModalCreateClasseComponent;
  let fixture: ComponentFixture<ModalCreateClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateClasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
