import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
  form = this.fb.nonNullable.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.email],
    password: ['', Validators.required],
    role: ['']
    phonenumber: ['']
  });

  id: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private alertService: AlertService,
    private auth: AuthenticationService){}
 
 
 
    ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id') || '';

  }

  // firstname: string = '';
  // lastname: string = '';
  // email: string = '';
  // role: string = '';






  onSubmit() {
   
    let users = {
      firstname: this.form.value.firstname || '',
      lastname: this.form.value.lastname || '',
      email: this.form.value.email || '',
      password: this.form.value.password || '',
      phonenumber:this.form.value.phonenumber || '',
      role: this.form.value.role || 'customer'
    };

    this.auth.editProfile(this.id, users).subscribe(
      (res: any) => {
        this.alertService.success(res.message);
        // this.router.navigateByUrl('/dash/home', { replaceUrl: true });
      },
      (error) => {
        this.alertService.error(error.message + '  ' + error.error._message);
        console.log(error);
      }
    );
  }
}


