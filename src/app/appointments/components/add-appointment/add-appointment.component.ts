import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddAppiontmentService } from '../../services/add-appiontment.service';


@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {
usersForm: any;

  DataAppointments: any;
 
  constructor(private addAppointments: AddAppiontmentService){
   
  }


  ngOnInit(): void {

    // Fetch / Load data
    // Validation Logic
   this.fetchAppointmentsData();
  
  }

  fetchAppointmentsData(){
       return this.addAppointments.GetAppointmentData().subscribe((resp: any) => {
      this.DataAppointments = resp;
      })
    }

    postUserFormData(data :any) {
      console.warn(data);
      this.addAppointments.PostAppointmentData(data).subscribe((result)=>{
      
      })

     
      }



  // Logic for the submit
 
}



