import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { configs } from './shared/configs';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  constructor(public http:HttpClient) { }

  authentification(user:any){
    return this.http.post<any>(configs.url_local+'login',user)
  }
  saveToken(user:any){
    localStorage.setItem('username',user.data.name)
    localStorage.setItem('token',user.data.token)
    localStorage.setItem('role',user.data.role[0].name)
  }
}
