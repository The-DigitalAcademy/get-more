import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  form = this.fb.nonNullable.group({
    image: ['', Validators.required],
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
    private productService: ProductService
  ) {}

onSubmit() {
  this.productService.addProductFunc(this.form.getRawValue()).subscribe(
    (res: any) => {
      this.alertService.success(res.message);
      setTimeout(() => {
        this.router.navigate(['/dash/admin']);
      }, 3000);
    },
    (error: any) => {
      this.alertService.error(error.error.message);
    }
  );
}
}





