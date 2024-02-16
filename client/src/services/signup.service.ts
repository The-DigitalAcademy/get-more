import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SignupInterface } from 'src/app/interface/signup';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  userData?: SignupInterface;

  Users: any 

  


  constructor(private http: HttpClient, private router: Router) { }

  SignupFn(): Observable<any> {  
    return this.http.post<any>('http://localhost:60200/api/signup' ,this.SignupFn );
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
