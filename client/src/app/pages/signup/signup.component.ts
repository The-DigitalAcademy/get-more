import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/services/signup.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  // Properties to bind to form fields
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';

  form = this.fb.nonNullable.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private signupService: SignupService,
  ) {}

  // Method to handle form submission
  onSubmit(): void {
    

  }
}