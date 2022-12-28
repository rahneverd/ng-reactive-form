import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb: FormBuilder) {}

  // Form built without using FormBuilder
  // registrationForm = new FormGroup({
  //   userName: new FormControl('Owais'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   addressFields: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // })

  // Form built without using FormBuilder
  registrationForm = this.fb.group({
    userName: ['Owais', Validators.required],
    password: [''],
    confirmPassword: [''],
    addressFields: this.fb.group({
      city: ['', Validators.required],
      state: [''],
      postalCode: ['']

    })
  })


  setValue() {
    this.registrationForm.setValue({
      userName: 'Khan',
      password: '',
      confirmPassword: '',
      addressFields: {
        city: 'Rawalpindi',
        state: 'Rawalpindi',
        postalCode: '46000'
      }
    })
  }
  patchValue() {
    this.registrationForm.patchValue({
      userName: 'Karlal',
      addressFields: {
        city: 'Islamabad',
        postalCode: '44000'
      }
    })
  }
}
