import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username!: string;
  password!: string;
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.authService.login(this.username, this.password)) {
      // Redirect to the dashboard

      console.log('Login successful');
      this.router.navigate(['/dashboard']);
    } else {
      // Display error message
      this.errorMessage = 'Invalid username or password';
      console.log('Login failed');
    }
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
}
