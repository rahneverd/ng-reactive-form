import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registrationForm = new FormGroup({
    userName: new FormControl('Owais'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    addressFields: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl('')
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
