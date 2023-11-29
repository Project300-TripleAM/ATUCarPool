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
  loginError = false;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.loginError = false; // Reset login error status

    if (this.authService.login(this.username, this.password)) {
      // Redirect to the dashboard
      console.log('Login successful');
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Login failed');
      this.loginError = true; // Set login error status
    }
  }

  register() {
    // Registration logic once we implement registration form logic
    console.log('Redirecting to registration page');
    this.router.navigate(['/register']);
  }
}
