import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-edit-classe',
  templateUrl: './modal-edit-classe.component.html',
  styleUrls: ['./modal-edit-classe.component.scss']
})
export class ModalEditClasseComponent implements OnInit {
  @Input() public filieres:any
  @Input() public classe:any
  @Output() private passEntry = new EventEmitter<any>()
  constructor(public activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }
  update(){
    this.passEntry.emit(this.classe)
    this.activeModal.close()
  }
}
