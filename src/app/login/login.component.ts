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

  constructor(private authService: AuthService,private router: Router) {}

  login() {
    if (this.authService.login(this.username, this.password)) {

      // Redirect to the dashboard
      console.log('Login successful');
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Login failed');
    }
  }

  register() {
    //registration logic once we implement regestration form logic
    console.log('Redirecting to registration page');
  }
}