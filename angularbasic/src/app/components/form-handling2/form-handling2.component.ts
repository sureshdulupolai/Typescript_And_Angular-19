import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

export function commonPassword(){
  
}


@Component({
  selector: 'app-form-handling2',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './form-handling2.component.html',
  styleUrl: './form-handling2.component.css'
})
export class FormHandling2Component {

  form !: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]], // give undefine in every its okay
      email: ['', [Validators.email, Validators.required]],
      age: [undefined, [Validators.min(1), Validators.max(60), Validators.required]]
    })
  }

  onSubmit(){
    // console.log("Successfull Submitted!", this.form);

    console.log('Done=> ',this.form.get('email'));
  }
}
