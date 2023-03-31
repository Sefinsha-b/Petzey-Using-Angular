import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VetsRoutingModule } from './vets-routing.module';
import { FormsModule } from '@angular/forms';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';


@NgModule({
  declarations: [
    //  AddDoctorComponent

  ],
  imports: [
    CommonModule,
    VetsRoutingModule,
    FormsModule
  ]
})
export class VetsModule { }
