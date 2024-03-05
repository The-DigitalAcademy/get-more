import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // Correcting 'observable' to 'Observable'
import { addproductInterface, addproductResponseInterface, allproductInterface, allproductResponseInterface } from 'src/app/interfaces/interfaces'; // Correcting 'addproductInterface' to 'AddproductInterface'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http: HttpClient) {}

  addProductFunc(products: addproductInterface): Observable<addproductResponseInterface> {
    // Fixing function parameters
    return this.http.post<addproductResponseInterface>(`${environment.SERVER_URL}/products/create`, products); 
    // Adding missing products parameter and fixing template literals
  }




  getAllProductsFunc( ): Observable<allproductResponseInterface> {
    return this.http.get<allproductResponseInterface>(`${environment.SERVER_URL}/products/all`);
  }




}
 



