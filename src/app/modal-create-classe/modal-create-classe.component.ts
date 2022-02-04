import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-create-classe',
  templateUrl: './modal-create-classe.component.html',
  styleUrls: ['./modal-create-classe.component.scss']
})
export class ModalCreateClasseComponent implements OnInit {
  @Input() public filieres:any
  @Output() private passEntry = new EventEmitter<any>()
  constructor(public activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }
  save(data:any){
    this.passEntry.emit(data)   
    this.activeModal.close()
  }
}
