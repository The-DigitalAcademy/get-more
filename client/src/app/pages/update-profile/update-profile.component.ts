import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss'],
})
export class UpdateProfileComponent implements OnInit {
  form = this.fb.nonNullable.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.email],
    password: [''],
    role: [''],
    contactnumber: [''],
    alternativenumber: [''],
    streetaddress: [''],
    suburb: [''],
    city: [''],
    postalcode: [''],
    province: [''],
  });

  id: any;
  user: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private alertService: AlertService,
    private auth: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    // console.log(this.user);
  }

  onSubmit() {
    let users = {
      firstname: this.form.value.firstname || '',
      lastname: this.form.value.lastname || '',
      email: this.form.value.email || '',
      contactnumber: this.form.value.contactnumber || '',
      role: this.form.value.role || 'customer',
      alternativenumber: this.form.value.alternativenumber || '',
      streetaddress: this.form.value.streetaddress || '',
      suburb: this.form.value.suburb || '',
      city: this.form.value.city || '',
      postalcode: this.form.value.postalcode || '',
      province: this.form.value.province || '',
    };

    this.auth.editProfile(this.id, users).subscribe(
      (data: any) => {
        this.auth.setUserData(data);

        this.alertService.success(data.message);
        this.router.navigateByUrl('/dash/profile', { replaceUrl: true });
      },
      (error) => {
        this.alertService.error(error.message + '  ' + error.error._message);
        console.log(error);
      }
    );
  }
}
