import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { AddVetService } from '../../services/add-vet.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  DataVets:any;
 
  constructor(private VetsData:AddVetService) { }

  ngOnInit(): void {
    this.fetchVetsData();
  }
PostVetsFormData(data:NgForm){
   this.VetsData.postVetsData(data).subscribe((resp) =>{
    console.log(resp);
  });
}
fetchVetsData(){
  return this.VetsData.GetVetsData().subscribe((resp: any) => {
 this.DataVets = resp;
 })
}

}
