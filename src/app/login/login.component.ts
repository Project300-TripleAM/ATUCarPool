// login.component.ts

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.disableLoginButton();
  }

  login(username: string, password: string): void {
    this.authService.login(username, password)
      .then(() => {
        console.log('Login successful');
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        console.error('Login failed:', error);
      });
  }

  register() {
    console.log('Redirecting to registration page');
    this.router.navigate(['/registration']);
  }

  clearFields() {
    // Clears username and password field only if details are invalid
    this.username = '';
    this.password = '';
    this.errorMessage = '';
  }

  areLoginFieldsValid(): boolean {
    // Check if both username and password are truthy values
    return !!this.username && !!this.password;
  }
  
  private disableLoginButton(): void {
    // Disable the "Login" button if login fields are not valid
    if (!this.areLoginFieldsValid()) {
      const loginButton = document.querySelector('#loginButton') as HTMLButtonElement | null;
      if (loginButton) {
        loginButton.disabled = true;
      }
    }
  }
}
