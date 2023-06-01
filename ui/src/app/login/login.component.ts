import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginUser } from 'src/models/LoginUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username?: string;
  password?: string;

  constructor(private authService: AuthService, private router: Router) {}

  error?: string; 

  login() {
    this.error = undefined;

    if (this.username && this.password) {
      const loginUser: LoginUser = {
        username: this.username,
        password: this.password
      }

      this.authService.login(loginUser).subscribe(data => {
        localStorage.setItem('user', data.id.toString());
        localStorage.setItem('token', data.token.toString());
        this.router.navigateByUrl("/");
      }, (err) => {
        console.log(err.error);
        this.setErrorAlert(err.error);
      });

    }
  }

  setErrorAlert(error: string) {
    this.error = error;
  }
}
