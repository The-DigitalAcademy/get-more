import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  LoginInterface,
  LoginResponseInterface,
  RegisterInterface,
  RegisterResponseInterface,
  UserInterface,
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



    // get user data from local storage
    getUserData() {
      if (localStorage.getItem('user')) {
        this.user = JSON.parse(localStorage.getItem('user') || '');
      }
      return this.user;
    }



  //edit profile
  editProfile(id: string, user: UserInterface): Observable<any> {
    return this.http.put(`${environment.SERVER_URL}/users/edit/${id}`, user);
  }
}
