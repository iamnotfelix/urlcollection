import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginUser } from 'src/models/LoginUser';
import { User } from 'src/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:5285/api';

  constructor(private http: HttpClient, private router: Router) {}

  login(loginUser: LoginUser): Observable<User> {
      return this.http.post(`${this.baseUrl}/users`, loginUser) as Observable<User>;
  }

  logout() {
      localStorage.removeItem('user');
      this.router.navigateByUrl("/login");
  }

  isLoggedIn() {
    return localStorage.getItem('user');
  }

  getUser(): Observable<number> {
    return parseInt(localStorage.getItem("user")!) as unknown as Observable<number>
  }
}
