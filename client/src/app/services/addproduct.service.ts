import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // Correcting 'observable' to 'Observable'
import { addproductInterface, addproductResponseInterface } from 'src/app/interfaces/interfaces'; // Correcting 'addproductInterface' to 'AddproductInterface'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class AddproductService {

  constructor(private http: HttpClient) {}

  addProductFunc(
    products: addproductInterface
  ): Observable<addproductResponseInterface> {
    // Fixing function parameters
    return this.http.post<addproductResponseInterface>(
      `${environment.SERVER_URL}/products/create`,
      products
    ); // Adding missing products parameter and fixing template literals
  }
}


