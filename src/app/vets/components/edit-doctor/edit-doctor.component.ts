import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddVetService } from '../../services/add-vet.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {
  addVetsForm = new FormGroup({
    Name: new FormControl(""),
    Speciality: new FormControl(""),
    Address: new FormControl("")


  })
  EditVets:any;

  ngOnInit(): void {
this.FetchVetsData();
  }
  constructor(private VetCons: AddVetService, private router: ActivatedRoute) { }
  get add() {
    return this.addVetsForm.controls;
  }

  // Fetchting Vets using getMethod
  FetchVetsData() {
    return this.VetCons.GetPutVet(this.router.snapshot.params['id']).subscribe((resp: any) => {
      this.addVetsForm = new FormGroup({
        Name: new FormControl(resp['Name']),
        Speciality: new FormControl(resp['Speciality']),
        Address: new FormControl(resp['Address'])
      })
    })
  }



  // Function for Put MEthod
  update() {
    this.VetCons.PutVet(this.router.snapshot.params['id'], this.addVetsForm.value).subscribe((resp: any) => {
      console.log(resp);
      alert("update successfully..!");
      // window.location.reload();
    })
  }
}






