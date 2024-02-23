import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import {
  LoginInterface,
  LoginResponseInterface,
  RegisterInterface,
  RegisterResponseInterface,
} from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  user: LoginResponseInterface | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  // register function
  register(user: RegisterInterface): Observable<RegisterResponseInterface> {
    return this.http.post<RegisterResponseInterface>(
      `${environment.SERVER_URL}/users/register`,
      user
    );
  }

  // login function
  login(user: LoginInterface): Observable<LoginResponseInterface> {
    return this.http.post<LoginResponseInterface>(
      `${environment.SERVER_URL}/users/login`,
      user
    );
  }

  // save user data to local storage
  setUserData(data: LoginResponseInterface) {
    this.user = data;
    localStorage.setItem('user', JSON.stringify(data));
  }


  // remove user data from local storage
  logout() {
    localStorage.clear();
    this.user = null;
    this.router.navigate(['']);
  }
}
