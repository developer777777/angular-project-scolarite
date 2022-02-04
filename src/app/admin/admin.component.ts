import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') === null|| localStorage.getItem('token') === "undefined"){
      this.router.navigate(['login'])
    }
    if(localStorage.getItem('role') != "admin" || localStorage.getItem('role') === "undefined"){
      this.router.navigate(['login'])
    }
  }

}
