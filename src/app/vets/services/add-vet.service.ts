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



  // FOR EDIT METHOD
  GetPutapiVet(id:any){
    return this.http.get(`${this.Url + '/Vets'}/${id}`);
    }
    PutApiVet(id:any ,data:any){
    return this.http.put(`${this.Url + '/Vets'}/${id}`,data);
    }
    
}
