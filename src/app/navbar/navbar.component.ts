import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false; // Add this property to track login status

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.checkLoginStatus(); // Check login status on component initialization
  }

  checkLoginStatus() {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  toggleSidenav() {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }

  login() {
    if (this.authService.login(this.username, this.password)) {
      console.log('Login successful');
      this.checkLoginStatus(); // Update login status
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Login failed');
    }
  }

  logout() {
    this.authService.logout();
    this.checkLoginStatus(); // Update login status
    this.router.navigate(['/login']);
  }
  register() {
    // Registration logic once we implement registration form logic
    console.log('Redirecting to registration page');
  }
}

  