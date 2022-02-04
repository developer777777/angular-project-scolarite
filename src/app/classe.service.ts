import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { configs } from './shared/configs';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  constructor(private http:HttpClient) { }

  allClasses(){
    return this.http.get<any>(configs.url_local+'classes')
  }
  allFileres(){
    return this.http.get<any>(configs.url_local+'filieres')
  }
  addClasse(classe:any){
    return this.http.post<any>(configs.url_local+'classes',classe)
  }
  updateClasse(classe:any){
    return this.http.put<any>(configs.url_local+'classes/'+classe.id,classe)
  }
  deleteClasse(id:any){
    return this.http.delete<any>(configs.url_local+'classes/'+id)
  }
}
