import { LoginServicesService } from './../login-services.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalMessageComponent } from '../modal-message/modal-message.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public LoginServicesService:LoginServicesService,private modalService:NgbModal,private router:Router) { }

  ngOnInit(): void {
  }

  logon(value:any): void{
    this.LoginServicesService.authentification(value)
    .subscribe(data=>{
      console.log(data)
      this.LoginServicesService.saveToken(data)
      if(data.data.role[0].name==='admin'){
        this.router.navigate(['admin'])
      }else{
        this.router.navigate(['user'])
      }
    },
    err=>{
      console.log(err)
      this.loadModal('Authentification','Login or password incorrect !')
    });
  }
  loadModal(title:any,content:any){
    const modalRef = this.modalService.open(ModalMessageComponent)
    modalRef.componentInstance.title = title
    modalRef.componentInstance.content = content
  }

}
