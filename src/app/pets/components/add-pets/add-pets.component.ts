import { Component, OnInit } from '@angular/core';
import { AddPetsService } from '../../services/add-pets.service';

@Component({
  selector: 'app-add-pets',
  templateUrl: './add-pets.component.html',
  styleUrls: ['./add-pets.component.css']
})
export class AddPetsComponent implements OnInit {
  petsAppointments: any;

  constructor(private petsAddForm:AddPetsService) { }

  ngOnInit(): void {
    this.fetchAppointmentsData();
  }


  postpetsFormData(data :any) {
    console.warn(data);
    this.petsAddForm.PostPetsData(data).subscribe((result)=>{
    
    })
    }

    fetchAppointmentsData(){
      return this.petsAddForm.GetPetsData().subscribe((resp: any) => {
     this.petsAppointments = resp;
     })
   }


}
