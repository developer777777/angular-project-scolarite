import { Component, OnInit } from '@angular/core';
import { ClasseService } from '../classe.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalCreateClasseComponent } from './../modal-create-classe/modal-create-classe.component';
import { ModalEditClasseComponent } from './../modal-edit-classe/modal-edit-classe.component';
import { ModalCofirmDialogComponent } from '../modal-cofirm-dialog/modal-cofirm-dialog.component';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.scss']
})
export class ClasseComponent implements OnInit {
  classes:any
  filieres:any
  constructor(private classeService:ClasseService,public modalService:NgbModal) { }

  ngOnInit(): void {
    this.classeService.allClasses().subscribe(data=>{
      console.log(data)
      this.classes = data.data
    })
    this.classeService.allFileres().subscribe(data=>{
      this.filieres = data.data
    })
  }
  addClasse():void{
    const modalRef = this.modalService.open(ModalCreateClasseComponent)
      modalRef.componentInstance.filieres = this.filieres
      modalRef.componentInstance.passEntry.subscribe((data:any) =>{
        this.classeService.addClasse(data).subscribe((data:any)=>{
          this.classes.push(data.data)
          console.log(data)
      })
    })
  }
  editClasse(classe:any):void{
    const modalRef = this.modalService.open(ModalEditClasseComponent)
      modalRef.componentInstance.filieres = this.filieres
      modalRef.componentInstance.classe = classe
      modalRef.componentInstance.passEntry.subscribe((data:any) =>{
        this.classeService.updateClasse(data).subscribe((data:any)=>{
          console.log(data)
      })
    })
  }
  deleteClasse(classe:any):void{
    const modalRef = this.modalService.open(ModalCofirmDialogComponent)
      modalRef.componentInstance.title = "Suppression d'une classe"
      modalRef.componentInstance.content = "Etes-vous sur de vouloir supprimer la classe "+classe.libelle+" ?"
      modalRef.componentInstance.passEntry.subscribe(() =>{
        this.classeService.deleteClasse(classe.id).subscribe((data:any)=>{
          const pos = this.classes.indexOf(classe)
          this.classes.splice(pos,1)
      })
    })
  }
}
