import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  //need to model users
  fullName?: string;
  email?: string;
  password?: string;

  constructor(private router: Router) {}

  register() {
    // registration code here
    console.log(`Registering with Full Name: ${this.fullName}, Email: ${this.email}, Password: ${this.password}`);
  }

  goToLogin() {
    // Nav to the login
    this.router.navigate(['/login']);
  }
}