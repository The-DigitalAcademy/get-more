import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form = this.fb.nonNullable.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.email],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private alertService: AlertService,
    private router: Router
  ) {}

  onSubmit() {
    this.auth.register(this.form.getRawValue()).subscribe(
      (res) => {
        this.alertService.success(res.message);
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000);
      },
      (error) =>
        {
          this.alertService.error(error.error.message)
        }
    );
  }
}
