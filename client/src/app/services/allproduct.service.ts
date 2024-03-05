import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { allproductInterface, allproductResponseInterface } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class AllproductService {

  constructor(private http: HttpClient) {}

  addProductFunc( products: allproductInterface ): Observable<allproductResponseInterface> {
    return this.http.post<allproductResponseInterface>(`${environment.SERVER_URL}/products/all`, products);
  }
}
 

