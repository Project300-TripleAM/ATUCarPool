import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  // Method to navigate to the dashboard route
  navigateToDashboard() {
    this.router.navigateByUrl('/dashboard');
  }
}
