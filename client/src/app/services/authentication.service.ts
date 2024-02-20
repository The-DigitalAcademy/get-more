import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import {
  LoginInterface,
  LoginResponseInterface,
  RegisterInterface,
  RegisterResponseInterface,
} from 'src/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  register(user: RegisterInterface): Observable<RegisterResponseInterface> {
    return this.http.post<RegisterResponseInterface>(
      `${environment.SERVER_URL}/users/register`,
      user
    );
  }

  login(user: LoginInterface): Observable<LoginResponseInterface> {
    return this.http.post<LoginResponseInterface>(
      `${environment.SERVER_URL}/users/login`,
      user
    );
  }
}
