import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-cofirm-dialog',
  templateUrl: './modal-cofirm-dialog.component.html',
  styleUrls: ['./modal-cofirm-dialog.component.scss']
})
export class ModalCofirmDialogComponent implements OnInit {
  @Input() public title:any
  @Input() public content:any
  @Output() public passEntry = new EventEmitter<any>()
  constructor(public activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }
  remove(){
    this.passEntry.emit()
    this.activeModal.close()
  }

}
