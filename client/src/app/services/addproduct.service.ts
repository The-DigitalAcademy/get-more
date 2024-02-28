import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // Correcting 'observable' to 'Observable'
import { addproductInterface } from 'src/interfaces'; // Correcting 'addproductInterface' to 'AddproductInterface'

@Injectable({
  providedIn: 'root'
})
export class AddproductService {
  Addproduct(arg0: { Image: string; name: string; price: string; description: string; category: string; quantity: string; }) {
    throw new Error('Method not implemented.');
  }
  private SERVER_URL = 'http://localhost:50000/api_server_url';

  constructor(private http: HttpClient) {}

  addProductFunc(products: addproductInterface): Observable<addproductInterface> { // Fixing function parameters
    return this.http.post<addproductInterface>(`${this['SERVER_URL']}/api/products/create`, products); // Adding missing products parameter and fixing template literals
  }
}