import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // Correcting 'observable' to 'Observable'
import { environment } from 'src/environments/environment';
import { addproductInterface, cart, order, product } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  cartData = new EventEmitter<product[] | []>();
  
  constructor(private http: HttpClient) {}

  // get all products
  getAllProductsFunc( ): Observable<any> {
    return this.http.get<any>(`${environment.SERVER_URL}/products/all`);
  }


  // add a product
  addProductFunc(products: addproductInterface): Observable<any> {
    return this.http.post<any>(`${environment.SERVER_URL}/products/create`, products);
  }

  
  // get single product
  getSingleproduct(id: string): Observable<any> {
    return this.http.get<any>(`${environment.SERVER_URL}/products/single/${id}`);
  }


  //cart 

  
  // addProduct(data: product) {
  //   return this.http.post(`${environment.SERVER_URL}/products`, data);
  // }
  // productList() {
  //   return this.http.get<product[]>(`${environment.SERVER_URL}/products`);
  // }

  // deleteProduct(id: number) {
  //   return this.http.delete(`${environment.SERVER_URL}/products/${id}`);
  // }

  getProduct(id: string) {
    return this.http.get<product>(`${environment.SERVER_URL}/products/single/${id}`);
  }

  updateProduct(product: product) {
    return this.http.put<product>(
      `${environment.SERVER_URL}/products/${product.id}`,
      product
    );
  }

  localAddToCart(data: product) {
    const cartData = [];
    const localCart = localStorage.getItem('localCart');
    if (!localCart) {
      localStorage.setItem('localCart', JSON.stringify([data]));
      this.cartData.emit([data]);
    } else {
      this.cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart', JSON.stringify(cartData));
      this.cartData.emit(cartData);
    }
  }

  removeItemFromCart(productId: number) {
    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      let items: product[] = JSON.parse(cartData);
      items = items.filter((item: product) => productId !== item.id);
      localStorage.setItem('localCart', JSON.stringify(items));
      this.cartData.emit(items);
    }
  }

  // addToCart(cartData: cart) {
  //   return this.http.post('http://localhost:3000/cart', cartData);
  
  // }
  getCartList(userId: number) {
    return this.http
      .get<product[]>(`${environment.SERVER_URL}/cart?userId=` + userId, {
        observe: 'response',
      })
      .subscribe((result) => {
        if (result && result.body) {
          this.cartData.emit(result.body);
        }
      });
  }
  // removeToCart(cartId: number) {
  //   return this.http.delete(`${environment.SERVER_URL}/cart/` + cartId);
  // }
  // currentCart() {
  //   let userStore = localStorage.getItem('user');
  //   let userData = userStore && JSON.parse(userStore);
  //   return this.http.get<cart[]>(`${environment.SERVER_URL}/cart?userId=` + userData.id);
  // }

  // orderNow(data: order) {
  //   return this.http.post(`${environment.SERVER_URL}/orders`, data);
  // }
  // orderList() {
  //   let userStore = localStorage.getItem('user');
  //   let userData = userStore && JSON.parse(userStore);
  //   return this.http.get<order[]>(`${environment.SERVER_URL}/orders?userId=` + userData.id);
  // }

  // deleteCartItems(cartId: number) {
  //   return this.http.delete(`${environment.SERVER_URL}/cart/` + cartId).subscribe((result) => {
  //     this.cartData.emit([]);
  //   })
  // }

  // cancelOrder(orderId:number){
  //   return this.http.delete(`${environment.SERVER_URL}/orders/`+orderId)

  // }

}

