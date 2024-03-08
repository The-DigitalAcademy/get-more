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

 
  products: any;

  constructor(
    private alertService: AlertService,
    private router: Router,
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.productService.getAllProductsFunc().subscribe((data: any) => {
      this.products = data;
      console.log(this.products); 
     });
  }


  onView(id:any) {
    this.router.navigate(['/dash/single-product/'+id]); 
  }



}
