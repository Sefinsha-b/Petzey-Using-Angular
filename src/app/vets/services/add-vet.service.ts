import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddVetService {
  VetsForm:any;

  constructor(private http:HttpClient) { }

  Url:string = "http://localhost:3000";

  postVetsData(data:any){
    return this.http.post(this.Url+"/Vets", data);
  }
  GetVetsData(){
    return this.http.get(this.Url+"/Vets");
  }
}
