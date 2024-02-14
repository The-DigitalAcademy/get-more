import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SignupInterface } from 'src/app/pages/interface/signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  userData?: SignupInterface;

  Users: any 
  router: any;
  


  constructor(private http: HttpClient) { }

  SignupFn(firstName: string, lastName: string, email: string, password: string): Observable<any> {  
    const body = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
      
    };
    
    return this.http.post<any>('http://localhost:5000/api/signup' ,this.SignupFn );
  }

  saveToStorage(user: SignupInterface) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUserData() {
    if (localStorage.getItem('user')) {
      this.userData = JSON.parse(localStorage.getItem('user') || '');
    }
    return this.userData;
  }

  signin() {
    localStorage.clear();
    this.router.navigate(['/signin']);
  }

}
