import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
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

  constructor(private authService: AuthService,private router: Router) {}

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

  logout(): void {
    this.authService.logout();
    console.log('Logged out');
  }
  register() {
    //registration logic once we implement regestration form logic
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