import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss'],
})
export class AllProductComponent implements OnInit {
[x: string]: any;
  form = this.fb.nonNullable.group({
    image: ['', Validators.required],
    name: ['', Validators.required],
    price: ['', Validators.required],
    description: ['', Validators.required],
    category: ['', Validators.required],
    quantity: ['', Validators.required],
  });
 
  products: any;

  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productService.getAllProductsFunc().subscribe((data: any) => {
      this.products = data;
      console.log(this.products); 
    });
  }

  onSubmit() {
    this.productService.addProductFunc(this.form.getRawValue()).subscribe(
      (res) => {
        this.alertService.success(res.message);
        setTimeout(() => {
          this.router.navigate(['/dash/admin']);
        }, 3000);
      },
      (error) => {
        this.alertService.error(error.error.message);
      }
    );
  }
}
