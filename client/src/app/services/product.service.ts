import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // Correcting 'observable' to 'Observable'
import { environment } from 'src/environments/environment';
import { cart, order, product } from '../interfaces/cart-interface';
import { addproductInterface } from '../interfaces/product-interface';

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


}

