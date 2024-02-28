import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AddproductService } from 'src/app/services/addproduct.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  form = this.fb.nonNullable.group({
    Image: ['', Validators.required],
    name: ['', Validators.required],
    price: ['', Validators.required],
    description: ['', Validators.required],
    category: ['', Validators.required],
    quantity: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private router: Router,
    private product: AddproductService
  ) {}

onSubmit() {
  
  this.product.Addproduct(this.form.getRawValue()).subscribe()
    .then((res: { message: string; }) => {
      this.alertService.success(res.message);
      setTimeout(() => {
      }, 3000);
    },
    (error: { error: { message: string; }; }) =>
      {
        this.alertService.error(error.error.message)
      }
  );
}
}


