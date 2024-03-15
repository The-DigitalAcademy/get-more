import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ProductService } from 'src/app/services/product.service';
import { cart, product } from 'src/app/interfaces/cart-interface';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product: any | product;

  // productData: undefined | product;
  productQuantity: number = 1;
  removeCart = false;
  cartData: product | undefined;

  constructor(
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    // if (id) {
    //   this.productService.getSingleproduct(id).subscribe((data: any) => {
    //     this.product = data;
    //     console.log();
    //   });
    // }
    id &&
      this.productService.getSingleproduct(id).subscribe((result) => {
        this.product = result;
        // console.log(result)
        const cartData = localStorage.getItem('localCart');
        if (id && cartData) {
          let items = JSON.parse(cartData);
          items = items.filter(
            (item: product) => id === item.id.toString()
          );
          if (items.length) {
            this.removeCart = true;
          } else {
            this.removeCart = false;
          }
        }

        let user = localStorage.getItem('user');
        if (user) {
          let userId = user && JSON.parse(user).id;
          this.cartService.getCartList(userId);

          this.productService.cartData.subscribe((result) => {
            let item = result.filter(
              (item: product) =>
                id?.toString() === item.productId?.toString()
            );
            if (item.length) {
              this.cartData = item[0];
              this.removeCart = true;
            }
          });
        }
      });
  }
  handleQuantity(val: string) {
    if (this.productQuantity < 20 && val === 'plus') {
      this.productQuantity += 1;
    } else if (this.productQuantity > 1 && val === 'min') {
      this.productQuantity -= 1;
    }
  }

  addToCart() {
    if (this.product) {
      this.product.quantity = this.productQuantity;
      if (!localStorage.getItem('user')) {
        this.cartService.localAddToCart(this.product);
        this.removeCart = true;
      } else {
        let user = localStorage.getItem('user');
        let userId = user && JSON.parse(user).id;
        let cartData: cart = {
          ...this.product,
          productId: this.product.id,
          userId,
        };
        delete cartData.id;
        this.product.addToCart(cartData).subscribe((result: any) => {
          if (result) {
            // this.productService.getCartList(userId);
            this.removeCart = true;
          }
        });
      }
    }
  }
  removeToCart(productId: number) {
    if (!localStorage.getItem('user')) {
      this.cartService.removeItemFromCart(productId);
    } else {
      console.warn('cartData', this.cartData);

      this.cartData &&
        this.product.removeToCart(this.cartData.id).subscribe((result: any) => {
          let user = localStorage.getItem('user');
          let userId = user && JSON.parse(user).id;
          // this.productService.getCartList(userId);
        });
    }
    this.removeCart = false;
  }
}
