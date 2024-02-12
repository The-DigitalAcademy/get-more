import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
   {

}
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form with validation rules
    this.signupForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Function to handle form submission
  onSubmit() {
    if (this.signupForm.valid) {
      // Send the form data to your backend or handle it as needed
      console.log('Form submitted:', this.signupForm.value);
    } else {
      // Form is not valid, show error messages or handle it accordingly
      console.log('Form not valid. Please check your inputs.');
    }
  }
}