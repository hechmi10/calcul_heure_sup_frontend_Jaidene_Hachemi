import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeureSups } from '../../models/HeureSups';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeureSupsService {

  constructor(private http:HttpClient) { }

  apiUrl:string="http://localhost:8082/heure-sup";

  saveHeureSup(hs:HeureSups):Observable<HeureSups>{
    return this.http.post<HeureSups>(this.apiUrl+"/add-heure-sup",hs);
  }

  getAllHeureSup():Observable<HeureSups[]>{
    return this.http.get<HeureSups[]>(this.apiUrl+"/get-all-heures-sup");
  }

  updateHeureSup(id:number,hs:HeureSups):Observable<HeureSups>{
    return this.http.put<HeureSups>(this.apiUrl+"/update-heure-sup/"+id,hs);
  }

  deleteHeureSup(id:number):Observable<HeureSups>{
    return this.http.delete<HeureSups>(this.apiUrl+"/update-heure-sup/"+id);
  }

  getHeureSup(id:number):Observable<HeureSups>{
    return this.http.get<HeureSups>(this.apiUrl+"/get-heure-sup/"+id)
  }

}
