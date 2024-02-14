// signup.component.ts

import { Component } from '@angular/core';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private signupService: SignupService) { }

  onSubmit(firstName: string, lastName: string, email: string, password: string): void {
    this.signupService.signup(firstName, lastName, email, password)
      .subscribe(
        (        response: any) => {
          console.log('Signup successful', response);
          // Handle successful signup, e.g., redirect to login page
        },
        (        error: any) => {
          console.error('Signup failed', error);
          // Handle signup error, e.g., display an error message to the user
        }
      );
  }
}
