import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

@Input() product!: {
  _id: string;
  image: string;
  price: number;
  name: string;
};

products: any;

constructor(
  private alertService: AlertService,
  private router: Router,
  private productService: ProductService
) {}

ngOnInit(): void {
  this.productService.getAllProductsFunc().subscribe((data: any) => {
    this.products = data;
  });
}

onView(id: any) {
  this.router.navigate(['/dash/single-product/' + id]);
}
}
