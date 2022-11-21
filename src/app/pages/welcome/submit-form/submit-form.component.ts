import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent implements OnInit {

  submitForm!:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createSubmitForm();
  }


  createSubmitForm(){
   this.submitForm = this.fb.group({
      name:['',[Validators.required]],
      city:['',[Validators.required]],
      address:['',[Validators.required]],
      emailAddress:['',[Validators.required]]
    })
  }

  submitFormData(){
    if(this.submitForm.valid){

    }else{
      Object.values(this.submitForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}
