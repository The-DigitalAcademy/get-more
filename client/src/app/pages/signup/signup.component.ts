import { Component } from '@angular/core';

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

  // Method to handle form submission
  onSubmit(): void {
    // Perform actions with the form data, such as sending it to a server
    console.log('First Name:', this.firstName);
    console.log('Last Name:', this.lastName);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Additional logic can be added here
  }
}