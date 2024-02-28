import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form = this.fb.nonNullable.group({
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
    this.auth.login(this.form.getRawValue()).subscribe(
      (data: any) => {
        if (data.role === 'admin') {
          this.auth.setUserData(data);
          this.alertService.success(data.message);
          this.router.navigate(['/dash/admin']);
        } else {
          this.router.navigate(['/dash']);
        }
      },
      (error) => {
        this.alertService.error(error.error.message);
      }
    );
  }
}
