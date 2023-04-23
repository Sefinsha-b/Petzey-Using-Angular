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
  editForm = new FormGroup({
    FirstName: new FormControl("")
  })
  AddVetService: any;
  doctors: any;
  DAta: any;

  ngOnInit(): void {
    this.updateVetsData();

  }

  constructor(private Edit: AddVetService, private router: ActivatedRoute) { }
  get add() {
    return this.editForm.controls;
  }
  fetchGEtData() {
    return this.Edit.GetVetsData().subscribe((resp) => {
      this.DAta = resp;
    })
  }

  updateVetsData() {
    return this.Edit.GetPutapiVet(this.router.snapshot.params['id']).subscribe((resp: any) => {
      this.editForm = new FormGroup({
        FirstName: new FormControl(resp['FirstName'])
      })
    })
  }
  update() {
    return this.Edit.PutApiVet(this.router.snapshot.params['id'],
      this.editForm.value).subscribe((resp) => {
        console.log(resp);
        alert("Update Successfully...!");
        window.location.reload();
      });
  }
}







